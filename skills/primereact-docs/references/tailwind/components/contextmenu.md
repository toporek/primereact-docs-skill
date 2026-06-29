# ContextMenu

A right-click triggered menu with keyboard navigation, nested submenus, and WAI-ARIA support.

```tsx
'use client';
import { Bookmark } from '@primeicons/react/bookmark';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Clipboard } from '@primeicons/react/clipboard';
import { Copy } from '@primeicons/react/copy';
import { Download } from '@primeicons/react/download';
import { ExternalLink } from '@primeicons/react/external-link';
import { Eye } from '@primeicons/react/eye';
import { FileEdit } from '@primeicons/react/file-edit';
import { Link } from '@primeicons/react/link';
import { Pencil } from '@primeicons/react/pencil';
import { Trash } from '@primeicons/react/trash';
import {
    ContextMenu,
    ContextMenuGroup,
    ContextMenuSubmenuIndicator,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuList,
    ContextMenuPopup,
    ContextMenuPortal,
    ContextMenuPositioner,
    ContextMenuSeparator,
    ContextMenuSubmenu,
    ContextMenuSubmenuTrigger,
    ContextMenuTrigger
} from '@/components/ui/contextmenu';

export default function Preview() {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="flex items-center justify-center w-full max-w-md mx-auto h-48 rounded-md border-2 border-dashed border-surface-200 dark:border-surface-700 text-sm text-surface-500 dark:text-surface-400 select-none">
                Right-click here
            </ContextMenuTrigger>
            <ContextMenuPortal>
                <ContextMenuPositioner>
                    <ContextMenuPopup className="w-40">
                        <ContextMenuList>
                            <ContextMenuGroup>
                                <ContextMenuLabel>Edit</ContextMenuLabel>
                                <ContextMenuItem>
                                    <FileEdit />
                                    Cut
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    <Copy />
                                    Copy
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    <Clipboard />
                                    Paste
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    <Pencil />
                                    Rename
                                </ContextMenuItem>
                            </ContextMenuGroup>

                            <ContextMenuSeparator />

                            <ContextMenuGroup>
                                <ContextMenuSubmenu>
                                    <ContextMenuSubmenuTrigger>
                                        <Link />
                                        Share
                                        <ContextMenuSubmenuIndicator>
                                            <ChevronRight className="size-3.5" />
                                        </ContextMenuSubmenuIndicator>
                                    </ContextMenuSubmenuTrigger>
                                    <ContextMenuPortal>
                                        <ContextMenuPositioner>
                                            <ContextMenuPopup className="w-40">
                                                <ContextMenuList>
                                                    <ContextMenuGroup>
                                                        <ContextMenuItem>
                                                            <Link />
                                                            Copy link
                                                        </ContextMenuItem>
                                                        <ContextMenuItem>
                                                            <ExternalLink />
                                                            Open in new tab
                                                        </ContextMenuItem>
                                                        <ContextMenuItem>
                                                            <Download />
                                                            Download
                                                        </ContextMenuItem>
                                                    </ContextMenuGroup>
                                                </ContextMenuList>
                                            </ContextMenuPopup>
                                        </ContextMenuPositioner>
                                    </ContextMenuPortal>
                                </ContextMenuSubmenu>

                                <ContextMenuItem>
                                    <Bookmark />
                                    Add to favorites
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    <Eye />
                                    Preview
                                </ContextMenuItem>
                            </ContextMenuGroup>

                            <ContextMenuSeparator />

                            <ContextMenuGroup>
                                <ContextMenuItem className="text-red-600 dark:text-red-400">
                                    <Trash />
                                    Delete
                                </ContextMenuItem>
                            </ContextMenuGroup>
                        </ContextMenuList>
                    </ContextMenuPopup>
                </ContextMenuPositioner>
            </ContextMenuPortal>
        </ContextMenu>
    );
}

```

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

```tsx
'use client';
import {
    ContextMenu,
    ContextMenuGroup,
    ContextMenuItem,
    ContextMenuList,
    ContextMenuPopup,
    ContextMenuPortal,
    ContextMenuPositioner,
    ContextMenuSeparator,
    ContextMenuTrigger
} from '@/components/ui/contextmenu';

export default function BasicDemo() {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="flex items-center justify-center w-full max-w-md mx-auto h-40 rounded-md border-2 border-dashed border-surface-200 dark:border-surface-700 text-sm text-surface-500 dark:text-surface-400 select-none">
                Right-click here
            </ContextMenuTrigger>
            <ContextMenuPortal>
                <ContextMenuPositioner>
                    <ContextMenuPopup className="w-40">
                        <ContextMenuList>
                            <ContextMenuGroup>
                                <ContextMenuItem>Cut</ContextMenuItem>
                                <ContextMenuItem>Copy</ContextMenuItem>
                                <ContextMenuItem>Paste</ContextMenuItem>
                                <ContextMenuItem>Rename</ContextMenuItem>
                            </ContextMenuGroup>

                            <ContextMenuSeparator />

                            <ContextMenuGroup>
                                <ContextMenuItem className="text-red-600 dark:text-red-400">Delete</ContextMenuItem>
                            </ContextMenuGroup>
                        </ContextMenuList>
                    </ContextMenuPopup>
                </ContextMenuPositioner>
            </ContextMenuPortal>
        </ContextMenu>
    );
}

```

