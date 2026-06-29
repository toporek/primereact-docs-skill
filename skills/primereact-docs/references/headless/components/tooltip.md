# useTooltip

Hook that manages tooltip open state, hover/focus triggers, delay timing, and group transitions.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { usePositioner } from '@primereact/headless/positioner';
import { useTooltip } from '@primereact/headless/tooltip';
import { useTooltipManager } from '@primereact/headless/tooltipmanager';
import * as React from 'react';
import { createPortal } from 'react-dom';

const arrowStyles: Record<string, React.CSSProperties> = {
    top: { bottom: '-0.25rem', left: 'var(--px-placer-arrow-x)', transform: 'translateX(-50%) rotate(-45deg)' },
    bottom: { top: '-0.25rem', left: 'var(--px-placer-arrow-x)', transform: 'translateX(-50%) rotate(135deg)' },
    left: { right: '-0.25rem', top: 'var(--px-placer-arrow-y)', transform: 'translateY(-50%) rotate(-135deg)' },
    right: { left: '-0.25rem', top: 'var(--px-placer-arrow-y)', transform: 'translateY(-50%) rotate(45deg)' }
};

const flights = [
    { from: 'IST', to: 'LHR', airline: 'Turkish Airlines', status: 'ON TIME', color: 'bg-green-600 text-white' },
    { from: 'IST', to: 'CDG', airline: 'Lufthansa', status: 'DELAYED', color: 'bg-primary text-primary-contrast' },
    { from: 'IST', to: 'FRA', airline: 'Qatar Airways', status: 'BOARDING', color: 'bg-amber-600 text-white' }
];

