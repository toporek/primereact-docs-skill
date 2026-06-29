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
import { ContextMenu } from '@primereact/ui/contextmenu';

export default function Preview() {
    return (
        <ContextMenu.Root>
            <ContextMenu.Trigger className="flex items-center justify-center w-full max-w-md mx-auto h-48 rounded-md border-2 border-dashed border-surface-200 dark:border-surface-700 text-sm text-surface-500 dark:text-surface-400 select-none">
                Right-click here
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
                <ContextMenu.Positioner>
                    <ContextMenu.Popup className="w-40">
                        <ContextMenu.List>
                            <ContextMenu.Group>
                                <ContextMenu.Label>Edit</ContextMenu.Label>
                                <ContextMenu.Item>
                                    <FileEdit />
                                    Cut
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <Copy />
                                    Copy
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <Clipboard />
                                    Paste
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <Pencil />
                                    Rename
                                </ContextMenu.Item>
                            </ContextMenu.Group>

                            <ContextMenu.Separator />

                            <ContextMenu.Group>
                                <ContextMenu.Submenu>
                                    <ContextMenu.SubmenuTrigger>
                                        <Link />
                                        Share
                                        <ContextMenu.SubmenuIndicator>
                                            <ChevronRight className="size-3.5" />
                                        </ContextMenu.SubmenuIndicator>
                                    </ContextMenu.SubmenuTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.Positioner>
                                            <ContextMenu.Popup className="w-40">
                                                <ContextMenu.List>
                                                    <ContextMenu.Group>
                                                        <ContextMenu.Item>
                                                            <Link />
                                                            Copy link
                                                        </ContextMenu.Item>
                                                        <ContextMenu.Item>
                                                            <ExternalLink />
                                                            Open in new tab
                                                        </ContextMenu.Item>
                                                        <ContextMenu.Item>
                                                            <Download />
                                                            Download
                                                        </ContextMenu.Item>
                                                    </ContextMenu.Group>
                                                </ContextMenu.List>
                                            </ContextMenu.Popup>
                                        </ContextMenu.Positioner>
                                    </ContextMenu.Portal>
                                </ContextMenu.Submenu>

                                <ContextMenu.Item>
                                    <Bookmark />
                                    Add to favorites
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <Eye />
                                    Preview
                                </ContextMenu.Item>
                            </ContextMenu.Group>

                            <ContextMenu.Separator />

                            <ContextMenu.Group>
                                <ContextMenu.Item className="text-red-600!">
                                    <Trash />
                                    Delete
                                </ContextMenu.Item>
                            </ContextMenu.Group>
                        </ContextMenu.List>
                    </ContextMenu.Popup>
                </ContextMenu.Positioner>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    );
}

```

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

```tsx
'use client';
import { ContextMenu } from '@primereact/ui/contextmenu';

export default function BasicDemo() {
    return (
        <ContextMenu.Root>
            <ContextMenu.Trigger className="flex items-center justify-center w-full max-w-md mx-auto h-40 rounded-md border-2 border-dashed border-surface-200 dark:border-surface-700 text-sm text-surface-500 dark:text-surface-400 select-none">
                Right-click here
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
                <ContextMenu.Positioner>
                    <ContextMenu.Popup className="w-40">
                        <ContextMenu.List>
                            <ContextMenu.Group>
                                <ContextMenu.Item>Cut</ContextMenu.Item>
                                <ContextMenu.Item>Copy</ContextMenu.Item>
                                <ContextMenu.Item>Paste</ContextMenu.Item>
                                <ContextMenu.Item>Rename</ContextMenu.Item>
                            </ContextMenu.Group>

                            <ContextMenu.Separator />

                            <ContextMenu.Group>
                                <ContextMenu.Item className="text-red-600!">Delete</ContextMenu.Item>
                            </ContextMenu.Group>
                        </ContextMenu.List>
                    </ContextMenu.Popup>
                </ContextMenu.Positioner>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    );
}

