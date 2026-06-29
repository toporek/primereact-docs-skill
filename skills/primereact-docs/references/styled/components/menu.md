# Menu

A keyboard-navigable dropdown menu with support for items, checkbox items, radio items, and nested submenus.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Cog } from '@primeicons/react/cog';
import { CreditCard } from '@primeicons/react/credit-card';
import { Dot } from '@primeicons/react/dot';
import { User } from '@primeicons/react/user';
import { Button } from '@primereact/ui/button';
import { Menu } from '@primereact/ui/menu';
import type { MenuCheckboxItemCheckedChangeEvent, MenuRadioItemGroupValueChangeEvent } from '@primereact/ui/menu';
import * as React from 'react';

export default function Preview() {
    const [notifications, setNotifications] = React.useState(true);
    const [sound, setSound] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
        <div className="flex justify-center">
            <Menu.Root>
                <Menu.Trigger as={Button} severity="secondary" variant="outlined">
                    Account
                </Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner sideOffset={4}>
                        <Menu.Popup className="w-40">
                            <Menu.List>
                                <Menu.Group>
                                    <Menu.Label>My Account</Menu.Label>
                                    <Menu.Item>
                                        <User />
                                        Profile
                                    </Menu.Item>
                                    <Menu.Item>
                                        <CreditCard />
                                        Billing
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Cog />
                                        Settings
                                    </Menu.Item>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Label>Notifications</Menu.Label>
                                    <Menu.CheckboxItem
                                        checked={notifications}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setNotifications(e.checked)}
                                    >
                                        <Menu.CheckboxItemIndicator>
                                            <Check />
                                        </Menu.CheckboxItemIndicator>
                                        Enable notifications
                                    </Menu.CheckboxItem>
                                    <Menu.CheckboxItem
                                        checked={sound}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setSound(e.checked)}
                                    >
                                        <Menu.CheckboxItemIndicator>
                                            <Check />
                                        </Menu.CheckboxItemIndicator>
                                        Play sound
                                    </Menu.CheckboxItem>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Label>Appearance</Menu.Label>
                                    <Menu.RadioItemGroup
                                        value={theme}
                                        onValueChange={(e: MenuRadioItemGroupValueChangeEvent) => setTheme(e.value as string)}
                                    >
                                        <Menu.RadioItem value="light">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            Light
                                        </Menu.RadioItem>
                                        <Menu.RadioItem value="dark">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            Dark
                                        </Menu.RadioItem>
                                        <Menu.RadioItem value="system">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            System
                                        </Menu.RadioItem>
                                    </Menu.RadioItemGroup>
                                </Menu.Group>
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
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

```tsx
import { Button } from '@primereact/ui/button';
import { Menu } from '@primereact/ui/menu';

export default function Basic() {
    return (
        <div className="flex justify-center">
            <Menu.Root>
                <Menu.Trigger as={Button} variant="outlined" severity="secondary">
                    Account
                </Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner sideOffset={4}>
                        <Menu.Popup className="w-40">
                            <Menu.List>
                                <Menu.Group>
                                    <Menu.Label>My Account</Menu.Label>
                                    <Menu.Item>Profile</Menu.Item>
                                    <Menu.Item>Billing</Menu.Item>
                                    <Menu.Item>Settings</Menu.Item>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Label>Security</Menu.Label>
                                    <Menu.Item>Change Password</Menu.Item>
                                    <Menu.Item>Two-Factor Auth</Menu.Item>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Item>Invite Members</Menu.Item>
                                    <Menu.Item>Support</Menu.Item>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Item className="text-red-600!">Sign out</Menu.Item>
                                </Menu.Group>
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}

```

### Checkbox & Radio Items

Use `Menu.CheckboxItem` for toggleable options and `Menu.RadioItemGroup` + `Menu.RadioItem` for mutually exclusive options. `Menu.Indicator` with `match="checked"` renders the icon only when the item is selected.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Dot } from '@primeicons/react/dot';
import { Button } from '@primereact/ui/button';
import { Menu } from '@primereact/ui/menu';
import type { MenuCheckboxItemCheckedChangeEvent, MenuRadioItemGroupValueChangeEvent } from '@primereact/ui/menu';
import * as React from 'react';

