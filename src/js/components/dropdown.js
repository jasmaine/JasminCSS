/**
 * JasminCSS Dropdown Component
 * Handles dropdown menus with keyboard navigation and accessibility
 */

class Dropdown {
  constructor(element, options = {}) {
    this.element = element;
    this.toggleBtn = element.querySelector('[data-dropdown-toggle]') || element.querySelector('.dropdown-toggle');
    this.menu = element.querySelector('[data-dropdown-menu]') || element.querySelector('.dropdown-menu');
    this.isOpen = false;
    this.options = {
      closeOnClickOutside: true,
      closeOnEscape: true,
      closeOnItemClick: true,
      ...options
    };

    if (!this.toggleBtn || !this.menu) return;

    this.init();
  }

  init() {
    // Toggle click
    this.toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle();
    });

    // Keyboard navigation
    this.element.addEventListener('keydown', (e) => this.handleKeydown(e));

    // Close on click outside
    if (this.options.closeOnClickOutside) {
      document.addEventListener('click', (e) => {
        if (this.isOpen && !this.element.contains(e.target)) {
          this.close();
        }
      });
    }

    // Close on escape
    if (this.options.closeOnEscape) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
          this.toggleBtn.focus();
        }
      });
    }

    // Close on item click
    if (this.options.closeOnItemClick) {
      this.menu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => this.close());
      });
    }

    // Set ARIA attributes
    this.toggleBtn.setAttribute('aria-haspopup', 'true');
    this.toggleBtn.setAttribute('aria-expanded', 'false');
    this.menu.setAttribute('role', 'menu');
    this.menu.querySelectorAll('.dropdown-item').forEach(item => {
      item.setAttribute('role', 'menuitem');
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.element.classList.add('open');
    this.menu.classList.add('show');
    this.toggleBtn.setAttribute('aria-expanded', 'true');

    // Focus first item
    const firstItem = this.menu.querySelector('.dropdown-item:not([disabled])');
    if (firstItem) firstItem.focus();

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('dropdown:open', { detail: { dropdown: this } }));
  }

  close() {
    this.isOpen = false;
    this.element.classList.remove('open');
    this.menu.classList.remove('show');
    this.toggleBtn.setAttribute('aria-expanded', 'false');

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('dropdown:close', { detail: { dropdown: this } }));
  }

  handleKeydown(e) {
    const items = Array.from(this.menu.querySelectorAll('.dropdown-item:not([disabled])'));
    const currentIndex = items.indexOf(document.activeElement);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!this.isOpen) {
          this.open();
        } else {
          const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          items[nextIndex]?.focus();
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (this.isOpen) {
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          items[prevIndex]?.focus();
        }
        break;

      case 'Home':
        e.preventDefault();
        items[0]?.focus();
        break;

      case 'End':
        e.preventDefault();
        items[items.length - 1]?.focus();
        break;

      case 'Enter':
      case ' ':
        if (document.activeElement === this.toggleBtn) {
          e.preventDefault();
          this.toggle();
        }
        break;

      case 'Tab':
        this.close();
        break;
    }
  }

  destroy() {
    this.close();
    this.toggleBtn.removeAttribute('aria-haspopup');
    this.toggleBtn.removeAttribute('aria-expanded');
  }

  // Static method to initialize all dropdowns
  static initAll(selector = '[data-dropdown]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminDropdown) {
        el._jasminDropdown = new Dropdown(el);
      }
    });
  }

  // Static method to get instance
  static getInstance(element) {
    return element._jasminDropdown;
  }
}

export default Dropdown;
