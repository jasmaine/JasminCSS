/**
 * JasminCSS Tabs Component
 * Handles tab navigation with keyboard support and accessibility
 */

class Tabs {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      orientation: 'horizontal', // 'horizontal' or 'vertical'
      ...options
    };
    this.tabs = [];
    this.panels = [];
    this.activeIndex = 0;

    this.init();
  }

  init() {
    const tabList = this.element.querySelector('[role="tablist"], .tabs-list, .nav-tabs');
    this.tabs = Array.from(this.element.querySelectorAll('[role="tab"], .tab, .nav-link'));
    this.panels = Array.from(this.element.querySelectorAll('[role="tabpanel"], .tab-panel, .tab-content > *'));

    if (tabList) {
      tabList.setAttribute('role', 'tablist');
      tabList.setAttribute('aria-orientation', this.options.orientation);
    }

    this.tabs.forEach((tab, index) => {
      const panel = this.panels[index];
      if (!panel) return;

      // Generate IDs
      const tabId = tab.id || `tab-${Date.now()}-${index}`;
      const panelId = panel.id || `tabpanel-${Date.now()}-${index}`;

      tab.id = tabId;
      panel.id = panelId;

      // Set ARIA attributes
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panelId);
      tab.setAttribute('tabindex', index === 0 ? '0' : '-1');

      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tabId);
      panel.setAttribute('tabindex', '0');

      // Determine initial active tab
      if (tab.classList.contains('active') || tab.getAttribute('aria-selected') === 'true') {
        this.activeIndex = index;
      }

      // Click handler
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectTab(index);
      });

      // Keyboard handler
      tab.addEventListener('keydown', (e) => this.handleKeydown(e, index));
    });

    // Set initial state
    this.selectTab(this.activeIndex, false);
  }

  selectTab(index, focus = true) {
    if (index < 0 || index >= this.tabs.length) return;

    // Deactivate all
    this.tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
      tab.classList.remove('active');

      if (this.panels[i]) {
        this.panels[i].classList.remove('active');
        this.panels[i].hidden = true;
      }
    });

    // Activate selected
    const selectedTab = this.tabs[index];
    const selectedPanel = this.panels[index];

    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.setAttribute('tabindex', '0');
    selectedTab.classList.add('active');

    if (selectedPanel) {
      selectedPanel.classList.add('active');
      selectedPanel.hidden = false;
    }

    this.activeIndex = index;

    if (focus) {
      selectedTab.focus();
    }

    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('tabs:change', {
      detail: { index, tab: selectedTab, panel: selectedPanel }
    }));
  }

  handleKeydown(e, index) {
    const isVertical = this.options.orientation === 'vertical';
    const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft';
    const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight';

    switch (e.key) {
      case nextKey:
        e.preventDefault();
        const nextIndex = index < this.tabs.length - 1 ? index + 1 : 0;
        this.selectTab(nextIndex);
        break;

      case prevKey:
        e.preventDefault();
        const prevIndex = index > 0 ? index - 1 : this.tabs.length - 1;
        this.selectTab(prevIndex);
        break;

      case 'Home':
        e.preventDefault();
        this.selectTab(0);
        break;

      case 'End':
        e.preventDefault();
        this.selectTab(this.tabs.length - 1);
        break;
    }
  }

  destroy() {
    this.tabs.forEach(tab => {
      tab.removeAttribute('aria-selected');
      tab.removeAttribute('aria-controls');
      tab.removeAttribute('tabindex');
    });
  }

  // Static methods
  static initAll(selector = '[data-tabs]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminTabs) {
        el._jasminTabs = new Tabs(el, {
          orientation: el.dataset.tabsOrientation || 'horizontal'
        });
      }
    });
  }

  static getInstance(element) {
    return element._jasminTabs;
  }
}

export default Tabs;
