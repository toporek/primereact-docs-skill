# Compare

An unstyled, accessible before/after comparison component with compound composition.

Build fully custom before/after comparison layouts with complete control over handle, indicator, and item rendering.

```tsx
'use client';
import { Code } from '@primeicons/react/code';
import { Compare } from 'primereact/compare';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Compare.Root className={styles.root}>
            <Compare.Item position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" className={styles.image} draggable={false} />
            </Compare.Item>
            <Compare.Item position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" className={styles.image} draggable={false} />
            </Compare.Item>
            <Compare.Handle className={styles.handle}>
                <Compare.Indicator className={styles.indicator}>
                    <Code />
                </Compare.Indicator>
            </Compare.Handle>
        </Compare.Root>
    );
}

```

## Features

- Compound component API with four sub-components: `Root`, `Item`, `Handle`, `Indicator`
- Automatic `clipPath` calculation for before/after layers
- Horizontal and vertical orientation
- Slide-on-hover mode for pointer-follow behavior

## Usage

```tsx
import { Compare } from 'primereact/compare';
```

```tsx
<Compare.Root>
    <Compare.Item position="before"></Compare.Item>
    <Compare.Item position="after"></Compare.Item>
    <Compare.Handle>
        <Compare.Indicator />
    </Compare.Handle>
</Compare.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Compare.Root as="section">
    <Compare.Item as="figure" position="before">
        ...
    </Compare.Item>
    <Compare.Item as="figure" position="after">
        ...
    </Compare.Item>
    <Compare.Handle as="div">
        <Compare.Indicator as="div">...</Compare.Indicator>
    </Compare.Handle>
</Compare.Root>
```

Default elements: `Root`=`div`, `Item`=`div`, `Handle`=`span`, `Indicator`=`span`.

### Render Function Children

`Indicator` accepts a render function as children, providing access to the component instance. The instance exposes `compare` (root instance with `state.value` and `state.isDragging`).

```tsx
<Compare.Indicator>{(instance) => <span>{instance.compare?.state.value}%</span>}</Compare.Indicator>
```

## Pass Through

## API

### CompareRoot

> **API/props table for `CompareRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

### CompareItem

> **API/props table for `CompareItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

### CompareHandle

> **API/props table for `CompareHandle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

### CompareIndicator

> **API/props table for `CompareIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

## Accessibility

### Screen Reader

Compare component uses a native range slider internally. Value to describe the component can be defined using `aria-labelledby` and `aria-label` props.

```tsx
<span id="compare_label">Compare Images</span>
<Compare.Root aria-labelledby="compare_label">...</Compare.Root>

<Compare.Root aria-label="Compare Images">...</Compare.Root>
```

### Keyboard Support

| Key                          | Function                          |
| ---------------------------- | --------------------------------- |
| `tab`                        | Moves focus to the component.     |
| `left arrow` / `up arrow`    | Decrements the value.             |
| `right arrow` / `down arrow` | Increments the value.             |
| `home`                       | Set the minimum value.            |
| `end`                        | Set the maximum value.            |
| `page up`                    | Increments the value by 10 steps. |
| `page down`                  | Decrements the value by 10 steps. |
