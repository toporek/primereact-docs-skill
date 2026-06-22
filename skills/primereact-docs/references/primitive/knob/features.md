# Knob

An unstyled circular dial component for numeric input with SVG-based rendering.

Build fully custom circular dial controls with complete control over layout and styling.

```tsx
'use client';
import { Knob } from 'primereact/knob';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Knob.Root defaultValue={50} ariaLabel="Volume" className={styles.root}>
                <Knob.Range className={styles.range} />
                <Knob.Value className={styles.value} />
                <Knob.Text className={styles.text} />
            </Knob.Root>
        </div>
    );
}
```

## Features

- Compound component API with four sub-components: `Root`, `Range`, `Value`, `Text`
- SVG-based arc rendering with computed paths
- Mouse drag, touch drag, and click-to-set interaction
- Full keyboard navigation (arrows, Home, End, PageUp, PageDown)
- Configurable min, max, step, size, and stroke width

## Usage

```tsx
import { Knob } from 'primereact/knob';
```

```tsx
<Knob.Root>
    <Knob.Range />
    <Knob.Value />
    <Knob.Text />
</Knob.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered element.

```tsx
<Knob.Root as="section"></Knob.Root>
```

Default elements: `Root`=`div`, `Range`=`path`, `Value`=`path`, `Text`=`text`. The SVG container is rendered automatically by Root.

### Render Function Children

`Knob.Text` accepts a render function as children, providing access to the component instance for custom value formatting.

```tsx
<Knob.Text>{(instance) => <>{instance.knob?.state.value}%</>}</Knob.Text>
```

## Pass Through

**Pass Through example:**

```tsx
import { Knob } from '@primereact/ui/knob';

export default function KnobPTDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} ariaLabel="Volume">
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

## API

### KnobRoot

> **API/props table for `KnobRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-scope`    | `"knob"`               |
| `data-part`     | `"root"`               |
| `data-disabled` | Present when disabled  |
| `data-readonly` | Present when read-only |

> **API/props table for `KnobRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### KnobRange

> **API/props table for `KnobRange` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"knob"`  |
| `data-part`  | `"range"` |

> **API/props table for `KnobRange` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### KnobValue

> **API/props table for `KnobValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"knob"`  |
| `data-part`  | `"value"` |

> **API/props table for `KnobValue` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### KnobText

> **API/props table for `KnobText` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"knob"` |
| `data-part`  | `"text"` |

> **API/props table for `KnobText` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Knob renders an SVG element with `role="slider"` and sets `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` to communicate the current state. Provide an accessible name with `ariaLabel` or `ariaLabelledby`. When disabled or read-only, the respective `aria-disabled` and `aria-readonly` states are applied.

```tsx
<Knob.Root ariaLabel="Volume" defaultValue={50}></Knob.Root>
```

If you already render a visible label, connect it using `ariaLabelledby`.

```tsx
<span id="volume-label">Volume</span>
<Knob.Root ariaLabelledby="volume-label" defaultValue={50}></Knob.Root>
```

### Keyboard Support

| Key               | Function                      |
| ----------------- | ----------------------------- |
| `tab`             | Moves focus to the knob.      |
| `left/down arrow` | Decrements the value.         |
| `right/up arrow`  | Increments the value.         |
| `home`            | Sets the value to `min`.      |
| `end`             | Sets the value to `max`.      |
| `page up`         | Increments the value by `10`. |
| `page down`       | Decrements the value by `10`. |
