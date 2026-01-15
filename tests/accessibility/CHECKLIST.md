# JasminCSS Accessibility Audit Checklist

WCAG 2.1 AA compliance checklist for JasminCSS components and templates.

## Perceivable

### 1.1 Text Alternatives

- [ ] All images have `alt` attributes
- [ ] Decorative images have empty `alt=""`
- [ ] Icons have accessible labels (`aria-label` or hidden text)
- [ ] Complex images have detailed descriptions

### 1.2 Time-based Media

- [ ] Video has captions
- [ ] Audio has transcripts
- [ ] No auto-playing media without controls

### 1.3 Adaptable

- [ ] Content is structured with semantic HTML
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Lists use `<ul>`, `<ol>`, `<dl>` appropriately
- [ ] Tables have headers and captions
- [ ] Forms use proper `<label>` associations

### 1.4 Distinguishable

- [ ] **Color contrast** meets 4.5:1 for normal text
- [ ] **Color contrast** meets 3:1 for large text (18px+ or 14px bold)
- [ ] **Color contrast** meets 3:1 for UI components
- [ ] Information is not conveyed by color alone
- [ ] Text can be resized to 200% without loss
- [ ] Content reflows at 320px width
- [ ] No horizontal scrolling at 320px (except data tables)

---

## Operable

### 2.1 Keyboard Accessible

- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Custom widgets support standard keys:
  - [ ] `Enter`/`Space` for activation
  - [ ] `Arrow` keys for navigation
  - [ ] `Escape` for closing
  - [ ] `Tab` for moving focus

### 2.2 Enough Time

- [ ] No time limits, or user can adjust/extend
- [ ] Auto-updating content can be paused

### 2.3 Seizures and Physical Reactions

- [ ] No content flashes more than 3 times/second
- [ ] Animations respect `prefers-reduced-motion`

### 2.4 Navigable

- [ ] Skip links provided for repeated content
- [ ] Page has descriptive `<title>`
- [ ] **Focus order** is logical
- [ ] **Focus visible** on all interactive elements
- [ ] Link purpose is clear from link text
- [ ] Multiple ways to find pages (nav, search, sitemap)
- [ ] Headings describe content

### 2.5 Input Modalities

- [ ] Touch targets are at least 44x44 CSS pixels
- [ ] Dragging has single-pointer alternatives
- [ ] Motion-based input has alternatives

---

## Understandable

### 3.1 Readable

- [ ] Page language is set (`<html lang="en">`)
- [ ] Parts in different languages are marked
- [ ] Unusual words are explained

### 3.2 Predictable

- [ ] No change of context on focus
- [ ] No change of context on input (without warning)
- [ ] Navigation is consistent across pages
- [ ] Components are identified consistently

### 3.3 Input Assistance

- [ ] Errors are identified and described
- [ ] Labels and instructions are provided
- [ ] Error suggestions are helpful
- [ ] Important submissions can be reversed/confirmed

---

## Robust

### 4.1 Compatible

- [ ] HTML is valid (no parsing errors)
- [ ] `name`, `role`, `value` are programmatically determinable
- [ ] Status messages use ARIA live regions

---

## JasminCSS Component Checklist

### Buttons

- [ ] Text content or `aria-label` present
- [ ] Icon-only buttons have accessible name
- [ ] Disabled state uses `disabled` attribute
- [ ] Focus ring visible
- [ ] Sufficient color contrast

### Forms

- [ ] All inputs have associated labels
- [ ] Required fields marked with `required` and visually
- [ ] Error states have `aria-invalid="true"`
- [ ] Error messages linked with `aria-describedby`
- [ ] Field groups use `<fieldset>` and `<legend>`

### Modals

- [ ] Focus trapped inside when open
- [ ] Focus returns to trigger on close
- [ ] `Escape` key closes modal
- [ ] Background is `aria-hidden="true"` when open
- [ ] Has `role="dialog"` and `aria-modal="true"`
- [ ] Has accessible name via `aria-labelledby`

### Dropdowns

- [ ] Toggle has `aria-expanded` state
- [ ] Menu has `role="menu"`
- [ ] Items have `role="menuitem"`
- [ ] Arrow key navigation works
- [ ] `Escape` closes dropdown

### Tabs

- [ ] Tab list has `role="tablist"`
- [ ] Tabs have `role="tab"`
- [ ] Panels have `role="tabpanel"`
- [ ] `aria-selected` on active tab
- [ ] `aria-controls` links tabs to panels
- [ ] Arrow keys navigate between tabs

### Accordions

- [ ] Triggers are `<button>` elements
- [ ] `aria-expanded` state on triggers
- [ ] `aria-controls` links to content
- [ ] Content has unique `id`

### Alerts

- [ ] Uses `role="alert"` for important messages
- [ ] Dismissible alerts have accessible close button
- [ ] Color alone doesn't indicate alert type

### Tooltips

- [ ] Has `role="tooltip"`
- [ ] Linked via `aria-describedby`
- [ ] Visible on focus, not just hover
- [ ] Can be dismissed with `Escape`

### Carousel

- [ ] Has `role="region"` with label
- [ ] Controls are keyboard accessible
- [ ] Auto-play can be paused
- [ ] Slides have accessible descriptions

### Navigation

- [ ] Uses `<nav>` element
- [ ] Current page indicated with `aria-current="page"`
- [ ] Mobile menu is accessible
- [ ] Skip link available

### Tables

- [ ] Has `<caption>` or `aria-label`
- [ ] Header cells use `<th>`
- [ ] `scope` attribute on complex tables
- [ ] Data cells associated with headers

---

## Testing Tools

### Automated Testing

```bash
# Run accessibility tests
npx playwright test tests/accessibility/

# Run axe-core audit
npx @axe-core/cli https://example.com
```

### Browser Extensions

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Manual Testing

1. **Keyboard-only navigation**: Unplug mouse, navigate entire page
2. **Screen reader**: Test with NVDA (Windows), VoiceOver (Mac), or JAWS
3. **Zoom**: Test at 200% and 400% zoom
4. **Color contrast**: Use contrast checker tools
5. **Reduced motion**: Enable `prefers-reduced-motion`

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Inclusive Components](https://inclusive-components.design/)
