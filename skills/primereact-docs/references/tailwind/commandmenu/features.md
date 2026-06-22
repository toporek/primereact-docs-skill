# CommandMenu

CommandMenu is a command palette component for searching and executing actions.

```tsx
'use client';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import {
    CommandMenu,
    CommandMenuEmpty,
    CommandMenuFooter,
    CommandMenuGroup,
    CommandMenuGroupHeader,
    CommandMenuHeader,
    CommandMenuInput,
    CommandMenuItem,
    CommandMenuList
} from '@/components/ui/commandmenu';
import type { CommandMenuListInstance } from 'primereact/commandmenu';

const commands = [
    {
        group: 'recents',
        items: [
            { label: 'Check For Updates', value: 'check for updates', keywords: ['check', 'updates'] },
            { label: 'Open Settings', value: 'open settings' },
            { label: 'Search Files', value: 'search files' },
            { label: 'Open Terminal', value: 'open terminal' },
            { label: 'View History', value: 'view history', keywords: ['history', 'recent'] },
            { label: 'Open Chat', value: 'open chat' }
        ]
    },
    {
        group: 'files',
        items: [
            { label: 'New File', value: 'new file' },
            { label: 'New Folder', value: 'new folder' },
            { label: 'Save All', value: 'save-all' },
            { label: 'Change Theme', value: 'change theme' },
            { label: 'Run Task', value: 'run-task' },
            { label: 'Stop Task', value: 'stop task' },
            { label: 'Export Project', value: 'export project' },
            { label: 'Import Project', value: 'import project' },
            { label: 'Delete File', value: 'delete file' },
            { label: 'Duplicate File', value: 'duplicate file' }
        ]
    },
    {
        group: 'source',
        items: [
            { label: 'Git: Commit', value: 'git commit' },
            { label: 'Git: Push', value: 'git push' },
            { label: 'Git: Pull', value: 'git pull' },
            { label: 'Switch Account', value: 'switch account' },
            { label: 'Open Documentation', value: 'open documentation' },
            { label: 'Git: Sync', value: 'git sync' },
            { label: 'Git: Create Branch', value: 'git create branch' },
            { label: 'Git: Create Tag', value: 'git create tag' }
        ]
    },
    {
        group: 'editor',
        items: [
            { label: 'Align Left', value: 'align left' },
            { label: 'Align Center', value: 'align center' },
            { label: 'Align Right', value: 'align right' },
            { label: 'Toggle Bold', value: 'toggle bold' },
            { label: 'Toggle Italic', value: 'toggle italic' },
            { label: 'Insert Link', value: 'insert link' },
            { label: 'Insert Image', value: 'insert image' },
            { label: 'Insert List', value: 'insert list' }
        ]
    },
    {
        group: 'navigation',
        items: [
            { label: 'Go to Home', value: 'go to home' },
            { label: 'Go Back', value: 'go back' },
            { label: 'Go Forward', value: 'go forward' },
            { label: 'Open Explorer', value: 'open explorer' },
            { label: 'View Bookmarks', value: 'view bookmarks' },
            { label: 'Open Minimap', value: 'open minimap' }
        ]
    },
    {
        group: 'view',
        items: [
            { label: 'Toggle Preview', value: 'toggle preview' },
            { label: 'Maximize Window', value: 'maximize window' },
            { label: 'Minimize Window', value: 'minimize window' },
            { label: 'Grid View', value: 'grid view' },
            { label: 'List View', value: 'list view' },
            { label: 'Light Mode', value: 'light mode' },
            { label: 'Dark Mode', value: 'dark mode' }
        ]
    },
    {
        group: 'tools',
        items: [
            { label: 'Open Calculator', value: 'open calculator' },
            { label: 'Open Calendar', value: 'open calendar' },
            { label: 'Open Timer', value: 'open timer' },
            { label: 'View Analytics', value: 'view analytics' },
            { label: 'View Trends', value: 'view trends' },
            { label: 'Open Database', value: 'open database' }
        ]
    }
];

export default function Preview() {
    return (
        <CommandMenu
            options={commands}
            optionLabel="label"
            optionValue="value"
            optionGroupLabel="group"
            optionGroupChildren="items"
            optionKeywords="keywords"
            className="mx-auto"
        >
            <CommandMenuHeader>
                <CommandMenuInput placeholder="Search for commands..." />
            </CommandMenuHeader>
            <CommandMenuEmpty>No results found</CommandMenuEmpty>
            <CommandMenuList>
                {({ commandmenu }: CommandMenuListInstance) =>
                    ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                        <CommandMenuGroup key={gi}>
                            <CommandMenuGroupHeader>{group.group}</CommandMenuGroupHeader>
                            {group.items.map((item, ii) => (
                                <CommandMenuItem key={ii} option={item}>
                                    {item.label}
                                </CommandMenuItem>
                            ))}
                        </CommandMenuGroup>
                    ))
                }
            </CommandMenuList>
            <CommandMenuFooter className="justify-end">
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowUp />
                    </kbd>
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowDown />
                    </kbd>
                    Navigate
                </span>
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        ↵
                    </kbd>
                    Select
                </span>
            </CommandMenuFooter>
        </CommandMenu>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/commandmenu
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { CommandMenu, CommandMenuEmpty, CommandMenuFooter, CommandMenuGroup, CommandMenuGroupHeader, CommandMenuHeader, CommandMenuInput, CommandMenuItem, CommandMenuList } from '@/components/ui/commandmenu';
```

```tsx
<CommandMenu options={items} optionLabel="label" optionValue="value" optionGroupLabel="group" optionGroupChildren="items">
    <CommandMenuHeader>
        <CommandMenuInput placeholder="Search..." />
    </CommandMenuHeader>
    <CommandMenuEmpty>No results found</CommandMenuEmpty>
    <CommandMenuList>
        {({ commandmenu }) =>
            commandmenu?.filteredOptions?.map((group, gi) => (
                <CommandMenuGroup key={gi}>
                    <CommandMenuGroupHeader>{group.group}</CommandMenuGroupHeader>
                    {group.items.map((item, ii) => (
                        <CommandMenuItem key={ii} option={item}>
                            {item.label}
                        </CommandMenuItem>
                    ))}
                </CommandMenuGroup>
            ))
        }
    </CommandMenuList>
    <CommandMenuFooter />
</CommandMenu>
```

