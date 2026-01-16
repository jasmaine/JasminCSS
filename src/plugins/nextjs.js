// JasminCSS Next.js Plugin with JIT compilation
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { scanForUsedClasses, compileCSS } from '../core/compiler.js';
import { loadConfig, resolveConfig } from '../config/loader.js';
import { defaultConfig } from '../config/defaults.js';

// Get __dirname for ESM
let currentDir;
try {
  currentDir = path.dirname(fileURLToPath(import.meta.url));
} catch {
  // Fallback for CJS - esbuild will inject __dirname
  currentDir = typeof __dirname !== 'undefined' ? __dirname : process.cwd();
}

/**
 * JasminCSS plugin for Next.js with JIT compilation
 *
 * Automatically scans your source files and generates only the CSS you use.
 *
 * @example
 * // next.config.js
 * import withJasminCSS from 'jasmincss/plugins/next';
 *
 * export default withJasminCSS({
 *   // your Next.js config
 * });
 */
export default function withJasminCSS(nextConfig = {}) {
  return {
    ...nextConfig,

    webpack(config, options) {
      const { dev, isServer, dir } = options;

      // Find the rule that handles CSS
      const cssRule = config.module.rules.find(
        rule => rule.oneOf && Array.isArray(rule.oneOf)
      );

      if (cssRule) {
        // Add a rule to intercept jasmincss imports and replace with JIT-compiled CSS
        cssRule.oneOf.unshift({
          test: /node_modules[\\/]jasmincss[\\/]dist[\\/]jasmin(\.min)?\.css$/,
          use: [
            // Use the default CSS loaders from Next.js
            ...getDefaultCssLoaders(cssRule, isServer),
            {
              // Our custom JIT loader
              loader: path.resolve(currentDir, 'jasmin-loader.js'),
              options: {
                dev,
                projectDir: dir
              }
            }
          ]
        });
      }

      // Run user's webpack config if provided
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  };
}

/**
 * Extract default CSS loaders from Next.js config
 */
function getDefaultCssLoaders(cssRule, isServer) {
  // Find a CSS rule to copy loaders from
  const globalCssRule = cssRule.oneOf.find(
    rule => rule.test && rule.test.toString().includes('\\.css')
  );

  if (globalCssRule && globalCssRule.use) {
    // Filter out css-loader's modules option if present
    return Array.isArray(globalCssRule.use)
      ? globalCssRule.use.filter(loader => {
          if (typeof loader === 'string') return true;
          // Skip source file loaders, we provide our own source
          if (loader.loader && loader.loader.includes('source-map-loader')) return false;
          return true;
        })
      : [globalCssRule.use];
  }

  // Fallback: return empty array (Next.js will handle CSS)
  return [];
}

/**
 * Get JasminCSS config for App Router
 * Useful for server components
 */
export async function getJasminConfig(configPath = './jasmin.config.js') {
  const { loadConfig } = await import('../config/loader.js');
  const absolutePath = path.resolve(process.cwd(), configPath);
  return loadConfig(absolutePath);
}

/**
 * Compile JasminCSS for a specific page/component
 * Useful for generating critical CSS
 */
export async function compileForPage(usedClasses, configPath = './jasmin.config.js') {
  const { compileCSS } = await import('../core/compiler.js');
  const config = await getJasminConfig(configPath);

  const { minified } = await compileCSS(config, {
    usedClasses: new Set(usedClasses),
    minify: true,
    includeAll: false
  });

  return minified;
}
