# JasminCSS Guide

> **Complete reference of all available utility classes and components**
>
> Generated automatically from JasminCSS v1.0.15

## Table of Contents

### Utilities
1. [Layout](#layout)
2. [Spacing](#spacing)
3. [Typography](#typography)
4. [Colors](#colors)
5. [Effects](#effects)
6. [Animations](#animations)
7. [Transforms](#transforms)
8. [Filters](#filters)
9. [Backgrounds](#backgrounds)
10. [Columns](#columns)
11. [Scroll](#scroll)
12. [SVG](#svg)
13. [Accessibility](#accessibility)

### Components
14. [Buttons](#buttons)
15. [Cards](#cards)
16. [Forms](#forms)
17. [Navigation](#navigation)
18. [Alerts](#alerts)
19. [Badges](#badges)
20. [Modals](#modals)
21. [Tables](#tables)
22. [Avatars](#avatars)
23. [Tooltips](#tooltips)
24. [Progress](#progress)
25. [Skeleton](#skeleton)
26. [Dropdown](#dropdown)
27. [Accordion](#accordion)
28. [Chips](#chips)
29. [Offcanvas](#offcanvas)
30. [Carousel](#carousel)
31. [Stepper](#stepper)
32. [Timeline](#timeline)
33. [Rating](#rating)
34. [Upload](#upload)
35. [Spinner](#spinner)
36. [Popover](#popover)
37. [Command Palette](#command-palette)
38. [Datepicker](#datepicker)
39. [Timepicker](#timepicker)

### Other
40. [Responsive Variants](#responsive-variants)
41. [State Variants](#state-variants)
42. [Arbitrary Values](#arbitrary-values)

---

# Utilities

## Layout

> Display, flexbox, grid, positioning, sizing, and more

| Class | CSS |
|-------|-----|
| `block` | `display: block;` |
| `inline-block` | `display: inline-block;` |
| `inline` | `display: inline;` |
| `flex` | `display: flex;` |
| `inline-flex` | `display: inline-flex;` |
| `grid` | `display: grid;` |
| `inline-grid` | `display: inline-grid;` |
| `contents` | `display: contents;` |
| `hidden` | `display: none;` |
| `flow-root` | `display: flow-root;` |
| `flex-row` | `flex-direction: row;` |
| `flex-row-reverse` | `flex-direction: row-reverse;` |
| `flex-col` | `flex-direction: column;` |
| `flex-col-reverse` | `flex-direction: column-reverse;` |
| `flex-wrap` | `flex-wrap: wrap;` |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse;` |
| `flex-nowrap` | `flex-wrap: nowrap;` |
| `flex-1` | `flex: 1 1 0%;` |
| `flex-auto` | `flex: 1 1 auto;` |
| `flex-initial` | `flex: 0 1 auto;` |
| `flex-none` | `flex: none;` |
| `grow-0` | `flex-grow: 0;` |
| `shrink-0` | `flex-shrink: 0;` |
| `grow-1` | `flex-grow: 1;` |
| `shrink-1` | `flex-shrink: 1;` |
| `grow` | `flex-grow: 1;` |
| `shrink` | `flex-shrink: 1;` |
| `justify-start` | `justify-content: flex-start;` |
| `justify-end` | `justify-content: flex-end;` |
| `justify-center` | `justify-content: center;` |
| `justify-between` | `justify-content: space-between;` |
| `justify-around` | `justify-content: space-around;` |
| `justify-evenly` | `justify-content: space-evenly;` |
| `justify-stretch` | `justify-content: stretch;` |
| `items-start` | `align-items: flex-start;` |
| `items-end` | `align-items: flex-end;` |
| `items-center` | `align-items: center;` |
| `items-baseline` | `align-items: baseline;` |
| `items-stretch` | `align-items: stretch;` |
| `self-auto` | `align-self: auto;` |
| `self-start` | `align-self: flex-start;` |
| `self-end` | `align-self: flex-end;` |
| `self-center` | `align-self: center;` |
| `self-stretch` | `align-self: stretch;` |
| `self-baseline` | `align-self: baseline;` |
| `content-start` | `align-content: flex-start;` |
| `content-end` | `align-content: flex-end;` |
| `content-center` | `align-content: center;` |
| `content-between` | `align-content: space-between;` |
| `content-around` | `align-content: space-around;` |
| `content-evenly` | `align-content: space-evenly;` |
| `content-stretch` | `align-content: stretch;` |
| `content-baseline` | `align-content: baseline;` |
| `gap-0` | `gap: 0;` |
| `gap-x-0` | `column-gap: 0;` |
| `gap-y-0` | `row-gap: 0;` |
| `gap-1` | `gap: 0.25rem;` |
| `gap-x-1` | `column-gap: 0.25rem;` |
| `gap-y-1` | `row-gap: 0.25rem;` |
| `gap-2` | `gap: 0.5rem;` |
| `gap-x-2` | `column-gap: 0.5rem;` |
| `gap-y-2` | `row-gap: 0.5rem;` |
| `gap-px` | `gap: 1px;` |
| `gap-x-px` | `column-gap: 1px;` |
| `gap-y-px` | `row-gap: 1px;` |
| `grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` |
| `grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr));` |
| `grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` |
| `grid-cols-none` | `grid-template-columns: none;` |
| `grid-cols-subgrid` | `grid-template-columns: subgrid;` |
| `grid-rows-1` | `grid-template-rows: repeat(1, minmax(0, 1fr));` |
| `grid-rows-2` | `grid-template-rows: repeat(2, minmax(0, 1fr));` |
| `grid-rows-3` | `grid-template-rows: repeat(3, minmax(0, 1fr));` |
| `grid-rows-none` | `grid-template-rows: none;` |
| `grid-rows-subgrid` | `grid-template-rows: subgrid;` |
| `col-span-1` | `grid-column: span 1 / span 1;` |
| `col-span-2` | `grid-column: span 2 / span 2;` |
| `col-span-3` | `grid-column: span 3 / span 3;` |
| `col-span-full` | `grid-column: 1 / -1;` |
| `col-auto` | `grid-column: auto;` |
| `row-span-1` | `grid-row: span 1 / span 1;` |
| `row-span-2` | `grid-row: span 2 / span 2;` |
| `row-span-3` | `grid-row: span 3 / span 3;` |
| `row-span-full` | `grid-row: 1 / -1;` |
| `row-auto` | `grid-row: auto;` |
| `col-start-1` | `grid-column-start: 1;` |
| `col-end-1` | `grid-column-end: 1;` |
| `col-start-2` | `grid-column-start: 2;` |
| `col-end-2` | `grid-column-end: 2;` |
| `col-start-3` | `grid-column-start: 3;` |
| `col-end-3` | `grid-column-end: 3;` |
| `row-start-1` | `grid-row-start: 1;` |
| `row-end-1` | `grid-row-end: 1;` |
| `row-start-2` | `grid-row-start: 2;` |
| `row-end-2` | `grid-row-end: 2;` |
| `row-start-3` | `grid-row-start: 3;` |
| `row-end-3` | `grid-row-end: 3;` |
| `grid-flow-row` | `grid-auto-flow: row;` |
| `grid-flow-col` | `grid-auto-flow: column;` |
| `grid-flow-dense` | `grid-auto-flow: dense;` |
| `grid-flow-row-dense` | `grid-auto-flow: row-dense;` |
| `grid-flow-col-dense` | `grid-auto-flow: column-dense;` |
| `place-content-start` | `place-content: start;` |
| `place-content-end` | `place-content: end;` |
| `place-content-center` | `place-content: center;` |
| `place-content-stretch` | `place-content: stretch;` |
| `place-content-between` | `place-content: space-between;` |
| `place-content-around` | `place-content: space-around;` |
| `place-content-evenly` | `place-content: space-evenly;` |
| `place-items-start` | `place-items: start;` |
| `place-self-start` | `place-self: start;` |
| `place-items-end` | `place-items: end;` |
| `place-self-end` | `place-self: end;` |
| `place-items-center` | `place-items: center;` |
| `place-self-center` | `place-self: center;` |
| `place-items-stretch` | `place-items: stretch;` |
| `place-self-stretch` | `place-self: stretch;` |
| `place-items-baseline` | `place-items: baseline;` |
| `place-self-baseline` | `place-self: baseline;` |
| `place-self-auto` | `place-self: auto;` |
| `static` | `position: static;` |
| `fixed` | `position: fixed;` |
| `absolute` | `position: absolute;` |
| `relative` | `position: relative;` |
| `sticky` | `position: sticky;` |
| `inset-0` | `inset: 0;` |
| `inset-x-0` | `left: 0; right: 0;` |
| `inset-y-0` | `top: 0; bottom: 0;` |
| `top-0` | `top: 0;` |
| `right-0` | `right: 0;` |
| `bottom-0` | `bottom: 0;` |
| `left-0` | `left: 0;` |
| `-inset-0` | `inset: -0;` |
| `-top-0` | `top: -0;` |
| `-right-0` | `right: -0;` |
| `-bottom-0` | `bottom: -0;` |
| `-left-0` | `left: -0;` |
| `inset-1` | `inset: 0.25rem;` |
| `inset-x-1` | `left: 0.25rem; right: 0.25rem;` |
| `inset-y-1` | `top: 0.25rem; bottom: 0.25rem;` |
| `top-1` | `top: 0.25rem;` |
| `right-1` | `right: 0.25rem;` |
| `bottom-1` | `bottom: 0.25rem;` |
| `left-1` | `left: 0.25rem;` |
| `-inset-1` | `inset: -0.25rem;` |
| `-top-1` | `top: -0.25rem;` |
| `-right-1` | `right: -0.25rem;` |
| `-bottom-1` | `bottom: -0.25rem;` |
| `-left-1` | `left: -0.25rem;` |
| `inset-2` | `inset: 0.5rem;` |
| `inset-x-2` | `left: 0.5rem; right: 0.5rem;` |
| `inset-y-2` | `top: 0.5rem; bottom: 0.5rem;` |
| `top-2` | `top: 0.5rem;` |
| `right-2` | `right: 0.5rem;` |
| `bottom-2` | `bottom: 0.5rem;` |
| `left-2` | `left: 0.5rem;` |
| `-inset-2` | `inset: -0.5rem;` |
| `-top-2` | `top: -0.5rem;` |
| `-right-2` | `right: -0.5rem;` |
| `-bottom-2` | `bottom: -0.5rem;` |
| `-left-2` | `left: -0.5rem;` |
| `inset-px` | `inset: 1px;` |
| `inset-x-px` | `left: 1px; right: 1px;` |
| `inset-y-px` | `top: 1px; bottom: 1px;` |
| `top-px` | `top: 1px;` |
| `right-px` | `right: 1px;` |
| `bottom-px` | `bottom: 1px;` |
| `left-px` | `left: 1px;` |
| `-inset-px` | `inset: -1px;` |
| `-top-px` | `top: -1px;` |
| `-right-px` | `right: -1px;` |
| `-bottom-px` | `bottom: -1px;` |
| `-left-px` | `left: -1px;` |
| `inset-auto` | `inset: auto;` |
| `inset-x-auto` | `left: auto; right: auto;` |
| `inset-y-auto` | `top: auto; bottom: auto;` |
| `top-auto` | `top: auto;` |
| `right-auto` | `right: auto;` |
| `bottom-auto` | `bottom: auto;` |
| `left-auto` | `left: auto;` |
| `inset-full` | `inset: 100%;` |
| `inset-x-full` | `left: 100%; right: 100%;` |
| `inset-y-full` | `top: 100%; bottom: 100%;` |
| `top-full` | `top: 100%;` |
| `right-full` | `right: 100%;` |
| `bottom-full` | `bottom: 100%;` |
| `left-full` | `left: 100%;` |
| `z-auto` | `z-index: auto;` |
| `z-0` | `z-index: 0;` |
| `z-10` | `z-index: 10;` |
| `z-20` | `z-index: 20;` |
| `container` | `width: 100%;   margin-left: auto;   margin-right: auto;   padding-left: 1rem;   padding-right: 1rem; } @media (min-width: 640px) { .container { max-width: 640px; } } @media (min-width: 768px) { .container { max-width: 768px; } } @media (min-width: 1024px) { .container { max-width: 1024px; } } @media (min-width: 1280px) { .container { max-width: 1280px; } } @media (min-width: 1536px) { .container { max-width: 1536px; }` |
| `w-0` | `width: 0;` |
| `w-1` | `width: 0.25rem;` |
| `w-2` | `width: 0.5rem;` |
| `w-px` | `width: 1px;` |
| `w-auto` | `width: auto;` |
| `w-full` | `width: 100%;` |
| `w-screen` | `width: 100vw;` |
| `w-svw` | `width: 100svw;` |
| `w-lvw` | `width: 100lvw;` |
| `w-dvw` | `width: 100dvw;` |
| `w-min` | `width: min-content;` |
| `w-max` | `width: max-content;` |
| `w-fit` | `width: fit-content;` |
| `h-0` | `height: 0;` |
| `h-1` | `height: 0.25rem;` |
| `h-2` | `height: 0.5rem;` |
| `h-px` | `height: 1px;` |
| `h-auto` | `height: auto;` |
| `h-full` | `height: 100%;` |
| `h-screen` | `height: 100vh;` |
| `h-svh` | `height: 100svh;` |
| `h-lvh` | `height: 100lvh;` |
| `h-dvh` | `height: 100dvh;` |
| `h-min` | `height: min-content;` |
| `h-max` | `height: max-content;` |
| `h-fit` | `height: fit-content;` |
| `min-w-0` | `min-width: 0;` |
| `max-w-0` | `max-width: 0;` |
| `min-w-none` | `min-width: none;` |
| `max-w-none` | `max-width: none;` |
| `min-w-xs` | `min-width: 20rem;` |
| `max-w-xs` | `max-width: 20rem;` |
| `min-w-sm` | `min-width: 24rem;` |
| `max-w-sm` | `max-width: 24rem;` |
| `min-w-md` | `min-width: 28rem;` |
| `max-w-md` | `max-width: 28rem;` |
| `min-w-lg` | `min-width: 32rem;` |
| `max-w-lg` | `max-width: 32rem;` |
| `min-w-xl` | `min-width: 36rem;` |
| `max-w-xl` | `max-width: 36rem;` |
| `min-w-2xl` | `min-width: 42rem;` |
| `max-w-2xl` | `max-width: 42rem;` |
| `min-w-3xl` | `min-width: 48rem;` |
| `max-w-3xl` | `max-width: 48rem;` |
| `min-w-full` | `min-width: 100%;` |
| `max-w-full` | `max-width: 100%;` |
| `min-w-min` | `min-width: min-content;` |
| `max-w-min` | `max-width: min-content;` |
| `min-w-max` | `min-width: max-content;` |
| `max-w-max` | `max-width: max-content;` |
| `min-w-fit` | `min-width: fit-content;` |
| `max-w-fit` | `max-width: fit-content;` |
| `min-w-prose` | `min-width: 65ch;` |
| `max-w-prose` | `max-width: 65ch;` |
| `min-w-screen-sm` | `min-width: 640px;` |
| `max-w-screen-sm` | `max-width: 640px;` |
| `min-w-screen-md` | `min-width: 768px;` |
| `max-w-screen-md` | `max-width: 768px;` |
| `min-w-screen-lg` | `min-width: 1024px;` |
| `max-w-screen-lg` | `max-width: 1024px;` |
| `min-w-screen-xl` | `min-width: 1280px;` |
| `max-w-screen-xl` | `max-width: 1280px;` |
| `min-w-screen-2xl` | `min-width: 1536px;` |
| `max-w-screen-2xl` | `max-width: 1536px;` |
| `min-h-0` | `min-height: 0;` |
| `max-h-0` | `max-height: 0;` |
| `min-h-full` | `min-height: 100%;` |
| `max-h-full` | `max-height: 100%;` |
| `min-h-screen` | `min-height: 100vh;` |
| `max-h-screen` | `max-height: 100vh;` |
| `min-h-svh` | `min-height: 100svh;` |
| `max-h-svh` | `max-height: 100svh;` |
| `min-h-lvh` | `min-height: 100lvh;` |
| `max-h-lvh` | `max-height: 100lvh;` |
| `min-h-dvh` | `min-height: 100dvh;` |
| `max-h-dvh` | `max-height: 100dvh;` |
| `min-h-min` | `min-height: min-content;` |
| `max-h-min` | `max-height: min-content;` |
| `min-h-max` | `min-height: max-content;` |
| `max-h-max` | `max-height: max-content;` |
| `min-h-fit` | `min-height: fit-content;` |
| `max-h-fit` | `max-height: fit-content;` |
| `min-h-none` | `min-height: none;` |
| `max-h-none` | `max-height: none;` |
| `min-h-0` | `min-height: 0;` |
| `max-h-0` | `max-height: 0;` |
| `min-h-1` | `min-height: 0.25rem;` |
| `max-h-1` | `max-height: 0.25rem;` |
| `min-h-px` | `min-height: 1px;` |
| `max-h-px` | `max-height: 1px;` |
| `size-0` | `width: 0; height: 0;` |
| `size-1` | `width: 0.25rem; height: 0.25rem;` |
| `size-2` | `width: 0.5rem; height: 0.5rem;` |
| `size-px` | `width: 1px; height: 1px;` |
| `size-auto` | `width: auto; height: auto;` |
| `size-full` | `width: 100%; height: 100%;` |
| `size-min` | `width: min-content; height: min-content;` |
| `size-max` | `width: max-content; height: max-content;` |
| `size-fit` | `width: fit-content; height: fit-content;` |
| `overflow-auto` | `overflow: auto;` |
| `overflow-x-auto` | `overflow-x: auto;` |
| `overflow-y-auto` | `overflow-y: auto;` |
| `overflow-hidden` | `overflow: hidden;` |
| `overflow-x-hidden` | `overflow-x: hidden;` |
| `overflow-y-hidden` | `overflow-y: hidden;` |
| `overflow-clip` | `overflow: clip;` |
| `overflow-x-clip` | `overflow-x: clip;` |
| `overflow-y-clip` | `overflow-y: clip;` |
| `overflow-visible` | `overflow: visible;` |
| `overflow-x-visible` | `overflow-x: visible;` |
| `overflow-y-visible` | `overflow-y: visible;` |
| `overflow-scroll` | `overflow: scroll;` |
| `overflow-x-scroll` | `overflow-x: scroll;` |
| `overflow-y-scroll` | `overflow-y: scroll;` |
| `object-contain` | `object-fit: contain;` |
| `object-cover` | `object-fit: cover;` |
| `object-fill` | `object-fit: fill;` |
| `object-none` | `object-fit: none;` |
| `object-scale-down` | `object-fit: scale-down;` |
| `object-bottom` | `object-position: bottom;` |
| `object-center` | `object-position: center;` |
| `object-left` | `object-position: left;` |
| `object-left-bottom` | `object-position: left bottom;` |
| `object-left-top` | `object-position: left top;` |
| `object-right` | `object-position: right;` |
| `object-right-bottom` | `object-position: right bottom;` |
| `object-right-top` | `object-position: right top;` |
| `object-top` | `object-position: top;` |
| `aspect-auto` | `aspect-ratio: auto;` |
| `aspect-square` | `aspect-ratio: 1 / 1;` |
| `aspect-video` | `aspect-ratio: 16 / 9;` |
| `aspect-4/3` | `aspect-ratio: 4 / 3;` |
| `visible` | `visibility: visible;` |
| `invisible` | `visibility: hidden;` |
| `collapse` | `visibility: collapse;` |
| `isolate` | `isolation: isolate;` |
| `isolation-auto` | `isolation: auto;` |
| `float-left` | `float: left;` |
| `float-right` | `float: right;` |
| `float-none` | `float: none;` |
| `float-start` | `float: start;` |
| `float-end` | `float: end;` |
| `clear-left` | `clear: left;` |
| `clear-right` | `clear: right;` |
| `clear-both` | `clear: both;` |
| `clear-none` | `clear: none;` |
| `clear-start` | `clear: start;` |
| `clear-end` | `clear: end;` |
| `box-border` | `box-sizing: border-box;` |
| `box-content` | `box-sizing: content-box;` |
| `order-1` | `order: 1;` |
| `order-2` | `order: 2;` |
| `order-3` | `order: 3;` |
| `order-first` | `order: -9999;` |
| `order-last` | `order: 9999;` |
| `order-none` | `order: 0;` |

## Spacing

> Padding, margin, and space between elements

| Class | CSS |
|-------|-----|
| `p-0` | `padding: 0;` |
| `pt-0` | `padding-top: 0;` |
| `pr-0` | `padding-right: 0;` |
| `pb-0` | `padding-bottom: 0;` |
| `pl-0` | `padding-left: 0;` |
| `px-0` | `padding-left: 0; padding-right: 0;` |
| `py-0` | `padding-top: 0; padding-bottom: 0;` |
| `ps-0` | `padding-inline-start: 0;` |
| `pe-0` | `padding-inline-end: 0;` |
| `p-1` | `padding: 0.25rem;` |
| `pt-1` | `padding-top: 0.25rem;` |
| `pr-1` | `padding-right: 0.25rem;` |
| `pb-1` | `padding-bottom: 0.25rem;` |
| `pl-1` | `padding-left: 0.25rem;` |
| `px-1` | `padding-left: 0.25rem; padding-right: 0.25rem;` |
| `py-1` | `padding-top: 0.25rem; padding-bottom: 0.25rem;` |
| `ps-1` | `padding-inline-start: 0.25rem;` |
| `pe-1` | `padding-inline-end: 0.25rem;` |
| `p-2` | `padding: 0.5rem;` |
| `pt-2` | `padding-top: 0.5rem;` |
| `pr-2` | `padding-right: 0.5rem;` |
| `pb-2` | `padding-bottom: 0.5rem;` |
| `pl-2` | `padding-left: 0.5rem;` |
| `px-2` | `padding-left: 0.5rem; padding-right: 0.5rem;` |
| `py-2` | `padding-top: 0.5rem; padding-bottom: 0.5rem;` |
| `ps-2` | `padding-inline-start: 0.5rem;` |
| `pe-2` | `padding-inline-end: 0.5rem;` |
| `p-px` | `padding: 1px;` |
| `pt-px` | `padding-top: 1px;` |
| `pr-px` | `padding-right: 1px;` |
| `pb-px` | `padding-bottom: 1px;` |
| `pl-px` | `padding-left: 1px;` |
| `px-px` | `padding-left: 1px; padding-right: 1px;` |
| `py-px` | `padding-top: 1px; padding-bottom: 1px;` |
| `ps-px` | `padding-inline-start: 1px;` |
| `pe-px` | `padding-inline-end: 1px;` |
| `m-0` | `margin: 0;` |
| `mt-0` | `margin-top: 0;` |
| `mr-0` | `margin-right: 0;` |
| `mb-0` | `margin-bottom: 0;` |
| `ml-0` | `margin-left: 0;` |
| `mx-0` | `margin-left: 0; margin-right: 0;` |
| `my-0` | `margin-top: 0; margin-bottom: 0;` |
| `ms-0` | `margin-inline-start: 0;` |
| `me-0` | `margin-inline-end: 0;` |
| `m-1` | `margin: 0.25rem;` |
| `mt-1` | `margin-top: 0.25rem;` |
| `mr-1` | `margin-right: 0.25rem;` |
| `mb-1` | `margin-bottom: 0.25rem;` |
| `ml-1` | `margin-left: 0.25rem;` |
| `mx-1` | `margin-left: 0.25rem; margin-right: 0.25rem;` |
| `my-1` | `margin-top: 0.25rem; margin-bottom: 0.25rem;` |
| `ms-1` | `margin-inline-start: 0.25rem;` |
| `me-1` | `margin-inline-end: 0.25rem;` |
| `m-2` | `margin: 0.5rem;` |
| `mt-2` | `margin-top: 0.5rem;` |
| `mr-2` | `margin-right: 0.5rem;` |
| `mb-2` | `margin-bottom: 0.5rem;` |
| `ml-2` | `margin-left: 0.5rem;` |
| `mx-2` | `margin-left: 0.5rem; margin-right: 0.5rem;` |
| `my-2` | `margin-top: 0.5rem; margin-bottom: 0.5rem;` |
| `ms-2` | `margin-inline-start: 0.5rem;` |
| `me-2` | `margin-inline-end: 0.5rem;` |
| `m-px` | `margin: 1px;` |
| `mt-px` | `margin-top: 1px;` |
| `mr-px` | `margin-right: 1px;` |
| `mb-px` | `margin-bottom: 1px;` |
| `ml-px` | `margin-left: 1px;` |
| `mx-px` | `margin-left: 1px; margin-right: 1px;` |
| `my-px` | `margin-top: 1px; margin-bottom: 1px;` |
| `ms-px` | `margin-inline-start: 1px;` |
| `me-px` | `margin-inline-end: 1px;` |
| `m-auto` | `margin: auto;` |
| `mx-auto` | `margin-left: auto; margin-right: auto;` |
| `my-auto` | `margin-top: auto; margin-bottom: auto;` |
| `mt-auto` | `margin-top: auto;` |
| `mr-auto` | `margin-right: auto;` |
| `mb-auto` | `margin-bottom: auto;` |
| `ml-auto` | `margin-left: auto;` |
| `ms-auto` | `margin-inline-start: auto;` |
| `me-auto` | `margin-inline-end: auto;` |
| `-m-1` | `margin: -0.25rem;` |
| `-mt-1` | `margin-top: -0.25rem;` |
| `-mr-1` | `margin-right: -0.25rem;` |
| `-mb-1` | `margin-bottom: -0.25rem;` |
| `-ml-1` | `margin-left: -0.25rem;` |
| `-mx-1` | `margin-left: -0.25rem; margin-right: -0.25rem;` |
| `-my-1` | `margin-top: -0.25rem; margin-bottom: -0.25rem;` |
| `-m-2` | `margin: -0.5rem;` |
| `-mt-2` | `margin-top: -0.5rem;` |
| `-mr-2` | `margin-right: -0.5rem;` |
| `-mb-2` | `margin-bottom: -0.5rem;` |
| `-ml-2` | `margin-left: -0.5rem;` |
| `-mx-2` | `margin-left: -0.5rem; margin-right: -0.5rem;` |
| `-my-2` | `margin-top: -0.5rem; margin-bottom: -0.5rem;` |
| `-m-3` | `margin: -0.75rem;` |
| `-mt-3` | `margin-top: -0.75rem;` |
| `-mr-3` | `margin-right: -0.75rem;` |
| `-mb-3` | `margin-bottom: -0.75rem;` |
| `-ml-3` | `margin-left: -0.75rem;` |
| `-mx-3` | `margin-left: -0.75rem; margin-right: -0.75rem;` |
| `-my-3` | `margin-top: -0.75rem; margin-bottom: -0.75rem;` |
| `space-x-0` | `.space-x-0 > :not([hidden]) ~ :not([hidden]) { margin-left: 0;` |
| `space-y-0` | `.space-y-0 > :not([hidden]) ~ :not([hidden]) { margin-top: 0;` |
| `space-x-1` | `.space-x-1 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.25rem;` |
| `space-y-1` | `.space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.25rem;` |
| `-space-x-1` | `.-space-x-1 > :not([hidden]) ~ :not([hidden]) { margin-left: -0.25rem;` |
| `-space-y-1` | `.-space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: -0.25rem;` |
| `space-x-2` | `.space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem;` |
| `space-y-2` | `.space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem;` |
| `-space-x-2` | `.-space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: -0.5rem;` |
| `-space-y-2` | `.-space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: -0.5rem;` |
| `-space-x-3` | `.-space-x-3 > :not([hidden]) ~ :not([hidden]) { margin-left: -0.75rem;` |
| `-space-y-3` | `.-space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: -0.75rem;` |
| `space-x-px` | `.space-x-px > :not([hidden]) ~ :not([hidden]) { margin-left: 1px;` |
| `space-y-px` | `.space-y-px > :not([hidden]) ~ :not([hidden]) { margin-top: 1px;` |
| `space-x-reverse` | `.space-x-reverse > :not([hidden]) ~ :not([hidden]) { --j-space-x-reverse: 1; margin-right: calc(var(--j-space-x, 0) * var(--j-space-x-reverse)); margin-left: calc(var(--j-space-x, 0) * calc(1 - var(--j-space-x-reverse)));` |
| `space-y-reverse` | `.space-y-reverse > :not([hidden]) ~ :not([hidden]) { --j-space-y-reverse: 1; margin-bottom: calc(var(--j-space-y, 0) * var(--j-space-y-reverse)); margin-top: calc(var(--j-space-y, 0) * calc(1 - var(--j-space-y-reverse)));` |

## Typography

> Font size, weight, style, alignment, and text utilities

| Class | CSS |
|-------|-----|
| `font-sans` | `font-family: var(--j-font-sans);` |
| `font-mono` | `font-family: var(--j-font-mono);` |
| `font-serif` | `font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;` |
| `text-xs` | `font-size: 0.75rem; line-height: 1rem;` |
| `text-sm` | `font-size: 0.875rem; line-height: 1.25rem;` |
| `text-base` | `font-size: 1rem; line-height: 1.5rem;` |
| `text-lg` | `font-size: 1.125rem; line-height: 1.75rem;` |
| `text-xl` | `font-size: 1.25rem; line-height: 1.75rem;` |
| `text-2xl` | `font-size: 1.5rem; line-height: 2rem;` |
| `text-3xl` | `font-size: 1.875rem; line-height: 2.25rem;` |
| `text-4xl` | `font-size: 2.25rem; line-height: 2.5rem;` |
| `font-thin` | `font-weight: 100;` |
| `font-extralight` | `font-weight: 200;` |
| `font-light` | `font-weight: 300;` |
| `font-normal` | `font-weight: 400;` |
| `font-medium` | `font-weight: 500;` |
| `font-semibold` | `font-weight: 600;` |
| `font-bold` | `font-weight: 700;` |
| `font-extrabold` | `font-weight: 800;` |
| `font-black` | `font-weight: 900;` |
| `italic` | `font-style: italic;` |
| `not-italic` | `font-style: normal;` |
| `normal-nums` | `font-variant-numeric: normal;` |
| `ordinal` | `font-variant-numeric: ordinal;` |
| `slashed-zero` | `font-variant-numeric: slashed-zero;` |
| `lining-nums` | `font-variant-numeric: lining-nums;` |
| `oldstyle-nums` | `font-variant-numeric: oldstyle-nums;` |
| `proportional-nums` | `font-variant-numeric: proportional-nums;` |
| `tabular-nums` | `font-variant-numeric: tabular-nums;` |
| `diagonal-fractions` | `font-variant-numeric: diagonal-fractions;` |
| `stacked-fractions` | `font-variant-numeric: stacked-fractions;` |
| `tracking-tighter` | `letter-spacing: -0.05em;` |
| `tracking-tight` | `letter-spacing: -0.025em;` |
| `tracking-normal` | `letter-spacing: 0em;` |
| `tracking-wide` | `letter-spacing: 0.025em;` |
| `tracking-wider` | `letter-spacing: 0.05em;` |
| `tracking-widest` | `letter-spacing: 0.1em;` |
| `leading-3` | `line-height: .75rem;` |
| `leading-4` | `line-height: 1rem;` |
| `leading-5` | `line-height: 1.25rem;` |
| `leading-none` | `line-height: 1;` |
| `leading-tight` | `line-height: 1.25;` |
| `leading-snug` | `line-height: 1.375;` |
| `leading-normal` | `line-height: 1.5;` |
| `leading-relaxed` | `line-height: 1.625;` |
| `leading-loose` | `line-height: 2;` |
| `text-left` | `text-align: left;` |
| `text-center` | `text-align: center;` |
| `text-right` | `text-align: right;` |
| `text-justify` | `text-align: justify;` |
| `text-start` | `text-align: start;` |
| `text-end` | `text-align: end;` |
| `underline` | `text-decoration-line: underline;` |
| `overline` | `text-decoration-line: overline;` |
| `line-through` | `text-decoration-line: line-through;` |
| `no-underline` | `text-decoration-line: none;` |
| `decoration-solid` | `text-decoration-style: solid;` |
| `decoration-double` | `text-decoration-style: double;` |
| `decoration-dotted` | `text-decoration-style: dotted;` |
| `decoration-dashed` | `text-decoration-style: dashed;` |
| `decoration-wavy` | `text-decoration-style: wavy;` |
| `decoration-auto` | `text-decoration-thickness: auto;` |
| `decoration-from-font` | `text-decoration-thickness: from-font;` |
| `decoration-0` | `text-decoration-thickness: 0px;` |
| `decoration-1` | `text-decoration-thickness: 1px;` |
| `decoration-2` | `text-decoration-thickness: 2px;` |
| `underline-offset-auto` | `text-underline-offset: auto;` |
| `underline-offset-0` | `text-underline-offset: 0px;` |
| `underline-offset-1` | `text-underline-offset: 1px;` |
| `underline-offset-2` | `text-underline-offset: 2px;` |
| `uppercase` | `text-transform: uppercase;` |
| `lowercase` | `text-transform: lowercase;` |
| `capitalize` | `text-transform: capitalize;` |
| `normal-case` | `text-transform: none;` |
| `truncate` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` |
| `text-ellipsis` | `text-overflow: ellipsis;` |
| `text-clip` | `text-overflow: clip;` |
| `line-clamp-1` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;` |
| `line-clamp-2` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;` |
| `line-clamp-3` | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;` |
| `line-clamp-none` | `overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;` |
| `align-baseline` | `vertical-align: baseline;` |
| `align-top` | `vertical-align: top;` |
| `align-middle` | `vertical-align: middle;` |
| `align-bottom` | `vertical-align: bottom;` |
| `align-text-top` | `vertical-align: text-top;` |
| `align-text-bottom` | `vertical-align: text-bottom;` |
| `align-sub` | `vertical-align: sub;` |
| `align-super` | `vertical-align: super;` |
| `whitespace-normal` | `white-space: normal;` |
| `whitespace-nowrap` | `white-space: nowrap;` |
| `whitespace-pre` | `white-space: pre;` |
| `whitespace-pre-line` | `white-space: pre-line;` |
| `whitespace-pre-wrap` | `white-space: pre-wrap;` |
| `whitespace-break-spaces` | `white-space: break-spaces;` |
| `break-normal` | `overflow-wrap: normal; word-break: normal;` |
| `break-words` | `overflow-wrap: break-word;` |
| `break-all` | `word-break: break-all;` |
| `break-keep` | `word-break: keep-all;` |
| `hyphens-none` | `hyphens: none;` |
| `hyphens-manual` | `hyphens: manual;` |
| `hyphens-auto` | `hyphens: auto;` |
| `text-wrap` | `text-wrap: wrap;` |
| `text-nowrap` | `text-wrap: nowrap;` |
| `text-balance` | `text-wrap: balance;` |
| `text-pretty` | `text-wrap: pretty;` |
| `content-none` | `content: none;` |
| `list-none` | `list-style-type: none;` |
| `list-disc` | `list-style-type: disc;` |
| `list-decimal` | `list-style-type: decimal;` |
| `list-inside` | `list-style-position: inside;` |
| `list-outside` | `list-style-position: outside;` |

## Colors

> Text color, background color, border color, and gradients

| Class | CSS |
|-------|-----|
| `text-primary` | `color: var(--j-primary);` |
| `text-secondary` | `color: var(--j-secondary);` |
| `text-accent` | `color: var(--j-accent);` |
| `text-success` | `color: var(--j-success);` |
| `text-warning` | `color: var(--j-warning);` |
| `text-error` | `color: var(--j-error);` |
| `text-info` | `color: var(--j-info);` |
| `bg-primary` | `background-color: var(--j-primary);` |
| `bg-secondary` | `background-color: var(--j-secondary);` |
| `bg-accent` | `background-color: var(--j-accent);` |
| `bg-success` | `background-color: var(--j-success);` |
| `bg-warning` | `background-color: var(--j-warning);` |
| `bg-error` | `background-color: var(--j-error);` |
| `bg-info` | `background-color: var(--j-info);` |
| `border-primary` | `border-color: var(--j-primary);` |
| `border-secondary` | `border-color: var(--j-secondary);` |
| `border-accent` | `border-color: var(--j-accent);` |
| `border-success` | `border-color: var(--j-success);` |
| `border-warning` | `border-color: var(--j-warning);` |
| `border-error` | `border-color: var(--j-error);` |
| `border-info` | `border-color: var(--j-info);` |
| `text-gray-50` | `color: var(--j-gray-50);` |
| `bg-gray-50` | `background-color: var(--j-gray-50);` |
| `border-gray-50` | `border-color: var(--j-gray-50);` |
| `ring-gray-50` | `--j-ring-color: var(--j-gray-50);` |
| `decoration-gray-50` | `text-decoration-color: var(--j-gray-50);` |
| `divide-gray-50` | `.divide-gray-50 > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-gray-50);` |
| `outline-gray-50` | `outline-color: var(--j-gray-50);` |
| `shadow-gray-50` | `--j-shadow-color: var(--j-gray-50);` |
| `accent-gray-50` | `accent-color: var(--j-gray-50);` |
| `caret-gray-50` | `caret-color: var(--j-gray-50);` |
| `fill-gray-50` | `fill: var(--j-gray-50);` |
| `stroke-gray-50` | `stroke: var(--j-gray-50);` |
| `text-gray-100` | `color: var(--j-gray-100);` |
| `bg-gray-100` | `background-color: var(--j-gray-100);` |
| `border-gray-100` | `border-color: var(--j-gray-100);` |
| `ring-gray-100` | `--j-ring-color: var(--j-gray-100);` |
| `decoration-gray-100` | `text-decoration-color: var(--j-gray-100);` |
| `divide-gray-100` | `.divide-gray-100 > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-gray-100);` |
| `outline-gray-100` | `outline-color: var(--j-gray-100);` |
| `shadow-gray-100` | `--j-shadow-color: var(--j-gray-100);` |
| `accent-gray-100` | `accent-color: var(--j-gray-100);` |
| `caret-gray-100` | `caret-color: var(--j-gray-100);` |
| `fill-gray-100` | `fill: var(--j-gray-100);` |
| `stroke-gray-100` | `stroke: var(--j-gray-100);` |
| `text-gray-200` | `color: var(--j-gray-200);` |
| `bg-gray-200` | `background-color: var(--j-gray-200);` |
| `border-gray-200` | `border-color: var(--j-gray-200);` |
| `ring-gray-200` | `--j-ring-color: var(--j-gray-200);` |
| `decoration-gray-200` | `text-decoration-color: var(--j-gray-200);` |
| `divide-gray-200` | `.divide-gray-200 > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-gray-200);` |
| `outline-gray-200` | `outline-color: var(--j-gray-200);` |
| `shadow-gray-200` | `--j-shadow-color: var(--j-gray-200);` |
| `accent-gray-200` | `accent-color: var(--j-gray-200);` |
| `caret-gray-200` | `caret-color: var(--j-gray-200);` |
| `fill-gray-200` | `fill: var(--j-gray-200);` |
| `stroke-gray-200` | `stroke: var(--j-gray-200);` |
| `text-slate-50` | `color: var(--j-slate-50);` |
| `bg-slate-50` | `background-color: var(--j-slate-50);` |
| `border-slate-50` | `border-color: var(--j-slate-50);` |
| `ring-slate-50` | `--j-ring-color: var(--j-slate-50);` |
| `decoration-slate-50` | `text-decoration-color: var(--j-slate-50);` |
| `divide-slate-50` | `.divide-slate-50 > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-slate-50);` |
| `outline-slate-50` | `outline-color: var(--j-slate-50);` |
| `shadow-slate-50` | `--j-shadow-color: var(--j-slate-50);` |
| `accent-slate-50` | `accent-color: var(--j-slate-50);` |
| `caret-slate-50` | `caret-color: var(--j-slate-50);` |
| `fill-slate-50` | `fill: var(--j-slate-50);` |
| `stroke-slate-50` | `stroke: var(--j-slate-50);` |
| `text-slate-100` | `color: var(--j-slate-100);` |
| `bg-slate-100` | `background-color: var(--j-slate-100);` |
| `border-slate-100` | `border-color: var(--j-slate-100);` |
| `ring-slate-100` | `--j-ring-color: var(--j-slate-100);` |
| `decoration-slate-100` | `text-decoration-color: var(--j-slate-100);` |
| `divide-slate-100` | `.divide-slate-100 > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-slate-100);` |
| `outline-slate-100` | `outline-color: var(--j-slate-100);` |
| `shadow-slate-100` | `--j-shadow-color: var(--j-slate-100);` |
| `accent-slate-100` | `accent-color: var(--j-slate-100);` |
| `caret-slate-100` | `caret-color: var(--j-slate-100);` |
| `fill-slate-100` | `fill: var(--j-slate-100);` |
| `stroke-slate-100` | `stroke: var(--j-slate-100);` |
| `text-slate-200` | `color: var(--j-slate-200);` |
| `bg-slate-200` | `background-color: var(--j-slate-200);` |
| `border-slate-200` | `border-color: var(--j-slate-200);` |
| `ring-slate-200` | `--j-ring-color: var(--j-slate-200);` |
| `decoration-slate-200` | `text-decoration-color: var(--j-slate-200);` |
| `divide-slate-200` | `.divide-slate-200 > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-slate-200);` |
| `outline-slate-200` | `outline-color: var(--j-slate-200);` |
| `shadow-slate-200` | `--j-shadow-color: var(--j-slate-200);` |
| `accent-slate-200` | `accent-color: var(--j-slate-200);` |
| `caret-slate-200` | `caret-color: var(--j-slate-200);` |
| `fill-slate-200` | `fill: var(--j-slate-200);` |
| `stroke-slate-200` | `stroke: var(--j-slate-200);` |
| `text-neon-cyan` | `color: var(--j-neon-cyan);` |
| `bg-neon-cyan` | `background-color: var(--j-neon-cyan);` |
| `border-neon-cyan` | `border-color: var(--j-neon-cyan);` |
| `ring-neon-cyan` | `--j-ring-color: var(--j-neon-cyan);` |
| `decoration-neon-cyan` | `text-decoration-color: var(--j-neon-cyan);` |
| `divide-neon-cyan` | `.divide-neon-cyan > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-neon-cyan);` |
| `outline-neon-cyan` | `outline-color: var(--j-neon-cyan);` |
| `shadow-neon-cyan` | `--j-shadow-color: var(--j-neon-cyan);` |
| `accent-neon-cyan` | `accent-color: var(--j-neon-cyan);` |
| `caret-neon-cyan` | `caret-color: var(--j-neon-cyan);` |
| `fill-neon-cyan` | `fill: var(--j-neon-cyan);` |
| `stroke-neon-cyan` | `stroke: var(--j-neon-cyan);` |
| `text-neon-pink` | `color: var(--j-neon-pink);` |
| `bg-neon-pink` | `background-color: var(--j-neon-pink);` |
| `border-neon-pink` | `border-color: var(--j-neon-pink);` |
| `ring-neon-pink` | `--j-ring-color: var(--j-neon-pink);` |
| `decoration-neon-pink` | `text-decoration-color: var(--j-neon-pink);` |
| `divide-neon-pink` | `.divide-neon-pink > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-neon-pink);` |
| `outline-neon-pink` | `outline-color: var(--j-neon-pink);` |
| `shadow-neon-pink` | `--j-shadow-color: var(--j-neon-pink);` |
| `accent-neon-pink` | `accent-color: var(--j-neon-pink);` |
| `caret-neon-pink` | `caret-color: var(--j-neon-pink);` |
| `fill-neon-pink` | `fill: var(--j-neon-pink);` |
| `stroke-neon-pink` | `stroke: var(--j-neon-pink);` |
| `text-neon-green` | `color: var(--j-neon-green);` |
| `bg-neon-green` | `background-color: var(--j-neon-green);` |
| `border-neon-green` | `border-color: var(--j-neon-green);` |
| `ring-neon-green` | `--j-ring-color: var(--j-neon-green);` |
| `decoration-neon-green` | `text-decoration-color: var(--j-neon-green);` |
| `divide-neon-green` | `.divide-neon-green > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-neon-green);` |
| `outline-neon-green` | `outline-color: var(--j-neon-green);` |
| `shadow-neon-green` | `--j-shadow-color: var(--j-neon-green);` |
| `accent-neon-green` | `accent-color: var(--j-neon-green);` |
| `caret-neon-green` | `caret-color: var(--j-neon-green);` |
| `fill-neon-green` | `fill: var(--j-neon-green);` |
| `stroke-neon-green` | `stroke: var(--j-neon-green);` |
| `text-neon-blue` | `color: var(--j-neon-blue);` |
| `bg-neon-blue` | `background-color: var(--j-neon-blue);` |
| `border-neon-blue` | `border-color: var(--j-neon-blue);` |
| `ring-neon-blue` | `--j-ring-color: var(--j-neon-blue);` |
| `decoration-neon-blue` | `text-decoration-color: var(--j-neon-blue);` |
| `divide-neon-blue` | `.divide-neon-blue > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-neon-blue);` |
| `outline-neon-blue` | `outline-color: var(--j-neon-blue);` |
| `shadow-neon-blue` | `--j-shadow-color: var(--j-neon-blue);` |
| `accent-neon-blue` | `accent-color: var(--j-neon-blue);` |
| `caret-neon-blue` | `caret-color: var(--j-neon-blue);` |
| `fill-neon-blue` | `fill: var(--j-neon-blue);` |
| `stroke-neon-blue` | `stroke: var(--j-neon-blue);` |
| `text-neon-purple` | `color: var(--j-neon-purple);` |
| `bg-neon-purple` | `background-color: var(--j-neon-purple);` |
| `border-neon-purple` | `border-color: var(--j-neon-purple);` |
| `ring-neon-purple` | `--j-ring-color: var(--j-neon-purple);` |
| `decoration-neon-purple` | `text-decoration-color: var(--j-neon-purple);` |
| `divide-neon-purple` | `.divide-neon-purple > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-neon-purple);` |
| `outline-neon-purple` | `outline-color: var(--j-neon-purple);` |
| `shadow-neon-purple` | `--j-shadow-color: var(--j-neon-purple);` |
| `accent-neon-purple` | `accent-color: var(--j-neon-purple);` |
| `caret-neon-purple` | `caret-color: var(--j-neon-purple);` |
| `fill-neon-purple` | `fill: var(--j-neon-purple);` |
| `stroke-neon-purple` | `stroke: var(--j-neon-purple);` |
| `text-neon-yellow` | `color: var(--j-neon-yellow);` |
| `bg-neon-yellow` | `background-color: var(--j-neon-yellow);` |
| `border-neon-yellow` | `border-color: var(--j-neon-yellow);` |
| `ring-neon-yellow` | `--j-ring-color: var(--j-neon-yellow);` |
| `decoration-neon-yellow` | `text-decoration-color: var(--j-neon-yellow);` |
| `divide-neon-yellow` | `.divide-neon-yellow > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-neon-yellow);` |
| `outline-neon-yellow` | `outline-color: var(--j-neon-yellow);` |
| `shadow-neon-yellow` | `--j-shadow-color: var(--j-neon-yellow);` |
| `accent-neon-yellow` | `accent-color: var(--j-neon-yellow);` |
| `caret-neon-yellow` | `caret-color: var(--j-neon-yellow);` |
| `fill-neon-yellow` | `fill: var(--j-neon-yellow);` |
| `stroke-neon-yellow` | `stroke: var(--j-neon-yellow);` |
| `text-glass-light` | `color: var(--j-glass-light);` |
| `bg-glass-light` | `background-color: var(--j-glass-light);` |
| `border-glass-light` | `border-color: var(--j-glass-light);` |
| `ring-glass-light` | `--j-ring-color: var(--j-glass-light);` |
| `decoration-glass-light` | `text-decoration-color: var(--j-glass-light);` |
| `divide-glass-light` | `.divide-glass-light > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-glass-light);` |
| `outline-glass-light` | `outline-color: var(--j-glass-light);` |
| `shadow-glass-light` | `--j-shadow-color: var(--j-glass-light);` |
| `accent-glass-light` | `accent-color: var(--j-glass-light);` |
| `caret-glass-light` | `caret-color: var(--j-glass-light);` |
| `fill-glass-light` | `fill: var(--j-glass-light);` |
| `stroke-glass-light` | `stroke: var(--j-glass-light);` |
| `text-glass-medium` | `color: var(--j-glass-medium);` |
| `bg-glass-medium` | `background-color: var(--j-glass-medium);` |
| `border-glass-medium` | `border-color: var(--j-glass-medium);` |
| `ring-glass-medium` | `--j-ring-color: var(--j-glass-medium);` |
| `decoration-glass-medium` | `text-decoration-color: var(--j-glass-medium);` |
| `divide-glass-medium` | `.divide-glass-medium > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-glass-medium);` |
| `outline-glass-medium` | `outline-color: var(--j-glass-medium);` |
| `shadow-glass-medium` | `--j-shadow-color: var(--j-glass-medium);` |
| `accent-glass-medium` | `accent-color: var(--j-glass-medium);` |
| `caret-glass-medium` | `caret-color: var(--j-glass-medium);` |
| `fill-glass-medium` | `fill: var(--j-glass-medium);` |
| `stroke-glass-medium` | `stroke: var(--j-glass-medium);` |
| `text-glass-heavy` | `color: var(--j-glass-heavy);` |
| `bg-glass-heavy` | `background-color: var(--j-glass-heavy);` |
| `border-glass-heavy` | `border-color: var(--j-glass-heavy);` |
| `ring-glass-heavy` | `--j-ring-color: var(--j-glass-heavy);` |
| `decoration-glass-heavy` | `text-decoration-color: var(--j-glass-heavy);` |
| `divide-glass-heavy` | `.divide-glass-heavy > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-glass-heavy);` |
| `outline-glass-heavy` | `outline-color: var(--j-glass-heavy);` |
| `shadow-glass-heavy` | `--j-shadow-color: var(--j-glass-heavy);` |
| `accent-glass-heavy` | `accent-color: var(--j-glass-heavy);` |
| `caret-glass-heavy` | `caret-color: var(--j-glass-heavy);` |
| `fill-glass-heavy` | `fill: var(--j-glass-heavy);` |
| `stroke-glass-heavy` | `stroke: var(--j-glass-heavy);` |
| `text-glass-dark` | `color: var(--j-glass-dark);` |
| `bg-glass-dark` | `background-color: var(--j-glass-dark);` |
| `border-glass-dark` | `border-color: var(--j-glass-dark);` |
| `ring-glass-dark` | `--j-ring-color: var(--j-glass-dark);` |
| `decoration-glass-dark` | `text-decoration-color: var(--j-glass-dark);` |
| `divide-glass-dark` | `.divide-glass-dark > :not([hidden]) ~ :not([hidden]) { border-color: var(--j-glass-dark);` |
| `outline-glass-dark` | `outline-color: var(--j-glass-dark);` |
| `shadow-glass-dark` | `--j-shadow-color: var(--j-glass-dark);` |
| `accent-glass-dark` | `accent-color: var(--j-glass-dark);` |
| `caret-glass-dark` | `caret-color: var(--j-glass-dark);` |
| `fill-glass-dark` | `fill: var(--j-glass-dark);` |
| `stroke-glass-dark` | `stroke: var(--j-glass-dark);` |
| `text-transparent` | `color: transparent;` |
| `bg-transparent` | `background-color: transparent;` |
| `border-transparent` | `border-color: transparent;` |
| `text-current` | `color: currentColor;` |
| `bg-current` | `background-color: currentColor;` |
| `border-current` | `border-color: currentColor;` |
| `text-inherit` | `color: inherit;` |
| `bg-inherit` | `background-color: inherit;` |
| `border-inherit` | `border-color: inherit;` |
| `text-white` | `color: #ffffff;` |
| `bg-white` | `background-color: #ffffff;` |
| `border-white` | `border-color: #ffffff;` |
| `text-black` | `color: #000000;` |
| `bg-black` | `background-color: #000000;` |
| `border-black` | `border-color: #000000;` |
| `text-muted` | `color: var(--j-text-muted);` |
| `text-subtle` | `color: var(--j-text-subtle);` |
| `bg-subtle` | `background-color: var(--j-bg-subtle);` |
| `bg-muted` | `background-color: var(--j-bg-muted);` |
| `border-default` | `border-color: var(--j-border);` |
| `border-subtle` | `border-color: var(--j-border-subtle);` |
| `opacity-0` | `opacity: 0;` |
| `opacity-5` | `opacity: 0.05;` |
| `opacity-10` | `opacity: 0.1;` |
| `bg-opacity-0` | `--j-bg-opacity: 0;` |
| `bg-opacity-5` | `--j-bg-opacity: 0.05;` |
| `bg-opacity-10` | `--j-bg-opacity: 0.1;` |
| `text-opacity-0` | `--j-text-opacity: 0;` |
| `text-opacity-5` | `--j-text-opacity: 0.05;` |
| `text-opacity-10` | `--j-text-opacity: 0.1;` |
| `border-opacity-0` | `--j-border-opacity: 0;` |
| `border-opacity-5` | `--j-border-opacity: 0.05;` |
| `border-opacity-10` | `--j-border-opacity: 0.1;` |
| `bg-none` | `background-image: none;` |
| `bg-gradient-to-t` | `background-image: linear-gradient(to top, var(--j-gradient-stops));` |
| `bg-gradient-to-tr` | `background-image: linear-gradient(to top right, var(--j-gradient-stops));` |
| `bg-gradient-to-r` | `background-image: linear-gradient(to right, var(--j-gradient-stops));` |
| `bg-gradient-to-br` | `background-image: linear-gradient(to bottom right, var(--j-gradient-stops));` |
| `bg-gradient-to-b` | `background-image: linear-gradient(to bottom, var(--j-gradient-stops));` |
| `bg-gradient-to-bl` | `background-image: linear-gradient(to bottom left, var(--j-gradient-stops));` |
| `bg-gradient-to-l` | `background-image: linear-gradient(to left, var(--j-gradient-stops));` |
| `bg-gradient-to-tl` | `background-image: linear-gradient(to top left, var(--j-gradient-stops));` |
| `from-gray-50` | `--j-gradient-from: var(--j-gray-50); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-gray-50` | `--j-gradient-via: var(--j-gray-50); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-gray-50` | `--j-gradient-to: var(--j-gray-50);` |
| `from-gray-100` | `--j-gradient-from: var(--j-gray-100); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-gray-100` | `--j-gradient-via: var(--j-gray-100); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-gray-100` | `--j-gradient-to: var(--j-gray-100);` |
| `from-gray-200` | `--j-gradient-from: var(--j-gray-200); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-gray-200` | `--j-gradient-via: var(--j-gray-200); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-gray-200` | `--j-gradient-to: var(--j-gray-200);` |
| `from-slate-50` | `--j-gradient-from: var(--j-slate-50); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-slate-50` | `--j-gradient-via: var(--j-slate-50); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-slate-50` | `--j-gradient-to: var(--j-slate-50);` |
| `from-slate-100` | `--j-gradient-from: var(--j-slate-100); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-slate-100` | `--j-gradient-via: var(--j-slate-100); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-slate-100` | `--j-gradient-to: var(--j-slate-100);` |
| `from-slate-200` | `--j-gradient-from: var(--j-slate-200); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-slate-200` | `--j-gradient-via: var(--j-slate-200); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-slate-200` | `--j-gradient-to: var(--j-slate-200);` |
| `from-neon-cyan` | `--j-gradient-from: var(--j-neon-cyan); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-neon-cyan` | `--j-gradient-via: var(--j-neon-cyan); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-neon-cyan` | `--j-gradient-to: var(--j-neon-cyan);` |
| `from-neon-pink` | `--j-gradient-from: var(--j-neon-pink); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-neon-pink` | `--j-gradient-via: var(--j-neon-pink); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-neon-pink` | `--j-gradient-to: var(--j-neon-pink);` |
| `from-neon-green` | `--j-gradient-from: var(--j-neon-green); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-neon-green` | `--j-gradient-via: var(--j-neon-green); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-neon-green` | `--j-gradient-to: var(--j-neon-green);` |
| `from-neon-blue` | `--j-gradient-from: var(--j-neon-blue); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-neon-blue` | `--j-gradient-via: var(--j-neon-blue); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-neon-blue` | `--j-gradient-to: var(--j-neon-blue);` |
| `from-neon-purple` | `--j-gradient-from: var(--j-neon-purple); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-neon-purple` | `--j-gradient-via: var(--j-neon-purple); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-neon-purple` | `--j-gradient-to: var(--j-neon-purple);` |
| `from-neon-yellow` | `--j-gradient-from: var(--j-neon-yellow); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-neon-yellow` | `--j-gradient-via: var(--j-neon-yellow); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-neon-yellow` | `--j-gradient-to: var(--j-neon-yellow);` |
| `from-glass-light` | `--j-gradient-from: var(--j-glass-light); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-glass-light` | `--j-gradient-via: var(--j-glass-light); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-glass-light` | `--j-gradient-to: var(--j-glass-light);` |
| `from-glass-medium` | `--j-gradient-from: var(--j-glass-medium); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-glass-medium` | `--j-gradient-via: var(--j-glass-medium); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-glass-medium` | `--j-gradient-to: var(--j-glass-medium);` |
| `from-glass-heavy` | `--j-gradient-from: var(--j-glass-heavy); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-glass-heavy` | `--j-gradient-via: var(--j-glass-heavy); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-glass-heavy` | `--j-gradient-to: var(--j-glass-heavy);` |
| `from-glass-dark` | `--j-gradient-from: var(--j-glass-dark); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-glass-dark` | `--j-gradient-via: var(--j-glass-dark); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-glass-dark` | `--j-gradient-to: var(--j-glass-dark);` |
| `from-primary` | `--j-gradient-from: var(--j-primary); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-primary` | `--j-gradient-via: var(--j-primary); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-primary` | `--j-gradient-to: var(--j-primary);` |
| `from-secondary` | `--j-gradient-from: var(--j-secondary); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-secondary` | `--j-gradient-via: var(--j-secondary); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-secondary` | `--j-gradient-to: var(--j-secondary);` |
| `from-accent` | `--j-gradient-from: var(--j-accent); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-accent` | `--j-gradient-via: var(--j-accent); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-accent` | `--j-gradient-to: var(--j-accent);` |
| `from-success` | `--j-gradient-from: var(--j-success); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-success` | `--j-gradient-via: var(--j-success); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-success` | `--j-gradient-to: var(--j-success);` |
| `from-warning` | `--j-gradient-from: var(--j-warning); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-warning` | `--j-gradient-via: var(--j-warning); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-warning` | `--j-gradient-to: var(--j-warning);` |
| `from-error` | `--j-gradient-from: var(--j-error); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-error` | `--j-gradient-via: var(--j-error); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-error` | `--j-gradient-to: var(--j-error);` |
| `from-info` | `--j-gradient-from: var(--j-info); --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-info` | `--j-gradient-via: var(--j-info); --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-info` | `--j-gradient-to: var(--j-info);` |
| `from-transparent` | `--j-gradient-from: transparent; --j-gradient-stops: var(--j-gradient-from), var(--j-gradient-via, transparent), var(--j-gradient-to, transparent);` |
| `via-transparent` | `--j-gradient-via: transparent; --j-gradient-stops: var(--j-gradient-from, transparent), var(--j-gradient-via), var(--j-gradient-to, transparent);` |
| `to-transparent` | `--j-gradient-to: transparent;` |

## Effects

> Shadows, opacity, and blend modes

| Class | CSS |
|-------|-----|
| `shadow` | `box-shadow: var(--j-shadow-default);` |
| `shadow-sm` | `box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);` |
| `shadow-md` | `box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);` |
| `shadow-lg` | `box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);` |
| `shadow-xl` | `box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);` |
| `shadow-2xl` | `box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);` |
| `shadow-inner` | `box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);` |
| `shadow-glow` | `box-shadow: 0 0 20px rgb(99 102 241 / 0.4);` |
| `shadow-none` | `box-shadow: none;` |
| `shadow-glow` | `box-shadow: 0 0 20px var(--j-primary);` |
| `shadow-glow-sm` | `box-shadow: 0 0 10px var(--j-primary);` |
| `shadow-glow-lg` | `box-shadow: 0 0 40px var(--j-primary);` |
| `rounded` | `border-radius: var(--j-radius-default);` |
| `rounded-none` | `border-radius: 0;` |
| `rounded-sm` | `border-radius: 0.25rem;` |
| `rounded-md` | `border-radius: 0.5rem;` |
| `rounded-lg` | `border-radius: 0.75rem;` |
| `rounded-xl` | `border-radius: 1rem;` |
| `rounded-2xl` | `border-radius: 1.5rem;` |
| `rounded-full` | `border-radius: 9999px;` |
| `rounded-buttons` | `border-radius: 0.5rem;` |
| `rounded-inputs` | `border-radius: 0.5rem;` |
| `rounded-t-none` | `border-top-left-radius: 0; border-top-right-radius: 0;` |
| `rounded-r-none` | `border-top-right-radius: 0; border-bottom-right-radius: 0;` |
| `rounded-b-none` | `border-bottom-left-radius: 0; border-bottom-right-radius: 0;` |
| `rounded-l-none` | `border-top-left-radius: 0; border-bottom-left-radius: 0;` |
| `rounded-tl-none` | `border-top-left-radius: 0;` |
| `rounded-tr-none` | `border-top-right-radius: 0;` |
| `rounded-br-none` | `border-bottom-right-radius: 0;` |
| `rounded-bl-none` | `border-bottom-left-radius: 0;` |
| `rounded-s-none` | `border-start-start-radius: 0; border-end-start-radius: 0;` |
| `rounded-e-none` | `border-start-end-radius: 0; border-end-end-radius: 0;` |
| `rounded-ss-none` | `border-start-start-radius: 0;` |
| `rounded-se-none` | `border-start-end-radius: 0;` |
| `rounded-ee-none` | `border-end-end-radius: 0;` |
| `rounded-es-none` | `border-end-start-radius: 0;` |
| `rounded-t-sm` | `border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem;` |
| `rounded-r-sm` | `border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem;` |
| `rounded-b-sm` | `border-bottom-left-radius: 0.25rem; border-bottom-right-radius: 0.25rem;` |
| `rounded-l-sm` | `border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem;` |
| `rounded-tl-sm` | `border-top-left-radius: 0.25rem;` |
| `rounded-tr-sm` | `border-top-right-radius: 0.25rem;` |
| `rounded-br-sm` | `border-bottom-right-radius: 0.25rem;` |
| `rounded-bl-sm` | `border-bottom-left-radius: 0.25rem;` |
| `rounded-s-sm` | `border-start-start-radius: 0.25rem; border-end-start-radius: 0.25rem;` |
| `rounded-e-sm` | `border-start-end-radius: 0.25rem; border-end-end-radius: 0.25rem;` |
| `rounded-ss-sm` | `border-start-start-radius: 0.25rem;` |
| `rounded-se-sm` | `border-start-end-radius: 0.25rem;` |
| `rounded-ee-sm` | `border-end-end-radius: 0.25rem;` |
| `rounded-es-sm` | `border-end-start-radius: 0.25rem;` |
| `rounded-t` | `border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;` |
| `rounded-r` | `border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;` |
| `rounded-b` | `border-bottom-left-radius: 0.5rem; border-bottom-right-radius: 0.5rem;` |
| `rounded-l` | `border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;` |
| `rounded-tl` | `border-top-left-radius: 0.5rem;` |
| `rounded-tr` | `border-top-right-radius: 0.5rem;` |
| `rounded-br` | `border-bottom-right-radius: 0.5rem;` |
| `rounded-bl` | `border-bottom-left-radius: 0.5rem;` |
| `rounded-s` | `border-start-start-radius: 0.5rem; border-end-start-radius: 0.5rem;` |
| `rounded-e` | `border-start-end-radius: 0.5rem; border-end-end-radius: 0.5rem;` |
| `rounded-ss` | `border-start-start-radius: 0.5rem;` |
| `rounded-se` | `border-start-end-radius: 0.5rem;` |
| `rounded-ee` | `border-end-end-radius: 0.5rem;` |
| `rounded-es` | `border-end-start-radius: 0.5rem;` |
| `rounded-t-md` | `border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;` |
| `rounded-r-md` | `border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;` |
| `rounded-b-md` | `border-bottom-left-radius: 0.5rem; border-bottom-right-radius: 0.5rem;` |
| `rounded-l-md` | `border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;` |
| `rounded-tl-md` | `border-top-left-radius: 0.5rem;` |
| `rounded-tr-md` | `border-top-right-radius: 0.5rem;` |
| `rounded-br-md` | `border-bottom-right-radius: 0.5rem;` |
| `rounded-bl-md` | `border-bottom-left-radius: 0.5rem;` |
| `rounded-s-md` | `border-start-start-radius: 0.5rem; border-end-start-radius: 0.5rem;` |
| `rounded-e-md` | `border-start-end-radius: 0.5rem; border-end-end-radius: 0.5rem;` |
| `rounded-ss-md` | `border-start-start-radius: 0.5rem;` |
| `rounded-se-md` | `border-start-end-radius: 0.5rem;` |
| `rounded-ee-md` | `border-end-end-radius: 0.5rem;` |
| `rounded-es-md` | `border-end-start-radius: 0.5rem;` |
| `rounded-t-lg` | `border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem;` |
| `rounded-r-lg` | `border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem;` |
| `rounded-b-lg` | `border-bottom-left-radius: 0.75rem; border-bottom-right-radius: 0.75rem;` |
| `rounded-l-lg` | `border-top-left-radius: 0.75rem; border-bottom-left-radius: 0.75rem;` |
| `rounded-tl-lg` | `border-top-left-radius: 0.75rem;` |
| `rounded-tr-lg` | `border-top-right-radius: 0.75rem;` |
| `rounded-br-lg` | `border-bottom-right-radius: 0.75rem;` |
| `rounded-bl-lg` | `border-bottom-left-radius: 0.75rem;` |
| `rounded-s-lg` | `border-start-start-radius: 0.75rem; border-end-start-radius: 0.75rem;` |
| `rounded-e-lg` | `border-start-end-radius: 0.75rem; border-end-end-radius: 0.75rem;` |
| `rounded-ss-lg` | `border-start-start-radius: 0.75rem;` |
| `rounded-se-lg` | `border-start-end-radius: 0.75rem;` |
| `rounded-ee-lg` | `border-end-end-radius: 0.75rem;` |
| `rounded-es-lg` | `border-end-start-radius: 0.75rem;` |
| `rounded-t-xl` | `border-top-left-radius: 1rem; border-top-right-radius: 1rem;` |
| `rounded-r-xl` | `border-top-right-radius: 1rem; border-bottom-right-radius: 1rem;` |
| `rounded-b-xl` | `border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem;` |
| `rounded-l-xl` | `border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;` |
| `rounded-tl-xl` | `border-top-left-radius: 1rem;` |
| `rounded-tr-xl` | `border-top-right-radius: 1rem;` |
| `rounded-br-xl` | `border-bottom-right-radius: 1rem;` |
| `rounded-bl-xl` | `border-bottom-left-radius: 1rem;` |
| `rounded-s-xl` | `border-start-start-radius: 1rem; border-end-start-radius: 1rem;` |
| `rounded-e-xl` | `border-start-end-radius: 1rem; border-end-end-radius: 1rem;` |
| `rounded-ss-xl` | `border-start-start-radius: 1rem;` |
| `rounded-se-xl` | `border-start-end-radius: 1rem;` |
| `rounded-ee-xl` | `border-end-end-radius: 1rem;` |
| `rounded-es-xl` | `border-end-start-radius: 1rem;` |
| `rounded-t-2xl` | `border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem;` |
| `rounded-r-2xl` | `border-top-right-radius: 1.5rem; border-bottom-right-radius: 1.5rem;` |
| `rounded-b-2xl` | `border-bottom-left-radius: 1.5rem; border-bottom-right-radius: 1.5rem;` |
| `rounded-l-2xl` | `border-top-left-radius: 1.5rem; border-bottom-left-radius: 1.5rem;` |
| `rounded-tl-2xl` | `border-top-left-radius: 1.5rem;` |
| `rounded-tr-2xl` | `border-top-right-radius: 1.5rem;` |
| `rounded-br-2xl` | `border-bottom-right-radius: 1.5rem;` |
| `rounded-bl-2xl` | `border-bottom-left-radius: 1.5rem;` |
| `rounded-s-2xl` | `border-start-start-radius: 1.5rem; border-end-start-radius: 1.5rem;` |
| `rounded-e-2xl` | `border-start-end-radius: 1.5rem; border-end-end-radius: 1.5rem;` |
| `rounded-ss-2xl` | `border-start-start-radius: 1.5rem;` |
| `rounded-se-2xl` | `border-start-end-radius: 1.5rem;` |
| `rounded-ee-2xl` | `border-end-end-radius: 1.5rem;` |
| `rounded-es-2xl` | `border-end-start-radius: 1.5rem;` |
| `rounded-t-full` | `border-top-left-radius: 9999px; border-top-right-radius: 9999px;` |
| `rounded-r-full` | `border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;` |
| `rounded-b-full` | `border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px;` |
| `rounded-l-full` | `border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;` |
| `rounded-tl-full` | `border-top-left-radius: 9999px;` |
| `rounded-tr-full` | `border-top-right-radius: 9999px;` |
| `rounded-br-full` | `border-bottom-right-radius: 9999px;` |
| `rounded-bl-full` | `border-bottom-left-radius: 9999px;` |
| `rounded-s-full` | `border-start-start-radius: 9999px; border-end-start-radius: 9999px;` |
| `rounded-e-full` | `border-start-end-radius: 9999px; border-end-end-radius: 9999px;` |
| `rounded-ss-full` | `border-start-start-radius: 9999px;` |
| `rounded-se-full` | `border-start-end-radius: 9999px;` |
| `rounded-ee-full` | `border-end-end-radius: 9999px;` |
| `rounded-es-full` | `border-end-start-radius: 9999px;` |
| `rounded-t-buttons` | `border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;` |
| `rounded-r-buttons` | `border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;` |
| `rounded-b-buttons` | `border-bottom-left-radius: 0.5rem; border-bottom-right-radius: 0.5rem;` |
| `rounded-l-buttons` | `border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;` |
| `rounded-tl-buttons` | `border-top-left-radius: 0.5rem;` |
| `rounded-tr-buttons` | `border-top-right-radius: 0.5rem;` |
| `rounded-br-buttons` | `border-bottom-right-radius: 0.5rem;` |
| `rounded-bl-buttons` | `border-bottom-left-radius: 0.5rem;` |
| `rounded-s-buttons` | `border-start-start-radius: 0.5rem; border-end-start-radius: 0.5rem;` |
| `rounded-e-buttons` | `border-start-end-radius: 0.5rem; border-end-end-radius: 0.5rem;` |
| `rounded-ss-buttons` | `border-start-start-radius: 0.5rem;` |
| `rounded-se-buttons` | `border-start-end-radius: 0.5rem;` |
| `rounded-ee-buttons` | `border-end-end-radius: 0.5rem;` |
| `rounded-es-buttons` | `border-end-start-radius: 0.5rem;` |
| `rounded-t-inputs` | `border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;` |
| `rounded-r-inputs` | `border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;` |
| `rounded-b-inputs` | `border-bottom-left-radius: 0.5rem; border-bottom-right-radius: 0.5rem;` |
| `rounded-l-inputs` | `border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;` |
| `rounded-tl-inputs` | `border-top-left-radius: 0.5rem;` |
| `rounded-tr-inputs` | `border-top-right-radius: 0.5rem;` |
| `rounded-br-inputs` | `border-bottom-right-radius: 0.5rem;` |
| `rounded-bl-inputs` | `border-bottom-left-radius: 0.5rem;` |
| `rounded-s-inputs` | `border-start-start-radius: 0.5rem; border-end-start-radius: 0.5rem;` |
| `rounded-e-inputs` | `border-start-end-radius: 0.5rem; border-end-end-radius: 0.5rem;` |
| `rounded-ss-inputs` | `border-start-start-radius: 0.5rem;` |
| `rounded-se-inputs` | `border-start-end-radius: 0.5rem;` |
| `rounded-ee-inputs` | `border-end-end-radius: 0.5rem;` |
| `rounded-es-inputs` | `border-end-start-radius: 0.5rem;` |
| `border-0` | `border-width: 0px;` |
| `border` | `border-width: 1px;` |
| `border-2` | `border-width: 2px;` |
| `border-t-0` | `border-top-width: 0px;` |
| `border-t` | `border-top-width: 1px;` |
| `border-t-2` | `border-top-width: 2px;` |
| `border-r-0` | `border-right-width: 0px;` |
| `border-r` | `border-right-width: 1px;` |
| `border-r-2` | `border-right-width: 2px;` |
| `border-b-0` | `border-bottom-width: 0px;` |
| `border-b` | `border-bottom-width: 1px;` |
| `border-b-2` | `border-bottom-width: 2px;` |
| `border-l-0` | `border-left-width: 0px;` |
| `border-l` | `border-left-width: 1px;` |
| `border-l-2` | `border-left-width: 2px;` |
| `border-x-0` | `border-left-width: 0px; border-right-width: 0px;` |
| `border-x` | `border-left-width: 1px; border-right-width: 1px;` |
| `border-x-2` | `border-left-width: 2px; border-right-width: 2px;` |
| `border-y-0` | `border-top-width: 0px; border-bottom-width: 0px;` |
| `border-y` | `border-top-width: 1px; border-bottom-width: 1px;` |
| `border-y-2` | `border-top-width: 2px; border-bottom-width: 2px;` |
| `border-s-0` | `border-inline-start-width: 0px;` |
| `border-s` | `border-inline-start-width: 1px;` |
| `border-s-2` | `border-inline-start-width: 2px;` |
| `border-e-0` | `border-inline-end-width: 0px;` |
| `border-e` | `border-inline-end-width: 1px;` |
| `border-e-2` | `border-inline-end-width: 2px;` |
| `border-solid` | `border-style: solid;` |
| `border-dashed` | `border-style: dashed;` |
| `border-dotted` | `border-style: dotted;` |
| `border-double` | `border-style: double;` |
| `border-hidden` | `border-style: hidden;` |
| `border-none` | `border-style: none;` |
| `divide-x-0` | `.divide-x-0 > :not([hidden]) ~ :not([hidden]) { border-left-width: 0px;` |
| `divide-y-0` | `.divide-y-0 > :not([hidden]) ~ :not([hidden]) { border-top-width: 0px;` |
| `divide-x` | `.divide-x > :not([hidden]) ~ :not([hidden]) { border-left-width: 1px;` |
| `divide-y` | `.divide-y > :not([hidden]) ~ :not([hidden]) { border-top-width: 1px;` |
| `divide-x-2` | `.divide-x-2 > :not([hidden]) ~ :not([hidden]) { border-left-width: 2px;` |
| `divide-y-2` | `.divide-y-2 > :not([hidden]) ~ :not([hidden]) { border-top-width: 2px;` |
| `divide-solid` | `.divide-solid > :not([hidden]) ~ :not([hidden]) { border-style: solid;` |
| `divide-dashed` | `.divide-dashed > :not([hidden]) ~ :not([hidden]) { border-style: dashed;` |
| `divide-dotted` | `.divide-dotted > :not([hidden]) ~ :not([hidden]) { border-style: dotted;` |
| `divide-double` | `.divide-double > :not([hidden]) ~ :not([hidden]) { border-style: double;` |
| `divide-none` | `.divide-none > :not([hidden]) ~ :not([hidden]) { border-style: none;` |
| `outline-0` | `outline-width: 0px;` |
| `outline-1` | `outline-width: 1px;` |
| `outline-2` | `outline-width: 2px;` |
| `outline-none` | `outline: 2px solid transparent; outline-offset: 2px;` |
| `outline-dashed` | `outline-style: dashed;` |
| `outline-dotted` | `outline-style: dotted;` |
| `outline-double` | `outline-style: double;` |
| `outline-offset-0` | `outline-offset: 0px;` |
| `outline-offset-1` | `outline-offset: 1px;` |
| `outline-offset-2` | `outline-offset: 2px;` |
| `ring-0` | `box-shadow: 0 0 0 0px var(--j-ring, var(--j-primary));` |
| `ring` | `box-shadow: 0 0 0 1px var(--j-ring, var(--j-primary));` |
| `ring-2` | `box-shadow: 0 0 0 2px var(--j-ring, var(--j-primary));` |
| `ring-inset` | `--j-ring-inset: inset;` |
| `ring-offset-0` | `--j-ring-offset-width: 0px; box-shadow: 0 0 0 var(--j-ring-offset-width) var(--j-ring-offset-color, white), var(--j-ring-shadow);` |
| `ring-offset-1` | `--j-ring-offset-width: 1px; box-shadow: 0 0 0 var(--j-ring-offset-width) var(--j-ring-offset-color, white), var(--j-ring-shadow);` |
| `ring-offset-2` | `--j-ring-offset-width: 2px; box-shadow: 0 0 0 var(--j-ring-offset-width) var(--j-ring-offset-color, white), var(--j-ring-shadow);` |
| `mix-blend-normal` | `mix-blend-mode: normal;` |
| `mix-blend-multiply` | `mix-blend-mode: multiply;` |
| `mix-blend-screen` | `mix-blend-mode: screen;` |
| `mix-blend-overlay` | `mix-blend-mode: overlay;` |
| `mix-blend-darken` | `mix-blend-mode: darken;` |
| `mix-blend-lighten` | `mix-blend-mode: lighten;` |
| `mix-blend-color-dodge` | `mix-blend-mode: color-dodge;` |
| `mix-blend-color-burn` | `mix-blend-mode: color-burn;` |
| `mix-blend-hard-light` | `mix-blend-mode: hard-light;` |
| `mix-blend-soft-light` | `mix-blend-mode: soft-light;` |
| `mix-blend-difference` | `mix-blend-mode: difference;` |
| `mix-blend-exclusion` | `mix-blend-mode: exclusion;` |
| `mix-blend-hue` | `mix-blend-mode: hue;` |
| `mix-blend-saturation` | `mix-blend-mode: saturation;` |
| `mix-blend-color` | `mix-blend-mode: color;` |
| `mix-blend-luminosity` | `mix-blend-mode: luminosity;` |
| `mix-blend-plus-lighter` | `mix-blend-mode: plus-lighter;` |
| `bg-blend-normal` | `background-blend-mode: normal;` |
| `bg-blend-multiply` | `background-blend-mode: multiply;` |
| `bg-blend-screen` | `background-blend-mode: screen;` |
| `bg-blend-overlay` | `background-blend-mode: overlay;` |
| `bg-blend-darken` | `background-blend-mode: darken;` |
| `bg-blend-lighten` | `background-blend-mode: lighten;` |
| `bg-blend-color-dodge` | `background-blend-mode: color-dodge;` |
| `bg-blend-color-burn` | `background-blend-mode: color-burn;` |
| `bg-blend-hard-light` | `background-blend-mode: hard-light;` |
| `bg-blend-soft-light` | `background-blend-mode: soft-light;` |
| `bg-blend-difference` | `background-blend-mode: difference;` |
| `bg-blend-exclusion` | `background-blend-mode: exclusion;` |
| `bg-blend-hue` | `background-blend-mode: hue;` |
| `bg-blend-saturation` | `background-blend-mode: saturation;` |
| `bg-blend-color` | `background-blend-mode: color;` |
| `bg-blend-luminosity` | `background-blend-mode: luminosity;` |
| `bg-blend-plus-lighter` | `background-blend-mode: plus-lighter;` |
| `cursor-auto` | `cursor: auto;` |
| `cursor-default` | `cursor: default;` |
| `cursor-pointer` | `cursor: pointer;` |
| `cursor-wait` | `cursor: wait;` |
| `cursor-text` | `cursor: text;` |
| `cursor-move` | `cursor: move;` |
| `cursor-help` | `cursor: help;` |
| `cursor-not-allowed` | `cursor: not-allowed;` |
| `cursor-none` | `cursor: none;` |
| `cursor-context-menu` | `cursor: context-menu;` |
| `cursor-progress` | `cursor: progress;` |
| `cursor-cell` | `cursor: cell;` |
| `cursor-crosshair` | `cursor: crosshair;` |
| `cursor-vertical-text` | `cursor: vertical-text;` |
| `cursor-alias` | `cursor: alias;` |
| `cursor-copy` | `cursor: copy;` |
| `cursor-no-drop` | `cursor: no-drop;` |
| `cursor-grab` | `cursor: grab;` |
| `cursor-grabbing` | `cursor: grabbing;` |
| `cursor-all-scroll` | `cursor: all-scroll;` |
| `cursor-col-resize` | `cursor: col-resize;` |
| `cursor-row-resize` | `cursor: row-resize;` |
| `cursor-n-resize` | `cursor: n-resize;` |
| `cursor-s-resize` | `cursor: s-resize;` |
| `cursor-e-resize` | `cursor: e-resize;` |
| `cursor-w-resize` | `cursor: w-resize;` |
| `cursor-ne-resize` | `cursor: ne-resize;` |
| `cursor-nw-resize` | `cursor: nw-resize;` |
| `cursor-se-resize` | `cursor: se-resize;` |
| `cursor-sw-resize` | `cursor: sw-resize;` |
| `cursor-ew-resize` | `cursor: ew-resize;` |
| `cursor-ns-resize` | `cursor: ns-resize;` |
| `cursor-nesw-resize` | `cursor: nesw-resize;` |
| `cursor-nwse-resize` | `cursor: nwse-resize;` |
| `cursor-zoom-in` | `cursor: zoom-in;` |
| `cursor-zoom-out` | `cursor: zoom-out;` |
| `select-none` | `user-select: none;` |
| `select-text` | `user-select: text;` |
| `select-all` | `user-select: all;` |
| `select-auto` | `user-select: auto;` |
| `pointer-events-none` | `pointer-events: none;` |
| `pointer-events-auto` | `pointer-events: auto;` |
| `resize-none` | `resize: none;` |
| `resize-y` | `resize: vertical;` |
| `resize-x` | `resize: horizontal;` |
| `resize` | `resize: both;` |
| `scroll-auto` | `scroll-behavior: auto;` |
| `scroll-smooth` | `scroll-behavior: smooth;` |
| `snap-none` | `scroll-snap-type: none;` |
| `snap-x` | `scroll-snap-type: x var(--j-scroll-snap-strictness, proximity);` |
| `snap-y` | `scroll-snap-type: y var(--j-scroll-snap-strictness, proximity);` |
| `snap-both` | `scroll-snap-type: both var(--j-scroll-snap-strictness, proximity);` |
| `snap-mandatory` | `--j-scroll-snap-strictness: mandatory;` |
| `snap-proximity` | `--j-scroll-snap-strictness: proximity;` |
| `snap-start` | `scroll-snap-align: start;` |
| `snap-end` | `scroll-snap-align: end;` |
| `snap-center` | `scroll-snap-align: center;` |
| `snap-align-none` | `scroll-snap-align: none;` |
| `touch-auto` | `touch-action: auto;` |
| `touch-none` | `touch-action: none;` |
| `touch-pan-x` | `touch-action: pan-x;` |
| `touch-pan-left` | `touch-action: pan-left;` |
| `touch-pan-right` | `touch-action: pan-right;` |
| `touch-pan-y` | `touch-action: pan-y;` |
| `touch-pan-up` | `touch-action: pan-up;` |
| `touch-pan-down` | `touch-action: pan-down;` |
| `touch-pinch-zoom` | `touch-action: pinch-zoom;` |
| `touch-manipulation` | `touch-action: manipulation;` |
| `will-change-auto` | `will-change: auto;` |
| `will-change-scroll` | `will-change: scroll-position;` |
| `will-change-contents` | `will-change: contents;` |
| `will-change-transform` | `will-change: transform;` |
| `glass` | `background: rgba(255, 255, 255, 0.1);   backdrop-filter: blur(12px);   -webkit-backdrop-filter: blur(12px);   border: 1px solid rgba(255, 255, 255, 0.2);` |
| `glass-dark` | `background: rgba(0, 0, 0, 0.3);   backdrop-filter: blur(12px);   -webkit-backdrop-filter: blur(12px);   border: 1px solid rgba(255, 255, 255, 0.1);` |

## Animations

> Transitions and keyframe animations

| Class | CSS |
|-------|-----|
| `transition-none` | `transition-property: none;` |
| `transition-all` | `transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transition` | `transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transition-colors` | `transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transition-opacity` | `transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transition-shadow` | `transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transition-transform` | `transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `duration-0` | `transition-duration: 0ms;` |
| `duration-75` | `transition-duration: 75ms;` |
| `duration-100` | `transition-duration: 100ms;` |
| `ease-linear` | `transition-timing-function: linear;` |
| `ease-in` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1);` |
| `ease-out` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1);` |
| `ease-in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);` |
| `ease-spring` | `transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);` |
| `ease-bounce` | `transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);` |
| `delay-0` | `transition-delay: 0ms;` |
| `delay-75` | `transition-delay: 75ms;` |
| `delay-100` | `transition-delay: 100ms;` |
| `keyframes` | `@keyframes j-spin {   to { transform: rotate(360deg); } }  @keyframes j-ping {   75%, 100% { transform: scale(2); opacity: 0; } }  @keyframes j-pulse {   50% { opacity: .5; } }  @keyframes j-bounce {   0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }   50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }  @keyframes j-shake {   0%, 100% { transform: translateX(0); }   10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }   20%, 40%, 60%, 80% { transform: translateX(5px); } }  @keyframes j-wiggle {   0%, 100% { transform: rotate(-3deg); }   50% { transform: rotate(3deg); } }  @keyframes j-fade-in {   from { opacity: 0; }   to { opacity: 1; } }  @keyframes j-fade-out {   from { opacity: 1; }   to { opacity: 0; } }  @keyframes j-slide-in-up {   from { transform: translateY(100%); opacity: 0; }   to { transform: translateY(0); opacity: 1; } }  @keyframes j-slide-in-down {   from { transform: translateY(-100%); opacity: 0; }   to { transform: translateY(0); opacity: 1; } }  @keyframes j-slide-in-left {   from { transform: translateX(-100%); opacity: 0; }   to { transform: translateX(0); opacity: 1; } }  @keyframes j-slide-in-right {   from { transform: translateX(100%); opacity: 0; }   to { transform: translateX(0); opacity: 1; } }  @keyframes j-zoom-in {   from { transform: scale(0.95); opacity: 0; }   to { transform: scale(1); opacity: 1; } }  @keyframes j-zoom-out {   from { transform: scale(1); opacity: 1; }   to { transform: scale(0.95); opacity: 0; } }  @keyframes j-float {   0%, 100% { transform: translateY(0); }   50% { transform: translateY(-10px); } }  @keyframes j-glow {   0%, 100% { box-shadow: 0 0 5px var(--j-primary), 0 0 10px var(--j-primary); }   50% { box-shadow: 0 0 20px var(--j-primary), 0 0 30px var(--j-primary); } }  @keyframes j-shimmer {   0% { background-position: -200% 0; }   100% { background-position: 200% 0; } }  @keyframes j-heartbeat {   0%, 100% { transform: scale(1); }   14% { transform: scale(1.3); }   28% { transform: scale(1); }   42% { transform: scale(1.3); }   70% { transform: scale(1); } }  @keyframes j-flip {   0% { transform: perspective(400px) rotateY(0); }   100% { transform: perspective(400px) rotateY(360deg); } }` |
| `animate-none` | `animation: none;` |
| `animate-spin` | `animation: j-spin 1s linear infinite;` |
| `animate-ping` | `animation: j-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;` |
| `animate-pulse` | `animation: j-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;` |
| `animate-bounce` | `animation: j-bounce 1s infinite;` |
| `animate-shake` | `animation: j-shake 0.5s ease-in-out;` |
| `animate-wiggle` | `animation: j-wiggle 0.5s ease-in-out infinite;` |
| `animate-fade-in` | `animation: j-fade-in 0.3s ease-out forwards;` |
| `animate-fade-out` | `animation: j-fade-out 0.3s ease-out forwards;` |
| `animate-slide-in-up` | `animation: j-slide-in-up 0.3s ease-out forwards;` |
| `animate-slide-in-down` | `animation: j-slide-in-down 0.3s ease-out forwards;` |
| `animate-slide-in-left` | `animation: j-slide-in-left 0.3s ease-out forwards;` |
| `animate-slide-in-right` | `animation: j-slide-in-right 0.3s ease-out forwards;` |
| `animate-zoom-in` | `animation: j-zoom-in 0.3s ease-out forwards;` |
| `animate-zoom-out` | `animation: j-zoom-out 0.3s ease-out forwards;` |
| `animate-float` | `animation: j-float 3s ease-in-out infinite;` |
| `animate-glow` | `animation: j-glow 2s ease-in-out infinite;` |
| `animate-shimmer` | `background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); background-size: 200% 100%; animation: j-shimmer 1.5s infinite;` |
| `animate-heartbeat` | `animation: j-heartbeat 1.5s ease-in-out infinite;` |
| `animate-flip` | `animation: j-flip 1s ease-in-out;` |
| `animate-duration-75` | `animation-duration: 75ms;` |
| `animate-duration-100` | `animation-duration: 100ms;` |
| `animate-duration-150` | `animation-duration: 150ms;` |
| `animate-delay-75` | `animation-delay: 75ms;` |
| `animate-delay-100` | `animation-delay: 100ms;` |
| `animate-delay-150` | `animation-delay: 150ms;` |
| `animate-infinite` | `animation-iteration-count: infinite;` |
| `animate-once` | `animation-iteration-count: 1;` |
| `animate-twice` | `animation-iteration-count: 2;` |
| `animate-normal` | `animation-direction: normal;` |
| `animate-reverse` | `animation-direction: reverse;` |
| `animate-alternate` | `animation-direction: alternate;` |
| `animate-alternate-reverse` | `animation-direction: alternate-reverse;` |
| `animate-fill-none` | `animation-fill-mode: none;` |
| `animate-fill-forwards` | `animation-fill-mode: forwards;` |
| `animate-fill-backwards` | `animation-fill-mode: backwards;` |
| `animate-fill-both` | `animation-fill-mode: both;` |
| `animate-running` | `animation-play-state: running;` |
| `animate-paused` | `animation-play-state: paused;` |

## Transforms

> Scale, rotate, translate, and skew

| Class | CSS |
|-------|-----|
| `transform` | `transform: translate(var(--j-translate-x, 0), var(--j-translate-y, 0)) rotate(var(--j-rotate, 0)) skewX(var(--j-skew-x, 0)) skewY(var(--j-skew-y, 0)) scaleX(var(--j-scale-x, 1)) scaleY(var(--j-scale-y, 1));` |
| `transform-cpu` | `transform: translate(var(--j-translate-x, 0), var(--j-translate-y, 0)) rotate(var(--j-rotate, 0)) skewX(var(--j-skew-x, 0)) skewY(var(--j-skew-y, 0)) scaleX(var(--j-scale-x, 1)) scaleY(var(--j-scale-y, 1));` |
| `transform-gpu` | `transform: translate3d(var(--j-translate-x, 0), var(--j-translate-y, 0), 0) rotate(var(--j-rotate, 0)) skewX(var(--j-skew-x, 0)) skewY(var(--j-skew-y, 0)) scaleX(var(--j-scale-x, 1)) scaleY(var(--j-scale-y, 1));` |
| `transform-none` | `transform: none;` |
| `origin-center` | `transform-origin: center;` |
| `origin-top` | `transform-origin: top;` |
| `origin-top-right` | `transform-origin: top right;` |
| `origin-right` | `transform-origin: right;` |
| `origin-bottom-right` | `transform-origin: bottom right;` |
| `origin-bottom` | `transform-origin: bottom;` |
| `origin-bottom-left` | `transform-origin: bottom left;` |
| `origin-left` | `transform-origin: left;` |
| `origin-top-left` | `transform-origin: top left;` |
| `scale-0` | `--j-scale-x: 0; --j-scale-y: 0; transform: scale(0);` |
| `scale-x-0` | `--j-scale-x: 0; transform: scaleX(0);` |
| `scale-y-0` | `--j-scale-y: 0; transform: scaleY(0);` |
| `scale-50` | `--j-scale-x: 0.5; --j-scale-y: 0.5; transform: scale(0.5);` |
| `scale-x-50` | `--j-scale-x: 0.5; transform: scaleX(0.5);` |
| `scale-y-50` | `--j-scale-y: 0.5; transform: scaleY(0.5);` |
| `scale-75` | `--j-scale-x: 0.75; --j-scale-y: 0.75; transform: scale(0.75);` |
| `scale-x-75` | `--j-scale-x: 0.75; transform: scaleX(0.75);` |
| `scale-y-75` | `--j-scale-y: 0.75; transform: scaleY(0.75);` |
| `rotate-0` | `--j-rotate: 0deg; transform: rotate(0deg);` |
| `-rotate-0` | `--j-rotate: -0deg; transform: rotate(-0deg);` |
| `rotate-1` | `--j-rotate: 1deg; transform: rotate(1deg);` |
| `-rotate-1` | `--j-rotate: -1deg; transform: rotate(-1deg);` |
| `rotate-2` | `--j-rotate: 2deg; transform: rotate(2deg);` |
| `-rotate-2` | `--j-rotate: -2deg; transform: rotate(-2deg);` |
| `translate-x-0` | `--j-translate-x: 0; transform: translateX(0);` |
| `translate-y-0` | `--j-translate-y: 0; transform: translateY(0);` |
| `-translate-x-0` | `--j-translate-x: -0; transform: translateX(-0);` |
| `-translate-y-0` | `--j-translate-y: -0; transform: translateY(-0);` |
| `translate-x-1` | `--j-translate-x: 0.25rem; transform: translateX(0.25rem);` |
| `translate-y-1` | `--j-translate-y: 0.25rem; transform: translateY(0.25rem);` |
| `-translate-x-1` | `--j-translate-x: -0.25rem; transform: translateX(-0.25rem);` |
| `-translate-y-1` | `--j-translate-y: -0.25rem; transform: translateY(-0.25rem);` |
| `translate-x-2` | `--j-translate-x: 0.5rem; transform: translateX(0.5rem);` |
| `translate-y-2` | `--j-translate-y: 0.5rem; transform: translateY(0.5rem);` |
| `-translate-x-2` | `--j-translate-x: -0.5rem; transform: translateX(-0.5rem);` |
| `-translate-y-2` | `--j-translate-y: -0.5rem; transform: translateY(-0.5rem);` |
| `translate-x-px` | `--j-translate-x: 1px; transform: translateX(1px);` |
| `translate-y-px` | `--j-translate-y: 1px; transform: translateY(1px);` |
| `-translate-x-px` | `--j-translate-x: -1px; transform: translateX(-1px);` |
| `-translate-y-px` | `--j-translate-y: -1px; transform: translateY(-1px);` |
| `translate-x-full` | `--j-translate-x: 100%; transform: translateX(100%);` |
| `translate-y-full` | `--j-translate-y: 100%; transform: translateY(100%);` |
| `-translate-x-full` | `--j-translate-x: -100%; transform: translateX(-100%);` |
| `-translate-y-full` | `--j-translate-y: -100%; transform: translateY(-100%);` |
| `-translate-x-full` | `--j-translate-x: -100%; transform: translateX(-100%);` |
| `-translate-y-full` | `--j-translate-y: -100%; transform: translateY(-100%);` |
| `skew-x-0` | `--j-skew-x: 0deg; transform: skewX(0deg);` |
| `skew-y-0` | `--j-skew-y: 0deg; transform: skewY(0deg);` |
| `-skew-x-0` | `--j-skew-x: -0deg; transform: skewX(-0deg);` |
| `-skew-y-0` | `--j-skew-y: -0deg; transform: skewY(-0deg);` |
| `skew-x-1` | `--j-skew-x: 1deg; transform: skewX(1deg);` |
| `skew-y-1` | `--j-skew-y: 1deg; transform: skewY(1deg);` |
| `-skew-x-1` | `--j-skew-x: -1deg; transform: skewX(-1deg);` |
| `-skew-y-1` | `--j-skew-y: -1deg; transform: skewY(-1deg);` |
| `skew-x-2` | `--j-skew-x: 2deg; transform: skewX(2deg);` |
| `skew-y-2` | `--j-skew-y: 2deg; transform: skewY(2deg);` |
| `-skew-x-2` | `--j-skew-x: -2deg; transform: skewX(-2deg);` |
| `-skew-y-2` | `--j-skew-y: -2deg; transform: skewY(-2deg);` |
| `perspective-none` | `perspective: none;` |
| `perspective-sm` | `perspective: 200px;` |
| `perspective-md` | `perspective: 500px;` |
| `perspective-lg` | `perspective: 1000px;` |
| `perspective-xl` | `perspective: 2000px;` |
| `perspective-origin-center` | `perspective-origin: center;` |
| `perspective-origin-top` | `perspective-origin: top;` |
| `perspective-origin-top-right` | `perspective-origin: top right;` |
| `perspective-origin-right` | `perspective-origin: right;` |
| `perspective-origin-bottom-right` | `perspective-origin: bottom right;` |
| `perspective-origin-bottom` | `perspective-origin: bottom;` |
| `perspective-origin-bottom-left` | `perspective-origin: bottom left;` |
| `perspective-origin-left` | `perspective-origin: left;` |
| `perspective-origin-top-left` | `perspective-origin: top left;` |
| `transform-flat` | `transform-style: flat;` |
| `transform-3d` | `transform-style: preserve-3d;` |
| `backface-visible` | `backface-visibility: visible;` |
| `backface-hidden` | `backface-visibility: hidden;` |
| `rotate-x-0` | `transform: rotateX(0deg);` |
| `rotate-y-0` | `transform: rotateY(0deg);` |
| `rotate-z-0` | `transform: rotateZ(0deg);` |
| `rotate-x-45` | `transform: rotateX(45deg);` |
| `rotate-y-45` | `transform: rotateY(45deg);` |
| `rotate-z-45` | `transform: rotateZ(45deg);` |
| `rotate-x-90` | `transform: rotateX(90deg);` |
| `rotate-y-90` | `transform: rotateY(90deg);` |
| `rotate-z-90` | `transform: rotateZ(90deg);` |
| `translate-z-0` | `transform: translateZ(0px);` |
| `-translate-z-0` | `transform: translateZ(-0px);` |
| `translate-z-10` | `transform: translateZ(10px);` |
| `-translate-z-10` | `transform: translateZ(-10px);` |
| `translate-z-20` | `transform: translateZ(20px);` |
| `-translate-z-20` | `transform: translateZ(-20px);` |

## Filters

> Blur, brightness, contrast, and more

| Class | CSS |
|-------|-----|
| `filter` | `filter: var(--j-blur, ) var(--j-brightness, ) var(--j-contrast, ) var(--j-grayscale, ) var(--j-hue-rotate, ) var(--j-invert, ) var(--j-saturate, ) var(--j-sepia, ) var(--j-drop-shadow, );` |
| `filter-none` | `filter: none;` |
| `backdrop-filter` | `backdrop-filter: var(--j-backdrop-blur, ) var(--j-backdrop-brightness, ) var(--j-backdrop-contrast, ) var(--j-backdrop-grayscale, ) var(--j-backdrop-hue-rotate, ) var(--j-backdrop-invert, ) var(--j-backdrop-saturate, ) var(--j-backdrop-sepia, ); -webkit-backdrop-filter: var(--j-backdrop-blur, ) var(--j-backdrop-brightness, ) var(--j-backdrop-contrast, ) var(--j-backdrop-grayscale, ) var(--j-backdrop-hue-rotate, ) var(--j-backdrop-invert, ) var(--j-backdrop-saturate, ) var(--j-backdrop-sepia, );` |
| `backdrop-filter-none` | `backdrop-filter: none; -webkit-backdrop-filter: none;` |
| `blur-none` | `--j-blur: blur(0); filter: blur(0);` |
| `backdrop-blur-none` | `--j-backdrop-blur: blur(0); backdrop-filter: blur(0); -webkit-backdrop-filter: blur(0);` |
| `blur-sm` | `--j-blur: blur(4px); filter: blur(4px);` |
| `backdrop-blur-sm` | `--j-backdrop-blur: blur(4px); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);` |
| `blur` | `--j-blur: blur(8px); filter: blur(8px);` |
| `backdrop-blur` | `--j-backdrop-blur: blur(8px); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);` |
| `blur-md` | `--j-blur: blur(12px); filter: blur(12px);` |
| `backdrop-blur-md` | `--j-backdrop-blur: blur(12px); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);` |
| `blur-lg` | `--j-blur: blur(16px); filter: blur(16px);` |
| `backdrop-blur-lg` | `--j-backdrop-blur: blur(16px); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);` |
| `blur-xl` | `--j-blur: blur(24px); filter: blur(24px);` |
| `backdrop-blur-xl` | `--j-backdrop-blur: blur(24px); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);` |
| `blur-2xl` | `--j-blur: blur(40px); filter: blur(40px);` |
| `backdrop-blur-2xl` | `--j-backdrop-blur: blur(40px); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);` |
| `blur-3xl` | `--j-blur: blur(64px); filter: blur(64px);` |
| `backdrop-blur-3xl` | `--j-backdrop-blur: blur(64px); backdrop-filter: blur(64px); -webkit-backdrop-filter: blur(64px);` |
| `brightness-0` | `--j-brightness: brightness(0); filter: brightness(0);` |
| `backdrop-brightness-0` | `--j-backdrop-brightness: brightness(0); backdrop-filter: brightness(0); -webkit-backdrop-filter: brightness(0);` |
| `brightness-50` | `--j-brightness: brightness(0.5); filter: brightness(0.5);` |
| `backdrop-brightness-50` | `--j-backdrop-brightness: brightness(0.5); backdrop-filter: brightness(0.5); -webkit-backdrop-filter: brightness(0.5);` |
| `brightness-75` | `--j-brightness: brightness(0.75); filter: brightness(0.75);` |
| `backdrop-brightness-75` | `--j-backdrop-brightness: brightness(0.75); backdrop-filter: brightness(0.75); -webkit-backdrop-filter: brightness(0.75);` |
| `contrast-0` | `--j-contrast: contrast(0); filter: contrast(0);` |
| `backdrop-contrast-0` | `--j-backdrop-contrast: contrast(0); backdrop-filter: contrast(0); -webkit-backdrop-filter: contrast(0);` |
| `contrast-50` | `--j-contrast: contrast(0.5); filter: contrast(0.5);` |
| `backdrop-contrast-50` | `--j-backdrop-contrast: contrast(0.5); backdrop-filter: contrast(0.5); -webkit-backdrop-filter: contrast(0.5);` |
| `contrast-75` | `--j-contrast: contrast(0.75); filter: contrast(0.75);` |
| `backdrop-contrast-75` | `--j-backdrop-contrast: contrast(0.75); backdrop-filter: contrast(0.75); -webkit-backdrop-filter: contrast(0.75);` |
| `grayscale-0` | `--j-grayscale: grayscale(0); filter: grayscale(0);` |
| `grayscale` | `--j-grayscale: grayscale(100%); filter: grayscale(100%);` |
| `backdrop-grayscale-0` | `--j-backdrop-grayscale: grayscale(0); backdrop-filter: grayscale(0); -webkit-backdrop-filter: grayscale(0);` |
| `backdrop-grayscale` | `--j-backdrop-grayscale: grayscale(100%); backdrop-filter: grayscale(100%); -webkit-backdrop-filter: grayscale(100%);` |
| `hue-rotate-0` | `--j-hue-rotate: hue-rotate(0deg); filter: hue-rotate(0deg);` |
| `-hue-rotate-0` | `--j-hue-rotate: hue-rotate(-0deg); filter: hue-rotate(-0deg);` |
| `backdrop-hue-rotate-0` | `--j-backdrop-hue-rotate: hue-rotate(0deg); backdrop-filter: hue-rotate(0deg); -webkit-backdrop-filter: hue-rotate(0deg);` |
| `hue-rotate-15` | `--j-hue-rotate: hue-rotate(15deg); filter: hue-rotate(15deg);` |
| `-hue-rotate-15` | `--j-hue-rotate: hue-rotate(-15deg); filter: hue-rotate(-15deg);` |
| `backdrop-hue-rotate-15` | `--j-backdrop-hue-rotate: hue-rotate(15deg); backdrop-filter: hue-rotate(15deg); -webkit-backdrop-filter: hue-rotate(15deg);` |
| `hue-rotate-30` | `--j-hue-rotate: hue-rotate(30deg); filter: hue-rotate(30deg);` |
| `-hue-rotate-30` | `--j-hue-rotate: hue-rotate(-30deg); filter: hue-rotate(-30deg);` |
| `backdrop-hue-rotate-30` | `--j-backdrop-hue-rotate: hue-rotate(30deg); backdrop-filter: hue-rotate(30deg); -webkit-backdrop-filter: hue-rotate(30deg);` |
| `invert-0` | `--j-invert: invert(0); filter: invert(0);` |
| `invert` | `--j-invert: invert(100%); filter: invert(100%);` |
| `backdrop-invert-0` | `--j-backdrop-invert: invert(0); backdrop-filter: invert(0); -webkit-backdrop-filter: invert(0);` |
| `backdrop-invert` | `--j-backdrop-invert: invert(100%); backdrop-filter: invert(100%); -webkit-backdrop-filter: invert(100%);` |
| `saturate-0` | `--j-saturate: saturate(0); filter: saturate(0);` |
| `backdrop-saturate-0` | `--j-backdrop-saturate: saturate(0); backdrop-filter: saturate(0); -webkit-backdrop-filter: saturate(0);` |
| `saturate-50` | `--j-saturate: saturate(0.5); filter: saturate(0.5);` |
| `backdrop-saturate-50` | `--j-backdrop-saturate: saturate(0.5); backdrop-filter: saturate(0.5); -webkit-backdrop-filter: saturate(0.5);` |
| `saturate-100` | `--j-saturate: saturate(1); filter: saturate(1);` |
| `backdrop-saturate-100` | `--j-backdrop-saturate: saturate(1); backdrop-filter: saturate(1); -webkit-backdrop-filter: saturate(1);` |
| `sepia-0` | `--j-sepia: sepia(0); filter: sepia(0);` |
| `sepia` | `--j-sepia: sepia(100%); filter: sepia(100%);` |
| `backdrop-sepia-0` | `--j-backdrop-sepia: sepia(0); backdrop-filter: sepia(0); -webkit-backdrop-filter: sepia(0);` |
| `backdrop-sepia` | `--j-backdrop-sepia: sepia(100%); backdrop-filter: sepia(100%); -webkit-backdrop-filter: sepia(100%);` |
| `drop-shadow-sm` | `--j-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)); filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));` |
| `drop-shadow` | `--j-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06)); filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));` |
| `drop-shadow-md` | `--j-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06)); filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));` |
| `drop-shadow-lg` | `--j-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));` |
| `drop-shadow-xl` | `--j-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)); filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));` |
| `drop-shadow-2xl` | `--j-drop-shadow: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)); filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));` |
| `drop-shadow-none` | `--j-drop-shadow: drop-shadow(0 0 #0000); filter: drop-shadow(0 0 #0000);` |
| `drop-shadow-glow` | `filter: drop-shadow(0 0 10px var(--j-primary)) drop-shadow(0 0 20px var(--j-primary));` |
| `drop-shadow-glow-sm` | `filter: drop-shadow(0 0 5px var(--j-primary));` |
| `drop-shadow-glow-lg` | `filter: drop-shadow(0 0 20px var(--j-primary)) drop-shadow(0 0 40px var(--j-primary));` |
| `backdrop-opacity-0` | `--j-backdrop-opacity: opacity(0); backdrop-filter: opacity(0); -webkit-backdrop-filter: opacity(0);` |
| `backdrop-opacity-5` | `--j-backdrop-opacity: opacity(0.05); backdrop-filter: opacity(0.05); -webkit-backdrop-filter: opacity(0.05);` |
| `backdrop-opacity-10` | `--j-backdrop-opacity: opacity(0.1); backdrop-filter: opacity(0.1); -webkit-backdrop-filter: opacity(0.1);` |

## Backgrounds

> Background size, position, repeat, and attachment

| Class | CSS |
|-------|-----|
| `bg-fixed` | `background-attachment: fixed;` |
| `bg-local` | `background-attachment: local;` |
| `bg-scroll` | `background-attachment: scroll;` |
| `bg-clip-border` | `background-clip: border-box;` |
| `bg-clip-padding` | `background-clip: padding-box;` |
| `bg-clip-content` | `background-clip: content-box;` |
| `bg-clip-text` | `background-clip: text; -webkit-background-clip: text;` |
| `bg-origin-border` | `background-origin: border-box;` |
| `bg-origin-padding` | `background-origin: padding-box;` |
| `bg-origin-content` | `background-origin: content-box;` |
| `bg-bottom` | `background-position: bottom;` |
| `bg-center` | `background-position: center;` |
| `bg-left` | `background-position: left;` |
| `bg-left-bottom` | `background-position: left bottom;` |
| `bg-left-top` | `background-position: left top;` |
| `bg-right` | `background-position: right;` |
| `bg-right-bottom` | `background-position: right bottom;` |
| `bg-right-top` | `background-position: right top;` |
| `bg-top` | `background-position: top;` |
| `bg-repeat` | `background-repeat: repeat;` |
| `bg-no-repeat` | `background-repeat: no-repeat;` |
| `bg-repeat-x` | `background-repeat: repeat-x;` |
| `bg-repeat-y` | `background-repeat: repeat-y;` |
| `bg-repeat-round` | `background-repeat: round;` |
| `bg-repeat-space` | `background-repeat: space;` |
| `bg-auto` | `background-size: auto;` |
| `bg-cover` | `background-size: cover;` |
| `bg-contain` | `background-size: contain;` |
| `bg-none` | `background-image: none;` |
| `bg-blend-normal` | `background-blend-mode: normal;` |
| `bg-blend-multiply` | `background-blend-mode: multiply;` |
| `bg-blend-screen` | `background-blend-mode: screen;` |
| `bg-blend-overlay` | `background-blend-mode: overlay;` |
| `bg-blend-darken` | `background-blend-mode: darken;` |
| `bg-blend-lighten` | `background-blend-mode: lighten;` |
| `bg-blend-color-dodge` | `background-blend-mode: color-dodge;` |
| `bg-blend-color-burn` | `background-blend-mode: color-burn;` |
| `bg-blend-hard-light` | `background-blend-mode: hard-light;` |
| `bg-blend-soft-light` | `background-blend-mode: soft-light;` |
| `bg-blend-difference` | `background-blend-mode: difference;` |
| `bg-blend-exclusion` | `background-blend-mode: exclusion;` |
| `bg-blend-hue` | `background-blend-mode: hue;` |
| `bg-blend-saturation` | `background-blend-mode: saturation;` |
| `bg-blend-color` | `background-blend-mode: color;` |
| `bg-blend-luminosity` | `background-blend-mode: luminosity;` |

## Columns

> Multi-column layout utilities

| Class | CSS |
|-------|-----|
| `columns-1` | `column-count: 1;` |
| `columns-2` | `column-count: 2;` |
| `columns-3` | `column-count: 3;` |
| `columns-auto` | `column-count: auto;` |
| `columns-xs` | `column-width: 20rem;` |
| `columns-sm` | `column-width: 24rem;` |
| `columns-md` | `column-width: 28rem;` |
| `columns-lg` | `column-width: 32rem;` |
| `columns-xl` | `column-width: 36rem;` |
| `column-gap-0` | `column-gap: 0px;` |
| `column-gap-1` | `column-gap: 0.25rem;` |
| `column-gap-2` | `column-gap: 0.5rem;` |
| `column-gap-px` | `column-gap: 1px;` |
| `column-gap-normal` | `column-gap: normal;` |
| `column-rule-0` | `column-rule-width: 0px;` |
| `column-rule-1` | `column-rule-width: 1px;` |
| `column-rule-2` | `column-rule-width: 2px;` |
| `column-rule-none` | `column-rule-style: none;` |
| `column-rule-hidden` | `column-rule-style: hidden;` |
| `column-rule-dotted` | `column-rule-style: dotted;` |
| `column-rule-dashed` | `column-rule-style: dashed;` |
| `column-rule-solid` | `column-rule-style: solid;` |
| `column-rule-double` | `column-rule-style: double;` |
| `column-rule-groove` | `column-rule-style: groove;` |
| `column-rule-ridge` | `column-rule-style: ridge;` |
| `column-rule-inset` | `column-rule-style: inset;` |
| `column-rule-outset` | `column-rule-style: outset;` |
| `column-rule-primary` | `column-rule-color: var(--j-primary);` |
| `column-rule-secondary` | `column-rule-color: var(--j-secondary);` |
| `column-rule-accent` | `column-rule-color: var(--j-accent);` |
| `column-rule-success` | `column-rule-color: var(--j-success);` |
| `column-rule-warning` | `column-rule-color: var(--j-warning);` |
| `column-rule-error` | `column-rule-color: var(--j-error);` |
| `column-rule-info` | `column-rule-color: var(--j-info);` |
| `column-rule-neutral` | `column-rule-color: var(--j-neutral);` |
| `column-rule-current` | `column-rule-color: currentColor;` |
| `column-rule-transparent` | `column-rule-color: transparent;` |
| `column-span-all` | `column-span: all;` |
| `column-span-none` | `column-span: none;` |
| `column-fill-auto` | `column-fill: auto;` |
| `column-fill-balance` | `column-fill: balance;` |
| `break-inside-auto` | `break-inside: auto;` |
| `break-inside-avoid` | `break-inside: avoid;` |
| `break-inside-avoid-page` | `break-inside: avoid-page;` |
| `break-inside-avoid-column` | `break-inside: avoid-column;` |
| `break-before-auto` | `break-before: auto;` |
| `break-after-auto` | `break-after: auto;` |
| `break-before-avoid` | `break-before: avoid;` |
| `break-after-avoid` | `break-after: avoid;` |
| `break-before-all` | `break-before: all;` |
| `break-after-all` | `break-after: all;` |
| `break-before-avoid-page` | `break-before: avoid-page;` |
| `break-after-avoid-page` | `break-after: avoid-page;` |
| `break-before-page` | `break-before: page;` |
| `break-after-page` | `break-after: page;` |
| `break-before-left` | `break-before: left;` |
| `break-after-left` | `break-after: left;` |
| `break-before-right` | `break-before: right;` |
| `break-after-right` | `break-after: right;` |
| `break-before-column` | `break-before: column;` |
| `break-after-column` | `break-after: column;` |

## Scroll

> Scroll behavior, snap, and scrollbar utilities

| Class | CSS |
|-------|-----|
| `scroll-p-0` | `scroll-padding: 0px;` |
| `scroll-px-0` | `scroll-padding-left: 0px; scroll-padding-right: 0px;` |
| `scroll-py-0` | `scroll-padding-top: 0px; scroll-padding-bottom: 0px;` |
| `scroll-pt-0` | `scroll-padding-top: 0px;` |
| `scroll-pr-0` | `scroll-padding-right: 0px;` |
| `scroll-pb-0` | `scroll-padding-bottom: 0px;` |
| `scroll-pl-0` | `scroll-padding-left: 0px;` |
| `scroll-ps-0` | `scroll-padding-inline-start: 0px;` |
| `scroll-pe-0` | `scroll-padding-inline-end: 0px;` |
| `scroll-p-1` | `scroll-padding: 0.25rem;` |
| `scroll-px-1` | `scroll-padding-left: 0.25rem; scroll-padding-right: 0.25rem;` |
| `scroll-py-1` | `scroll-padding-top: 0.25rem; scroll-padding-bottom: 0.25rem;` |
| `scroll-pt-1` | `scroll-padding-top: 0.25rem;` |
| `scroll-pr-1` | `scroll-padding-right: 0.25rem;` |
| `scroll-pb-1` | `scroll-padding-bottom: 0.25rem;` |
| `scroll-pl-1` | `scroll-padding-left: 0.25rem;` |
| `scroll-ps-1` | `scroll-padding-inline-start: 0.25rem;` |
| `scroll-pe-1` | `scroll-padding-inline-end: 0.25rem;` |
| `scroll-p-2` | `scroll-padding: 0.5rem;` |
| `scroll-px-2` | `scroll-padding-left: 0.5rem; scroll-padding-right: 0.5rem;` |
| `scroll-py-2` | `scroll-padding-top: 0.5rem; scroll-padding-bottom: 0.5rem;` |
| `scroll-pt-2` | `scroll-padding-top: 0.5rem;` |
| `scroll-pr-2` | `scroll-padding-right: 0.5rem;` |
| `scroll-pb-2` | `scroll-padding-bottom: 0.5rem;` |
| `scroll-pl-2` | `scroll-padding-left: 0.5rem;` |
| `scroll-ps-2` | `scroll-padding-inline-start: 0.5rem;` |
| `scroll-pe-2` | `scroll-padding-inline-end: 0.5rem;` |
| `scroll-p-px` | `scroll-padding: 1px;` |
| `scroll-px-px` | `scroll-padding-left: 1px; scroll-padding-right: 1px;` |
| `scroll-py-px` | `scroll-padding-top: 1px; scroll-padding-bottom: 1px;` |
| `scroll-pt-px` | `scroll-padding-top: 1px;` |
| `scroll-pr-px` | `scroll-padding-right: 1px;` |
| `scroll-pb-px` | `scroll-padding-bottom: 1px;` |
| `scroll-pl-px` | `scroll-padding-left: 1px;` |
| `scroll-ps-px` | `scroll-padding-inline-start: 1px;` |
| `scroll-pe-px` | `scroll-padding-inline-end: 1px;` |
| `scroll-m-0` | `scroll-margin: 0px;` |
| `scroll-mx-0` | `scroll-margin-left: 0px; scroll-margin-right: 0px;` |
| `scroll-my-0` | `scroll-margin-top: 0px; scroll-margin-bottom: 0px;` |
| `scroll-mt-0` | `scroll-margin-top: 0px;` |
| `scroll-mr-0` | `scroll-margin-right: 0px;` |
| `scroll-mb-0` | `scroll-margin-bottom: 0px;` |
| `scroll-ml-0` | `scroll-margin-left: 0px;` |
| `scroll-ms-0` | `scroll-margin-inline-start: 0px;` |
| `scroll-me-0` | `scroll-margin-inline-end: 0px;` |
| `scroll-m-1` | `scroll-margin: 0.25rem;` |
| `scroll-mx-1` | `scroll-margin-left: 0.25rem; scroll-margin-right: 0.25rem;` |
| `scroll-my-1` | `scroll-margin-top: 0.25rem; scroll-margin-bottom: 0.25rem;` |
| `scroll-mt-1` | `scroll-margin-top: 0.25rem;` |
| `scroll-mr-1` | `scroll-margin-right: 0.25rem;` |
| `scroll-mb-1` | `scroll-margin-bottom: 0.25rem;` |
| `scroll-ml-1` | `scroll-margin-left: 0.25rem;` |
| `scroll-ms-1` | `scroll-margin-inline-start: 0.25rem;` |
| `scroll-me-1` | `scroll-margin-inline-end: 0.25rem;` |
| `scroll-m-2` | `scroll-margin: 0.5rem;` |
| `scroll-mx-2` | `scroll-margin-left: 0.5rem; scroll-margin-right: 0.5rem;` |
| `scroll-my-2` | `scroll-margin-top: 0.5rem; scroll-margin-bottom: 0.5rem;` |
| `scroll-mt-2` | `scroll-margin-top: 0.5rem;` |
| `scroll-mr-2` | `scroll-margin-right: 0.5rem;` |
| `scroll-mb-2` | `scroll-margin-bottom: 0.5rem;` |
| `scroll-ml-2` | `scroll-margin-left: 0.5rem;` |
| `scroll-ms-2` | `scroll-margin-inline-start: 0.5rem;` |
| `scroll-me-2` | `scroll-margin-inline-end: 0.5rem;` |
| `scroll-m-px` | `scroll-margin: 1px;` |
| `scroll-mx-px` | `scroll-margin-left: 1px; scroll-margin-right: 1px;` |
| `scroll-my-px` | `scroll-margin-top: 1px; scroll-margin-bottom: 1px;` |
| `scroll-mt-px` | `scroll-margin-top: 1px;` |
| `scroll-mr-px` | `scroll-margin-right: 1px;` |
| `scroll-mb-px` | `scroll-margin-bottom: 1px;` |
| `scroll-ml-px` | `scroll-margin-left: 1px;` |
| `scroll-ms-px` | `scroll-margin-inline-start: 1px;` |
| `scroll-me-px` | `scroll-margin-inline-end: 1px;` |
| `overscroll-auto` | `overscroll-behavior: auto;` |
| `overscroll-x-auto` | `overscroll-behavior-x: auto;` |
| `overscroll-y-auto` | `overscroll-behavior-y: auto;` |
| `overscroll-contain` | `overscroll-behavior: contain;` |
| `overscroll-x-contain` | `overscroll-behavior-x: contain;` |
| `overscroll-y-contain` | `overscroll-behavior-y: contain;` |
| `overscroll-none` | `overscroll-behavior: none;` |
| `overscroll-x-none` | `overscroll-behavior-x: none;` |
| `overscroll-y-none` | `overscroll-behavior-y: none;` |
| `scrollbar-auto` | `scrollbar-width: auto;` |
| `scrollbar-thin` | `scrollbar-width: thin;` |
| `scrollbar-none` | `scrollbar-width: none; -ms-overflow-style: none;` |
| `scrollbar-none` | `display: none;` |
| `scrollbar-primary` | `scrollbar-color: var(--j-primary) transparent;` |
| `scrollbar-secondary` | `scrollbar-color: var(--j-secondary) transparent;` |
| `scrollbar-accent` | `scrollbar-color: var(--j-accent) transparent;` |
| `scrollbar-neutral` | `scrollbar-color: var(--j-neutral) transparent;` |
| `snap-normal` | `scroll-snap-stop: normal;` |
| `snap-always` | `scroll-snap-stop: always;` |

## SVG

> Fill and stroke utilities for SVG elements

| Class | CSS |
|-------|-----|
| `fill-none` | `fill: none;` |
| `fill-inherit` | `fill: inherit;` |
| `fill-current` | `fill: currentColor;` |
| `fill-transparent` | `fill: transparent;` |
| `fill-black` | `fill: #000;` |
| `fill-white` | `fill: #fff;` |
| `fill-primary` | `fill: var(--j-primary);` |
| `fill-primary-50` | `fill: var(--color-primary-50);` |
| `fill-primary-100` | `fill: var(--color-primary-100);` |
| `fill-secondary` | `fill: var(--j-secondary);` |
| `fill-secondary-50` | `fill: var(--color-secondary-50);` |
| `fill-secondary-100` | `fill: var(--color-secondary-100);` |
| `fill-accent` | `fill: var(--j-accent);` |
| `fill-accent-50` | `fill: var(--color-accent-50);` |
| `fill-accent-100` | `fill: var(--color-accent-100);` |
| `fill-success` | `fill: var(--j-success);` |
| `fill-success-50` | `fill: var(--color-success-50);` |
| `fill-success-100` | `fill: var(--color-success-100);` |
| `fill-warning` | `fill: var(--j-warning);` |
| `fill-warning-50` | `fill: var(--color-warning-50);` |
| `fill-warning-100` | `fill: var(--color-warning-100);` |
| `fill-error` | `fill: var(--j-error);` |
| `fill-error-50` | `fill: var(--color-error-50);` |
| `fill-error-100` | `fill: var(--color-error-100);` |
| `fill-info` | `fill: var(--j-info);` |
| `fill-info-50` | `fill: var(--color-info-50);` |
| `fill-info-100` | `fill: var(--color-info-100);` |
| `fill-neutral` | `fill: var(--j-neutral);` |
| `fill-neutral-50` | `fill: var(--color-neutral-50);` |
| `fill-neutral-100` | `fill: var(--color-neutral-100);` |
| `stroke-none` | `stroke: none;` |
| `stroke-inherit` | `stroke: inherit;` |
| `stroke-current` | `stroke: currentColor;` |
| `stroke-transparent` | `stroke: transparent;` |
| `stroke-black` | `stroke: #000;` |
| `stroke-white` | `stroke: #fff;` |
| `stroke-primary` | `stroke: var(--j-primary);` |
| `stroke-primary-50` | `stroke: var(--color-primary-50);` |
| `stroke-primary-100` | `stroke: var(--color-primary-100);` |
| `stroke-secondary` | `stroke: var(--j-secondary);` |
| `stroke-secondary-50` | `stroke: var(--color-secondary-50);` |
| `stroke-secondary-100` | `stroke: var(--color-secondary-100);` |
| `stroke-accent` | `stroke: var(--j-accent);` |
| `stroke-accent-50` | `stroke: var(--color-accent-50);` |
| `stroke-accent-100` | `stroke: var(--color-accent-100);` |
| `stroke-success` | `stroke: var(--j-success);` |
| `stroke-success-50` | `stroke: var(--color-success-50);` |
| `stroke-success-100` | `stroke: var(--color-success-100);` |
| `stroke-warning` | `stroke: var(--j-warning);` |
| `stroke-warning-50` | `stroke: var(--color-warning-50);` |
| `stroke-warning-100` | `stroke: var(--color-warning-100);` |
| `stroke-error` | `stroke: var(--j-error);` |
| `stroke-error-50` | `stroke: var(--color-error-50);` |
| `stroke-error-100` | `stroke: var(--color-error-100);` |
| `stroke-info` | `stroke: var(--j-info);` |
| `stroke-info-50` | `stroke: var(--color-info-50);` |
| `stroke-info-100` | `stroke: var(--color-info-100);` |
| `stroke-neutral` | `stroke: var(--j-neutral);` |
| `stroke-neutral-50` | `stroke: var(--color-neutral-50);` |
| `stroke-neutral-100` | `stroke: var(--color-neutral-100);` |
| `stroke-0` | `stroke-width: 0;` |
| `stroke-1` | `stroke-width: 1;` |
| `stroke-2` | `stroke-width: 2;` |
| `stroke-cap-butt` | `stroke-linecap: butt;` |
| `stroke-cap-round` | `stroke-linecap: round;` |
| `stroke-cap-square` | `stroke-linecap: square;` |
| `stroke-join-arcs` | `stroke-linejoin: arcs;` |
| `stroke-join-bevel` | `stroke-linejoin: bevel;` |
| `stroke-join-miter` | `stroke-linejoin: miter;` |
| `stroke-join-miter-clip` | `stroke-linejoin: miter-clip;` |
| `stroke-join-round` | `stroke-linejoin: round;` |
| `stroke-dash-none` | `stroke-dasharray: none;` |
| `stroke-dash-1` | `stroke-dasharray: 1;` |
| `stroke-dash-2` | `stroke-dasharray: 2;` |
| `stroke-dash-4` | `stroke-dasharray: 4;` |
| `stroke-offset-0` | `stroke-dashoffset: 0;` |
| `stroke-offset-1` | `stroke-dashoffset: 1;` |
| `stroke-offset-2` | `stroke-dashoffset: 2;` |
| `stroke-opacity-0` | `stroke-opacity: 0;` |
| `stroke-opacity-5` | `stroke-opacity: 0.05;` |
| `stroke-opacity-10` | `stroke-opacity: 0.1;` |
| `fill-opacity-0` | `fill-opacity: 0;` |
| `fill-opacity-5` | `fill-opacity: 0.05;` |
| `fill-opacity-10` | `fill-opacity: 0.1;` |
| `fill-rule-nonzero` | `fill-rule: nonzero;` |
| `fill-rule-evenodd` | `fill-rule: evenodd;` |
| `clip-rule-nonzero` | `clip-rule: nonzero;` |
| `clip-rule-evenodd` | `clip-rule: evenodd;` |

## Accessibility

> Screen reader and focus utilities

| Class | CSS |
|-------|-----|
| `sr-only` | `position: absolute;   width: 1px;   height: 1px;   padding: 0;   margin: -1px;   overflow: hidden;   clip: rect(0, 0, 0, 0);   white-space: nowrap;   border-width: 0;` |
| `not-sr-only` | `position: static;   width: auto;   height: auto;   padding: 0;   margin: 0;   overflow: visible;   clip: auto;   white-space: normal;` |
| `sr-only-focusable` | `position: absolute;   width: 1px;   height: 1px;   padding: 0;   margin: -1px;   overflow: hidden;   clip: rect(0, 0, 0, 0);   white-space: nowrap;   border-width: 0;` |
| `focus-visible-ring` | `outline: none; } .focus-visible-ring:focus-visible {   outline: 2px solid var(--j-primary);   outline-offset: 2px;` |
| `focus-within-ring` | `outline: 2px solid var(--j-primary);   outline-offset: 2px;` |
| `skip-link` | `position: absolute;   top: -100%;   left: 0;   z-index: 9999;   padding: 1rem 1.5rem;   background-color: var(--j-primary);   color: white;   font-weight: 600;   text-decoration: none;   transition: top 150ms ease-in-out; } .skip-link:focus {   top: 0;` |
| `motion-safe` | `@media (prefers-reduced-motion: no-preference) {    animation-play-state: running; }   .motion-safe\:transition { transition-property: all; }` |
| `motion-reduce` | `@media (prefers-reduced-motion: reduce) {    animation: none; }   .motion-reduce\:transition-none { transition: none; }` |
| `reduce-motion` | `@media (prefers-reduced-motion: reduce) {   .reduce-motion,   .reduce-motion * {     animation-duration: 0.01ms !important;     animation-iteration-count: 1 !important;     transition-duration: 0.01ms !important;     scroll-behavior: auto !important;   }` |
| `forced-colors` | `@media (forced-colors: active) {    visibility: visible; }   .forced-colors\:border { border: 1px solid CanvasText; }` |
| `focus-trap` | `position: relative;` |
| `focus-ring` | `outline: 2px solid var(--j-primary);   outline-offset: 2px;` |
| `focus-ring-inset` | `outline: 2px solid var(--j-primary);   outline-offset: -2px;` |
| `focus-ring-primary` | `outline: 2px solid var(--j-primary);   outline-offset: 2px;` |
| `focus-ring-secondary` | `outline: 2px solid var(--j-secondary);   outline-offset: 2px;` |
| `focus-ring-success` | `outline: 2px solid var(--j-success);   outline-offset: 2px;` |
| `focus-ring-warning` | `outline: 2px solid var(--j-warning);   outline-offset: 2px;` |
| `focus-ring-error` | `outline: 2px solid var(--j-error);   outline-offset: 2px;` |
| `focus-ring-info` | `outline: 2px solid var(--j-info);   outline-offset: 2px;` |
| `focus-none` | `outline: none;` |
| `touch-target` | `min-width: 44px;   min-height: 44px;` |
| `touch-target-sm` | `min-width: 36px;   min-height: 36px;` |
| `aria-hidden` | `display: none;` |
| `disabled` | `.disabled, [disabled], [aria-disabled="true"] {   opacity: 0.6;   cursor: not-allowed;   pointer-events: none;` |
| `live-polite` | `/* Use with aria-live="polite" */` |
| `live-assertive` | `/* Use with aria-live="assertive" */` |
| `selection-primary` | `background-color: var(--j-primary);   color: white;` |
| `caret-primary` | `caret-color: var(--j-primary);` |
| `caret-transparent` | `caret-color: transparent;` |
| `caret-primary` | `caret-color: var(--j-primary);` |
| `caret-secondary` | `caret-color: var(--j-secondary);` |
| `caret-success` | `caret-color: var(--j-success);` |
| `caret-warning` | `caret-color: var(--j-warning);` |
| `caret-error` | `caret-color: var(--j-error);` |
| `caret-info` | `caret-color: var(--j-info);` |
| `accent-primary` | `accent-color: var(--j-primary);` |
| `accent-primary` | `accent-color: var(--j-primary);` |
| `accent-secondary` | `accent-color: var(--j-secondary);` |
| `accent-success` | `accent-color: var(--j-success);` |
| `accent-warning` | `accent-color: var(--j-warning);` |
| `accent-error` | `accent-color: var(--j-error);` |
| `accent-info` | `accent-color: var(--j-info);` |
| `print-hidden` | `@media print {  display: none !important; }` |
| `print-only` | `display: none; } @media print { .print-only { display: block; }` |
| `print-break-before` | `@media print {  break-before: page; }` |
| `print-break-after` | `@media print {  break-after: page; }` |
| `print-break-inside-avoid` | `@media print {  break-inside: avoid; }` |


---

# Components

## Buttons

> Button styles, variants, sizes, and states

**Available classes:** `btn`, `btn-xs`, `btn-sm`, `btn-lg`, `btn-xl`, `btn-primary`, `btn-secondary`, `btn-accent`, `btn-success`, `btn-warning`, `btn-error`, `btn-danger`, `btn-info`, `btn-outline`, `btn-outline-primary`, `btn-outline-secondary`, `btn-outline-accent`, `btn-outline-error`, `btn-outline-danger`, `btn-ghost`, `btn-ghost-primary`, `btn-soft-primary`, `btn-soft-secondary`, `btn-soft-success`, `btn-soft-error`, `btn-link`, `btn-glow`, `btn-glow-secondary`, `btn-gradient`, `btn-glass`, ... and 6 more

**Example:**
```html
<div class="btn">...</div>
```

## Cards

> Card containers with headers, bodies, and footers

**Available classes:** `card`, `card-body`, `card-header`, `card-footer`, `card-title`, `card-subtitle`, `card-text`, `card-img`, `card-image`, `card-img-top`, `card-img-bottom`, `card-bordered`, `card-shadow`, `card-elevated`, `card-hover`, `card-hover-scale`, `card-hover-glow`, `card-primary`, `card-secondary`, `card-success`, `card-warning`, `card-error`, `card-info`, `card-filled-primary`, `card-filled-secondary`, `card-filled-success`, `card-filled-error`, `card-glass`, `card-glass-dark`, `card-gradient`, ... and 15 more

**Example:**
```html
<div class="card">...</div>
```

## Forms

> Form inputs, selects, checkboxes, and more

**Available classes:** `form-control`, `form-control-sm`, `form-control-lg`, `w3`, `org`, `is-valid`, `is-invalid`, `form-label`, `form-label-required`, `form-text`, `form-text-error`, `form-text-success`, `form-group`, `form-check`, `form-check-input`, `form-check-label`, `form-switch`, `form-switch-input`, `form-switch-sm`, `form-switch-lg`, `form-switch-secondary`, `form-switch-success`, `form-switch-warning`, `form-switch-error`, `form-switch-info`, `form-switch-labeled`, `form-switch-icon`, `form-switch-square`, `form-switch-glow`, `input-group`, ... and 5 more

**Example:**
```html
<div class="form-control">...</div>
```

## Navigation

> Navbars, tabs, breadcrumbs, and pagination

**Available classes:** `navbar`, `navbar-brand`, `navbar-nav`, `nav-item`, `nav-link`, `active`, `navbar-dark`, `navbar-transparent`, `navbar-glass`, `navbar-sticky`, `navbar-fixed`, `navbar-toggle`, `navbar-toggle-icon`, `navbar-collapse`, `show`, `sidebar`, `sidebar-header`, `sidebar-body`, `sidebar-footer`, `sidebar-nav`, `sidebar-nav-item`, `sidebar-nav-link`, `sidebar-nav-link-icon`, `sidebar-collapsed`, `sidebar-dark`, `breadcrumb`, `breadcrumb-item`, `tabs`, `tab`, `tab-content`, ... and 8 more

**Example:**
```html
<div class="navbar">...</div>
```

## Alerts

> Alert messages and notifications

**Available classes:** `alert`, `alert-title`, `alert-description`, `alert-icon`, `alert-with-icon`, `alert-content`, `alert-info`, `alert-success`, `alert-warning`, `alert-error`, `alert-danger`, `alert-primary`, `alert-secondary`, `alert-solid-info`, `alert-solid-success`, `alert-solid-warning`, `alert-solid-error`, `alert-solid-danger`, `alert-solid-primary`, `alert-outline-info`, `alert-outline-success`, `alert-outline-warning`, `alert-outline-error`, `alert-border-info`, `alert-border-success`, `alert-border-warning`, `alert-border-error`, `alert-dismissible`, `alert-close`, `alert-actions`, ... and 24 more

**Example:**
```html
<div class="alert">...</div>
```

## Badges

> Badges and labels

**Available classes:** `badge`, `badge-primary`, `badge-secondary`, `badge-accent`, `badge-success`, `badge-warning`, `badge-error`, `badge-danger`, `badge-info`, `badge-soft-primary`, `badge-soft-secondary`, `badge-soft-success`, `badge-soft-warning`, `badge-soft-error`, `badge-soft-info`, `badge-outline`, `badge-outline-primary`, `badge-outline-secondary`, `badge-outline-success`, `badge-outline-error`, `badge-sm`, `badge-lg`, `badge-pill`, `badge-square`, `badge-dot`, `badge-dot-sm`, `badge-dot-lg`, `badge-with-dot`, `badge-status`, `badge-status-dot`, ... and 22 more

**Example:**
```html
<div class="badge">...</div>
```

## Modals

> Modal dialogs and overlays

**Available classes:** `modal-backdrop`, `show`, `modal`, `modal-dialog`, `modal-sm`, `modal-lg`, `modal-xl`, `modal-full`, `modal-top`, `modal-bottom`, `modal-content`, `modal-header`, `modal-title`, `modal-close`, `modal-body`, `modal-footer`, `modal-footer-between`, `modal-borderless`, `modal-centered`, `modal-glass`, `drawer`, `drawer-left`, `drawer-right`, `drawer-header`, `drawer-title`, `drawer-close`, `drawer-body`, `drawer-footer`, `drawer-sm`, `drawer-lg`, ... and 10 more

**Example:**
```html
<div class="modal-backdrop">...</div>
```

## Tables

> Table styles and variants

**Available classes:** `table`, `table-bordered`, `table-striped`, `table-hover`, `table-compact`, `table-responsive`, `table-fixed-header`, `table-fixed-column`, `table-sortable`, `table-sort-icon`, `table-selectable`, `table-row-selected`, `table-row-success`, `table-row-warning`, `table-row-error`, `table-row-info`, `table-actions`, `table-actions-menu`, `table-empty`, `table-empty-icon`, `table-loading`, `data-table`, `data-table-header`, `data-table-title`, `data-table-actions`, `data-table-footer`, `data-table-info`, `table-card-mobile`, `table-expandable-row`, `expanded`, ... and 1 more

**Example:**
```html
<div class="table">...</div>
```

## Avatars

> Avatar images and placeholders

**Available classes:** `avatar`, `avatar-xs`, `avatar-sm`, `avatar-md`, `avatar-lg`, `avatar-xl`, `avatar-2xl`, `avatar-square`, `avatar-rounded`, `avatar-bordered`, `avatar-bordered-primary`, `avatar-bordered-secondary`, `avatar-bordered-success`, `avatar-primary`, `avatar-secondary`, `avatar-accent`, `avatar-success`, `avatar-warning`, `avatar-error`, `avatar-soft-primary`, `avatar-soft-secondary`, `avatar-soft-success`, `avatar-soft-error`, `avatar-with-status`, `avatar-status`, `avatar-status-online`, `avatar-status-offline`, `avatar-status-busy`, `avatar-status-away`, `avatar-with-badge`, ... and 15 more

**Example:**
```html
<div class="avatar">...</div>
```

## Tooltips

> Tooltip popovers

**Available classes:** `tooltip`, `tooltip-content`, `show`, `tooltip-top`, `tooltip-bottom`, `tooltip-left`, `tooltip-right`, `tooltip-light`, `tooltip-primary`, `tooltip-secondary`, `tooltip-success`, `tooltip-error`, `tooltip-sm`, `tooltip-lg`, `tooltip-multiline`, `popover`, `popover-content`, `popover-header`, `popover-body`, `popover-top`, `popover-bottom`, `popover-left`, `popover-right`, `dropdown`, `dropdown-toggle`, `dropdown-menu`, `dropdown-menu-right`, `dropdown-item`, `active`, `disabled`, ... and 4 more

**Example:**
```html
<div class="tooltip">...</div>
```

## Progress

> Progress bars and indicators

**Available classes:** `progress`, `progress-bar`, `progress-xs`, `progress-sm`, `progress-lg`, `progress-xl`, `progress-bar-primary`, `progress-bar-secondary`, `progress-bar-accent`, `progress-bar-success`, `progress-bar-warning`, `progress-bar-error`, `progress-bar-info`, `progress-bar-gradient`, `progress-bar-striped`, `progress-bar-animated`, `progress-indeterminate`, `progress-glow`, `progress-stacked`, `progress-labeled`, `progress-label`, `progress-label-text`, `progress-label-value`, `spinner`, `spinner-xs`, `spinner-sm`, `spinner-lg`, `spinner-xl`, `spinner-primary`, `spinner-secondary`, ... and 16 more

**Example:**
```html
<div class="progress">...</div>
```

## Skeleton

> Loading skeleton placeholders

**Available classes:** `skeleton`, `dark`, `skeleton-dark`, `skeleton-text`, `skeleton-title`, `skeleton-circle`, `skeleton-rounded`, `skeleton-square`, `skeleton-xs`, `skeleton-sm`, `skeleton-md`, `skeleton-lg`, `skeleton-xl`, `skeleton-static`, `skeleton-pulse`, `skeleton-avatar`, `skeleton-avatar-xs`, `skeleton-avatar-sm`, `skeleton-avatar-lg`, `skeleton-avatar-xl`, `skeleton-btn`, `skeleton-btn-sm`, `skeleton-btn-lg`, `skeleton-image`, `skeleton-image-square`, `skeleton-image-portrait`, `skeleton-card`, `skeleton-card-image`, `skeleton-card-content`, `skeleton-list-item`, ... and 33 more

**Example:**
```html
<div class="skeleton">...</div>
```

## Dropdown

> Dropdown menus

**Available classes:** `dropdown`, `dropdown-toggle`, `open`, `dropdown-toggle-no-caret`, `dropdown-menu`, `show`, `dropdown-menu-right`, `dropdown-menu-end`, `dropdown-menu-center`, `dropup`, `dropleft`, `dropright`, `dropdown-item`, `active`, `disabled`, `dropdown-item-icon`, `dropdown-item-text`, `dropdown-item-description`, `dropdown-header`, `dropdown-divider`, `dropdown-item-check`, `checked`, `dropdown-menu-sm`, `dropdown-menu-lg`, `dropdown-menu-xl`, `dropdown-search`, `dropdown-search-input`, `dropdown-menu-scrollable`, `dropdown-menu-dark`, `dropdown-menu-glass`, ... and 8 more

**Example:**
```html
<div class="dropdown">...</div>
```

## Accordion

> Collapsible accordion panels

**Available classes:** `accordion`, `accordion-item`, `accordion-header`, `accordion-trigger`, `accordion-icon`, `open`, `accordion-trigger-no-icon`, `accordion-icon-plus`, `w3`, `org`, `accordion-content`, `accordion-body`, `accordion-body-inner`, `accordion-flush`, `accordion-bordered`, `accordion-separated`, `accordion-filled`, `accordion-highlight`, `accordion-icon-left`, `accordion-sm`, `accordion-lg`, `accordion-accent`, `accordion-accent-primary`, `accordion-accent-success`, `accordion-accent-warning`, `accordion-accent-error`, `accordion-dark`, `accordion-glass`, `accordion-nested`, `accordion-faq`

**Example:**
```html
<div class="accordion">...</div>
```

## Chips

> Chip/tag elements

**Available classes:** `chip`, `chip-primary`, `chip-secondary`, `chip-accent`, `chip-success`, `chip-warning`, `chip-error`, `chip-info`, `chip-soft-primary`, `chip-soft-secondary`, `chip-soft-success`, `chip-soft-warning`, `chip-soft-error`, `chip-soft-info`, `chip-outline`, `chip-outline-primary`, `chip-outline-secondary`, `chip-outline-success`, `chip-outline-warning`, `chip-outline-error`, `chip-xs`, `chip-sm`, `chip-lg`, `chip-xl`, `chip-rounded`, `chip-square`, `chip-avatar`, `chip-avatar-img`, `chip-icon`, `chip-removable`, ... and 17 more

**Example:**
```html
<div class="chip">...</div>
```

## Offcanvas

> Offcanvas/drawer navigation

**Available classes:** `offcanvas`, `show`, `offcanvas-backdrop`, `fade`, `offcanvas-start`, `offcanvas-end`, `offcanvas-top`, `offcanvas-bottom`, `offcanvas-sm`, `offcanvas-lg`, `offcanvas-xl`, `offcanvas-full`, `offcanvas-header`, `offcanvas-title`, `offcanvas-close`, `offcanvas-body`, `offcanvas-body-flush`, `offcanvas-footer`, `offcanvas-footer-end`, `offcanvas-footer-between`, `offcanvas-no-backdrop`, `offcanvas-static`, `offcanvas-open`, `offcanvas-sm-show`, `offcanvas-md-show`, `offcanvas-lg-show`, `offcanvas-xl-show`, `offcanvas-dark`, `offcanvas-glass`, `dark`, ... and 10 more

**Example:**
```html
<div class="offcanvas">...</div>
```

## Carousel

> Image carousels and sliders

**Available classes:** `carousel`, `carousel-inner`, `carousel-item`, `active`, `carousel-fade`, `carousel-control`, `carousel-control-prev`, `carousel-control-next`, `carousel-control-icon`, `carousel-control-dark`, `carousel-control-edge`, `carousel-indicators`, `carousel-indicator`, `carousel-indicators-line`, `carousel-indicators-number`, `carousel-indicators-bottom`, `carousel-caption`, `carousel-caption-title`, `carousel-caption-text`, `carousel-caption-bottom`, `carousel-multi`, `carousel-multi-2`, `carousel-multi-3`, `carousel-multi-4`, `carousel-multi-5`, `carousel-gap`, `carousel-gap-lg`, `carousel-thumbnails`, `carousel-thumbnail`, `carousel-progress`, ... and 6 more

**Example:**
```html
<div class="carousel">...</div>
```

## Stepper

> Step indicators and wizards

**Available classes:** `stepper`, `stepper-horizontal`, `stepper-vertical`, `stepper-item`, `completed`, `stepper-indicator`, `active`, `stepper-number`, `error`, `stepper-content`, `stepper-title`, `stepper-description`, `stepper-indicator-icon`, `stepper-sm`, `stepper-lg`, `stepper-label-bottom`, `stepper-clickable`, `stepper-success`, `stepper-warning`, `stepper-dots`, `stepper-progress`, `stepper-progress-bar`, `stepper-progress-fill`, `stepper-substeps`, `stepper-substep`, `stepper-substep-indicator`, `stepper-cards`, `stepper-compact`, `stepper-animated`

**Example:**
```html
<div class="stepper">...</div>
```

## Timeline

> Timeline layouts

**Available classes:** `timeline`, `timeline-item`, `timeline-marker`, `timeline-marker-icon`, `timeline-item-primary`, `timeline-item-secondary`, `timeline-item-success`, `timeline-item-warning`, `timeline-item-error`, `timeline-item-info`, `timeline-dot`, `timeline-content`, `timeline-header`, `timeline-title`, `timeline-time`, `timeline-body`, `timeline-footer`, `timeline-center`, `timeline-right`, `timeline-sm`, `timeline-lg`, `timeline-simple`, `timeline-compact`, `timeline-image`, `timeline-feed`, `timeline-avatar`, `timeline-horizontal`, `timeline-glow`, `timeline-dark`

**Example:**
```html
<div class="timeline">...</div>
```

## Rating

> Star rating components

**Available classes:** `rating`, `rating-item`, `active`, `filled`, `half`, `rating-star`, `rating-xs`, `rating-sm`, `rating-lg`, `rating-xl`, `rating-primary`, `rating-secondary`, `rating-success`, `rating-error`, `rating-hover`, `rating-readonly`, `rating-disabled`, `rating-labeled`, `rating-label`, `rating-value`, `rating-count`, `rating-hearts`, `rating-emoji`, `rating-thumbs`, `rating-up`, `rating-down`, `rating-bar`, `rating-bar-item`, `rating-bar-label`, `rating-bar-track`, ... and 14 more

**Example:**
```html
<div class="rating">...</div>
```

## Upload

> File upload areas

**Available classes:** `upload-zone`, `drag-active`, `dragover`, `upload-icon`, `upload-text`, `upload-title`, `upload-title-link`, `upload-description`, `upload-input`, `upload-zone-sm`, `upload-zone-lg`, `upload-compact`, `upload-zone-primary`, `upload-zone-success`, `upload-zone-error`, `upload-zone-disabled`, `upload-file-list`, `upload-file-item`, `upload-file-icon`, `upload-file-info`, `upload-file-name`, `upload-file-size`, `upload-file-remove`, `upload-file-item-uploading`, `upload-file-item-success`, `upload-file-item-error`, `upload-progress`, `upload-progress-bar`, `upload-progress-fill`, `upload-progress-text`, ... and 13 more

**Example:**
```html
<div class="upload-zone">...</div>
```

## Spinner

> Loading spinners

**Available classes:** `spinner`, `spinner-xs`, `spinner-sm`, `spinner-lg`, `spinner-xl`, `spinner-primary`, `spinner-secondary`, `spinner-success`, `spinner-warning`, `spinner-error`, `spinner-info`, `spinner-white`, `spinner-dark`, `spinner-grow`, `spinner-dots`, `spinner-dot`, `spinner-pulse`, `spinner-ring`, `spinner-bars`, `spinner-bar`, `spinner-text`, `spinner-label`, `spinner-overlay`, `dark`, `spinner-overlay-inline`, `spinner-overlay-blur`, `spinner-container`, `spinner-container-sm`, `spinner-container-lg`, `spinner-button`, ... and 10 more

**Example:**
```html
<div class="spinner">...</div>
```

## Popover

> Popover components

**Available classes:** `popover`, `show`, `popover-arrow`, `popover-header`, `popover-body`, `popover-close`, `popover-sm`, `popover-lg`, `popover-xl`, `popover-full`, `popover-no-arrow`, `popover-primary`, `popover-dark`, `popover-glass`, `dark`, `popover-fade`, `popover-scale`, `popover-slide-up`, `popover-image`, `popover-menu`, `popover-menu-item`, `popover-menu-item-icon`, `popover-menu-divider`, `popover-confirm`, `popover-confirm-title`, `popover-confirm-text`, `popover-confirm-actions`, `popover-profile`, `popover-profile-header`, `popover-profile-avatar`, ... and 6 more

**Example:**
```html
<div class="popover">...</div>
```

## Command Palette

> Command palette / search modal

**Available classes:** `command-palette-overlay`, `show`, `command-palette`, `command-palette-header`, `command-palette-icon`, `command-palette-input`, `command-palette-shortcut`, `command-palette-kbd`, `command-palette-body`, `command-palette-group`, `command-palette-group-title`, `command-palette-item`, `active`, `command-palette-item-icon`, `command-palette-item-content`, `command-palette-item-title`, `command-palette-item-description`, `command-palette-item-shortcut`, `command-palette-item-badge`, `command-palette-footer`, `command-palette-footer-hints`, `command-palette-footer-hint`, `command-palette-empty`, `command-palette-empty-icon`, `command-palette-empty-title`, `command-palette-empty-text`, `command-palette-loading`, `command-palette-recent`, `command-palette-recent-tag`, `command-palette-match`, ... and 12 more

**Example:**
```html
<div class="command-palette-overlay">...</div>
```

## Datepicker

> Date picker components

**Available classes:** `datepicker`, `datepicker-input`, `datepicker-icon`, `datepicker-dropdown`, `open`, `show`, `calendar`, `calendar-header`, `calendar-title`, `calendar-nav`, `calendar-nav-btn`, `calendar-weekdays`, `calendar-weekday`, `calendar-grid`, `calendar-day`, `calendar-day-selected`, `calendar-day-today`, `calendar-day-outside`, `calendar-day-disabled`, `calendar-day-weekend`, `calendar-day-range-start`, `calendar-day-range-end`, `calendar-day-range-middle`, `calendar-months`, `calendar-years`, `calendar-month`, `calendar-year`, `selected`, `current`, `calendar-footer`, ... and 23 more

**Example:**
```html
<div class="datepicker">...</div>
```

## Timepicker

> Time picker components

**Available classes:** `timepicker`, `timepicker-input`, `timepicker-icon`, `timepicker-dropdown`, `open`, `show`, `timepicker-content`, `timepicker-header`, `timepicker-body`, `timepicker-column`, `timepicker-btn`, `timepicker-display`, `timepicker-columns`, `timepicker-column-header`, `timepicker-option`, `selected`, `timepicker-inline`, `timepicker-segment`, `timepicker-separator`, `timepicker-period`, `timepicker-period-btn`, `active`, `timepicker-sm`, `timepicker-lg`, `timepicker-clock`, `timepicker-clock-face`, `timepicker-clock-center`, `timepicker-clock-hand`, `timepicker-clock-number`, `timepicker-footer`, ... and 23 more

**Example:**
```html
<div class="timepicker">...</div>
```

## Responsive Variants

Apply any utility at specific breakpoints by prefixing with the breakpoint name:

| Prefix | Min Width | Example |
|--------|-----------|---------|
| `sm:` | 640px | `sm:flex` |
| `md:` | 768px | `md:grid-cols-2` |
| `lg:` | 1024px | `lg:text-xl` |
| `xl:` | 1280px | `xl:px-8` |
| `2xl:` | 1536px | `2xl:max-w-7xl` |

**Example:**
```html
<div class="flex flex-col md:flex-row lg:gap-8">
  <!-- Stacked on mobile, row on tablet, with gap on desktop -->
</div>
```

## State Variants

Apply utilities on specific states by prefixing:

| Prefix | State | Example |
|--------|-------|---------|
| `hover:` | Mouse hover | `hover:bg-primary` |
| `focus:` | Element focused | `focus:ring-2` |
| `focus-visible:` | Keyboard focus | `focus-visible:outline-2` |
| `focus-within:` | Child focused | `focus-within:border-primary` |
| `active:` | Being clicked | `active:scale-95` |
| `disabled:` | Disabled state | `disabled:opacity-50` |
| `first:` | First child | `first:mt-0` |
| `last:` | Last child | `last:mb-0` |
| `odd:` | Odd children | `odd:bg-gray-50` |
| `even:` | Even children | `even:bg-white` |
| `group-hover:` | Parent hover | `group-hover:visible` |
| `dark:` | Dark mode | `dark:bg-gray-900` |

**Example:**
```html
<button class="bg-primary hover:bg-primary-dark active:scale-95 disabled:opacity-50">
  Click me
</button>
```

**Combining variants:**
```html
<div class="md:hover:bg-gray-100">
  <!-- Hover effect only on medium screens and up -->
</div>
```

## Arbitrary Values

Use any value with bracket notation - just like Tailwind CSS!

### Colors
```html
<div class="bg-[#FF5733]">Custom background</div>
<p class="text-[#1a1a2e]">Custom text color</p>
<div class="border-[#e94560]">Custom border</div>
```

### Spacing & Sizing
```html
<div class="p-[10px]">10px padding</div>
<div class="m-[2rem]">2rem margin</div>
<div class="w-[200px] h-[100px]">Fixed size box</div>
<div class="gap-[1.5em]">Custom gap</div>
<div class="top-[50%] left-[50%]">Centered position</div>
```

### All Supported Arbitrary Values

#### Colors
| Utility | Example | Description |
|---------|---------|-------------|
| `bg-[#hex]` | `bg-[#FF0000]` | Background color |
| `text-[#hex]` | `text-[#00FF00]` | Text color |
| `border-[#hex]` | `border-[#0000FF]` | Border color |
| `ring-[#hex]` | `ring-[#FF00FF]` | Ring color |
| `outline-[#hex]` | `outline-[#FFFF00]` | Outline color |
| `fill-[#hex]` | `fill-[#00FFFF]` | SVG fill |
| `stroke-[#hex]` | `stroke-[#FFA500]` | SVG stroke |
| `from-[#hex]` | `from-[#FF0000]` | Gradient from |
| `via-[#hex]` | `via-[#00FF00]` | Gradient via |
| `to-[#hex]` | `to-[#0000FF]` | Gradient to |

#### Spacing
| Utility | Example | Description |
|---------|---------|-------------|
| `p-[value]` | `p-[10px]` | Padding all sides |
| `px-[value]` | `px-[1rem]` | Padding horizontal |
| `py-[value]` | `py-[2em]` | Padding vertical |
| `pt-[value]` | `pt-[5px]` | Padding top |
| `pr-[value]` | `pr-[10px]` | Padding right |
| `pb-[value]` | `pb-[15px]` | Padding bottom |
| `pl-[value]` | `pl-[20px]` | Padding left |
| `m-[value]` | `m-[auto]` | Margin all sides |
| `mx-[value]` | `mx-[auto]` | Margin horizontal |
| `my-[value]` | `my-[2rem]` | Margin vertical |
| `mt-[value]` | `mt-[10px]` | Margin top |
| `-mt-[value]` | `-mt-[10px]` | Negative margin top |

#### Sizing
| Utility | Example | Description |
|---------|---------|-------------|
| `w-[value]` | `w-[200px]` | Width |
| `h-[value]` | `h-[100vh]` | Height |
| `min-w-[value]` | `min-w-[300px]` | Min width |
| `max-w-[value]` | `max-w-[600px]` | Max width |
| `min-h-[value]` | `min-h-[50vh]` | Min height |
| `max-h-[value]` | `max-h-[80vh]` | Max height |
| `size-[value]` | `size-[48px]` | Width & height |

#### Layout
| Utility | Example | Description |
|---------|---------|-------------|
| `gap-[value]` | `gap-[20px]` | Gap |
| `gap-x-[value]` | `gap-x-[10px]` | Column gap |
| `gap-y-[value]` | `gap-y-[15px]` | Row gap |
| `inset-[value]` | `inset-[0]` | All inset |
| `top-[value]` | `top-[50%]` | Top position |
| `left-[value]` | `left-[10px]` | Left position |
| `right-[value]` | `right-[0]` | Right position |
| `bottom-[value]` | `bottom-[20px]` | Bottom position |

#### Typography
| Utility | Example | Description |
|---------|---------|-------------|
| `text-[value]` | `text-[18px]` | Font size |
| `leading-[value]` | `leading-[1.8]` | Line height |
| `tracking-[value]` | `tracking-[0.05em]` | Letter spacing |

#### Borders
| Utility | Example | Description |
|---------|---------|-------------|
| `border-[value]` | `border-[3px]` | Border width |
| `rounded-[value]` | `rounded-[10px]` | Border radius |

#### Other
| Utility | Example | Description |
|---------|---------|-------------|
| `z-[value]` | `z-[999]` | Z-index |
| `opacity-[value]` | `opacity-[0.5]` | Opacity |
| `basis-[value]` | `basis-[200px]` | Flex basis |
| `translate-x-[value]` | `translate-x-[50%]` | Translate X |
| `translate-y-[value]` | `translate-y-[-10px]` | Translate Y |

---

## Quick Start

### Using CDN (Runtime JIT)
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/jasmincss/dist/jasmin-runtime.min.js"></script>
</head>
<body>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
      Hello JasminCSS!
    </button>
  </div>
</body>
</html>
```

### Using with Next.js (Build-time JIT)
```js
// next.config.js
import withJasminCSS from 'jasmincss/plugins/next';
export default withJasminCSS({});
```

```css
/* globals.css */
@import 'jasmincss/css/min';
```

### Using Full CSS (No JIT)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jasmincss/dist/jasmin.min.css">
```

---

**Total utility classes: 5,956**

Generated on 2026-01-16
