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

```tsx
import { useMotion } from '@primereact/core/motion';
import { useDialog } from '@primereact/headless/dialog';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';
```

```tsx
const { rootProps, triggerProps, backdropProps, positionerProps, popupProps, closeProps, headerProps, contentProps, maximizableProps, state } = useDialog();
const portal = usePortal();

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
```

`useDialog` manages open/close state, focus trapping, dragging, scroll locking, and z-index layering. See [Primitive](../../primitive/components/dialog.md) for a component-based API.

## Features

- **Open/close lifecycle**, controlled or uncontrolled visibility with backdrop dismissal, escape handling, and return-focus on close
- **Focus management**, automatic focus trap that moves focus into the dialog on open and restores it to the trigger on close
- **Positioning and layout**, nine preset positions, `inside`/`outside` scroll behavior, and full-screen/maximizable rendering
- **Dragging**, opt-in drag support wired through the header element for repositioning the popup
- **Scroll and layering**, body scroll lock plus `baseZIndex`/`autoZIndex` coordination with other overlays
- **Imperative controls**, `close()` and `toggleMaximized()` for programmatic control alongside `state.open` and `state.maximized`

## Working with callbacks

### Controlled open state

Pass `open` and `onOpenChange` to drive visibility from external state.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const dialog = useDialog({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.value)
});
```

### Draggable header

Enable drag support and spread `headerProps` on the element that should initiate the drag.

```tsx
const dialog = useDialog({ draggable: true });

<div {...dialog.popupProps}>
    <div {...dialog.headerProps}>Drag me</div>
</div>;
```

### Outside vs inside scrolling

Switch `scrollBehavior` to `outside` when the entire dialog should scroll as one unit instead of only the content region.

```tsx
const dialog = useDialog({ scrollBehavior: 'outside' });
```

### Maximizable toggle

`toggleMaximized()` switches between normal and full-screen. Pair it with `state.maximized` to swap icons on the maximize button.

```tsx
const dialog = useDialog({ fullScreen: false });

<button {...dialog.maximizableProps} onClick={dialog.toggleMaximized}>
    {dialog.state.maximized ? <MinimizeIcon /> : <MaximizeIcon />}
</button>;
```

### Overlay layering

Combine `baseZIndex` with `autoZIndex` when stacking dialogs on top of other overlays so each new dialog renders above the previous one.

```tsx
const dialog = useDialog({ baseZIndex: 1000, autoZIndex: true });
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope    | Part          | States                                       |
| -------- | ------------- | -------------------------------------------- |
| `dialog` | `root`        | `data-open`, `data-closed`                   |
| `dialog` | `popup`       | `data-open`, `data-closed`, `data-maximized` |
| `dialog` | `positioner`  | `data-position`, `data-scroll-behavior`      |
| `dialog` | `maximizable` | `data-maximized`, `data-minimized`           |

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

Escape closes the dialog when closeOnEscape is enabled, Tab cycles focus inside the dialog via focus trap, and focus returns to the trigger on close. See [Primitive](../../primitive/components/dialog.md#accessibility) for full WAI-ARIA compliance details.
