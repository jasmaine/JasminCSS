// Dropdown/Menu component for JasminCSS

export function generateDropdownStyles(config) {
  return `/* Dropdown Base */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.dropdown-toggle::after {
  content: "";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform 200ms ease-in-out;
  margin-top: -0.125rem;
}

.dropdown.open .dropdown-toggle::after,
.dropdown-toggle[aria-expanded="true"]::after {
  transform: rotate(-135deg);
  margin-top: 0.125rem;
}

.dropdown-toggle-no-caret::after {
  display: none;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 12rem;
  padding: 0.5rem 0;
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

.dropdown.open .dropdown-menu,
.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Dropdown Position Variants */
.dropdown-menu-right,
.dropdown-menu-end {
  left: auto;
  right: 0;
}

.dropdown-menu-center {
  left: 50%;
  transform: translateX(-50%) translateY(-0.5rem);
}

.dropdown.open .dropdown-menu-center,
.dropdown-menu-center.show {
  transform: translateX(-50%) translateY(0);
}

/* Dropup */
.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.25rem;
  transform: translateY(0.5rem);
}

.dropup.open .dropdown-menu,
.dropup .dropdown-menu.show {
  transform: translateY(0);
}

.dropup .dropdown-toggle::after {
  transform: rotate(-135deg);
  margin-top: 0.125rem;
}

.dropup.open .dropdown-toggle::after {
  transform: rotate(45deg);
  margin-top: -0.125rem;
}

/* Dropleft/Dropright */
.dropleft .dropdown-menu {
  top: 0;
  left: auto;
  right: 100%;
  margin-top: 0;
  margin-right: 0.25rem;
}

.dropright .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: 0;
  margin-left: 0.25rem;
}

/* Dropdown Items */
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: var(--j-text);
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease-in-out, color 150ms ease-in-out;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: var(--j-bg-subtle);
  color: var(--j-text);
  outline: none;
}

.dropdown-item:active {
  background-color: var(--j-bg-muted);
}

.dropdown-item.active,
.dropdown-item[aria-current="true"] {
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
  color: var(--j-primary);
}

.dropdown-item:disabled,
.dropdown-item.disabled {
  color: var(--j-text-muted);
  pointer-events: none;
  background-color: transparent;
}

/* Dropdown Item Icon */
.dropdown-item-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  opacity: 0.7;
}

/* Dropdown Item Description */
.dropdown-item-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.dropdown-item-description {
  font-size: 0.75rem;
  color: var(--j-text-muted);
}

/* Dropdown Header */
.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--j-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Dropdown Divider */
.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  border-top: 1px solid var(--j-border);
}

/* Dropdown with Check/Radio */
.dropdown-item-check {
  padding-left: 2.5rem;
  position: relative;
}

.dropdown-item-check::before {
  content: "";
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--j-border);
  border-radius: 0.25rem;
}

.dropdown-item-check.checked::before {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
}

.dropdown-item-check.checked::after {
  content: "";
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-60%) rotate(45deg);
  width: 0.375rem;
  height: 0.625rem;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
}

/* Dropdown Sizes */
.dropdown-menu-sm {
  min-width: 8rem;
  font-size: 0.8125rem;
}

.dropdown-menu-sm .dropdown-item {
  padding: 0.375rem 0.75rem;
}

.dropdown-menu-lg {
  min-width: 18rem;
}

.dropdown-menu-lg .dropdown-item {
  padding: 0.75rem 1rem;
}

.dropdown-menu-xl {
  min-width: 24rem;
}

/* Dropdown with Search */
.dropdown-search {
  padding: 0.5rem;
  border-bottom: 1px solid var(--j-border);
}

.dropdown-search-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.375rem);
  background-color: var(--j-bg);
  color: var(--j-text);
}

.dropdown-search-input:focus {
  outline: none;
  border-color: var(--j-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--j-primary) 20%, transparent);
}

/* Dropdown Scrollable */
.dropdown-menu-scrollable {
  max-height: 20rem;
  overflow-y: auto;
}

/* Dropdown Dark Variant */
.dropdown-menu-dark {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
  color: white;
}

.dropdown-menu-dark .dropdown-item {
  color: rgba(255, 255, 255, 0.9);
}

.dropdown-menu-dark .dropdown-item:hover,
.dropdown-menu-dark .dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.dropdown-menu-dark .dropdown-header {
  color: rgba(255, 255, 255, 0.5);
}

.dropdown-menu-dark .dropdown-divider {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Dropdown Glass Effect */
.dropdown-menu-glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.dark .dropdown-menu-glass {
  background: rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Mega Menu */
.dropdown-mega {
  position: static;
}

.dropdown-mega .dropdown-menu {
  width: 100%;
  left: 0;
  right: 0;
  padding: 1.5rem;
}

.dropdown-mega-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.dropdown-mega-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dropdown-mega-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--j-text);
  margin-bottom: 0.5rem;
}

/* Context Menu */
.context-menu {
  position: fixed;
  z-index: 9999;
}

.context-menu .dropdown-menu {
  position: relative;
  display: block;
  opacity: 1;
  visibility: visible;
  transform: none;
  margin: 0;
}

/* Nested Dropdown */
.dropdown-submenu {
  position: relative;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -0.5rem;
  margin-left: 0.25rem;
}

.dropdown-submenu .dropdown-toggle::after {
  transform: rotate(-45deg);
  margin-left: auto;
}

.dropdown-submenu:hover > .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Select Dropdown */
.dropdown-select {
  width: 100%;
}

.dropdown-select .dropdown-toggle {
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.375rem);
  background-color: var(--j-bg);
}

.dropdown-select .dropdown-menu {
  width: 100%;
}
`;
}
