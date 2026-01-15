export function generateFilterUtilities(config) {
  const classes = [];

  // Filter
  classes.push({
    name: 'filter',
    css: `.filter { filter: var(--j-blur, ) var(--j-brightness, ) var(--j-contrast, ) var(--j-grayscale, ) var(--j-hue-rotate, ) var(--j-invert, ) var(--j-saturate, ) var(--j-sepia, ) var(--j-drop-shadow, ); }`
  });
  classes.push({ name: 'filter-none', css: '.filter-none { filter: none; }' });

  // Backdrop Filter
  classes.push({
    name: 'backdrop-filter',
    css: `.backdrop-filter { backdrop-filter: var(--j-backdrop-blur, ) var(--j-backdrop-brightness, ) var(--j-backdrop-contrast, ) var(--j-backdrop-grayscale, ) var(--j-backdrop-hue-rotate, ) var(--j-backdrop-invert, ) var(--j-backdrop-saturate, ) var(--j-backdrop-sepia, ); -webkit-backdrop-filter: var(--j-backdrop-blur, ) var(--j-backdrop-brightness, ) var(--j-backdrop-contrast, ) var(--j-backdrop-grayscale, ) var(--j-backdrop-hue-rotate, ) var(--j-backdrop-invert, ) var(--j-backdrop-saturate, ) var(--j-backdrop-sepia, ); }`
  });
  classes.push({ name: 'backdrop-filter-none', css: '.backdrop-filter-none { backdrop-filter: none; -webkit-backdrop-filter: none; }' });

  // Blur
  const blurs = {
    'none': '0',
    'sm': '4px',
    'DEFAULT': '8px',
    'md': '12px',
    'lg': '16px',
    'xl': '24px',
    '2xl': '40px',
    '3xl': '64px'
  };

  Object.entries(blurs).forEach(([name, value]) => {
    const className = name === 'DEFAULT' ? 'blur' : `blur-${name}`;
    classes.push({ name: className, css: `.${className} { --j-blur: blur(${value}); filter: blur(${value}); }` });

    const backdropClassName = name === 'DEFAULT' ? 'backdrop-blur' : `backdrop-blur-${name}`;
    classes.push({
      name: backdropClassName,
      css: `.${backdropClassName} { --j-backdrop-blur: blur(${value}); backdrop-filter: blur(${value}); -webkit-backdrop-filter: blur(${value}); }`
    });
  });

  // Brightness
  const brightnessValues = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200];
  brightnessValues.forEach(b => {
    const value = b / 100;
    classes.push({ name: `brightness-${b}`, css: `.brightness-${b} { --j-brightness: brightness(${value}); filter: brightness(${value}); }` });
    classes.push({ name: `backdrop-brightness-${b}`, css: `.backdrop-brightness-${b} { --j-backdrop-brightness: brightness(${value}); backdrop-filter: brightness(${value}); -webkit-backdrop-filter: brightness(${value}); }` });
  });

  // Contrast
  const contrastValues = [0, 50, 75, 100, 125, 150, 200];
  contrastValues.forEach(c => {
    const value = c / 100;
    classes.push({ name: `contrast-${c}`, css: `.contrast-${c} { --j-contrast: contrast(${value}); filter: contrast(${value}); }` });
    classes.push({ name: `backdrop-contrast-${c}`, css: `.backdrop-contrast-${c} { --j-backdrop-contrast: contrast(${value}); backdrop-filter: contrast(${value}); -webkit-backdrop-filter: contrast(${value}); }` });
  });

  // Grayscale
  classes.push({ name: 'grayscale-0', css: '.grayscale-0 { --j-grayscale: grayscale(0); filter: grayscale(0); }' });
  classes.push({ name: 'grayscale', css: '.grayscale { --j-grayscale: grayscale(100%); filter: grayscale(100%); }' });
  classes.push({ name: 'backdrop-grayscale-0', css: '.backdrop-grayscale-0 { --j-backdrop-grayscale: grayscale(0); backdrop-filter: grayscale(0); -webkit-backdrop-filter: grayscale(0); }' });
  classes.push({ name: 'backdrop-grayscale', css: '.backdrop-grayscale { --j-backdrop-grayscale: grayscale(100%); backdrop-filter: grayscale(100%); -webkit-backdrop-filter: grayscale(100%); }' });

  // Hue Rotate
  const hueRotations = [0, 15, 30, 60, 90, 180];
  hueRotations.forEach(h => {
    classes.push({ name: `hue-rotate-${h}`, css: `.hue-rotate-${h} { --j-hue-rotate: hue-rotate(${h}deg); filter: hue-rotate(${h}deg); }` });
    classes.push({ name: `-hue-rotate-${h}`, css: `.-hue-rotate-${h} { --j-hue-rotate: hue-rotate(-${h}deg); filter: hue-rotate(-${h}deg); }` });
    classes.push({ name: `backdrop-hue-rotate-${h}`, css: `.backdrop-hue-rotate-${h} { --j-backdrop-hue-rotate: hue-rotate(${h}deg); backdrop-filter: hue-rotate(${h}deg); -webkit-backdrop-filter: hue-rotate(${h}deg); }` });
  });

  // Invert
  classes.push({ name: 'invert-0', css: '.invert-0 { --j-invert: invert(0); filter: invert(0); }' });
  classes.push({ name: 'invert', css: '.invert { --j-invert: invert(100%); filter: invert(100%); }' });
  classes.push({ name: 'backdrop-invert-0', css: '.backdrop-invert-0 { --j-backdrop-invert: invert(0); backdrop-filter: invert(0); -webkit-backdrop-filter: invert(0); }' });
  classes.push({ name: 'backdrop-invert', css: '.backdrop-invert { --j-backdrop-invert: invert(100%); backdrop-filter: invert(100%); -webkit-backdrop-filter: invert(100%); }' });

  // Saturate
  const saturateValues = [0, 50, 100, 150, 200];
  saturateValues.forEach(s => {
    const value = s / 100;
    classes.push({ name: `saturate-${s}`, css: `.saturate-${s} { --j-saturate: saturate(${value}); filter: saturate(${value}); }` });
    classes.push({ name: `backdrop-saturate-${s}`, css: `.backdrop-saturate-${s} { --j-backdrop-saturate: saturate(${value}); backdrop-filter: saturate(${value}); -webkit-backdrop-filter: saturate(${value}); }` });
  });

  // Sepia
  classes.push({ name: 'sepia-0', css: '.sepia-0 { --j-sepia: sepia(0); filter: sepia(0); }' });
  classes.push({ name: 'sepia', css: '.sepia { --j-sepia: sepia(100%); filter: sepia(100%); }' });
  classes.push({ name: 'backdrop-sepia-0', css: '.backdrop-sepia-0 { --j-backdrop-sepia: sepia(0); backdrop-filter: sepia(0); -webkit-backdrop-filter: sepia(0); }' });
  classes.push({ name: 'backdrop-sepia', css: '.backdrop-sepia { --j-backdrop-sepia: sepia(100%); backdrop-filter: sepia(100%); -webkit-backdrop-filter: sepia(100%); }' });

  // Drop Shadow
  const dropShadows = {
    'sm': 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
    'DEFAULT': 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
    'md': 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
    'lg': 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
    'xl': 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
    '2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
    'none': 'drop-shadow(0 0 #0000)'
  };

  Object.entries(dropShadows).forEach(([name, value]) => {
    const className = name === 'DEFAULT' ? 'drop-shadow' : `drop-shadow-${name}`;
    classes.push({ name: className, css: `.${className} { --j-drop-shadow: ${value}; filter: ${value}; }` });
  });

  // Glow filter (futuristic)
  classes.push({
    name: 'drop-shadow-glow',
    css: `.drop-shadow-glow { filter: drop-shadow(0 0 10px var(--j-primary)) drop-shadow(0 0 20px var(--j-primary)); }`
  });
  classes.push({
    name: 'drop-shadow-glow-sm',
    css: `.drop-shadow-glow-sm { filter: drop-shadow(0 0 5px var(--j-primary)); }`
  });
  classes.push({
    name: 'drop-shadow-glow-lg',
    css: `.drop-shadow-glow-lg { filter: drop-shadow(0 0 20px var(--j-primary)) drop-shadow(0 0 40px var(--j-primary)); }`
  });

  // Backdrop Opacity
  const opacities = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];
  opacities.forEach(o => {
    const value = o / 100;
    classes.push({
      name: `backdrop-opacity-${o}`,
      css: `.backdrop-opacity-${o} { --j-backdrop-opacity: opacity(${value}); backdrop-filter: opacity(${value}); -webkit-backdrop-filter: opacity(${value}); }`
    });
  });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
