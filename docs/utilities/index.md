# Utilities Reference

JasminCSS provides 14 utility categories for rapid UI development.

## Categories

| Category | Description | Example Classes |
|----------|-------------|-----------------|
| [Layout](./layout.md) | Display, flexbox, grid, positioning | `flex`, `grid`, `absolute`, `z-10` |
| [Spacing](./spacing.md) | Padding, margin, gap | `p-4`, `mx-auto`, `gap-2` |
| [Typography](./typography.md) | Font, text, list styles | `text-lg`, `font-bold`, `leading-tight` |
| [Colors](./colors.md) | Text, background, border colors | `text-primary`, `bg-white`, `border-gray-200` |
| [Effects](./effects.md) | Shadow, border radius, opacity | `shadow-lg`, `rounded-xl`, `opacity-50` |
| [Animations](./animations.md) | Transitions, keyframe animations | `transition`, `animate-bounce` |
| [Transforms](./transforms.md) | Scale, rotate, translate | `scale-110`, `rotate-45`, `translate-x-4` |
| [Filters](./filters.md) | Blur, brightness, contrast | `blur-sm`, `brightness-125`, `grayscale` |
| [Icons](./icons.md) | 720 built-in icons | `icon icon-home`, `icon-lg` |
| [Background](./background.md) | Background image, size, position | `bg-cover`, `bg-center`, `bg-fixed` |
| [Columns](./columns.md) | Multi-column layout | `columns-2`, `column-gap-4` |
| [Scroll](./scroll.md) | Scroll padding, snap, behavior | `scroll-smooth`, `snap-x`, `scrollbar-thin` |
| [SVG](./svg.md) | Fill, stroke colors | `fill-current`, `stroke-primary` |
| [Accessibility](./accessibility.md) | Screen reader, focus, motion | `sr-only`, `focus-ring`, `motion-reduce` |

## Responsive Prefixes

All utilities support responsive breakpoints:

| Prefix | Breakpoint | Min Width |
|--------|------------|-----------|
| (none) | Default | 0px |
| `sm:` | Small | 640px |
| `md:` | Medium | 768px |
| `lg:` | Large | 1024px |
| `xl:` | Extra Large | 1280px |
| `2xl:` | 2X Large | 1536px |

```html
<div class="flex flex-col md:flex-row lg:gap-8">
  <!-- Stacked on mobile, row on tablet+ -->
</div>
```

## State Variants

| Prefix | Trigger |
|--------|---------|
| `hover:` | Mouse hover |
| `focus:` | Element focused |
| `focus-visible:` | Keyboard focus |
| `focus-within:` | Child focused |
| `active:` | Being clicked |
| `disabled:` | Disabled state |
| `first:` | First child |
| `last:` | Last child |
| `odd:` | Odd children |
| `even:` | Even children |
| `group-hover:` | Parent .group hovered |
| `dark:` | Dark mode |

```html
<button class="bg-primary hover:bg-primary-dark focus:ring-2">
  Hover me
</button>
```

## Dark Mode

Use the `dark:` prefix for dark mode styles:

```html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  Adapts to dark mode
</div>
```

Enable dark mode by adding `class="dark"` to `<html>`:

```html
<html class="dark">
```

Or use media query (automatic):

```js
// jasmin.config.js
export default {
  darkMode: 'media'
};
```

## Arbitrary Values

Use square brackets for one-off values:

```html
<div class="w-[137px] mt-[23px] bg-[#1da1f2]">
  Custom values
</div>
```

## Quick Reference

### Layout
```
flex inline-flex grid inline-grid block inline-block hidden
flex-row flex-col flex-wrap justify-center items-center
gap-{0-12} grid-cols-{1-12} col-span-{1-12}
```

### Spacing
```
p-{0-12} px-{0-12} py-{0-12} pt-{0-12} pr-{0-12} pb-{0-12} pl-{0-12}
m-{0-12} mx-{0-12} my-{0-12} mt-{0-12} mr-{0-12} mb-{0-12} ml-{0-12}
mx-auto
```

### Typography
```
text-{xs,sm,base,lg,xl,2xl,3xl,4xl}
font-{thin,light,normal,medium,semibold,bold}
text-{left,center,right,justify}
leading-{none,tight,normal,relaxed,loose}
```

### Colors
```
text-{primary,secondary,success,warning,error,info}
bg-{primary,secondary,success,warning,error,info}
border-{primary,secondary,success,warning,error,info}
```

### Effects
```
shadow-{sm,md,lg,xl,2xl,none}
rounded-{sm,md,lg,xl,2xl,full,none}
opacity-{0,25,50,75,100}
```
