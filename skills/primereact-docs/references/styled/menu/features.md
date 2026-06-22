# Menu

Menu is a versatile component that provides various features such as inline and portal rendering, composite structures, app-style layouts, menubars, sidebars, and router integration.

```tsx
import { Briefcase } from '@primeicons/react/briefcase';
import { ChartLine } from '@primeicons/react/chart-line';
import { CheckCircle } from '@primeicons/react/check-circle';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Clock } from '@primeicons/react/clock';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Star } from '@primeicons/react/star';
import { Menu } from '@primereact/ui/menu';

export default function Preview() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-64">
                <Menu.List>
                    <Menu.Item>
                        <Home />
                        Dashboard
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Label>Workspace</Menu.Label>

                    <Menu.Item>
                        <ChartLine />
                        Analytics
                    </Menu.Item>

                    <Menu.Sub defaultOpen={true}>
                        <Menu.SubTrigger>
                            <Folder />
                            Projects
                            <Menu.Indicator>
                                <ChevronDown className="transition-transform duration-200 [[data-open]>&]:rotate-180" />
                            </Menu.Indicator>
                        </Menu.SubTrigger>
                        <Menu.List>
                            <Menu.Item>
                                <Briefcase />
                                Active Projects
                            </Menu.Item>
                            <Menu.Item>
                                <Clock />
                                Recent
                            </Menu.Item>
                            <Menu.Item>
                                <Star />
                                Favorites
                            </Menu.Item>
                            <Menu.Item>
                                <CheckCircle />
                                Completed
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Separator />

                    <Menu.Item>
                        <QuestionCircle />
                        Help & Support
                    </Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
```

## Usage

```tsx
import { Menu } from '@primereact/ui/menu';
```

```tsx
<Menu.Root>
    <Menu.Trigger />
    <Menu.Portal>
        <Menu.Positioner>
            <Menu.Popup>
                <Menu.Arrow />
                <Menu.List>
                    <Menu.Item />
                    <Menu.Sub>
                        <Menu.SubTrigger>
                            <Menu.Indicator />
                        </Menu.SubTrigger>
                        <Menu.SubPortal>
                            <Menu.SubPositioner>
                                <Menu.SubPopup>
                                    <Menu.List>
                                        <Menu.Item />
                                        <Menu.Separator />
                                        <Menu.Item />
                                    </Menu.List>
                                </Menu.SubPopup>
                            </Menu.SubPositioner>
                        </Menu.SubPortal>
                    </Menu.Sub>
                </Menu.List>
            </Menu.Popup>
        </Menu.Positioner>
    </Menu.Portal>
</Menu.Root>
```

## Examples

### Basic

A list of navigable items with optional icons and submenus.

```tsx
import { Briefcase } from '@primeicons/react/briefcase';
import { ChartLine } from '@primeicons/react/chart-line';
import { CheckCircle } from '@primeicons/react/check-circle';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Clock } from '@primeicons/react/clock';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Star } from '@primeicons/react/star';
import { Menu } from '@primereact/ui/menu';

export default function Basic() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-64">
                <Menu.List>
                    <Menu.Item>
                        <Home />
                        Dashboard
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Label>Workspace</Menu.Label>

                    <Menu.Item>
                        <ChartLine />
                        Analytics
                    </Menu.Item>

                    <Menu.Sub defaultOpen={true}>
                        <Menu.SubTrigger>
                            <Folder />
                            Projects
                            <Menu.Indicator>
                                <ChevronDown className="transition-transform duration-200 [[data-open]>&]:rotate-180" />
                            </Menu.Indicator>
                        </Menu.SubTrigger>
                        <Menu.List>
                            <Menu.Item>
                                <Briefcase />
                                Active Projects
                            </Menu.Item>
                            <Menu.Item>
                                <Clock />
                                Recent
                            </Menu.Item>
                            <Menu.Item>
                                <Star />
                                Favorites
                            </Menu.Item>
                            <Menu.Item>
                                <CheckCircle />
                                Completed
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Sub>

                    <Menu.Separator />

                    <Menu.Item>
                        <QuestionCircle />
                        Help & Support
                    </Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
```

