# useDialog

Hook that manages dialog open/close state, focus trapping, dragging, scroll lock, and z-index layering.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { useMotion } from '@primereact/core/motion';
import { useDialog } from '@primereact/headless/dialog';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';

export default function BasicDemo() {
    const { triggerProps, backdropProps, positionerProps, popupProps, closeProps, headerProps, contentProps, rootProps, state } = useDialog();
    const portal = usePortal();

    const popupRef = React.useRef<HTMLDivElement>(null);
    const popupMotion = useMotion({
        name: 'p-dialog',
        appear: true,
        elementRef: popupRef,
        visible: state.open,
        enterFromClassName: 'opacity-0 scale-75',
        enterActiveClassName: 'transition-[opacity,transform] duration-150 ease-out',
        enterToClassName: 'opacity-100 scale-100',
        leaveFromClassName: 'opacity-100 scale-100',
        leaveActiveClassName: 'transition-[opacity,transform] duration-150 ease-out',
        leaveToClassName: 'opacity-0 scale-75'
    });

    const backdropRef = React.useRef<HTMLDivElement>(null);
    const backdropMotion = useMotion({
        elementRef: backdropRef,
        visible: state.open,
        enterFromClassName: 'opacity-0',
        enterActiveClassName: 'transition-opacity duration-150',
        enterToClassName: 'opacity-100',
        leaveFromClassName: 'opacity-100',
        leaveActiveClassName: 'transition-opacity duration-150',
        leaveToClassName: 'opacity-0'
    });

    return (
        <div {...rootProps} className="flex justify-center">
            <button
                {...triggerProps}
                className="px-4 py-2 bg-primary text-primary-contrast rounded-lg cursor-pointer font-medium text-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition hover:bg-primary-emphasis"
            >
                Edit Profile
            </button>

            {portal.state.mounted &&
                popupMotion.state.rendered &&
                createPortal(
                    <div className="fixed inset-0 z-1100">
                        {backdropMotion.state.rendered && <div {...backdropProps} ref={backdropRef} className="fixed inset-0 bg-black/50" />}
                        <div {...positionerProps} className="fixed inset-0 flex items-center justify-center p-8 pointer-events-none">
                            {popupMotion.state.rendered && (
                                <div
                                    {...popupProps}
                                    ref={popupRef}
                                    className="w-[28rem] max-w-[90vw] max-h-full bg-surface-0 dark:bg-surface-900 rounded-xl shadow-2xl flex flex-col border border-surface-200 dark:border-surface-700 pointer-events-auto"
                                >
                                    <div {...headerProps} className="flex items-center justify-between p-5">
                                        <span className="text-lg font-semibold">Edit Profile</span>
                                        <button
                                            {...closeProps}
                                            className="inline-flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                                        >
                                            <Times />
                                        </button>
                                    </div>
                                    <div {...contentProps} className="px-5 pb-5 flex flex-col gap-4 overflow-y-auto">
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="name" className="text-sm font-semibold">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                defaultValue="Amanda Miller"
                                                className="w-full px-3 py-2 border border-surface-200 dark:border-surface-700 rounded-lg bg-transparent text-sm focus:outline focus:outline-1 focus:outline-primary"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="username" className="text-sm font-semibold">
                                                Username
                                            </label>
                                            <input
                                                id="username"
                                                defaultValue="@amandamiller"
                                                className="w-full px-3 py-2 border border-surface-200 dark:border-surface-700 rounded-lg bg-transparent text-sm focus:outline focus:outline-1 focus:outline-primary"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="email" className="text-sm font-semibold">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                defaultValue="amanda@example.com"
                                                className="w-full px-3 py-2 border border-surface-200 dark:border-surface-700 rounded-lg bg-transparent text-sm focus:outline focus:outline-1 focus:outline-primary"
                                            />
                                        </div>
                                        <div className="flex justify-end gap-2 mt-2">
                                            <button
                                                {...closeProps}
                                                className="px-4 py-2 rounded-lg border border-surface-200 dark:border-surface-700 bg-transparent text-sm font-medium cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                {...closeProps}
                                                className="px-4 py-2 rounded-lg bg-primary text-primary-contrast text-sm font-medium cursor-pointer hover:bg-primary-emphasis focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1-2,4,7,11-12,16-20,22}
import { useMotion } from '@primereact/core/motion';
import { useDialog } from '@primereact/headless/dialog';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';

const { rootProps, triggerProps, backdropProps, positionerProps, popupProps, closeProps, headerProps, contentProps, maximizableProps, state } = useDialog();
const portal = usePortal();

return (
    <div {...rootProps}>
        <button {...triggerProps}></button>
        {portal.state.mounted &&
            createPortal(
                <>
                    <div {...backdropProps} />
                    <div {...positionerProps}>
                        <div {...popupProps}>
                            <div {...headerProps}>
                                <button {...maximizableProps}></button>
                                <button {...closeProps}></button>
                            </div>
                            <div {...contentProps}></div>
                        </div>
                    </div>
                </>,
                document.body
            )}
    </div>
);
```

`useDialog` manages open/close state, focus trapping, dragging, scroll locking, and z-index layering — see [Primitive](../../primitive/dialog/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects: `rootProps`, `triggerProps`, `backdropProps`, `positionerProps`, `popupProps`, `closeProps`, `headerProps`, `contentProps`, `maximizableProps`
- Combine with `usePortal` and `createPortal` for SSR-safe portal rendering
- Combine with `useMotion` for animated open/close transitions with automatic focus management
- Automatic focus trap: first focusable element receives focus on open, focus returns to trigger on close
- `close()` and `toggleMaximized()` imperative methods for programmatic control
- `state.open` and `state.maximized` for conditional rendering

## Behavior

### Default Open

Set `defaultOpen` for initial visibility in uncontrolled mode.

```tsx
const dialog = useDialog({ defaultOpen: true });
```

### Controlled

Pass `open` and `onOpenChange` for controlled usage.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const dialog = useDialog({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.value)
});
```

### Dismissable

Set `dismissable` to close the dialog when clicking the backdrop. Defaults to `true`.

```tsx
const dialog = useDialog({ dismissable: true });
```

### Block Scroll

Set `blockScroll` to prevent body scrolling while the dialog is open.

```tsx
const dialog = useDialog({ blockScroll: true });
```

### Draggable

Enable drag support via the `draggable` prop. Dragging is initiated via `headerProps.onMouseDown`. Disabled by default.

```tsx
const dialog = useDialog({ draggable: true });
```

### Position

Use `position` to place the dialog at a specific viewport location. Defaults to `center`.

```tsx
const dialog = useDialog({ position: 'top' });
```

Available values: `center`, `top`, `bottom`, `left`, `right`, `topleft`, `topright`, `bottomleft`, `bottomright`.

### Scroll Behavior

Use `scrollBehavior` to control how long content scrolls. When set to `inside` (default), the dialog content area scrolls. When set to `outside`, the positioner scrolls allowing the entire dialog to move as a single unit.

```tsx
const dialog = useDialog({ scrollBehavior: 'outside' });
```

### Full Screen

Set `fullScreen` to open the dialog in maximized mode.

```tsx
const dialog = useDialog({ fullScreen: true });
```

### Z-Index Management

Use `baseZIndex` and `autoZIndex` to control layering. When `autoZIndex` is `true`, the dialog automatically manages its z-index relative to other overlays.

```tsx
const dialog = useDialog({ baseZIndex: 1000, autoZIndex: true });
```

### Using `close` and `toggleMaximized`

The hook exposes imperative methods for programmatic control.

```tsx
const dialog = useDialog();

// Programmatically close the dialog
dialog.close();

// Toggle maximized state
dialog.toggleMaximized();
```

### Custom Styling with Data Attributes

`positionerProps` includes `data-position` and `data-scroll-behavior` attributes. `rootProps` and `popupProps` include `data-open`, `data-closed`, and `data-maximized` attributes for CSS-based styling.

```css
[data-scope='dialog'][data-part='positioner'] {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

[data-scope='dialog'][data-part='positioner'][data-position='top'] {
    align-items: flex-start;
}

[data-scope='dialog'][data-part='positioner'][data-scroll-behavior='outside'] {
    overflow: auto;
    align-items: flex-start;
}

[data-scope='dialog'][data-part='popup'][data-maximized] {
    width: 100vw;
    height: 100vh;
}
```

`maximizableProps` includes `data-maximized` and `data-minimized` attributes for toggling icon visibility.

```css
[data-scope='dialog'][data-part='maximizable'][data-maximized] .maximize-icon {
    display: none;
}
[data-scope='dialog'][data-part='maximizable'][data-minimized] .minimize-icon {
    display: none;
}
```

## API

### useDialog

> **API/props table for `useDialog` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Dialog Primitive](../../primitive/dialog/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
