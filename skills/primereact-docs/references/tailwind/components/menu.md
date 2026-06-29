# Menu

A keyboard-navigable dropdown menu with support for items, checkbox items, radio items, and nested submenus.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Check } from '@primeicons/react/check';
import { Cog } from '@primeicons/react/cog';
import { CreditCard } from '@primeicons/react/credit-card';
import { Dot } from '@primeicons/react/dot';
import { User } from '@primeicons/react/user';
import {
    Menu,
    MenuCheckboxItem,
    MenuCheckboxItemIndicator,
    MenuGroup,
    MenuItem,
    MenuLabel,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuRadioItem,
    MenuRadioItemGroup,
    MenuRadioItemIndicator,
    MenuSeparator,
    MenuTrigger
} from '@/components/ui/menu';
import type { MenuCheckboxItemCheckedChangeEvent, MenuRadioItemGroupValueChangeEvent } from 'primereact/menu';
import * as React from 'react';

export default function Preview() {
    const [notifications, setNotifications] = React.useState(true);
    const [sound, setSound] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
        <div className="flex justify-center">
            <Menu>
                <MenuTrigger as={Button} severity="secondary" variant="outlined">
                    Account
                </MenuTrigger>
                <MenuPortal>
                    <MenuPositioner sideOffset={4}>
                        <MenuPopup className="w-40">
                            <MenuList>
                                <MenuGroup>
                                    <MenuLabel>My Account</MenuLabel>
                                    <MenuItem>
                                        <User />
                                        Profile
                                    </MenuItem>
                                    <MenuItem>
                                        <CreditCard />
                                        Billing
                                    </MenuItem>
                                    <MenuItem>
                                        <Cog />
                                        Settings
                                    </MenuItem>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuLabel>Notifications</MenuLabel>
                                    <MenuCheckboxItem
                                        checked={notifications}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setNotifications(e.checked)}
                                    >
                                        <MenuCheckboxItemIndicator>
                                            <Check />
                                        </MenuCheckboxItemIndicator>
                                        Enable notifications
                                    </MenuCheckboxItem>
                                    <MenuCheckboxItem
                                        checked={sound}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setSound(e.checked)}
                                    >
                                        <MenuCheckboxItemIndicator>
                                            <Check />
                                        </MenuCheckboxItemIndicator>
                                        Play sound
                                    </MenuCheckboxItem>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuLabel>Appearance</MenuLabel>
                                    <MenuRadioItemGroup
                                        value={theme}
                                        onValueChange={(e: MenuRadioItemGroupValueChangeEvent) => setTheme(e.value as string)}
                                    >
                                        <MenuRadioItem value="light">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            Light
                                        </MenuRadioItem>
                                        <MenuRadioItem value="dark">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            Dark
                                        </MenuRadioItem>
                                        <MenuRadioItem value="system">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            System
                                        </MenuRadioItem>
                                    </MenuRadioItemGroup>
                                </MenuGroup>
                            </MenuList>
                        </MenuPopup>
                    </MenuPositioner>
                </MenuPortal>
            </Menu>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/menu.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import {
    Menu,
    MenuArrow,
    MenuCheckboxItem,
    MenuGroup,
    MenuIndicator,
    MenuItem,
    MenuLabel,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuRadioItem,
    MenuRadioItemGroup,
    MenuSeparator,
    MenuSubmenu,
    MenuSubmenuTrigger,
    MenuTrigger
} from '@/components/ui/menu';
```

```tsx
<Menu>
    <MenuTrigger>Open</MenuTrigger>
    <MenuPortal>
        <MenuPositioner sideOffset={4}>
            <MenuPopup>
                <MenuList>
                    <MenuGroup>
                        <MenuLabel>Account</MenuLabel>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                    </MenuGroup>
                    <MenuSeparator />
                    <MenuGroup>
                        <MenuItem>Sign out</MenuItem>
                    </MenuGroup>
                </MenuList>
            </MenuPopup>
        </MenuPositioner>
    </MenuPortal>
