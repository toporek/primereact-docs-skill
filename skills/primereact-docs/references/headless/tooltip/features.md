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
    top: { bottom: '-0.25rem', left: 'var(--placer-arrow-x)', transform: 'translateX(-50%) rotate(-45deg)' },
    bottom: { top: '-0.25rem', left: 'var(--placer-arrow-x)', transform: 'translateX(-50%) rotate(135deg)' },
    left: { right: '-0.25rem', top: 'var(--placer-arrow-y)', transform: 'translateY(-50%) rotate(-135deg)' },
    right: { left: '-0.25rem', top: 'var(--placer-arrow-y)', transform: 'translateY(-50%) rotate(45deg)' }
};

const flights = [
    { from: 'IST', to: 'LHR', airline: 'Turkish Airlines', status: 'ON TIME', color: 'bg-green-600 text-white' },
    { from: 'IST', to: 'CDG', airline: 'Lufthansa', status: 'DELAYED', color: 'bg-primary text-primary-contrast' },
    { from: 'IST', to: 'FRA', airline: 'Qatar Airways', status: 'BOARDING', color: 'bg-amber-600 text-white' }
];

function FlightTooltip({ flight, manager }: { flight: (typeof flights)[0]; manager: ReturnType<typeof useTooltipManager> }) {
    const { triggerProps, popupProps, arrowProps, positionerProps, state, presence } = useTooltip({
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
            {presence.present &&
                createPortal(
                    <div {...positionerProps}>
                        <div
                            {...popupProps}
                            className="relative bg-surface-950 dark:bg-surface-0 text-surface-0 dark:text-surface-950 rounded-lg px-2.5 py-1.5 text-sm font-medium flex items-center gap-1 shadow-md transition-[opacity,scale] duration-200 origin-[var(--transform-origin)] opacity-0 scale-95 data-[open]:opacity-100 data-[open]:scale-100 data-[instant]:!duration-0"
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

```tsx showLineNumbers {2-3,6-7,9-15,20,22,24-26}
import { usePositioner } from '@primereact/headless/positioner';
import { useTooltip } from '@primereact/headless/tooltip';
import { useTooltipManager } from '@primereact/headless/tooltipmanager';
import { createPortal } from 'react-dom';

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

return (
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
                );
        }
    </>
)
```

`useTooltip` manages hover/focus open behavior with configurable delays. Use `useTooltipManager` to coordinate instant transitions between adjacent tooltips in a group — see [Primitive](../../primitive/tooltip/features.md) for a component-based API.

## Features

- `triggerProps`, `popupProps`, `arrowProps`, and `positionerProps` return spread-ready props including data attributes
- `presence.present` for conditional rendering with exit animation support
- `setAnchorRef`, `setPositionerRef`, and `setArrowRef` callbacks for element registration
- `state.instantType` tracks transition mode: `'delay'`, `'focus'`, `'dismiss'`, or `undefined`

## Behavior

### Open Delay

Set `openDelay` to control the delay before showing on hover. Defaults to `600`.

```tsx
const tooltip = useTooltip({ openDelay: 300 });
```

### Close Delay

Set `closeDelay` to control the delay before hiding on pointer leave. Defaults to `100`.

```tsx
const tooltip = useTooltip({ closeDelay: 200 });
```

### Interactive

Set `interactive` to `false` to close the tooltip as soon as the pointer leaves the trigger, ignoring hover over the popup. Defaults to `true`.

```tsx
const tooltip = useTooltip({ interactive: false });
```

### Disabled

Set `disabled` to prevent the tooltip from opening.

```tsx
const tooltip = useTooltip({ disabled: true });
```

### Manager Group Behavior

Wrap multiple tooltips with `useTooltipManager` to enable instant transitions when moving between adjacent tooltips. Set `timeout` on the manager to control the instant phase duration.

```tsx
const manager = useTooltipManager({ timeout: 400 });
const tooltip1 = useTooltip({ tooltipManager: manager });
const tooltip2 = useTooltip({ tooltipManager: manager });
```

### Controlled

Pass `open` and `onOpenChange` for controlled usage.

```tsx
const [isOpen, setIsOpen] = React.useState(false);

const tooltip = useTooltip({
    open: isOpen,
    onOpenChange: (e) => setIsOpen(e.open)
});
```

### Custom Styling with Data Attributes

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

> **API/props table for `useTooltip` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useTooltipManager

> **API/props table for `useTooltipManager` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Tooltip Primitive](../../primitive/tooltip/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
