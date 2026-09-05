# Sidebar

An unstyled layout component for building application navigation with collapsible panels, multi-variant styling, and composable menu structures.

Build fully custom application sidebars with compound components for layout, menus, and collapsible sections.

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
