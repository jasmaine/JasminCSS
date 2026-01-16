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
          name: 'borderRadiusButtons',
          message: 'Button border radius:',
          choices: [
            { name: 'Sharp (0px)', value: '0' },
            { name: 'Subtle (4px)', value: '0.25rem' },
            { name: 'Rounded (8px)', value: '0.5rem' },
            { name: 'Pill (16px)', value: '1rem' },
            { name: 'Full/Pill (9999px)', value: '9999px' }
          ]
        },
        {
          type: 'list',
          name: 'borderRadiusInputs',
          message: 'Inputs/Cards border radius:',
          choices: [
            { name: 'Sharp (0px)', value: '0' },
            { name: 'Subtle (4px)', value: '0.25rem' },
            { name: 'Rounded (8px)', value: '0.5rem' },
            { name: 'More rounded (12px)', value: '0.75rem' },
            { name: 'Pill (16px)', value: '1rem' }
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
          default: brandingAnswers.borderRadiusInputs,
          buttons: brandingAnswers.borderRadiusButtons,
          inputs: brandingAnswers.borderRadiusInputs
        }
      };
      config.darkMode = brandingAnswers.darkMode;
    } else {
      config = { ...config, ...templates[answers.template] };
    }

    config.projectName = answers.projectName;

    // Component selection (with auto-detection info)
    console.log(pc.dim('\n💡 Components are auto-detected during build based on classes you use.'));
    console.log(pc.dim('   Pre-selecting common ones speeds up first build.\n'));

    const componentAnswers = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'components',
        message: 'Pre-select components (others auto-detected):',
        choices: [
          { name: 'Buttons', value: 'buttons', checked: true },
          { name: 'Cards', value: 'cards', checked: true },
          { name: 'Forms', value: 'forms', checked: true },
          { name: 'Navigation', value: 'navigation', checked: true },
          { name: 'Alerts', value: 'alerts', checked: true },
          { name: 'Badges', value: 'badges', checked: true },
          new inquirer.Separator('── Additional (auto-detected if used) ──'),
          { name: 'Modals', value: 'modals', checked: false },
          { name: 'Tables', value: 'tables', checked: false },
          { name: 'Dropdown', value: 'dropdown', checked: false },
          { name: 'Avatars', value: 'avatars', checked: false },
          { name: 'Tooltips', value: 'tooltips', checked: false },
          { name: 'Progress', value: 'progress', checked: false },
          { name: 'Skeleton', value: 'skeleton', checked: false },
          { name: 'Accordion', value: 'accordion', checked: false },
          { name: 'Carousel', value: 'carousel', checked: false },
          { name: 'Tabs', value: 'tabs', checked: false }
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

  // Create index.html if it doesn't exist
  const indexPath = path.join(cwd, 'index.html');
  if (!fs.existsSync(indexPath)) {
    const brandColors = config.branding?.colors || {};
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.projectName || 'JasminCSS Project'}</title>
  <link rel="stylesheet" href="dist/jasmin.min.css">
</head>
<body class="bg-white text-gray-900 min-h-screen">

  <!-- Navigation -->
  <nav class="navbar bg-white shadow-sm">
    <div class="container flex justify-between items-center py-4">
      <a href="#" class="text-xl font-bold text-primary">${config.projectName || 'My Project'}</a>
      <div class="flex gap-4 items-center">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Contact</a>
        <button class="btn btn-primary btn-sm">Get Started</button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="py-20 bg-gradient-to-br from-primary to-accent text-white">
    <div class="container text-center">
      <h1 class="text-5xl font-bold mb-4">Welcome to ${config.projectName || 'JasminCSS'}</h1>
      <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
        Build beautiful interfaces with JasminCSS. Modern, fast, and production-ready.
      </p>
      <div class="flex gap-4 justify-center">
        <button class="btn btn-lg bg-white text-primary">Get Started</button>
        <button class="btn btn-lg btn-outline border-white text-white">Learn More</button>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-16">
    <div class="container">
      <h2 class="text-3xl font-bold text-center mb-12">Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card card-bordered card-hover">
          <div class="card-body">
            <h3 class="card-title">Modern Design</h3>
            <p class="text-gray-600">Clean, contemporary UI components built for today's web.</p>
          </div>
        </div>
        <div class="card card-bordered card-hover">
          <div class="card-body">
            <h3 class="card-title">Fully Responsive</h3>
            <p class="text-gray-600">Works seamlessly across all devices and screen sizes.</p>
          </div>
        </div>
        <div class="card card-bordered card-hover">
          <div class="card-body">
            <h3 class="card-title">Easy to Customize</h3>
            <p class="text-gray-600">Tailor colors, typography, and components to your brand.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Example Components -->
  <section class="py-16 bg-gray-50">
    <div class="container">
      <h2 class="text-3xl font-bold text-center mb-12">Components</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Buttons -->
        <div class="card card-bordered">
          <div class="card-body">
            <h3 class="card-title mb-4">Buttons</h3>
            <div class="flex flex-wrap gap-2">
              <button class="btn btn-primary">Primary</button>
              <button class="btn btn-secondary">Secondary</button>
              <button class="btn btn-accent">Accent</button>
              <button class="btn btn-outline-primary">Outline</button>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="card card-bordered">
          <div class="card-body">
            <h3 class="card-title mb-4">Form</h3>
            <div class="form-group mb-3">
              <input type="text" class="form-control" placeholder="Your email">
            </div>
            <button class="btn btn-primary w-full">Subscribe</button>
          </div>
        </div>

        <!-- Alerts -->
        <div class="card card-bordered">
          <div class="card-body">
            <h3 class="card-title mb-4">Alerts</h3>
            <div class="alert alert-success mb-2">Success message!</div>
            <div class="alert alert-warning mb-2">Warning message!</div>
            <div class="alert alert-error">Error message!</div>
          </div>
        </div>

        <!-- Badges -->
        <div class="card card-bordered">
          <div class="card-body">
            <h3 class="card-title mb-4">Badges</h3>
            <div class="flex flex-wrap gap-2">
              <span class="badge badge-primary">Primary</span>
              <span class="badge badge-success">Success</span>
              <span class="badge badge-warning">Warning</span>
              <span class="badge badge-error">Error</span>
              <span class="badge badge-soft-primary">Soft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-8 bg-gray-900 text-gray-400">
    <div class="container text-center">
      <p>Built with JasminCSS</p>
    </div>
  </footer>

  <!-- JasminCSS JavaScript -->
  <script src="dist/jasmin.min.js" data-jasmin-auto-init></script>
</body>
</html>
`;
    fs.writeFileSync(indexPath, indexHtml);
    console.log(pc.green('✓ Created index.html'));
  }

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
