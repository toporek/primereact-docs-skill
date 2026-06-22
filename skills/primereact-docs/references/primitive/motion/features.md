# Motion

Configure enter/leave animations on primitive components with motionProps.

## Usage

Pass `motionProps` to a component's animatable element to configure enter/leave transitions. Collapsible components accept it on `Root`, popup components accept it on `Popup`.

```tsx
motionProps={{ name: 'slide', cssVarPrefix: 'content', hideStrategy: 'none' }}
```

## Behavior

### Animation Phases

The motion system applies six CSS classes during the transition lifecycle based on the `name` prefix.

**Enter phase** — applied when the element appears:

| Class                 | Timing              |
| --------------------- | ------------------- |
| `{name}-enter-from`   | Before enter starts |
| `{name}-enter-active` | During enter        |
| `{name}-enter-to`     | After enter ends    |

**Leave phase** — applied when the element disappears:

| Class                 | Timing              |
| --------------------- | ------------------- |
| `{name}-leave-from`   | Before leave starts |
| `{name}-leave-active` | During leave        |
| `{name}-leave-to`     | After leave ends    |

Use these classes to define CSS transitions or keyframe animations.

```tsx
motionProps={{ name: 'fade' }}
```

```css
.fade-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}
.fade-enter-active {
    transition: all 200ms ease-out;
}
.fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.fade-leave-active {
    transition: all 200ms ease-in;
}
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
```

### CSS Variable Prefix

Use `cssVarPrefix` to inject element dimension variables during animations. The motion system measures the element and sets these CSS custom properties, enabling height/width-based transitions without hardcoded values.

| Variable            | Description                                       |
| ------------------- | ------------------------------------------------- |
| `--{prefix}-height` | Set to the scroll height on enter, `0px` on leave |
| `--{prefix}-width`  | Set to the scroll width on enter, `0px` on leave  |

```tsx
motionProps={{ name: 'expand', cssVarPrefix: 'content' }}
```

```css
.expand-enter-active,
.expand-leave-active {
    transition: max-height 300ms ease;
    overflow: hidden;
}

.expand-enter-to,
.expand-leave-from {
    max-height: var(--content-height);
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
}
```

### Hide Strategy

Use `hideStrategy` to control how content is hidden after the leave animation completes.

| Value          | Behavior                                                |
| -------------- | ------------------------------------------------------- |
| `'display'`    | Applies `display: none` (default)                       |
| `'visibility'` | Applies `visibility: hidden` and `max-height: 0`        |
| `'none'`       | No automatic hiding — CSS animations handle it entirely |

Collapsible content typically uses `'none'` with CSS-driven height transitions, while popups work well with the default `'display'` strategy.

## Headless

See [useMotion](../../headless/motion/features.md) for the underlying hook API, imperative methods, lifecycle callbacks, and mount/unmount control.
