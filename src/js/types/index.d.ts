/**
 * JasminCSS TypeScript Definitions
 * @version 1.0.0
 */

// ============================================================================
// Dropdown
// ============================================================================

export interface DropdownOptions {
  /** Close dropdown when clicking outside. Default: true */
  closeOnClickOutside?: boolean;
  /** Close dropdown when pressing Escape. Default: true */
  closeOnEscape?: boolean;
}

export class Dropdown {
  constructor(element: HTMLElement, options?: DropdownOptions);

  /** Toggle dropdown visibility */
  toggle(): void;

  /** Open dropdown */
  open(): void;

  /** Close dropdown */
  close(): void;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all dropdowns matching selector */
  static initAll(selector?: string): Dropdown[];
}

// ============================================================================
// Modal
// ============================================================================

export interface ModalOptions {
  /** Show backdrop overlay. Default: true */
  backdrop?: boolean;
  /** Close on Escape key. Default: true */
  keyboard?: boolean;
  /** Trap focus inside modal. Default: true */
  focus?: boolean;
}

export interface ModalEvents {
  'modal:open': CustomEvent<{ modal: Modal }>;
  'modal:close': CustomEvent<{ modal: Modal }>;
}

export class Modal {
  constructor(element: HTMLElement, options?: ModalOptions);

  /** Open modal */
  open(): void;

  /** Close modal */
  close(): void;

  /** Toggle modal visibility */
  toggle(): void;

  /** Check if modal is open */
  isOpen(): boolean;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all modals matching selector */
  static initAll(selector?: string): Modal[];
}

// ============================================================================
// Accordion
// ============================================================================

export interface AccordionOptions {
  /** Allow multiple panels open simultaneously. Default: false */
  multipleOpen?: boolean;
}

export class Accordion {
  constructor(element: HTMLElement, options?: AccordionOptions);

  /** Open panel by index */
  openItem(index: number): void;

  /** Close panel by index */
  closeItem(index: number): void;

  /** Toggle panel by index */
  toggleItem(index: number): void;

  /** Open all panels */
  openAll(): void;

  /** Close all panels */
  closeAll(): void;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all accordions matching selector */
  static initAll(selector?: string): Accordion[];
}

// ============================================================================
// Tabs
// ============================================================================

export interface TabsOptions {
  /** Tab orientation. Default: 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
}

export interface TabsEvents {
  'tabs:change': CustomEvent<{ index: number; tab: HTMLElement; panel: HTMLElement }>;
}

export class Tabs {
  constructor(element: HTMLElement, options?: TabsOptions);

  /** Select tab by index */
  selectTab(index: number): void;

  /** Get currently selected tab index */
  getSelectedIndex(): number;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all tabs matching selector */
  static initAll(selector?: string): Tabs[];
}

// ============================================================================
// Offcanvas
// ============================================================================

export interface OffcanvasOptions {
  /** Show backdrop overlay. Default: true */
  backdrop?: boolean;
  /** Close on Escape key. Default: true */
  keyboard?: boolean;
  /** Disable body scroll when open. Default: true */
  scroll?: boolean;
}

export interface OffcanvasEvents {
  'offcanvas:open': CustomEvent<{ offcanvas: Offcanvas }>;
  'offcanvas:close': CustomEvent<{ offcanvas: Offcanvas }>;
}

export class Offcanvas {
  constructor(element: HTMLElement, options?: OffcanvasOptions);

  /** Open offcanvas */
  open(): void;

  /** Close offcanvas */
  close(): void;

  /** Toggle offcanvas visibility */
  toggle(): void;

  /** Check if offcanvas is open */
  isOpen(): boolean;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all offcanvas elements matching selector */
  static initAll(selector?: string): Offcanvas[];
}

// ============================================================================
// Tooltip
// ============================================================================

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTrigger = 'hover' | 'focus' | 'hover focus';

export interface TooltipOptions {
  /** Tooltip position. Default: 'top' */
  position?: TooltipPosition;
  /** Trigger events. Default: 'hover focus' */
  trigger?: TooltipTrigger;
  /** Delay before showing (ms). Default: 0 */
  delay?: number;
  /** Tooltip content (overrides data-tooltip attribute) */
  content?: string;
}

export class Tooltip {
  constructor(element: HTMLElement, options?: TooltipOptions);

  /** Show tooltip */
  show(): void;

  /** Hide tooltip */
  hide(): void;

  /** Update tooltip content */
  setContent(content: string): void;

  /** Update tooltip position */
  setPosition(position: TooltipPosition): void;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all tooltips matching selector */
  static initAll(selector?: string): Tooltip[];
}

// ============================================================================
// Popover
// ============================================================================

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';
export type PopoverTrigger = 'click' | 'hover' | 'focus';

export interface PopoverOptions {
  /** Popover position. Default: 'top' */
  position?: PopoverPosition;
  /** Trigger event. Default: 'click' */
  trigger?: PopoverTrigger;
  /** Popover title */
  title?: string;
  /** Popover content */
  content?: string;
  /** Allow HTML in content. Default: false */
  html?: boolean;
}