```

### Submenus

Nest a `ContextMenu.Submenu` inside any `ContextMenu.List`. Reuse the same `ContextMenu.Portal` / `ContextMenu.Positioner` / `ContextMenu.Popup` parts at any level, there are no separate sub-prefixed components.

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
import { ContextMenu } from '@primereact/ui/contextmenu';

export default function SubmenuDemo() {
    return (
        <ContextMenu.Root>
            <ContextMenu.Trigger className="flex items-center justify-center w-full max-w-md mx-auto h-40 rounded-md border-2 border-dashed border-surface-200 dark:border-surface-700 text-sm text-surface-500 dark:text-surface-400 select-none">
                Right-click here
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
                <ContextMenu.Positioner>
                    <ContextMenu.Popup className="w-40">
                        <ContextMenu.List>
                            <ContextMenu.Group>
                                <ContextMenu.Item>
                                    <Copy />
                                    Copy
                                </ContextMenu.Item>

                                <ContextMenu.Submenu>
                                    <ContextMenu.SubmenuTrigger>
                                        <Link />
                                        Share
                                        <ContextMenu.SubmenuIndicator>
                                            <ChevronRight className="size-3.5" />
                                        </ContextMenu.SubmenuIndicator>
                                    </ContextMenu.SubmenuTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.Positioner>
                                            <ContextMenu.Popup className="w-40">
                                                <ContextMenu.List>
                                                    <ContextMenu.Group>
                                                        <ContextMenu.Item>
                                                            <Send />
                                                            Send via email
                                                        </ContextMenu.Item>
                                                        <ContextMenu.Item>
                                                            <Link />
                                                            Copy link
                                                        </ContextMenu.Item>
                                                        <ContextMenu.Item>
                                                            <ExternalLink />
                                                            Open in new tab
                                                        </ContextMenu.Item>
                                                    </ContextMenu.Group>
                                                </ContextMenu.List>
                                            </ContextMenu.Popup>
                                        </ContextMenu.Positioner>
                                    </ContextMenu.Portal>
                                </ContextMenu.Submenu>

                                <ContextMenu.Submenu>
                                    <ContextMenu.SubmenuTrigger>
                                        <Download />
                                        Save as
                                        <ContextMenu.SubmenuIndicator>
                                            <ChevronRight className="size-3.5" />
                                        </ContextMenu.SubmenuIndicator>
                                    </ContextMenu.SubmenuTrigger>
                                    <ContextMenu.Portal>
                                        <ContextMenu.Positioner>
                                            <ContextMenu.Popup className="w-40">
                                                <ContextMenu.List>
                                                    <ContextMenu.Group>
                                                        <ContextMenu.Item>
                                                            <File />
                                                            PDF
                                                        </ContextMenu.Item>

                                                        <ContextMenu.Submenu>
                                                            <ContextMenu.SubmenuTrigger>
                                                                <File />
                                                                Image
                                                                <ContextMenu.SubmenuIndicator>
                                                                    <ChevronRight className="size-3.5" />
                                                                </ContextMenu.SubmenuIndicator>
                                                            </ContextMenu.SubmenuTrigger>
                                                            <ContextMenu.Portal>
                                                                <ContextMenu.Positioner>
                                                                    <ContextMenu.Popup className="w-40">
                                                                        <ContextMenu.List>
                                                                            <ContextMenu.Group>
                                                                                <ContextMenu.Item>PNG</ContextMenu.Item>
                                                                                <ContextMenu.Item>JPG</ContextMenu.Item>
                                                                                <ContextMenu.Item>WebP</ContextMenu.Item>
                                                                                <ContextMenu.Item>SVG</ContextMenu.Item>
                                                                            </ContextMenu.Group>
                                                                        </ContextMenu.List>
                                                                    </ContextMenu.Popup>
                                                                </ContextMenu.Positioner>
                                                            </ContextMenu.Portal>
                                                        </ContextMenu.Submenu>

                                                        <ContextMenu.Item>
                                                            <Folder />
                                                            ZIP archive
                                                        </ContextMenu.Item>
                                                    </ContextMenu.Group>
                                                </ContextMenu.List>
                                            </ContextMenu.Popup>
                                        </ContextMenu.Positioner>
                                    </ContextMenu.Portal>
                                </ContextMenu.Submenu>
                            </ContextMenu.Group>

                            <ContextMenu.Separator />

                            <ContextMenu.Group>
                                <ContextMenu.Item className="text-red-600!">
                                    <Trash />
                                    Delete
                                </ContextMenu.Item>
                            </ContextMenu.Group>
                        </ContextMenu.List>
                    </ContextMenu.Popup>
                </ContextMenu.Positioner>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    );
}

```