export default function CheckboxRadioDemo() {
    const [notifications, setNotifications] = React.useState(true);
    const [sound, setSound] = React.useState(false);
    const [marketing, setMarketing] = React.useState(false);
    const [autoUpdate, setAutoUpdate] = React.useState(true);
    const [theme, setTheme] = React.useState('light');
    const [language, setLanguage] = React.useState('en');

    return (
        <div className="flex justify-center">
            <Menu.Root>
                <Menu.Trigger as={Button} severity="secondary" variant="outlined">
                    Preferences
                </Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner sideOffset={4}>
                        <Menu.Popup className="w-40">
                            <Menu.List>
                                <Menu.Group>
                                    <Menu.Label>Notifications</Menu.Label>
                                    <Menu.CheckboxItem
                                        checked={notifications}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setNotifications(e.checked)}
                                    >
                                        <Menu.CheckboxItemIndicator>
                                            <Check />
                                        </Menu.CheckboxItemIndicator>
                                        Enable notifications
                                    </Menu.CheckboxItem>
                                    <Menu.CheckboxItem
                                        checked={sound}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setSound(e.checked)}
                                    >
                                        <Menu.CheckboxItemIndicator>
                                            <Check />
                                        </Menu.CheckboxItemIndicator>
                                        Play sound
                                    </Menu.CheckboxItem>
                                    <Menu.CheckboxItem
                                        checked={marketing}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setMarketing(e.checked)}
                                    >
                                        <Menu.CheckboxItemIndicator>
                                            <Check />
                                        </Menu.CheckboxItemIndicator>
                                        Marketing emails
                                    </Menu.CheckboxItem>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Label>System</Menu.Label>
                                    <Menu.CheckboxItem
                                        checked={autoUpdate}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setAutoUpdate(e.checked)}
                                    >
                                        <Menu.CheckboxItemIndicator>
                                            <Check />
                                        </Menu.CheckboxItemIndicator>
                                        Auto-update apps
                                    </Menu.CheckboxItem>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Label>Appearance</Menu.Label>
                                    <Menu.RadioItemGroup
                                        value={theme}
                                        onValueChange={(e: MenuRadioItemGroupValueChangeEvent) => setTheme(e.value as string)}
                                    >
                                        <Menu.RadioItem value="light">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            Light
                                        </Menu.RadioItem>
                                        <Menu.RadioItem value="dark">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            Dark
                                        </Menu.RadioItem>
                                        <Menu.RadioItem value="system">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            System
                                        </Menu.RadioItem>
                                    </Menu.RadioItemGroup>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Label>Language</Menu.Label>
                                    <Menu.RadioItemGroup
                                        value={language}
                                        onValueChange={(e: MenuRadioItemGroupValueChangeEvent) => setLanguage(e.value as string)}
                                    >
                                        <Menu.RadioItem value="en">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            English
                                        </Menu.RadioItem>
                                        <Menu.RadioItem value="tr">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            Türkçe
                                        </Menu.RadioItem>
                                        <Menu.RadioItem value="de">
                                            <Menu.RadioItemIndicator>
                                                <Dot />
                                            </Menu.RadioItemIndicator>
                                            Deutsch
                                        </Menu.RadioItem>
                                    </Menu.RadioItemGroup>
                                </Menu.Group>
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}

