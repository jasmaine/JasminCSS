#!/usr/bin/env node

import { Command } from 'commander';
import pc from 'picocolors';
import { initCommand } from '../src/cli/init.js';
import { runCommand } from '../src/cli/run.js';
import { addCommand } from '../src/cli/add.js';

const program = new Command();

console.log(pc.magenta(`
     ╦╔═╗╔═╗╔╦╗╦╔╗╔  ╔═╗╔═╗╔═╗
     ║╠═╣╚═╗║║║║║║║  ║  ╚═╗╚═╗
    ╚╝╩ ╩╚═╝╩ ╩╩╝╚╝  ╚═╝╚═╝╚═╝
`));
console.log(pc.dim('    Modern CSS Framework v1.0.0\n'));

program
  .name('jasmin')
  .description('JasminCSS - A modern, future-proof CSS framework')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize JasminCSS in your project with branding setup')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .option('-t, --template <name>', 'Use a predefined template (minimal, corporate, creative, futuristic)')
  .action(initCommand);

program
  .command('run <task>')
  .description('Run a JasminCSS task (build, dev, watch)')
  .option('-c, --config <path>', 'Path to jasmin.config.js', 'jasmin.config.js')
  .option('-o, --output <path>', 'Output directory', 'dist')
  .option('--minify', 'Minify output (default for build)')
  .option('--no-minify', 'Skip minification')
  .action(runCommand);

program
  .command('add <component>')
  .description('Add a component to your project')
  .option('--list', 'List all available components')
  .action(addCommand);

program.parse();
