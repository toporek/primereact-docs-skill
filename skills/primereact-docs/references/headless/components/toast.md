# useToast

Hooks that manage toast notification state, swipe dismissal, auto-timeout, and stacking behavior.

## Usage

```tsx
import { toast, useToaster } from '@primereact/headless/toaster';
import { useToast } from '@primereact/headless/toast';
```

```tsx
const toaster = useToaster({ position: 'bottom-right' });
const { rootProps, regionProps, toasts } = toaster;

const { rootProps: toastRootProps, closeProps, state } = useToast({ toast: toastData, toaster });

<div {...rootProps}>
    <div {...regionProps}>
        {toasts.map((t) => (
            <div {...toastRootProps}>
                <button {...closeProps}></button>
            </div>
```

`useToaster` manages the toast container; `useToast` drives per-toast lifecycle. See [Primitive](../../primitive/components/toast.md) for a component-based API.

## Features

- **Two-hook architecture**, `useToaster` owns container/region state, `useToast` drives per-toast lifecycle
- **Imperative API**, global `toast` function with severity shortcuts (`success`, `info`, `warn`, `error`, `secondary`, `contrast`) and `update`, `dismiss`, `promise` methods
- **Swipe-to-dismiss**, directional gesture detection with `data-*` lifecycle attributes
- **Auto-timeout with pause**, timers pause on hover, focus, and when the document is hidden; per-toast `duration` overrides the container `timeout`
- **Stacking and expansion**, stacked layout with expand-on-hover, configurable visible `limit`, and positional placement
- **Grouping**, route toasts to specific containers via matching `group` keys

## Working with toasts

### Creating toasts

Pass `severity` directly or use the shortcut method. Each call returns an id you can use later to update or dismiss.

```tsx
import { toast } from '@primereact/headless/toaster';

const id = toast({ title: 'Update available', description: 'A new version is ready.' });

toast.success({ title: 'Saved' });
toast.error({ title: 'Error', description: 'Something went wrong.' });
```

### Promise lifecycle

`toast.promise` ties a single toast to a promise, loading state during the await, then success/error based on the outcome.

```tsx
toast.promise(fetchData(), {
    loading: { title: 'Loading…' },
    success: (data) => ({ title: 'Done', description: `Fetched ${data.length} items.` }),
    error: (err) => ({ title: 'Failed', description: err.message })
});
```

### Updating toasts

`toast.update(id, options)` merges new options into an existing toast, typically used to turn a loading toast into a result.

```tsx
const id = toast({ loading: true, title: 'Uploading…' });

await upload();

toast.update(id, { loading: false, severity: 'success', title: 'Complete' });
```

### Custom JSX

Pass a React element to `render` to override the default body. The root wrapper (positioning, animation, swipe) is preserved.

```tsx
const id = toast({
    render: (
        <div>
            <span>Custom content</span>
            <button onClick={() => toast.dismiss(id)}>Close</button>
        </div>
    )
});
```

### Sticky and grouped toasts

Pass `duration: Infinity` to keep a toast until dismissed manually. Use `group` on both the toaster and the call to route toasts to a specific container.

```tsx
const toaster = useToaster({ group: 'notifications' });

toast({ title: 'Sticky', duration: Infinity, group: 'notifications' });
```

### Callbacks

```tsx
toast({
    title: 'Notification',
    onDismiss: (t) => console.log('dismissed', t.id),
    onTimeout: (t) => console.log('timed out', t.id)
});
```

### Per-toast state

`useToast` exposes a `state` object useful for custom animations or conditional rendering.

```tsx
const { state } = useToast({ toast: toastData, toaster });
// state.mounted, state.removed, state.swiping, state.swipeOut,
// state.swipeOutDirection, state.isSwiped, state.initialHeight
```

## Styling with data attributes

`rootProps` from both hooks expose state through `data-*` attributes.

| Scope     | Element | Attributes                                                                                                             |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `toaster` | region  | `data-position`, `data-expanded`                                                                                       |
| `toast`   | root    | `data-mounted`, `data-removed`, `data-visible`, `data-front`, `data-swiping`, `data-swipe-out`, `data-swipe-direction` |

```css
[data-position='bottom-right'] {
    right: 2rem;
    bottom: 2rem;
}

[data-mounted] {
    opacity: 1;
}
[data-removed] {
    opacity: 0;
}
[data-swiping] {
    transition: none;
}
[data-swipe-out][data-swipe-direction='left'] {
    transform: translateX(-100%);
}
```

## API

### useToaster

> **`useToaster` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/toast or the installed `@primereact/types`.

### useToast

> **`useToast` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/toast or the installed `@primereact/types`.

## Accessibility

Focus moves into the toast when it contains action buttons, and Escape dismisses when focused. See [Primitive](../../primitive/components/toast.md#accessibility) for full WAI-ARIA compliance details.
