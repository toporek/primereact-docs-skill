# NavigationMenu

An unstyled, accessible horizontal menu bar that coordinates multiple Menu instances with keyboard navigation between them.

Compose a horizontal navigation bar from multiple Menu primitives, NavigationMenu tracks which menu is open, switches between them on hover, and routes arrow-key navigation across triggers.

```tsx
'use client';
import { Clipboard } from '@primeicons/react/clipboard';
import { Copy } from '@primeicons/react/copy';
import { Download } from '@primeicons/react/download';
import { File } from '@primeicons/react/file';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Replay } from '@primeicons/react/replay';
import { Save } from '@primeicons/react/save';
import { Undo } from '@primeicons/react/undo';
import { Menu } from 'primereact/menu';
import { NavigationMenu } from 'primereact/navigationmenu';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.container}>
            <NavigationMenu className={styles.bar}>
                <Menu.Root>
                    <Menu.Trigger className={styles.trigger}>File</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className={styles.popup}>
                                <Menu.List className={styles.list}>
                                    <Menu.Group>
                                        <Menu.Item className={styles.item}>
                                            <File className={styles.icon} />
                                            New Document
                                        </Menu.Item>
                                        <Menu.Item className={styles.item}>
                                            <FolderOpen className={styles.icon} />
                                            Open
                                        </Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator className={styles.separator} />
                                    <Menu.Group>
                                        <Menu.Item className={styles.item}>
                                            <Save className={styles.icon} />
                                            Save
                                        </Menu.Item>
                                        <Menu.Item className={styles.item}>
                                            <Download className={styles.icon} />
                                            Save As…
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger className={styles.trigger}>Edit</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className={styles.popup}>
                                <Menu.List className={styles.list}>
                                    <Menu.Group>
                                        <Menu.Item className={styles.item}>
                                            <Undo className={styles.icon} />
                                            Undo
                                        </Menu.Item>
                                        <Menu.Item className={styles.item}>
                                            <Replay className={styles.icon} />
                                            Redo
                                        </Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator className={styles.separator} />
                                    <Menu.Group>
                                        <Menu.Item className={styles.item}>
                                            <Clipboard className={styles.icon} />
                                            Cut
                                        </Menu.Item>
                                        <Menu.Item className={styles.item}>
                                            <Copy className={styles.icon} />
                                            Copy
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger className={styles.trigger}>View</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className={styles.popup}>
                                <Menu.List className={styles.list}>
                                    <Menu.Group>
                                        <Menu.Item className={styles.item}>Zoom In</Menu.Item>
                                        <Menu.Item className={styles.item}>Zoom Out</Menu.Item>
                                        <Menu.Item className={styles.item}>Reset Zoom</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>
            </NavigationMenu>
        </div>
    );
}

```

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

> **API/props table for `NavigationMenu` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
