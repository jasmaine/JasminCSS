# JasminCSS IntelliSense

Intelligent autocomplete for JasminCSS classes in VS Code.

## Features

- **Autocomplete** - Class suggestions as you type in `class` or `className` attributes
- **Hover Information** - See CSS output and documentation on hover
- **Responsive Prefixes** - Full support for `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- **State Variants** - Support for `hover:`, `focus:`, `dark:`, and more
- **Pixel Equivalents** - Shows computed pixel values for rem units

## Supported Languages

- HTML
- JavaScript / JSX
- TypeScript / TSX
- Vue
- Svelte
- PHP
- ERB (Ruby)
- Blade (Laravel)

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "JasminCSS IntelliSense"
4. Click Install

### From VSIX

```bash
cd vscode-extension
npm install
npm run build
npm run package
code --install-extension jasmincss-intellisense-1.0.0.vsix
```

## Usage

Just start typing in a `class` or `className` attribute:

```html
<div class="flex "></div>
         <!-- ^ Autocomplete appears here -->
```

```jsx
<div className="bg-primary hover:"></div>
                         <!-- ^ State variant suggestions -->
```

## Configuration

| Setting | Default | Description |
|---------|---------|-------------|
| `jasmincss.enable` | `true` | Enable/disable the extension |
| `jasmincss.showPixelEquivalents` | `true` | Show pixel values for rem units |
| `jasmincss.rootFontSize` | `16` | Root font size for pixel calculations |
| `jasmincss.emmetCompletions` | `false` | Enable Emmet-style completions |

## Examples

### Basic Classes

```html
<button class="btn btn-primary rounded-lg shadow-md">
  Click me
</button>
```

### Responsive Design

```html
<div class="flex flex-col md:flex-row lg:gap-8">
  <!-- Stacked on mobile, row on tablet+ -->
</div>
```

### Dark Mode

```html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  Adapts to dark mode
</div>
```

### State Variants

```html
<button class="bg-primary hover:bg-primary-dark focus:ring-2 active:scale-95">
  Interactive button
</button>
```

## Building

```bash
# Install dependencies
npm install

# Build extension
npm run build

# Watch mode
npm run watch

# Package for distribution
npm run package
```

## License

MIT
