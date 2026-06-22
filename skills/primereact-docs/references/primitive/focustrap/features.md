# FocusTrap

An unstyled component that traps keyboard focus within its container.

Build accessible modal regions that keep keyboard focus confined within a defined boundary.

```tsx
'use client';
import { FocusTrap } from 'primereact/focustrap';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <FocusTrap className={styles.root}>
            <h5 className={styles.heading}>Register</h5>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <button type="submit" className={styles.button}>
                Submit
            </button>
        </FocusTrap>
    );
}
```

## Features

- Focus cycling: Tab wraps from last to first focusable element, Shift+Tab wraps from first to last
- Auto-focus on mount with support for `initialFocusRef`, `[autofocus]`, and `[data-autofocus]`
- Escape key handling via `onEscape` callback
- MutationObserver detects DOM changes and refocuses appropriately
- Uses [VisuallyHidden](../visuallyhidden/features.md) sentinel elements for invisible focus boundaries

## Usage

```tsx
import { FocusTrap } from 'primereact/focustrap';
```

```tsx
<FocusTrap>
    <input type="text" />
    <button type="submit"></button>
</FocusTrap>
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered container element. Defaults to `div`.

```tsx
<FocusTrap as="section">...</FocusTrap>
```

### Render Function Children

```tsx
<FocusTrap>{(instance) => <div>Trapped: {String(instance.props.trapped)}</div>}</FocusTrap>
```

## Pass Through

**Pass Through example:**

```tsx
import { Check } from '@primeicons/react/check';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function FocusTrapPTDemo() {
    return (
        <FocusTrap className="max-w-xs mx-auto space-y-4">
            <h5 className="font-medium">Register</h5>
            <InputText id="input" type="text" placeholder="Name" fluid />

            <InputText id="email" type="email" placeholder="Email" fluid />

            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="basic-checkbox">
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="accept">I agree to the terms and conditions.</Label>
            </div>

            <Button type="submit" className="w-full">
                Submit
            </Button>
        </FocusTrap>
    );
}
```

## API

### FocusTrap

> **API/props table for `FocusTrap` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                                |
| ----------------- | ------------------------------------ |
| `data-focus-trap` | Present on the container when active |

> **API/props table for `FocusTrap` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

FocusTrap uses [VisuallyHidden](../visuallyhidden/features.md) sentinel elements before and after the content to cycle focus. These sentinels have `role="presentation"` and `aria-hidden="true"` so they are ignored by screen readers.

### Keyboard Support

| Key           | Function                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element inside the trap. Wraps to the first when at the end.      |
| `shift + tab` | Moves focus to the previous focusable element inside the trap. Wraps to the last when at the start. |
| `escape`      | Calls the `onEscape` callback when defined.                                                         |
