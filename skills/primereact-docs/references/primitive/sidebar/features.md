# Sidebar

An unstyled layout component for building application navigation with collapsible panels, multi-variant styling, and composable menu structures.

Build fully custom application sidebars with compound components for layout, menus, and collapsible sections.

```tsx
'use client';
import { Bell, Calendar, ChartBar, CreditCard, EllipsisV, Folder, Home, Inbox, Search, ShoppingCart, Star, Users } from '@primeicons/react';
import { Sidebar } from 'primereact/sidebar';

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

export default function BasicDemo() {
    return (
        <div className="relative max-w-3xl w-full mx-auto border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <Sidebar.Layout className="min-h-[50vh]">
                <Sidebar.Root id="demo" className="h-[50vh]" collapsible="icon">
                    <Sidebar.Spacer />
                    <Sidebar.Panel>
                        <Sidebar.Body>
                            <Sidebar.Header>
                                <Sidebar.Menu>
                                    <Sidebar.MenuItem>
                                        <Sidebar.MenuButton tooltip="Acme Inc" className="h-auto! p-1 group-data-[collapsible=icon]:p-1!">
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
                                                        <Sidebar.MenuButton isActive={item.isActive} tooltip={item.label}>
                                                            <item.icon />
                                                            <span>{item.label}</span>
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
                                        <Sidebar.MenuButton tooltip="John Doe" className="h-auto! p-1 group-data-[collapsible=icon]:p-1!">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-200 dark:bg-surface-800 text-xs font-medium">
                                                JD
                                            </div>
                                            <span>John Doe</span>
                                        </Sidebar.MenuButton>
                                        <Sidebar.MenuAction showOnHover>
                                            <EllipsisV />
                                        </Sidebar.MenuAction>
                                    </Sidebar.MenuItem>
                                </Sidebar.Menu>
                            </Sidebar.Footer>
                            <Sidebar.Rail />
                        </Sidebar.Body>
                    </Sidebar.Panel>
                </Sidebar.Root>

                <Sidebar.Inset>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <Sidebar.Trigger />
                        <span className="text-sm font-medium">Dashboard</span>
                    </header>
                    <div className="flex-1 p-6">
                        <h1 className="text-2xl font-bold mb-4">Welcome back, John</h1>
                        <p className="text-muted-color">Select an item from the sidebar to get started.</p>
                    </div>
                </Sidebar.Inset>
            </Sidebar.Layout>
        </div>
    );
}
```

## Features

