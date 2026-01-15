/**
 * JasminCSS Tooltip Component
 * Handles tooltips with positioning and accessibility
 */

class Tooltip {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      placement: 'top',
      trigger: 'hover focus',
      delay: { show: 0, hide: 0 },
      html: false,
      ...options
    };

    this.tooltip = null;
    this.isVisible = false;
    this.showTimeout = null;
    this.hideTimeout = null;

    this.init();
  }

  init() {
    const content = this.element.dataset.tooltip || this.element.getAttribute('title');
    if (!content) return;

    // Remove native title to prevent double tooltip
    this.element.removeAttribute('title');
    this.element.dataset.tooltip = content;

    // Set ARIA
    this.element.setAttribute('aria-describedby', '');

    // Bind events based on trigger
    const triggers = this.options.trigger.split(' ');

    if (triggers.includes('hover')) {
      this.element.addEventListener('mouseenter', () => this.show());
      this.element.addEventListener('mouseleave', () => this.hide());
    }

    if (triggers.includes('focus')) {
      this.element.addEventListener('focus', () => this.show());
      this.element.addEventListener('blur', () => this.hide());
    }

    if (triggers.includes('click')) {
      this.element.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    }
  }

  createTooltip() {
    const content = this.element.dataset.tooltip;

    this.tooltip = document.createElement('div');
    this.tooltip.className = `tooltip tooltip-${this.options.placement}`;
    this.tooltip.setAttribute('role', 'tooltip');
    this.tooltip.id = `tooltip-${Date.now()}`;

    const inner = document.createElement('div');
    inner.className = 'tooltip-inner';

    if (this.options.html) {
      inner.innerHTML = content;
    } else {
      inner.textContent = content;
    }

    const arrow = document.createElement('div');
    arrow.className = 'tooltip-arrow';

    this.tooltip.appendChild(inner);
    this.tooltip.appendChild(arrow);

    document.body.appendChild(this.tooltip);
    this.element.setAttribute('aria-describedby', this.tooltip.id);

    this.position();
  }

  position() {
    if (!this.tooltip) return;

    const rect = this.element.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let top, left;

    switch (this.options.placement) {
      case 'top':
        top = rect.top + scrollY - tooltipRect.height - 8;
        left = rect.left + scrollX + (rect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = rect.bottom + scrollY + 8;
        left = rect.left + scrollX + (rect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = rect.top + scrollY + (rect.height - tooltipRect.height) / 2;
        left = rect.left + scrollX - tooltipRect.width - 8;
        break;
      case 'right':
        top = rect.top + scrollY + (rect.height - tooltipRect.height) / 2;
        left = rect.right + scrollX + 8;
        break;
    }

    // Boundary checks
    if (left < 0) left = 8;
    if (left + tooltipRect.width > window.innerWidth) {
      left = window.innerWidth - tooltipRect.width - 8;
    }

    this.tooltip.style.top = `${top}px`;
    this.tooltip.style.left = `${left}px`;
  }

  show() {
    clearTimeout(this.hideTimeout);

    this.showTimeout = setTimeout(() => {
      if (!this.tooltip) {
        this.createTooltip();
      }

      this.tooltip.classList.add('show');
      this.isVisible = true;

      this.element.dispatchEvent(new CustomEvent('tooltip:show', { detail: { tooltip: this } }));
    }, this.options.delay.show);
  }

  hide() {
    clearTimeout(this.showTimeout);

    this.hideTimeout = setTimeout(() => {
      if (this.tooltip) {
        this.tooltip.classList.remove('show');

        setTimeout(() => {
          this.tooltip?.remove();
          this.tooltip = null;
          this.element.setAttribute('aria-describedby', '');
        }, 150);
      }

      this.isVisible = false;
      this.element.dispatchEvent(new CustomEvent('tooltip:hide', { detail: { tooltip: this } }));
    }, this.options.delay.hide);
  }

  toggle() {
    this.isVisible ? this.hide() : this.show();
  }

  updateContent(content) {
    this.element.dataset.tooltip = content;
    if (this.tooltip) {
      const inner = this.tooltip.querySelector('.tooltip-inner');
      if (this.options.html) {
        inner.innerHTML = content;
      } else {
        inner.textContent = content;
      }
      this.position();
    }
  }

  destroy() {
    this.hide();
    clearTimeout(this.showTimeout);
    clearTimeout(this.hideTimeout);
  }

  // Static methods
  static initAll(selector = '[data-tooltip]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminTooltip) {
        el._jasminTooltip = new Tooltip(el, {
          placement: el.dataset.tooltipPlacement || 'top',
          trigger: el.dataset.tooltipTrigger || 'hover focus',
          html: el.dataset.tooltipHtml === 'true'
        });
      }
    });
  }

  static getInstance(element) {
    return element._jasminTooltip;
  }
}

export default Tooltip;
