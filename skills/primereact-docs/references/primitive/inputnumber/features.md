# InputNumber

An unstyled numeric input with formatting, locale support, and spin button behavior.

Build fully custom numeric inputs with complete control over layout and styling.

```tsx
'use client';
import { InputNumber } from 'primereact/inputnumber';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <InputNumber defaultValue={42723} className={styles.input} />
        </div>
    );
}
```

## Features

- Locale-aware number formatting with decimal, currency, and custom prefix/suffix modes
- Boundary enforcement via `min` and `max` with keyboard-driven increment and decrement
- Configurable fraction digit precision and rounding modes
- Auto-repeating spin on pointer hold with accelerating intervals

## Usage

```tsx
import { InputNumber } from 'primereact/inputnumber';
```

```tsx
<InputNumber defaultValue={42723} />
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered input element.

```tsx
<InputNumber as="input" defaultValue={0} />
```

### Render Function Children

`InputNumber` accepts a render function providing access to the component instance.

```tsx
<InputNumber>{(instance) => <span>{instance.state.formattedValue}</span>}</InputNumber>
```

## Pass Through

**Pass Through example:**

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';

export default function InputNumberPTDemo() {
    return (
        <div className="flex items-center justify-center">
            <InputNumber defaultValue={42723} />
        </div>
    );
}
```

## API

### InputNumber

> **API/props table for `InputNumberRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"inputnumber"` |
| `data-part`  | `"root"`        |

> **API/props table for `InputNumber` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Value to describe the component can be provided with a label tag and `id`, or by using `aria-labelledby` and `aria-label`. The input element uses the `spinbutton` role and includes `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.

### Keyboard Support

| Key          | Function                           |
| ------------ | ---------------------------------- |
| `tab`        | Moves focus to the input.          |
| `up arrow`   | Increments the value.              |
| `down arrow` | Decrements the value.              |
| `home`       | Set the minimum value if provided. |
| `end`        | Set the maximum value if provided. |
