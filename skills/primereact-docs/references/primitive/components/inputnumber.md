# InputNumber

An unstyled numeric input with formatting, locale support, and spin button behavior.

Build fully custom numeric inputs with complete control over layout and styling.

```tsx
'use client';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { InputNumber } from 'primereact/inputnumber';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <InputNumber.Root defaultValue={42723} className={styles.root}>
                <InputNumber.Input className={styles.input} />
                <InputNumber.Increment className={styles.button}>
                    <AngleUp />
                </InputNumber.Increment>
                <InputNumber.Decrement className={styles.button}>
                    <AngleDown />
                </InputNumber.Decrement>
            </InputNumber.Root>
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

## API

### InputNumber

> **`InputNumberRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/inputnumber or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"inputnumber"` |
| `data-part`  | `"root"`        |

> **`InputNumber` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/inputnumber or the installed `@primereact/types`.

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