</Menu>
```

## Examples

### Basic

A standard dropdown with grouped items, a label, and a separator.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import {
    Menu,
    MenuGroup,
    MenuItem,
    MenuLabel,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuSeparator,
    MenuTrigger
} from '@/components/ui/menu';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Menu>
                <MenuTrigger as={Button} severity="secondary" variant="outlined">
                    Account
                </MenuTrigger>
                <MenuPortal>
                    <MenuPositioner sideOffset={4}>
                        <MenuPopup className="w-40">
                            <MenuList>
                                <MenuGroup>
                                    <MenuLabel>My Account</MenuLabel>
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>Billing</MenuItem>
                                    <MenuItem>Settings</MenuItem>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuLabel>Security</MenuLabel>
                                    <MenuItem>Change Password</MenuItem>
                                    <MenuItem>Two-Factor Auth</MenuItem>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuItem>Invite Members</MenuItem>
                                    <MenuItem>Support</MenuItem>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuItem className="text-red-600 dark:text-red-400">Sign out</MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </MenuPopup>
                    </MenuPositioner>
                </MenuPortal>
            </Menu>
        </div>
    );
}

```

### Checkbox & Radio Items

Use `MenuCheckboxItem` for toggleable options and `MenuRadioItemGroup` + `MenuRadioItem` for mutually exclusive options. `MenuIndicator` with `match="checked"` renders the icon only when the item is selected.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Check } from '@primeicons/react/check';
import { Dot } from '@primeicons/react/dot';
import {
    Menu,
    MenuCheckboxItem,
    MenuCheckboxItemIndicator,
    MenuGroup,
    MenuLabel,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuRadioItem,
    MenuRadioItemGroup,
    MenuRadioItemIndicator,
    MenuSeparator,
    MenuTrigger
} from '@/components/ui/menu';
import type { MenuCheckboxItemCheckedChangeEvent, MenuRadioItemGroupValueChangeEvent } from 'primereact/menu';
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
            <Menu>
                <MenuTrigger as={Button} severity="secondary" variant="outlined">
                    Preferences
                </MenuTrigger>
                <MenuPortal>
                    <MenuPositioner sideOffset={4}>
                        <MenuPopup className="w-40">
                            <MenuList>
                                <MenuGroup>
                                    <MenuLabel>Notifications</MenuLabel>
                                    <MenuCheckboxItem
                                        checked={notifications}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setNotifications(e.checked)}
                                    >
                                        <MenuCheckboxItemIndicator>
                                            <Check />
                                        </MenuCheckboxItemIndicator>
                                        Enable notifications
                                    </MenuCheckboxItem>
                                    <MenuCheckboxItem
                                        checked={sound}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setSound(e.checked)}
                                    >
                                        <MenuCheckboxItemIndicator>
                                            <Check />
                                        </MenuCheckboxItemIndicator>
                                        Play sound
                                    </MenuCheckboxItem>
                                    <MenuCheckboxItem
                                        checked={marketing}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setMarketing(e.checked)}
                                    >
                                        <MenuCheckboxItemIndicator>
                                            <Check />
                                        </MenuCheckboxItemIndicator>
                                        Marketing emails
                                    </MenuCheckboxItem>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuLabel>System</MenuLabel>
                                    <MenuCheckboxItem
                                        checked={autoUpdate}
                                        onCheckedChange={(e: MenuCheckboxItemCheckedChangeEvent) => setAutoUpdate(e.checked)}
                                    >
                                        <MenuCheckboxItemIndicator>
                                            <Check />
                                        </MenuCheckboxItemIndicator>
                                        Auto-update apps
                                    </MenuCheckboxItem>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuLabel>Appearance</MenuLabel>
                                    <MenuRadioItemGroup
                                        value={theme}
                                        onValueChange={(e: MenuRadioItemGroupValueChangeEvent) => setTheme(e.value as string)}
                                    >
                                        <MenuRadioItem value="light">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            Light
                                        </MenuRadioItem>
                                        <MenuRadioItem value="dark">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            Dark
                                        </MenuRadioItem>
                                        <MenuRadioItem value="system">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            System
                                        </MenuRadioItem>
                                    </MenuRadioItemGroup>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuLabel>Language</MenuLabel>
                                    <MenuRadioItemGroup
                                        value={language}
                                        onValueChange={(e: MenuRadioItemGroupValueChangeEvent) => setLanguage(e.value as string)}
                                    >
                                        <MenuRadioItem value="en">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            English
                                        </MenuRadioItem>
                                        <MenuRadioItem value="tr">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            Türkçe
                                        </MenuRadioItem>
                                        <MenuRadioItem value="de">
                                            <MenuRadioItemIndicator>
                                                <Dot />
                                            </MenuRadioItemIndicator>
                                            Deutsch
                                        </MenuRadioItem>
                                    </MenuRadioItemGroup>
                                </MenuGroup>
                            </MenuList>
                        </MenuPopup>
                    </MenuPositioner>
                </MenuPortal>
            </Menu>
        </div>
    );
}

