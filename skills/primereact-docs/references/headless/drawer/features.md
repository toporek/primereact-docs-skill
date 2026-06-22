# Drawer

Headless hook for building slide-in panel overlays with focus trap, scroll lock, and dismissable backdrop.

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
    const { triggerProps, backdropProps, popupProps, closeProps, headerProps, rootProps, backdropMotionProps, state } = useDrawer();
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
        ...backdropMotionProps.motionProps,
        elementRef: state.backdropElement,
        visible: backdropMotionProps.visible,
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
                state.rendered &&
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

```tsx showLineNumbers {1-2,4,7,11-12,16-19}
import { useMotion } from '@primereact/core/motion';
import { useDrawer } from '@primereact/headless/drawer';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';

const { rootProps, triggerProps, backdropProps, popupProps, closeProps, headerProps, state } = useDrawer();
const portal = usePortal();

return (
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
            )}
    </div>
);
```

`useDrawer` manages open/close state, focus trapping, scroll locking, and dismissable backdrop behavior — see [Primitive](../../primitive/drawer/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects: `rootProps`, `triggerProps`, `backdropProps`, `popupProps`, `closeProps`, `headerProps`
- Combine with `usePortal` and `createPortal` for SSR-safe portal rendering
- Combine with `useMotion` for animated open/close transitions with automatic focus management
- `close()` imperative method to programmatically close the drawer
- `state.open` for conditional rendering

## Behavior

### Default Open

Set `defaultOpen` for initial visibility in uncontrolled mode.

```tsx
const drawer = useDrawer({ defaultOpen: true });
```

### Controlled

Pass `open` and `onOpenChange` for controlled usage.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const drawer = useDrawer({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.value)
});
```

### Dismissable

Set `dismissable` to `false` to prevent closing the drawer when clicking outside. Defaults to `true`.

```tsx
const drawer = useDrawer({ dismissable: false });
```

### Block Scroll

Set `blockScroll` to prevent body scrolling while the drawer is open.

```tsx
const drawer = useDrawer({ blockScroll: true });
```

### Z-Index Management

Use `baseZIndex` and `autoZIndex` to control layering. When `autoZIndex` is `true`, the drawer automatically manages its z-index relative to other overlays.

```tsx
const drawer = useDrawer({ baseZIndex: 1000, autoZIndex: true });
```

### Custom Styling with Data Attributes

`rootProps` includes `data-open`, `data-closed`, and `data-position` attributes for CSS-based styling.

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

See [Drawer Primitive](../../primitive/drawer/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
