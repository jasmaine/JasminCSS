/**
 * JasminCSS Accordion Component
 * Handles collapsible accordion panels with accessibility
 */

class Accordion {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      alwaysOpen: false, // Allow multiple panels open
      ...options
    };
    this.items = [];

    this.init();
  }

  init() {
    const items = this.element.querySelectorAll('.accordion-item');

    items.forEach((item, index) => {
      const trigger = item.querySelector('.accordion-trigger, [data-accordion-trigger]');
      const content = item.querySelector('.accordion-content, [data-accordion-content]');

      if (!trigger || !content) return;

      // Generate IDs if not present
      const triggerId = trigger.id || `accordion-trigger-${Date.now()}-${index}`;
      const contentId = content.id || `accordion-content-${Date.now()}-${index}`;

      trigger.id = triggerId;
      content.id = contentId;

      // Set ARIA attributes
      trigger.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
      trigger.setAttribute('aria-controls', contentId);
      content.setAttribute('aria-labelledby', triggerId);
      content.setAttribute('role', 'region');

      // Store reference
      this.items.push({ item, trigger, content });

      // Click handler
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleItem(index);
      });

      // Keyboard handler
      trigger.addEventListener('keydown', (e) => this.handleKeydown(e, index));
    });
  }

  toggleItem(index) {
    const { item, trigger, content } = this.items[index];
    const isOpen = item.classList.contains('open');

    if (isOpen) {
      this.closeItem(index);
    } else {
      // Close others if not alwaysOpen
      if (!this.options.alwaysOpen) {
        this.items.forEach((_, i) => {
          if (i !== index) this.closeItem(i);
        });
      }
      this.openItem(index);
    }
  }

  openItem(index) {
    const { item, trigger, content } = this.items[index];

    item.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('accordion:open', {
      detail: { index, item, trigger, content }
    }));
  }

  closeItem(index) {
    const { item, trigger, content } = this.items[index];

    item.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('accordion:close', {
      detail: { index, item, trigger, content }
    }));
  }

  openAll() {
    this.items.forEach((_, i) => this.openItem(i));
  }

  closeAll() {
    this.items.forEach((_, i) => this.closeItem(i));
  }

  handleKeydown(e, index) {
    const triggers = this.items.map(i => i.trigger);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = index < triggers.length - 1 ? index + 1 : 0;
        triggers[nextIndex].focus();
        break;

      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = index > 0 ? index - 1 : triggers.length - 1;
        triggers[prevIndex].focus();
        break;

      case 'Home':
        e.preventDefault();
        triggers[0].focus();
        break;

      case 'End':
        e.preventDefault();
        triggers[triggers.length - 1].focus();
        break;
    }
  }

  destroy() {
    this.items.forEach(({ trigger }) => {
      trigger.removeAttribute('aria-expanded');
      trigger.removeAttribute('aria-controls');
    });
  }

  // Static methods
  static initAll(selector = '[data-accordion]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminAccordion) {
        el._jasminAccordion = new Accordion(el, {
          alwaysOpen: el.dataset.accordionAlwaysOpen === 'true'
        });
      }
    });
  }

  static getInstance(element) {
    return element._jasminAccordion;
  }
}

export default Accordion;
