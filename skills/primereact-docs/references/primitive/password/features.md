# Password

An unstyled password input with mask toggling and controlled or uncontrolled value state.

Build fully custom password inputs with complete control over layout and styling.

```tsx
'use client';
import { Password } from 'primereact/password';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Password className={styles.input} placeholder="Enter password" />
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
import { Password } from 'primereact/password';
```

```tsx
<Password />
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered input element.

```tsx
<Password as="input" />
```

### Render Function Children

`Password` accepts a render function providing access to the component instance.

```tsx
<Password>{(instance) => <span>{instance.state.mask ? 'Hidden' : 'Visible'}</span>}</Password>
```

## Pass Through

**Pass Through example:**

```tsx
import { Password } from '@primereact/ui/password';

export default function PasswordPTDemo() {
    return (
        <div className="flex justify-center">
            <Password />
        </div>
    );
}
```

## API

### Password

> **API/props table for `PasswordRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"password"` |
| `data-part`  | `"root"`     |

> **API/props table for `Password` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Value to describe the component can either be provided via `label` tag combined with `id` prop or using `aria-labelledby`, `aria-label` props. Screen reader is notified about the changes to the strength of the password using a section that has `aria-live` while typing.

### Keyboard Support

| Key   | Function                  |
| ----- | ------------------------- |
| `tab` | Moves focus to the input. |
