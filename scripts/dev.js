#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function buildCSS() {
  const { compileCSS } = await import('../src/core/compiler.js');
  const { defaultConfig } = await import('../src/config/defaults.js');

  const distDir = path.join(rootDir, 'dist');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const startTime = Date.now();

  const { css, stats } = await compileCSS(defaultConfig, {
    includeAll: true,
    minify: false
  });

  fs.writeFileSync(path.join(distDir, 'jasmin.css'), css);

  const elapsed = Date.now() - startTime;
  const cssSize = (css.length / 1024).toFixed(1);

  console.log(`[${new Date().toLocaleTimeString()}] Built jasmin.css (${cssSize} KB) in ${elapsed}ms`);
}

async function dev() {
  console.log('🌸 JasminCSS Development Mode\n');

  // Initial build
  await buildCSS();

  // Watch for changes
  const watcher = chokidar.watch([
    path.join(rootDir, 'src/**/*.js'),
    path.join(rootDir, 'src/**/*.css')
  ], {
    ignored: /node_modules/,
    persistent: true
  });

  let debounceTimer;
  const debouncedBuild = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      try {
        // Clear module cache for hot reload
        const cacheKeys = Object.keys(await import.meta.resolve('../src/core/compiler.js'));

        await buildCSS();
      } catch (err) {
        console.error('Build error:', err.message);
      }
    }, 100);
  };

  watcher.on('change', (filePath) => {
    console.log(`File changed: ${path.relative(rootDir, filePath)}`);
    debouncedBuild();
  });

  console.log('\nWatching for changes... (Press Ctrl+C to stop)\n');

  process.on('SIGINT', () => {
    console.log('\n\nStopping dev server...');
    watcher.close();
    process.exit(0);
  });
}

dev().catch(err => {
  console.error('Dev server error:', err);
  process.exit(1);
});
