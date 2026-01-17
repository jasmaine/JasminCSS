// JasminCSS Webpack Loader for JIT compilation (CommonJS for webpack compatibility)
const path = require('path');

// Cache for compiled CSS
const cssCache = new Map();

module.exports = async function jasminLoader(source) {
  const callback = this.async();
  const options = this.getOptions() || {};
  const { dev = false, projectDir = process.cwd() } = options;

  try {
    // Dynamic import for ESM modules
    const { scanForUsedClasses, compileCSS } = await import('../core/compiler.js');
    const { loadConfig, resolveConfig } = await import('../config/loader.js');
    const { defaultConfig } = await import('../config/defaults.js');

    // Try to load user's config, fall back to defaults
    let config = defaultConfig;
    const configPath = path.join(projectDir, 'jasmin.config.js');

    // Use file URL for ESM import
    const fileUrl = 'file://' + configPath;
    const cacheBuster = `?t=${Date.now()}`;

    try {
      const userConfig = await import(fileUrl + cacheBuster);
      config = userConfig.default || userConfig;
    } catch (e) {
      // Use default config if no user config found
    }

    const resolvedConfig = resolveConfig(config);

    // Content patterns to scan
    const contentPatterns = config.content || [
      './src/**/*.{js,jsx,ts,tsx,vue,svelte,astro}',
      './app/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './*.{html,js,jsx,ts,tsx}'
    ];

    // Create cache key based on config and patterns
    const cacheKey = JSON.stringify({ config: resolvedConfig, patterns: contentPatterns });

    // In development, always recompile. In production, use cache.
    if (!dev && cssCache.has(cacheKey)) {
      callback(null, cssCache.get(cacheKey));
      return;
    }

    // Scan for used classes
    const usedClasses = await scanForUsedClasses(projectDir, contentPatterns);

    // Compile CSS with only used classes
    const { css, minified } = await compileCSS(resolvedConfig, {
      usedClasses,
      minify: !dev,
      includeAll: false
    });

    const result = dev ? css : (minified || css);

    // Cache the result
    cssCache.set(cacheKey, result);

    callback(null, result);
  } catch (error) {
    callback(error);
  }
};
