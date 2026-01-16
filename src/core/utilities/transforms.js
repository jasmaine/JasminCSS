export function generateTransformUtilities(config) {
  const classes = [];

  // Transform
  classes.push({
    name: 'transform',
    css: `.transform { transform: translate(var(--j-translate-x, 0), var(--j-translate-y, 0)) rotate(var(--j-rotate, 0)) skewX(var(--j-skew-x, 0)) skewY(var(--j-skew-y, 0)) scaleX(var(--j-scale-x, 1)) scaleY(var(--j-scale-y, 1)); }`
  });
  classes.push({ name: 'transform-cpu', css: '.transform-cpu { transform: translate(var(--j-translate-x, 0), var(--j-translate-y, 0)) rotate(var(--j-rotate, 0)) skewX(var(--j-skew-x, 0)) skewY(var(--j-skew-y, 0)) scaleX(var(--j-scale-x, 1)) scaleY(var(--j-scale-y, 1)); }' });
  classes.push({ name: 'transform-gpu', css: '.transform-gpu { transform: translate3d(var(--j-translate-x, 0), var(--j-translate-y, 0), 0) rotate(var(--j-rotate, 0)) skewX(var(--j-skew-x, 0)) skewY(var(--j-skew-y, 0)) scaleX(var(--j-scale-x, 1)) scaleY(var(--j-scale-y, 1)); }' });
  classes.push({ name: 'transform-none', css: '.transform-none { transform: none; }' });

  // Transform Origin
  const origins = ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left'];
  origins.forEach(o => {
    classes.push({ name: `origin-${o}`, css: `.origin-${o} { transform-origin: ${o.replace('-', ' ')}; }` });
  });

  // Scale
  const scales = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200];
  scales.forEach(s => {
    const value = s / 100;
    classes.push({ name: `scale-${s}`, css: `.scale-${s} { --j-scale-x: ${value}; --j-scale-y: ${value}; transform: scale(${value}); }` });
    classes.push({ name: `scale-x-${s}`, css: `.scale-x-${s} { --j-scale-x: ${value}; transform: scaleX(${value}); }` });
    classes.push({ name: `scale-y-${s}`, css: `.scale-y-${s} { --j-scale-y: ${value}; transform: scaleY(${value}); }` });
  });

  // Rotate
  const rotations = [0, 1, 2, 3, 6, 12, 45, 90, 180];
  rotations.forEach(r => {
    classes.push({ name: `rotate-${r}`, css: `.rotate-${r} { --j-rotate: ${r}deg; transform: rotate(${r}deg); }` });
    classes.push({ name: `-rotate-${r}`, css: `.-rotate-${r} { --j-rotate: -${r}deg; transform: rotate(-${r}deg); }` });
  });

  // Translate
  const spacing = config.spacing || {};
  const translateValues = {
    ...spacing,
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    'full': '100%'
  };

  Object.entries(translateValues).forEach(([key, value]) => {
    const safeName = key.replace(/\//g, '\\/').replace(/\./g, '\\.');
    classes.push({ name: `translate-x-${key}`, css: `.translate-x-${safeName} { --j-translate-x: ${value}; transform: translateX(${value}); }` });
    classes.push({ name: `translate-y-${key}`, css: `.translate-y-${safeName} { --j-translate-y: ${value}; transform: translateY(${value}); }` });

    // Negative values
    if (!key.includes('/')) {
      classes.push({ name: `-translate-x-${key}`, css: `.-translate-x-${safeName} { --j-translate-x: -${value}; transform: translateX(-${value}); }` });
      classes.push({ name: `-translate-y-${key}`, css: `.-translate-y-${safeName} { --j-translate-y: -${value}; transform: translateY(-${value}); }` });
    }
  });

  // Negative percentage translations
  ['1/2', '1/3', '2/3', '1/4', '3/4', 'full'].forEach(key => {
    const value = translateValues[key];
    const safeName = key.replace(/\//g, '\\/');
    classes.push({ name: `-translate-x-${key}`, css: `.-translate-x-${safeName} { --j-translate-x: -${value}; transform: translateX(-${value}); }` });
    classes.push({ name: `-translate-y-${key}`, css: `.-translate-y-${safeName} { --j-translate-y: -${value}; transform: translateY(-${value}); }` });
  });

  // Skew
  const skews = [0, 1, 2, 3, 6, 12];
  skews.forEach(s => {
    classes.push({ name: `skew-x-${s}`, css: `.skew-x-${s} { --j-skew-x: ${s}deg; transform: skewX(${s}deg); }` });
    classes.push({ name: `skew-y-${s}`, css: `.skew-y-${s} { --j-skew-y: ${s}deg; transform: skewY(${s}deg); }` });
    classes.push({ name: `-skew-x-${s}`, css: `.-skew-x-${s} { --j-skew-x: -${s}deg; transform: skewX(-${s}deg); }` });
    classes.push({ name: `-skew-y-${s}`, css: `.-skew-y-${s} { --j-skew-y: -${s}deg; transform: skewY(-${s}deg); }` });
  });

  // Perspective
  const perspectives = ['none', 'sm', 'md', 'lg', 'xl'];
  const perspectiveValues = { none: 'none', sm: '200px', md: '500px', lg: '1000px', xl: '2000px' };
  perspectives.forEach(p => {
    classes.push({ name: `perspective-${p}`, css: `.perspective-${p} { perspective: ${perspectiveValues[p]}; }` });
  });

  // Perspective Origin
  origins.forEach(o => {
    classes.push({ name: `perspective-origin-${o}`, css: `.perspective-origin-${o} { perspective-origin: ${o.replace('-', ' ')}; }` });
  });

  // Transform Style
  classes.push({ name: 'transform-flat', css: '.transform-flat { transform-style: flat; }' });
  classes.push({ name: 'transform-3d', css: '.transform-3d { transform-style: preserve-3d; }' });

  // Backface Visibility
  classes.push({ name: 'backface-visible', css: '.backface-visible { backface-visibility: visible; }' });
  classes.push({ name: 'backface-hidden', css: '.backface-hidden { backface-visibility: hidden; }' });

  // 3D Transforms
  const rotations3d = [0, 45, 90, 180];
  rotations3d.forEach(r => {
    classes.push({ name: `rotate-x-${r}`, css: `.rotate-x-${r} { transform: rotateX(${r}deg); }` });
    classes.push({ name: `rotate-y-${r}`, css: `.rotate-y-${r} { transform: rotateY(${r}deg); }` });
    classes.push({ name: `rotate-z-${r}`, css: `.rotate-z-${r} { transform: rotateZ(${r}deg); }` });
  });

  // Translate Z (for 3D)
  const translateZValues = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
  translateZValues.forEach(z => {
    classes.push({ name: `translate-z-${z}`, css: `.translate-z-${z} { transform: translateZ(${z}px); }` });
    classes.push({ name: `-translate-z-${z}`, css: `.-translate-z-${z} { transform: translateZ(-${z}px); }` });
  });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
