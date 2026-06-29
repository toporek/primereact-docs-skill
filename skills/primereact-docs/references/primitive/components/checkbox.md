# Checkbox

An unstyled, accessible checkbox component with compound composition and group support.

Build fully custom checkbox controls with complete control over layout and styling.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Checkbox } from 'primereact/checkbox';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.field}>
                <Checkbox.Root inputId="basic-cb" defaultChecked className={styles.root} inputClassName={styles.input}>
                    <Checkbox.Box className={styles.box}>
                        <Checkbox.Indicator match="checked" className={styles.indicator}>
                            <Check className="w-3 h-3" />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <label htmlFor="basic-cb" className={styles.label}>
                    Remember me
                </label>
            </div>
        </div>
    );
}

```

## Features

- Compound component API with three sub-components: `Root`, `Box`, `Indicator`
- `CheckboxGroup` for managing shared value array across multiple checkboxes
- Indeterminate state for select-all / partial selection patterns

## Usage

```tsx
import { Checkbox } from 'primereact/checkbox';
import { CheckboxGroup } from 'primereact/checkboxgroup';
```

```tsx
<Checkbox.Root>
    <Checkbox.Box>
        <Checkbox.Indicator />
    </Checkbox.Box>
</Checkbox.Root>

<CheckboxGroup>
    <Checkbox.Root value="a">
        <Checkbox.Box>
            <Checkbox.Indicator />
        </Checkbox.Box>
    </Checkbox.Root>
    <Checkbox.Root value="b">
        <Checkbox.Box>
            <Checkbox.Indicator />
        </Checkbox.Box>
    </Checkbox.Root>
</CheckboxGroup>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Checkbox.Root as="label">
    <Checkbox.Box as="span">
        <Checkbox.Indicator as="div" />
    </Checkbox.Box>
</Checkbox.Root>
```

Default elements: `Root`=`div`, `Box`=`div`, `Indicator`=`span`.

### Render Function Children

`Checkbox.Box` and `Checkbox.Indicator` accept a render function as children, providing access to the component instance.

```tsx
<Checkbox.Box>{(instance) => <span>{instance.checkbox?.state.checked ? '✓' : ''}</span>}</Checkbox.Box>
```

## Pass Through

## API

### CheckboxRoot

> **API/props table for `CheckboxRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute            | Value                      |
| -------------------- | -------------------------- |
| `data-scope`         | `"checkbox"`               |
| `data-part`          | `"root"`                   |
| `data-checked`       | Present when checked       |
| `data-unchecked`     | Present when unchecked     |
| `data-disabled`      | Present when disabled      |
| `data-invalid`       | Present when invalid       |
| `data-indeterminate` | Present when indeterminate |

| Label | Type | Description |
|:------|:------|:------|
| root | CheckboxRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| input | CheckboxRootPassThroughType> | Used to pass attributes to the input's DOM element. |
| box | CheckboxRootPassThroughType> | Used to pass attributes to the box's DOM element. |
| indicator | CheckboxRootPassThroughType> | Used to pass attributes to the indicator's DOM element. |

### CheckboxBox

> **API/props table for `CheckboxBox` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute            | Value                      |
| -------------------- | -------------------------- |
| `data-scope`         | `"checkbox"`               |
| `data-part`          | `"box"`                    |
| `data-checked`       | Present when checked       |
| `data-unchecked`     | Present when unchecked     |
| `data-disabled`      | Present when disabled      |
| `data-invalid`       | Present when invalid       |
| `data-indeterminate` | Present when indeterminate |

| Label | Type | Description |
|:------|:------|:------|
| root | CheckboxBoxPassThroughType> | Used to pass attributes to the root's DOM element. |

### CheckboxIndicator

> **API/props table for `CheckboxIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute            | Value                      |
| -------------------- | -------------------------- |
| `data-scope`         | `"checkbox"`               |
| `data-part`          | `"indicator"`              |
| `data-checked`       | Present when checked       |
| `data-unchecked`     | Present when unchecked     |
| `data-disabled`      | Present when disabled      |
| `data-invalid`       | Present when invalid       |
| `data-indeterminate` | Present when indeterminate |

| Label | Type | Description |
|:------|:------|:------|
| root | CheckboxIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

`Checkbox.Root` renders a hidden native `<input type="checkbox">` that is announced as a checkbox by assistive technologies. The input reflects checked state via `aria-checked` and uses `aria-checked="mixed"` for indeterminate state. Provide an accessible name with `aria-label`, `aria-labelledby`, or an associated `<label>` element using `inputId`.

In a `CheckboxGroup`, each checkbox is announced individually. Associate labels with `inputId` + `<label htmlFor>` or provide `aria-label` / `aria-labelledby` on each `Checkbox.Root`.

### Keyboard Support

| Key     | Function                            |
| ------- | ----------------------------------- |
| `tab`   | Moves focus to the next checkbox.   |
| `space` | Toggles checked or unchecked state. |
