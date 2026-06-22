# Textarea

An unstyled multi-line text input component with auto-resize support.

Build fully custom multi-line text inputs with complete control over layout and styling.

```tsx
'use client';
import { Textarea } from 'primereact/textarea';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Textarea rows={5} cols={30} placeholder="Enter text" className={styles.textarea} />
        </div>
    );
}
```

## Features

- Single component rendering a native `<textarea>` element
- Built-in auto-resize that adjusts height based on content using CSS `field-sizing` with JavaScript fallback
- Native `<textarea>` semantics with full HTML attribute support

## Usage

```tsx
import { Textarea } from 'primereact/textarea';
```

```tsx
<Textarea rows={5} cols={30} />
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered HTML element or use a custom React component.

```tsx
<Textarea as="div" contentEditable role="textbox" />
```

### Render Function Children

`Textarea` accepts a render function as children, providing access to the component instance.

```tsx
<Textarea>{(instance) => <span>Custom render</span>}</Textarea>
```

## Pass Through

**Pass Through example:**

```tsx
import { Textarea } from '@primereact/ui/textarea';

export default function TextareaPTDemo() {
    return (
        <div className="flex justify-center">
            <Textarea rows={5} cols={30} />
        </div>
    );
}
```

## API

### Textarea

> **API/props table for `Textarea` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                |
| -------------- | -------------------- |
| `data-scope`   | `"textarea"`         |
| `data-part`    | `"root"`             |
| `data-invalid` | Present when invalid |

> **API/props table for `Textarea` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

`Textarea` renders a native `textarea` element. Provide an accessible name with a visible label, `aria-label`, or `aria-labelledby`.

### Keyboard Support

`Textarea` uses native textarea keyboard behavior.