### Composite

The `composite` prop allows combining multiple Menu components to create complex nested menus. Each Menu can have its own structure, and submenus can be nested within parent menus.

```tsx
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Cloud } from '@primeicons/react/cloud';
import { Download } from '@primeicons/react/download';
import { File } from '@primeicons/react/file';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Globe } from '@primeicons/react/globe';
import { Link } from '@primeicons/react/link';
import { Save } from '@primeicons/react/save';
import { Send } from '@primeicons/react/send';
import { ShareAlt } from '@primeicons/react/share-alt';
import { SignOut } from '@primeicons/react/sign-out';
import { Users } from '@primeicons/react/users';
import { Menu } from '@primereact/ui/menu';

export default function CompositeDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-56" composite>
                <Menu.List>
                    <Menu.Item>
                        <File />
                        New
                    </Menu.Item>
                    <Menu.Item>
                        <FolderOpen />
                        Open
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Sub>
                        <Menu.SubTrigger>
                            <Download />
                            Import
                            <Menu.Indicator>
                                <ChevronRight />
                            </Menu.Indicator>
                        </Menu.SubTrigger>
                        <Menu.SubPortal>
                            <Menu.SubPositioner className="w-48">
                                <Menu.SubPopup>
                                    <Menu.List>
                                        <Menu.Item>
                                            <File />
                                            From File
                                        </Menu.Item>

                                        <Menu.Sub>
                                            <Menu.SubTrigger>
                                                <Cloud />
                                                From Cloud
                                                <Menu.Indicator>
                                                    <ChevronRight />
                                                </Menu.Indicator>
                                            </Menu.SubTrigger>
                                            <Menu.SubPortal>
                                                <Menu.SubPositioner className="w-48">
                                                    <Menu.SubPopup>
                                                        <Menu.List>
                                                            <Menu.Item>Google Drive</Menu.Item>
                                                            <Menu.Item>Dropbox</Menu.Item>
                                                            <Menu.Item>OneDrive</Menu.Item>
                                                        </Menu.List>
                                                    </Menu.SubPopup>
                                                </Menu.SubPositioner>
                                            </Menu.SubPortal>
                                        </Menu.Sub>

                                        <Menu.Item>
                                            <Globe />
                                            From URL
                                        </Menu.Item>
                                    </Menu.List>
                                </Menu.SubPopup>
                            </Menu.SubPositioner>
                        </Menu.SubPortal>
                    </Menu.Sub>

                    <Menu.Sub>
                        <Menu.SubTrigger>
                            <ShareAlt />
                            Share
                            <Menu.Indicator>
                                <ChevronRight />
                            </Menu.Indicator>
                        </Menu.SubTrigger>
                        <Menu.SubPortal>
                            <Menu.SubPositioner className="w-48">
                                <Menu.SubPopup>
                                    <Menu.List>
                                        <Menu.Item>
                                            <Send />
                                            Send via Email
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link />
                                            Copy Link
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Users />
                                            Share with Team
                                        </Menu.Item>
                                    </Menu.List>
                                </Menu.SubPopup>
                            </Menu.SubPositioner>
                        </Menu.SubPortal>
                    </Menu.Sub>

                    <Menu.Item>
                        <Save />
                        Save
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Item>
                        <SignOut />
                        Exit
                    </Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
```

### Portal

`Menu.Portal` renders the menu content in a portal, positioning it outside the DOM hierarchy. This is useful for dropdown menus triggered by buttons or avatars, ensuring proper z-index stacking and avoiding overflow issues.

