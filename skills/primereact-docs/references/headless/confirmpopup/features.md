# useConfirmPopup

Hook that manages confirm popup state, outside click dismissal, escape key handling, and focus management.

```tsx
'use client';
import { ExclemationCircle } from '@primeicons/react/exclemation-circle';
import { useConfirmPopup } from '@primereact/headless/confirmpopup';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import * as React from 'react';
import { createPortal } from 'react-dom';

const arrowPositionStyles: Record<string, React.CSSProperties> = {
    top: { bottom: '-0.25rem', left: 'var(--placer-arrow-x)', transform: 'translateX(-50%) rotate(225deg)' },
    bottom: { top: '-0.25rem', left: 'var(--placer-arrow-x)', transform: 'translateX(-50%) rotate(45deg)' },
    left: { right: '-0.25rem', top: 'var(--placer-arrow-y)', transform: 'translateY(-50%) rotate(315deg)' },
    right: { left: '-0.25rem', top: 'var(--placer-arrow-y)', transform: 'translateY(-50%) rotate(135deg)' }
};

export default function BasicDemo() {
    const { triggerProps, popupProps, positionerProps, closeProps, arrowProps, state } = useConfirmPopup();
    const portal = usePortal();

    const positioner = usePositioner({
        anchor: state.anchorElement,
        content: state.positionerElement,
        arrow: state.arrowElement,
        side: 'bottom',
        sideOffset: 12,
        flip: true,
        shift: true
    });

    const side = positioner.state.actualSide ?? 'bottom';

    return (
        <div className="flex justify-center">
            <button
                {...triggerProps}
                className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-surface-700 dark:text-surface-0 bg-transparent border border-surface-200 dark:border-surface-700 rounded-lg cursor-pointer select-none transition-colors hover:bg-surface-50 dark:hover:bg-surface-800 focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
                Confirm
            </button>
            {portal.state.mounted &&
                state.open &&
                createPortal(
                    <div {...positionerProps}>
                        <div
                            {...popupProps}
                            className="bg-surface-0 dark:bg-surface-900 rounded-xl shadow-lg border border-surface-200 dark:border-surface-700 w-72 outline-none relative"
                        >
                            <div
                                {...arrowProps}
                                className="absolute w-2 h-2 bg-surface-0 dark:bg-surface-900 border-l border-t border-surface-200 dark:border-surface-700"
                                style={arrowPositionStyles[side]}
                            />
                            <div className="flex items-start gap-3 p-4">
                                <ExclemationCircle className="w-6! h-6! text-primary" />
                                <span className="text-sm text-surface-700 dark:text-surface-200">Are you sure you want to proceed?</span>
                            </div>
                            <div className="flex justify-end gap-2 px-4 pb-4">
                                <button
                                    {...closeProps}
                                    className="inline-flex items-center justify-center h-8 px-3 text-sm font-medium text-surface-600 dark:text-surface-300 bg-transparent border border-surface-200 dark:border-surface-700 rounded-md cursor-pointer select-none transition-colors hover:bg-surface-50 dark:hover:bg-surface-800 focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1"
                                >
                                    Cancel
                                </button>
                                <button
                                    {...closeProps}
                                    className="inline-flex items-center justify-center h-8 px-3 text-sm font-medium text-primary-contrast bg-primary rounded-md cursor-pointer select-none transition-colors hover:bg-primary-emphasis focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,6,9-14,19,22,24-25,27-28}
import { useConfirmPopup } from '@primereact/headless/confirmpopup';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import { createPortal } from 'react-dom';

const { triggerProps, popupProps, positionerProps, closeProps, state, popover } = useConfirmPopup();
const portal = usePortal();

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    arrow: state.arrowElement,
    side: 'bottom',
    sideOffset: 12
});

return (
    <>
        <button {...triggerProps}></button>;
        {
            portal.state.mounted &&
                state.open &&
                createPortal(
                <div {...positionerProps} ref={popover?.setPositionerRef}>
                    <div {...popupProps} ref={popover?.setPopupRef}>
                        <span></span>
                        <button {...closeProps}></button>
                        <button {...closeProps}></button>
                    </div>
                </div>,
                document.body
            );
        }
    </>
)
```

`useConfirmPopup` wraps `usePopover` with an `alertdialog` role and a `close()` method for confirm/cancel actions. Use [usePositioner](../positioner/features.md) for anchor-relative positioning and [usePortal](../portal/features.md) with `createPortal` for body portaling — see [Primitive](../../primitive/confirmpopup/features.md) for a component-based API.

## Features

- `popupProps` includes `role="alertdialog"` and `data-open`/`data-closed` attributes automatically
- `closeProps` returns spread-ready click handler for action buttons
- `close()` method for imperative dismissal
- Inherits popover behavior: outside click dismissal, escape key handling, and optional focus trapping

## Behavior

### Default Open

Set `defaultOpen` for uncontrolled confirm popup state.

```tsx
const confirmpopup = useConfirmPopup({ defaultOpen: true });
```

### Controlled

Pass `open` and `onOpenChange` for controlled usage.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const confirmpopup = useConfirmPopup({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.open)
});
```

### Close on Escape

Set `closeOnEscape` to close the confirm popup when the Escape key is pressed. Enabled by default.

```tsx
const confirmpopup = useConfirmPopup({ closeOnEscape: true });
```

### Custom Styling with Data Attributes

```css
[data-scope='popover'][data-part='popup'][data-open] {
    opacity: 1;
}
[data-scope='popover'][data-part='trigger'][data-open] {
    background-color: light-dark(var(--p-surface-100), var(--p-surface-700));
}
```

## API

### useConfirmPopup

> **API/props table for `useConfirmPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [ConfirmPopup Primitive](../../primitive/confirmpopup/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
