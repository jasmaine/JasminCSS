export function generateProgressStyles(config) {
  return `/* Progress Bar */
.progress {
  display: flex;
  height: 0.625rem;
  overflow: hidden;
  background-color: var(--j-bg-muted);
  border-radius: var(--j-radius-full, 9999px);
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: white;
  text-align: center;
  white-space: nowrap;
  background-color: var(--j-primary);
  transition: width 300ms ease-in-out;
}

/* Progress Sizes */
.progress-xs {
  height: 0.25rem;
}

.progress-sm {
  height: 0.5rem;
}

.progress-lg {
  height: 1rem;
}

.progress-xl {
  height: 1.5rem;
}

/* Progress with Label */
.progress-xl .progress-bar {
  font-size: 0.75rem;
  font-weight: 500;
}

/* Progress Colors */
.progress-bar-primary {
  background-color: var(--j-primary);
}

.progress-bar-secondary {
  background-color: var(--j-secondary);
}

.progress-bar-accent {
  background-color: var(--j-accent);
}

.progress-bar-success {
  background-color: var(--j-success);
}

.progress-bar-warning {
  background-color: var(--j-warning);
}

.progress-bar-error {
  background-color: var(--j-error);
}

.progress-bar-info {
  background-color: var(--j-info);
}

/* Gradient Progress */
.progress-bar-gradient {
  background: linear-gradient(90deg, var(--j-primary), var(--j-secondary));
}

/* Striped Progress */
.progress-bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}

/* Animated Striped Progress */
.progress-bar-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}

/* Indeterminate Progress */
.progress-indeterminate .progress-bar {
  width: 30% !important;
  animation: progress-indeterminate 1.5s ease-in-out infinite;
}

@keyframes progress-indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

/* Glow Progress (Futuristic) */
.progress-glow .progress-bar {
  box-shadow: 0 0 10px var(--j-primary);
}

.progress-glow .progress-bar-secondary {
  box-shadow: 0 0 10px var(--j-secondary);
}

.progress-glow .progress-bar-success {
  box-shadow: 0 0 10px var(--j-success);
}

/* Stacked Progress */
.progress-stacked {
  display: flex;
  gap: 0.125rem;
}

.progress-stacked .progress-bar {
  border-radius: 0;
}

.progress-stacked .progress-bar:first-child {
  border-top-left-radius: var(--j-radius-full, 9999px);
  border-bottom-left-radius: var(--j-radius-full, 9999px);
}

.progress-stacked .progress-bar:last-child {
  border-top-right-radius: var(--j-radius-full, 9999px);
  border-bottom-right-radius: var(--j-radius-full, 9999px);
}

/* Progress with Label Outside */
.progress-labeled {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.progress-label-text {
  color: var(--j-text);
  font-weight: 500;
}

.progress-label-value {
  color: var(--j-text-subtle);
}

/* Circular Progress / Spinner */
.spinner {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--j-bg-muted);
  border-top-color: var(--j-primary);
  border-radius: 50%;
  animation: j-spin 0.8s linear infinite;
}

/* Spinner Sizes */
.spinner-xs {
  width: 1rem;
  height: 1rem;
  border-width: 2px;
}

.spinner-sm {
  width: 1.5rem;
  height: 1.5rem;
  border-width: 2px;
}

.spinner-lg {
  width: 3rem;
  height: 3rem;
  border-width: 4px;
}

.spinner-xl {
  width: 4rem;
  height: 4rem;
  border-width: 5px;
}

/* Spinner Colors */
.spinner-primary {
  border-top-color: var(--j-primary);
}

.spinner-secondary {
  border-top-color: var(--j-secondary);
}

.spinner-success {
  border-top-color: var(--j-success);
}

.spinner-warning {
  border-top-color: var(--j-warning);
}

.spinner-error {
  border-top-color: var(--j-error);
}

.spinner-white {
  border-color: rgba(255, 255, 255, 0.2);
  border-top-color: white;
}

/* Dots Loader */
.dots-loader {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.dots-loader span {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--j-primary);
  animation: dots-bounce 1.4s ease-in-out infinite both;
}

.dots-loader span:nth-child(1) {
  animation-delay: -0.32s;
}

.dots-loader span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes dots-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

/* Pulse Loader */
.pulse-loader {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--j-primary);
  animation: pulse-scale 1.5s ease-in-out infinite;
}

@keyframes pulse-scale {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* Bar Loader */
.bar-loader {
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  height: 1.5rem;
}

.bar-loader span {
  width: 0.25rem;
  background-color: var(--j-primary);
  border-radius: 2px;
  animation: bar-stretch 1.2s ease-in-out infinite;
}

.bar-loader span:nth-child(1) { animation-delay: 0s; }
.bar-loader span:nth-child(2) { animation-delay: 0.1s; }
.bar-loader span:nth-child(3) { animation-delay: 0.2s; }
.bar-loader span:nth-child(4) { animation-delay: 0.3s; }

@keyframes bar-stretch {
  0%, 40%, 100% {
    height: 0.5rem;
  }
  20% {
    height: 1.5rem;
  }
}

/* Loading Overlay */
.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  z-index: 10;
}

.loading-overlay-dark {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.loading-text {
  font-size: 0.875rem;
  color: var(--j-text-subtle);
}

/* Progress Circle (SVG-based) */
.progress-circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.progress-circle svg {
  transform: rotate(-90deg);
}

.progress-circle-track {
  stroke: var(--j-bg-muted);
  fill: none;
}

.progress-circle-bar {
  stroke: var(--j-primary);
  fill: none;
  stroke-linecap: round;
  transition: stroke-dashoffset 300ms ease-in-out;
}

.progress-circle-value {
  position: absolute;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--j-text);
}

/* Progress Circle Sizes */
.progress-circle-sm {
  width: 3rem;
  height: 3rem;
}

.progress-circle-sm .progress-circle-value {
  font-size: 0.75rem;
}

.progress-circle-lg {
  width: 6rem;
  height: 6rem;
}

.progress-circle-lg .progress-circle-value {
  font-size: 1.25rem;
}
`;
}
