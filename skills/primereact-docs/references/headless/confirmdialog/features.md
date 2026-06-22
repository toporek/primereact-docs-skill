# ConfirmDialog

Headless hook for building confirmation dialog overlays with icon, message, and action button support.

```tsx
'use client';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Times } from '@primeicons/react/times';
import { useMotion } from '@primereact/core/motion';
import { useConfirmDialog } from '@primereact/headless/confirmdialog';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';

export default function BasicDemo() {
    const { triggerProps, backdropProps, backdropMotionProps, popupProps, closeProps, headerProps, contentProps, rootProps, state } =
        useConfirmDialog();
    const portal = usePortal();

    const popupRef = React.useRef<HTMLDivElement>(null);
    const popupMotion = useMotion({
        name: 'p-confirmdialog',
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

    const backdropMotion = useMotion({
        ...backdropMotionProps.motionProps,
        visible: backdropMotionProps.visible,
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
                className="px-4 py-2 border border-surface-200 dark:border-surface-700 bg-transparent rounded-lg cursor-pointer font-medium text-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition hover:bg-surface-50 dark:hover:bg-surface-800"
            >
                Save
            </button>

            {portal.state.mounted &&
                popupMotion.state.rendered &&
                createPortal(
                    <div className="fixed inset-0 z-1100">
                        {backdropMotion.state.rendered && <div {...backdropProps} className="fixed inset-0 bg-black/50" />}
                        {popupMotion.state.rendered && (
                            <div
                                {...popupProps}
                                ref={popupRef}
                                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] max-w-[90vw] bg-surface-0 dark:bg-surface-900 rounded-xl shadow-2xl flex flex-col border border-surface-200 dark:border-surface-700 z-50"
                            >
                                <div {...headerProps} className="flex items-center justify-between p-5">
                                    <span className="text-lg font-semibold">Confirm</span>
                                    <button
                                        {...closeProps}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
                                    >
                                        <Times />
                                    </button>
                                </div>
                                <div {...contentProps} className="px-5 pb-5 flex items-center gap-4">
                                    <ExclamationTriangle className="w-8! h-8! text-amber-500 shrink-0" />
                                    <span className="text-sm text-surface-600 dark:text-surface-300">Are you sure you want to proceed?</span>
                                </div>
                                <div className="px-5 pb-5 flex justify-end gap-2">
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
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>,
                    document.body
                )}
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1-2,4,7,11-12,16-19}
import { useMotion } from '@primereact/core/motion';
import { useConfirmDialog } from '@primereact/headless/confirmdialog';
import { usePortal } from '@primereact/headless/portal';
import * as React from 'react';
import { createPortal } from 'react-dom';

const { rootProps, triggerProps, backdropProps, positionerProps, popupProps, closeProps, headerProps, contentProps } = useConfirmDialog();
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
                                <button {...closeProps}></button>
                            </div>
                            <div {...contentProps}>...</div>
                        </div>
                    </div>
                </>,
                document.body
            )}
    </div>
);
```

`useConfirmDialog` extends `useDialog` with a confirmation-oriented API — see [Primitive](../../primitive/confirmdialog/features.md) for a component-based API.

## Features

- `triggerProps`, `backdropProps`, `positionerProps`, `popupProps`, `closeProps`, `headerProps`, and `contentProps` return spread-ready props including ARIA attributes
- Combine with `usePortal` and `createPortal` for SSR-safe portal rendering
- Combine with `useMotion` for animated transitions with automatic focus management and keyboard handling
- `close()` imperative method to programmatically close the dialog

## Behavior

### Default Open

Set `defaultOpen` for initial visibility in uncontrolled mode.

```tsx
const confirmdialog = useConfirmDialog({ defaultOpen: true });
```

### Controlled

Pass `open` and `onOpenChange` for controlled usage.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const confirmdialog = useConfirmDialog({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.value)
});
```

### Position

Use the `position` prop to place the dialog at a specific screen location.

```tsx
const confirmdialog = useConfirmDialog({ position: 'top' });
```

### Dismissable

Set `dismissable` to close the dialog when clicking the backdrop. Defaults to `true`.

```tsx
const confirmdialog = useConfirmDialog({ dismissable: true });
```

### Block Scroll

Set `blockScroll` to prevent body scrolling while the dialog is open.

```tsx
const confirmdialog = useConfirmDialog({ blockScroll: true });
```

### Z-Index Management

Use `baseZIndex` and `autoZIndex` to control layering.

```tsx
const confirmdialog = useConfirmDialog({ baseZIndex: 1000, autoZIndex: true });
```

### Custom Styling with Data Attributes

`positionerProps` includes `data-position` and `data-scroll-behavior` attributes for CSS-based styling.

```css
[data-scope='confirmdialog'][data-part='positioner'] {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

[data-scope='confirmdialog'][data-part='positioner'][data-position='top'] {
    align-items: flex-start;
}
```

## API

### useConfirmDialog

> **API/props table for `useConfirmDialog` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [ConfirmDialog Primitive](../../primitive/confirmdialog/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
