# Sidebar

Sidebar is a layout component for building application navigation with collapsible panels, multi-variant styling, and composable menu structures.

```tsx
'use client';
import {
    Bell,
    Calendar,
    ChartBar,
    ChevronDown,
    CreditCard,
    EllipsisV,
    Folder,
    Home,
    Inbox,
    Plus,
    Search,
    ShoppingCart,
    Sidebar as SidebarIcon,
    Star,
    Users
} from '@primeicons/react';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Sidebar } from '@primereact/ui/sidebar';
import * as React from 'react';

type NavItem = {
    icon: React.FC<any>;
    label: string;
    isActive?: boolean;
    badge?: string;
    subItems?: { label: string; isActive?: boolean }[];
};

const navGroups: { label: string; action?: boolean; items: NavItem[] }[] = [
    {
        label: 'Navigation',
        items: [
            { icon: Home, label: 'Home', isActive: true },
            { icon: Inbox, label: 'Inbox', badge: '12' },
            { icon: Search, label: 'Search' },
            { icon: Bell, label: 'Notifications', badge: '3' }
        ]
    },
    {
        label: 'Projects',
        action: true,
        items: [
            {
                icon: ChartBar,
                label: 'Analytics',
                subItems: [{ label: 'Overview', isActive: true }, { label: 'Reports' }, { label: 'Real-time' }]
            },
            { icon: Users, label: 'Team' },
            { icon: Calendar, label: 'Calendar' },
            {
                icon: Folder,
                label: 'Documents',
                subItems: [{ label: 'Shared' }, { label: 'Private' }, { label: 'Archived' }]
            }
        ]
    },
    {
        label: 'Billing',
        items: [
            { icon: CreditCard, label: 'Payments' },
            { icon: ShoppingCart, label: 'Orders' },
            { icon: Star, label: 'Subscriptions' }
        ]
    }
];

export default function Preview() {
    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <Sidebar.Layout className="min-h-192!">
                <Sidebar.Root id="preview" collapsible="icon">
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-indigo-600 text-white text-xs font-bold leading-none">
                                                A
                                            </div>
                                            <span className="font-semibold text-sm">Acme Inc</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Header>

                            <Sidebar.Content>
                                {navGroups.map((group) => (
                                    <Sidebar.Group key={group.label}>
                                        <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
                                        {group.action && (
                                            <Sidebar.GroupAction>
                                                <Plus />
                                            </Sidebar.GroupAction>
                                        )}
                                        <Sidebar.GroupContent>
                                            <Sidebar.Menu>
                                                {group.items.map((item) => (
                                                    <Sidebar.MenuItem
                                                        key={item.label}
                                                        collapsible={!!item.subItems}
                                                        defaultOpen={item.subItems?.some((s) => s.isActive)}
                                                    >
                                                        <Sidebar.MenuButton isActive={item.isActive}>
                                                            <item.icon />
                                                            <span>{item.label}</span>
                                                            {item.subItems && <ChevronDown className="ml-auto" />}
                                                        </Sidebar.MenuButton>
                                                        {item.subItems ? (
                                                            <Sidebar.MenuSub>
                                                                {item.subItems.map((sub) => (
                                                                    <Sidebar.MenuSubItem key={sub.label}>
                                                                        <Sidebar.MenuSubButton isActive={sub.isActive}>
                                                                            <span>{sub.label}</span>
                                                                        </Sidebar.MenuSubButton>
                                                                    </Sidebar.MenuSubItem>
                                                                ))}
                                                            </Sidebar.MenuSub>
                                                        ) : item.badge ? (
                                                            <Sidebar.MenuBadge>{item.badge}</Sidebar.MenuBadge>
                                                        ) : (
                                                            <Sidebar.MenuAction showOnHover>
                                                                <EllipsisV />
                                                            </Sidebar.MenuAction>
                                                        )}
                                                    </Sidebar.MenuItem>
                                                ))}
                                            </Sidebar.Menu>
                                        </Sidebar.GroupContent>
                                    </Sidebar.Group>
                                ))}
                            </Sidebar.Content>

                            <Sidebar.Footer>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <Avatar.Root className="size-6! shrink-0! text-xs!" shape="circle">
                                                <Avatar.Fallback>JD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span>John Doe</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Footer>
                            <Sidebar.Rail />
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                <Sidebar.Main>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <Sidebar.Trigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </Sidebar.Trigger>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </Sidebar.Main>
            </Sidebar.Layout>
        </div>
    );
}

```

## Usage

```tsx
import { Sidebar } from '@primereact/ui/sidebar';
```

