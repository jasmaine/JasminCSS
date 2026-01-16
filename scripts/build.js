#!/usr/bin/env node

import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function buildPackage() {
  console.log('🌸 Building JasminCSS package...\n');

  // Ensure dist directory exists
  const distDir = path.join(rootDir, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Build CLI and lib
  const entryPoints = [
    { in: 'src/index.js', out: 'index' },
    { in: 'src/plugins/nextjs.js', out: 'plugins/nextjs' },
    { in: 'src/plugins/vite.js', out: 'plugins/vite' },
    { in: 'src/plugins/jasmin-loader.js', out: 'plugins/jasmin-loader' }
  ];

  // CommonJS build
  await build({
    entryPoints: entryPoints.map(e => path.join(rootDir, e.in)),
    outdir: distDir,
    bundle: true,
    format: 'cjs',
    platform: 'node',
    target: 'node18',
    external: ['chokidar', 'commander', 'fast-glob', 'picocolors', 'postcss', 'cssnano', 'inquirer'],
    outExtension: { '.js': '.js' }
  });

  // ESM build
  await build({
    entryPoints: entryPoints.map(e => path.join(rootDir, e.in)),
    outdir: distDir,
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node18',
    external: ['chokidar', 'commander', 'fast-glob', 'picocolors', 'postcss', 'cssnano', 'inquirer'],
    outExtension: { '.js': '.mjs' }
  });

  // Generate TypeScript declarations
  const dtsContent = `// Type definitions for JasminCSS
export interface JasminConfig {
  projectName?: string;
  darkMode?: boolean;
  prefix?: string;
  content?: string[];
  branding?: BrandingConfig;
  components?: string[];
  utilities?: string[];
  colors?: Record<string, Record<string, string>>;
  spacing?: Record<string, string>;
  breakpoints?: Record<string, string>;
  animation?: AnimationConfig;
}

export interface BrandingConfig {
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    success?: string;
    warning?: string;
    error?: string;
    info?: string;
  };
  typography?: {
    fontFamily?: string;
    fontFamilyMono?: string;
    baseFontSize?: string;
    lineHeight?: number;
  };
  borderRadius?: Record<string, string>;
  shadows?: Record<string, string>;
}

export interface AnimationConfig {
  duration?: Record<string, string>;
  easing?: Record<string, string>;
}

export interface CompileOptions {
  usedClasses?: Set<string>;
  minify?: boolean;
  includeAll?: boolean;
}

export interface CompileResult {
  css: string;
  minified?: string;
  stats: {
    utilities: number;
    components: number;
  };
}

export function compileCSS(config: JasminConfig, options?: CompileOptions): Promise<CompileResult>;
export function scanForUsedClasses(cwd: string, patterns: string[]): Promise<Set<string>>;
export function loadConfig(configPath: string): Promise<JasminConfig>;
export function resolveConfig(config: JasminConfig): JasminConfig;

export const defaultConfig: JasminConfig;
export const templates: Record<string, Partial<JasminConfig>>;
`;

  fs.writeFileSync(path.join(distDir, 'index.d.ts'), dtsContent);

  // Build full CSS library for CDN
  console.log('Building CSS library...');
  await buildCSS();

  // Build browser JavaScript bundle
  console.log('\nBuilding JavaScript components...');
  await buildBrowserJS();

  // Build CDN runtime (JIT in browser)
  console.log('\nBuilding CDN runtime...');
  await buildCDNRuntime();

  console.log('\n✨ Build complete!\n');
}

async function buildCSS() {
  const { compileCSS } = await import('../src/core/compiler.js');
  const { defaultConfig } = await import('../src/config/defaults.js');

  const distDir = path.join(rootDir, 'dist');

  // Build full CSS
  const { css, minified } = await compileCSS(defaultConfig, {
    includeAll: true,
    minify: true
  });

  fs.writeFileSync(path.join(distDir, 'jasmin.css'), css);
  fs.writeFileSync(path.join(distDir, 'jasmin.min.css'), minified);

  const cssSize = (css.length / 1024).toFixed(1);
  const minSize = (minified.length / 1024).toFixed(1);

  console.log(`  ✓ jasmin.css (${cssSize} KB)`);
  console.log(`  ✓ jasmin.min.css (${minSize} KB)`);
}

async function buildBrowserJS() {
  const distDir = path.join(rootDir, 'dist');

  // Bundle browser JS components (IIFE format for browser)
  await build({
    entryPoints: [path.join(rootDir, 'src/js/index.js')],
    outfile: path.join(distDir, 'jasmin.js'),
    bundle: true,
    format: 'iife',
    globalName: 'Jasmin',
    platform: 'browser',
    target: 'es2020',
    minify: false
  });

  // Minified version
  await build({
    entryPoints: [path.join(rootDir, 'src/js/index.js')],
    outfile: path.join(distDir, 'jasmin.min.js'),
    bundle: true,
    format: 'iife',
    globalName: 'Jasmin',
    platform: 'browser',
    target: 'es2020',
    minify: true
  });

  const jsContent = fs.readFileSync(path.join(distDir, 'jasmin.js'), 'utf8');
  const jsMinContent = fs.readFileSync(path.join(distDir, 'jasmin.min.js'), 'utf8');

  const jsSize = (jsContent.length / 1024).toFixed(1);
  const jsMinSize = (jsMinContent.length / 1024).toFixed(1);

  console.log(`  ✓ jasmin.js (${jsSize} KB)`);
  console.log(`  ✓ jasmin.min.js (${jsMinSize} KB)`);
}

async function buildCDNRuntime() {
  const distDir = path.join(rootDir, 'dist');

  // Build CDN runtime (IIFE format for browser)
  await build({
    entryPoints: [path.join(rootDir, 'src/cdn/jasmin-runtime.js')],
    outfile: path.join(distDir, 'jasmin-runtime.js'),
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: 'es2020',
    minify: false
  });

  // Minified version
  await build({
    entryPoints: [path.join(rootDir, 'src/cdn/jasmin-runtime.js')],
    outfile: path.join(distDir, 'jasmin-runtime.min.js'),
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: 'es2020',
    minify: true
  });

  const runtimeContent = fs.readFileSync(path.join(distDir, 'jasmin-runtime.js'), 'utf8');
  const runtimeMinContent = fs.readFileSync(path.join(distDir, 'jasmin-runtime.min.js'), 'utf8');

  const runtimeSize = (runtimeContent.length / 1024).toFixed(1);
  const runtimeMinSize = (runtimeMinContent.length / 1024).toFixed(1);

  console.log(`  ✓ jasmin-runtime.js (${runtimeSize} KB)`);
  console.log(`  ✓ jasmin-runtime.min.js (${runtimeMinSize} KB)`);
}

buildPackage().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
