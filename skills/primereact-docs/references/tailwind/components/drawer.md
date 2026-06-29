# Drawer

Drawer is a panel component displayed as an overlay at the edges of the screen.

```tsx
'use client';
import { Bars, Cog, Search, Times } from '@primeicons/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerBackdrop,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerPopup,
    DrawerPortal,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { InputText } from '@/components/ui/inputtext';
import { Menu } from '@primereact/ui/menu';
import * as React from 'react';

const navSections = [
    {
        label: 'MAIN',
        items: [
            { icon: 'pi pi-objects-column', label: 'Dashboard', badge: 3, active: true },
            { icon: 'pi pi-inbox', label: 'Inbox', badge: 12 },
            { icon: 'pi pi-calendar', label: 'Calendar' },
            { icon: 'pi pi-chart-bar', label: 'Analytics' }
        ]
    },
    {
        label: 'WORKSPACE',
        items: [
            { icon: 'pi pi-folder', label: 'Projects', badge: 5 },
            { icon: 'pi pi-users', label: 'Team' },
            { icon: 'pi pi-file', label: 'Documents' },
            { icon: 'pi pi-clipboard', label: 'Tasks' }
        ]
    }
];

const recentItems = [
    { color: 'bg-blue-500', label: 'Website Redesign', time: '2m ago' },
    { color: 'bg-green-500', label: 'API Integration', time: '1h ago' },
    { color: 'bg-orange-500', label: 'Mobile App v2', time: '3h ago' }
];

export default function Preview() {
    const [search, setSearch] = React.useState('');

    return (
        <div className="flex justify-center">
            <Drawer>
                <DrawerTrigger as={Button} iconOnly>
                    <Bars />
                </DrawerTrigger>
                <DrawerPortal>
                    <DrawerBackdrop />
                    <DrawerPopup className="w-full md:w-80">
                        <DrawerHeader>
                            <DrawerTitle>Drawer Title</DrawerTitle>
                            <DrawerClose className="w-8 h-8 rounded-full flex items-center justify-center text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                                <Times />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerContent pt={{ root: 'p-0' }}>
                            <div className="flex flex-col h-full">
                                <div className="px-4 pb-4">
                                    <IconField>
                                        <IconFieldInset>
                                            <Search />
                                        </IconFieldInset>
                                        <InputText
                                            value={search}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                                            placeholder="Search..."
                                            className="w-full"
                                        />
                                    </IconField>
                                </div>

                                <div className="flex-1 overflow-y-auto px-4">
                                    <Menu.Root className="w-full border-0 bg-transparent p-0">
                                        <Menu.List className="gap-0">
                                            {navSections.map((section, sectionIndex) => (
                                                <React.Fragment key={section.label}>
                                                    <Menu.Label
                                                        className={`text-surface-500 dark:text-surface-500 font-semibold text-xs tracking-wider py-1${sectionIndex > 0 ? ' mt-4' : ''}`}
                                                    >
                                                        {section.label}
                                                    </Menu.Label>
                                                    {section.items.map((item) => (
                                                        <Menu.Item
                                                            key={item.label}
                                                            className={`text-sm py-2.5${item.active ? ' text-primary font-semibold' : ''}`}
                                                        >
                                                            <i className={`${item.icon} text-base${item.active ? ' text-primary' : ''}`} />
                                                            {item.label}
                                                            {item.badge && (
                                                                <Badge shape="circle" className="ml-auto">
                                                                    {item.badge}
                                                                </Badge>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </React.Fragment>
                                            ))}

                                            <Menu.Label className="text-surface-500 dark:text-surface-500 font-semibold text-xs tracking-wider py-1 mt-4">
                                                RECENT
                                            </Menu.Label>
                                            {recentItems.map((item) => (
                                                <Menu.Item key={item.label} className="text-sm py-2.5">
                                                    <span className={`${item.color} w-2 h-2 rounded-full shrink-0`} />
                                                    <span className="truncate">{item.label}</span>
                                                    <span className="text-xs text-surface-400 ml-auto shrink-0">{item.time}</span>
                                                </Menu.Item>
                                            ))}
                                        </Menu.List>
                                    </Menu.Root>
                                </div>
                            </div>
                        </DrawerContent>
                        <DrawerFooter>
                            <div className="flex items-center gap-3 p-2 rounded-lg">
                                <Avatar shape="circle" size="normal">
                                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                                    <AvatarFallback>SA</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-sm truncate">Sarah Anderson</span>
                                    <span className="text-xs text-surface-500 truncate">sarah@primetek.com</span>
                                </div>
                                <Button iconOnly variant="text" severity="secondary" rounded>
                                    <Cog />
                                </Button>
                            </div>
                        </DrawerFooter>
                    </DrawerPopup>
                </DrawerPortal>
            </Drawer>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/drawer.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Drawer, DrawerBackdrop, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerPortal, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
```

