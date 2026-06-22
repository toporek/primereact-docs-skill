# Popover

Popover is an overlay container that displays content relative to a trigger.

```tsx
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Popover } from '@primereact/ui/popover';

export default function Preview() {
    return (
        <div className="flex justify-center min-h-60">
            <Popover.Root>
                <Popover.Trigger className="px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
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
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">1 of 3</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Back
                                    </Button>
                                    <Button size="small">Next</Button>
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
        <div className="flex justify-center min-h-60">
            <Popover.Root>
                <Popover.Trigger className="px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
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
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">1 of 3</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Back
                                    </Button>
                                    <Button size="small">Next</Button>
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

            <Popover.Root open={open} onOpenChange={(e: PopoverRootOpenChangeEvent) => setOpen(e.open)}>
                <Popover.Trigger>Popover Trigger</Popover.Trigger>
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
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">1 of 3</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Back
                                    </Button>
                                    <Button size="small">Next</Button>
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
        <div className="flex flex-col items-center min-h-60">
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
                <Popover.Trigger className="my-60 px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium">
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
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">1 of 3</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Back
                                    </Button>
                                    <Button size="small">Next</Button>
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
        <div className="flex justify-center items-start min-h-60">
            <Popover.Root trapped closeOnEscape open={open} onOpenChange={(e: PopoverRootOpenChangeEvent) => setOpen(e.open)}>
                <Popover.Trigger
                    aria-label="Open account settings"
                    className="px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium"
                >
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

## API

### Sub-Components

See [Primitive API](../../primitive/popover/features.md#api) for `PopoverRoot`, `PopoverTrigger`, `PopoverPortal`, `PopoverPositioner`, `PopoverPopup`, `PopoverArrow`, `PopoverHeader`, `PopoverTitle`, `PopoverClose`, `PopoverContent`, `PopoverDescription`, `PopoverFooter` component documentation.

### Hooks

See [Headless API](../../headless/popover/features.md#api) for `usePopover` hook documentation.

## Accessibility

## Accessibility

See [Popover Primitive](../../primitive/popover/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
