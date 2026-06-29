# Sidebar

Sidebar is a layout component for building application navigation with collapsible panels, multi-variant styling, and composable menu structures.

```tsx
'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarAside,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarLayout,
    SidebarMain,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarPanel,
    SidebarRail,
    SidebarSpacer,
    SidebarTrigger
} from '@/components/ui/sidebar';
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
            <SidebarLayout className="min-h-192 relative!">
                <Sidebar id="preview" collapsible="icon">
                    <SidebarSpacer />
                    <SidebarAside>
                        <SidebarPanel>
                            <SidebarHeader>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-indigo-600 text-white text-xs font-bold leading-none">
                                                A
                                            </div>
                                            <span className="font-semibold text-sm">Acme Inc</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarHeader>

                            <SidebarContent>
                                {navGroups.map((group) => (
                                    <SidebarGroup key={group.label}>
                                        <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                                        {group.action && (
                                            <SidebarGroupAction>
                                                <Plus />
                                            </SidebarGroupAction>
                                        )}
                                        <SidebarGroupContent>
                                            <SidebarMenu>
                                                {group.items.map((item) => (
                                                    <SidebarMenuItem
                                                        key={item.label}
                                                        collapsible={!!item.subItems}
                                                        defaultOpen={item.subItems?.some((s) => s.isActive)}
                                                    >
                                                        <SidebarMenuButton isActive={item.isActive}>
                                                            <item.icon />
                                                            <span>{item.label}</span>
                                                            {item.subItems && <ChevronDown className="ml-auto" />}
                                                        </SidebarMenuButton>
                                                        {item.subItems ? (
                                                            <SidebarMenuSub>
                                                                {item.subItems.map((sub) => (
                                                                    <SidebarMenuSubItem key={sub.label}>
                                                                        <SidebarMenuSubButton isActive={sub.isActive}>
                                                                            <span>{sub.label}</span>
                                                                        </SidebarMenuSubButton>
                                                                    </SidebarMenuSubItem>
                                                                ))}
                                                            </SidebarMenuSub>
                                                        ) : item.badge ? (
                                                            <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                                                        ) : (
                                                            <SidebarMenuAction showOnHover>
                                                                <EllipsisV />
                                                            </SidebarMenuAction>
                                                        )}
                                                    </SidebarMenuItem>
                                                ))}
                                            </SidebarMenu>
                                        </SidebarGroupContent>
                                    </SidebarGroup>
                                ))}
                            </SidebarContent>

                            <SidebarFooter>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <Avatar className="size-6 shrink-0 text-xs" shape="circle">
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                            <span>John Doe</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarFooter>
                            <SidebarRail />
                        </SidebarPanel>
                    </SidebarAside>
                </Sidebar>

                <SidebarMain>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <SidebarTrigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </SidebarTrigger>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </SidebarMain>
            </SidebarLayout>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/sidebar.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import {
    Sidebar,
    SidebarPanel,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMain,
    SidebarLayout,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarAside,
    SidebarSpacer,
    SidebarTrigger
} from '@/components/ui/sidebar';
```

```tsx
<SidebarLayout>
    <Sidebar id="main" collapsible="icon">
        <SidebarSpacer />
        <SidebarAside>
            <SidebarPanel>
                <SidebarHeader>...</SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton isActive>
                                        <HomeIcon />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>...</SidebarFooter>
            </SidebarPanel>
        </SidebarAside>
    </Sidebar>
    <SidebarMain>
        <SidebarTrigger />
        <main>Content</main>
    </SidebarMain>
</SidebarLayout>
```

## Examples

### Variants

Use the `variant` and `collapsible` props to control the sidebar appearance and collapse behavior.

