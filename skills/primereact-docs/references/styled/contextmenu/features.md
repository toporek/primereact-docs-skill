# ContextMenu

ContextMenu displays an overlay menu to display actions related to a trigger, activated by a right-click event.

```tsx
import { Bell } from '@primeicons/react/bell';
import { Briefcase } from '@primeicons/react/briefcase';
import { ChartLine } from '@primeicons/react/chart-line';
import { CheckCircle } from '@primeicons/react/check-circle';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Clock } from '@primeicons/react/clock';
import { Code } from '@primeicons/react/code';
import { Cog } from '@primeicons/react/cog';
import { Database } from '@primeicons/react/database';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { Lock } from '@primeicons/react/lock';
import { Mobile } from '@primeicons/react/mobile';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Shield } from '@primeicons/react/shield';
import { Sitemap } from '@primeicons/react/sitemap';
import { Star } from '@primeicons/react/star';
import { UserPlus } from '@primeicons/react/user-plus';
import { Users } from '@primeicons/react/users';
import { ContextMenu } from '@primereact/ui/contextmenu';

export default function Preview() {
    return (
        <div className="flex justify-center">
            <ContextMenu.Root>
                <ContextMenu.Trigger className="flex justify-center items-center border-2 border-dashed border-surface-200 dark:border-surface-700 w-120 h-64">
                    Right Click Here
                </ContextMenu.Trigger>
                <ContextMenu.Portal>
                    <ContextMenu.Positioner>
                        <ContextMenu.Popup>
                            <ContextMenu.List className="w-48">
                                <ContextMenu.Item>
                                    <Home />
                                    Dashboard
                                </ContextMenu.Item>

                                <ContextMenu.Separator />

                                <ContextMenu.Label>Workspace</ContextMenu.Label>

                                <ContextMenu.Item>
                                    <ChartLine />
                                    Analytics
                                </ContextMenu.Item>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger>
                                        <Folder />
                                        Projects
                                        <ContextMenu.Indicator>
                                            <ChevronRight />
                                        </ContextMenu.Indicator>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.SubPortal>
                                        <ContextMenu.SubPositioner>
                                            <ContextMenu.SubPopup>
                                                <ContextMenu.List>
                                                    <ContextMenu.Item>
                                                        <Briefcase />
                                                        Active Projects
                                                    </ContextMenu.Item>
                                                    <ContextMenu.Item>
                                                        <Clock />
                                                        Recent
                                                    </ContextMenu.Item>

                                                    <ContextMenu.Sub>
                                                        <ContextMenu.SubTrigger>
                                                            <Star />
                                                            Favorites
                                                            <ContextMenu.Indicator>
                                                                <ChevronRight />
                                                            </ContextMenu.Indicator>
                                                        </ContextMenu.SubTrigger>
                                                        <ContextMenu.SubPortal>
                                                            <ContextMenu.SubPositioner>
                                                                <ContextMenu.SubPopup>
                                                                    <ContextMenu.List>
                                                                        <ContextMenu.Item>
                                                                            <Code />
                                                                            Website
                                                                        </ContextMenu.Item>
                                                                        <ContextMenu.Item>
                                                                            <Mobile />
                                                                            Mobile App
                                                                        </ContextMenu.Item>
                                                                        <ContextMenu.Item>
                                                                            <Database />
                                                                            API
                                                                        </ContextMenu.Item>
                                                                    </ContextMenu.List>
                                                                </ContextMenu.SubPopup>
                                                            </ContextMenu.SubPositioner>
                                                        </ContextMenu.SubPortal>
                                                    </ContextMenu.Sub>

                                                    <ContextMenu.Item>
                                                        <CheckCircle />
                                                        Completed
                                                    </ContextMenu.Item>
                                                </ContextMenu.List>
                                            </ContextMenu.SubPopup>
                                        </ContextMenu.SubPositioner>
                                    </ContextMenu.SubPortal>
                                </ContextMenu.Sub>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger>
                                        <Users />
                                        Team
                                        <ContextMenu.Indicator>
                                            <ChevronRight />
                                        </ContextMenu.Indicator>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.SubPortal>
                                        <ContextMenu.SubPositioner>
                                            <ContextMenu.SubPopup>
                                                <ContextMenu.List>
                                                    <ContextMenu.Item>
                                                        <UserPlus />
                                                        Add Member
                                                    </ContextMenu.Item>
                                                    <ContextMenu.Item>
                                                        <Sitemap />
                                                        Organization
                                                    </ContextMenu.Item>

                                                    <ContextMenu.Sub>
                                                        <ContextMenu.SubTrigger>
                                                            <Cog />
                                                            Settings
                                                            <ContextMenu.Indicator>
                                                                <ChevronRight />
                                                            </ContextMenu.Indicator>
                                                        </ContextMenu.SubTrigger>
                                                        <ContextMenu.SubPortal>
                                                            <ContextMenu.SubPositioner>
                                                                <ContextMenu.SubPopup>
                                                                    <ContextMenu.List>
                                                                        <ContextMenu.Item>
                                                                            <Shield />
                                                                            Permissions
                                                                        </ContextMenu.Item>
                                                                        <ContextMenu.Item>
                                                                            <Bell />
                                                                            Notifications
                                                                        </ContextMenu.Item>
                                                                        <ContextMenu.Item>
                                                                            <Lock />
                                                                            Privacy
                                                                        </ContextMenu.Item>
                                                                    </ContextMenu.List>
                                                                </ContextMenu.SubPopup>
                                                            </ContextMenu.SubPositioner>
                                                        </ContextMenu.SubPortal>
                                                    </ContextMenu.Sub>
                                                </ContextMenu.List>
                                            </ContextMenu.SubPopup>
                                        </ContextMenu.SubPositioner>
                                    </ContextMenu.SubPortal>
                                </ContextMenu.Sub>

                                <ContextMenu.Separator />

                                <ContextMenu.Item>
                                    <QuestionCircle />
                                    Help & Support
                                </ContextMenu.Item>
                            </ContextMenu.List>
                        </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                </ContextMenu.Portal>
            </ContextMenu.Root>
        </div>
    );
}
```