```tsx
<Drawer>
    <DrawerTrigger />
    <DrawerBackdrop />
    <DrawerPortal>
        <DrawerHeader>
            <DrawerTitle />
            <DrawerClose />
        </DrawerHeader>
        <DrawerContent />
        <DrawerFooter />
    </DrawerPortal>
</Drawer>
```

## Examples

### Basic

A slide-in panel from the edge of the screen for contextual content.

```tsx
'use client';
import { Bars, Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerTrigger,
    DrawerBackdrop,
    DrawerPopup,
    DrawerPortal,
    DrawerHeader,
    DrawerTitle,
    DrawerClose,
    DrawerContent
} from '@/components/ui/drawer';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Drawer>
                <DrawerTrigger as={Button} iconOnly>
                    <Bars />
                </DrawerTrigger>
                <DrawerPortal>
                    <DrawerBackdrop />
                    <DrawerPopup className="w-full md:w-80">
                        <DrawerHeader>
                            <DrawerTitle>Basic Drawer</DrawerTitle>
                            <DrawerClose>
                                <Times />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerContent>
                            <p>A slide-in panel from the edge of the screen for contextual content.</p>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerPortal>
            </Drawer>
        </div>
    );
}

```

### Position

The position of the drawer can be customized with the `position` property. The available values are `left`, `right`, `top` and `bottom`.

```tsx
'use client';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerBackdrop, DrawerClose, DrawerContent, DrawerHeader, DrawerPopup, DrawerPortal, DrawerTitle } from '@/components/ui/drawer';
import type { DrawerRootChangeEvent } from 'primereact/drawer';
import * as React from 'react';

export default function PositionDemo() {
    const [visibleLeft, setVisibleLeft] = React.useState<boolean>(false);
    const [visibleRight, setVisibleRight] = React.useState<boolean>(false);
    const [visibleTop, setVisibleTop] = React.useState<boolean>(false);
    const [visibleBottom, setVisibleBottom] = React.useState<boolean>(false);

    return (
        <div>
            <div className="flex gap-2 justify-center">
                <Button iconOnly onClick={() => setVisibleLeft(true)}>
                    <ArrowRight />
                </Button>
                <Button iconOnly onClick={() => setVisibleRight(true)}>
                    <ArrowLeft />
                </Button>
                <Button iconOnly onClick={() => setVisibleTop(true)}>
                    <ArrowDown />
                </Button>
                <Button iconOnly onClick={() => setVisibleBottom(true)}>
                    <ArrowUp />
                </Button>
            </div>

            <Drawer open={visibleLeft} onOpenChange={(e: DrawerRootChangeEvent) => setVisibleLeft(e.value as boolean)}>
                <DrawerPortal>
                    <DrawerBackdrop />
                    <DrawerPopup className="w-full md:w-80">
                        <DrawerHeader>
                            <DrawerTitle>Left Drawer</DrawerTitle>
                            <DrawerClose>
                                <Times />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerContent>
                            <p>
                                The position of the drawer can be customized with the position property. The available values are left, right, top and
                                bottom.
                            </p>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerPortal>
            </Drawer>

            <Drawer position="right" open={visibleRight} onOpenChange={(e: DrawerRootChangeEvent) => setVisibleRight(e.value as boolean)}>
                <DrawerPortal>
                    <DrawerBackdrop />
                    <DrawerPopup className="w-full md:w-80">
                        <DrawerHeader>
                            <DrawerTitle>Right Drawer</DrawerTitle>
                            <DrawerClose>
                                <Times />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerContent>
                            <p>
                                The position of the drawer can be customized with the position property. The available values are left, right, top and
                                bottom.
                            </p>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerPortal>
            </Drawer>

            <Drawer
                position="top"
                open={visibleTop}
                onOpenChange={(e: DrawerRootChangeEvent) => setVisibleTop(e.value as boolean)}
                style={{ height: 'auto' }}
            >
                <DrawerPortal>
                    <DrawerBackdrop />
                    <DrawerPopup>
                        <DrawerHeader>
                            <DrawerTitle>Top Drawer</DrawerTitle>
                            <DrawerClose>
                                <Times />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerContent>
                            <p>
                                The position of the drawer can be customized with the position property. The available values are left, right, top and
                                bottom.
                            </p>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerPortal>
            </Drawer>

            <Drawer
                position="bottom"
                open={visibleBottom}
                onOpenChange={(e: DrawerRootChangeEvent) => setVisibleBottom(e.value as boolean)}
                style={{ height: 'auto' }}
            >
                <DrawerPortal>
                    <DrawerBackdrop />
                    <DrawerPopup>
                        <DrawerHeader>
                            <DrawerTitle>Bottom Drawer</DrawerTitle>
                            <DrawerClose>
                                <Times />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerContent>
                            <p>
                                The position of the drawer can be customized with the position property. The available values are left, right, top and
                                bottom.
                            </p>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerPortal>
            </Drawer>
        </div>
    );
}

```

