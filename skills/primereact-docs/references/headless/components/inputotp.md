# useInputOtp

Hook that manages OTP input state, focus navigation, and keyboard handling.

```tsx
'use client';
import { useInputOtp } from '@primereact/headless/inputotp';

export default function BasicDemo() {
    const { rootProps, getTextProps } = useInputOtp();

    return (
        <div className="flex justify-center">
            <div {...rootProps} className="flex items-center gap-2">
                {[0, 1, 2, 3].map((index) => (
                    <input
                        key={index}
                        {...getTextProps(index)}
                        className="w-9 py-1.5 text-sm text-center rounded-md border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-700 dark:text-surface-100 outline-hidden hover:border-surface-400 dark:hover:border-surface-500 focus-visible:border-primary transition-colors duration-200"
                    />
                ))}
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useInputOtp } from '@primereact/headless/inputotp';
```

```tsx
const { rootProps, getTextProps } = useInputOtp();

<div {...rootProps}>
    <input {...getTextProps(0)} />
    <input {...getTextProps(1)} />
    <input {...getTextProps(2)} />
    <input {...getTextProps(3)} />
</div>;
```

`useInputOtp` manages OTP value state, per-input focus navigation, and keyboard/paste handling. See [Primitive](../../primitive/components/inputotp.md) for a component-based API.

## Features

- **Per-slot prop getter**, `getTextProps(index)` returns the props for each OTP slot, including refs and handlers
- **Auto focus flow**, advances focus on input, retreats on backspace, and supports left/right arrow navigation
- **Paste distribution**, spreads clipboard content across the remaining slots in a single operation
- **Masking and numeric modes**, `mask` switches to `type="password"`, `integerOnly` restricts to digits with `inputMode="numeric"`
- **Controlled or uncontrolled**, value driven via `value`/`onValueChange` or tracked internally from `defaultValue`

## Working with callbacks

### Controlled value

Pass `value` and `onValueChange` when the OTP should live in outside state, for form integration or async verification.

```tsx
const [code, setCode] = React.useState('');

useInputOtp({
    value: code,
    onValueChange: (e) => setCode(e.value)
});
```

### Numeric-only codes

Enable `integerOnly` to restrict input to digits and signal numeric keyboards on mobile.

```tsx
useInputOtp({ integerOnly: true });
```

### Masked entry

Set `mask` to render each slot as a password field, useful for sensitive tokens.

```tsx
useInputOtp({ mask: true });
```

### Auto-submit on completion

Combine controlled value with a length check to trigger submission once all slots are filled.

```tsx
const [code, setCode] = React.useState('');

useInputOtp({
    value: code,
    onValueChange: (e) => {
        setCode(e.value);
        if (e.value.length === 6) verify(e.value);
    }
});
```

## Styling with data attributes

The root element includes `data-scope="inputotp"` and `data-part="root"`. Each input includes `data-scope="inputotp"` and `data-part="input"`.

```css
[data-scope='inputotp'][data-part='root'] {
    display: flex;
    gap: 0.5rem;
}

[data-scope='inputotp'][data-part='input'] {
    width: 2.5rem;
    text-align: center;
}

[data-scope='inputotp'][data-part='input']:focus {
    border-color: var(--p-primary-color);
}
```

## API

### useInputOtp

> **`useInputOtp` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/inputotp or the installed `@primereact/types`.

## Accessibility

Arrow keys move between slots, Backspace clears the current slot and moves left, and paste distributes characters across all slots. See [Primitive](../../primitive/components/inputotp.md#accessibility) for full WAI-ARIA compliance details.
