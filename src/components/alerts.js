export function generateAlertStyles(config) {
  return `/* Alert Base */
.alert {
  position: relative;
  padding: 1rem 1.25rem;
  border-radius: var(--j-radius-default, 0.5rem);
  border: 1px solid transparent;
  font-size: 0.875rem;
  line-height: 1.5;
}

.alert-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.alert-description {
  opacity: 0.9;
}

.alert-icon {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
}

/* Alert with Icon */
.alert-with-icon {
  display: flex;
  gap: 0.75rem;
}

.alert-with-icon .alert-content {
  flex: 1;
}

/* Alert Variants */
.alert-info {
  background-color: color-mix(in srgb, var(--j-info) 10%, var(--j-bg));
  border-color: color-mix(in srgb, var(--j-info) 30%, transparent);
  color: var(--j-info);
}

.alert-success {
  background-color: color-mix(in srgb, var(--j-success) 10%, var(--j-bg));
  border-color: color-mix(in srgb, var(--j-success) 30%, transparent);
  color: var(--j-success);
}

.alert-warning {
  background-color: color-mix(in srgb, var(--j-warning) 10%, var(--j-bg));
  border-color: color-mix(in srgb, var(--j-warning) 30%, transparent);
  color: var(--j-warning);
}

.alert-error,
.alert-danger {
  background-color: color-mix(in srgb, var(--j-error) 10%, var(--j-bg));
  border-color: color-mix(in srgb, var(--j-error) 30%, transparent);
  color: var(--j-error);
}

.alert-primary {
  background-color: color-mix(in srgb, var(--j-primary) 10%, var(--j-bg));
  border-color: color-mix(in srgb, var(--j-primary) 30%, transparent);
  color: var(--j-primary);
}

.alert-secondary {
  background-color: color-mix(in srgb, var(--j-secondary) 10%, var(--j-bg));
  border-color: color-mix(in srgb, var(--j-secondary) 30%, transparent);
  color: var(--j-secondary);
}

/* Solid Alerts */
.alert-solid-info {
  background-color: var(--j-info);
  color: white;
}

.alert-solid-success {
  background-color: var(--j-success);
  color: white;
}

.alert-solid-warning {
  background-color: var(--j-warning);
  color: white;
}

.alert-solid-error,
.alert-solid-danger {
  background-color: var(--j-error);
  color: white;
}

.alert-solid-primary {
  background-color: var(--j-primary);
  color: white;
}

/* Outline Alerts */
.alert-outline-info {
  background-color: transparent;
  border-color: var(--j-info);
  color: var(--j-info);
}

.alert-outline-success {
  background-color: transparent;
  border-color: var(--j-success);
  color: var(--j-success);
}

.alert-outline-warning {
  background-color: transparent;
  border-color: var(--j-warning);
  color: var(--j-warning);
}

.alert-outline-error {
  background-color: transparent;
  border-color: var(--j-error);
  color: var(--j-error);
}

/* Left Border Alerts */
.alert-border-info {
  background-color: var(--j-bg-subtle);
  border-left: 4px solid var(--j-info);
  border-radius: 0;
  color: var(--j-text);
}

.alert-border-success {
  background-color: var(--j-bg-subtle);
  border-left: 4px solid var(--j-success);
  border-radius: 0;
  color: var(--j-text);
}

.alert-border-warning {
  background-color: var(--j-bg-subtle);
  border-left: 4px solid var(--j-warning);
  border-radius: 0;
  color: var(--j-text);
}

.alert-border-error {
  background-color: var(--j-bg-subtle);
  border-left: 4px solid var(--j-error);
  border-radius: 0;
  color: var(--j-text);
}

/* Dismissible Alert */
.alert-dismissible {
  padding-right: 3rem;
}

.alert-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 150ms ease-in-out;
  color: currentColor;
}

.alert-close:hover {
  opacity: 1;
}

.alert-close svg {
  width: 1rem;
  height: 1rem;
}

/* Alert Actions */
.alert-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

/* Toast Alert */
.toast {
  position: fixed;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  min-width: 300px;
  max-width: 420px;
  padding: 1rem;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.5rem);
  box-shadow: var(--j-shadow-lg);
  z-index: var(--j-z-toast, 1080);
  animation: j-slide-in-right 300ms ease-out;
}

.toast-top-right {
  top: 1rem;
  right: 1rem;
}

.toast-top-left {
  top: 1rem;
  left: 1rem;
}

.toast-bottom-right {
  bottom: 1rem;
  right: 1rem;
}

.toast-bottom-left {
  bottom: 1rem;
  left: 1rem;
}

.toast-top-center {
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
}

.toast-bottom-center {
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-weight: 600;
  color: var(--j-text);
  margin-bottom: 0.25rem;
}

.toast-message {
  font-size: 0.875rem;
  color: var(--j-text-subtle);
}

.toast-close {
  padding: 0.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--j-text-muted);
  transition: color 150ms ease-in-out;
}

.toast-close:hover {
  color: var(--j-text);
}

/* Toast Variants */
.toast-success {
  border-left: 4px solid var(--j-success);
}

.toast-error {
  border-left: 4px solid var(--j-error);
}

.toast-warning {
  border-left: 4px solid var(--j-warning);
}

.toast-info {
  border-left: 4px solid var(--j-info);
}

/* Toast Container */
.toast-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: var(--j-z-toast, 1080);
  pointer-events: none;
}

.toast-container > .toast {
  position: relative;
  pointer-events: auto;
}

.toast-container.top-right {
  top: 1rem;
  right: 1rem;
}

.toast-container.bottom-right {
  bottom: 1rem;
  right: 1rem;
  flex-direction: column-reverse;
}

/* Banner Alert */
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--j-primary);
  color: white;
  font-size: 0.875rem;
}

.banner-info {
  background-color: var(--j-info);
}

.banner-success {
  background-color: var(--j-success);
}

.banner-warning {
  background-color: var(--j-warning);
}

.banner-error {
  background-color: var(--j-error);
}

.banner a {
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
}

.banner-close {
  padding: 0.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.8;
}

.banner-close:hover {
  opacity: 1;
}
`;
}
