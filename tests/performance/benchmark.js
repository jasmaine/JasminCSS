#!/usr/bin/env node

/**
 * JasminCSS Performance Benchmark Tool
 * Measures CSS bundle size, parse time, and load performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const zlib = require('zlib');

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function formatTime(ms) {
  if (ms < 1) return `${(ms * 1000).toFixed(2)} μs`;
  if (ms < 1000) return `${ms.toFixed(2)} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
}

/**
 * Measure CSS file sizes
 */
function measureFileSizes() {
  log('\n📦 CSS Bundle Sizes', 'bold');
  log('─'.repeat(50), 'dim');

  const files = [
    { name: 'Full CSS', path: 'dist/jasmin.css' },
    { name: 'Minified CSS', path: 'dist/jasmin.min.css' },
  ];

  const results = [];

  for (const file of files) {
    const filePath = path.join(process.cwd(), file.path);

    if (!fs.existsSync(filePath)) {
      log(`  ⚠ ${file.name}: File not found`, 'yellow');
      continue;
    }

    const content = fs.readFileSync(filePath);
    const raw = content.length;
    const gzipped = zlib.gzipSync(content).length;
    const brotli = zlib.brotliCompressSync(content).length;

    results.push({
      name: file.name,
      raw,
      gzipped,
      brotli,
    });

    log(`  ${file.name}:`);
    log(`    Raw:     ${formatBytes(raw)}`, 'blue');
    log(`    Gzipped: ${formatBytes(gzipped)} (${((gzipped / raw) * 100).toFixed(1)}%)`, 'green');
    log(`    Brotli:  ${formatBytes(brotli)} (${((brotli / raw) * 100).toFixed(1)}%)`, 'green');
  }

  return results;
}

/**
 * Count CSS rules and selectors
 */
