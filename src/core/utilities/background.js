// Background utilities for JasminCSS

export function generateBackgroundUtilities(config) {
  const classes = [];

  // Background Attachment
  const attachments = ['fixed', 'local', 'scroll'];
  attachments.forEach(value => {
    classes.push({
      name: `bg-${value}`,
      css: `.bg-${value} { background-attachment: ${value}; }`
    });
  });

  // Background Clip
  const clips = {
    'border': 'border-box',
    'padding': 'padding-box',
    'content': 'content-box',
    'text': 'text'
  };
  Object.entries(clips).forEach(([name, value]) => {
    classes.push({
      name: `bg-clip-${name}`,
      css: `.bg-clip-${name} { background-clip: ${value};${value === 'text' ? ' -webkit-background-clip: text;' : ''} }`
    });
  });

  // Background Origin
  const origins = {
    'border': 'border-box',
    'padding': 'padding-box',
    'content': 'content-box'
  };
  Object.entries(origins).forEach(([name, value]) => {
    classes.push({
      name: `bg-origin-${name}`,
      css: `.bg-origin-${name} { background-origin: ${value}; }`
    });
  });

  // Background Position
  const positions = {
    'bottom': 'bottom',
    'center': 'center',
    'left': 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    'right': 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    'top': 'top'
  };
  Object.entries(positions).forEach(([name, value]) => {
    classes.push({
      name: `bg-${name}`,
      css: `.bg-${name} { background-position: ${value}; }`
    });
  });

  // Background Repeat
  const repeats = {
    'repeat': 'repeat',
    'no-repeat': 'no-repeat',
    'repeat-x': 'repeat-x',
    'repeat-y': 'repeat-y',
    'repeat-round': 'round',
    'repeat-space': 'space'
  };
  Object.entries(repeats).forEach(([name, value]) => {
    classes.push({
      name: `bg-${name}`,
      css: `.bg-${name} { background-repeat: ${value}; }`
    });
  });

  // Background Size
  const sizes = {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain'
  };
  Object.entries(sizes).forEach(([name, value]) => {
    classes.push({
      name: `bg-${name}`,
      css: `.bg-${name} { background-size: ${value}; }`
    });
  });

  // Background Image None
  classes.push({
    name: 'bg-none',
    css: '.bg-none { background-image: none; }'
  });

  // Background Blend Mode
  const blendModes = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  blendModes.forEach(mode => {
    classes.push({
      name: `bg-blend-${mode}`,
      css: `.bg-blend-${mode} { background-blend-mode: ${mode}; }`
    });
  });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
