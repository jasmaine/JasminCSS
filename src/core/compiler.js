import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';
import postcss from 'postcss';
import cssnano from 'cssnano';
import { resolveConfig } from '../config/loader.js';
import { generateUtilities } from './utilities/index.js';
import { generateComponents } from '../components/index.js';
import { generateBase } from './base.js';

export async function compileCSS(config, options = {}) {
  const { usedClasses, minify = false, includeAll = false } = options;

  // Resolve configuration
  const resolvedConfig = resolveConfig(config);

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

  // 3. Component styles
  const components = generateComponents(resolvedConfig, {
    selected: config.components,
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
      components: components.count
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