export class Popover {
  constructor(element: HTMLElement, options?: PopoverOptions);

  /** Show popover */
  show(): void;

  /** Hide popover */
  hide(): void;

  /** Toggle popover visibility */
  toggle(): void;

  /** Update popover title */
  setTitle(title: string): void;

  /** Update popover content */
  setContent(content: string): void;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all popovers matching selector */
  static initAll(selector?: string): Popover[];
}

// ============================================================================
// Carousel
// ============================================================================

export interface CarouselOptions {
  /** Enable autoplay. Default: false */
  autoplay?: boolean;
  /** Autoplay interval in ms. Default: 5000 */
  interval?: number;
  /** Wrap around at ends. Default: true */
  wrap?: boolean;
  /** Enable keyboard navigation. Default: true */
  keyboard?: boolean;
  /** Enable touch/swipe support. Default: true */
  touch?: boolean;
  /** Pause autoplay on hover. Default: true */
  pauseOnHover?: boolean;
}

export interface CarouselEvents {
  'carousel:slide': CustomEvent<{ from: number; to: number }>;
  'carousel:slid': CustomEvent<{ from: number; to: number }>;
}

export class Carousel {
  constructor(element: HTMLElement, options?: CarouselOptions);

  /** Go to next slide */
  next(): void;

  /** Go to previous slide */
  prev(): void;

  /** Go to specific slide */
  goTo(index: number): void;

  /** Pause autoplay */
  pause(): void;

  /** Resume autoplay */
  play(): void;

  /** Get current slide index */
  getCurrentIndex(): number;

  /** Get total number of slides */
  getSlideCount(): number;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all carousels matching selector */
  static initAll(selector?: string): Carousel[];
}

// ============================================================================
// Alert
// ============================================================================

export interface AlertOptions {
  /** Animation duration in ms. Default: 150 */
  animationDuration?: number;
}

export interface AlertEvents {
  'alert:close': CustomEvent<{ alert: Alert }>;
  'alert:closed': CustomEvent<{ alert: Alert }>;
}

export class Alert {
  constructor(element: HTMLElement, options?: AlertOptions);

  /** Close and remove alert */
  close(): void;

  /** Destroy instance and remove event listeners */
  destroy(): void;

  /** Initialize all alerts matching selector */
  static initAll(selector?: string): Alert[];
}

// ============================================================================
// Toast
// ============================================================================

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastOptions {
  /** Toast message */
  message: string;
  /** Toast type/style. Default: 'default' */
  type?: ToastType;
  /** Auto-dismiss duration in ms. 0 for no auto-dismiss. Default: 5000 */
  duration?: number;
  /** Toast position. Default: 'top-right' */
  position?: ToastPosition;
  /** Show dismiss button. Default: true */
  dismissible?: boolean;
  /** Toast title (optional) */
  title?: string;
  /** Custom icon class (optional) */
  icon?: string;
}

export class Toast {
  /** Show a toast notification */
  static show(options: ToastOptions): HTMLElement;

  /** Show success toast */
  static success(message: string, options?: Partial<ToastOptions>): HTMLElement;

  /** Show error toast */
  static error(message: string, options?: Partial<ToastOptions>): HTMLElement;

  /** Show warning toast */
  static warning(message: string, options?: Partial<ToastOptions>): HTMLElement;

  /** Show info toast */
  static info(message: string, options?: Partial<ToastOptions>): HTMLElement;

  /** Dismiss all toasts */
  static dismissAll(): void;

  /** Dismiss toast by element */
  static dismiss(element: HTMLElement): void;
}

// ============================================================================
// Main Jasmin Object
// ============================================================================

export interface JasminStatic {
  Dropdown: typeof Dropdown;
  Modal: typeof Modal;
  Accordion: typeof Accordion;
  Tabs: typeof Tabs;
  Offcanvas: typeof Offcanvas;
  Tooltip: typeof Tooltip;
  Popover: typeof Popover;
  Carousel: typeof Carousel;
  Alert: typeof Alert;
  Toast: typeof Toast;

  /** Initialize all components */
  initAll(): void;

  /** Auto-initialize on DOMContentLoaded */
  autoInit(): void;

  /** JasminCSS version */
  version: string;
}

declare const Jasmin: JasminStatic;

export default Jasmin;

// ============================================================================
// Module Augmentation for Custom Events
// ============================================================================

declare global {
  interface HTMLElementEventMap {
    'modal:open': CustomEvent<{ modal: Modal }>;
    'modal:close': CustomEvent<{ modal: Modal }>;
    'offcanvas:open': CustomEvent<{ offcanvas: Offcanvas }>;
    'offcanvas:close': CustomEvent<{ offcanvas: Offcanvas }>;
    'tabs:change': CustomEvent<{ index: number; tab: HTMLElement; panel: HTMLElement }>;
    'carousel:slide': CustomEvent<{ from: number; to: number }>;
    'carousel:slid': CustomEvent<{ from: number; to: number }>;
    'alert:close': CustomEvent<{ alert: Alert }>;
    'alert:closed': CustomEvent<{ alert: Alert }>;
  }
}
