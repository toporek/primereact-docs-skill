# Compare

An unstyled, accessible before/after comparison component with compound composition.

Build fully custom before/after comparison layouts with complete control over handle, indicator, and item rendering.

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

> **`CompareRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/compare or the installed `@primereact/types`.

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

### CompareItem

> **`CompareItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/compare or the installed `@primereact/types`.

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

### CompareHandle

> **`CompareHandle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/compare or the installed `@primereact/types`.

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

### CompareIndicator

> **`CompareIndicator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/compare or the installed `@primereact/types`.

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
