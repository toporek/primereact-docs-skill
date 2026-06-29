# Popover

Popover is an overlay container that displays content relative to a trigger.

```tsx
import { ArrowRight } from '@primeicons/react/arrow-right';
import { Send } from '@primeicons/react/send';
import { Button } from '@primereact/ui/button';
import { Popover } from '@primereact/ui/popover';
import { Tag } from '@primereact/ui/tag';

export default function Preview() {
    return (
        <div className="flex justify-center">
            <Popover.Root>
                <Popover.Trigger as={Button} severity="secondary" variant="outlined">
                    Track Flight
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={8} side="bottom" align="start">
                        <Popover.Popup className="w-80">
                            <Popover.Arrow />
                            <Popover.Header className="items-start!">
                                <div className="flex flex-col">
                                    <Popover.Title className="text-base">British Airways</Popover.Title>
                                    <span className="text-muted-color text-xs mt-0.5 tabular-nums">BA 178</span>
                                </div>
                                <Tag severity="success" className="uppercase">
                                    On time
                                </Tag>
                            </Popover.Header>
                            <Popover.Content>
                                <div className="flex items-start justify-between gap-3 mt-2">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-2xl font-bold leading-none tracking-tight">LHR</span>
                                        <span className="text-muted-color text-xs">London</span>
                                        <span className="text-sm font-semibold tabular-nums">14:30</span>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center pt-2">
                                        <div className="w-full flex items-center gap-2">
                                            <span className="flex-1 border-t border-dashed border-surface-300 dark:border-surface-700" />
                                            <Send className="text-muted-color shrink-0 size-3.5 rotate-90" />
                                            <span className="flex-1 border-t border-dashed border-surface-300 dark:border-surface-700" />
                                        </div>
                                        <span className="text-muted-color text-xs mt-2 tabular-nums">8h 15m</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5">
                                        <span className="text-2xl font-bold leading-none tracking-tight">JFK</span>
                                        <span className="text-muted-color text-xs">New York</span>
                                        <span className="text-sm font-semibold tabular-nums">18:45</span>
                                    </div>
                                </div>
                            </Popover.Content>
                            <Popover.Footer>
                                <span className="text-xs text-muted-color">Gate B12 · Terminal 5</span>
                                <Button size="small" variant="link" className="ml-auto">
                                    Track flight
                                    <ArrowRight className="size-3" />
                                </Button>
                            </Popover.Footer>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}

```

## Usage

```tsx
import { Popover } from '@primereact/ui/popover';
```

```tsx
<Popover.Root>
    <Popover.Trigger />
    <Popover.Portal>
        <Popover.Positioner>
            <Popover.Popup>
                <Popover.Arrow />
                <Popover.Header>
                    <Popover.Title />
                    <Popover.Close />
                </Popover.Header>
                <Popover.Content>
                    <Popover.Description />
                </Popover.Content>
                <Popover.Footer />
            </Popover.Popup>
        </Popover.Positioner>
    </Popover.Portal>
</Popover.Root>
```

## Examples

### Basic

Contextual content anchored to a trigger element.

```tsx
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Popover } from '@primereact/ui/popover';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Popover.Root>
                <Popover.Trigger as={Button} severity="secondary" variant="outlined">
                    Show Popover
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12} side="bottom" align="start">
                        <Popover.Popup className="max-w-72 w-full">
                            <Popover.Arrow />
                            <Popover.Header>
                                <Popover.Title>Create a New Workspace</Popover.Title>
                                <Popover.Close as={Button} severity="secondary" variant="text" size="small" iconOnly>
                                    <Times />
                                </Popover.Close>
                            </Popover.Header>
                            <Popover.Content>
                                <Popover.Description>Name your workspace to get started. You can always change this later.</Popover.Description>
                                <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            </Popover.Content>
                            <Popover.Footer>
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">Lowercase letters and dashes only</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Cancel
                                    </Button>
                                    <Button size="small">Create</Button>
                                </div>
                            </Popover.Footer>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}

```

### Controlled

Control popover state from outside with the `open` and `onOpenChange` props.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Popover, type PopoverRootOpenChangeEvent } from '@primereact/ui/popover';
import React from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex gap-4 justify-center items-center">
            <Button onClick={() => setOpen(!open)}>Show Popover</Button>

            <Popover.Root open={open} onOpenChange={(e: PopoverRootOpenChangeEvent) => setOpen(!!e.value)}>
                <Popover.Trigger as={Button} severity="secondary" variant="outlined">
                    Popover Trigger
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12}>
                        <Popover.Popup className="max-w-72 w-full">
                            <Popover.Arrow />
                            <Popover.Header>
                                <Popover.Title>Create a New Workspace</Popover.Title>
                                <Popover.Close as={Button} severity="secondary" variant="text" size="small" iconOnly>
                                    <Times />
                                </Popover.Close>
                            </Popover.Header>
                            <Popover.Content>
                                <Popover.Description>Name your workspace to get started. You can always change this later.</Popover.Description>
                                <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            </Popover.Content>
                            <Popover.Footer>
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">Lowercase letters and dashes only</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Cancel
                                    </Button>
                                    <Button size="small">Create</Button>
                                </div>
                            </Popover.Footer>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}

