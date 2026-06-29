# Tooltip

Tooltip is a component that displays a tooltip when the user hovers over an element.

```tsx
import { ChevronRight, QuestionCircle } from '@primeicons/react';
import { Tooltip } from '@primereact/ui/tooltip';

export default function Preview() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Tooltip.Manager>
                <div className="flex justify-center w-fit  text-sm font-medium border border-surface rounded-lg h-8 divide-x divide-(--p-content-border-color) [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg">
                    <Tooltip.Root>
                        <Tooltip.Trigger className="px-2.5 flex items-center justify-center cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> LHR
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Positioner sideOffset={8}>
                                <Tooltip.Popup className="flex gap-1">
                                    <Tooltip.Arrow />
                                    Turkish Airlines{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none px-1.5 rounded-sm bg-green-600 text-green-50 text-xs font-medium font-mono">
                                        ON TIME
                                    </span>
                                </Tooltip.Popup>
                            </Tooltip.Positioner>
                        </Tooltip.Portal>
                    </Tooltip.Root>

                    <Tooltip.Root>
                        <Tooltip.Trigger className="px-2.5 flex items-center justify-center cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> CDG
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Positioner sideOffset={8}>
                                <Tooltip.Popup className="flex gap-1">
                                    <Tooltip.Arrow />
                                    Lufthansa{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none px-1.5 rounded-sm bg-sky-600 text-sky-50 text-xs font-medium font-mono">
                                        DELAYED
                                    </span>
                                </Tooltip.Popup>
                            </Tooltip.Positioner>
                        </Tooltip.Portal>
                    </Tooltip.Root>

                    <Tooltip.Root>
                        <Tooltip.Trigger className="px-2.5 flex items-center justify-center  cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-900">
                            IST <ChevronRight className="size-3 mx-1 opacity-50" /> FRA
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Positioner sideOffset={8}>
                                <Tooltip.Popup className="flex gap-1">
                                    <Tooltip.Arrow />
                                    Qatar Airways{' '}
                                    <span className="-mr-1 flex items-center justify-center leading-none tracking-tighter px-1.5 rounded-sm bg-amber-600 text-amber-50 text-xs font-medium font-mono">
                                        BOARDING
                                    </span>
                                </Tooltip.Popup>
                            </Tooltip.Positioner>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </div>
            </Tooltip.Manager>
            <Tooltip.Manager>
                <Tooltip.Root>
                    <Tooltip.Trigger className="flex items-center justify-center size-8 rounded-md border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-900">
                        <QuestionCircle />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Positioner sideOffset={8}>
                            <Tooltip.Popup className="w-56">
                                <Tooltip.Arrow />
                                Hover or focus on the flight information to see the status.
                            </Tooltip.Popup>
                        </Tooltip.Positioner>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Manager>
        </div>
    );
}

```

## Usage

```tsx
import { Tooltip } from '@primereact/ui/tooltip';
```

```tsx
<Tooltip.Manager>
    <Tooltip.Root>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Portal>
            <Tooltip.Positioner>
                <Tooltip.Popup>
                    Tooltip content
                    <Tooltip.Arrow />
                </Tooltip.Popup>
            </Tooltip.Positioner>
        </Tooltip.Portal>
    </Tooltip.Root>
</Tooltip.Manager>
```

## Examples

### Basic

Shows additional context for an element on hover.

```tsx
import { Button } from '@primereact/ui/button';
import { Tooltip } from '@primereact/ui/tooltip';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <Tooltip.Manager>
                <Tooltip.Root>
                    <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                        Hover me
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Positioner sideOffset={8}>
                            <Tooltip.Popup>
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </Tooltip.Popup>
                        </Tooltip.Positioner>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Manager>
        </div>
    );
}

```

### Arrow

Use `Tooltip.Arrow` to display an arrow on the tooltip.

```tsx
import { Button } from '@primereact/ui/button';
import { Tooltip } from '@primereact/ui/tooltip';

export default function ArrowDemo() {
    return (
        <div className="flex items-center justify-center">
            <Tooltip.Manager>
                <Tooltip.Root>
                    <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                        Hover me
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Positioner sideOffset={8}>
                            <Tooltip.Popup className="w-60 p-2.5">
                                <Tooltip.Arrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </Tooltip.Popup>
                        </Tooltip.Positioner>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Manager>
        </div>
    );
}

```

### Placement

Use `side` and `align` to control the placement of the tooltip.

```tsx
import { Button } from '@primereact/ui/button';
import { Tooltip } from '@primereact/ui/tooltip';

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
            <Tooltip.Manager>
                {placements.map((placement, index) => (
                    <Tooltip.Root key={index}>
                        <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                            {placement.side} - {placement.align}
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Positioner side={placement.side} align={placement.align} sideOffset={8}>
                                <Tooltip.Popup>
                                    <Tooltip.Arrow />
                                    <div className="font-semibold text-sm">Quick Tip</div>
                                    <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                                </Tooltip.Popup>
                            </Tooltip.Positioner>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                ))}
            </Tooltip.Manager>
        </div>
    );
}

```

### Offset

Use `sideOffset` and `alignOffset` to control the offset of the tooltip.