```

### Submenus

Nest a `Menu.Submenu` inside any `Menu.List`. The `Menu.SubmenuTrigger` is the focusable item in the parent menu; the submenu's content lives inside its own `Menu.Portal` so it positions and animates independently.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Cloud } from '@primeicons/react/cloud';
import { Copy } from '@primeicons/react/copy';
import { Download } from '@primeicons/react/download';
import { Facebook } from '@primeicons/react/facebook';
import { File } from '@primeicons/react/file';
import { FileEdit } from '@primeicons/react/file-edit';
import { FileExport } from '@primeicons/react/file-export';
import { Globe } from '@primeicons/react/globe';
import { Link } from '@primeicons/react/link';
import { Linkedin } from '@primeicons/react/linkedin';
import { Pencil } from '@primeicons/react/pencil';
import { Send } from '@primeicons/react/send';
import { ShareAlt } from '@primeicons/react/share-alt';
import { Twitter } from '@primeicons/react/twitter';
import { Button } from '@primereact/ui/button';
import { Menu } from '@primereact/ui/menu';

export default function SubmenuDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root>
                <Menu.Trigger as={Button} severity="secondary" variant="outlined">
                    Actions
                </Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner sideOffset={4}>
                        <Menu.Popup className="w-44">
                            <Menu.List>
                                <Menu.Group>
                                    <Menu.Label>Document</Menu.Label>
                                    <Menu.Item>
                                        <File />
                                        New file
                                    </Menu.Item>
                                    <Menu.Item>
                                        <FileEdit />
                                        Open recent
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Copy />
                                        Duplicate
                                    </Menu.Item>

                                    <Menu.Submenu>
                                        <Menu.SubmenuTrigger>
                                            <Download />
                                            Import
                                            <Menu.SubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </Menu.SubmenuIndicator>
                                        </Menu.SubmenuTrigger>
                                        <Menu.Portal>
                                            <Menu.Positioner>
                                                <Menu.Popup className="w-44">
                                                    <Menu.List>
                                                        <Menu.Group>
                                                            <Menu.Item>
                                                                <File />
                                                                From file
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Cloud />
                                                                From cloud
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Globe />
                                                                From URL
                                                            </Menu.Item>
                                                        </Menu.Group>
                                                    </Menu.List>
                                                </Menu.Popup>
                                            </Menu.Positioner>
                                        </Menu.Portal>
                                    </Menu.Submenu>

                                    <Menu.Submenu>
                                        <Menu.SubmenuTrigger>
                                            <FileExport />
                                            Export
                                            <Menu.SubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </Menu.SubmenuIndicator>
                                        </Menu.SubmenuTrigger>
                                        <Menu.Portal>
                                            <Menu.Positioner>
                                                <Menu.Popup className="w-44">
                                                    <Menu.List>
                                                        <Menu.Group>
                                                            <Menu.Item>PDF</Menu.Item>
                                                            <Menu.Item>Word</Menu.Item>
                                                            <Menu.Item>Markdown</Menu.Item>
                                                            <Menu.Item>HTML</Menu.Item>

                                                            <Menu.Submenu>
                                                                <Menu.SubmenuTrigger>
                                                                    More
                                                                    <Menu.SubmenuIndicator>
                                                                        <ChevronRight className="size-3.5" />
                                                                    </Menu.SubmenuIndicator>
                                                                </Menu.SubmenuTrigger>
                                                                <Menu.Portal>
                                                                    <Menu.Positioner>
                                                                        <Menu.Popup className="w-40">
                                                                            <Menu.List>
                                                                                <Menu.Group>
                                                                                    <Menu.Item>EPUB</Menu.Item>
                                                                                    <Menu.Item>RTF</Menu.Item>
                                                                                    <Menu.Item>LaTeX</Menu.Item>
                                                                                    <Menu.Item>Plain Text</Menu.Item>
                                                                                </Menu.Group>
                                                                            </Menu.List>
                                                                        </Menu.Popup>
                                                                    </Menu.Positioner>
                                                                </Menu.Portal>
                                                            </Menu.Submenu>
                                                        </Menu.Group>
                                                    </Menu.List>
                                                </Menu.Popup>
                                            </Menu.Positioner>
                                        </Menu.Portal>
                                    </Menu.Submenu>

                                    <Menu.Submenu>
                                        <Menu.SubmenuTrigger>
                                            <ShareAlt />
                                            Share
                                            <Menu.SubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </Menu.SubmenuIndicator>
                                        </Menu.SubmenuTrigger>
                                        <Menu.Portal>
                                            <Menu.Positioner>
                                                <Menu.Popup className="w-40">
                                                    <Menu.List>
                                                        <Menu.Group>
                                                            <Menu.Item>
                                                                <Send />
                                                                Send via email
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Link />
                                                                Copy link
                                                            </Menu.Item>
                                                        </Menu.Group>

                                                        <Menu.Separator />

                                                        <Menu.Group>
                                                            <Menu.Label>Social</Menu.Label>
                                                            <Menu.Item>
                                                                <Twitter />
                                                                Twitter
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Facebook />
                                                                Facebook
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Linkedin />
                                                                LinkedIn
                                                            </Menu.Item>
                                                        </Menu.Group>
                                                    </Menu.List>
                                                </Menu.Popup>
                                            </Menu.Positioner>
                                        </Menu.Portal>
                                    </Menu.Submenu>

                                    <Menu.Item>
                                        <Pencil />
                                        Rename
                                    </Menu.Item>
                                </Menu.Group>
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}

```