```

### Alignment

Use `side` and `align` to control placement. Use `sideOffset` and `alignOffset` to fine-tune spacing.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Popover } from '@primereact/ui/popover';
import * as React from 'react';

const sides = ['top', 'right', 'bottom', 'left'] as const;
const aligns = ['start', 'center', 'end'] as const;

export default function AlignmentDemo() {
    const [side, setSide] = React.useState<(typeof sides)[number]>('bottom');
    const [align, setAlign] = React.useState<(typeof aligns)[number]>('start');

    return (
        <div className="flex flex-col gap-60 items-center min-h-60">
            <div className="flex flex-col items-center justify-center gap-4 **:capitalize">
                <div className="flex items-center justify-center gap-4 ">
                    {sides.map((s: (typeof sides)[number]) => (
                        <Button
                            key={s}
                            severity={side === s ? 'primary' : 'secondary'}
                            variant={side === s ? undefined : 'outlined'}
                            size="small"
                            onClick={() => setSide(s)}
                        >
                            {s}
                        </Button>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4">
                    {aligns.map((a: (typeof aligns)[number]) => (
                        <Button
                            key={a}
                            severity={align === a ? 'primary' : 'secondary'}
                            variant={align === a ? undefined : 'outlined'}
                            size="small"
                            onClick={() => setAlign(a)}
                        >
                            {a}
                        </Button>
                    ))}
                </div>
            </div>
            <Popover.Root open>
                <Popover.Trigger as={Button} severity="secondary" variant="outlined">
                    Show Popover
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12} side={side} align={align}>
                        <Popover.Popup className="max-w-72 w-full">
                            <Popover.Arrow />
                            <Popover.Header>
                                <Popover.Title>Create a New Workspace</Popover.Title>
                                <Popover.Close as={Button} severity="secondary" variant="text" size="small" iconOnly>
                                    <Times />
                                </Popover.Close>
                            </Popover.Header>
                            <Popover.Content>
                                <Popover.Description>Name your workspace to get started. You can always change this later.</Popover.Description>
                                <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            </Popover.Content>
                            <Popover.Footer>
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">Lowercase letters and dashes only</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Cancel
                                    </Button>
                                    <Button size="small">Create</Button>
                                </div>
                            </Popover.Footer>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}

```

### Accessibility

Use labelled and described content with `aria-labelledby` and `aria-describedby`, and enable `closeOnEscape` for keyboard users.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Popover, type PopoverRootOpenChangeEvent } from '@primereact/ui/popover';
import * as React from 'react';

export default function AccessibilityDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex justify-center">
            <Popover.Root trapped closeOnEscape open={open} onOpenChange={(e: PopoverRootOpenChangeEvent) => setOpen(!!e.value)}>
                <Popover.Trigger as={Button} severity="secondary" variant="outlined" aria-label="Open account settings">
                    Open Settings
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12} side="bottom" align="start">
                        <Popover.Popup
                            className="max-w-80 w-full"
                            role="dialog"
                            aria-labelledby="popover-a11y-title"
                            aria-describedby="popover-a11y-description"
                        >
                            <Popover.Arrow />
                            <Popover.Header>
                                <Popover.Title id="popover-a11y-title">Account Settings</Popover.Title>
                                <Popover.Close as={Button} severity="secondary" variant="text" size="small" iconOnly aria-label="Close settings">
                                    <Times />
                                </Popover.Close>
                            </Popover.Header>
                            <Popover.Content>
                                <Popover.Description id="popover-a11y-description">
                                    This popover uses labelled and described content. Press Escape to close.
                                </Popover.Description>
                                <div className="mt-4 flex items-center justify-end gap-2">
                                    <Button size="small" severity="secondary" variant="outlined" onClick={() => setOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button size="small" onClick={() => setOpen(false)}>
                                        Save
                                    </Button>
                                </div>
                            </Popover.Content>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/popover.md#api) for `PopoverRoot`, `PopoverTrigger`, `PopoverPortal`, `PopoverPositioner`, `PopoverPopup`, `PopoverArrow`, `PopoverHeader`, `PopoverTitle`, `PopoverClose`, `PopoverContent`, `PopoverDescription`, `PopoverFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/popover.md#api) for `usePopover` hook documentation.

### Accessibility

See [Popover Primitive](../../primitive/components/popover.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-popover | Class name of the root element |
| p-popover-content | Class name of the content element |
| p-popover-positioner | Class name of the positioner element |
| p-popover-arrow | Class name of the arrow element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| popover.background | --p-popover-background | Background of root |
| popover.border.color | --p-popover-border-color | Border color of root |
| popover.color | --p-popover-color | Color of root |
| popover.border.radius | --p-popover-border-radius | Border radius of root |
| popover.shadow | --p-popover-shadow | Shadow of root |
| popover.gutter | --p-popover-gutter | Gutter of root |
| popover.arrow.offset | --p-popover-arrow-offset | Arrow offset of root |
| popover.content.padding | --p-popover-content-padding | Padding of content |