```

### Submenus

Nest a `MenuSubmenu` inside any `MenuList`. The `MenuSubmenuTrigger` is the focusable item in the parent menu; the submenu's content lives inside its own `MenuPortal` so it positions and animates independently.

```tsx
'use client';
import {
    Menu,
    MenuGroup,
    MenuSubmenuIndicator,
    MenuItem,
    MenuLabel,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuSeparator,
    MenuSubmenu,
    MenuSubmenuTrigger,
    MenuTrigger
} from '@/components/ui/menu';
import { Button } from '@/components/ui/button';
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

export default function SubmenuDemo() {
    return (
        <div className="flex justify-center">
            <Menu>
                <MenuTrigger as={Button} severity="secondary" variant="outlined">
                    Actions
                </MenuTrigger>
                <MenuPortal>
                    <MenuPositioner sideOffset={4}>
                        <MenuPopup className="w-44">
                            <MenuList>
                                <MenuGroup>
                                    <MenuLabel>Document</MenuLabel>
                                    <MenuItem>
                                        <File />
                                        New file
                                    </MenuItem>
                                    <MenuItem>
                                        <FileEdit />
                                        Open recent
                                    </MenuItem>
                                    <MenuItem>
                                        <Copy />
                                        Duplicate
                                    </MenuItem>

                                    <MenuSubmenu>
                                        <MenuSubmenuTrigger>
                                            <Download />
                                            Import
                                            <MenuSubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </MenuSubmenuIndicator>
                                        </MenuSubmenuTrigger>
                                        <MenuPortal>
                                            <MenuPositioner>
                                                <MenuPopup className="w-44">
                                                    <MenuList>
                                                        <MenuGroup>
                                                            <MenuItem>
                                                                <File />
                                                                From file
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <Cloud />
                                                                From cloud
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <Globe />
                                                                From URL
                                                            </MenuItem>
                                                        </MenuGroup>
                                                    </MenuList>
                                                </MenuPopup>
                                            </MenuPositioner>
                                        </MenuPortal>
                                    </MenuSubmenu>

                                    <MenuSubmenu>
                                        <MenuSubmenuTrigger>
                                            <FileExport />
                                            Export
                                            <MenuSubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </MenuSubmenuIndicator>
                                        </MenuSubmenuTrigger>
                                        <MenuPortal>
                                            <MenuPositioner>
                                                <MenuPopup className="w-44">
                                                    <MenuList>
                                                        <MenuGroup>
                                                            <MenuItem>PDF</MenuItem>
                                                            <MenuItem>Word</MenuItem>
                                                            <MenuItem>Markdown</MenuItem>
                                                            <MenuItem>HTML</MenuItem>

                                                            <MenuSubmenu>
                                                                <MenuSubmenuTrigger>
                                                                    More
                                                                    <MenuSubmenuIndicator>
                                                                        <ChevronRight className="size-3.5" />
                                                                    </MenuSubmenuIndicator>
                                                                </MenuSubmenuTrigger>
                                                                <MenuPortal>
                                                                    <MenuPositioner>
                                                                        <MenuPopup className="w-40">
                                                                            <MenuList>
                                                                                <MenuGroup>
                                                                                    <MenuItem>EPUB</MenuItem>
                                                                                    <MenuItem>RTF</MenuItem>
                                                                                    <MenuItem>LaTeX</MenuItem>
                                                                                    <MenuItem>Plain Text</MenuItem>
                                                                                </MenuGroup>
                                                                            </MenuList>
                                                                        </MenuPopup>
                                                                    </MenuPositioner>
                                                                </MenuPortal>
                                                            </MenuSubmenu>
                                                        </MenuGroup>
                                                    </MenuList>
                                                </MenuPopup>
                                            </MenuPositioner>
                                        </MenuPortal>
                                    </MenuSubmenu>

                                    <MenuSubmenu>
                                        <MenuSubmenuTrigger>
                                            <ShareAlt />
                                            Share
                                            <MenuSubmenuIndicator>
                                                <ChevronRight className="size-3.5" />
                                            </MenuSubmenuIndicator>
                                        </MenuSubmenuTrigger>
                                        <MenuPortal>
                                            <MenuPositioner>
                                                <MenuPopup className="w-40">
                                                    <MenuList>
                                                        <MenuGroup>
                                                            <MenuItem>
                                                                <Send />
                                                                Send via email
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <Link />
                                                                Copy link
                                                            </MenuItem>
                                                        </MenuGroup>

                                                        <MenuSeparator />

                                                        <MenuGroup>
                                                            <MenuLabel>Social</MenuLabel>
                                                            <MenuItem>
                                                                <Twitter />
                                                                Twitter
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <Facebook />
                                                                Facebook
                                                            </MenuItem>
                                                            <MenuItem>
                                                                <Linkedin />
                                                                LinkedIn
                                                            </MenuItem>
                                                        </MenuGroup>
                                                    </MenuList>
                                                </MenuPopup>
                                            </MenuPositioner>
                                        </MenuPortal>
                                    </MenuSubmenu>

                                    <MenuItem>
                                        <Pencil />
                                        Rename
                                    </MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </MenuPopup>
                    </MenuPositioner>
                </MenuPortal>
            </Menu>
        </div>
    );
}

