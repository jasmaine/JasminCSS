/**
 * JasminCSS Popover Component
 * Handles popovers with rich content and positioning
 */

class Popover {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      placement: 'top',
      trigger: 'click',
      title: '',
      content: '',
      html: false,
      ...options
    };

    this.popover = null;
    this.isVisible = false;

    this.init();
  }

  init() {
    // Get content from data attributes or options
    this.options.title = this.element.dataset.popoverTitle || this.options.title;
    this.options.content = this.element.dataset.popoverContent || this.options.content;

    // Bind events based on trigger
    const triggers = this.options.trigger.split(' ');

    if (triggers.includes('click')) {
      this.element.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggle();
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (this.isVisible && !this.popover?.contains(e.target)) {
          this.hide();
        }
      });
    }

    if (triggers.includes('hover')) {
      this.element.addEventListener('mouseenter', () => this.show());
      this.element.addEventListener('mouseleave', () => this.hide());
    }

    if (triggers.includes('focus')) {
      this.element.addEventListener('focus', () => this.show());
      this.element.addEventListener('blur', () => this.hide());
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible) {
        this.hide();
        this.element.focus();
      }
    });
  }

  createPopover() {
    this.popover = document.createElement('div');
    this.popover.className = `popover popover-${this.options.placement}`;
    this.popover.setAttribute('role', 'tooltip');
    this.popover.id = `popover-${Date.now()}`;
    this.popover.dataset.placement = this.options.placement;

    // Header
    if (this.options.title) {
      const header = document.createElement('div');
      header.className = 'popover-header';
      if (this.options.html) {
        header.innerHTML = this.options.title;
      } else {
        header.textContent = this.options.title;
      }
      this.popover.appendChild(header);
    }

    // Body
    const body = document.createElement('div');
    body.className = 'popover-body';
    if (this.options.html) {
      body.innerHTML = this.options.content;
    } else {
      body.textContent = this.options.content;
    }
    this.popover.appendChild(body);

    // Arrow
    const arrow = document.createElement('div');
    arrow.className = 'popover-arrow';
    this.popover.appendChild(arrow);

    document.body.appendChild(this.popover);
    this.element.setAttribute('aria-describedby', this.popover.id);

    this.position();
  }

  position() {
    if (!this.popover) return;

    const rect = this.element.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let top, left;

    switch (this.options.placement) {
      case 'top':
        top = rect.top + scrollY - popoverRect.height - 10;
        left = rect.left + scrollX + (rect.width - popoverRect.width) / 2;
        break;
      case 'bottom':
        top = rect.bottom + scrollY + 10;
        left = rect.left + scrollX + (rect.width - popoverRect.width) / 2;
        break;
      case 'left':
        top = rect.top + scrollY + (rect.height - popoverRect.height) / 2;
        left = rect.left + scrollX - popoverRect.width - 10;
        break;
      case 'right':
        top = rect.top + scrollY + (rect.height - popoverRect.height) / 2;
        left = rect.right + scrollX + 10;
        break;
    }

    // Boundary checks
    if (left < 8) left = 8;
    if (left + popoverRect.width > window.innerWidth - 8) {
      left = window.innerWidth - popoverRect.width - 8;
    }
    if (top < 8) top = 8;

    this.popover.style.top = `${top}px`;
    this.popover.style.left = `${left}px`;
  }

  show() {
    if (!this.popover) {
      this.createPopover();
    }

    // Small delay for positioning
    requestAnimationFrame(() => {
      this.popover.classList.add('show');
      this.isVisible = true;
      this.element.dispatchEvent(new CustomEvent('popover:show', { detail: { popover: this } }));
    });
  }

  hide() {
    if (this.popover) {
      this.popover.classList.remove('show');

      setTimeout(() => {
        this.popover?.remove();
        this.popover = null;
        this.element.setAttribute('aria-describedby', '');
      }, 150);
    }

    this.isVisible = false;
    this.element.dispatchEvent(new CustomEvent('popover:hide', { detail: { popover: this } }));
  }

  toggle() {
    this.isVisible ? this.hide() : this.show();
  }

  updateContent(title, content) {
    this.options.title = title;
    this.options.content = content;

    if (this.popover) {
      const header = this.popover.querySelector('.popover-header');
      const body = this.popover.querySelector('.popover-body');

      if (header) {
        this.options.html ? (header.innerHTML = title) : (header.textContent = title);
      }
      if (body) {
        this.options.html ? (body.innerHTML = content) : (body.textContent = content);
      }

      this.position();
    }
  }

  destroy() {
    this.hide();
  }

  // Static methods
  static initAll(selector = '[data-popover]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminPopover) {
        el._jasminPopover = new Popover(el, {
          placement: el.dataset.popoverPlacement || 'top',
          trigger: el.dataset.popoverTrigger || 'click',
          title: el.dataset.popoverTitle || '',
          content: el.dataset.popoverContent || '',
          html: el.dataset.popoverHtml === 'true'
        });
      }
    });
  }

  static getInstance(element) {
    return element._jasminPopover;
  }
}

export default Popover;