```tsx
<Sidebar.Layout>
    <Sidebar.Root id="main" collapsible="icon">
        <Sidebar.Spacer />
        <Sidebar.Aside>
            <Sidebar.Panel>
                <Sidebar.Header>...</Sidebar.Header>
                <Sidebar.Content>
                    <Sidebar.Group>
                        <Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
                        <Sidebar.GroupContent>
                            <Sidebar.Menu>
                                <Sidebar.MenuItem>
                                    <Sidebar.MenuButton isActive>
                                        <HomeIcon />
                                        <span>Home</span>
                                    </Sidebar.MenuButton>
                                </Sidebar.MenuItem>
                            </Sidebar.Menu>
                        </Sidebar.GroupContent>
                    </Sidebar.Group>
                </Sidebar.Content>
                <Sidebar.Footer>...</Sidebar.Footer>
            </Sidebar.Panel>
        </Sidebar.Aside>
    </Sidebar.Root>
    <Sidebar.Main>
        <Sidebar.Trigger />
        <main>Content</main>
    </Sidebar.Main>
</Sidebar.Layout>
```

## Examples

### Variants

Use the `variant` and `collapsible` props to control the sidebar appearance and collapse behavior.

```tsx
'use client';
import {
    Bell,
    Calendar,
    ChartBar,
    Check,
    CreditCard,
    EllipsisV,
    Folder,
    Home,
    Inbox,
    Search,
    ShoppingCart,
    Sidebar as SidebarIcon,
    Star,
    Users
} from '@primeicons/react';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Sidebar } from '@primereact/ui/sidebar';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

type NavItem = {
    icon: React.FC<any>;
    label: string;
    isActive?: boolean;
    badge?: string;
    subItems?: { label: string; isActive?: boolean }[];
};

const navGroups: { label: string; items: NavItem[] }[] = [
    {
        label: 'Navigation',
        items: [
            { icon: Home, label: 'Home', isActive: true },
            { icon: Inbox, label: 'Inbox', badge: '12' },
            { icon: Search, label: 'Search' },
            { icon: Bell, label: 'Notifications', badge: '3' }
        ]
    },
    {
        label: 'Projects',
        items: [
            { icon: ChartBar, label: 'Analytics', subItems: [{ label: 'Overview', isActive: true }, { label: 'Reports' }, { label: 'Real-time' }] },
            { icon: Users, label: 'Team' },
            { icon: Calendar, label: 'Calendar' },
            { icon: Folder, label: 'Documents', subItems: [{ label: 'Shared' }, { label: 'Private' }, { label: 'Archived' }] }
        ]
    },
    {
        label: 'Billing',
        items: [
            { icon: CreditCard, label: 'Payments' },
            { icon: ShoppingCart, label: 'Orders' },
            { icon: Star, label: 'Subscriptions' }
        ]
    }
];

const variantOptions = [
    { label: 'Sidebar', value: 'sidebar' },
    { label: 'Floating', value: 'floating' },
    { label: 'Inset', value: 'inset' }
];

const collapsibleOptions = [
    { label: 'Icon', value: 'icon' },
    { label: 'Offcanvas', value: 'offcanvas' },
    { label: 'None', value: 'none' }
];

export default function VariantsDemo() {
    const [variant, setVariant] = React.useState<'sidebar' | 'floating' | 'inset'>('sidebar');
    const [collapsible, setCollapsible] = React.useState<'icon' | 'offcanvas' | 'none'>('icon');
    const [side, setSide] = React.useState<'left' | 'right'>('left');
    const [overlay, setOverlay] = React.useState(false);
    const [openOnHover, setOpenOnHover] = React.useState(false);
    const [backdrop, setBackdrop] = React.useState(false);

    return (
        <div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <Select.Root
                    value={variant}
                    onValueChange={(e: SelectValueChangeEvent) => setVariant(e.value as any)}
                    options={variantOptions}
                    optionLabel="label"
                    optionValue="value"
                    className="w-40"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Variant" />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List />
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
                <Select.Root
                    value={collapsible}
                    onValueChange={(e: SelectValueChangeEvent) => setCollapsible(e.value as any)}
                    options={collapsibleOptions}
                    optionLabel="label"
                    optionValue="value"
                    className="w-40"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Collapsible" />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List />
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
                <ToggleButtonGroup
                    allowEmpty={false}
                    multiple={false}
                    value={side}
                    onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setSide(e.value as 'left' | 'right')}
                >
                    <ToggleButton.Root value="left">
                        <ToggleButton.Indicator>Left</ToggleButton.Indicator>
                    </ToggleButton.Root>
                    <ToggleButton.Root value="right">
                        <ToggleButton.Indicator>Right</ToggleButton.Indicator>
                    </ToggleButton.Root>
                </ToggleButtonGroup>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="overlay-cb" checked={overlay} onCheckedChange={(e: any) => setOverlay(e.checked)}>
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <label htmlFor="overlay-cb" className="text-sm font-medium cursor-pointer">
                        Overlay
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="hover-cb" checked={openOnHover} onCheckedChange={(e: any) => setOpenOnHover(e.checked)}>
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <label htmlFor="hover-cb" className="text-sm font-medium cursor-pointer">
                        Open on Hover
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="backdrop-cb" checked={backdrop} onCheckedChange={(e: any) => setBackdrop(e.checked)}>
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <label htmlFor="backdrop-cb" className="text-sm font-medium cursor-pointer">
                        Backdrop
                    </label>
                </div>
            </div>
            <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                <Sidebar.Layout className="min-h-192! relative!">
                    {backdrop && <Sidebar.Backdrop className="absolute!" />}
                    {side === 'right' && <SidebarMain />}
                    <SidebarContent variant={variant} collapsible={collapsible} side={side} overlay={overlay} openOnHover={openOnHover} />
                    {side === 'left' && <SidebarMain />}
                </Sidebar.Layout>
            </div>
        </div>
    );
}

function SidebarMain() {
    return (
        <Sidebar.Main>
            <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                <Sidebar.Trigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                    <SidebarIcon />
                </Sidebar.Trigger>
            </header>
            <div className="flex-1 p-4 flex flex-col gap-4">
                <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
            </div>
        </Sidebar.Main>
    );
}

function SidebarContent({
    variant,
    collapsible,
    side,
    overlay,
    openOnHover
}: {
    variant: 'sidebar' | 'floating' | 'inset';
    collapsible: 'icon' | 'offcanvas' | 'none';
    side: 'left' | 'right';
    overlay: boolean;
    openOnHover: boolean;
}) {
    return (
        <Sidebar.Root id="variants-demo" variant={variant} collapsible={collapsible} side={side} overlay={overlay} openOnHover={openOnHover}>
            <Sidebar.Spacer />
            <Sidebar.Aside>
                <Sidebar.Panel>
                    <Sidebar.Header>
                        <Sidebar.Menu>
                            <Sidebar.MenuItem>
                                <Sidebar.MenuButton className="px-1!">
                                    <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-indigo-600 text-white text-xs font-bold leading-none">
                                        A
                                    </div>
                                    <span className="font-semibold text-sm">Acme Inc</span>
                                </Sidebar.MenuButton>
                            </Sidebar.MenuItem>
                        </Sidebar.Menu>
                    </Sidebar.Header>
                    <Sidebar.Content>
                        {navGroups.map((group) => (
                            <Sidebar.Group key={group.label}>
                                <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
                                <Sidebar.GroupContent>
                                    <Sidebar.Menu>
                                        {group.items.map((item) => (
                                            <Sidebar.MenuItem
                                                key={item.label}
                                                collapsible={!!item.subItems}
                                                defaultOpen={item.subItems?.some((s) => s.isActive)}
                                            >
                                                <Sidebar.MenuButton isActive={item.isActive}>
                                                    <item.icon />
                                                    <span>{item.label}</span>
                                                    {item.subItems && (
                                                        <ChevronDown className="ml-auto transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                                    )}
                                                </Sidebar.MenuButton>
                                                {item.badge && <Sidebar.MenuBadge>{item.badge}</Sidebar.MenuBadge>}
                                                {item.subItems ? (
                                                    <Sidebar.MenuSub>
                                                        {item.subItems.map((sub) => (
                                                            <Sidebar.MenuSubItem key={sub.label}>
                                                                <Sidebar.MenuSubButton isActive={sub.isActive}>
                                                                    <span>{sub.label}</span>
                                                                </Sidebar.MenuSubButton>
                                                            </Sidebar.MenuSubItem>
                                                        ))}
                                                    </Sidebar.MenuSub>
                                                ) : !item.badge ? (
                                                    <Sidebar.MenuAction showOnHover>
                                                        <EllipsisV />
                                                    </Sidebar.MenuAction>
                                                ) : null}
                                            </Sidebar.MenuItem>
                                        ))}
                                    </Sidebar.Menu>
                                </Sidebar.GroupContent>
                            </Sidebar.Group>
                        ))}
                    </Sidebar.Content>
                    <Sidebar.Footer>
                        <Sidebar.Menu>
                            <Sidebar.MenuItem>
                                <Sidebar.MenuButton className="p-1!">
                                    <Avatar.Root className="size-6! shrink-0! text-xs!" shape="circle">
                                        <Avatar.Fallback>JD</Avatar.Fallback>
                                    </Avatar.Root>
                                    <span>John Doe</span>
                                </Sidebar.MenuButton>
                            </Sidebar.MenuItem>
                        </Sidebar.Menu>
                    </Sidebar.Footer>
                    <Sidebar.Rail />
                </Sidebar.Panel>
            </Sidebar.Aside>
        </Sidebar.Root>
    );
}

```

