# JasminCSS

A modern, utility-first CSS framework with 26 components, 720 icons, JavaScript behaviors, and powerful CLI tooling.

## Features

- **14 Utility Categories** - Layout, spacing, typography, colors, effects, animations, transforms, filters, icons, background, columns, scroll, SVG, accessibility
- **26 Pre-built Components** - Buttons, cards, modals, dropdowns, accordions, carousels, and more
- **720 Built-in Icons** - CSS-based icon system using masks
- **JavaScript Behaviors** - Zero-dependency, accessible component interactions
- **Dark Mode** - First-class support with `dark:` prefix
- **Tree-Shaking** - Only include CSS you use in production
- **TypeScript Support** - Full type definitions included
- **VS Code Extension** - IntelliSense for class autocomplete
- **CLI Branding Wizard** - Interactive setup for colors, typography, and style
- **Framework Plugins** - First-class support for Next.js and Vite

## Installation

```bash
npm install jasmincss
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/jasmincss/dist/jasmin.min.css">
<script src="https://unpkg.com/jasmincss/dist/jasmin.min.js"></script>
```

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="node_modules/jasmincss/dist/jasmin.css">
  <title>My App</title>
</head>
<body>
  <button class="btn btn-primary">Click me</button>

  <script type="module">
    import Jasmin from 'jasmincss/js';
    Jasmin.autoInit();
  </script>
</body>
</html>
```

## Components

JasminCSS includes 26 pre-built components:

| Component | Description | JS Required |
|-----------|-------------|-------------|
| Buttons | Primary, secondary, outline, ghost, sizes | No |
| Cards | Content containers with header/body/footer | No |
| Forms | Inputs, select, checkbox, radio, switch | No |
| Navigation | Navbar, sidebar, breadcrumb, tabs | Yes (tabs) |
| Alerts | Info, success, warning, error messages | Yes (dismiss) |
| Badges | Labels, tags, status indicators | No |
| Modals | Dialog boxes with focus trapping | Yes |
| Tables | Data tables with styling variants | No |
| Avatars | User profile images | No |
| Tooltips | Hover information | Yes |
| Progress | Progress bars, loading indicators | No |
| Skeleton | Loading placeholders | No |
| Dropdown | Dropdown menus with keyboard nav | Yes |
| Accordion | Collapsible panels | Yes |
| Chips | Tags, filters, selections | No |
| Offcanvas | Slide-out panels, drawers | Yes |
| Carousel | Image/content sliders | Yes |
| Stepper | Multi-step wizards | No |
| Timeline | Event sequences | No |
| Rating | Star ratings | No |
| Upload | File upload zones | No |
| Spinner | Loading spinners | No |
| Popover | Rich content tooltips | Yes |
| Command Palette | Search/command modal | Yes |
| Datepicker | Date selection calendar | Yes |
| Timepicker | Time selection | Yes |

### Example Components

```html
<!-- Button -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline</button>

<!-- Card -->
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>

<!-- Modal -->
<div class="modal" data-modal id="my-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button class="modal-close" data-modal-close>&times;</button>
      </div>
      <div class="modal-body">Content</div>
    </div>
  </div>
</div>
<button data-modal-target="#my-modal">Open Modal</button>

<!-- Dropdown -->
<div class="dropdown" data-dropdown>
  <button class="btn dropdown-toggle">Menu</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
  </div>
</div>

<!-- Accordion -->
<div class="accordion" data-accordion>
  <div class="accordion-item">
    <button class="accordion-trigger">Section 1</button>
    <div class="accordion-content">
      <div class="accordion-body">Content</div>
    </div>
  </div>
</div>
```

## Utilities

14 utility categories with responsive and state variants:

| Category | Example Classes |
|----------|-----------------|
| Layout | `flex`, `grid`, `absolute`, `z-10` |
| Spacing | `p-4`, `mx-auto`, `gap-2` |
| Typography | `text-lg`, `font-bold`, `leading-tight` |
| Colors | `text-primary`, `bg-white`, `border-gray-200` |
| Effects | `shadow-lg`, `rounded-xl`, `opacity-50` |
| Animations | `transition`, `animate-bounce` |
| Transforms | `scale-110`, `rotate-45`, `translate-x-4` |
| Filters | `blur-sm`, `brightness-125`, `grayscale` |
| Icons | `icon icon-home`, `icon-lg` |
| Background | `bg-cover`, `bg-center`, `bg-fixed` |
| Columns | `columns-2`, `column-gap-4` |
| Scroll | `scroll-smooth`, `snap-x`, `scrollbar-thin` |
| SVG | `fill-current`, `stroke-primary` |
| Accessibility | `sr-only`, `focus-ring`, `motion-reduce` |

### Responsive Prefixes

```html
<div class="flex flex-col md:flex-row lg:gap-8">
  <!-- Stacked on mobile, row on tablet+ -->
</div>
```

| Prefix | Breakpoint |
|--------|------------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

### State Variants

```html
<button class="bg-primary hover:bg-primary-dark focus:ring-2 active:scale-95">
  Interactive
</button>
```

| Prefix | Trigger |
|--------|---------|
| `hover:` | Mouse hover |
| `focus:` | Element focused |
| `active:` | Being clicked |
| `disabled:` | Disabled state |
| `dark:` | Dark mode |
| `group-hover:` | Parent hovered |

## Icons

720 built-in icons using CSS masks:

```html
<!-- Basic icon -->
<span class="icon icon-home"></span>

<!-- Sizes -->
<span class="icon icon-home icon-xs"></span>
<span class="icon icon-home icon-sm"></span>
<span class="icon icon-home icon-lg"></span>
<span class="icon icon-home icon-xl"></span>

