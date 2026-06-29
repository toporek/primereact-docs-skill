# Drawer

Drawer is a panel component displayed as an overlay at the edges of the screen.

```tsx
'use client';
import { Bars } from '@primeicons/react/bars';
import { Cog } from '@primeicons/react/cog';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { Avatar } from '@primereact/ui/avatar';
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
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
            <Drawer.Root>
                <Drawer.Trigger as={Button} iconOnly>
                    <Bars />
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Backdrop />
                    <Drawer.Popup className="w-full md:w-80">
                        <Drawer.Header>
                            <Drawer.Title>Drawer Title</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content className="p-0!">
                            <div className="flex flex-col h-full">
                                <div className="px-4 pb-4">
                                    <IconField.Root>
                                        <IconField.Inset>
                                            <Search />
                                        </IconField.Inset>
                                        <InputText
                                            value={search}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                                            placeholder="Search..."
                                            className="w-full"
                                        />
                                    </IconField.Root>
                                </div>

                                <div className="flex-1 overflow-y-auto px-4">
                                    <Menu.Root className="w-full border-0 bg-transparent p-0">
                                        <Menu.List className="gap-0">
                                            {navSections.map((section, sectionIndex) => (
                                                <React.Fragment key={section.label}>
                                                    <Menu.Label
                                                        className={`text-surface-500 dark:text-surface-500 font-semibold text-xs tracking-wider  py-1${sectionIndex > 0 ? ' mt-4' : ''}`}
                                                    >
                                                        {section.label}
                                                    </Menu.Label>
                                                    {section.items.map((item) => (
                                                        <Menu.Item
                                                            key={item.label}
                                                            className={`text-sm  py-2.5${item.active ? ' text-primary font-semibold' : ''}`}
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

                                            <Menu.Label className="text-surface-500 dark:text-surface-500 font-semibold text-xs tracking-wider  py-1 mt-4">
                                                RECENT
                                            </Menu.Label>
                                            {recentItems.map((item) => (
                                                <Menu.Item key={item.label} className="text-sm  py-2.5">
                                                    <span className={`${item.color} w-2 h-2 rounded-full shrink-0`} />
                                                    <span className="truncate">{item.label}</span>
                                                    <span className="text-xs text-surface-400 ml-auto shrink-0">{item.time}</span>
                                                </Menu.Item>
                                            ))}
                                        </Menu.List>
                                    </Menu.Root>
                                </div>
                            </div>
                        </Drawer.Content>
                        <Drawer.Footer>
                            <div className="flex items-center gap-3 p-2 rounded-lg">
                                <Avatar.Root shape="circle" size="normal">
                                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                                    <Avatar.Fallback>SA</Avatar.Fallback>
                                </Avatar.Root>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-semibold text-sm truncate">Sarah Anderson</span>
                                    <span className="text-xs text-surface-500 truncate">sarah@primetek.com</span>
                                </div>
                                <Button iconOnly variant="text" severity="secondary" rounded>
                                    <Cog />
                                </Button>
                            </div>
                        </Drawer.Footer>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

```

## Usage

```tsx
import { Drawer } from '@primereact/ui/drawer';
```

```tsx
<Drawer.Root>
    <Drawer.Trigger />
    <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Popup>
            <Drawer.Header>
                <Drawer.Title />
                <Drawer.Close />
            </Drawer.Header>
            <Drawer.Content />
            <Drawer.Footer />
        </Drawer.Popup>
    </Drawer.Portal>
</Drawer.Root>
```

## Examples

### Basic

A slide-in panel from the edge of the screen for contextual content.

```tsx
import { Bars } from '@primeicons/react/bars';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Drawer.Root>
                <Drawer.Trigger as={Button} iconOnly>
                    <Bars />
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Backdrop />
                    <Drawer.Popup className="w-full! md:w-80!">
                        <Drawer.Header>
                            <Drawer.Title>Basic Drawer</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
                            <p>A slide-in panel from the edge of the screen for contextual content.</p>
                        </Drawer.Content>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

```

### Position

