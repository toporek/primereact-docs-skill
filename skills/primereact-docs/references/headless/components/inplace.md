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

```tsx
import { useInplace } from '@primereact/headless/inplace';
```

```tsx
const { rootProps, displayProps, closeProps, state } = useInplace();

<div {...rootProps}>
    {!state.active ? (
        <div {...displayProps}></div>
```

`useInplace` manages the display/content toggle and returns prop objects for the container, display, and close elements, see [Primitive](../../primitive/components/inplace.md) for a component-based API.

## Features

- **Active-state lifecycle**, controlled or uncontrolled toggling between display and edit modes
- **Imperative controls**, `open()` and `close()` for programmatic toggling outside the standard click/close flow
- **Keyboard activation**, built-in Enter/Space handler on `displayProps` to enter edit mode
- **Data-driven styling**, `data-active`, `data-inactive`, and `data-disabled` attributes expose state without className juggling
- **Disabled mode**, suppresses click and keyboard handlers and marks the root with `data-disabled`

## Working with callbacks

### Controlled active state

Drive the toggle from external state by pairing `active` with `onActiveChange`. The hook never mutates its own state in controlled mode.

```tsx
const [active, setActive] = React.useState(false);

const inplace = useInplace({
    active,
    onActiveChange: (e) => setActive(e.active)
});
```

### Closing after a save

Use `close()` imperatively so the edit surface exits after the underlying action completes.

```tsx
const inplace = useInplace();

const onSave = async () => {
    await save();
    inplace.close();
};
```

### Rendering edit content conditionally

Gate the edit surface on `state.active` so inputs mount only while the inplace is active, useful for forms that need a fresh `defaultValue` each time.

```tsx
const { rootProps, displayProps, closeProps, state } = useInplace();

<div {...rootProps}>
    {!state.active ? (
        <div {...displayProps}>Edit name</div>
    ) : (
        <div>
            <input defaultValue={name} />
            <button {...closeProps}>Cancel</button>
        </div>
    )}
</div>;
```

## Styling with data attributes

Every prop object includes `data-scope="inplace"` and a `data-part` attribute. State-dependent attributes (`data-active`, `data-inactive`, `data-disabled`) are added automatically.

| Scope     | Part      | States                                          |
| --------- | --------- | ----------------------------------------------- |
| `inplace` | `root`    | `data-disabled`                                 |
| `inplace` | `display` | `data-active`, `data-inactive`, `data-disabled` |
| `inplace` | `close`   | ,                                               |

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

Enter or Space activates edit mode, Escape cancels, and focus returns to the display on exit. See [Primitive](../../primitive/components/inplace.md#accessibility) for full WAI-ARIA compliance details.
