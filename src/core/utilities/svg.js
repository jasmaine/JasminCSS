// SVG utilities for JasminCSS

export function generateSvgUtilities(config) {
  const classes = [];

  // Fill utilities
  classes.push({
    name: 'fill-none',
    css: '.fill-none { fill: none; }'
  });
  classes.push({
    name: 'fill-inherit',
    css: '.fill-inherit { fill: inherit; }'
  });
  classes.push({
    name: 'fill-current',
    css: '.fill-current { fill: currentColor; }'
  });
  classes.push({
    name: 'fill-transparent',
    css: '.fill-transparent { fill: transparent; }'
  });
  classes.push({
    name: 'fill-black',
    css: '.fill-black { fill: #000; }'
  });
  classes.push({
    name: 'fill-white',
    css: '.fill-white { fill: #fff; }'
  });

  // Fill semantic colors
  const colors = ['primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info', 'neutral'];
  colors.forEach(color => {
    classes.push({
      name: `fill-${color}`,
      css: `.fill-${color} { fill: var(--j-${color}); }`
    });
    // Color shades
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach(shade => {
      classes.push({
        name: `fill-${color}-${shade}`,
        css: `.fill-${color}-${shade} { fill: var(--color-${color}-${shade}); }`
      });
    });
  });

  // Stroke utilities
  classes.push({
    name: 'stroke-none',
    css: '.stroke-none { stroke: none; }'
  });
  classes.push({
    name: 'stroke-inherit',
    css: '.stroke-inherit { stroke: inherit; }'
  });
  classes.push({
    name: 'stroke-current',
    css: '.stroke-current { stroke: currentColor; }'
  });
  classes.push({
    name: 'stroke-transparent',
    css: '.stroke-transparent { stroke: transparent; }'
  });
  classes.push({
    name: 'stroke-black',
    css: '.stroke-black { stroke: #000; }'
  });
  classes.push({
    name: 'stroke-white',
    css: '.stroke-white { stroke: #fff; }'
  });

  // Stroke semantic colors
  colors.forEach(color => {
    classes.push({
      name: `stroke-${color}`,
      css: `.stroke-${color} { stroke: var(--j-${color}); }`
    });
    // Color shades
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach(shade => {
      classes.push({
        name: `stroke-${color}-${shade}`,
        css: `.stroke-${color}-${shade} { stroke: var(--color-${color}-${shade}); }`
      });
    });
  });

  // Stroke Width
  const strokeWidths = {
    '0': '0',
    '1': '1',
    '2': '2'
  };
  Object.entries(strokeWidths).forEach(([name, value]) => {
    classes.push({
      name: `stroke-${name}`,
      css: `.stroke-${name} { stroke-width: ${value}; }`
    });
  });

  // Stroke Linecap
  const linecaps = ['butt', 'round', 'square'];
  linecaps.forEach(value => {
    classes.push({
      name: `stroke-cap-${value}`,
      css: `.stroke-cap-${value} { stroke-linecap: ${value}; }`
    });
  });

  // Stroke Linejoin
  const linejoins = ['arcs', 'bevel', 'miter', 'miter-clip', 'round'];
  linejoins.forEach(value => {
    classes.push({
      name: `stroke-join-${value}`,
      css: `.stroke-join-${value} { stroke-linejoin: ${value}; }`
    });
  });

  // Stroke Dasharray
  classes.push({
    name: 'stroke-dash-none',
    css: '.stroke-dash-none { stroke-dasharray: none; }'
  });
  classes.push({
    name: 'stroke-dash-1',
    css: '.stroke-dash-1 { stroke-dasharray: 1; }'
  });
  classes.push({
    name: 'stroke-dash-2',
    css: '.stroke-dash-2 { stroke-dasharray: 2; }'
  });
  classes.push({
    name: 'stroke-dash-4',
    css: '.stroke-dash-4 { stroke-dasharray: 4; }'
  });
  classes.push({
    name: 'stroke-dash-6',
    css: '.stroke-dash-6 { stroke-dasharray: 6; }'
  });

  // Stroke Dashoffset
  [0, 1, 2, 4, 8].forEach(value => {
    classes.push({
      name: `stroke-offset-${value}`,
      css: `.stroke-offset-${value} { stroke-dashoffset: ${value}; }`
    });
  });

  // Stroke Opacity
  const opacities = [0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];
  opacities.forEach(value => {
    classes.push({
      name: `stroke-opacity-${value}`,
      css: `.stroke-opacity-${value} { stroke-opacity: ${value / 100}; }`
    });
  });

  // Fill Opacity
  opacities.forEach(value => {
    classes.push({
      name: `fill-opacity-${value}`,
      css: `.fill-opacity-${value} { fill-opacity: ${value / 100}; }`
    });
  });

  // Fill Rule
  classes.push({
    name: 'fill-rule-nonzero',
    css: '.fill-rule-nonzero { fill-rule: nonzero; }'
  });
  classes.push({
    name: 'fill-rule-evenodd',
    css: '.fill-rule-evenodd { fill-rule: evenodd; }'
  });

  // Clip Rule
  classes.push({
    name: 'clip-rule-nonzero',
    css: '.clip-rule-nonzero { clip-rule: nonzero; }'
  });
  classes.push({
    name: 'clip-rule-evenodd',
    css: '.clip-rule-evenodd { clip-rule: evenodd; }'
  });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