### With Menu

Company switcher in the header and user menu in the footer using Popover and Menu components.

```tsx
'use client';
import { Bell, Check, ChevronDown, Cog, Home, Inbox, Plus, Search, Sidebar as SidebarIcon, SignOut, Users } from '@primeicons/react';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Menu } from '@primereact/ui/menu';
import { Sidebar } from '@primereact/ui/sidebar';
import * as React from 'react';

const companies = [
    { name: 'Acme Inc', logo: 'A', color: 'from-violet-500 to-indigo-600' },
    { name: 'Globex Corp', logo: 'G', color: 'from-emerald-500 to-teal-600' },
    { name: 'Initech', logo: 'I', color: 'from-orange-500 to-red-600' }
];

export default function MenuDemo() {
    const [activeCompany, setActiveCompany] = React.useState(companies[0]);

    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <Sidebar.Layout className="min-h-192! relative!">
                <Sidebar.Root id="menu-demo" collapsible="icon">
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Menu.Root className="w-full">
                                            <Menu.Trigger as={Sidebar.MenuButton} className="p-1!">
                                                <div
                                                    className={`flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br ${activeCompany.color} text-white text-xs font-bold leading-none`}
                                                >
                                                    {activeCompany.logo}
                                                </div>
                                                <span className="font-semibold text-sm">{activeCompany.name}</span>
                                                <ChevronDown className="ml-auto" />
                                            </Menu.Trigger>
                                            <Menu.Portal>
                                                <Menu.Positioner side="bottom" align="start" sideOffset={4}>
                                                    <Menu.Popup className="min-w-(--px-positioner-anchor-width)!">
                                                        <Menu.List>
                                                            <Menu.Label>Companies</Menu.Label>
                                                            {companies.map((company) => (
                                                                <Menu.Item key={company.name} onSelect={() => setActiveCompany(company)}>
                                                                    <div
                                                                        className={`flex size-5 shrink-0 items-center justify-center rounded-sm bg-linear-to-br ${company.color} text-white text-[0.625rem] font-bold leading-none`}
                                                                    >
                                                                        {company.logo}
                                                                    </div>
                                                                    {company.name}
                                                                    {activeCompany.name === company.name && <Check className="ml-auto" />}
                                                                </Menu.Item>
                                                            ))}
                                                            <Menu.Separator />
                                                            <Menu.Item>
                                                                <Plus />
                                                                Add company
                                                            </Menu.Item>
                                                        </Menu.List>
                                                    </Menu.Popup>
                                                </Menu.Positioner>
                                            </Menu.Portal>
                                        </Menu.Root>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Header>

                            <Sidebar.Content>
                                <Sidebar.Group>
                                    <Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
                                    <Sidebar.GroupContent>
                                        <Sidebar.Menu>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton isActive>
                                                    <Home />
                                                    <span>Home</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Inbox />
                                                    <span>Inbox</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Search />
                                                    <span>Search</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Users />
                                                    <span>Team</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Bell />
                                                    <span>Notifications</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                        </Sidebar.Menu>
                                    </Sidebar.GroupContent>
                                </Sidebar.Group>
                            </Sidebar.Content>

                            <Sidebar.Footer>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Menu.Root className="w-full">
                                            <Menu.Trigger as={Sidebar.MenuButton} className="p-1!">
                                                <Avatar.Root className="size-6! shrink-0! text-xs!" shape="circle">
                                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                                </Avatar.Root>
                                                <span>John Doe</span>
                                                <ChevronDown className="ml-auto" />
                                            </Menu.Trigger>
                                            <Menu.Portal>
                                                <Menu.Positioner side="top" align="start" sideOffset={4}>
                                                    <Menu.Popup>
                                                        <Menu.List>
                                                            <Menu.Label>john@acme.com</Menu.Label>
                                                            <Menu.Separator />
                                                            <Menu.Item>
                                                                <Cog />
                                                                Settings
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Bell />
                                                                Notifications
                                                            </Menu.Item>
                                                            <Menu.Separator />
                                                            <Menu.Item>
                                                                <SignOut />
                                                                Sign out
                                                            </Menu.Item>
                                                        </Menu.List>
                                                    </Menu.Popup>
                                                </Menu.Positioner>
                                            </Menu.Portal>
                                        </Menu.Root>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Footer>
                            <Sidebar.Rail />
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                <Sidebar.Main>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <Sidebar.Trigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </Sidebar.Trigger>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </Sidebar.Main>
            </Sidebar.Layout>
        </div>
    );
}

```