### Checkbox & Radio

Use `ContextMenu.CheckboxItem` for toggleable options and `ContextMenu.RadioItemGroup` + `ContextMenu.RadioItem` for mutually exclusive options. Pair them with `ContextMenu.CheckboxItemIndicator` / `ContextMenu.RadioItemIndicator` to render the active marker.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Dot } from '@primeicons/react/dot';
import { ContextMenu } from '@primereact/ui/contextmenu';
import type { ContextMenuCheckboxItemCheckedChangeEvent, ContextMenuRadioItemGroupValueChangeEvent } from '@primereact/ui/contextmenu';
import * as React from 'react';

export default function CheckboxRadioDemo() {
    const [notifications, setNotifications] = React.useState(true);
    const [sound, setSound] = React.useState(false);
    const [marketing, setMarketing] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
        <ContextMenu.Root>
            <ContextMenu.Trigger className="flex items-center justify-center w-full max-w-md mx-auto h-40 rounded-md border-2 border-dashed border-surface-200 dark:border-surface-700 text-sm text-surface-500 dark:text-surface-400 select-none">
                Right-click here
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
                <ContextMenu.Positioner>
                    <ContextMenu.Popup className="w-44">
                        <ContextMenu.List>
                            <ContextMenu.Group>
                                <ContextMenu.Label>Notifications</ContextMenu.Label>
                                <ContextMenu.CheckboxItem
                                    checked={notifications}
                                    onCheckedChange={(e: ContextMenuCheckboxItemCheckedChangeEvent) => setNotifications(e.checked)}
                                >
                                    <ContextMenu.CheckboxItemIndicator>
                                        <Check />
                                    </ContextMenu.CheckboxItemIndicator>
                                    Enable notifications
                                </ContextMenu.CheckboxItem>
                                <ContextMenu.CheckboxItem
                                    checked={sound}
                                    onCheckedChange={(e: ContextMenuCheckboxItemCheckedChangeEvent) => setSound(e.checked)}
                                >
                                    <ContextMenu.CheckboxItemIndicator>
                                        <Check />
                                    </ContextMenu.CheckboxItemIndicator>
                                    Play sound
                                </ContextMenu.CheckboxItem>
                                <ContextMenu.CheckboxItem
                                    checked={marketing}
                                    onCheckedChange={(e: ContextMenuCheckboxItemCheckedChangeEvent) => setMarketing(e.checked)}
                                >
                                    <ContextMenu.CheckboxItemIndicator>
                                        <Check />
                                    </ContextMenu.CheckboxItemIndicator>
                                    Marketing emails
                                </ContextMenu.CheckboxItem>
                            </ContextMenu.Group>

                            <ContextMenu.Separator />

                            <ContextMenu.Group>
                                <ContextMenu.Label>Appearance</ContextMenu.Label>
                                <ContextMenu.RadioItemGroup
                                    value={theme}
                                    onValueChange={(e: ContextMenuRadioItemGroupValueChangeEvent) => setTheme(e.value as string)}
                                >
                                    <ContextMenu.RadioItem value="light">
                                        <ContextMenu.RadioItemIndicator>
                                            <Dot />
                                        </ContextMenu.RadioItemIndicator>
                                        Light
                                    </ContextMenu.RadioItem>
                                    <ContextMenu.RadioItem value="dark">
                                        <ContextMenu.RadioItemIndicator>
                                            <Dot />
                                        </ContextMenu.RadioItemIndicator>
                                        Dark
                                    </ContextMenu.RadioItem>
                                    <ContextMenu.RadioItem value="system">
                                        <ContextMenu.RadioItemIndicator>
                                            <Dot />
                                        </ContextMenu.RadioItemIndicator>
                                        System
                                    </ContextMenu.RadioItem>
                                </ContextMenu.RadioItemGroup>
                            </ContextMenu.Group>
                        </ContextMenu.List>
                    </ContextMenu.Popup>
                </ContextMenu.Positioner>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    );
}

