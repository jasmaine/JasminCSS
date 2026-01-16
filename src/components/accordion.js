// Accordion component for JasminCSS

export function generateAccordionStyles(config) {
  return `/* Accordion Base */
.accordion {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid var(--j-border);
}

.accordion-item:last-child {
  border-bottom: none;
}

/* Accordion Header/Trigger */
.accordion-header {
  margin: 0;
}

.accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  color: var(--j-text);
  background-color: var(--j-bg);
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
}

.accordion-trigger:hover {
  background-color: var(--j-bg-subtle);
}

.accordion-trigger:focus {
  outline: none;
  background-color: var(--j-bg-subtle);
}

.accordion-trigger:focus-visible {
  outline: 2px solid var(--j-primary);
  outline-offset: -2px;
}

/* Accordion Icon */
.accordion-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  transition: transform 200ms ease-in-out;
}

.accordion-trigger[aria-expanded="true"] .accordion-icon,
.accordion-item.open .accordion-icon {
  transform: rotate(180deg);
}

/* Default chevron icon using CSS */
.accordion-trigger::after {
  content: "";
  width: 0.625rem;
  height: 0.625rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform 200ms ease-in-out;
  flex-shrink: 0;
}

.accordion-trigger[aria-expanded="true"]::after,
.accordion-item.open .accordion-trigger::after {
  transform: rotate(-135deg);
}

.accordion-trigger-no-icon::after {
  display: none;
}

/* Plus/Minus Icon Variant */
.accordion-icon-plus .accordion-trigger::after {
  width: 1rem;
  height: 1rem;
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 4v16m8-8H4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  transform: none;
}

.accordion-icon-plus .accordion-trigger[aria-expanded="true"]::after,
.accordion-icon-plus .accordion-item.open .accordion-trigger::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20 12H4'/%3E%3C/svg%3E");
  transform: none;
}

/* Accordion Content/Panel */
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 200ms ease-in-out;
}

.accordion-trigger[aria-expanded="true"] + .accordion-content,
.accordion-item.open .accordion-content {
  grid-template-rows: 1fr;
}

.accordion-body {
  overflow: hidden;
  padding: 1rem 1.25rem;
  color: var(--j-text-muted);
}

.accordion-body-inner {
  padding: 1rem 1.25rem;
  color: var(--j-text-muted);
}

/* Accordion Variants */

/* Flush - No outer borders */
.accordion-flush {
  border: none;
  border-radius: 0;
}

.accordion-flush .accordion-item {
  border-left: none;
  border-right: none;
}

.accordion-flush .accordion-item:first-child {
  border-top: none;
}

.accordion-flush .accordion-item:last-child {
  border-bottom: 1px solid var(--j-border);
}

/* Bordered - Each item has full border */
.accordion-bordered .accordion-item {
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.accordion-bordered .accordion-item:last-child {
  margin-bottom: 0;
  border-bottom: 1px solid var(--j-border);
}

.accordion-bordered .accordion-trigger {
  border-radius: calc(var(--j-radius-lg, 0.5rem) - 1px);
}

.accordion-bordered .accordion-item.open .accordion-trigger {
  border-radius: calc(var(--j-radius-lg, 0.5rem) - 1px) calc(var(--j-radius-lg, 0.5rem) - 1px) 0 0;
}

/* Separated - Items have gap between them */
.accordion-separated {
  border: none;
  gap: 0.5rem;
}

.accordion-separated .accordion-item {
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
}

/* Filled Header */
.accordion-filled .accordion-trigger {
  background-color: var(--j-bg-subtle);
}

.accordion-filled .accordion-trigger:hover {
  background-color: var(--j-bg-muted);
}

/* Highlighted Active */
.accordion-highlight .accordion-trigger[aria-expanded="true"],
.accordion-highlight .accordion-item.open .accordion-trigger {
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
  color: var(--j-primary);
}

/* Left Icon Position */
.accordion-icon-left .accordion-trigger {
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 0.75rem;
}

.accordion-icon-left .accordion-trigger::after {
  margin-right: 0;
}

/* Sizes */
.accordion-sm .accordion-trigger {
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
}

.accordion-sm .accordion-body-inner {
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
}

.accordion-lg .accordion-trigger {
  padding: 1.25rem 1.5rem;
  font-size: 1.125rem;
}

.accordion-lg .accordion-body-inner {
  padding: 1.25rem 1.5rem;
}

/* With Left Border Accent */
.accordion-accent .accordion-item.open,
.accordion-accent .accordion-trigger[aria-expanded="true"] {
  border-left: 3px solid var(--j-primary);
}

.accordion-accent-primary .accordion-item.open {
  border-left-color: var(--j-primary);
}

.accordion-accent-success .accordion-item.open {
  border-left-color: var(--j-success);
}

.accordion-accent-warning .accordion-item.open {
  border-left-color: var(--j-warning);
}

.accordion-accent-error .accordion-item.open {
  border-left-color: var(--j-error);
}

/* Dark Variant */
.accordion-dark {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
}

.accordion-dark .accordion-trigger {
  background-color: var(--j-bg-dark, #1f2937);
  color: white;
}

.accordion-dark .accordion-trigger:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.accordion-dark .accordion-item {
  border-color: var(--j-border-dark, #374151);
}

.accordion-dark .accordion-body-inner {
  color: rgba(255, 255, 255, 0.7);
}

/* Glass Effect */
.accordion-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.2);
}

.accordion-glass .accordion-trigger {
  background-color: transparent;
}

.accordion-glass .accordion-trigger:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.accordion-glass .accordion-item {
  border-color: rgba(255, 255, 255, 0.2);
}

/* Nested Accordion */
.accordion-nested {
  margin: 0.5rem 0 0 1rem;
  border: 1px solid var(--j-border);
}

/* FAQ Style */
.accordion-faq .accordion-trigger {
  font-weight: 600;
}

.accordion-faq .accordion-trigger::before {
  content: "Q:";
  margin-right: 0.5rem;
  color: var(--j-primary);
  font-weight: 700;
}

.accordion-faq .accordion-body-inner::before {
  content: "A:";
  font-weight: 700;
  color: var(--j-primary);
  margin-right: 0.5rem;
}
`;
}
