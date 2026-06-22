# ConfirmDialog

ConfirmDialog uses a Dialog UI

```tsx
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';

export default function Preview() {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger as={Button} variant="outlined">
                    Save
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Backdrop />
                    <ConfirmDialog.Positioner>
                        <ConfirmDialog.Popup>
                            <ConfirmDialog.Header>
                                <ConfirmDialog.Title>Edit Profile</ConfirmDialog.Title>
                                <ConfirmDialog.Close as={Button} iconOnly variant="text" rounded severity="secondary">
                                    <Times />
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Header>
                            <ConfirmDialog.Content>
                                <ExclamationTriangle className="w-8! h-8!" />
                                <ConfirmDialog.Message>Are you sure you want to proceed?</ConfirmDialog.Message>
                            </ConfirmDialog.Content>
                            <ConfirmDialog.Footer>
                                <ConfirmDialog.Close as={Button} variant="outlined">
                                    Cancel
                                </ConfirmDialog.Close>
                                <ConfirmDialog.Close as={Button}>Save</ConfirmDialog.Close>
                            </ConfirmDialog.Footer>
                        </ConfirmDialog.Popup>
                    </ConfirmDialog.Positioner>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger as={Button} severity="danger" variant="outlined">
                    Delete
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Backdrop />
                    <ConfirmDialog.Positioner>
                        <ConfirmDialog.Popup>
                            <ConfirmDialog.Header>
                                <ConfirmDialog.Title>Danger Zone</ConfirmDialog.Title>
                                <ConfirmDialog.Close as={Button} iconOnly variant="text" rounded severity="secondary">
                                    <Times />
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Header>
                            <ConfirmDialog.Content>
                                <ConfirmDialog.Message>Do you want to delete this record?</ConfirmDialog.Message>
                            </ConfirmDialog.Content>
                            <ConfirmDialog.Footer>
                                <ConfirmDialog.Close as={Button} variant="outlined">
                                    Cancel
                                </ConfirmDialog.Close>
                                <ConfirmDialog.Close as={Button} severity="danger">
                                    Delete
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Footer>
                        </ConfirmDialog.Popup>
                    </ConfirmDialog.Positioner>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
```

## Usage

```tsx
import { ConfirmDialog } from '@primereact/ui/confirmdialog';
```

```tsx
<ConfirmDialog.Root>
    <ConfirmDialog.Trigger />
    <ConfirmDialog.Portal>
        <ConfirmDialog.Backdrop />
        <ConfirmDialog.Positioner>
            <ConfirmDialog.Popup>
                <ConfirmDialog.Header>
                    <ConfirmDialog.Title />
                    <ConfirmDialog.HeaderActions>
                        <ConfirmDialog.Close />
                    </ConfirmDialog.HeaderActions>
                </ConfirmDialog.Header>
                <ConfirmDialog.Content />
                <ConfirmDialog.Footer />
            </ConfirmDialog.Popup>
        </ConfirmDialog.Positioner>
    </ConfirmDialog.Portal>
</ConfirmDialog.Root>
```

## Examples

### Basic

Prompts the user for confirmation before proceeding with an action.

```tsx
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger as={Button} variant="outlined">
                    Save
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Backdrop />
                    <ConfirmDialog.Positioner>
                        <ConfirmDialog.Popup>
                            <ConfirmDialog.Header>
                                <ConfirmDialog.Title>Edit Profile</ConfirmDialog.Title>
                                <ConfirmDialog.Close as={Button} iconOnly variant="text" rounded severity="secondary">
                                    <Times />
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Header>
                            <ConfirmDialog.Content>
                                <ExclamationTriangle className="w-8! h-8!" />
                                <ConfirmDialog.Message>Are you sure you want to proceed?</ConfirmDialog.Message>
                            </ConfirmDialog.Content>
                            <ConfirmDialog.Footer>
                                <ConfirmDialog.Close as={Button} variant="outlined">
                                    Cancel
                                </ConfirmDialog.Close>
                                <ConfirmDialog.Close as={Button}>Save</ConfirmDialog.Close>
                            </ConfirmDialog.Footer>
                        </ConfirmDialog.Popup>
                    </ConfirmDialog.Positioner>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger as={Button} severity="danger" variant="outlined">
                    Delete
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Backdrop />
                    <ConfirmDialog.Positioner>
                        <ConfirmDialog.Popup>
                            <ConfirmDialog.Header>
                                <ConfirmDialog.Title>Danger Zone</ConfirmDialog.Title>
                                <ConfirmDialog.Close as={Button} iconOnly variant="text" rounded severity="secondary">
                                    <Times />
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Header>
                            <ConfirmDialog.Content>
                                <ConfirmDialog.Message>Do you want to delete this record?</ConfirmDialog.Message>
                            </ConfirmDialog.Content>
                            <ConfirmDialog.Footer>
                                <ConfirmDialog.Close as={Button} variant="outlined">
                                    Cancel
                                </ConfirmDialog.Close>
                                <ConfirmDialog.Close as={Button} severity="danger">
                                    Delete
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Footer>
                        </ConfirmDialog.Popup>
                    </ConfirmDialog.Positioner>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
```

