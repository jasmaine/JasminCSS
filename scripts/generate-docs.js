#!/usr/bin/env node

/**
 * Generate comprehensive documentation for all JasminCSS classes
 * This creates JASMINCSS-GUIDE.md with every available class
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function generateDocs() {
  console.log('📚 Generating JasminCSS documentation...\n');

  const { defaultConfig } = await import('../src/config/defaults.js');
  const { generateLayoutUtilities } = await import('../src/core/utilities/layout.js');
  const { generateSpacingUtilities } = await import('../src/core/utilities/spacing.js');
  const { generateTypographyUtilities } = await import('../src/core/utilities/typography.js');
  const { generateColorUtilities } = await import('../src/core/utilities/colors.js');
  const { generateEffectUtilities } = await import('../src/core/utilities/effects.js');
  const { generateAnimationUtilities } = await import('../src/core/utilities/animations.js');
  const { generateTransformUtilities } = await import('../src/core/utilities/transforms.js');
  const { generateFilterUtilities } = await import('../src/core/utilities/filters.js');
  const { generateBackgroundUtilities } = await import('../src/core/utilities/background.js');
  const { generateColumnUtilities } = await import('../src/core/utilities/columns.js');
  const { generateScrollUtilities } = await import('../src/core/utilities/scroll.js');
  const { generateSvgUtilities } = await import('../src/core/utilities/svg.js');
  const { generateAccessibilityUtilities } = await import('../src/core/utilities/accessibility.js');

  // Import all components
  const { generateButtonStyles } = await import('../src/components/buttons.js');
  const { generateCardStyles } = await import('../src/components/cards.js');
  const { generateFormStyles } = await import('../src/components/forms.js');
  const { generateNavigationStyles } = await import('../src/components/navigation.js');
  const { generateAlertStyles } = await import('../src/components/alerts.js');
  const { generateBadgeStyles } = await import('../src/components/badges.js');
  const { generateModalStyles } = await import('../src/components/modals.js');
  const { generateTableStyles } = await import('../src/components/tables.js');
  const { generateAvatarStyles } = await import('../src/components/avatars.js');
  const { generateTooltipStyles } = await import('../src/components/tooltips.js');
  const { generateProgressStyles } = await import('../src/components/progress.js');
  const { generateSkeletonStyles } = await import('../src/components/skeleton.js');
  const { generateDropdownStyles } = await import('../src/components/dropdown.js');
  const { generateAccordionStyles } = await import('../src/components/accordion.js');
  const { generateChipStyles } = await import('../src/components/chips.js');
  const { generateOffcanvasStyles } = await import('../src/components/offcanvas.js');
  const { generateCarouselStyles } = await import('../src/components/carousel.js');
  const { generateStepperStyles } = await import('../src/components/stepper.js');
  const { generateTimelineStyles } = await import('../src/components/timeline.js');
  const { generateRatingStyles } = await import('../src/components/rating.js');
  const { generateUploadStyles } = await import('../src/components/upload.js');
  const { generateSpinnerStyles } = await import('../src/components/spinner.js');
  const { generatePopoverStyles } = await import('../src/components/popover.js');
  const { generateCommandPaletteStyles } = await import('../src/components/command-palette.js');
  const { generateDatepickerStyles } = await import('../src/components/datepicker.js');
  const { generateTimepickerStyles } = await import('../src/components/timepicker.js');

  const sections = [
    { name: 'Layout', generator: generateLayoutUtilities, description: 'Display, flexbox, grid, positioning, sizing, and more' },
    { name: 'Spacing', generator: generateSpacingUtilities, description: 'Padding, margin, and space between elements' },
    { name: 'Typography', generator: generateTypographyUtilities, description: 'Font size, weight, style, alignment, and text utilities' },
    { name: 'Colors', generator: generateColorUtilities, description: 'Text color, background color, border color, and gradients' },
    { name: 'Effects', generator: generateEffectUtilities, description: 'Shadows, opacity, and blend modes' },
    { name: 'Animations', generator: generateAnimationUtilities, description: 'Transitions and keyframe animations' },
    { name: 'Transforms', generator: generateTransformUtilities, description: 'Scale, rotate, translate, and skew' },
    { name: 'Filters', generator: generateFilterUtilities, description: 'Blur, brightness, contrast, and more' },
    { name: 'Backgrounds', generator: generateBackgroundUtilities, description: 'Background size, position, repeat, and attachment' },
    { name: 'Columns', generator: generateColumnUtilities, description: 'Multi-column layout utilities' },
    { name: 'Scroll', generator: generateScrollUtilities, description: 'Scroll behavior, snap, and scrollbar utilities' },
    { name: 'SVG', generator: generateSvgUtilities, description: 'Fill and stroke utilities for SVG elements' },
    { name: 'Accessibility', generator: generateAccessibilityUtilities, description: 'Screen reader and focus utilities' },
  ];

  // Component sections (return CSS strings, not class arrays)
  const componentSections = [
    { name: 'Buttons', generator: generateButtonStyles, description: 'Button styles, variants, sizes, and states' },
    { name: 'Cards', generator: generateCardStyles, description: 'Card containers with headers, bodies, and footers' },
    { name: 'Forms', generator: generateFormStyles, description: 'Form inputs, selects, checkboxes, and more' },
    { name: 'Navigation', generator: generateNavigationStyles, description: 'Navbars, tabs, breadcrumbs, and pagination' },
    { name: 'Alerts', generator: generateAlertStyles, description: 'Alert messages and notifications' },
    { name: 'Badges', generator: generateBadgeStyles, description: 'Badges and labels' },
    { name: 'Modals', generator: generateModalStyles, description: 'Modal dialogs and overlays' },
    { name: 'Tables', generator: generateTableStyles, description: 'Table styles and variants' },
    { name: 'Avatars', generator: generateAvatarStyles, description: 'Avatar images and placeholders' },
    { name: 'Tooltips', generator: generateTooltipStyles, description: 'Tooltip popovers' },
    { name: 'Progress', generator: generateProgressStyles, description: 'Progress bars and indicators' },
    { name: 'Skeleton', generator: generateSkeletonStyles, description: 'Loading skeleton placeholders' },
    { name: 'Dropdown', generator: generateDropdownStyles, description: 'Dropdown menus' },
    { name: 'Accordion', generator: generateAccordionStyles, description: 'Collapsible accordion panels' },
    { name: 'Chips', generator: generateChipStyles, description: 'Chip/tag elements' },
    { name: 'Offcanvas', generator: generateOffcanvasStyles, description: 'Offcanvas/drawer navigation' },
    { name: 'Carousel', generator: generateCarouselStyles, description: 'Image carousels and sliders' },
    { name: 'Stepper', generator: generateStepperStyles, description: 'Step indicators and wizards' },
    { name: 'Timeline', generator: generateTimelineStyles, description: 'Timeline layouts' },
    { name: 'Rating', generator: generateRatingStyles, description: 'Star rating components' },
    { name: 'Upload', generator: generateUploadStyles, description: 'File upload areas' },
    { name: 'Spinner', generator: generateSpinnerStyles, description: 'Loading spinners' },
    { name: 'Popover', generator: generatePopoverStyles, description: 'Popover components' },
    { name: 'Command Palette', generator: generateCommandPaletteStyles, description: 'Command palette / search modal' },
    { name: 'Datepicker', generator: generateDatepickerStyles, description: 'Date picker components' },
    { name: 'Timepicker', generator: generateTimepickerStyles, description: 'Time picker components' },
  ];

  let markdown = `# JasminCSS Guide

> **Complete reference of all available utility classes and components**
>
> Generated automatically from JasminCSS v${getVersion()}

## Table of Contents

### Utilities
${sections.map((s, i) => `${i + 1}. [${s.name}](#${s.name.toLowerCase()})`).join('\n')}

### Components
${componentSections.map((s, i) => `${sections.length + i + 1}. [${s.name}](#${s.name.toLowerCase().replace(' ', '-')})`).join('\n')}

### Other
${sections.length + componentSections.length + 1}. [Responsive Variants](#responsive-variants)
${sections.length + componentSections.length + 2}. [State Variants](#state-variants)
${sections.length + componentSections.length + 3}. [Arbitrary Values](#arbitrary-values)

---

# Utilities

`;

  let totalClasses = 0;

  for (const section of sections) {
    console.log(`  Processing ${section.name}...`);

    const { classes } = section.generator(defaultConfig, {});
    totalClasses += classes.length;

    markdown += `## ${section.name}\n\n`;
    markdown += `> ${section.description}\n\n`;
    markdown += `| Class | CSS |\n`;
    markdown += `|-------|-----|\n`;

    // Group similar classes
    const grouped = groupClasses(classes);

    for (const cls of grouped) {
      // Escape pipes and clean up CSS for table
      const cleanCSS = cls.css
        .replace(/\.[^\s{]+\s*\{/, '')  // Remove selector
        .replace(/\}$/, '')              // Remove closing brace
        .replace(/\|/g, '\\|')           // Escape pipes
        .replace(/\n/g, ' ')             // Remove newlines
        .trim();

      const className = cls.name.replace(/\|/g, '\\|');
      markdown += `| \`${className}\` | \`${cleanCSS}\` |\n`;
    }

    markdown += '\n';
  }

  // Add Components section
  markdown += `\n---\n\n# Components\n\n`;

  for (const section of componentSections) {
    console.log(`  Processing ${section.name} component...`);

    const css = section.generator(defaultConfig);

    // Extract class names from CSS
    const classMatches = css.matchAll(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g);
    const classNames = [...new Set([...classMatches].map(m => m[1]))];
    totalClasses += classNames.length;

    markdown += `## ${section.name}\n\n`;
    markdown += `> ${section.description}\n\n`;
    markdown += `**Available classes:** `;
    markdown += classNames.slice(0, 30).map(c => `\`${c}\``).join(', ');
    if (classNames.length > 30) {
      markdown += `, ... and ${classNames.length - 30} more`;
    }
    markdown += '\n\n';

    // Show example usage
    const mainClass = classNames[0] || section.name.toLowerCase();
    markdown += `**Example:**\n\`\`\`html\n<div class="${mainClass}">...</div>\n\`\`\`\n\n`;
  }

  // Add responsive variants section
  markdown += `## Responsive Variants

Apply any utility at specific breakpoints by prefixing with the breakpoint name:

| Prefix | Min Width | Example |
|--------|-----------|---------|
| \`sm:\` | 640px | \`sm:flex\` |
| \`md:\` | 768px | \`md:grid-cols-2\` |
| \`lg:\` | 1024px | \`lg:text-xl\` |
| \`xl:\` | 1280px | \`xl:px-8\` |
| \`2xl:\` | 1536px | \`2xl:max-w-7xl\` |

**Example:**
\`\`\`html
<div class="flex flex-col md:flex-row lg:gap-8">
  <!-- Stacked on mobile, row on tablet, with gap on desktop -->
</div>
\`\`\`

`;

  // Add state variants section
  markdown += `## State Variants

Apply utilities on specific states by prefixing:

| Prefix | State | Example |
|--------|-------|---------|
| \`hover:\` | Mouse hover | \`hover:bg-primary\` |
| \`focus:\` | Element focused | \`focus:ring-2\` |
| \`focus-visible:\` | Keyboard focus | \`focus-visible:outline-2\` |
| \`focus-within:\` | Child focused | \`focus-within:border-primary\` |
| \`active:\` | Being clicked | \`active:scale-95\` |
| \`disabled:\` | Disabled state | \`disabled:opacity-50\` |
| \`first:\` | First child | \`first:mt-0\` |
| \`last:\` | Last child | \`last:mb-0\` |
| \`odd:\` | Odd children | \`odd:bg-gray-50\` |
| \`even:\` | Even children | \`even:bg-white\` |
| \`group-hover:\` | Parent hover | \`group-hover:visible\` |
| \`dark:\` | Dark mode | \`dark:bg-gray-900\` |

**Example:**
\`\`\`html
<button class="bg-primary hover:bg-primary-dark active:scale-95 disabled:opacity-50">
  Click me
</button>
\`\`\`

**Combining variants:**
\`\`\`html
<div class="md:hover:bg-gray-100">
  <!-- Hover effect only on medium screens and up -->
</div>
\`\`\`

`;

  // Add arbitrary values section
  markdown += `## Arbitrary Values

Use any value with bracket notation - just like Tailwind CSS!

### Colors
\`\`\`html
<div class="bg-[#FF5733]">Custom background</div>
<p class="text-[#1a1a2e]">Custom text color</p>
<div class="border-[#e94560]">Custom border</div>
\`\`\`

### Spacing & Sizing
\`\`\`html
<div class="p-[10px]">10px padding</div>
<div class="m-[2rem]">2rem margin</div>
<div class="w-[200px] h-[100px]">Fixed size box</div>
<div class="gap-[1.5em]">Custom gap</div>
<div class="top-[50%] left-[50%]">Centered position</div>
\`\`\`

### All Supported Arbitrary Values

#### Colors
| Utility | Example | Description |
|---------|---------|-------------|
| \`bg-[#hex]\` | \`bg-[#FF0000]\` | Background color |
| \`text-[#hex]\` | \`text-[#00FF00]\` | Text color |
| \`border-[#hex]\` | \`border-[#0000FF]\` | Border color |
| \`ring-[#hex]\` | \`ring-[#FF00FF]\` | Ring color |
| \`outline-[#hex]\` | \`outline-[#FFFF00]\` | Outline color |
| \`fill-[#hex]\` | \`fill-[#00FFFF]\` | SVG fill |
| \`stroke-[#hex]\` | \`stroke-[#FFA500]\` | SVG stroke |
| \`from-[#hex]\` | \`from-[#FF0000]\` | Gradient from |
| \`via-[#hex]\` | \`via-[#00FF00]\` | Gradient via |
| \`to-[#hex]\` | \`to-[#0000FF]\` | Gradient to |

#### Spacing
| Utility | Example | Description |
|---------|---------|-------------|
| \`p-[value]\` | \`p-[10px]\` | Padding all sides |
| \`px-[value]\` | \`px-[1rem]\` | Padding horizontal |
| \`py-[value]\` | \`py-[2em]\` | Padding vertical |
| \`pt-[value]\` | \`pt-[5px]\` | Padding top |
| \`pr-[value]\` | \`pr-[10px]\` | Padding right |
| \`pb-[value]\` | \`pb-[15px]\` | Padding bottom |
| \`pl-[value]\` | \`pl-[20px]\` | Padding left |
| \`m-[value]\` | \`m-[auto]\` | Margin all sides |
| \`mx-[value]\` | \`mx-[auto]\` | Margin horizontal |
| \`my-[value]\` | \`my-[2rem]\` | Margin vertical |
| \`mt-[value]\` | \`mt-[10px]\` | Margin top |
| \`-mt-[value]\` | \`-mt-[10px]\` | Negative margin top |

#### Sizing
| Utility | Example | Description |
|---------|---------|-------------|
| \`w-[value]\` | \`w-[200px]\` | Width |
| \`h-[value]\` | \`h-[100vh]\` | Height |
| \`min-w-[value]\` | \`min-w-[300px]\` | Min width |
| \`max-w-[value]\` | \`max-w-[600px]\` | Max width |
| \`min-h-[value]\` | \`min-h-[50vh]\` | Min height |
| \`max-h-[value]\` | \`max-h-[80vh]\` | Max height |
| \`size-[value]\` | \`size-[48px]\` | Width & height |

#### Layout
| Utility | Example | Description |
|---------|---------|-------------|
| \`gap-[value]\` | \`gap-[20px]\` | Gap |
| \`gap-x-[value]\` | \`gap-x-[10px]\` | Column gap |
| \`gap-y-[value]\` | \`gap-y-[15px]\` | Row gap |
| \`inset-[value]\` | \`inset-[0]\` | All inset |
| \`top-[value]\` | \`top-[50%]\` | Top position |
| \`left-[value]\` | \`left-[10px]\` | Left position |
| \`right-[value]\` | \`right-[0]\` | Right position |
| \`bottom-[value]\` | \`bottom-[20px]\` | Bottom position |

#### Typography
| Utility | Example | Description |
|---------|---------|-------------|
| \`text-[value]\` | \`text-[18px]\` | Font size |
| \`leading-[value]\` | \`leading-[1.8]\` | Line height |
| \`tracking-[value]\` | \`tracking-[0.05em]\` | Letter spacing |

#### Borders
| Utility | Example | Description |
|---------|---------|-------------|
| \`border-[value]\` | \`border-[3px]\` | Border width |
| \`rounded-[value]\` | \`rounded-[10px]\` | Border radius |

#### Other
| Utility | Example | Description |
|---------|---------|-------------|
| \`z-[value]\` | \`z-[999]\` | Z-index |
| \`opacity-[value]\` | \`opacity-[0.5]\` | Opacity |
| \`basis-[value]\` | \`basis-[200px]\` | Flex basis |
| \`translate-x-[value]\` | \`translate-x-[50%]\` | Translate X |
| \`translate-y-[value]\` | \`translate-y-[-10px]\` | Translate Y |

---

## Quick Start

### Using CDN (Runtime JIT)
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/jasmincss/dist/jasmin-runtime.min.js"></script>
</head>
<body>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
      Hello JasminCSS!
    </button>
  </div>
</body>
</html>
\`\`\`

### Using with Next.js (Build-time JIT)
\`\`\`js
// next.config.js
import withJasminCSS from 'jasmincss/plugins/next';
export default withJasminCSS({});
\`\`\`

\`\`\`css
/* globals.css */
@import 'jasmincss/css/min';
\`\`\`

### Using Full CSS (No JIT)
\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jasmincss/dist/jasmin.min.css">
\`\`\`

---

**Total utility classes: ${totalClasses.toLocaleString()}**

Generated on ${new Date().toISOString().split('T')[0]}
`;

  // Write the file
  const outputPath = path.join(rootDir, 'JASMINCSS-GUIDE.md');
  fs.writeFileSync(outputPath, markdown);

  console.log(`\n✅ Generated JASMINCSS-GUIDE.md with ${totalClasses.toLocaleString()} classes\n`);
}

function getVersion() {
  const pkgPath = path.join(rootDir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  return pkg.version;
}

function groupClasses(classes) {
  // Limit output to avoid massive file - show representative examples
  const seen = new Map();
  const result = [];

  for (const cls of classes) {
    // Extract base pattern (e.g., "p-" from "p-4")
    const baseMatch = cls.name.match(/^([a-z-]+?)(?:-[\d./]+|$)/);
    const base = baseMatch ? baseMatch[1] : cls.name;

    // Show first 3 examples of each pattern, plus specific important ones
    const count = seen.get(base) || 0;

    // Always include certain important classes
    const important = ['flex', 'grid', 'block', 'hidden', 'container',
                       'text-center', 'font-bold', 'rounded', 'shadow',
                       'transition', 'transform'];

    if (count < 3 || important.includes(cls.name)) {
      result.push(cls);
      seen.set(base, count + 1);
    }
  }

  return result;
}

generateDocs().catch(err => {
  console.error('Failed to generate docs:', err);
  process.exit(1);
});
