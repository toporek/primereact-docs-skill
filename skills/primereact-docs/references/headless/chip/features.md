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

```tsx showLineNumbers {1,3,8-9,11}
import { useChip } from '@primereact/headless/chip';

const { rootProps, removeProps, state, close } = useChip({ onRemove: (e) => {} });

return (
    <>
        {
            state.visible && (
                <div {...rootProps}>
                    <span></span>
                    <span {...removeProps}></span>
                </div>
            );
        }
    </>
)
```

`useChip` manages visibility state and provides spread-ready props for the root and remove elements — see [Primitive](../../primitive/chip/features.md) for a component-based API.

## Features

- Visibility state management with `state.visible`
- Spread-ready `removeProps` with click and keyboard handlers (Enter, Backspace)
- Imperative `close` method for programmatic removal
- `onRemove` callback for reacting to dismissal

## Behavior

### Removable

Pass `onRemove` to enable removal. Spread `removeProps` on the dismiss element to wire up click and keyboard handlers automatically.

```tsx
const { rootProps, removeProps, state } = useChip({
    onRemove: (e) => console.log('removed', e.originalEvent)
});

{
    state.visible && (
        <div {...rootProps}>
            <span>Tag</span>
            <span {...removeProps}>x</span>
        </div>
    );
}
```

### Conditional Rendering with `state.visible`

`state.visible` starts as `true` and becomes `false` after `close` is called. Use it to conditionally render or unmount the chip element.

```tsx
{
    state.visible && <div {...rootProps}>...</div>;
}
```

### Imperative Close

Call `close(event)` to programmatically dismiss the chip from an external trigger.

```tsx
const { close } = useChip({ onRemove: (e) => {} });

<button onClick={(e) => close(e)}>Dismiss</button>;
```

### Custom Styling with Data Attributes

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

See [Chip Primitive](../../primitive/chip/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
