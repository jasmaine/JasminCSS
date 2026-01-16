/**
 * JasminCSS Timepicker Component
 * A fully functional time picker with hour/minute selection
 */

class Timepicker {
  constructor(element, options = {}) {
    this.element = element;
    this.input = element.querySelector('.timepicker-input') || element.querySelector('input');
    this.isOpen = false;

    this.options = {
      format: '24h', // '24h' or '12h'
      minuteStep: 1,
      closeOnSelect: true,
      ...options
    };

    // Initialize with current time
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();

    // Parse existing value
    if (this.input?.value) {
      const [h, m] = this.input.value.split(':').map(Number);
      if (!isNaN(h)) this.hours = h;
      if (!isNaN(m)) this.minutes = m;
    }

    if (!this.input) return;

    this.init();
  }

  init() {
    // Create dropdown if not exists
    this.dropdown = this.element.querySelector('.timepicker-dropdown');
    if (!this.dropdown) {
      this.dropdown = document.createElement('div');
      this.dropdown.className = 'timepicker-dropdown';
      this.element.appendChild(this.dropdown);
    }

    // Create icon if not exists
    if (!this.element.querySelector('.timepicker-icon')) {
      const icon = document.createElement('div');
      icon.className = 'timepicker-icon';
      this.element.appendChild(icon);
    }

    // Render time selector
    this.render();

    // Event listeners
    this.input.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    this.element.querySelector('.timepicker-icon')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.element.contains(e.target)) {
        this.close();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Set initial value
    this.updateInput();
  }

  render() {
    const html = `
      <div class="timepicker-content">
        <div class="timepicker-header">Select Time</div>
        <div class="timepicker-body">
          <div class="timepicker-column">
            <button type="button" class="timepicker-btn" data-action="hour-up">
              <span class="icon icon-chevron-up icon-sm"></span>
            </button>
            <input type="text" class="timepicker-display" data-field="hours" value="${String(this.hours).padStart(2, '0')}" readonly>
            <button type="button" class="timepicker-btn" data-action="hour-down">
              <span class="icon icon-chevron-down icon-sm"></span>
            </button>
          </div>
          <div class="timepicker-separator">:</div>
          <div class="timepicker-column">
            <button type="button" class="timepicker-btn" data-action="minute-up">
              <span class="icon icon-chevron-up icon-sm"></span>
            </button>
            <input type="text" class="timepicker-display" data-field="minutes" value="${String(this.minutes).padStart(2, '0')}" readonly>
            <button type="button" class="timepicker-btn" data-action="minute-down">
              <span class="icon icon-chevron-down icon-sm"></span>
            </button>
          </div>
        </div>
        <div class="timepicker-footer">
          <button type="button" class="btn btn-ghost btn-sm" data-action="now">Now</button>
          <button type="button" class="btn btn-primary btn-sm" data-action="confirm">OK</button>
        </div>
      </div>
    `;

    this.dropdown.innerHTML = html;
    this.bindEvents();
  }

  bindEvents() {
    this.dropdown.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const action = btn.dataset.action;

        switch (action) {
          case 'hour-up':
            this.hours = (this.hours + 1) % 24;
            this.updateDisplay();
            break;
          case 'hour-down':
            this.hours = (this.hours - 1 + 24) % 24;
            this.updateDisplay();
            break;
          case 'minute-up':
            this.minutes = (this.minutes + this.options.minuteStep) % 60;
            this.updateDisplay();
            break;
          case 'minute-down':
            this.minutes = (this.minutes - this.options.minuteStep + 60) % 60;
            this.updateDisplay();
            break;
          case 'now':
            const now = new Date();
            this.hours = now.getHours();
            this.minutes = now.getMinutes();
            this.updateDisplay();
            break;
          case 'confirm':
            this.confirm();
            break;
        }
      });
    });
  }

  updateDisplay() {
    const hoursInput = this.dropdown.querySelector('[data-field="hours"]');
    const minutesInput = this.dropdown.querySelector('[data-field="minutes"]');
    if (hoursInput) hoursInput.value = String(this.hours).padStart(2, '0');
    if (minutesInput) minutesInput.value = String(this.minutes).padStart(2, '0');
  }

  updateInput() {
    this.input.value = `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`;
  }

  confirm() {
    this.updateInput();
    this.close();

    this.element.dispatchEvent(new CustomEvent('timepicker:change', {
      detail: { hours: this.hours, minutes: this.minutes, formatted: this.input.value }
    }));
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.element.classList.add('open');
    this.render();
    this.element.dispatchEvent(new CustomEvent('timepicker:open'));
  }

  close() {
    this.isOpen = false;
    this.element.classList.remove('open');
    this.element.dispatchEvent(new CustomEvent('timepicker:close'));
  }

  destroy() {
    this.close();
  }

  // Static method to initialize all timepickers
  static initAll(selector = '[data-timepicker], .timepicker') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminTimepicker) {
        el._jasminTimepicker = new Timepicker(el);
      }
    });
  }

  // Static method to get instance
  static getInstance(element) {
    return element._jasminTimepicker;
  }
}

export default Timepicker;