## Usage

```tsx
import { ContextMenu } from '@primereact/ui/contextmenu';
```

```tsx
<ContextMenu.Root>
    <ContextMenu.Trigger />
    <ContextMenu.Portal>
        <ContextMenu.Positioner>
            <ContextMenu.Popup>
                <ContextMenu.Arrow />
                <ContextMenu.List>
                    <ContextMenu.Label />
                    <ContextMenu.Item />
                    <ContextMenu.Separator />
                    <ContextMenu.Item type="checkbox">
                        <ContextMenu.Indicator match="checked" />
                    </ContextMenu.Item>
                    <ContextMenu.RadioGroup>
                        <ContextMenu.Item type="radio">
                            <ContextMenu.Indicator match="checked" />
                        </ContextMenu.Item>
                        <ContextMenu.Item type="radio">
                            <ContextMenu.Indicator match="checked" />
                        </ContextMenu.Item>
                    </ContextMenu.RadioGroup>
                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger>
                            <ContextMenu.Indicator />
                        </ContextMenu.SubTrigger>
                        <ContextMenu.SubPortal>
                            <ContextMenu.SubPositioner>
                                <ContextMenu.SubPopup>
                                    <ContextMenu.List>
                                        <ContextMenu.Item />
                                        <ContextMenu.Separator />
                                        <ContextMenu.Item />
                                    </ContextMenu.List>
                                </ContextMenu.SubPopup>
                            </ContextMenu.SubPositioner>
                        </ContextMenu.SubPortal>
                    </ContextMenu.Sub>
                </ContextMenu.List>
            </ContextMenu.Popup>
        </ContextMenu.Positioner>
    </ContextMenu.Portal>
</ContextMenu.Root>
```

