/**
 * JasminCSS Runtime JIT - CDN Version
 *
 * A lightweight runtime that generates CSS on-the-fly in the browser.
 * Perfect for prototyping, playgrounds, and development.
 *
 * Usage:
 *   <script src="https://cdn.jsdelivr.net/npm/jasmincss/dist/jasmin-runtime.min.js"></script>
 *
 * Or with custom config:
 *   <script>
 *     window.JasminConfig = { primary: '#FF0000' };
 *   </script>
 *   <script src="https://cdn.jsdelivr.net/npm/jasmincss/dist/jasmin-runtime.min.js"></script>
 */

(function(global) {
  'use strict';

  // Default configuration
  const defaultConfig = {
    // Brand colors
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#14b8a6',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#0ea5e9'
    },
    // Spacing scale
    spacing: {
      '0': '0px', 'px': '1px', '0.5': '0.125rem', '1': '0.25rem', '1.5': '0.375rem',
      '2': '0.5rem', '2.5': '0.625rem', '3': '0.75rem', '3.5': '0.875rem', '4': '1rem',
      '5': '1.25rem', '6': '1.5rem', '7': '1.75rem', '8': '2rem', '9': '2.25rem',
      '10': '2.5rem', '11': '2.75rem', '12': '3rem', '14': '3.5rem', '16': '4rem',
      '20': '5rem', '24': '6rem', '28': '7rem', '32': '8rem', '36': '9rem',
      '40': '10rem', '44': '11rem', '48': '12rem', '52': '13rem', '56': '14rem',
      '60': '15rem', '64': '16rem', '72': '18rem', '80': '20rem', '96': '24rem'
    },
    // Font sizes
    fontSize: {
      'xs': ['0.75rem', '1rem'], 'sm': ['0.875rem', '1.25rem'], 'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'], 'xl': ['1.25rem', '1.75rem'], '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'], '4xl': ['2.25rem', '2.5rem'], '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'], '7xl': ['4.5rem', '1'], '8xl': ['6rem', '1'], '9xl': ['8rem', '1']
    },
    // Breakpoints
    breakpoints: {
      'sm': '640px', 'md': '768px', 'lg': '1024px', 'xl': '1280px', '2xl': '1536px'
    }
  };

  // Merge user config with defaults
  const config = Object.assign({}, defaultConfig, global.JasminConfig || {});

  // CSS cache to avoid regenerating
  const generatedClasses = new Set();
  let styleElement = null;

  // CSS generators for each utility type
  const generators = {
    // Display
    'block': () => 'display: block;',
    'inline-block': () => 'display: inline-block;',
    'inline': () => 'display: inline;',
    'flex': () => 'display: flex;',
    'inline-flex': () => 'display: inline-flex;',
    'grid': () => 'display: grid;',
    'inline-grid': () => 'display: inline-grid;',
    'hidden': () => 'display: none;',
    'contents': () => 'display: contents;',

    // Flex direction
    'flex-row': () => 'flex-direction: row;',
    'flex-row-reverse': () => 'flex-direction: row-reverse;',
    'flex-col': () => 'flex-direction: column;',
    'flex-col-reverse': () => 'flex-direction: column-reverse;',

    // Flex wrap
    'flex-wrap': () => 'flex-wrap: wrap;',
    'flex-wrap-reverse': () => 'flex-wrap: wrap-reverse;',
    'flex-nowrap': () => 'flex-wrap: nowrap;',

    // Flex
    'flex-1': () => 'flex: 1 1 0%;',
    'flex-auto': () => 'flex: 1 1 auto;',
    'flex-initial': () => 'flex: 0 1 auto;',
    'flex-none': () => 'flex: none;',

    // Justify content
    'justify-start': () => 'justify-content: flex-start;',
    'justify-end': () => 'justify-content: flex-end;',
    'justify-center': () => 'justify-content: center;',
    'justify-between': () => 'justify-content: space-between;',
    'justify-around': () => 'justify-content: space-around;',
    'justify-evenly': () => 'justify-content: space-evenly;',

    // Align items
    'items-start': () => 'align-items: flex-start;',
    'items-end': () => 'align-items: flex-end;',
    'items-center': () => 'align-items: center;',
    'items-baseline': () => 'align-items: baseline;',
    'items-stretch': () => 'align-items: stretch;',

    // Align self
    'self-auto': () => 'align-self: auto;',
    'self-start': () => 'align-self: flex-start;',
    'self-end': () => 'align-self: flex-end;',
    'self-center': () => 'align-self: center;',
    'self-stretch': () => 'align-self: stretch;',

    // Position
    'static': () => 'position: static;',
    'fixed': () => 'position: fixed;',
    'absolute': () => 'position: absolute;',
    'relative': () => 'position: relative;',
    'sticky': () => 'position: sticky;',

    // Inset
    'inset-0': () => 'inset: 0;',
    'inset-auto': () => 'inset: auto;',

    // Visibility
    'visible': () => 'visibility: visible;',
    'invisible': () => 'visibility: hidden;',

    // Overflow
    'overflow-auto': () => 'overflow: auto;',
    'overflow-hidden': () => 'overflow: hidden;',
    'overflow-visible': () => 'overflow: visible;',
    'overflow-scroll': () => 'overflow: scroll;',
    'overflow-x-auto': () => 'overflow-x: auto;',
    'overflow-y-auto': () => 'overflow-y: auto;',
    'overflow-x-hidden': () => 'overflow-x: hidden;',
    'overflow-y-hidden': () => 'overflow-y: hidden;',

    // Text alignment
    'text-left': () => 'text-align: left;',
    'text-center': () => 'text-align: center;',
    'text-right': () => 'text-align: right;',
    'text-justify': () => 'text-align: justify;',

    // Font weight
    'font-thin': () => 'font-weight: 100;',
    'font-extralight': () => 'font-weight: 200;',
    'font-light': () => 'font-weight: 300;',
    'font-normal': () => 'font-weight: 400;',
    'font-medium': () => 'font-weight: 500;',
    'font-semibold': () => 'font-weight: 600;',
    'font-bold': () => 'font-weight: 700;',
    'font-extrabold': () => 'font-weight: 800;',
    'font-black': () => 'font-weight: 900;',

    // Font style
    'italic': () => 'font-style: italic;',
    'not-italic': () => 'font-style: normal;',

    // Text decoration
    'underline': () => 'text-decoration: underline;',
    'overline': () => 'text-decoration: overline;',
    'line-through': () => 'text-decoration: line-through;',
    'no-underline': () => 'text-decoration: none;',

    // Text transform
    'uppercase': () => 'text-transform: uppercase;',
    'lowercase': () => 'text-transform: lowercase;',
    'capitalize': () => 'text-transform: capitalize;',
    'normal-case': () => 'text-transform: none;',

    // Whitespace
    'whitespace-normal': () => 'white-space: normal;',
    'whitespace-nowrap': () => 'white-space: nowrap;',
    'whitespace-pre': () => 'white-space: pre;',
    'whitespace-pre-line': () => 'white-space: pre-line;',
    'whitespace-pre-wrap': () => 'white-space: pre-wrap;',

    // Word break
    'break-normal': () => 'word-break: normal; overflow-wrap: normal;',
    'break-words': () => 'overflow-wrap: break-word;',
    'break-all': () => 'word-break: break-all;',
    'truncate': () => 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;',

    // Border style
    'border-solid': () => 'border-style: solid;',
    'border-dashed': () => 'border-style: dashed;',
    'border-dotted': () => 'border-style: dotted;',
    'border-double': () => 'border-style: double;',
    'border-none': () => 'border-style: none;',

    // Border radius
    'rounded-none': () => 'border-radius: 0;',
    'rounded-sm': () => 'border-radius: 0.125rem;',
    'rounded': () => 'border-radius: 0.25rem;',
    'rounded-md': () => 'border-radius: 0.375rem;',
    'rounded-lg': () => 'border-radius: 0.5rem;',
    'rounded-xl': () => 'border-radius: 0.75rem;',
    'rounded-2xl': () => 'border-radius: 1rem;',
    'rounded-3xl': () => 'border-radius: 1.5rem;',
    'rounded-full': () => 'border-radius: 9999px;',

    // Shadow
    'shadow-sm': () => 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);',
    'shadow': () => 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
    'shadow-md': () => 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
    'shadow-lg': () => 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
    'shadow-xl': () => 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);',
    'shadow-2xl': () => 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);',
    'shadow-inner': () => 'box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);',
    'shadow-none': () => 'box-shadow: none;',

    // Cursor
    'cursor-auto': () => 'cursor: auto;',
    'cursor-default': () => 'cursor: default;',
    'cursor-pointer': () => 'cursor: pointer;',
    'cursor-wait': () => 'cursor: wait;',
    'cursor-text': () => 'cursor: text;',
    'cursor-move': () => 'cursor: move;',
    'cursor-not-allowed': () => 'cursor: not-allowed;',

    // Pointer events
    'pointer-events-none': () => 'pointer-events: none;',
    'pointer-events-auto': () => 'pointer-events: auto;',

    // User select
    'select-none': () => 'user-select: none;',
    'select-text': () => 'user-select: text;',
    'select-all': () => 'user-select: all;',
    'select-auto': () => 'user-select: auto;',

    // Width/Height
    'w-full': () => 'width: 100%;',
    'w-screen': () => 'width: 100vw;',
    'w-auto': () => 'width: auto;',
    'w-min': () => 'width: min-content;',
    'w-max': () => 'width: max-content;',
    'w-fit': () => 'width: fit-content;',
    'h-full': () => 'height: 100%;',
    'h-screen': () => 'height: 100vh;',
    'h-auto': () => 'height: auto;',
    'h-min': () => 'height: min-content;',
    'h-max': () => 'height: max-content;',
    'h-fit': () => 'height: fit-content;',
    'min-h-screen': () => 'min-height: 100vh;',
    'min-h-full': () => 'min-height: 100%;',
    'min-w-full': () => 'min-width: 100%;',
    'max-w-none': () => 'max-width: none;',
    'max-w-full': () => 'max-width: 100%;',

    // Object fit
    'object-contain': () => 'object-fit: contain;',
    'object-cover': () => 'object-fit: cover;',
    'object-fill': () => 'object-fit: fill;',
    'object-none': () => 'object-fit: none;',
    'object-scale-down': () => 'object-fit: scale-down;',

    // Aspect ratio
    'aspect-auto': () => 'aspect-ratio: auto;',
    'aspect-square': () => 'aspect-ratio: 1 / 1;',
    'aspect-video': () => 'aspect-ratio: 16 / 9;',

    // Container
    'container': () => 'width: 100%; margin-left: auto; margin-right: auto;',

    // Transitions
    'transition': () => 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-all': () => 'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-colors': () => 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-opacity': () => 'transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-shadow': () => 'transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-transform': () => 'transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-none': () => 'transition-property: none;',

    // Duration
    'duration-75': () => 'transition-duration: 75ms;',
    'duration-100': () => 'transition-duration: 100ms;',
    'duration-150': () => 'transition-duration: 150ms;',
    'duration-200': () => 'transition-duration: 200ms;',
    'duration-300': () => 'transition-duration: 300ms;',
    'duration-500': () => 'transition-duration: 500ms;',
    'duration-700': () => 'transition-duration: 700ms;',
    'duration-1000': () => 'transition-duration: 1000ms;',

    // Ease
    'ease-linear': () => 'transition-timing-function: linear;',
    'ease-in': () => 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
    'ease-out': () => 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
    'ease-in-out': () => 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',

    // Transform
    'transform-none': () => 'transform: none;',

    // Scale
    'scale-0': () => 'transform: scale(0);',
    'scale-50': () => 'transform: scale(0.5);',
    'scale-75': () => 'transform: scale(0.75);',
    'scale-90': () => 'transform: scale(0.9);',
    'scale-95': () => 'transform: scale(0.95);',
    'scale-100': () => 'transform: scale(1);',
    'scale-105': () => 'transform: scale(1.05);',
    'scale-110': () => 'transform: scale(1.1);',
    'scale-125': () => 'transform: scale(1.25);',
    'scale-150': () => 'transform: scale(1.5);',

    // Rotate
    'rotate-0': () => 'transform: rotate(0deg);',
    'rotate-1': () => 'transform: rotate(1deg);',
    'rotate-2': () => 'transform: rotate(2deg);',
    'rotate-3': () => 'transform: rotate(3deg);',
    'rotate-6': () => 'transform: rotate(6deg);',
    'rotate-12': () => 'transform: rotate(12deg);',
    'rotate-45': () => 'transform: rotate(45deg);',
    'rotate-90': () => 'transform: rotate(90deg);',
    'rotate-180': () => 'transform: rotate(180deg);',
    '-rotate-1': () => 'transform: rotate(-1deg);',
    '-rotate-2': () => 'transform: rotate(-2deg);',
    '-rotate-3': () => 'transform: rotate(-3deg);',
    '-rotate-6': () => 'transform: rotate(-6deg);',
    '-rotate-12': () => 'transform: rotate(-12deg);',
    '-rotate-45': () => 'transform: rotate(-45deg);',
    '-rotate-90': () => 'transform: rotate(-90deg);',
    '-rotate-180': () => 'transform: rotate(-180deg);',

    // Z-index
    'z-0': () => 'z-index: 0;',
    'z-10': () => 'z-index: 10;',
    'z-20': () => 'z-index: 20;',
    'z-30': () => 'z-index: 30;',
    'z-40': () => 'z-index: 40;',
    'z-50': () => 'z-index: 50;',
    'z-auto': () => 'z-index: auto;',

    // Grid
    'grid-cols-1': () => 'grid-template-columns: repeat(1, minmax(0, 1fr));',
    'grid-cols-2': () => 'grid-template-columns: repeat(2, minmax(0, 1fr));',
    'grid-cols-3': () => 'grid-template-columns: repeat(3, minmax(0, 1fr));',
    'grid-cols-4': () => 'grid-template-columns: repeat(4, minmax(0, 1fr));',
    'grid-cols-5': () => 'grid-template-columns: repeat(5, minmax(0, 1fr));',
    'grid-cols-6': () => 'grid-template-columns: repeat(6, minmax(0, 1fr));',
    'grid-cols-12': () => 'grid-template-columns: repeat(12, minmax(0, 1fr));',
    'grid-rows-1': () => 'grid-template-rows: repeat(1, minmax(0, 1fr));',
    'grid-rows-2': () => 'grid-template-rows: repeat(2, minmax(0, 1fr));',
    'grid-rows-3': () => 'grid-template-rows: repeat(3, minmax(0, 1fr));',
    'grid-rows-4': () => 'grid-template-rows: repeat(4, minmax(0, 1fr));',
    'grid-rows-5': () => 'grid-template-rows: repeat(5, minmax(0, 1fr));',
    'grid-rows-6': () => 'grid-template-rows: repeat(6, minmax(0, 1fr));',
    'col-span-full': () => 'grid-column: 1 / -1;',
    'row-span-full': () => 'grid-row: 1 / -1;',

    // Grow/Shrink
    'grow': () => 'flex-grow: 1;',
    'grow-0': () => 'flex-grow: 0;',
    'shrink': () => 'flex-shrink: 1;',
    'shrink-0': () => 'flex-shrink: 0;',

    // Basis
    'basis-auto': () => 'flex-basis: auto;',
    'basis-full': () => 'flex-basis: 100%;',
    'basis-0': () => 'flex-basis: 0;',
  };

  /**
   * Generate CSS for dynamic patterns (spacing, colors, etc.)
   */
  function generateDynamicCSS(className) {
    const escapedClass = escapeClassName(className);

    // Arbitrary color values: bg-[#hex], text-[#hex], border-[#hex]
    const arbitraryColorMatch = className.match(/^(bg|text|border|ring|outline|fill|stroke)-\[#([a-fA-F0-9]{3,8})\]$/);
    if (arbitraryColorMatch) {
      const [, prop, hex] = arbitraryColorMatch;
      const color = `#${hex}`;
      const propMap = {
        'bg': 'background-color',
        'text': 'color',
        'border': 'border-color',
        'ring': '--tw-ring-color',
        'outline': 'outline-color',
        'fill': 'fill',
        'stroke': 'stroke'
      };
      return `.${escapedClass} { ${propMap[prop]}: ${color}; }`;
    }

    // Arbitrary spacing/sizing values: p-[10px], m-[2rem], w-[200px], etc.
    const arbitraryValueMatch = className.match(/^(-)?([a-z]+(?:-[a-z])?)-\[([^\]]+)\]$/);
    if (arbitraryValueMatch) {
      const [, negative, prefix, rawValue] = arbitraryValueMatch;
      // Skip color values (already handled above)
      if (rawValue.startsWith('#')) return null;

      const value = negative ? `-${rawValue}` : rawValue;
      const arbitraryMap = {
        // Padding
        'p': `padding: ${value};`,
        'px': `padding-left: ${value}; padding-right: ${value};`,
        'py': `padding-top: ${value}; padding-bottom: ${value};`,
        'pt': `padding-top: ${value};`,
        'pr': `padding-right: ${value};`,
        'pb': `padding-bottom: ${value};`,
        'pl': `padding-left: ${value};`,
        // Margin
        'm': `margin: ${value};`,
        'mx': `margin-left: ${value}; margin-right: ${value};`,
        'my': `margin-top: ${value}; margin-bottom: ${value};`,
        'mt': `margin-top: ${value};`,
        'mr': `margin-right: ${value};`,
        'mb': `margin-bottom: ${value};`,
        'ml': `margin-left: ${value};`,
        // Width/Height
        'w': `width: ${value};`,
        'h': `height: ${value};`,
        'min-w': `min-width: ${value};`,
        'max-w': `max-width: ${value};`,
        'min-h': `min-height: ${value};`,
        'max-h': `max-height: ${value};`,
        'size': `width: ${value}; height: ${value};`,
        // Gap
        'gap': `gap: ${value};`,
        'gap-x': `column-gap: ${value};`,
        'gap-y': `row-gap: ${value};`,
        // Inset
        'inset': `inset: ${value};`,
        'inset-x': `left: ${value}; right: ${value};`,
        'inset-y': `top: ${value}; bottom: ${value};`,
        'top': `top: ${value};`,
        'right': `right: ${value};`,
        'bottom': `bottom: ${value};`,
        'left': `left: ${value};`,
        // Translate
        'translate-x': `transform: translateX(${value});`,
        'translate-y': `transform: translateY(${value});`,
        // Text/Font
        'text': `font-size: ${value};`,
        'leading': `line-height: ${value};`,
        'tracking': `letter-spacing: ${value};`,
        // Border
        'border': `border-width: ${value};`,
        'border-t': `border-top-width: ${value};`,
        'border-r': `border-right-width: ${value};`,
        'border-b': `border-bottom-width: ${value};`,
        'border-l': `border-left-width: ${value};`,
        // Border radius
        'rounded': `border-radius: ${value};`,
        'rounded-t': `border-top-left-radius: ${value}; border-top-right-radius: ${value};`,
        'rounded-r': `border-top-right-radius: ${value}; border-bottom-right-radius: ${value};`,
        'rounded-b': `border-bottom-left-radius: ${value}; border-bottom-right-radius: ${value};`,
        'rounded-l': `border-top-left-radius: ${value}; border-bottom-left-radius: ${value};`,
        // Other
        'opacity': `opacity: ${value};`,
        'z': `z-index: ${value};`,
        'order': `order: ${value};`,
        'basis': `flex-basis: ${value};`,
      };

      const css = arbitraryMap[prefix];
      if (css) return `.${escapedClass} { ${css} }`;

      // Special cases
      if (prefix === 'space-x') {
        return `.${escapedClass} > :not([hidden]) ~ :not([hidden]) { margin-left: ${value}; }`;
      }
      if (prefix === 'space-y') {
        return `.${escapedClass} > :not([hidden]) ~ :not([hidden]) { margin-top: ${value}; }`;
      }
    }

    // Brand colors: bg-primary, text-secondary, border-accent, etc.
    const brandColorMatch = className.match(/^(bg|text|border)-(\w+)$/);
    if (brandColorMatch) {
      const [, prop, colorName] = brandColorMatch;
      if (config.colors[colorName]) {
        const propMap = { 'bg': 'background-color', 'text': 'color', 'border': 'border-color' };
        return `.${escapedClass} { ${propMap[prop]}: ${config.colors[colorName]}; }`;
      }
    }

    // Special colors
    const specialColors = { 'white': '#ffffff', 'black': '#000000', 'transparent': 'transparent', 'current': 'currentColor' };
    const specialColorMatch = className.match(/^(bg|text|border)-(white|black|transparent|current)$/);
    if (specialColorMatch) {
      const [, prop, colorName] = specialColorMatch;
      const propMap = { 'bg': 'background-color', 'text': 'color', 'border': 'border-color' };
      return `.${escapedClass} { ${propMap[prop]}: ${specialColors[colorName]}; }`;
    }

    // Padding: p-{size}, px-{size}, py-{size}, pt-{size}, pr-{size}, pb-{size}, pl-{size}
    const paddingMatch = className.match(/^p([xytblr])?-(\d+(?:\.\d+)?|px|auto)$/);
    if (paddingMatch) {
      const [, dir, size] = paddingMatch;
      const value = config.spacing[size] || size;
      const props = {
        '': 'padding', 'x': 'padding-left; padding-right', 'y': 'padding-top; padding-bottom',
        't': 'padding-top', 'r': 'padding-right', 'b': 'padding-bottom', 'l': 'padding-left'
      };
      const prop = props[dir || ''];
      if (prop.includes(';')) {
        const [p1, p2] = prop.split('; ');
        return `.${escapedClass} { ${p1}: ${value}; ${p2}: ${value}; }`;
      }
      return `.${escapedClass} { ${prop}: ${value}; }`;
    }

    // Margin: m-{size}, mx-{size}, my-{size}, mt-{size}, mr-{size}, mb-{size}, ml-{size}
    const marginMatch = className.match(/^(-)?m([xytblr])?-(\d+(?:\.\d+)?|px|auto)$/);
    if (marginMatch) {
      const [, neg, dir, size] = marginMatch;
      let value = config.spacing[size] || size;
      if (neg && value !== 'auto') value = `-${value}`;
      const props = {
        '': 'margin', 'x': 'margin-left; margin-right', 'y': 'margin-top; margin-bottom',
        't': 'margin-top', 'r': 'margin-right', 'b': 'margin-bottom', 'l': 'margin-left'
      };
      const prop = props[dir || ''];
      if (prop.includes(';')) {
        const [p1, p2] = prop.split('; ');
        return `.${escapedClass} { ${p1}: ${value}; ${p2}: ${value}; }`;
      }
      return `.${escapedClass} { ${prop}: ${value}; }`;
    }

    // Gap: gap-{size}, gap-x-{size}, gap-y-{size}
    const gapMatch = className.match(/^gap(-[xy])?-(\d+(?:\.\d+)?|px)$/);
    if (gapMatch) {
      const [, dir, size] = gapMatch;
      const value = config.spacing[size] || size;
      const prop = dir === '-x' ? 'column-gap' : dir === '-y' ? 'row-gap' : 'gap';
      return `.${escapedClass} { ${prop}: ${value}; }`;
    }

    // Width: w-{size}
    const widthMatch = className.match(/^w-(\d+(?:\.\d+)?|px)$/);
    if (widthMatch) {
      const [, size] = widthMatch;
      const value = config.spacing[size] || size;
      return `.${escapedClass} { width: ${value}; }`;
    }

    // Height: h-{size}
    const heightMatch = className.match(/^h-(\d+(?:\.\d+)?|px)$/);
    if (heightMatch) {
      const [, size] = heightMatch;
      const value = config.spacing[size] || size;
      return `.${escapedClass} { height: ${value}; }`;
    }

    // Min/Max width
    const minMaxWMatch = className.match(/^(min|max)-w-(\d+|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|prose)$/);
    if (minMaxWMatch) {
      const [, minMax, size] = minMaxWMatch;
      const sizes = { 'xs': '20rem', 'sm': '24rem', 'md': '28rem', 'lg': '32rem', 'xl': '36rem', '2xl': '42rem', '3xl': '48rem', '4xl': '56rem', '5xl': '64rem', '6xl': '72rem', '7xl': '80rem', 'prose': '65ch' };
      const value = sizes[size] || config.spacing[size] || size;
      return `.${escapedClass} { ${minMax}-width: ${value}; }`;
    }

    // Font size: text-{size}
    const fontSizeMatch = className.match(/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/);
    if (fontSizeMatch) {
      const [, size] = fontSizeMatch;
      const [fontSize, lineHeight] = config.fontSize[size];
      return `.${escapedClass} { font-size: ${fontSize}; line-height: ${lineHeight}; }`;
    }

    // Border width: border, border-{size}
    const borderMatch = className.match(/^border(-[trbl])?(-(\d+))?$/);
    if (borderMatch) {
      const [, side, , width] = borderMatch;
      const w = width ? `${width}px` : '1px';
      const sides = { '': 'border-width', '-t': 'border-top-width', '-r': 'border-right-width', '-b': 'border-bottom-width', '-l': 'border-left-width' };
      return `.${escapedClass} { ${sides[side || '']}: ${w}; }`;
    }

    // Opacity: opacity-{value}
    const opacityMatch = className.match(/^opacity-(\d+)$/);
    if (opacityMatch) {
      const [, value] = opacityMatch;
      return `.${escapedClass} { opacity: ${parseInt(value) / 100}; }`;
    }

    // Inset: top-{size}, right-{size}, bottom-{size}, left-{size}, inset-{size}
    const insetMatch = className.match(/^(-)?(?:(inset(?:-[xy])?)|top|right|bottom|left)-(\d+(?:\.\d+)?|px|auto|full)$/);
    if (insetMatch) {
      const [, neg, prop, size] = insetMatch;
      let value = size === 'full' ? '100%' : size === 'auto' ? 'auto' : (config.spacing[size] || size);
      if (neg && value !== 'auto') value = `-${value}`;

      if (prop === 'inset') return `.${escapedClass} { inset: ${value}; }`;
      if (prop === 'inset-x') return `.${escapedClass} { left: ${value}; right: ${value}; }`;
      if (prop === 'inset-y') return `.${escapedClass} { top: ${value}; bottom: ${value}; }`;
      return `.${escapedClass} { ${prop || className.split('-')[0]}: ${value}; }`;
    }

    // Space between: space-x-{size}, space-y-{size}
    const spaceMatch = className.match(/^(-)?space-([xy])-(\d+(?:\.\d+)?|px)$/);
    if (spaceMatch) {
      const [, neg, axis, size] = spaceMatch;
      let value = config.spacing[size] || size;
      if (neg) value = `-${value}`;
      const prop = axis === 'x' ? 'margin-left' : 'margin-top';
      return `.${escapedClass} > :not([hidden]) ~ :not([hidden]) { ${prop}: ${value}; }`;
    }

    // Translate: translate-x-{size}, translate-y-{size}
    const translateMatch = className.match(/^(-)?translate-([xy])-(\d+(?:\.\d+)?|px|full|1\/2)$/);
    if (translateMatch) {
      const [, neg, axis, size] = translateMatch;
      let value = size === 'full' ? '100%' : size === '1/2' ? '50%' : (config.spacing[size] || size);
      if (neg) value = `-${value}`;
      const fn = axis === 'x' ? 'translateX' : 'translateY';
      return `.${escapedClass} { transform: ${fn}(${value}); }`;
    }

    // Col span: col-span-{n}
    const colSpanMatch = className.match(/^col-span-(\d+)$/);
    if (colSpanMatch) {
      const [, n] = colSpanMatch;
      return `.${escapedClass} { grid-column: span ${n} / span ${n}; }`;
    }

    // Row span: row-span-{n}
    const rowSpanMatch = className.match(/^row-span-(\d+)$/);
    if (rowSpanMatch) {
      const [, n] = rowSpanMatch;
      return `.${escapedClass} { grid-row: span ${n} / span ${n}; }`;
    }

    // Line clamp: line-clamp-{n}
    const lineClampMatch = className.match(/^line-clamp-(\d+)$/);
    if (lineClampMatch) {
      const [, n] = lineClampMatch;
      return `.${escapedClass} { display: -webkit-box; -webkit-line-clamp: ${n}; -webkit-box-orient: vertical; overflow: hidden; }`;
    }

    return null;
  }

  /**
   * Escape special characters in class name for CSS selector
   */
  function escapeClassName(className) {
    return className
      .replace(/\[/g, '\\[')
      .replace(/\]/g, '\\]')
      .replace(/#/g, '\\#')
      .replace(/\//g, '\\/')
      .replace(/\./g, '\\.')
      .replace(/:/g, '\\:');
  }

  /**
   * Generate CSS for a single class
   */
  function generateCSS(className) {
    // Check static generators first
    if (generators[className]) {
      return `.${escapeClassName(className)} { ${generators[className]()} }`;
    }

    // Try dynamic patterns
    return generateDynamicCSS(className);
  }

  /**
   * Process a class and add to stylesheet if needed
   */
  function processClass(className, breakpoint = null, state = null) {
    // Build full class name with variants
    let fullClass = className;
    if (state) fullClass = `${state}:${className}`;
    if (breakpoint) fullClass = `${breakpoint}:${fullClass}`;

    // Skip if already generated
    if (generatedClasses.has(fullClass)) return;

    // Generate base CSS
    const css = generateCSS(className);
    if (!css) return;

    generatedClasses.add(fullClass);

    let finalCSS = css;

    // Wrap with state variant
    if (state) {
      const stateMap = {
        'hover': ':hover',
        'focus': ':focus',
        'active': ':active',
        'disabled': ':disabled',
        'focus-visible': ':focus-visible',
        'focus-within': ':focus-within',
        'first': ':first-child',
        'last': ':last-child',
        'odd': ':nth-child(odd)',
        'even': ':nth-child(even)',
        'group-hover': null // Special handling
      };

      if (state === 'group-hover') {
        finalCSS = css.replace(/^\./, '.group:hover .');
        finalCSS = finalCSS.replace(new RegExp(escapeClassName(className), 'g'), `group-hover\\:${escapeClassName(className)}`);
      } else if (state === 'dark') {
        finalCSS = css.replace(/^\./, '.dark .');
        finalCSS = finalCSS.replace(new RegExp(escapeClassName(className), 'g'), `dark\\:${escapeClassName(className)}`);
      } else if (stateMap[state]) {
        finalCSS = css.replace(/ \{/, `${stateMap[state]} {`);
        finalCSS = finalCSS.replace(new RegExp(escapeClassName(className), 'g'), `${state}\\:${escapeClassName(className)}`);
      }
    }

    // Wrap with media query for breakpoint
    if (breakpoint && config.breakpoints[breakpoint]) {
      const minWidth = config.breakpoints[breakpoint];
      finalCSS = finalCSS.replace(new RegExp(escapeClassName(className), 'g'), `${breakpoint}\\:${escapeClassName(className)}`);
      finalCSS = `@media (min-width: ${minWidth}) { ${finalCSS} }`;
    }

    appendCSS(finalCSS);
  }

  /**
   * Parse class string and process each class
   */
  function processClasses(classString) {
    if (!classString) return;

    const classes = classString.split(/\s+/).filter(Boolean);

    for (const cls of classes) {
      // Check for variants (responsive, state)
      const parts = cls.split(':');

      if (parts.length === 1) {
        // No variants
        processClass(cls);
      } else if (parts.length === 2) {
        // One variant (could be breakpoint or state)
        const [variant, baseClass] = parts;
        if (config.breakpoints[variant]) {
          processClass(baseClass, variant, null);
        } else {
          processClass(baseClass, null, variant);
        }
      } else if (parts.length === 3) {
        // Two variants (breakpoint + state)
        const [breakpoint, state, baseClass] = parts;
        processClass(baseClass, breakpoint, state);
      }
    }
  }

  /**
   * Append CSS to the stylesheet
   */
  function appendCSS(css) {
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'jasmin-runtime';
      document.head.appendChild(styleElement);
    }
    styleElement.textContent += '\n' + css;
  }

  /**
   * Scan element and all descendants for classes
   */
  function scanElement(element) {
    if (element.className && typeof element.className === 'string') {
      processClasses(element.className);
    }

    // Also check for class in attributes (for frameworks like Vue, Alpine)
    const classAttr = element.getAttribute && element.getAttribute('class');
    if (classAttr) {
      processClasses(classAttr);
    }

    // Scan children
    if (element.children) {
      for (const child of element.children) {
        scanElement(child);
      }
    }
  }

  /**
   * Initialize: scan DOM and set up observer
   */
  function init() {
    // Add base CSS variables
    const baseCSS = `
:root {
  --j-primary: ${config.colors.primary};
  --j-secondary: ${config.colors.secondary};
  --j-accent: ${config.colors.accent};
  --j-success: ${config.colors.success};
  --j-warning: ${config.colors.warning};
  --j-error: ${config.colors.error};
  --j-info: ${config.colors.info};
}
*, *::before, *::after { box-sizing: border-box; }
    `.trim();
    appendCSS(baseCSS);

    // Scan existing DOM
    scanElement(document.documentElement);

    // Watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              scanElement(node);
            }
          }
        } else if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          processClasses(mutation.target.className);
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    console.log('🌸 JasminCSS Runtime initialized');
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API
  global.Jasmin = {
    processClasses,
    scanElement,
    config
  };

})(typeof window !== 'undefined' ? window : this);
