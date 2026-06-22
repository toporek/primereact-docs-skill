# usePanel

Hook that manages collapsible panel state and ARIA attributes.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { usePanel } from '@primereact/headless/panel';

export default function BasicDemo() {
    const { rootProps, triggerProps, contentProps, indicatorProps, state } = usePanel({ defaultOpen: true });

    return (
        <div {...rootProps} className="max-w-lg mx-auto border border-surface-200 dark:border-surface-700 rounded-xl overflow-visible">
            <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[0.9375rem] font-semibold text-surface-700 dark:text-surface-0">Header</span>
                <button
                    {...triggerProps}
                    className="p-1 bg-transparent border-none rounded-md cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                >
                    <span
                        {...indicatorProps}
                        className="flex items-center text-surface-500 dark:text-surface-400 transition-transform duration-200"
                        style={{ transform: state.open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        <ChevronDown />
                    </span>
                </button>
            </div>
            {state.open && (
                <div {...contentProps} className="px-4 pb-4 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            )}
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-8,10}
import { usePanel } from '@primereact/headless/panel';

const { rootProps, triggerProps, contentProps, indicatorProps, state } = usePanel({ defaultOpen: true });

return (
    <div {...rootProps}>
        <button {...triggerProps}>
            <span {...indicatorProps} />
        </button>
        {state.open && <div {...contentProps}></div>}
    </div>
);
```

`usePanel` wraps `useCollapsible` and returns spread-ready prop objects for each DOM element — see [Primitive](../../primitive/panel/features.md) for a component-based API.

## Features

- Single-hook architecture built on `useCollapsible`
- Returns spread-ready prop objects (`rootProps`, `triggerProps`, `contentProps`, `indicatorProps`)
- Controlled and uncontrolled open state management
- Exposes `toggle`, `open`, and `close` methods for imperative control

## Behavior

### Default Open

Use `defaultOpen` to set the initial open state.

```tsx
const panel = usePanel({ defaultOpen: true });
```

### Controlled

Use `open` and `onOpenChange` for full programmatic control. The hook never updates its own state in controlled mode.

```tsx
const [open, setOpen] = React.useState(true);
const panel = usePanel({
    open,
    onOpenChange: (e) => setOpen(e.value ?? false)
});
```

The `onOpenChange` callback receives `{ originalEvent, value }` where `value` is the new boolean state.

### Disabled

Set `disabled` to prevent interaction. When disabled, `triggerProps` sets `tabIndex` to `-1`, adds `aria-disabled`, and suppresses `onClick`.

```tsx
const panel = usePanel({ disabled: true });
```

### Using `toggle`, `open`, and `close`

The hook exposes imperative methods for custom logic outside the standard trigger flow.

```tsx
const panel = usePanel({ defaultOpen: false });

// Open programmatically
panel.open(syntheticEvent);

// Close programmatically
panel.close(syntheticEvent);

// Toggle
panel.toggle(syntheticEvent);
```

### Conditional Rendering with `state.open`

Use `state.open` to conditionally mount or unmount content.

```tsx
const { contentProps, state } = usePanel({ defaultOpen: true });

{
    state.open && <div {...contentProps}>Panel content — only in DOM when open</div>;
}
```

Alternatively, always render content and use CSS to show/hide:

```tsx
<div {...contentProps} style={{ display: state.open ? 'block' : 'none' }}>
    Panel content — always in DOM, toggled with CSS
</div>
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="panel"` and a `data-part` attribute. State-dependent attributes (`data-open`, `data-closed`, `data-disabled`) are added automatically.

```css
[data-scope='panel'][data-part='trigger'] {
    font-weight: 600;
}

[data-scope='panel'][data-part='content'][data-open] {
    animation: slideDown 200ms ease-out;
}

[data-scope='panel'][data-part='content'][data-closed] {
    animation: slideUp 200ms ease-out;
}
```

`triggerProps` also includes `data-content-open`/`data-content-closed` for styling the trigger based on content state.

```css
[data-scope='panel'][data-part='trigger'][data-content-open] {
    color: blue;
}
```

## API

### usePanel

> **API/props table for `usePanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Panel Primitive](../../primitive/panel/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
