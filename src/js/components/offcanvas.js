/**
 * JasminCSS Offcanvas Component
 * Handles slide-out panels/drawers with focus trapping
 */

class Offcanvas {
  constructor(element, options = {}) {
    this.element = element;
    this.isOpen = false;
    this.previousActiveElement = null;
    this.options = {
      backdrop: true,
      keyboard: true,
      scroll: false, // Allow body scroll when open
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
    this.element.querySelectorAll('[data-offcanvas-close], .offcanvas-close').forEach(btn => {
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
      this.backdrop.className = 'offcanvas-backdrop';
      document.body.appendChild(this.backdrop);

      // Trigger reflow for animation
      this.backdrop.offsetHeight;
      this.backdrop.classList.add('show');

      if (this.options.backdrop !== 'static') {
        this.backdrop.addEventListener('click', () => this.close());
      }
    }

    // Show offcanvas
    this.element.classList.add('show');

    // Body scroll
    if (!this.options.scroll) {
      document.body.classList.add('offcanvas-open');
      document.body.style.overflow = 'hidden';
    }

    // Focus first focusable element
    requestAnimationFrame(() => {
      const focusable = this.getFocusableElements()[0];
      (focusable || this.element).focus();
    });

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('offcanvas:open', { detail: { offcanvas: this } }));
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
      }, 300);
    }

    // Hide offcanvas
    this.element.classList.remove('show');

    // Restore body scroll
    document.body.classList.remove('offcanvas-open');
    document.body.style.overflow = '';

    // Restore focus
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('offcanvas:close', { detail: { offcanvas: this } }));
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
  static initAll(selector = '[data-offcanvas]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminOffcanvas) {
        el._jasminOffcanvas = new Offcanvas(el, {
          backdrop: el.dataset.offcanvasBackdrop !== 'false',
          keyboard: el.dataset.offcanvasKeyboard !== 'false',
          scroll: el.dataset.offcanvasScroll === 'true'
        });
      }
    });

    // Init triggers
    document.querySelectorAll('[data-offcanvas-target]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(trigger.dataset.offcanvasTarget);
        if (target?._jasminOffcanvas) {
          target._jasminOffcanvas.toggle();
        }
      });
    });
  }

  static getInstance(element) {
    return element._jasminOffcanvas;
  }
}

export default Offcanvas;
