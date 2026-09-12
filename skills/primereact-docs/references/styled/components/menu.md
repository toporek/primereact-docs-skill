# Menu

A keyboard-navigable dropdown menu with support for items, checkbox items, radio items, and nested submenus.

## Usage

```tsx
import { Menu } from '@primereact/ui/menu';
```

```tsx
<Menu.Root>
    <Menu.Trigger>Open</Menu.Trigger>
    <Menu.Portal>
        <Menu.Positioner sideOffset={4}>
            <Menu.Popup>
                <Menu.List>
                    <Menu.Group>
                        <Menu.Label>Account</Menu.Label>
                        <Menu.Item>Profile</Menu.Item>
                        <Menu.Item>Settings</Menu.Item>
                    </Menu.Group>
                    <Menu.Separator />
                    <Menu.Group>
                        <Menu.Item>Sign out</Menu.Item>
                    </Menu.Group>
                </Menu.List>
            </Menu.Popup>
        </Menu.Positioner>
    </Menu.Portal>
</Menu.Root>
```

## Examples

### Basic

A standard dropdown with grouped items, a label, and a separator.

### Checkbox & Radio Items

Use `Menu.CheckboxItem` for toggleable options and `Menu.RadioItemGroup` + `Menu.RadioItem` for mutually exclusive options. `Menu.Indicator` with `match="checked"` renders the icon only when the item is selected.

### Submenus

Nest a `Menu.Submenu` inside any `Menu.List`. The `Menu.SubmenuTrigger` is the focusable item in the parent menu; the submenu's content lives inside its own `Menu.Portal` so it positions and animates independently.

### Default Open

Pass `defaultOpen` to a `Menu.Submenu` to make it expand whenever its parent menu opens. To pre-expand a deep path, set `defaultOpen` on every ancestor along the way, each `Menu.Submenu` only mounts (and reads its `defaultOpen`) once its direct parent is open.

### Hover

Pass `openOnHover` to make the trigger open the menu on pointer hover (in addition to click). Use `openDelay` and `closeDelay` (in ms) to fine-tune the timing. Click always activates immediately and bypasses the delays.

### Inline

`Menu` works without a trigger or portal, drop a `Menu.List` directly inside it for sidebar-style navigation menus.

### Tiered Menu

Compose deep, multi-level navigation with `Menu.Submenu` and `Menu.SubmenuTrigger`, submenus open on hover or focus and stay anchored to their trigger.

### Emoji Picker

The Menu component can be customized into a grid-based picker. By applying custom classes to `Menu.List` and `Menu.Item`, the menu layout becomes a categorized emoji grid, with `Menu.Label` marking each category and `Menu.Root`'s `onSelect` reporting the chosen emoji.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/menu.md#api) for `MenuRoot`, `MenuTrigger`, `MenuPortal`, `MenuPositioner`, `MenuPopup`, `MenuArrow`, `MenuList`, `MenuGroup`, `MenuLabel`, `MenuSeparator`, `MenuItem`, `MenuCheckboxItem`, `MenuRadioItemGroup`, `MenuRadioItem`, `MenuSubmenu`, `MenuSubmenuTrigger`, `MenuIndicator` component documentation.

### Hooks

See [Headless API](../../headless/components/menu.md#api) for `useMenu` and `useMenuSubmenu` hook documentation.

### Accessibility

See [Menu Primitive](../../primitive/components/menu.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-menu | Class name of the root element |
| p-menu-trigger-button | Class name of the trigger element |
| p-menu-checkbox-item-indicator | Class name of the checkbox item indicator element |
| p-menu-radio-item-indicator | Class name of the radio item indicator element |
| p-menu-submenu-indicator | Class name of the submenu indicator element |
| p-menu-popup | Class name of the popup element |
| p-menu-positioner | Class name of the positioner element |
| p-menu-arrow | Class name of the arrow element |
| p-menu-list | Class name of the list element |
| p-menu-label | Class name of the group label element |
| p-menu-submenu | Class name of the submenu element |
| p-menu-subportal | Class name of the sub portal element |
| p-menu-subpositioner | Class name of the sub positioner element |
| p-menu-subpopup | Class name of the sub popup element |
| p-menu-subtrigger | Class name of the subtrigger element |
| p-menu-separator | Class name of the separator element |
| p-menu-item | Class name of the item element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| menu.background | --p-menu-background | Background of root |
| menu.border.color | --p-menu-border-color | Border color of root |
| menu.color | --p-menu-color | Color of root |
| menu.border.radius | --p-menu-border-radius | Border radius of root |
| menu.shadow | --p-menu-shadow | Shadow of root |
| menu.transition.duration | --p-menu-transition-duration | Transition duration of root |
| menu.list.padding | --p-menu-list-padding | Padding of list |
| menu.list.gap | --p-menu-list-gap | Gap of list |
| menu.item.focus.background | --p-menu-item-focus-background | Focus background of item |
| menu.item.color | --p-menu-item-color | Color of item |
| menu.item.focus.color | --p-menu-item-focus-color | Focus color of item |
| menu.item.padding | --p-menu-item-padding | Padding of item |
| menu.item.border.radius | --p-menu-item-border-radius | Border radius of item |
| menu.item.gap | --p-menu-item-gap | Gap of item |
| menu.item.icon.color | --p-menu-item-icon-color | Icon color of item |
| menu.item.icon.focus.color | --p-menu-item-icon-focus-color | Icon focus color of item |
| menu.item.icon.size | --p-menu-item-icon-size | Icon size of item |
| menu.item.label.font.weight | --p-menu-item-label-font-weight | Font weight of item label |
| menu.item.label.font.size | --p-menu-item-label-font-size | Font size of item label |
| menu.submenu.label.padding | --p-menu-submenu-label-padding | Padding of submenu label |
| menu.submenu.label.font.weight | --p-menu-submenu-label-font-weight | Font weight of submenu label |
| menu.submenu.label.font.size | --p-menu-submenu-label-font-size | Font size of submenu label |
| menu.submenu.label.background | --p-menu-submenu-label-background | Background of submenu label |
| menu.submenu.label.color | --p-menu-submenu-label-color | Color of submenu label |
| menu.submenu.icon.size | --p-menu-submenu-icon-size | Size of submenu icon |
| menu.submenu.icon.color | --p-menu-submenu-icon-color | Color of submenu icon |
| menu.submenu.icon.focus.color | --p-menu-submenu-icon-focus-color | Focus color of submenu icon |
| menu.separator.border.color | --p-menu-separator-border-color | Border color of separator |