## Examples

### Basic

Quickly search and execute actions from a floating menu.

```tsx
'use client';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import {
    CommandMenu,
    CommandMenuEmpty,
    CommandMenuFooter,
    CommandMenuGroup,
    CommandMenuGroupHeader,
    CommandMenuHeader,
    CommandMenuInput,
    CommandMenuItem,
    CommandMenuList
} from '@/components/ui/commandmenu';
import type { CommandMenuListInstance } from 'primereact/commandmenu';

export default function BasicDemo() {
    return (
        <CommandMenu
            options={commands}
            optionLabel="label"
            optionValue="value"
            optionGroupLabel="group"
            optionGroupChildren="items"
            optionKeywords="keywords"
            className="mx-auto"
        >
            <CommandMenuHeader>
                <CommandMenuInput placeholder="Search for commands..." />
            </CommandMenuHeader>
            <CommandMenuEmpty>No results found</CommandMenuEmpty>
            <CommandMenuList>
                {({ commandmenu }: CommandMenuListInstance) =>
                    ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                        <CommandMenuGroup key={gi}>
                            <CommandMenuGroupHeader>{group.group}</CommandMenuGroupHeader>
                            {group.items.map((item, ii) => (
                                <CommandMenuItem key={ii} option={item}>
                                    {item.label}
                                </CommandMenuItem>
                            ))}
                        </CommandMenuGroup>
                    ))
                }
            </CommandMenuList>
            <CommandMenuFooter className="justify-end">
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowUp />
                    </kbd>
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowDown />
                    </kbd>
                    Navigate
                </span>
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        ↵
                    </kbd>
                    Select
                </span>
            </CommandMenuFooter>
        </CommandMenu>
    );
}

const commands = [
    {
        group: 'recents',
        items: [
            { label: 'Check For Updates', value: 'check for updates', keywords: ['check', 'updates'] },
            { label: 'Open Settings', value: 'open settings' },
            { label: 'Search Files', value: 'search files' },
            { label: 'Open Terminal', value: 'open terminal' },
            { label: 'View History', value: 'view history', keywords: ['history', 'recent'] },
            { label: 'Open Chat', value: 'open chat' }
        ]
    },
    {
        group: 'files',
        items: [
            { label: 'New File', value: 'new file' },
            { label: 'New Folder', value: 'new folder' },
            { label: 'Save All', value: 'save-all' },
            { label: 'Change Theme', value: 'change theme' },
            { label: 'Run Task', value: 'run-task' },
            { label: 'Stop Task', value: 'stop task' },
            { label: 'Export Project', value: 'export project' },
            { label: 'Import Project', value: 'import project' },
            { label: 'Delete File', value: 'delete file' },
            { label: 'Duplicate File', value: 'duplicate file' }
        ]
    },
    {
        group: 'source',
        items: [
            { label: 'Git: Commit', value: 'git commit' },
            { label: 'Git: Push', value: 'git push' },
            { label: 'Git: Pull', value: 'git pull' },
            { label: 'Switch Account', value: 'switch account' },
            { label: 'Open Documentation', value: 'open documentation' },
            { label: 'Git: Sync', value: 'git sync' },
            { label: 'Git: Create Branch', value: 'git create branch' },
            { label: 'Git: Create Tag', value: 'git create tag' }
        ]
    },
    {
        group: 'editor',
        items: [
            { label: 'Align Left', value: 'align left' },
            { label: 'Align Center', value: 'align center' },
            { label: 'Align Right', value: 'align right' },
            { label: 'Toggle Bold', value: 'toggle bold' },
            { label: 'Toggle Italic', value: 'toggle italic' },
            { label: 'Insert Link', value: 'insert link' },
            { label: 'Insert Image', value: 'insert image' },
            { label: 'Insert List', value: 'insert list' }
        ]
    },
    {
        group: 'navigation',
        items: [
            { label: 'Go to Home', value: 'go to home' },
            { label: 'Go Back', value: 'go back' },
            { label: 'Go Forward', value: 'go forward' },
            { label: 'Open Explorer', value: 'open explorer' },
            { label: 'View Bookmarks', value: 'view bookmarks' },
            { label: 'Open Minimap', value: 'open minimap' }
        ]
    },
    {
        group: 'view',
        items: [
            { label: 'Toggle Preview', value: 'toggle preview' },
            { label: 'Maximize Window', value: 'maximize window' },
            { label: 'Minimize Window', value: 'minimize window' },
            { label: 'Grid View', value: 'grid view' },
            { label: 'List View', value: 'list view' },
            { label: 'Light Mode', value: 'light mode' },
            { label: 'Dark Mode', value: 'dark mode' }
        ]
    },
    {
        group: 'tools',
        items: [
            { label: 'Open Calculator', value: 'open calculator' },
            { label: 'Open Calendar', value: 'open calendar' },
            { label: 'Open Timer', value: 'open timer' },
            { label: 'View Analytics', value: 'view analytics' },
            { label: 'View Trends', value: 'view trends' },
            { label: 'Open Database', value: 'open database' }
        ]
    }
];
```

### Filter

Use the `filter` prop to customize the filtering of the items.

