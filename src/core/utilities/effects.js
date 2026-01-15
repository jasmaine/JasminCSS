export function generateEffectUtilities(config) {
  const classes = [];
  const { branding } = config;

  // Box Shadow
  const shadows = branding?.shadows || {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none'
  };

  classes.push({ name: 'shadow', css: `.shadow { box-shadow: var(--j-shadow-default); }` });
  Object.entries(shadows).forEach(([name, value]) => {
    const className = name === 'default' ? 'shadow' : `shadow-${name}`;
    if (name !== 'default') {
      classes.push({ name: className, css: `.${className} { box-shadow: ${value}; }` });
    }
  });

  // Glow shadows (futuristic)
  classes.push({ name: 'shadow-glow', css: '.shadow-glow { box-shadow: 0 0 20px var(--j-primary); }' });
  classes.push({ name: 'shadow-glow-sm', css: '.shadow-glow-sm { box-shadow: 0 0 10px var(--j-primary); }' });
  classes.push({ name: 'shadow-glow-lg', css: '.shadow-glow-lg { box-shadow: 0 0 40px var(--j-primary); }' });

  // Border Radius
  const radiuses = branding?.borderRadius || {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  };

  classes.push({ name: 'rounded', css: `.rounded { border-radius: var(--j-radius-default); }` });
  Object.entries(radiuses).forEach(([name, value]) => {
    const className = name === 'default' ? 'rounded' : `rounded-${name}`;
    if (name !== 'default') {
      classes.push({ name: className, css: `.${className} { border-radius: ${value}; }` });
    }
  });

  // Directional border radius
  const directions = {
    't': ['border-top-left-radius', 'border-top-right-radius'],
    'r': ['border-top-right-radius', 'border-bottom-right-radius'],
    'b': ['border-bottom-left-radius', 'border-bottom-right-radius'],
    'l': ['border-top-left-radius', 'border-bottom-left-radius'],
    'tl': ['border-top-left-radius'],
    'tr': ['border-top-right-radius'],
    'br': ['border-bottom-right-radius'],
    'bl': ['border-bottom-left-radius'],
    's': ['border-start-start-radius', 'border-end-start-radius'],
    'e': ['border-start-end-radius', 'border-end-end-radius'],
    'ss': ['border-start-start-radius'],
    'se': ['border-start-end-radius'],
    'ee': ['border-end-end-radius'],
    'es': ['border-end-start-radius']
  };

  Object.entries(radiuses).forEach(([sizeName, sizeValue]) => {
    Object.entries(directions).forEach(([dirName, props]) => {
      const className = sizeName === 'default' ? `rounded-${dirName}` : `rounded-${dirName}-${sizeName}`;
      const cssProps = props.map(p => `${p}: ${sizeValue};`).join(' ');
      classes.push({ name: className, css: `.${className} { ${cssProps} }` });
    });
  });

  // Border Width
  const borderWidths = ['0', '1', '2', '4', '8'];
  borderWidths.forEach(w => {
    const value = w === '1' ? '1px' : w === '0' ? '0px' : `${w}px`;
    const className = w === '1' ? 'border' : `border-${w}`;
    classes.push({ name: className, css: `.${className} { border-width: ${value}; }` });
  });
  classes.push({ name: 'border', css: '.border { border-width: 1px; }' });

  // Directional border width
  ['t', 'r', 'b', 'l', 'x', 'y', 's', 'e'].forEach(dir => {
    borderWidths.forEach(w => {
      const value = w === '1' ? '1px' : w === '0' ? '0px' : `${w}px`;
      const className = w === '1' ? `border-${dir}` : `border-${dir}-${w}`;
      let cssProps;
      switch (dir) {
        case 't': cssProps = `border-top-width: ${value};`; break;
        case 'r': cssProps = `border-right-width: ${value};`; break;
        case 'b': cssProps = `border-bottom-width: ${value};`; break;
        case 'l': cssProps = `border-left-width: ${value};`; break;
        case 'x': cssProps = `border-left-width: ${value}; border-right-width: ${value};`; break;
        case 'y': cssProps = `border-top-width: ${value}; border-bottom-width: ${value};`; break;
        case 's': cssProps = `border-inline-start-width: ${value};`; break;
        case 'e': cssProps = `border-inline-end-width: ${value};`; break;
      }
      classes.push({ name: className, css: `.${className} { ${cssProps} }` });
    });
  });

  // Border Style
  ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none'].forEach(style => {
    classes.push({ name: `border-${style}`, css: `.border-${style} { border-style: ${style}; }` });
  });

  // Divide Width
  borderWidths.forEach(w => {
    const value = w === '1' ? '1px' : w === '0' ? '0px' : `${w}px`;
    const classNameX = w === '1' ? 'divide-x' : `divide-x-${w}`;
    const classNameY = w === '1' ? 'divide-y' : `divide-y-${w}`;

    classes.push({
      name: classNameX,
      css: `.${classNameX} > :not([hidden]) ~ :not([hidden]) { border-left-width: ${value}; }`
    });
    classes.push({
      name: classNameY,
      css: `.${classNameY} > :not([hidden]) ~ :not([hidden]) { border-top-width: ${value}; }`
    });
  });

  // Divide Style
  ['solid', 'dashed', 'dotted', 'double', 'none'].forEach(style => {
    classes.push({
      name: `divide-${style}`,
      css: `.divide-${style} > :not([hidden]) ~ :not([hidden]) { border-style: ${style}; }`
    });
  });

  // Outline Width
  ['0', '1', '2', '4', '8'].forEach(w => {
    const value = `${w}px`;
    classes.push({ name: `outline-${w}`, css: `.outline-${w} { outline-width: ${value}; }` });
  });

  // Outline Style
  classes.push({ name: 'outline-none', css: '.outline-none { outline: 2px solid transparent; outline-offset: 2px; }' });
  classes.push({ name: 'outline', css: '.outline { outline-style: solid; }' });
  classes.push({ name: 'outline-dashed', css: '.outline-dashed { outline-style: dashed; }' });
  classes.push({ name: 'outline-dotted', css: '.outline-dotted { outline-style: dotted; }' });
  classes.push({ name: 'outline-double', css: '.outline-double { outline-style: double; }' });

  // Outline Offset
  ['0', '1', '2', '4', '8'].forEach(o => {
    const value = `${o}px`;
    classes.push({ name: `outline-offset-${o}`, css: `.outline-offset-${o} { outline-offset: ${value}; }` });
  });

  // Ring
  ['0', '1', '2', '4', '8'].forEach(w => {
    const className = w === '1' ? 'ring' : `ring-${w}`;
    const width = w === '1' ? '1px' : w === '0' ? '0px' : `${w}px`;
    classes.push({
      name: className,
      css: `.${className} { box-shadow: 0 0 0 ${width} var(--j-ring, var(--j-primary)); }`
    });
  });
  classes.push({ name: 'ring', css: '.ring { box-shadow: 0 0 0 3px var(--j-ring, var(--j-primary)); }' });
  classes.push({ name: 'ring-inset', css: '.ring-inset { --j-ring-inset: inset; }' });

  // Ring Offset
  ['0', '1', '2', '4', '8'].forEach(o => {
    const value = `${o}px`;
    classes.push({
      name: `ring-offset-${o}`,
      css: `.ring-offset-${o} { --j-ring-offset-width: ${value}; box-shadow: 0 0 0 var(--j-ring-offset-width) var(--j-ring-offset-color, white), var(--j-ring-shadow); }`
    });
  });

  // Mix Blend Mode
  const blendModes = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
  blendModes.forEach(mode => {
    classes.push({ name: `mix-blend-${mode}`, css: `.mix-blend-${mode} { mix-blend-mode: ${mode}; }` });
  });

  // Background Blend Mode
  blendModes.forEach(mode => {
    classes.push({ name: `bg-blend-${mode}`, css: `.bg-blend-${mode} { background-blend-mode: ${mode}; }` });
  });

  // Cursor
  const cursors = ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 's-resize', 'e-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out'];
  cursors.forEach(cursor => {
    classes.push({ name: `cursor-${cursor}`, css: `.cursor-${cursor} { cursor: ${cursor}; }` });
  });

  // User Select
  ['none', 'text', 'all', 'auto'].forEach(select => {
    classes.push({ name: `select-${select}`, css: `.select-${select} { user-select: ${select}; }` });
  });

  // Pointer Events
  classes.push({ name: 'pointer-events-none', css: '.pointer-events-none { pointer-events: none; }' });
  classes.push({ name: 'pointer-events-auto', css: '.pointer-events-auto { pointer-events: auto; }' });

  // Resize
  ['none', 'y', 'x', 'both'].forEach(r => {
    const value = r === 'both' ? 'both' : r === 'y' ? 'vertical' : r === 'x' ? 'horizontal' : 'none';
    const className = r === 'both' ? 'resize' : `resize-${r}`;
    classes.push({ name: className, css: `.${className} { resize: ${value}; }` });
  });

  // Scroll Behavior
  classes.push({ name: 'scroll-auto', css: '.scroll-auto { scroll-behavior: auto; }' });
  classes.push({ name: 'scroll-smooth', css: '.scroll-smooth { scroll-behavior: smooth; }' });

  // Scroll Snap Type
  classes.push({ name: 'snap-none', css: '.snap-none { scroll-snap-type: none; }' });
  classes.push({ name: 'snap-x', css: '.snap-x { scroll-snap-type: x var(--j-scroll-snap-strictness, proximity); }' });
  classes.push({ name: 'snap-y', css: '.snap-y { scroll-snap-type: y var(--j-scroll-snap-strictness, proximity); }' });
  classes.push({ name: 'snap-both', css: '.snap-both { scroll-snap-type: both var(--j-scroll-snap-strictness, proximity); }' });
  classes.push({ name: 'snap-mandatory', css: '.snap-mandatory { --j-scroll-snap-strictness: mandatory; }' });
  classes.push({ name: 'snap-proximity', css: '.snap-proximity { --j-scroll-snap-strictness: proximity; }' });

  // Scroll Snap Align
  classes.push({ name: 'snap-start', css: '.snap-start { scroll-snap-align: start; }' });
  classes.push({ name: 'snap-end', css: '.snap-end { scroll-snap-align: end; }' });
  classes.push({ name: 'snap-center', css: '.snap-center { scroll-snap-align: center; }' });
  classes.push({ name: 'snap-align-none', css: '.snap-align-none { scroll-snap-align: none; }' });

  // Touch Action
  ['auto', 'none', 'pan-x', 'pan-left', 'pan-right', 'pan-y', 'pan-up', 'pan-down', 'pinch-zoom', 'manipulation'].forEach(action => {
    classes.push({ name: `touch-${action}`, css: `.touch-${action} { touch-action: ${action}; }` });
  });

  // Will Change
  classes.push({ name: 'will-change-auto', css: '.will-change-auto { will-change: auto; }' });
  classes.push({ name: 'will-change-scroll', css: '.will-change-scroll { will-change: scroll-position; }' });
  classes.push({ name: 'will-change-contents', css: '.will-change-contents { will-change: contents; }' });
  classes.push({ name: 'will-change-transform', css: '.will-change-transform { will-change: transform; }' });

  // Glass Effect (futuristic)
  classes.push({
    name: 'glass',
    css: `.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}`
  });
  classes.push({
    name: 'glass-dark',
    css: `.glass-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}`
  });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
