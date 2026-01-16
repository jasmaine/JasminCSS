/**
 * Generate CSS for arbitrary color values detected in content
 * Supports: bg-[#hex], text-[#hex], border-[#hex], etc.
 */
export function generateArbitraryColorCSS(usedClasses) {
  if (!usedClasses) return '';

  const cssRules = [];
  const arbitraryColorPattern = /^(bg|text|border|ring|outline|fill|stroke|accent|caret|decoration|shadow|from|via|to)-\[#([a-fA-F0-9]{3,8})\]$/;

  for (const className of usedClasses) {
    const match = className.match(arbitraryColorPattern);
    if (match) {
      const [, prefix, hexValue] = match;
      const hexColor = `#${hexValue}`;
      // Escape brackets for CSS selector
      const escapedClassName = className.replace('[', '\\[').replace(']', '\\]').replace('#', '\\#');

      switch (prefix) {
        case 'bg':
          cssRules.push(`.${escapedClassName} { background-color: ${hexColor}; }`);
          break;
        case 'text':
          cssRules.push(`.${escapedClassName} { color: ${hexColor}; }`);
          break;
        case 'border':
          cssRules.push(`.${escapedClassName} { border-color: ${hexColor}; }`);
          break;
        case 'ring':
          cssRules.push(`.${escapedClassName} { --j-ring-color: ${hexColor}; }`);
          break;
        case 'outline':
          cssRules.push(`.${escapedClassName} { outline-color: ${hexColor}; }`);
          break;
        case 'fill':
          cssRules.push(`.${escapedClassName} { fill: ${hexColor}; }`);
          break;
        case 'stroke':
          cssRules.push(`.${escapedClassName} { stroke: ${hexColor}; }`);
          break;
        case 'accent':
          cssRules.push(`.${escapedClassName} { accent-color: ${hexColor}; }`);
          break;
        case 'caret':
          cssRules.push(`.${escapedClassName} { caret-color: ${hexColor}; }`);
          break;
        case 'decoration':
          cssRules.push(`.${escapedClassName} { text-decoration-color: ${hexColor}; }`);
          break;
        case 'shadow':
          cssRules.push(`.${escapedClassName} { --j-shadow-color: ${hexColor}; }`);
          break;
        case 'from':
          cssRules.push(`.${escapedClassName} { --j-gradient-from: ${hexColor}; --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent); }`);
          break;
        case 'via':
          cssRules.push(`.${escapedClassName} { --j-gradient-via: ${hexColor}; --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent); }`);
          break;
        case 'to':
          cssRules.push(`.${escapedClassName} { --j-gradient-to: ${hexColor}; }`);
          break;
      }
    }
  }

  return cssRules.join('\n');
}

export function generateColorUtilities(config, options = {}) {
  const classes = [];
  const { branding, colors } = config;
  const { usedClasses } = options;

  // Brand colors (primary, secondary, accent, etc.)
  const brandColors = branding?.colors || {};

  // Generate text colors
  Object.entries(brandColors).forEach(([name, value]) => {
    classes.push({ name: `text-${name}`, css: `.text-${name} { color: var(--j-${name}); }` });
  });

  // Generate background colors
  Object.entries(brandColors).forEach(([name, value]) => {
    classes.push({ name: `bg-${name}`, css: `.bg-${name} { background-color: var(--j-${name}); }` });
  });

  // Generate border colors
  Object.entries(brandColors).forEach(([name, value]) => {
    classes.push({ name: `border-${name}`, css: `.border-${name} { border-color: var(--j-${name}); }` });
  });

  // Extended color palette
  const extendedColors = colors || {};
  Object.entries(extendedColors).forEach(([colorName, shades]) => {
    if (typeof shades === 'object' && !Array.isArray(shades)) {
      Object.entries(shades).forEach(([shade, value]) => {
        // Text
        classes.push({
          name: `text-${colorName}-${shade}`,
          css: `.text-${colorName}-${shade} { color: var(--j-${colorName}-${shade}); }`
        });
        // Background
        classes.push({
          name: `bg-${colorName}-${shade}`,
          css: `.bg-${colorName}-${shade} { background-color: var(--j-${colorName}-${shade}); }`
        });
        // Border
        classes.push({
          name: `border-${colorName}-${shade}`,
          css: `.border-${colorName}-${shade} { border-color: var(--j-${colorName}-${shade}); }`
        });
        // Ring
        classes.push({
          name: `ring-${colorName}-${shade}`,
          css: `.ring-${colorName}-${shade} { --j-ring-color: var(--j-${colorName}-${shade}); }`
        });
        // Decoration
        classes.push({
          name: `decoration-${colorName}-${shade}`,
          css: `.decoration-${colorName}-${shade} { text-decoration-color: var(--j-${colorName}-${shade}); }`
        });
        // Divide
        classes.push({
          name: `divide-${colorName}-${shade}`,
          css: `.divide-${colorName}-${shade} > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-${colorName}-${shade}); }`
        });
        // Outline
        classes.push({
          name: `outline-${colorName}-${shade}`,
          css: `.outline-${colorName}-${shade} { outline-color: var(--j-${colorName}-${shade}); }`
        });
        // Shadow (colored)
        classes.push({
          name: `shadow-${colorName}-${shade}`,
          css: `.shadow-${colorName}-${shade} { --j-shadow-color: var(--j-${colorName}-${shade}); }`
        });
        // Accent
        classes.push({
          name: `accent-${colorName}-${shade}`,
          css: `.accent-${colorName}-${shade} { accent-color: var(--j-${colorName}-${shade}); }`
        });
        // Caret
        classes.push({
          name: `caret-${colorName}-${shade}`,
          css: `.caret-${colorName}-${shade} { caret-color: var(--j-${colorName}-${shade}); }`
        });
        // Fill
        classes.push({
          name: `fill-${colorName}-${shade}`,
          css: `.fill-${colorName}-${shade} { fill: var(--j-${colorName}-${shade}); }`
        });
        // Stroke
        classes.push({
          name: `stroke-${colorName}-${shade}`,
          css: `.stroke-${colorName}-${shade} { stroke: var(--j-${colorName}-${shade}); }`
        });
      });
    }
  });

  // Special colors
  const specialColors = {
    'transparent': 'transparent',
    'current': 'currentColor',
    'inherit': 'inherit',
    'white': '#ffffff',
    'black': '#000000'
  };

  Object.entries(specialColors).forEach(([name, value]) => {
    classes.push({ name: `text-${name}`, css: `.text-${name} { color: ${value}; }` });
    classes.push({ name: `bg-${name}`, css: `.bg-${name} { background-color: ${value}; }` });
    classes.push({ name: `border-${name}`, css: `.border-${name} { border-color: ${value}; }` });
  });

  // Semantic colors
  classes.push({ name: 'text-muted', css: '.text-muted { color: var(--j-text-muted); }' });
  classes.push({ name: 'text-subtle', css: '.text-subtle { color: var(--j-text-subtle); }' });
  classes.push({ name: 'bg-subtle', css: '.bg-subtle { background-color: var(--j-bg-subtle); }' });
  classes.push({ name: 'bg-muted', css: '.bg-muted { background-color: var(--j-bg-muted); }' });
  classes.push({ name: 'border-default', css: '.border-default { border-color: var(--j-border); }' });
  classes.push({ name: 'border-subtle', css: '.border-subtle { border-color: var(--j-border-subtle); }' });

  // Opacity
  const opacities = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  opacities.forEach(op => {
    classes.push({ name: `opacity-${op}`, css: `.opacity-${op} { opacity: ${op / 100}; }` });
  });

  // Background Opacity (via CSS variables)
  opacities.forEach(op => {
    classes.push({
      name: `bg-opacity-${op}`,
      css: `.bg-opacity-${op} { --j-bg-opacity: ${op / 100}; }`
    });
  });

  // Text Opacity (via CSS variables)
  opacities.forEach(op => {
    classes.push({
      name: `text-opacity-${op}`,
      css: `.text-opacity-${op} { --j-text-opacity: ${op / 100}; }`
    });
  });

  // Border Opacity
  opacities.forEach(op => {
    classes.push({
      name: `border-opacity-${op}`,
      css: `.border-opacity-${op} { --j-border-opacity: ${op / 100}; }`
    });
  });

  // Gradients
  classes.push({ name: 'bg-none', css: '.bg-none { background-image: none; }' });
  classes.push({
    name: 'bg-gradient-to-t',
    css: '.bg-gradient-to-t { background-image: linear-gradient(to top, var(--j-gradient-stops)); }'
  });
  classes.push({
    name: 'bg-gradient-to-tr',
    css: '.bg-gradient-to-tr { background-image: linear-gradient(to top right, var(--j-gradient-stops)); }'
  });
  classes.push({
    name: 'bg-gradient-to-r',
    css: '.bg-gradient-to-r { background-image: linear-gradient(to right, var(--j-gradient-stops)); }'
  });
  classes.push({
    name: 'bg-gradient-to-br',
    css: '.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--j-gradient-stops)); }'
  });
  classes.push({
    name: 'bg-gradient-to-b',
    css: '.bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--j-gradient-stops)); }'
  });
  classes.push({
    name: 'bg-gradient-to-bl',
    css: '.bg-gradient-to-bl { background-image: linear-gradient(to bottom left, var(--j-gradient-stops)); }'
  });
  classes.push({
    name: 'bg-gradient-to-l',
    css: '.bg-gradient-to-l { background-image: linear-gradient(to left, var(--j-gradient-stops)); }'
  });
  classes.push({
    name: 'bg-gradient-to-tl',
    css: '.bg-gradient-to-tl { background-image: linear-gradient(to top left, var(--j-gradient-stops)); }'
  });

  // Gradient stops (from, via, to)
  Object.entries(extendedColors).forEach(([colorName, shades]) => {
    if (typeof shades === 'object' && !Array.isArray(shades)) {
      Object.entries(shades).forEach(([shade, value]) => {
        classes.push({
          name: `from-${colorName}-${shade}`,
          css: `.from-${colorName}-${shade} { --j-gradient-from: var(--j-${colorName}-${shade}); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent); }`
        });
        classes.push({
          name: `via-${colorName}-${shade}`,
          css: `.via-${colorName}-${shade} { --j-gradient-via: var(--j-${colorName}-${shade}); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent); }`
        });
        classes.push({
          name: `to-${colorName}-${shade}`,
          css: `.to-${colorName}-${shade} { --j-gradient-to: var(--j-${colorName}-${shade}); }`
        });
      });
    }
  });

  // Brand color gradients
  Object.keys(brandColors).forEach(name => {
    classes.push({
      name: `from-${name}`,
      css: `.from-${name} { --j-gradient-from: var(--j-${name}); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent); }`
    });
    classes.push({
      name: `via-${name}`,
      css: `.via-${name} { --j-gradient-via: var(--j-${name}); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent); }`
    });
    classes.push({
      name: `to-${name}`,
      css: `.to-${name} { --j-gradient-to: var(--j-${name}); }`
    });
  });

  // Special gradient stops
  classes.push({
    name: 'from-transparent',
    css: '.from-transparent { --j-gradient-from: transparent; --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent); }'
  });
  classes.push({
    name: 'via-transparent',
    css: '.via-transparent { --j-gradient-via: transparent; --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent); }'
  });
  classes.push({
    name: 'to-transparent',
    css: '.to-transparent { --j-gradient-to: transparent; }'
  });

  // Generate arbitrary color CSS for JIT
  const arbitraryCSS = generateArbitraryColorCSS(usedClasses);

  return {
    css: classes.map(c => c.css).join('\n') + (arbitraryCSS ? '\n' + arbitraryCSS : ''),
    classes
  };
}
