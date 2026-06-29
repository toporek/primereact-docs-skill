# OverlayManager

OverlayManager opens overlay components imperatively from anywhere in your app.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogTitle
} from '@/components/ui/dialog';
import { createOverlayManager } from '@primereact/core/overlay-manager';

interface DialogPayload {
    title: string;
    description: string;
}

const dialog = createOverlayManager<DialogPayload>(({ title, description, ...rest }) => (
    <Dialog {...rest}>
        <DialogPortal>
            <DialogBackdrop />
            <DialogPopup className="max-w-sm w-full">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogHeaderActions>
                        <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                            <Times />
                        </DialogClose>
                    </DialogHeaderActions>
                </DialogHeader>
                <DialogContent>
                    <p className="text-sm text-muted-foreground m-0">{description}</p>
                </DialogContent>
            </DialogPopup>
        </DialogPortal>
    </Dialog>
));

export default function Preview() {
    return (
        <div className="flex justify-center">
            <Button onClick={() => dialog.open('preview', { title: 'Overlay Manager', description: 'Imperatively open overlays from anywhere.' })}>
                Open dialog
            </Button>
            <dialog.Viewport />
        </div>
    );
}

```

## Usage

```tsx
import { createOverlayManager } from '@primereact/core/overlay-manager';
```

Declare a manager at module scope, pass a render function that spreads the injected props onto an overlay root, and mount `<manager.Viewport />` once in your layout.

```tsx
const dialog = createOverlayManager<{ title: string; description?: string }>(({ title, description, ...rest }) => (
    <Dialog {...rest}>
        <DialogPortal>
            <DialogBackdrop />
            <DialogPopup>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogContent>{description}</DialogContent>
            </DialogPopup>
        </DialogPortal>
    </Dialog>
));
```

The render function receives the caller props merged with three injected lifecycle props, `open`, `onOpenChange`, and `onExitComplete`. Spreading them onto `Dialog` lets the manager fully control open state, entry into the tree, and removal after the exit animation.

```tsx
// Layout
<dialog.Viewport />;

// Anywhere
dialog.open({ title: 'Hello', description: 'World' });
```

## API

```ts
interface OverlayManagerInstance<P> {
    open: (props: P, id?: string) => string;
    close: (id?: string) => void;
    update: (id: string, props: Partial<P>) => void;
    Viewport: React.ComponentType;
}
```

- `open(props, id?)`, mounts a new entry with the given props. Returns the generated (or supplied) id.
- `close(id?)`, starts the close transition. Called with no id, every open entry is closed.
- `update(id, props)`, shallow-merges new props into an already-open entry. The mounted overlay re-renders in place.
- `Viewport`, the component that renders every open entry. Mount once per manager.

## Examples

### Basic

Open a dialog imperatively with `open()` and close it via the close button or escape key.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogTitle
} from '@/components/ui/dialog';
import { createOverlayManager } from '@primereact/core/overlay-manager';

interface DialogPayload {
    title: string;
    description: string;
}

const dialog = createOverlayManager<DialogPayload>(({ title, description, ...rest }) => (
    <Dialog {...rest}>
        <DialogPortal>
            <DialogBackdrop />
            <DialogPopup className="max-w-sm w-full">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogHeaderActions>
                        <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                            <Times />
                        </DialogClose>
                    </DialogHeaderActions>
                </DialogHeader>
                <DialogContent>
                    <p className="text-sm text-muted-foreground m-0">{description}</p>
                </DialogContent>
            </DialogPopup>
        </DialogPortal>
    </Dialog>
));

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Button onClick={() => dialog.open('basic', { title: 'Hello', description: 'This dialog was opened imperatively.' })}>Open dialog</Button>
            <dialog.Viewport />
        </div>
    );
}

```

### Update

Call `update(id, partialProps)` after `open` to change the mounted dialog's content without closing it.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogTitle
} from '@/components/ui/dialog';
import { createOverlayManager } from '@primereact/core/overlay-manager';

interface DialogPayload {
    title: string;
    description: string;
}

const dialog = createOverlayManager<DialogPayload>(({ title, description, ...rest }) => (
    <Dialog {...rest}>
        <DialogPortal>
            <DialogBackdrop />
            <DialogPopup className="max-w-sm w-full">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogHeaderActions>
                        <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                            <Times />
                        </DialogClose>
                    </DialogHeaderActions>
                </DialogHeader>
                <DialogContent>
                    <p className="text-sm text-muted-foreground m-0">{description}</p>
                </DialogContent>
            </DialogPopup>
        </DialogPortal>
    </Dialog>
));