### Responsive

Use `useIsMobile` hook to switch between desktop and mobile layouts. On mobile, the sidebar becomes offcanvas with overlay and backdrop.

```tsx
'use client';
import { Bell, Cog, Home, Inbox, Search, Sidebar as SidebarIcon, Users } from '@primeicons/react';
import { useIsMobile } from '@primereact/hooks';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Sidebar } from '@primereact/ui/sidebar';

export default function ResponsiveDemo() {
    const isMobile = useIsMobile(1024);

    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <Sidebar.Layout className="min-h-192! relative!">
                {isMobile && <Sidebar.Backdrop className="absolute!" />}
                <Sidebar.Root id="mobile-nav" collapsible={isMobile ? 'offcanvas' : 'icon'} overlay={isMobile} defaultOpen={!isMobile} width="14rem">
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-indigo-600 text-white text-xs font-bold leading-none">
                                                A
                                            </div>
                                            <span className="font-semibold text-sm">Acme Inc</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Header>

                            <Sidebar.Content>
                                <Sidebar.Group>
                                    <Sidebar.GroupLabel>Menu</Sidebar.GroupLabel>
                                    <Sidebar.GroupContent>
                                        <Sidebar.Menu>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton isActive>
                                                    <Home />
                                                    <span>Home</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Inbox />
                                                    <span>Inbox</span>
                                                </Sidebar.MenuButton>
                                                <Sidebar.MenuBadge>3</Sidebar.MenuBadge>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Search />
                                                    <span>Search</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Users />
                                                    <span>Team</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Bell />
                                                    <span>Notifications</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Cog />
                                                    <span>Settings</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                        </Sidebar.Menu>
                                    </Sidebar.GroupContent>
                                </Sidebar.Group>
                            </Sidebar.Content>

                            <Sidebar.Footer>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <Avatar.Root className="size-6! shrink-0! text-xs!" shape="circle">
                                                <Avatar.Fallback>JD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span>John Doe</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Footer>
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                <Sidebar.Main>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <Sidebar.Trigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </Sidebar.Trigger>
                        <span className="text-sm font-medium">Dashboard</span>
                        <span className="ml-auto text-xs text-muted-color rounded-md bg-surface-100 dark:bg-surface-800 px-2 py-1">
                            {isMobile ? 'Mobile' : 'Desktop'}
                        </span>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </Sidebar.Main>
            </Sidebar.Layout>
        </div>
    );
}

```

