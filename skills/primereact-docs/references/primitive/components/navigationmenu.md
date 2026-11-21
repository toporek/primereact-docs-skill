# NavigationMenu

An unstyled, accessible horizontal menu bar that coordinates multiple Menu instances with keyboard navigation between them.

Compose a horizontal navigation bar from multiple Menu primitives, NavigationMenu tracks which menu is open, switches between them on hover, and routes arrow-key navigation across triggers.

## Features

- Coordinates multiple `Menu.Root` children, allowing only one menu to be open at a time
- Hover-to-switch: hovering another trigger while a menu is open transfers the open state to it
- Arrow-key navigation between sibling triggers
- Horizontal or vertical orientation
- WAI-ARIA `menubar` role with proper `aria-orientation`

## Usage

```tsx
import { Menu } from 'primereact/menu';
import { NavigationMenu } from 'primereact/navigationmenu';
```

```tsx
<NavigationMenu>
    <Menu.Root>
        <Menu.Trigger>File</Menu.Trigger>
        <Menu.Portal>
            <Menu.Positioner>
                <Menu.Popup>
                    <Menu.List>
                        <Menu.Item>New</Menu.Item>
                        <Menu.Item>Open</Menu.Item>
                    </Menu.List>
                </Menu.Popup>
            </Menu.Positioner>
        </Menu.Portal>
    </Menu.Root>
    <Menu.Root>
        <Menu.Trigger>Edit</Menu.Trigger>
        {/* ... */}
    </Menu.Root>
</NavigationMenu>
```

## API

### NavigationMenu

> **`NavigationMenu` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/navigationmenu or the installed `@primereact/types`.

| Attribute            | Value                               |
| -------------------- | ----------------------------------- |
| `role`               | `"menubar"`                         |
| `data-scope`         | `"navigationmenu"`                  |
| `data-part`          | `"root"`                            |
| `data-orientation`   | `"horizontal"` or `"vertical"`      |
| `data-has-open-menu` | Present when any child menu is open |
| `data-modal`         | Present when modal mode is enabled  |
| `data-disabled`      | Present when disabled               |

| Label | Type | Description |
|:------|:------|:------|
| root | NavigationMenuPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

NavigationMenu uses the `menubar` role with `aria-orientation` reflecting the current orientation. Each child `Menu.Trigger` is treated as a `menuitem` within the bar.

### Keyboard Support

| Key                          | Function                                                             |
| ---------------------------- | -------------------------------------------------------------------- |
| `left arrow` / `right arrow` | Moves focus to the previous / next trigger (horizontal orientation). |
| `up arrow` / `down arrow`    | Moves focus to the previous / next trigger (vertical orientation).   |
| `enter` / `space`            | Opens the focused menu.                                              |
| `home` / `end`               | Moves focus to the first / last trigger.                             |
| `escape`                     | Closes the open menu and returns focus to its trigger.               |
