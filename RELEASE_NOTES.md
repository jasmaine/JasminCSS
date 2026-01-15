# JasminCSS v1.0.0

The first official release of JasminCSS - a modern, utility-first CSS framework.

## Highlights

- **3.5 MB** full CSS library with **3.1 MB** minified
- **14 utility categories** with responsive and state variants
- **26 pre-built components** with JavaScript behaviors
- **720 built-in icons** using CSS masks
- **Zero dependencies** for JavaScript components

## Features

### Utilities (14 categories)
- Layout (flexbox, grid, positioning)
- Spacing (padding, margin, gap)
- Typography (fonts, text styles)
- Colors (text, background, border)
- Effects (shadows, borders, opacity)
- Animations (transitions, keyframes)
- Transforms (scale, rotate, translate)
- Filters (blur, brightness, contrast)
- Icons (720 icons with sizes/colors)
- Background (images, gradients)
- Columns (multi-column layout)
- Scroll (snap, smooth, scrollbar)
- SVG (fill, stroke)
- Accessibility (sr-only, focus-ring, motion)

### Components (26)
Buttons, Cards, Forms, Navigation, Alerts, Badges, Modals, Tables, Avatars, Tooltips, Progress, Skeleton, Dropdown, Accordion, Chips, Offcanvas, Carousel, Stepper, Timeline, Rating, Upload, Spinner, Popover, Command Palette, Datepicker, Timepicker

### JavaScript
- Zero-dependency vanilla JS
- Keyboard navigation
- ARIA support
- Focus trapping
- Toast notifications

### Developer Experience
- TypeScript definitions
- VS Code extension
- CLI with branding wizard
- Next.js & Vite plugins
- Tree-shaking support

## Installation

```bash
npm install jasmincss
```

## CDN

```html
<link rel="stylesheet" href="https://unpkg.com/jasmincss@1.0.0/dist/jasmin.min.css">
<script src="https://unpkg.com/jasmincss@1.0.0/dist/jasmin.min.js"></script>
```

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="node_modules/jasmincss/dist/jasmin.css">
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

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

## Links

- [Documentation](./docs/)
- [Examples](./examples/)
- [GitHub](https://github.com/jasmaine/JasminCSS)