### Dual Sidebar

```tsx
'use client';
import { Bell, Calendar, ChartBar, ChevronDown, Cog, Comment, Home, Inbox, Search, Sidebar as SidebarIcon, Users } from '@primeicons/react';
import { Button } from '@primereact/ui/button';
import { Sidebar } from '@primereact/ui/sidebar';

export default function DualDemo() {
    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <Sidebar.Layout className="min-h-192! relative!">
                {/* Left sidebar - icon collapsible */}
                <Sidebar.Root id="nav" side="left" collapsible="icon" width="14rem">
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-indigo-600 text-white text-xs font-bold leading-none">
                                                A
                                            </div>
                                            <span className="font-semibold text-sm">Acme Inc</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Header>

                            <Sidebar.Content>
                                <Sidebar.Group>
                                    <Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
                                    <Sidebar.GroupContent>
                                        <Sidebar.Menu>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton isActive>
                                                    <Home />
                                                    <span>Home</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Inbox />
                                                    <span>Inbox</span>
                                                </Sidebar.MenuButton>
                                                <Sidebar.MenuBadge>5</Sidebar.MenuBadge>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Search />
                                                    <span>Search</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Bell />
                                                    <span>Notifications</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                        </Sidebar.Menu>
                                    </Sidebar.GroupContent>
                                </Sidebar.Group>

                                <Sidebar.Group>
                                    <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
                                    <Sidebar.GroupContent>
                                        <Sidebar.Menu>
                                            <Sidebar.MenuItem collapsible defaultOpen>
                                                <Sidebar.MenuButton>
                                                    <ChartBar />
                                                    <span>Analytics</span>
                                                    <ChevronDown className="ml-auto transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                                </Sidebar.MenuButton>
                                                <Sidebar.MenuSub>
                                                    <Sidebar.MenuSubItem>
                                                        <Sidebar.MenuSubButton isActive>Overview</Sidebar.MenuSubButton>
                                                    </Sidebar.MenuSubItem>
                                                    <Sidebar.MenuSubItem>
                                                        <Sidebar.MenuSubButton>Reports</Sidebar.MenuSubButton>
                                                    </Sidebar.MenuSubItem>
                                                </Sidebar.MenuSub>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Users />
                                                    <span>Team</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Calendar />
                                                    <span>Calendar</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                        </Sidebar.Menu>
                                    </Sidebar.GroupContent>
                                </Sidebar.Group>
                            </Sidebar.Content>

                            <Sidebar.Footer>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton>
                                            <Cog />
                                            <span>Settings</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Footer>
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                {/* Main content */}
                <Sidebar.Main>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <Sidebar.Trigger target="nav" as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </Sidebar.Trigger>
                        <span className="text-sm font-medium flex-1">Dashboard</span>
                        <Sidebar.Trigger target="ai" as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <Comment />
                        </Sidebar.Trigger>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </Sidebar.Main>

                {/* Right sidebar - Claude-style chat, offcanvas */}
                <Sidebar.Root id="ai" side="right" collapsible="offcanvas" width="18rem">
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <div className="flex items-center gap-2 px-1">
                                    <span className="font-semibold text-sm text-surface-500">Weekly metrics overview</span>
                                </div>
                            </Sidebar.Header>

                            <Sidebar.Content>
                                <div className="flex flex-col gap-4 px-3 py-2">
                                    <div className="rounded-xl bg-surface-100 dark:bg-surface-800 px-3 py-2.5 text-sm">
                                        Show me this week&apos;s metrics
                                    </div>

                                    <div className="text-sm leading-relaxed">
                                        <p>Here are your key metrics for this week:</p>
                                        <ul className="mt-2 space-y-1.5 text-muted-color">
                                            <li className="flex justify-between">
                                                <span>Page views</span>
                                                <span className="font-medium text-color">12,482</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>New users</span>
                                                <span className="font-medium text-color">342</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Bounce rate</span>
                                                <span className="font-medium text-color">34%</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Sidebar.Content>

                            <Sidebar.Footer>
                                <div className="mx-1 rounded-xl border border-surface-200 dark:border-surface-700 px-3 py-2.5">
                                    <input
                                        type="text"
                                        placeholder="Reply to Claude..."
                                        className="w-full bg-transparent border-none outline-none text-sm"
                                    />
                                </div>
                            </Sidebar.Footer>
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>
            </Sidebar.Layout>
        </div>
    );
}

```

