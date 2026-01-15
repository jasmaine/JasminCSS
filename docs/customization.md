# Customization

JasminCSS is fully customizable through CSS variables and configuration.

## Configuration File

Create `jasmin.config.js` in your project root:

```js
export default {
  // Brand colors
  branding: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },

  // Content files for tree-shaking
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte}',
    './index.html'
  ],

  // Dark mode strategy
  darkMode: 'class', // 'class' or 'media'

  // Responsive breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Spacing scale
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem'
  },

  // Typography
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    serif: 'Georgia, Cambria, serif',
    mono: 'JetBrains Mono, Menlo, monospace'
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px'
  },

  // Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    none: 'none'
  }
};
```

## CSS Variables

Override CSS variables directly for quick customization:

```css
:root {
  /* Primary brand color */
  --j-primary: #6366f1;
  --j-primary-light: #818cf8;
  --j-primary-dark: #4f46e5;

  /* Secondary brand color */
  --j-secondary: #8b5cf6;
  --j-secondary-light: #a78bfa;
  --j-secondary-dark: #7c3aed;

  /* Accent color */
  --j-accent: #06b6d4;

  /* Semantic colors */
  --j-success: #22c55e;
  --j-warning: #f59e0b;
  --j-error: #ef4444;
  --j-info: #3b82f6;

  /* Neutral colors */
  --j-white: #ffffff;
  --j-black: #000000;
  --j-gray-50: #f9fafb;
  --j-gray-100: #f3f4f6;
  --j-gray-200: #e5e7eb;
  --j-gray-300: #d1d5db;
  --j-gray-400: #9ca3af;
  --j-gray-500: #6b7280;
  --j-gray-600: #4b5563;
  --j-gray-700: #374151;
  --j-gray-800: #1f2937;
  --j-gray-900: #111827;

  /* Typography */
  --j-font-sans: Inter, system-ui, sans-serif;
  --j-font-serif: Georgia, serif;
  --j-font-mono: 'JetBrains Mono', monospace;

  /* Spacing base unit */
  --j-spacing-unit: 0.25rem;

  /* Border */
  --j-border-color: var(--j-gray-200);
  --j-border-radius: 0.25rem;

  /* Shadows */
  --j-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --j-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --j-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --j-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Transitions */
  --j-transition-fast: 150ms;
  --j-transition-normal: 200ms;
  --j-transition-slow: 300ms;

  /* Z-index scale */
  --j-z-dropdown: 1000;
  --j-z-sticky: 1020;
  --j-z-fixed: 1030;
  --j-z-modal-backdrop: 1040;
  --j-z-modal: 1050;
  --j-z-popover: 1060;
  --j-z-tooltip: 1070;
  --j-z-toast: 1080;
}
```

## Dark Mode Variables

Override dark mode colors:

```css
.dark {
  --j-bg: var(--j-gray-900);
  --j-bg-secondary: var(--j-gray-800);
  --j-text: var(--j-gray-100);
  --j-text-secondary: var(--j-gray-400);
  --j-border-color: var(--j-gray-700);

  /* Adjusted primary for dark backgrounds */
  --j-primary: #818cf8;
  --j-primary-light: #a5b4fc;
  --j-primary-dark: #6366f1;
}
```

## Component Customization

### Buttons

```css
/* Custom button styles */
.btn {
  --btn-padding-x: 1rem;
  --btn-padding-y: 0.5rem;
  --btn-font-size: 0.875rem;
  --btn-font-weight: 500;
  --btn-border-radius: var(--j-border-radius);
}

/* Create a custom button variant */
.btn-brand {
  background: linear-gradient(135deg, var(--j-primary), var(--j-secondary));
  color: white;
}

.btn-brand:hover {
  background: linear-gradient(135deg, var(--j-primary-dark), var(--j-secondary-dark));
}
```

### Cards

