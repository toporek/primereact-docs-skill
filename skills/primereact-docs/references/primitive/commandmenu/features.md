# CommandMenu

An unstyled searchable command palette with grouped items and keyboard navigation.

Build fully custom command palettes with complete control over layout and styling.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { CommandMenu, type CommandMenuListInstance } from 'primereact/commandmenu';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <CommandMenu.Root
            options={commands}
            optionLabel="label"
            optionValue="value"
            optionGroupLabel="group"
            optionGroupChildren="items"
            optionKeywords="keywords"
            className={styles.root}
        >
            <CommandMenu.Header className={styles.header}>
                <CommandMenu.Input placeholder="Search for commands..." className={styles.input} />
            </CommandMenu.Header>
            <CommandMenu.Empty className={styles.empty}>No results found</CommandMenu.Empty>
            <CommandMenu.List className={styles.list}>
                {({ commandmenu }: CommandMenuListInstance) =>
                    ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                        <CommandMenu.Group key={gi}>
                            <CommandMenu.GroupHeader className={styles.groupHeader}>{group.group}</CommandMenu.GroupHeader>
                            {group.items.map((item, ii) => (
                                <CommandMenu.Item key={ii} option={item} className={styles.item}>
                                    {item.label}
                                </CommandMenu.Item>
                            ))}
                        </CommandMenu.Group>
                    ))
                }
            </CommandMenu.List>
            <CommandMenu.Footer className={styles.footer}>
                <span className={styles.shortcut}>
                    <kbd className={styles.kbd}>
                        <ArrowUp />
                    </kbd>
                    <kbd className={styles.kbd}>
                        <ArrowDown />
                    </kbd>
                    Navigate
                </span>
                <span className={styles.shortcut}>
                    <kbd className={styles.kbd}>↵</kbd>
                    Select
                </span>
            </CommandMenu.Footer>
        </CommandMenu.Root>
    );
}

const commands = [
    {
        group: 'Files',
        items: [
            { label: 'New File', value: 'new-file', keywords: ['create'] },
            { label: 'Open File', value: 'open-file' },
            { label: 'Save All', value: 'save-all' }
        ]
    },
    {
        group: 'Editor',
        items: [
            { label: 'Toggle Bold', value: 'toggle-bold' },
            { label: 'Toggle Italic', value: 'toggle-italic' },
            { label: 'Insert Link', value: 'insert-link' }
        ]
    },
    {
        group: 'Source Control',
        items: [
            { label: 'Git: Commit', value: 'git-commit' },
            { label: 'Git: Push', value: 'git-push' },
            { label: 'Git: Pull', value: 'git-pull' }
        ]
    }
];
```

## Features

- Compound component API with sub-components: `Root`, `Header`, `Input`, `List`, `Item`, `Group`, `GroupHeader`, `Footer`, `Empty`
- Score-based filtering with support for custom filter functions and keyword matching
- Grouped option rendering with automatic group filtering and sorting by relevance
- Auto-focus management with scroll-into-view for the active item

## Usage

```tsx
import { CommandMenu } from 'primereact/commandmenu';
```

```tsx
<CommandMenu>
    <CommandMenu.Input />
    <CommandMenu.Empty></CommandMenu.Empty>
    <CommandMenu.List>
        <CommandMenu.Group>
            <CommandMenu.GroupHeading></CommandMenu.GroupHeading>
            <CommandMenu.Item></CommandMenu.Item>
        </CommandMenu.Group>
    </CommandMenu.List>
</CommandMenu>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<CommandMenu.Root as="section">...</CommandMenu.Root>
```

### Render Function Children

`CommandMenu.List` accepts a render function providing access to the command menu instance.

```tsx
<CommandMenu.List>{({ commandmenu }) => <div>{commandmenu.filteredCount} results</div>}</CommandMenu.List>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import { CommandMenu, type CommandMenuListInstance } from '@primereact/ui/commandmenu';

export default function CommandMenuPTDemo() {
    return (
        <CommandMenu.Root
            options={commands}
            optionLabel="label"
            optionValue="value"
            optionGroupLabel="group"
            optionGroupChildren="items"
            optionKeywords="keywords"
            className="mx-auto w-108"
        >
            <CommandMenu.Header>
                <CommandMenu.Input placeholder="Search for commands..." />
            </CommandMenu.Header>
            <CommandMenu.Empty>No results found</CommandMenu.Empty>
            <CommandMenu.List>
                {({ commandmenu }: CommandMenuListInstance) =>
                    ((commandmenu?.filteredOptions ?? []) as typeof commands).map((group, gi) => (
                        <CommandMenu.Group key={gi}>
                            <CommandMenu.GroupHeader>{group.group}</CommandMenu.GroupHeader>
                            {group.items.map((item, ii) => (
                                <CommandMenu.Item key={ii} option={item}>
                                    {item.label}
                                </CommandMenu.Item>
                            ))}
                        </CommandMenu.Group>
                    ))
                }
            </CommandMenu.List>
            <CommandMenu.Footer className="justify-end">
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
            </CommandMenu.Footer>
        </CommandMenu.Root>
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
            { label: 'Run Task', value: 'run-task' }
        ]
    }
];
```

## API

### CommandMenuRoot

> **API/props table for `CommandMenuRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"commandmenu"` |
| `data-part`  | `"root"`        |

> **API/props table for `CommandMenuRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CommandMenuInput

> **API/props table for `CommandMenuInput` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"commandmenu"` |
| `data-part`  | `"input"`       |

> **API/props table for `CommandMenuInput` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CommandMenuList

> **API/props table for `CommandMenuList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"commandmenu"` |
| `data-part`  | `"list"`        |

> **API/props table for `CommandMenuList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CommandMenuItem

> **API/props table for `CommandMenuItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                         |
| --------------- | ----------------------------- |
| `data-selected` | Present when item is focused  |
| `data-disabled` | Present when item is disabled |

> **API/props table for `CommandMenuItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CommandMenuGroup

> **API/props table for `CommandMenuGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"commandmenu"` |
| `data-part`  | `"group"`       |

> **API/props table for `CommandMenuGroup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CommandMenuGroupHeader

> **API/props table for `CommandMenuGroupHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CommandMenuGroupHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CommandMenuHeader

> **API/props table for `CommandMenuHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CommandMenuHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CommandMenuFooter

> **API/props table for `CommandMenuFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CommandMenuFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CommandMenuEmpty

> **API/props table for `CommandMenuEmpty` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CommandMenuEmpty` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

CommandMenu renders a combobox with an input (`role="combobox"`) that controls a list of options (`role="listbox"`). Items use `aria-selected` to reflect the current selection and `aria-disabled="true"` when an item cannot be chosen. The accessible name can be overridden with `aria-label` or `aria-labelledby` on the root component.

### Keyboard Support

| Key / Combo             | Function                                        |
| ----------------------- | ----------------------------------------------- |
| `ArrowDown` / `ArrowUp` | Move to next / previous item                    |
| `Home` / `End`          | Move to first / last item                       |
| `Enter`                 | Selects the active item (ignored when disabled) |
