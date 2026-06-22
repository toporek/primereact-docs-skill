# useCollapsible

Hook that manages open/close state, toggle behavior, and ARIA attributes for collapsible content.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { useCollapsible } from '@primereact/headless/collapsible';

export default function BasicDemo() {
    const { rootProps, triggerProps, contentProps, state } = useCollapsible({ defaultOpen: false });

    return (
        <div className="max-w-lg mx-auto">
            <div {...rootProps} className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                <button
                    {...triggerProps}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-surface-700 dark:text-surface-0 bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors cursor-pointer"
                >
                    What is PrimeReact?
                    <ChevronDown className={`w-4 h-4 text-surface-500 transition-transform duration-200 ${state.open ? 'rotate-180' : ''}`} />
                </button>
                {state.open && (
                    <div {...contentProps} className="px-4 py-3 text-sm text-surface-600 dark:text-surface-300 leading-relaxed">
                        PrimeReact is a rich set of open source UI components for React. It provides a wide range of components like buttons, dialogs,
                        tables, and more to help you build modern web applications.
                    </div>
                )}
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-8}
import { useCollapsible } from '@primereact/headless/collapsible';

const { rootProps, triggerProps, contentProps, state } = useCollapsible();

return (
    <div {...rootProps}>
        <button {...triggerProps}></button>
        {state.open && <div {...contentProps}></div>}
    </div>
);
```

`useCollapsible` manages open/close state with toggle, open, and close methods — see [Primitive](../../primitive/collapsible/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps`, `triggerProps`, and `contentProps` with ARIA and data attributes
- Supports controlled (`open`) and uncontrolled (`defaultOpen`) modes
- Provides `toggle`, `open`, and `close` methods for imperative control
- Fires `onOpen`, `onClose`, and `onOpenChange` callbacks

## Behavior

### Default State

The collapsible starts open by default. Set `defaultOpen` to `false` to start collapsed.

```tsx
const { state } = useCollapsible({ defaultOpen: false });

state.open; // false
```

### Controlled

Pass `open` and `onOpenChange` to control the state externally.

```tsx
const [isOpen, setIsOpen] = React.useState(true);
const { state } = useCollapsible({ open: isOpen, onOpenChange: (e) => setIsOpen(e.value) });
```

### Disabled

Set `disabled` to prevent toggling and remove the trigger from the tab order.

```tsx
const { triggerProps } = useCollapsible({ disabled: true });

triggerProps.tabIndex; // -1
triggerProps['aria-disabled']; // true
```

### Custom Styling with Data Attributes

The prop objects include `data-scope="collapsible"` and `data-part` for styling. State is reflected via `data-open`/`data-closed` on root and content, and `data-content-open`/`data-content-closed` on trigger.

```css
[data-scope='collapsible'][data-part='root'][data-open] {
    border-color: var(--p-primary-color);
}

[data-scope='collapsible'][data-part='trigger'][data-content-open] svg {
    transform: rotate(180deg);
}
```

## API

### useCollapsible

> **API/props table for `useCollapsible` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Collapsible Primitive](../../primitive/collapsible/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