### Full Screen

The full screen mode is enabled when position property is set as `full`.

```tsx
'use client';
import { Times, WindowMaximize } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerTrigger,
    DrawerBackdrop,
    DrawerPopup,
    DrawerPortal,
    DrawerHeader,
    DrawerTitle,
    DrawerClose,
    DrawerContent
} from '@/components/ui/drawer';

export default function FullScreenDemo() {
    return (
        <div className="flex justify-center">
            <Drawer position="full">
                <DrawerTrigger as={Button} iconOnly>
                    <WindowMaximize />
                </DrawerTrigger>
                <DrawerPortal>
                    <DrawerBackdrop />
                    <DrawerPopup>
                        <DrawerHeader>
                            <DrawerTitle>Full Screen Drawer</DrawerTitle>
                            <DrawerClose>
                                <Times />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerContent>
                            <p>The full screen mode is enabled when position property is set as full.</p>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerPortal>
            </Drawer>
        </div>
    );
}

```

### Responsive

The responsive mode can be enabled by adding className or style to the `Drawer.Portal` component.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Drawer,
    DrawerTrigger,
    DrawerBackdrop,
    DrawerPopup,
    DrawerPortal,
    DrawerHeader,
    DrawerTitle,
    DrawerClose,
    DrawerContent
} from '@/components/ui/drawer';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';
import { InputPassword } from '@/components/ui/inputpassword';

export default function ResponsiveDemo() {
    return (
        <div className="flex justify-center">
            <Drawer>
                <DrawerTrigger as={Button}>Log in</DrawerTrigger>
                <DrawerPortal>
                    <DrawerBackdrop />
                    <DrawerPopup className="w-full sm:w-96 md:w-md lg:w-120">
                        <DrawerHeader>
                            <DrawerTitle>Responsive Drawer</DrawerTitle>
                            <DrawerClose>
                                <Times />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerContent>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="email" className="font-medium text-sm">
                                        Email
                                    </Label>
                                    <InputText id="email" placeholder="Enter your email" className="w-full" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="password" className="font-medium text-sm">
                                        Password
                                    </Label>
                                    <InputPassword id="password" placeholder="Enter your password" className="w-full" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox inputId="remember" value="remember" />
                                    <Label htmlFor="remember" className="text-sm">
                                        Remember me
                                    </Label>
                                </div>
                                <Button className="w-full">Sign In</Button>
                            </div>
                        </DrawerContent>
                    </DrawerPopup>
                </DrawerPortal>
            </Drawer>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/drawer.md#api) for `DrawerRoot`, `DrawerTrigger`, `DrawerBackdrop`, `DrawerPortal`, `DrawerHeader`, `DrawerTitle`, `DrawerClose`, `DrawerContent`, `DrawerFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/drawer.md#api) for `useDrawer` hook documentation.

### Accessibility

See [Drawer Primitive](../../primitive/components/drawer.md#accessibility) for WAI-ARIA compliance details and keyboard support.
