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
    top: { bottom: '-0.25rem', left: 'var(--px-placer-arrow-x)', transform: 'translateX(-50%) rotate(225deg)' },
    bottom: { top: '-0.25rem', left: 'var(--px-placer-arrow-x)', transform: 'translateX(-50%) rotate(45deg)' },
    left: { right: '-0.25rem', top: 'var(--px-placer-arrow-y)', transform: 'translateY(-50%) rotate(315deg)' },
    right: { left: '-0.25rem', top: 'var(--px-placer-arrow-y)', transform: 'translateY(-50%) rotate(135deg)' }
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

```tsx
import { usePopover } from '@primereact/headless/popover';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import { createPortal } from 'react-dom';
```

```tsx
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
```

`usePopover` manages open/close state, outside click dismissal, escape key handling, and optional focus trapping. Use [usePositioner](positioner.md) for anchor-relative positioning and [usePortal](portal.md) with `createPortal` for body portaling. See [Primitive](../../primitive/components/popover.md) for a component-based API.

## Features

- **Open/close lifecycle**, controlled or uncontrolled state with outside-click dismissal and escape-key handling
- **Focus management**, optional focus trap plus `autoFocus` control over initial focus when the popup mounts
- **Anchor refs**, exposes `state.anchorElement`, `state.positionerElement`, and `state.arrowElement` for wiring into `usePositioner`
- **Arrow support**, `arrowProps` pairs with the positioner's CSS custom properties for per-side arrow placement
- **Portal-friendly**, `state.open` drives conditional rendering of portaled content without managing mount state yourself
- **Imperative controls**, `setOpen(open, event)` for programmatic toggling tied to a source event

## Working with callbacks

### Controlled open state

Pass `open` and `onOpenChange` to drive visibility from external state.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const popover = usePopover({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.open)
});

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
```

### Composing with usePositioner

`usePopover` manages state and element refs but not positioning. Feed the element refs from `state` into `usePositioner` to place the popup relative to the trigger.

```tsx
const { triggerProps, popupProps, positionerProps, state } = usePopover();

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    side: 'bottom',
    flip: true,
    shift: true
});
```

### Rendering into a portal

Gate the portal content on both `portal.state.mounted` and `state.open` so the popup renders only on the client and only when visible.

```tsx
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

### Arrow positioning

Spread `arrowProps` on an arrow element and pass `state.arrowElement` to the positioner. The positioner writes `--placer-arrow-x` and `--placer-arrow-y` for you to consume in CSS.

```tsx
<div {...popupProps}>
    <div {...arrowProps} />
</div>
```

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
    left: var(--px-placer-arrow-x);
    transform: translateX(-50%) rotate(45deg);
}
[data-part='arrow'][data-side='top'] {
    bottom: -0.25rem;
    left: var(--px-placer-arrow-x);
    transform: translateX(-50%) rotate(225deg);
}
```

### Modal-like focus trap

Enable `trapped` for popovers that should behave like a mini-dialog, keeping keyboard focus inside until dismissed.

```tsx
const popover = usePopover({ trapped: true });
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope     | Part      | States                     |
| --------- | --------- | -------------------------- |
| `popover` | `trigger` | `data-positioner-open`     |
| `popover` | `popup`   | `data-open`, `data-closed` |
| `popover` | `arrow`   | `data-side`                |

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

Escape dismisses the popover, focus moves into the content when opened, and Tab cycles focusable children. See [Primitive](../../primitive/components/popover.md#accessibility) for full WAI-ARIA compliance details.