### Default Open

Pass `defaultOpen` to a `Menu.Submenu` to make it expand whenever its parent menu opens. To pre-expand a deep path, set `defaultOpen` on every ancestor along the way, each `Menu.Submenu` only mounts (and reads its `defaultOpen`) once its direct parent is open.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Cloud } from '@primeicons/react/cloud';
import { Copy } from '@primeicons/react/copy';
import { Download } from '@primeicons/react/download';
import { Facebook } from '@primeicons/react/facebook';
import { File } from '@primeicons/react/file';
import { FileEdit } from '@primeicons/react/file-edit';
import { FileExport } from '@primeicons/react/file-export';
import { Globe } from '@primeicons/react/globe';
import { Link } from '@primeicons/react/link';
import { Linkedin } from '@primeicons/react/linkedin';
import { Pencil } from '@primeicons/react/pencil';
import { Send } from '@primeicons/react/send';
import { ShareAlt } from '@primeicons/react/share-alt';
import { Twitter } from '@primeicons/react/twitter';
import { Button } from '@primereact/ui/button';
import { Menu } from '@primereact/ui/menu';

export default function DefaultOpenDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root>
                <Menu.Trigger as={Button} severity="secondary" variant="outlined">
                    Actions
                </Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner sideOffset={4}>
                        <Menu.Popup className="w-44">
                            <Menu.List>
                                <Menu.Group>
                                    <Menu.Label>Document</Menu.Label>
                                    <Menu.Item>
                                        <File />
                                        New file
                                    </Menu.Item>
                                    <Menu.Item>
                                        <FileEdit />
                                        Open recent
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Copy />
                                        Duplicate
                                    </Menu.Item>

                                    <Menu.Submenu>
                                        <Menu.SubmenuTrigger>
                                            <Download />
                                            Import
                                            <Menu.SubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </Menu.SubmenuIndicator>
                                        </Menu.SubmenuTrigger>
                                        <Menu.Portal>
                                            <Menu.Positioner>
                                                <Menu.Popup className="w-44">
                                                    <Menu.List>
                                                        <Menu.Group>
                                                            <Menu.Item>
                                                                <File />
                                                                From file
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Cloud />
                                                                From cloud
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Globe />
                                                                From URL
                                                            </Menu.Item>
                                                        </Menu.Group>
                                                    </Menu.List>
                                                </Menu.Popup>
                                            </Menu.Positioner>
                                        </Menu.Portal>
                                    </Menu.Submenu>

                                    <Menu.Submenu defaultOpen>
                                        <Menu.SubmenuTrigger>
                                            <FileExport />
                                            Export
                                            <Menu.SubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </Menu.SubmenuIndicator>
                                        </Menu.SubmenuTrigger>
                                        <Menu.Portal>
                                            <Menu.Positioner>
                                                <Menu.Popup className="w-44">
                                                    <Menu.List>
                                                        <Menu.Group>
                                                            <Menu.Item>PDF</Menu.Item>
                                                            <Menu.Item>Word</Menu.Item>
                                                            <Menu.Item>Markdown</Menu.Item>
                                                            <Menu.Item>HTML</Menu.Item>

                                                            <Menu.Submenu defaultOpen>
                                                                <Menu.SubmenuTrigger>
                                                                    More
                                                                    <Menu.SubmenuIndicator>
                                                                        <ChevronRight className="size-3.5" />
                                                                    </Menu.SubmenuIndicator>
                                                                </Menu.SubmenuTrigger>
                                                                <Menu.Portal>
                                                                    <Menu.Positioner>
                                                                        <Menu.Popup className="w-40">
                                                                            <Menu.List>
                                                                                <Menu.Group>
                                                                                    <Menu.Item>EPUB</Menu.Item>
                                                                                    <Menu.Item>RTF</Menu.Item>
                                                                                    <Menu.Item>LaTeX</Menu.Item>
                                                                                    <Menu.Item>Plain Text</Menu.Item>
                                                                                </Menu.Group>
                                                                            </Menu.List>
                                                                        </Menu.Popup>
                                                                    </Menu.Positioner>
                                                                </Menu.Portal>
                                                            </Menu.Submenu>
                                                        </Menu.Group>
                                                    </Menu.List>
                                                </Menu.Popup>
                                            </Menu.Positioner>
                                        </Menu.Portal>
                                    </Menu.Submenu>

                                    <Menu.Submenu>
                                        <Menu.SubmenuTrigger>
                                            <ShareAlt />
                                            Share
                                            <Menu.SubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </Menu.SubmenuIndicator>
                                        </Menu.SubmenuTrigger>
                                        <Menu.Portal>
                                            <Menu.Positioner>
                                                <Menu.Popup className="w-40">
                                                    <Menu.List>
                                                        <Menu.Group>
                                                            <Menu.Item>
                                                                <Send />
                                                                Send via email
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Link />
                                                                Copy link
                                                            </Menu.Item>
                                                        </Menu.Group>

                                                        <Menu.Separator />

                                                        <Menu.Group>
                                                            <Menu.Label>Social</Menu.Label>
                                                            <Menu.Item>
                                                                <Twitter />
                                                                Twitter
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Facebook />
                                                                Facebook
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Linkedin />
                                                                LinkedIn
                                                            </Menu.Item>
                                                        </Menu.Group>
                                                    </Menu.List>
                                                </Menu.Popup>
                                            </Menu.Positioner>
                                        </Menu.Portal>
                                    </Menu.Submenu>

                                    <Menu.Item>
                                        <Pencil />
                                        Rename
                                    </Menu.Item>
                                </Menu.Group>
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}

