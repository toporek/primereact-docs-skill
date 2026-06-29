# NavigationMenu

NavigationMenu coordinates multiple Menu instances horizontally or vertically, providing keyboard navigation between them and a single source of truth for which menu is open.

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
import { Menu } from '@primereact/ui/menu';
import { NavigationMenu } from '@primereact/ui/navigationmenu';

const Shortcut = ({ children }: { children: React.ReactNode }) => (
    <span className="ms-auto text-xs text-surface-500 dark:text-surface-400">{children}</span>
);

export default function Preview() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <Menu.Root>
                    <Menu.Trigger className="px-0! py-0! size-7 items-center justify-center">
                        <Apple className="size-4.5!" />
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-48">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>About</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>System Settings…</Menu.Item>
                                        <Menu.Item>App Store…</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>
                                            <Refresh />
                                            Restart…
                                        </Menu.Item>
                                        <Menu.Item>
                                            <SignOut />
                                            Shut Down…
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>File</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>
                                            <File />
                                            New Document <Shortcut>⌘ N</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <FolderOpen />
                                            Open <Shortcut>⌘ O</Shortcut>
                                        </Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>
                                            <Save />
                                            Save <Shortcut>⌘ S</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Download />
                                            Save As… <Shortcut>⇧ ⌘ S</Shortcut>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>Edit</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>
                                            <Undo />
                                            Undo <Shortcut>⌘ Z</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Replay />
                                            Redo <Shortcut>⇧ ⌘ Z</Shortcut>
                                        </Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>
                                            <Clipboard />
                                            Cut <Shortcut>⌘ X</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Copy />
                                            Copy <Shortcut>⌘ C</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <File />
                                            Paste <Shortcut>⌘ V</Shortcut>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>View</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-40">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Zoom In</Menu.Item>
                                        <Menu.Item>Zoom Out</Menu.Item>
                                        <Menu.Item>Reset Zoom</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>Full Screen</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>Help</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Documentation</Menu.Item>
                                        <Menu.Item>Support</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>About</Menu.Item>
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

## Usage

```tsx
import { NavigationMenu } from '@primereact/ui/navigationmenu';
import { Menu } from '@primereact/ui/menu';
```

```tsx
<NavigationMenu>
    <Menu.Root id="file">
        <Menu.Trigger />
        <Menu.Portal>
            <Menu.Positioner>
                <Menu.Popup>
                    <Menu.List>
                        <Menu.Item />
                    </Menu.List>
                </Menu.Popup>
            </Menu.Positioner>
        </Menu.Portal>
    </Menu.Root>
    <Menu.Root id="edit"></Menu.Root>
</NavigationMenu>
```

## Examples

### Basic

A standard navigationmenu with multiple top-level menus and grouped items.

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
import { Menu } from '@primereact/ui/menu';
import { NavigationMenu } from '@primereact/ui/navigationmenu';

const Shortcut = ({ children }: { children: React.ReactNode }) => (
    <span className="ms-auto text-xs text-surface-500 dark:text-surface-400">{children}</span>
);

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <Menu.Root>
                    <Menu.Trigger>File</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>
                                            <File />
                                            New Document <Shortcut>⌘ N</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <FolderOpen />
                                            Open <Shortcut>⌘ O</Shortcut>
                                        </Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>
                                            <Save />
                                            Save <Shortcut>⌘ S</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Download />
                                            Save As… <Shortcut>⇧ ⌘ S</Shortcut>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>Edit</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>
                                            <Undo />
                                            Undo <Shortcut>⌘ Z</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Replay />
                                            Redo <Shortcut>⇧ ⌘ Z</Shortcut>
                                        </Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>
                                            <Clipboard />
                                            Cut <Shortcut>⌘ X</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Copy />
                                            Copy <Shortcut>⌘ C</Shortcut>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <File />
                                            Paste <Shortcut>⌘ V</Shortcut>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>View</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-40">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Zoom In</Menu.Item>
                                        <Menu.Item>Zoom Out</Menu.Item>
                                        <Menu.Item>Reset Zoom</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>Full Screen</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>Help</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Documentation</Menu.Item>
                                        <Menu.Item>Support</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>About</Menu.Item>
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

