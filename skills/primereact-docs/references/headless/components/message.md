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

```tsx
import { useMessage } from '@primereact/headless/message';
```

```tsx
const { rootProps, closeProps, state } = useMessage({});

<>
    {
        state.visible && (
            <div {...rootProps} role="alert">
                <p></p>
                <button {...closeProps}></button>
            </div>
```

`useMessage` manages visibility state with an optional auto-close timer, see [Primitive](../../primitive/components/message.md) for a component-based API.

## Features

- **Visibility lifecycle**, tracks `state.visible` and hides the root via `display: none` when dismissed
- **Auto-close timer**, optional `life` in milliseconds for self-dismissing messages
- **Imperative dismissal**, `handleClose()` for closing the message from custom logic
- **Dismissal callback**, `onClose` fires whether the message is closed by user action or by the timer

## Working with callbacks

### Auto-closing after a delay

Set `life` to dismiss the message automatically. Useful for transient confirmations that shouldn't require user action.

```tsx
const message = useMessage({ life: 3000 });
```

### Reacting to dismissal

Pair `life` with `onClose` to run cleanup when the message leaves, regardless of whether the user closed it or the timer expired.

```tsx
const message = useMessage({
    life: 5000,
    onClose: () => analytics.track('message_dismissed')
});
```

### Dismissing from custom logic

Call `handleClose()` to dismiss the message from outside the rendered close button, for example after a form submission succeeds.

```tsx
const message = useMessage({});

const onSubmit = async () => {
    await save();
    message.handleClose();
};
```

### Gating render on visibility

`state.visible` is reactive and safe to use as a mount guard so the message is fully removed from the DOM after dismissal.

```tsx
{
    state.visible && <div {...rootProps}>...</div>;
}
```

## Styling with data attributes

Prop objects include `data-scope="message"` and a `data-part` attribute for CSS targeting.

| Scope     | Part    |
| --------- | ------- |
| `message` | `root`  |
| `message` | `close` |

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

Announced via aria-live when shown; Tab reaches the close button if present. See [Primitive](../../primitive/components/message.md#accessibility) for full WAI-ARIA compliance details.
