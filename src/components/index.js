import { generateButtonStyles } from './buttons.js';
import { generateCardStyles } from './cards.js';
import { generateFormStyles } from './forms.js';
import { generateNavigationStyles } from './navigation.js';
import { generateAlertStyles } from './alerts.js';
import { generateBadgeStyles } from './badges.js';
import { generateModalStyles } from './modals.js';
import { generateTableStyles } from './tables.js';
import { generateAvatarStyles } from './avatars.js';
import { generateTooltipStyles } from './tooltips.js';
import { generateProgressStyles } from './progress.js';
import { generateSkeletonStyles } from './skeleton.js';

const componentGenerators = {
  buttons: generateButtonStyles,
  cards: generateCardStyles,
  forms: generateFormStyles,
  navigation: generateNavigationStyles,
  alerts: generateAlertStyles,
  badges: generateBadgeStyles,
  modals: generateModalStyles,
  tables: generateTableStyles,
  avatars: generateAvatarStyles,
  tooltips: generateTooltipStyles,
  progress: generateProgressStyles,
  skeleton: generateSkeletonStyles
};

export const components = Object.keys(componentGenerators);

export function generateComponents(config, options = {}) {
  const { selected = components, usedClasses, includeAll = true } = options;

  const parts = [];
  let totalCount = 0;

  parts.push('/* ==================== COMPONENTS ==================== */');

  for (const componentName of selected) {
    const generator = componentGenerators[componentName];
    if (!generator) continue;

    const css = generator(config);
    parts.push(`\n/* ${componentName} component */`);
    parts.push(css);
    totalCount++;
  }

  return {
    css: parts.join('\n'),
    count: totalCount
  };
}
