export function generateSpacingUtilities(config) {
  const classes = [];
  const spacing = config.spacing || {};

  // Padding
  Object.entries(spacing).forEach(([key, value]) => {
    const safeName = key.replace('.', '\\.');

    // All sides
    classes.push({ name: `p-${safeName}`, css: `.p-${safeName} { padding: ${value}; }` });

    // Individual sides
    classes.push({ name: `pt-${safeName}`, css: `.pt-${safeName} { padding-top: ${value}; }` });
    classes.push({ name: `pr-${safeName}`, css: `.pr-${safeName} { padding-right: ${value}; }` });
    classes.push({ name: `pb-${safeName}`, css: `.pb-${safeName} { padding-bottom: ${value}; }` });
    classes.push({ name: `pl-${safeName}`, css: `.pl-${safeName} { padding-left: ${value}; }` });

    // Horizontal and vertical
    classes.push({ name: `px-${safeName}`, css: `.px-${safeName} { padding-left: ${value}; padding-right: ${value}; }` });
    classes.push({ name: `py-${safeName}`, css: `.py-${safeName} { padding-top: ${value}; padding-bottom: ${value}; }` });

    // Logical properties
    classes.push({ name: `ps-${safeName}`, css: `.ps-${safeName} { padding-inline-start: ${value}; }` });
    classes.push({ name: `pe-${safeName}`, css: `.pe-${safeName} { padding-inline-end: ${value}; }` });
  });

  // Margin (positive values)
  Object.entries(spacing).forEach(([key, value]) => {
    const safeName = key.replace('.', '\\.');

    // All sides
    classes.push({ name: `m-${safeName}`, css: `.m-${safeName} { margin: ${value}; }` });

    // Individual sides
    classes.push({ name: `mt-${safeName}`, css: `.mt-${safeName} { margin-top: ${value}; }` });
    classes.push({ name: `mr-${safeName}`, css: `.mr-${safeName} { margin-right: ${value}; }` });
    classes.push({ name: `mb-${safeName}`, css: `.mb-${safeName} { margin-bottom: ${value}; }` });
    classes.push({ name: `ml-${safeName}`, css: `.ml-${safeName} { margin-left: ${value}; }` });

    // Horizontal and vertical
    classes.push({ name: `mx-${safeName}`, css: `.mx-${safeName} { margin-left: ${value}; margin-right: ${value}; }` });
    classes.push({ name: `my-${safeName}`, css: `.my-${safeName} { margin-top: ${value}; margin-bottom: ${value}; }` });

    // Logical properties
    classes.push({ name: `ms-${safeName}`, css: `.ms-${safeName} { margin-inline-start: ${value}; }` });
    classes.push({ name: `me-${safeName}`, css: `.me-${safeName} { margin-inline-end: ${value}; }` });
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

    const safeName = key.replace('.', '\\.');

    // All sides
    classes.push({ name: `-m-${safeName}`, css: `.-m-${safeName} { margin: -${value}; }` });

    // Individual sides
    classes.push({ name: `-mt-${safeName}`, css: `.-mt-${safeName} { margin-top: -${value}; }` });
    classes.push({ name: `-mr-${safeName}`, css: `.-mr-${safeName} { margin-right: -${value}; }` });
    classes.push({ name: `-mb-${safeName}`, css: `.-mb-${safeName} { margin-bottom: -${value}; }` });
    classes.push({ name: `-ml-${safeName}`, css: `.-ml-${safeName} { margin-left: -${value}; }` });

    // Horizontal and vertical
    classes.push({ name: `-mx-${safeName}`, css: `.-mx-${safeName} { margin-left: -${value}; margin-right: -${value}; }` });
    classes.push({ name: `-my-${safeName}`, css: `.-my-${safeName} { margin-top: -${value}; margin-bottom: -${value}; }` });
  });

  // Space Between (for flex/grid children)
  Object.entries(spacing).forEach(([key, value]) => {
    const safeName = key.replace('.', '\\.');

    classes.push({
      name: `space-x-${safeName}`,
      css: `.space-x-${safeName} > :not([hidden]) ~ :not([hidden]) { margin-left: ${value}; }`
    });
    classes.push({
      name: `space-y-${safeName}`,
      css: `.space-y-${safeName} > :not([hidden]) ~ :not([hidden]) { margin-top: ${value}; }`
    });

    // Negative space
    if (key !== '0' && key !== 'px') {
      classes.push({
        name: `-space-x-${safeName}`,
        css: `.-space-x-${safeName} > :not([hidden]) ~ :not([hidden]) { margin-left: -${value}; }`
      });
      classes.push({
        name: `-space-y-${safeName}`,
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

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
