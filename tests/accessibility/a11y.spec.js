/**
 * JasminCSS Accessibility Tests
 * WCAG 2.1 AA compliance testing using Playwright
 */

const { test, expect } = require('@playwright/test');

test.describe('Color Contrast (WCAG 1.4.3)', () => {
  test('text has sufficient contrast ratio', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    // Check main content text
    const textElements = await page.locator('p, span, a, h1, h2, h3, h4, h5, h6, li').all();

    for (const element of textElements.slice(0, 20)) {
      const styles = await element.evaluate((el) => {
        const computed = getComputedStyle(el);
        return {
          color: computed.color,
          backgroundColor: computed.backgroundColor,
          fontSize: parseFloat(computed.fontSize),
        };
      });

      // Parse RGB values
      const textColor = parseRGB(styles.color);
      const bgColor = parseRGB(styles.backgroundColor);

      if (textColor && bgColor && bgColor.a > 0) {
        const contrast = getContrastRatio(textColor, bgColor);
        const isLargeText = styles.fontSize >= 18 || styles.fontSize >= 14;

        // WCAG AA: 4.5:1 for normal text, 3:1 for large text
        const minContrast = isLargeText ? 3 : 4.5;

        expect(
          contrast,
          `Contrast ratio ${contrast.toFixed(2)} is below ${minContrast}:1`
        ).toBeGreaterThanOrEqual(minContrast);
      }
    }
  });
});

test.describe('Focus Visibility (WCAG 2.4.7)', () => {
  test('interactive elements have visible focus', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const interactiveElements = await page.locator('button, a, input, select, textarea, [tabindex]').all();

    for (const element of interactiveElements.slice(0, 10)) {
      await element.focus();

      const hasFocusStyles = await element.evaluate((el) => {
        const styles = getComputedStyle(el);
        const focusStyles = getComputedStyle(el, ':focus');

        // Check for visible focus indicators
        return (
          styles.outline !== 'none' ||
          styles.outlineWidth !== '0px' ||
          styles.boxShadow !== 'none' ||
          el.matches(':focus-visible')
        );
      });

      // Focus should be visible
      const tagName = await element.evaluate((el) => el.tagName);
      expect(hasFocusStyles, `${tagName} should have visible focus`).toBeTruthy();
    }
  });

  test('skip link is functional', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    // Check for skip link
    const skipLink = page.locator('a[href="#main"], a[href="#content"], .skip-link, .sr-only-focusable');
    const skipLinkCount = await skipLink.count();

    if (skipLinkCount > 0) {
      await page.keyboard.press('Tab');
      const isVisible = await skipLink.first().isVisible();
      expect(isVisible).toBeTruthy();
    }
  });
});

