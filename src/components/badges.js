export function generateBadgeStyles(config) {
  return `/* Badge Base */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  border-radius: var(--j-radius-default, 0.5rem);
  background-color: var(--j-bg-muted);
  color: var(--j-text);
}

/* Badge Colors */
.badge-primary {
  background-color: var(--j-primary);
  color: white;
}

.badge-secondary {
  background-color: var(--j-secondary);
  color: white;
}

.badge-accent {
  background-color: var(--j-accent);
  color: white;
}

.badge-success {
  background-color: var(--j-success);
  color: white;
}

.badge-warning {
  background-color: var(--j-warning);
  color: white;
}

.badge-error,
.badge-danger {
  background-color: var(--j-error);
  color: white;
}

.badge-info {
  background-color: var(--j-info);
  color: white;
}

/* Soft/Light Badges */
.badge-soft-primary {
  background-color: color-mix(in srgb, var(--j-primary) 15%, transparent);
  color: var(--j-primary);
}

.badge-soft-secondary {
  background-color: color-mix(in srgb, var(--j-secondary) 15%, transparent);
  color: var(--j-secondary);
}

.badge-soft-success {
  background-color: color-mix(in srgb, var(--j-success) 15%, transparent);
  color: var(--j-success);
}

.badge-soft-warning {
  background-color: color-mix(in srgb, var(--j-warning) 15%, transparent);
  color: var(--j-warning);
}

.badge-soft-error {
  background-color: color-mix(in srgb, var(--j-error) 15%, transparent);
  color: var(--j-error);
}

.badge-soft-info {
  background-color: color-mix(in srgb, var(--j-info) 15%, transparent);
  color: var(--j-info);
}

/* Outline Badges */
.badge-outline {
  background-color: transparent;
  border: 1px solid currentColor;
}

.badge-outline-primary {
  background-color: transparent;
  border: 1px solid var(--j-primary);
  color: var(--j-primary);
}

.badge-outline-secondary {
  background-color: transparent;
  border: 1px solid var(--j-secondary);
  color: var(--j-secondary);
}

.badge-outline-success {
  background-color: transparent;
  border: 1px solid var(--j-success);
  color: var(--j-success);
}

.badge-outline-error {
  background-color: transparent;
  border: 1px solid var(--j-error);
  color: var(--j-error);
}

/* Badge Sizes */
.badge-sm {
  padding: 0 0.375rem;
  font-size: 0.6875rem;
  line-height: 1rem;
}

.badge-lg {
  padding: 0.25rem 0.625rem;
  font-size: 0.8125rem;
  line-height: 1.5rem;
}

/* Badge Shapes */
.badge-pill {
  border-radius: var(--j-radius-full, 9999px);
}

.badge-square {
  border-radius: 0;
}

/* Badge Dot */
.badge-dot {
  padding: 0;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
}

.badge-dot-sm {
  width: 0.5rem;
  height: 0.5rem;
}

.badge-dot-lg {
  width: 0.75rem;
  height: 0.75rem;
}

/* Badge with Dot */
.badge-with-dot {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.badge-with-dot::before {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: currentColor;
}

/* Status Badges */
.badge-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.badge-status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: currentColor;
}

.badge-status-online .badge-status-dot {
  background-color: var(--j-success);
}

.badge-status-offline .badge-status-dot {
  background-color: var(--j-text-muted);
}

.badge-status-busy .badge-status-dot {
  background-color: var(--j-error);
}

.badge-status-away .badge-status-dot {
  background-color: var(--j-warning);
}

/* Animated Status Dot */
.badge-status-pulse .badge-status-dot {
  position: relative;
}

.badge-status-pulse .badge-status-dot::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: inherit;
  animation: j-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Count Badge */
.badge-count {
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.25rem;
  font-size: 0.6875rem;
  font-weight: 600;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.badge-count-sm {
  min-width: 1rem;
  height: 1rem;
  font-size: 0.625rem;
}

.badge-count-lg {
  min-width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
}

/* Badge on Element (Notification Badge) */
.badge-wrapper {
  position: relative;
  display: inline-flex;
}

.badge-indicator {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.badge-indicator-corner {
  top: -0.25rem;
  right: -0.25rem;
  transform: none;
}

/* Tag/Chip Style */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  font-size: 0.8125rem;
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.5rem);
  color: var(--j-text);
}

.tag-removable {
  padding-right: 0.25rem;
}

.tag-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  color: var(--j-text-muted);
  transition: all 150ms ease-in-out;
}

.tag-remove:hover {
  background-color: var(--j-bg-muted);
  color: var(--j-text);
}

.tag-remove svg {
  width: 0.75rem;
  height: 0.75rem;
}

/* Tag Colors */
.tag-primary {
  background-color: color-mix(in srgb, var(--j-primary) 10%, var(--j-bg));
  border-color: var(--j-primary);
  color: var(--j-primary);
}

.tag-secondary {
  background-color: color-mix(in srgb, var(--j-secondary) 10%, var(--j-bg));
  border-color: var(--j-secondary);
  color: var(--j-secondary);
}

.tag-success {
  background-color: color-mix(in srgb, var(--j-success) 10%, var(--j-bg));
  border-color: var(--j-success);
  color: var(--j-success);
}

.tag-error {
  background-color: color-mix(in srgb, var(--j-error) 10%, var(--j-bg));
  border-color: var(--j-error);
  color: var(--j-error);
}

/* Tag Group */
.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Glow Badge (Futuristic) */
.badge-glow {
  box-shadow: 0 0 10px currentColor;
}

.badge-glow-primary {
  background-color: var(--j-primary);
  color: white;
  box-shadow: 0 0 15px var(--j-primary);
}

.badge-glow-secondary {
  background-color: var(--j-secondary);
  color: white;
  box-shadow: 0 0 15px var(--j-secondary);
}
`;
}
