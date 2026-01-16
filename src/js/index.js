/**
 * JasminCSS JavaScript Components
 * Lightweight, accessible, zero-dependency components
 */

import Dropdown from './components/dropdown.js';
import Modal from './components/modal.js';
import Accordion from './components/accordion.js';
import Tabs from './components/tabs.js';
import Offcanvas from './components/offcanvas.js';
import Tooltip from './components/tooltip.js';
import Popover from './components/popover.js';
import Carousel from './components/carousel.js';
import { Alert, Toast } from './components/alert.js';
import Datepicker from './components/datepicker.js';
import Timepicker from './components/timepicker.js';

// Export individual components
export {
  Dropdown,
  Modal,
  Accordion,
  Tabs,
  Offcanvas,
  Tooltip,
  Popover,
  Carousel,
  Alert,
  Toast,
  Datepicker,
  Timepicker
};

/**
 * Initialize all components automatically
 * Call this after DOM is ready
 */
export function initAll() {
  Dropdown.initAll();
  Modal.initAll();
  Accordion.initAll();
  Tabs.initAll();
  Offcanvas.initAll();
  Tooltip.initAll();
  Popover.initAll();
  Carousel.initAll();
  Alert.initAll();
  Datepicker.initAll();
  Timepicker.initAll();
}

/**
 * Auto-initialize on DOMContentLoaded
 */
export function autoInit() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
}

// Default export
const Jasmin = {
  Dropdown,
  Modal,
  Accordion,
  Tabs,
  Offcanvas,
  Tooltip,
  Popover,
  Carousel,
  Alert,
  Toast,
  Datepicker,
  Timepicker,
  initAll,
  autoInit,
  version: '1.0.0'
};

// Auto-initialize if data-jasmin-auto-init is present
if (document.querySelector('[data-jasmin-auto-init]') || document.querySelector('script[data-jasmin-auto-init]')) {
  autoInit();
}

export default Jasmin;
