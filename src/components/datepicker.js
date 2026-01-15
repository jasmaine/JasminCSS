// Datepicker/Calendar component for JasminCSS

export function generateDatepickerStyles(config) {
  return `/* Datepicker Container */
.datepicker {
  position: relative;
  display: inline-block;
  width: 100%;
}

/* Datepicker Input */
.datepicker-input {
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

.datepicker-input:focus {
  border-color: var(--j-primary);
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

.datepicker-icon {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: var(--j-text-muted);
  pointer-events: none;
}

/* Calendar Dropdown */
.datepicker-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 280px;
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

.datepicker.open .datepicker-dropdown,
.datepicker-dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Calendar */
.calendar {
  padding: 1rem;
}

/* Calendar Header */
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.calendar-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--j-text);
}

.calendar-nav {
  display: flex;
  gap: 0.25rem;
}

.calendar-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--j-radius-default, 0.375rem);
  color: var(--j-text-muted);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.calendar-nav-btn:hover {
  background-color: var(--j-bg-subtle);
  color: var(--j-text);
}

.calendar-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Weekday Headers */
.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  margin-bottom: 0.5rem;
}

.calendar-weekday {
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  color: var(--j-text-muted);
  text-transform: uppercase;
}

/* Calendar Grid */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.125rem;
}

/* Calendar Day */
.calendar-day {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  font-size: 0.875rem;
  background: transparent;
  border: none;
  border-radius: var(--j-radius-default, 0.375rem);
  color: var(--j-text);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.calendar-day:hover:not(:disabled):not(.calendar-day-selected) {
  background-color: var(--j-bg-subtle);
}

.calendar-day:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--j-primary);
}

/* Day States */
.calendar-day-today {
  font-weight: 600;
  color: var(--j-primary);
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
}

.calendar-day-selected {
  background-color: var(--j-primary);
  color: white;
  font-weight: 600;
}

.calendar-day-selected:hover {
  background-color: color-mix(in srgb, var(--j-primary) 85%, black);
}

.calendar-day-outside {
  color: var(--j-text-muted);
  opacity: 0.5;
}

.calendar-day-disabled,
.calendar-day:disabled {
  color: var(--j-text-muted);
  opacity: 0.3;
  cursor: not-allowed;
}

.calendar-day-weekend {
  color: var(--j-error);
}

/* Range Selection */
.calendar-day-range-start {
  background-color: var(--j-primary);
  color: white;
  border-radius: var(--j-radius-default, 0.375rem) 0 0 var(--j-radius-default, 0.375rem);
}

.calendar-day-range-end {
  background-color: var(--j-primary);
  color: white;
  border-radius: 0 var(--j-radius-default, 0.375rem) var(--j-radius-default, 0.375rem) 0;
}

.calendar-day-range-middle {
  background-color: color-mix(in srgb, var(--j-primary) 15%, transparent);
  color: var(--j-primary);
  border-radius: 0;
}

/* Month/Year Picker */
.calendar-months,
.calendar-years {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.5rem;
}

.calendar-month,
.calendar-year {
  padding: 0.75rem 0.5rem;
  font-size: 0.875rem;
  text-align: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--j-radius-default, 0.375rem);
  color: var(--j-text);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.calendar-month:hover,
.calendar-year:hover {
  background-color: var(--j-bg-subtle);
}

.calendar-month.selected,
.calendar-year.selected {
  background-color: var(--j-primary);
  color: white;
}

.calendar-month.current,
.calendar-year.current {
  border-color: var(--j-primary);
  color: var(--j-primary);
}

/* Calendar Footer */
.calendar-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--j-border);
}

.calendar-today-btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
  color: var(--j-primary);
  background: transparent;
  border: none;
  cursor: pointer;
}

.calendar-today-btn:hover {
  text-decoration: underline;
}

.calendar-clear-btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
  color: var(--j-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
}

.calendar-clear-btn:hover {
  color: var(--j-text);
}

/* Datepicker Sizes */
.datepicker-sm .datepicker-input {
  padding: 0.375rem 2rem 0.375rem 0.75rem;
  font-size: 0.8125rem;
}

.datepicker-sm .datepicker-icon {
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
}

.datepicker-sm .calendar {
  min-width: 240px;
}

.datepicker-sm .calendar-day {
  width: 1.75rem;
  height: 1.75rem;
  font-size: 0.75rem;
}

.datepicker-lg .datepicker-input {
  padding: 0.875rem 3rem 0.875rem 1rem;
  font-size: 1rem;
}

.datepicker-lg .calendar {
  min-width: 320px;
}

.datepicker-lg .calendar-day {
  width: 2.5rem;
  height: 2.5rem;
}

/* Inline Calendar */
.calendar-inline {
  display: block;
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
}

/* Dark Variant */
.datepicker-dark .datepicker-dropdown,
.calendar-dark {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
  color: white;
}

.datepicker-dark .calendar-title,
.calendar-dark .calendar-title {
  color: white;
}

.datepicker-dark .calendar-day,
.calendar-dark .calendar-day {
  color: white;
}

.datepicker-dark .calendar-day:hover:not(:disabled),
.calendar-dark .calendar-day:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.1);
}

.datepicker-dark .calendar-footer,
.calendar-dark .calendar-footer {
  border-color: var(--j-border-dark, #374151);
}

/* Glass Variant */
.datepicker-glass .datepicker-dropdown,
.calendar-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Date Range Picker */
.daterange-picker {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.daterange-picker .datepicker {
  flex: 1;
}

.daterange-separator {
  color: var(--j-text-muted);
}

/* Multiple Month View */
.calendar-multi {
  display: flex;
  gap: 1rem;
}

.calendar-multi .calendar {
  border-right: 1px solid var(--j-border);
  padding-right: 1rem;
}

.calendar-multi .calendar:last-child {
  border-right: none;
  padding-right: 0;
}

/* With Time */
.datepicker-datetime .datepicker-dropdown {
  min-width: 320px;
}

.calendar-time {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-top: 1px solid var(--j-border);
}

.calendar-time-input {
  width: 3rem;
  padding: 0.375rem 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.375rem);
  background-color: var(--j-bg);
  color: var(--j-text);
}

.calendar-time-input:focus {
  outline: none;
  border-color: var(--j-primary);
}

.calendar-time-separator {
  font-size: 1rem;
  font-weight: 600;
  color: var(--j-text-muted);
}

.calendar-time-period {
  display: flex;
  gap: 0.25rem;
}

.calendar-time-period-btn {
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-sm, 0.25rem);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.calendar-time-period-btn:hover {
  background-color: var(--j-bg-muted);
}

.calendar-time-period-btn.active {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

/* Preset Ranges */
.datepicker-presets {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  border-right: 1px solid var(--j-border);
  min-width: 140px;
}

.datepicker-preset {
  padding: 0.5rem 0.75rem;
  font-size: 0.8125rem;
  text-align: left;
  background: transparent;
  border: none;
  border-radius: var(--j-radius-default, 0.375rem);
  color: var(--j-text);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.datepicker-preset:hover {
  background-color: var(--j-bg-subtle);
}

.datepicker-preset.active {
  background-color: color-mix(in srgb, var(--j-primary) 15%, transparent);
  color: var(--j-primary);
}

/* Events/Markers */
.calendar-day-event {
  position: relative;
}

.calendar-day-event::after {
  content: "";
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: var(--j-primary);
}

.calendar-day-event-multiple::after {
  width: 0.5rem;
  border-radius: var(--j-radius-full, 9999px);
}
`;
}
