export function generateBase(config) {
  const { cssVariables, resolvedFonts, branding, darkMode } = config;

  // Generate CSS custom properties
  const customProps = Object.entries(cssVariables)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  // Font imports
  const fontImports = resolvedFonts.length > 0
    ? `@import url('https://fonts.googleapis.com/css2?family=${resolvedFonts.join('&family=')}&display=swap');`
    : '';

  return `/* JasminCSS v1.0.0 - Modern CSS Framework */
/* https://github.com/jasmaine/JasminCSS */

${fontImports}

/* CSS Reset & Base Styles */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}

body {
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

a {
  color: inherit;
  text-decoration: inherit;
}

button, [role="button"] {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
}

button:focus {
  outline: none;
}

:disabled {
  cursor: default;
}

/* CSS Custom Properties */
:root {
${customProps}

  /* Additional computed values */
  --j-font-size-xs: 0.75rem;
  --j-font-size-sm: 0.875rem;
  --j-font-size-base: 1rem;
  --j-font-size-lg: 1.125rem;
  --j-font-size-xl: 1.25rem;
  --j-font-size-2xl: 1.5rem;
  --j-font-size-3xl: 1.875rem;
  --j-font-size-4xl: 2.25rem;
  --j-font-size-5xl: 3rem;
  --j-font-size-6xl: 3.75rem;
  --j-font-size-7xl: 4.5rem;
  --j-font-size-8xl: 6rem;
  --j-font-size-9xl: 8rem;

  /* Line heights */
  --j-leading-none: 1;
  --j-leading-tight: 1.25;
  --j-leading-snug: 1.375;
  --j-leading-normal: 1.5;
  --j-leading-relaxed: 1.625;
  --j-leading-loose: 2;

  /* Letter spacing */
  --j-tracking-tighter: -0.05em;
  --j-tracking-tight: -0.025em;
  --j-tracking-normal: 0;
  --j-tracking-wide: 0.025em;
  --j-tracking-wider: 0.05em;
  --j-tracking-widest: 0.1em;

  /* Z-index scale */
  --j-z-auto: auto;
  --j-z-0: 0;
  --j-z-10: 10;
  --j-z-20: 20;
  --j-z-30: 30;
  --j-z-40: 40;
  --j-z-50: 50;
  --j-z-dropdown: 1000;
  --j-z-sticky: 1020;
  --j-z-fixed: 1030;
  --j-z-modal-backdrop: 1040;
  --j-z-modal: 1050;
  --j-z-popover: 1060;
  --j-z-tooltip: 1070;

  /* Transition durations */
  --j-duration-75: 75ms;
  --j-duration-100: 100ms;
  --j-duration-150: 150ms;
  --j-duration-200: 200ms;
  --j-duration-300: 300ms;
  --j-duration-500: 500ms;
  --j-duration-700: 700ms;
  --j-duration-1000: 1000ms;

  /* Easings */
  --j-ease-linear: linear;
  --j-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --j-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --j-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --j-ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Background for light mode */
  --j-bg: #ffffff;
  --j-bg-subtle: #f4f4f5;
  --j-bg-muted: #e4e4e7;
  --j-text: #18181b;
  --j-text-subtle: #71717a;
  --j-text-muted: #a1a1aa;
  --j-border: #e4e4e7;
  --j-border-subtle: #f4f4f5;
  --j-ring: var(--j-primary);
}

${darkMode ? `/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --j-bg: #111827;
    --j-bg-subtle: #1f2937;
    --j-bg-muted: #374151;
    --j-text: #f9fafb;
    --j-text-subtle: #9ca3af;
    --j-text-muted: #6b7280;
    --j-border: #374151;
    --j-border-subtle: #1f2937;
  }
}

.dark {
  --j-bg: #111827;
  --j-bg-subtle: #1f2937;
  --j-bg-muted: #374151;
  --j-text: #f9fafb;
  --j-text-subtle: #9ca3af;
  --j-text-muted: #6b7280;
  --j-border: #374151;
  --j-border-subtle: #1f2937;
}` : ''}

/* Base Typography */
html {
  font-family: var(--j-font-sans);
  font-size: var(--j-font-size-base);
  line-height: var(--j-line-height);
  color: var(--j-text);
  background-color: var(--j-bg);
}

code, kbd, samp, pre {
  font-family: var(--j-font-mono);
}

/* Focus Styles */
:focus-visible {
  outline: 2px solid var(--j-ring);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background-color: var(--j-primary);
  color: white;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--j-bg-subtle);
}

::-webkit-scrollbar-thumb {
  background: var(--j-border);
  border-radius: var(--j-radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--j-text-muted);
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
`;
}
