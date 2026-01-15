import fs from 'fs';
import path from 'path';
import pc from 'picocolors';
import inquirer from 'inquirer';
import { defaultConfig, templates } from '../config/defaults.js';

export async function initCommand(options) {
  const cwd = process.cwd();
  const configPath = path.join(cwd, 'jasmin.config.js');

  console.log(pc.cyan('🌸 Welcome to JasminCSS Setup\n'));

  if (fs.existsSync(configPath) && !options.yes) {
    const { overwrite } = await inquirer.prompt([{
      type: 'confirm',
      name: 'overwrite',
      message: 'jasmin.config.js already exists. Overwrite?',
      default: false
    }]);

    if (!overwrite) {
      console.log(pc.yellow('Setup cancelled.'));
      return;
    }
  }

  let config = { ...defaultConfig };

  if (options.yes) {
    // Use defaults
    console.log(pc.dim('Using default configuration...'));
  } else if (options.template && templates[options.template]) {
    // Use template
    config = { ...config, ...templates[options.template] };
    console.log(pc.green(`Using ${options.template} template`));
  } else {
    // Interactive setup
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
        default: path.basename(cwd)
      },
      {
        type: 'list',
        name: 'template',
        message: 'Choose a design template:',
        choices: [
          { name: 'Futuristic - Bold, modern, tech-forward', value: 'futuristic' },
          { name: 'Minimal - Clean, elegant, understated', value: 'minimal' },
          { name: 'Corporate - Professional, trustworthy', value: 'corporate' },
          { name: 'Creative - Vibrant, expressive, artistic', value: 'creative' },
          { name: 'Custom - Define your own', value: 'custom' }
        ]
      }
    ]);

    if (answers.template === 'custom') {
      const brandingAnswers = await inquirer.prompt([
        {
          type: 'input',
          name: 'primaryColor',
          message: 'Primary brand color (hex):',
          default: '#6366f1',
          validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input) || 'Please enter a valid hex color'
        },
        {
          type: 'input',
          name: 'secondaryColor',
          message: 'Secondary brand color (hex):',
          default: '#ec4899',
          validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input) || 'Please enter a valid hex color'
        },
        {
          type: 'input',
          name: 'accentColor',
          message: 'Accent color (hex):',
          default: '#14b8a6',
          validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input) || 'Please enter a valid hex color'
        },
        {
          type: 'list',
          name: 'fontFamily',
          message: 'Primary font family:',
          choices: [
            { name: 'Inter (Modern sans-serif)', value: 'Inter' },
            { name: 'Space Grotesk (Futuristic)', value: 'Space Grotesk' },
            { name: 'DM Sans (Friendly)', value: 'DM Sans' },
            { name: 'Outfit (Geometric)', value: 'Outfit' },
            { name: 'System fonts', value: 'system-ui' }
          ]
        },
        {
          type: 'list',
          name: 'borderRadius',
          message: 'Border radius style:',
          choices: [
            { name: 'Sharp (0px)', value: '0' },
            { name: 'Subtle (4px)', value: '0.25rem' },
            { name: 'Rounded (8px)', value: '0.5rem' },
            { name: 'Pill (16px)', value: '1rem' },
            { name: 'Full (9999px)', value: '9999px' }
          ]
        },
        {
          type: 'confirm',
          name: 'darkMode',
          message: 'Include dark mode support?',
          default: true
        }
      ]);

      config.branding = {
        ...config.branding,
        colors: {
          primary: brandingAnswers.primaryColor,
          secondary: brandingAnswers.secondaryColor,
          accent: brandingAnswers.accentColor
        },
        typography: {
          fontFamily: brandingAnswers.fontFamily
        },
        borderRadius: {
          default: brandingAnswers.borderRadius
        }
      };
      config.darkMode = brandingAnswers.darkMode;
    } else {
      config = { ...config, ...templates[answers.template] };
    }

    config.projectName = answers.projectName;

    // Component selection
    const componentAnswers = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'components',
        message: 'Select components to include:',
        choices: [
          { name: 'Buttons', value: 'buttons', checked: true },
          { name: 'Cards', value: 'cards', checked: true },
          { name: 'Forms', value: 'forms', checked: true },
          { name: 'Navigation', value: 'navigation', checked: true },
          { name: 'Modals', value: 'modals', checked: false },
          { name: 'Tables', value: 'tables', checked: false },
          { name: 'Alerts', value: 'alerts', checked: true },
          { name: 'Badges', value: 'badges', checked: true },
          { name: 'Avatars', value: 'avatars', checked: false },
          { name: 'Tooltips', value: 'tooltips', checked: false },
          { name: 'Progress', value: 'progress', checked: false },
          { name: 'Skeleton', value: 'skeleton', checked: false }
        ]
      },
      {
        type: 'checkbox',
        name: 'utilities',
        message: 'Select utility modules:',
        choices: [
          { name: 'Layout (flex, grid, container)', value: 'layout', checked: true },
          { name: 'Spacing (margin, padding)', value: 'spacing', checked: true },
          { name: 'Typography', value: 'typography', checked: true },
          { name: 'Colors', value: 'colors', checked: true },
          { name: 'Effects (shadows, blur)', value: 'effects', checked: true },
          { name: 'Animations', value: 'animations', checked: true },
          { name: 'Transforms', value: 'transforms', checked: false },
          { name: 'Filters', value: 'filters', checked: false }
        ]
      }
    ]);

    config.components = componentAnswers.components;
    config.utilities = componentAnswers.utilities;
  }

  // Generate config file
  const configContent = `/** @type {import('jasmincss').JasminConfig} */
export default ${JSON.stringify(config, null, 2)};
`;

  fs.writeFileSync(configPath, configContent);
  console.log(pc.green('\n✓ Created jasmin.config.js'));

  // Create CSS entry point
  const cssDir = path.join(cwd, 'styles');
  if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, { recursive: true });
  }

  const mainCssPath = path.join(cssDir, 'jasmin.css');
  const mainCssContent = `/* JasminCSS - Main Entry Point */
@import 'jasmincss/css';

/* Your custom styles below */
`;

  fs.writeFileSync(mainCssPath, mainCssContent);
  console.log(pc.green('✓ Created styles/jasmin.css'));

  // Print next steps
  console.log(pc.cyan('\n📦 Next steps:\n'));
  console.log(pc.white('  1. Run'), pc.yellow('jasmin run dev'), pc.white('to compile the full library'));
  console.log(pc.white('  2. Run'), pc.yellow('jasmin run build'), pc.white('for production (tree-shaken)'));
  console.log(pc.white('  3. Run'), pc.yellow('jasmin run watch'), pc.white('for development with hot reload'));
  console.log(pc.white('\n  Import in your project:'));
  console.log(pc.dim('  import \'./dist/jasmin.min.css\';'));
  console.log(pc.dim('  // or'));
  console.log(pc.dim('  import \'jasmincss/css\';\n'));
}
