# Splitter

An unstyled resizable panel layout component with pointer and keyboard-driven sizing.

Build fully custom resizable panel layouts with complete control over layout and styling.

```tsx
'use client';
import { Splitter } from 'primereact/splitter';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Splitter.Root defaultSizes={[30, 70]} className={styles.root}>
            <Splitter.Panel className={styles.panel}>Panel 1</Splitter.Panel>
            <Splitter.Gutter className={styles.gutter}>
                <Splitter.Thumb className={styles.thumb} />
            </Splitter.Gutter>
            <Splitter.Panel className={styles.panel}>Panel 2</Splitter.Panel>
        </Splitter.Root>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Panel`, `Gutter`, `Thumb`
- Pointer-based drag resizing with configurable step for keyboard arrow keys
- Panel constraints via `minSize`, `maxSize`, `collapsible`, and `collapsedSize`
- Nested splitter support for complex multi-directional layouts

## Usage

```tsx
import { Splitter } from 'primereact/splitter';
```

```tsx
<Splitter.Root>
    <Splitter.Panel></Splitter.Panel>
    <Splitter.Gutter>
        <Splitter.Thumb />
    </Splitter.Gutter>
    <Splitter.Panel></Splitter.Panel>
</Splitter.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Splitter.Root as="section">
    <Splitter.Panel as="main">...</Splitter.Panel>
</Splitter.Root>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Splitter.Panel>{(instance) => <div>{instance.props.minSize}</div>}</Splitter.Panel>
```

## Pass Through

**Pass Through example:**

```tsx
import { Splitter } from '@primereact/ui/splitter';

export default function SplitterPTDemo() {
    return (
        <Splitter.Root className="h-60 w-full">
            <Splitter.Panel className="flex items-center justify-center">Panel 1</Splitter.Panel>
            <Splitter.Gutter>
                <Splitter.Thumb />
            </Splitter.Gutter>
            <Splitter.Panel className="flex items-center justify-center">Panel 2</Splitter.Panel>
        </Splitter.Root>
    );
}
```

## API

### SplitterRoot

> **API/props table for `SplitterRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                             |
| ------------------ | --------------------------------- |
| `data-orientation` | `"horizontal"` or `"vertical"`    |
| `data-resizing`    | Present during a resize operation |
| `data-disabled`    | Present when disabled             |

> **API/props table for `SplitterRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SplitterPanel

> **API/props table for `SplitterPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                             |
| ------------------ | --------------------------------- |
| `data-orientation` | `"horizontal"` or `"vertical"`    |
| `data-index`       | Panel index number                |
| `data-resizing`    | Present during a resize operation |

> **API/props table for `SplitterPanel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SplitterGutter

> **API/props table for `SplitterGutter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                             |
| ------------------ | --------------------------------- |
| `data-orientation` | `"horizontal"` or `"vertical"`    |
| `data-resizing`    | Present during a resize operation |
| `data-disabled`    | Present when disabled             |

> **API/props table for `SplitterGutter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SplitterThumb

> **API/props table for `SplitterThumb` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                             |
| ------------------ | --------------------------------- |
| `data-orientation` | `"horizontal"` or `"vertical"`    |
| `data-resizing`    | Present during a resize operation |

> **API/props table for `SplitterThumb` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Splitter gutter defines `separator` as the role with `aria-orientation` set to either horizontal or vertical. Each gutter provides `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` to communicate panel sizes. Adjacent panels are linked via `aria-controls`.

### Keyboard Support

| Key           | Function                                  |
| ------------- | ----------------------------------------- |
| `tab`         | Moves focus through the splitter bar.     |
| `down arrow`  | Moves a vertical splitter down.           |
| `up arrow`    | Moves a vertical splitter up.             |
| `left arrow`  | Moves a horizontal splitter to the left.  |
| `right arrow` | Moves a horizontal splitter to the right. |
