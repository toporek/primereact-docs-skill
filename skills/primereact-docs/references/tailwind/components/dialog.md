# Dialog

Dialog is a container to display content in an overlay window.

```tsx
'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';
import { Times } from '@primeicons/react';

export default function Preview() {
    return (
        <div className="flex justify-center">
            <Dialog draggable>
                <DialogTrigger as={Button}>Edit Profile</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup style={{ width: '28rem' }}>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <Avatar shape="circle" size="xlarge">
                                            <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                                            <AvatarFallback>AM</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-lg mt-0 mb-1">Amanda Miller</p>
                                            <p className="text-surface-500 dark:text-surface-400 mt-0 mb-0 text-sm">amanda@example.com</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="tw-name" className="text-sm font-semibold">
                                            Name
                                        </Label>
                                        <InputText id="tw-name" defaultValue="Amanda Miller" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="tw-username" className="text-sm font-semibold">
                                            Username
                                        </Label>
                                        <InputText id="tw-username" defaultValue="@amandamiller" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="tw-email" className="text-sm font-semibold">
                                            Email
                                        </Label>
                                        <InputText id="tw-email" defaultValue="amanda@example.com" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <DialogClose as={Button} severity="secondary">
                                            Cancel
                                        </DialogClose>
                                        <DialogClose as={Button}>Save Changes</DialogClose>
                                    </div>
                                </div>
                            </DialogContent>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/dialog.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Dialog, DialogBackdrop, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogHeaderActions, DialogMaximizable, DialogPopup, DialogPortal, DialogPositioner, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
```

```tsx
<Dialog>
    <DialogTrigger />
    <DialogPortal>
        <DialogBackdrop />
        <DialogPositioner>
            <DialogPopup>
                <DialogHeader>
                    <DialogTitle />
                    <DialogHeaderActions>
                        <DialogMaximizable />
                        <DialogClose />
                    </DialogHeaderActions>
                </DialogHeader>
                <DialogContent />
                <DialogFooter />
            </DialogPopup>
        </DialogPositioner>
    </DialogPortal>
</Dialog>
```

## Examples

### Basic

```tsx
'use client';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';
import { Times } from '@primeicons/react';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Dialog>
                <DialogTrigger as={Button}>Open Trigger</DialogTrigger>

                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup className="max-w-sm w-full">
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <Label htmlFor="name">Name</Label>
                                        <InputText id="name" defaultValue="Amanda Miller" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <InputText id="email" defaultValue="amanda@example.com" />
                                    </div>
                                </div>
                            </DialogContent>
                            <DialogFooter>
                                <DialogClose as={Button} severity="secondary" variant="outlined">
                                    Cancel
                                </DialogClose>
                                <DialogClose as={Button}>Save</DialogClose>
                            </DialogFooter>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Draggable

A dialog can be repositioned by dragging its header when the `draggable` prop is enabled.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';

export default function DraggableDemo() {
    return (
        <div className="flex justify-center">
            <Dialog draggable>
                <DialogTrigger as={Button}>Open Note</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup style={{ width: '24rem' }}>
                            <DialogHeader>
                                <DialogTitle>Quick Note</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-surface-500 dark:text-surface-400 mt-0 mb-0">
                                        Drag this dialog by its header to reposition it anywhere on the screen.
                                    </p>
                                    <textarea
                                        className="w-full h-32 p-3 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        placeholder="Type your note here..."
                                        defaultValue="Remember to review the design specs for the new dashboard layout before the meeting tomorrow."
                                    />
                                </div>
                            </DialogContent>
                            <DialogFooter>
                                <DialogClose as={Button} severity="secondary">
                                    Discard
                                </DialogClose>
                                <DialogClose as={Button}>Save Note</DialogClose>
                            </DialogFooter>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Position

The position of the dialog can be customized with the `position` property. The available values are `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `right`, and `center`.

