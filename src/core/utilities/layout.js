export function generateLayoutUtilities(config) {
  const classes = [];

  // Display
  const displays = ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid', 'contents', 'hidden', 'flow-root'];
  displays.forEach(d => {
    const value = d === 'hidden' ? 'none' : d;
    classes.push({ name: d, css: `.${d} { display: ${value}; }` });
  });

  // Flex Direction
  ['row', 'row-reverse', 'col', 'col-reverse'].forEach(d => {
    const value = d.replace('col', 'column');
    classes.push({ name: `flex-${d}`, css: `.flex-${d} { flex-direction: ${value}; }` });
  });

  // Flex Wrap
  ['wrap', 'wrap-reverse', 'nowrap'].forEach(w => {
    classes.push({ name: `flex-${w}`, css: `.flex-${w} { flex-wrap: ${w}; }` });
  });

  // Flex
  ['1', 'auto', 'initial', 'none'].forEach(f => {
    const values = { '1': '1 1 0%', 'auto': '1 1 auto', 'initial': '0 1 auto', 'none': 'none' };
    classes.push({ name: `flex-${f}`, css: `.flex-${f} { flex: ${values[f]}; }` });
  });

  // Flex Grow/Shrink
  ['0', '1'].forEach(n => {
    classes.push({ name: `grow-${n}`, css: `.grow-${n} { flex-grow: ${n}; }` });
    classes.push({ name: `shrink-${n}`, css: `.shrink-${n} { flex-shrink: ${n}; }` });
  });
  classes.push({ name: 'grow', css: '.grow { flex-grow: 1; }' });
  classes.push({ name: 'shrink', css: '.shrink { flex-shrink: 1; }' });

  // Justify Content
  const justifyContent = {
    'justify-start': 'flex-start',
    'justify-end': 'flex-end',
    'justify-center': 'center',
    'justify-between': 'space-between',
    'justify-around': 'space-around',
    'justify-evenly': 'space-evenly',
    'justify-stretch': 'stretch'
  };
  Object.entries(justifyContent).forEach(([name, value]) => {
    classes.push({ name, css: `.${name} { justify-content: ${value}; }` });
  });

  // Align Items
  const alignItems = {
    'items-start': 'flex-start',
    'items-end': 'flex-end',
    'items-center': 'center',
    'items-baseline': 'baseline',
    'items-stretch': 'stretch'
  };
  Object.entries(alignItems).forEach(([name, value]) => {
    classes.push({ name, css: `.${name} { align-items: ${value}; }` });
  });

  // Align Self
  const alignSelf = {
    'self-auto': 'auto',
    'self-start': 'flex-start',
    'self-end': 'flex-end',
    'self-center': 'center',
    'self-stretch': 'stretch',
    'self-baseline': 'baseline'
  };
  Object.entries(alignSelf).forEach(([name, value]) => {
    classes.push({ name, css: `.${name} { align-self: ${value}; }` });
  });

  // Align Content
  const alignContent = {
    'content-start': 'flex-start',
    'content-end': 'flex-end',
    'content-center': 'center',
    'content-between': 'space-between',
    'content-around': 'space-around',
    'content-evenly': 'space-evenly',
    'content-stretch': 'stretch',
    'content-baseline': 'baseline'
  };
  Object.entries(alignContent).forEach(([name, value]) => {
    classes.push({ name, css: `.${name} { align-content: ${value}; }` });
  });

  // Gap
  const spacing = config.spacing || {};
  Object.entries(spacing).forEach(([key, value]) => {
    const safeName = key.replace('.', '\\.');
    classes.push({ name: `gap-${safeName}`, css: `.gap-${safeName} { gap: ${value}; }` });
    classes.push({ name: `gap-x-${safeName}`, css: `.gap-x-${safeName} { column-gap: ${value}; }` });
    classes.push({ name: `gap-y-${safeName}`, css: `.gap-y-${safeName} { row-gap: ${value}; }` });
  });

  // Grid Template Columns
  for (let i = 1; i <= 12; i++) {
    classes.push({
      name: `grid-cols-${i}`,
      css: `.grid-cols-${i} { grid-template-columns: repeat(${i}, minmax(0, 1fr)); }`
    });
  }
  classes.push({ name: 'grid-cols-none', css: '.grid-cols-none { grid-template-columns: none; }' });
  classes.push({ name: 'grid-cols-subgrid', css: '.grid-cols-subgrid { grid-template-columns: subgrid; }' });

  // Grid Template Rows
  for (let i = 1; i <= 6; i++) {
    classes.push({
      name: `grid-rows-${i}`,
      css: `.grid-rows-${i} { grid-template-rows: repeat(${i}, minmax(0, 1fr)); }`
    });
  }
  classes.push({ name: 'grid-rows-none', css: '.grid-rows-none { grid-template-rows: none; }' });
  classes.push({ name: 'grid-rows-subgrid', css: '.grid-rows-subgrid { grid-template-rows: subgrid; }' });

  // Grid Column Span
  for (let i = 1; i <= 12; i++) {
    classes.push({ name: `col-span-${i}`, css: `.col-span-${i} { grid-column: span ${i} / span ${i}; }` });
  }
  classes.push({ name: 'col-span-full', css: '.col-span-full { grid-column: 1 / -1; }' });
  classes.push({ name: 'col-auto', css: '.col-auto { grid-column: auto; }' });

  // Grid Row Span
  for (let i = 1; i <= 6; i++) {
    classes.push({ name: `row-span-${i}`, css: `.row-span-${i} { grid-row: span ${i} / span ${i}; }` });
  }
  classes.push({ name: 'row-span-full', css: '.row-span-full { grid-row: 1 / -1; }' });
  classes.push({ name: 'row-auto', css: '.row-auto { grid-row: auto; }' });

  // Grid Start/End
  for (let i = 1; i <= 13; i++) {
    classes.push({ name: `col-start-${i}`, css: `.col-start-${i} { grid-column-start: ${i}; }` });
    classes.push({ name: `col-end-${i}`, css: `.col-end-${i} { grid-column-end: ${i}; }` });
  }
  for (let i = 1; i <= 7; i++) {
    classes.push({ name: `row-start-${i}`, css: `.row-start-${i} { grid-row-start: ${i}; }` });
    classes.push({ name: `row-end-${i}`, css: `.row-end-${i} { grid-row-end: ${i}; }` });
  }

  // Grid Auto Flow
  ['row', 'col', 'dense', 'row-dense', 'col-dense'].forEach(f => {
    const value = f.replace('col', 'column');
    classes.push({ name: `grid-flow-${f}`, css: `.grid-flow-${f} { grid-auto-flow: ${value}; }` });
  });

  // Place Content/Items/Self
  ['start', 'end', 'center', 'stretch', 'between', 'around', 'evenly'].forEach(p => {
    const value = p === 'between' ? 'space-between' : p === 'around' ? 'space-around' : p === 'evenly' ? 'space-evenly' : p;
    classes.push({ name: `place-content-${p}`, css: `.place-content-${p} { place-content: ${value}; }` });
  });
  ['start', 'end', 'center', 'stretch', 'baseline'].forEach(p => {
    classes.push({ name: `place-items-${p}`, css: `.place-items-${p} { place-items: ${p}; }` });
    classes.push({ name: `place-self-${p}`, css: `.place-self-${p} { place-self: ${p}; }` });
  });
  classes.push({ name: 'place-self-auto', css: '.place-self-auto { place-self: auto; }' });

  // Position
  ['static', 'fixed', 'absolute', 'relative', 'sticky'].forEach(p => {
    classes.push({ name: p, css: `.${p} { position: ${p}; }` });
  });

  // Inset (top, right, bottom, left)
  const insetValues = { '0': '0', 'auto': 'auto', 'full': '100%', '1/2': '50%', '1/3': '33.333333%', '2/3': '66.666667%', '1/4': '25%', '3/4': '75%' };
  Object.entries({ ...spacing, ...insetValues }).forEach(([key, value]) => {
    const safeName = key.replace('/', '\\/').replace('.', '\\.');
    classes.push({ name: `inset-${safeName}`, css: `.inset-${safeName} { inset: ${value}; }` });
    classes.push({ name: `inset-x-${safeName}`, css: `.inset-x-${safeName} { left: ${value}; right: ${value}; }` });
    classes.push({ name: `inset-y-${safeName}`, css: `.inset-y-${safeName} { top: ${value}; bottom: ${value}; }` });
    classes.push({ name: `top-${safeName}`, css: `.top-${safeName} { top: ${value}; }` });
    classes.push({ name: `right-${safeName}`, css: `.right-${safeName} { right: ${value}; }` });
    classes.push({ name: `bottom-${safeName}`, css: `.bottom-${safeName} { bottom: ${value}; }` });
    classes.push({ name: `left-${safeName}`, css: `.left-${safeName} { left: ${value}; }` });

    // Negative values
    if (key !== 'auto' && key !== 'full' && !key.includes('/')) {
      classes.push({ name: `-inset-${safeName}`, css: `.-inset-${safeName} { inset: -${value}; }` });
      classes.push({ name: `-top-${safeName}`, css: `.-top-${safeName} { top: -${value}; }` });
      classes.push({ name: `-right-${safeName}`, css: `.-right-${safeName} { right: -${value}; }` });
      classes.push({ name: `-bottom-${safeName}`, css: `.-bottom-${safeName} { bottom: -${value}; }` });
      classes.push({ name: `-left-${safeName}`, css: `.-left-${safeName} { left: -${value}; }` });
    }
  });

  // Z-Index
  ['auto', '0', '10', '20', '30', '40', '50'].forEach(z => {
    classes.push({ name: `z-${z}`, css: `.z-${z} { z-index: ${z}; }` });
  });

  // Container
  classes.push({
    name: 'container',
    css: `.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 640px) { .container { max-width: 640px; } }
@media (min-width: 768px) { .container { max-width: 768px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; } }
@media (min-width: 1280px) { .container { max-width: 1280px; } }
@media (min-width: 1536px) { .container { max-width: 1536px; } }`
  });

  // Width
  const widthSizes = {
    '0': '0', 'px': '1px', 'auto': 'auto', 'full': '100%', 'screen': '100vw',
    'svw': '100svw', 'lvw': '100lvw', 'dvw': '100dvw',
    'min': 'min-content', 'max': 'max-content', 'fit': 'fit-content',
    '1/2': '50%', '1/3': '33.333333%', '2/3': '66.666667%',
    '1/4': '25%', '2/4': '50%', '3/4': '75%',
    '1/5': '20%', '2/5': '40%', '3/5': '60%', '4/5': '80%',
    '1/6': '16.666667%', '5/6': '83.333333%',
    '1/12': '8.333333%', '5/12': '41.666667%', '7/12': '58.333333%', '11/12': '91.666667%'
  };
  Object.entries({ ...spacing, ...widthSizes }).forEach(([key, value]) => {
    const safeName = key.replace('/', '\\/').replace('.', '\\.');
    classes.push({ name: `w-${safeName}`, css: `.w-${safeName} { width: ${value}; }` });
  });

  // Height
  const heightSizes = {
    '0': '0', 'px': '1px', 'auto': 'auto', 'full': '100%', 'screen': '100vh',
    'svh': '100svh', 'lvh': '100lvh', 'dvh': '100dvh',
    'min': 'min-content', 'max': 'max-content', 'fit': 'fit-content',
    '1/2': '50%', '1/3': '33.333333%', '2/3': '66.666667%',
    '1/4': '25%', '2/4': '50%', '3/4': '75%',
    '1/5': '20%', '2/5': '40%', '3/5': '60%', '4/5': '80%',
    '1/6': '16.666667%', '5/6': '83.333333%'
  };
  Object.entries({ ...spacing, ...heightSizes }).forEach(([key, value]) => {
    const safeName = key.replace('/', '\\/').replace('.', '\\.');
    classes.push({ name: `h-${safeName}`, css: `.h-${safeName} { height: ${value}; }` });
  });

  // Min/Max Width
  const minMaxWidths = { '0': '0', 'none': 'none', 'xs': '20rem', 'sm': '24rem', 'md': '28rem', 'lg': '32rem', 'xl': '36rem', '2xl': '42rem', '3xl': '48rem', '4xl': '56rem', '5xl': '64rem', '6xl': '72rem', '7xl': '80rem', 'full': '100%', 'min': 'min-content', 'max': 'max-content', 'fit': 'fit-content', 'prose': '65ch', 'screen-sm': '640px', 'screen-md': '768px', 'screen-lg': '1024px', 'screen-xl': '1280px', 'screen-2xl': '1536px' };
  Object.entries(minMaxWidths).forEach(([key, value]) => {
    classes.push({ name: `min-w-${key}`, css: `.min-w-${key} { min-width: ${value}; }` });
    classes.push({ name: `max-w-${key}`, css: `.max-w-${key} { max-width: ${value}; }` });
  });

  // Min/Max Height
  const minMaxHeights = { '0': '0', 'full': '100%', 'screen': '100vh', 'svh': '100svh', 'lvh': '100lvh', 'dvh': '100dvh', 'min': 'min-content', 'max': 'max-content', 'fit': 'fit-content', 'none': 'none' };
  Object.entries(minMaxHeights).forEach(([key, value]) => {
    classes.push({ name: `min-h-${key}`, css: `.min-h-${key} { min-height: ${value}; }` });
    classes.push({ name: `max-h-${key}`, css: `.max-h-${key} { max-height: ${value}; }` });
  });
  Object.entries(spacing).forEach(([key, value]) => {
    const safeName = key.replace('.', '\\.');
    classes.push({ name: `min-h-${safeName}`, css: `.min-h-${safeName} { min-height: ${value}; }` });
    classes.push({ name: `max-h-${safeName}`, css: `.max-h-${safeName} { max-height: ${value}; }` });
  });

  // Size (width and height)
  Object.entries({ ...spacing, ...widthSizes }).forEach(([key, value]) => {
    if (key !== 'screen' && key !== 'svw' && key !== 'lvw' && key !== 'dvw') {
      const safeName = key.replace('/', '\\/').replace('.', '\\.');
      classes.push({ name: `size-${safeName}`, css: `.size-${safeName} { width: ${value}; height: ${value}; }` });
    }
  });

  // Overflow
  ['auto', 'hidden', 'clip', 'visible', 'scroll'].forEach(o => {
    classes.push({ name: `overflow-${o}`, css: `.overflow-${o} { overflow: ${o}; }` });
    classes.push({ name: `overflow-x-${o}`, css: `.overflow-x-${o} { overflow-x: ${o}; }` });
    classes.push({ name: `overflow-y-${o}`, css: `.overflow-y-${o} { overflow-y: ${o}; }` });
  });

  // Object Fit
  ['contain', 'cover', 'fill', 'none', 'scale-down'].forEach(f => {
    classes.push({ name: `object-${f}`, css: `.object-${f} { object-fit: ${f}; }` });
  });

  // Object Position
  ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'].forEach(p => {
    classes.push({ name: `object-${p}`, css: `.object-${p} { object-position: ${p.replace('-', ' ')}; }` });
  });

  // Aspect Ratio
  classes.push({ name: 'aspect-auto', css: '.aspect-auto { aspect-ratio: auto; }' });
  classes.push({ name: 'aspect-square', css: '.aspect-square { aspect-ratio: 1 / 1; }' });
  classes.push({ name: 'aspect-video', css: '.aspect-video { aspect-ratio: 16 / 9; }' });
  classes.push({ name: 'aspect-4\\/3', css: '.aspect-4\\/3 { aspect-ratio: 4 / 3; }' });

  // Visibility
  classes.push({ name: 'visible', css: '.visible { visibility: visible; }' });
  classes.push({ name: 'invisible', css: '.invisible { visibility: hidden; }' });
  classes.push({ name: 'collapse', css: '.collapse { visibility: collapse; }' });

  // Isolation
  classes.push({ name: 'isolate', css: '.isolate { isolation: isolate; }' });
  classes.push({ name: 'isolation-auto', css: '.isolation-auto { isolation: auto; }' });

  // Float & Clear
  ['left', 'right', 'none', 'start', 'end'].forEach(f => {
    classes.push({ name: `float-${f}`, css: `.float-${f} { float: ${f}; }` });
  });
  ['left', 'right', 'both', 'none', 'start', 'end'].forEach(c => {
    classes.push({ name: `clear-${c}`, css: `.clear-${c} { clear: ${c}; }` });
  });

  // Box Sizing
  classes.push({ name: 'box-border', css: '.box-border { box-sizing: border-box; }' });
  classes.push({ name: 'box-content', css: '.box-content { box-sizing: content-box; }' });

  // Order
  for (let i = 1; i <= 12; i++) {
    classes.push({ name: `order-${i}`, css: `.order-${i} { order: ${i}; }` });
  }
  classes.push({ name: 'order-first', css: '.order-first { order: -9999; }' });
  classes.push({ name: 'order-last', css: '.order-last { order: 9999; }' });
  classes.push({ name: 'order-none', css: '.order-none { order: 0; }' });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
