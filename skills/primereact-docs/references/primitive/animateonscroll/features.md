# AnimateOnScroll

An unstyled component that applies CSS animations to elements entering or leaving the viewport.

Build fully custom scroll-triggered animations with complete control over enter and leave transitions.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { AnimateOnScroll } from 'primereact/animateonscroll';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.introTitle}>Scroll Down</div>
                <div className={styles.introIcon}>
                    <ArrowDown />
                </div>
            </div>
            <div className={styles.spacer}></div>
            <div className={styles.content}>
                <AnimateOnScroll enterClassName={styles.fadeSlideIn} leaveClassName={styles.fadeOut}>
                    <div className={styles.heading}>Discover real-world design inspiration.</div>
                </AnimateOnScroll>
                <AnimateOnScroll enterClassName={styles.fadeSlideIn} leaveClassName={styles.fadeOut}>
                    <div className={styles.subtitle}>Featuring over 400,000 screens and 1,000 iOS, Android & Web apps.</div>
                </AnimateOnScroll>
            </div>
            <div className={styles.spacerSmall}></div>
        </div>
    );
}
```

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

> **API/props table for `AnimateOnScroll` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value               |
| ------------ | ------------------- |
| `data-scope` | `"animateonscroll"` |
| `data-part`  | `"root"`            |

> **API/props table for `AnimateOnScroll` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

AnimateOnScroll does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
