# useMessage

Hook that manages message visibility with auto-close timer and close callback.

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

> **`useMessage` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/message or the installed `@primereact/types`.

## Accessibility

Announced via aria-live when shown; Tab reaches the close button if present. See [Primitive](../../primitive/components/message.md#accessibility) for full WAI-ARIA compliance details.
