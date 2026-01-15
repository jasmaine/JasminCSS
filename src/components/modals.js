export function generateModalStyles(config) {
  return `/* Modal Overlay/Backdrop */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: var(--j-z-modal-backdrop, 1040);
  opacity: 0;
  transition: opacity 200ms ease-out;
}

.modal-backdrop.show {
  opacity: 1;
}

/* Modal Container */
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: var(--j-z-modal, 1050);
  overflow-y: auto;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease-out;
}

.modal.show {
  opacity: 1;
  pointer-events: auto;
}

/* Modal Dialog */
.modal-dialog {
  position: relative;
  width: 100%;
  max-width: 500px;
  background-color: var(--j-bg);
  border-radius: var(--j-radius-lg, 0.75rem);
  box-shadow: var(--j-shadow-xl);
  transform: scale(0.95) translateY(-20px);
  transition: transform 200ms ease-out;
}

.modal.show .modal-dialog {
  transform: scale(1) translateY(0);
}

/* Modal Sizes */
.modal-sm .modal-dialog {
  max-width: 360px;
}

.modal-lg .modal-dialog {
  max-width: 700px;
}

.modal-xl .modal-dialog {
  max-width: 900px;
}

.modal-full .modal-dialog {
  max-width: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
}

/* Modal Positions */
.modal-top {
  align-items: flex-start;
  padding-top: 3rem;
}

.modal-bottom {
  align-items: flex-end;
  padding-bottom: 3rem;
}

/* Modal Content */
.modal-content {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 4rem);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--j-border);
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--j-text);
  margin: 0;
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--j-radius-default, 0.5rem);
  cursor: pointer;
  color: var(--j-text-muted);
  transition: all 150ms ease-in-out;
}

.modal-close:hover {
  background-color: var(--j-bg-subtle);
  color: var(--j-text);
}

.modal-close svg {
  width: 1.25rem;
  height: 1.25rem;
}

.modal-body {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--j-border);
}

.modal-footer-between {
  justify-content: space-between;
}

/* Modal without Header Border */
.modal-borderless .modal-header {
  border-bottom: none;
  padding-bottom: 0;
}

.modal-borderless .modal-footer {
  border-top: none;
  padding-top: 0;
}

/* Centered Content Modal */
.modal-centered .modal-body {
  text-align: center;
}

.modal-centered .modal-footer {
  justify-content: center;
}

/* Glass Modal */
.modal-glass .modal-dialog {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-glass .modal-header {
  border-color: rgba(255, 255, 255, 0.1);
}

.modal-glass .modal-footer {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Drawer (Slide-in Modal) */
.drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  background-color: var(--j-bg);
  box-shadow: var(--j-shadow-xl);
  z-index: var(--j-z-modal, 1050);
  transition: transform 300ms ease-out;
}

.drawer-left {
  left: 0;
  transform: translateX(-100%);
}

.drawer-left.show {
  transform: translateX(0);
}

.drawer-right {
  right: 0;
  transform: translateX(100%);
}

.drawer-right.show {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--j-border);
}

.drawer-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--j-text);
}

.drawer-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--j-radius-default, 0.5rem);
  cursor: pointer;
  color: var(--j-text-muted);
  transition: all 150ms ease-in-out;
}

.drawer-close:hover {
  background-color: var(--j-bg-subtle);
  color: var(--j-text);
}

.drawer-body {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.drawer-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--j-border);
}

/* Drawer Sizes */
.drawer-sm {
  max-width: 300px;
}

.drawer-lg {
  max-width: 500px;
}

.drawer-xl {
  max-width: 700px;
}

.drawer-full {
  max-width: 100%;
}

/* Bottom Drawer */
.drawer-bottom {
  top: auto;
  left: 0;
  right: 0;
  max-width: 100%;
  max-height: 80vh;
  border-radius: var(--j-radius-lg, 0.75rem) var(--j-radius-lg, 0.75rem) 0 0;
  transform: translateY(100%);
}

.drawer-bottom.show {
  transform: translateY(0);
}

/* Confirm Dialog */
.dialog-confirm {
  text-align: center;
}

.dialog-confirm .modal-body {
  padding: 2rem 1.5rem;
}

.dialog-confirm-icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--j-bg-subtle);
}

.dialog-confirm-icon svg {
  width: 2rem;
  height: 2rem;
}

.dialog-confirm-icon.danger {
  background-color: color-mix(in srgb, var(--j-error) 15%, transparent);
  color: var(--j-error);
}

.dialog-confirm-icon.warning {
  background-color: color-mix(in srgb, var(--j-warning) 15%, transparent);
  color: var(--j-warning);
}

.dialog-confirm-icon.success {
  background-color: color-mix(in srgb, var(--j-success) 15%, transparent);
  color: var(--j-success);
}

.dialog-confirm-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.dialog-confirm-message {
  color: var(--j-text-subtle);
  font-size: 0.875rem;
}

.dialog-confirm .modal-footer {
  justify-content: center;
  border-top: none;
}
`;
}