```tsx
'use client';
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
    DialogPositioner,
    DialogTitle
} from '@/components/ui/dialog';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';
import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpLeft, ArrowUpRight, Times } from '@primeicons/react';
import { DialogRootChangeEvent, DialogRootProps } from 'primereact/dialog';
import * as React from 'react';

export default function PositionDemo() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [position, setPosition] = React.useState<DialogRootProps['position']>('center');

    const openPosition = (position: DialogRootProps['position']) => {
        setOpen(true);
        setPosition(position);
    };

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button onClick={() => openPosition('left')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Left
                    <ArrowRight />
                </Button>
                <Button onClick={() => openPosition('right')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Right
                    <ArrowLeft />
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button onClick={() => openPosition('topleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopLeft
                    <ArrowDownRight />
                </Button>
                <Button onClick={() => openPosition('top')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Top
                    <ArrowDown />
                </Button>
                <Button onClick={() => openPosition('topright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopRight
                    <ArrowDownLeft />
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <Button onClick={() => openPosition('bottomleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomLeft
                    <ArrowUpRight />
                </Button>
                <Button onClick={() => openPosition('bottom')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Bottom
                    <ArrowUp />
                </Button>
                <Button onClick={() => openPosition('bottomright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomRight
                    <ArrowUpLeft />
                </Button>
            </div>
            <Dialog open={open} onOpenChange={(e: DialogRootChangeEvent) => setOpen(e.value as boolean)} position={position}>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup style={{ width: '25rem' }}>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-6">
                                    <span className="text-surface-500 dark:text-surface-400">Update your information.</span>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="username" className="font-semibold">
                                            Username
                                        </Label>
                                        <InputText id="username" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="email" className="font-semibold">
                                            Email
                                        </Label>
                                        <InputText id="email" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <DialogClose as={Button} severity="secondary">
                                            Cancel
                                        </DialogClose>
                                        <DialogClose as={Button}>Save</DialogClose>
                                    </div>
                                </div>
                            </DialogContent>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Maximizable

A dialog can be maximized by clicking the _Dialog.Maximizable_ button.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogHeaderActions,
    DialogMaximizable,
    DialogPopup,
    DialogPortal,
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Times, WindowMaximize, WindowMinimize } from '@primeicons/react';

export default function MaximizableDemo() {
    return (
        <div className="flex justify-center">
            <Dialog>
                <DialogTrigger as={Button}>Open Trigger</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup style={{ width: '50rem' }}>
                            <DialogHeader>
                                <DialogTitle>Article Preview</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogMaximizable as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <WindowMaximize className="in-data-maximized:hidden!" />
                                        <WindowMinimize className="in-data-minimized:hidden!" />
                                    </DialogMaximizable>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                                        <span>Published on Feb 1, 2026</span>
                                        <span>·</span>
                                        <span>5 min read</span>
                                    </div>
                                    <h2 className="text-xl font-bold mt-0 mb-0">Getting Started with Component-Driven Development</h2>
                                    <p className="leading-relaxed mt-0 mb-0">
                                        Component-driven development is an approach that focuses on building loosely coupled, independent components
                                        that can be composed together to build complex user interfaces. This methodology promotes reusability,
                                        testability, and maintainability.
                                    </p>
                                    <p className="leading-relaxed mt-0 mb-0">
                                        By breaking down the UI into smaller, self-contained pieces, teams can work in parallel on different parts of
                                        the application without stepping on each other&apos;s toes. Each component encapsulates its own logic, styles,
                                        and behavior, making it easier to reason about and test in isolation.
                                    </p>
                                    <p className="leading-relaxed mt-0 mb-0">
                                        Modern frameworks and libraries have embraced this pattern, providing tools and conventions that make it
                                        straightforward to create, compose, and manage components at scale. The result is a more predictable,
                                        scalable, and enjoyable development experience.
                                    </p>
                                </div>
                            </DialogContent>
                            <DialogFooter>
                                <div className="flex items-center justify-between w-full text-sm text-surface-500 dark:text-surface-400">
                                    <span>Last updated: Feb 1, 2026</span>
                                    <span>Author: Jane Doe</span>
                                </div>
                            </DialogFooter>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Full Screen

The `fullScreen` prop opens the dialog in maximized mode. Without a _Dialog.Maximizable_ button, the dialog remains full screen until closed.

```tsx
'use client';
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
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Image as ImageIcon, Times } from '@primeicons/react';

const photos = Array.from({ length: 18 }, (_, i) => i + 1);

