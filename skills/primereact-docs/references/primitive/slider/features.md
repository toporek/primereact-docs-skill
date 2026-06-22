# Slider

An unstyled, accessible slider component with compound composition.

Build fully custom sliders and range inputs with complete control over track, range, and thumb rendering.

```tsx
'use client';
import { Slider } from 'primereact/slider';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Slider.Root className={styles.root} defaultValue={50}>
            <Slider.Track className={styles.track}>
                <Slider.Range className={styles.range} />
            </Slider.Track>
            <Slider.Thumb className={styles.thumb} />
        </Slider.Root>
    );
}
```

## Features

- Compound component API with four sub-components: `Root`, `Track`, `Range`, `Thumb`
- Single value and range mode with multiple thumbs
- Horizontal and vertical orientation
- Configurable step size and minimum thumb distance

## Usage

```tsx
import { Slider } from 'primereact/slider';
```

```tsx
<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Thumb />
</Slider.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Slider.Root as="div">
    <Slider.Track as="div">
        <Slider.Range as="div" />
    </Slider.Track>
    <Slider.Thumb as="div" />
</Slider.Root>
```

Default elements: `Root`=`span`, `Track`=`span`, `Range`=`span`, `Thumb`=`span`.

### Render Function Children

`Thumb` accepts a render function as children, providing access to the component instance. The instance exposes `slider` (root instance with `state.value` and `state.isDragging`).

```tsx
<Slider.Thumb>{(instance) => <span>{instance.slider?.getThumbValue(0)}</span>}</Slider.Thumb>
```

## Pass Through

**Pass Through example:**

```tsx
import { Slider } from '@primereact/ui/slider';

export default function SliderPTDemo() {
    return (
        <Slider.Root defaultValue={50} className="max-w-3xs mx-auto w-full">
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
        </Slider.Root>
    );
}
```

## API

### SliderRoot

> **API/props table for `SliderRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

> **API/props table for `SliderRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SliderTrack

> **API/props table for `SliderTrack` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

> **API/props table for `SliderTrack` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SliderRange

> **API/props table for `SliderRange` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

> **API/props table for `SliderRange` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SliderThumb

> **API/props table for `SliderThumb` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-index`       | Thumb index number             |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

> **API/props table for `SliderThumb` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Slider component uses a native range input internally with `slider` role. The input includes `aria-orientation`, `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes. Value to describe the component can be defined using `aria-labelledby` and `aria-label` props on `Thumb`.

```tsx
<span id="slider_label">Volume</span>
<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Thumb aria-labelledby="slider_label" />
</Slider.Root>

<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Thumb aria-label="Volume" />
</Slider.Root>
```

### Keyboard Support

| Key                          | Function                          |
| ---------------------------- | --------------------------------- |
| `tab`                        | Moves focus to the slider.        |
| `left arrow` / `up arrow`    | Decrements the value.             |
| `right arrow` / `down arrow` | Increments the value.             |
| `home`                       | Set the minimum value.            |
| `end`                        | Set the maximum value.            |
| `page up`                    | Increments the value byundefinedsteps. |
| `page down`                  | Decrements the value byundefinedsteps. |
