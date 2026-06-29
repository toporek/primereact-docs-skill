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

## API

### Skeleton

> **`Skeleton` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/skeleton or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"skeleton"` |
| `data-part`  | `"root"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | SkeletonPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Skeleton uses `aria-hidden="true"` so it is ignored by screen readers. When multiple skeletons are grouped inside a container, `aria-busy="true"` can be added on the container element to indicate the loading process.

### Keyboard Support

Component does not include any interactive elements.
