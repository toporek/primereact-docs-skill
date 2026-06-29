# Popover

Popover is an overlay container that displays content relative to a trigger.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { InputText } from '@/components/ui/inputtext';
import {
    Popover,
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverDescription,
    PopoverFooter,
    PopoverHeader,
    PopoverPopup,
    PopoverPortal,
    PopoverPositioner,
    PopoverTitle,
    PopoverTrigger
} from '@/components/ui/popover';
import { Times } from '@primeicons/react';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Popover>
                <PopoverTrigger as={Button} severity="secondary" variant="outlined">
                    Show Popover
                </PopoverTrigger>
                <PopoverPortal>
                    <PopoverPositioner sideOffset={12} side="bottom" align="start">
                        <PopoverPopup className="max-w-72 w-full">
                            <PopoverArrow />
                            <PopoverHeader>
                                <PopoverTitle>Create a New Workspace</PopoverTitle>
                                <PopoverClose as={Button} severity="secondary" variant="text" size="small" iconOnly>
                                    <Times />
                                </PopoverClose>
                            </PopoverHeader>
                            <PopoverContent>
                                <PopoverDescription>Name your workspace to get started. You can always change this later.</PopoverDescription>
                                <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            </PopoverContent>
                            <PopoverFooter>
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">Lowercase letters and dashes only</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Cancel
                                    </Button>
                                    <Button size="small">Create</Button>
                                </div>
                            </PopoverFooter>
                        </PopoverPopup>
                    </PopoverPositioner>
                </PopoverPortal>
            </Popover>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/popover.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Popover, PopoverArrow, PopoverClose, PopoverContent, PopoverDescription, PopoverFooter, PopoverHeader, PopoverPopup, PopoverPortal, PopoverPositioner, PopoverTitle, PopoverTrigger } from '@/components/ui/popover';
```

```tsx
<Popover>
    <PopoverTrigger>Trigger</PopoverTrigger>
    <PopoverPortal>
        <PopoverPositioner>
            <PopoverPopup>
                <PopoverArrow />
                <PopoverHeader>
                    <PopoverTitle>Title</PopoverTitle>
                    <PopoverClose />
                </PopoverHeader>
                <PopoverContent>
                    <PopoverDescription>Description</PopoverDescription>
                </PopoverContent>
                <PopoverFooter />
            </PopoverPopup>
        </PopoverPositioner>
    </PopoverPortal>
</Popover>
```

## Examples

### Basic

Contextual content anchored to a trigger element.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { InputText } from '@/components/ui/inputtext';
import {
    Popover,
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverDescription,
    PopoverFooter,
    PopoverHeader,
    PopoverPopup,
    PopoverPortal,
    PopoverPositioner,
    PopoverTitle,
    PopoverTrigger
} from '@/components/ui/popover';
import { Times } from '@primeicons/react';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Popover>
                <PopoverTrigger as={Button} severity="secondary" variant="outlined">
                    Show Popover
                </PopoverTrigger>
                <PopoverPortal>
                    <PopoverPositioner sideOffset={12} side="bottom" align="start">
                        <PopoverPopup className="max-w-72 w-full">
                            <PopoverArrow />
                            <PopoverHeader>
                                <PopoverTitle>Create a New Workspace</PopoverTitle>
                                <PopoverClose as={Button} severity="secondary" variant="text" size="small" iconOnly>
                                    <Times />
                                </PopoverClose>
                            </PopoverHeader>
                            <PopoverContent>
                                <PopoverDescription>Name your workspace to get started. You can always change this later.</PopoverDescription>
                                <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            </PopoverContent>
                            <PopoverFooter>
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">Lowercase letters and dashes only</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Cancel
                                    </Button>
                                    <Button size="small">Create</Button>
                                </div>
                            </PopoverFooter>
                        </PopoverPopup>
                    </PopoverPositioner>
                </PopoverPortal>
            </Popover>
        </div>
    );
}

```

### Controlled

Control popover state from outside with the `open` and `onOpenChange` props.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { InputText } from '@/components/ui/inputtext';
import {
    Popover,
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverDescription,
    PopoverFooter,
    PopoverHeader,
    PopoverPopup,
    PopoverPortal,
    PopoverPositioner,
    PopoverTitle,
    PopoverTrigger
} from '@/components/ui/popover';
import { Times } from '@primeicons/react';
import { type PopoverRootOpenChangeEvent } from 'primereact/popover';
import React from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex gap-4 justify-center items-center">
            <Button onClick={() => setOpen(!open)}>Show Popover</Button>

            <Popover open={open} onOpenChange={(e: PopoverRootOpenChangeEvent) => setOpen(!!e.value)}>
                <PopoverTrigger as={Button} severity="secondary" variant="outlined">
                    Popover Trigger
                </PopoverTrigger>
                <PopoverPortal>
                    <PopoverPositioner sideOffset={12}>
                        <PopoverPopup className="max-w-72 w-full">
                            <PopoverArrow />
                            <PopoverHeader>
                                <PopoverTitle>Create a New Workspace</PopoverTitle>
                                <PopoverClose as={Button} severity="secondary" variant="text" size="small" iconOnly>
                                    <Times />
                                </PopoverClose>
                            </PopoverHeader>
                            <PopoverContent>
                                <PopoverDescription>Name your workspace to get started. You can always change this later.</PopoverDescription>
                                <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            </PopoverContent>
                            <PopoverFooter>
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">Lowercase letters and dashes only</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Cancel
                                    </Button>
                                    <Button size="small">Create</Button>
                                </div>
                            </PopoverFooter>
                        </PopoverPopup>
                    </PopoverPositioner>
                </PopoverPortal>
            </Popover>
        </div>
    );
}

