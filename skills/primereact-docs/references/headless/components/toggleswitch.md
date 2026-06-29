# useToggleSwitch

Hook that manages toggle switch state, checked/unchecked logic, and ARIA attributes.

```tsx
'use client';
import * as React from 'react';
import { useToggleSwitch } from '@primereact/headless/toggleswitch';

export default function BasicDemo() {
    const { rootProps, inputProps, controlProps, handleProps } = useToggleSwitch({ defaultChecked: false });

    return (
        <div className="flex justify-center">
            <div className="flex items-center gap-2">
                <div
                    {...rootProps}
                    className="relative inline-flex items-center has-[input:focus-visible]:outline-1 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary has-[input:focus-visible]:outline rounded-full"
                >
                    <input
                        {...(inputProps as unknown as React.InputHTMLAttributes<HTMLInputElement>)}
                        id="basic-switch"
                        className="absolute z-2 inset-0 w-full h-full opacity-0 cursor-pointer appearance-none m-0 p-0 border border-transparent rounded-full"
                    />
                    <div
                        {...controlProps}
                        className="relative w-10 h-6 rounded-full transition-colors duration-200 bg-surface-300 dark:bg-surface-600 data-[checked]:bg-primary"
                    >
                        <span
                            {...handleProps}
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

```tsx
import { useToggleSwitch } from '@primereact/headless/toggleswitch';
```

```tsx
const { rootProps, inputProps, controlProps, handleProps } = useToggleSwitch({
    defaultChecked: false
});

<div {...rootProps}>
    <input {...inputProps} />
    <div {...controlProps}>
        <span {...handleProps} />
    </div>
</div>;
```

`useToggleSwitch` manages boolean toggle state with a hidden native checkbox using `role="switch"`. See [Primitive](../../primitive/components/toggleswitch.md) for a component-based API.

## Features

- **Composable parts**, spreads props onto `root`, `input`, `control`, and `handle` elements so the visual track and handle are fully yours
- **Switch semantics**, hidden native checkbox with `role="switch"` preserves screen reader and keyboard behavior
- **Controlled or uncontrolled**, drive via `checked`/`onCheckedChange` or let the hook manage state from `defaultChecked`
- **Validation flags**, `invalid` and `disabled` emit `aria-invalid`, `data-invalid`, and `data-disabled` across the parts
- **Animation-ready**, `data-checked` on `control` and `handle` lets you transition the track color and handle position via CSS

## Working with callbacks

### Controlled toggle switch

Pass `checked` and `onCheckedChange` to own the state externally, needed for settings pages, async toggles, or validation flows.

```tsx
const [checked, setChecked] = React.useState(false);

useToggleSwitch({
    checked,
    onCheckedChange: (e) => setChecked(e.checked)
});
```

The callback receives `{ originalEvent, checked }` where `checked` is the new boolean.

### Async confirmation before commit

Intercept `onCheckedChange` to run a confirmation or network call before applying the new state.

```tsx
const [checked, setChecked] = React.useState(false);

useToggleSwitch({
    checked,
    onCheckedChange: async (e) => {
        if (await confirmChange(e.checked)) setChecked(e.checked);
    }
});
```

### Invalid state tied to form validation

Flip `invalid` from your form state so CSS can react via `data-invalid`.

```tsx
useToggleSwitch({
    invalid: formState.errors.notifications != null
});
```

## Styling with data attributes

Every prop object includes `data-scope="toggleswitch"` and a `data-part` attribute. State-dependent attributes are added automatically.

| Scope          | Part      | States                                          |
| -------------- | --------- | ----------------------------------------------- |
| `toggleswitch` | `root`    | `data-checked`, `data-disabled`, `data-invalid` |
| `toggleswitch` | `control` | `data-checked`, `data-disabled`, `data-invalid` |
| `toggleswitch` | `handle`  | `data-checked`, `data-disabled`, `data-invalid` |

```css
[data-scope='toggleswitch'][data-part='control'] {
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    background: #ccc;
    transition: background 200ms;
}

[data-scope='toggleswitch'][data-part='control'][data-checked] {
    background: var(--p-primary-color);
}

[data-scope='toggleswitch'][data-part='handle'] {
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    background: white;
    transition: transform 200ms;
}

[data-scope='toggleswitch'][data-part='handle'][data-checked] {
    transform: translateX(1rem);
}

[data-scope='toggleswitch'][data-part='root'][data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useToggleSwitch

> **`useToggleSwitch` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/toggleswitch or the installed `@primereact/types`.

## Accessibility

Space toggles the on/off state while focused, matching native checkbox keyboard behavior. See [Primitive](../../primitive/components/toggleswitch.md#accessibility) for full WAI-ARIA compliance details.
