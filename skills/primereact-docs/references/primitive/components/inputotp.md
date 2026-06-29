# InputOtp

An unstyled OTP input component with automatic focus management and keyboard navigation.

Build fully custom one-time password inputs with complete control over layout and styling.

```tsx
'use client';
import { InputOtp } from 'primereact/inputotp';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <InputOtp.Root className={styles.root}>
                <InputOtp.Text index={0} className={styles.input} />
                <InputOtp.Text index={1} className={styles.input} />
                <InputOtp.Text index={2} className={styles.input} />
                <InputOtp.Text index={3} className={styles.input} />
            </InputOtp.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Text`
- Automatic focus navigation between input slots on type, delete, and arrow keys
- Clipboard paste support distributing characters across inputs
- Mask mode to obscure entered values
- Integer-only mode restricting input to numeric characters

## Usage

```tsx
import { InputOtp } from 'primereact/inputotp';
```

```tsx
<InputOtp.Root>
    <InputOtp.Text index={0} />
    <InputOtp.Text index={1} />
    <InputOtp.Text index={2} />
    <InputOtp.Text index={3} />
</InputOtp.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<InputOtp.Root as="section">
    <InputOtp.Text index={0} />
</InputOtp.Root>
```

### Render Function Children

`InputOtp.Root` accepts a render function as children, providing access to the component instance.

```tsx
<InputOtp.Root>
    {(instance) => (
        <>
            <InputOtp.Text index={0} />
            <InputOtp.Text index={1} />
            <span>{instance.state.value}</span>
        </>
    )}
</InputOtp.Root>
```

## Pass Through

## API

### InputOtpRoot

> **API/props table for `InputOtpRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"inputotp"` |
| `data-part`  | `"root"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | InputOtpRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| pcInputText | InputOtpRootPassThroughType> | Used to pass attributes to the input's DOM element. |

### InputOtpText

> **API/props table for `InputOtpText` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"inputotp"` |
| `data-part`  | `"input"`    |
| `data-index` | Input index  |

| Label | Type | Description |
|:------|:------|:------|
| root | InputOtpTextPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

InputOtp renders a set of native `input` elements. Each input accepts a single character. Provide an accessible group label with `aria-label` or `aria-labelledby` on the root element.

### Keyboard Support

| Key           | Function                                                         |
| ------------- | ---------------------------------------------------------------- |
| `tab`         | Moves focus to the input otp.                                    |
| `right arrow` | Moves focus to the next input element.                           |
| `left arrow`  | Moves focus to the previous input element.                       |
| `backspace`   | Deletes the input and moves focus to the previous input element. |
