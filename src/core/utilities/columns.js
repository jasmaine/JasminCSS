// CSS Multi-column layout utilities for JasminCSS

export function generateColumnUtilities(config) {
  const classes = [];

  // Column Count
  const counts = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'];
  counts.forEach(count => {
    classes.push({
      name: `columns-${count}`,
      css: `.columns-${count} { column-count: ${count}; }`
    });
  });

  // Column Width Presets
  const widths = {
    '3xs': '16rem',
    '2xs': '18rem',
    'xs': '20rem',
    'sm': '24rem',
    'md': '28rem',
    'lg': '32rem',
    'xl': '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem'
  };
  Object.entries(widths).forEach(([name, value]) => {
    classes.push({
      name: `columns-${name}`,
      css: `.columns-${name} { column-width: ${value}; }`
    });
  });

  // Column Gap (using spacing scale)
  const gaps = {
    '0': '0px',
    'px': '1px',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    'normal': 'normal'
  };
  Object.entries(gaps).forEach(([name, value]) => {
    const className = name.includes('.') ? name.replace('.', '\\.') : name;
    classes.push({
      name: `column-gap-${name}`,
      css: `.column-gap-${className} { column-gap: ${value}; }`
    });
  });

  // Column Rule Width
  const ruleWidths = {
    '0': '0px',
    '1': '1px',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  };
  Object.entries(ruleWidths).forEach(([name, value]) => {
    classes.push({
      name: `column-rule-${name}`,
      css: `.column-rule-${name} { column-rule-width: ${value}; }`
    });
  });

  // Column Rule Style
  const ruleStyles = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
  ruleStyles.forEach(style => {
    classes.push({
      name: `column-rule-${style}`,
      css: `.column-rule-${style} { column-rule-style: ${style}; }`
    });
  });

  // Column Rule Color (semantic colors)
  const colors = ['primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info', 'neutral'];
  colors.forEach(color => {
    classes.push({
      name: `column-rule-${color}`,
      css: `.column-rule-${color} { column-rule-color: var(--j-${color}); }`
    });
  });
  classes.push({
    name: 'column-rule-current',
    css: '.column-rule-current { column-rule-color: currentColor; }'
  });
  classes.push({
    name: 'column-rule-transparent',
    css: '.column-rule-transparent { column-rule-color: transparent; }'
  });

  // Column Span
  classes.push({
    name: 'column-span-all',
    css: '.column-span-all { column-span: all; }'
  });
  classes.push({
    name: 'column-span-none',
    css: '.column-span-none { column-span: none; }'
  });

  // Column Fill
  classes.push({
    name: 'column-fill-auto',
    css: '.column-fill-auto { column-fill: auto; }'
  });
  classes.push({
    name: 'column-fill-balance',
    css: '.column-fill-balance { column-fill: balance; }'
  });

  // Break Inside
  const breakInside = ['auto', 'avoid', 'avoid-page', 'avoid-column'];
  breakInside.forEach(value => {
    classes.push({
      name: `break-inside-${value}`,
      css: `.break-inside-${value} { break-inside: ${value}; }`
    });
  });

  // Break Before/After
  const breakValues = ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  breakValues.forEach(value => {
    classes.push({
      name: `break-before-${value}`,
      css: `.break-before-${value} { break-before: ${value}; }`
    });
    classes.push({
      name: `break-after-${value}`,
      css: `.break-after-${value} { break-after: ${value}; }`
    });
  });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
