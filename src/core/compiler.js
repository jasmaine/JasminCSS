import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';
import postcss from 'postcss';
import cssnano from 'cssnano';
import pc from 'picocolors';
import { resolveConfig } from '../config/loader.js';
import { generateUtilities } from './utilities/index.js';
import { generateComponents, components as AVAILABLE_COMPONENTS } from '../components/index.js';
import { generateBase } from './base.js';

// Component class prefixes - maps class prefix patterns to component names
const COMPONENT_CLASS_PREFIXES = {
  'accordion': 'accordion',
  'alert': 'alerts',
  'avatar': 'avatars',
  'badge': 'badges',
  'btn': 'buttons',
  'card': 'cards',
  'carousel': 'carousel',
  'chip': 'chips',
  'command-palette': 'command-palette',
  'datepicker': 'datepicker',
  'calendar': 'datepicker',
  'dropdown': 'dropdown',
  'form-': 'forms',
  'input-group': 'forms',
  'modal': 'modals',
  'navbar': 'navigation',
  'nav-': 'navigation',
  'breadcrumb': 'navigation',
  'pagination': 'navigation',
  'tabs': 'navigation',
  'tab': 'navigation',
  'offcanvas': 'offcanvas',
  'popover': 'popover',
  'progress': 'progress',
  'rating': 'rating',
  'skeleton': 'skeleton',
  'spinner': 'spinner',
  'stepper': 'stepper',
  'table': 'tables',
  'timeline': 'timeline',
  'timepicker': 'timepicker',
  'tooltip': 'tooltips',
  'upload': 'upload',
};

/**
 * Detect which components are used based on scanned class names
 */
export function detectUsedComponents(usedClasses) {
  const detectedComponents = new Set();

  if (!usedClasses) return detectedComponents;

  for (const className of usedClasses) {
    for (const [prefix, component] of Object.entries(COMPONENT_CLASS_PREFIXES)) {
      if (className.startsWith(prefix) || className === prefix.replace(/-$/, '')) {
        detectedComponents.add(component);
      }
    }
  }

  return detectedComponents;
}

/**
 * Get missing components (detected but not in config)
 */
export function getMissingComponents(configComponents, detectedComponents) {
  const missing = [];
  for (const comp of detectedComponents) {
    if (!configComponents || !configComponents.includes(comp)) {
      missing.push(comp);
    }
  }
  return missing;
}

export async function compileCSS(config, options = {}) {
  const { usedClasses, minify = false, includeAll = false, autoDetectComponents = true } = options;

  // Resolve configuration
  const resolvedConfig = resolveConfig(config);

  // Auto-detect components if enabled
  let selectedComponents = config.components || [];
  let detectedComponents = new Set();
  let missingComponents = [];

  if (usedClasses && autoDetectComponents) {
    detectedComponents = detectUsedComponents(usedClasses);
    missingComponents = getMissingComponents(selectedComponents, detectedComponents);

    if (missingComponents.length > 0) {
      console.log(pc.yellow(`\n⚠️  Auto-detected ${missingComponents.length} additional component(s):`));
      console.log(pc.dim(`   ${missingComponents.join(', ')}`));
      console.log(pc.dim(`   Adding them to this build automatically.\n`));

      // Merge detected components with config components
      selectedComponents = [...new Set([...selectedComponents, ...missingComponents])];
    }
  }

  // Generate CSS parts
  const parts = [];

  // 1. Base styles and CSS variables
  parts.push(generateBase(resolvedConfig));

  // 2. Utility classes
  const utilities = generateUtilities(resolvedConfig, {
    usedClasses,
    includeAll
  });
  parts.push(utilities.css);

  // 3. Component styles (now with auto-detected components)
  const components = generateComponents(resolvedConfig, {
    selected: selectedComponents,
    usedClasses,
    includeAll
  });
  parts.push(components.css);

  // Combine all CSS
  let css = parts.join('\n\n');

  // Process with PostCSS
  let minified = null;
  if (minify) {
    const result = await postcss([
      cssnano({
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true
        }]
      })
    ]).process(css, { from: undefined });

    minified = result.css;
  }

  return {
    css,
    minified,
    stats: {
      utilities: utilities.count,
      components: components.count,
      autoDetected: missingComponents,
      totalComponents: selectedComponents.length
    }
  };
}

export async function scanForUsedClasses(cwd, patterns) {
  const usedClasses = new Set();

  // Find all matching files
  const files = await fg(patterns, {
    cwd,
    absolute: true,
    ignore: ['**/node_modules/**', '**/dist/**', '**/.git/**']
  });

  // Regex to match class-like patterns
  // Matches: class="...", className="...", :class="...", class:..., etc.
  const classPatterns = [
    /class(?:Name)?=["'`]([^"'`]+)["'`]/g,
    /class(?:Name)?=\{["'`]([^"'`]+)["'`]\}/g,
    /class:([a-zA-Z0-9_-]+)/g,
    /:class=["'`]\{([^}]+)\}["'`]/g,
    /classList\.(?:add|toggle)\(["'`]([^"'`]+)["'`]\)/g,
    /clsx\(([^)]+)\)/g,
    /cn\(([^)]+)\)/g,
    /classnames\(([^)]+)\)/g
  ];

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf-8');

      for (const pattern of classPatterns) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          // Extract individual classes (including arbitrary value syntax like bg-[#fff])
          const classes = match[1]
            .split(/\s+/)
            .map(c => c.trim())
            .filter(c => c && !c.includes('${') && !c.startsWith('{'));

          classes.forEach(cls => usedClasses.add(cls));
        }
        // Reset regex lastIndex
        pattern.lastIndex = 0;
      }
    } catch (err) {
      // Skip files that can't be read
    }
  }

  return usedClasses;
}

export function shouldIncludeClass(className, usedClasses, includeAll) {
  if (includeAll) return true;
  if (!usedClasses) return true;

  // Check exact match
  if (usedClasses.has(className)) return true;

  // Check responsive variants
  const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
  for (const bp of breakpoints) {
    if (usedClasses.has(`${bp}:${className}`)) return true;
  }

  // Check state variants
  const states = ['hover', 'focus', 'active', 'disabled', 'dark'];
  for (const state of states) {
    if (usedClasses.has(`${state}:${className}`)) return true;
  }

  return false;
}