### Multi Sidebar

```tsx
'use client';
import { Code, Cog, Database, ExternalLink, Globe, Home, Key, Server } from '@primeicons/react';
import { Sidebar } from '@primereact/ui/sidebar';

export default function MultiDemo() {
    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <Sidebar.Layout className="min-h-192! relative!">
                {/* Icon bar - always collapsed, opens on hover as overlay */}
                <Sidebar.Root id="iconbar" side="left" collapsible="icon" overlay openOnHover width="12rem" defaultOpen={false}>
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-600 text-white text-xs font-bold leading-none">
                                                A
                                            </div>
                                            <span className="font-semibold text-sm">Acme Inc</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Header>

                            <Sidebar.Content>
                                <Sidebar.Group>
                                    <Sidebar.GroupContent>
                                        <Sidebar.Menu>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton isActive>
                                                    <Home />
                                                    <span>Home</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Database />
                                                    <span>Database</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Key />
                                                    <span>Authentication</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Server />
                                                    <span>Edge Functions</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Globe />
                                                    <span>Storage</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <Code />
                                                    <span>SQL Editor</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                        </Sidebar.Menu>
                                    </Sidebar.GroupContent>
                                </Sidebar.Group>
                            </Sidebar.Content>

                            <Sidebar.Footer>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton>
                                            <Cog />
                                            <span>Settings</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Footer>
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                {/* Secondary sidebar - always open, not collapsible */}
                <Sidebar.Root id="secondary" side="left" width="14rem">
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <div className="px-1">
                                    <span className="font-semibold text-sm">Settings</span>
                                </div>
                            </Sidebar.Header>

                            <Sidebar.Content>
                                <Sidebar.Group>
                                    <Sidebar.GroupLabel>Configuration</Sidebar.GroupLabel>
                                    <Sidebar.GroupContent>
                                        <Sidebar.Menu>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton isActive>
                                                    <span>General</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Compute and Disk</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Infrastructure</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Integrations</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>API Keys</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>JWT Keys</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Log Drains</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Add-ons</span>
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                        </Sidebar.Menu>
                                    </Sidebar.GroupContent>
                                </Sidebar.Group>

                                <Sidebar.Group>
                                    <Sidebar.GroupLabel>Integrations</Sidebar.GroupLabel>
                                    <Sidebar.GroupContent>
                                        <Sidebar.Menu>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Data API</span>
                                                    <ExternalLink className="ml-auto" />
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Vault</span>
                                                </Sidebar.MenuButton>
                                                <Sidebar.MenuBadge>BETA</Sidebar.MenuBadge>
                                            </Sidebar.MenuItem>
                                        </Sidebar.Menu>
                                    </Sidebar.GroupContent>
                                </Sidebar.Group>

                                <Sidebar.Group>
                                    <Sidebar.GroupLabel>Billing</Sidebar.GroupLabel>
                                    <Sidebar.GroupContent>
                                        <Sidebar.Menu>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Subscription</span>
                                                    <ExternalLink className="ml-auto" />
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                            <Sidebar.MenuItem>
                                                <Sidebar.MenuButton>
                                                    <span>Usage</span>
                                                    <ExternalLink className="ml-auto" />
                                                </Sidebar.MenuButton>
                                            </Sidebar.MenuItem>
                                        </Sidebar.Menu>
                                    </Sidebar.GroupContent>
                                </Sidebar.Group>
                            </Sidebar.Content>
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                {/* Main content */}
                <Sidebar.Main>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <span className="text-sm font-medium">Table Editor</span>
                        <span className="text-xs text-muted-color">/ users</span>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </Sidebar.Main>
            </Sidebar.Layout>
        </div>
    );
}

```

