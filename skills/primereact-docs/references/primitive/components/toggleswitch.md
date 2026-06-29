# ToggleSwitch

An unstyled, accessible toggle switch component with compound composition.

Build fully custom toggle switch controls with complete control over layout and styling.

```tsx
'use client';
import { ToggleSwitch } from 'primereact/toggleswitch';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.field}>
                <ToggleSwitch.Root inputId="basic-switch" className={styles.root} inputClassName={styles.input}>
                    <ToggleSwitch.Control className={styles.control}>
                        <ToggleSwitch.Handle className={styles.handle} />
                    </ToggleSwitch.Control>
                </ToggleSwitch.Root>
                <label htmlFor="basic-switch" className={styles.label}>
                    Notifications
                </label>
            </div>
        </div>
    );
}

```

## Features

- Compound component API with three sub-components: `Root`, `Control`, `Handle`
- Hidden native checkbox with `role="switch"` for full accessibility
- Controlled and uncontrolled checked state
- Invalid and disabled state support with data attributes

## Usage

```tsx
import { ToggleSwitch } from 'primereact/toggleswitch';
```

```tsx
<ToggleSwitch.Root>
    <ToggleSwitch.Control>
        <ToggleSwitch.Handle />
    </ToggleSwitch.Control>
</ToggleSwitch.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<ToggleSwitch.Root as="label">
    <ToggleSwitch.Control as="span">
        <ToggleSwitch.Handle as="span" />
    </ToggleSwitch.Control>
</ToggleSwitch.Root>
```

Default elements: `Root`=`div`, `Control`=`div`, `Handle`=`span`.

### Render Function Children

`ToggleSwitch.Handle` accepts a render function as children, providing access to the component instance.

```tsx
<ToggleSwitch.Handle>{(instance) => <span>{instance.toggleSwitch?.state.checked ? 'ON' : 'OFF'}</span>}</ToggleSwitch.Handle>
```

## Pass Through

## API

### ToggleSwitchRoot

> **`ToggleSwitchRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toggleswitch or the installed `@primereact/types`.

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"toggleswitch"`       |
| `data-part`      | `"root"`               |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |
| `data-invalid`   | Present when invalid   |

| Label | Type | Description |
|:------|:------|:------|
| root | ToggleSwitchRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| input | ToggleSwitchRootPassThroughType> | Used to pass attributes to the input's DOM element. |
| control | ToggleSwitchRootPassThroughType> | Used to pass attributes to the control's DOM element. |
| handle | ToggleSwitchRootPassThroughType> | Used to pass attributes to the handle's DOM element. |

### ToggleSwitchControl

> **`ToggleSwitchControl` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toggleswitch or the installed `@primereact/types`.

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"toggleswitch"`       |
| `data-part`      | `"control"`            |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |
| `data-invalid`   | Present when invalid   |

| Label | Type | Description |
|:------|:------|:------|
| root | ToggleSwitchControlPassThroughType> | Used to pass attributes to the root's DOM element. |

### ToggleSwitchHandle

> **`ToggleSwitchHandle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/toggleswitch or the installed `@primereact/types`.

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"toggleswitch"`       |
| `data-part`      | `"handle"`             |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |
| `data-invalid`   | Present when invalid   |

| Label | Type | Description |
|:------|:------|:------|
| root | ToggleSwitchHandlePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

`ToggleSwitch.Root` renders a hidden native `<input type="checkbox" role="switch">` that is announced as a switch by assistive technologies. The input reflects checked state via `aria-checked`. Provide an accessible name with `aria-label`, `aria-labelledby`, or an associated `<label>` element using `inputId`.

```tsx
<label htmlFor="switch1">Notifications</label>
<ToggleSwitch.Root inputId="switch1" />

<span id="switch2">Dark Mode</span>
<ToggleSwitch.Root ariaLabelledby="switch2" />

<ToggleSwitch.Root ariaLabel="Enable notifications" />
```

### Keyboard Support

| Key     | Function                          |
| ------- | --------------------------------- |
| `tab`   | Moves focus to the toggle switch. |
| `space` | Toggles the checked state.        |
