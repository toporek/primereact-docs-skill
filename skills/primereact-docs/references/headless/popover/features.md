# usePopover

Hook that manages popover open state, outside click dismissal, escape key handling, and focus management.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { usePopover } from '@primereact/headless/popover';
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

const team = [
    { initials: 'AK', name: 'Alex Kim' },
    { initials: 'MR', name: 'Maya Ross' },
    { initials: 'SL', name: 'Sam Lee' }
];

export default function BasicDemo() {
    const { triggerProps, popupProps, positionerProps, arrowProps, closeProps, state } = usePopover();
    const portal = usePortal();
    const [copied, setCopied] = React.useState(false);

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

    const handleCopy = () => {
        navigator.clipboard.writeText('https://acme.io/project/design-system');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex justify-center min-h-48">
            <button
                {...triggerProps}
                className="inline-flex items-center justify-center h-8 px-3 text-sm font-medium text-surface-700 dark:text-surface-0 bg-transparent border border-surface-200 dark:border-surface-700 rounded-lg cursor-pointer select-none transition-colors hover:bg-surface-50 dark:hover:bg-surface-800 focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
                Share
            </button>
            {portal.state.mounted &&
                state.open &&
                createPortal(
                    <div {...positionerProps}>
                        <div
                            {...popupProps}
                            className="bg-surface-0 dark:bg-surface-900 rounded-xl shadow-lg border border-surface-200 dark:border-surface-700 w-80 outline-none relative"
                        >
                            <div
                                {...arrowProps}
                                className="absolute w-2 h-2 bg-surface-0 dark:bg-surface-900 border-l border-t border-surface-200 dark:border-surface-700"
                                style={arrowPositionStyles[side]}
                            />
                            <div className="flex items-center justify-between px-4 pt-4 pb-2">
                                <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-0 m-0">Share Project</h3>
                                <button
                                    {...closeProps}
                                    className="flex items-center justify-center w-7 h-7 rounded-md bg-transparent border-none text-surface-500 dark:text-surface-400 cursor-pointer transition-colors hover:bg-surface-100 dark:hover:bg-surface-800 focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1"
                                >
                                    <Times className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            <div className="px-4 pb-3">
                                <div className="flex gap-2">
                                    <input
                                        ref={(el) => {
                                            if (el) {
                                                el.focus({ preventScroll: true });
                                                el.select();
                                            }
                                        }}
                                        type="text"
                                        readOnly
                                        value="https://acme.io/project/design-system"
                                        className="flex-1 min-w-0 px-3 py-1.5 text-sm bg-transparent text-surface-700 dark:text-surface-0 border border-surface-200 dark:border-surface-700 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    />
                                    <button
                                        onClick={handleCopy}
                                        className="inline-flex items-center justify-center gap-1.5 min-w-24 px-3 py-1.5 text-sm font-medium rounded-md border-none cursor-pointer select-none transition-colors bg-primary text-primary-contrast hover:bg-primary-emphasis focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-3.5 h-3.5" /> Copied!
                                            </>
                                        ) : (
                                            'Copy'
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="px-4 pb-3">
                                <p className="text-xs font-medium text-surface-500 dark:text-surface-400 mt-0 mb-2">Team Members</p>
                                <div className="flex items-center gap-2">
                                    {team.map((member) => (
                                        <div
                                            key={member.initials}
                                            title={member.name}
                                            className="w-8 h-8 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center"
                                        >
                                            {member.initials}
                                        </div>
                                    ))}
                                    <button className="w-8 h-8 rounded-full border border-dashed border-surface-300 dark:border-surface-600 bg-transparent text-surface-400 dark:text-surface-500 text-xs cursor-pointer flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <p className="text-xs text-surface-400 dark:text-surface-500 m-0">Anyone with the link can view this project.</p>
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

```tsx showLineNumbers {1,6,9-15,20,23,25-28}
import { usePopover } from '@primereact/headless/popover';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import { createPortal } from 'react-dom';

const { triggerProps, popupProps, positionerProps, arrowProps, closeProps, state } = usePopover();
const portal = usePortal();

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    arrow: state.arrowElement,
    side: 'bottom',
    flip: true,
    shift: true
});

return (
    <>
        <button {...triggerProps}></button>;
        {
            portal.state.mounted &&
                state.open &&
                createPortal(
                    <div {...positionerProps}>
                        <div {...popupProps}>
                            <div {...arrowProps} />
                            <button {...closeProps}></button>
                        </div>
                    </div>,
                    document.body
                );
        }
    </>
);
```

`usePopover` manages open/close state, outside click dismissal, escape key handling, and optional focus trapping. Use [usePositioner](../positioner/features.md) for anchor-relative positioning and [usePortal](../portal/features.md) with `createPortal` for body portaling — see [Primitive](../../primitive/popover/features.md) for a component-based API.

## Features

- `triggerProps`, `popupProps`, `positionerProps`, `closeProps`, and `arrowProps` return spread-ready props including `ref` callbacks for each element
- `state.open` for conditional rendering of the portal content
- `setOpen(open, event)` for imperative open/close control
- Optional focus trapping with `trapped` prop for modal-like behavior

## Behavior

### Portal Rendering

`usePopover` manages open state and element refs but does not handle DOM portaling. Use [usePortal](../portal/features.md) to detect mount state and `createPortal` from `react-dom` to render into `document.body`.

```tsx
import { usePortal } from '@primereact/headless/portal';
import { createPortal } from 'react-dom';

const portal = usePortal();

{
    portal.state.mounted &&
        state.open &&
        createPortal(
            <div {...positionerProps}>
                <div {...popupProps}>...</div>
            </div>,
            document.body
        );
}
```

### Arrow

Spread `arrowProps` on an element inside the popup and pass `state.arrowElement` to [usePositioner](../positioner/features.md). The positioner sets CSS custom properties (`--placer-arrow-x`, `--placer-arrow-y`) on the arrow for positioning per side.

```tsx
const { arrowProps, state } = usePopover();

usePositioner({ anchor: state.anchorElement, content: state.positionerElement, arrow: state.arrowElement });

<div {...popupProps}>
    <div {...arrowProps} />
</div>;
```

Style each side using `positioner.state.actualSide`:

```css
[data-scope='popover'][data-part='arrow'] {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-left: 1px solid var(--p-content-border-color);
    border-top: 1px solid var(--p-content-border-color);
}
[data-part='arrow'][data-side='bottom'] {
    top: -0.25rem;
    left: var(--placer-arrow-x);
    transform: translateX(-50%) rotate(45deg);
}
[data-part='arrow'][data-side='top'] {
    bottom: -0.25rem;
    left: var(--placer-arrow-x);
    transform: translateX(-50%) rotate(225deg);
}
```

### Default Open

Set `defaultOpen` for uncontrolled popover state.

```tsx
const popover = usePopover({ defaultOpen: true });
```

### Controlled

Pass `open` and `onOpenChange` for controlled usage.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const popover = usePopover({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.open)
});
```

### Close on Escape

Set `closeOnEscape` to close the popover when the Escape key is pressed. Enabled by default.

```tsx
const popover = usePopover({ closeOnEscape: true });
```

### Focus Trapping

Set `trapped` to trap focus within the popover content, preventing focus from leaving until the popover is closed.

```tsx
const popover = usePopover({ trapped: true });
```

When `trapped` is enabled, render the focus trap sentinels using `focusTrap.firstHiddenElementRef` and `focusTrap.lastHiddenElementRef` around the popup content.

### Auto Focus

Set `autoFocus` to `false` to prevent automatically focusing the first focusable element when the popover opens.

```tsx
const popover = usePopover({ autoFocus: false });
```

### Custom Styling with Data Attributes

```css
[data-scope='popover'][data-part='trigger'][data-positioner-open] {
    background-color: light-dark(var(--p-surface-100), var(--p-surface-700));
}
[data-scope='popover'][data-part='popup'][data-open] {
    opacity: 1;
}
```

## API

### usePopover

> **API/props table for `usePopover` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Popover Primitive](../../primitive/popover/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
