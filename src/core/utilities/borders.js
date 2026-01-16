export function generateBorderUtilities(config) {
  const classes = [];

  // Border Width
  const borderWidths = ['0', '1', '2', '3', '4', '6', '8', '12'];
  borderWidths.forEach(w => {
    const value = w === '0' ? '0px' : `${w}px`;
    classes.push({ name: `border-${w}`, css: `.border-${w} { border-width: ${value}; }` });
    classes.push({ name: `border-t-${w}`, css: `.border-t-${w} { border-top-width: ${value}; }` });
    classes.push({ name: `border-r-${w}`, css: `.border-r-${w} { border-right-width: ${value}; }` });
    classes.push({ name: `border-b-${w}`, css: `.border-b-${w} { border-bottom-width: ${value}; }` });
    classes.push({ name: `border-l-${w}`, css: `.border-l-${w} { border-left-width: ${value}; }` });
    classes.push({ name: `border-x-${w}`, css: `.border-x-${w} { border-left-width: ${value}; border-right-width: ${value}; }` });
    classes.push({ name: `border-y-${w}`, css: `.border-y-${w} { border-top-width: ${value}; border-bottom-width: ${value}; }` });
  });

  // Default border (1px)
  classes.push({ name: 'border', css: '.border { border-width: 1px; }' });
  classes.push({ name: 'border-t', css: '.border-t { border-top-width: 1px; }' });
  classes.push({ name: 'border-r', css: '.border-r { border-right-width: 1px; }' });
  classes.push({ name: 'border-b', css: '.border-b { border-bottom-width: 1px; }' });
  classes.push({ name: 'border-l', css: '.border-l { border-left-width: 1px; }' });
  classes.push({ name: 'border-x', css: '.border-x { border-left-width: 1px; border-right-width: 1px; }' });
  classes.push({ name: 'border-y', css: '.border-y { border-top-width: 1px; border-bottom-width: 1px; }' });

  // Border Style
  ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none'].forEach(s => {
    classes.push({ name: `border-${s}`, css: `.border-${s} { border-style: ${s}; }` });
  });

  // Border Radius
  const radii = {
    'none': '0px',
    'sm': '0.125rem',
    '': '0.25rem',
    'md': '0.375rem',
    'lg': '0.5rem',
    'xl': '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    'full': '9999px'
  };
  Object.entries(radii).forEach(([key, value]) => {
    const name = key === '' ? 'rounded' : `rounded-${key}`;
    classes.push({ name, css: `.${name} { border-radius: ${value}; }` });

    // Corners
    if (key !== '') {
      const cornerName = key === '' ? '' : `-${key}`;
      classes.push({ name: `rounded-t${cornerName}`, css: `.rounded-t${cornerName} { border-top-left-radius: ${value}; border-top-right-radius: ${value}; }` });
      classes.push({ name: `rounded-r${cornerName}`, css: `.rounded-r${cornerName} { border-top-right-radius: ${value}; border-bottom-right-radius: ${value}; }` });
      classes.push({ name: `rounded-b${cornerName}`, css: `.rounded-b${cornerName} { border-bottom-left-radius: ${value}; border-bottom-right-radius: ${value}; }` });
      classes.push({ name: `rounded-l${cornerName}`, css: `.rounded-l${cornerName} { border-top-left-radius: ${value}; border-bottom-left-radius: ${value}; }` });
      classes.push({ name: `rounded-tl${cornerName}`, css: `.rounded-tl${cornerName} { border-top-left-radius: ${value}; }` });
      classes.push({ name: `rounded-tr${cornerName}`, css: `.rounded-tr${cornerName} { border-top-right-radius: ${value}; }` });
      classes.push({ name: `rounded-bl${cornerName}`, css: `.rounded-bl${cornerName} { border-bottom-left-radius: ${value}; }` });
      classes.push({ name: `rounded-br${cornerName}`, css: `.rounded-br${cornerName} { border-bottom-right-radius: ${value}; }` });
    }
  });

  // Divide Width (for child elements)
  ['0', '1', '2', '4', '8'].forEach(w => {
    const value = w === '0' ? '0px' : `${w}px`;
    classes.push({
      name: `divide-x-${w}`,
      css: `.divide-x-${w} > :not([hidden]) ~ :not([hidden]) { border-left-width: ${value}; }`
    });
    classes.push({
      name: `divide-y-${w}`,
      css: `.divide-y-${w} > :not([hidden]) ~ :not([hidden]) { border-top-width: ${value}; }`
    });
  });
  classes.push({
    name: 'divide-x',
    css: '.divide-x > :not([hidden]) ~ :not([hidden]) { border-left-width: 1px; }'
  });
  classes.push({
    name: 'divide-y',
    css: '.divide-y > :not([hidden]) ~ :not([hidden]) { border-top-width: 1px; }'
  });

  // Divide Style
  ['solid', 'dashed', 'dotted', 'double', 'none'].forEach(s => {
    classes.push({
      name: `divide-${s}`,
      css: `.divide-${s} > :not([hidden]) ~ :not([hidden]) { border-style: ${s}; }`
    });
  });

  // Outline Width
  ['0', '1', '2', '4', '8'].forEach(w => {
    classes.push({ name: `outline-${w}`, css: `.outline-${w} { outline-width: ${w}px; }` });
  });
  classes.push({ name: 'outline', css: '.outline { outline-style: solid; }' });
  classes.push({ name: 'outline-none', css: '.outline-none { outline: 2px solid transparent; outline-offset: 2px; }' });

  // Outline Style
  ['none', 'solid', 'dashed', 'dotted', 'double'].forEach(s => {
    classes.push({ name: `outline-${s}`, css: `.outline-${s} { outline-style: ${s}; }` });
  });

  // Outline Offset
  ['0', '1', '2', '4', '8'].forEach(o => {
    classes.push({ name: `outline-offset-${o}`, css: `.outline-offset-${o} { outline-offset: ${o}px; }` });
  });

  // Ring (box-shadow based outline)
  ['0', '1', '2', '4', '8'].forEach(w => {
    const value = w === '0' ? '0px' : `${w}px`;
    classes.push({
      name: `ring-${w}`,
      css: `.ring-${w} { --j-ring-offset-shadow: var(--j-ring-inset) 0 0 0 var(--j-ring-offset-width) var(--j-ring-offset-color); --j-ring-shadow: var(--j-ring-inset) 0 0 0 calc(${value} + var(--j-ring-offset-width)) var(--j-ring-color); box-shadow: var(--j-ring-offset-shadow), var(--j-ring-shadow), var(--j-shadow, 0 0 #0000); }`
    });
  });
  classes.push({
    name: 'ring',
    css: '.ring { --j-ring-offset-shadow: var(--j-ring-inset) 0 0 0 var(--j-ring-offset-width) var(--j-ring-offset-color); --j-ring-shadow: var(--j-ring-inset) 0 0 0 calc(3px + var(--j-ring-offset-width)) var(--j-ring-color); box-shadow: var(--j-ring-offset-shadow), var(--j-ring-shadow), var(--j-shadow, 0 0 #0000); }'
  });
  classes.push({ name: 'ring-inset', css: '.ring-inset { --j-ring-inset: inset; }' });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
