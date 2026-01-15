// Offcanvas/Drawer component for JasminCSS

export function generateOffcanvasStyles(config) {
  return `/* Offcanvas Base */
.offcanvas {
  position: fixed;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: var(--j-bg);
  background-clip: padding-box;
  outline: 0;
  transition: transform 300ms ease-in-out;
  visibility: hidden;
}

.offcanvas.show {
  visibility: visible;
}

/* Offcanvas Backdrop */
.offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms ease-in-out, visibility 300ms;
}

.offcanvas-backdrop.show {
  opacity: 1;
  visibility: visible;
}

.offcanvas-backdrop.fade {
  opacity: 0;
}

/* Offcanvas Positions */
.offcanvas-start {
  top: 0;
  left: 0;
  width: 400px;
  height: 100vh;
  border-right: 1px solid var(--j-border);
  transform: translateX(-100%);
}

.offcanvas-start.show {
  transform: translateX(0);
}

.offcanvas-end {
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  border-left: 1px solid var(--j-border);
  transform: translateX(100%);
}

.offcanvas-end.show {
  transform: translateX(0);
}

.offcanvas-top {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  max-height: 100vh;
  border-bottom: 1px solid var(--j-border);
  transform: translateY(-100%);
}

.offcanvas-top.show {
  transform: translateY(0);
}

.offcanvas-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  max-height: 100vh;
  border-top: 1px solid var(--j-border);
  transform: translateY(100%);
}

.offcanvas-bottom.show {
  transform: translateY(0);
}

/* Offcanvas Sizes */
.offcanvas-sm {
  width: 300px;
}

.offcanvas-lg {
  width: 500px;
}

.offcanvas-xl {
  width: 600px;
}

.offcanvas-full {
  width: 100%;
}

.offcanvas-top.offcanvas-sm,
.offcanvas-bottom.offcanvas-sm {
  height: 200px;
  width: 100%;
}

.offcanvas-top.offcanvas-lg,
.offcanvas-bottom.offcanvas-lg {
  height: 400px;
  width: 100%;
}

/* Offcanvas Header */
.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--j-border);
}

.offcanvas-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--j-text);
}

.offcanvas-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: var(--j-radius-default, 0.375rem);
  cursor: pointer;
  color: var(--j-text-muted);
  transition: all 150ms ease-in-out;
}

.offcanvas-close:hover {
  background-color: var(--j-bg-subtle);
  color: var(--j-text);
}

.offcanvas-close svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Default X icon */
.offcanvas-close::before {
  content: "×";
  font-size: 1.5rem;
  line-height: 1;
}

.offcanvas-close:has(svg)::before {
  display: none;
}

/* Offcanvas Body */
.offcanvas-body {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.offcanvas-body-flush {
  padding: 0;
}

/* Offcanvas Footer */
.offcanvas-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--j-border);
}

.offcanvas-footer-end {
  justify-content: flex-end;
}

.offcanvas-footer-between {
  justify-content: space-between;
}

/* No Backdrop Variant */
.offcanvas-no-backdrop + .offcanvas-backdrop {
  display: none;
}

/* Static Backdrop (no close on click) */
.offcanvas-static .offcanvas-backdrop {
  cursor: default;
}

/* Scroll Body When Open */
body.offcanvas-open {
  overflow: hidden;
  padding-right: var(--j-scrollbar-width, 0);
}

/* Responsive Offcanvas */
@media (min-width: 576px) {
  .offcanvas-sm-show {
    visibility: visible;
    transform: none;
  }
}

@media (min-width: 768px) {
  .offcanvas-md-show {
    visibility: visible;
    transform: none;
  }
}

@media (min-width: 1024px) {
  .offcanvas-lg-show {
    visibility: visible;
    transform: none;
  }
}

@media (min-width: 1280px) {
  .offcanvas-xl-show {
    visibility: visible;
    transform: none;
  }
}

/* Dark Variant */
.offcanvas-dark {
  background-color: var(--j-bg-dark, #1f2937);
  color: white;
  border-color: var(--j-border-dark, #374151);
}

.offcanvas-dark .offcanvas-header {
  border-color: var(--j-border-dark, #374151);
}

.offcanvas-dark .offcanvas-title {
  color: white;
}

.offcanvas-dark .offcanvas-close {
  color: rgba(255, 255, 255, 0.7);
}

.offcanvas-dark .offcanvas-close:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.offcanvas-dark .offcanvas-footer {
  border-color: var(--j-border-dark, #374151);
}

/* Glass Variant */
.offcanvas-glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.3);
}

.dark .offcanvas-glass {
  background: rgba(0, 0, 0, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
}

.offcanvas-glass .offcanvas-header,
.offcanvas-glass .offcanvas-footer {
  border-color: rgba(0, 0, 0, 0.1);
}

.dark .offcanvas-glass .offcanvas-header,
.dark .offcanvas-glass .offcanvas-footer {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Push Content Variant */
.offcanvas-push ~ .page-content {
  transition: transform 300ms ease-in-out;
}

.offcanvas-push.offcanvas-start.show ~ .page-content {
  transform: translateX(400px);
}

.offcanvas-push.offcanvas-end.show ~ .page-content {
  transform: translateX(-400px);
}

/* Slide Over (Mini variant for notifications, etc.) */
.offcanvas-mini {
  width: 320px;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
}

.offcanvas-mini.offcanvas-start {
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
}

/* Stacked Offcanvas */
.offcanvas-stacked {
  z-index: 1060;
}

.offcanvas-stacked + .offcanvas-backdrop {
  z-index: 1055;
}

/* Navigation Drawer */
.offcanvas-nav {
  width: 280px;
}

.offcanvas-nav .offcanvas-body {
  padding: 0;
}

.offcanvas-nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: var(--j-text);
  text-decoration: none;
  transition: background-color 150ms ease-in-out;
}

.offcanvas-nav-item:hover {
  background-color: var(--j-bg-subtle);
}

.offcanvas-nav-item.active {
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
  color: var(--j-primary);
}

.offcanvas-nav-item-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  opacity: 0.7;
}

.offcanvas-nav-divider {
  height: 0;
  margin: 0.5rem 0;
  border-top: 1px solid var(--j-border);
}

.offcanvas-nav-header {
  padding: 0.75rem 1.5rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--j-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
`;
}