```

### Hover

Pass `openOnHover` to make the trigger open the menu on pointer hover (in addition to click). Use `openDelay` and `closeDelay` (in ms) to fine-tune the timing. Click always activates immediately and bypasses the delays.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Bell } from '@primeicons/react/bell';
import { Cog } from '@primeicons/react/cog';
import { CreditCard } from '@primeicons/react/credit-card';
import { PowerOff } from '@primeicons/react/power-off';
import { User } from '@primeicons/react/user';
import {
    Menu,
    MenuGroup,
    MenuItem,
    MenuLabel,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuSeparator,
    MenuTrigger
} from '@/components/ui/menu';

export default function HoverDemo() {
    return (
        <div className="flex justify-center">
            <Menu openOnHover openDelay={100} closeDelay={150}>
                <MenuTrigger as={Button} severity="secondary" variant="outlined">
                    Account
                </MenuTrigger>
                <MenuPortal>
                    <MenuPositioner sideOffset={4}>
                        <MenuPopup className="w-44">
                            <MenuList>
                                <MenuGroup>
                                    <MenuLabel>My Account</MenuLabel>
                                    <MenuItem>
                                        <User />
                                        Profile
                                    </MenuItem>
                                    <MenuItem>
                                        <Bell />
                                        Notifications
                                    </MenuItem>
                                    <MenuItem>
                                        <CreditCard />
                                        Billing
                                    </MenuItem>
                                    <MenuItem>
                                        <Cog />
                                        Settings
                                    </MenuItem>
                                </MenuGroup>

                                <MenuSeparator />

                                <MenuGroup>
                                    <MenuItem className="text-red-600 dark:text-red-400">
                                        <PowerOff />
                                        Sign out
                                    </MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </MenuPopup>
                    </MenuPositioner>
                </MenuPortal>
            </Menu>
        </div>
    );
}

```

### Inline

`Menu` works without a trigger or portal, drop a `MenuList` directly inside it for sidebar-style navigation menus.