```tsx
'use client';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import {
    CommandMenu,
    CommandMenuEmpty,
    CommandMenuFooter,
    CommandMenuGroup,
    CommandMenuGroupHeader,
    CommandMenuHeader,
    CommandMenuInput,
    CommandMenuItem,
    CommandMenuList
} from '@/components/ui/commandmenu';
import type { CommandMenuListInstance } from 'primereact/commandmenu';

export default function FuzeDemo() {
    return (
        <CommandMenu
            options={commands}
            optionLabel="label"
            optionValue="value"
            optionGroupLabel="group"
            optionGroupChildren="items"
            optionKeywords="keywords"
            filter={(value: string, search: string) => {
                if (!search) return 1;

                value = value.toLowerCase();
                search = search.toLowerCase();

                let tIndex = 0;
                let sIndex = 0;
                let score = 0;

                while (tIndex < value.length && sIndex < search.length) {
                    if (value[tIndex] === search[sIndex]) {
                        score += 1;
                        sIndex++;
                    }

                    tIndex++;
                }

                return sIndex === search.length ? score / value.length : 0;
            }}
            className="mx-auto"
        >
            <CommandMenuHeader>
                <CommandMenuInput placeholder="Search for commands..." />
            </CommandMenuHeader>
            <CommandMenuEmpty>No results found.</CommandMenuEmpty>
            <CommandMenuList>
                {({ commandmenu }: CommandMenuListInstance) =>
                    ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                        <CommandMenuGroup key={gi}>
                            <CommandMenuGroupHeader>{group.group}</CommandMenuGroupHeader>
                            {group.items.map((item, ii) => (
                                <CommandMenuItem key={ii} option={item}>
                                    {item.label}
                                </CommandMenuItem>
                            ))}
                        </CommandMenuGroup>
                    ))
                }
            </CommandMenuList>
            <CommandMenuFooter className="justify-end">
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowUp />
                    </kbd>
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowDown />
                    </kbd>
                    Navigate
                </span>
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        ↵
                    </kbd>
                    Select
                </span>
            </CommandMenuFooter>
        </CommandMenu>
    );
}

const commands = [
    {
        group: 'recents',
        items: [
            { label: 'Check For Updates', value: 'check for updates', keywords: ['check', 'updates'] },
            { label: 'Open Settings', value: 'open settings' },
            { label: 'Search Files', value: 'search files' },
            { label: 'Open Terminal', value: 'open terminal' },
            { label: 'View History', value: 'view history', keywords: ['history', 'recent'] },
            { label: 'Open Chat', value: 'open chat' }
        ]
    },
    {
        group: 'files',
        items: [
            { label: 'New File', value: 'new file' },
            { label: 'New Folder', value: 'new folder' },
            { label: 'Save All', value: 'save-all' },
            { label: 'Change Theme', value: 'change theme' },
            { label: 'Run Task', value: 'run-task' },
            { label: 'Stop Task', value: 'stop task' },
            { label: 'Export Project', value: 'export project' },
            { label: 'Import Project', value: 'import project' },
            { label: 'Delete File', value: 'delete file' },
            { label: 'Duplicate File', value: 'duplicate file' }
        ]
    },
    {
        group: 'source',
        items: [
            { label: 'Git: Commit', value: 'git commit' },
            { label: 'Git: Push', value: 'git push' },
            { label: 'Git: Pull', value: 'git pull' },
            { label: 'Switch Account', value: 'switch account' },
            { label: 'Open Documentation', value: 'open documentation' },
            { label: 'Git: Sync', value: 'git sync' },
            { label: 'Git: Create Branch', value: 'git create branch' },
            { label: 'Git: Create Tag', value: 'git create tag' }
        ]
    },
    {
        group: 'editor',
        items: [
            { label: 'Align Left', value: 'align left' },
            { label: 'Align Center', value: 'align center' },
            { label: 'Align Right', value: 'align right' },
            { label: 'Toggle Bold', value: 'toggle bold' },
            { label: 'Toggle Italic', value: 'toggle italic' },
            { label: 'Insert Link', value: 'insert link' },
            { label: 'Insert Image', value: 'insert image' },
            { label: 'Insert List', value: 'insert list' }
        ]
    },
    {
        group: 'navigation',
        items: [
            { label: 'Go to Home', value: 'go to home' },
            { label: 'Go Back', value: 'go back' },
            { label: 'Go Forward', value: 'go forward' },
            { label: 'Open Explorer', value: 'open explorer' },
            { label: 'View Bookmarks', value: 'view bookmarks' },
            { label: 'Open Minimap', value: 'open minimap' }
        ]
    },
    {
        group: 'view',
        items: [
            { label: 'Toggle Preview', value: 'toggle preview' },
            { label: 'Maximize Window', value: 'maximize window' },
            { label: 'Minimize Window', value: 'minimize window' },
            { label: 'Grid View', value: 'grid view' },
            { label: 'List View', value: 'list view' },
            { label: 'Light Mode', value: 'light mode' },
            { label: 'Dark Mode', value: 'dark mode' }
        ]
    },
    {
        group: 'tools',
        items: [
            { label: 'Open Calculator', value: 'open calculator' },
            { label: 'Open Calendar', value: 'open calendar' },
            { label: 'Open Timer', value: 'open timer' },
            { label: 'View Analytics', value: 'view analytics' },
            { label: 'View Trends', value: 'view trends' },
            { label: 'Open Database', value: 'open database' }
        ]
    }
];
```

### Controlled

