// Carousel/Slider component for JasminCSS

export function generateCarouselStyles(config) {
  return `/* Carousel Base */
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 500ms ease-in-out;
}

.carousel-item {
  flex: 0 0 100%;
  min-width: 100%;
  position: relative;
}

.carousel-item img {
  width: 100%;
  height: auto;
  display: block;
}

/* Carousel Active State */
.carousel-item:not(.active) {
  display: none;
}

.carousel-item.active {
  display: block;
}

/* Fade Transition */
.carousel-fade .carousel-inner {
  transition: none;
}

.carousel-fade .carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 500ms ease-in-out;
}

.carousel-fade .carousel-item.active {
  position: relative;
  opacity: 1;
}

/* Carousel Controls */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: var(--j-text);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 200ms ease-in-out;
  opacity: 0.8;
}

.carousel-control:hover {
  opacity: 1;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.carousel-control:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--j-primary);
}

.carousel-control-prev {
  left: 1rem;
}

.carousel-control-next {
  right: 1rem;
}

.carousel-control svg,
.carousel-control-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Default arrow icons */
.carousel-control-prev::before {
  content: "";
  width: 0.625rem;
  height: 0.625rem;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  margin-left: 0.125rem;
}

.carousel-control-next::before {
  content: "";
  width: 0.625rem;
  height: 0.625rem;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
  margin-right: 0.125rem;
}

.carousel-control:has(svg)::before {
  display: none;
}

/* Dark Controls */
.carousel-control-dark {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}

.carousel-control-dark:hover {
  background-color: rgba(0, 0, 0, 0.85);
}

/* Edge Controls */
.carousel-control-edge {
  border-radius: 0;
  width: 2.5rem;
  height: 100%;
  top: 0;
  transform: none;
  opacity: 0;
}

.carousel:hover .carousel-control-edge {
  opacity: 0.8;
}

.carousel-control-edge.carousel-control-prev {
  left: 0;
}

.carousel-control-edge.carousel-control-next {
  right: 0;
}

/* Carousel Indicators */
.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: var(--j-radius-full, 9999px);
}

.carousel-indicator {
  width: 0.625rem;
  height: 0.625rem;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}

.carousel-indicator:hover {
  background-color: rgba(255, 255, 255, 0.75);
}

.carousel-indicator.active {
  background-color: white;
  transform: scale(1.2);
}

/* Line Indicators */
.carousel-indicators-line .carousel-indicator {
  width: 2rem;
  height: 0.25rem;
  border-radius: var(--j-radius-full, 9999px);
}

.carousel-indicators-line .carousel-indicator.active {
  transform: none;
  width: 2.5rem;
}

/* Number Indicators */
.carousel-indicators-number {
  background-color: transparent;
  gap: 0;
}

.carousel-indicators-number .carousel-indicator {
  width: auto;
  height: auto;
  padding: 0.25rem 0.625rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 0.75rem;
  border-radius: 0;
}

.carousel-indicators-number .carousel-indicator:first-child {
  border-radius: var(--j-radius-default, 0.375rem) 0 0 var(--j-radius-default, 0.375rem);
}

.carousel-indicators-number .carousel-indicator:last-child {
  border-radius: 0 var(--j-radius-default, 0.375rem) var(--j-radius-default, 0.375rem) 0;
}

.carousel-indicators-number .carousel-indicator.active {
  background-color: var(--j-primary);
}

/* Bottom Indicators */
.carousel-indicators-bottom {
  position: relative;
  bottom: auto;
  left: auto;
  transform: none;
  margin-top: 1rem;
  justify-content: center;
}

/* Carousel Captions */
.carousel-caption {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  max-width: 80%;
  padding: 1rem 1.5rem;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: var(--j-radius-lg, 0.5rem);
}

.carousel-caption-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.carousel-caption-text {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
}

/* Bottom Caption */
.carousel-caption-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  transform: none;
  max-width: 100%;
  border-radius: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
}

/* Multiple Items Carousel */
.carousel-multi .carousel-inner {
  display: flex;
}

.carousel-multi .carousel-item {
  flex: 0 0 auto;
  display: block;
}

.carousel-multi-2 .carousel-item {
  width: 50%;
  min-width: 50%;
}

.carousel-multi-3 .carousel-item {
  width: 33.333%;
  min-width: 33.333%;
}

.carousel-multi-4 .carousel-item {
  width: 25%;
  min-width: 25%;
}

.carousel-multi-5 .carousel-item {
  width: 20%;
  min-width: 20%;
}

/* Carousel with Gap */
.carousel-gap .carousel-item {
  padding: 0 0.5rem;
}

.carousel-gap-lg .carousel-item {
  padding: 0 1rem;
}

/* Thumbnail Navigation */
.carousel-thumbnails {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding: 0.25rem;
}

.carousel-thumbnail {
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  padding: 0;
  border: 2px solid transparent;
  border-radius: var(--j-radius-default, 0.375rem);
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: all 200ms ease-in-out;
}

.carousel-thumbnail:hover {
  opacity: 0.8;
}

.carousel-thumbnail.active {
  border-color: var(--j-primary);
  opacity: 1;
}

.carousel-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Progress Bar */
.carousel-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.25rem;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 10;
}

.carousel-progress-bar {
  height: 100%;
  background-color: var(--j-primary);
  transition: width linear;
}

/* Autoplay Indicator */
.carousel-autoplay-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
}

/* Vertical Carousel */
.carousel-vertical .carousel-inner {
  flex-direction: column;
}

.carousel-vertical .carousel-item {
  min-width: auto;
  min-height: 100%;
}

.carousel-vertical .carousel-control-prev {
  top: 1rem;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
}

.carousel-vertical .carousel-control-next {
  top: auto;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
}

.carousel-vertical .carousel-indicators {
  flex-direction: column;
  top: 50%;
  bottom: auto;
  left: auto;
  right: 1rem;
  transform: translateY(-50%);
}

/* Card Carousel */
.carousel-cards .carousel-item {
  padding: 1rem;
}

/* Fullscreen Carousel */
.carousel-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: black;
}

.carousel-fullscreen .carousel-item img {
  width: 100%;
  height: 100vh;
  object-fit: contain;
}

/* Lightbox Close */
.carousel-fullscreen-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 200ms ease-in-out;
}

.carousel-fullscreen-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-control {
    width: 2.5rem;
    height: 2.5rem;
  }

  .carousel-control-prev {
    left: 0.5rem;
  }

  .carousel-control-next {
    right: 0.5rem;
  }

  .carousel-multi-3 .carousel-item,
  .carousel-multi-4 .carousel-item,
  .carousel-multi-5 .carousel-item {
    width: 50%;
    min-width: 50%;
  }
}
`;
}
