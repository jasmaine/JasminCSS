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
import { generateDropdownStyles } from './dropdown.js';
import { generateAccordionStyles } from './accordion.js';
import { generateChipStyles } from './chips.js';
import { generateOffcanvasStyles } from './offcanvas.js';
import { generateCarouselStyles } from './carousel.js';
import { generateStepperStyles } from './stepper.js';
import { generateTimelineStyles } from './timeline.js';
import { generateRatingStyles } from './rating.js';
import { generateUploadStyles } from './upload.js';
import { generateSpinnerStyles } from './spinner.js';
import { generatePopoverStyles } from './popover.js';
import { generateCommandPaletteStyles } from './command-palette.js';
import { generateDatepickerStyles } from './datepicker.js';
import { generateTimepickerStyles } from './timepicker.js';

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
  skeleton: generateSkeletonStyles,
  dropdown: generateDropdownStyles,
  accordion: generateAccordionStyles,
  chips: generateChipStyles,
  offcanvas: generateOffcanvasStyles,
  carousel: generateCarouselStyles,
  stepper: generateStepperStyles,
  timeline: generateTimelineStyles,
  rating: generateRatingStyles,
  upload: generateUploadStyles,
  spinner: generateSpinnerStyles,
  popover: generatePopoverStyles,
  'command-palette': generateCommandPaletteStyles,
  datepicker: generateDatepickerStyles,
  timepicker: generateTimepickerStyles
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
