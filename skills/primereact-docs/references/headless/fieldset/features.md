# useFieldset

Hook that manages collapsible fieldset state and ARIA attributes.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { useFieldset } from '@primereact/headless/fieldset';

export default function BasicDemo() {
    const { rootProps, triggerProps, contentProps, indicatorProps } = useFieldset({ defaultOpen: true });

    return (
        <fieldset {...rootProps} className="max-w-lg mx-auto border border-surface-200 dark:border-surface-700 rounded-xl overflow-visible px-4 pb-4">
            <legend className="px-1">
                <button
                    {...triggerProps}
                    className="flex items-center gap-2 px-2 py-1 text-[0.9375rem] font-semibold text-surface-700 dark:text-surface-0 bg-transparent border-none rounded-md cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                >
                    <span {...indicatorProps} className="group flex items-center text-surface-500 dark:text-surface-400">
                        <Minus className="w-3 h-3 group-data-closed:hidden!" />
                        <Plus className="w-3 h-3 hidden! group-data-closed:block!" />
                    </span>
                    <span>Legend</span>
                </button>
            </legend>
            <div {...contentProps} className="text-sm leading-relaxed text-surface-500 dark:text-surface-400 data-closed:hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </fieldset>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6,8-9,12}
import { useFieldset } from '@primereact/headless/fieldset';

const { rootProps, triggerProps, contentProps, indicatorProps, state } = useFieldset({ defaultOpen: true });

return (
    <fieldset {...rootProps}>
        <legend>
            <button {...triggerProps}>
                <span {...indicatorProps} />
            </button>
        </legend>
        {state.open && <div {...contentProps}></div>}
    </fieldset>
);
```

`useFieldset` wraps `useCollapsible` and returns spread-ready prop objects for semantic `fieldset`/`legend` grouping — see [Primitive](../../primitive/fieldset/features.md) for a component-based API.

## Features

- Single-hook architecture built on `useCollapsible`
- Returns spread-ready prop objects (`rootProps`, `triggerProps`, `contentProps`, `indicatorProps`)
- Controlled and uncontrolled open state management
- Exposes `toggle`, `open`, and `close` methods for imperative control
- Semantic `fieldset`/`legend` structure for native form grouping

## Behavior

### Default Open

Use `defaultOpen` to set the initial open state.

```tsx
const fieldset = useFieldset({ defaultOpen: true });
```

### Controlled

Use `open` and `onOpenChange` for full programmatic control. The hook never updates its own state in controlled mode.

```tsx
const [open, setOpen] = React.useState(true);
const fieldset = useFieldset({
    open,
    onOpenChange: (e) => setOpen(e.value ?? false)
});
```

The `onOpenChange` callback receives `{ originalEvent, value }` where `value` is the new boolean state.

### Disabled

Set `disabled` to prevent interaction. When disabled, `triggerProps` sets `tabIndex` to `-1`, adds `aria-disabled`, and suppresses `onClick`.

```tsx
const fieldset = useFieldset({ disabled: true });
```

### Using `toggle`, `open`, and `close`

The hook exposes imperative methods for custom logic outside the standard trigger flow.

```tsx
const fieldset = useFieldset({ defaultOpen: false });

// Open programmatically
fieldset.open(syntheticEvent);

// Close programmatically
fieldset.close(syntheticEvent);

// Toggle
fieldset.toggle(syntheticEvent);
```

### Conditional Rendering with `state.open`

Use `state.open` to conditionally mount or unmount content.

```tsx
const { contentProps, state } = useFieldset({ defaultOpen: true });

{
    state.open && <div {...contentProps}>Fieldset content — only in DOM when open</div>;
}
```

Alternatively, always render content and use CSS to show/hide:

```tsx
<div {...contentProps} style={{ display: state.open ? 'block' : 'none' }}>
    Fieldset content — always in DOM, toggled with CSS
</div>
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="fieldset"` and a `data-part` attribute. State-dependent attributes (`data-open`, `data-closed`, `data-disabled`) are added automatically.

```css
[data-scope='fieldset'][data-part='trigger'] {
    font-weight: 600;
}

[data-scope='fieldset'][data-part='content'][data-open] {
    animation: slideDown 200ms ease-out;
}

[data-scope='fieldset'][data-part='content'][data-closed] {
    animation: slideUp 200ms ease-out;
}
```

`triggerProps` also includes `data-content-open`/`data-content-closed` for styling the trigger based on content state.

```css
[data-scope='fieldset'][data-part='trigger'][data-content-open] {
    color: blue;
}
```

## API

### useFieldset

> **API/props table for `useFieldset` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Fieldset Primitive](../../primitive/fieldset/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