```tsx
'use client';
import {
    Menu,
    MenuGroup,
    MenuSubmenuIndicator,
    MenuItem,
    MenuLabel,
    MenuList,
    MenuSeparator,
    MenuSubmenu,
    MenuSubmenuTrigger
} from '@/components/ui/menu';
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

export default function InlineDemo() {
    return (
        <Menu closeOnSelect={false} composite={false} className="w-64 mx-auto">
            <MenuList>
                <MenuGroup>
                    <MenuLabel>Workspace</MenuLabel>
                    <MenuItem>
                        <Home />
                        Dashboard
                    </MenuItem>
                    <MenuItem>
                        <Inbox />
                        Inbox
                    </MenuItem>

                    <MenuSubmenu defaultOpen openOnHover={false}>
                        <MenuSubmenuTrigger>
                            <Folder />
                            Projects
                            <MenuSubmenuIndicator>
                                <ChevronDown className="size-3.5 transition-transform duration-200 [[data-open]>*>&]:rotate-180" />
                            </MenuSubmenuIndicator>
                        </MenuSubmenuTrigger>
                        <MenuList className="ms-6 hidden in-data-[part=sub]:in-data-open:flex">
                            <MenuGroup>
                                <MenuItem>
                                    <Briefcase />
                                    Active
                                </MenuItem>
                                <MenuItem>
                                    <Clock />
                                    Recent
                                </MenuItem>
                                <MenuItem>
                                    <Star />
                                    Favorites
                                </MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </MenuSubmenu>

                    <MenuItem>
                        <ChartBar />
                        Analytics
                    </MenuItem>
                    <MenuItem>
                        <Users />
                        Team
                    </MenuItem>
                </MenuGroup>

                <MenuSeparator />

                <MenuGroup>
                    <MenuLabel>Account</MenuLabel>
                    <MenuItem>
                        <User />
                        Profile
                    </MenuItem>
                    <MenuItem>
                        <Bell />
                        Notifications
                    </MenuItem>
                    <MenuItem>
                        <Bookmark />
                        Saved
                    </MenuItem>
                    <MenuItem>
                        <CreditCard />
                        Billing
                    </MenuItem>
                    <MenuItem>
                        <Cog />
                        Settings
                    </MenuItem>
                </MenuGroup>

                <MenuSeparator />

                <MenuGroup>
                    <MenuItem>
                        <QuestionCircle />
                        Help & Support
                    </MenuItem>
                    <MenuItem className="text-red-600 dark:text-red-400">
                        <PowerOff />
                        Sign out
                    </MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
}

```

### Tiered Menu

Compose deep, multi-level navigation with `MenuSubmenu` and `MenuSubmenuTrigger`, submenus open on hover or focus and stay anchored to their trigger.

