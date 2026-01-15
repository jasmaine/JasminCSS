# JasminCSS 🌸

A modern, future-proof CSS framework with TailwindCSS-inspired utilities, Studio Pasarella design philosophy, and powerful CLI tooling.

## Features

- **TailwindCSS-Inspired Utilities** - Familiar utility classes for rapid development
- **Component Library** - Pre-built components (buttons, cards, forms, modals, etc.)
- **CLI Branding Wizard** - Interactive setup to define your brand colors, typography, and style
- **Tree-Shaking** - Production builds only include the CSS you actually use
- **Framework Plugins** - First-class support for Next.js, Vite, and more
- **Dark Mode** - Built-in dark mode support with CSS custom properties
- **Futuristic Extras** - Glass effects, glow animations, neon colors

## Installation

```bash
npm install jasmincss
```

## Quick Start

### 1. Initialize your project

```bash
npx jasmin init
```

This will launch an interactive wizard to configure your branding.

### 2. Build your CSS

```bash
# Development (full library)
npx jasmin run dev

# Production (tree-shaken and minified)
npx jasmin run build

# Watch mode
npx jasmin run watch
```

### 3. Import in your project

```javascript
// Import the compiled CSS
import './dist/jasmin.min.css';

// Or import directly from package (in supported bundlers)
import 'jasmincss/css';
```

## CLI Commands

| Command | Description |
|---------|-------------|
| `jasmin init` | Initialize JasminCSS with branding wizard |
| `jasmin run build` | Compile minified CSS (tree-shaken) |
| `jasmin run dev` | Compile full library for development |
| `jasmin run watch` | Watch and rebuild on changes |
| `jasmin add <component>` | Add a component to your config |
| `jasmin add --list` | List all available components |

## Configuration

JasminCSS uses a `jasmin.config.js` file for configuration:

```javascript
export default {
  projectName: 'my-project',
  darkMode: true,

  // Files to scan for class usage (tree-shaking)
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue,svelte}',
    './index.html'
  ],

  // Branding configuration
  branding: {
    colors: {
      primary: '#6366f1',
      secondary: '#ec4899',
      accent: '#14b8a6',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    },
    typography: {
      fontFamily: 'Inter'
    },
    borderRadius: {
      default: '0.5rem'
    }
  },

  // Components to include
  components: ['buttons', 'cards', 'forms', 'navigation', 'alerts', 'badges'],

  // Utility modules to include
  utilities: ['layout', 'spacing', 'typography', 'colors', 'effects', 'animations']
};
```

## Design Templates

JasminCSS comes with pre-configured design templates:

- **Futuristic** - Bold, modern, tech-forward with neon accents
- **Minimal** - Clean, elegant, understated
- **Corporate** - Professional, trustworthy
- **Creative** - Vibrant, expressive, artistic

```bash
# Use a template during init
npx jasmin init --template futuristic
```

## Framework Integration

### Next.js

```javascript
// next.config.js
const withJasminCSS = require('jasmincss/plugin/nextjs');

module.exports = withJasminCSS({
  configPath: './jasmin.config.js'
})({
  // your Next.js config
});
```

### Vite

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import jasmin from 'jasmincss/plugin/vite';

export default defineConfig({
  plugins: [
    jasmin({
      configPath: './jasmin.config.js'
    })
  ]
});
```

## CDN Usage

For quick prototyping without a build step:

```html
<!-- Full library -->
<link rel="stylesheet" href="https://unpkg.com/jasmincss/dist/jasmin.min.css">

<!-- Or via jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jasmincss/dist/jasmin.min.css">
```

## Utility Classes

JasminCSS includes comprehensive utility classes similar to TailwindCSS:

### Layout
```html
<div class="flex items-center justify-between gap-4">
<div class="grid grid-cols-3 gap-6">
<div class="container mx-auto px-4">
```

### Spacing
```html
<div class="p-4 m-2 px-6 py-3">
<div class="mt-8 mb-4 space-y-4">
```

### Typography
```html
<h1 class="text-4xl font-bold tracking-tight">
<p class="text-base text-muted leading-relaxed">
```

### Colors
```html
<div class="bg-primary text-white">
<div class="text-gray-500 border-gray-200">
<div class="bg-gradient-to-r from-primary to-secondary">
```

### Effects
```html
<div class="shadow-lg rounded-xl border">
<div class="glass backdrop-blur-md">
<div class="shadow-glow ring-2 ring-primary">
```

### Animations
```html
<div class="animate-fade-in transition duration-300">
<div class="hover:scale-105 transform">
<div class="animate-pulse animate-glow">
```

## Components

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-glow">Glow Effect</button>
<button class="btn btn-gradient btn-lg btn-pill">Gradient Pill</button>
```

### Cards

```html
<div class="card card-hover">
  <img class="card-img-top" src="..." alt="...">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card content goes here.</p>
    <div class="card-actions">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>

<!-- Glass card -->
<div class="card card-glass">...</div>
```

### Forms

```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" placeholder="Enter email">
  <span class="form-text">We'll never share your email.</span>
</div>

<div class="form-switch">
  <input type="checkbox" class="form-switch-input">
  <label>Enable notifications</label>
</div>
```

### Alerts

```html
<div class="alert alert-success">Success message</div>
<div class="alert alert-error alert-dismissible">
  Error message
  <button class="alert-close">×</button>
</div>
```

### Badges

```html
<span class="badge badge-primary">New</span>
<span class="badge badge-soft-success">Active</span>
<span class="badge badge-glow-primary">Featured</span>
```

## Dark Mode

JasminCSS supports dark mode via CSS custom properties:

```html
<!-- Automatic (follows system preference) -->
<html>

<!-- Manual toggle -->
<html class="dark">
```

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

## Customization

### CSS Custom Properties

Override any design token via CSS:

```css
:root {
  --j-primary: #7c3aed;
  --j-secondary: #f472b6;
  --j-radius-default: 1rem;
  --j-font-sans: 'Your Font', sans-serif;
}
```

### Extending Utilities

Add custom utilities in your own CSS:

```css
/* Custom glass variant */
.glass-custom {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

## Browser Support

JasminCSS supports all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use in personal and commercial projects.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

---

Made with 🌸 by the JasminCSS team
