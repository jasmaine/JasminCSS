/**
 * JasminCSS Modal Component
 * Handles modal dialogs with focus trapping and accessibility
 */

class Modal {
  constructor(element, options = {}) {
    this.element = element;
    this.isOpen = false;
    this.previousActiveElement = null;
    this.options = {
      backdrop: true,
      keyboard: true,
      focus: true,
      ...options
    };

    this.backdrop = null;
    this.init();
  }

  init() {
    // Set ARIA attributes
    this.element.setAttribute('role', 'dialog');
    this.element.setAttribute('aria-modal', 'true');
    this.element.setAttribute('tabindex', '-1');

    // Close button handlers
    this.element.querySelectorAll('[data-modal-close], .modal-close').forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    // Keyboard handling
    this.element.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.options.keyboard) {
        this.close();
      }
      if (e.key === 'Tab') {
        this.trapFocus(e);
      }
    });
  }

  open() {
    if (this.isOpen) return;

    this.previousActiveElement = document.activeElement;
    this.isOpen = true;

    // Create backdrop
    if (this.options.backdrop) {
      this.backdrop = document.createElement('div');
      this.backdrop.className = 'modal-backdrop show';
      document.body.appendChild(this.backdrop);

      if (this.options.backdrop !== 'static') {
        this.backdrop.addEventListener('click', () => this.close());
      }
    }

    // Show modal
    this.element.classList.add('show');
    this.element.style.display = 'flex';
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // Focus management
    if (this.options.focus) {
      const autoFocus = this.element.querySelector('[autofocus]');
      const firstFocusable = this.getFocusableElements()[0];
      (autoFocus || firstFocusable || this.element).focus();
    }

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('modal:open', { detail: { modal: this } }));
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;

    // Remove backdrop
    if (this.backdrop) {
      this.backdrop.classList.remove('show');
      setTimeout(() => {
        this.backdrop?.remove();
        this.backdrop = null;
      }, 150);
    }

    // Hide modal
    this.element.classList.remove('show');
    setTimeout(() => {
      if (!this.isOpen) {
        this.element.style.display = 'none';
      }
    }, 150);

    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';

    // Restore focus
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('modal:close', { detail: { modal: this } }));
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  getFocusableElements() {
    return Array.from(this.element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.disabled && el.offsetParent !== null);
  }

  trapFocus(e) {
    const focusable = this.getFocusableElements();
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  destroy() {
    this.close();
  }

  // Static methods
  static initAll(selector = '[data-modal]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminModal) {
        el._jasminModal = new Modal(el);
      }
    });

    // Init triggers
    document.querySelectorAll('[data-modal-target]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(trigger.dataset.modalTarget);
        if (target?._jasminModal) {
          target._jasminModal.open();
        }
      });
    });
  }

  static getInstance(element) {
    return element._jasminModal;
  }
}

export default Modal;
