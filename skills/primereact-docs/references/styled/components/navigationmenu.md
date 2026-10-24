# NavigationMenu

NavigationMenu coordinates multiple Menu instances horizontally or vertically, providing keyboard navigation between them and a single source of truth for which menu is open.

## Usage

```tsx
import { NavigationMenu } from '@primereact/ui/navigationmenu';
import { Menu } from '@primereact/ui/menu';
```

```tsx
<NavigationMenu>
    <Menu.Root id="file">
        <Menu.Trigger />
        <Menu.Portal>
            <Menu.Positioner>
                <Menu.Popup>
                    <Menu.List>
                        <Menu.Item />
                    </Menu.List>
                </Menu.Popup>
            </Menu.Positioner>
        </Menu.Portal>
    </Menu.Root>
    <Menu.Root id="edit"></Menu.Root>
</NavigationMenu>
```

## Examples

### Basic

A standard navigationmenu with multiple top-level menus and grouped items.

### Icons

Add icons to `Menu.Trigger` elements alongside their labels.

### Submenus

Nest a `Menu.Submenu` inside any menu's list to add cascading submenus that share the same NavigationMenu's keyboard navigation.

### Mega Menu

Lay out a `Menu.Popup` as a grid of `Menu.Group` columns to build a mega menu, with each group introduced by a `Menu.Label`.

### NavBar

A typical application top bar that combines a brand mark, a `NavigationMenu` for primary sections, and a `Menu.Root` driven user avatar dropdown.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/navigationmenu.md#api) for `NavigationMenu` component documentation, and [Menu](menu.md) for the `Menu.*` parts used as children.

### Hooks

See [Headless API](../../headless/components/navigationmenu.md#api) for `useNavigationMenu` hook documentation.

### Accessibility

See [NavigationMenu Primitive](../../primitive/components/navigationmenu.md#accessibility) for WAI-ARIA compliance details and keyboard support.
