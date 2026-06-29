# useMotion

Hook that manages enter/leave animations with CSS class transitions and visibility control.

## Usage

```tsx
import { useMotion } from '@primereact/core/motion';
```

```tsx
const ref = React.useRef<HTMLDivElement>(undefined);
const motion = useMotion({
    elementRef: ref,
    visible: isOpen,
    name: 'fade'
});

return <>{motion.state.rendered && <div ref={ref} {...motion.rootProps}></div>}</>;
```

`useMotion` runs a CSS class-based enter/leave animation lifecycle against a single element, returning `rootProps` for hidden styles and `state.rendered` for conditional mounting.

## Features

- **CSS class lifecycle**, applies `{name}-enter-from`, `{name}-enter-active`, `{name}-enter-to` on enter and mirrored `-leave-*` classes on leave
- **Mount management**, `state.rendered` combined with `mountOnEnter` / `unmountOnLeave` keeps the element in the DOM only while needed
- **Hide strategies**, choose how closed content is hidden: `display: none`, `visibility: hidden`, or let CSS animations handle it entirely
- **Dimension variables**, `cssVarPrefix` writes `--{prefix}-height` / `--{prefix}-width` on the element for collapsible transitions
- **Full lifecycle callbacks**, eight hooks covering before/during/after/cancelled for both enter and leave phases
- **Imperative control**, `enter()`, `leave()`, `cancel()`, and `update()` for programmatic transitions

## Working with callbacks

### Drive animations with a name prefix

Pick a `name` and define six CSS classes against that prefix. The hook applies them in order across the enter and leave phases.

```tsx
const motion = useMotion({ elementRef: ref, visible, name: 'slide' });
```

```css
.slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}
.slide-enter-active {
    transition: all 200ms ease-out;
}
.slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.slide-leave-active {
    transition: all 200ms ease-in;
}
.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
```

### Collapsible height transitions

Set `cssVarPrefix` so the hook injects scroll-height into a CSS variable you can read from your transitions.

```tsx
const motion = useMotion({ elementRef: ref, visible, cssVarPrefix: 'panel-content' });
```

```css
.collapsible-enter-active,
.collapsible-leave-active {
    transition: max-height 300ms ease;
    overflow: hidden;
}

.collapsible-enter-to,
.collapsible-leave-from {
    max-height: var(--panel-content-height);
}

.collapsible-enter-from,
.collapsible-leave-to {
    max-height: 0;
}
```

### Run the enter animation on mount

Enable `appear` so the enter lifecycle plays the first time the element becomes visible, instead of jumping straight to its final state.

```tsx
const motion = useMotion({ elementRef: ref, visible: true, appear: true, name: 'fade' });
```

### React to phase transitions

Use the lifecycle callbacks to coordinate side effects, trigger focus moves after enter, release listeners after leave, or clean up inline styles.

```tsx
const motion = useMotion({
    elementRef: ref,
    visible,
    name: 'fade',
    onBeforeEnter: (e) => e.el.style.setProperty('will-change', 'opacity'),
    onAfterEnter: () => inputRef.current?.focus(),
    onAfterLeave: () => releaseScrollLock()
});
```

| Callback           | Phase                          |
| ------------------ | ------------------------------ |
| `onBeforeEnter`    | Before enter transition starts |
| `onEnter`          | Enter transition starts        |
| `onAfterEnter`     | Enter transition ends          |
| `onEnterCancelled` | Enter transition cancelled     |
| `onBeforeLeave`    | Before leave transition starts |
| `onLeave`          | Leave transition starts        |
| `onAfterLeave`     | Leave transition ends          |
| `onLeaveCancelled` | Leave transition cancelled     |

### Imperative control

Call `enter()`, `leave()`, or `cancel()` to drive the animation from outside a visibility prop, and `update()` to reconfigure the instance on an existing element.

```tsx
const motion = useMotion({ elementRef: ref, visible, name: 'fade' });

motion.enter();
motion.leave();
motion.cancel();
motion.update(element, { name: 'slide', duration: 300 });
```

### Hide strategy reference

Switch `hideStrategy` to match what your CSS expects. `display` is the default because it removes the element from layout entirely.

| Value          | Behavior                                               |
| -------------- | ------------------------------------------------------ |
| `'display'`    | Applies `display: none` (default)                      |
| `'visibility'` | Applies `visibility: hidden` and `max-height: 0`       |
| `'none'`       | No automatic hiding, CSS animations handle it entirely |

## API

### useMotion

> **`useMotion` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/motion or the installed `@primereact/types`.

## Accessibility

No keyboard behavior, a primitive for animation that does not affect accessibility. See [Primitive](../../primitive/components/motion.md#accessibility) for full WAI-ARIA compliance details.