```tsx
'use client';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import {
    CommandMenu,
    CommandMenuEmpty,
    CommandMenuFooter,
    CommandMenuGroup,
    CommandMenuGroupHeader,
    CommandMenuHeader,
    CommandMenuInput,
    CommandMenuItem,
    CommandMenuList
} from '@/components/ui/commandmenu';
import type { CommandMenuListInstance } from 'primereact/commandmenu';
import * as React from 'react';

export default function ControlledDemo() {
    const [search, setSearch] = React.useState('');

    return (
        <CommandMenu
            options={commands}
            optionLabel="label"
            optionValue="value"
            optionGroupLabel="group"
            optionGroupChildren="items"
            optionKeywords="keywords"
            search={search}
            onSearchChange={(e: { query: string }) => setSearch(e.query)}
            className="mx-auto"
        >
            <CommandMenuHeader>
                <CommandMenuInput value={search} onValueChange={(val: string) => setSearch(val)} placeholder="Search for commands..." />
            </CommandMenuHeader>

            <CommandMenuEmpty>
                No results found for <span className="text-surface-900 dark:text-surface-0">&quot;{search}&quot;</span>
            </CommandMenuEmpty>
            <CommandMenuList>
                {({ commandmenu }: CommandMenuListInstance) =>
                    ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                        <CommandMenuGroup key={gi}>
                            <CommandMenuGroupHeader>{group.group}</CommandMenuGroupHeader>
                            {group.items.map((item, ii) => (
                                <CommandMenuItem key={ii} option={item}>
                                    {item.label}
                                </CommandMenuItem>
                            ))}
                        </CommandMenuGroup>
                    ))
                }
            </CommandMenuList>
            <CommandMenuFooter className="justify-end">
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowUp />
                    </kbd>
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowDown />
                    </kbd>
                    Navigate
                </span>
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        ↵
                    </kbd>
                    Select
                </span>
            </CommandMenuFooter>
        </CommandMenu>
    );
}

const commands = [
    {
        group: 'recents',
        items: [
            { label: 'Check For Updates', value: 'check for updates', keywords: ['check', 'updates'] },
            { label: 'Open Settings', value: 'open settings' },
            { label: 'Search Files', value: 'search files' },
            { label: 'Open Terminal', value: 'open terminal' },
            { label: 'View History', value: 'view history', keywords: ['history', 'recent'] },
            { label: 'Open Chat', value: 'open chat' }
        ]
    },
    {
        group: 'files',
        items: [
            { label: 'New File', value: 'new file' },
            { label: 'New Folder', value: 'new folder' },
            { label: 'Save All', value: 'save-all' },
            { label: 'Change Theme', value: 'change theme' },
            { label: 'Run Task', value: 'run-task' },
            { label: 'Stop Task', value: 'stop task' },
            { label: 'Export Project', value: 'export project' },
            { label: 'Import Project', value: 'import project' },
            { label: 'Delete File', value: 'delete file' },
            { label: 'Duplicate File', value: 'duplicate file' }
        ]
    },
    {
        group: 'source',
        items: [
            { label: 'Git: Commit', value: 'git commit' },
            { label: 'Git: Push', value: 'git push' },
            { label: 'Git: Pull', value: 'git pull' },
            { label: 'Switch Account', value: 'switch account' },
            { label: 'Open Documentation', value: 'open documentation' },
            { label: 'Git: Sync', value: 'git sync' },
            { label: 'Git: Create Branch', value: 'git create branch' },
            { label: 'Git: Create Tag', value: 'git create tag' }
        ]
    },
    {
        group: 'editor',
        items: [
            { label: 'Align Left', value: 'align left' },
            { label: 'Align Center', value: 'align center' },
            { label: 'Align Right', value: 'align right' },
            { label: 'Toggle Bold', value: 'toggle bold' },
            { label: 'Toggle Italic', value: 'toggle italic' },
            { label: 'Insert Link', value: 'insert link' },
            { label: 'Insert Image', value: 'insert image' },
            { label: 'Insert List', value: 'insert list' }
        ]
    },
    {
        group: 'navigation',
        items: [
            { label: 'Go to Home', value: 'go to home' },
            { label: 'Go Back', value: 'go back' },
            { label: 'Go Forward', value: 'go forward' },
            { label: 'Open Explorer', value: 'open explorer' },
            { label: 'View Bookmarks', value: 'view bookmarks' },
            { label: 'Open Minimap', value: 'open minimap' }
        ]
    },
    {
        group: 'view',
        items: [
            { label: 'Toggle Preview', value: 'toggle preview' },
            { label: 'Maximize Window', value: 'maximize window' },
            { label: 'Minimize Window', value: 'minimize window' },
            { label: 'Grid View', value: 'grid view' },
            { label: 'List View', value: 'list view' },
            { label: 'Light Mode', value: 'light mode' },
            { label: 'Dark Mode', value: 'dark mode' }
        ]
    },
    {
        group: 'tools',
        items: [
            { label: 'Open Calculator', value: 'open calculator' },
            { label: 'Open Calendar', value: 'open calendar' },
            { label: 'Open Timer', value: 'open timer' },
            { label: 'View Analytics', value: 'view analytics' },
            { label: 'View Trends', value: 'view trends' },
            { label: 'Open Database', value: 'open database' }
        ]
    }
];
```

### With Dialog

Use the `CommandMenu` component inside a `Dialog` component to create a command palette that is displayed in a dialog. `useHotKey` hook is used to open the dialog with the `meta+k` shortcut.

