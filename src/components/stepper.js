// Stepper/Wizard component for JasminCSS

export function generateStepperStyles(config) {
  return `/* Stepper Base */
.stepper {
  display: flex;
  width: 100%;
}

.stepper-horizontal {
  flex-direction: row;
}

.stepper-vertical {
  flex-direction: column;
}

/* Stepper Item */
.stepper-item {
  display: flex;
  flex: 1;
  position: relative;
}

.stepper-horizontal .stepper-item {
  flex-direction: column;
  align-items: center;
}

.stepper-vertical .stepper-item {
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 2rem;
}

.stepper-vertical .stepper-item:last-child {
  padding-bottom: 0;
}

/* Stepper Connector Line */
.stepper-horizontal .stepper-item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 1.25rem;
  left: calc(50% + 1.25rem);
  right: calc(-50% + 1.25rem);
  height: 2px;
  background-color: var(--j-border);
  z-index: 0;
}

.stepper-horizontal .stepper-item.completed::after {
  background-color: var(--j-primary);
}

.stepper-vertical .stepper-item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 2.5rem;
  left: 1.1875rem;
  width: 2px;
  bottom: 0;
  background-color: var(--j-border);
}

.stepper-vertical .stepper-item.completed::after {
  background-color: var(--j-primary);
}

/* Stepper Indicator */
.stepper-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--j-bg-muted);
  border: 2px solid var(--j-border);
  color: var(--j-text-muted);
  font-size: 0.875rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
  transition: all 200ms ease-in-out;
  flex-shrink: 0;
}

.stepper-vertical .stepper-indicator {
  margin-right: 1rem;
}

/* Stepper States */
.stepper-item.active .stepper-indicator {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

.stepper-item.completed .stepper-indicator {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

.stepper-item.completed .stepper-indicator::before {
  content: "✓";
  font-size: 1rem;
}

.stepper-item.completed .stepper-number {
  display: none;
}

.stepper-item.error .stepper-indicator {
  background-color: var(--j-error);
  border-color: var(--j-error);
  color: white;
}

.stepper-item.error .stepper-indicator::before {
  content: "!";
  font-size: 1.25rem;
  font-weight: 700;
}

.stepper-item.error .stepper-number {
  display: none;
}

/* Stepper Content */
.stepper-content {
  text-align: center;
  margin-top: 0.75rem;
}

.stepper-vertical .stepper-content {
  text-align: left;
  margin-top: 0;
  flex: 1;
}

.stepper-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--j-text);
  margin: 0;
}

.stepper-item.active .stepper-title {
  color: var(--j-primary);
}

.stepper-item:not(.active):not(.completed) .stepper-title {
  color: var(--j-text-muted);
}

.stepper-description {
  font-size: 0.75rem;
  color: var(--j-text-muted);
  margin: 0.25rem 0 0;
}

/* Stepper with Icon */
.stepper-indicator-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Stepper Sizes */
.stepper-sm .stepper-indicator {
  width: 2rem;
  height: 2rem;
  font-size: 0.75rem;
}

.stepper-sm .stepper-horizontal .stepper-item:not(:last-child)::after {
  top: 1rem;
  left: calc(50% + 1rem);
  right: calc(-50% + 1rem);
}

.stepper-sm .stepper-title {
  font-size: 0.8125rem;
}

.stepper-lg .stepper-indicator {
  width: 3rem;
  height: 3rem;
  font-size: 1rem;
}

.stepper-lg .stepper-horizontal .stepper-item:not(:last-child)::after {
  top: 1.5rem;
  left: calc(50% + 1.5rem);
  right: calc(-50% + 1.5rem);
}

.stepper-lg .stepper-title {
  font-size: 1rem;
}

/* Stepper with Label Below Line */
.stepper-label-bottom .stepper-item {
  padding-top: 0.5rem;
}

.stepper-label-bottom .stepper-item:not(:last-child)::after {
  top: 0;
  height: 2px;
}

.stepper-label-bottom .stepper-indicator {
  margin-top: -0.5rem;
}

/* Stepper Clickable */
.stepper-clickable .stepper-item {
  cursor: pointer;
}

.stepper-clickable .stepper-item:hover .stepper-indicator {
  border-color: var(--j-primary);
}

.stepper-clickable .stepper-item:hover .stepper-title {
  color: var(--j-primary);
}

/* Stepper Colors */
.stepper-success .stepper-item.active .stepper-indicator,
.stepper-success .stepper-item.completed .stepper-indicator {
  background-color: var(--j-success);
  border-color: var(--j-success);
}

.stepper-success .stepper-item.completed::after {
  background-color: var(--j-success);
}

.stepper-warning .stepper-item.active .stepper-indicator,
.stepper-warning .stepper-item.completed .stepper-indicator {
  background-color: var(--j-warning);
  border-color: var(--j-warning);
}

.stepper-warning .stepper-item.completed::after {
  background-color: var(--j-warning);
}

/* Stepper Dot Style */
.stepper-dots .stepper-indicator {
  width: 1rem;
  height: 1rem;
  font-size: 0;
}

.stepper-dots .stepper-indicator::before {
  display: none;
}

.stepper-dots .stepper-item:not(:last-child)::after {
  top: 0.5rem;
  left: calc(50% + 0.5rem);
  right: calc(-50% + 0.5rem);
}

/* Stepper Progress Style */
.stepper-progress {
  position: relative;
  padding: 0 0 2rem;
}

.stepper-progress-bar {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  height: 2px;
  background-color: var(--j-border);
  z-index: 0;
}

.stepper-progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--j-primary);
  transition: width 300ms ease-in-out;
}

/* Stepper with Substeps */
.stepper-substeps {
  margin-top: 0.5rem;
  padding-left: 1rem;
}

.stepper-substep {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0;
  font-size: 0.75rem;
  color: var(--j-text-muted);
}

.stepper-substep-indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--j-border);
}

.stepper-substep.completed .stepper-substep-indicator {
  background-color: var(--j-primary);
}

/* Stepper Card Style */
.stepper-cards .stepper-item {
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
  padding: 1rem;
  margin: 0 0.25rem;
}

.stepper-cards .stepper-item::after {
  display: none;
}

.stepper-cards .stepper-item.active {
  border-color: var(--j-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

/* Stepper Compact */
.stepper-compact .stepper-indicator {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.625rem;
}

.stepper-compact .stepper-horizontal .stepper-item:not(:last-child)::after {
  top: 0.75rem;
}

.stepper-compact .stepper-title {
  font-size: 0.75rem;
}

.stepper-compact .stepper-description {
  display: none;
}

/* Animated Stepper */
.stepper-animated .stepper-item.active .stepper-indicator {
  animation: j-pulse 2s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .stepper-horizontal {
    flex-direction: column;
  }

  .stepper-horizontal .stepper-item {
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 1.5rem;
  }

  .stepper-horizontal .stepper-item:not(:last-child)::after {
    top: 2.5rem;
    left: 1.1875rem;
    right: auto;
    width: 2px;
    height: auto;
    bottom: 0;
  }

  .stepper-horizontal .stepper-content {
    text-align: left;
    margin-top: 0;
    margin-left: 1rem;
  }
}
`;
}
