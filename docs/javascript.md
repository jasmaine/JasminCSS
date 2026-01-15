# JavaScript Components

JasminCSS includes lightweight, zero-dependency JavaScript for interactive components.

## Installation

### ES Module

```js
import Jasmin from 'jasmincss/js';
Jasmin.autoInit();
```

### Individual Components

```js
import { Modal, Dropdown, Tabs } from 'jasmincss/js';

// Initialize specific components
Modal.initAll();
Dropdown.initAll();
```

### CDN

```html
<script src="https://unpkg.com/jasmincss/dist/jasmin.min.js"></script>
<script>
  Jasmin.autoInit();
</script>
```

### Auto-Initialize

Add the data attribute to auto-initialize on page load:

```html
<script src="jasmincss/dist/jasmin.js" data-jasmin-auto-init></script>
```

## Components

### Dropdown

Interactive dropdown menus with keyboard navigation.

```html
<div class="dropdown" data-dropdown>
  <button class="btn dropdown-toggle">Menu</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
  </div>
</div>
```

**JavaScript API:**

```js
import { Dropdown } from 'jasmincss/js';

// Initialize all dropdowns
Dropdown.initAll();

// Manual control
const dropdown = new Dropdown(element, {
  closeOnClickOutside: true,
  closeOnEscape: true
});

dropdown.open();
dropdown.close();
dropdown.toggle();
```

**Keyboard Navigation:**
- `Enter` / `Space` - Toggle dropdown
- `ArrowDown` - Move to next item
- `ArrowUp` - Move to previous item
- `Escape` - Close dropdown

---

### Modal

Dialog boxes with focus trapping and backdrop.

```html
<div class="modal" data-modal id="my-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Title</h5>
        <button class="modal-close" data-modal-close>&times;</button>
      </div>
      <div class="modal-body">Content here</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-modal-close>Cancel</button>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<!-- Trigger -->
<button data-modal-target="#my-modal">Open Modal</button>
```

**JavaScript API:**

```js
import { Modal } from 'jasmincss/js';

Modal.initAll();

const modal = new Modal(element, {
  backdrop: true,       // Show backdrop
  keyboard: true,       // Close on Escape
  focus: true          // Trap focus inside modal
});

modal.open();
modal.close();
modal.toggle();
```

**Events:**
```js
element.addEventListener('modal:open', (e) => {
  console.log('Modal opened');
});

element.addEventListener('modal:close', (e) => {
  console.log('Modal closed');
});
```

---

### Accordion

Collapsible content panels.

```html
<div class="accordion" data-accordion>
  <div class="accordion-item">
    <button class="accordion-trigger">Section 1</button>
    <div class="accordion-content">
      <div class="accordion-body">Content 1</div>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-trigger">Section 2</button>
    <div class="accordion-content">
      <div class="accordion-body">Content 2</div>
    </div>
  </div>
</div>
```

**JavaScript API:**

```js
import { Accordion } from 'jasmincss/js';

Accordion.initAll();

const accordion = new Accordion(element, {
  multipleOpen: false   // Allow multiple panels open
});

accordion.openItem(0);    // Open first item
accordion.closeItem(0);   // Close first item
accordion.toggleItem(0);  // Toggle first item
```

---

### Tabs

Tabbed content navigation.

```html
<div data-tabs>
  <div class="tabs-list" role="tablist">
    <button class="tab active" data-tab="0">Tab 1</button>
    <button class="tab" data-tab="1">Tab 2</button>
    <button class="tab" data-tab="2">Tab 3</button>
  </div>
  <div class="tab-panel active" data-tab-panel="0">Content 1</div>
  <div class="tab-panel" data-tab-panel="1">Content 2</div>
  <div class="tab-panel" data-tab-panel="2">Content 3</div>
</div>
```

**JavaScript API:**

```js
import { Tabs } from 'jasmincss/js';

Tabs.initAll();

const tabs = new Tabs(element, {
  orientation: 'horizontal'  // or 'vertical'
});

tabs.selectTab(1);  // Select second tab
```

**Keyboard Navigation:**
- `ArrowRight` / `ArrowLeft` - Navigate horizontal tabs
- `ArrowDown` / `ArrowUp` - Navigate vertical tabs
- `Home` - First tab
- `End` - Last tab

---

### Offcanvas

Slide-out panels and drawers.

```html
<div class="offcanvas offcanvas-start" data-offcanvas id="sidebar">
  <div class="offcanvas-header">
    <h5>Sidebar</h5>
    <button class="offcanvas-close" data-offcanvas-close>&times;</button>
  </div>
  <div class="offcanvas-body">
    Content here
  </div>
</div>

<!-- Trigger -->
<button data-offcanvas-target="#sidebar">Open Sidebar</button>
```

**Positions:** `offcanvas-start`, `offcanvas-end`, `offcanvas-top`, `offcanvas-bottom`

