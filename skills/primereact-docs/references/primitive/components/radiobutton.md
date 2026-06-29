# RadioButton

An unstyled, accessible radio button component with compound composition and group support.

Build fully custom radio button controls with complete control over layout and styling.

```tsx
'use client';
import { RadioButton } from 'primereact/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from 'primereact/radiobuttongroup';
import * as React from 'react';
import styles from './basic-demo.module.css';

const items = [
    { value: 'standard', label: 'Standard' },
    { value: 'express', label: 'Express' },
    { value: 'overnight', label: 'Overnight' }
];

export default function BasicDemo() {
    const [value, setValue] = React.useState<string | undefined>('express');

    return (
        <div className={styles.wrapper}>
            <RadioButtonGroup
                className={styles.group}
                value={value}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setValue(e.value as string)}
            >
                {items.map((item) => (
                    <div key={item.value} className={styles.field}>
                        <RadioButton.Root
                            inputId={`rb-${item.value}`}
                            name="delivery"
                            value={item.value}
                            className={styles.root}
                            inputClassName={styles.input}
                        >
                            <RadioButton.Box className={styles.box}>
                                <RadioButton.Indicator match="checked" className={styles.indicator} />
                            </RadioButton.Box>
                        </RadioButton.Root>
                        <label htmlFor={`rb-${item.value}`} className={styles.label}>
                            {item.label}
                        </label>
                    </div>
                ))}
            </RadioButtonGroup>
        </div>
    );
}

```

## Features

- Compound component API with three sub-components: `Root`, `Box`, `Indicator`
- `RadioButtonGroup` for managing a shared value across multiple radio buttons
- Conditional indicator rendering with `match` prop

## Usage

```tsx
import { RadioButton } from 'primereact/radiobutton';
import { RadioButtonGroup } from 'primereact/radiobuttongroup';
```

```tsx
<RadioButtonGroup>
    <RadioButton.Root value="a">
        <RadioButton.Box>
            <RadioButton.Indicator />
        </RadioButton.Box>
    </RadioButton.Root>
    <RadioButton.Root value="b">
        <RadioButton.Box>
            <RadioButton.Indicator />
        </RadioButton.Box>
    </RadioButton.Root>
</RadioButtonGroup>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<RadioButton.Root as="label">
    <RadioButton.Box as="span">
        <RadioButton.Indicator as="div" />
    </RadioButton.Box>
</RadioButton.Root>
```

Default elements: `Root`=`div`, `Box`=`div`, `Indicator`=`span`.

### Render Function Children

`RadioButton.Box` and `RadioButton.Indicator` accept a render function as children, providing access to the component instance.

```tsx
<RadioButton.Box>{(instance) => <span>{instance.radiobutton?.state.checked ? '●' : '○'}</span>}</RadioButton.Box>
```

## Pass Through

## API

### RadioButtonRoot

> **API/props table for `RadioButtonRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"radiobutton"`        |
| `data-part`      | `"root"`               |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |

| Label | Type | Description |
|:------|:------|:------|
| root | RadioButtonRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| input | RadioButtonRootPassThroughType> | Used to pass attributes to the input's DOM element. |
| box | RadioButtonRootPassThroughType> | Used to pass attributes to the box's DOM element. |
| indicator | RadioButtonRootPassThroughType> | Used to pass attributes to the indicator's DOM element. |

### RadioButtonBox

> **API/props table for `RadioButtonBox` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"radiobutton"`        |
| `data-part`      | `"box"`                |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |

| Label | Type | Description |
|:------|:------|:------|
| root | RadioButtonBoxPassThroughType> | Used to pass attributes to the root's DOM element. |

### RadioButtonIndicator

> **API/props table for `RadioButtonIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"radiobutton"`        |
| `data-part`      | `"indicator"`          |
| `data-checked`   | Present when checked   |
| `data-unchecked` | Present when unchecked |
| `data-disabled`  | Present when disabled  |

| Label | Type | Description |
|:------|:------|:------|
| root | RadioButtonIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### RadioButtonGroup

> **API/props table for `RadioButtonGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                |
| ------------ | -------------------- |
| `data-scope` | `"radiobuttongroup"` |
| `data-part`  | `"root"`             |

| Label | Type | Description |
|:------|:------|:------|
| root | RadioButtonGroupPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with `inputId` prop or using `ariaLabelledby`, `ariaLabel` props.

```tsx
<label htmlFor="rb1">One</label>
<RadioButton.Root inputId="rb1">
    <RadioButton.Box>
        <RadioButton.Indicator />
    </RadioButton.Box>
</RadioButton.Root>

<span id="rb2">Two</span>
<RadioButton.Root ariaLabelledby="rb2">
    <RadioButton.Box>
        <RadioButton.Indicator />
    </RadioButton.Box>
</RadioButton.Root>

<RadioButton.Root ariaLabel="Three">
    <RadioButton.Box>
        <RadioButton.Indicator />
    </RadioButton.Box>
</RadioButton.Root>
```

### Keyboard Support

| Key     | Function                                                                |
| ------- | ----------------------------------------------------------------------- |
| `tab`   | Moves focus to the selected radio button in a group, or first one.      |
| `space` | Selects the focused radio button.                                       |
| `arrow` | In a named radio group, moves focus between options and updates choice. |