### Position

The position of the confirmdialog can be customized with the `position` property. The available values are `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `right`, and `center`.

```tsx
'use client';
import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowUp, ArrowUpLeft, ArrowUpRight } from '@primeicons/react';
import { ArrowLeft } from '@primeicons/react/arrow-left';
import { ArrowRight } from '@primeicons/react/arrow-right';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';
import { ConfirmDialogRootChangeEvent, ConfirmDialogRootProps } from 'primereact/confirmdialog';
import * as React from 'react';

export default function PositionDemo() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [position, setPosition] = React.useState<ConfirmDialogRootProps['position']>('center');

    const openPosition = (position: ConfirmDialogRootProps['position']) => {
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
            <ConfirmDialog.Root open={open} onOpenChange={(e: ConfirmDialogRootChangeEvent) => setOpen(e.value as boolean)} position={position}>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Backdrop />
                    <ConfirmDialog.Positioner>
                        <ConfirmDialog.Popup>
                            <ConfirmDialog.Header>
                                <ConfirmDialog.Title>Edit Profile</ConfirmDialog.Title>
                                <ConfirmDialog.Close as={Button} iconOnly variant="text" rounded severity="secondary">
                                    <Times />
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Header>
                            <ConfirmDialog.Content>
                                <ExclamationTriangle className="w-8! h-8!" />
                                <ConfirmDialog.Message>Are you sure you want to proceed?</ConfirmDialog.Message>
                            </ConfirmDialog.Content>
                            <ConfirmDialog.Footer>
                                <ConfirmDialog.Close as={Button} variant="text">
                                    Cancel
                                </ConfirmDialog.Close>
                                <ConfirmDialog.Close as={Button}>Save</ConfirmDialog.Close>
                            </ConfirmDialog.Footer>
                        </ConfirmDialog.Popup>
                    </ConfirmDialog.Positioner>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
```

### Delete Confirmation

A confirmation dialog for delete operations with product details and warning message. Ideal for e-commerce and inventory management scenarios.

```tsx
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Times } from '@primeicons/react/times';
import { Trash } from '@primeicons/react/trash';
import { Button } from '@primereact/ui/button';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';