```tsx
'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectList, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    Sidebar,
    SidebarAside,
    SidebarBackdrop,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarLayout,
    SidebarMain,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarPanel,
    SidebarRail,
    SidebarSpacer,
    SidebarTrigger
} from '@/components/ui/sidebar';
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';
import {
    Bell,
    Calendar,
    ChartBar,
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
import { SelectValueChangeEvent } from 'primereact/select';
import { ToggleButtonGroupValueChangeEvent } from 'primereact/togglebuttongroup';
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
                <Select
                    value={variant}
                    onValueChange={(e: SelectValueChangeEvent) => setVariant(e.value as any)}
                    options={variantOptions}
                    optionLabel="label"
                    optionValue="value"
                    className="w-40"
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Variant" />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectPositioner>
                            <SelectPopup>
                                <SelectList />
                            </SelectPopup>
                        </SelectPositioner>
                    </SelectPortal>
                </Select>
                <Select
                    value={collapsible}
                    onValueChange={(e: SelectValueChangeEvent) => setCollapsible(e.value as any)}
                    options={collapsibleOptions}
                    optionLabel="label"
                    optionValue="value"
                    className="w-40"
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Collapsible" />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectPositioner>
                            <SelectPopup>
                                <SelectList />
                            </SelectPopup>
                        </SelectPositioner>
                    </SelectPortal>
                </Select>
                <ToggleButtonGroup
                    allowEmpty={false}
                    multiple={false}
                    value={side}
                    onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setSide(e.value as 'left' | 'right')}
                >
                    <ToggleButton value="left">Left</ToggleButton>
                    <ToggleButton value="right">Right</ToggleButton>
                </ToggleButtonGroup>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="overlay-cb" checked={overlay} onCheckedChange={(e: any) => setOverlay(e.checked)} />
                    <label htmlFor="overlay-cb" className="text-sm font-medium cursor-pointer">
                        Overlay
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="hover-cb" checked={openOnHover} onCheckedChange={(e: any) => setOpenOnHover(e.checked)} />
                    <label htmlFor="hover-cb" className="text-sm font-medium cursor-pointer">
                        Open on Hover
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="backdrop-cb" checked={backdrop} onCheckedChange={(e: any) => setBackdrop(e.checked)} />
                    <label htmlFor="backdrop-cb" className="text-sm font-medium cursor-pointer">
                        Backdrop
                    </label>
                </div>
            </div>
            <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                <SidebarLayout className="min-h-192 relative!">
                    {backdrop && <SidebarBackdrop className="absolute!" />}
                    {side === 'right' && <SidebarMainC />}
                    <SidebarNavigation variant={variant} collapsible={collapsible} side={side} overlay={overlay} openOnHover={openOnHover} />
                    {side === 'left' && <SidebarMainC />}
                </SidebarLayout>
            </div>
        </div>
    );
}

function SidebarMainC() {
    return (
        <SidebarMain>
            <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                <SidebarTrigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                    <SidebarIcon />
                </SidebarTrigger>
            </header>
            <div className="flex-1 p-4 flex flex-col gap-4">
                <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
            </div>
        </SidebarMain>
    );
}

function SidebarNavigation({
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
        <Sidebar id="variants-demo" variant={variant} collapsible={collapsible} side={side} overlay={overlay} openOnHover={openOnHover}>
            <SidebarSpacer />
            <SidebarAside>
                <SidebarPanel>
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="px-1!">
                                    <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-indigo-600 text-white text-xs font-bold leading-none">
                                        A
                                    </div>
                                    <span className="font-semibold text-sm">Acme Inc</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>
                    <SidebarContent>
                        {navGroups.map((group) => (
                            <SidebarGroup key={group.label}>
                                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {group.items.map((item) => (
                                            <SidebarMenuItem
                                                key={item.label}
                                                collapsible={!!item.subItems}
                                                defaultOpen={item.subItems?.some((s) => s.isActive)}
                                            >
                                                <SidebarMenuButton isActive={item.isActive}>
                                                    <item.icon />
                                                    <span>{item.label}</span>
                                                    {item.subItems && (
                                                        <ChevronDown className="ml-auto transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                                    )}
                                                </SidebarMenuButton>
                                                {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                                                {item.subItems ? (
                                                    <SidebarMenuSub>
                                                        {item.subItems.map((sub) => (
                                                            <SidebarMenuSubItem key={sub.label}>
                                                                <SidebarMenuSubButton isActive={sub.isActive}>
                                                                    <span>{sub.label}</span>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        ))}
                                                    </SidebarMenuSub>
                                                ) : !item.badge ? (
                                                    <SidebarMenuAction showOnHover>
                                                        <EllipsisV />
                                                    </SidebarMenuAction>
                                                ) : null}
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        ))}
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="p-1!">
                                    <Avatar className="size-6 shrink-0 text-xs" shape="circle">
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <span>John Doe</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                    <SidebarRail />
                </SidebarPanel>
            </SidebarAside>
        </Sidebar>
    );
}

```

### Responsive

Use `useIsMobile` hook to switch between desktop and mobile layouts. On mobile, the sidebar becomes offcanvas with overlay and backdrop.

