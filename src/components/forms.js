export function generateFormStyles(config) {
  return `/* Form Controls */
.form-control {
  display: block;
  width: 100%;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--j-text);
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-inputs, var(--j-radius-default, 0.5rem));
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
  appearance: none;
}

.form-control::placeholder {
  color: var(--j-text-muted);
}

.form-control:focus {
  border-color: var(--j-primary);
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

.form-control:disabled {
  background-color: var(--j-bg-muted);
  opacity: 0.6;
  cursor: not-allowed;
}

.form-control[readonly] {
  background-color: var(--j-bg-subtle);
}

/* Form Control Sizes */
.form-control-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
}

.form-control-lg {
  padding: 0.875rem 1rem;
  font-size: 1rem;
}

/* Textarea */
textarea.form-control {
  min-height: 80px;
  resize: vertical;
}

/* Select - Same height as text inputs */
select.form-control {
  height: calc(2.5rem + 2px); /* Match text input height exactly */
  padding-right: 2.5rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}

select.form-control-sm {
  height: calc(2rem + 2px);
}

select.form-control-lg {
  height: calc(3rem + 2px);
}

/* File Input */
input[type="file"].form-control {
  padding: 0.375rem;
}

input[type="file"].form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin-right: 0.75rem;
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-sm, 0.25rem);
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
}

input[type="file"].form-control::file-selector-button:hover {
  background-color: var(--j-bg-muted);
}

/* Color Input */
input[type="color"].form-control {
  padding: 0.25rem;
  height: 2.5rem;
  cursor: pointer;
}

/* Range Input */
input[type="range"].form-control {
  padding: 0;
  border: none;
  background: transparent;
  height: 1.5rem;
}

input[type="range"].form-control::-webkit-slider-track {
  width: 100%;
  height: 0.5rem;
  background: var(--j-bg-muted);
  border-radius: var(--j-radius-full, 9999px);
}

input[type="range"].form-control::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.375rem;
  background: var(--j-primary);
  border-radius: 50%;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
}

input[type="range"].form-control::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

/* Validation States */
.form-control.is-valid {
  border-color: var(--j-success);
}

.form-control.is-valid:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-success) 20%, transparent);
}

.form-control.is-invalid {
  border-color: var(--j-error);
}

.form-control.is-invalid:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-error) 20%, transparent);
}

/* Form Label */
.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--j-text);
}

.form-label-required::after {
  content: " *";
  color: var(--j-error);
}

/* Form Text (Help Text) */
.form-text {
  display: block;
  margin-top: 0.375rem;
  font-size: 0.8125rem;
  color: var(--j-text-subtle);
}

.form-text-error {
  color: var(--j-error);
}

.form-text-success {
  color: var(--j-success);
}

/* Form Group */
.form-group {
  margin-bottom: 1rem;
}

/* Checkbox & Radio */
.form-check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0;
  margin-bottom: 0.5rem;
}

.form-check-input {
  width: 1.125rem;
  height: 1.125rem;
  margin: 0;
  appearance: none;
  background-color: var(--j-bg);
  border: 2px solid var(--j-border);
  cursor: pointer;
  flex-shrink: 0;
  transition: all 150ms ease-in-out;
}

.form-check-input[type="checkbox"] {
  border-radius: var(--j-radius-sm, 0.25rem);
}

.form-check-input[type="radio"] {
  border-radius: 50%;
}

.form-check-input:checked {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
}

.form-check-input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.form-check-input[type="radio"]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
}

.form-check-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

.form-check-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-check-label {
  font-size: 0.875rem;
  color: var(--j-text);
  cursor: pointer;
  user-select: none;
}

/* Switch/Toggle */
.form-switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-switch-input {
  width: 2.5rem;
  height: 1.5rem;
  appearance: none;
  background-color: var(--j-bg-muted);
  border-radius: var(--j-radius-full, 9999px);
  cursor: pointer;
  position: relative;
  transition: background-color 200ms ease-in-out;
}

.form-switch-input::before {
  content: "";
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 200ms ease-in-out;
}

.form-switch-input:checked {
  background-color: var(--j-primary);
}

.form-switch-input:checked::before {
  transform: translateX(1rem);
}

.form-switch-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

.form-switch-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Switch Sizes */
.form-switch-sm .form-switch-input {
  width: 2rem;
  height: 1.125rem;
}

.form-switch-sm .form-switch-input::before {
  width: 0.875rem;
  height: 0.875rem;
}

.form-switch-sm .form-switch-input:checked::before {
  transform: translateX(0.875rem);
}

.form-switch-lg .form-switch-input {
  width: 3.5rem;
  height: 2rem;
}

.form-switch-lg .form-switch-input::before {
  width: 1.75rem;
  height: 1.75rem;
}

.form-switch-lg .form-switch-input:checked::before {
  transform: translateX(1.5rem);
}

/* Switch Colors */
.form-switch-secondary .form-switch-input:checked {
  background-color: var(--j-secondary);
}

.form-switch-secondary .form-switch-input:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-secondary) 20%, transparent);
}

.form-switch-success .form-switch-input:checked {
  background-color: var(--j-success);
}

.form-switch-success .form-switch-input:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-success) 20%, transparent);
}

.form-switch-warning .form-switch-input:checked {
  background-color: var(--j-warning);
}

.form-switch-warning .form-switch-input:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-warning) 20%, transparent);
}

.form-switch-error .form-switch-input:checked {
  background-color: var(--j-error);
}

.form-switch-error .form-switch-input:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-error) 20%, transparent);
}

.form-switch-info .form-switch-input:checked {
  background-color: var(--j-info);
}

.form-switch-info .form-switch-input:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-info) 20%, transparent);
}

/* Switch with Label Inside */
.form-switch-labeled .form-switch-input {
  width: 4rem;
}

.form-switch-labeled .form-switch-input::after {
  content: "OFF";
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.625rem;
  font-weight: 600;
  color: var(--j-text-muted);
}

.form-switch-labeled .form-switch-input:checked::after {
  content: "ON";
  left: 0.5rem;
  right: auto;
  color: white;
}

/* Switch with Icons */
.form-switch-icon .form-switch-input::before {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

/* Square Switch */
.form-switch-square .form-switch-input {
  border-radius: var(--j-radius-inputs, var(--j-radius-default, 0.375rem));
}

.form-switch-square .form-switch-input::before {
  border-radius: var(--j-radius-sm, 0.25rem);
}

/* Glow Switch */
.form-switch-glow .form-switch-input:checked {
  box-shadow: 0 0 15px var(--j-primary);
}

/* Input Group */
.input-group {
  display: flex;
  width: 100%;
}

.input-group > .form-control {
  flex: 1;
  min-width: 0;
}

.input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group > .form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: var(--j-text-subtle);
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  white-space: nowrap;
}

.input-group-text:first-child {
  border-right: none;
  border-radius: var(--j-radius-inputs, 0.5rem) 0 0 var(--j-radius-inputs, 0.5rem);
}

.input-group-text:last-child {
  border-left: none;
  border-radius: 0 var(--j-radius-inputs, 0.5rem) var(--j-radius-inputs, 0.5rem) 0;
}

.input-group > .btn:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .btn:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Floating Label */
.form-floating {
  position: relative;
}

.form-floating > .form-control {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}

.form-floating > .form-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 0.875rem;
  pointer-events: none;
  transform-origin: 0 0;
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
  color: var(--j-text-muted);
  margin-bottom: 0;
}

.form-floating > .form-control:focus ~ .form-label,
.form-floating > .form-control:not(:placeholder-shown) ~ .form-label {
  transform: scale(0.85) translateY(-0.5rem));
  color: var(--j-primary);
}

/* Form Row/Grid */
.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* Fieldset */
fieldset {
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-inputs, var(--j-radius-default, 0.5rem));
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

legend {
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0 0.5rem;
  color: var(--j-text);
}

/* Form Futuristic Glow */
.form-control-glow:focus {
  border-color: var(--j-primary);
  box-shadow: 0 0 15px color-mix(in srgb, var(--j-primary) 40%, transparent);
}
`;
}