export default function UpdateDemo() {
    const openAndUpdate = () => {
        const id = 'sync';

        dialog.open(id, {
            title: 'Syncing…',
            description: 'This dialog will update itself in 2 seconds.'
        });

        setTimeout(() => {
            dialog.update(id, {
                title: 'Synced',
                description: `Completed at ${new Date().toLocaleTimeString()}`
            });
        }, 2000);
    };

    return (
        <div className="flex justify-center">
            <Button onClick={openAndUpdate}>Open + update</Button>
            <dialog.Viewport />
        </div>
    );
}

```

### Stacked

Multiple entries mount side by side. `close()` with no id begins closing every open entry, each one finishes its own exit animation independently.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogTitle
} from '@/components/ui/dialog';
import { createOverlayManager } from '@primereact/core/overlay-manager';

interface DialogPayload {
    title: string;
    description: string;
}

const dialog = createOverlayManager<DialogPayload>(({ title, description, ...rest }) => (
    <Dialog {...rest}>
        <DialogPortal>
            <DialogBackdrop />
            <DialogPopup className="max-w-sm w-full">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogHeaderActions>
                        <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                            <Times />
                        </DialogClose>
                    </DialogHeaderActions>
                </DialogHeader>
                <DialogContent>
                    <p className="text-sm text-muted-foreground m-0">{description}</p>
                </DialogContent>
            </DialogPopup>
        </DialogPortal>
    </Dialog>
));

export default function StackedDemo() {
    const openThree = () => {
        dialog.open('first', { title: 'First', description: 'Opened first.' });
        dialog.open('second', { title: 'Second', description: 'Opened right after.' });
        dialog.open('third', { title: 'Third', description: 'All three are mounted together.' });
    };

    return (
        <div className="flex justify-center gap-2">
            <Button onClick={openThree}>Open three</Button>
            <dialog.Viewport />
        </div>
    );
}

```

### Confirm

Pass user-defined callbacks (like `onConfirm`) as part of your payload, they remain available inside the render function.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogTitle
} from '@/components/ui/dialog';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import * as React from 'react';

interface ConfirmPayload {
    title: string;
    description: string;
    confirmLabel?: string;
    onConfirm?: () => void;
}

const confirm = createOverlayManager<ConfirmPayload>(({ title, description, confirmLabel = 'Confirm', onConfirm, ...rest }) => (
    <Dialog {...rest}>
        <DialogPortal>
            <DialogBackdrop />
            <DialogPopup className="max-w-sm w-full">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogHeaderActions>
                        <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                            <Times />
                        </DialogClose>
                    </DialogHeaderActions>
                </DialogHeader>
                <DialogContent>
                    <div className="flex flex-col gap-6">
                        <p className="text-sm text-muted-foreground m-0">{description}</p>
                        <div className="flex justify-end gap-2">
                            <DialogClose as={Button} severity="secondary">
                                Cancel
                            </DialogClose>
                            <DialogClose as={Button} severity="danger" onClick={() => onConfirm?.()}>
                                {confirmLabel}
                            </DialogClose>
                        </div>
                    </div>
                </DialogContent>
            </DialogPopup>
        </DialogPortal>
    </Dialog>
));

export default function ConfirmDemo() {
    const [status, setStatus] = React.useState<string | null>(null);

    return (
        <div className="flex flex-col items-center gap-3">
            <Button
                severity="danger"
                onClick={() =>
                    confirm.open('delete', {
                        title: 'Delete item?',
                        description: 'This action cannot be undone.',
                        confirmLabel: 'Delete',
                        onConfirm: () => setStatus('Item deleted')
                    })
                }
            >
                Delete
            </Button>
            {status ? <span className="text-xs text-muted-foreground">{status}</span> : null}
            <confirm.Viewport />
        </div>
    );
}