```tsx
'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarAside,
    SidebarBackdrop,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarLayout,
    SidebarMain,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarPanel,
    SidebarSpacer,
    SidebarTrigger
} from '@/components/ui/sidebar';
import { Bell, Cog, Home, Inbox, Search, Sidebar as SidebarIcon, Users } from '@primeicons/react';
import { useIsMobile } from '@primereact/hooks';

export default function ResponsiveDemo() {
    const isMobile = useIsMobile(1024);

    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <SidebarLayout className="min-h-192 relative!">
                {isMobile && <SidebarBackdrop className="absolute!" />}
                <Sidebar id="mobile-nav" collapsible={isMobile ? 'offcanvas' : 'icon'} overlay={isMobile} defaultOpen={!isMobile} width="14rem">
                    <SidebarSpacer />
                    <SidebarAside>
                        <SidebarPanel>
                            <SidebarHeader>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-indigo-600 text-white text-xs font-bold leading-none">
                                                A
                                            </div>
                                            <span className="font-semibold text-sm">Acme Inc</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarHeader>

                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton isActive>
                                                    <Home />
                                                    <span>Home</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Inbox />
                                                    <span>Inbox</span>
                                                </SidebarMenuButton>
                                                <SidebarMenuBadge>3</SidebarMenuBadge>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Search />
                                                    <span>Search</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Users />
                                                    <span>Team</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Bell />
                                                    <span>Notifications</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Cog />
                                                    <span>Settings</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            </SidebarContent>

                            <SidebarFooter>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <Avatar className="size-6 shrink-0 text-xs" shape="circle">
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                            <span>John Doe</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarFooter>
                        </SidebarPanel>
                    </SidebarAside>
                </Sidebar>

                <SidebarMain>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <SidebarTrigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </SidebarTrigger>
                        <span className="text-sm font-medium">Dashboard</span>
                        <span className="ml-auto text-xs text-muted-color rounded-md bg-surface-100 dark:bg-surface-800 px-2 py-1">
                            {isMobile ? 'Mobile' : 'Desktop'}
                        </span>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </SidebarMain>
            </SidebarLayout>
        </div>
    );
}

```

### Dual Sidebar

```tsx
'use client';
import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarAside,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarLayout,
    SidebarMain,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarPanel,
    SidebarSpacer,
    SidebarTrigger
} from '@/components/ui/sidebar';
import { Bell, Calendar, ChartBar, ChevronDown, Cog, Comment, Home, Inbox, Search, Sidebar as SidebarIcon, Users } from '@primeicons/react';

export default function DualDemo() {
    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <SidebarLayout className="min-h-192 relative!">
                {/* Left sidebar - icon collapsible */}
                <Sidebar id="nav" side="left" collapsible="icon" width="14rem">
                    <SidebarSpacer />
                    <SidebarAside>
                        <SidebarPanel>
                            <SidebarHeader>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-indigo-600 text-white text-xs font-bold leading-none">
                                                A
                                            </div>
                                            <span className="font-semibold text-sm">Acme Inc</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarHeader>

                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton isActive>
                                                    <Home />
                                                    <span>Home</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Inbox />
                                                    <span>Inbox</span>
                                                </SidebarMenuButton>
                                                <SidebarMenuBadge>5</SidebarMenuBadge>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Search />
                                                    <span>Search</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Bell />
                                                    <span>Notifications</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>

                                <SidebarGroup>
                                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <SidebarMenuItem collapsible defaultOpen>
                                                <SidebarMenuButton>
                                                    <ChartBar />
                                                    <span>Analytics</span>
                                                    <ChevronDown className="ml-auto transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                                </SidebarMenuButton>
                                                <SidebarMenuSub>
                                                    <SidebarMenuSubItem>
                                                        <SidebarMenuSubButton isActive>Overview</SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                    <SidebarMenuSubItem>
                                                        <SidebarMenuSubButton>Reports</SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                </SidebarMenuSub>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Users />
                                                    <span>Team</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Calendar />
                                                    <span>Calendar</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            </SidebarContent>

                            <SidebarFooter>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Cog />
                                            <span>Settings</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarFooter>
                        </SidebarPanel>
                    </SidebarAside>
                </Sidebar>

                {/* Main content */}
                <SidebarMain>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <SidebarTrigger target="nav" as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </SidebarTrigger>
                        <span className="text-sm font-medium flex-1">Dashboard</span>
                        <SidebarTrigger target="ai" as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <Comment />
                        </SidebarTrigger>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </SidebarMain>

                {/* Right sidebar - Claude-style chat, offcanvas */}
                <Sidebar id="ai" side="right" collapsible="offcanvas" width="18rem">
                    <SidebarSpacer />
                    <SidebarAside>
                        <SidebarPanel>
                            <SidebarHeader>
                                <div className="flex items-center gap-2 px-1">
                                    <span className="font-semibold text-sm text-surface-500">Weekly metrics overview</span>
                                </div>
                            </SidebarHeader>

                            <SidebarContent>
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
                            </SidebarContent>

                            <SidebarFooter>
                                <div className="mx-1 rounded-xl border border-surface-200 dark:border-surface-700 px-3 py-2.5">
                                    <input
                                        type="text"
                                        placeholder="Reply to Claude..."
                                        className="w-full bg-transparent border-none outline-none text-sm"
                                    />
                                </div>
                            </SidebarFooter>
                        </SidebarPanel>
                    </SidebarAside>
                </Sidebar>
            </SidebarLayout>
        </div>
    );
}

```

