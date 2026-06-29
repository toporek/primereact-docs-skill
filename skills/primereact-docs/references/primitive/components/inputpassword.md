# InputPassword

An unstyled password input with mask toggling and controlled or uncontrolled value state.

Build fully custom password inputs with complete control over layout and styling.

```tsx
'use client';
import { InputPassword } from 'primereact/inputpassword';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <InputPassword className={styles.input} placeholder="Enter password" />
        </div>
    );
}

```

## Features

- Dynamic input type toggling between `password` and `text` for visibility control
- Controlled and uncontrolled modes for both value and mask state
- `toggleMask()` method exposed on the component instance for programmatic mask switching

## Usage

```tsx
import { InputPassword } from 'primereact/inputpassword';
```

```tsx
<InputPassword />
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered input element.

```tsx
<InputPassword as="input" />
```

### Render Function Children

`InputPassword` accepts a render function providing access to the component instance.

```tsx
<InputPassword>{(instance) => <span>{instance.state.mask ? 'Hidden' : 'Visible'}</span>}</InputPassword>
```

## Pass Through

## API

### InputPassword

> **`InputPasswordRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/inputpassword or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"password"` |
| `data-part`  | `"root"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | InputPasswordPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Value to describe the component can either be provided via `label` tag combined with `id` prop or using `aria-labelledby`, `aria-label` props. Screen reader is notified about the changes to the strength of the password using a section that has `aria-live` while typing.

### Keyboard Support

| Key   | Function                  |
| ----- | ------------------------- |
| `tab` | Moves focus to the input. |