## Examples

### Basic

Appears on right-click with a list of contextual actions.

```tsx
import { Bell } from '@primeicons/react/bell';
import { Briefcase } from '@primeicons/react/briefcase';
import { ChartLine } from '@primeicons/react/chart-line';
import { CheckCircle } from '@primeicons/react/check-circle';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Clock } from '@primeicons/react/clock';
import { Code } from '@primeicons/react/code';
import { Cog } from '@primeicons/react/cog';
import { Database } from '@primeicons/react/database';
import { Folder } from '@primeicons/react/folder';
import { Home } from '@primeicons/react/home';
import { Lock } from '@primeicons/react/lock';
import { Mobile } from '@primeicons/react/mobile';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Shield } from '@primeicons/react/shield';
import { Sitemap } from '@primeicons/react/sitemap';
import { Star } from '@primeicons/react/star';
import { UserPlus } from '@primeicons/react/user-plus';
import { Users } from '@primeicons/react/users';
import { ContextMenu } from '@primereact/ui/contextmenu';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <ContextMenu.Root>
                <ContextMenu.Trigger className="flex justify-center items-center border-2 border-dashed border-surface-200 dark:border-surface-700 w-120 h-64">
                    Right Click Here
                </ContextMenu.Trigger>
                <ContextMenu.Portal>
                    <ContextMenu.Positioner>
                        <ContextMenu.Popup>
                            <ContextMenu.List className="w-48">
                                <ContextMenu.Item>
                                    <Home />
                                    Dashboard
                                </ContextMenu.Item>

                                <ContextMenu.Separator />

                                <ContextMenu.Label>Workspace</ContextMenu.Label>

                                <ContextMenu.Item>
                                    <ChartLine />
                                    Analytics
                                </ContextMenu.Item>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger>
                                        <Folder />
                                        Projects
                                        <ContextMenu.Indicator>
                                            <ChevronRight />
                                        </ContextMenu.Indicator>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.SubPortal>
                                        <ContextMenu.SubPositioner>
                                            <ContextMenu.SubPopup>
                                                <ContextMenu.List>
                                                    <ContextMenu.Item>
                                                        <Briefcase />
                                                        Active Projects
                                                    </ContextMenu.Item>
                                                    <ContextMenu.Item>
                                                        <Clock />
                                                        Recent
                                                    </ContextMenu.Item>

                                                    <ContextMenu.Sub>
                                                        <ContextMenu.SubTrigger>
                                                            <Star />
                                                            Favorites
                                                            <ContextMenu.Indicator>
                                                                <ChevronRight />
                                                            </ContextMenu.Indicator>
                                                        </ContextMenu.SubTrigger>
                                                        <ContextMenu.SubPortal>
                                                            <ContextMenu.SubPositioner>
                                                                <ContextMenu.SubPopup>
                                                                    <ContextMenu.List>
                                                                        <ContextMenu.Item>
                                                                            <Code />
                                                                            Website
                                                                        </ContextMenu.Item>
                                                                        <ContextMenu.Item>
                                                                            <Mobile />
                                                                            Mobile App
                                                                        </ContextMenu.Item>
                                                                        <ContextMenu.Item>
                                                                            <Database />
                                                                            API
                                                                        </ContextMenu.Item>
                                                                    </ContextMenu.List>
                                                                </ContextMenu.SubPopup>
                                                            </ContextMenu.SubPositioner>
                                                        </ContextMenu.SubPortal>
                                                    </ContextMenu.Sub>

                                                    <ContextMenu.Item>
                                                        <CheckCircle />
                                                        Completed
                                                    </ContextMenu.Item>
                                                </ContextMenu.List>
                                            </ContextMenu.SubPopup>
                                        </ContextMenu.SubPositioner>
                                    </ContextMenu.SubPortal>
                                </ContextMenu.Sub>

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger>
                                        <Users />
                                        Team
                                        <ContextMenu.Indicator>
                                            <ChevronRight />
                                        </ContextMenu.Indicator>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.SubPortal>
                                        <ContextMenu.SubPositioner>
                                            <ContextMenu.SubPopup>
                                                <ContextMenu.List>
                                                    <ContextMenu.Item>
                                                        <UserPlus />
                                                        Add Member
                                                    </ContextMenu.Item>
                                                    <ContextMenu.Item>
                                                        <Sitemap />
                                                        Organization
                                                    </ContextMenu.Item>

                                                    <ContextMenu.Sub>
                                                        <ContextMenu.SubTrigger>
                                                            <Cog />
                                                            Settings
                                                            <ContextMenu.Indicator>
                                                                <ChevronRight />
                                                            </ContextMenu.Indicator>
                                                        </ContextMenu.SubTrigger>
                                                        <ContextMenu.SubPortal>
                                                            <ContextMenu.SubPositioner>
                                                                <ContextMenu.SubPopup>
                                                                    <ContextMenu.List>
                                                                        <ContextMenu.Item>
                                                                            <Shield />
                                                                            Permissions
                                                                        </ContextMenu.Item>
                                                                        <ContextMenu.Item>
                                                                            <Bell />
                                                                            Notifications
                                                                        </ContextMenu.Item>
                                                                        <ContextMenu.Item>
                                                                            <Lock />
                                                                            Privacy
                                                                        </ContextMenu.Item>
                                                                    </ContextMenu.List>
                                                                </ContextMenu.SubPopup>
                                                            </ContextMenu.SubPositioner>
                                                        </ContextMenu.SubPortal>
                                                    </ContextMenu.Sub>
                                                </ContextMenu.List>
                                            </ContextMenu.SubPopup>
                                        </ContextMenu.SubPositioner>
                                    </ContextMenu.SubPortal>
                                </ContextMenu.Sub>

                                <ContextMenu.Separator />

                                <ContextMenu.Item>
                                    <QuestionCircle />
                                    Help & Support
                                </ContextMenu.Item>
                            </ContextMenu.List>
                        </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                </ContextMenu.Portal>
            </ContextMenu.Root>
        </div>
    );
}
```