### Nested Menu

Recursive menu structure with deeply nested sub-items using `Sidebar.MenuSub` and a recursive render function.

```tsx
'use client';
import { ChevronDown, Folder, Globe, Image, Sidebar as SidebarIcon, Video } from '@primeicons/react';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Sidebar } from '@primereact/ui/sidebar';

type MenuItem = {
    label: string;
    icon?: React.FC<any>;
    isActive?: boolean;
    children?: MenuItem[];
};

type MenuGroup = {
    label: string;
    items: MenuItem[];
};

const menuGroups: MenuGroup[] = [
    {
        label: 'Files',
        items: [
            {
                label: 'Documents',
                icon: Folder,
                children: [
                    {
                        label: 'Work',
                        children: [
                            { label: 'Projects', children: [{ label: 'Q1 Report', isActive: true }, { label: 'Q2 Report' }, { label: 'Roadmap' }] },
                            { label: 'Invoices' },
                            { label: 'Contracts' }
                        ]
                    },
                    {
                        label: 'Personal',
                        children: [{ label: 'Recipes' }, { label: 'Travel' }]
                    }
                ]
            }
        ]
    },
    {
        label: 'Media',
        items: [
            {
                label: 'Photos',
                icon: Image,
                children: [{ label: '2024' }, { label: '2025' }]
            },
            {
                label: 'Videos',
                icon: Video,
                children: [{ label: 'Tutorials' }, { label: 'Recordings' }]
            }
        ]
    },
    {
        label: 'Bookmarks',
        items: [
            {
                label: 'Websites',
                icon: Globe,
                children: [{ label: 'Blog' }, { label: 'Portfolio' }, { label: 'Documentation' }]
            }
        ]
    }
];

function renderMenuItems(items: MenuItem[]) {
    return items.map((item) =>
        item.children ? (
            <Sidebar.MenuItem key={item.label} collapsible defaultOpen={hasActiveChild(item)}>
                <Sidebar.MenuButton tooltip={item.label}>
                    {item.icon && <item.icon />}
                    <span>{item.label}</span>
                    <ChevronDown className="ml-auto transition-transform duration-200 [[data-open]>&]:rotate-180" />
                </Sidebar.MenuButton>
                <Sidebar.MenuSub>{renderMenuItems(item.children)}</Sidebar.MenuSub>
            </Sidebar.MenuItem>
        ) : (
            <Sidebar.MenuSubItem key={item.label}>
                <Sidebar.MenuSubButton isActive={item.isActive}>
                    <span>{item.label}</span>
                </Sidebar.MenuSubButton>
            </Sidebar.MenuSubItem>
        )
    );
}

function hasActiveChild(item: MenuItem): boolean {
    if (item.isActive) return true;

    return item.children?.some(hasActiveChild) ?? false;
}

export default function NestedDemo() {
    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <Sidebar.Layout className="min-h-192! relative!">
                <Sidebar.Root id="nested" collapsible="icon">
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-emerald-500 to-teal-600 text-white text-xs font-bold leading-none">
                                                F
                                            </div>
                                            <span className="font-semibold text-sm">File Manager</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Header>

                            <Sidebar.Content>
                                {menuGroups.map((group) => (
                                    <Sidebar.Group key={group.label}>
                                        <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
                                        <Sidebar.GroupContent>
                                            <Sidebar.Menu>{renderMenuItems(group.items)}</Sidebar.Menu>
                                        </Sidebar.GroupContent>
                                    </Sidebar.Group>
                                ))}
                            </Sidebar.Content>

                            <Sidebar.Footer>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton tooltip="John Doe" className="p-1!">
                                            <Avatar.Root className="size-6! shrink-0! text-xs!" shape="circle">
                                                <Avatar.Fallback>JD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span>John Doe</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Footer>
                            <Sidebar.Rail />
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                <Sidebar.Main>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <Sidebar.Trigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </Sidebar.Trigger>
                        <span className="text-sm font-medium">File Manager</span>
                    </header>
                    <div className="flex-1 p-6">
                        <h1 className="text-2xl font-bold mb-4">Q1 Report</h1>
                        <p className="text-muted-color">Documents &gt; Work &gt; Projects &gt; Q1 Report</p>
                    </div>
                </Sidebar.Main>
            </Sidebar.Layout>
        </div>
    );
}

```

