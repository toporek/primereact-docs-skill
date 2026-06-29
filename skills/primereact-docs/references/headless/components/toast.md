# useToast

Hooks that manage toast notification state, swipe dismissal, auto-timeout, and stacking behavior.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Times } from '@primeicons/react/times';
import { usePortal } from '@primereact/headless/portal';
import { useToast } from '@primereact/headless/toast';
import { toast, useToaster } from '@primereact/headless/toaster';
import { ToastType } from 'primereact/toaster';
import * as React from 'react';
import { createPortal } from 'react-dom';

const severityIcons: Record<string, React.ReactNode> = {
    success: <Check />,
    error: <Times />,
    warn: <ExclamationTriangle />,
    info: <InfoCircle />
};

function ToastItem({ toastData, toaster }: { toastData: ToastType; toaster: ReturnType<typeof useToaster> }) {
    const { rootProps, messageProps, contentProps, closeProps } = useToast({ toast: toastData, toaster });

    return (
        <div
            {...rootProps}
            className={[
                'w-full p-4 rounded-lg border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0',
                'outline-none absolute touch-none shadow-sm z-[var(--px-toast-z-index)]',
                'opacity-0 [transform:translateX(var(--offset-x))_translateY(calc(100%*var(--raise-factor)*-1))]',
                '[transition:transform_0.3s,opacity_0.3s,height_0.3s]',
                'focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2',
                'data-[mounted]:opacity-100 data-[mounted]:[transform:translateY(0)]',
                'not-data-[expanded]:not-data-[front]:overflow-hidden not-data-[expanded]:not-data-[front]:h-[var(--px-front-toast-height)] not-data-[expanded]:not-data-[front]:[transform:translateX(var(--offset-x))_translateY(calc(var(--raise-factor)*var(--px-toast-index)*var(--px-gap)))_scale(calc(var(--px-toast-index)*-0.05+1))]',
                'data-[mounted]:data-[expanded]:h-[var(--px-initial-height)] data-[mounted]:data-[expanded]:[transform:translateX(var(--offset-x))_translateY(var(--offset-y))]',
                'data-[expanded]:after:content-[""] data-[expanded]:after:absolute data-[expanded]:after:left-0 data-[expanded]:after:h-[calc(var(--px-gap)+1px)] data-[expanded]:after:w-full data-[expanded]:after:bottom-full',
                'not-data-[visible]:!opacity-0 not-data-[visible]:!pointer-events-none not-data-[visible]:!select-none',
                'data-[removed]:data-[front]:not-data-[swipe-out]:opacity-0 data-[removed]:data-[front]:not-data-[swipe-out]:[transform:translateX(var(--offset-x))_translateY(calc(var(--raise-factor)*-100%))]',
                'data-[removed]:not-data-[front]:not-data-[swipe-out]:data-[expanded]:opacity-0 data-[removed]:not-data-[front]:not-data-[swipe-out]:data-[expanded]:[transform:translateX(var(--offset-x))_translateY(calc(var(--raise-factor)*var(--offset-y)*0.4))]',
                'data-[removed]:not-data-[front]:not-data-[swipe-out]:not-data-[expanded]:opacity-0 data-[removed]:not-data-[front]:not-data-[swipe-out]:not-data-[expanded]:[transform:translateX(var(--offset-x))_translateY(calc(var(--raise-factor)*40%*-1))] data-[removed]:not-data-[front]:not-data-[swipe-out]:not-data-[expanded]:[transition:transform_500ms,opacity_200ms]',
                'data-[swiping]:!transition-none data-[swiping]:![transform:translateX(var(--offset-x))_translateY(var(--offset-y))]',
                'data-[swiped]:select-none',
                'data-[swipe-out]:data-[swipe-direction=up]:opacity-0 data-[swipe-out]:data-[swipe-direction=up]:![transform:translateX(var(--offset-x))_translateY(calc(var(--offset-y)-100%))]',
                'data-[swipe-out]:data-[swipe-direction=down]:opacity-0 data-[swipe-out]:data-[swipe-direction=down]:![transform:translateX(var(--offset-x))_translateY(calc(var(--offset-y)+100%))]',
                'data-[swipe-out]:data-[swipe-direction=left]:opacity-0 data-[swipe-out]:data-[swipe-direction=left]:![transform:translateX(calc(var(--offset-x)-100%))_translateY(var(--offset-y))]',
                'data-[swipe-out]:data-[swipe-direction=right]:opacity-0 data-[swipe-out]:data-[swipe-direction=right]:![transform:translateX(calc(var(--offset-x)+100%))_translateY(var(--offset-y))] data-[swipe-out]:data-[swipe-direction=right]:[transition:transform_500ms,opacity_200ms]'
            ].join(' ')}
            style={
                {
                    ...rootProps.style,
                    '--offset-y': `calc(var(--px-swipe-amount-y) + (var(--px-toast-offset) + var(--px-toast-index) * var(--px-gap)) * var(--raise-factor))`,
                    '--offset-x': 'var(--px-swipe-amount-x)',
                    bottom: 0,
                    right: 0,
                    '--raise-factor': '-1'
                } as React.CSSProperties
            }
        >
            <div {...messageProps} className="grid grid-cols-[auto_1fr] items-start gap-3">
                {severityIcons[toastData.severity as string] && (
                    <span className="[&>svg]:size-3.5 mt-1 text-surface-800 dark:text-surface-100">
                        {severityIcons[toastData.severity as string]}
                    </span>
                )}
                <div {...contentProps}>
                    {toastData.title && <div className="text-sm font-semibold text-surface-800 dark:text-surface-100">{toastData.title}</div>}
                    {toastData.description && <div className="text-sm text-surface-500 dark:text-surface-400 mt-1">{toastData.description}</div>}
                </div>
            </div>
            {toastData.dismissible !== false && !toastData.loading && (
                <button
                    {...closeProps}
                    className="absolute top-2 right-2 p-1 rounded text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 cursor-pointer focus-visible:outline-1 focus-visible:outline-primary"
                >
                    <Times className="size-3" />
                </button>
            )}
        </div>
    );
}

export default function BasicDemo() {
    const toaster = useToaster({ position: 'bottom-right', group: 'headless-basic' });
    const portal = usePortal();

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <button
                onClick={() =>
                    toast({
                        severity: 'success',
                        title: 'Saved successfully',
                        description: 'Your changes have been saved.',
                        group: 'headless-basic'
                    })
                }
                className="px-2.5 py-1.5 text-sm rounded-md border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-200 hover:bg-surface-50 dark:hover:bg-surface-800 cursor-pointer focus-visible:outline-1 focus-visible:outline-primary"
            >
                Create toast
            </button>
            {portal.state.mounted &&
                createPortal(
                    <div {...toaster.regionProps} className="fixed w-75 z-[2000] right-8 bottom-8" style={toaster.regionProps.style}>
                        {toaster.toasts.map((t) => (
                            <ToastItem key={t.id} toastData={t} toaster={toaster} />
                        ))}
                    </div>,

                    document.body
                )}
        </div>
    );
}

```

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

> **API/props table for `useToaster` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useToast

> **API/props table for `useToast` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Focus moves into the toast when it contains action buttons, and Escape dismisses when focused. See [Primitive](../../primitive/components/toast.md#accessibility) for full WAI-ARIA compliance details.
