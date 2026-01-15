// JasminCSS Next.js Plugin
import path from 'path';
import fs from 'fs';

/**
 * JasminCSS plugin for Next.js
 *
 * @param {Object} pluginOptions
 * @param {string} pluginOptions.configPath - Path to jasmin.config.js
 * @param {boolean} pluginOptions.optimizeFonts - Optimize Google Fonts loading
 *
 * @example
 * // next.config.js
 * const withJasminCSS = require('jasmincss/plugin/nextjs');
 *
 * module.exports = withJasminCSS({
 *   configPath: './jasmin.config.js',
 *   optimizeFonts: true
 * })({
 *   // your Next.js config
 * });
 */
export default function withJasminCSS(pluginOptions = {}) {
  const {
    configPath = './jasmin.config.js',
    optimizeFonts = true
  } = pluginOptions;

  return (nextConfig = {}) => {
    return {
      ...nextConfig,

      // Enable CSS optimization
      experimental: {
        ...nextConfig.experimental,
        optimizeCss: true
      },

      // Optimize fonts if enabled
      ...(optimizeFonts && {
        optimizeFonts: true
      }),

      webpack(config, options) {
        const { dev, isServer } = options;

        // Add JasminCSS loader for .jasmin.css files
        config.module.rules.push({
          test: /\.jasmin\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    ['cssnano', { preset: 'default' }]
                  ]
                }
              }
            }
          ]
        });

        // Run user's webpack config if provided
        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options);
        }

        return config;
      }
    };
  };
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