The position of the drawer can be customized with the `position` property. The available values are `left`, `right`, `top` and `bottom`.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowLeft } from '@primeicons/react/arrow-left';
import { ArrowRight } from '@primeicons/react/arrow-right';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';
import { DrawerRootChangeEvent } from '@primereact/ui/drawer';
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

            <Drawer.Root open={visibleLeft} onOpenChange={(e: DrawerRootChangeEvent) => setVisibleLeft(e.value as boolean)}>
                <Drawer.Portal>
                    <Drawer.Backdrop />
                    <Drawer.Popup className="w-full! md:w-80!">
                        <Drawer.Header>
                            <Drawer.Title>Left Drawer</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
                            <p>
                                The position of the drawer can be customized with the position property. The available values are left, right, top and
                                bottom.
                            </p>
                        </Drawer.Content>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>

            <Drawer.Root position="right" open={visibleRight} onOpenChange={(e: DrawerRootChangeEvent) => setVisibleRight(e.value as boolean)}>
                <Drawer.Portal>
                    <Drawer.Backdrop />
                    <Drawer.Popup className="w-full! md:w-80!">
                        <Drawer.Header>
                            <Drawer.Title>Right Drawer</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
                            <p>
                                The position of the drawer can be customized with the position property. The available values are left, right, top and
                                bottom.
                            </p>
                        </Drawer.Content>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>

            <Drawer.Root
                position="top"
                open={visibleTop}
                onOpenChange={(e: DrawerRootChangeEvent) => setVisibleTop(e.value as boolean)}
                style={{ height: 'auto' }}
            >
                <Drawer.Portal>
                    <Drawer.Backdrop />
                    <Drawer.Popup>
                        <Drawer.Header>
                            <Drawer.Title>Top Drawer</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
                            <p>
                                The position of the drawer can be customized with the position property. The available values are left, right, top and
                                bottom.
                            </p>
                        </Drawer.Content>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>

            <Drawer.Root
                position="bottom"
                open={visibleBottom}
                onOpenChange={(e: DrawerRootChangeEvent) => setVisibleBottom(e.value as boolean)}
                style={{ height: 'auto' }}
            >
                <Drawer.Portal>
                    <Drawer.Backdrop />
                    <Drawer.Popup>
                        <Drawer.Header>
                            <Drawer.Title>Bottom Drawer</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
                            <p>
                                The position of the drawer can be customized with the position property. The available values are left, right, top and
                                bottom.
                            </p>
                        </Drawer.Content>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

```

### Full Screen

The full screen mode is enabled when position property is set as `full`.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { WindowMaximize } from '@primeicons/react/window-maximize';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';

export default function FullScreenDemo() {
    return (
        <div className="flex justify-center">
            <Drawer.Root position="full">
                <Drawer.Trigger as={Button} iconOnly>
                    <WindowMaximize />
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Backdrop />
                    <Drawer.Popup>
                        <Drawer.Header>
                            <Drawer.Title>Full Screen Drawer</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
                            <p>The full screen mode is enabled when position property is set as full.</p>
                        </Drawer.Content>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

```

### Responsive

The responsive mode can be enabled by adding className or style to the `Drawer.Popup` component.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { Drawer } from '@primereact/ui/drawer';
import { InputPassword } from '@primereact/ui/inputpassword';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function ResponsiveDemo() {
    return (
        <div className="flex justify-center">
            <Drawer.Root>
                <Drawer.Trigger as={Button}>Log in</Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Backdrop />
                    <Drawer.Popup className="w-full! sm:w-96! md:w-md! lg:w-120!">
                        <Drawer.Header>
                            <Drawer.Title>Responsive Drawer</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
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
                                    <Checkbox.Root inputId="remember" value="remember">
                                        <Checkbox.Box>
                                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                                        </Checkbox.Box>
                                    </Checkbox.Root>
                                    <Label htmlFor="remember" className="text-sm">
                                        Remember me
                                    </Label>
                                </div>
                                <Button className="w-full">Sign In</Button>
                            </div>
                        </Drawer.Content>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/drawer.md#api) for `DrawerRoot`, `DrawerTrigger`, `DrawerPortal`, `DrawerBackdrop`, `DrawerPopup`, `DrawerHeader`, `DrawerTitle`, `DrawerClose`, `DrawerContent`, `DrawerFooter` component documentation.

### Hooks

See [Headless API](../../headless/components/drawer.md#api) for `useDrawer` hook documentation.

### Accessibility

See [Drawer Primitive](../../primitive/components/drawer.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-drawer-backdrop | Class name of the backdrop element |
| p-drawer | Class name of the root element |
| p-drawer-trigger-button | Class name of the trigger button element |
| p-drawer-header | Class name of the header element |
| p-drawer-title | Class name of the title element |
| p-drawer-close-button | Class name of the close button element |
| p-drawer-content | Class name of the content element |
| p-drawer-footer | Class name of the footer element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| drawer.background | --p-drawer-background | Background of root |
| drawer.border.color | --p-drawer-border-color | Border color of root |
| drawer.color | --p-drawer-color | Color of root |
| drawer.shadow | --p-drawer-shadow | Shadow of root |
| drawer.header.padding | --p-drawer-header-padding | Padding of header |
| drawer.title.font.size | --p-drawer-title-font-size | Font size of title |
| drawer.title.font.weight | --p-drawer-title-font-weight | Font weight of title |
| drawer.content.padding | --p-drawer-content-padding | Padding of content |
| drawer.footer.padding | --p-drawer-footer-padding | Padding of footer |
