export function generateButtonStyles(config) {
  return `/* Button Base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  border-radius: var(--j-radius-buttons, var(--j-radius-default, 0.5rem));
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
}

.btn:focus-visible {
  outline: 2px solid var(--j-ring, var(--j-primary));
  outline-offset: 2px;
}

.btn:disabled,
.btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Button Sizes */
.btn-xs {
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  line-height: 1rem;
  gap: 0.25rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  line-height: 1.125rem;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

.btn-xl {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

/* Primary Button */
.btn-primary {
  background-color: var(--j-primary);
  color: white;
  border-color: var(--j-primary);
}

.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

.btn-primary:active {
  filter: brightness(0.95);
  transform: translateY(0);
}

/* Secondary Button */
.btn-secondary {
  background-color: var(--j-secondary);
  color: white;
  border-color: var(--j-secondary);
}

.btn-secondary:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

/* Accent Button */
.btn-accent {
  background-color: var(--j-accent);
  color: white;
  border-color: var(--j-accent);
}

.btn-accent:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

/* Success Button */
.btn-success {
  background-color: var(--j-success);
  color: white;
  border-color: var(--j-success);
}

.btn-success:hover {
  filter: brightness(1.1);
}

/* Warning Button */
.btn-warning {
  background-color: var(--j-warning);
  color: white;
  border-color: var(--j-warning);
}

.btn-warning:hover {
  filter: brightness(1.1);
}

/* Error/Danger Button */
.btn-error,
.btn-danger {
  background-color: var(--j-error);
  color: white;
  border-color: var(--j-error);
}

.btn-error:hover,
.btn-danger:hover {
  filter: brightness(1.1);
}

/* Info Button */
.btn-info {
  background-color: var(--j-info);
  color: white;
  border-color: var(--j-info);
}

.btn-info:hover {
  filter: brightness(1.1);
}

/* Outline Variants */
.btn-outline {
  background-color: transparent;
  border-color: currentColor;
}

.btn-outline-primary {
  background-color: transparent;
  color: var(--j-primary);
  border-color: var(--j-primary);
}

.btn-outline-primary:hover {
  background-color: var(--j-primary);
  color: white;
}

.btn-outline-secondary {
  background-color: transparent;
  color: var(--j-secondary);
  border-color: var(--j-secondary);
}

.btn-outline-secondary:hover {
  background-color: var(--j-secondary);
  color: white;
}

.btn-outline-accent {
  background-color: transparent;
  color: var(--j-accent);
  border-color: var(--j-accent);
}

.btn-outline-accent:hover {
  background-color: var(--j-accent);
  color: white;
}

.btn-outline-error,
.btn-outline-danger {
  background-color: transparent;
  color: var(--j-error);
  border-color: var(--j-error);
}

.btn-outline-error:hover,
.btn-outline-danger:hover {
  background-color: var(--j-error);
  color: white;
}

/* Ghost Button */
.btn-ghost {
  background-color: transparent;
  border-color: transparent;
  color: var(--j-text);
}

.btn-ghost:hover {
  background-color: var(--j-bg-subtle);
}

.btn-ghost-primary {
  background-color: transparent;
  border-color: transparent;
  color: var(--j-primary);
}

.btn-ghost-primary:hover {
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
}

/* Soft/Light Variants */
.btn-soft-primary {
  background-color: color-mix(in srgb, var(--j-primary) 15%, transparent);
  color: var(--j-primary);
  border-color: transparent;
}

.btn-soft-primary:hover {
  background-color: color-mix(in srgb, var(--j-primary) 25%, transparent);
}

.btn-soft-secondary {
  background-color: color-mix(in srgb, var(--j-secondary) 15%, transparent);
  color: var(--j-secondary);
  border-color: transparent;
}

.btn-soft-secondary:hover {
  background-color: color-mix(in srgb, var(--j-secondary) 25%, transparent);
}

.btn-soft-success {
  background-color: color-mix(in srgb, var(--j-success) 15%, transparent);
  color: var(--j-success);
  border-color: transparent;
}

.btn-soft-error {
  background-color: color-mix(in srgb, var(--j-error) 15%, transparent);
  color: var(--j-error);
  border-color: transparent;
}

/* Link Button */
.btn-link {
  background-color: transparent;
  border-color: transparent;
  color: var(--j-primary);
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.btn-link:hover {
  text-decoration-thickness: 2px;
}

/* Glow Button (Futuristic) */
.btn-glow {
  background-color: var(--j-primary);
  color: white;
  border-color: var(--j-primary);
  box-shadow: 0 0 20px color-mix(in srgb, var(--j-primary) 50%, transparent);
}

.btn-glow:hover {
  box-shadow: 0 0 30px color-mix(in srgb, var(--j-primary) 70%, transparent);
  transform: translateY(-2px);
}

.btn-glow-secondary {
  background-color: var(--j-secondary);
  color: white;
  border-color: var(--j-secondary);
  box-shadow: 0 0 20px color-mix(in srgb, var(--j-secondary) 50%, transparent);
}

.btn-glow-secondary:hover {
  box-shadow: 0 0 30px color-mix(in srgb, var(--j-secondary) 70%, transparent);
}

/* Gradient Button */
.btn-gradient {
  background: linear-gradient(135deg, var(--j-primary), var(--j-secondary));
  color: white;
  border: none;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, var(--j-secondary), var(--j-primary));
  transform: translateY(-1px);
}

/* Glass Button */
.btn-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Icon Button */
.btn-icon {
  padding: 0.625rem;
  aspect-ratio: 1;
}

.btn-icon.btn-xs {
  padding: 0.25rem;
}

.btn-icon.btn-sm {
  padding: 0.5rem;
}

.btn-icon.btn-lg {
  padding: 0.75rem;
}

.btn-icon.btn-xl {
  padding: 1rem;
}

/* Rounded/Pill Button */
.btn-pill {
  border-radius: 9999px;
}

/* Full Width */
.btn-block {
  width: 100%;
}

/* Button Group */
.btn-group {
  display: inline-flex;
}

.btn-group > .btn {
  border-radius: 0;
}

.btn-group > .btn:first-child {
  border-top-left-radius: var(--j-radius-default, 0.5rem);
  border-bottom-left-radius: var(--j-radius-default, 0.5rem);
}

.btn-group > .btn:last-child {
  border-top-right-radius: var(--j-radius-default, 0.5rem);
  border-bottom-right-radius: var(--j-radius-default, 0.5rem);
}

.btn-group > .btn:not(:last-child) {
  border-right-width: 0;
}

.btn-group-vertical {
  display: inline-flex;
  flex-direction: column;
}

.btn-group-vertical > .btn {
  border-radius: 0;
}

.btn-group-vertical > .btn:first-child {
  border-top-left-radius: var(--j-radius-default, 0.5rem);
  border-top-right-radius: var(--j-radius-default, 0.5rem);
}

.btn-group-vertical > .btn:last-child {
  border-bottom-left-radius: var(--j-radius-default, 0.5rem);
  border-bottom-right-radius: var(--j-radius-default, 0.5rem);
}

.btn-group-vertical > .btn:not(:last-child) {
  border-bottom-width: 0;
}

/* Loading State */
.btn-loading {
  position: relative;
  color: transparent !important;
  pointer-events: none;
}

.btn-loading::after {
  content: "";
  position: absolute;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: j-spin 0.6s linear infinite;
  color: white;
}
`;
}
