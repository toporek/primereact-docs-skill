# Button

An unstyled button component with compound composition and group support.

Build fully custom button elements with complete control over layout and styling.

```tsx
'use client';
import { Button } from 'primereact/button';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Button className={styles.button}>Submit</Button>
        </div>
    );
}
```

## Features

- Single component with `ButtonGroup` for grouping multiple buttons
- Native `<button>` semantics with full HTML attribute support
- Icon composition via children — place icon components before or after text

## Usage

```tsx
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
```

```tsx
<Button></Button>

<ButtonGroup>
    <Button></Button>
    <Button></Button>
</ButtonGroup>
```

## Behavior

### Icon Composition

Place icon components as children alongside text. DOM order determines icon position.

```tsx
import { Check } from '@primeicons/react/check';

/* Icon before text */
<Button>
    <Check />
    Confirm
</Button>;

/* Icon after text */
<Button>
    Save
    <Check />
</Button>;
```

### Polymorphic Rendering

Use `as` to change the rendered HTML element or use a custom React component.

```tsx
<Button as="a" href="/home">
    Home
</Button>
```

### Render Function Children

`Button` accepts a render function as children, providing access to the component instance.

```tsx
<Button>{(instance) => <span>Custom render</span>}</Button>
```

## Pass Through

**Pass Through example:**

```tsx
import { Button } from '@primereact/ui/button';

export default function ButtonPTDemo() {
    return (
        <div className="flex justify-center">
            <Button variant="outlined">Submit</Button>
        </div>
    );
}
```

## API

### Button

> **API/props table for `Button` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"button"` |
| `data-part`  | `"root"`   |

> **API/props table for `Button` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### ButtonGroup

> **API/props table for `ButtonGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `ButtonGroup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

`Button` renders a native `<button>` element by default and uses its built-in semantics. Provide an accessible name with visible text, `aria-label`, or `aria-labelledby`. Icon-only buttons must use `aria-label` to ensure an accessible name.

### Keyboard Support

| Key     | Function               |
| ------- | ---------------------- |
| `tab`   | Moves focus to button. |
| `enter` | Activates the button.  |
| `space` | Activates the button.  |
