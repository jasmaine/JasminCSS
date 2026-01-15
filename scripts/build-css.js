#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function buildCSS() {
  console.log('🌸 Building JasminCSS library...\n');

  const { compileCSS } = await import('../src/core/compiler.js');
  const { defaultConfig } = await import('../src/config/defaults.js');

  const distDir = path.join(rootDir, 'dist');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const startTime = Date.now();

  // Build full CSS
  const { css, minified, stats } = await compileCSS(defaultConfig, {
    includeAll: true,
    minify: true
  });

  fs.writeFileSync(path.join(distDir, 'jasmin.css'), css);
  fs.writeFileSync(path.join(distDir, 'jasmin.min.css'), minified);

  const elapsed = Date.now() - startTime;
  const cssSize = (css.length / 1024).toFixed(1);
  const minSize = (minified.length / 1024).toFixed(1);

  console.log(`  ✓ jasmin.css (${cssSize} KB)`);
  console.log(`  ✓ jasmin.min.css (${minSize} KB)`);
  console.log(`\n  ${stats.utilities} utilities, ${stats.components} components`);
  console.log(`\n✨ Built in ${elapsed}ms\n`);
}

buildCSS().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