### Icons

Add icons to `Menu.Trigger` elements alongside their labels.

```tsx
'use client';
import { Eye } from '@primeicons/react/eye';
import { File } from '@primeicons/react/file';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Pencil } from '@primeicons/react/pencil';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Menu } from '@primereact/ui/menu';
import { NavigationMenu } from '@primereact/ui/navigationmenu';

export default function IconsDemo() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <Menu.Root>
                    <Menu.Trigger>
                        <File />
                        File
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>New Document</Menu.Item>
                                        <Menu.Item>Open</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>Save</Menu.Item>
                                        <Menu.Item>Save As…</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>
                        <Pencil />
                        Edit
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Undo</Menu.Item>
                                        <Menu.Item>Redo</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>Cut</Menu.Item>
                                        <Menu.Item>Copy</Menu.Item>
                                        <Menu.Item>Paste</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>
                        <Eye />
                        View
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-40">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Zoom In</Menu.Item>
                                        <Menu.Item>Zoom Out</Menu.Item>
                                        <Menu.Item>Reset Zoom</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>Full Screen</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>
                        <FolderOpen />
                        Projects
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Open Project</Menu.Item>
                                        <Menu.Item>Recent Projects</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>Close Project</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>
                        <QuestionCircle />
                        Help
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Documentation</Menu.Item>
                                        <Menu.Item>Support</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>About</Menu.Item>
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

### Submenus

Nest a `Menu.Submenu` inside any menu's list to add cascading submenus that share the same NavigationMenu's keyboard navigation.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Menu } from '@primereact/ui/menu';
import { NavigationMenu } from '@primereact/ui/navigationmenu';

export default function SubmenuDemo() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <Menu.Root>
                    <Menu.Trigger>File</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>New File</Menu.Item>
                                        <Menu.Item>Open File…</Menu.Item>

                                        <Menu.Submenu>
                                            <Menu.SubmenuTrigger>
                                                Open Recent
                                                <Menu.SubmenuIndicator>
                                                    <ChevronRight className="size-3.5" />
                                                </Menu.SubmenuIndicator>
                                            </Menu.SubmenuTrigger>
                                            <Menu.Portal>
                                                <Menu.Positioner>
                                                    <Menu.Popup className="w-40">
                                                        <Menu.List>
                                                            <Menu.Group>
                                                                <Menu.Item>todo.md</Menu.Item>
                                                                <Menu.Item>changelog.md</Menu.Item>
                                                                <Menu.Item>readme.md</Menu.Item>

                                                                <Menu.Submenu>
                                                                    <Menu.SubmenuTrigger>
                                                                        Older
                                                                        <Menu.SubmenuIndicator>
                                                                            <ChevronRight className="size-3.5" />
                                                                        </Menu.SubmenuIndicator>
                                                                    </Menu.SubmenuTrigger>
                                                                    <Menu.Portal>
                                                                        <Menu.Positioner>
                                                                            <Menu.Popup className="w-40">
                                                                                <Menu.List>
                                                                                    <Menu.Group>
                                                                                        <Menu.Item>release-notes.md</Menu.Item>
                                                                                        <Menu.Item>roadmap.md</Menu.Item>
                                                                                        <Menu.Item>contributing.md</Menu.Item>
                                                                                        <Menu.Item>license.txt</Menu.Item>
                                                                                    </Menu.Group>
                                                                                </Menu.List>
                                                                            </Menu.Popup>
                                                                        </Menu.Positioner>
                                                                    </Menu.Portal>
                                                                </Menu.Submenu>
                                                            </Menu.Group>
                                                            <Menu.Separator />
                                                            <Menu.Group>
                                                                <Menu.Item>Clear Recent</Menu.Item>
                                                            </Menu.Group>
                                                        </Menu.List>
                                                    </Menu.Popup>
                                                </Menu.Positioner>
                                            </Menu.Portal>
                                        </Menu.Submenu>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>Save</Menu.Item>
                                        <Menu.Item>Save As…</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>View</Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>Reload</Menu.Item>
                                        <Menu.Item>Force Reload</Menu.Item>
                                    </Menu.Group>
                                    <Menu.Separator />
                                    <Menu.Group>
                                        <Menu.Item>Toggle DevTools</Menu.Item>
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

### Mega Menu

Lay out a `Menu.Popup` as a grid of `Menu.Group` columns to build a mega menu, with each group introduced by a `Menu.Label`.

```tsx
'use client';
import { Camera } from '@primeicons/react/camera';
import { Desktop } from '@primeicons/react/desktop';
import { Headphones } from '@primeicons/react/headphones';
import { Mobile } from '@primeicons/react/mobile';
import { ShoppingBag } from '@primeicons/react/shopping-bag';
import { Tablet } from '@primeicons/react/tablet';
import { Tags } from '@primeicons/react/tags';
import { Menu } from '@primereact/ui/menu';
import { NavigationMenu } from '@primereact/ui/navigationmenu';

