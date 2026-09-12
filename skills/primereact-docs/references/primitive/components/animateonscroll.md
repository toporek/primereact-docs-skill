# AnimateOnScroll

An unstyled component that applies CSS animations to elements entering or leaving the viewport.

Build fully custom scroll-triggered animations with complete control over enter and leave transitions.

## Features

- Applies `enterClassName` when the element scrolls into view and `leaveClassName` when it scrolls out
- Configurable Intersection Observer options: `root`, `rootMargin`, `threshold`
- `once` mode to trigger animation only on first viewport entry
- Automatic cleanup of animation classes after `animationend` and `transitionend` events

## Usage

```tsx
import { AnimateOnScroll } from 'primereact/animateonscroll';
```

```tsx
<AnimateOnScroll enterClassName="" leaveClassName=""></AnimateOnScroll>
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered HTML element.

```tsx
<AnimateOnScroll as="section" enterClassName="fade-in">
    ...
</AnimateOnScroll>
```

Default element: `div`.

## API

### AnimateOnScroll

> **`AnimateOnScroll` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/animateonscroll or the installed `@primereact/types`.

| Attribute    | Value               |
| ------------ | ------------------- |
| `data-scope` | `"animateonscroll"` |
| `data-part`  | `"root"`            |

| Label | Type | Description |
|:------|:------|:------|
| root | AnimateOnScrollPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

AnimateOnScroll does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
