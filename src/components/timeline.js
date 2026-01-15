// Timeline component for JasminCSS

export function generateTimelineStyles(config) {
  return `/* Timeline Base */
.timeline {
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
}

/* Timeline Line */
.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1.25rem;
  width: 2px;
  background-color: var(--j-border);
}

/* Timeline Item */
.timeline-item {
  position: relative;
  padding-left: 3.5rem;
  padding-bottom: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

/* Timeline Marker */
.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--j-bg);
  border: 2px solid var(--j-border);
  color: var(--j-text-muted);
  z-index: 1;
}

.timeline-marker-icon {
  width: 1rem;
  height: 1rem;
}

/* Timeline Marker Colors */
.timeline-item-primary .timeline-marker {
  background-color: var(--j-primary);
  border-color: var(--j-primary);
  color: white;
}

.timeline-item-secondary .timeline-marker {
  background-color: var(--j-secondary);
  border-color: var(--j-secondary);
  color: white;
}

.timeline-item-success .timeline-marker {
  background-color: var(--j-success);
  border-color: var(--j-success);
  color: white;
}

.timeline-item-warning .timeline-marker {
  background-color: var(--j-warning);
  border-color: var(--j-warning);
  color: white;
}

.timeline-item-error .timeline-marker {
  background-color: var(--j-error);
  border-color: var(--j-error);
  color: white;
}

.timeline-item-info .timeline-marker {
  background-color: var(--j-info);
  border-color: var(--j-info);
  color: white;
}

/* Timeline Dot Marker */
.timeline-dot .timeline-marker {
  width: 1rem;
  height: 1rem;
  left: 0.75rem;
}

.timeline-dot::before {
  left: 1.1875rem;
}

.timeline-dot .timeline-item {
  padding-left: 3rem;
}

/* Timeline Content */
.timeline-content {
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.5rem);
  padding: 1rem 1.25rem;
  position: relative;
}

/* Timeline Content Arrow */
.timeline-content::before {
  content: "";
  position: absolute;
  top: 0.75rem;
  left: -0.5rem;
  width: 0.75rem;
  height: 0.75rem;
  background-color: var(--j-bg);
  border-left: 1px solid var(--j-border);
  border-bottom: 1px solid var(--j-border);
  transform: rotate(45deg);
}

/* Timeline Header */
.timeline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.timeline-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--j-text);
}

.timeline-time {
  font-size: 0.75rem;
  color: var(--j-text-muted);
  white-space: nowrap;
}

.timeline-body {
  font-size: 0.875rem;
  color: var(--j-text-muted);
}

.timeline-body p {
  margin: 0;
}

.timeline-body p + p {
  margin-top: 0.5rem;
}

/* Timeline Footer */
.timeline-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--j-border);
}

/* Center Timeline */
.timeline-center::before {
  left: 50%;
  transform: translateX(-50%);
}

.timeline-center .timeline-item {
  width: 50%;
  padding-left: 0;
  padding-right: 3.5rem;
}

.timeline-center .timeline-item:nth-child(even) {
  margin-left: 50%;
  padding-left: 3.5rem;
  padding-right: 0;
}

.timeline-center .timeline-marker {
  left: auto;
  right: -1.25rem;
}

.timeline-center .timeline-item:nth-child(even) .timeline-marker {
  left: -1.25rem;
  right: auto;
}

.timeline-center .timeline-content::before {
  left: auto;
  right: -0.5rem;
  transform: rotate(-135deg);
}

.timeline-center .timeline-item:nth-child(even) .timeline-content::before {
  left: -0.5rem;
  right: auto;
  transform: rotate(45deg);
}

/* Right Timeline */
.timeline-right::before {
  left: auto;
  right: 1.25rem;
}

.timeline-right .timeline-item {
  padding-left: 0;
  padding-right: 3.5rem;
  text-align: right;
}

.timeline-right .timeline-marker {
  left: auto;
  right: 0;
}

.timeline-right .timeline-content::before {
  left: auto;
  right: -0.5rem;
  transform: rotate(-135deg);
}

/* Timeline Sizes */
.timeline-sm .timeline-marker {
  width: 2rem;
  height: 2rem;
}

.timeline-sm::before {
  left: 1rem;
}

.timeline-sm .timeline-item {
  padding-left: 3rem;
}

.timeline-sm .timeline-content {
  padding: 0.75rem 1rem;
}

.timeline-lg .timeline-marker {
  width: 3rem;
  height: 3rem;
}

.timeline-lg::before {
  left: 1.5rem;
}

.timeline-lg .timeline-item {
  padding-left: 4rem;
}

/* Timeline Simple (no cards) */
.timeline-simple .timeline-content {
  background: none;
  border: none;
  padding: 0;
}

.timeline-simple .timeline-content::before {
  display: none;
}

/* Timeline Compact */
.timeline-compact .timeline-item {
  padding-bottom: 1rem;
}

.timeline-compact .timeline-content {
  padding: 0.5rem 0.75rem;
}

/* Timeline with Images */
.timeline-image {
  margin-top: 0.75rem;
  border-radius: var(--j-radius-default, 0.375rem);
  overflow: hidden;
}

.timeline-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Timeline Activity Feed */
.timeline-feed .timeline-marker {
  width: 2rem;
  height: 2rem;
}

.timeline-feed::before {
  left: 1rem;
}

.timeline-feed .timeline-item {
  padding-left: 2.75rem;
  padding-bottom: 1rem;
}

.timeline-feed .timeline-content {
  background: none;
  border: none;
  padding: 0;
}

.timeline-feed .timeline-content::before {
  display: none;
}

.timeline-feed .timeline-title {
  font-size: 0.875rem;
  font-weight: 500;
}

.timeline-feed .timeline-body {
  font-size: 0.8125rem;
}

/* Timeline with Avatar */
.timeline-avatar .timeline-marker {
  padding: 0;
  overflow: hidden;
}

.timeline-avatar .timeline-marker img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Horizontal Timeline */
.timeline-horizontal {
  display: flex;
  overflow-x: auto;
  padding-bottom: 1rem;
}

.timeline-horizontal::before {
  top: 1.25rem;
  bottom: auto;
  left: 0;
  right: 0;
  width: auto;
  height: 2px;
}

.timeline-horizontal .timeline-item {
  flex: 0 0 auto;
  width: 200px;
  padding-left: 0;
  padding-top: 3.5rem;
  padding-bottom: 0;
  padding-right: 1rem;
}

.timeline-horizontal .timeline-marker {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-horizontal .timeline-content::before {
  top: -0.5rem;
  left: 50%;
  transform: translateX(-50%) rotate(135deg);
}

/* Glow Timeline (Futuristic) */
.timeline-glow .timeline-item-primary .timeline-marker {
  box-shadow: 0 0 15px var(--j-primary);
}

.timeline-glow .timeline-item-success .timeline-marker {
  box-shadow: 0 0 15px var(--j-success);
}

.timeline-glow .timeline-item-warning .timeline-marker {
  box-shadow: 0 0 15px var(--j-warning);
}

.timeline-glow .timeline-item-error .timeline-marker {
  box-shadow: 0 0 15px var(--j-error);
}

/* Dark Timeline */
.timeline-dark .timeline-content {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
  color: white;
}

.timeline-dark .timeline-title {
  color: white;
}

.timeline-dark .timeline-body {
  color: rgba(255, 255, 255, 0.7);
}

.timeline-dark .timeline-content::before {
  background-color: var(--j-bg-dark, #1f2937);
  border-color: var(--j-border-dark, #374151);
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-center::before {
    left: 1.25rem;
    transform: none;
  }

  .timeline-center .timeline-item,
  .timeline-center .timeline-item:nth-child(even) {
    width: 100%;
    margin-left: 0;
    padding-left: 3.5rem;
    padding-right: 0;
  }

  .timeline-center .timeline-marker,
  .timeline-center .timeline-item:nth-child(even) .timeline-marker {
    left: 0;
    right: auto;
  }

  .timeline-center .timeline-content::before,
  .timeline-center .timeline-item:nth-child(even) .timeline-content::before {
    left: -0.5rem;
    right: auto;
    transform: rotate(45deg);
  }
}
`;
}
