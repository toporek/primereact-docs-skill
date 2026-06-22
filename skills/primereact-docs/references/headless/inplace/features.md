# useInplace

Hook that manages inline display-to-edit toggling with keyboard and state support.

```tsx
'use client';
import { Pencil } from '@primeicons/react/pencil';
import { Times } from '@primeicons/react/times';
import { useInplace } from '@primereact/headless/inplace';

export default function BasicDemo() {
    const { rootProps, displayProps, closeProps, state } = useInplace();

    return (
        <div className="flex justify-center">
            <div {...rootProps}>
                {!state.active ? (
                    <div
                        {...displayProps}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded cursor-pointer text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100 transition focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <Pencil className="w-4 h-4" />
                        <span>Click to edit</span>
                    </div>
                ) : (
                    <div className="inline-flex items-center gap-2">
                        <input
                            type="text"
                            defaultValue="PrimeReact"
                            className="px-2.5 py-1.5 border border-surface-300 dark:border-surface-600 rounded bg-transparent text-surface-900 dark:text-surface-100 outline-none focus:border-primary-500"
                            autoFocus
                        />
                        <button
                            {...closeProps}
                            className="flex items-center justify-center p-2 rounded cursor-pointer text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <Times />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-8,12}
import { useInplace } from '@primereact/headless/inplace';

const { rootProps, displayProps, closeProps, state } = useInplace();

return (
    <div {...rootProps}>
        {!state.active ? (
            <div {...displayProps}></div>
        ) : (
            <div>
                <input />
                <button {...closeProps}></button>
            </div>
        )}
    </div>
);
```

`useInplace` manages the display/content toggle and returns prop objects for the container, display, and close elements — see [Primitive](../../primitive/inplace/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `displayProps`, `closeProps`)
- Controlled and uncontrolled active state management
- Exposes imperative `open()` and `close()` methods
- Built-in keyboard handler for display element (Enter/Space)

## Behavior

### Default Active

Use `defaultActive` to start in edit mode.

```tsx
const inplace = useInplace({ defaultActive: true });
```

### Controlled

Use `active` and `onActiveChange` for programmatic control. The hook never updates its own state in controlled mode.

```tsx
const [active, setActive] = React.useState(false);
const inplace = useInplace({
    active,
    onActiveChange: (e) => setActive(e.active)
});
```

### Disabled

Set `disabled` to prevent the display from being clicked or focused.

```tsx
const inplace = useInplace({ disabled: true });
```

When disabled, `displayProps` suppresses `onClick` and `onKeyDown` handlers and adds `data-disabled`.

### Using `open` and `close`

The hook exposes imperative methods for programmatic toggling outside the standard display/close flow.

```tsx
const inplace = useInplace();

// Programmatically open
inplace.open();

// Programmatically close
inplace.close();
```

### Conditional Rendering with `state.active`

Use `state.active` to conditionally mount or unmount content.

```tsx
const { rootProps, displayProps, closeProps, state } = useInplace();

{
    !state.active ? (
        <div {...displayProps}></div>
    ) : (
        <div>
            <input />
            <button {...closeProps}></button>
        </div>
    );
}
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="inplace"` and a `data-part` attribute. State-dependent attributes (`data-active`, `data-inactive`, `data-disabled`) are added automatically.

```css
[data-scope='inplace'][data-part='display'] {
    cursor: pointer;
    padding: 0.5rem;
}

[data-scope='inplace'][data-part='display'][data-inactive]:hover {
    background-color: #f3f4f6;
}

[data-scope='inplace'][data-part='root'][data-disabled] {
    opacity: 0.5;
    pointer-events: none;
}
```

## API

### useInplace

> **API/props table for `useInplace` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Inplace Primitive](../../primitive/inplace/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