export default function MegamenuDemo() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <Menu.Root>
                    <Menu.Trigger>
                        <ShoppingBag />
                        Shop
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-180!">
                                <Menu.List className="grid! grid-cols-4! gap-x-2! gap-y-1! p-2!">
                                    <Menu.Group className="flex flex-col">
                                        <Menu.Label className="flex items-center gap-2 text-color font-medium px-2.5 py-1.5">
                                            <Desktop className="size-3.5 text-primary" />
                                            Computers
                                        </Menu.Label>
                                        <Menu.Item>Laptops</Menu.Item>
                                        <Menu.Item>Desktops</Menu.Item>
                                        <Menu.Item>Monitors</Menu.Item>
                                        <Menu.Item>Accessories</Menu.Item>
                                    </Menu.Group>

                                    <Menu.Group className="flex flex-col">
                                        <Menu.Label className="flex items-center gap-2 text-color font-medium px-2.5 py-1.5">
                                            <Mobile className="size-3.5 text-primary" />
                                            Phones
                                        </Menu.Label>
                                        <Menu.Item>Smartphones</Menu.Item>
                                        <Menu.Item>Cases</Menu.Item>
                                        <Menu.Item>Chargers</Menu.Item>
                                        <Menu.Item>Smartwatches</Menu.Item>
                                    </Menu.Group>

                                    <Menu.Group className="flex flex-col">
                                        <Menu.Label className="flex items-center gap-2 text-color font-medium px-2.5 py-1.5">
                                            <Headphones className="size-3.5 text-primary" />
                                            Audio
                                        </Menu.Label>
                                        <Menu.Item>Headphones</Menu.Item>
                                        <Menu.Item>Earbuds</Menu.Item>
                                        <Menu.Item>Speakers</Menu.Item>
                                        <Menu.Item>Microphones</Menu.Item>
                                    </Menu.Group>

                                    <Menu.Group className="flex flex-col">
                                        <Menu.Label className="flex items-center gap-2 text-color font-medium px-2.5 py-1.5">
                                            <Camera className="size-3.5 text-primary" />
                                            Photo & Video
                                        </Menu.Label>
                                        <Menu.Item>Cameras</Menu.Item>
                                        <Menu.Item>Lenses</Menu.Item>
                                        <Menu.Item>Drones</Menu.Item>
                                        <Menu.Item>Tripods</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                                <div className="m-2 flex items-center justify-between rounded-lg bg-linear-to-br from-primary-400 to-primary-600 px-4 py-3 text-primary-contrast">
                                    <div className="flex flex-col">
                                        <span className="font-semibold">Summer Sale</span>
                                        <span className="text-sm opacity-90">Save 30% on all accessories</span>
                                    </div>
                                    <button className="rounded-md bg-primary-contrast/15 px-3 py-1.5 text-sm font-medium hover:bg-primary-contrast/25">
                                        Shop Now
                                    </button>
                                </div>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>
                        <Tags />
                        Deals
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-140!">
                                <Menu.List className="grid! grid-cols-3! gap-x-2! gap-y-1! p-2!">
                                    <Menu.Group className="flex flex-col">
                                        <Menu.Label className="text-color font-medium px-2.5 py-1.5">Today</Menu.Label>
                                        <Menu.Item>Daily Deals</Menu.Item>
                                        <Menu.Item>Flash Sale</Menu.Item>
                                        <Menu.Item>Clearance</Menu.Item>
                                    </Menu.Group>

                                    <Menu.Group className="flex flex-col">
                                        <Menu.Label className="text-color font-medium px-2.5 py-1.5">By Discount</Menu.Label>
                                        <Menu.Item>Up to 25% Off</Menu.Item>
                                        <Menu.Item>Up to 50% Off</Menu.Item>
                                        <Menu.Item>Up to 70% Off</Menu.Item>
                                    </Menu.Group>

                                    <Menu.Group className="flex flex-col">
                                        <Menu.Label className="text-color font-medium px-2.5 py-1.5">Seasonal</Menu.Label>
                                        <Menu.Item>Spring Sale</Menu.Item>
                                        <Menu.Item>Back to School</Menu.Item>
                                        <Menu.Item>Holiday Picks</Menu.Item>
                                    </Menu.Group>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root>
                    <Menu.Trigger>
                        <Tablet />
                        New Arrivals
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner sideOffset={4}>
                            <Menu.Popup className="w-44">
                                <Menu.List>
                                    <Menu.Group>
                                        <Menu.Item>This Week</Menu.Item>
                                        <Menu.Item>This Month</Menu.Item>
                                        <Menu.Item>Coming Soon</Menu.Item>
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