### Multi Sidebar

```tsx
'use client';
import {
    Sidebar,
    SidebarAside,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarLayout,
    SidebarMain,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarPanel,
    SidebarSpacer
} from '@/components/ui/sidebar';
import { Code, Cog, Database, ExternalLink, Globe, Home, Key, Server } from '@primeicons/react';

export default function MultiDemo() {
    return (
        <div className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <SidebarLayout className="min-h-192 relative!">
                {/* Icon bar - always collapsed, opens on hover as overlay */}
                <Sidebar id="iconbar" side="left" collapsible="icon" overlay openOnHover width="12rem" defaultOpen={false}>
                    <SidebarSpacer />
                    <SidebarAside>
                        <SidebarPanel>
                            <SidebarHeader>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-600 text-white text-xs font-bold leading-none">
                                                A
                                            </div>
                                            <span className="font-semibold text-sm">Acme Inc</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarHeader>

                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton isActive>
                                                    <Home />
                                                    <span>Home</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Database />
                                                    <span>Database</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Key />
                                                    <span>Authentication</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Server />
                                                    <span>Edge Functions</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Globe />
                                                    <span>Storage</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Code />
                                                    <span>SQL Editor</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            </SidebarContent>

                            <SidebarFooter>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Cog />
                                            <span>Settings</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarFooter>
                        </SidebarPanel>
                    </SidebarAside>
                </Sidebar>

                {/* Secondary sidebar - always open, not collapsible */}
                <Sidebar id="secondary" side="left" width="14rem">
                    <SidebarSpacer />
                    <SidebarAside>
                        <SidebarPanel>
                            <SidebarHeader>
                                <div className="px-1">
                                    <span className="font-semibold text-sm">Settings</span>
                                </div>
                            </SidebarHeader>

                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupLabel>Configuration</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton isActive>
                                                    <span>General</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Compute and Disk</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Infrastructure</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Integrations</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>API Keys</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>JWT Keys</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Log Drains</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Add-ons</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>

                                <SidebarGroup>
                                    <SidebarGroupLabel>Integrations</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Data API</span>
                                                    <ExternalLink className="ml-auto" />
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Vault</span>
                                                    <SidebarMenuBadge>BETA</SidebarMenuBadge>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>

                                <SidebarGroup>
                                    <SidebarGroupLabel>Billing</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Subscription</span>
                                                    <ExternalLink className="ml-auto" />
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <span>Usage</span>
                                                    <ExternalLink className="ml-auto" />
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            </SidebarContent>
                        </SidebarPanel>
                    </SidebarAside>
                </Sidebar>

                {/* Main content */}
                <SidebarMain>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <span className="text-sm font-medium">Table Editor</span>
                        <span className="text-xs text-muted-color">/ users</span>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </SidebarMain>
            </SidebarLayout>
        </div>
    );
}

```

### Nested Menu

Recursive menu structure with deeply nested sub-items using `Sidebar.MenuSub` and a recursive render function.