function FlightTooltip({ flight, manager }: { flight: (typeof flights)[0]; manager: ReturnType<typeof useTooltipManager> }) {
    const { triggerProps, popupProps, arrowProps, positionerProps, state } = useTooltip({
        tooltipManager: manager,
        openDelay: 200,
        closeDelay: 100
    });

    const positioner = usePositioner({
        anchor: state.anchorElement,
        content: state.positionerElement,
        arrow: state.arrowElement,
        side: 'top',
        sideOffset: 8,
        flip: true,
        shift: true
    });

    const side = positioner.state.actualSide ?? 'top';

    return (
        <>
            <button
                {...triggerProps}
                className="px-2.5 flex items-center justify-center cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors bg-transparent border-none text-sm text-surface-700 dark:text-surface-0"
            >
                {flight.from} <ChevronRight className="w-3 h-3 mx-1 opacity-50" /> {flight.to}
            </button>
            {state.rendered &&
                createPortal(
                    <div {...positionerProps}>
                        <div
                            {...popupProps}
                            className="relative bg-surface-950 dark:bg-surface-0 text-surface-0 dark:text-surface-950 rounded-lg px-2.5 py-1.5 text-sm font-medium flex items-center gap-1 shadow-md transition-[opacity,scale] duration-200 origin-[var(--px-transform-origin)] opacity-0 scale-95 data-[open]:opacity-100 data-[open]:scale-100 data-[instant]:!duration-0"
                        >
                            <div
                                {...arrowProps}
                                className="absolute w-2 h-2 bg-surface-900 dark:bg-surface-50 [clip-path:polygon(0_100%,0_0,100%_100%)]"
                                style={arrowStyles[side]}
                            />
                            {flight.airline}{' '}
                            <span
                                className={`-mr-1 flex items-center justify-center leading-none px-1.5 py-1 rounded-sm text-xs font-medium ${flight.color}`}
                            >
                                {flight.status}
                            </span>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}

export default function BasicDemo() {
    const manager = useTooltipManager();

    return (
        <div className="flex justify-center">
            <div className="flex text-sm font-medium border border-surface-200 dark:border-surface-700 rounded-lg h-8 divide-x divide-surface-200 dark:divide-surface-700 [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg overflow-hidden">
                {flights.map((flight) => (
                    <FlightTooltip key={flight.to} flight={flight} manager={manager} />
                ))}
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { usePositioner } from '@primereact/headless/positioner';
import { useTooltip } from '@primereact/headless/tooltip';
import { useTooltipManager } from '@primereact/headless/tooltipmanager';
import { createPortal } from 'react-dom';
```

```tsx
const manager = useTooltipManager();
const { triggerProps, popupProps, arrowProps, positionerProps, setAnchorRef, setPositionerRef, setArrowRef, state, presence } = useTooltip({ tooltipManager: manager });

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    arrow: state.arrowElement,
    side: 'top',
    sideOffset: 8,
    flip: true
});
```

`useTooltip` manages hover/focus open behavior with configurable delays. Use `useTooltipManager` to coordinate instant transitions between adjacent tooltips in a group. See [Primitive](../../primitive/components/tooltip.md) for a component-based API.

## Features

- **Hover/focus open**, opens on pointer enter or keyboard focus, closes on leave/blur with configurable `openDelay` and `closeDelay`
- **Presence tracking**, `presence.present` and `presence.ref` keep the popup mounted through exit animations
- **Interactive hover**, allows the pointer to enter the popup without dismissing, configurable via the `interactive` prop
- **Group coordination**, `useTooltipManager` skips the open delay when moving between adjacent tooltips for an "instant" transition
- **Transition awareness**, `state.instantType` reports the current mode (`'delay'`, `'focus'`, `'dismiss'`, or `undefined`) for styling
- **Ref callbacks**, `setAnchorRef`, `setPositionerRef`, and `setArrowRef` register elements for positioning without manual ref merging

## Working with callbacks

### Controlled open state

Pass `open` and `onOpenChange` to drive visibility from external state, useful when pairing with custom triggers or analytics.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const tooltip = useTooltip({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.open)
});

<>
    <button {...triggerProps} ref={setAnchorRef}></button>;
    {
        presence.present &&
            createPortal(
                <div {...positionerProps} ref={setPositionerRef}>
                    <div {...popupProps} ref={presence.ref}>
                        <div {...arrowProps} ref={setArrowRef} />
                    </div>
                </div>,
                document.body
```

### Tuning open and close delays

Adjust `openDelay` and `closeDelay` to match the UI feel. Shorter delays feel snappier; longer delays avoid accidental opens.

```tsx
const tooltip = useTooltip({ openDelay: 300, closeDelay: 200 });
```

### Group transitions with a manager

Share a `useTooltipManager` instance so moving the pointer between siblings skips the open delay.

```tsx
const manager = useTooltipManager({ timeout: 400 });
const tooltip1 = useTooltip({ tooltipManager: manager });
const tooltip2 = useTooltip({ tooltipManager: manager });
```

### Non-interactive tooltip

Set `interactive` to `false` when the popup should dismiss immediately on pointer leave, even if the user moves over the tooltip content.

```tsx
const tooltip = useTooltip({ interactive: false });
```

### Composing with usePositioner

Register the element refs with the positioner so the tooltip flips and offsets against the trigger.

```tsx
const { state, setAnchorRef, setPositionerRef, setArrowRef } = useTooltip();

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    arrow: state.arrowElement,
    side: 'top',
    sideOffset: 8,
    flip: true
});
```

## Styling with data attributes

The hook exposes state through `data-*` attributes on each part. Use them as CSS selectors, no className juggling.

| Scope     | Part      | States                                     |
| --------- | --------- | ------------------------------------------ |
| `tooltip` | `trigger` | `data-popup-open`                          |
| `tooltip` | `popup`   | `data-open`, `data-closed`, `data-instant` |

```css
[data-scope='tooltip'][data-part='popup'][data-open] {
    opacity: 1;
    scale: 1;
}
[data-scope='tooltip'][data-part='popup'][data-instant] {
    transition-duration: 0s;
}
[data-scope='tooltip'][data-part='trigger'][data-popup-open] {
    background-color: light-dark(var(--p-surface-100), var(--p-surface-700));
}
```

## API

### useTooltip

> **`useTooltip` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/tooltip or the installed `@primereact/types`.

### useTooltipManager

> **`useTooltipManager` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/tooltip or the installed `@primereact/types`.

## Accessibility

Focus or hover shows the tooltip, Escape hides it, and content is announced via aria-describedby. See [Primitive](../../primitive/components/tooltip.md#accessibility) for full WAI-ARIA compliance details.
