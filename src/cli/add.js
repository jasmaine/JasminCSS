import fs from 'fs';
import path from 'path';
import pc from 'picocolors';
import { components } from '../components/index.js';

const availableComponents = {
  buttons: 'Interactive button styles with variants',
  cards: 'Card containers with various layouts',
  forms: 'Form inputs, selects, checkboxes, radios',
  navigation: 'Navbars, sidebars, breadcrumbs',
  modals: 'Modal dialogs and overlays',
  tables: 'Data tables with sorting indicators',
  alerts: 'Alert and notification banners',
  badges: 'Status badges and tags',
  avatars: 'User avatar components',
  tooltips: 'Hover tooltips and popovers',
  progress: 'Progress bars and spinners',
  skeleton: 'Loading skeleton placeholders',
  accordion: 'Collapsible accordion panels',
  tabs: 'Tab navigation components',
  dropdown: 'Dropdown menus',
  pagination: 'Page navigation',
  breadcrumb: 'Breadcrumb navigation',
  toast: 'Toast notifications',
  drawer: 'Side drawer panels',
  hero: 'Hero section layouts'
};

export async function addCommand(component, options) {
  if (options.list || component === 'list') {
    console.log(pc.cyan('\n🌸 Available JasminCSS Components\n'));

    Object.entries(availableComponents).forEach(([name, description]) => {
      console.log(pc.white(`  ${name.padEnd(15)}`), pc.dim(description));
    });

    console.log(pc.dim('\nUsage: jasmin add <component>\n'));
    return;
  }

  if (!availableComponents[component]) {
    console.log(pc.red(`Unknown component: ${component}`));
    console.log(pc.dim('Run "jasmin add --list" to see available components'));
    return;
  }

  const cwd = process.cwd();
  const configPath = path.join(cwd, 'jasmin.config.js');

  if (!fs.existsSync(configPath)) {
    console.log(pc.yellow('No jasmin.config.js found. Run "jasmin init" first.'));
    return;
  }

  // Read and update config
  const configContent = fs.readFileSync(configPath, 'utf-8');

  // Simple regex to find and update components array
  const componentRegex = /components:\s*\[([\s\S]*?)\]/;
  const match = configContent.match(componentRegex);

  if (match) {
    const existingComponents = match[1]
      .split(',')
      .map(c => c.trim().replace(/['"]/g, ''))
      .filter(Boolean);

    if (existingComponents.includes(component)) {
      console.log(pc.yellow(`Component "${component}" is already included.`));
      return;
    }

    existingComponents.push(component);
    const newComponentsArray = existingComponents.map(c => `'${c}'`).join(', ');
    const newConfigContent = configContent.replace(componentRegex, `components: [${newComponentsArray}]`);

    fs.writeFileSync(configPath, newConfigContent);
    console.log(pc.green(`✓ Added "${component}" component to jasmin.config.js`));
    console.log(pc.dim('Run "jasmin run build" to regenerate CSS'));
  } else {
    console.log(pc.yellow('Could not update config. Please add the component manually.'));
  }
}
