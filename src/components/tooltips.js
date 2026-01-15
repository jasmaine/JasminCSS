export function generateTooltipStyles(config) {
  return `/* Tooltip Base */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  z-index: var(--j-z-tooltip, 1070);
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: white;
  background-color: var(--j-gray-900, #18181b);
  border-radius: var(--j-radius-default, 0.5rem);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 150ms ease-in-out, visibility 150ms ease-in-out;
}

.tooltip:hover .tooltip-content,
.tooltip:focus .tooltip-content,
.tooltip.show .tooltip-content {
  opacity: 1;
  visibility: visible;
}

/* Tooltip Arrow */
.tooltip-content::after {
  content: "";
  position: absolute;
  border: 5px solid transparent;
}

/* Tooltip Positions */
.tooltip-top .tooltip-content {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;
}

.tooltip-top .tooltip-content::after {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--j-gray-900, #18181b);
}

.tooltip-bottom .tooltip-content {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
}

.tooltip-bottom .tooltip-content::after {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: var(--j-gray-900, #18181b);
}

.tooltip-left .tooltip-content {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  margin-right: 0.5rem;
}

.tooltip-left .tooltip-content::after {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  border-left-color: var(--j-gray-900, #18181b);
}

.tooltip-right .tooltip-content {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: 0.5rem;
}

.tooltip-right .tooltip-content::after {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  border-right-color: var(--j-gray-900, #18181b);
}

/* Tooltip Variants */
.tooltip-light .tooltip-content {
  color: var(--j-text);
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  box-shadow: var(--j-shadow-lg);
}

.tooltip-light.tooltip-top .tooltip-content::after {
  border-top-color: var(--j-bg);
}

.tooltip-light.tooltip-bottom .tooltip-content::after {
  border-bottom-color: var(--j-bg);
}

.tooltip-light.tooltip-left .tooltip-content::after {
  border-left-color: var(--j-bg);
}

.tooltip-light.tooltip-right .tooltip-content::after {
  border-right-color: var(--j-bg);
}

/* Tooltip Colors */
.tooltip-primary .tooltip-content {
  background-color: var(--j-primary);
}

.tooltip-primary.tooltip-top .tooltip-content::after {
  border-top-color: var(--j-primary);
}

.tooltip-primary.tooltip-bottom .tooltip-content::after {
  border-bottom-color: var(--j-primary);
}

.tooltip-secondary .tooltip-content {
  background-color: var(--j-secondary);
}

.tooltip-success .tooltip-content {
  background-color: var(--j-success);
}

.tooltip-error .tooltip-content {
  background-color: var(--j-error);
}

/* Tooltip Sizes */
.tooltip-sm .tooltip-content {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.tooltip-lg .tooltip-content {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Multiline Tooltip */
.tooltip-multiline .tooltip-content {
  white-space: normal;
  width: max-content;
  max-width: 250px;
  text-align: center;
}

/* Popover */
.popover {
  position: relative;
  display: inline-block;
}

.popover-content {
  position: absolute;
  z-index: var(--j-z-popover, 1060);
  min-width: 200px;
  max-width: 300px;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.75rem);
  box-shadow: var(--j-shadow-lg);
  opacity: 0;
  visibility: hidden;
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
}

.popover:hover .popover-content,
.popover.show .popover-content {
  opacity: 1;
  visibility: visible;
}

.popover-header {
  padding: 0.75rem 1rem;
  font-weight: 600;
  border-bottom: 1px solid var(--j-border);
}

.popover-body {
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: var(--j-text-subtle);
}

/* Popover Positions */
.popover-top .popover-content {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.75rem;
}

.popover-bottom .popover-content {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.75rem;
}

.popover-left .popover-content {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  margin-right: 0.75rem;
}

.popover-right .popover-content {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: 0.75rem;
}

/* Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: var(--j-z-dropdown, 1000);
  min-width: 10rem;
  padding: 0.5rem 0;
  margin-top: 0.25rem;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.75rem);
  box-shadow: var(--j-shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out, visibility 150ms ease-in-out, transform 150ms ease-in-out;
}

.dropdown.show .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-right {
  left: auto;
  right: 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: var(--j-text);
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
}

.dropdown-item:hover {
  background-color: var(--j-bg-subtle);
}

.dropdown-item:focus {
  background-color: var(--j-bg-subtle);
  outline: none;
}

.dropdown-item.active {
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
  color: var(--j-primary);
}

.dropdown-item:disabled,
.dropdown-item.disabled {
  color: var(--j-text-muted);
  pointer-events: none;
}

.dropdown-item-icon {
  width: 1rem;
  height: 1rem;
  opacity: 0.7;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  border-top: 1px solid var(--j-border);
}

.dropdown-header {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--j-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Dropdown with Arrow */
.dropdown-menu-arrow::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 1rem;
  width: 12px;
  height: 12px;
  background-color: var(--j-bg);
  border-left: 1px solid var(--j-border);
  border-top: 1px solid var(--j-border);
  transform: rotate(45deg);
}

.dropdown-menu-right.dropdown-menu-arrow::before {
  left: auto;
  right: 1rem;
}
`;
}
