/**
 * Generate CSS for arbitrary spacing values detected in content
 * Supports: p-[10px], m-[2rem], w-[200px], h-[50vh], gap-[1em], etc.
 */
export function generateArbitrarySpacingCSS(usedClasses) {
  if (!usedClasses) return '';

  const cssRules = [];

  // Pattern for arbitrary values: prefix-[value]
  // Supports: px, rem, em, %, vh, vw, etc.
  const arbitraryPattern = /^(-)?([a-z]+(?:-[a-z])?)-\[([^\]]+)\]$/;

  for (const className of usedClasses) {
    const match = className.match(arbitraryPattern);
    if (!match) continue;

    const [, negative, prefix, rawValue] = match;
    const value = negative ? `-${rawValue}` : rawValue;
    const escapedClass = className
      .replace(/\[/g, '\\[')
      .replace(/\]/g, '\\]')
      .replace(/\//g, '\\/')
      .replace(/%/g, '\\%')
      .replace(/\./g, '\\.');

    // Spacing utilities
    const spacingMap = {
      // Padding
      'p': `padding: ${value};`,
      'px': `padding-left: ${value}; padding-right: ${value};`,
      'py': `padding-top: ${value}; padding-bottom: ${value};`,
      'pt': `padding-top: ${value};`,
      'pr': `padding-right: ${value};`,
      'pb': `padding-bottom: ${value};`,
      'pl': `padding-left: ${value};`,
      'ps': `padding-inline-start: ${value};`,
      'pe': `padding-inline-end: ${value};`,
      // Margin
      'm': `margin: ${value};`,
      'mx': `margin-left: ${value}; margin-right: ${value};`,
      'my': `margin-top: ${value}; margin-bottom: ${value};`,
      'mt': `margin-top: ${value};`,
      'mr': `margin-right: ${value};`,
      'mb': `margin-bottom: ${value};`,
      'ml': `margin-left: ${value};`,
      'ms': `margin-inline-start: ${value};`,
      'me': `margin-inline-end: ${value};`,
      // Width/Height
      'w': `width: ${value};`,
      'h': `height: ${value};`,
      'min-w': `min-width: ${value};`,
      'max-w': `max-width: ${value};`,
      'min-h': `min-height: ${value};`,
      'max-h': `max-height: ${value};`,
      'size': `width: ${value}; height: ${value};`,
      // Gap
      'gap': `gap: ${value};`,
      'gap-x': `column-gap: ${value};`,
      'gap-y': `row-gap: ${value};`,
      // Inset
      'inset': `inset: ${value};`,
      'inset-x': `left: ${value}; right: ${value};`,
      'inset-y': `top: ${value}; bottom: ${value};`,
      'top': `top: ${value};`,
      'right': `right: ${value};`,
      'bottom': `bottom: ${value};`,
      'left': `left: ${value};`,
      // Space between
      'space-x': null, // Special handling
      'space-y': null, // Special handling
      // Translate
      'translate-x': `transform: translateX(${value});`,
      'translate-y': `transform: translateY(${value});`,
      // Text/Font
      'text': `font-size: ${value};`,
      'leading': `line-height: ${value};`,
      'tracking': `letter-spacing: ${value};`,
      // Border
      'border': `border-width: ${value};`,
      'border-t': `border-top-width: ${value};`,
      'border-r': `border-right-width: ${value};`,
      'border-b': `border-bottom-width: ${value};`,
      'border-l': `border-left-width: ${value};`,
      // Border radius
      'rounded': `border-radius: ${value};`,
      'rounded-t': `border-top-left-radius: ${value}; border-top-right-radius: ${value};`,
      'rounded-r': `border-top-right-radius: ${value}; border-bottom-right-radius: ${value};`,
      'rounded-b': `border-bottom-left-radius: ${value}; border-bottom-right-radius: ${value};`,
      'rounded-l': `border-top-left-radius: ${value}; border-bottom-left-radius: ${value};`,
      // Other
      'opacity': `opacity: ${value};`,
      'z': `z-index: ${value};`,
      'order': `order: ${value};`,
      'basis': `flex-basis: ${value};`,
      'grow': `flex-grow: ${value};`,
      'shrink': `flex-shrink: ${value};`,
    };

    const css = spacingMap[prefix];
    if (css) {
      cssRules.push(`.${escapedClass} { ${css} }`);
    } else if (prefix === 'space-x') {
      cssRules.push(`.${escapedClass} > :not([hidden]) ~ :not([hidden]) { margin-left: ${value}; }`);
    } else if (prefix === 'space-y') {
      cssRules.push(`.${escapedClass} > :not([hidden]) ~ :not([hidden]) { margin-top: ${value}; }`);
    }
  }

  return cssRules.join('\n');
}

