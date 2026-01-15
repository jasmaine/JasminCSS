// Chips/Tags component for JasminCSS

export function generateChipStyles(config) {
  return `/* Chip Base */
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--j-text);
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-full, 9999px);
  white-space: nowrap;
  transition: all 150ms ease-in-out;
}

/* Chip Colors */
.chip-primary {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

.chip-secondary {
  background-color: var(--j-secondary);
  border-color: var(--j-secondary);
  color: white;
}

.chip-accent {
  background-color: var(--j-accent);
  border-color: var(--j-accent);
  color: white;
}

.chip-success {
  background-color: var(--j-success);
  border-color: var(--j-success);
  color: white;
}

.chip-warning {
  background-color: var(--j-warning);
  border-color: var(--j-warning);
  color: white;
}

.chip-error {
  background-color: var(--j-error);
  border-color: var(--j-error);
  color: white;
}

.chip-info {
  background-color: var(--j-info);
  border-color: var(--j-info);
  color: white;
}

/* Soft/Light Chips */
.chip-soft-primary {
  background-color: color-mix(in srgb, var(--j-primary) 15%, transparent);
  border-color: color-mix(in srgb, var(--j-primary) 30%, transparent);
  color: var(--j-primary);
}

.chip-soft-secondary {
  background-color: color-mix(in srgb, var(--j-secondary) 15%, transparent);
  border-color: color-mix(in srgb, var(--j-secondary) 30%, transparent);
  color: var(--j-secondary);
}

.chip-soft-success {
  background-color: color-mix(in srgb, var(--j-success) 15%, transparent);
  border-color: color-mix(in srgb, var(--j-success) 30%, transparent);
  color: var(--j-success);
}

.chip-soft-warning {
  background-color: color-mix(in srgb, var(--j-warning) 15%, transparent);
  border-color: color-mix(in srgb, var(--j-warning) 30%, transparent);
  color: var(--j-warning);
}

.chip-soft-error {
  background-color: color-mix(in srgb, var(--j-error) 15%, transparent);
  border-color: color-mix(in srgb, var(--j-error) 30%, transparent);
  color: var(--j-error);
}

.chip-soft-info {
  background-color: color-mix(in srgb, var(--j-info) 15%, transparent);
  border-color: color-mix(in srgb, var(--j-info) 30%, transparent);
  color: var(--j-info);
}

/* Outline Chips */
.chip-outline {
  background-color: transparent;
}

.chip-outline-primary {
  background-color: transparent;
  border-color: var(--j-primary);
  color: var(--j-primary);
}

.chip-outline-secondary {
  background-color: transparent;
  border-color: var(--j-secondary);
  color: var(--j-secondary);
}

.chip-outline-success {
  background-color: transparent;
  border-color: var(--j-success);
  color: var(--j-success);
}

.chip-outline-warning {
  background-color: transparent;
  border-color: var(--j-warning);
  color: var(--j-warning);
}

.chip-outline-error {
  background-color: transparent;
  border-color: var(--j-error);
  color: var(--j-error);
}

/* Chip Sizes */
.chip-xs {
  padding: 0 0.5rem;
  font-size: 0.75rem;
  gap: 0.25rem;
}

.chip-sm {
  padding: 0.125rem 0.625rem;
  font-size: 0.8125rem;
}

.chip-lg {
  padding: 0.375rem 1rem;
  font-size: 1rem;
}

.chip-xl {
  padding: 0.5rem 1.25rem;
  font-size: 1.125rem;
}

/* Chip Shapes */
.chip-rounded {
  border-radius: var(--j-radius-lg, 0.5rem);
}

.chip-square {
  border-radius: var(--j-radius-sm, 0.25rem);
}

/* Chip with Avatar/Image */
.chip-avatar {
  padding-left: 0.25rem;
}

.chip-avatar-img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  object-fit: cover;
}

.chip-sm .chip-avatar-img {
  width: 1.25rem;
  height: 1.25rem;
}

.chip-lg .chip-avatar-img {
  width: 1.75rem;
  height: 1.75rem;
}

/* Chip with Icon */
.chip-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.chip-sm .chip-icon {
  width: 0.875rem;
  height: 0.875rem;
}

.chip-lg .chip-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Removable/Deletable Chip */
.chip-removable {
  padding-right: 0.375rem;
}

.chip-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  padding: 0;
  margin-left: 0.125rem;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: all 150ms ease-in-out;
}

.chip-remove:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
}

.chip-primary .chip-remove:hover,
.chip-secondary .chip-remove:hover,
.chip-success .chip-remove:hover,
.chip-warning .chip-remove:hover,
.chip-error .chip-remove:hover,
.chip-info .chip-remove:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.chip-remove svg,
.chip-remove-icon {
  width: 0.75rem;
  height: 0.75rem;
}

/* Default X icon */
.chip-remove::before {
  content: "×";
  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
}

.chip-remove svg + .chip-remove::before,
.chip-remove:has(svg)::before {
  display: none;
}

/* Clickable/Interactive Chip */
.chip-clickable {
  cursor: pointer;
}

.chip-clickable:hover {
  background-color: var(--j-bg-muted);
}

.chip-clickable:active {
  transform: scale(0.95);
}

.chip-clickable.chip-primary:hover {
  background-color: color-mix(in srgb, var(--j-primary) 85%, black);
}

.chip-clickable.chip-secondary:hover {
  background-color: color-mix(in srgb, var(--j-secondary) 85%, black);
}

.chip-clickable.chip-success:hover {
  background-color: color-mix(in srgb, var(--j-success) 85%, black);
}

/* Selected Chip */
.chip-selected,
.chip[aria-selected="true"] {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

.chip-selected::before,
.chip[aria-selected="true"]::before {
  content: "✓";
  margin-right: 0.125rem;
  font-size: 0.75em;
}

/* Disabled Chip */
.chip:disabled,
.chip.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Chip Group */
.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip-group-sm {
  gap: 0.25rem;
}

.chip-group-lg {
  gap: 0.75rem;
}

/* Chip Group - Connected */
.chip-group-connected {
  gap: 0;
}

.chip-group-connected .chip {
  border-radius: 0;
  margin-left: -1px;
}

.chip-group-connected .chip:first-child {
  border-radius: var(--j-radius-full, 9999px) 0 0 var(--j-radius-full, 9999px);
  margin-left: 0;
}

.chip-group-connected .chip:last-child {
  border-radius: 0 var(--j-radius-full, 9999px) var(--j-radius-full, 9999px) 0;
}

/* Chip Input (for tag input fields) */
.chip-input-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.5rem;
  min-height: 2.5rem;
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.375rem);
  background-color: var(--j-bg);
  cursor: text;
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
}

.chip-input-wrapper:focus-within {
  border-color: var(--j-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

.chip-input-wrapper .chip {
  margin: 0;
}

.chip-input {
  flex: 1;
  min-width: 8rem;
  padding: 0.25rem;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  color: var(--j-text);
  outline: none;
}

.chip-input::placeholder {
  color: var(--j-text-muted);
}

/* Chip with Counter */
.chip-counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.375rem;
  margin-left: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: var(--j-radius-full, 9999px);
}

.chip-primary .chip-counter,
.chip-secondary .chip-counter,
.chip-success .chip-counter,
.chip-warning .chip-counter,
.chip-error .chip-counter {
  background-color: rgba(255, 255, 255, 0.25);
}

/* Glow Chips (Futuristic) */
.chip-glow {
  box-shadow: 0 0 10px currentColor;
}

.chip-glow-primary {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
  box-shadow: 0 0 15px var(--j-primary);
}

.chip-glow-secondary {
  background-color: var(--j-secondary);
  border-color: var(--j-secondary);
  color: white;
  box-shadow: 0 0 15px var(--j-secondary);
}

/* Filter Chips */
.chip-filter {
  cursor: pointer;
  user-select: none;
}

.chip-filter:not(.chip-selected):hover {
  border-color: var(--j-primary);
}

.chip-filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
`;
}