```tsx
import { Bell } from '@primeicons/react/bell';
import { Bookmark } from '@primeicons/react/bookmark';
import { History } from '@primeicons/react/history';
import { Palette } from '@primeicons/react/palette';
import { PowerOff } from '@primeicons/react/power-off';
import { Shield } from '@primeicons/react/shield';
import { User } from '@primeicons/react/user';
import { Menu } from '@primereact/ui/menu';

export default function PortalDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-64">
                <Menu.Trigger className="px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Show Menu
                </Menu.Trigger>

                <Menu.Portal>
                    <Menu.Positioner>
                        <Menu.Popup>
                            <Menu.List>
                                <Menu.Label className="flex-col items-start gap-2">
                                    <p className="font-bold text-sm">Active Account</p>
                                    <p className="font-bold text-sm">sarah.anderson@company.com</p>
                                </Menu.Label>

                                <Menu.Separator />

                                <Menu.Item>
                                    <User />
                                    Profile Settings
                                </Menu.Item>
                                <Menu.Item>
                                    <Bell />
                                    Notifications
                                </Menu.Item>
                                <Menu.Item>
                                    <Bookmark />
                                    Saved Items
                                </Menu.Item>
                                <Menu.Item>
                                    <Shield />
                                    Privacy & Security
                                </Menu.Item>
                                <Menu.Item>
                                    <Palette />
                                    Appearance
                                </Menu.Item>
                                <Menu.Item disabled>
                                    <History />
                                    Activity Log
                                    <span className="ml-auto text-xs">Premium</span>
                                </Menu.Item>

                                <Menu.Separator />

                                <Menu.Item className="text-red-600">
                                    <PowerOff />
                                    Sign Out
                                </Menu.Item>
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}
```

### Radio and Checkbox

The `Menu` component supports checkbox and radio items through `Menu.Item` with `type="checkbox"` or `type="radio"`. Use `Menu.Indicator` with `match="checked"` to display check/radio icons.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Dot } from '@primeicons/react/dot';
import { Menu } from '@primereact/ui/menu';
import { MenuItemCheckedChangeEvent, MenuRadioGroupValueChangeEvent } from 'primereact/menu';
import * as React from 'react';

export default function RadioCheckboxDemo() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [soundEnabled, setSoundEnabled] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
        <div className="flex justify-center">
            <Menu.Root className="w-64">
                <Menu.List>
                    <Menu.Item>Overview</Menu.Item>

                    <Menu.Separator />

                    <Menu.Label>Preferences</Menu.Label>

                    <Menu.Item
                        type="checkbox"
                        checked={notificationsEnabled}
                        onCheckedChange={(e: MenuItemCheckedChangeEvent) => setNotificationsEnabled(e.value)}
                    >
                        <Menu.Indicator match="checked">
                            <Check />
                        </Menu.Indicator>
                        Enable Notifications
                    </Menu.Item>

                    <Menu.Item type="checkbox" checked={soundEnabled} onCheckedChange={(e: MenuItemCheckedChangeEvent) => setSoundEnabled(e.value)}>
                        <Menu.Indicator match="checked">
                            <Check />
                        </Menu.Indicator>
                        Enable Sound
                    </Menu.Item>

                    <Menu.Separator />

                    <Menu.Label>Appearance</Menu.Label>

                    <Menu.RadioGroup value={theme} onValueChange={(e: MenuRadioGroupValueChangeEvent) => setTheme(e.value as string)}>
                        <Menu.Item type="radio" value="light">
                            <Menu.Indicator match="checked">
                                <Dot />
                            </Menu.Indicator>
                            Light Mode
                        </Menu.Item>
                        <Menu.Item type="radio" value="dark">
                            <Menu.Indicator match="checked">
                                <Dot />
                            </Menu.Indicator>
                            Dark Mode
                        </Menu.Item>
                        <Menu.Item type="radio" value="system">
                            <Menu.Indicator match="checked">
                                <Dot />
                            </Menu.Indicator>
                            System Default
                        </Menu.Item>
                    </Menu.RadioGroup>

                    <Menu.Separator />

                    <Menu.Item>Settings</Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
