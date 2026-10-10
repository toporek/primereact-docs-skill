# Sidebar

Sidebar is a layout component for building application navigation with collapsible panels, multi-variant styling, and composable menu structures.

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

### Responsive

Use `useIsMobile` hook to switch between desktop and mobile layouts. On mobile, the sidebar becomes offcanvas with overlay and backdrop.

### Dual Sidebar

### Multi Sidebar

### Nested Menu

Recursive menu structure with deeply nested sub-items using `Sidebar.MenuSub` and a recursive render function.

### Chat Application

## Related

### Sub-Components

See [Primitive API](../../primitive/components/sidebar.md#api) for `SidebarLayout`, `SidebarRoot`, `SidebarSpacer`, `SidebarAside`, `SidebarPanel`, `SidebarHeader`, `SidebarContent`, `SidebarFooter`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupContent`, `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuSub`, `SidebarMenuSubItem`, `SidebarMenuSubButton`, `SidebarTrigger`, `SidebarRail`, `SidebarMain`, `SidebarBackdrop` component documentation.

### Hooks

See [Headless API](../../headless/components/sidebar.md) for `useSidebar`, `useSidebarLayout`, `useSidebarMenuItem` hook documentation.

### Accessibility

See [Sidebar Primitive](../../primitive/components/sidebar.md#accessibility) for WAI-ARIA compliance details and keyboard support.