<!-- Colors -->
<span class="icon icon-check icon-success"></span>
<span class="icon icon-x icon-error"></span>
```

## JavaScript

Zero-dependency JavaScript for interactive components:

```js
import Jasmin from 'jasmincss/js';

// Auto-initialize all components
Jasmin.autoInit();

// Or initialize specific components
import { Modal, Dropdown, Tabs } from 'jasmincss/js';
Modal.initAll();
Dropdown.initAll();
```

### Individual Component Control

```js
import { Modal } from 'jasmincss/js';

const modal = new Modal(element, {
  backdrop: true,
  keyboard: true,
  focus: true
});

modal.open();
modal.close();
```

### Toast Notifications

```js
import { Toast } from 'jasmincss/js';

Toast.success('Changes saved!');
Toast.error('Something went wrong');
Toast.warning('Please check your input');
Toast.info('New update available');
```

## Dark Mode

Enable dark mode by adding `class="dark"` to `<html>`:

```html
<html class="dark">
  <body>
    <div class="bg-white dark:bg-gray-900 text-black dark:text-white">
      Adapts to dark mode
    </div>
  </body>
</html>
```

Toggle with JavaScript:

```js
document.documentElement.classList.toggle('dark');
```

Or use automatic mode based on system preference:

```js
// jasmin.config.js
export default {
  darkMode: 'media'
};
```

## Configuration

Create a `jasmin.config.js` file:

```js
export default {
  // Brand colors
  branding: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4'
  },

  // Content files to scan for tree-shaking
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './index.html'
  ],

  // Dark mode strategy
  darkMode: 'class', // 'class' or 'media'

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};
```

### CSS Variables

Override design tokens directly:

```css
:root {
  --j-primary: #6366f1;
  --j-secondary: #8b5cf6;
  --j-border-radius: 0.5rem;
  --j-font-sans: 'Inter', sans-serif;
}
```

## CLI Commands

```bash
# Initialize project with branding wizard
npx jasmin init

# Build CSS
npx jasmin run dev      # Development (full library)
npx jasmin run build    # Production (tree-shaken)
npx jasmin run watch    # Watch mode

# Add components
npx jasmin add modal
npx jasmin add carousel
npx jasmin add --list   # List all components
```

## Framework Integration

### Vite

```js
// vite.config.js
import { jasminPlugin } from 'jasmincss/plugins/vite';

export default {
  plugins: [jasminPlugin()]
};
```

### Next.js

```js
// next.config.js
const { withJasmin } = require('jasmincss/plugins/next');

module.exports = withJasmin({
  // your config
});
```

## TypeScript

Full type definitions included:

```ts
import Jasmin, { Modal, ModalOptions } from 'jasmincss/js';

const options: ModalOptions = {
  backdrop: true,
  keyboard: true
};

const modal = new Modal(element, options);
```

Configuration types:

```ts
import type { JasminConfig } from 'jasmincss/config';

const config: JasminConfig = {
  branding: {
    primary: '#6366f1'
  }
};
```

## VS Code Extension

Install the JasminCSS IntelliSense extension for:

- Class autocomplete in HTML, JSX, Vue, Svelte
- Hover documentation showing CSS output
- Support for responsive and state prefixes

```bash
cd vscode-extension
npm install
npm run build
npm run package
code --install-extension jasmincss-intellisense-1.0.0.vsix
```

## Example Templates

Ready-to-use templates in `/examples`:

| Template | Description |
|----------|-------------|
| `landing/` | SaaS landing page with hero, pricing, FAQ |
| `dashboard/` | Admin dashboard with sidebar, tables, stats |
| `blog/` | Blog with article cards, categories, newsletter |

```bash
# Serve examples locally
npx serve .
open http://localhost:3000/examples/landing/
```

## Testing

```bash
# Unit tests
npm test

# Browser tests (Playwright)
npm run test:browser

# Accessibility tests
npm run test:a11y

# Performance benchmark
npm run test:perf

# Run all tests
npm run test:all
```

## Accessibility

JasminCSS components include:

- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support
- Reduced motion support

Utilities for accessibility:

```html
<!-- Screen reader only -->
<span class="sr-only">Hidden text for screen readers</span>

<!-- Focus ring -->
<button class="focus-ring">Visible focus</button>

<!-- Skip link -->
<a href="#main" class="sr-only-focusable">Skip to content</a>

<!-- Reduced motion -->
<div class="motion-safe:animate-bounce motion-reduce:animate-none">
  Respects user preferences
</div>
```

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

## Project Structure

```
jasmincss/
├── dist/                 # Compiled CSS
├── src/
│   ├── core/
│   │   ├── utilities/    # 14 utility modules
│   │   └── base/         # Reset and variables
│   ├── components/       # 26 component styles
│   └── js/
│       ├── components/   # Interactive behaviors
│       └── types/        # TypeScript definitions
├── docs/                 # Documentation
├── examples/             # Template examples
├── tests/                # Browser, perf, a11y tests
├── vscode-extension/     # VS Code IntelliSense
└── bin/                  # CLI tool
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

```bash
# Clone the repo
git clone https://github.com/jasmaine/JasminCSS.git

# Install dependencies
npm install

# Run development build
npm run dev

# Run tests
npm run test:all
```

## License

MIT License - free for personal and commercial use.

---

**Documentation:** [docs/](./docs/)
**Examples:** [examples/](./examples/)
**Issues:** [GitHub Issues](https://github.com/jasmaine/JasminCSS/issues)
