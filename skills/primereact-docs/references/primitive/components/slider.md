# Slider

An unstyled, accessible slider component with compound composition.

Build fully custom sliders and range inputs with complete control over track, range, and handle rendering.

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
            <Slider.Handle className={styles.handle} />
        </Slider.Root>
    );
}

```

## Features

- Compound component API with four sub-components: `Root`, `Track`, `Range`, `Handle`
- Single value and range mode with multiple handles
- Horizontal and vertical orientation
- Configurable step size and minimum handle distance

## Usage

```tsx
import { Slider } from 'primereact/slider';
```

```tsx
<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Handle />
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
    <Slider.Handle as="div" />
</Slider.Root>
```

Default elements: `Root`=`span`, `Track`=`span`, `Range`=`span`, `Handle`=`span`.

### Render Function Children

`Handle` accepts a render function as children, providing access to the component instance. The instance exposes `slider` (root instance with `state.value` and `state.isDragging`).

```tsx
<Slider.Handle>{(instance) => <span>{instance.slider?.getHandleValue(0)}</span>}</Slider.Handle>
```

## Pass Through

## API

### SliderRoot

> **`SliderRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/slider or the installed `@primereact/types`.

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

| Label | Type | Description |
|:------|:------|:------|
| root | SliderRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| range | SliderRootPassThroughType> | Used to pass attributes to the range's DOM element. |
| handle | SliderRootPassThroughType> | Used to pass attributes to the handle's DOM element. |

### SliderTrack

> **`SliderTrack` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/slider or the installed `@primereact/types`.

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

| Label | Type | Description |
|:------|:------|:------|
| root | SliderTrackPassThroughType> | Used to pass attributes to the root's DOM element. |

### SliderRange

> **`SliderRange` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/slider or the installed `@primereact/types`.

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

| Label | Type | Description |
|:------|:------|:------|
| root | SliderRangePassThroughType> | Used to pass attributes to the root's DOM element. |

### SliderHandle

> **`SliderHandle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/slider or the installed `@primereact/types`.

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-index`       | Handle index number            |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-dragging`    | Present when dragging          |

| Label | Type | Description |
|:------|:------|:------|
| root | SliderHandlePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Slider component uses a native range input internally with `slider` role. The input includes `aria-orientation`, `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes. Value to describe the component can be defined using `aria-labelledby` and `aria-label` props on `Handle`.

```tsx
<span id="slider_label">Volume</span>
<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Handle aria-labelledby="slider_label" />
</Slider.Root>

<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Handle aria-label="Volume" />
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
| `page up`                    | Increments the value by 10 steps. |
| `page down`                  | Decrements the value by 10 steps. |
