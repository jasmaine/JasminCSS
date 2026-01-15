// Timepicker component for JasminCSS

export function generateTimepickerStyles(config) {
  return `/* Timepicker Container */
.timepicker {
  position: relative;
  display: inline-block;
  width: 100%;
}

/* Timepicker Input */
.timepicker-input {
  width: 100%;
  padding: 0.625rem 2.5rem 0.625rem 0.875rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--j-text);
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.5rem);
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
}

.timepicker-input:focus {
  border-color: var(--j-primary);
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

.timepicker-icon {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: var(--j-text-muted);
  pointer-events: none;
}

/* Timepicker Dropdown */
.timepicker-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 200px;
  margin-top: 0.25rem;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-0.5rem);
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out, visibility 150ms;
}

.timepicker.open .timepicker-dropdown,
.timepicker-dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Time Columns */
.timepicker-columns {
  display: flex;
  height: 200px;
}

.timepicker-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-right: 1px solid var(--j-border);
  scrollbar-width: thin;
}

.timepicker-column:last-child {
  border-right: none;
}

.timepicker-column::-webkit-scrollbar {
  width: 4px;
}

.timepicker-column::-webkit-scrollbar-thumb {
  background-color: var(--j-border);
  border-radius: 4px;
}

/* Column Header */
.timepicker-column-header {
  position: sticky;
  top: 0;
  padding: 0.5rem;
  font-size: 0.6875rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: var(--j-text-muted);
  background-color: var(--j-bg-subtle);
  border-bottom: 1px solid var(--j-border);
}

/* Time Options */
.timepicker-option {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  text-align: center;
  background: transparent;
  border: none;
  color: var(--j-text);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.timepicker-option:hover {
  background-color: var(--j-bg-subtle);
}

.timepicker-option.selected {
  background-color: var(--j-primary);
  color: white;
  font-weight: 500;
}

.timepicker-option:disabled {
  color: var(--j-text-muted);
  opacity: 0.4;
  cursor: not-allowed;
}

/* Inline Time Input */
.timepicker-inline {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.timepicker-segment {
  width: 3rem;
  padding: 0.625rem 0.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.375rem);
  color: var(--j-text);
  transition: all 150ms ease-in-out;
}

.timepicker-segment:focus {
  outline: none;
  border-color: var(--j-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

.timepicker-separator {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--j-text-muted);
}

/* AM/PM Toggle */
.timepicker-period {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  margin-left: 0.5rem;
}

.timepicker-period-btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.timepicker-period-btn:first-child {
  border-radius: var(--j-radius-sm, 0.25rem) var(--j-radius-sm, 0.25rem) 0 0;
  border-bottom: none;
}

.timepicker-period-btn:last-child {
  border-radius: 0 0 var(--j-radius-sm, 0.25rem) var(--j-radius-sm, 0.25rem);
}

.timepicker-period-btn:hover {
  background-color: var(--j-bg-muted);
}

.timepicker-period-btn.active {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

/* Timepicker Sizes */
.timepicker-sm .timepicker-input {
  padding: 0.375rem 2rem 0.375rem 0.75rem;
  font-size: 0.8125rem;
}

.timepicker-sm .timepicker-segment {
  width: 2.5rem;
  padding: 0.375rem;
  font-size: 0.875rem;
}

.timepicker-lg .timepicker-input {
  padding: 0.875rem 3rem 0.875rem 1rem;
  font-size: 1rem;
}

.timepicker-lg .timepicker-segment {
  width: 3.5rem;
  padding: 0.75rem;
  font-size: 1.125rem;
}

/* Clock Face Style */
.timepicker-clock {
  padding: 1rem;
}

.timepicker-clock-face {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: var(--j-bg-subtle);
  border: 2px solid var(--j-border);
}

.timepicker-clock-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--j-primary);
}

.timepicker-clock-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 2px;
  height: 35%;
  background-color: var(--j-primary);
  transform-origin: bottom center;
  border-radius: 1px;
}

.timepicker-clock-number {
  position: absolute;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--j-text);
  cursor: pointer;
  border-radius: 50%;
  transition: all 150ms ease-in-out;
}

.timepicker-clock-number:hover {
  background-color: var(--j-bg-muted);
}

.timepicker-clock-number.selected {
  background-color: var(--j-primary);
  color: white;
}

/* Timepicker Footer */
.timepicker-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-top: 1px solid var(--j-border);
}

.timepicker-now-btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
  color: var(--j-primary);
  background: transparent;
  border: none;
  cursor: pointer;
}

.timepicker-now-btn:hover {
  text-decoration: underline;
}

.timepicker-actions {
  display: flex;
  gap: 0.5rem;
}

/* Duration Picker */
.duration-picker {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.duration-segment {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.duration-segment-label {
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--j-text-muted);
}

.duration-segment-input {
  width: 3.5rem;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.375rem);
  color: var(--j-text);
}

.duration-segment-input:focus {
  outline: none;
  border-color: var(--j-primary);
}

.duration-separator {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--j-text-muted);
  margin-top: 1rem;
}

/* Time Range */
.timerange-picker {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.timerange-picker .timepicker {
  flex: 1;
}

.timerange-separator {
  color: var(--j-text-muted);
  font-weight: 500;
}

/* Quick Time Presets */
.timepicker-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding: 0.75rem;
  border-bottom: 1px solid var(--j-border);
}

.timepicker-preset {
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-full, 9999px);
  color: var(--j-text);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.timepicker-preset:hover {
  background-color: var(--j-bg-muted);
}

.timepicker-preset.active {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

/* Timezone Selector */
.timepicker-timezone {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  color: var(--j-text-muted);
  border-top: 1px solid var(--j-border);
}

.timepicker-timezone-select {
  flex: 1;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-sm, 0.25rem);
  color: var(--j-text);
}

/* Dark Variant */
.timepicker-dark .timepicker-dropdown {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
}

.timepicker-dark .timepicker-column {
  border-color: var(--j-border-dark, #374151);
}

.timepicker-dark .timepicker-column-header {
  background-color: rgba(0, 0, 0, 0.2);
  border-color: var(--j-border-dark, #374151);
}

.timepicker-dark .timepicker-option {
  color: white;
}

.timepicker-dark .timepicker-option:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.timepicker-dark .timepicker-footer {
  border-color: var(--j-border-dark, #374151);
}

/* Glass Variant */
.timepicker-glass .timepicker-dropdown {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.3);
}

/* 24-Hour Format */
.timepicker-24h .timepicker-period {
  display: none;
}

/* Seconds Support */
.timepicker-with-seconds .timepicker-columns {
  min-width: 250px;
}

/* Readonly Display */
.timepicker-display {
  display: inline-flex;
  align-items: baseline;
  gap: 0.125rem;
  font-family: ui-monospace, monospace;
  font-size: 2rem;
  font-weight: 600;
  color: var(--j-text);
}

.timepicker-display-period {
  font-size: 1rem;
  font-weight: 500;
  color: var(--j-text-muted);
  margin-left: 0.25rem;
}

/* Countdown Timer Style */
.timer-display {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ui-monospace, monospace;
}

.timer-segment {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--j-bg-subtle);
  border-radius: var(--j-radius-lg, 0.5rem);
}

.timer-segment-value {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  color: var(--j-text);
}

.timer-segment-label {
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--j-text-muted);
  margin-top: 0.25rem;
}

.timer-separator {
  font-size: 2rem;
  font-weight: 700;
  color: var(--j-text-muted);
}
`;
}