export default function DeleteDemo() {
    return (
        <div className="flex justify-center">
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger as={Button} severity="danger" variant="outlined">
                    <Trash />
                    Delete Product
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Backdrop />
                    <ConfirmDialog.Positioner>
                        <ConfirmDialog.Popup style={{ width: '28rem' }}>
                            <ConfirmDialog.Header>
                                <ConfirmDialog.Title>Delete Product</ConfirmDialog.Title>
                                <ConfirmDialog.Close as={Button} iconOnly variant="text" rounded severity="secondary">
                                    <Times />
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Header>
                            <ConfirmDialog.Content>
                                <div className="flex flex-col gap-4 py-2">
                                    <div className="flex items-center gap-4 p-4 bg-surface-50 dark:bg-surface-800 rounded-xl">
                                        <Image
                                            src="https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg"
                                            alt="Bamboo Watch"
                                            width={80}
                                            height={80}
                                            className="rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-semibold text-surface-700 dark:text-surface-200 m-0">Bamboo Watch</h4>
                                                <Tag severity="success" className="text-xs">
                                                    In Stock
                                                </Tag>
                                            </div>
                                            <p className="text-surface-500 dark:text-surface-400 text-sm m-0">Product Code: f230fh0g3</p>
                                            <p className="text-primary font-semibold mt-2 mb-0">$65.00</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                                        <ExclamationTriangle className="text-orange-500 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-orange-700 dark:text-orange-300 text-sm m-0">Warning</p>
                                            <p className="text-orange-600 dark:text-orange-400 text-xs mt-1 mb-0">
                                                This will remove the product from your inventory and cannot be recovered.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ConfirmDialog.Content>
                            <ConfirmDialog.Footer>
                                <ConfirmDialog.Close as={Button} variant="outlined">
                                    Cancel
                                </ConfirmDialog.Close>
                                <ConfirmDialog.Close as={Button} severity="danger">
                                    <Trash />
                                    Delete Product
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Footer>
                        </ConfirmDialog.Popup>
                    </ConfirmDialog.Positioner>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
```

### Logout Confirmation

A user-friendly sign out confirmation with avatar and account details. Features a stacked button layout for better mobile experience.

```tsx
import { SignOut } from '@primeicons/react/sign-out';
import { Times } from '@primeicons/react/times';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';

export default function LogoutDemo() {
    return (
        <div className="flex justify-center">
            <ConfirmDialog.Root>
                <ConfirmDialog.Trigger as={Button} variant="text" severity="secondary">
                    <SignOut />
                    Sign Out
                </ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Backdrop />
                    <ConfirmDialog.Positioner>
                        <ConfirmDialog.Popup style={{ width: '24rem' }}>
                            <ConfirmDialog.Header>
                                <ConfirmDialog.Title>Sign Out</ConfirmDialog.Title>
                                <ConfirmDialog.Close as={Button} iconOnly variant="text" rounded severity="secondary">
                                    <Times />
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Header>
                            <ConfirmDialog.Content>
                                <div className="flex flex-col items-center gap-5 py-4">
                                    <Avatar.Root size="xlarge" shape="circle" className="ring-4 ring-surface-200 dark:ring-surface-700">
                                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" />
                                        <Avatar.Fallback>IB</Avatar.Fallback>
                                    </Avatar.Root>
                                    <div className="text-center">
                                        <p className="font-semibold text-surface-700 dark:text-surface-200 text-lg m-0">Ioni Bowcher</p>
                                        <p className="text-surface-500 dark:text-surface-400 text-sm mt-1 mb-0">ioni.bowcher@example.com</p>
                                    </div>
                                    <ConfirmDialog.Message className="text-surface-600 dark:text-surface-300 text-center">
                                        Are you sure you want to sign out of your account?
                                    </ConfirmDialog.Message>
                                </div>
                            </ConfirmDialog.Content>
                            <ConfirmDialog.Footer className="flex-col gap-2">
                                <ConfirmDialog.Close as={Button} className="w-full justify-center">
                                    <SignOut />
                                    Sign Out
                                </ConfirmDialog.Close>
                                <ConfirmDialog.Close as={Button} variant="text" className="w-full justify-center">
                                    Stay Signed In
                                </ConfirmDialog.Close>
                            </ConfirmDialog.Footer>
                        </ConfirmDialog.Popup>
                    </ConfirmDialog.Positioner>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/confirmdialog/features.md#api) for `ConfirmDialogRoot`, `ConfirmDialogTrigger`, `ConfirmDialogPortal`, `ConfirmDialogBackdrop`, `ConfirmDialogPositioner`, `ConfirmDialogPopup`, `ConfirmDialogHeader`, `ConfirmDialogTitle`, `ConfirmDialogHeaderActions`, `ConfirmDialogClose`, `ConfirmDialogContent`, `ConfirmDialogIcon`, `ConfirmDialogMessage`, `ConfirmDialogFooter` component documentation.

### Hooks

See [Headless API](../../headless/confirmdialog/features.md#api) for `useConfirmDialog` hook documentation.

## Accessibility

See [ConfirmDialog Primitive](../../primitive/confirmdialog/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
