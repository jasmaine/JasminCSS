// Rating/Stars component for JasminCSS

export function generateRatingStyles(config) {
  return `/* Rating Base */
.rating {
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
}

/* Rating Item */
.rating-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background: none;
  border: none;
  color: var(--j-border);
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.rating-item:hover {
  transform: scale(1.1);
}

.rating-item:focus {
  outline: none;
}

.rating-item:focus-visible {
  outline: 2px solid var(--j-primary);
  outline-offset: 2px;
  border-radius: var(--j-radius-sm, 0.25rem);
}

/* Rating States */
.rating-item.active,
.rating-item.filled {
  color: var(--j-warning);
}

.rating-item.half {
  position: relative;
}

.rating-item.half::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  color: var(--j-warning);
}

/* Star Icon (default) */
.rating-star {
  width: 100%;
  height: 100%;
}

/* Default star using CSS */
.rating-item::before {
  content: "★";
  font-size: 1.25rem;
  line-height: 1;
}

.rating-item:has(svg)::before,
.rating-item:has(.rating-star)::before {
  display: none;
}

/* Rating Sizes */
.rating-xs .rating-item {
  width: 1rem;
  height: 1rem;
}

.rating-xs .rating-item::before {
  font-size: 0.875rem;
}

.rating-sm .rating-item {
  width: 1.25rem;
  height: 1.25rem;
}

.rating-sm .rating-item::before {
  font-size: 1rem;
}

.rating-lg .rating-item {
  width: 2rem;
  height: 2rem;
}

.rating-lg .rating-item::before {
  font-size: 1.75rem;
}

.rating-xl .rating-item {
  width: 2.5rem;
  height: 2.5rem;
}

.rating-xl .rating-item::before {
  font-size: 2.25rem;
}

/* Rating Colors */
.rating-primary .rating-item.active,
.rating-primary .rating-item.filled {
  color: var(--j-primary);
}

.rating-secondary .rating-item.active,
.rating-secondary .rating-item.filled {
  color: var(--j-secondary);
}

.rating-success .rating-item.active,
.rating-success .rating-item.filled {
  color: var(--j-success);
}

.rating-error .rating-item.active,
.rating-error .rating-item.filled {
  color: var(--j-error);
}

/* Hover Fill Effect */
.rating-hover .rating-item:hover ~ .rating-item {
  color: var(--j-border);
}

.rating-hover:hover .rating-item {
  color: var(--j-warning);
}

.rating-hover .rating-item:hover ~ .rating-item {
  color: var(--j-border);
}

/* Read-only Rating */
.rating-readonly .rating-item {
  cursor: default;
  pointer-events: none;
}

.rating-readonly .rating-item:hover {
  transform: none;
}

/* Disabled Rating */
.rating-disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* Rating with Labels */
.rating-labeled {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.rating-label {
  font-size: 0.875rem;
  color: var(--j-text-muted);
}

.rating-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--j-text);
  min-width: 2rem;
}

/* Rating with Count */
.rating-count {
  font-size: 0.75rem;
  color: var(--j-text-muted);
  margin-left: 0.25rem;
}

/* Heart Rating */
.rating-hearts .rating-item::before {
  content: "♥";
}

/* Emoji Rating */
.rating-emoji .rating-item {
  width: 2rem;
  height: 2rem;
}

.rating-emoji .rating-item::before {
  content: "😐";
  font-size: 1.5rem;
}

.rating-emoji .rating-item:nth-child(1)::before {
  content: "😠";
}

.rating-emoji .rating-item:nth-child(2)::before {
  content: "😕";
}

.rating-emoji .rating-item:nth-child(3)::before {
  content: "😐";
}

.rating-emoji .rating-item:nth-child(4)::before {
  content: "😊";
}

.rating-emoji .rating-item:nth-child(5)::before {
  content: "😍";
}

.rating-emoji .rating-item.active {
  color: inherit;
  transform: scale(1.2);
}

.rating-emoji .rating-item:not(.active) {
  filter: grayscale(1);
  opacity: 0.5;
}

/* Thumbs Rating */
.rating-thumbs {
  gap: 0.5rem;
}

.rating-thumbs .rating-item {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--j-bg-subtle);
  border: 1px solid var(--j-border);
}

.rating-thumbs .rating-item:hover {
  background-color: var(--j-bg-muted);
}

.rating-thumbs .rating-item.active.rating-up {
  background-color: color-mix(in srgb, var(--j-success) 15%, transparent);
  border-color: var(--j-success);
  color: var(--j-success);
}

.rating-thumbs .rating-item.active.rating-down {
  background-color: color-mix(in srgb, var(--j-error) 15%, transparent);
  border-color: var(--j-error);
  color: var(--j-error);
}

/* Rating Bar (for displaying aggregated ratings) */
.rating-bar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.rating-bar-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.rating-bar-label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 3rem;
  font-size: 0.875rem;
  color: var(--j-text-muted);
}

.rating-bar-track {
  flex: 1;
  height: 0.5rem;
  background-color: var(--j-bg-muted);
  border-radius: var(--j-radius-full, 9999px);
  overflow: hidden;
}

.rating-bar-fill {
  height: 100%;
  background-color: var(--j-warning);
  border-radius: var(--j-radius-full, 9999px);
  transition: width 300ms ease-in-out;
}

.rating-bar-count {
  min-width: 2.5rem;
  font-size: 0.75rem;
  color: var(--j-text-muted);
  text-align: right;
}

/* Rating Summary */
.rating-summary {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background-color: var(--j-bg-subtle);
  border-radius: var(--j-radius-lg, 0.5rem);
}

.rating-summary-score {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
}

.rating-summary-value {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  color: var(--j-text);
}

.rating-summary-max {
  font-size: 1rem;
  color: var(--j-text-muted);
}

.rating-summary-total {
  font-size: 0.75rem;
  color: var(--j-text-muted);
  margin-top: 0.25rem;
}

.rating-summary-bars {
  flex: 1;
}

/* Animated Rating */
.rating-animated .rating-item {
  transition: transform 200ms ease-in-out, color 200ms ease-in-out;
}

.rating-animated .rating-item.active {
  animation: j-bounce 400ms ease-out;
}

/* Glow Rating (Futuristic) */
.rating-glow .rating-item.active {
  filter: drop-shadow(0 0 4px currentColor);
}

/* Vertical Rating */
.rating-vertical {
  flex-direction: column;
}

/* Spaced Rating */
.rating-spaced {
  gap: 0.5rem;
}

/* Bordered Rating Items */
.rating-bordered .rating-item {
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-default, 0.375rem);
  padding: 0.25rem;
}

.rating-bordered .rating-item.active {
  border-color: var(--j-warning);
  background-color: color-mix(in srgb, var(--j-warning) 10%, transparent);
}

/* Custom Star Colors by Rating */
.rating-gradient .rating-item:nth-child(1).active { color: #ef4444; }
.rating-gradient .rating-item:nth-child(2).active { color: #f97316; }
.rating-gradient .rating-item:nth-child(3).active { color: #eab308; }
.rating-gradient .rating-item:nth-child(4).active { color: #84cc16; }
.rating-gradient .rating-item:nth-child(5).active { color: #22c55e; }
`;
}
