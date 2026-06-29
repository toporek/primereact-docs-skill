# useInputPassword

Hook that manages password input with mask toggling and controlled or uncontrolled value state.

```tsx
'use client';
import { Eye } from '@primeicons/react/eye';
import { EyeSlash } from '@primeicons/react/eye-slash';
import { useInputPassword } from '@primereact/headless/inputpassword';

export default function BasicDemo() {
    const { rootProps, state, toggleMask } = useInputPassword();

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden has-[input:focus-visible]:outline-1 has-[input:focus-visible]:outline-primary">
                <input
                    {...rootProps}
                    placeholder="Enter password"
                    className="w-48 px-2.5 py-1.5 text-sm bg-transparent outline-none text-surface-900 dark:text-surface-100"
                />
                <button
                    type="button"
                    onClick={toggleMask}
                    className="px-2.5 py-1.5 cursor-pointer text-surface-500 hover:text-surface-700 dark:hover:text-surface-300"
                >
                    {state.mask ? <Eye /> : <EyeSlash />}
                </button>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useInputPassword } from '@primereact/headless/inputpassword';
```

```tsx
const { rootProps, state, toggleMask } = useInputPassword();

return <input {...rootProps} />;
```

`useInputPassword` manages input type toggling between `password` and `text`, along with value state. See [Primitive](../../primitive/components/inputpassword.md) for a component-based API.

## Features

- **Mask state**, tracks current visibility in `state.mask` and flips the input's `type` attribute accordingly
- **Value state**, `state.value` holds the current input text for controlled or uncontrolled usage
- **Toggle action**, `toggleMask()` switches between masked and unmasked modes imperatively
- **Independent control**, value and mask can be controlled separately via `value`/`onValueChange` and `mask`/`onMaskChange`

## Working with callbacks

### Controlled value

Pass `value` and `onValueChange` to drive the input from outside state, required for form libraries or validation flows.

```tsx
const [value, setValue] = React.useState('');

useInputPassword({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Controlled mask

Pass `mask` and `onMaskChange` when the visibility state is owned by a parent (for example, syncing across multiple fields).

```tsx
const [masked, setMasked] = React.useState(true);

useInputPassword({
    mask: masked,
    onMaskChange: (e) => setMasked(e.value)
});
```

### Toggle button

Call `toggleMask()` from a show/hide button, driving its label from `state.mask`.

```tsx
const { rootProps, toggleMask, state } = useInputPassword();
```

## Styling with data attributes

The root input includes `data-scope="password"` and `data-part="root"` for styling.

```css
[data-scope='password'][data-part='root'] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

[data-scope='password'][data-part='root']:focus {
    border-color: var(--p-primary-color);
    outline: none;
}
```

## API

### useInputPassword

> **`useInputPassword` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/inputpassword or the installed `@primereact/types`.

## Accessibility

Standard text input behavior plus a toggle to reveal or hide the masked value. See [Primitive](../../primitive/components/inputpassword.md#accessibility) for full WAI-ARIA compliance details.
