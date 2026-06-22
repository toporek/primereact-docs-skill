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

const variantIcons: Record<string, React.ReactNode> = {
    success: <Check />,
    danger: <Times />,
    warn: <ExclamationTriangle />,
    info: <InfoCircle />
};

function ToastItem({ toastData, toaster }: { toastData: ToastType; toaster: ReturnType<typeof useToaster> }) {
    const { rootProps, closeProps } = useToast({ toast: toastData, toaster });

    return (
        <div
            {...rootProps}
            className={[
                'w-full p-4 rounded-lg border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0',
                'outline-none absolute touch-none shadow-sm [z-index:var(--toast-z-index)]',
                'opacity-0 [transform:translateX(var(--offset-x))_translateY(calc(100%*var(--raise-factor)*-1))]',
                '[transition:transform_0.3s,opacity_0.3s,height_0.3s]',
                'focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2',
                'data-[mounted]:opacity-100 data-[mounted]:[transform:translateY(0)]',
                'not-data-[expanded]:not-data-[front]:overflow-hidden not-data-[expanded]:not-data-[front]:[height:var(--front-toast-height)] not-data-[expanded]:not-data-[front]:[transform:translateX(var(--offset-x))_translateY(calc(var(--raise-factor)*var(--toast-index)*var(--gap)))_scale(calc(var(--toast-index)*-0.05+1))]',
                'data-[mounted]:data-[expanded]:[height:var(--initial-height)] data-[mounted]:data-[expanded]:[transform:translateX(var(--offset-x))_translateY(var(--offset-y))]',
                'data-[expanded]:after:content-[""] data-[expanded]:after:absolute data-[expanded]:after:left-0 data-[expanded]:after:[height:calc(var(--gap)+1px)] data-[expanded]:after:w-full data-[expanded]:after:bottom-full',
                'not-data-[visible]:!opacity-0 not-data-[visible]:!pointer-events-none not-data-[visible]:!select-none',
                'data-[removed]:data-[front]:not-data-[swipe-out]:opacity-0 data-[removed]:data-[front]:not-data-[swipe-out]:[transform:translateX(var(--offset-x))_translateY(calc(var(--raise-factor)*-100%))]',
                'data-[removed]:not-data-[front]:not-data-[swipe-out]:data-[expanded]:opacity-0 data-[removed]:not-data-[front]:not-data-[swipe-out]:data-[expanded]:[transform:translateX(var(--offset-x))_translateY(calc(var(--raise-factor)*var(--offset-y)*0.4))]',
                'data-[removed]:not-data-[front]:not-data-[swipe-out]:not-data-[expanded]:opacity-0 data-[removed]:not-data-[front]:not-data-[swipe-out]:not-data-[expanded]:[transform:translateX(var(--offset-x))_translateY(calc(var(--raise-factor)*40%*-1))] data-[removed]:not-data-[front]:not-data-[swipe-out]:not-data-[expanded]:[transition:transform_500ms,opacity_200ms]',
                'data-[swiping]:![transition:none] data-[swiping]:![transform:translateX(var(--offset-x))_translateY(var(--offset-y))]',
                'data-[swiped]:select-none',
                'data-[swipe-out]:data-[swipe-direction=up]:opacity-0 data-[swipe-out]:data-[swipe-direction=up]:![transform:translateX(var(--offset-x))_translateY(calc(var(--offset-y)-100%))]',
                'data-[swipe-out]:data-[swipe-direction=down]:opacity-0 data-[swipe-out]:data-[swipe-direction=down]:![transform:translateX(var(--offset-x))_translateY(calc(var(--offset-y)+100%))]',
                'data-[swipe-out]:data-[swipe-direction=left]:opacity-0 data-[swipe-out]:data-[swipe-direction=left]:![transform:translateX(calc(var(--offset-x)-100%))_translateY(var(--offset-y))]',
                'data-[swipe-out]:data-[swipe-direction=right]:opacity-0 data-[swipe-out]:data-[swipe-direction=right]:![transform:translateX(calc(var(--offset-x)+100%))_translateY(var(--offset-y))] data-[swipe-out]:data-[swipe-direction=right]:[transition:transform_500ms,opacity_200ms]'
            ].join(' ')}
            style={
                {
                    ...rootProps.style,
                    '--offset-y': `calc(var(--swipe-amount-y) + (var(--toast-offset) + var(--toast-index) * var(--gap)) * var(--raise-factor))`,
                    '--offset-x': 'var(--swipe-amount-x)',
                    bottom: 0,
                    right: 0,
                    '--raise-factor': '-1'
                } as React.CSSProperties
            }
        >
            <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                {variantIcons[toastData.variant as string] && (
                    <span className="[&>svg]:size-3.5 mt-1 text-surface-800 dark:text-surface-100">{variantIcons[toastData.variant as string]}</span>
                )}
                <div>
                    {toastData.title && <div className="text-sm font-semibold text-surface-800 dark:text-surface-100">{toastData.title}</div>}
                    {toastData.description && <div className="text-sm text-surface-500 dark:text-surface-400 mt-1">{toastData.description}</div>}
                </div>
            </div>
            {toastData.dismissible !== false && toastData.variant !== 'loading' && (
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
                    toast.success({
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

```tsx showLineNumbers {1-2,4-5,7,10-14}
import { toast, useToaster } from '@primereact/headless/toaster';
import { useToast } from '@primereact/headless/toast';

const toaster = useToaster({ position: 'bottom-right' });
const { rootProps, regionProps, toasts } = toaster;

const { rootProps: toastRootProps, closeProps, state } = useToast({ toast: toastData, toaster });

return (
    <div {...rootProps}>
        <div {...regionProps}>
            {toasts.map((t) => (
                <div {...toastRootProps}>
                    <button {...closeProps}></button>
                </div>
            ))}
        </div>
    </div>
);
```

`useToaster` manages the toast container state while `useToast` handles individual toast lifecycle — see [Primitive](../../primitive/toast/features.md) for a component-based API.

## Features

- Two-hook architecture: `useToaster` for container/region state, `useToast` for per-toast behavior
- Global `toast` function for imperative toast creation with variant methods (`success`, `danger`, `warn`, `info`, `loading`, `custom`, `promise`)
- Returns spread-ready prop objects (`rootProps`, `regionProps`, `closeProps`, `actionProps`, `titleProps`, `descriptionProps`, `iconProps`)
- Built-in swipe-to-dismiss with directional detection (left, right, up, down)
- Auto-timeout with pause on hover/interaction and document visibility tracking
- Stacked toast layout with expand-on-hover behavior
- Toast grouping via the `group` prop

## Behavior

### Creating Toasts

Use the `toast` function to create notifications imperatively. It returns a toast ID for later reference.

```tsx
import { toast } from '@primereact/headless/toaster';

const id = toast({
    title: 'Update available',
    description: 'A new version is ready to use.'
});
```

### Variants

Use variant methods to create typed toasts. Each method sets the appropriate `variant` value.

```tsx
toast.success({ title: 'Saved', description: 'Your changes have been saved.' });
toast.danger({ title: 'Error', description: 'Something went wrong.' });
toast.warn({ title: 'Warning', description: 'Check your input.' });
toast.info({ title: 'Info', description: 'New update available.' });
toast.loading({ title: 'Loading...', description: 'Please wait.' });
```

### Custom JSX

Use `toast.custom` to render arbitrary JSX as the toast content. The first argument is a ReactElement or a function that receives the toast ID.

```tsx
toast.custom(<div>Custom content</div>, { duration: 5000 });

toast.custom((id) => (
    <div>
        <button onClick={() => toast.dismiss(id)}>Close</button>
    </div>
));
```

### Promise

Use `toast.promise` to create a toast that transitions through loading, success, and error states based on a Promise result.

```tsx
toast.promise(fetchData(), {
    loading: { title: 'Loading...' },
    success: (data) => ({ title: 'Done', description: `Fetched ${data.length} items.` }),
    error: (err) => ({ title: 'Failed', description: err.message })
});
```

### Dismissing Toasts

Use `toast.dismiss` to animate a toast out. Pass no argument to dismiss all toasts.

```tsx
toast.dismiss(id);
toast.dismiss();
```

Use `toast.remove` to remove a toast instantly without animation.

```tsx
toast.remove(id);
```

### Updating Toasts

Use `toast.update` to change the properties of an existing toast by its ID.

```tsx
const id = toast.loading({ title: 'Uploading...' });

toast.update(id, { title: 'Complete', variant: 'success' });
```

### Duration

Pass `duration` on individual toasts to override the container-level `timeout`. Set `Infinity` to keep the toast visible until manually dismissed.

```tsx
toast({ title: 'Sticky', duration: Infinity });
```

### Grouping

Use `group` on both `useToaster` and the `toast` call to route toasts to specific containers. Toasts without a group render in containers without a group.

```tsx
const toaster = useToaster({ group: 'notifications' });

toast({ title: 'Alert', group: 'notifications' });
```

### Position

Set `position` on `useToaster` to control toast placement. The `regionProps` include the corresponding `data-position` attribute.

```tsx
const toaster = useToaster({ position: 'top-center' });
```

Available values: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`.

### Limit

Set `limit` to control how many toasts are visible simultaneously. Remaining toasts stack behind the visible ones.

```tsx
const toaster = useToaster({ limit: 5 });
```

### Close Callbacks

Use `onDismiss` and `onTimeout` on individual toast options to react to dismissal or timeout events.

```tsx
toast({
    title: 'Notification',
    onDismiss: (t) => console.log('dismissed', t.id),
    onTimeout: (t) => console.log('timed out', t.id)
});
```

### Toast State

`useToast` exposes `state` for each toast, reflecting its lifecycle phase. Use these values for conditional styling or rendering.

```tsx
const { state } = useToast({ toast: toastData, toaster });

// state.mounted — true after initial render
// state.removed — true when the toast is exiting
// state.swiping — true during active swipe gesture
// state.swipeOut — true after swipe threshold exceeded
// state.swipeOutDirection — 'left' | 'right' | 'up' | 'down'
// state.isSwiped — true when swipe delta exceeds zero
// state.initialHeight — measured height for stacking calculations
// state.offsetBeforeRemove — captured offset for exit animation
```

### Custom Styling with Data Attributes

`rootProps` from both hooks include data attributes for CSS-based styling.

**Toaster region:**

```css
[data-position='bottom-right'] {
    right: 2rem;
    bottom: 2rem;
}
[data-expanded] {
    /* region is expanded on hover */
}
```

**Individual toast:**

```css
[data-variant='success'] {
    border-color: green;
}
[data-mounted] {
    opacity: 1;
}
[data-removed] {
    opacity: 0;
}
[data-front] {
    z-index: 1;
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

See [Toast Primitive](../../primitive/toast/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
