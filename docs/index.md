# JasminCSS Documentation

A modern, utility-first CSS framework with built-in components, icons, and JavaScript behaviors.

## Features

- **14 Utility Categories** - Layout, spacing, typography, colors, effects, animations, transforms, filters, icons, background, columns, scroll, SVG, accessibility
- **26 Components** - Buttons, cards, forms, navigation, modals, dropdowns, accordions, carousels, and more
- **720 Icons** - Built-in icon system using CSS masks
- **JavaScript Behaviors** - Zero-dependency, accessible component interactions
- **Dark Mode** - First-class support with `dark:` prefix
- **Tree-Shaking** - Only include CSS you use in production
- **Modern CSS** - CSS variables, color-mix(), container queries, logical properties

## Quick Links

- [Getting Started](./getting-started.md)
- [Utilities Reference](./utilities/)
- [Components Reference](./components/)
- [JavaScript](./javascript.md)
- [Customization](./customization.md)
- [Examples](./examples.md)

## Installation

```bash
npm install jasmincss
```

## Quick Start

```html
<!DOCTYPE html>
<html>
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

## License

MIT
