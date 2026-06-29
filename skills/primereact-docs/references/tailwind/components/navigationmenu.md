# NavigationMenu

NavigationMenu coordinates multiple Menu instances horizontally with shared open state and keyboard navigation between triggers.

```tsx
'use client';
import { Apple } from '@primeicons/react/apple';
import { Clipboard } from '@primeicons/react/clipboard';
import { Copy } from '@primeicons/react/copy';
import { Download } from '@primeicons/react/download';
import { File } from '@primeicons/react/file';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Refresh } from '@primeicons/react/refresh';
import { Replay } from '@primeicons/react/replay';
import { Save } from '@primeicons/react/save';
import { SignOut } from '@primeicons/react/sign-out';
import { Undo } from '@primeicons/react/undo';
import { Menu, MenuGroup, MenuItem, MenuList, MenuPopup, MenuPortal, MenuPositioner, MenuSeparator } from '@/components/ui/menu';
import { NavigationMenu, NavigationMenuTrigger } from '@/components/ui/navigationmenu';

const Shortcut = ({ children }: { children: React.ReactNode }) => (
    <span className="ms-auto text-xs text-surface-500 dark:text-surface-400">{children}</span>
);

export default function Preview() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <Menu>
                    <NavigationMenuTrigger className="px-0 py-0 size-7 items-center justify-center">
                        <Apple className="size-4.5!" />
                    </NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-48">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>About</MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>System Settings…</MenuItem>
                                        <MenuItem>App Store…</MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>
                                            <Refresh />
                                            Restart…
                                        </MenuItem>
                                        <MenuItem>
                                            <SignOut />
                                            Shut Down…
                                        </MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>

                <Menu>
                    <NavigationMenuTrigger>File</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-44">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>
                                            <File />
                                            New Document <Shortcut>⌘ N</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <FolderOpen />
                                            Open <Shortcut>⌘ O</Shortcut>
                                        </MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>
                                            <Save />
                                            Save <Shortcut>⌘ S</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <Download />
                                            Save As… <Shortcut>⇧ ⌘ S</Shortcut>
                                        </MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>

                <Menu>
                    <NavigationMenuTrigger>Edit</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-44">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>
                                            <Undo />
                                            Undo <Shortcut>⌘ Z</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <Replay />
                                            Redo <Shortcut>⇧ ⌘ Z</Shortcut>
                                        </MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>
                                            <Clipboard />
                                            Cut <Shortcut>⌘ X</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <Copy />
                                            Copy <Shortcut>⌘ C</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <File />
                                            Paste <Shortcut>⌘ V</Shortcut>
                                        </MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>

                <Menu>
                    <NavigationMenuTrigger>View</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-40">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>Zoom In</MenuItem>
                                        <MenuItem>Zoom Out</MenuItem>
                                        <MenuItem>Reset Zoom</MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>Full Screen</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>

                <Menu>
                    <NavigationMenuTrigger>Help</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-44">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>Documentation</MenuItem>
                                        <MenuItem>Support</MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>About</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>
            </NavigationMenu>
        </div>
    );
}

```

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
import { Menu, MenuGroup, MenuItem, MenuList, MenuPopup, MenuPortal, MenuPositioner, MenuSeparator } from '@/components/ui/menu';
import { NavigationMenu, NavigationMenuTrigger } from '@/components/ui/navigationmenu';