```

### Hover

Pass `openOnHover` to make the trigger open the menu on pointer hover (in addition to click). Use `openDelay` and `closeDelay` (in ms) to fine-tune the timing. Click always activates immediately and bypasses the delays.

```tsx
'use client';
import { Bell } from '@primeicons/react/bell';
import { Cog } from '@primeicons/react/cog';
import { CreditCard } from '@primeicons/react/credit-card';
import { PowerOff } from '@primeicons/react/power-off';
import { User } from '@primeicons/react/user';
import { Button } from '@primereact/ui/button';
import { Menu } from '@primereact/ui/menu';

export default function HoverDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root openOnHover openDelay={100} closeDelay={150}>
                <Menu.Trigger as={Button} severity="secondary" variant="outlined">
                    Account
                </Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner sideOffset={4}>
                        <Menu.Popup className="w-44">
                            <Menu.List>
                                <Menu.Group>
                                    <Menu.Label>My Account</Menu.Label>
                                    <Menu.Item>
                                        <User />
                                        Profile
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Bell />
                                        Notifications
                                    </Menu.Item>
                                    <Menu.Item>
                                        <CreditCard />
                                        Billing
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Cog />
                                        Settings
                                    </Menu.Item>
                                </Menu.Group>

                                <Menu.Separator />

                                <Menu.Group>
                                    <Menu.Item className="text-red-600!">
                                        <PowerOff />
                                        Sign out
                                    </Menu.Item>
                                </Menu.Group>
                            </Menu.List>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </div>
    );
}

```

### Inline

`Menu` works without a trigger or portal, drop a `Menu.List` directly inside it for sidebar-style navigation menus.

```tsx
'use client';
import { Bell } from '@primeicons/react/bell';
import { Bookmark } from '@primeicons/react/bookmark';
import { Briefcase } from '@primeicons/react/briefcase';
import { ChartBar } from '@primeicons/react/chart-bar';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Clock } from '@primeicons/react/clock';
import { Cog } from '@primeicons/react/cog';
import { CreditCard } from '@primeicons/react/credit-card';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { Inbox } from '@primeicons/react/inbox';
import { PowerOff } from '@primeicons/react/power-off';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Star } from '@primeicons/react/star';
import { User } from '@primeicons/react/user';
import { Users } from '@primeicons/react/users';
import { Menu } from '@primereact/ui/menu';

