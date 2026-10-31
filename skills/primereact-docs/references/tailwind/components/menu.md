# Menu

A keyboard-navigable dropdown menu with support for items, checkbox items, radio items, and nested submenus.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/menu.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import {
    Menu,
    MenuArrow,
    MenuCheckboxItem,
    MenuGroup,
    MenuIndicator,
    MenuItem,
    MenuLabel,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuRadioItem,
    MenuRadioItemGroup,
    MenuSeparator,
    MenuSubmenu,
    MenuSubmenuTrigger,
    MenuTrigger
} from '@/components/ui/menu';
```

```tsx
<Menu>
    <MenuTrigger>Open</MenuTrigger>
    <MenuPortal>
        <MenuPositioner sideOffset={4}>
            <MenuPopup>
                <MenuList>
                    <MenuGroup>
                        <MenuLabel>Account</MenuLabel>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                    </MenuGroup>
                    <MenuSeparator />
                    <MenuGroup>
                        <MenuItem>Sign out</MenuItem>
                    </MenuGroup>
                </MenuList>
            </MenuPopup>
        </MenuPositioner>
    </MenuPortal>
</Menu>
```

## Examples

### Basic

A standard dropdown with grouped items, a label, and a separator.

### Checkbox & Radio Items

Use `MenuCheckboxItem` for toggleable options and `MenuRadioItemGroup` + `MenuRadioItem` for mutually exclusive options. `MenuIndicator` with `match="checked"` renders the icon only when the item is selected.

### Submenus

Nest a `MenuSubmenu` inside any `MenuList`. The `MenuSubmenuTrigger` is the focusable item in the parent menu; the submenu's content lives inside its own `MenuPortal` so it positions and animates independently.

### Hover

Pass `openOnHover` to make the trigger open the menu on pointer hover (in addition to click). Use `openDelay` and `closeDelay` (in ms) to fine-tune the timing. Click always activates immediately and bypasses the delays.

### Inline

`Menu` works without a trigger or portal, drop a `MenuList` directly inside it for sidebar-style navigation menus.

### Tiered Menu

Compose deep, multi-level navigation with `MenuSubmenu` and `MenuSubmenuTrigger`, submenus open on hover or focus and stay anchored to their trigger.

## Related

### Sub-components

See [Primitive API](../../primitive/components/menu.md#api) for `MenuRoot`, `MenuTrigger`, `MenuPortal`, `MenuPositioner`, `MenuPopup`, `MenuArrow`, `MenuList`, `MenuGroup`, `MenuLabel`, `MenuSeparator`, `MenuItem`, `MenuCheckboxItem`, `MenuRadioItemGroup`, `MenuRadioItem`, `MenuSubmenu`, `MenuSubmenuTrigger`, `MenuIndicator` props.

### Hooks

See [Headless API](../../headless/components/menu.md#api) for `useMenu` and `useMenuSubmenu` hook documentation.

### Accessibility

### Screen Reader

`Menu` follows the WAI-ARIA Menu Button pattern. The trigger uses `aria-haspopup="true"` and `aria-expanded` reflecting the open state. The list uses `role="menu"`; items use `menuitem`, `menuitemcheckbox`, or `menuitemradio` based on their type. `aria-checked` is applied to checkable items. `MenuLabel` inside `MenuGroup` is wired to the group via `aria-labelledby` automatically.

### Keyboard Support

| Key                          | Function                                                               |
| ---------------------------- | ---------------------------------------------------------------------- |
| `space` / `enter` on trigger | Opens the menu and moves focus to the first item.                      |
| `down arrow`                 | Moves focus to the next item.                                          |
| `up arrow`                   | Moves focus to the previous item.                                      |
| `home`                       | Moves focus to the first item.                                         |
| `end`                        | Moves focus to the last item.                                          |
| `enter` / `space`            | Activates the focused item (fires `onSelect`, then closes by default). |
| `escape`                     | Closes the menu and returns focus to the trigger.                      |
| `tab`                        | Closes the menu and moves focus to the next focusable element.         |
| Any printable character      | Jumps to the next item whose text starts with the character.           |
