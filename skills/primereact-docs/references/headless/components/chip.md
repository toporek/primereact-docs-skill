# useChip

Headless hook for building removable chip elements with custom markup.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { useChip } from '@primereact/headless/chip';

export default function BasicDemo() {
    const chip1 = useChip();
    const chip2 = useChip();
    const chip3 = useChip({ onRemove: () => {} });

    return (
        <div className="flex items-center justify-center gap-2">
            {chip1.state.visible && (
                <div
                    {...chip1.rootProps}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-200 dark:border-surface-700 text-sm"
                >
                    <span>Apple</span>
                </div>
            )}
            {chip2.state.visible && (
                <div
                    {...chip2.rootProps}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-200 dark:border-surface-700 text-sm"
                >
                    <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt="Amy" className="w-6 h-6 rounded-full" />
                    <span>Amy Elsner</span>
                </div>
            )}
            {chip3.state.visible && (
                <div
                    {...chip3.rootProps}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-200 dark:border-surface-700 text-sm"
                >
                    <span>Removable</span>
                    <span {...chip3.removeProps} className="inline-flex items-center cursor-pointer hover:text-red-500 transition">
                        <Times className="w-3 h-3" />
                    </span>
                </div>
            )}
        </div>
    );
}

```

## Usage

```tsx
import { useChip } from '@primereact/headless/chip';
```

```tsx
const { rootProps, removeProps, state, close } = useChip({ onRemove: (e) => {} });

<>
    {
        state.visible && (
            <div {...rootProps}>
                <span></span>
                <span {...removeProps}></span>
            </div>
```

`useChip` tracks whether the chip is visible and gives you wired-up props for the root and the remove button so keyboard and click dismissal work out of the box. See [Primitive](../../primitive/components/chip.md) for a component-based API.

## Features

- **Visibility state**, `state.visible` reflects whether the chip should be rendered
- **Remove-button bindings**, `removeProps` includes click, Enter, and Backspace handlers so the dismiss element is fully wired
- **Imperative close**, `close(event)` dismisses the chip from anywhere, not just the remove button
- **Remove callback**, `onRemove` fires with the original event so you can sync external collections
- **Data-attribute styling**, `data-scope` and `data-part` on the root for CSS targeting

## Working with callbacks

### React to dismissal

Use `onRemove` to update the collection that owns the chip when the user dismisses it.

```tsx
const { rootProps, removeProps, state } = useChip({
    onRemove: (e) => setTags((prev) => prev.filter((t) => t !== tag))
});

{
    state.visible && (
        <div {...rootProps}>
            <span>{tag}</span>
            <span {...removeProps}>x</span>
        </div>
    );
}
```

### Guard rendering with `state.visible`

`state.visible` flips to `false` after `close` is called. Conditionally render the chip so it unmounts cleanly.

```tsx
{
    state.visible && <div {...rootProps}>...</div>;
}
```

### Dismiss from outside the chip

Call `close(event)` when you need a different trigger, a confirmation dialog, a bulk-clear button, or a keyboard shortcut, to dismiss the chip.

```tsx
const { close } = useChip({ onRemove: (e) => {} });

<button onClick={(e) => close(e)}>Dismiss</button>;
```

## Styling with data attributes

The root prop object includes `data-scope="chip"` and `data-part="root"` for targeted styling.

```css
[data-scope='chip'][data-part='root'] {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
}
```

## API

### useChip

> **API/props table for `useChip` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Tab reaches the close button when present, and Enter or Space removes the chip. See [Primitive](../../primitive/components/chip.md#accessibility) for full WAI-ARIA compliance details.
