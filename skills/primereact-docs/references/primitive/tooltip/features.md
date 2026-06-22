# Tooltip

An unstyled tooltip component with hover/focus triggers, delay management, and group transitions.

Build fully custom tooltips with complete control over layout and styling.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Tooltip } from 'primereact/tooltip';
import styles from './basic-demo.module.css';

const flights = [
    { from: 'IST', to: 'LHR', airline: 'Turkish Airlines', status: 'ON TIME', statusClass: 'onTime' as const },
    { from: 'IST', to: 'CDG', airline: 'Lufthansa', status: 'DELAYED', statusClass: 'delayed' as const },
    { from: 'IST', to: 'FRA', airline: 'Qatar Airways', status: 'BOARDING', statusClass: 'boarding' as const }
];

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Tooltip.Manager>
                <div className={styles.flightBar}>
                    {flights.map((flight) => (
                        <Tooltip.Root key={flight.to} openDelay={200} closeDelay={100}>
                            <Tooltip.Trigger className={styles.trigger}>
                                {flight.from} <ChevronRight className={styles.chevron} /> {flight.to}
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Positioner sideOffset={8}>
                                    <Tooltip.Popup className={styles.popup}>
                                        <Tooltip.Arrow className={styles.arrow} />
                                        {flight.airline} <span className={styles[flight.statusClass]}>{flight.status}</span>
                                    </Tooltip.Popup>
                                </Tooltip.Positioner>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    ))}
                </div>
            </Tooltip.Manager>
        </div>
    );
}
```

## Features

- Configurable `openDelay` and `closeDelay` for timing control
- `Manager` enables instant transitions when hovering between adjacent tooltips
- Interactive popup: hovering the tooltip content keeps it open by default
- Arrow element with automatic per-side positioning via CSS custom properties

## Usage

```tsx
import { Tooltip } from 'primereact/tooltip';
```

```tsx
<Tooltip.Manager>
    <Tooltip.Root>
        <Tooltip.Trigger></Tooltip.Trigger>
        <Tooltip.Portal>
            <Tooltip.Positioner>
                <Tooltip.Popup>
                    <Tooltip.Arrow />
                </Tooltip.Popup>
            </Tooltip.Positioner>
        </Tooltip.Portal>
    </Tooltip.Root>
</Tooltip.Manager>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Tooltip.Trigger as="div">...</Tooltip.Trigger>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Tooltip.Trigger>{(instance) => <span>{instance.tooltip?.state.open ? 'Active' : 'Idle'}</span>}</Tooltip.Trigger>
```

## Pass Through

**Pass Through example:**

```tsx
import { QuestionCircle } from '@primeicons/react';
import { Tooltip } from '@primereact/ui/tooltip';

export default function TooltipPTDemo() {
    return (
        <div className="flex flex-wrap flex-col items-center justify-center gap-2">
            <Tooltip.Manager>
                <Tooltip.Root>
                    <Tooltip.Trigger className="flex items-center justify-center size-8 rounded-md border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-900">
                        <QuestionCircle />
                    </Tooltip.Trigger>

                    <div
                        data-scope="tooltip"
                        data-part="popup"
                        className="w-56 bg-surface-900 dark:bg-surface-0 rounded-md"
                        data-slot="root"
                        data-id="pc__r_7v_"
                        data-instant=""
                        data-instant-type="dismiss"
                        style={{ '--placer-arrow-x': '112px', '--placer-arrow-y': '100%' } as React.CSSProperties}
                    >
                        <div
                            data-scope="tooltip"
                            data-part="arrow"
                            className="p-tooltip-arrow relative"
                            data-slot="root"
                            data-id="pc__r_81_"
                            data-side="top"
                            data-align="center"
                            data-instant="dismiss"
                            style={{ bottom: '0.25rem', transform: 'translateX(-50%) rotate(135deg)' }}
                        ></div>
                        <p className="text-sm px-2 pb-2 text-surface-0 dark:text-surface-900">
                            Hover or focus on the flight information to see the status.
                        </p>
                    </div>
                </Tooltip.Root>
            </Tooltip.Manager>
        </div>
    );
}
```

## API

### TooltipManager

> **API/props table for `TooltipManager` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TooltipManager` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TooltipRoot

> **API/props table for `TooltipRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                                   |
| -------------- | --------------------------------------- |
| `data-instant` | Instant transition type when applicable |

> **API/props table for `TooltipRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TooltipTrigger

> **API/props table for `TooltipTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                        |
| ----------------- | ---------------------------- |
| `data-popup-open` | Present when tooltip is open |

> **API/props table for `TooltipTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TooltipPortal

> **API/props table for `TooltipPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TooltipPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TooltipPositioner

> **API/props table for `TooltipPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-open`  | Present when tooltip is open                               |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align` | `"start"` \| `"center"` \| `"end"` — alignment             |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                | Description                              |
| --------------------------- | ---------------------------------------- |
| `--available-height`        | Available vertical space in pixels       |
| `--available-width`         | Available horizontal space in pixels     |
| `--transform-origin`        | Computed transform origin for animations |
| `--positioner-anchor-width` | Width of the anchor/trigger element      |

> **API/props table for `TooltipPositioner` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TooltipPopup

> **API/props table for `TooltipPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute           | Value                                     |
| ------------------- | ----------------------------------------- |
| `data-open`         | Present when tooltip is visible           |
| `data-instant`      | Present when an instant transition occurs |
| `data-instant-type` | `'delay'`, `'focus'`, or `'dismiss'`      |

> **API/props table for `TooltipPopup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TooltipArrow

> **API/props table for `TooltipArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| `data-open`    | Present when tooltip is visible                            |
| `data-instant` | Instant transition type when applicable                    |
| `data-side`    | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align`   | `"start"` \| `"center"` \| `"end"` — alignment             |

**CSS Custom Properties**

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

> **API/props table for `TooltipArrow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Tooltip popup content should be descriptive and associated with a meaningful trigger label.

### Keyboard Support

| Key      | Function                                                          |
| -------- | ----------------------------------------------------------------- |
| `tab`    | Focuses the trigger, opening the tooltip with instant transition. |
| `escape` | Closes the tooltip and returns focus to the trigger.              |
