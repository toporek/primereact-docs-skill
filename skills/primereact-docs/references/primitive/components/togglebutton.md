# ToggleButton

An unstyled toggle button component with group selection support for single and multiple modes.

Build fully custom toggle buttons and button groups with complete control over layout and styling.

```tsx
'use client';
import { AlignCenter } from '@primeicons/react/align-center';
import { AlignJustify } from '@primeicons/react/align-justify';
import { AlignLeft } from '@primeicons/react/align-left';
import { AlignRight } from '@primeicons/react/align-right';
import { Heart } from '@primeicons/react/heart';
import { HeartFill } from '@primeicons/react/heart-fill';
import { ToggleButton, type ToggleButtonIndicatorInstance } from 'primereact/togglebutton';
import { ToggleButtonGroup } from 'primereact/togglebuttongroup';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <ToggleButton.Root className={styles.button}>
                <ToggleButton.Indicator className={styles.indicator}>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? <HeartFill /> : <Heart />)}
                </ToggleButton.Indicator>
            </ToggleButton.Root>

            <ToggleButtonGroup className={styles.group} allowEmpty={false}>
                <ToggleButton.Root className={styles.groupButton} value="left">
                    <ToggleButton.Indicator className={styles.groupIndicator}>
                        <AlignLeft />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root className={styles.groupButton} value="center">
                    <ToggleButton.Indicator className={styles.groupIndicator}>
                        <AlignCenter />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root className={styles.groupButton} value="right">
                    <ToggleButton.Indicator className={styles.groupIndicator}>
                        <AlignRight />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root className={styles.groupButton} value="justify">
                    <ToggleButton.Indicator className={styles.groupIndicator}>
                        <AlignJustify />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Indicator`
- Standalone toggle with boolean pressed state
- Group selection with `ToggleButtonGroup` for single and multiple modes
- Configurable `allowEmpty` to require at least one selection in a group

## Usage

```tsx
import { ToggleButton } from 'primereact/togglebutton';
import { ToggleButtonGroup } from 'primereact/togglebuttongroup';
```

```tsx
<ToggleButton.Root>
    <ToggleButton.Indicator></ToggleButton.Indicator>
</ToggleButton.Root>

<ToggleButtonGroup>
    <ToggleButton.Root value="a">
        <ToggleButton.Indicator></ToggleButton.Indicator>
    </ToggleButton.Root>
    <ToggleButton.Root value="b">
        <ToggleButton.Indicator></ToggleButton.Indicator>
    </ToggleButton.Root>
</ToggleButtonGroup>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered element.

```tsx
<ToggleButton.Root as="div"></ToggleButton.Root>
<ToggleButton.Indicator as="span"></ToggleButton.Indicator>
```

Default elements: `Root`=`button`, `Indicator`=`span`, `ToggleButtonGroup`=`div`.

### Render Function Children

`Indicator` accepts a render function as children, providing access to the component instance. The instance exposes `togglebutton` (parent instance with `state.pressed`).

```tsx
<ToggleButton.Indicator>{({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? 'On' : 'Off')}</ToggleButton.Indicator>
```

## Pass Through

## API

### ToggleButtonRoot

> **API/props table for `ToggleButtonRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-pressed`  | Present when pressed  |
| `data-disabled` | Present when disabled |
| `data-invalid`  | Present when invalid  |

| Label | Type | Description |
|:------|:------|:------|
| root | ToggleButtonRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| indicator | ToggleButtonRootPassThroughType> | Used to pass attributes to the indicator's DOM element. |

### ToggleButtonIndicator

> **API/props table for `ToggleButtonIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-pressed`  | Present when pressed  |
| `data-disabled` | Present when disabled |
| `data-invalid`  | Present when invalid  |

| Label | Type | Description |
|:------|:------|:------|
| root | ToggleButtonIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

ToggleButton uses `aria-pressed` to indicate its toggle state and `aria-disabled` when disabled. Provide `aria-label` or visible text content to give each button an accessible name. ToggleButtonGroup uses `role="group"` and should have `aria-label` to describe the group purpose.

```tsx
<ToggleButton.Root aria-label="Favorite">
    <ToggleButton.Indicator></ToggleButton.Indicator>
</ToggleButton.Root>

<ToggleButtonGroup aria-label="Text alignment">
    <ToggleButton.Root value="left" aria-label="Align left">
        <ToggleButton.Indicator></ToggleButton.Indicator>
    </ToggleButton.Root>
</ToggleButtonGroup>
```

### Keyboard Support

| Key              | Function                         |
| ---------------- | -------------------------------- |
| <kbd>Space</kbd> | Toggles the pressed state.       |
| <kbd>Enter</kbd> | Toggles the pressed state.       |
| <kbd>Tab</kbd>   | Moves focus to the next element. |
