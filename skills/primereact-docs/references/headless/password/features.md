# usePassword

Hook that manages password input with mask toggling and controlled or uncontrolled value state.

```tsx
'use client';
import { Eye } from '@primeicons/react/eye';
import { EyeSlash } from '@primeicons/react/eye-slash';
import { usePassword } from '@primereact/headless/password';

export default function BasicDemo() {
    const { rootProps, state, toggleMask } = usePassword();

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

```tsx showLineNumbers {1,3,5}
import { usePassword } from '@primereact/headless/password';

const { rootProps, state, toggleMask } = usePassword();

return <input {...rootProps} />;
```

`usePassword` manages input type toggling between `password` and `text`, along with value state — see [Primitive](../../primitive/password/features.md) for a component-based API.

## Features

- `rootProps` returns spread-ready attributes including dynamic `type` (`password` or `text`) and change handler
- `state.mask` tracks the current visibility state (`true` for hidden, `false` for visible)
- `state.value` tracks the current input value
- `toggleMask()` method switches between masked and unmasked modes

## Behavior

### Default Mask

Password is masked by default. Set `defaultMask` to `false` to start with the password visible.

```tsx
const password = usePassword({ defaultMask: false });
```

### Controlled Value

Pass `value` with `onValueChange` for controlled value state.

```tsx
const [value, setValue] = React.useState('');

const password = usePassword({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Controlled Mask

Pass `mask` with `onMaskChange` for controlled mask toggling.

```tsx
const [masked, setMasked] = React.useState(true);

const password = usePassword({
    mask: masked,
    onMaskChange: (e) => setMasked(e.value)
});
```

### Toggle Mask

Call `toggleMask()` to programmatically switch between `password` and `text` input type.

```tsx
const { rootProps, toggleMask, state } = usePassword();

<input {...rootProps} />
<button onClick={toggleMask}>
    {state.mask ? 'Show' : 'Hide'}
</button>
```

### Custom Styling with Data Attributes

```css
[data-scope='password'][data-part='root'] { ... }
```

## API

### usePassword

> **API/props table for `usePassword` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Password Primitive](../../primitive/password/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
