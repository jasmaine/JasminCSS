// Scroll utilities for JasminCSS

export function generateScrollUtilities(config) {
  const classes = [];

  // Spacing scale for scroll padding/margin
  const spacing = {
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
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem'
  };

  // Scroll Padding
  Object.entries(spacing).forEach(([name, value]) => {
    const className = name.includes('.') ? name.replace('.', '\\.') : name;

    // All sides
    classes.push({
      name: `scroll-p-${name}`,
      css: `.scroll-p-${className} { scroll-padding: ${value}; }`
    });

    // X axis
    classes.push({
      name: `scroll-px-${name}`,
      css: `.scroll-px-${className} { scroll-padding-left: ${value}; scroll-padding-right: ${value}; }`
    });

    // Y axis
    classes.push({
      name: `scroll-py-${name}`,
      css: `.scroll-py-${className} { scroll-padding-top: ${value}; scroll-padding-bottom: ${value}; }`
    });

    // Individual sides
    classes.push({
      name: `scroll-pt-${name}`,
      css: `.scroll-pt-${className} { scroll-padding-top: ${value}; }`
    });
    classes.push({
      name: `scroll-pr-${name}`,
      css: `.scroll-pr-${className} { scroll-padding-right: ${value}; }`
    });
    classes.push({
      name: `scroll-pb-${name}`,
      css: `.scroll-pb-${className} { scroll-padding-bottom: ${value}; }`
    });
    classes.push({
      name: `scroll-pl-${name}`,
      css: `.scroll-pl-${className} { scroll-padding-left: ${value}; }`
    });

    // Logical properties
    classes.push({
      name: `scroll-ps-${name}`,
      css: `.scroll-ps-${className} { scroll-padding-inline-start: ${value}; }`
    });
    classes.push({
      name: `scroll-pe-${name}`,
      css: `.scroll-pe-${className} { scroll-padding-inline-end: ${value}; }`
    });
  });

  // Scroll Margin
  Object.entries(spacing).forEach(([name, value]) => {
    const className = name.includes('.') ? name.replace('.', '\\.') : name;

    // All sides
    classes.push({
      name: `scroll-m-${name}`,
      css: `.scroll-m-${className} { scroll-margin: ${value}; }`
    });

    // X axis
    classes.push({
      name: `scroll-mx-${name}`,
      css: `.scroll-mx-${className} { scroll-margin-left: ${value}; scroll-margin-right: ${value}; }`
    });

    // Y axis
    classes.push({
      name: `scroll-my-${name}`,
      css: `.scroll-my-${className} { scroll-margin-top: ${value}; scroll-margin-bottom: ${value}; }`
    });

    // Individual sides
    classes.push({
      name: `scroll-mt-${name}`,
      css: `.scroll-mt-${className} { scroll-margin-top: ${value}; }`
    });
    classes.push({
      name: `scroll-mr-${name}`,
      css: `.scroll-mr-${className} { scroll-margin-right: ${value}; }`
    });
    classes.push({
      name: `scroll-mb-${name}`,
      css: `.scroll-mb-${className} { scroll-margin-bottom: ${value}; }`
    });
    classes.push({
      name: `scroll-ml-${name}`,
      css: `.scroll-ml-${className} { scroll-margin-left: ${value}; }`
    });

    // Logical properties
    classes.push({
      name: `scroll-ms-${name}`,
      css: `.scroll-ms-${className} { scroll-margin-inline-start: ${value}; }`
    });
    classes.push({
      name: `scroll-me-${name}`,
      css: `.scroll-me-${className} { scroll-margin-inline-end: ${value}; }`
    });
  });

  // Overscroll Behavior
  const overscroll = ['auto', 'contain', 'none'];
  overscroll.forEach(value => {
    classes.push({
      name: `overscroll-${value}`,
      css: `.overscroll-${value} { overscroll-behavior: ${value}; }`
    });
    classes.push({
      name: `overscroll-x-${value}`,
      css: `.overscroll-x-${value} { overscroll-behavior-x: ${value}; }`
    });
    classes.push({
      name: `overscroll-y-${value}`,
      css: `.overscroll-y-${value} { overscroll-behavior-y: ${value}; }`
    });
  });

  // Scrollbar Width
  classes.push({
    name: 'scrollbar-auto',
    css: '.scrollbar-auto { scrollbar-width: auto; }'
  });
  classes.push({
    name: 'scrollbar-thin',
    css: '.scrollbar-thin { scrollbar-width: thin; }'
  });
  classes.push({
    name: 'scrollbar-none',
    css: '.scrollbar-none { scrollbar-width: none; -ms-overflow-style: none; }'
  });
  classes.push({
    name: 'scrollbar-none',
    css: '.scrollbar-none::-webkit-scrollbar { display: none; }'
  });

  // Scrollbar Color
  const colors = ['primary', 'secondary', 'accent', 'neutral'];
  colors.forEach(color => {
    classes.push({
      name: `scrollbar-${color}`,
      css: `.scrollbar-${color} { scrollbar-color: var(--j-${color}) transparent; }`
    });
  });

  // Scroll Snap Stop
  classes.push({
    name: 'snap-normal',
    css: '.snap-normal { scroll-snap-stop: normal; }'
  });
  classes.push({
    name: 'snap-always',
    css: '.snap-always { scroll-snap-stop: always; }'
  });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