```tsx
'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarAside,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarLayout,
    SidebarMain,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarPanel,
    SidebarRail,
    SidebarSpacer,
    SidebarTrigger
} from '@/components/ui/sidebar';
import { ChevronDown, Folder, Globe, Image, Sidebar as SidebarIcon, Video } from '@primeicons/react';

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
            <SidebarMenuItem key={item.label} collapsible defaultOpen={hasActiveChild(item)}>
                <SidebarMenuButton tooltip={item.label}>
                    {item.icon && <item.icon />}
                    <span>{item.label}</span>
                    <ChevronDown className="ml-auto transition-transform duration-200 [[data-open]>&]:rotate-180" />
                </SidebarMenuButton>
                <SidebarMenuSub>{renderMenuItems(item.children)}</SidebarMenuSub>
            </SidebarMenuItem>
        ) : (
            <SidebarMenuSubItem key={item.label}>
                <SidebarMenuSubButton isActive={item.isActive}>
                    <span>{item.label}</span>
                </SidebarMenuSubButton>
            </SidebarMenuSubItem>
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
            <SidebarLayout className="min-h-192 relative!">
                <Sidebar id="nested" collapsible="icon">
                    <SidebarSpacer />
                    <SidebarAside>
                        <SidebarPanel>
                            <SidebarHeader>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-linear-to-br from-emerald-500 to-teal-600 text-white text-xs font-bold leading-none">
                                                F
                                            </div>
                                            <span className="font-semibold text-sm">File Manager</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarHeader>

                            <SidebarContent>
                                {menuGroups.map((group) => (
                                    <SidebarGroup key={group.label}>
                                        <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                                        <SidebarGroupContent>
                                            <SidebarMenu>{renderMenuItems(group.items)}</SidebarMenu>
                                        </SidebarGroupContent>
                                    </SidebarGroup>
                                ))}
                            </SidebarContent>

                            <SidebarFooter>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton tooltip="John Doe" className="p-1!">
                                            <Avatar className="size-6 shrink-0 text-xs rounded-full">
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                            <span>John Doe</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarFooter>
                            <SidebarRail />
                        </SidebarPanel>
                    </SidebarAside>
                </Sidebar>

                <SidebarMain>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <SidebarTrigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </SidebarTrigger>
                        <span className="text-sm font-medium">File Manager</span>
                    </header>
                    <div className="flex-1 p-6">
                        <h1 className="text-2xl font-bold mb-4">Q1 Report</h1>
                        <p className="text-muted-color">Documents &gt; Work &gt; Projects &gt; Q1 Report</p>
                    </div>
                </SidebarMain>
            </SidebarLayout>
        </div>
    );
}

```

### Chat Application

```tsx
'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarAside,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarLayout,
    SidebarMain,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarPanel,
    SidebarSpacer,
    SidebarTrigger
} from '@/components/ui/sidebar';
import { Globe, PenToSquare, Search, Sidebar as SidebarIcon, Sparkles, Trash } from '@primeicons/react';

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
            <SidebarLayout className="min-h-192 relative!">
                <Sidebar id="chat-history" collapsible="icon" width="16rem">
                    <SidebarSpacer />
                    <SidebarAside>
                        <SidebarPanel>
                            <SidebarHeader>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-900 dark:bg-surface-0">
                                                <Sparkles className="size-3 text-surface-0 dark:text-surface-900" />
                                            </div>
                                            <span className="font-semibold text-sm">ChatGPT</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Search />
                                            <span>Search</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <PenToSquare />
                                            <span>New chat</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Globe />
                                            <span>Browse web</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarHeader>

                            <SidebarContent className="data-[collapsible=icon]:opacity-0 transition-opacity duration-200">
                                {chatHistory.map((group) => (
                                    <SidebarGroup key={group.label}>
                                        <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                                        <SidebarGroupContent>
                                            <SidebarMenu>
                                                {group.chats.map((chat) => (
                                                    <SidebarMenuItem key={chat.title}>
                                                        <SidebarMenuButton isActive={chat.active}>
                                                            <span>{chat.title}</span>
                                                        </SidebarMenuButton>
                                                        <SidebarMenuAction showOnHover>
                                                            <Trash />
                                                        </SidebarMenuAction>
                                                    </SidebarMenuItem>
                                                ))}
                                            </SidebarMenu>
                                        </SidebarGroupContent>
                                    </SidebarGroup>
                                ))}
                            </SidebarContent>

                            <SidebarFooter>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="p-1!">
                                            <Avatar className="size-6 shrink-0 text-xs" shape="circle">
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                            <span>John Doe</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarFooter>
                        </SidebarPanel>
                    </SidebarAside>
                </Sidebar>

                <SidebarMain>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <SidebarTrigger as={Button} severity="secondary" variant="text" size="small" iconOnly>
                            <SidebarIcon />
                        </SidebarTrigger>
                    </header>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 h-48"></div>
                        <div className="rounded-lg bg-surface-100 dark:bg-surface-800 flex-1"></div>
                    </div>
                </SidebarMain>
            </SidebarLayout>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/sidebar.md#api) for `SidebarLayout`, `SidebarRoot`, `SidebarSpacer`, `SidebarAside`, `SidebarPanel`, `SidebarHeader`, `SidebarContent`, `SidebarFooter`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupContent`, `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuSub`, `SidebarMenuSubItem`, `SidebarMenuSubButton`, `SidebarTrigger`, `SidebarRail`, `SidebarMain`, `SidebarBackdrop` component documentation.

### Hooks

See [Headless API](../../headless/components/sidebar.md) for `useSidebar`, `useSidebarLayout`, `useSidebarMenuItem` hook documentation.

### Accessibility

See [Sidebar Primitive](../../primitive/components/sidebar.md#accessibility) for WAI-ARIA compliance details and keyboard support.
