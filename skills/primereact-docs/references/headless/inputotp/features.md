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

```tsx showLineNumbers {1,3,6-10}
import { useInputOtp } from '@primereact/headless/inputotp';

const { rootProps, getTextProps } = useInputOtp();

return (
    <div {...rootProps}>
        <input {...getTextProps(0)} />
        <input {...getTextProps(1)} />
        <input {...getTextProps(2)} />
        <input {...getTextProps(3)} />
    </div>
);
```

`useInputOtp` manages OTP value state, per-input focus navigation, and keyboard/paste handling — see [Primitive](../../primitive/inputotp/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` with ref callback and per-index `getTextProps` for each input slot
- DOM-based input detection via `rootProps.ref` — the hook queries inputs within the root element automatically
- Automatic focus navigation between inputs on type, delete, and arrow keys
- Clipboard paste support that distributes characters across inputs
- Controlled and uncontrolled value management via `value`/`defaultValue`

## Behavior

### Integer Only

Set `integerOnly` to restrict input to numeric characters. The hook sets `inputMode` to `"numeric"` and blocks non-digit keystrokes.

```tsx
const { rootProps, getTextProps } = useInputOtp({ integerOnly: true });
```

### Mask

Set `mask` to obscure input values. The hook sets `type` to `"password"` on each input.

```tsx
const { rootProps, getTextProps } = useInputOtp({ mask: true });
```

### Controlled

Pass `value` and `onValueChange` for controlled usage.

```tsx
const [value, setValue] = React.useState('');

const { rootProps, getTextProps } = useInputOtp({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Custom Styling with Data Attributes

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

> **API/props table for `useInputOtp` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [InputOtp Primitive](../../primitive/inputotp/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