**JavaScript API:**

```js
import { Offcanvas } from 'jasmincss/js';

Offcanvas.initAll();

const offcanvas = new Offcanvas(element, {
  backdrop: true,
  keyboard: true,
  scroll: false  // Disable body scroll when open
});

offcanvas.open();
offcanvas.close();
```

---

### Tooltip

Hover information tooltips.

```html
<button data-tooltip="This is a tooltip">Hover me</button>

<!-- With position -->
<button data-tooltip="Top tooltip" data-tooltip-position="top">Top</button>
<button data-tooltip="Bottom tooltip" data-tooltip-position="bottom">Bottom</button>
<button data-tooltip="Left tooltip" data-tooltip-position="left">Left</button>
<button data-tooltip="Right tooltip" data-tooltip-position="right">Right</button>
```

**JavaScript API:**

```js
import { Tooltip } from 'jasmincss/js';

Tooltip.initAll();

const tooltip = new Tooltip(element, {
  position: 'top',
  trigger: 'hover focus'  // Show on hover and focus
});

tooltip.show();
tooltip.hide();
```

---

### Popover

Rich content popovers.

```html
<button
  data-popover
  data-popover-title="Popover Title"
  data-popover-content="This is the popover content with more details."
>
  Click me
</button>
```

**JavaScript API:**

```js
import { Popover } from 'jasmincss/js';

Popover.initAll();

const popover = new Popover(element, {
  position: 'top',
  trigger: 'click',
  title: 'Title',
  content: 'Content here'
});

popover.show();
popover.hide();
popover.toggle();
```

---

### Carousel

Image and content sliders.

```html
<div class="carousel" data-carousel>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="slide1.jpg" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="slide2.jpg" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img src="slide3.jpg" alt="Slide 3">
    </div>
  </div>
  <button class="carousel-prev" data-carousel-prev>&lsaquo;</button>
  <button class="carousel-next" data-carousel-next>&rsaquo;</button>
  <div class="carousel-indicators">
    <button data-carousel-slide="0" class="active"></button>
    <button data-carousel-slide="1"></button>
    <button data-carousel-slide="2"></button>
  </div>
</div>
```

**JavaScript API:**

```js
import { Carousel } from 'jasmincss/js';

Carousel.initAll();

const carousel = new Carousel(element, {
  autoplay: false,
  interval: 5000,
  wrap: true,      // Continuous loop
  keyboard: true,
  touch: true      // Touch/swipe support
});

carousel.next();
carousel.prev();
carousel.goTo(2);  // Go to slide index 2
carousel.pause();
carousel.play();
```

**Events:**
```js
element.addEventListener('carousel:slide', (e) => {
  console.log('Sliding to:', e.detail.to);
});
```

---

### Alert

Dismissible alerts.

```html
<div class="alert alert-success" data-alert>
  <strong>Success!</strong> Your changes have been saved.
  <button class="alert-close" data-alert-close>&times;</button>
</div>
```

**JavaScript API:**

```js
import { Alert } from 'jasmincss/js';

Alert.initAll();

const alert = new Alert(element);
alert.close();
```

---

### Toast

Notification toasts (programmatic).

```js
import { Toast } from 'jasmincss/js';

// Quick methods
Toast.success('Changes saved successfully!');
Toast.error('Something went wrong');
Toast.warning('Please check your input');
Toast.info('New update available');

// Full options
Toast.show({
  message: 'Custom notification',
  type: 'success',        // success, error, warning, info
  duration: 5000,         // Auto-dismiss after 5s
  position: 'top-right',  // top-right, top-left, bottom-right, bottom-left
  dismissible: true
});
```

## Initialization Options

### Auto-Initialize Everything

```js
import Jasmin from 'jasmincss/js';
Jasmin.autoInit();
```

### Initialize Specific Components

```js
import { Modal, Dropdown } from 'jasmincss/js';

document.addEventListener('DOMContentLoaded', () => {
  Modal.initAll();
  Dropdown.initAll();
});
```

### Initialize Single Element

```js
import { Modal } from 'jasmincss/js';

const modalEl = document.querySelector('#my-modal');
const modal = new Modal(modalEl, { backdrop: true });
```

## Accessibility

All components include:
- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader announcements

### Focus Trapping

Modals and offcanvas panels trap focus within the component when open.

### Keyboard Support

| Component | Keys |
|-----------|------|
| Dropdown | Enter, Space, Arrow keys, Escape |
| Modal | Escape, Tab (trapped) |
| Accordion | Enter, Space |
| Tabs | Arrow keys, Home, End |
| Carousel | Arrow keys |

## TypeScript

TypeScript definitions are included:

```ts
import Jasmin, { Modal, ModalOptions } from 'jasmincss/js';

const options: ModalOptions = {
  backdrop: true,
  keyboard: true
};

const modal = new Modal(element, options);
```