```

### Drawer

The same API works for any overlay component that accepts `open` / `onOpenChange` / `onOpenChangeComplete`, here a managed `Drawer` with configurable position.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerBackdrop, DrawerClose, DrawerContent, DrawerHeader, DrawerPopup, DrawerPortal, DrawerTitle } from '@/components/ui/drawer';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import type { DrawerRootProps } from 'primereact/drawer';

interface DrawerPayload {
    title: string;
    description: string;
    position?: DrawerRootProps['position'];
}

const drawer = createOverlayManager<DrawerPayload>(({ title, description, ...rest }) => (
    <Drawer {...rest}>
        <DrawerPortal>
            <DrawerBackdrop />
            <DrawerPopup className="w-full md:w-80">
                <DrawerHeader>
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerClose as={Button} iconOnly variant="text" rounded severity="secondary">
                        <Times />
                    </DrawerClose>
                </DrawerHeader>
                <DrawerContent>
                    <p className="text-sm text-muted-foreground m-0">{description}</p>
                </DrawerContent>
            </DrawerPopup>
        </DrawerPortal>
    </Drawer>
));

export default function DrawerDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Button
                onClick={() => drawer.open('left', { title: 'Notifications', description: 'You have 3 unread notifications.', position: 'left' })}
            >
                Open left
            </Button>
            <Button
                variant="outlined"
                onClick={() => drawer.open('right', { title: 'Cart', description: 'Your cart is currently empty.', position: 'right' })}
            >
                Open right
            </Button>
            <drawer.Viewport />
        </div>
    );
}

```

### Popover

Popovers need an anchor element. Pass a ref to it through the payload and read it inside the render function. Popover's `onOpenChange` uses `{ open }` instead of `{ value }`, so the render function bridges the two.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverPopup,
    PopoverPortal,
    PopoverPositioner,
    PopoverTitle
} from '@/components/ui/popover';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import type * as React from 'react';

interface PopoverPayload {
    anchor: HTMLElement | null;
    title: string;
    description: string;
}

const popover = createOverlayManager<PopoverPayload>(({ title, description, ...rest }) => (
    <Popover {...rest}>
        <PopoverPortal>
            <PopoverPositioner sideOffset={8} side="bottom" align="start">
                <PopoverPopup className="max-w-64 w-full">
                    <PopoverArrow />
                    <PopoverHeader>
                        <PopoverTitle>{title}</PopoverTitle>
                    </PopoverHeader>
                    <PopoverContent>
                        <PopoverDescription>{description}</PopoverDescription>
                    </PopoverContent>
                </PopoverPopup>
            </PopoverPositioner>
        </PopoverPortal>
    </Popover>
));

export default function PopoverDemo() {
    return (
        <div className="flex justify-center">
            <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    popover.open('shortcut', {
                        anchor: e.currentTarget,
                        title: 'Shortcut',
                        description: 'Press ⌘K to open the command palette.'
                    })
                }
            >
                Show popover
            </Button>
            <popover.Viewport />
        </div>
    );
}

```

### Tooltip

Tooltip accepts an `anchor` prop for imperative use, just like Popover. Opening a tooltip from a click doesn't feel native, prefer Popover or Toast for click-driven flows, but the plumbing works identically when you need it.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipArrow, TooltipManager, TooltipPopup, TooltipPortal, TooltipPositioner } from '@/components/ui/tooltip';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import type * as React from 'react';

interface TooltipPayload {
    anchor: HTMLElement | null;
    description: string;
}

const tooltip = createOverlayManager<TooltipPayload>(({ description, ...rest }) => (
    <Tooltip {...rest} disabled openDelay={0} closeDelay={0}>
        <TooltipPortal>
            <TooltipPositioner sideOffset={8}>
                <TooltipPopup className="max-w-56">
                    <TooltipArrow />
                    {description}
                </TooltipPopup>
            </TooltipPositioner>
        </TooltipPortal>
    </Tooltip>
));

export default function TooltipDemo() {
    const triggers = [
        { label: 'First', description: 'Saved to your library.' },
        { label: 'Second', description: 'Shared across the team.' },
        { label: 'Third', description: 'Archived after 30 days.' }
    ];

    return (
        <TooltipManager>
            <div className="flex justify-center gap-2">
                {triggers.map((t) => (
                    <Button
                        key={t.label}
                        onPointerEnter={(e: React.PointerEvent<HTMLButtonElement>) =>
                            tooltip.open('shared', { anchor: e.currentTarget, description: t.description })
                        }
                        onPointerLeave={() => tooltip.close('shared')}
                    >
                        {t.label}
                    </Button>
                ))}
                <tooltip.Viewport />
            </div>
        </TooltipManager>
    );
}

```
