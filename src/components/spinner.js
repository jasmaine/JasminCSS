// Spinner/Loader component for JasminCSS

export function generateSpinnerStyles(config) {
  return `/* Spinner Base */
.spinner {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--j-border);
  border-top-color: var(--j-primary);
  border-radius: 50%;
  animation: spinner-rotate 0.75s linear infinite;
}

@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
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

.spinner-info {
  border-top-color: var(--j-info);
}

.spinner-white {
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: white;
}

.spinner-dark {
  border-color: rgba(0, 0, 0, 0.1);
  border-top-color: var(--j-text);
}

/* Spinner Growing */
.spinner-grow {
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  background-color: var(--j-primary);
  animation: spinner-grow 0.75s ease-in-out infinite;
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.spinner-grow.spinner-xs { width: 1rem; height: 1rem; }
.spinner-grow.spinner-sm { width: 1.5rem; height: 1.5rem; }
.spinner-grow.spinner-lg { width: 3rem; height: 3rem; }
.spinner-grow.spinner-xl { width: 4rem; height: 4rem; }

.spinner-grow.spinner-primary { background-color: var(--j-primary); }
.spinner-grow.spinner-secondary { background-color: var(--j-secondary); }
.spinner-grow.spinner-success { background-color: var(--j-success); }
.spinner-grow.spinner-warning { background-color: var(--j-warning); }
.spinner-grow.spinner-error { background-color: var(--j-error); }
.spinner-grow.spinner-white { background-color: white; }

/* Dots Spinner */
.spinner-dots {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  width: auto;
  height: auto;
  border: none;
  animation: none;
}

.spinner-dots::before,
.spinner-dots::after,
.spinner-dot {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--j-primary);
  animation: spinner-dots-bounce 1.4s ease-in-out infinite both;
}

.spinner-dots::before {
  animation-delay: -0.32s;
}

.spinner-dot {
  animation-delay: -0.16s;
}

@keyframes spinner-dots-bounce {
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.spinner-dots.spinner-sm::before,
.spinner-dots.spinner-sm::after,
.spinner-dots.spinner-sm .spinner-dot {
  width: 0.375rem;
  height: 0.375rem;
}

.spinner-dots.spinner-lg::before,
.spinner-dots.spinner-lg::after,
.spinner-dots.spinner-lg .spinner-dot {
  width: 0.75rem;
  height: 0.75rem;
}

/* Pulse Spinner */
.spinner-pulse {
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  background-color: var(--j-primary);
  animation: spinner-pulse 1.5s ease-in-out infinite;
}

@keyframes spinner-pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
}

/* Ring Spinner */
.spinner-ring {
  width: 2rem;
  height: 2rem;
  border: none;
  position: relative;
  animation: none;
}

.spinner-ring::before,
.spinner-ring::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 3px solid var(--j-primary);
  border-radius: 50%;
  animation: spinner-ring 1.5s ease-in-out infinite;
}

.spinner-ring::after {
  animation-delay: 0.75s;
}

@keyframes spinner-ring {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Bars Spinner */
.spinner-bars {
  display: inline-flex;
  align-items: flex-end;
  gap: 0.125rem;
  width: auto;
  height: 1.5rem;
  border: none;
  animation: none;
}

.spinner-bars::before,
.spinner-bars::after,
.spinner-bar {
  content: "";
  width: 0.25rem;
  height: 100%;
  background-color: var(--j-primary);
  animation: spinner-bars 1.2s ease-in-out infinite;
}

.spinner-bars::before {
  animation-delay: -0.24s;
}

.spinner-bar {
  animation-delay: -0.12s;
}

@keyframes spinner-bars {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

/* Spinner with Text */
.spinner-text {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.spinner-label {
  font-size: 0.875rem;
  color: var(--j-text-muted);
}

/* Spinner Overlay */
.spinner-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
}

.dark .spinner-overlay {
  background-color: rgba(0, 0, 0, 0.8);
}

.spinner-overlay-inline {
  position: absolute;
}

.spinner-overlay-blur {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Spinner in Container */
.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.spinner-container-sm {
  padding: 1rem;
}

.spinner-container-lg {
  padding: 4rem;
}

/* Button Spinner */
.spinner-button {
  width: 1rem;
  height: 1rem;
  border-width: 2px;
  margin-right: 0.5rem;
}

/* Skeleton Spinner (for content loading) */
.spinner-skeleton {
  position: relative;
  width: 100%;
  height: 1rem;
  background-color: var(--j-bg-muted);
  border-radius: var(--j-radius-default, 0.375rem);
  overflow: hidden;
  border: none;
  animation: none;
}

.spinner-skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: spinner-skeleton 1.5s infinite;
}

@keyframes spinner-skeleton {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Circular Progress Spinner */
.spinner-progress {
  width: 2rem;
  height: 2rem;
  border: none;
  animation: none;
  position: relative;
}

.spinner-progress svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.spinner-progress-track {
  fill: none;
  stroke: var(--j-border);
  stroke-width: 3;
}

.spinner-progress-fill {
  fill: none;
  stroke: var(--j-primary);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 75;
  transition: stroke-dashoffset 300ms ease-in-out;
}

/* Glow Spinner (Futuristic) */
.spinner-glow {
  border-color: transparent;
  border-top-color: var(--j-primary);
  box-shadow: 0 0 15px var(--j-primary);
}

.spinner-glow-grow {
  box-shadow: 0 0 20px var(--j-primary);
}

/* Loading Dots Animation */
.loading-dots::after {
  content: ".";
  animation: loading-dots 1.5s steps(4, end) infinite;
}

@keyframes loading-dots {
  0% { content: ""; }
  25% { content: "."; }
  50% { content: ".."; }
  75% { content: "..."; }
  100% { content: ""; }
}

/* Spinner with Progress Text */
.spinner-with-percent {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.spinner-percent {
  position: absolute;
  font-size: 0.625rem;
  font-weight: 600;
  color: var(--j-text);
}

.spinner-lg .spinner-percent {
  font-size: 0.75rem;
}

.spinner-xl .spinner-percent {
  font-size: 0.875rem;
}

/* Inline Spinner */
.spinner-inline {
  display: inline-block;
  width: 1em;
  height: 1em;
  border-width: 0.15em;
  vertical-align: -0.125em;
}
`;
}
