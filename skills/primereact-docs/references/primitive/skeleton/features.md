# Skeleton

An unstyled placeholder component for displaying loading states.

Build fully custom loading placeholders with complete control over shape, size, and animation.

```tsx
'use client';
import { Skeleton } from 'primereact/skeleton';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Skeleton shape="circle" size="2.5rem" className={styles.skeleton} />
            <div className={styles.lines}>
                <Skeleton width="100%" className={styles.skeleton} />
                <Skeleton width="75%" className={styles.skeleton} />
            </div>
        </div>
    );
}
```

## Features

- Built-in `shape`, `width`, `height`, `size`, and `borderRadius` props for common placeholder layouts
- Configurable animation with `wave` or `none` modes
- `size` prop sets both width and height simultaneously for square and circle shapes

## Usage

```tsx
import { Skeleton } from 'primereact/skeleton';
```

```tsx
<Skeleton />
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered HTML element.

```tsx
<Skeleton as="span" width="5rem" />
```

Default element: `div`.

## Pass Through

**Pass Through example:**

```tsx
import { Skeleton } from '@primereact/ui/skeleton';

export default function SkeletonPTDemo() {
    return (
        <div className="flex items-start gap-4 w-1/2">
            <Skeleton shape="circle" size="3.5rem" />
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <Skeleton width="40%" height="1.5rem" />
                </div>
                <div className="space-y-1.5 mt-3">
                    <Skeleton width="100%" borderRadius="4px" />
                    <Skeleton width="90%" borderRadius="4px" />
                </div>
                <Skeleton className="mt-4 aspect-video w-full h-auto!" />
                <div className="flex items-center gap-4 mt-4">
                    <Skeleton width="4rem" height="1.75rem" />
                    <Skeleton width="4rem" height="1.75rem" />
                </div>
            </div>
        </div>
    );
}
```

## API

### Skeleton

> **API/props table for `Skeleton` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"skeleton"` |
| `data-part`  | `"root"`     |

> **API/props table for `Skeleton` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Skeleton uses `aria-hidden="true"` so it is ignored by screen readers. When multiple skeletons are grouped inside a container, `aria-busy="true"` can be added on the container element to indicate the loading process.

### Keyboard Support

Component does not include any interactive elements.
