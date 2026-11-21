# ContextMenu

A right-click triggered menu with keyboard navigation, nested submenus, and WAI-ARIA support.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/contextmenu.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import {
    ContextMenu,
    ContextMenuArrow,
    ContextMenuIndicator,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuList,
    ContextMenuPopup,
    ContextMenuPortal,
    ContextMenuPositioner,
    ContextMenuRadioGroup,
    ContextMenuSeparator,
    ContextMenuSubmenu,
    ContextMenuSubmenuTrigger,
    ContextMenuTrigger
} from '@/components/ui/contextmenu';
```

```tsx
<ContextMenu>
    <ContextMenuTrigger>
        <div>Right-click here</div>
    </ContextMenuTrigger>
    <ContextMenuPortal>
        <ContextMenuPositioner>
            <ContextMenuPopup>
                <ContextMenuList>
                    <ContextMenuItem>Copy</ContextMenuItem>
                    <ContextMenuItem>Paste</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Delete</ContextMenuItem>
                </ContextMenuList>
            </ContextMenuPopup>
        </ContextMenuPositioner>
    </ContextMenuPortal>
</ContextMenu>
```

## Examples

### Basic

A standard context menu opened with a right-click on the trigger area.

### Submenus

Nest a `ContextMenuSubmenu` inside any `ContextMenuList`. Reuse the same `ContextMenuPortal` / `ContextMenuPositioner` / `ContextMenuPopup` parts at any level, there are no separate sub-prefixed components.

## Related

### Sub-components

See [Primitive API](../../primitive/components/contextmenu.md#api) for `ContextMenuRoot`, `ContextMenuTrigger`, `ContextMenuPortal`, `ContextMenuPositioner`, `ContextMenuPopup`, `ContextMenuArrow`, `ContextMenuList`, `ContextMenuLabel`, `ContextMenuSeparator`, `ContextMenuItem`, `ContextMenuRadioGroup`, `ContextMenuSubmenu`, `ContextMenuSubmenuTrigger`, `ContextMenuIndicator` props.

### Hooks

See [Headless API](../../headless/components/contextmenu.md#api) for `useContextMenu` and `useContextMenuSubmenu` hook documentation.

### Accessibility

### Screen Reader

`ContextMenu` follows the WAI-ARIA Menu pattern. The trigger is a generic content area (rendered as `div` by default) with `aria-haspopup="menu"` and `tabIndex={0}` so keyboard users can focus it. The popup uses `role="menu"`; items use `menuitem`, `menuitemcheckbox`, or `menuitemradio` based on their type.

### Keyboard Support

| Key                             | Function                                                       |
| ------------------------------- | -------------------------------------------------------------- |
| `Shift+F10` / `ContextMenu` key | Opens the menu when the trigger has focus.                     |
| `down arrow`                    | Moves focus to the next item.                                  |
| `up arrow`                      | Moves focus to the previous item.                              |
| `home`                          | Moves focus to the first item.                                 |
| `end`                           | Moves focus to the last item.                                  |
| `enter` / `space`               | Activates the focused item.                                    |
| `right arrow` (on a subtrigger) | Opens the submenu and focuses its first item.                  |
| `left arrow` (inside a submenu) | Closes the submenu and returns focus to the parent subtrigger. |
| `escape`                        | Closes the menu and returns focus to the trigger.              |
| Any printable character         | Jumps to the next item whose text starts with the character.   |
