/**
 * JasminCSS Datepicker Component
 * A fully functional date picker with month/year navigation
 */

class Datepicker {
  constructor(element, options = {}) {
    this.element = element;
    this.input = element.querySelector('.datepicker-input') || element.querySelector('input');
    this.isOpen = false;

    this.options = {
      format: 'YYYY-MM-DD',
      firstDayOfWeek: 0, // 0 = Sunday, 1 = Monday
      minDate: null,
      maxDate: null,
      closeOnSelect: true,
      ...options
    };

    // Initialize with today's date
    this.today = new Date();
    this.selectedDate = this.input?.value ? this.parseDate(this.input.value) : null;
    this.viewDate = this.selectedDate ? new Date(this.selectedDate) : new Date(this.today);

    if (!this.input) return;

    this.init();
  }

  init() {
    // Create dropdown if not exists
    this.dropdown = this.element.querySelector('.datepicker-dropdown');
    if (!this.dropdown) {
      this.dropdown = document.createElement('div');
      this.dropdown.className = 'datepicker-dropdown';
      this.element.appendChild(this.dropdown);
    }

    // Create icon if not exists
    if (!this.element.querySelector('.datepicker-icon')) {
      const icon = document.createElement('div');
      icon.className = 'datepicker-icon';
      this.element.appendChild(icon);
    }

    // Render calendar
    this.render();

    // Event listeners
    this.input.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    this.element.querySelector('.datepicker-icon')?.addEventListener('click', (e) => {
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

    // Set initial value to today if empty
    if (!this.input.value) {
      this.selectDate(this.today);
    }
  }

  render() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    // Get days in month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    // Get days from previous month
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    let html = `
      <div class="p-3">
        <div class="calendar-header">
          <button type="button" class="btn btn-ghost btn-sm" data-action="prev-year" title="Previous Year">
            <span class="icon icon-chevron-double-left icon-sm"></span>
          </button>
          <button type="button" class="btn btn-ghost btn-sm" data-action="prev-month" title="Previous Month">
            <span class="icon icon-chevron-left icon-sm"></span>
          </button>
          <span class="font-semibold text-sm">${monthNames[month]} ${year}</span>
          <button type="button" class="btn btn-ghost btn-sm" data-action="next-month" title="Next Month">
            <span class="icon icon-chevron-right icon-sm"></span>
          </button>
          <button type="button" class="btn btn-ghost btn-sm" data-action="next-year" title="Next Year">
            <span class="icon icon-chevron-double-right icon-sm"></span>
          </button>
        </div>
        <div class="calendar-weekdays">
          ${dayNames.map(d => `<div class="calendar-weekday">${d}</div>`).join('')}
        </div>
        <div class="calendar-grid">
    `;

    // Previous month days
    for (let i = startDay - 1; i >= 0; i--) {
      const day = prevMonthLastDay - i;
      html += `<button type="button" class="calendar-day calendar-day-outside" data-date="${year}-${month}-${day}">${day}</button>`;
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = this.isSameDay(date, this.today);
      const isSelected = this.selectedDate && this.isSameDay(date, this.selectedDate);
      const isDisabled = this.isDateDisabled(date);

      let classes = 'calendar-day';
      if (isToday) classes += ' calendar-day-today';
      if (isSelected) classes += ' calendar-day-selected';
      if (isDisabled) classes += ' calendar-day-disabled';

      html += `<button type="button" class="${classes}" data-date="${year}-${month + 1}-${day}" ${isDisabled ? 'disabled' : ''}>${day}</button>`;
    }

    // Next month days
    const totalCells = startDay + daysInMonth;
    const remainingCells = totalCells <= 35 ? 35 - totalCells : 42 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
      html += `<button type="button" class="calendar-day calendar-day-outside" data-date="${year}-${month + 2}-${day}">${day}</button>`;
    }

    html += `
        </div>
        <div class="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
          <button type="button" class="btn btn-ghost btn-sm" data-action="today">Today</button>
          <button type="button" class="btn btn-ghost btn-sm" data-action="clear">Clear</button>
        </div>
      </div>
    `;

    this.dropdown.innerHTML = html;
    this.bindCalendarEvents();
  }

  bindCalendarEvents() {
    // Navigation buttons
    this.dropdown.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const action = btn.dataset.action;

        switch (action) {
          case 'prev-month':
            this.viewDate.setMonth(this.viewDate.getMonth() - 1);
            this.render();
            break;
          case 'next-month':
            this.viewDate.setMonth(this.viewDate.getMonth() + 1);
            this.render();
            break;
          case 'prev-year':
            this.viewDate.setFullYear(this.viewDate.getFullYear() - 1);
            this.render();
            break;
          case 'next-year':
            this.viewDate.setFullYear(this.viewDate.getFullYear() + 1);
            this.render();
            break;
          case 'today':
            this.selectDate(this.today);
            break;
          case 'clear':
            this.clearDate();
            break;
        }
      });
    });

    // Day buttons
    this.dropdown.querySelectorAll('.calendar-day:not(.calendar-day-disabled):not(.calendar-day-outside)').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const [year, month, day] = btn.dataset.date.split('-').map(Number);
        this.selectDate(new Date(year, month - 1, day));
      });
    });
  }

  selectDate(date) {
    this.selectedDate = date;
    this.viewDate = new Date(date);
    this.input.value = this.formatDate(date);
    this.render();

    if (this.options.closeOnSelect) {
      this.close();
    }

    this.element.dispatchEvent(new CustomEvent('datepicker:change', {
      detail: { date: date, formatted: this.input.value }
    }));
  }

  clearDate() {
    this.selectedDate = null;
    this.input.value = '';
    this.viewDate = new Date(this.today);
    this.render();
    this.close();

    this.element.dispatchEvent(new CustomEvent('datepicker:clear'));
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.element.classList.add('open');
    this.render();
    this.element.dispatchEvent(new CustomEvent('datepicker:open'));
  }

  close() {
    this.isOpen = false;
    this.element.classList.remove('open');
    this.element.dispatchEvent(new CustomEvent('datepicker:close'));
  }

  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  parseDate(str) {
    const [year, month, day] = str.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  isDateDisabled(date) {
    if (this.options.minDate && date < this.options.minDate) return true;
    if (this.options.maxDate && date > this.options.maxDate) return true;
    return false;
  }

  destroy() {
    this.close();
  }

  // Static method to initialize all datepickers
  static initAll(selector = '[data-datepicker], .datepicker') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminDatepicker) {
        el._jasminDatepicker = new Datepicker(el);
      }
    });
  }

  // Static method to get instance
  static getInstance(element) {
    return element._jasminDatepicker;
  }
}

export default Datepicker;