### Submenus

Nest a `ContextMenuSubmenu` inside any `ContextMenuList`. Reuse the same `ContextMenuPortal` / `ContextMenuPositioner` / `ContextMenuPopup` parts at any level, there are no separate sub-prefixed components.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Copy } from '@primeicons/react/copy';
import { Download } from '@primeicons/react/download';
import { ExternalLink } from '@primeicons/react/external-link';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Link } from '@primeicons/react/link';
import { Send } from '@primeicons/react/send';
import { Trash } from '@primeicons/react/trash';
import {
    ContextMenu,
    ContextMenuGroup,
    ContextMenuSubmenuIndicator,
    ContextMenuItem,
    ContextMenuList,
    ContextMenuPopup,
    ContextMenuPortal,
    ContextMenuPositioner,
    ContextMenuSeparator,
    ContextMenuSubmenu,
    ContextMenuSubmenuTrigger,
    ContextMenuTrigger
} from '@/components/ui/contextmenu';

export default function SubmenuDemo() {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="flex items-center justify-center w-full max-w-md mx-auto h-40 rounded-md border-2 border-dashed border-surface-200 dark:border-surface-700 text-sm text-surface-500 dark:text-surface-400 select-none">
                Right-click here
            </ContextMenuTrigger>
            <ContextMenuPortal>
                <ContextMenuPositioner>
                    <ContextMenuPopup className="w-40">
                        <ContextMenuList>
                            <ContextMenuGroup>
                                <ContextMenuItem>
                                    <Copy />
                                    Copy
                                </ContextMenuItem>

                                <ContextMenuSubmenu>
                                    <ContextMenuSubmenuTrigger>
                                        <Link />
                                        Share
                                        <ContextMenuSubmenuIndicator>
                                            <ChevronRight className="size-3.5" />
                                        </ContextMenuSubmenuIndicator>
                                    </ContextMenuSubmenuTrigger>
                                    <ContextMenuPortal>
                                        <ContextMenuPositioner>
                                            <ContextMenuPopup className="w-40">
                                                <ContextMenuList>
                                                    <ContextMenuGroup>
                                                        <ContextMenuItem>
                                                            <Send />
                                                            Send via email
                                                        </ContextMenuItem>
                                                        <ContextMenuItem>
                                                            <Link />
                                                            Copy link
                                                        </ContextMenuItem>
                                                        <ContextMenuItem>
                                                            <ExternalLink />
                                                            Open in new tab
                                                        </ContextMenuItem>
                                                    </ContextMenuGroup>
                                                </ContextMenuList>
                                            </ContextMenuPopup>
                                        </ContextMenuPositioner>
                                    </ContextMenuPortal>
                                </ContextMenuSubmenu>

                                <ContextMenuSubmenu>
                                    <ContextMenuSubmenuTrigger>
                                        <Download />
                                        Save as
                                        <ContextMenuSubmenuIndicator>
                                            <ChevronRight className="size-3.5" />
                                        </ContextMenuSubmenuIndicator>
                                    </ContextMenuSubmenuTrigger>
                                    <ContextMenuPortal>
                                        <ContextMenuPositioner>
                                            <ContextMenuPopup className="w-40">
                                                <ContextMenuList>
                                                    <ContextMenuGroup>
                                                        <ContextMenuItem>
                                                            <File />
                                                            PDF
                                                        </ContextMenuItem>

                                                        <ContextMenuSubmenu>
                                                            <ContextMenuSubmenuTrigger>
                                                                <File />
                                                                Image
                                                                <ContextMenuSubmenuIndicator>
                                                                    <ChevronRight className="size-3.5" />
                                                                </ContextMenuSubmenuIndicator>
                                                            </ContextMenuSubmenuTrigger>
                                                            <ContextMenuPortal>
                                                                <ContextMenuPositioner>
                                                                    <ContextMenuPopup className="w-40">
                                                                        <ContextMenuList>
                                                                            <ContextMenuGroup>
                                                                                <ContextMenuItem>PNG</ContextMenuItem>
                                                                                <ContextMenuItem>JPG</ContextMenuItem>
                                                                                <ContextMenuItem>WebP</ContextMenuItem>
                                                                                <ContextMenuItem>SVG</ContextMenuItem>
                                                                            </ContextMenuGroup>
                                                                        </ContextMenuList>
                                                                    </ContextMenuPopup>
                                                                </ContextMenuPositioner>
                                                            </ContextMenuPortal>
                                                        </ContextMenuSubmenu>

                                                        <ContextMenuItem>
                                                            <Folder />
                                                            ZIP archive
                                                        </ContextMenuItem>
                                                    </ContextMenuGroup>
                                                </ContextMenuList>
                                            </ContextMenuPopup>
                                        </ContextMenuPositioner>
                                    </ContextMenuPortal>
                                </ContextMenuSubmenu>
                            </ContextMenuGroup>

                            <ContextMenuSeparator />

                            <ContextMenuGroup>
                                <ContextMenuItem className="text-red-600 dark:text-red-400">
                                    <Trash />
                                    Delete
                                </ContextMenuItem>
                            </ContextMenuGroup>
                        </ContextMenuList>
                    </ContextMenuPopup>
                </ContextMenuPositioner>
            </ContextMenuPortal>
        </ContextMenu>
    );
}

```

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
