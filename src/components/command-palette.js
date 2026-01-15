// Command Palette component for JasminCSS

export function generateCommandPaletteStyles(config) {
  return `/* Command Palette Overlay */
.command-palette-overlay {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 150ms ease-in-out, visibility 150ms;
}

.command-palette-overlay.show {
  opacity: 1;
  visibility: visible;
}

/* Command Palette Container */
.command-palette {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  z-index: 9999;
  width: 100%;
  max-width: 640px;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-xl, 0.75rem);
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out, visibility 150ms;
}

.command-palette.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
}

/* Command Palette Header/Search */
.command-palette-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-bottom: 1px solid var(--j-border);
}

.command-palette-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--j-text-muted);
  flex-shrink: 0;
}

/* Search icon default */
.command-palette-icon::before {
  content: "⌕";
  font-size: 1.25rem;
}

.command-palette-icon:has(svg)::before {
  display: none;
}

.command-palette-input {
  flex: 1;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: var(--j-text);
  outline: none;
}

.command-palette-input::placeholder {
  color: var(--j-text-muted);
}

.command-palette-shortcut {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--j-text-muted);
}

.command-palette-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.375rem;
  font-size: 0.6875rem;
  font-family: inherit;
  font-weight: 500;
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-sm, 0.25rem);
}

/* Command Palette Body */
.command-palette-body {
  max-height: 400px;
  overflow-y: auto;
}

/* Command Palette Groups */
.command-palette-group {
  padding: 0.5rem 0;
}

.command-palette-group + .command-palette-group {
  border-top: 1px solid var(--j-border);
}

.command-palette-group-title {
  padding: 0.5rem 1rem;
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--j-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Command Palette Items */
.command-palette-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: var(--j-text);
  text-align: left;
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
}

.command-palette-item:hover,
.command-palette-item.active,
.command-palette-item[aria-selected="true"] {
  background-color: var(--j-bg-subtle);
}

.command-palette-item:focus {
  outline: none;
  background-color: var(--j-bg-subtle);
}

.command-palette-item-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--j-text-muted);
  flex-shrink: 0;
}

.command-palette-item-content {
  flex: 1;
  min-width: 0;
}

.command-palette-item-title {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.command-palette-item-description {
  font-size: 0.75rem;
  color: var(--j-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.command-palette-item-shortcut {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
}

.command-palette-item-badge {
  padding: 0.125rem 0.5rem;
  font-size: 0.6875rem;
  font-weight: 500;
  background-color: var(--j-bg-muted);
  border-radius: var(--j-radius-full, 9999px);
  color: var(--j-text-muted);
}

/* Command Palette Footer */
.command-palette-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--j-border);
  background-color: var(--j-bg-subtle);
  font-size: 0.75rem;
  color: var(--j-text-muted);
}

.command-palette-footer-hints {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.command-palette-footer-hint {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

/* Empty State */
.command-palette-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
}

.command-palette-empty-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  color: var(--j-text-muted);
  opacity: 0.5;
}

.command-palette-empty-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--j-text);
  margin-bottom: 0.25rem;
}

.command-palette-empty-text {
  font-size: 0.8125rem;
  color: var(--j-text-muted);
}

/* Loading State */
.command-palette-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* Recent Searches */
.command-palette-recent {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.command-palette-recent-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-full, 9999px);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.command-palette-recent-tag:hover {
  background-color: var(--j-bg-muted);
}

/* Highlight Match */
.command-palette-match {
  background-color: color-mix(in srgb, var(--j-warning) 30%, transparent);
  border-radius: 0.125rem;
}

/* Command Palette Sizes */
.command-palette-sm {
  max-width: 480px;
}

.command-palette-lg {
  max-width: 768px;
}

.command-palette-full {
  max-width: calc(100vw - 2rem);
  max-height: calc(100vh - 4rem);
  top: 2rem;
}

.command-palette-full .command-palette-body {
  max-height: calc(100vh - 12rem);
}

/* Dark Variant */
.command-palette-dark {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
  color: white;
}

.command-palette-dark .command-palette-header {
  border-color: var(--j-border-dark, #374151);
}

.command-palette-dark .command-palette-input {
  color: white;
}

.command-palette-dark .command-palette-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.command-palette-dark .command-palette-item {
  color: white;
}

.command-palette-dark .command-palette-item:hover,
.command-palette-dark .command-palette-item.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.command-palette-dark .command-palette-group + .command-palette-group {
  border-color: var(--j-border-dark, #374151);
}

.command-palette-dark .command-palette-footer {
  background-color: rgba(0, 0, 0, 0.2);
  border-color: var(--j-border-dark, #374151);
}

.command-palette-dark .command-palette-kbd {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
}

/* Glass Variant */
.command-palette-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-color: rgba(255, 255, 255, 0.3);
}

.dark .command-palette-glass {
  background: rgba(0, 0, 0, 0.75);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Nested/Drill-down */
.command-palette-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  color: var(--j-text-muted);
  border-bottom: 1px solid var(--j-border);
}

.command-palette-breadcrumb-item {
  cursor: pointer;
}

.command-palette-breadcrumb-item:hover {
  color: var(--j-primary);
}

.command-palette-breadcrumb-separator {
  color: var(--j-border);
}

/* Action Types */
.command-palette-item-action {
  padding: 0.25rem 0.5rem;
  font-size: 0.6875rem;
  font-weight: 500;
  background-color: color-mix(in srgb, var(--j-primary) 15%, transparent);
  color: var(--j-primary);
  border-radius: var(--j-radius-sm, 0.25rem);
}

.command-palette-item-action-warning {
  background-color: color-mix(in srgb, var(--j-warning) 15%, transparent);
  color: var(--j-warning);
}

.command-palette-item-action-danger {
  background-color: color-mix(in srgb, var(--j-error) 15%, transparent);
  color: var(--j-error);
}

/* Responsive */
@media (max-width: 640px) {
  .command-palette {
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    max-width: 100%;
    border-radius: 0 0 var(--j-radius-lg, 0.5rem) var(--j-radius-lg, 0.5rem);
  }

  .command-palette.show {
    transform: translateY(0);
  }

  .command-palette-body {
    max-height: 60vh;
  }
}
`;
}