- Compound component API with sub-components: `Layout`, `Root`, `Spacer`, `Panel`, `Body`, `Header`, `Content`, `Footer`, `Group`, `GroupLabel`, `GroupContent`, `Menu`, `MenuItem`, `MenuButton`, `MenuAction`, `MenuBadge`, `MenuSub`, `MenuSubItem`, `MenuSubButton`, `Trigger`, `Rail`, `Inset`, `Backdrop`
- Three visual variants: `sidebar`, `floating`, `inset`
- Three collapsible modes: `icon`, `offcanvas`, `none`
- Left and right side positioning
- Multi-sidebar support with `Layout` + `id`/`target`
- Collapsible menu items with animated expand/collapse via `useMotion`
- Hover-to-open with configurable delays
- Overlay mode with animated [Backdrop](https://v11.primereact.org/docs/primitive/backdrop)
- Controlled and uncontrolled open state

## Usage

```tsx
import { Sidebar } from 'primereact/sidebar';
```

```tsx
<Sidebar.Layout>
    <Sidebar.Root id="main" collapsible="icon">
        <Sidebar.Spacer />
        <Sidebar.Panel>
            <Sidebar.Body>
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
                <Sidebar.Rail />
            </Sidebar.Body>
        </Sidebar.Panel>
    </Sidebar.Root>
    <Sidebar.Inset>
        <Sidebar.Trigger />
        <main>Content</main>
    </Sidebar.Inset>
</Sidebar.Layout>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Sidebar.Trigger as="div">...</Sidebar.Trigger>
```

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Sidebar.Content>{(instance) => <div>{instance.sidebar?.state.open ? 'Open' : 'Closed'}</div>}</Sidebar.Content>
```

### Collapsible Menu Items

Add `collapsible` prop to `MenuItem` for animated expandable submenus.

```tsx
<Sidebar.MenuItem collapsible defaultOpen={false}>
    <Sidebar.MenuButton>
        <FolderIcon />
        <span>Documents</span>
    </Sidebar.MenuButton>
    <Sidebar.MenuSub>
        <Sidebar.MenuSubItem>
            <Sidebar.MenuSubButton>Shared</Sidebar.MenuSubButton>
        </Sidebar.MenuSubItem>
    </Sidebar.MenuSub>
</Sidebar.MenuItem>
```

### Multi-Sidebar

Use `Layout` with `id` and `target` props for multiple independent sidebars.

```tsx
<Sidebar.Layout>
    <Sidebar.Root side="left" id="nav">
        ...
    </Sidebar.Root>
    <Sidebar.Inset>
        <Sidebar.Trigger target="nav" />
        <Sidebar.Trigger target="tools" />
    </Sidebar.Inset>
    <Sidebar.Root side="right" id="tools">
        ...
    </Sidebar.Root>
</Sidebar.Layout>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { Sidebar } from 'primereact/sidebar';

export default function SidebarPTDemo() {
    return (
        <div className="flex">
            <Sidebar.Layout />
            <div
                data-scope="sidebar"
                data-part="root"
                data-state="expanded"
                data-variant="sidebar"
                data-side="left"
                data-collapsible-mode="icon"
                data-slot="root"
                className="p-sidebar p-component relative flex flex-col w-64 border-r border-surface-200 dark:border-surface-700"
                style={{ '--sidebar-width': '16rem', '--sidebar-width-icon': '3rem' } as React.CSSProperties}
            >
                <div data-scope="sidebar" data-part="body" data-state="expanded" data-variant="sidebar" data-slot="root" className="p-sidebar-body">
                    <div data-scope="sidebar" data-part="header" data-state="expanded" data-slot="root" className="p-sidebar-header">
                        <ul data-scope="sidebar" data-part="menu" data-slot="root" className="p-sidebar-menu">
                            <li data-scope="sidebar" data-part="menu-item" data-slot="root" className="p-sidebar-menu-item">
                                <button data-scope="sidebar" data-part="menu-button" data-slot="root" className="p-sidebar-menu-button">
                                    <span>Acme Inc</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div data-scope="sidebar" data-part="content" data-state="expanded" data-slot="root" className="p-sidebar-content">
                        <div data-scope="sidebar" data-part="group" data-slot="root" className="p-sidebar-group">
                            <div data-scope="sidebar" data-part="group-label" data-slot="root" className="p-sidebar-group-label">
                                Navigation
                            </div>
                            <div data-scope="sidebar" data-part="group-content" data-slot="root" className="p-sidebar-group-content">
                                <ul data-scope="sidebar" data-part="menu" data-slot="root" className="p-sidebar-menu">
                                    <li data-scope="sidebar" data-part="menu-item" data-slot="root" className="p-sidebar-menu-item">
                                        <button
                                            data-scope="sidebar"
                                            data-part="menu-button"
                                            data-active="true"
                                            data-slot="root"
                                            className="p-sidebar-menu-button"
                                        >
                                            <span>Home</span>
                                        </button>
                                    </li>
                                    <li data-scope="sidebar" data-part="menu-item" data-slot="root" className="p-sidebar-menu-item">
                                        <button data-scope="sidebar" data-part="menu-button" data-slot="root" className="p-sidebar-menu-button">
                                            <span>Inbox</span>
                                        </button>
                                        <span data-scope="sidebar" data-part="menu-badge" data-slot="root" className="p-sidebar-menu-badge">
                                            12
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-scope="sidebar" data-part="footer" data-state="expanded" data-slot="root" className="p-sidebar-footer">
                        <ul data-scope="sidebar" data-part="menu" data-slot="root" className="p-sidebar-menu">
                            <li data-scope="sidebar" data-part="menu-item" data-slot="root" className="p-sidebar-menu-item">
                                <button data-scope="sidebar" data-part="menu-button" data-slot="root" className="p-sidebar-menu-button">
                                    <span>John Doe</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

## API

### SidebarLayout

> **API/props table for `SidebarLayout` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarLayout` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarRoot

> **API/props table for `SidebarRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute               | Value                                                   |
| ----------------------- | ------------------------------------------------------- |
| `data-state`            | `"expanded"` \| `"collapsed"`                           |
| `data-variant`          | `"sidebar"` \| `"floating"` \| `"inset"`                |
| `data-collapsible`      | `"offcanvas"` \| `"icon"` \| `""` (empty when expanded) |
| `data-collapsible-mode` | `"offcanvas"` \| `"icon"` \| `"none"` (always present)  |
| `data-side`             | `"left"` \| `"right"`                                   |
| `data-overlay`          | Present when overlay is true                            |

> **API/props table for `SidebarRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarSpacer

> **API/props table for `SidebarSpacer` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarSpacer` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarPanel

> **API/props table for `SidebarPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarPanel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarBody

> **API/props table for `SidebarBody` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarBody` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarHeader

> **API/props table for `SidebarHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarContent

> **API/props table for `SidebarContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarFooter

> **API/props table for `SidebarFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarGroup

> **API/props table for `SidebarGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarGroup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarGroupLabel

> **API/props table for `SidebarGroupLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarGroupLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarGroupContent

> **API/props table for `SidebarGroupContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarGroupContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarMenu

> **API/props table for `SidebarMenu` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarMenu` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarMenuItem

> **API/props table for `SidebarMenuItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute   | Value                                  |
| ----------- | -------------------------------------- |
| `data-open` | Present when the menu item is expanded |

> **API/props table for `SidebarMenuItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarMenuButton

> **API/props table for `SidebarMenuButton` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                              |
| ------------- | ---------------------------------- |
| `data-active` | `"true"` when the button is active |

> **API/props table for `SidebarMenuButton` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarMenuAction

> **API/props table for `SidebarMenuAction` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarMenuAction` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarMenuBadge

> **API/props table for `SidebarMenuBadge` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarMenuBadge` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarMenuSub

> **API/props table for `SidebarMenuSub` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarMenuSub` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarMenuSubItem

> **API/props table for `SidebarMenuSubItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarMenuSubItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarMenuSubButton

> **API/props table for `SidebarMenuSubButton` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                              |
| ------------- | ---------------------------------- |
| `data-active` | `"true"` when the button is active |
| `data-size`   | `"sm"` when small size is set      |

> **API/props table for `SidebarMenuSubButton` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarTrigger

> **API/props table for `SidebarTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarRail

> **API/props table for `SidebarRail` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarRail` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarInset

> **API/props table for `SidebarInset` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `SidebarInset` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### SidebarBackdrop

> **API/props table for `SidebarBackdrop` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

Uses the [Backdrop](https://v11.primereact.org/docs/primitive/backdrop) component internally for animated overlay rendering.

> **API/props table for `SidebarBackdrop` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Sidebar uses `navigation` landmark role by default. The `Trigger` element toggles the sidebar open state. Each `MenuItem` uses `button` role for interactive menu items.

### Keyboard Support

| Key           | Function                                       |
| ------------- | ---------------------------------------------- |
| `tab`         | Moves focus to the next focusable element.     |
| `shift + tab` | Moves focus to the previous focusable element. |
| `enter`       | Activates the focused menu button or trigger.  |
| `space`       | Activates the focused menu button or trigger.  |
