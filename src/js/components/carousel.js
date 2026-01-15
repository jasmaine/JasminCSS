/**
 * JasminCSS Carousel Component
 * Handles image/content carousels with autoplay and accessibility
 */

class Carousel {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      autoplay: false,
      interval: 5000,
      pause: 'hover',
      wrap: true,
      keyboard: true,
      touch: true,
      ...options
    };

    this.inner = element.querySelector('.carousel-inner');
    this.items = Array.from(element.querySelectorAll('.carousel-item'));
    this.indicators = Array.from(element.querySelectorAll('.carousel-indicator, [data-carousel-slide-to]'));
    this.prevBtn = element.querySelector('.carousel-control-prev, [data-carousel-prev]');
    this.nextBtn = element.querySelector('.carousel-control-next, [data-carousel-next]');

    this.currentIndex = 0;
    this.isAnimating = false;
    this.autoplayInterval = null;
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    // Find initial active item
    this.items.forEach((item, index) => {
      if (item.classList.contains('active')) {
        this.currentIndex = index;
      }
      item.setAttribute('role', 'group');
      item.setAttribute('aria-roledescription', 'slide');
      item.setAttribute('aria-label', `Slide ${index + 1} of ${this.items.length}`);
    });

    // Set ARIA
    this.element.setAttribute('role', 'region');
    this.element.setAttribute('aria-roledescription', 'carousel');

    // Control buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.next();
      });
    }

    // Indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', (e) => {
        e.preventDefault();
        this.goTo(index);
      });
    });

    // Keyboard navigation
    if (this.options.keyboard) {
      this.element.setAttribute('tabindex', '0');
      this.element.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.next();
        }
      });
    }

    // Touch support
    if (this.options.touch) {
      this.element.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
      }, { passive: true });

      this.element.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].clientX;
        this.handleSwipe();
      }, { passive: true });
    }

    // Pause on hover
    if (this.options.pause === 'hover') {
      this.element.addEventListener('mouseenter', () => this.stopAutoplay());
      this.element.addEventListener('mouseleave', () => {
        if (this.options.autoplay) this.startAutoplay();
      });
    }

    // Start autoplay
    if (this.options.autoplay) {
      this.startAutoplay();
    }

    // Set initial state
    this.updateSlide();
  }

  goTo(index) {
    if (this.isAnimating || index === this.currentIndex) return;

    if (!this.options.wrap) {
      if (index < 0 || index >= this.items.length) return;
    }

    // Handle wrapping
    if (index < 0) {
      index = this.items.length - 1;
    } else if (index >= this.items.length) {
      index = 0;
    }

    this.isAnimating = true;
    const direction = index > this.currentIndex ? 'next' : 'prev';

    // Dispatch before event
    this.element.dispatchEvent(new CustomEvent('carousel:slide', {
      detail: { from: this.currentIndex, to: index, direction }
    }));

    this.currentIndex = index;
    this.updateSlide();

    setTimeout(() => {
      this.isAnimating = false;
      this.element.dispatchEvent(new CustomEvent('carousel:slid', {
        detail: { index: this.currentIndex }
      }));
    }, 600);
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  prev() {
    this.goTo(this.currentIndex - 1);
  }

  updateSlide() {
    // Update items
    this.items.forEach((item, index) => {
      item.classList.toggle('active', index === this.currentIndex);
      item.setAttribute('aria-hidden', index !== this.currentIndex);
    });

    // Update indicators
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
      indicator.setAttribute('aria-selected', index === this.currentIndex);
    });

    // Update live region
    this.element.setAttribute('aria-live', 'polite');
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }

  startAutoplay() {
    if (this.autoplayInterval) return;

    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.options.interval);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  destroy() {
    this.stopAutoplay();
  }

  // Static methods
  static initAll(selector = '[data-carousel]') {
    document.querySelectorAll(selector).forEach(el => {
      if (!el._jasminCarousel) {
        el._jasminCarousel = new Carousel(el, {
          autoplay: el.dataset.carouselAutoplay === 'true',
          interval: parseInt(el.dataset.carouselInterval) || 5000,
          pause: el.dataset.carouselPause || 'hover',
          wrap: el.dataset.carouselWrap !== 'false',
          keyboard: el.dataset.carouselKeyboard !== 'false',
          touch: el.dataset.carouselTouch !== 'false'
        });
      }
    });
  }

  static getInstance(element) {
    return element._jasminCarousel;
  }
}

export default Carousel;