```tsx
'use client';
import {
    CommandMenu,
    CommandMenuEmpty,
    CommandMenuFooter,
    CommandMenuGroup,
    CommandMenuGroupHeader,
    CommandMenuHeader,
    CommandMenuInput,
    CommandMenuItem,
    CommandMenuList
} from '@/components/ui/commandmenu';
import { Dialog, DialogBackdrop, DialogPopup, DialogPortal, DialogTrigger } from '@/components/ui/dialog';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import { useHotKey } from '@primereact/hooks';
import type { CommandMenuListInstance } from 'primereact/commandmenu';
import { DialogRootChangeEvent } from 'primereact/dialog';
import * as React from 'react';

export default function BasicDemo() {
    const [search, setSearch] = React.useState('');
    const [open, setOpen] = React.useState(false);

    useHotKey('meta+k', () => setOpen(true));

    return (
        <div className="flex items-center justify-center py-8">
            <Dialog
                open={open}
                onOpenChange={(e: DialogRootChangeEvent) => {
                    setOpen(!!e.value);
                    if (!e.value) setSearch('');
                }}
            >
                <DialogTrigger className="flex items-center gap-2">
                    Press{' '}
                    <kbd className="bg-surface-100 dark:bg-surface-950 px-2 py-1 rounded-md border border-surface-200 dark:border-surface-700/50 text-sm">
                        CTRL/⌘ + K
                    </kbd>
                </DialogTrigger>
                <DialogPortal>
                    <DialogBackdrop />
                    <DialogPopup className="overflow-hidden max-w-md w-full">
                        <CommandMenu
                            className="rounded-none border-none"
                            options={commands}
                            search={search}
                            optionLabel="label"
                            optionValue="value"
                            optionGroupLabel="group"
                            optionGroupChildren="items"
                            optionKeywords="keywords"
                        >
                            <CommandMenuHeader>
                                <CommandMenuInput
                                    autoFocus
                                    value={search}
                                    onValueChange={(val: string) => setSearch(val)}
                                    placeholder="Search for commands..."
                                />
                            </CommandMenuHeader>
                            <CommandMenuEmpty>
                                No results found for <span className="text-surface-900 dark:text-surface-0">&quot;{search}&quot;</span>
                            </CommandMenuEmpty>
                            <CommandMenuList>
                                {({ commandmenu }: CommandMenuListInstance) =>
                                    ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                                        <CommandMenuGroup key={gi}>
                                            <CommandMenuGroupHeader>{group.group}</CommandMenuGroupHeader>
                                            {group.items.map((item, ii) => (
                                                <CommandMenuItem key={ii} option={item}>
                                                    {item.label}
                                                </CommandMenuItem>
                                            ))}
                                        </CommandMenuGroup>
                                    ))
                                }
                            </CommandMenuList>
                            <CommandMenuFooter className="justify-end">
                                <span className="flex items-center gap-1 text-surface-500 text-xs">
                                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                                        <ArrowUp />
                                    </kbd>
                                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                                        <ArrowDown />
                                    </kbd>
                                    Navigate
                                </span>
                                <span className="flex items-center gap-1 text-surface-500 text-xs">
                                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                                        ↵
                                    </kbd>
                                    Select
                                </span>
                            </CommandMenuFooter>
                        </CommandMenu>
                    </DialogPopup>
                </DialogPortal>
            </Dialog>
        </div>
    );
}

const commands = [
    {
        group: 'recents',
        items: [
            { label: 'Check For Updates', value: 'check for updates', keywords: ['check', 'updates'] },
            { label: 'Open Settings', value: 'open settings' },
            { label: 'Search Files', value: 'search files' },
            { label: 'Open Terminal', value: 'open terminal' },
            { label: 'View History', value: 'view history', keywords: ['history', 'recent'] },
            { label: 'Open Chat', value: 'open chat' }
        ]
    },
    {
        group: 'files',
        items: [
            { label: 'New File', value: 'new file' },
            { label: 'New Folder', value: 'new folder' },
            { label: 'Save All', value: 'save-all' },
            { label: 'Change Theme', value: 'change theme' },
            { label: 'Run Task', value: 'run-task' },
            { label: 'Stop Task', value: 'stop task' },
            { label: 'Export Project', value: 'export project' },
            { label: 'Import Project', value: 'import project' },
            { label: 'Delete File', value: 'delete file' },
            { label: 'Duplicate File', value: 'duplicate file' }
        ]
    },
    {
        group: 'source',
        items: [
            { label: 'Git: Commit', value: 'git commit' },
            { label: 'Git: Push', value: 'git push' },
            { label: 'Git: Pull', value: 'git pull' },
            { label: 'Switch Account', value: 'switch account' },
            { label: 'Open Documentation', value: 'open documentation' },
            { label: 'Git: Sync', value: 'git sync' },
            { label: 'Git: Create Branch', value: 'git create branch' },
            { label: 'Git: Create Tag', value: 'git create tag' }
        ]
    },
    {
        group: 'editor',
        items: [
            { label: 'Align Left', value: 'align left' },
            { label: 'Align Center', value: 'align center' },
            { label: 'Align Right', value: 'align right' },
            { label: 'Toggle Bold', value: 'toggle bold' },
            { label: 'Toggle Italic', value: 'toggle italic' },
            { label: 'Insert Link', value: 'insert link' },
            { label: 'Insert Image', value: 'insert image' },
            { label: 'Insert List', value: 'insert list' }
        ]
    },
    {
        group: 'navigation',
        items: [
            { label: 'Go to Home', value: 'go to home' },
            { label: 'Go Back', value: 'go back' },
            { label: 'Go Forward', value: 'go forward' },
            { label: 'Open Explorer', value: 'open explorer' },
            { label: 'View Bookmarks', value: 'view bookmarks' },
            { label: 'Open Minimap', value: 'open minimap' }
        ]
    },
    {
        group: 'view',
        items: [
            { label: 'Toggle Preview', value: 'toggle preview' },
            { label: 'Maximize Window', value: 'maximize window' },
            { label: 'Minimize Window', value: 'minimize window' },
            { label: 'Grid View', value: 'grid view' },
            { label: 'List View', value: 'list view' },
            { label: 'Light Mode', value: 'light mode' },
            { label: 'Dark Mode', value: 'dark mode' }
        ]
    },
    {
        group: 'tools',
        items: [
            { label: 'Open Calculator', value: 'open calculator' },
            { label: 'Open Calendar', value: 'open calendar' },
            { label: 'Open Timer', value: 'open timer' },
            { label: 'View Analytics', value: 'view analytics' },
            { label: 'View Trends', value: 'view trends' },
            { label: 'Open Database', value: 'open database' }
        ]
    }
];
```

### With ScrollArea

