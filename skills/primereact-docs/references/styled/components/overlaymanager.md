# OverlayManager

OverlayManager opens overlay components imperatively from anywhere in your app.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';

interface DialogPayload {
    title: string;
    description: string;
}

const dialog = createOverlayManager<DialogPayload>(({ title, description, ...rest }) => (
    <Dialog.Root {...rest}>
        <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Popup style={{ width: '22rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <p className="text-sm text-muted-color m-0">{description}</p>
                    </Dialog.Content>
                </Dialog.Popup>
            </Dialog.Positioner>
        </Dialog.Portal>
    </Dialog.Root>
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
    <Dialog.Root {...rest}>
        <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Popup>
                    <Dialog.Header>
                        <Dialog.Title>{title}</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Content>{description}</Dialog.Content>
                </Dialog.Popup>
            </Dialog.Positioner>
        </Dialog.Portal>
    </Dialog.Root>
));
```

The render function receives the caller props merged with three injected lifecycle props, `open`, `onOpenChange`, and `onExitComplete`. Spreading them onto `Dialog.Root` lets the manager fully control open state, entry into the tree, and removal after the exit animation.

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
import { Times } from '@primeicons/react/times';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';

interface DialogPayload {
    title: string;
    description: string;
}

const dialog = createOverlayManager<DialogPayload>(({ title, description, ...rest }) => (
    <Dialog.Root {...rest}>
        <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Popup style={{ width: '24rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <p className="text-sm text-muted-color m-0">{description}</p>
                    </Dialog.Content>
                </Dialog.Popup>
            </Dialog.Positioner>
        </Dialog.Portal>
    </Dialog.Root>
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
import { Times } from '@primeicons/react/times';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';

interface DialogPayload {
    title: string;
    description: string;
}

const dialog = createOverlayManager<DialogPayload>(({ title, description, ...rest }) => (
    <Dialog.Root {...rest}>
        <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Popup style={{ width: '24rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <p className="text-sm text-muted-color m-0">{description}</p>
                    </Dialog.Content>
                </Dialog.Popup>
            </Dialog.Positioner>
        </Dialog.Portal>
    </Dialog.Root>
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
import { Times } from '@primeicons/react/times';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';

interface DialogPayload {
    title: string;
    description: string;
}

const dialog = createOverlayManager<DialogPayload>(({ title, description, ...rest }) => (
    <Dialog.Root {...rest}>
        <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Popup style={{ width: '22rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <p className="text-sm text-muted-color m-0">{description}</p>
                    </Dialog.Content>
                </Dialog.Popup>
            </Dialog.Positioner>
        </Dialog.Portal>
    </Dialog.Root>
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
import { Times } from '@primeicons/react/times';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';
import * as React from 'react';

interface ConfirmPayload {
    title: string;
    description: string;
    confirmLabel?: string;
    onConfirm?: () => void;
}

const confirm = createOverlayManager<ConfirmPayload>(({ title, description, confirmLabel = 'Confirm', onConfirm, ...rest }) => (
    <Dialog.Root {...rest}>
        <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Popup style={{ width: '22rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <div className="flex flex-col gap-6">
                            <p className="text-sm text-muted-color m-0">{description}</p>
                            <div className="flex justify-end gap-2">
                                <Dialog.Close as={Button} severity="secondary">
                                    Cancel
                                </Dialog.Close>
                                <Dialog.Close as={Button} severity="danger" onClick={() => onConfirm?.()}>
                                    {confirmLabel}
                                </Dialog.Close>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Popup>
            </Dialog.Positioner>
        </Dialog.Portal>
    </Dialog.Root>
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
            {status ? <span className="text-xs text-muted-color">{status}</span> : null}
            <confirm.Viewport />
        </div>
    );
}

```

### Drawer

The same API works for any overlay component that accepts `open` / `onOpenChange` / `onOpenChangeComplete`, here a managed `Drawer` with configurable position.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { createOverlayManager } from '@primereact/core/overlay-manager';
import type { DrawerRootProps } from '@primereact/ui/drawer';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';

interface DrawerPayload {
    title: string;
    description: string;
    position?: DrawerRootProps['position'];
}

const drawer = createOverlayManager<DrawerPayload>(({ title, description, ...rest }) => (
    <Drawer.Root {...rest}>
        <Drawer.Portal>
            <Drawer.Backdrop />
            <Drawer.Popup className="w-full! md:w-80!">
                <Drawer.Header>
                    <Drawer.Title>{title}</Drawer.Title>
                    <Drawer.Close as={Button} rounded variant="text" iconOnly>
                        <Times />
                    </Drawer.Close>
                </Drawer.Header>
                <Drawer.Content>
                    <p className="text-sm text-muted-color m-0">{description}</p>
                </Drawer.Content>
            </Drawer.Popup>
        </Drawer.Portal>
    </Drawer.Root>
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
import { createOverlayManager } from '@primereact/core/overlay-manager';
import { Button } from '@primereact/ui/button';
import { Popover } from '@primereact/ui/popover';
import type * as React from 'react';

interface PopoverPayload {
    anchor: HTMLElement | null;
    title: string;
    description: string;
}

const popover = createOverlayManager<PopoverPayload>(({ title, description, ...rest }) => (
    <Popover.Root {...rest}>
        <Popover.Portal>
            <Popover.Positioner sideOffset={8} side="bottom" align="start">
                <Popover.Popup className="max-w-64 w-full">
                    <Popover.Arrow />
                    <Popover.Header>
                        <Popover.Title>{title}</Popover.Title>
                    </Popover.Header>
                    <Popover.Content>
                        <Popover.Description>{description}</Popover.Description>
                    </Popover.Content>
                </Popover.Popup>
            </Popover.Positioner>
        </Popover.Portal>
    </Popover.Root>
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
import { createOverlayManager } from '@primereact/core/overlay-manager';
import { Button } from '@primereact/ui/button';
import { Tooltip } from '@primereact/ui/tooltip';
import type * as React from 'react';

interface TooltipPayload {
    anchor: HTMLElement | null;
    description: string;
}

const tooltip = createOverlayManager<TooltipPayload>(({ description, ...rest }) => (
    <Tooltip.Root {...rest} disabled openDelay={0} closeDelay={0}>
        <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={8}>
                <Tooltip.Popup className="max-w-56">
                    <Tooltip.Arrow />
                    {description}
                </Tooltip.Popup>
            </Tooltip.Positioner>
        </Tooltip.Portal>
    </Tooltip.Root>
));

export default function TooltipDemo() {
    const triggers = [
        { label: 'First', description: 'Saved to your library.' },
        { label: 'Second', description: 'Shared across the team.' },
        { label: 'Third', description: 'Archived after 30 days.' }
    ];

    return (
        <Tooltip.Manager>
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
        </Tooltip.Manager>
    );
}

```
