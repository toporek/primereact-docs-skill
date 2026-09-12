# NavigationMenu

NavigationMenu coordinates multiple Menu instances horizontally with shared open state and keyboard navigation between triggers.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/navigationmenu.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

`NavigationMenu` wraps any number of `Menu` instances. Each `Menu` keeps its own popup, and the `NavigationMenu` coordinates which one is open, focus path between triggers, and hover-to-switch between them.

```tsx
import { NavigationMenu, NavigationMenuTrigger } from '@/components/ui/navigationmenu';
import { Menu, MenuGroup, MenuItem, MenuList, MenuPopup, MenuPortal, MenuPositioner, MenuSeparator } from '@/components/ui/menu';
```

```tsx
<NavigationMenu>
    <Menu>
        <NavigationMenuTrigger>File</NavigationMenuTrigger>
        <MenuPortal>
            <MenuPositioner sideOffset={4}>
                <MenuPopup>
                    <MenuList>
                        <MenuGroup>
                            <MenuItem>New File</MenuItem>
                            <MenuItem>Open…</MenuItem>
                        </MenuGroup>
                        <MenuSeparator />
                        <MenuGroup>
                            <MenuItem>Save</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </MenuPopup>
            </MenuPositioner>
        </MenuPortal>
    </Menu>

    <Menu>
        <NavigationMenuTrigger>Edit</NavigationMenuTrigger>
        {/* ... */}
    </Menu>
</NavigationMenu>
```

`NavigationMenuTrigger` is a styled wrapper around `Menu.Trigger`, use it for triggers that sit inside a `NavigationMenu` so they pick up bar-level styling and `data-open` highlighting.

## Examples

### Basic

A standard application navigationmenu with `File`, `Edit`, `View`, `Help` menus.

### With Submenus

Each `Menu` inside the bar can contain `MenuSubmenu` for nested levels.

## Related

### Sub-components

See [Primitive API](../../primitive/components/navigationmenu.md#api) for `NavigationMenu` props (`orientation`, `loopFocus`, `modal`, `disabled`).

`NavigationMenuTrigger` is a thin wrapper around `Menu.Trigger`; the underlying API is identical, see [Menu](menu.md) for trigger props.

### Accessibility

### Screen Reader

`NavigationMenu` follows the WAI-ARIA NavigationMenu pattern with `role="navigationmenu"` and `aria-orientation`. Each `NavigationMenuTrigger` exposes `aria-haspopup="true"` and `aria-expanded` to announce open/closed state to assistive technology.

### Keyboard Support

Triggers and items participate in roving focus across the bar.

| Key                              | Function                                                                 |
| -------------------------------- | ------------------------------------------------------------------------ |
| `right arrow` / `left arrow`     | Move focus to the next / previous trigger (loops by default).            |
| `home` / `end`                   | Move focus to the first / last trigger.                                  |
| `down arrow` / `enter` / `space` | Open the focused trigger's menu and move focus to its first item.        |
| `up arrow`                       | Open the focused trigger's menu and move focus to its last item.         |
| `escape`                         | Close the open menu and return focus to its trigger.                     |
| Any printable character          | While a menu is open, jump to the next item starting with the character. |

When a menu is already open, hovering another trigger automatically switches the open menu to it.