### Radio and Checkbox

The `ContextMenu` component supports checkbox and radio items through `ContextMenu.Item` with `type="checkbox"` or `type="radio"`. Use `ContextMenu.Indicator` with `match="checked"` to display check/radio icons. Radio items should be wrapped in a `ContextMenu.RadioGroup`.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Dot } from '@primeicons/react/dot';
import { ContextMenu } from '@primereact/ui/contextmenu';
import { ContextMenuItemCheckedChangeEvent, ContextMenuRadioGroupValueChangeEvent } from 'primereact/contextmenu';
import * as React from 'react';

export default function RadioCheckboxDemo() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [soundEnabled, setSoundEnabled] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
        <div className="flex justify-center">
            <ContextMenu.Root>
                <ContextMenu.Trigger className="flex justify-center items-center border-2 border-dashed border-surface-200 dark:border-surface-700 w-120 h-64">
                    Right Click Here
                </ContextMenu.Trigger>
                <ContextMenu.Portal>
                    <ContextMenu.Positioner>
                        <ContextMenu.Popup style={{ width: '14rem' }}>
                            <ContextMenu.List>
                                <ContextMenu.Item>Overview</ContextMenu.Item>

                                <ContextMenu.Separator />

                                <ContextMenu.Label>Preferences</ContextMenu.Label>

                                <ContextMenu.Item
                                    type="checkbox"
                                    checked={notificationsEnabled}
                                    onCheckedChange={(e: ContextMenuItemCheckedChangeEvent) => setNotificationsEnabled(e.value)}
                                >
                                    <ContextMenu.Indicator match="checked">
                                        <Check />
                                    </ContextMenu.Indicator>
                                    Enable Notifications
                                </ContextMenu.Item>

                                <ContextMenu.Item
                                    type="checkbox"
                                    checked={soundEnabled}
                                    onCheckedChange={(e: ContextMenuItemCheckedChangeEvent) => setSoundEnabled(e.value)}
                                >
                                    <ContextMenu.Indicator match="checked">
                                        <Check />
                                    </ContextMenu.Indicator>
                                    Enable Sound
                                </ContextMenu.Item>

                                <ContextMenu.Separator />

                                <ContextMenu.Label>Appearance</ContextMenu.Label>

                                <ContextMenu.RadioGroup
                                    value={theme}
                                    onValueChange={(e: ContextMenuRadioGroupValueChangeEvent) => setTheme(e.value as string)}
                                >
                                    <ContextMenu.Item type="radio" value="light">
                                        <ContextMenu.Indicator match="checked">
                                            <Dot />
                                        </ContextMenu.Indicator>
                                        Light Mode
                                    </ContextMenu.Item>
                                    <ContextMenu.Item type="radio" value="dark">
                                        <ContextMenu.Indicator match="checked">
                                            <Dot />
                                        </ContextMenu.Indicator>
                                        Dark Mode
                                    </ContextMenu.Item>
                                    <ContextMenu.Item type="radio" value="system">
                                        <ContextMenu.Indicator match="checked">
                                            <Dot />
                                        </ContextMenu.Indicator>
                                        System Default
                                    </ContextMenu.Item>
                                </ContextMenu.RadioGroup>

                                <ContextMenu.Separator />

                                <ContextMenu.Item>Settings</ContextMenu.Item>
                            </ContextMenu.List>
                        </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                </ContextMenu.Portal>
            </ContextMenu.Root>
        </div>
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
                                <ContextMenu.Item>
                                    <Home />
                                    Back
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <Refresh />
                                    Reload
                                </ContextMenu.Item>

                                <ContextMenu.Separator />

                                <ContextMenu.Item>
                                    <Copy />
                                    Copy
                                </ContextMenu.Item>
                                <ContextMenu.Item>
                                    <Clipboard />
                                    Paste
                                </ContextMenu.Item>

                                <ContextMenu.Separator />

                                <ContextMenu.Sub>
                                    <ContextMenu.SubTrigger>
                                        <Folder />
                                        View
                                        <ContextMenu.Indicator>
                                            <ChevronRight />
                                        </ContextMenu.Indicator>
                                    </ContextMenu.SubTrigger>
                                    <ContextMenu.SubPortal>
                                        <ContextMenu.SubPositioner>
                                            <ContextMenu.SubPopup>
                                                <ContextMenu.List>
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
                                                </ContextMenu.List>
                                            </ContextMenu.SubPopup>
                                        </ContextMenu.SubPositioner>
                                    </ContextMenu.SubPortal>
                                </ContextMenu.Sub>

                                <ContextMenu.Separator />

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
                            </ContextMenu.List>
                        </ContextMenu.Popup>
                    </ContextMenu.Positioner>
                </ContextMenu.Portal>
            </ContextMenu.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/contextmenu/features.md#api) for `ContextMenuRoot`, `ContextMenuItem`, `ContextMenuList`, `ContextMenuSub`, `ContextMenuSubTrigger`, `ContextMenuSubPortal`, `ContextMenuSubPositioner`, `ContextMenuSubPopup`, `ContextMenuIndicator`, `ContextMenuLabel`, `ContextMenuSeparator`, `ContextMenuTrigger`, `ContextMenuPortal`, `ContextMenuPositioner`, `ContextMenuPopup`, `ContextMenuArrow`, `ContextMenuRadioGroup` component documentation.

### Hooks

See [Headless API](../../headless/contextmenu/features.md#api) for `useContextMenu` and `useContextMenuSub` hook documentation.

## Accessibility

See [ContextMenu Primitive](../../primitive/contextmenu/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
