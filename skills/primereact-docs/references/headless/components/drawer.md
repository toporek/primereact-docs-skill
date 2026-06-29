# useDrawer

Hook that manages slide-in panel overlays with focus trap, scroll lock, and dismissable backdrop.

```tsx
'use client';
import { Bars } from '@primeicons/react/bars';
import { Times } from '@primeicons/react/times';
import { useMotion } from '@primereact/core/motion';
import { useDrawer } from '@primereact/headless/drawer';
import { usePortal } from '@primereact/headless/portal';
import { createPortal } from 'react-dom';

const navItems = [
    { icon: 'pi pi-objects-column', label: 'Dashboard' },
    { icon: 'pi pi-inbox', label: 'Inbox' },
    { icon: 'pi pi-calendar', label: 'Calendar' },
    { icon: 'pi pi-chart-bar', label: 'Analytics' }
];

export default function BasicDemo() {
    const { triggerProps, backdropProps, popupProps, closeProps, headerProps, rootProps, state } = useDrawer();
    const portal = usePortal();

    const popupMotion = useMotion({
        name: 'p-drawer',
        appear: true,
        elementRef: state.popupElement,
        visible: state.open,
        enterFromClassName: '-translate-x-full',
        enterActiveClassName: 'transition-transform duration-200',
        enterToClassName: 'translate-x-0',
        leaveFromClassName: 'translate-x-0',
        leaveActiveClassName: 'transition-transform duration-200',
        leaveToClassName: '-translate-x-full'
    });

    const backdropMotion = useMotion({
        elementRef: state.backdropElement,
        visible: state.open,
        enterFromClassName: 'opacity-0',
        enterActiveClassName: 'transition-opacity duration-200',
        enterToClassName: 'opacity-100',
        leaveFromClassName: 'opacity-100',
        leaveActiveClassName: 'transition-opacity duration-200',
        leaveToClassName: 'opacity-0'
    });

    return (
        <div {...rootProps} className="flex justify-center">
            <button
                {...triggerProps}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-surface bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
            >
                <Bars />
            </button>

            {portal.state.mounted &&
                popupMotion.state.rendered &&
                createPortal(
                    <>
                        {backdropMotion.state.rendered && <div {...backdropProps} className="fixed inset-0 bg-black/50" />}
                        {popupMotion.state.rendered && (
                            <>
                                <div
                                    {...popupProps}
                                    className="fixed top-0 left-0 h-full w-80 bg-surface-0 dark:bg-surface-900 shadow-2xl flex flex-col"
                                >
                                    <div {...headerProps} className="flex items-center justify-between p-4 border-b border-surface">
                                        <span className="text-lg font-semibold">Navigation</span>
                                        <button
                                            {...closeProps}
                                            className="inline-flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                                        >
                                            <Times />
                                        </button>
                                    </div>
                                    <nav className="flex-1 p-3">
                                        <ul className="list-none m-0 p-0">
                                            {navItems.map((item) => (
                                                <li key={item.label}>
                                                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 transition text-sm font-medium">
                                                        <i className={`${item.icon} text-base`} />
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </>
                        )}
                    </>,
                    document.body
                )}
        </div>
    );
}

```

## Usage

```tsx
import { useMotion } from '@primereact/core/motion';
import { useDrawer } from '@primereact/headless/drawer';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';
```

```tsx
const { rootProps, triggerProps, backdropProps, popupProps, closeProps, headerProps, state } = useDrawer();
const portal = usePortal();

<div {...rootProps}>
    <button {...triggerProps}></button>
    {portal.state.mounted &&
        createPortal(
            <>
                <div {...backdropProps} />
                <div {...popupProps}>
                    <div {...headerProps}>
                        <button {...closeProps}></button>
                    </div>
                    ...
                </div>
            </>,
            document.body
```

`useDrawer` manages open/close state, focus trapping, scroll locking, and dismissable backdrop behavior. See [Primitive](../../primitive/components/drawer.md) for a component-based API.

## Features

- **Open/close lifecycle**, controlled or uncontrolled visibility with dismissable backdrop and escape handling
- **Focus management**, focus trap inside the panel while open, with automatic return-focus to the trigger on close
- **Positioning**, slides in from left, right, top, or bottom, exposed as a `data-position` attribute on the root
- **Scroll and layering**, body scroll lock plus `baseZIndex`/`autoZIndex` to stack with other overlays
- **Portal-ready**, designed to pair with `usePortal` and `createPortal` for SSR-safe body portaling
- **Imperative controls**, `close()` method and `state.open` flag for programmatic control and conditional rendering

## Working with callbacks

### Controlled open state

Pass `open` and `onOpenChange` to drive visibility from external state.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const drawer = useDrawer({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.value)
});
```

### Animated transitions

Combine with `useMotion` so the drawer and backdrop stay mounted through their exit transition before unmounting.

```tsx
const drawer = useDrawer();
const motion = useMotion({ open: drawer.state.open });

{
    motion.present && (
        <div {...drawer.popupProps} ref={motion.ref}>
            ...
        </div>
    );
}
```

### Non-dismissable drawer

Force an explicit close action by disabling backdrop dismissal, useful during unsaved work.

```tsx
const drawer = useDrawer({ dismissable: false });
```

### Stacking with other overlays

Use `autoZIndex` with a `baseZIndex` when the drawer must layer above dialogs or dropdowns.

```tsx
const drawer = useDrawer({ baseZIndex: 1100, autoZIndex: true });
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope    | Part    | States                                      |
| -------- | ------- | ------------------------------------------- |
| `drawer` | `root`  | `data-open`, `data-closed`, `data-position` |
| `drawer` | `popup` | `data-open`, `data-closed`                  |

```css
[data-scope='drawer'][data-part='root'][data-open] {
    opacity: 1;
}
[data-scope='drawer'][data-part='root'][data-closed] {
    opacity: 0;
}
[data-scope='drawer'][data-part='root'][data-position='right'] {
    right: 0;
    left: auto;
}
```

## API

### useDrawer

> **API/props table for `useDrawer` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Escape closes the drawer, focus is trapped inside while open, and focus returns to the trigger on dismiss. See [Primitive](../../primitive/components/drawer.md#accessibility) for full WAI-ARIA compliance details.