export default function InlineDemo() {
    return (
        <div className="max-w-64 mx-auto">
            <Menu.Root closeOnSelect={false} composite={false}>
                <Menu.List>
                    <Menu.Group>
                        <Menu.Label>Workspace</Menu.Label>
                        <Menu.Item>
                            <Home />
                            Dashboard
                        </Menu.Item>
                        <Menu.Item>
                            <Inbox />
                            Inbox
                        </Menu.Item>

                        <Menu.Submenu as="div" defaultOpen openOnHover={false}>
                            <Menu.SubmenuTrigger>
                                <Folder />
                                Projects
                                <Menu.SubmenuIndicator>
                                    <ChevronDown className="size-3.5 transition-transform duration-200 [[data-open]>*>&]:rotate-180" />
                                </Menu.SubmenuIndicator>
                            </Menu.SubmenuTrigger>
                            <Menu.List className="ms-6! hidden! in-data-[part=sub]:in-data-open:flex!">
                                <Menu.Group>
                                    <Menu.Item>
                                        <Briefcase />
                                        Active
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Clock />
                                        Recent
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Star />
                                        Favorites
                                    </Menu.Item>
                                </Menu.Group>
                            </Menu.List>
                        </Menu.Submenu>

                        <Menu.Item>
                            <ChartBar />
                            Analytics
                        </Menu.Item>
                        <Menu.Item>
                            <Users />
                            Team
                        </Menu.Item>
                    </Menu.Group>

                    <Menu.Separator />

                    <Menu.Group>
                        <Menu.Label>Account</Menu.Label>
                        <Menu.Item>
                            <User />
                            Profile
                        </Menu.Item>
                        <Menu.Item>
                            <Bell />
                            Notifications
                        </Menu.Item>
                        <Menu.Item>
                            <Bookmark />
                            Saved
                        </Menu.Item>
                        <Menu.Item>
                            <CreditCard />
                            Billing
                        </Menu.Item>
                        <Menu.Item>
                            <Cog />
                            Settings
                        </Menu.Item>
                    </Menu.Group>

                    <Menu.Separator />

                    <Menu.Group>
                        <Menu.Item>
                            <QuestionCircle />
                            Help & Support
                        </Menu.Item>
                        <Menu.Item className="text-red-600!">
                            <PowerOff />
                            Sign out
                        </Menu.Item>
                    </Menu.Group>
                </Menu.List>
            </Menu.Root>
        </div>
    );
}