export function generateSpacingUtilities(config, options = {}) {
  const classes = [];
  const spacing = config.spacing || {};
  const { usedClasses } = options;

  // Padding
  Object.entries(spacing).forEach(([key, value]) => {
    const safeName = key.replace(/\./g, '\\.');

    // All sides
    classes.push({ name: `p-${key}`, css: `.p-${safeName} { padding: ${value}; }` });

    // Individual sides
    classes.push({ name: `pt-${key}`, css: `.pt-${safeName} { padding-top: ${value}; }` });
    classes.push({ name: `pr-${key}`, css: `.pr-${safeName} { padding-right: ${value}; }` });
    classes.push({ name: `pb-${key}`, css: `.pb-${safeName} { padding-bottom: ${value}; }` });
    classes.push({ name: `pl-${key}`, css: `.pl-${safeName} { padding-left: ${value}; }` });

    // Horizontal and vertical
    classes.push({ name: `px-${key}`, css: `.px-${safeName} { padding-left: ${value}; padding-right: ${value}; }` });
    classes.push({ name: `py-${key}`, css: `.py-${safeName} { padding-top: ${value}; padding-bottom: ${value}; }` });

    // Logical properties
    classes.push({ name: `ps-${key}`, css: `.ps-${safeName} { padding-inline-start: ${value}; }` });
    classes.push({ name: `pe-${key}`, css: `.pe-${safeName} { padding-inline-end: ${value}; }` });
  });

  // Margin (positive values)
  Object.entries(spacing).forEach(([key, value]) => {
    const safeName = key.replace(/\./g, '\\.');

    // All sides
    classes.push({ name: `m-${key}`, css: `.m-${safeName} { margin: ${value}; }` });

    // Individual sides
    classes.push({ name: `mt-${key}`, css: `.mt-${safeName} { margin-top: ${value}; }` });
    classes.push({ name: `mr-${key}`, css: `.mr-${safeName} { margin-right: ${value}; }` });
    classes.push({ name: `mb-${key}`, css: `.mb-${safeName} { margin-bottom: ${value}; }` });
    classes.push({ name: `ml-${key}`, css: `.ml-${safeName} { margin-left: ${value}; }` });

    // Horizontal and vertical
    classes.push({ name: `mx-${key}`, css: `.mx-${safeName} { margin-left: ${value}; margin-right: ${value}; }` });
    classes.push({ name: `my-${key}`, css: `.my-${safeName} { margin-top: ${value}; margin-bottom: ${value}; }` });

    // Logical properties
    classes.push({ name: `ms-${key}`, css: `.ms-${safeName} { margin-inline-start: ${value}; }` });
    classes.push({ name: `me-${key}`, css: `.me-${safeName} { margin-inline-end: ${value}; }` });
  });

  // Margin auto
  classes.push({ name: 'm-auto', css: '.m-auto { margin: auto; }' });
  classes.push({ name: 'mx-auto', css: '.mx-auto { margin-left: auto; margin-right: auto; }' });
  classes.push({ name: 'my-auto', css: '.my-auto { margin-top: auto; margin-bottom: auto; }' });
  classes.push({ name: 'mt-auto', css: '.mt-auto { margin-top: auto; }' });
  classes.push({ name: 'mr-auto', css: '.mr-auto { margin-right: auto; }' });
  classes.push({ name: 'mb-auto', css: '.mb-auto { margin-bottom: auto; }' });
  classes.push({ name: 'ml-auto', css: '.ml-auto { margin-left: auto; }' });
  classes.push({ name: 'ms-auto', css: '.ms-auto { margin-inline-start: auto; }' });
  classes.push({ name: 'me-auto', css: '.me-auto { margin-inline-end: auto; }' });

  // Negative margins
  Object.entries(spacing).forEach(([key, value]) => {
    if (key === '0' || key === 'px') return; // Skip 0 and px for negative

    const safeName = key.replace(/\./g, '\\.');

    // All sides
    classes.push({ name: `-m-${key}`, css: `.-m-${safeName} { margin: -${value}; }` });

    // Individual sides
    classes.push({ name: `-mt-${key}`, css: `.-mt-${safeName} { margin-top: -${value}; }` });
    classes.push({ name: `-mr-${key}`, css: `.-mr-${safeName} { margin-right: -${value}; }` });
    classes.push({ name: `-mb-${key}`, css: `.-mb-${safeName} { margin-bottom: -${value}; }` });
    classes.push({ name: `-ml-${key}`, css: `.-ml-${safeName} { margin-left: -${value}; }` });

    // Horizontal and vertical
    classes.push({ name: `-mx-${key}`, css: `.-mx-${safeName} { margin-left: -${value}; margin-right: -${value}; }` });
    classes.push({ name: `-my-${key}`, css: `.-my-${safeName} { margin-top: -${value}; margin-bottom: -${value}; }` });
  });

  // Space Between (for flex/grid children)
  Object.entries(spacing).forEach(([key, value]) => {
    const safeName = key.replace(/\./g, '\\.');

    classes.push({
      name: `space-x-${key}`,
      css: `.space-x-${safeName} > :not([hidden]) ~ :not([hidden]) { margin-left: ${value}; }`
    });
    classes.push({
      name: `space-y-${key}`,
      css: `.space-y-${safeName} > :not([hidden]) ~ :not([hidden]) { margin-top: ${value}; }`
    });

    // Negative space
    if (key !== '0' && key !== 'px') {
      classes.push({
        name: `-space-x-${key}`,
        css: `.-space-x-${safeName} > :not([hidden]) ~ :not([hidden]) { margin-left: -${value}; }`
      });
      classes.push({
        name: `-space-y-${key}`,
        css: `.-space-y-${safeName} > :not([hidden]) ~ :not([hidden]) { margin-top: -${value}; }`
      });
    }
  });

  // Space reverse (for flex-row-reverse and flex-col-reverse)
  classes.push({
    name: 'space-x-reverse',
    css: `.space-x-reverse > :not([hidden]) ~ :not([hidden]) { --j-space-x-reverse: 1; margin-right: calc(var(--j-space-x, 0) * var(--j-space-x-reverse)); margin-left: calc(var(--j-space-x, 0) * calc(1 - var(--j-space-x-reverse))); }`
  });
  classes.push({
    name: 'space-y-reverse',
    css: `.space-y-reverse > :not([hidden]) ~ :not([hidden]) { --j-space-y-reverse: 1; margin-bottom: calc(var(--j-space-y, 0) * var(--j-space-y-reverse)); margin-top: calc(var(--j-space-y, 0) * calc(1 - var(--j-space-y-reverse))); }`
  });

  // Generate arbitrary spacing CSS for JIT
  const arbitraryCSS = generateArbitrarySpacingCSS(usedClasses);

  return {
    css: classes.map(c => c.css).join('\n') + (arbitraryCSS ? '\n' + arbitraryCSS : ''),
    classes
  };
}
