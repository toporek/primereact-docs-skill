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
                    <Sidebar.Aside>
                        <Sidebar.Panel>
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
                        </Sidebar.Panel>
                    </Sidebar.Aside>
                </Sidebar.Root>

                <Sidebar.Main>
                    <header className="flex h-12 items-center gap-2 border-b border-surface-200 dark:border-surface-700 px-4">
                        <Sidebar.Trigger />
                        <span className="text-sm font-medium">Dashboard</span>
                    </header>
                    <div className="flex-1 p-6">
                        <h1 className="text-2xl font-bold mb-4">Welcome back, John</h1>
                        <p className="text-muted-color">Select an item from the sidebar to get started.</p>
                    </div>
                </Sidebar.Main>
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
- Overlay mode with animated [Backdrop](https://primereact.dev/docs/primitive/components/backdrop)
- Controlled and uncontrolled open state

## Usage

```tsx
import { Sidebar } from 'primereact/sidebar';
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
                <Sidebar.Rail />
            </Sidebar.Panel>
        </Sidebar.Aside>
    </Sidebar.Root>
    <Sidebar.Main>
        <Sidebar.Trigger />
        <main>Content</main>
    </Sidebar.Main>
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
    <Sidebar.Main>
        <Sidebar.Trigger target="nav" />
        <Sidebar.Trigger target="tools" />
    </Sidebar.Main>
    <Sidebar.Root side="right" id="tools">
        ...
    </Sidebar.Root>
</Sidebar.Layout>
```

## Pass Through

## API

### SidebarLayout

> **`SidebarLayout` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

> **`SidebarLayout` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

### SidebarRoot

> **`SidebarRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Attribute               | Value                                                   |
| ----------------------- | ------------------------------------------------------- |
| `data-state`            | `"expanded"` \| `"collapsed"`                           |
| `data-variant`          | `"sidebar"` \| `"floating"` \| `"inset"`                |
| `data-collapsible`      | `"offcanvas"` \| `"icon"` \| `""` (empty when expanded) |
| `data-collapsible-mode` | `"offcanvas"` \| `"icon"` \| `"none"` (always present)  |
| `data-side`             | `"left"` \| `"right"`                                   |
| `data-overlay`          | Present when overlay is true                            |

> **`SidebarRoot` API table (`pt`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

### SidebarSpacer

> **`SidebarSpacer` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarSpacerPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarAside

> **`SidebarAside` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarAsidePassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarPanel

> **`SidebarPanel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarPanelPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarHeader

> **`SidebarHeader` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarContent

> **`SidebarContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarFooter

> **`SidebarFooter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarGroup

> **`SidebarGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarGroupPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarGroupLabel

> **`SidebarGroupLabel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarGroupLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarGroupContent

> **`SidebarGroupContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarGroupContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMenu

> **`SidebarMenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMenuPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMenuItem

> **`SidebarMenuItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Attribute   | Value                                  |
| ----------- | -------------------------------------- |
| `data-open` | Present when the menu item is expanded |

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMenuItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMenuButton

> **`SidebarMenuButton` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Attribute     | Value                              |
| ------------- | ---------------------------------- |
| `data-active` | `"true"` when the button is active |

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMenuButtonPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMenuAction

> **`SidebarMenuAction` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMenuActionPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMenuBadge

> **`SidebarMenuBadge` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMenuBadgePassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMenuSub

> **`SidebarMenuSub` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMenuSubPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMenuSubItem

> **`SidebarMenuSubItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMenuSubItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMenuSubButton

> **`SidebarMenuSubButton` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Attribute     | Value                              |
| ------------- | ---------------------------------- |
| `data-active` | `"true"` when the button is active |
| `data-size`   | `"sm"` when small size is set      |

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMenuSubButtonPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarTrigger

> **`SidebarTrigger` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarRail

> **`SidebarRail` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarRailPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarMain

> **`SidebarMain` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarMainPassThroughType> | Used to pass attributes to the root's DOM element. |

### SidebarBackdrop

> **`SidebarBackdrop` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/sidebar or the installed `@primereact/types`.

Uses the [Backdrop](https://primereact.dev/docs/primitive/components/backdrop) component internally for animated overlay rendering.

| Label | Type | Description |
|:------|:------|:------|
| root | SidebarBackdropPassThroughType> | Used to pass attributes to the root's DOM element. |

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
