# Rating

An unstyled, accessible rating component with compound composition for star-based selection input.

Build fully custom rating controls with complete control over layout and styling.

```tsx
'use client';
import { Star, StarFill } from '@primeicons/react';
import { Rating } from 'primereact/rating';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Rating.Root defaultValue={3} className={styles.rating}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i} className={styles.option}>
                            <Rating.On className={styles.on}>
                                <StarFill className={styles.icon} />
                            </Rating.On>
                            <Rating.Off className={styles.off}>
                                <Star className={styles.iconOff} />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}
```

## Features

- Compound component API with four sub-components: `Root`, `Option`, `On`, `Off`
- Half-star support with `allowHalf` prop
- Horizontal and vertical orientation
- Controlled and uncontrolled value management

## Usage

```tsx
import { Rating } from 'primereact/rating';
```

```tsx
<Rating.Root defaultValue={3}>
    {Array(5)
        .fill(null)
        .map((_, i) => (
            <Rating.Option key={i} index={i}>
                <Rating.On>
                    <StarFill />
                </Rating.On>
                <Rating.Off>
                    <Star />
                </Rating.Off>
            </Rating.Option>
        ))}
</Rating.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Rating.Root as="div">
    <Rating.Option as="div" index={0}>
        <Rating.On as="div" />
        <Rating.Off as="div" />
    </Rating.Option>
</Rating.Root>
```

Default element: `span` for all sub-components.

### Render Function Children

`Rating.On` and `Rating.Off` accept a render function as children, providing access to the component instance.

```tsx
<Rating.On>{(instance) => <span>{instance.ratingOption?.state.highlighted ? 'filled' : ''}</span>}</Rating.On>
```

## API

### RatingRoot

> **API/props table for `RatingRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-scope`       | `"rating"`                     |
| `data-part`        | `"root"`                       |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-readonly`    | Present when read-only         |
| `data-invalid`     | Present when invalid           |

### RatingOption

> **API/props table for `RatingOption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-scope`       | `"rating"`                     |
| `data-part`        | `"option"`                     |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-index`       | Zero-based option index        |
| `data-highlighted` | Present when filled            |
| `data-half`        | Present when half-filled       |
| `data-checked`     | Present when active            |
| `data-disabled`    | Present when disabled          |
| `data-readonly`    | Present when read-only         |

### RatingOn

> **API/props table for `RatingOn` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-scope`       | `"rating"`                     |
| `data-part`        | `"option-on"`                  |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-readonly`    | Present when read-only         |

### RatingOff

> **API/props table for `RatingOff` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-scope`       | `"rating"`                     |
| `data-part`        | `"option-off"`                 |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-disabled`    | Present when disabled          |
| `data-readonly`    | Present when read-only         |

## Accessibility

### Screen Reader

`Rating.Option` renders hidden native `<input type="radio">` elements that form a radio group. Screen readers announce each option as a radio button with its value. When `allowHalf` is enabled, both half and full value radios are rendered per option.

### Keyboard Support

| Key                        | Function                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| `tab`                      | Moves focus to the star representing the value, if there is none then first star receives the focus. |
| `left arrow` `up arrow`    | Moves focus to the previous star.                                                                    |
| `right arrow` `down arrow` | Moves focus to the next star.                                                                        |
| `space`                    | If the focused star does not represent the value, changes the value to the star value.               |
