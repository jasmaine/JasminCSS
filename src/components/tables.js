export function generateTableStyles(config) {
  return `/* Table Base */
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.table th,
.table td {
  padding: 0.75rem 1rem;
  text-align: left;
  vertical-align: middle;
}

.table th {
  font-weight: 600;
  color: var(--j-text);
  background-color: var(--j-bg-subtle);
}

.table td {
  color: var(--j-text);
  border-top: 1px solid var(--j-border);
}

.table tbody tr:first-child td {
  border-top: none;
}

/* Bordered Table */
.table-bordered {
  border: 1px solid var(--j-border);
}

.table-bordered th,
.table-bordered td {
  border: 1px solid var(--j-border);
}

/* Striped Table */
.table-striped tbody tr:nth-child(odd) {
  background-color: var(--j-bg-subtle);
}

/* Hover Table */
.table-hover tbody tr {
  transition: background-color 150ms ease-in-out;
}

.table-hover tbody tr:hover {
  background-color: var(--j-bg-subtle);
}

/* Compact Table */
.table-compact th,
.table-compact td {
  padding: 0.5rem 0.75rem;
}

/* Responsive Table */
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Table with Fixed Header */
.table-fixed-header {
  position: relative;
}

.table-fixed-header thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

.table-fixed-header thead th {
  background-color: var(--j-bg);
  box-shadow: 0 1px 0 var(--j-border);
}

/* Table with Fixed Column */
.table-fixed-column th:first-child,
.table-fixed-column td:first-child {
  position: sticky;
  left: 0;
  z-index: 1;
  background-color: var(--j-bg);
  box-shadow: 1px 0 0 var(--j-border);
}

/* Sortable Table */
.table-sortable th {
  cursor: pointer;
  user-select: none;
  transition: background-color 150ms ease-in-out;
}

.table-sortable th:hover {
  background-color: var(--j-bg-muted);
}

.table-sort-icon {
  display: inline-flex;
  margin-left: 0.5rem;
  opacity: 0.3;
}

.table-sortable th[data-sort="asc"] .table-sort-icon,
.table-sortable th[data-sort="desc"] .table-sort-icon {
  opacity: 1;
}

.table-sortable th[data-sort="desc"] .table-sort-icon {
  transform: rotate(180deg);
}

/* Table Selection */
.table-selectable td:first-child,
.table-selectable th:first-child {
  width: 3rem;
  text-align: center;
}

.table-row-selected {
  background-color: color-mix(in srgb, var(--j-primary) 10%, transparent) !important;
}

/* Table Status Colors */
.table-row-success {
  background-color: color-mix(in srgb, var(--j-success) 10%, transparent);
}

.table-row-warning {
  background-color: color-mix(in srgb, var(--j-warning) 10%, transparent);
}

.table-row-error {
  background-color: color-mix(in srgb, var(--j-error) 10%, transparent);
}

.table-row-info {
  background-color: color-mix(in srgb, var(--j-info) 10%, transparent);
}

/* Table Actions Column */
.table-actions {
  width: 1%;
  white-space: nowrap;
  text-align: right;
}

.table-actions-menu {
  display: inline-flex;
  gap: 0.25rem;
}

/* Empty Table State */
.table-empty {
  padding: 3rem 1rem;
  text-align: center;
  color: var(--j-text-muted);
}

.table-empty-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  opacity: 0.5;
}

/* Loading Table State */
.table-loading {
  position: relative;
}

.table-loading::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Data Table Wrapper */
.data-table {
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.75rem);
  overflow: hidden;
}

.data-table .table {
  margin: 0;
}

.data-table .table th:first-child {
  border-top-left-radius: var(--j-radius-lg, 0.75rem);
}

.data-table .table th:last-child {
  border-top-right-radius: var(--j-radius-lg, 0.75rem);
}

/* Data Table Header */
.data-table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--j-border);
  background-color: var(--j-bg);
}

.data-table-title {
  font-size: 1.125rem;
  font-weight: 600;
}

.data-table-actions {
  display: flex;
  gap: 0.5rem;
}

/* Data Table Footer */
.data-table-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--j-border);
  background-color: var(--j-bg-subtle);
}

.data-table-info {
  font-size: 0.8125rem;
  color: var(--j-text-subtle);
}

/* Table Card View (Mobile) */
@media (max-width: 640px) {
  .table-card-mobile thead {
    display: none;
  }

  .table-card-mobile tbody tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid var(--j-border);
    border-radius: var(--j-radius-default, 0.5rem);
    padding: 0.5rem 0;
  }

  .table-card-mobile tbody td {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border: none;
  }

  .table-card-mobile tbody td::before {
    content: attr(data-label);
    font-weight: 600;
    color: var(--j-text);
  }
}

/* Expandable Table Row */
.table-expandable-row {
  cursor: pointer;
}

.table-expandable-row td:first-child::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 0.5rem;
  border-left: 5px solid var(--j-text-muted);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  transition: transform 200ms ease-in-out;
}

.table-expandable-row.expanded td:first-child::before {
  transform: rotate(90deg);
}

.table-expanded-content {
  display: none;
  background-color: var(--j-bg-subtle);
}

.table-expandable-row.expanded + .table-expanded-content {
  display: table-row;
}

.table-expanded-content td {
  padding: 1rem;
}
`;
}
