# Tooltip

Tooltip is a component that displays a tooltip when the user hovers over an element.

```tsx
'use client';
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
npx shadcn@latest add https://primereact.dev/r/tooltip.json
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
'use client';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger as={Button} variant="outlined" severity="secondary">
                        Hover me
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
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
'use client';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function ArrowDemo() {
    return (
        <div className="flex items-center justify-center">
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger as={Button} variant="outlined" severity="secondary">
                        Hover me
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
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
'use client';
import { Button } from '@/components/ui/button';
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
] as const;

export default function PlacementDemo() {
    return (
        <div className="grid grid-cols-3 items-center w-fit mx-auto justify-center gap-4">
            <TooltipManager>
                {placements.map((placement, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger as={Button} variant="outlined" severity="secondary">
                            {placement.side} - {placement.align}
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipPositioner side={placement.side} align={placement.align} sideOffset={8}>
                                <TooltipPopup className="w-60 p-2.5">
                                    <TooltipArrow />
                                    <div className="font-semibold text-sm">Quick Tip</div>
                                    <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                                </TooltipPopup>
                            </TooltipPositioner>
                        </TooltipPortal>
                    </Tooltip>
                ))}
            </TooltipManager>
        </div>
    );
}

```

### Offset

Use `sideOffset` and `alignOffset` to control the offset of the tooltip.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function OffsetDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger as={Button} variant="outlined" severity="secondary">
                        Side Offset
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={24}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
            <TooltipManager>
                <Tooltip>
                    <TooltipTrigger as={Button} variant="outlined" severity="secondary">
                        Align Offset
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8} align="start" alignOffset={24}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
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
'use client';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';

export default function DelayDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <TooltipManager>
                <Tooltip openDelay={500} closeDelay={1000}>
                    <TooltipTrigger as={Button} variant="outlined" severity="secondary">
                        500ms Open / 1000ms Close
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </TooltipPopup>
                        </TooltipPositioner>
                    </TooltipPortal>
                </Tooltip>
            </TooltipManager>
            <TooltipManager openDelay={1000} closeDelay={500}>
                <Tooltip>
                    <TooltipTrigger as={Button} variant="outlined" severity="secondary">
                        1000ms Open / 500ms Close
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
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
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner, TooltipTrigger } from '@/components/ui/tooltip';
import * as React from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex items-center justify-center gap-4">
            <TooltipManager>
                <Tooltip open={open} onOpenChange={(e: TooltipRootChangeEvent) => setOpen(e.value || false)}>
                    <TooltipTrigger as={Button} variant="outlined" severity="secondary">
                        Tooltip is {open ? 'open' : 'close'}
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipPositioner sideOffset={8}>
                            <TooltipPopup className="w-60 p-2.5">
                                <TooltipArrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
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
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner } from '@/components/ui/tooltip';
import { AlignCenter } from '@primeicons/react/align-center';
import { AlignJustify } from '@primeicons/react/align-justify';
import { AlignLeft } from '@primeicons/react/align-left';
import { AlignRight } from '@primeicons/react/align-right';
import { useTooltipContext } from 'primereact/tooltip';

function TooltipToggleButton({ value, children }: { value: string; children: React.ReactNode }) {
    const tooltip = useTooltipContext();

    return (
        <ToggleButton value={value} pt={{ root: tooltip?.triggerProps }}>
            {children}
        </ToggleButton>
    );
}

const items = [
    { value: 'left', label: 'Align left', icon: <AlignLeft /> },
    { value: 'center', label: 'Align center', icon: <AlignCenter /> },
    { value: 'right', label: 'Align right', icon: <AlignRight /> },
    { value: 'justify', label: 'Align justify', icon: <AlignJustify /> }
];

export default function WithToggleButtonDemo() {
    return (
        <div className="flex items-center justify-center">
            <TooltipManager>
                <ToggleButtonGroup allowEmpty={false} defaultValue="left">
                    {items.map((item) => (
                        <Tooltip key={item.value}>
                            <TooltipToggleButton value={item.value}>{item.icon}</TooltipToggleButton>
                            <TooltipPortal>
                                <TooltipPositioner sideOffset={8}>
                                    <TooltipPopup className="px-2.5 py-1.5">
                                        <TooltipArrow />
                                        <div className="text-sm font-medium">{item.label}</div>
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

## Related

### Sub-Components

See [Primitive API](../../primitive/components/tooltip.md#api) for `TooltipManager`, `TooltipRoot`, `TooltipTrigger`, `TooltipPortal`, `TooltipPositioner`, `TooltipPopup`, `TooltipArrow` component documentation.

### Hooks

See [Headless API](../../headless/components/tooltip.md#api) for `useTooltip`, `useTooltipManager` hook documentation.

### Accessibility

See [Tooltip Primitive](../../primitive/components/tooltip.md#accessibility) for WAI-ARIA compliance details and keyboard support.
