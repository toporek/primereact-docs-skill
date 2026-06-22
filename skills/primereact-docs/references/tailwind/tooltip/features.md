# Tooltip

Tooltip is a component that displays a tooltip when the user hovers over an element.

```tsx
import { ChevronRight, QuestionCircle } from '@primeicons/react';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function Preview() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <TooltipManager>
                <div className="flex justify-center w-fit  text-sm font-medium border border-surface rounded-lg h-8 divide-x divide-(--p-content-border-color) [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg">
                    <Tooltip>
                        <TooltipTrigger className="px-2.5 flex items-center justify-center cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> LHR
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner sideOffset={8}>
                                <TooltipPopup className="flex gap-1">
                                    <TooltipArrow />
                                    Turkish Airlines{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none px-1.5 rounded-sm bg-green-600 text-green-50 text-xs font-medium font-mono">
                                        ON TIME
                                    </span>
                                </TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className="px-2.5 flex items-center justify-center cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> CDG
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner sideOffset={8}>
                                <TooltipPopup className="flex gap-1">
                                    <TooltipArrow />
                                    Lufthansa{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none px-1.5 rounded-sm bg-sky-600 text-sky-50 text-xs font-medium font-mono">
                                        DELAYED
                                    </span>
                                </TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className="px-2.5 flex items-center justify-center  cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> FRA
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner sideOffset={8}>
                                <TooltipPopup className="flex gap-1">
                                    <TooltipArrow />
                                    Qatar Airways{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none tracking-tighter px-1.5 rounded-sm bg-amber-600 text-amber-50 text-xs font-medium font-mono">
                                        BOARDING
                                    </span>
                                </TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </Tooltip>
                </div>
            </TooltipManager>
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger className="flex items-center justify-center size-8 rounded-md border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-900">
                        <QuestionCircle />
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-56">
                                <TooltipArrow />
                                Hover or focus on the flight information to see the status.
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/tooltip
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';
```

```tsx
<TooltipManager>
    <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipPortal>
            <TooltipPositioner>
                <TooltipPopup>
                    <TooltipArrow />
                    Tooltip content
                </TooltipPopup>
            </TooltipPositioner>
        </TooltipPortal>
    </Tooltip>
</TooltipManager>
```

## Examples

### Basic

Shows additional context for an element on hover.

```tsx
import { ChevronRight, QuestionCircle } from '@primeicons/react';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <TooltipManager>
                <div className="flex justify-center w-fit  text-sm font-medium border border-surface rounded-lg h-8 divide-x divide-(--p-content-border-color) [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg">
                    <Tooltip>
                        <TooltipTrigger className="px-2.5 flex items-center justify-center cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> LHR
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner sideOffset={8}>
                                <TooltipPopup className="flex gap-1">
                                    <TooltipArrow />
                                    Turkish Airlines{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none px-1.5 rounded-sm bg-green-600 text-green-50 text-xs font-medium font-mono">
                                        ON TIME
                                    </span>
                                </TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className="px-2.5 flex items-center justify-center cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> CDG
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner sideOffset={8}>
                                <TooltipPopup className="flex gap-1">
                                    <TooltipArrow />
                                    Lufthansa{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none px-1.5 rounded-sm bg-sky-600 text-sky-50 text-xs font-medium font-mono">
                                        DELAYED
                                    </span>
                                </TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className="px-2.5 flex items-center justify-center  cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> FRA
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner sideOffset={8}>
                                <TooltipPopup className="flex gap-1">
                                    <TooltipArrow />
                                    Qatar Airways{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none tracking-tighter px-1.5 rounded-sm bg-amber-600 text-amber-50 text-xs font-medium font-mono">
                                        BOARDING
                                    </span>
                                </TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </Tooltip>
                </div>
            </TooltipManager>
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger className="flex items-center justify-center size-8 rounded-md border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-900">
                        <QuestionCircle />
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-56">
                                <TooltipArrow />
                                Hover or focus on the flight information to see the status.
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
        </div>
    );
}
```

### Arrow

Use `TooltipArrow` to display an arrow on the tooltip.

```tsx
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function ArrowDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger className="h-8 px-2.5 rounded-md border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                        With Arrow
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <span className="font-semibold text-surface-0 dark:text-surface-950 text-sm block">Quick Tip</span>
                                <span className="text-surface-0 dark:text-surface-950 opacity-60 text-sm block mt-1">
                                    You can use tooltips to display helpful information on hover.
                                </span>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger className="h-8 px-2.5 rounded-md border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                        No Arrow
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <span className="font-semibold text-surface-0 dark:text-surface-950 text-sm block">Quick Tip</span>
                                <span className="text-surface-0 dark:text-surface-950 opacity-60 text-sm block mt-1">
                                    You can use tooltips to display helpful information on hover.
                                </span>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
        </div>
    );
}
```

### Placement

Use `side` and `align` to control the placement of the tooltip.

