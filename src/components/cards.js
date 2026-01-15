export function generateCardStyles(config) {
  return `/* Card Base */
.card {
  background-color: var(--j-bg);
  border: 1px solid var(--j-border);
  border-radius: var(--j-radius-lg, 0.75rem);
  overflow: hidden;
}

.card-body {
  padding: 1.5rem;
}

.card-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--j-border);
  background-color: var(--j-bg-subtle);
}

.card-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--j-border);
  background-color: var(--j-bg-subtle);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--j-text);
}

.card-subtitle {
  font-size: 0.875rem;
  color: var(--j-text-subtle);
  margin-bottom: 0.75rem;
}

.card-text {
  color: var(--j-text);
  line-height: 1.6;
}

.card-img,
.card-image {
  width: 100%;
  height: auto;
  display: block;
}

.card-img-top {
  border-top-left-radius: calc(var(--j-radius-lg, 0.75rem) - 1px);
  border-top-right-radius: calc(var(--j-radius-lg, 0.75rem) - 1px);
}

.card-img-bottom {
  border-bottom-left-radius: calc(var(--j-radius-lg, 0.75rem) - 1px);
  border-bottom-right-radius: calc(var(--j-radius-lg, 0.75rem) - 1px);
}

/* Card Variants */
.card-bordered {
  border-width: 2px;
}

.card-shadow {
  border: none;
  box-shadow: var(--j-shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1));
}

.card-elevated {
  border: none;
  box-shadow: var(--j-shadow-xl, 0 20px 25px -5px rgb(0 0 0 / 0.1));
}

/* Hover Effects */
.card-hover {
  transition: all 200ms ease-in-out;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--j-shadow-xl, 0 20px 25px -5px rgb(0 0 0 / 0.1));
}

.card-hover-scale {
  transition: transform 200ms ease-in-out;
}

.card-hover-scale:hover {
  transform: scale(1.02);
}

.card-hover-glow {
  transition: box-shadow 200ms ease-in-out;
}

.card-hover-glow:hover {
  box-shadow: 0 0 30px color-mix(in srgb, var(--j-primary) 30%, transparent);
}

/* Card Colors */
.card-primary {
  border-color: var(--j-primary);
  border-left-width: 4px;
}

.card-secondary {
  border-color: var(--j-secondary);
  border-left-width: 4px;
}

.card-success {
  border-color: var(--j-success);
  border-left-width: 4px;
}

.card-warning {
  border-color: var(--j-warning);
  border-left-width: 4px;
}

.card-error {
  border-color: var(--j-error);
  border-left-width: 4px;
}

.card-info {
  border-color: var(--j-info);
  border-left-width: 4px;
}

/* Card Filled */
.card-filled-primary {
  background-color: color-mix(in srgb, var(--j-primary) 10%, var(--j-bg));
  border-color: var(--j-primary);
}

.card-filled-secondary {
  background-color: color-mix(in srgb, var(--j-secondary) 10%, var(--j-bg));
  border-color: var(--j-secondary);
}

.card-filled-success {
  background-color: color-mix(in srgb, var(--j-success) 10%, var(--j-bg));
  border-color: var(--j-success);
}

.card-filled-error {
  background-color: color-mix(in srgb, var(--j-error) 10%, var(--j-bg));
  border-color: var(--j-error);
}

/* Glass Card (Futuristic) */
.card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-glass-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Gradient Card */
.card-gradient {
  background: linear-gradient(135deg, var(--j-bg), var(--j-bg-subtle));
  border: none;
}

.card-gradient-primary {
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--j-primary) 20%, var(--j-bg)),
    color-mix(in srgb, var(--j-secondary) 20%, var(--j-bg))
  );
  border: none;
}

/* Compact Card */
.card-compact .card-body {
  padding: 1rem;
}

.card-compact .card-header,
.card-compact .card-footer {
  padding: 0.75rem 1rem;
}

/* Wide Card */
.card-horizontal {
  display: flex;
  flex-direction: row;
}

.card-horizontal .card-img {
  width: 40%;
  object-fit: cover;
}

.card-horizontal .card-body {
  flex: 1;
}

@media (max-width: 640px) {
  .card-horizontal {
    flex-direction: column;
  }

  .card-horizontal .card-img {
    width: 100%;
  }
}

/* Card Actions */
.card-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.card-actions-end {
  justify-content: flex-end;
}

.card-actions-center {
  justify-content: center;
}

.card-actions-between {
  justify-content: space-between;
}

/* Card with Image Overlay */
.card-overlay {
  position: relative;
}

.card-overlay .card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay .card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 2rem 1.5rem 1.5rem;
}

.card-overlay .card-title,
.card-overlay .card-text {
  color: white;
}

/* Card Group */
.card-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card-group > .card {
  flex: 1 0 calc(33.333% - 1rem);
  min-width: 280px;
}

/* Card Stack */
.card-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Pricing Card */
.card-pricing {
  text-align: center;
}

.card-pricing .card-body {
  padding: 2rem;
}

.card-pricing-price {
  font-size: 3rem;
  font-weight: 700;
  color: var(--j-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.card-pricing-price-period {
  font-size: 1rem;
  font-weight: 400;
  color: var(--j-text-subtle);
}

.card-pricing-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
}

.card-pricing-features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--j-border);
}

.card-pricing-features li:last-child {
  border-bottom: none;
}

.card-pricing-popular {
  border-color: var(--j-primary);
  border-width: 2px;
  position: relative;
}

.card-pricing-popular::before {
  content: "Popular";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--j-primary);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}
`;
}
