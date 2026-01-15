const vscode = require('vscode');

/**
 * JasminCSS class definitions with documentation
 */
const jasminClasses = {
  // Layout - Display
  'flex': { css: 'display: flex', doc: 'Set display to flex' },
  'inline-flex': { css: 'display: inline-flex', doc: 'Set display to inline-flex' },
  'grid': { css: 'display: grid', doc: 'Set display to grid' },
  'inline-grid': { css: 'display: inline-grid', doc: 'Set display to inline-grid' },
  'block': { css: 'display: block', doc: 'Set display to block' },
  'inline-block': { css: 'display: inline-block', doc: 'Set display to inline-block' },
  'inline': { css: 'display: inline', doc: 'Set display to inline' },
  'hidden': { css: 'display: none', doc: 'Hide element' },
  'contents': { css: 'display: contents', doc: 'Set display to contents' },

  // Layout - Flexbox
  'flex-row': { css: 'flex-direction: row', doc: 'Set flex direction to row' },
  'flex-row-reverse': { css: 'flex-direction: row-reverse', doc: 'Set flex direction to row-reverse' },
  'flex-col': { css: 'flex-direction: column', doc: 'Set flex direction to column' },
  'flex-col-reverse': { css: 'flex-direction: column-reverse', doc: 'Set flex direction to column-reverse' },
  'flex-wrap': { css: 'flex-wrap: wrap', doc: 'Enable flex wrapping' },
  'flex-nowrap': { css: 'flex-wrap: nowrap', doc: 'Disable flex wrapping' },
  'flex-wrap-reverse': { css: 'flex-wrap: wrap-reverse', doc: 'Enable reverse flex wrapping' },
  'flex-1': { css: 'flex: 1 1 0%', doc: 'Flex grow and shrink equally' },
  'flex-auto': { css: 'flex: 1 1 auto', doc: 'Flex with auto basis' },
  'flex-initial': { css: 'flex: 0 1 auto', doc: 'Reset to initial flex' },
  'flex-none': { css: 'flex: none', doc: 'Prevent flex grow/shrink' },
  'grow': { css: 'flex-grow: 1', doc: 'Allow flex item to grow' },
  'grow-0': { css: 'flex-grow: 0', doc: 'Prevent flex item from growing' },
  'shrink': { css: 'flex-shrink: 1', doc: 'Allow flex item to shrink' },
  'shrink-0': { css: 'flex-shrink: 0', doc: 'Prevent flex item from shrinking' },

  // Layout - Justify
  'justify-start': { css: 'justify-content: flex-start', doc: 'Justify items to start' },
  'justify-end': { css: 'justify-content: flex-end', doc: 'Justify items to end' },
  'justify-center': { css: 'justify-content: center', doc: 'Justify items to center' },
  'justify-between': { css: 'justify-content: space-between', doc: 'Space items evenly with no edge space' },
  'justify-around': { css: 'justify-content: space-around', doc: 'Space items evenly with half edge space' },
  'justify-evenly': { css: 'justify-content: space-evenly', doc: 'Space items evenly including edges' },

  // Layout - Align Items
  'items-start': { css: 'align-items: flex-start', doc: 'Align items to start' },
  'items-end': { css: 'align-items: flex-end', doc: 'Align items to end' },
  'items-center': { css: 'align-items: center', doc: 'Align items to center' },
  'items-baseline': { css: 'align-items: baseline', doc: 'Align items to baseline' },
  'items-stretch': { css: 'align-items: stretch', doc: 'Stretch items to fill' },

  // Layout - Self Align
  'self-auto': { css: 'align-self: auto', doc: 'Auto align self' },
  'self-start': { css: 'align-self: flex-start', doc: 'Align self to start' },
  'self-end': { css: 'align-self: flex-end', doc: 'Align self to end' },
  'self-center': { css: 'align-self: center', doc: 'Align self to center' },
  'self-stretch': { css: 'align-self: stretch', doc: 'Stretch self to fill' },

  // Layout - Grid
  'grid-cols-1': { css: 'grid-template-columns: repeat(1, minmax(0, 1fr))', doc: '1 column grid' },
  'grid-cols-2': { css: 'grid-template-columns: repeat(2, minmax(0, 1fr))', doc: '2 column grid' },
  'grid-cols-3': { css: 'grid-template-columns: repeat(3, minmax(0, 1fr))', doc: '3 column grid' },
  'grid-cols-4': { css: 'grid-template-columns: repeat(4, minmax(0, 1fr))', doc: '4 column grid' },
  'grid-cols-5': { css: 'grid-template-columns: repeat(5, minmax(0, 1fr))', doc: '5 column grid' },
  'grid-cols-6': { css: 'grid-template-columns: repeat(6, minmax(0, 1fr))', doc: '6 column grid' },
  'grid-cols-12': { css: 'grid-template-columns: repeat(12, minmax(0, 1fr))', doc: '12 column grid' },
  'col-span-1': { css: 'grid-column: span 1 / span 1', doc: 'Span 1 column' },
  'col-span-2': { css: 'grid-column: span 2 / span 2', doc: 'Span 2 columns' },
  'col-span-3': { css: 'grid-column: span 3 / span 3', doc: 'Span 3 columns' },
  'col-span-4': { css: 'grid-column: span 4 / span 4', doc: 'Span 4 columns' },
  'col-span-6': { css: 'grid-column: span 6 / span 6', doc: 'Span 6 columns' },
  'col-span-full': { css: 'grid-column: 1 / -1', doc: 'Span all columns' },

  // Layout - Gap
  'gap-0': { css: 'gap: 0', doc: 'No gap' },
  'gap-1': { css: 'gap: 0.25rem', doc: '4px gap' },
  'gap-2': { css: 'gap: 0.5rem', doc: '8px gap' },
  'gap-3': { css: 'gap: 0.75rem', doc: '12px gap' },
  'gap-4': { css: 'gap: 1rem', doc: '16px gap' },
  'gap-5': { css: 'gap: 1.25rem', doc: '20px gap' },
  'gap-6': { css: 'gap: 1.5rem', doc: '24px gap' },
  'gap-8': { css: 'gap: 2rem', doc: '32px gap' },
  'gap-10': { css: 'gap: 2.5rem', doc: '40px gap' },
  'gap-12': { css: 'gap: 3rem', doc: '48px gap' },

  // Layout - Position
  'static': { css: 'position: static', doc: 'Set position to static' },
  'relative': { css: 'position: relative', doc: 'Set position to relative' },
  'absolute': { css: 'position: absolute', doc: 'Set position to absolute' },
  'fixed': { css: 'position: fixed', doc: 'Set position to fixed' },
  'sticky': { css: 'position: sticky', doc: 'Set position to sticky' },

  // Layout - Inset
  'inset-0': { css: 'inset: 0', doc: 'Set all insets to 0' },
  'inset-auto': { css: 'inset: auto', doc: 'Set all insets to auto' },
  'top-0': { css: 'top: 0', doc: 'Top: 0' },
  'right-0': { css: 'right: 0', doc: 'Right: 0' },
  'bottom-0': { css: 'bottom: 0', doc: 'Bottom: 0' },
  'left-0': { css: 'left: 0', doc: 'Left: 0' },

  // Layout - Z-Index
  'z-0': { css: 'z-index: 0', doc: 'z-index: 0' },
  'z-10': { css: 'z-index: 10', doc: 'z-index: 10' },
  'z-20': { css: 'z-index: 20', doc: 'z-index: 20' },
  'z-30': { css: 'z-index: 30', doc: 'z-index: 30' },
  'z-40': { css: 'z-index: 40', doc: 'z-index: 40' },
  'z-50': { css: 'z-index: 50', doc: 'z-index: 50' },
  'z-auto': { css: 'z-index: auto', doc: 'z-index: auto' },

  // Spacing - Padding
  'p-0': { css: 'padding: 0', doc: 'No padding' },
  'p-1': { css: 'padding: 0.25rem', doc: '4px padding' },
  'p-2': { css: 'padding: 0.5rem', doc: '8px padding' },
  'p-3': { css: 'padding: 0.75rem', doc: '12px padding' },
  'p-4': { css: 'padding: 1rem', doc: '16px padding' },
  'p-5': { css: 'padding: 1.25rem', doc: '20px padding' },
  'p-6': { css: 'padding: 1.5rem', doc: '24px padding' },
  'p-8': { css: 'padding: 2rem', doc: '32px padding' },
  'p-10': { css: 'padding: 2.5rem', doc: '40px padding' },
  'p-12': { css: 'padding: 3rem', doc: '48px padding' },
  'px-0': { css: 'padding-left: 0; padding-right: 0', doc: 'No horizontal padding' },
  'px-4': { css: 'padding-left: 1rem; padding-right: 1rem', doc: '16px horizontal padding' },
  'px-6': { css: 'padding-left: 1.5rem; padding-right: 1.5rem', doc: '24px horizontal padding' },
  'px-8': { css: 'padding-left: 2rem; padding-right: 2rem', doc: '32px horizontal padding' },
  'py-0': { css: 'padding-top: 0; padding-bottom: 0', doc: 'No vertical padding' },
  'py-4': { css: 'padding-top: 1rem; padding-bottom: 1rem', doc: '16px vertical padding' },
  'py-6': { css: 'padding-top: 1.5rem; padding-bottom: 1.5rem', doc: '24px vertical padding' },
  'py-8': { css: 'padding-top: 2rem; padding-bottom: 2rem', doc: '32px vertical padding' },

  // Spacing - Margin
  'm-0': { css: 'margin: 0', doc: 'No margin' },
  'm-1': { css: 'margin: 0.25rem', doc: '4px margin' },
  'm-2': { css: 'margin: 0.5rem', doc: '8px margin' },
  'm-4': { css: 'margin: 1rem', doc: '16px margin' },
  'm-auto': { css: 'margin: auto', doc: 'Auto margin' },
  'mx-auto': { css: 'margin-left: auto; margin-right: auto', doc: 'Center horizontally' },
  'my-auto': { css: 'margin-top: auto; margin-bottom: auto', doc: 'Center vertically' },
  'mt-0': { css: 'margin-top: 0', doc: 'No top margin' },
  'mt-4': { css: 'margin-top: 1rem', doc: '16px top margin' },
  'mt-8': { css: 'margin-top: 2rem', doc: '32px top margin' },
  'mb-0': { css: 'margin-bottom: 0', doc: 'No bottom margin' },
  'mb-4': { css: 'margin-bottom: 1rem', doc: '16px bottom margin' },
  'mb-8': { css: 'margin-bottom: 2rem', doc: '32px bottom margin' },

  // Sizing
  'w-full': { css: 'width: 100%', doc: 'Full width' },
  'w-screen': { css: 'width: 100vw', doc: 'Viewport width' },
  'w-auto': { css: 'width: auto', doc: 'Auto width' },
  'w-1/2': { css: 'width: 50%', doc: '50% width' },
  'w-1/3': { css: 'width: 33.333333%', doc: '33.33% width' },
  'w-2/3': { css: 'width: 66.666667%', doc: '66.67% width' },
  'w-1/4': { css: 'width: 25%', doc: '25% width' },
  'w-3/4': { css: 'width: 75%', doc: '75% width' },
  'h-full': { css: 'height: 100%', doc: 'Full height' },
  'h-screen': { css: 'height: 100vh', doc: 'Viewport height' },
  'h-auto': { css: 'height: auto', doc: 'Auto height' },
  'min-h-screen': { css: 'min-height: 100vh', doc: 'Min viewport height' },
  'min-h-full': { css: 'min-height: 100%', doc: 'Min full height' },
  'max-w-sm': { css: 'max-width: 24rem', doc: 'Max width 384px' },
  'max-w-md': { css: 'max-width: 28rem', doc: 'Max width 448px' },
  'max-w-lg': { css: 'max-width: 32rem', doc: 'Max width 512px' },
  'max-w-xl': { css: 'max-width: 36rem', doc: 'Max width 576px' },
  'max-w-2xl': { css: 'max-width: 42rem', doc: 'Max width 672px' },
  'max-w-full': { css: 'max-width: 100%', doc: 'Max full width' },

  // Typography
  'text-xs': { css: 'font-size: 0.75rem', doc: '12px font size' },
  'text-sm': { css: 'font-size: 0.875rem', doc: '14px font size' },
  'text-base': { css: 'font-size: 1rem', doc: '16px font size' },
  'text-lg': { css: 'font-size: 1.125rem', doc: '18px font size' },
  'text-xl': { css: 'font-size: 1.25rem', doc: '20px font size' },
  'text-2xl': { css: 'font-size: 1.5rem', doc: '24px font size' },
  'text-3xl': { css: 'font-size: 1.875rem', doc: '30px font size' },
  'text-4xl': { css: 'font-size: 2.25rem', doc: '36px font size' },
  'font-thin': { css: 'font-weight: 100', doc: 'Font weight 100' },
  'font-light': { css: 'font-weight: 300', doc: 'Font weight 300' },
  'font-normal': { css: 'font-weight: 400', doc: 'Font weight 400' },
  'font-medium': { css: 'font-weight: 500', doc: 'Font weight 500' },
  'font-semibold': { css: 'font-weight: 600', doc: 'Font weight 600' },
  'font-bold': { css: 'font-weight: 700', doc: 'Font weight 700' },
  'text-left': { css: 'text-align: left', doc: 'Left align text' },
  'text-center': { css: 'text-align: center', doc: 'Center align text' },
  'text-right': { css: 'text-align: right', doc: 'Right align text' },
  'text-justify': { css: 'text-align: justify', doc: 'Justify text' },
  'uppercase': { css: 'text-transform: uppercase', doc: 'Uppercase text' },
  'lowercase': { css: 'text-transform: lowercase', doc: 'Lowercase text' },
  'capitalize': { css: 'text-transform: capitalize', doc: 'Capitalize text' },
  'truncate': { css: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap', doc: 'Truncate with ellipsis' },
  'leading-none': { css: 'line-height: 1', doc: 'No line height' },
  'leading-tight': { css: 'line-height: 1.25', doc: 'Tight line height' },
  'leading-normal': { css: 'line-height: 1.5', doc: 'Normal line height' },
  'leading-relaxed': { css: 'line-height: 1.625', doc: 'Relaxed line height' },
  'leading-loose': { css: 'line-height: 2', doc: 'Loose line height' },

  // Colors - Text
  'text-primary': { css: 'color: var(--j-primary)', doc: 'Primary text color' },
  'text-secondary': { css: 'color: var(--j-secondary)', doc: 'Secondary text color' },
  'text-success': { css: 'color: var(--j-success)', doc: 'Success text color' },
  'text-warning': { css: 'color: var(--j-warning)', doc: 'Warning text color' },
  'text-error': { css: 'color: var(--j-error)', doc: 'Error text color' },
  'text-info': { css: 'color: var(--j-info)', doc: 'Info text color' },
  'text-white': { css: 'color: #ffffff', doc: 'White text' },
  'text-black': { css: 'color: #000000', doc: 'Black text' },
  'text-gray-500': { css: 'color: var(--j-gray-500)', doc: 'Gray 500 text' },
  'text-gray-600': { css: 'color: var(--j-gray-600)', doc: 'Gray 600 text' },
  'text-gray-700': { css: 'color: var(--j-gray-700)', doc: 'Gray 700 text' },

  // Colors - Background
  'bg-primary': { css: 'background-color: var(--j-primary)', doc: 'Primary background' },
  'bg-secondary': { css: 'background-color: var(--j-secondary)', doc: 'Secondary background' },
  'bg-success': { css: 'background-color: var(--j-success)', doc: 'Success background' },
  'bg-warning': { css: 'background-color: var(--j-warning)', doc: 'Warning background' },
  'bg-error': { css: 'background-color: var(--j-error)', doc: 'Error background' },
  'bg-info': { css: 'background-color: var(--j-info)', doc: 'Info background' },
  'bg-white': { css: 'background-color: #ffffff', doc: 'White background' },
  'bg-black': { css: 'background-color: #000000', doc: 'Black background' },
  'bg-transparent': { css: 'background-color: transparent', doc: 'Transparent background' },
  'bg-gray-50': { css: 'background-color: var(--j-gray-50)', doc: 'Gray 50 background' },
  'bg-gray-100': { css: 'background-color: var(--j-gray-100)', doc: 'Gray 100 background' },
  'bg-gray-200': { css: 'background-color: var(--j-gray-200)', doc: 'Gray 200 background' },
  'bg-gray-800': { css: 'background-color: var(--j-gray-800)', doc: 'Gray 800 background' },
  'bg-gray-900': { css: 'background-color: var(--j-gray-900)', doc: 'Gray 900 background' },

  // Effects - Border Radius
  'rounded-none': { css: 'border-radius: 0', doc: 'No border radius' },
  'rounded-sm': { css: 'border-radius: 0.125rem', doc: '2px border radius' },
  'rounded': { css: 'border-radius: 0.25rem', doc: '4px border radius' },
  'rounded-md': { css: 'border-radius: 0.375rem', doc: '6px border radius' },
  'rounded-lg': { css: 'border-radius: 0.5rem', doc: '8px border radius' },
  'rounded-xl': { css: 'border-radius: 0.75rem', doc: '12px border radius' },
  'rounded-2xl': { css: 'border-radius: 1rem', doc: '16px border radius' },
  'rounded-full': { css: 'border-radius: 9999px', doc: 'Fully rounded' },

  // Effects - Shadow
  'shadow-sm': { css: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)', doc: 'Small shadow' },
  'shadow': { css: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1)', doc: 'Default shadow' },
  'shadow-md': { css: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)', doc: 'Medium shadow' },
  'shadow-lg': { css: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1)', doc: 'Large shadow' },
  'shadow-xl': { css: 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)', doc: 'Extra large shadow' },
  'shadow-2xl': { css: 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)', doc: '2XL shadow' },
  'shadow-none': { css: 'box-shadow: none', doc: 'No shadow' },

  // Effects - Opacity
  'opacity-0': { css: 'opacity: 0', doc: 'Fully transparent' },
  'opacity-25': { css: 'opacity: 0.25', doc: '25% opacity' },
  'opacity-50': { css: 'opacity: 0.5', doc: '50% opacity' },
  'opacity-75': { css: 'opacity: 0.75', doc: '75% opacity' },
  'opacity-100': { css: 'opacity: 1', doc: 'Fully opaque' },

  // Effects - Border
  'border': { css: 'border-width: 1px', doc: '1px border' },
  'border-0': { css: 'border-width: 0', doc: 'No border' },
  'border-2': { css: 'border-width: 2px', doc: '2px border' },
  'border-4': { css: 'border-width: 4px', doc: '4px border' },
  'border-t': { css: 'border-top-width: 1px', doc: 'Top border' },
  'border-b': { css: 'border-bottom-width: 1px', doc: 'Bottom border' },
  'border-l': { css: 'border-left-width: 1px', doc: 'Left border' },
  'border-r': { css: 'border-right-width: 1px', doc: 'Right border' },

  // Animations
  'transition': { css: 'transition-property: all; transition-duration: 150ms', doc: 'All transitions' },
  'transition-colors': { css: 'transition-property: color, background-color, border-color', doc: 'Color transitions' },
  'transition-transform': { css: 'transition-property: transform', doc: 'Transform transitions' },
  'duration-150': { css: 'transition-duration: 150ms', doc: '150ms duration' },
  'duration-200': { css: 'transition-duration: 200ms', doc: '200ms duration' },
  'duration-300': { css: 'transition-duration: 300ms', doc: '300ms duration' },
  'ease-in': { css: 'transition-timing-function: ease-in', doc: 'Ease in' },
  'ease-out': { css: 'transition-timing-function: ease-out', doc: 'Ease out' },
  'ease-in-out': { css: 'transition-timing-function: ease-in-out', doc: 'Ease in out' },
  'animate-spin': { css: 'animation: spin 1s linear infinite', doc: 'Spinning animation' },
  'animate-ping': { css: 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite', doc: 'Ping animation' },
  'animate-pulse': { css: 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', doc: 'Pulse animation' },
  'animate-bounce': { css: 'animation: bounce 1s infinite', doc: 'Bounce animation' },

  // Transforms
  'scale-0': { css: 'transform: scale(0)', doc: 'Scale to 0' },
  'scale-50': { css: 'transform: scale(0.5)', doc: 'Scale to 50%' },
  'scale-100': { css: 'transform: scale(1)', doc: 'Scale to 100%' },
  'scale-110': { css: 'transform: scale(1.1)', doc: 'Scale to 110%' },
  'scale-125': { css: 'transform: scale(1.25)', doc: 'Scale to 125%' },
  'rotate-0': { css: 'transform: rotate(0deg)', doc: 'No rotation' },
  'rotate-45': { css: 'transform: rotate(45deg)', doc: 'Rotate 45 degrees' },
  'rotate-90': { css: 'transform: rotate(90deg)', doc: 'Rotate 90 degrees' },
  'rotate-180': { css: 'transform: rotate(180deg)', doc: 'Rotate 180 degrees' },
  'translate-x-0': { css: 'transform: translateX(0)', doc: 'No X translation' },
  'translate-y-0': { css: 'transform: translateY(0)', doc: 'No Y translation' },

  // Interactivity
  'cursor-pointer': { css: 'cursor: pointer', doc: 'Pointer cursor' },
  'cursor-default': { css: 'cursor: default', doc: 'Default cursor' },
  'cursor-not-allowed': { css: 'cursor: not-allowed', doc: 'Not allowed cursor' },
  'cursor-wait': { css: 'cursor: wait', doc: 'Wait cursor' },
  'select-none': { css: 'user-select: none', doc: 'Disable text selection' },
  'select-text': { css: 'user-select: text', doc: 'Enable text selection' },
  'select-all': { css: 'user-select: all', doc: 'Select all on click' },
  'pointer-events-none': { css: 'pointer-events: none', doc: 'Disable pointer events' },
  'pointer-events-auto': { css: 'pointer-events: auto', doc: 'Enable pointer events' },

  // Overflow
  'overflow-auto': { css: 'overflow: auto', doc: 'Auto overflow' },
  'overflow-hidden': { css: 'overflow: hidden', doc: 'Hidden overflow' },
  'overflow-visible': { css: 'overflow: visible', doc: 'Visible overflow' },
  'overflow-scroll': { css: 'overflow: scroll', doc: 'Scroll overflow' },
  'overflow-x-auto': { css: 'overflow-x: auto', doc: 'Auto X overflow' },
  'overflow-y-auto': { css: 'overflow-y: auto', doc: 'Auto Y overflow' },
  'overflow-x-hidden': { css: 'overflow-x: hidden', doc: 'Hidden X overflow' },
  'overflow-y-hidden': { css: 'overflow-y: hidden', doc: 'Hidden Y overflow' },

  // Accessibility
  'sr-only': { css: 'position: absolute; width: 1px; height: 1px; margin: -1px; overflow: hidden; clip: rect(0,0,0,0)', doc: 'Screen reader only' },
  'not-sr-only': { css: 'position: static; width: auto; height: auto; margin: 0; overflow: visible; clip: auto', doc: 'Not screen reader only' },
  'focus-ring': { css: 'outline: 2px solid var(--j-primary); outline-offset: 2px', doc: 'Focus ring' },

  // Components
  'btn': { css: 'display: inline-flex; align-items: center; padding: 0.5rem 1rem; border-radius: 0.25rem', doc: 'Button base' },
  'btn-primary': { css: 'background: var(--j-primary); color: white', doc: 'Primary button' },
  'btn-secondary': { css: 'background: var(--j-secondary); color: white', doc: 'Secondary button' },
  'btn-success': { css: 'background: var(--j-success); color: white', doc: 'Success button' },
  'btn-warning': { css: 'background: var(--j-warning); color: white', doc: 'Warning button' },
  'btn-error': { css: 'background: var(--j-error); color: white', doc: 'Error button' },
  'btn-outline': { css: 'background: transparent; border: 1px solid currentColor', doc: 'Outline button' },
  'btn-ghost': { css: 'background: transparent', doc: 'Ghost button' },
  'btn-sm': { css: 'padding: 0.25rem 0.5rem; font-size: 0.875rem', doc: 'Small button' },
  'btn-lg': { css: 'padding: 0.75rem 1.5rem; font-size: 1.125rem', doc: 'Large button' },
  'card': { css: 'background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgb(0 0 0 / 0.1)', doc: 'Card container' },
  'card-body': { css: 'padding: 1rem', doc: 'Card body' },
  'card-header': { css: 'padding: 1rem; border-bottom: 1px solid var(--j-border)', doc: 'Card header' },
  'card-footer': { css: 'padding: 1rem; border-top: 1px solid var(--j-border)', doc: 'Card footer' },
  'form-control': { css: 'display: block; width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--j-border)', doc: 'Form input' },
  'form-label': { css: 'display: block; margin-bottom: 0.5rem; font-weight: 500', doc: 'Form label' },
  'form-group': { css: 'margin-bottom: 1rem', doc: 'Form group' },
  'table': { css: 'width: 100%; border-collapse: collapse', doc: 'Table' },
  'alert': { css: 'padding: 1rem; border-radius: 0.25rem', doc: 'Alert base' },
  'alert-success': { css: 'background: var(--j-success-light); color: var(--j-success-dark)', doc: 'Success alert' },
  'alert-warning': { css: 'background: var(--j-warning-light); color: var(--j-warning-dark)', doc: 'Warning alert' },
  'alert-error': { css: 'background: var(--j-error-light); color: var(--j-error-dark)', doc: 'Error alert' },
  'badge': { css: 'display: inline-flex; padding: 0.25rem 0.5rem; font-size: 0.75rem; border-radius: 9999px', doc: 'Badge' },
  'modal': { css: 'position: fixed; inset: 0; z-index: 1050', doc: 'Modal' },
  'dropdown': { css: 'position: relative; display: inline-block', doc: 'Dropdown' },
  'dropdown-menu': { css: 'position: absolute; min-width: 10rem; background: white; box-shadow: 0 4px 6px rgb(0 0 0 / 0.1)', doc: 'Dropdown menu' },
  'avatar': { css: 'display: inline-flex; border-radius: 9999px; overflow: hidden', doc: 'Avatar' },
  'avatar-sm': { css: 'width: 2rem; height: 2rem', doc: 'Small avatar' },
  'avatar-lg': { css: 'width: 4rem; height: 4rem', doc: 'Large avatar' },
  'container': { css: 'width: 100%; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem', doc: 'Container' },
  'navbar': { css: 'display: flex; align-items: center; padding: 0.5rem 1rem', doc: 'Navbar' },
};

// Responsive prefixes
const responsivePrefixes = ['sm:', 'md:', 'lg:', 'xl:', '2xl:'];

// State prefixes
const statePrefixes = ['hover:', 'focus:', 'active:', 'disabled:', 'first:', 'last:', 'odd:', 'even:', 'group-hover:', 'dark:', 'focus-visible:', 'focus-within:'];

/**
 * Generate all class variations with prefixes
 */
function getAllClasses() {
  const allClasses = { ...jasminClasses };

  // Add responsive variations
  for (const prefix of responsivePrefixes) {
    for (const [className, data] of Object.entries(jasminClasses)) {
      allClasses[`${prefix}${className}`] = {
        css: data.css,
        doc: `${prefix.replace(':', '')} breakpoint: ${data.doc}`
      };
    }
  }

  // Add state variations
  for (const prefix of statePrefixes) {
    for (const [className, data] of Object.entries(jasminClasses)) {
      allClasses[`${prefix}${className}`] = {
        css: data.css,
        doc: `On ${prefix.replace(':', '')}: ${data.doc}`
      };
    }
  }

  return allClasses;
}

/**
 * Create completion item from class data
 */
function createCompletionItem(className, data, config) {
  const item = new vscode.CompletionItem(className, vscode.CompletionItemKind.Value);

  // Create documentation
  const markdown = new vscode.MarkdownString();
  markdown.appendCodeblock(data.css, 'css');
  markdown.appendText('\n' + data.doc);

  // Add pixel equivalent if enabled
  if (config.get('showPixelEquivalents')) {
    const rootFontSize = config.get('rootFontSize') || 16;
    const remMatch = data.css.match(/([\d.]+)rem/);
    if (remMatch) {
      const pixels = parseFloat(remMatch[1]) * rootFontSize;
      markdown.appendText(`\n\n**Computed:** ${pixels}px`);
    }
  }

  item.documentation = markdown;
  item.detail = 'JasminCSS';

  return item;
}

/**
 * Check if position is within class attribute
 */
function isInClassAttribute(document, position) {
  const line = document.lineAt(position).text;
  const beforeCursor = line.substring(0, position.character);

  // Check for class="..." or className="..."
  const classMatch = beforeCursor.match(/(?:class|className)\s*=\s*["']([^"']*)$/);
  if (classMatch) return true;

  // Check for template literals: `... ${...} ...`
  const templateMatch = beforeCursor.match(/(?:class|className)\s*=\s*\{?\s*`[^`]*$/);
  if (templateMatch) return true;

  // Check for JSX: className={`...`} or className={"..."}
  const jsxMatch = beforeCursor.match(/(?:class|className)\s*=\s*\{[^}]*["'`]([^"'`]*)$/);
  if (jsxMatch) return true;

  return false;
}

/**
 * Get current word being typed
 */
function getCurrentWord(document, position) {
  const line = document.lineAt(position).text;
  const beforeCursor = line.substring(0, position.character);
  const match = beforeCursor.match(/[\w\-:]+$/);
  return match ? match[0] : '';
}

/**
 * Completion Provider
 */
class JasminCompletionProvider {
  constructor() {
    this.allClasses = getAllClasses();
  }

  provideCompletionItems(document, position, token, context) {
    const config = vscode.workspace.getConfiguration('jasmincss');

    if (!config.get('enable')) {
      return [];
    }

    if (!isInClassAttribute(document, position)) {
      return [];
    }

    const currentWord = getCurrentWord(document, position);
    const items = [];

    for (const [className, data] of Object.entries(this.allClasses)) {
      if (!currentWord || className.startsWith(currentWord) || className.includes(currentWord)) {
        items.push(createCompletionItem(className, data, config));
      }
    }

    return items;
  }
}

/**
 * Hover Provider
 */
class JasminHoverProvider {
  constructor() {
    this.allClasses = getAllClasses();
  }

  provideHover(document, position, token) {
    const config = vscode.workspace.getConfiguration('jasmincss');

    if (!config.get('enable')) {
      return null;
    }

    const range = document.getWordRangeAtPosition(position, /[\w\-:]+/);
    if (!range) return null;

    const word = document.getText(range);
    const data = this.allClasses[word];

    if (!data) return null;

    const markdown = new vscode.MarkdownString();
    markdown.appendMarkdown(`**JasminCSS:** \`${word}\`\n\n`);
    markdown.appendCodeblock(data.css, 'css');
    markdown.appendText('\n' + data.doc);

    return new vscode.Hover(markdown, range);
  }
}

/**
 * Activate extension
 */
function activate(context) {
  console.log('JasminCSS IntelliSense activated');

  const languages = [
    'html',
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact',
    'vue',
    'svelte',
    'php',
    'erb',
    'blade'
  ];

  // Register completion provider
  const completionProvider = new JasminCompletionProvider();
  for (const lang of languages) {
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(
        { language: lang, scheme: 'file' },
        completionProvider,
        '"', "'", '`', ' ', ':'
      )
    );
  }

  // Register hover provider
  const hoverProvider = new JasminHoverProvider();
  for (const lang of languages) {
    context.subscriptions.push(
      vscode.languages.registerHoverProvider(
        { language: lang, scheme: 'file' },
        hoverProvider
      )
    );
  }
}

/**
 * Deactivate extension
 */
function deactivate() {
  console.log('JasminCSS IntelliSense deactivated');
}

module.exports = { activate, deactivate };
