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
  accessibility: generateAccessibilityUtilities
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

    const { css, classes } = generator(config);

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
        const responsiveClassName = `${bp}\\:${cls.name}`;
        const shouldInclude = includeAll ||
          !usedClasses ||
          usedClasses.has(`${bp}:${cls.name}`);

        if (shouldInclude) {
          bpClasses.push(cls.css.replace(
            new RegExp(`\\.${escapeRegex(cls.name)}`, 'g'),
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
    hover: '&:hover',
    focus: '&:focus',
    'focus-visible': '&:focus-visible',
    'focus-within': '&:focus-within',
    active: '&:active',
    disabled: '&:disabled',
    first: '&:first-child',
    last: '&:last-child',
    odd: '&:nth-child(odd)',
    even: '&:nth-child(even)',
    'group-hover': '.group:hover &'
  };

  const parts = ['\n/* ==================== STATE VARIANTS ==================== */'];

  for (const [state, selector] of Object.entries(states)) {
    const stateClasses = [];

    for (const utilityName of selectedUtilities) {
      const generator = utilityGenerators[utilityName];
      if (!generator) continue;

      const { classes } = generator(config);

      for (const cls of classes) {
        const stateClassName = `${state}\\:${cls.name}`;
        const shouldInclude = includeAll ||
          !usedClasses ||
          usedClasses.has(`${state}:${cls.name}`);

        if (shouldInclude) {
          const stateCSS = cls.css
            .replace(new RegExp(`\\.${escapeRegex(cls.name)}`, 'g'), `.${stateClassName}`)
            .replace(/\{/, selector.startsWith('.group') ?
              `{ /* ${state} */ ` :
              `:${state.replace('focus-', 'focus-')} {`
            );

          if (selector.startsWith('.group')) {
            stateClasses.push(`.group:hover .${stateClassName.replace('\\:', '\\:')} ${cls.css.match(/\{([^}]+)\}/)[0]}`);
          } else {
            stateClasses.push(`.${stateClassName}:${state.replace('-', '-')} ${cls.css.match(/\{([^}]+)\}/)[0]}`);
          }
        }
      }
    }

    if (stateClasses.length > 0) {
      parts.push(`\n/* ${state} variants */`);
      parts.push(stateClasses.join('\n'));
    }
  }

  // Dark mode variant
  if (config.darkMode) {
    parts.push('\n/* dark mode variants */');
    for (const utilityName of selectedUtilities) {
      const generator = utilityGenerators[utilityName];
      if (!generator) continue;

      const { classes } = generator(config);

      for (const cls of classes) {
        const darkClassName = `dark\\:${cls.name}`;
        const shouldInclude = includeAll ||
          !usedClasses ||
          usedClasses.has(`dark:${cls.name}`);

        if (shouldInclude) {
          parts.push(`.dark .${darkClassName} ${cls.css.match(/\{([^}]+)\}/)?.[0] || '{}'}`);
        }
      }
    }
  }

  return parts.join('\n');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
