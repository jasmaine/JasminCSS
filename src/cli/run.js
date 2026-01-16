import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pc from 'picocolors';
import chokidar from 'chokidar';
import { compileCSS, scanForUsedClasses } from '../core/compiler.js';
import { loadConfig } from '../config/loader.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function runCommand(task, options) {
  const cwd = process.cwd();
  const configPath = path.resolve(cwd, options.config);
  const outputDir = path.resolve(cwd, options.output);

  // Load config
  let config;
  try {
    config = await loadConfig(configPath);
  } catch (err) {
    console.log(pc.yellow('No jasmin.config.js found. Using defaults.'));
    config = (await import('../config/defaults.js')).defaultConfig;
  }

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  switch (task) {
    case 'build':
      await buildTask(config, outputDir, cwd, true);
      break;

    case 'dev':
      await buildTask(config, outputDir, cwd, false);
      break;

    case 'watch':
      await watchTask(config, outputDir, cwd, options);
      break;

    default:
      console.log(pc.red(`Unknown task: ${task}`));
      console.log(pc.dim('Available tasks: build, dev, watch'));
      process.exit(1);
  }
}

async function buildTask(config, outputDir, cwd, isProduction) {
  const startTime = Date.now();

  console.log(pc.cyan(`\n🌸 JasminCSS ${isProduction ? 'Production' : 'Development'} Build\n`));

  let usedClasses = null;

  if (isProduction) {
    // Scan project for used classes (tree-shaking)
    console.log(pc.dim('Scanning project for used classes...'));
    usedClasses = await scanForUsedClasses(cwd, config.content || [
      './**/*.{html,js,jsx,ts,tsx,vue,svelte}',
      '!./node_modules/**'
    ]);
    console.log(pc.dim(`Found ${usedClasses.size} unique class references`));
  }

  // Compile CSS
  console.log(pc.dim('Compiling CSS...'));
  const { css, minified, stats } = await compileCSS(config, {
    usedClasses,
    minify: isProduction,
    includeAll: !isProduction
  });

  // Write output files
  const outputPath = path.join(outputDir, 'jasmin.css');
  const minOutputPath = path.join(outputDir, 'jasmin.min.css');

  fs.writeFileSync(outputPath, css);
  console.log(pc.green(`✓ ${outputPath}`), pc.dim(`(${formatSize(css.length)})`));

  if (isProduction && minified) {
    fs.writeFileSync(minOutputPath, minified);
    console.log(pc.green(`✓ ${minOutputPath}`), pc.dim(`(${formatSize(minified.length)})`));
  }

  // Copy JavaScript files
  const packageRoot = path.resolve(__dirname, '../../dist');
  const jsFiles = ['jasmin.min.js', 'jasmin.js'];

  for (const jsFile of jsFiles) {
    const srcPath = path.join(packageRoot, jsFile);
    const destPath = path.join(outputDir, jsFile);

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      const size = fs.statSync(destPath).size;
      console.log(pc.green(`✓ ${destPath}`), pc.dim(`(${formatSize(size)})`));
    }
  }

  const elapsed = Date.now() - startTime;
  console.log(pc.cyan(`\n✨ Built in ${elapsed}ms`));

  if (stats) {
    console.log(pc.dim(`   ${stats.utilities} utilities, ${stats.components} components`));
  }
}

async function watchTask(config, outputDir, cwd, options) {
  console.log(pc.cyan('\n🌸 JasminCSS Watch Mode\n'));
  console.log(pc.dim('Watching for changes...\n'));

  // Initial build
  await buildTask(config, outputDir, cwd, false);

  // Watch for changes
  const watchPaths = config.content || [
    './**/*.{html,js,jsx,ts,tsx,vue,svelte}',
    'jasmin.config.js'
  ];

  const watcher = chokidar.watch(watchPaths, {
    ignored: /node_modules/,
    persistent: true,
    cwd
  });

  let rebuildTimeout;
  const debouncedRebuild = () => {
    clearTimeout(rebuildTimeout);
    rebuildTimeout = setTimeout(async () => {
      console.log(pc.dim('\nChange detected, rebuilding...'));
      try {
        // Reload config
        const newConfig = await loadConfig(path.resolve(cwd, options.config));
        await buildTask(newConfig, outputDir, cwd, false);
      } catch (err) {
        console.log(pc.red('Build error:'), err.message);
      }
    }, 100);
  };

  watcher.on('change', debouncedRebuild);
  watcher.on('add', debouncedRebuild);
  watcher.on('unlink', debouncedRebuild);

  // Handle exit
  process.on('SIGINT', () => {
    console.log(pc.dim('\n\nStopping watch mode...'));
    watcher.close();
    process.exit(0);
  });
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