function measureCSSComplexity() {
  log('\n📊 CSS Complexity Analysis', 'bold');
  log('─'.repeat(50), 'dim');

  const filePath = path.join(process.cwd(), 'dist/jasmin.css');

  if (!fs.existsSync(filePath)) {
    log('  ⚠ CSS file not found. Run npm run build first.', 'yellow');
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Count various CSS metrics
  const metrics = {
    rules: (content.match(/\{[^}]*\}/g) || []).length,
    selectors: (content.match(/[^{}]+(?=\s*\{)/g) || []).length,
    properties: (content.match(/[a-z-]+\s*:/gi) || []).length,
    mediaQueries: (content.match(/@media/g) || []).length,
    cssVariables: (content.match(/--[a-z-]+/gi) || []).length,
    keyframes: (content.match(/@keyframes/g) || []).length,
    classes: new Set((content.match(/\.[a-z][a-z0-9_-]*/gi) || [])).size,
  };

  log(`  Rules:           ${metrics.rules.toLocaleString()}`);
  log(`  Selectors:       ${metrics.selectors.toLocaleString()}`);
  log(`  Properties:      ${metrics.properties.toLocaleString()}`);
  log(`  Media Queries:   ${metrics.mediaQueries.toLocaleString()}`);
  log(`  CSS Variables:   ${metrics.cssVariables.toLocaleString()}`);
  log(`  Keyframes:       ${metrics.keyframes.toLocaleString()}`);
  log(`  Unique Classes:  ${metrics.classes.toLocaleString()}`);

  return metrics;
}

/**
 * Measure CSS parse time
 */
function measureParseTime() {
  log('\n⏱️  CSS Parse Time', 'bold');
  log('─'.repeat(50), 'dim');

  const filePath = path.join(process.cwd(), 'dist/jasmin.css');

  if (!fs.existsSync(filePath)) {
    log('  ⚠ CSS file not found', 'yellow');
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Simulate parsing by tokenizing
  const iterations = 100;
  const times = [];

  for (let i = 0; i < iterations; i++) {
    const start = process.hrtime.bigint();

    // Simple tokenization (simulates browser parsing)
    let pos = 0;
    while (pos < content.length) {
      // Skip whitespace
      while (pos < content.length && /\s/.test(content[pos])) pos++;
      // Find next token boundary
      const next = content.indexOf('{', pos);
      if (next === -1) break;
      pos = content.indexOf('}', next) + 1;
    }

    const end = process.hrtime.bigint();
    times.push(Number(end - start) / 1e6); // Convert to ms
  }

  const avg = times.reduce((a, b) => a + b) / times.length;
  const min = Math.min(...times);
  const max = Math.max(...times);

  log(`  Average: ${formatTime(avg)} (${iterations} iterations)`);
  log(`  Min:     ${formatTime(min)}`);
  log(`  Max:     ${formatTime(max)}`);

  return { avg, min, max };
}

/**
 * Compare with popular frameworks
 */
function compareFrameworks() {
  log('\n📈 Framework Comparison (estimated)', 'bold');
  log('─'.repeat(50), 'dim');

  const jasminPath = path.join(process.cwd(), 'dist/jasmin.min.css');

  if (!fs.existsSync(jasminPath)) {
    log('  ⚠ Build JasminCSS first for comparison', 'yellow');
    return;
  }

  const jasminSize = fs.statSync(jasminPath).size;
  const jasminGzip = zlib.gzipSync(fs.readFileSync(jasminPath)).length;

  // Estimated sizes of popular frameworks (minified + gzipped)
  const frameworks = [
    { name: 'JasminCSS', size: jasminGzip, color: 'green' },
    { name: 'Tailwind (full)', size: 4200000, color: 'dim' },
    { name: 'Tailwind (purged)', size: 10000, color: 'dim' },
    { name: 'Bootstrap 5', size: 26000, color: 'dim' },
    { name: 'Bulma', size: 25000, color: 'dim' },
    { name: 'Foundation', size: 17000, color: 'dim' },
  ];

  const maxSize = Math.max(...frameworks.map((f) => f.size));

  for (const fw of frameworks) {
    const bar = '█'.repeat(Math.round((fw.size / maxSize) * 30));
    const sizeStr = formatBytes(fw.size).padStart(10);
    log(`  ${fw.name.padEnd(18)} ${sizeStr} ${colors[fw.color]}${bar}${colors.reset}`);
  }
}

/**
 * Generate performance report
 */
function generateReport() {
  log('\n' + '═'.repeat(50), 'bold');
  log('  JasminCSS Performance Benchmark', 'bold');
  log('═'.repeat(50), 'bold');

  const sizes = measureFileSizes();
  const complexity = measureCSSComplexity();
  const parseTime = measureParseTime();
  compareFrameworks();

  // Summary
  log('\n✅ Summary', 'bold');
  log('─'.repeat(50), 'dim');

  if (sizes.length > 0) {
    const minified = sizes.find((s) => s.name.includes('Minified'));
    if (minified) {
      if (minified.gzipped < 30000) {
        log('  Bundle Size: ✅ Excellent (<30KB gzipped)', 'green');
      } else if (minified.gzipped < 50000) {
        log('  Bundle Size: ⚠️ Good (<50KB gzipped)', 'yellow');
      } else {
        log('  Bundle Size: ❌ Consider tree-shaking', 'red');
      }
    }
  }

  if (complexity) {
    if (complexity.rules < 5000) {
      log('  CSS Rules: ✅ Reasonable complexity', 'green');
    } else {
      log('  CSS Rules: ⚠️ High complexity, consider splitting', 'yellow');
    }
  }

  if (parseTime) {
    if (parseTime.avg < 10) {
      log('  Parse Time: ✅ Fast parsing', 'green');
    } else {
      log('  Parse Time: ⚠️ Consider optimizing selectors', 'yellow');
    }
  }

  log('\n' + '═'.repeat(50), 'dim');

  return { sizes, complexity, parseTime };
}

// Run benchmark
if (require.main === module) {
  generateReport();
}

module.exports = { generateReport, measureFileSizes, measureCSSComplexity };