```tsx
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

const placements = [
    { side: 'top', align: 'start' },
    { side: 'top', align: 'center' },
    { side: 'top', align: 'end' },
    { side: 'right', align: 'start' },
    { side: 'right', align: 'center' },
    { side: 'right', align: 'end' },
    { side: 'bottom', align: 'start' },
    { side: 'bottom', align: 'center' },
    { side: 'bottom', align: 'end' },
    { side: 'left', align: 'start' },
    { side: 'left', align: 'center' },
    { side: 'left', align: 'end' }
];

export default function PlacementDemo() {
    return (
        <div className="grid grid-cols-3 items-center w-fit mx-auto justify-center gap-4">
            {placements.map((placement, index) => (
                <TooltipManager key={index}>
                    <Tooltip>
                        <TooltipTrigger className="h-8 px-2.5 rounded-md border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                            {placement.side} - {placement.align}
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner side={placement.side} align={placement.align} sideOffset={8}>
                                <TooltipPopup className="w-60 p-2.5">
                                    <TooltipArrow />
                                    <span className="font-semibold text-surface-0 dark:text-surface-950 text-sm block">Quick Tip</span>
                                    <span className="text-surface-0 dark:text-surface-950 opacity-60 text-sm block mt-1">
                                        You can use tooltips to display helpful information on hover.
                                    </span>
                                </TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </Tooltip>
                </TooltipManager>
            ))}
        </div>
    );
}
```

### Offset

Use `sideOffset` and `alignOffset` to control the offset of the tooltip.

```tsx
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function OffsetDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger className="h-8 px-2.5 rounded-md border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                        Side Offset
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={24}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <span className="font-semibold text-surface-0 dark:text-surface-950 text-sm block">Quick Tip</span>
                                <span className="text-surface-0 dark:text-surface-950 opacity-60 text-sm block mt-1">
                                    You can use tooltips to display helpful information on hover.
                                </span>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger className="h-8 px-2.5 rounded-md border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                        Align Offset
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8} align="start" alignOffset={24}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <span className="font-semibold text-surface-0 dark:text-surface-950 text-sm block">Quick Tip</span>
                                <span className="text-surface-0 dark:text-surface-950 opacity-60 text-sm block mt-1">
                                    You can use tooltips to display helpful information on hover.
                                </span>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
        </div>
    );
}
```

### Delay

Use `openDelay` and `closeDelay` to control tooltip timing. For `TooltipManager`, use `timeout` to control delay when moving between adjacent tooltips.

```tsx
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function DelayDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <TooltipManager>
                <Tooltip openDelay={500} closeDelay={1000}>
                    <TooltipTrigger className="h-8 px-2.5 rounded-md border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                        500ms Open / 1000ms Close
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <span className="font-semibold text-surface-0 dark:text-surface-950 text-sm block">Quick Tip</span>
                                <span className="text-surface-0 dark:text-surface-950 opacity-60 text-sm block mt-1">
                                    You can use tooltips to display helpful information on hover.
                                </span>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
            <TooltipManager openDelay={1000} closeDelay={500}>
                <Tooltip>
                    <TooltipTrigger className="h-8 px-2.5 rounded-md border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                        1000ms Open / 500ms Close
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <span className="font-semibold text-surface-0 dark:text-surface-950 text-sm block">Quick Tip</span>
                                <span className="text-surface-0 dark:text-surface-950 opacity-60 text-sm block mt-1">
                                    You can use tooltips to display helpful information on hover.
                                </span>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
        </div>
    );
}
```

### Controlled

Use `open` and `onOpenChange` to control the tooltip programmatically.

```tsx
'use client';
import { TooltipRootChangeEvent } from 'primereact/tooltip';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';
import * as React from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex items-center justify-center gap-4">
            <TooltipManager>
                <Tooltip open={open} onOpenChange={(e: TooltipRootChangeEvent) => setOpen(e.open || false)}>
                    <TooltipTrigger className="h-8 px-2.5 rounded-md border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
                        Tooltip is {open ? 'open' : 'close'}
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <span className="font-semibold text-surface-0 dark:text-surface-950 text-sm block">Quick Tip</span>
                                <span className="text-surface-0 dark:text-surface-950 opacity-60 text-sm block mt-1">
                                    You can use tooltips to display helpful information on hover.
                                </span>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
        </div>
    );
}
```

### With ToggleButton

Tooltip can be combined with ToggleButton components to show contextual labels for grouped actions.

```tsx
'use client';
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

const content = [
    {
        icon: 'pi pi-align-left',
        label: 'Align left',
        value: 'left'
    },
    {
        icon: 'pi pi-align-center',
        label: 'Align center',
        value: 'center'
    },
    {
        icon: 'pi pi-align-right',
        label: 'Align right',
        value: 'right'
    },
    {
        icon: 'pi pi-align-justify',
        label: 'Align justify',
        value: 'justify'
    }
];

export default function WithToggleButtonDemo() {
    return null;

    return (
        <div className="flex items-center justify-center">
            <TooltipManager>
                <ToggleButtonGroup allowEmpty={false}>
                    {content.map((item) => (
                        <Tooltip key={item.value}>
                            <TooltipTrigger as={ToggleButton} value={item.value}>
                                <i className={item.icon} />
                            </TooltipTrigger>
                            <TooltipPortal>
                                <TooltipPositioner sideOffset={8}>
                                    <TooltipPopup>
                                        <p>{item.label}</p>
                                        <TooltipArrow />
                                    </TooltipPopup>
                                </TooltipPositioner>
                            </TooltipPortal>
                        </Tooltip>
                    ))}
                </ToggleButtonGroup>
            </TooltipManager>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/tooltip/features.md#api) for `TooltipManager`, `TooltipRoot`, `TooltipTrigger`, `TooltipPortal`, `TooltipPositioner`, `TooltipPopup`, `TooltipArrow` component documentation.

### Hooks

See [Headless API](../../headless/tooltip/features.md#api) for `useTooltip`, `useTooltipManager` hook documentation.

## Accessibility

See [Tooltip Primitive](../../primitive/tooltip/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
