// Accessibility utilities for JasminCSS

export function generateAccessibilityUtilities(config) {
  const classes = [];

  // Screen Reader Only - visually hidden but accessible
  classes.push({
    name: 'sr-only',
    css: `.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}`
  });

  // Not Screen Reader Only - reverses sr-only
  classes.push({
    name: 'not-sr-only',
    css: `.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}`
  });

  // Focus variants for sr-only (show on focus)
  classes.push({
    name: 'sr-only-focusable',
    css: `.sr-only-focusable:not(:focus):not(:focus-within) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}`
  });

  // Focus Visible - only show focus ring on keyboard navigation
  classes.push({
    name: 'focus-visible-ring',
    css: `.focus-visible-ring:focus {
  outline: none;
}
.focus-visible-ring:focus-visible {
  outline: 2px solid var(--j-primary);
  outline-offset: 2px;
}`
  });

  // Focus Within
  classes.push({
    name: 'focus-within-ring',
    css: `.focus-within-ring:focus-within {
  outline: 2px solid var(--j-primary);
  outline-offset: 2px;
}`
  });

  // Skip Link - for skip to main content
  classes.push({
    name: 'skip-link',
    css: `.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 9999;
  padding: 1rem 1.5rem;
  background-color: var(--j-primary);
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: top 150ms ease-in-out;
}
.skip-link:focus {
  top: 0;
}`
  });

  // Reduced Motion - respect user preference
  classes.push({
    name: 'motion-safe',
    css: `@media (prefers-reduced-motion: no-preference) {
  .motion-safe\\:animate { animation-play-state: running; }
  .motion-safe\\:transition { transition-property: all; }
}`
  });

  classes.push({
    name: 'motion-reduce',
    css: `@media (prefers-reduced-motion: reduce) {
  .motion-reduce\\:animate-none { animation: none; }
  .motion-reduce\\:transition-none { transition: none; }
}`
  });

  // Global reduced motion
  classes.push({
    name: 'reduce-motion',
    css: `@media (prefers-reduced-motion: reduce) {
  .reduce-motion,
  .reduce-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`
  });

  // High Contrast Mode
  classes.push({
    name: 'forced-colors',
    css: `@media (forced-colors: active) {
  .forced-colors\\:visible { visibility: visible; }
  .forced-colors\\:border { border: 1px solid CanvasText; }
}`
  });

  // Focus trap container (visual indicator)
  classes.push({
    name: 'focus-trap',
    css: `.focus-trap { position: relative; }`
  });

  // Keyboard focus indicator enhancement
  classes.push({
    name: 'focus-ring',
    css: `.focus-ring:focus {
  outline: 2px solid var(--j-primary);
  outline-offset: 2px;
}`
  });

  classes.push({
    name: 'focus-ring-inset',
    css: `.focus-ring-inset:focus {
  outline: 2px solid var(--j-primary);
  outline-offset: -2px;
}`
  });

  // Focus ring colors
  const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'];
  colors.forEach(color => {
    classes.push({
      name: `focus-ring-${color}`,
      css: `.focus-ring-${color}:focus {
  outline: 2px solid var(--j-${color});
  outline-offset: 2px;
}`
    });
  });

  // No focus outline (use sparingly, only with alternative indication)
  classes.push({
    name: 'focus-none',
    css: `.focus-none:focus { outline: none; }`
  });

  // Touch target sizing (minimum 44x44px for accessibility)
  classes.push({
    name: 'touch-target',
    css: `.touch-target {
  min-width: 44px;
  min-height: 44px;
}`
  });

  classes.push({
    name: 'touch-target-sm',
    css: `.touch-target-sm {
  min-width: 36px;
  min-height: 36px;
}`
  });

  // Aria hidden visual
  classes.push({
    name: 'aria-hidden',
    css: `.aria-hidden[aria-hidden="true"] { display: none; }`
  });

  // Disabled state styling
  classes.push({
    name: 'disabled',
    css: `.disabled, [disabled], [aria-disabled="true"] {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}`
  });

  // Live region announcement (for dynamic content)
  classes.push({
    name: 'live-polite',
    css: `.live-polite { /* Use with aria-live="polite" */ }`
  });

  classes.push({
    name: 'live-assertive',
    css: `.live-assertive { /* Use with aria-live="assertive" */ }`
  });

  // Selection customization
  classes.push({
    name: 'selection-primary',
    css: `.selection-primary::selection {
  background-color: var(--j-primary);
  color: white;
}`
  });

  // Caret/cursor color
  classes.push({
    name: 'caret-primary',
    css: `.caret-primary { caret-color: var(--j-primary); }`
  });

  classes.push({
    name: 'caret-transparent',
    css: `.caret-transparent { caret-color: transparent; }`
  });

  colors.forEach(color => {
    classes.push({
      name: `caret-${color}`,
      css: `.caret-${color} { caret-color: var(--j-${color}); }`
    });
  });

  // Accent color (for form elements)
  classes.push({
    name: 'accent-primary',
    css: `.accent-primary { accent-color: var(--j-primary); }`
  });

  colors.forEach(color => {
    classes.push({
      name: `accent-${color}`,
      css: `.accent-${color} { accent-color: var(--j-${color}); }`
    });
  });

  // Print utilities
  classes.push({
    name: 'print-hidden',
    css: `@media print { .print-hidden { display: none !important; } }`
  });

  classes.push({
    name: 'print-only',
    css: `.print-only { display: none; }
@media print { .print-only { display: block; } }`
  });

  classes.push({
    name: 'print-break-before',
    css: `@media print { .print-break-before { break-before: page; } }`
  });

  classes.push({
    name: 'print-break-after',
    css: `@media print { .print-break-after { break-after: page; } }`
  });

  classes.push({
    name: 'print-break-inside-avoid',
    css: `@media print { .print-break-inside-avoid { break-inside: avoid; } }`
  });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