```tsx
'use client';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import {
    CommandMenu,
    CommandMenuEmpty,
    CommandMenuFooter,
    CommandMenuGroup,
    CommandMenuGroupHeader,
    CommandMenuHeader,
    CommandMenuInput,
    CommandMenuItem,
    CommandMenuList
} from '@/components/ui/commandmenu';
import type { CommandMenuListInstance } from 'primereact/commandmenu';
import { ScrollArea, ScrollAreaContent, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from '@/components/ui/scrollarea';

export default function WithScrollAreaDemo() {
    return (
        <CommandMenu
            options={commands}
            optionLabel="label"
            optionValue="value"
            optionGroupLabel="group"
            optionGroupChildren="items"
            optionKeywords="keywords"
            className="mx-auto"
        >
            <CommandMenuHeader>
                <CommandMenuInput placeholder="Search for commands..." />
            </CommandMenuHeader>
            <CommandMenuEmpty>No results found</CommandMenuEmpty>
            <ScrollArea className="flex-1 overflow-hidden border-none" mask>
                <ScrollAreaViewport className="p-0 scroll-p-10">
                    <ScrollAreaContent>
                        <CommandMenuList className="overflow-visible! h-auto! flex-none!">
                            {({ commandmenu }: CommandMenuListInstance) =>
                                ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                                    <CommandMenuGroup key={gi}>
                                        <CommandMenuGroupHeader>{group.group}</CommandMenuGroupHeader>
                                        {group.items.map((item, ii) => (
                                            <CommandMenuItem key={ii} option={item}>
                                                {item.label}
                                            </CommandMenuItem>
                                        ))}
                                    </CommandMenuGroup>
                                ))
                            }
                        </CommandMenuList>
                    </ScrollAreaContent>
                </ScrollAreaViewport>
                <ScrollAreaScrollbar>
                    <ScrollAreaThumb />
                </ScrollAreaScrollbar>
            </ScrollArea>
            <CommandMenuFooter className="justify-end">
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowUp />
                    </kbd>
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowDown />
                    </kbd>
                    Navigate
                </span>
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        ↵
                    </kbd>
                    Select
                </span>
            </CommandMenuFooter>
        </CommandMenu>
    );
}

const commands = [
    {
        group: 'recents',
        items: [
            { label: 'Check For Updates', value: 'check for updates', keywords: ['check', 'updates'] },
            { label: 'Open Settings', value: 'open settings' },
            { label: 'Search Files', value: 'search files' },
            { label: 'Open Terminal', value: 'open terminal' },
            { label: 'View History', value: 'view history', keywords: ['history', 'recent'] },
            { label: 'Open Chat', value: 'open chat' }
        ]
    },
    {
        group: 'files',
        items: [
            { label: 'New File', value: 'new file' },
            { label: 'New Folder', value: 'new folder' },
            { label: 'Save All', value: 'save-all' },
            { label: 'Change Theme', value: 'change theme' },
            { label: 'Run Task', value: 'run-task' },
            { label: 'Stop Task', value: 'stop task' },
            { label: 'Export Project', value: 'export project' },
            { label: 'Import Project', value: 'import project' },
            { label: 'Delete File', value: 'delete file' },
            { label: 'Duplicate File', value: 'duplicate file' }
        ]
    },
    {
        group: 'source',
        items: [
            { label: 'Git: Commit', value: 'git commit' },
            { label: 'Git: Push', value: 'git push' },
            { label: 'Git: Pull', value: 'git pull' },
            { label: 'Switch Account', value: 'switch account' },
            { label: 'Open Documentation', value: 'open documentation' },
            { label: 'Git: Sync', value: 'git sync' },
            { label: 'Git: Create Branch', value: 'git create branch' },
            { label: 'Git: Create Tag', value: 'git create tag' }
        ]
    },
    {
        group: 'editor',
        items: [
            { label: 'Align Left', value: 'align left' },
            { label: 'Align Center', value: 'align center' },
            { label: 'Align Right', value: 'align right' },
            { label: 'Toggle Bold', value: 'toggle bold' },
            { label: 'Toggle Italic', value: 'toggle italic' },
            { label: 'Insert Link', value: 'insert link' },
            { label: 'Insert Image', value: 'insert image' },
            { label: 'Insert List', value: 'insert list' }
        ]
    },
    {
        group: 'navigation',
        items: [
            { label: 'Go to Home', value: 'go to home' },
            { label: 'Go Back', value: 'go back' },
            { label: 'Go Forward', value: 'go forward' },
            { label: 'Open Explorer', value: 'open explorer' },
            { label: 'View Bookmarks', value: 'view bookmarks' },
            { label: 'Open Minimap', value: 'open minimap' }
        ]
    },
    {
        group: 'view',
        items: [
            { label: 'Toggle Preview', value: 'toggle preview' },
            { label: 'Maximize Window', value: 'maximize window' },
            { label: 'Minimize Window', value: 'minimize window' },
            { label: 'Grid View', value: 'grid view' },
            { label: 'List View', value: 'list view' },
            { label: 'Light Mode', value: 'light mode' },
            { label: 'Dark Mode', value: 'dark mode' }
        ]
    },
    {
        group: 'tools',
        items: [
            { label: 'Open Calculator', value: 'open calculator' },
            { label: 'Open Calendar', value: 'open calendar' },
            { label: 'Open Timer', value: 'open timer' },
            { label: 'View Analytics', value: 'view analytics' },
            { label: 'View Trends', value: 'view trends' },
            { label: 'Open Database', value: 'open database' }
        ]
    }
];
```

### Custom

