# useMessage

Hook that manages message visibility with auto-close timer and close callback.

```tsx
'use client';
import { Sparkles } from '@primeicons/react/sparkles';
import { Times } from '@primeicons/react/times';
import { useMessage } from '@primereact/headless/message';

export default function BasicDemo() {
    const { rootProps, closeProps, state } = useMessage({});

    return (
        <div className="max-w-sm mx-auto">
            {state.visible && (
                <div
                    {...rootProps}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900"
                    role="alert"
                >
                    <Sparkles className="w-5 h-5 text-primary shrink-0" />
                    <p className="flex-1 text-sm text-surface-700 dark:text-surface-0">Upgrade now and save 5%.</p>
                    <button
                        {...closeProps}
                        className="shrink-0 w-7 h-7 inline-flex items-center justify-center rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-surface-500 dark:text-surface-400 transition-colors cursor-pointer"
                        aria-label="Close"
                    >
                        <Times className="w-3.5 h-3.5" />
                    </button>
                </div>
            )}
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,8-9,11}
import { useMessage } from '@primereact/headless/message';

const { rootProps, closeProps, state } = useMessage({});

return (
    <>
        {
            state.visible && (
                <div {...rootProps} role="alert">
                    <p></p>
                    <button {...closeProps}></button>
                </div>
            );
        }
    </>
)
```

`useMessage` manages visibility state with optional auto-close timer — see [Primitive](../../primitive/message/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `closeProps`)
- Auto-close with configurable `life` duration in milliseconds
- `handleClose` method for programmatic dismissal
- `onClose` callback fired on dismissal

## Behavior

### Auto-Close

Set `life` to auto-close the message after a delay in milliseconds.

```tsx
const message = useMessage({ life: 3000 });
```

### Close Callback

Set `onClose` to run a callback when the message is dismissed, whether by user action or auto-close.

```tsx
const message = useMessage({
    life: 5000,
    onClose: () => console.log('Message closed')
});
```

### Programmatic Close

Use `handleClose()` to dismiss the message from custom logic.

```tsx
const message = useMessage({});
// message.handleClose();
```

### Visibility State

Use `state.visible` to conditionally render the message. When hidden, `rootProps` applies `display: none`.

```tsx
const message = useMessage({});
// message.state.visible → true/false
```

### Custom Styling with Data Attributes

Prop objects include `data-scope="message"` and `data-part` attributes for CSS targeting.

```css
[data-scope='message'][data-part='root'] {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}

[data-scope='message'][data-part='close'] {
    cursor: pointer;
    border: none;
    background: transparent;
}
```

## API

### useMessage

> **API/props table for `useMessage` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Message Primitive](../../primitive/message/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