```

### Tiered Menu

Compose deep, multi-level navigation with `Menu.Submenu` and `Menu.SubmenuTrigger`, submenus open on hover or focus and stay anchored to their trigger.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Cloud } from '@primeicons/react/cloud';
import { Copy } from '@primeicons/react/copy';
import { Download } from '@primeicons/react/download';
import { Facebook } from '@primeicons/react/facebook';
import { File } from '@primeicons/react/file';
import { FileEdit } from '@primeicons/react/file-edit';
import { FileExport } from '@primeicons/react/file-export';
import { Globe } from '@primeicons/react/globe';
import { Link } from '@primeicons/react/link';
import { Linkedin } from '@primeicons/react/linkedin';
import { Pencil } from '@primeicons/react/pencil';
import { Send } from '@primeicons/react/send';
import { ShareAlt } from '@primeicons/react/share-alt';
import { Twitter } from '@primeicons/react/twitter';
import { Menu } from '@primereact/ui/menu';

export default function TieredMenuDemo() {
    return (
        <div className="flex justify-center">
            <Menu.Root>
                <Menu.List className="w-64">
                    <Menu.Group>
                        <Menu.Label>Document</Menu.Label>
                        <Menu.Item>
                            <File />
                            New file
                        </Menu.Item>
                        <Menu.Item>
                            <FileEdit />
                            Open recent
                        </Menu.Item>
                        <Menu.Item>
                            <Copy />
                            Duplicate
                        </Menu.Item>

                        <Menu.Submenu>
                            <Menu.SubmenuTrigger>
                                <Download />
                                Import
                                <Menu.SubmenuIndicator>
                                    <ChevronRight className="size-3.5" />
                                </Menu.SubmenuIndicator>
                            </Menu.SubmenuTrigger>
                            <Menu.Portal>
                                <Menu.Positioner>
                                    <Menu.Popup className="w-44">
                                        <Menu.List>
                                            <Menu.Group>
                                                <Menu.Item>
                                                    <File />
                                                    From file
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Cloud />
                                                    From cloud
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Globe />
                                                    From URL
                                                </Menu.Item>
                                            </Menu.Group>
                                        </Menu.List>
                                    </Menu.Popup>
                                </Menu.Positioner>
                            </Menu.Portal>
                        </Menu.Submenu>

                        <Menu.Submenu>
                            <Menu.SubmenuTrigger>
                                <FileExport />
                                Export
                                <Menu.SubmenuIndicator>
                                    <ChevronRight className="size-3.5" />
                                </Menu.SubmenuIndicator>
                            </Menu.SubmenuTrigger>
                            <Menu.Portal>
                                <Menu.Positioner>
                                    <Menu.Popup className="w-44">
                                        <Menu.List>
                                            <Menu.Group>
                                                <Menu.Item>PDF</Menu.Item>
                                                <Menu.Item>Word</Menu.Item>
                                                <Menu.Item>Markdown</Menu.Item>
                                                <Menu.Item>HTML</Menu.Item>

                                                <Menu.Submenu>
                                                    <Menu.SubmenuTrigger>
                                                        More
                                                        <Menu.SubmenuIndicator>
                                                            <ChevronRight className="size-3.5" />
                                                        </Menu.SubmenuIndicator>
                                                    </Menu.SubmenuTrigger>
                                                    <Menu.Portal>
                                                        <Menu.Positioner>
                                                            <Menu.Popup className="w-40">
                                                                <Menu.List>
                                                                    <Menu.Group>
                                                                        <Menu.Item>EPUB</Menu.Item>
                                                                        <Menu.Item>RTF</Menu.Item>
                                                                        <Menu.Item>LaTeX</Menu.Item>
                                                                        <Menu.Item>Plain Text</Menu.Item>
                                                                    </Menu.Group>
                                                                </Menu.List>
                                                            </Menu.Popup>
                                                        </Menu.Positioner>
                                                    </Menu.Portal>
                                                </Menu.Submenu>
                                            </Menu.Group>
                                        </Menu.List>
                                    </Menu.Popup>
                                </Menu.Positioner>
                            </Menu.Portal>
                        </Menu.Submenu>

                        <Menu.Submenu>
                            <Menu.SubmenuTrigger>
                                <ShareAlt />
                                Share
                                <Menu.SubmenuIndicator>
                                    <ChevronRight className="size-3.5" />
                                </Menu.SubmenuIndicator>
                            </Menu.SubmenuTrigger>
                            <Menu.Portal>
                                <Menu.Positioner>
                                    <Menu.Popup className="w-40">
                                        <Menu.List>
                                            <Menu.Group>
                                                <Menu.Item>
                                                    <Send />
                                                    Send via email
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link />
                                                    Copy link
                                                </Menu.Item>
                                            </Menu.Group>

                                            <Menu.Separator />

                                            <Menu.Group>
                                                <Menu.Label>Social</Menu.Label>
                                                <Menu.Item>
                                                    <Twitter />
                                                    Twitter
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Facebook />
                                                    Facebook
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Linkedin />
                                                    LinkedIn
                                                </Menu.Item>
                                            </Menu.Group>
                                        </Menu.List>
                                    </Menu.Popup>
                                </Menu.Positioner>
                            </Menu.Portal>
                        </Menu.Submenu>

                        <Menu.Item>
                            <Pencil />
                            Rename
                        </Menu.Item>
                    </Menu.Group>
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
import { Button } from '@primereact/ui/button';
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
            <Menu.Root>
                <Menu.Trigger as={Button} severity="secondary" variant="outlined" iconOnly aria-label="Apps">
                    <Bars />
                </Menu.Trigger>

                <Menu.Portal>
                    <Menu.Positioner align="end" sideOffset={12}>
                        <Menu.Popup>
                            <Menu.List className="grid! grid-cols-3! gap-1! p-2!">
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