```

### Apps

The Menu component can be customized to create app launchers or grid-based menus. By applying custom classes to `Menu.List` and `Menu.Item`, the menu layout can be transformed into a grid structure with custom styling for icons and labels.

```tsx
import { Bars } from '@primeicons/react/bars';
import { Calendar } from '@primeicons/react/calendar';
import { ChartLine } from '@primeicons/react/chart-line';
import { Cloud } from '@primeicons/react/cloud';
import { Cog } from '@primeicons/react/cog';
import { Envelope } from '@primeicons/react/envelope';
import { Image } from '@primeicons/react/image';
import { MapMarker } from '@primeicons/react/map-marker';
import { Search } from '@primeicons/react/search';
import { Video } from '@primeicons/react/video';
import { Menu } from '@primereact/ui/menu';
import * as React from 'react';

const apps = [
    { label: 'Search', icon: <Search />, gradient: 'from-sky-400 to-cyan-500' },
    { label: 'Maps', icon: <MapMarker />, gradient: 'from-emerald-500 to-green-600' },
    { label: 'Mail', icon: <Envelope />, gradient: 'from-orange-400 to-red-500' },
    { label: 'Drive', icon: <Cloud />, gradient: 'from-blue-500 to-indigo-600' },
    { label: 'Calendar', icon: <Calendar />, gradient: 'from-violet-500 to-purple-600' },
    { label: 'Photos', icon: <Image />, gradient: 'from-fuchsia-500 to-pink-600' },
    { label: 'Videos', icon: <Video />, gradient: 'from-red-500 to-rose-600' },
    { label: 'Analytics', icon: <ChartLine />, gradient: 'from-cyan-500 to-blue-600' },
    { label: 'Settings', icon: <Cog />, gradient: 'from-slate-500 to-zinc-700' }
];

export default function AppsDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root className="w-116">
                <Menu.Trigger className="px-2.5 h-8 rounded-lg border border-surface flex items-center justify-center gap-2 bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900 data-open:bg-surface-100 dark:data-open:bg-surface-900 transition-colors text-sm font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    <Bars className="w-6! h-6!" />
                </Menu.Trigger>

                <Menu.Portal>
                    <Menu.Positioner align="end" sideOffset={12}>
                        <Menu.Popup>
                            <Menu.List className="grid grid-cols-3 gap-1 p-2">
                                {apps.map((app) => (
                                    <Menu.Item key={app.label} className="flex-col items-center justify-center h-26 gap-3">
                                        <div
                                            className={`w-14 h-14 rounded-2xl bg-linear-to-br ${app.gradient} flex items-center justify-center transition-transform`}
                                        >
                                            {React.cloneElement(app.icon, { className: 'w-6! h-6! text-white' })}
                                        </div>
                                        <span className="text-sm font-medium">{app.label}</span>
                                    </Menu.Item>
                                ))}
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}
```

### Menubar

Multiple Menu components can be combined to create a horizontal menubar. By managing the open state and keyboard navigation between menus, a traditional desktop-style menubar can be implemented.

```tsx
'use client';
import { Book } from '@primeicons/react/book';
import { Clipboard } from '@primeicons/react/clipboard';
import { Copy } from '@primeicons/react/copy';
import { Download } from '@primeicons/react/download';
import { File } from '@primeicons/react/file';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Github } from '@primeicons/react/github';
import { InfoCircle } from '@primeicons/react/info-circle';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Refresh } from '@primeicons/react/refresh';
import { Replay } from '@primeicons/react/replay';
import { Save } from '@primeicons/react/save';
import { SearchMinus } from '@primeicons/react/search-minus';
import { SearchPlus } from '@primeicons/react/search-plus';
import { Undo } from '@primeicons/react/undo';
import { WindowMaximize } from '@primeicons/react/window-maximize';
import { Menu } from '@primereact/ui/menu';
import * as React from 'react';

