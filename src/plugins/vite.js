// JasminCSS Vite Plugin
import path from 'path';
import fs from 'fs';

/**
 * JasminCSS plugin for Vite
 *
 * @param {Object} options
 * @param {string} options.configPath - Path to jasmin.config.js
 * @param {boolean} options.devMode - Include full library in development
 * @param {string[]} options.content - Files to scan for class usage
 *
 * @example
 * // vite.config.js
 * import { defineConfig } from 'vite';
 * import jasmin from 'jasmincss/plugin/vite';
 *
 * export default defineConfig({
 *   plugins: [
 *     jasmin({
 *       configPath: './jasmin.config.js'
 *     })
 *   ]
 * });
 */
export default function jasminVitePlugin(options = {}) {
  const {
    configPath = './jasmin.config.js',
    devMode = true,
    content = ['./src/**/*.{vue,js,ts,jsx,tsx,svelte}', './index.html']
  } = options;

  let config;
  let generatedCSS = '';
  const virtualModuleId = 'virtual:jasmin.css';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'jasmin-css',

    async configResolved(resolvedConfig) {
      const isDev = resolvedConfig.command === 'serve';

      try {
        const { loadConfig } = await import('../config/loader.js');
        const absolutePath = path.resolve(resolvedConfig.root, configPath);

        if (fs.existsSync(absolutePath)) {
          config = await loadConfig(absolutePath);
        } else {
          const { defaultConfig } = await import('../config/defaults.js');
          config = defaultConfig;
        }

        // Override content patterns
        config.content = content;

        // Generate CSS
        const { compileCSS, scanForUsedClasses } = await import('../core/compiler.js');

        if (isDev && devMode) {
          // In dev mode, include full library for faster HMR
          const result = await compileCSS(config, {
            includeAll: true,
            minify: false
          });
          generatedCSS = result.css;
        } else {
          // In production, tree-shake based on usage
          const usedClasses = await scanForUsedClasses(resolvedConfig.root, content);
          const result = await compileCSS(config, {
            usedClasses,
            minify: !isDev,
            includeAll: false
          });
          generatedCSS = isDev ? result.css : result.minified;
        }
      } catch (err) {
        console.warn('[jasmin] Could not load config:', err.message);
        // Fall back to default
        const { compileCSS } = await import('../core/compiler.js');
        const { defaultConfig } = await import('../config/defaults.js');
        const result = await compileCSS(defaultConfig, { includeAll: true, minify: false });
        generatedCSS = result.css;
      }
    },

    resolveId(id) {
      if (id === virtualModuleId || id === 'jasmincss/css') {
        return resolvedVirtualModuleId;
      }
    },

    load(id) {
      if (id === resolvedVirtualModuleId) {
        return generatedCSS;
      }
    },

    handleHotUpdate({ file, server }) {
      // Reload CSS when config changes
      if (file.endsWith('jasmin.config.js')) {
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    }
  };
}

/**
 * PostCSS plugin for JasminCSS
 * Use when you need PostCSS integration
 */
export function jasminPostCSS(options = {}) {
  return {
    postcssPlugin: 'jasmin-css',
    async Once(root, { result }) {
      const { compileCSS } = await import('../core/compiler.js');
      const { defaultConfig } = await import('../config/defaults.js');

      const { css } = await compileCSS({ ...defaultConfig, ...options }, {
        includeAll: true,
        minify: false
      });

      root.append(css);
    }
  };
}

jasminPostCSS.postcss = true;
