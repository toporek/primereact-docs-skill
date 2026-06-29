# InputText

An unstyled text input component with data attributes and native input semantics.

Build fully custom text inputs with complete control over layout and styling.

```tsx
'use client';
import { InputText } from 'primereact/inputtext';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <InputText placeholder="Enter text" className={styles.input} />
        </div>
    );
}

```

## Features

- Single component rendering a native `<input>` with `type="text"` default
- Native `<input>` semantics with full HTML attribute support

## Usage

```tsx
import { InputText } from 'primereact/inputtext';
```

```tsx
<InputText placeholder="Enter text" />
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered HTML element or use a custom React component.

```tsx
<InputText as={CustomInput} placeholder="Search..." />
```

### Render Function Children

`InputText` accepts a render function as children, providing access to the component instance.

```tsx
<InputText>{(instance) => <span>Custom render</span>}</InputText>
```

## Pass Through

## API

### InputText

> **API/props table for `InputText` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"inputtext"` |
| `data-part`  | `"root"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | InputTextPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

`InputText` renders a native `input` element. Provide an accessible name with a visible label, `aria-label`, or `aria-labelledby`.

### Keyboard Support

`InputText` uses native text input keyboard behavior.