export default function MenubarDemo() {
    const menubarRef = React.useRef<HTMLDivElement>(null);
    const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);
    const openMenuIndexRef = React.useRef(openMenuIndex);

    openMenuIndexRef.current = openMenuIndex;

    const handleMenuOpenChange = React.useCallback(
        (index: number) => (event: { open: boolean }) => {
            if (event.open) {
                setOpenMenuIndex(index);
            } else {
                setOpenMenuIndex((prev) => (prev === index ? null : prev));
            }
        },
        []
    );

    const handleMenuMouseEnter = React.useCallback(
        (index: number) => () => {
            if (openMenuIndexRef.current !== null) {
                setOpenMenuIndex(index);
            }
        },
        []
    );

    const handleMenuKeyDown = React.useCallback(
        (index: number) => (event: React.KeyboardEvent) => {
            if (!menubarRef.current) return;

            const triggers = menubarRef.current.querySelectorAll<HTMLElement>('[data-part="trigger"]');

            if (event.key === 'ArrowRight') {
                event.preventDefault();
                const nextIndex = index === triggers.length - 1 ? 0 : index + 1;

                triggers[nextIndex]?.focus();
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                const prevIndex = index === 0 ? triggers.length - 1 : index - 1;

                triggers[prevIndex]?.focus();
            }
        },
        []
    );

    const handleItemClick = React.useCallback(() => {
        setOpenMenuIndex(null);
    }, []);

    return (
        <div className="flex justify-center">
            <div
                ref={menubarRef}
                className="flex gap-1 bg-surface-100 dark:bg-surface-800 rounded-md p-1 w-fit"
                role="menubar"
                onMouseLeave={() => setOpenMenuIndex(null)}
            >
                <Menu.Root className="w-64" open={openMenuIndex === 0} onOpenChange={handleMenuOpenChange(0)}>
                    <Menu.Trigger
                        className={`rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary py-1 px-3 ${openMenuIndex === 0 ? 'bg-surface-200 dark:bg-surface-700' : ''}`}
                        onKeyDown={handleMenuKeyDown(0)}
                        onMouseEnter={handleMenuMouseEnter(0)}
                    >
                        File
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner>
                            <Menu.Popup>
                                <Menu.List>
                                    <Menu.Item onClick={handleItemClick}>
                                        <File />
                                        New Document
                                        <span className="ml-auto text-xs opacity-60">⌘ N</span>
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <FolderOpen />
                                        Open Project
                                        <span className="ml-auto text-xs opacity-60">⌘ O</span>
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <WindowMaximize />
                                        New Window
                                        <span className="ml-auto text-xs opacity-60">⇧ ⌘ N</span>
                                    </Menu.Item>

                                    <Menu.Separator />

                                    <Menu.Item onClick={handleItemClick}>
                                        <Save />
                                        Save
                                        <span className="ml-auto text-xs opacity-60">⌘ S</span>
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <Download />
                                        Save As...
                                        <span className="ml-auto text-xs opacity-60">⇧ ⌘ S</span>
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root open={openMenuIndex === 1} onOpenChange={handleMenuOpenChange(1)}>
                    <Menu.Trigger
                        className={`rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary py-1 px-3 ${openMenuIndex === 1 ? 'bg-surface-200 dark:bg-surface-700' : ''}`}
                        onKeyDown={handleMenuKeyDown(1)}
                        onMouseEnter={handleMenuMouseEnter(1)}
                    >
                        Edit
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner>
                            <Menu.Popup>
                                <Menu.List className="w-64">
                                    <Menu.Item onClick={handleItemClick}>
                                        <Undo />
                                        Undo
                                        <span className="ml-auto text-xs opacity-60">⌘ Z</span>
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <Replay />
                                        Redo
                                        <span className="ml-auto text-xs opacity-60">⇧ ⌘ Z</span>
                                    </Menu.Item>

                                    <Menu.Separator />

                                    <Menu.Item onClick={handleItemClick}>
                                        <Clipboard />
                                        Cut
                                        <span className="ml-auto text-xs opacity-60">⌘ X</span>
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <Copy />
                                        Copy
                                        <span className="ml-auto text-xs opacity-60">⌘ C</span>
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <File />
                                        Paste
                                        <span className="ml-auto text-xs opacity-60">⌘ V</span>
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root open={openMenuIndex === 2} onOpenChange={handleMenuOpenChange(2)}>
                    <Menu.Trigger
                        className={`rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary py-1 px-3 ${openMenuIndex === 2 ? 'bg-surface-200 dark:bg-surface-700' : ''}`}
                        onKeyDown={handleMenuKeyDown(2)}
                        onMouseEnter={handleMenuMouseEnter(2)}
                    >
                        View
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner>
                            <Menu.Popup>
                                <Menu.List className="w-64">
                                    <Menu.Item onClick={handleItemClick}>
                                        <SearchPlus />
                                        Zoom In
                                        <span className="ml-auto text-xs opacity-60">⌘ +</span>
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <SearchMinus />
                                        Zoom Out
                                        <span className="ml-auto text-xs opacity-60">⌘ -</span>
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <Refresh />
                                        Reset Zoom
                                        <span className="ml-auto text-xs opacity-60">⌘ 0</span>
                                    </Menu.Item>

                                    <Menu.Separator />

                                    <Menu.Item onClick={handleItemClick}>
                                        <WindowMaximize />
                                        Full Screen
                                        <span className="ml-auto text-xs opacity-60">⌃ ⌘ F</span>
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>

                <Menu.Root open={openMenuIndex === 3} onOpenChange={handleMenuOpenChange(3)}>
                    <Menu.Trigger
                        className={`rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary py-1 px-3 ${openMenuIndex === 3 ? 'bg-surface-200 dark:bg-surface-700' : ''}`}
                        onKeyDown={handleMenuKeyDown(3)}
                        onMouseEnter={handleMenuMouseEnter(3)}
                    >
                        Help
                    </Menu.Trigger>
                    <Menu.Portal>
                        <Menu.Positioner>
                            <Menu.Popup>
                                <Menu.List className="w-64">
                                    <Menu.Item onClick={handleItemClick}>
                                        <Book />
                                        Documentation
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <Github />
                                        View on GitHub
                                    </Menu.Item>
                                    <Menu.Item onClick={handleItemClick}>
                                        <QuestionCircle />
                                        Support
                                    </Menu.Item>

                                    <Menu.Separator />

                                    <Menu.Item onClick={handleItemClick}>
                                        <InfoCircle />
                                        About
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Popup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>
            </div>
        </div>
    );
}
```

### Sidebar

```tsx
'use client';
import { BookmarkFill } from '@primeicons/react/bookmark-fill';
import { Calendar } from '@primeicons/react/calendar';
import { ChartBar } from '@primeicons/react/chart-bar';
import { ChartLine } from '@primeicons/react/chart-line';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { CircleFill } from '@primeicons/react/circle-fill';
import { Code } from '@primeicons/react/code';
import { Cog } from '@primeicons/react/cog';
import { Dollar } from '@primeicons/react/dollar';
import { EllipsisV } from '@primeicons/react/ellipsis-v';
import { Envelope } from '@primeicons/react/envelope';
import { Eye } from '@primeicons/react/eye';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { Inbox } from '@primeicons/react/inbox';
import { MoneyBill } from '@primeicons/react/money-bill';
import { Palette } from '@primeicons/react/palette';
import { Plus } from '@primeicons/react/plus';
import { PowerOff } from '@primeicons/react/power-off';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Send } from '@primeicons/react/send';
import { Sitemap } from '@primeicons/react/sitemap';
import { Star } from '@primeicons/react/star';
import { StarFill } from '@primeicons/react/star-fill';
import { Trash } from '@primeicons/react/trash';
import { User } from '@primeicons/react/user';
import { UserPlus } from '@primeicons/react/user-plus';
import { Users } from '@primeicons/react/users';
import { Avatar } from '@primereact/ui/avatar';
import { Badge } from '@primereact/ui/badge';
import { Menu } from '@primereact/ui/menu';
import { StyleClass } from 'primereact/styleclass';
import * as React from 'react';