```tsx
import { Button } from '@primereact/ui/button';
import { Tooltip } from '@primereact/ui/tooltip';

export default function OffsetDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Tooltip.Manager>
                <Tooltip.Root>
                    <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                        Side Offset
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Positioner sideOffset={24}>
                            <Tooltip.Popup>
                                <Tooltip.Arrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </Tooltip.Popup>
                        </Tooltip.Positioner>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Manager>
            <Tooltip.Manager>
                <Tooltip.Root>
                    <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                        Align Offset
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Positioner sideOffset={8} align="start" alignOffset={24}>
                            <Tooltip.Popup>
                                <Tooltip.Arrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </Tooltip.Popup>
                        </Tooltip.Positioner>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Manager>
        </div>
    );
}

```

### Delay

Use `openDelay` and `closeDelay` to control tooltip timing. For `Tooltip.Manager`, use `timeout` to control delay when moving between adjacent tooltips.

```tsx
import { Button } from '@primereact/ui/button';
import { Tooltip } from '@primereact/ui/tooltip';

export default function DelayDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Tooltip.Manager>
                <Tooltip.Root openDelay={500} closeDelay={1000}>
                    <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                        500ms Open / 1000ms Close
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Positioner sideOffset={8}>
                            <Tooltip.Popup>
                                <Tooltip.Arrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </Tooltip.Popup>
                        </Tooltip.Positioner>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Manager>
            <Tooltip.Manager openDelay={1000} closeDelay={500}>
                <Tooltip.Root>
                    <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                        1000ms Open / 500ms Close
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Positioner sideOffset={8}>
                            <Tooltip.Popup>
                                <Tooltip.Arrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </Tooltip.Popup>
                        </Tooltip.Positioner>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Manager>
        </div>
    );
}

```

### Controlled

Use `open` and `onOpenChange` to control the tooltip programmatically.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { Tooltip } from '@primereact/ui/tooltip';
import { TooltipRootChangeEvent } from '@primereact/ui/tooltip';
import * as React from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex items-center justify-center gap-4">
            <Tooltip.Manager>
                <Tooltip.Root open={open} onOpenChange={(e: TooltipRootChangeEvent) => setOpen(e.value || false)}>
                    <Tooltip.Trigger as={Button} variant="outlined" severity="secondary">
                        Tooltip is {open ? 'open' : 'close'}
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Positioner sideOffset={8}>
                            <Tooltip.Popup>
                                <Tooltip.Arrow />
                                <div className="font-semibold text-sm">Quick Tip</div>
                                <div className="opacity-75 text-sm mt-1">You can use tooltips to display helpful information on hover.</div>
                            </Tooltip.Popup>
                        </Tooltip.Positioner>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Manager>
        </div>
    );
}

```

### With ToggleButton

Tooltip can be combined with ToggleButton components to show contextual labels for grouped actions.

```tsx
'use client';
import { AlignCenter } from '@primeicons/react/align-center';
import { AlignJustify } from '@primeicons/react/align-justify';
import { AlignLeft } from '@primeicons/react/align-left';
import { AlignRight } from '@primeicons/react/align-right';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import { Tooltip } from '@primereact/ui/tooltip';

const items = [
    { value: 'left', label: 'Align left', icon: <AlignLeft /> },
    { value: 'center', label: 'Align center', icon: <AlignCenter /> },
    { value: 'right', label: 'Align right', icon: <AlignRight /> },
    { value: 'justify', label: 'Align justify', icon: <AlignJustify /> }
];

export default function WithToggleButtonDemo() {
    return (
        <div className="flex items-center justify-center">
            <Tooltip.Manager>
                <ToggleButtonGroup allowEmpty={false} defaultValue="left">
                    {items.map((item) => (
                        <Tooltip.Root key={item.value}>
                            <Tooltip.Trigger as={ToggleButton.Root} value={item.value}>
                                <ToggleButton.Indicator>{item.icon}</ToggleButton.Indicator>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Positioner sideOffset={8}>
                                    <Tooltip.Popup className="px-2.5 py-1.5">
                                        <Tooltip.Arrow />
                                        <div className="text-sm font-medium">{item.label}</div>
                                    </Tooltip.Popup>
                                </Tooltip.Positioner>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    ))}
                </ToggleButtonGroup>
            </Tooltip.Manager>
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

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-tooltip | Class name of the root element |
| p-tooltip-arrow | Class name of the arrow element |
| p-tooltip-popup | Class name of the popup element |
| p-tooltip-positioner | Class name of the positioner element |
| p-tooltip-manager | Class name of the manager element |
| p-tooltip-portal | Class name of the portal element |
| p-tooltip-trigger | Class name of the trigger element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| tooltip.max.width | --p-tooltip-max-width | Max width of root |
| tooltip.gutter | --p-tooltip-gutter | Gutter of root |
| tooltip.shadow | --p-tooltip-shadow | Shadow of root |
| tooltip.padding | --p-tooltip-padding | Padding of root |
| tooltip.border.radius | --p-tooltip-border-radius | Border radius of root |
| tooltip.background | --p-tooltip-background | Background of root |
| tooltip.color | --p-tooltip-color | Color of root |
| tooltip.font.weight | --p-tooltip-font-weight | Font weight of root |
| tooltip.font.size | --p-tooltip-font-size | Font size of root |
