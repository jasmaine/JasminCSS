/**
 * JasminCSS Alert & Toast Component
 * Handles dismissible alerts and toast notifications
 */

class Alert {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      dismissible: true,
      autoDismiss: false,
      autoDismissDelay: 5000,
      ...options
    };

    this.init();
  }

  init() {
    // Set ARIA
    this.element.setAttribute('role', 'alert');

    // Close button
    if (this.options.dismissible) {
      const closeBtn = this.element.querySelector('[data-alert-close], .alert-close, .btn-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.dismiss());
      }
    }

    // Auto dismiss
    if (this.options.autoDismiss) {
      setTimeout(() => this.dismiss(), this.options.autoDismissDelay);
    }
  }

  dismiss() {
    this.element.dispatchEvent(new CustomEvent('alert:dismiss', { detail: { alert: this } }));

    this.element.classList.add('dismissing');

    setTimeout(() => {
      this.element.remove();
      this.element.dispatchEvent(new CustomEvent('alert:dismissed', { detail: { alert: this } }));
    }, 150);
  }

  // Static methods
  static initAll(selector = '[data-alert]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminAlert) {
        el._jasminAlert = new Alert(el, {
          dismissible: el.dataset.alertDismissible !== 'false',
          autoDismiss: el.dataset.alertAutoDismiss === 'true',
          autoDismissDelay: parseInt(el.dataset.alertDelay) || 5000
        });
      }
    });
  }

  static getInstance(element) {
    return element._jasminAlert;
  }
}

/**
 * Toast notification system
 */
class Toast {
  static container = null;
  static queue = [];

  static getContainer(position = 'top-right') {
    if (!Toast.container || Toast.container.dataset.position !== position) {
      Toast.container?.remove();

      Toast.container = document.createElement('div');
      Toast.container.className = `toast-container toast-${position}`;
      Toast.container.dataset.position = position;
      Toast.container.setAttribute('aria-live', 'polite');
      Toast.container.setAttribute('aria-atomic', 'true');
      document.body.appendChild(Toast.container);
    }

    return Toast.container;
  }

  static show(options = {}) {
    const config = {
      title: '',
      message: '',
      type: 'default', // default, success, error, warning, info
      duration: 5000,
      position: 'top-right',
      dismissible: true,
      icon: true,
      ...options
    };

    const container = Toast.getContainer(config.position);

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${config.type}`;
    toast.setAttribute('role', 'alert');

    // Icon
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ',
      default: ''
    };

    let html = '';

    if (config.icon && icons[config.type]) {
      html += `<div class="toast-icon">${icons[config.type]}</div>`;
    }

    html += '<div class="toast-content">';
    if (config.title) {
      html += `<div class="toast-title">${config.title}</div>`;
    }
    if (config.message) {
      html += `<div class="toast-message">${config.message}</div>`;
    }
    html += '</div>';

    if (config.dismissible) {
      html += '<button class="toast-close" aria-label="Close">×</button>';
    }

    toast.innerHTML = html;

    // Add to container
    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Close button
    const closeBtn = toast.querySelector('.toast-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => Toast.hide(toast));
    }

    // Auto dismiss
    if (config.duration > 0) {
      setTimeout(() => Toast.hide(toast), config.duration);
    }

    return toast;
  }

  static hide(toast) {
    toast.classList.remove('show');
    toast.classList.add('hiding');

    setTimeout(() => {
      toast.remove();

      // Remove container if empty
      if (Toast.container && Toast.container.children.length === 0) {
        Toast.container.remove();
        Toast.container = null;
      }
    }, 300);
  }

  static success(message, options = {}) {
    return Toast.show({ message, type: 'success', ...options });
  }

  static error(message, options = {}) {
    return Toast.show({ message, type: 'error', ...options });
  }

  static warning(message, options = {}) {
    return Toast.show({ message, type: 'warning', ...options });
  }

  static info(message, options = {}) {
    return Toast.show({ message, type: 'info', ...options });
  }

  static clearAll() {
    if (Toast.container) {
      Array.from(Toast.container.children).forEach(toast => Toast.hide(toast));
    }
  }
}

export { Alert, Toast };
export default Alert;
