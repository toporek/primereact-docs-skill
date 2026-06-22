# useMotion

Hook that manages enter/leave animations with CSS class transitions and visibility control.

## Usage

```tsx showLineNumbers {1,3-7,10}
import { useMotion } from '@primereact/core/motion';

const ref = React.useRef<HTMLDivElement>(undefined);
const motion = useMotion({
    elementRef: ref,
    visible: isOpen,
    name: 'fade'
});

return <>{motion.state.rendered && <div ref={ref} {...motion.rootProps}></div>}</>;
```

`useMotion` manages enter/leave animations on a single element, returning `rootProps` for hidden styles and `state.rendered` for conditional mounting.

## Features

- CSS class-based enter/leave animation lifecycle (`{name}-enter-from`, `{name}-enter-active`, `{name}-enter-to`, `{name}-leave-from`, `{name}-leave-active`, `{name}-leave-to`)
- Automatic mount/unmount via `state.rendered` with `mountOnEnter` and `unmountOnLeave`
- Three hide strategies: `display`, `visibility`, `none`
- CSS variable injection for element dimensions (`--{prefix}-height`, `--{prefix}-width`)
- Imperative `enter()`, `leave()`, `cancel()`, `update()` methods
- Eight lifecycle callbacks (`onBeforeEnter`, `onEnter`, `onAfterEnter`, `onEnterCancelled`, `onBeforeLeave`, `onLeave`, `onAfterLeave`, `onLeaveCancelled`)

## Behavior

### Animation Name

Use `name` to define the CSS class prefix for animation phases. The hook applies six classes during the transition lifecycle.

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

### Hide Strategy

Use `hideStrategy` to control how closed content is hidden.

```tsx
const motion = useMotion({ elementRef: ref, visible, hideStrategy: 'display' });
```

| Value          | Behavior                                                |
| -------------- | ------------------------------------------------------- |
| `'display'`    | Applies `display: none` (default)                       |
| `'visibility'` | Applies `visibility: hidden` and `max-height: 0`        |
| `'none'`       | No automatic hiding — CSS animations handle it entirely |

### CSS Variable Prefix

Use `cssVarPrefix` to inject element dimension variables during animations. These variables are set on the element and can be used in CSS for height/width-based transitions.

```tsx
const motion = useMotion({ elementRef: ref, visible, cssVarPrefix: 'panel-content' });
```

| Variable                 | Description                                       |
| ------------------------ | ------------------------------------------------- |
| `--panel-content-height` | Set to the scroll height on enter, `0px` on leave |
| `--panel-content-width`  | Set to the scroll width on enter, `0px` on leave  |

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

### Mount and Unmount

Use `mountOnEnter` and `unmountOnLeave` to control DOM presence. When both are `true` (default), the element is only in the DOM while visible.

```tsx
const motion = useMotion({ elementRef: ref, visible, mountOnEnter: true, unmountOnLeave: true });

{
    motion.state.rendered && (
        <div ref={ref} {...motion.rootProps}>
            Only in DOM when visible
        </div>
    );
}
```

Set `unmountOnLeave` to `false` to keep the element in the DOM after leave animation completes.

### Appear on Mount

Set `appear` to run the enter animation on initial mount when `visible` is `true`.

```tsx
const motion = useMotion({ elementRef: ref, visible: true, appear: true, name: 'fade' });
```

Without `appear`, the element is immediately visible on mount without animation.

### Disabled

Set `disabled` to skip all animations. The element is shown/hidden instantly.

```tsx
const motion = useMotion({ elementRef: ref, visible, disabled: true });
```

### Custom Class Names

Override individual phase classes instead of using the `name` prefix.

```tsx
const motion = useMotion({
    elementRef: ref,
    visible,
    enterFromClassName: 'opacity-0',
    enterActiveClassName: 'transition-opacity duration-200',
    enterToClassName: 'opacity-100',
    leaveFromClassName: 'opacity-100',
    leaveActiveClassName: 'transition-opacity duration-200',
    leaveToClassName: 'opacity-0'
});
```

### Lifecycle Callbacks

Use lifecycle callbacks to run logic at specific animation phases.

```tsx
const motion = useMotion({
    elementRef: ref,
    visible,
    name: 'fade',
    onBeforeEnter: (e) => {
        /* prepare element */
    },
    onAfterEnter: () => {
        /* animation complete */
    },
    onBeforeLeave: (e) => {
        /* cleanup before hide */
    },
    onAfterLeave: () => {
        /* fully hidden */
    }
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

### Imperative Methods

Use `enter()`, `leave()`, and `cancel()` to control animations programmatically.

```tsx
const motion = useMotion({ elementRef: ref, visible, name: 'fade' });

// Trigger animations manually
motion.enter();
motion.leave();
motion.cancel();
```

`update()` reconfigures the motion instance with new props on an element.

```tsx
motion.update(element, { name: 'slide', duration: 300 });
```

## API

### useMotion

> **API/props table for `useMotion` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)
