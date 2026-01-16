import { shouldIncludeClass } from '../compiler.js';
import { generateLayoutUtilities } from './layout.js';
import { generateSpacingUtilities } from './spacing.js';
import { generateTypographyUtilities } from './typography.js';
import { generateColorUtilities } from './colors.js';
import { generateEffectUtilities } from './effects.js';
import { generateAnimationUtilities } from './animations.js';
import { generateTransformUtilities } from './transforms.js';
import { generateFilterUtilities } from './filters.js';
import { generateIconUtilities } from './icons.js';
import { generateBackgroundUtilities } from './background.js';
import { generateColumnUtilities } from './columns.js';
import { generateScrollUtilities } from './scroll.js';
import { generateSvgUtilities } from './svg.js';
import { generateAccessibilityUtilities } from './accessibility.js';
import { generateBorderUtilities } from './borders.js';

const utilityGenerators = {
  layout: generateLayoutUtilities,
  spacing: generateSpacingUtilities,
  typography: generateTypographyUtilities,
  colors: generateColorUtilities,
  effects: generateEffectUtilities,
  animations: generateAnimationUtilities,
  transforms: generateTransformUtilities,
  filters: generateFilterUtilities,
  icons: generateIconUtilities,
  background: generateBackgroundUtilities,
  columns: generateColumnUtilities,
  scroll: generateScrollUtilities,
  svg: generateSvgUtilities,
  accessibility: generateAccessibilityUtilities,
  borders: generateBorderUtilities
};

export function generateUtilities(config, options = {}) {
  const { usedClasses, includeAll = false } = options;
  const selectedUtilities = config.utilities || Object.keys(utilityGenerators);

  const parts = [];
  let totalCount = 0;

  parts.push('/* ==================== UTILITIES ==================== */');

  for (const utilityName of selectedUtilities) {
    const generator = utilityGenerators[utilityName];
    if (!generator) continue;

    // Pass options to generators that support it (e.g., colors for arbitrary values)
    const { css, classes } = generator(config, { usedClasses, includeAll });

    // Filter classes based on usage
    if (!includeAll && usedClasses) {
      const filteredClasses = classes.filter(c =>
        shouldIncludeClass(c.name, usedClasses, includeAll)
      );

      if (filteredClasses.length > 0) {
        parts.push(`\n/* ${utilityName} utilities */`);
        parts.push(filteredClasses.map(c => c.css).join('\n'));
        totalCount += filteredClasses.length;
      }
    } else {
      parts.push(`\n/* ${utilityName} utilities */`);
      parts.push(css);
      totalCount += classes.length;
    }
  }

  // Generate responsive variants
  parts.push(generateResponsiveUtilities(config, selectedUtilities, usedClasses, includeAll));

  // Generate state variants
  parts.push(generateStateUtilities(config, selectedUtilities, usedClasses, includeAll));

  return {
    css: parts.join('\n'),
    count: totalCount
  };
}