export default function SidebarDemo() {
    const menuRef = React.useRef(null);

    return (
        <div className="flex gap-6">
            <div className="w-64 h-240 bg-surface-0 dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 flex flex-col">
                <div className="p-4 border-b border-surface-200 dark:border-surface-700">
                    <div className="text-xl font-bold text-primary">Prime App</div>
                </div>

                {/* Top Navigation Menu */}
                <div className="flex-1 overflow-y-auto">
                    <Menu.Root className="border-none">
                        <Menu.List>
                            <Menu.Item>
                                <Home />
                                Dashboard
                                <Badge shape="circle" className="ml-auto">
                                    8
                                </Badge>
                            </Menu.Item>

                            <Menu.Sub defaultOpen={true}>
                                <Menu.SubTrigger>
                                    <Inbox />
                                    Inbox
                                    <Menu.Indicator>
                                        <ChevronDown className="transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                    </Menu.Indicator>
                                </Menu.SubTrigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <Envelope />
                                        All Messages
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Star />
                                        Starred
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Send />
                                        Sent
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Trash />
                                        Trash
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Sub>
                                <Menu.SubTrigger>
                                    <Folder />
                                    Projects
                                    <Menu.Indicator>
                                        <ChevronDown className="transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                    </Menu.Indicator>
                                </Menu.SubTrigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <CircleFill className="text-xs text-blue-500" />
                                        Website Redesign
                                    </Menu.Item>
                                    <Menu.Item>
                                        <CircleFill className="text-xs text-green-500" />
                                        Mobile App
                                    </Menu.Item>
                                    <Menu.Item>
                                        <CircleFill className="text-xs text-orange-500" />
                                        API Integration
                                    </Menu.Item>
                                    <Menu.Separator />
                                    <Menu.Item>
                                        <Plus />
                                        New Project
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Sub>
                                <Menu.SubTrigger>
                                    <Users />
                                    Team
                                    <Menu.Indicator>
                                        <ChevronDown className="transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                    </Menu.Indicator>
                                </Menu.SubTrigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <Users />
                                        All Members
                                    </Menu.Item>
                                    <Menu.Sub>
                                        <Menu.SubTrigger>
                                            <Sitemap />
                                            Departments
                                            <Menu.Indicator>
                                                <ChevronDown className="transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                            </Menu.Indicator>
                                        </Menu.SubTrigger>
                                        <Menu.List>
                                            <Menu.Item>
                                                <Code />
                                                Engineering
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Palette />
                                                Design
                                            </Menu.Item>
                                            <Menu.Item>
                                                <ChartLine />
                                                Marketing
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Dollar />
                                                Sales
                                            </Menu.Item>
                                        </Menu.List>
                                    </Menu.Sub>
                                    <Menu.Item>
                                        <UserPlus />
                                        Invite Member
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Separator />

                            <Menu.Item>
                                <Calendar />
                                Calendar
                            </Menu.Item>

                            <Menu.Sub>
                                <Menu.SubTrigger>
                                    <ChartBar />
                                    Analytics
                                    <Menu.Indicator>
                                        <ChevronDown className="transition-transform duration-200 [[data-open]>&]:rotate-180" />
                                    </Menu.Indicator>
                                </Menu.SubTrigger>
                                <Menu.List>
                                    <Menu.Item>
                                        <Eye />
                                        Overview
                                    </Menu.Item>
                                    <Menu.Item>
                                        <ChartLine />
                                        Traffic
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Users />
                                        Users
                                    </Menu.Item>
                                    <Menu.Item>
                                        <MoneyBill />
                                        Revenue
                                    </Menu.Item>
                                </Menu.List>
                            </Menu.Sub>

                            <Menu.Item>
                                <File />
                                Documents
                            </Menu.Item>

                            <Menu.Separator />

                            <Menu.Label>
                                <span className="text-xs font-bold text-surface-500">FAVORITES</span>
                            </Menu.Label>

                            <Menu.Item>
                                <StarFill className="text-yellow-500" />
                                Important
                            </Menu.Item>
                            <Menu.Item>
                                <BookmarkFill className="text-blue-500" />
                                Bookmarks
                                <Badge shape="circle" severity="secondary" className="ml-auto">
                                    5
                                </Badge>
                            </Menu.Item>
                        </Menu.List>
                    </Menu.Root>
                </div>

                {/* Bottom User Menu */}
                <div className="p-4 border-t border-surface-200 dark:border-surface-700">
                    <div ref={menuRef} className="hidden overflow-hidden mb-2">
                        <Menu.Root className="border-none">
                            <Menu.List className="w-56">
                                <Menu.Item>
                                    <User />
                                    View Profile
                                </Menu.Item>
                                <Menu.Item>
                                    <Cog />
                                    Settings
                                </Menu.Item>

                                <Menu.Separator />

                                <Menu.Item>
                                    <QuestionCircle />
                                    Help & Support
                                </Menu.Item>

                                <Menu.Separator />

                                <Menu.Item className="text-red-600 dark:text-red-400">
                                    <PowerOff />
                                    Sign Out
                                </Menu.Item>
                            </Menu.List>
                        </Menu.Root>
                    </div>

                    <StyleClass
                        as="button"
                        type="button"
                        selector="@prev"
                        enterFromClassName="hidden"
                        enterActiveClassName="animate-slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="animate-fadeout"
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer"
                    >
                        <Avatar.Root shape="circle" size="normal">
                            <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                            <Avatar.Fallback>SA</Avatar.Fallback>
                        </Avatar.Root>
                        <div className="flex flex-col items-start flex-1">
                            <span className="font-semibold text-sm">Sarah Anderson</span>
                            <span className="text-xs text-surface-500">Online</span>
                        </div>
                        <EllipsisV className="text-sm" />
                    </StyleClass>
                </div>
            </div>

            <div className="flex-1">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Sidebar Menu Demo</h2>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
                        <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Sidebar Layout</h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                            This demo showcases a typical sidebar layout with two distinct menu sections:
                        </p>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2 list-disc list-inside">
                            <li>
                                <strong>Top Navigation Menu:</strong> Contains main navigation items, organized by category with separators. Features
                                badge notifications and icon-based navigation.
                            </li>
                            <li>
                                <strong>Bottom User Menu:</strong> A dropdown menu triggered by clicking the user profile area. Provides quick access
                                to user-related actions and settings.
                            </li>
                        </ul>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-3">
                            The sidebar uses the Menu component in inline mode (no Portal) for the main navigation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### Router

The Menu component can be integrated with routing libraries. `MenuItem` supports the `as` prop to render as Next.js Link components, the `onClick` prop for programmatic navigation, or standard anchor tags for external links.

```tsx
'use client';
import { Home } from '@primeicons/react/home';
import { Link as LinkIcon } from '@primeicons/react/link';
import { Palette } from '@primeicons/react/palette';
import { Menu } from '@primereact/ui/menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RouterDemo() {
    const router = useRouter();

    const handleProgrammatic = () => {
        router.push('/docs/gettingstarted/introduction');
    };

    return (
        <div className="flex justify-center">
            <Menu.Root className="w-56">
                <Menu.List>
                    <Menu.Item as={Link} href="/docs/theming/unstyled">
                        <Palette />
                        Router Link
                    </Menu.Item>
                    <Menu.Item onClick={handleProgrammatic}>
                        <LinkIcon />
                        Programmatic
                    </Menu.Item>
                    <Menu.Item as="a" href="https://react.dev/" target="_blank">
                        <Home />
                        External
                    </Menu.Item>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/menu/features.md#api) for `MenuRoot`, `MenuItem`, `MenuList`, `MenuSub`, `MenuSubTrigger`, `MenuSubPortal`, `MenuSubPositioner`, `MenuSubPopup`, `MenuIndicator`, `MenuLabel`, `MenuSeparator`, `MenuTrigger`, `MenuPortal`, `MenuPositioner`, `MenuPopup`, `MenuArrow`, `MenuRadioGroup` component documentation.

### Hooks

See [Headless API](../../headless/menu/features.md#api) for `useMenu` and `useMenuSub` hook documentation.

## Accessibility

See [Menu Primitive](../../primitive/menu/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
