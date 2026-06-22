# useSwitch

Hook that manages switch toggle state, checked/unchecked logic, and ARIA attributes.

```tsx
'use client';
import { useSwitch } from '@primereact/headless/switch';

export default function BasicDemo() {
    const { rootProps, inputProps, controlProps, thumbProps } = useSwitch({ defaultChecked: false });

    return (
        <div className="flex justify-center">
            <div className="flex items-center gap-2">
                <div
                    {...rootProps}
                    className="relative inline-flex items-center has-[input:focus-visible]:outline-1 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary has-[input:focus-visible]:outline rounded-full"
                >
                    <input
                        {...inputProps}
                        id="basic-switch"
                        className="absolute z-2 inset-0 w-full h-full opacity-0 cursor-pointer appearance-none m-0 p-0 border border-transparent rounded-full"
                    />
                    <div
                        {...controlProps}
                        className="relative w-10 h-6 rounded-full transition-colors duration-200 bg-surface-300 dark:bg-surface-600 data-[checked]:bg-primary"
                    >
                        <span
                            {...thumbProps}
                            className="absolute top-1 block w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 translate-x-1 data-[checked]:translate-x-5"
                        />
                    </div>
                </div>
                <label htmlFor="basic-switch" className="cursor-pointer select-none text-sm">
                    Notifications
                </label>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-4,8-11}
import { useSwitch } from '@primereact/headless/switch';

const { rootProps, inputProps, controlProps, thumbProps } = useSwitch({
    defaultChecked: false
});

return (
    <div {...rootProps}>
        <input {...inputProps} />
        <div {...controlProps}>
            <span {...thumbProps} />
        </div>
    </div>
);
```

`useSwitch` manages boolean toggle state with a hidden native checkbox using `role="switch"` — see [Primitive](../../primitive/switch/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `inputProps`, `controlProps`, `thumbProps`)
- Controlled and uncontrolled checked state
- Hidden native checkbox with `role="switch"` for accessibility
- Invalid and disabled state support with data attributes
- Exposes `onChange` for custom toggle logic

## Behavior

### Default Checked

Use `defaultChecked` to set the initial checked state.

```tsx
const sw = useSwitch({ defaultChecked: true });
```

### Controlled

Use `checked` and `onCheckedChange` for full programmatic control.

```tsx
const [checked, setChecked] = React.useState(false);
const sw = useSwitch({
    checked,
    onCheckedChange: (e) => setChecked(e.checked)
});
```

The `onCheckedChange` callback receives `{ originalEvent, checked }` where `checked` is the new boolean state.

### Disabled

Set `disabled` to prevent interaction. `inputProps` sets `disabled` on the native input and all prop objects add `data-disabled`.

```tsx
const sw = useSwitch({ disabled: true });
```

### Invalid

Set `invalid` to mark the switch as invalid. All prop objects add `data-invalid` and `inputProps` adds `aria-invalid`.

```tsx
const sw = useSwitch({ invalid: true });
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="switch"` and a `data-part` attribute. State-dependent attributes are added automatically.

```css
[data-scope='switch'][data-part='control'] {
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    background: #ccc;
    transition: background 200ms;
}

[data-scope='switch'][data-part='control'][data-checked] {
    background: var(--p-primary-color);
}

[data-scope='switch'][data-part='thumb'] {
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    background: white;
    transition: transform 200ms;
}

[data-scope='switch'][data-part='thumb'][data-checked] {
    transform: translateX(1rem);
}

[data-scope='switch'][data-part='root'][data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useSwitch

> **API/props table for `useSwitch` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Switch Primitive](../../primitive/switch/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