function generateResponsiveUtilities(config, selectedUtilities, usedClasses, includeAll) {
  const breakpoints = config.breakpoints || {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  };

  const parts = ['\n/* ==================== RESPONSIVE VARIANTS ==================== */'];

  for (const [bp, minWidth] of Object.entries(breakpoints)) {
    const bpClasses = [];

    for (const utilityName of selectedUtilities) {
      const generator = utilityGenerators[utilityName];
      if (!generator) continue;

      const { classes } = generator(config);

      for (const cls of classes) {
        const escapedBp = escapeCssSelector(bp);
        // Escape dots and slashes in class names for valid CSS selectors
        const escapedName = cls.name.replace(/\//g, '\\/').replace(/\./g, '\\.');
        const responsiveClassName = `${escapedBp}\\:${escapedName}`;
        const shouldInclude = includeAll ||
          !usedClasses ||
          usedClasses.has(`${bp}:${cls.name}`);

        if (shouldInclude) {
          // Match the escaped CSS selector (backslashes need to be escaped for regex)
          const regexSafeName = escapedName.replace(/\\/g, '\\\\');
          bpClasses.push(cls.css.replace(
            new RegExp(`\\.${regexSafeName}(?=[^-\\w])`, 'g'),
            `.${responsiveClassName}`
          ));
        }
      }
    }

    if (bpClasses.length > 0) {
      parts.push(`\n@media (min-width: ${minWidth}) {`);
      parts.push(bpClasses.join('\n'));
      parts.push('}');
    }
  }

  return parts.join('\n');
}

function generateStateUtilities(config, selectedUtilities, usedClasses, includeAll) {
  const states = {
    hover: 'hover',
    focus: 'focus',
    'focus-visible': 'focus-visible',
    'focus-within': 'focus-within',
    active: 'active',
    disabled: 'disabled',
    first: 'first-child',
    last: 'last-child',
    odd: 'nth-child(odd)',
    even: 'nth-child(even)'
  };

  const parts = ['\n/* ==================== STATE VARIANTS ==================== */'];

  for (const [state, pseudoClass] of Object.entries(states)) {
    const stateClasses = [];

    for (const utilityName of selectedUtilities) {
      const generator = utilityGenerators[utilityName];
      if (!generator) continue;

      const { classes } = generator(config);

      for (const cls of classes) {
        // Skip classes that contain media queries or complex selectors
        if (cls.css.includes('@media') || cls.css.includes('@keyframes')) continue;

        // Escape dots in class names for valid CSS selectors
        const escapedName = cls.name.replace(/\//g, '\\/').replace(/\./g, '\\.');
        const stateClassName = `${state}\\:${escapedName}`;
        const shouldInclude = includeAll ||
          !usedClasses ||
          usedClasses.has(`${state}:${cls.name}`);

        if (shouldInclude) {
          // Extract properties from simple CSS rules only
          const propsMatch = cls.css.match(/\{([^{}]+)\}/);
          if (propsMatch) {
            stateClasses.push(`.${stateClassName}:${pseudoClass} {${propsMatch[1]}}`);
          }
        }
      }
    }

    if (stateClasses.length > 0) {
      parts.push(`\n/* ${state} variants */`);
      parts.push(stateClasses.join('\n'));
    }
  }

  // Group hover variant
  parts.push('\n/* group-hover variants */');
  const groupHoverClasses = [];
  for (const utilityName of selectedUtilities) {
    const generator = utilityGenerators[utilityName];
    if (!generator) continue;

    const { classes } = generator(config);

    for (const cls of classes) {
      if (cls.css.includes('@media') || cls.css.includes('@keyframes')) continue;

      const escapedName = cls.name.replace(/\//g, '\\/').replace(/\./g, '\\.');
      const stateClassName = `group-hover\\:${escapedName}`;
      const shouldInclude = includeAll ||
        !usedClasses ||
        usedClasses.has(`group-hover:${cls.name}`);

      if (shouldInclude) {
        const propsMatch = cls.css.match(/\{([^{}]+)\}/);
        if (propsMatch) {
          groupHoverClasses.push(`.group:hover .${stateClassName} {${propsMatch[1]}}`);
        }
      }
    }
  }
  if (groupHoverClasses.length > 0) {
    parts.push(groupHoverClasses.join('\n'));
  }

  // Dark mode variant
  if (config.darkMode) {
    parts.push('\n/* dark mode variants */');
    const darkClasses = [];
    for (const utilityName of selectedUtilities) {
      const generator = utilityGenerators[utilityName];
      if (!generator) continue;

      const { classes } = generator(config);

      for (const cls of classes) {
        if (cls.css.includes('@media') || cls.css.includes('@keyframes')) continue;

        const escapedName = cls.name.replace(/\//g, '\\/').replace(/\./g, '\\.');
        const darkClassName = `dark\\:${escapedName}`;
        const shouldInclude = includeAll ||
          !usedClasses ||
          usedClasses.has(`dark:${cls.name}`);

        if (shouldInclude) {
          const propsMatch = cls.css.match(/\{([^{}]+)\}/);
          if (propsMatch) {
            darkClasses.push(`.dark .${darkClassName} {${propsMatch[1]}}`);
          }
        }
      }
    }
    if (darkClasses.length > 0) {
      parts.push(darkClasses.join('\n'));
    }
  }

  return parts.join('\n');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Escape CSS class selector - handles leading digits
function escapeCssSelector(name) {
  // If starts with a digit, escape it (e.g., "2xl" -> "\\32 xl")
  if (/^\d/.test(name)) {
    const firstChar = name.charCodeAt(0).toString(16);
    return `\\${firstChar} ${name.slice(1)}`;
  }
  return name;
}