export default function FullScreenDemo() {
    return (
        <div className="flex justify-center">
            <Dialog fullScreen>
                <DialogTrigger as={Button}>Open Trigger</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup>
                            <DialogHeader>
                                <DialogTitle>Photo Gallery</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                        {photos.map((i) => (
                                            <div
                                                key={i}
                                                className="aspect-square rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center"
                                            >
                                                <ImageIcon className="text-2xl text-surface-400" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-surface-500 dark:text-surface-400 mt-0 mb-0">Showing 18 of 64 photos</p>
                                </div>
                            </DialogContent>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Modal

A modal dialog with a backdrop that blocks interaction with the page. When `modal` and `dismissable` are both enabled, clicking outside the dialog closes it.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
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
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';

export default function ModalDemo() {
    return (
        <div className="flex justify-center">
            <Dialog modal dismissable>
                <DialogTrigger as={Button}>Edit Profile</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup style={{ width: '25rem' }}>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-6">
                                    <span className="text-surface-500 dark:text-surface-400">
                                        Update your information. Click outside the dialog to dismiss.
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="username" className="font-semibold">
                                            Username
                                        </Label>
                                        <InputText id="username" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="email" className="font-semibold">
                                            Email
                                        </Label>
                                        <InputText id="email" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <DialogClose as={Button} severity="secondary">
                                            Cancel
                                        </DialogClose>
                                        <DialogClose as={Button}>Save</DialogClose>
                                    </div>
                                </div>
                            </DialogContent>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Without Modal

A dialog without a modal layer. The page remains interactive behind the dialog.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';
import { Times } from '@primeicons/react';

export default function WithoutModalDemo() {
    return (
        <div className="flex justify-center">
            <Dialog>
                <DialogTrigger as={Button}>Open Trigger</DialogTrigger>
                <DialogPortal>
                    <DialogPositioner>
                        <DialogPopup style={{ width: '25rem' }}>
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-6">
                                    <span className="text-surface-500 dark:text-surface-400">Update your information.</span>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="username" className="font-semibold">
                                            Username
                                        </Label>
                                        <InputText id="username" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="email" className="font-semibold">
                                            Email
                                        </Label>
                                        <InputText id="email" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <DialogClose as={Button} severity="secondary">
                                            Cancel
                                        </DialogClose>
                                        <DialogClose as={Button}>Save</DialogClose>
                                    </div>
                                </div>
                            </DialogContent>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Confirmation

A common pattern for confirmation dialogs with warning messages and action buttons.

```tsx
'use client';
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
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { ExclamationTriangle, Times } from '@primeicons/react';

export default function ConfirmationDemo() {
    return (
        <div className="flex justify-center">
            <Dialog>
                <DialogTrigger as={Button}>Open Trigger</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup style={{ width: '26rem' }}>
                            <DialogHeader>
                                <DialogTitle>Confirm Deletion</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-3">
                                        <ExclamationTriangle className="text-orange-500 w-16 h-16 mt-0.5" />
                                        <div>
                                            <p className="font-semibold mt-0 mb-2">Are you sure you want to delete your account?</p>
                                            <p className="text-surface-500 dark:text-surface-400 text-sm mt-0 mb-0">
                                                This action cannot be undone. All of your data, including projects, files, and settings will be
                                                permanently removed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <DialogClose as={Button} severity="secondary">
                                            Cancel
                                        </DialogClose>
                                        <DialogClose as={Button} severity="danger">
                                            Delete
                                        </DialogClose>
                                    </div>
                                </div>
                            </DialogContent>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Inside Scroll

When `scrollBehavior` is set to `inside`, the dialog content area scrolls while the header and footer remain fixed.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Tag } from '@/components/ui/tag';

export default function InsideScrollDemo() {
    return (
        <div className="flex justify-center">
            <Dialog scrollBehavior="inside">
                <DialogTrigger as={Button}>Inside Scroll</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup style={{ width: '40rem' }}>
                            <DialogHeader>
                                <DialogTitle>Terms of Service</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <Tag severity="info">Updated</Tag>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">Last revised: January 1, 2026</span>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">1. Acceptance of Terms</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            By accessing and using this service, you accept and agree to be bound by the terms and provision of this
                                            agreement. If you do not agree to abide by the above, please do not use this service.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">2. Use License</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            Permission is granted to temporarily download one copy of the materials on this service for personal,
                                            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
                                            this license you may not modify or copy the materials, use the materials for any commercial purpose, or
                                            attempt to decompile or reverse engineer any software contained on this service.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">3. Disclaimer</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            The materials on this service are provided on an &apos;as is&apos; basis. We make no warranties, expressed
                                            or implied, and hereby disclaim and negate all other warranties including, without limitation, implied
                                            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                                            intellectual property or other violation of rights.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">4. Limitations</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages
                                            for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                                            the materials on this service, even if we or an authorized representative has been notified orally or in
                                            writing of the possibility of such damage.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">5. Privacy Policy</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                                            personal information when you use our service. By using our service, you agree to the collection and use
                                            of information in accordance with our Privacy Policy. We are committed to ensuring that your information
                                            is secure and handled responsibly.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">6. User Accounts</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            When you create an account with us, you must provide information that is accurate, complete, and current
                                            at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                                            termination of your account on our service. You are responsible for safeguarding the password that you use
                                            to access the service and for any activities or actions under your password.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">7. Intellectual Property</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            The service and its original content, features, and functionality are and will remain the exclusive
                                            property of the company and its licensors. The service is protected by copyright, trademark, and other
                                            laws of both domestic and foreign countries. Our trademarks and trade dress may not be used in connection
                                            with any product or service without the prior written consent of the company.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">8. Termination</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                                            whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the
                                            service will immediately cease. If you wish to terminate your account, you may simply discontinue using
                                            the service or contact us to request account deletion.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">9. Indemnification</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            You agree to defend, indemnify, and hold harmless the company and its licensee and licensors, and their
                                            employees, contractors, agents, officers, and directors, from and against any and all claims, damages,
                                            obligations, losses, liabilities, costs or debt, and expenses, including but not limited to
                                            attorney&apos;s fees, resulting from or arising out of your use and access of the service, or a breach of
                                            these Terms.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">10. Governing Law</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            These terms and conditions are governed by and construed in accordance with applicable laws and you
                                            irrevocably submit to the exclusive jurisdiction of the courts in that location. Any claim relating to
                                            this service shall be governed by the laws without regard to its conflict of law provisions.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">11. Changes to Terms</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
                                            is material we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
                                            What constitutes a material change will be determined at our sole discretion. By continuing to access or
                                            use our service after those revisions become effective, you agree to be bound by the revised terms.
                                        </p>
                                    </div>
                                </div>
                            </DialogContent>
                            <DialogFooter>
                                <DialogClose as={Button} severity="secondary">
                                    Decline
                                </DialogClose>
                                <DialogClose as={Button}>Accept</DialogClose>
                            </DialogFooter>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Outside Scroll

When `scrollBehavior` is set to `outside`, the entire dialog scrolls within the positioner, allowing the full dialog to move as a single unit.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogHeaderActions,
    DialogPopup,
    DialogPortal,
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Tag } from '@/components/ui/tag';

export default function OutsideScrollDemo() {
    return (
        <div className="flex justify-center">
            <Dialog scrollBehavior="outside" draggable keepInViewport={false}>
                <DialogTrigger as={Button}>Outside Scroll</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup style={{ width: '40rem' }}>
                            <DialogHeader>
                                <DialogTitle>Terms of Service</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <Tag severity="info">Updated</Tag>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">Last revised: January 1, 2026</span>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">1. Acceptance of Terms</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            By accessing and using this service, you accept and agree to be bound by the terms and provision of this
                                            agreement. If you do not agree to abide by the above, please do not use this service.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">2. Use License</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            Permission is granted to temporarily download one copy of the materials on this service for personal,
                                            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
                                            this license you may not modify or copy the materials, use the materials for any commercial purpose, or
                                            attempt to decompile or reverse engineer any software contained on this service.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">3. Disclaimer</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            The materials on this service are provided on an &apos;as is&apos; basis. We make no warranties, expressed
                                            or implied, and hereby disclaim and negate all other warranties including, without limitation, implied
                                            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                                            intellectual property or other violation of rights.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">4. Limitations</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages
                                            for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                                            the materials on this service, even if we or an authorized representative has been notified orally or in
                                            writing of the possibility of such damage.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">5. Privacy Policy</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                                            personal information when you use our service. By using our service, you agree to the collection and use
                                            of information in accordance with our Privacy Policy. We are committed to ensuring that your information
                                            is secure and handled responsibly.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">6. User Accounts</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            When you create an account with us, you must provide information that is accurate, complete, and current
                                            at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                                            termination of your account on our service. You are responsible for safeguarding the password that you use
                                            to access the service and for any activities or actions under your password.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">7. Intellectual Property</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            The service and its original content, features, and functionality are and will remain the exclusive
                                            property of the company and its licensors. The service is protected by copyright, trademark, and other
                                            laws of both domestic and foreign countries. Our trademarks and trade dress may not be used in connection
                                            with any product or service without the prior written consent of the company.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">8. Termination</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                                            whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the
                                            service will immediately cease. If you wish to terminate your account, you may simply discontinue using
                                            the service or contact us to request account deletion.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">9. Indemnification</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            You agree to defend, indemnify, and hold harmless the company and its licensee and licensors, and their
                                            employees, contractors, agents, officers, and directors, from and against any and all claims, damages,
                                            obligations, losses, liabilities, costs or debt, and expenses, including but not limited to
                                            attorney&apos;s fees, resulting from or arising out of your use and access of the service, or a breach of
                                            these Terms.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">10. Governing Law</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            These terms and conditions are governed by and construed in accordance with applicable laws and you
                                            irrevocably submit to the exclusive jurisdiction of the courts in that location. Any claim relating to
                                            this service shall be governed by the laws without regard to its conflict of law provisions.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold mt-0 mb-2">11. Changes to Terms</h3>
                                        <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
                                            is material we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
                                            What constitutes a material change will be determined at our sole discretion. By continuing to access or
                                            use our service after those revisions become effective, you agree to be bound by the revised terms.
                                        </p>
                                    </div>
                                </div>
                            </DialogContent>
                            <DialogFooter>
                                <DialogClose as={Button} severity="secondary">
                                    Decline
                                </DialogClose>
                                <DialogClose as={Button}>Accept</DialogClose>
                            </DialogFooter>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

### Responsive

Dialog width adapts to different screen sizes using responsive CSS classes on the _DialogPopup_.

```tsx
'use client';
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
    DialogPositioner,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';
import { Times } from '@primeicons/react';

export default function ResponsiveDemo() {
    return (
        <div className="flex justify-center">
            <Dialog>
                <DialogTrigger as={Button}>Open Trigger</DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPositioner>
                        <DialogPopup className="w-[90vw] md:w-[75vw] lg:w-[50vw]">
                            <DialogHeader>
                                <DialogTitle>Create Event</DialogTitle>
                                <DialogHeaderActions>
                                    <DialogClose as={Button} iconOnly variant="text" rounded severity="secondary">
                                        <Times />
                                    </DialogClose>
                                </DialogHeaderActions>
                            </DialogHeader>
                            <DialogContent>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="eventName" className="text-sm font-semibold">
                                            Event Name
                                        </Label>
                                        <InputText id="eventName" placeholder="e.g. Team Standup" />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex flex-col gap-1 flex-1">
                                            <Label htmlFor="organizer" className="text-sm font-semibold">
                                                Organizer
                                            </Label>
                                            <InputText id="organizer" placeholder="Name" />
                                        </div>
                                        <div className="flex flex-col gap-1 flex-1">
                                            <Label htmlFor="email" className="text-sm font-semibold">
                                                Email
                                            </Label>
                                            <InputText id="email" placeholder="organizer@example.com" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="location" className="text-sm font-semibold">
                                            Location
                                        </Label>
                                        <InputText id="location" placeholder="Add a location or video link" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="description" className="text-sm font-semibold">
                                            Description
                                        </Label>
                                        <InputText id="description" placeholder="Event details" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-end gap-2 mt-2">
                                        <DialogClose as={Button} severity="secondary">
                                            Cancel
                                        </DialogClose>
                                        <DialogClose as={Button}>Create Event</DialogClose>
                                    </div>
                                </div>
                            </DialogContent>
                        </DialogPopup>
                    </DialogPositioner>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

```

## Accessibility

### Screen Reader

Dialog component uses `dialog` role along with `aria-labelledby` referring to the header element however any attribute is passed to the root element so `aria-labelledby` can be used to override this default behavior. In addition `aria-modal` is added since focus is kept within the popup.

Trigger element also has aria-expanded and aria-controls to be handled explicitly.

### Overlay Keyboard Support

| Key           | Function                                                                                                                                           |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`         | Moves focus to the next the focusable element within the dialog if `modal` is true. Otherwise, the focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous the focusable element within the dialog if `modal` is true. Otherwise, the focusable element in the page tab sequence. |
| `escape`      | Closes the dialog if `closeOnEscape` is true.                                                                                                      |

### Close Button Keyboard Support

| Key     | Function           |
| ------- | ------------------ |
| `enter` | Closes the dialog. |
| `space` | Closes the dialog. |