```

### Alignment

Use `side` and `align` to control placement. Use `sideOffset` and `alignOffset` to fine-tune spacing.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { InputText } from '@/components/ui/inputtext';
import {
    Popover,
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverDescription,
    PopoverFooter,
    PopoverHeader,
    PopoverPopup,
    PopoverPortal,
    PopoverPositioner,
    PopoverTitle,
    PopoverTrigger
} from '@/components/ui/popover';
import { Times } from '@primeicons/react';
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
                            severity={side === s ? undefined : 'secondary'}
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
                            severity={align === a ? undefined : 'secondary'}
                            variant={align === a ? undefined : 'outlined'}
                            size="small"
                            onClick={() => setAlign(a)}
                        >
                            {a}
                        </Button>
                    ))}
                </div>
            </div>
            <Popover open>
                <PopoverTrigger as={Button} severity="secondary" variant="outlined">
                    Show Popover
                </PopoverTrigger>
                <PopoverPortal>
                    <PopoverPositioner sideOffset={12} side={side} align={align}>
                        <PopoverPopup className="max-w-72 w-full">
                            <PopoverArrow />
                            <PopoverHeader>
                                <PopoverTitle>Create a New Workspace</PopoverTitle>
                                <PopoverClose as={Button} severity="secondary" variant="text" size="small" iconOnly>
                                    <Times />
                                </PopoverClose>
                            </PopoverHeader>
                            <PopoverContent>
                                <PopoverDescription>Name your workspace to get started. You can always change this later.</PopoverDescription>
                                <InputText placeholder="Workspace Name" className="mt-3 w-full" />
                            </PopoverContent>
                            <PopoverFooter>
                                <span className="text-xs text-surface-500 dark:text-surface-400 ">Lowercase letters and dashes only</span>
                                <div className="flex-1 flex items-center justify-end gap-2">
                                    <Button severity="secondary" variant="outlined" size="small">
                                        Cancel
                                    </Button>
                                    <Button size="small">Create</Button>
                                </div>
                            </PopoverFooter>
                        </PopoverPopup>
                    </PopoverPositioner>
                </PopoverPortal>
            </Popover>
        </div>
    );
}

```

### Accessibility

Use labelled and described content with `aria-labelledby` and `aria-describedby`, and enable `closeOnEscape` for keyboard users.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverPopup,
    PopoverPortal,
    PopoverPositioner,
    PopoverTitle,
    PopoverTrigger
} from '@/components/ui/popover';
import { Times } from '@primeicons/react';
import { type PopoverRootOpenChangeEvent } from 'primereact/popover';
import * as React from 'react';

export default function AccessibilityDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex justify-center">
            <Popover trapped closeOnEscape open={open} onOpenChange={(e: PopoverRootOpenChangeEvent) => setOpen(!!e.value)}>
                <PopoverTrigger as={Button} severity="secondary" variant="outlined" aria-label="Open account settings">
                    Open Settings
                </PopoverTrigger>
                <PopoverPortal>
                    <PopoverPositioner sideOffset={12} side="bottom" align="start">
                        <PopoverPopup
                            className="max-w-80 w-full"
                            role="dialog"
                            aria-labelledby="popover-a11y-title"
                            aria-describedby="popover-a11y-description"
                        >
                            <PopoverArrow />
                            <PopoverHeader>
                                <PopoverTitle id="popover-a11y-title">Account Settings</PopoverTitle>
                                <PopoverClose as={Button} severity="secondary" variant="text" size="small" iconOnly aria-label="Close settings">
                                    <Times />
                                </PopoverClose>
                            </PopoverHeader>
                            <PopoverContent>
                                <PopoverDescription id="popover-a11y-description">
                                    This popover uses labelled and described content. Press Escape to close.
                                </PopoverDescription>
                                <div className="mt-4 flex items-center justify-end gap-2">
                                    <Button size="small" severity="secondary" variant="outlined" onClick={() => setOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button size="small" onClick={() => setOpen(false)}>
                                        Save
                                    </Button>
                                </div>
                            </PopoverContent>
                        </PopoverPopup>
                    </PopoverPositioner>
                </PopoverPortal>
            </Popover>
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
