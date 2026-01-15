# Components Reference

JasminCSS includes 26 pre-built components.

## Component List

| Component | Description | JS Required |
|-----------|-------------|-------------|
| [Buttons](./buttons.md) | Primary, secondary, outline, ghost, sizes | No |
| [Cards](./cards.md) | Content containers with header/body/footer | No |
| [Forms](./forms.md) | Inputs, select, checkbox, radio, switch | No |
| [Navigation](./navigation.md) | Navbar, sidebar, breadcrumb, tabs | Yes (tabs) |
| [Alerts](./alerts.md) | Info, success, warning, error messages | Yes (dismiss) |
| [Badges](./badges.md) | Labels, tags, status indicators | No |
| [Modals](./modals.md) | Dialog boxes, popups | Yes |
| [Tables](./tables.md) | Data tables with styling variants | No |
| [Avatars](./avatars.md) | User profile images | No |
| [Tooltips](./tooltips.md) | Hover information | Yes |
| [Progress](./progress.md) | Progress bars, loading indicators | No |
| [Skeleton](./skeleton.md) | Loading placeholders | No |
| [Dropdown](./dropdown.md) | Dropdown menus | Yes |
| [Accordion](./accordion.md) | Collapsible panels | Yes |
| [Chips](./chips.md) | Tags, filters, selections | No |
| [Offcanvas](./offcanvas.md) | Slide-out panels, drawers | Yes |
| [Carousel](./carousel.md) | Image/content sliders | Yes |
| [Stepper](./stepper.md) | Multi-step wizards | No |
| [Timeline](./timeline.md) | Event sequences | No |
| [Rating](./rating.md) | Star ratings | No |
| [Upload](./upload.md) | File upload zones | No |
| [Spinner](./spinner.md) | Loading spinners | No |
| [Popover](./popover.md) | Rich content tooltips | Yes |
| [Command Palette](./command-palette.md) | Search/command modal | Yes |
| [Datepicker](./datepicker.md) | Date selection calendar | Yes |
| [Timepicker](./timepicker.md) | Time selection | Yes |

## Quick Examples

### Button

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-ghost">Ghost</button>
```

### Card

```html
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content goes here</div>
  <div class="card-footer">Footer</div>
</div>
```

### Form

```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" placeholder="you@example.com">
  <span class="form-text">We'll never share your email.</span>
</div>
```

### Modal

```html
<div class="modal" data-modal id="my-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button class="modal-close" data-modal-close>&times;</button>
      </div>
      <div class="modal-body">Content</div>
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

### Dropdown

```html
<div class="dropdown" data-dropdown>
  <button class="btn dropdown-toggle">Menu</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
```

### Accordion

```html
<div class="accordion" data-accordion>
  <div class="accordion-item">
    <button class="accordion-trigger">Section 1</button>
    <div class="accordion-content">
      <div class="accordion-body">Content for section 1</div>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-trigger">Section 2</button>
    <div class="accordion-content">
      <div class="accordion-body">Content for section 2</div>
    </div>
  </div>
</div>
```

### Tabs

```html
<div data-tabs>
  <div class="tabs-list" role="tablist">
    <button class="tab active">Tab 1</button>
    <button class="tab">Tab 2</button>
    <button class="tab">Tab 3</button>
  </div>
  <div class="tab-panel active">Content 1</div>
  <div class="tab-panel">Content 2</div>
  <div class="tab-panel">Content 3</div>
</div>
```

### Alert

```html
<div class="alert alert-success" data-alert>
  <strong>Success!</strong> Your changes have been saved.
  <button class="alert-close" data-alert-close>&times;</button>
</div>
```

### Toast (via JavaScript)

```js
import { Toast } from 'jasmincss/js';

Toast.success('Changes saved!');
Toast.error('Something went wrong');
Toast.warning('Please check your input');
Toast.info('New update available');
```

## Variants

Most components support these variant patterns:

### Colors
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
<button class="btn btn-info">Info</button>
```

### Sizes
```html
<button class="btn btn-sm">Small</button>
<button class="btn">Default</button>
<button class="btn btn-lg">Large</button>
```

### Styles
```html
<button class="btn btn-primary">Solid</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-soft-primary">Soft</button>
<button class="btn btn-ghost">Ghost</button>
```

## Dark Mode

Components automatically adapt to dark mode when `.dark` is on the `<html>` element:

```html
<html class="dark">
  <body>
    <div class="card">Automatically styled for dark mode</div>
  </body>
</html>
```

## Glass Effect

Add futuristic glass styling:

```html
<div class="card card-glass">Glass card</div>
<div class="modal-glass">Glass modal</div>
<nav class="navbar navbar-glass">Glass navbar</nav>
```