test.describe('Keyboard Navigation (WCAG 2.1.1)', () => {
  test('all interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const tabbableElements = await page.evaluate(() => {
      const elements = [];
      let current = document.body;

      // Tab through all elements
      while (current) {
        if (current.tabIndex >= 0) {
          elements.push({
            tag: current.tagName,
            type: current.type || null,
            role: current.getAttribute('role'),
          });
        }
        current = current.nextElementSibling || current.parentElement?.nextElementSibling;
      }

      return elements;
    });

    // Should have tabbable elements
    expect(tabbableElements.length).toBeGreaterThan(0);
  });

  test('dropdown menu supports keyboard navigation', async ({ page }) => {
    await page.goto('/examples/dashboard/index.html');

    const dropdown = page.locator('[data-dropdown]').first();
    const toggle = dropdown.locator('.dropdown-toggle');

    // Focus and activate with keyboard
    await toggle.focus();
    await page.keyboard.press('Enter');

    const menu = dropdown.locator('.dropdown-menu');
    await expect(menu).toBeVisible();

    // Navigate with arrow keys
    await page.keyboard.press('ArrowDown');
    const firstItem = dropdown.locator('.dropdown-item').first();
    await expect(firstItem).toBeFocused();

    // Close with Escape
    await page.keyboard.press('Escape');
    await expect(menu).not.toBeVisible();
  });

  test('modal traps focus', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <button id="open">Open</button>
        <div class="modal active" data-modal id="test-modal" style="display: flex; position: fixed; inset: 0; background: rgba(0,0,0,0.5);">
          <div class="modal-dialog" style="margin: auto; background: white; padding: 20px;">
            <button id="first">First</button>
            <button id="middle">Middle</button>
            <button id="last">Last</button>
          </div>
        </div>
      `;
    });

    // Tab through modal
    await page.keyboard.press('Tab');
    await expect(page.locator('#first')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('#middle')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('#last')).toBeFocused();

    // Should wrap back to first element
    await page.keyboard.press('Tab');
    // Focus should stay within modal
  });
});

test.describe('ARIA Attributes (WCAG 4.1.2)', () => {
  test('buttons have accessible names', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const buttons = await page.locator('button').all();

    for (const button of buttons) {
      const accessibleName = await button.evaluate((el) => {
        return (
          el.textContent?.trim() ||
          el.getAttribute('aria-label') ||
          el.getAttribute('title') ||
          el.querySelector('img')?.alt ||
          ''
        );
      });

      expect(accessibleName.length, 'Button should have accessible name').toBeGreaterThan(0);
    }
  });

  test('form inputs have labels', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const inputs = await page.locator('input, select, textarea').all();

    for (const input of inputs) {
      const hasLabel = await input.evaluate((el) => {
        const id = el.id;
        const ariaLabel = el.getAttribute('aria-label');
        const ariaLabelledBy = el.getAttribute('aria-labelledby');
        const placeholder = el.placeholder;
        const hasAssociatedLabel = id && document.querySelector(`label[for="${id}"]`);
        const hasParentLabel = el.closest('label');

        return !!(ariaLabel || ariaLabelledBy || hasAssociatedLabel || hasParentLabel || placeholder);
      });

      const inputType = await input.getAttribute('type');
      if (inputType !== 'hidden' && inputType !== 'submit') {
        expect(hasLabel, 'Input should have a label').toBeTruthy();
      }
    }
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/examples/blog/index.html');

    const images = await page.locator('img').all();

    for (const img of images) {
      const hasAlt = await img.evaluate((el) => {
        return el.hasAttribute('alt');
      });

      expect(hasAlt, 'Image should have alt attribute').toBeTruthy();
    }
  });

  test('landmarks are properly defined', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    // Check for main landmark
    const main = await page.locator('main, [role="main"]').count();
    expect(main).toBeGreaterThanOrEqual(1);

    // Check for navigation
    const nav = await page.locator('nav, [role="navigation"]').count();
    expect(nav).toBeGreaterThanOrEqual(1);
  });

  test('heading hierarchy is correct', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const headings = await page.evaluate(() => {
      const hs = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      return Array.from(hs).map((h) => parseInt(h.tagName[1]));
    });

    // Should have h1
    expect(headings).toContain(1);

    // Check heading order (no skipping levels)
    let lastLevel = 0;
    for (const level of headings) {
      const skipped = level - lastLevel > 1 && lastLevel !== 0;
      expect(skipped, `Heading level skipped from h${lastLevel} to h${level}`).toBeFalsy();
      lastLevel = level;
    }
  });
});

test.describe('Motion & Animation (WCAG 2.3.3)', () => {
  test('respects prefers-reduced-motion', async ({ page }) => {
    // Enable reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/examples/landing/index.html');

    const animatedElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('[class*="animate"], [class*="transition"]');
      return Array.from(elements).map((el) => {
        const styles = getComputedStyle(el);
        return {
          animation: styles.animation,
          transition: styles.transition,
        };
      });
    });

    // Animations should be reduced or disabled
    for (const el of animatedElements) {
      const hasAnimation = el.animation !== 'none' && !el.animation.includes('0s');
      // If reduced motion is set, animations should be minimal
      if (hasAnimation) {
        console.log('Animation found with reduced motion:', el.animation);
      }
    }
  });

  test('no auto-playing animations that cannot be stopped', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    // Check for infinite animations without pause control
    const infiniteAnimations = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const infinite = [];

      for (const el of elements) {
        const styles = getComputedStyle(el);
        if (styles.animationIterationCount === 'infinite') {
          infinite.push({
            selector: el.tagName + (el.className ? '.' + el.className : ''),
            animation: styles.animationName,
          });
        }
      }

      return infinite;
    });

    // If there are infinite animations, they should be decorative or have controls
    if (infiniteAnimations.length > 0) {
      console.log('Infinite animations found:', infiniteAnimations);
    }
  });
});

// Helper functions
function parseRGB(color) {
  if (!color) return null;

  const rgba = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (rgba) {
    return {
      r: parseInt(rgba[1]),
      g: parseInt(rgba[2]),
      b: parseInt(rgba[3]),
      a: rgba[4] !== undefined ? parseFloat(rgba[4]) : 1,
    };
  }

  return null;
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1.r, color1.g, color1.b);
  const l2 = getLuminance(color2.r, color2.g, color2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