```css
.card {
  --card-padding: 1.5rem;
  --card-border-radius: var(--j-border-radius-lg);
  --card-shadow: var(--j-shadow-md);
  --card-border-color: var(--j-border-color);
}
```

### Forms

```css
.form-control {
  --input-padding-x: 0.75rem;
  --input-padding-y: 0.5rem;
  --input-border-color: var(--j-gray-300);
  --input-border-radius: var(--j-border-radius);
  --input-focus-ring: 0 0 0 3px rgb(99 102 241 / 0.2);
}
```

## Extending Utilities

### Add Custom Colors

```js
// jasmin.config.js
export default {
  extend: {
    colors: {
      brand: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87'
      },
      ocean: '#0ea5e9',
      forest: '#22c55e'
    }
  }
};
```

This generates: `text-brand-500`, `bg-brand-600`, `border-ocean`, etc.

### Add Custom Spacing

```js
// jasmin.config.js
export default {
  extend: {
    spacing: {
      '18': '4.5rem',
      '72': '18rem',
      '84': '21rem',
      '96': '24rem'
    }
  }
};
```

### Add Custom Breakpoints

```js
// jasmin.config.js
export default {
  extend: {
    breakpoints: {
      '3xl': '1920px',
      'print': { raw: 'print' }
    }
  }
};
```

## Design Templates

Use the CLI to apply pre-built design templates:

```bash
npx jasmin init
```

Choose from:
- **Futuristic** - Glass effects, gradients, animations
- **Minimal** - Clean, subtle, whitespace-focused
- **Corporate** - Professional, conservative
- **Creative** - Bold colors, unique typography

### Futuristic Template

```css
:root {
  --j-primary: #6366f1;
  --j-secondary: #8b5cf6;
  --j-accent: #06b6d4;
  --j-border-radius: 0.75rem;
  --j-glass-bg: rgba(255, 255, 255, 0.1);
  --j-glass-blur: 10px;
}

.card-glass {
  background: var(--j-glass-bg);
  backdrop-filter: blur(var(--j-glass-blur));
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Minimal Template

```css
:root {
  --j-primary: #18181b;
  --j-secondary: #71717a;
  --j-border-radius: 0.125rem;
  --j-shadow: none;
  --j-border-color: #e4e4e7;
}
```

### Corporate Template

```css
:root {
  --j-primary: #1e40af;
  --j-secondary: #475569;
  --j-border-radius: 0.25rem;
  --j-font-sans: 'Open Sans', system-ui, sans-serif;
}
```

## Tree-Shaking

Configure content paths for production optimization:

```js
// jasmin.config.js
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './components/**/*.{html,js}',
    './index.html'
  ]
};
```

Build for production:

```bash
npx jasmin run build
```

This scans your files and includes only used CSS classes.

## Safelist Classes

Force include specific classes even if not detected:

```js
// jasmin.config.js
export default {
  safelist: [
    'bg-primary',
    'text-error',
    /^animate-/,  // Regex: all animation classes
    /^icon-/      // Regex: all icon classes
  ]
};
```

## Disable Utilities

Remove unused utility categories:

```js
// jasmin.config.js
export default {
  corePlugins: {
    animations: false,  // Disable animation utilities
    filters: false,     // Disable filter utilities
    transforms: false   // Disable transform utilities
  }
};
```

## Custom Plugins

Create reusable plugins:

```js
// my-plugin.js
export default function myPlugin({ addUtilities, addComponents, theme }) {
  // Add utilities
  addUtilities({
    '.text-gradient': {
      'background': 'linear-gradient(135deg, var(--j-primary), var(--j-secondary))',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }
  });

  // Add components
  addComponents({
    '.card-hero': {
      'padding': '3rem',
      'border-radius': '1rem',
      'background': 'linear-gradient(135deg, var(--j-primary), var(--j-accent))',
      'color': 'white'
    }
  });
}
```

Use in config:

```js
// jasmin.config.js
import myPlugin from './my-plugin.js';

export default {
  plugins: [myPlugin]
};
```
