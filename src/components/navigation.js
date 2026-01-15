export function generateNavigationStyles(config) {
  return `/* Navbar */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  background-color: var(--j-bg);
  border-bottom: 1px solid var(--j-border);
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--j-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--j-text-subtle);
  text-decoration: none;
  border-radius: var(--j-radius-default, 0.5rem);
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
}

.nav-link:hover {
  color: var(--j-text);
  background-color: var(--j-bg-subtle);
}

.nav-link.active {
  color: var(--j-primary);
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
}

.nav-link:focus-visible {
  outline: 2px solid var(--j-primary);
  outline-offset: 2px;
}

/* Navbar Variants */
.navbar-dark {
  background-color: var(--j-gray-900, #18181b);
  border-color: var(--j-gray-800, #27272a);
}

.navbar-dark .navbar-brand,
.navbar-dark .nav-link {
  color: rgba(255, 255, 255, 0.8);
}

.navbar-dark .nav-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}

.navbar-dark .nav-link.active {
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
}

.navbar-transparent {
  background-color: transparent;
  border: none;
}

.navbar-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: none;
}

.navbar-sticky {
  position: sticky;
  top: 0;
  z-index: var(--j-z-sticky, 1020);
}

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--j-z-fixed, 1030);
}

/* Mobile Toggle */
.navbar-toggle {
  display: none;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--j-text);
}

.navbar-toggle-icon {
  display: block;
  width: 1.5rem;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  position: relative;
}

.navbar-toggle-icon::before,
.navbar-toggle-icon::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  border-radius: 2px;
  transition: transform 200ms ease-in-out;
}

.navbar-toggle-icon::before {
  top: -6px;
}

.navbar-toggle-icon::after {
  top: 6px;
}

.navbar-collapse {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }

  .navbar-collapse {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--j-bg);
    border-bottom: 1px solid var(--j-border);
    box-shadow: var(--j-shadow-lg);
  }

  .navbar-collapse.show {
    display: flex;
  }

  .navbar-nav {
    flex-direction: column;
    width: 100%;
  }

  .nav-link {
    width: 100%;
    justify-content: flex-start;
  }
}

/* Sidebar Navigation */
.sidebar {
  width: 16rem;
  height: 100vh;
  background-color: var(--j-bg);
  border-right: 1px solid var(--j-border);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
}

.sidebar-header {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--j-border);
}

.sidebar-body {
  flex: 1;
  padding: 1rem 0.75rem;
  overflow-y: auto;
}

.sidebar-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--j-border);
}

.sidebar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-nav-item {
  margin-bottom: 0.25rem;
}

.sidebar-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: var(--j-text-subtle);
  text-decoration: none;
  border-radius: var(--j-radius-default, 0.5rem);
  transition: all 150ms ease-in-out;
}

.sidebar-nav-link:hover {
  color: var(--j-text);
  background-color: var(--j-bg-subtle);
}

.sidebar-nav-link.active {
  color: var(--j-primary);
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent);
}

.sidebar-nav-link-icon {
  width: 1.25rem;
  height: 1.25rem;
  opacity: 0.7;
}

.sidebar-nav-link.active .sidebar-nav-link-icon {
  opacity: 1;
}

/* Sidebar Collapsed */
.sidebar-collapsed {
  width: 4rem;
}

.sidebar-collapsed .sidebar-nav-link span {
  display: none;
}

.sidebar-collapsed .sidebar-header {
  padding: 1rem;
  text-align: center;
}

/* Sidebar Dark */
.sidebar-dark {
  background-color: var(--j-gray-900, #18181b);
  border-color: var(--j-gray-800, #27272a);
}

.sidebar-dark .sidebar-nav-link {
  color: rgba(255, 255, 255, 0.7);
}

.sidebar-dark .sidebar-nav-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark .sidebar-nav-link.active {
  color: white;
  background-color: var(--j-primary);
}

/* Breadcrumb */
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  padding-right: 0.5rem;
  color: var(--j-text-muted);
}

.breadcrumb-item a {
  color: var(--j-text-subtle);
  text-decoration: none;
  transition: color 150ms ease-in-out;
}

.breadcrumb-item a:hover {
  color: var(--j-primary);
}

.breadcrumb-item.active {
  color: var(--j-text);
  font-weight: 500;
}

/* Tabs */
.tabs {
  display: flex;
  border-bottom: 1px solid var(--j-border);
  gap: 0;
}

.tab {
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--j-text-subtle);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
}

.tab:hover {
  color: var(--j-text);
  border-bottom-color: var(--j-border);
}

.tab.active {
  color: var(--j-primary);
  border-bottom-color: var(--j-primary);
}

.tab-content {
  padding: 1.5rem 0;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}

/* Tabs Variants */
.tabs-pills {
  border-bottom: none;
  gap: 0.5rem;
  background-color: var(--j-bg-subtle);
  padding: 0.25rem;
  border-radius: var(--j-radius-default, 0.5rem);
}

.tabs-pills .tab {
  border-bottom: none;
  border-radius: var(--j-radius-default, 0.5rem);
  margin-bottom: 0;
}

.tabs-pills .tab:hover {
  background-color: var(--j-bg);
}

.tabs-pills .tab.active {
  background-color: var(--j-bg);
  box-shadow: var(--j-shadow-sm);
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.page-item {
  display: flex;
}

.page-link {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  color: var(--j-text-subtle);
  text-decoration: none;
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.5rem);
  transition: all 150ms ease-in-out;
}

.page-link:hover {
  color: var(--j-text);
  background-color: var(--j-bg-subtle);
  border-color: var(--j-border);
}

.page-item.active .page-link {
  color: white;
  background-color: var(--j-primary);
  border-color: var(--j-primary);
}

.page-item.disabled .page-link {
  color: var(--j-text-muted);
  pointer-events: none;
  opacity: 0.5;
}

/* Pagination Sizes */
.pagination-sm .page-link {
  min-width: 1.75rem;
  height: 1.75rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.8125rem;
}

.pagination-lg .page-link {
  min-width: 2.75rem;
  height: 2.75rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
`;
}