const Shortcut = ({ children }: { children: React.ReactNode }) => (
    <span className="ms-auto text-xs text-surface-500 dark:text-surface-400">{children}</span>
);

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <Menu>
                    <NavigationMenuTrigger>File</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-44">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>
                                            <File />
                                            New Document <Shortcut>⌘ N</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <FolderOpen />
                                            Open <Shortcut>⌘ O</Shortcut>
                                        </MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>
                                            <Save />
                                            Save <Shortcut>⌘ S</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <Download />
                                            Save As… <Shortcut>⇧ ⌘ S</Shortcut>
                                        </MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>

                <Menu>
                    <NavigationMenuTrigger>Edit</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-44">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>
                                            <Undo />
                                            Undo <Shortcut>⌘ Z</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <Replay />
                                            Redo <Shortcut>⇧ ⌘ Z</Shortcut>
                                        </MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>
                                            <Clipboard />
                                            Cut <Shortcut>⌘ X</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <Copy />
                                            Copy <Shortcut>⌘ C</Shortcut>
                                        </MenuItem>
                                        <MenuItem>
                                            <File />
                                            Paste <Shortcut>⌘ V</Shortcut>
                                        </MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>

                <Menu>
                    <NavigationMenuTrigger>View</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-40">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>Zoom In</MenuItem>
                                        <MenuItem>Zoom Out</MenuItem>
                                        <MenuItem>Reset Zoom</MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>Full Screen</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>

                <Menu>
                    <NavigationMenuTrigger>Help</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-44">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>Documentation</MenuItem>
                                        <MenuItem>Support</MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>About</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>
            </NavigationMenu>
        </div>
    );
}

```

### With Submenus

Each `Menu` inside the bar can contain `MenuSubmenu` for nested levels.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import {
    Menu,
    MenuGroup,
    MenuSubmenuIndicator,
    MenuItem,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuSeparator,
    MenuSubmenu,
    MenuSubmenuTrigger
} from '@/components/ui/menu';
import { NavigationMenu, NavigationMenuTrigger } from '@/components/ui/navigationmenu';

export default function SubmenuDemo() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <Menu>
                    <NavigationMenuTrigger>File</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-44">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>New File</MenuItem>
                                        <MenuItem>Open File…</MenuItem>

                                        <MenuSubmenu>
                                            <MenuSubmenuTrigger>
                                                Open Recent
                                                <MenuSubmenuIndicator>
                                                    <ChevronRight className="size-3.5" />
                                                </MenuSubmenuIndicator>
                                            </MenuSubmenuTrigger>
                                            <MenuPortal>
                                                <MenuPositioner>
                                                    <MenuPopup className="w-40">
                                                        <MenuList>
                                                            <MenuGroup>
                                                                <MenuItem>todo.md</MenuItem>
                                                                <MenuItem>changelog.md</MenuItem>
                                                                <MenuItem>readme.md</MenuItem>

                                                                <MenuSubmenu>
                                                                    <MenuSubmenuTrigger>
                                                                        Older
                                                                        <MenuSubmenuIndicator>
                                                                            <ChevronRight className="size-3.5" />
                                                                        </MenuSubmenuIndicator>
                                                                    </MenuSubmenuTrigger>
                                                                    <MenuPortal>
                                                                        <MenuPositioner>
                                                                            <MenuPopup className="w-40">
                                                                                <MenuList>
                                                                                    <MenuGroup>
                                                                                        <MenuItem>release-notes.md</MenuItem>
                                                                                        <MenuItem>roadmap.md</MenuItem>
                                                                                        <MenuItem>contributing.md</MenuItem>
                                                                                        <MenuItem>license.txt</MenuItem>
                                                                                    </MenuGroup>
                                                                                </MenuList>
                                                                            </MenuPopup>
                                                                        </MenuPositioner>
                                                                    </MenuPortal>
                                                                </MenuSubmenu>
                                                            </MenuGroup>
                                                            <MenuSeparator />
                                                            <MenuGroup>
                                                                <MenuItem>Clear Recent</MenuItem>
                                                            </MenuGroup>
                                                        </MenuList>
                                                    </MenuPopup>
                                                </MenuPositioner>
                                            </MenuPortal>
                                        </MenuSubmenu>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>Save</MenuItem>
                                        <MenuItem>Save As…</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>

                <Menu>
                    <NavigationMenuTrigger>View</NavigationMenuTrigger>
                    <MenuPortal>
                        <MenuPositioner sideOffset={4}>
                            <MenuPopup className="w-44">
                                <MenuList>
                                    <MenuGroup>
                                        <MenuItem>Reload</MenuItem>
                                        <MenuItem>Force Reload</MenuItem>
                                    </MenuGroup>
                                    <MenuSeparator />
                                    <MenuGroup>
                                        <MenuItem>Toggle DevTools</MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </MenuPopup>
                        </MenuPositioner>
                    </MenuPortal>
                </Menu>
            </NavigationMenu>
        </div>
    );
}

```

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