### Chat Application

```tsx
'use client';
import { Globe, PenToSquare, Search, Sidebar as SidebarIcon, Sparkles, Trash } from '@primeicons/react';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Sidebar } from '@primereact/ui/sidebar';

const chatHistory = [
    {
        label: 'Today',
        chats: [
            { title: 'PrimeReact Sidebar component', active: true },
            { title: 'How to use useMotion hook' },
            { title: 'Fix TypeScript generics issue' }
        ]
    },
    {
        label: 'Yesterday',
        chats: [{ title: 'Design system architecture' }, { title: 'React 19 new features overview' }, { title: 'CSS light-dark() function usage' }]
    },
    {
        label: 'Previous 7 days',
        chats: [
            { title: 'Build a dashboard layout' },
            { title: 'Tailwind v4 migration guide' },
            { title: 'Node.js API authentication' },
            { title: 'Monorepo setup with pnpm' },
            { title: 'Deploy Next.js to Vercel' }
        ]
    },
    {
        label: 'Previous 30 days',
        chats: [
            { title: 'GraphQL schema design' },
            { title: 'WebSocket real-time updates' },
            { title: 'PostgreSQL query optimization' },
            { title: 'Docker compose for dev env' }
        ]
    }
];

export default function ChatDemo() {
    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <Sidebar.Layout className="min-h-192! relative!">
                <Sidebar.Root id="chat-history" collapsible="icon" width="16rem">
                    <Sidebar.Spacer />
                    <Sidebar.Aside>
                        <Sidebar.Panel>
                            <Sidebar.Header>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-900 dark:bg-surface-0">
                                                <Sparkles className="size-3 text-surface-0 dark:text-surface-900" />
                                            </div>
                                            <span className="font-semibold text-sm">ChatGPT</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton>
                                            <Search />
                                            <span>Search</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton>
                                            <PenToSquare />
                                            <span>New chat</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton>
                                            <Globe />
                                            <span>Browse web</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Header>

                            <Sidebar.Content className="data-[collapsible=icon]:opacity-0 transition-opacity duration-200">
                                {chatHistory.map((group) => (
                                    <Sidebar.Group key={group.label}>
                                        <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
                                        <Sidebar.GroupContent>
                                            <Sidebar.Menu>
                                                {group.chats.map((chat) => (
                                                    <Sidebar.MenuItem key={chat.title}>
                                                        <Sidebar.MenuButton isActive={chat.active}>
                                                            <span>{chat.title}</span>
                                                        </Sidebar.MenuButton>
                                                        <Sidebar.MenuAction showOnHover>
                                                            <Trash />
                                                        </Sidebar.MenuAction>
                                                    </Sidebar.MenuItem>
                                                ))}
                                            </Sidebar.Menu>
                                        </Sidebar.GroupContent>
                                    </Sidebar.Group>
                                ))}
                            </Sidebar.Content>

                            <Sidebar.Footer>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton className="p-1!">
                                            <Avatar.Root className="size-6! shrink-0! text-xs!" shape="circle">
                                                <Avatar.Fallback>JD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span>John Doe</span>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Footer>
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                <Sidebar.Main>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <Sidebar.Trigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </Sidebar.Trigger>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </Sidebar.Main>
            </Sidebar.Layout>
        </div>
    );
}

```
