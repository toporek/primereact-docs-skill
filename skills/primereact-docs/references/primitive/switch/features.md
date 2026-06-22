# Switch

An unstyled, accessible switch toggle component with compound composition.

Build fully custom switch toggle controls with complete control over layout and styling.

```tsx
'use client';
import { Switch } from 'primereact/switch';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.field}>
                <Switch.Root inputId="basic-switch" className={styles.root} inputClassName={styles.input}>
                    <Switch.Control className={styles.control}>
                        <Switch.Thumb className={styles.thumb} />
                    </Switch.Control>
                </Switch.Root>
                <label htmlFor="basic-switch" className={styles.label}>
                    Notifications
                </label>
            </div>
        </div>
    );
}
```

## Features

- Compound component API with three sub-components: `Root`, `Control`, `Thumb`
- Hidden native checkbox with `role="switch"` for full accessibility
- Controlled and uncontrolled checked state
- Invalid and disabled state support with data attributes

## Usage

```tsx
import { Switch } from 'primereact/switch';
```

```tsx
<Switch.Root>
    <Switch.Control>
        <Switch.Thumb />
    </Switch.Control>
</Switch.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Switch.Root as="label">
    <Switch.Control as="span">
        <Switch.Thumb as="span" />
    </Switch.Control>
</Switch.Root>
```

Default elements: `Root`=`div`, `Control`=`div`, `Thumb`=`span`.

### Render Function Children

`Switch.Thumb` accepts a render function as children, providing access to the component instance.

```tsx
<Switch.Thumb>{(instance) => <span>{instance.switch?.state.checked ? 'ON' : 'OFF'}</span>}</Switch.Thumb>
```

## Pass Through

**Pass Through example:**

```tsx
import { Switch } from '@primereact/ui/switch';

export default function SwitchPTDemo() {
    return (
        <div className="flex justify-center items-center gap-2">
            <label htmlFor="switch">Off</label>
            <Switch.Root inputId="switch">
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
            <label htmlFor="switch">On</label>
        </div>
    );
}
```

## API

### SwitchRoot

> **API/props table for `SwitchRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"switch"`             |
| `data-part`      | `"root"`               |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |
| `data-invalid`   | Present when invalid   |

> **API/props table for `SwitchRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SwitchControl

> **API/props table for `SwitchControl` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"switch"`             |
| `data-part`      | `"control"`            |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |
| `data-invalid`   | Present when invalid   |

> **API/props table for `SwitchControl` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SwitchThumb

> **API/props table for `SwitchThumb` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"switch"`             |
| `data-part`      | `"thumb"`              |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |
| `data-invalid`   | Present when invalid   |

> **API/props table for `SwitchThumb` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

`Switch.Root` renders a hidden native `<input type="checkbox" role="switch">` that is announced as a switch by assistive technologies. The input reflects checked state via `aria-checked`. Provide an accessible name with `aria-label`, `aria-labelledby`, or an associated `<label>` element using `inputId`.

```tsx
<label htmlFor="switch1">Notifications</label>
<Switch.Root inputId="switch1" />

<span id="switch2">Dark Mode</span>
<Switch.Root ariaLabelledby="switch2" />

<Switch.Root ariaLabel="Enable notifications" />
```

### Keyboard Support

| Key     | Function                   |
| ------- | -------------------------- |
| `tab`   | Moves focus to the switch. |
| `space` | Toggles the checked state. |