### NavBar

A typical application top bar that combines a brand mark, a `NavigationMenu` for primary sections, and a `Menu.Root` driven user avatar dropdown.

```tsx
'use client';
import { Bars } from '@primeicons/react/bars';
import { Bell } from '@primeicons/react/bell';
import { Bolt } from '@primeicons/react/bolt';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Cog } from '@primeicons/react/cog';
import { Search } from '@primeicons/react/search';
import { SignOut } from '@primeicons/react/sign-out';
import { Times } from '@primeicons/react/times';
import { User } from '@primeicons/react/user';
import { Accordion } from '@primereact/ui/accordion';
import { Avatar } from '@primereact/ui/avatar';
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';
import { Menu } from '@primereact/ui/menu';
import { NavigationMenu } from '@primereact/ui/navigationmenu';
import { OverlayBadge } from '@primereact/ui/overlaybadge';

const SECTIONS = [
    { label: 'Products', items: ['Analytics', 'Engagement', 'Security', 'Integrations'] },
    { label: 'Solutions', items: ['For Startups', 'For Enterprise', 'For Agencies'] },
    { label: 'Pricing', items: ['Plans', 'Compare', 'Enterprise'] },
    { label: 'Resources', items: ['Documentation', 'Guides', 'Changelog', 'Community'] }
];

export default function NavbarDemo() {
    return (
        <div className="w-full rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900">
            <div className="flex items-center justify-between gap-2 px-2 md:px-4 py-2">
                <div className="flex items-center gap-2">
                    <Drawer.Root>
                        <div className="md:hidden">
                            <Drawer.Trigger as={Button} iconOnly variant="text" severity="secondary" rounded aria-label="Open menu">
                                <Bars />
                            </Drawer.Trigger>
                        </div>
                        <Drawer.Portal>
                            <Drawer.Backdrop />
                            <Drawer.Popup className="w-80!">
                                <Drawer.Header>
                                    <Drawer.Title>Menu</Drawer.Title>
                                    <Drawer.Close as={Button} iconOnly variant="text" rounded aria-label="Close menu">
                                        <Times />
                                    </Drawer.Close>
                                </Drawer.Header>
                                <Drawer.Content className="p-0">
                                    <Accordion.Root>
                                        {SECTIONS.map((s) => (
                                            <Accordion.Panel key={s.label} value={s.label}>
                                                <Accordion.Header>
                                                    <Accordion.Trigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium hover:bg-surface-50 dark:hover:bg-surface-800">
                                                        {s.label}
                                                        <ChevronDown className="size-4 transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                                                    </Accordion.Trigger>
                                                </Accordion.Header>
                                                <Accordion.Content>
                                                    <ul className="flex flex-col pb-2">
                                                        {s.items.map((i) => (
                                                            <li key={i}>
                                                                <a className="block px-6 py-2 text-sm text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 cursor-pointer">
                                                                    {i}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Accordion.Content>
                                            </Accordion.Panel>
                                        ))}
                                    </Accordion.Root>
                                </Drawer.Content>
                            </Drawer.Popup>
                        </Drawer.Portal>
                    </Drawer.Root>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 rounded-lg bg-linear-to-br from-primary-400 to-primary-600 text-primary-contrast">
                            <Bolt className="size-4" />
                        </div>
                        <span className="text-base font-semibold text-surface-900 dark:text-surface-0 md:block hidden">Acme</span>
                    </div>
                </div>

                <NavigationMenu className="hidden! md:flex!">
                    {SECTIONS.map((s) => (
                        <Menu.Root key={s.label}>
                            <Menu.Trigger>{s.label}</Menu.Trigger>
                            <Menu.Portal>
                                <Menu.Positioner sideOffset={4}>
                                    <Menu.Popup className="w-48">
                                        <Menu.List>
                                            {s.items.map((i) => (
                                                <Menu.Item key={i}>{i}</Menu.Item>
                                            ))}
                                        </Menu.List>
                                    </Menu.Popup>
                                </Menu.Positioner>
                            </Menu.Portal>
                        </Menu.Root>
                    ))}
                </NavigationMenu>

                <div className="flex items-center gap-2">
                    <Button iconOnly variant="text" severity="secondary" rounded aria-label="Search">
                        <Search />
                    </Button>

                    <OverlayBadge>
                        <Button iconOnly variant="text" severity="secondary" rounded aria-label="Notifications">
                            <Bell />
                        </Button>
                        <Badge severity="danger" shape="circle" size="small">
                            3
                        </Badge>
                    </OverlayBadge>

                    <Menu.Root>
                        <Menu.Trigger className="rounded-full!">
                            <Avatar.Root shape="circle" size="normal" className="bg-primary text-primary-contrast font-semibold">
                                <Avatar.Fallback>JD</Avatar.Fallback>
                            </Avatar.Root>
                        </Menu.Trigger>
                        <Menu.Portal>
                            <Menu.Positioner align="end" sideOffset={8}>
                                <Menu.Popup className="w-56">
                                    <div className="flex items-center gap-3 p-3">
                                        <Avatar.Root shape="circle" size="normal" className="bg-primary text-primary-contrast font-semibold shrink-0">
                                            <Avatar.Fallback>JD</Avatar.Fallback>
                                        </Avatar.Root>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-sm font-medium text-surface-900 dark:text-surface-0 truncate">Jane Doe</span>
                                            <span className="text-xs text-surface-500 dark:text-surface-400 truncate">jane@acme.com</span>
                                        </div>
                                    </div>
                                    <Menu.Separator />
                                    <Menu.List>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <User />
                                                Profile
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Cog />
                                                Settings
                                            </Menu.Item>
                                        </Menu.Group>
                                        <Menu.Separator />
                                        <Menu.Group>
                                            <Menu.Item>
                                                <SignOut />
                                                Sign Out
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu.List>
                                </Menu.Popup>
                            </Menu.Positioner>
                        </Menu.Portal>
                    </Menu.Root>
                </div>
            </div>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/navigationmenu.md#api) for `NavigationMenu` component documentation, and [Menu](menu.md) for the `Menu.*` parts used as children.

### Hooks

See [Headless API](../../headless/components/navigationmenu.md#api) for `useNavigationMenu` hook documentation.

### Accessibility

See [NavigationMenu Primitive](../../primitive/components/navigationmenu.md#accessibility) for WAI-ARIA compliance details and keyboard support.
