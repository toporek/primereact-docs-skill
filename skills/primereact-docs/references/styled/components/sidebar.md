# Sidebar

Sidebar is a layout component for building application navigation with collapsible panels, multi-variant styling, and composable menu structures.

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

### With Menu

Company switcher in the header and user menu in the footer using Popover and Menu components.

### Responsive

Use `useIsMobile` hook to switch between desktop and mobile layouts. On mobile, the sidebar becomes offcanvas with overlay and backdrop.

### Dual Sidebar

### Multi Sidebar

### Nested Menu

Recursive menu structure with deeply nested sub-items using `Sidebar.MenuSub` and a recursive render function.

### Chat Application
