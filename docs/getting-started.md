# Getting Started

## Installation

### NPM

```bash
npm install jasmincss
```

### Yarn

```bash
yarn add jasmincss
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/jasmincss/dist/jasmin.min.css">
<script src="https://unpkg.com/jasmincss/dist/jasmin.min.js"></script>
```

## Basic Setup

### HTML

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
  <!-- Your content -->

  <!-- Optional: JavaScript for interactive components -->
  <script type="module">
    import Jasmin from 'jasmincss/js';
    Jasmin.autoInit();
  </script>
</body>
</html>
```

### With Build Tools

**Vite**

```js
// vite.config.js
import { jasminPlugin } from 'jasmincss/plugins/vite';

export default {
  plugins: [jasminPlugin()]
};
```

**Next.js**

```js
// next.config.js
const { withJasmin } = require('jasmincss/plugins/next');

module.exports = withJasmin({
  // your config
});
```

### Import in CSS

```css
@import 'jasmincss';
```

### Import in JavaScript

```js
import 'jasmincss/dist/jasmin.css';
import Jasmin from 'jasmincss/js';
```

## CLI Usage

### Initialize a new project

```bash
npx jasmin init
```

This runs an interactive wizard to configure:
- Brand colors
- Typography
- Design template (Futuristic, Minimal, Corporate, Creative)

### Build CSS

```bash
# Development build (all utilities)
npx jasmin run dev

# Production build (tree-shaken)
npx jasmin run build

# Watch mode
npx jasmin run watch
```

### Add components

```bash
npx jasmin add modal
npx jasmin add carousel
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

## Project Structure

After initialization:

```
your-project/
├── jasmin.config.js    # Configuration
├── src/
│   ├── styles/
│   │   └── main.css    # Your custom styles
│   └── ...
├── dist/
│   └── jasmin.css      # Generated CSS
└── package.json
```

## Next Steps

- [Learn the utility classes](./utilities/)
- [Explore components](./components/)
- [Add JavaScript behaviors](./javascript.md)
- [Customize the theme](./customization.md)