```

### Global

Setting the `global` property on `ContextMenu.Root` attaches the context menu to the document.

```tsx
import { ChartLine } from '@primeicons/react/chart-line';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Clipboard } from '@primeicons/react/clipboard';
import { Copy } from '@primeicons/react/copy';
import { ExternalLink } from '@primeicons/react/external-link';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { Print } from '@primeicons/react/print';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Refresh } from '@primeicons/react/refresh';
import { Search } from '@primeicons/react/search';
import { ContextMenu } from '@primereact/ui/contextmenu';

export default function GlobalDemo() {
    return (
        <div>
            <p className="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
            <ContextMenu.Root global>
                <ContextMenu.Portal>
                    <ContextMenu.Positioner>
                        <ContextMenu.Popup>
                            <ContextMenu.List className="w-48">
                                <ContextMenu.Group>
                                    <ContextMenu.Item>
                                        <Home />
                                        Back
                                    </ContextMenu.Item>
                                    <ContextMenu.Item>
                                        <Refresh />
                                        Reload
                                    </ContextMenu.Item>
                                </ContextMenu.Group>

                                <ContextMenu.Separator />

                                <ContextMenu.Group>
                                    <ContextMenu.Item>
                                        <Copy />
                                        Copy
                                    </ContextMenu.Item>
                                    <ContextMenu.Item>
                                        <Clipboard />
                                        Paste
                                    </ContextMenu.Item>
                                </ContextMenu.Group>

                                <ContextMenu.Separator />

                                <ContextMenu.Group>
                                    <ContextMenu.Submenu>
                                        <ContextMenu.SubmenuTrigger>
                                            <Folder />
                                            View
                                            <ContextMenu.SubmenuIndicator>
                                                <ChevronRight />
                                            </ContextMenu.SubmenuIndicator>
                                        </ContextMenu.SubmenuTrigger>
                                        <ContextMenu.Portal>
                                            <ContextMenu.Positioner>
                                                <ContextMenu.Popup>
                                                    <ContextMenu.List>
                                                        <ContextMenu.Group>
                                                            <ContextMenu.Item>
                                                                <Search />
                                                                Zoom In
                                                            </ContextMenu.Item>
                                                            <ContextMenu.Item>
                                                                <Search />
                                                                Zoom Out
                                                            </ContextMenu.Item>
                                                            <ContextMenu.Item>
                                                                <ChartLine />
                                                                Page Source
                                                            </ContextMenu.Item>
                                                        </ContextMenu.Group>
                                                    </ContextMenu.List>
                                                </ContextMenu.Popup>
                                            </ContextMenu.Positioner>
                                        </ContextMenu.Portal>
                                    </ContextMenu.Submenu>
                                </ContextMenu.Group>

                                <ContextMenu.Separator />

                                <ContextMenu.Group>
                                    <ContextMenu.Item>
                                        <ExternalLink />
                                        Open Link
                                    </ContextMenu.Item>
                                    <ContextMenu.Item>
                                        <Print />
                                        Print
                                    </ContextMenu.Item>
                                    <ContextMenu.Item>
                                        <QuestionCircle />
                                        Inspect
                                    </ContextMenu.Item>
                                </ContextMenu.Group>
                            </ContextMenu.List>
                        </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                </ContextMenu.Portal>
            </ContextMenu.Root>
        </div>
    );
}

```

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
