# ContextMenu

A right-click triggered menu with keyboard navigation, nested submenus, and WAI-ARIA support.

## Usage

```tsx
import { ContextMenu } from '@primereact/ui/contextmenu';
```

```tsx
<ContextMenu.Root>
    <ContextMenu.Trigger>
        <div>Right-click here</div>
    </ContextMenu.Trigger>
    <ContextMenu.Portal>
        <ContextMenu.Positioner>
            <ContextMenu.Popup>
                <ContextMenu.List>
                    <ContextMenu.Item>Copy</ContextMenu.Item>
                    <ContextMenu.Item>Paste</ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Item>Delete</ContextMenu.Item>
                </ContextMenu.List>
            </ContextMenu.Popup>
        </ContextMenu.Positioner>
    </ContextMenu.Portal>
</ContextMenu.Root>
```

## Examples

### Basic

A standard context menu opened with a right-click on the trigger area.

### Submenus

Nest a `ContextMenu.Submenu` inside any `ContextMenu.List`. Reuse the same `ContextMenu.Portal` / `ContextMenu.Positioner` / `ContextMenu.Popup` parts at any level, there are no separate sub-prefixed components.

### Checkbox & Radio

Use `ContextMenu.CheckboxItem` for toggleable options and `ContextMenu.RadioItemGroup` + `ContextMenu.RadioItem` for mutually exclusive options. Pair them with `ContextMenu.CheckboxItemIndicator` / `ContextMenu.RadioItemIndicator` to render the active marker.

### Global

Setting the `global` property on `ContextMenu.Root` attaches the context menu to the document.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/contextmenu.md#api) for `ContextMenuRoot`, `ContextMenuTrigger`, `ContextMenuPortal`, `ContextMenuPositioner`, `ContextMenuPopup`, `ContextMenuArrow`, `ContextMenuList`, `ContextMenuGroup`, `ContextMenuLabel`, `ContextMenuSeparator`, `ContextMenuItem`, `ContextMenuRadioGroup`, `ContextMenuSubmenu`, `ContextMenuSubmenuTrigger`, `ContextMenuIndicator` component documentation.

### Hooks

See [Headless API](../../headless/components/contextmenu.md#api) for `useContextMenu` and `useContextMenuSubmenu` hook documentation.

### Accessibility

See [ContextMenu Primitive](../../primitive/components/contextmenu.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-contextmenu | Class name of the root element |
| p-contextmenu-list | Class name of the list element |
| p-contextmenu-submenu | Class name of the submenu element |
| p-contextmenu-trigger | Class name of the trigger element |
| p-contextmenu-subportal | Class name of the sub portal element |
| p-contextmenu-subpositioner | Class name of the sub positioner element |
| p-contextmenu-subpopup | Class name of the sub popup element |
| p-contextmenu-subtrigger | Class name of the subtrigger element |
| p-contextmenu-separator | Class name of the separator element |
| p-contextmenu-item | Class name of the item element |
| p-contextmenu-checkbox-item-indicator | Class name of the checkbox item indicator element |
| p-contextmenu-radio-item-indicator | Class name of the radio item indicator element |
| p-contextmenu-submenu-indicator | Class name of the submenu indicator element |
| p-contextmenu-popup | Class name of the popup element |
| p-contextmenu-positioner | Class name of the positioner element |
| p-contextmenu-arrow | Class name of the arrow element |
| p-contextmenu-label | Class name of the label element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| contextmenu.background | --p-contextmenu-background | Background of root |
| contextmenu.border.color | --p-contextmenu-border-color | Border color of root |
| contextmenu.color | --p-contextmenu-color | Color of root |
| contextmenu.border.radius | --p-contextmenu-border-radius | Border radius of root |
| contextmenu.shadow | --p-contextmenu-shadow | Shadow of root |
| contextmenu.transition.duration | --p-contextmenu-transition-duration | Transition duration of root |
| contextmenu.list.padding | --p-contextmenu-list-padding | Padding of list |
| contextmenu.list.gap | --p-contextmenu-list-gap | Gap of list |
| contextmenu.item.focus.background | --p-contextmenu-item-focus-background | Focus background of item |
| contextmenu.item.active.background | --p-contextmenu-item-active-background | Active background of item |
| contextmenu.item.color | --p-contextmenu-item-color | Color of item |
| contextmenu.item.focus.color | --p-contextmenu-item-focus-color | Focus color of item |
| contextmenu.item.active.color | --p-contextmenu-item-active-color | Active color of item |
| contextmenu.item.padding | --p-contextmenu-item-padding | Padding of item |
| contextmenu.item.border.radius | --p-contextmenu-item-border-radius | Border radius of item |
| contextmenu.item.gap | --p-contextmenu-item-gap | Gap of item |
| contextmenu.item.icon.color | --p-contextmenu-item-icon-color | Icon color of item |
| contextmenu.item.icon.focus.color | --p-contextmenu-item-icon-focus-color | Icon focus color of item |
| contextmenu.item.icon.active.color | --p-contextmenu-item-icon-active-color | Icon active color of item |
| contextmenu.item.icon.size | --p-contextmenu-item-icon-size | Icon size of item |
| contextmenu.item.label.font.weight | --p-contextmenu-item-label-font-weight | Font weight of item label |
| contextmenu.item.label.font.size | --p-contextmenu-item-label-font-size | Font size of item label |
| contextmenu.submenu.mobile.indent | --p-contextmenu-submenu-mobile-indent | Mobile indent of submenu |
| contextmenu.submenu.label.padding | --p-contextmenu-submenu-label-padding | Padding of submenu label |
| contextmenu.submenu.label.font.weight | --p-contextmenu-submenu-label-font-weight | Font weight of submenu label |
| contextmenu.submenu.label.font.size | --p-contextmenu-submenu-label-font-size | Font size of submenu label |
| contextmenu.submenu.label.background | --p-contextmenu-submenu-label-background | Background of submenu label |
| contextmenu.submenu.label.color | --p-contextmenu-submenu-label-color | Color of submenu label |
| contextmenu.submenu.icon.size | --p-contextmenu-submenu-icon-size | Size of submenu icon |
| contextmenu.submenu.icon.color | --p-contextmenu-submenu-icon-color | Color of submenu icon |
| contextmenu.submenu.icon.focus.color | --p-contextmenu-submenu-icon-focus-color | Focus color of submenu icon |
| contextmenu.submenu.icon.active.color | --p-contextmenu-submenu-icon-active-color | Active color of submenu icon |
| contextmenu.separator.border.color | --p-contextmenu-separator-border-color | Border color of separator |
