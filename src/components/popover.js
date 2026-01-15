// Popover component for JasminCSS

export function generatePopoverStyles(config) {
  return `/* Popover Base */
.popover {
  position: absolute;
  z-index: 1070;
  max-width: 276px;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 150ms ease-in-out, visibility 150ms;
}

.popover.show {
  opacity: 1;
  visibility: visible;
}

/* Popover Arrow */
.popover-arrow {
  position: absolute;
  width: 1rem;
  height: 0.5rem;
}

.popover-arrow::before,
.popover-arrow::after {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: transparent;
}

/* Arrow Positions */
.popover[data-placement^="top"] .popover-arrow {
  bottom: -0.5rem;
}

.popover[data-placement^="top"] .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: var(--j-border);
}

.popover[data-placement^="top"] .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: var(--j-bg);
}

.popover[data-placement^="bottom"] .popover-arrow {
  top: -0.5rem;
}

.popover[data-placement^="bottom"] .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem;
  border-bottom-color: var(--j-border);
}

.popover[data-placement^="bottom"] .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem;
  border-bottom-color: var(--j-bg);
}

.popover[data-placement^="left"] .popover-arrow {
  right: -0.5rem;
  width: 0.5rem;
  height: 1rem;
}

.popover[data-placement^="left"] .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: var(--j-border);
}

.popover[data-placement^="left"] .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: var(--j-bg);
}

.popover[data-placement^="right"] .popover-arrow {
  left: -0.5rem;
  width: 0.5rem;
  height: 1rem;
}

.popover[data-placement^="right"] .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: var(--j-border);
}

.popover[data-placement^="right"] .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: var(--j-bg);
}

/* Popover Header */
.popover-header {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--j-text);
  background-color: var(--j-bg-subtle);
  border-bottom: 1px solid var(--j-border);
  border-radius: calc(var(--j-radius-lg, 0.5rem) - 1px) calc(var(--j-radius-lg, 0.5rem) - 1px) 0 0;
  margin: 0;
}

/* Popover Body */
.popover-body {
  padding: 1rem;
  color: var(--j-text);
  font-size: 0.875rem;
}

/* Popover Close */
.popover-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--j-radius-sm, 0.25rem);
  color: var(--j-text-muted);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.popover-close:hover {
  background-color: var(--j-bg-muted);
  color: var(--j-text);
}

.popover-close::before {
  content: "×";
  font-size: 1.25rem;
  line-height: 1;
}

/* Popover Sizes */
.popover-sm {
  max-width: 200px;
}

.popover-sm .popover-header {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}

.popover-sm .popover-body {
  padding: 0.75rem;
  font-size: 0.8125rem;
}

.popover-lg {
  max-width: 400px;
}

.popover-lg .popover-body {
  padding: 1.25rem;
}

.popover-xl {
  max-width: 500px;
}

.popover-full {
  max-width: calc(100vw - 2rem);
}

/* Popover Without Arrow */
.popover-no-arrow .popover-arrow {
  display: none;
}

/* Popover Colors */
.popover-primary {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

.popover-primary .popover-header {
  background-color: color-mix(in srgb, var(--j-primary) 85%, black);
  border-color: color-mix(in srgb, var(--j-primary) 70%, black);
  color: white;
}

.popover-primary .popover-body {
  color: white;
}

.popover-primary[data-placement^="top"] .popover-arrow::before,
.popover-primary[data-placement^="top"] .popover-arrow::after {
  border-top-color: var(--j-primary);
}

.popover-primary[data-placement^="bottom"] .popover-arrow::before,
.popover-primary[data-placement^="bottom"] .popover-arrow::after {
  border-bottom-color: var(--j-primary);
}

.popover-dark {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
  color: white;
}

.popover-dark .popover-header {
  background-color: rgba(0, 0, 0, 0.2);
  border-color: var(--j-border-dark, #374151);
  color: white;
}

.popover-dark .popover-body {
  color: rgba(255, 255, 255, 0.9);
}

.popover-dark[data-placement^="top"] .popover-arrow::before {
  border-top-color: var(--j-border-dark, #374151);
}

.popover-dark[data-placement^="top"] .popover-arrow::after {
  border-top-color: var(--j-bg-dark, #1f2937);
}

.popover-dark[data-placement^="bottom"] .popover-arrow::before {
  border-bottom-color: var(--j-border-dark, #374151);
}

.popover-dark[data-placement^="bottom"] .popover-arrow::after {
  border-bottom-color: var(--j-bg-dark, #1f2937);
}

/* Glass Popover */
.popover-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.3);
}

.popover-glass .popover-header {
  background-color: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.1);
}

.dark .popover-glass {
  background: rgba(0, 0, 0, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .popover-glass .popover-header {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Popover Animation Variants */
.popover-fade {
  transition: opacity 200ms ease-in-out;
}

.popover-scale {
  transform: scale(0.9);
  transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
}

.popover-scale.show {
  transform: scale(1);
}

.popover-slide-up {
  transform: translateY(0.5rem);
  transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
}

.popover-slide-up.show {
  transform: translateY(0);
}

/* Popover with Image */
.popover-image {
  padding: 0;
  overflow: hidden;
}

.popover-image img {
  width: 100%;
  height: auto;
  display: block;
}

.popover-image .popover-body {
  padding: 1rem;
}

/* Popover Menu */
.popover-menu {
  padding: 0.5rem 0;
}

.popover-menu .popover-body {
  padding: 0;
}

.popover-menu-item {
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

.popover-menu-item:hover {
  background-color: var(--j-bg-subtle);
}

.popover-menu-item-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  opacity: 0.7;
}

.popover-menu-divider {
  height: 0;
  margin: 0.5rem 0;
  border-top: 1px solid var(--j-border);
}

/* Confirmation Popover */
.popover-confirm .popover-body {
  text-align: center;
}

.popover-confirm-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.popover-confirm-text {
  color: var(--j-text-muted);
  margin-bottom: 1rem;
}

.popover-confirm-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

/* Profile Popover */
.popover-profile {
  min-width: 280px;
}

.popover-profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--j-border);
}

.popover-profile-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

.popover-profile-info {
  flex: 1;
}

.popover-profile-name {
  font-weight: 600;
  color: var(--j-text);
}

.popover-profile-email {
  font-size: 0.75rem;
  color: var(--j-text-muted);
}

/* Trigger Wrapper */
.popover-trigger {
  position: relative;
  display: inline-block;
}

/* Hover Trigger */
.popover-hover:hover .popover {
  opacity: 1;
  visibility: visible;
}

/* Focus Trigger */
.popover-focus:focus-within .popover {
  opacity: 1;
  visibility: visible;
}
`;
}