```tsx
'use client';
import {
    Menu,
    MenuGroup,
    MenuSubmenuIndicator,
    MenuItem,
    MenuLabel,
    MenuList,
    MenuPopup,
    MenuPortal,
    MenuPositioner,
    MenuSeparator,
    MenuSubmenu,
    MenuSubmenuTrigger
} from '@/components/ui/menu';
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

export default function TieredMenuDemo() {
    return (
        <div className="flex justify-center">
            <Menu>
                <MenuList className="w-64">
                    <MenuGroup>
                        <MenuLabel>Document</MenuLabel>
                        <MenuItem>
                            <File />
                            New file
                        </MenuItem>
                        <MenuItem>
                            <FileEdit />
                            Open recent
                        </MenuItem>
                        <MenuItem>
                            <Copy />
                            Duplicate
                        </MenuItem>

                        <MenuSubmenu>
                            <MenuSubmenuTrigger>
                                <Download />
                                Import
                                <MenuSubmenuIndicator>
                                    <ChevronRight className="size-3.5" />
                                </MenuSubmenuIndicator>
                            </MenuSubmenuTrigger>
                            <MenuPortal>
                                <MenuPositioner>
                                    <MenuPopup className="w-44">
                                        <MenuList>
                                            <MenuGroup>
                                                <MenuItem>
                                                    <File />
                                                    From file
                                                </MenuItem>
                                                <MenuItem>
                                                    <Cloud />
                                                    From cloud
                                                </MenuItem>
                                                <MenuItem>
                                                    <Globe />
                                                    From URL
                                                </MenuItem>
                                            </MenuGroup>
                                        </MenuList>
                                    </MenuPopup>
                                </MenuPositioner>
                            </MenuPortal>
                        </MenuSubmenu>

                        <MenuSubmenu>
                            <MenuSubmenuTrigger>
                                <FileExport />
                                Export
                                <MenuSubmenuIndicator>
                                    <ChevronRight className="size-3.5" />
                                </MenuSubmenuIndicator>
                            </MenuSubmenuTrigger>
                            <MenuPortal>
                                <MenuPositioner>
                                    <MenuPopup className="w-44">
                                        <MenuList>
                                            <MenuGroup>
                                                <MenuItem>PDF</MenuItem>
                                                <MenuItem>Word</MenuItem>
                                                <MenuItem>Markdown</MenuItem>
                                                <MenuItem>HTML</MenuItem>

                                                <MenuSubmenu>
                                                    <MenuSubmenuTrigger>
                                                        More
                                                        <MenuSubmenuIndicator>
                                                            <ChevronRight className="size-3.5" />
                                                        </MenuSubmenuIndicator>
                                                    </MenuSubmenuTrigger>
                                                    <MenuPortal>
                                                        <MenuPositioner>
                                                            <MenuPopup className="w-40">
                                                                <MenuList>
                                                                    <MenuGroup>
                                                                        <MenuItem>EPUB</MenuItem>
                                                                        <MenuItem>RTF</MenuItem>
                                                                        <MenuItem>LaTeX</MenuItem>
                                                                        <MenuItem>Plain Text</MenuItem>
                                                                    </MenuGroup>
                                                                </MenuList>
                                                            </MenuPopup>
                                                        </MenuPositioner>
                                                    </MenuPortal>
                                                </MenuSubmenu>
                                            </MenuGroup>
                                        </MenuList>
                                    </MenuPopup>
                                </MenuPositioner>
                            </MenuPortal>
                        </MenuSubmenu>

                        <MenuSubmenu>
                            <MenuSubmenuTrigger>
                                <ShareAlt />
                                Share
                                <MenuSubmenuIndicator>
                                    <ChevronRight className="size-3.5" />
                                </MenuSubmenuIndicator>
                            </MenuSubmenuTrigger>
                            <MenuPortal>
                                <MenuPositioner>
                                    <MenuPopup className="w-40">
                                        <MenuList>
                                            <MenuGroup>
                                                <MenuItem>
                                                    <Send />
                                                    Send via email
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link />
                                                    Copy link
                                                </MenuItem>
                                            </MenuGroup>

                                            <MenuSeparator />

                                            <MenuGroup>
                                                <MenuLabel>Social</MenuLabel>
                                                <MenuItem>
                                                    <Twitter />
                                                    Twitter
                                                </MenuItem>
                                                <MenuItem>
                                                    <Facebook />
                                                    Facebook
                                                </MenuItem>
                                                <MenuItem>
                                                    <Linkedin />
                                                    LinkedIn
                                                </MenuItem>
                                            </MenuGroup>
                                        </MenuList>
                                    </MenuPopup>
                                </MenuPositioner>
                            </MenuPortal>
                        </MenuSubmenu>

                        <MenuItem>
                            <Pencil />
                            Rename
                        </MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    );
}

```

## Related

### Sub-components

See [Primitive API](../../primitive/components/menu.md#api) for `MenuRoot`, `MenuTrigger`, `MenuPortal`, `MenuPositioner`, `MenuPopup`, `MenuArrow`, `MenuList`, `MenuGroup`, `MenuLabel`, `MenuSeparator`, `MenuItem`, `MenuCheckboxItem`, `MenuRadioItemGroup`, `MenuRadioItem`, `MenuSubmenu`, `MenuSubmenuTrigger`, `MenuIndicator` props.

### Hooks

See [Headless API](../../headless/components/menu.md#api) for `useMenu` and `useMenuSubmenu` hook documentation.

### Accessibility

### Screen Reader

`Menu` follows the WAI-ARIA Menu Button pattern. The trigger uses `aria-haspopup="true"` and `aria-expanded` reflecting the open state. The list uses `role="menu"`; items use `menuitem`, `menuitemcheckbox`, or `menuitemradio` based on their type. `aria-checked` is applied to checkable items. `MenuLabel` inside `MenuGroup` is wired to the group via `aria-labelledby` automatically.

### Keyboard Support

| Key                          | Function                                                               |
| ---------------------------- | ---------------------------------------------------------------------- |
| `space` / `enter` on trigger | Opens the menu and moves focus to the first item.                      |
| `down arrow`                 | Moves focus to the next item.                                          |
| `up arrow`                   | Moves focus to the previous item.                                      |
| `home`                       | Moves focus to the first item.                                         |
| `end`                        | Moves focus to the last item.                                          |
| `enter` / `space`            | Activates the focused item (fires `onSelect`, then closes by default). |
| `escape`                     | Closes the menu and returns focus to the trigger.                      |
| `tab`                        | Closes the menu and moves focus to the next focusable element.         |
| Any printable character      | Jumps to the next item whose text starts with the character.           |
