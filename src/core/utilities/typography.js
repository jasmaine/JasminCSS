export function generateTypographyUtilities(config) {
  const classes = [];

  // Font Family
  classes.push({ name: 'font-sans', css: '.font-sans { font-family: var(--j-font-sans); }' });
  classes.push({ name: 'font-mono', css: '.font-mono { font-family: var(--j-font-mono); }' });
  classes.push({ name: 'font-serif', css: '.font-serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }' });

  // Font Size
  const fontSizes = {
    'xs': ['0.75rem', '1rem'],
    'sm': ['0.875rem', '1.25rem'],
    'base': ['1rem', '1.5rem'],
    'lg': ['1.125rem', '1.75rem'],
    'xl': ['1.25rem', '1.75rem'],
    '2xl': ['1.5rem', '2rem'],
    '3xl': ['1.875rem', '2.25rem'],
    '4xl': ['2.25rem', '2.5rem'],
    '5xl': ['3rem', '1'],
    '6xl': ['3.75rem', '1'],
    '7xl': ['4.5rem', '1'],
    '8xl': ['6rem', '1'],
    '9xl': ['8rem', '1']
  };
  Object.entries(fontSizes).forEach(([size, [fontSize, lineHeight]]) => {
    classes.push({
      name: `text-${size}`,
      css: `.text-${size} { font-size: ${fontSize}; line-height: ${lineHeight}; }`
    });
  });

  // Font Weight
  const fontWeights = {
    'thin': '100',
    'extralight': '200',
    'light': '300',
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
    'extrabold': '800',
    'black': '900'
  };
  Object.entries(fontWeights).forEach(([name, value]) => {
    classes.push({ name: `font-${name}`, css: `.font-${name} { font-weight: ${value}; }` });
  });

  // Font Style
  classes.push({ name: 'italic', css: '.italic { font-style: italic; }' });
  classes.push({ name: 'not-italic', css: '.not-italic { font-style: normal; }' });

  // Font Variant Numeric
  classes.push({ name: 'normal-nums', css: '.normal-nums { font-variant-numeric: normal; }' });
  classes.push({ name: 'ordinal', css: '.ordinal { font-variant-numeric: ordinal; }' });
  classes.push({ name: 'slashed-zero', css: '.slashed-zero { font-variant-numeric: slashed-zero; }' });
  classes.push({ name: 'lining-nums', css: '.lining-nums { font-variant-numeric: lining-nums; }' });
  classes.push({ name: 'oldstyle-nums', css: '.oldstyle-nums { font-variant-numeric: oldstyle-nums; }' });
  classes.push({ name: 'proportional-nums', css: '.proportional-nums { font-variant-numeric: proportional-nums; }' });
  classes.push({ name: 'tabular-nums', css: '.tabular-nums { font-variant-numeric: tabular-nums; }' });
  classes.push({ name: 'diagonal-fractions', css: '.diagonal-fractions { font-variant-numeric: diagonal-fractions; }' });
  classes.push({ name: 'stacked-fractions', css: '.stacked-fractions { font-variant-numeric: stacked-fractions; }' });

  // Letter Spacing
  const tracking = {
    'tighter': '-0.05em',
    'tight': '-0.025em',
    'normal': '0em',
    'wide': '0.025em',
    'wider': '0.05em',
    'widest': '0.1em'
  };
  Object.entries(tracking).forEach(([name, value]) => {
    classes.push({ name: `tracking-${name}`, css: `.tracking-${name} { letter-spacing: ${value}; }` });
  });

  // Line Height
  const leading = {
    'none': '1',
    'tight': '1.25',
    'snug': '1.375',
    'normal': '1.5',
    'relaxed': '1.625',
    'loose': '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem'
  };
  Object.entries(leading).forEach(([name, value]) => {
    classes.push({ name: `leading-${name}`, css: `.leading-${name} { line-height: ${value}; }` });
  });

  // Text Align
  ['left', 'center', 'right', 'justify', 'start', 'end'].forEach(align => {
    classes.push({ name: `text-${align}`, css: `.text-${align} { text-align: ${align}; }` });
  });

  // Text Decoration
  classes.push({ name: 'underline', css: '.underline { text-decoration-line: underline; }' });
  classes.push({ name: 'overline', css: '.overline { text-decoration-line: overline; }' });
  classes.push({ name: 'line-through', css: '.line-through { text-decoration-line: line-through; }' });
  classes.push({ name: 'no-underline', css: '.no-underline { text-decoration-line: none; }' });

  // Text Decoration Style
  ['solid', 'double', 'dotted', 'dashed', 'wavy'].forEach(style => {
    classes.push({ name: `decoration-${style}`, css: `.decoration-${style} { text-decoration-style: ${style}; }` });
  });

  // Text Decoration Thickness
  ['auto', 'from-font', '0', '1', '2', '4', '8'].forEach(thickness => {
    const value = ['auto', 'from-font'].includes(thickness) ? thickness : `${thickness}px`;
    classes.push({ name: `decoration-${thickness}`, css: `.decoration-${thickness} { text-decoration-thickness: ${value}; }` });
  });

  // Text Underline Offset
  ['auto', '0', '1', '2', '4', '8'].forEach(offset => {
    const value = offset === 'auto' ? 'auto' : `${offset}px`;
    classes.push({ name: `underline-offset-${offset}`, css: `.underline-offset-${offset} { text-underline-offset: ${value}; }` });
  });

  // Text Transform
  classes.push({ name: 'uppercase', css: '.uppercase { text-transform: uppercase; }' });
  classes.push({ name: 'lowercase', css: '.lowercase { text-transform: lowercase; }' });
  classes.push({ name: 'capitalize', css: '.capitalize { text-transform: capitalize; }' });
  classes.push({ name: 'normal-case', css: '.normal-case { text-transform: none; }' });

  // Text Overflow
  classes.push({ name: 'truncate', css: '.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }' });
  classes.push({ name: 'text-ellipsis', css: '.text-ellipsis { text-overflow: ellipsis; }' });
  classes.push({ name: 'text-clip', css: '.text-clip { text-overflow: clip; }' });

  // Line Clamp
  for (let i = 1; i <= 6; i++) {
    classes.push({
      name: `line-clamp-${i}`,
      css: `.line-clamp-${i} { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${i}; }`
    });
  }
  classes.push({ name: 'line-clamp-none', css: '.line-clamp-none { overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none; }' });

  // Vertical Align
  ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super'].forEach(align => {
    classes.push({ name: `align-${align}`, css: `.align-${align} { vertical-align: ${align}; }` });
  });

  // Whitespace
  ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'].forEach(ws => {
    classes.push({ name: `whitespace-${ws}`, css: `.whitespace-${ws} { white-space: ${ws}; }` });
  });

  // Word Break
  classes.push({ name: 'break-normal', css: '.break-normal { overflow-wrap: normal; word-break: normal; }' });
  classes.push({ name: 'break-words', css: '.break-words { overflow-wrap: break-word; }' });
  classes.push({ name: 'break-all', css: '.break-all { word-break: break-all; }' });
  classes.push({ name: 'break-keep', css: '.break-keep { word-break: keep-all; }' });

  // Hyphens
  ['none', 'manual', 'auto'].forEach(h => {
    classes.push({ name: `hyphens-${h}`, css: `.hyphens-${h} { hyphens: ${h}; }` });
  });

  // Text Wrap
  classes.push({ name: 'text-wrap', css: '.text-wrap { text-wrap: wrap; }' });
  classes.push({ name: 'text-nowrap', css: '.text-nowrap { text-wrap: nowrap; }' });
  classes.push({ name: 'text-balance', css: '.text-balance { text-wrap: balance; }' });
  classes.push({ name: 'text-pretty', css: '.text-pretty { text-wrap: pretty; }' });

  // Content
  classes.push({ name: 'content-none', css: '.content-none { content: none; }' });

  // List Style Type
  classes.push({ name: 'list-none', css: '.list-none { list-style-type: none; }' });
  classes.push({ name: 'list-disc', css: '.list-disc { list-style-type: disc; }' });
  classes.push({ name: 'list-decimal', css: '.list-decimal { list-style-type: decimal; }' });

  // List Style Position
  classes.push({ name: 'list-inside', css: '.list-inside { list-style-position: inside; }' });
  classes.push({ name: 'list-outside', css: '.list-outside { list-style-position: outside; }' });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