```tsx
'use client';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import {
    CommandMenu,
    CommandMenuEmpty,
    CommandMenuFooter,
    CommandMenuGroup,
    CommandMenuGroupHeader,
    CommandMenuHeader,
    CommandMenuInput,
    CommandMenuItem,
    CommandMenuList
} from '@/components/ui/commandmenu';
import type { CommandMenuListInstance } from 'primereact/commandmenu';

export default function CustomDemo() {
    return (
        <CommandMenu
            options={commands}
            optionLabel="label"
            optionValue="value"
            optionGroupLabel="group"
            optionGroupChildren="items"
            optionKeywords="keywords"
            className="mx-auto"
        >
            <CommandMenuHeader className="px-3.75">
                <CommandMenuInput placeholder="Search for commands..." />
            </CommandMenuHeader>
            <CommandMenuEmpty>No results found</CommandMenuEmpty>
            <CommandMenuList>
                {({ commandmenu }: CommandMenuListInstance) =>
                    ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                        <CommandMenuGroup key={gi}>
                            <CommandMenuGroupHeader className="px-2.25">{group.group}</CommandMenuGroupHeader>
                            {group.items.map((item, ii) => (
                                <CommandMenuItem key={ii} option={item} className="px-2.25">
                                    <span className={`w-5 h-5 rounded-md ${item.color} flex items-center justify-center text-white`}>
                                        <i className={`pi ${item.icon} text-xs font-bold`} />
                                    </span>
                                    <span>{item.label}</span>
                                    <span className="opacity-50 ml-auto">{item.category}</span>
                                </CommandMenuItem>
                            ))}
                        </CommandMenuGroup>
                    ))
                }
            </CommandMenuList>
            <CommandMenuFooter className="justify-end px-3.75">
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowUp />
                    </kbd>
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        <ArrowDown />
                    </kbd>
                    Navigate
                </span>
                <span className="flex items-center gap-1 text-surface-500 text-xs">
                    <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                        ↵
                    </kbd>
                    Select
                </span>
            </CommandMenuFooter>
        </CommandMenu>
    );
}

const commands = [
    {
        group: 'recents',
        items: [
            {
                icon: 'pi-refresh',
                label: 'Check For Updates',
                category: 'Command',
                color: 'bg-[linear-gradient(rgb(245,83,84),rgb(235,70,70))]',
                value: 'check for updates',
                keywords: ['check', 'updates']
            },
            {
                icon: 'pi-cog',
                label: 'Open Settings',
                category: 'Command',
                color: 'bg-[linear-gradient(rgb(96,165,250),rgb(59,130,246))]',
                value: 'open settings'
            },
            {
                icon: 'pi-search',
                label: 'Search Files',
                category: 'Command',
                color: 'bg-[linear-gradient(rgb(167,139,250),rgb(139,92,246))]',
                value: 'search files'
            },
            {
                icon: 'pi-terminal',
                label: 'Open Terminal',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(148,163,184),rgb(100,116,139))]',
                value: 'open terminal'
            },
            {
                icon: 'pi-history',
                label: 'View History',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(192,132,252),rgb(168,85,247))]',
                value: 'view history',
                keywords: ['history', 'recent']
            },
            {
                icon: 'pi-comments',
                label: 'Open Chat',
                category: 'Communication',
                color: 'bg-[linear-gradient(rgb(34,211,238),rgb(6,182,212))]',
                value: 'open chat'
            }
        ]
    },
    {
        group: 'files',
        items: [
            {
                icon: 'pi-file',
                label: 'New File',
                category: 'File',
                color: 'bg-[linear-gradient(rgb(52,211,153),rgb(16,185,129))]',
                value: 'new file'
            },
            {
                icon: 'pi-folder',
                label: 'New Folder',
                category: 'File',
                color: 'bg-[linear-gradient(rgb(251,191,36),rgb(245,158,11))]',
                value: 'new folder'
            },
            {
                icon: 'pi-save',
                label: 'Save All',
                category: 'File',
                color: 'bg-[linear-gradient(rgb(34,197,94),rgb(22,163,74))]',
                value: 'save-all'
            },
            {
                icon: 'pi-palette',
                label: 'Change Theme',
                category: 'Appearance',
                color: 'bg-[linear-gradient(rgb(251,146,60),rgb(249,115,22))]',
                value: 'change theme'
            },
            {
                icon: 'pi-play',
                label: 'Run Task',
                category: 'Command',
                color: 'bg-[linear-gradient(rgb(34,197,94),rgb(21,128,61))]',
                value: 'run-task'
            },
            {
                icon: 'pi-stop',
                label: 'Stop Task',
                category: 'Command',
                color: 'bg-[linear-gradient(rgb(239,68,68),rgb(220,38,38))]',
                value: 'stop task'
            },
            {
                icon: 'pi-file-export',
                label: 'Export Project',
                category: 'File',
                color: 'bg-[linear-gradient(rgb(147,51,234),rgb(126,34,206))]',
                value: 'export project'
            },
            {
                icon: 'pi-file-import',
                label: 'Import Project',
                category: 'File',
                color: 'bg-[linear-gradient(rgb(99,102,241),rgb(79,70,229))]',
                value: 'import project'
            },
            {
                icon: 'pi-trash',
                label: 'Delete File',
                category: 'File',
                color: 'bg-[linear-gradient(rgb(239,68,68),rgb(185,28,28))]',
                value: 'delete file'
            },
            {
                icon: 'pi-copy',
                label: 'Duplicate File',
                category: 'File',
                color: 'bg-[linear-gradient(rgb(156,163,175),rgb(107,114,128))]',
                value: 'duplicate file'
            }
        ]
    },
    {
        group: 'source',
        items: [
            {
                icon: 'pi-git',
                label: 'Git: Commit',
                category: 'Source Control',
                color: 'bg-[linear-gradient(rgb(249,115,22),rgb(234,88,12))]',
                value: 'git commit'
            },
            {
                icon: 'pi-upload',
                label: 'Git: Push',
                category: 'Source Control',
                color: 'bg-[linear-gradient(rgb(14,165,233),rgb(2,132,199))]',
                value: 'git push'
            },
            {
                icon: 'pi-download',
                label: 'Git: Pull',
                category: 'Source Control',
                color: 'bg-[linear-gradient(rgb(59,130,246),rgb(37,99,235))]',
                value: 'git pull'
            },
            {
                icon: 'pi-users',
                label: 'Switch Account',
                category: 'Account',
                color: 'bg-[linear-gradient(rgb(236,72,153),rgb(219,39,119))]',
                value: 'switch account'
            },
            {
                icon: 'pi-book',
                label: 'Open Documentation',
                category: 'Help',
                color: 'bg-[linear-gradient(rgb(147,197,253),rgb(96,165,250))]',
                value: 'open documentation'
            },
            {
                icon: 'pi-sync',
                label: 'Git: Sync',
                category: 'Source Control',
                color: 'bg-[linear-gradient(rgb(74,222,128),rgb(34,197,94))]',
                value: 'git sync'
            },
            {
                icon: 'pi-code-branch',
                label: 'Git: Create Branch',
                category: 'Source Control',
                color: 'bg-[linear-gradient(rgb(251,146,60),rgb(249,115,22))]',
                value: 'git create branch'
            },
            {
                icon: 'pi-tag',
                label: 'Git: Create Tag',
                category: 'Source Control',
                color: 'bg-[linear-gradient(rgb(196,181,253),rgb(167,139,250))]',
                value: 'git create tag'
            }
        ]
    },
    {
        group: 'editor',
        items: [
            {
                icon: 'pi-align-left',
                label: 'Align Left',
                category: 'Editor',
                color: 'bg-[linear-gradient(rgb(147,197,253),rgb(59,130,246))]',
                value: 'align left'
            },
            {
                icon: 'pi-align-center',
                label: 'Align Center',
                category: 'Editor',
                color: 'bg-[linear-gradient(rgb(147,197,253),rgb(59,130,246))]',
                value: 'align center'
            },
            {
                icon: 'pi-align-right',
                label: 'Align Right',
                category: 'Editor',
                color: 'bg-[linear-gradient(rgb(147,197,253),rgb(59,130,246))]',
                value: 'align right'
            },
            {
                icon: 'pi-bold',
                label: 'Toggle Bold',
                category: 'Editor',
                color: 'bg-[linear-gradient(rgb(30,41,59),rgb(15,23,42))]',
                value: 'toggle bold'
            },
            {
                icon: 'pi-italic',
                label: 'Toggle Italic',
                category: 'Editor',
                color: 'bg-[linear-gradient(rgb(71,85,105),rgb(51,65,85))]',
                value: 'toggle italic'
            },
            {
                icon: 'pi-link',
                label: 'Insert Link',
                category: 'Editor',
                color: 'bg-[linear-gradient(rgb(59,130,246),rgb(37,99,235))]',
                value: 'insert link'
            },
            {
                icon: 'pi-image',
                label: 'Insert Image',
                category: 'Editor',
                color: 'bg-[linear-gradient(rgb(168,85,247),rgb(147,51,234))]',
                value: 'insert image'
            },
            {
                icon: 'pi-list',
                label: 'Insert List',
                category: 'Editor',
                color: 'bg-[linear-gradient(rgb(34,197,94),rgb(22,163,74))]',
                value: 'insert list'
            }
        ]
    },
    {
        group: 'navigation',
        items: [
            {
                icon: 'pi-home',
                label: 'Go to Home',
                category: 'Navigation',
                color: 'bg-[linear-gradient(rgb(96,165,250),rgb(59,130,246))]',
                value: 'go to home'
            },
            {
                icon: 'pi-arrow-left',
                label: 'Go Back',
                category: 'Navigation',
                color: 'bg-[linear-gradient(rgb(148,163,184),rgb(100,116,139))]',
                value: 'go back'
            },
            {
                icon: 'pi-arrow-right',
                label: 'Go Forward',
                category: 'Navigation',
                color: 'bg-[linear-gradient(rgb(148,163,184),rgb(100,116,139))]',
                value: 'go forward'
            },
            {
                icon: 'pi-compass',
                label: 'Open Explorer',
                category: 'Navigation',
                color: 'bg-[linear-gradient(rgb(251,191,36),rgb(245,158,11))]',
                value: 'open explorer'
            },
            {
                icon: 'pi-bookmark',
                label: 'View Bookmarks',
                category: 'Navigation',
                color: 'bg-[linear-gradient(rgb(249,115,22),rgb(234,88,12))]',
                value: 'view bookmarks'
            },
            {
                icon: 'pi-map',
                label: 'Open Minimap',
                category: 'Navigation',
                color: 'bg-[linear-gradient(rgb(52,211,153),rgb(16,185,129))]',
                value: 'open minimap'
            }
        ]
    },
    {
        group: 'view',
        items: [
            {
                icon: 'pi-eye',
                label: 'Toggle Preview',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(147,51,234),rgb(126,34,206))]',
                value: 'toggle preview'
            },
            {
                icon: 'pi-window-maximize',
                label: 'Maximize Window',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(100,116,139),rgb(71,85,105))]',
                value: 'maximize window'
            },
            {
                icon: 'pi-window-minimize',
                label: 'Minimize Window',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(148,163,184),rgb(100,116,139))]',
                value: 'minimize window'
            },
            {
                icon: 'pi-th-large',
                label: 'Grid View',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(34,197,94),rgb(22,163,74))]',
                value: 'grid view'
            },
            {
                icon: 'pi-bars',
                label: 'List View',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(59,130,246),rgb(37,99,235))]',
                value: 'list view'
            },
            {
                icon: 'pi-sun',
                label: 'Light Mode',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(253,224,71),rgb(250,204,21))]',
                value: 'light mode'
            },
            {
                icon: 'pi-moon',
                label: 'Dark Mode',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(30,41,59),rgb(15,23,42))]',
                value: 'dark mode'
            }
        ]
    },
    {
        group: 'tools',
        items: [
            {
                icon: 'pi-calculator',
                label: 'Open Calculator',
                category: 'Tools',
                color: 'bg-[linear-gradient(rgb(148,163,184),rgb(100,116,139))]',
                value: 'open calculator'
            },
            {
                icon: 'pi-calendar',
                label: 'Open Calendar',
                category: 'Tools',
                color: 'bg-[linear-gradient(rgb(96,165,250),rgb(59,130,246))]',
                value: 'open calendar'
            },
            {
                icon: 'pi-clock',
                label: 'Open Timer',
                category: 'Tools',
                color: 'bg-[linear-gradient(rgb(251,146,60),rgb(249,115,22))]',
                value: 'open timer'
            },
            {
                icon: 'pi-chart-bar',
                label: 'View Analytics',
                category: 'Tools',
                color: 'bg-[linear-gradient(rgb(34,197,94),rgb(22,163,74))]',
                value: 'view analytics'
            },
            {
                icon: 'pi-chart-line',
                label: 'View Trends',
                category: 'Tools',
                color: 'bg-[linear-gradient(rgb(59,130,246),rgb(37,99,235))]',
                value: 'view trends'
            },
            {
                icon: 'pi-database',
                label: 'Open Database',
                category: 'Tools',
                color: 'bg-[linear-gradient(rgb(168,85,247),rgb(147,51,234))]',
                value: 'open database'
            }
        ]
    }
];
```

## Accessibility

### Screen Reader

CommandMenu uses `combobox` role on the input and `listbox` role on the list. Items use `option` role with `aria-selected` state.

### Keyboard Support

| Key          | Function                                       |
| ------------ | ---------------------------------------------- |
| `up arrow`   | Moves focus to the previous item.              |
| `down arrow` | Moves focus to the next item.                  |
| `enter`      | Selects the focused item.                      |
| `escape`     | Closes the command menu if used in an overlay. |
