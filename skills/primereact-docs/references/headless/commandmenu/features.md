# useCommandMenu

Hook that manages a searchable command palette with filtered options, keyboard navigation, and grouped items.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { useCommandMenu } from '@primereact/headless/commandmenu';

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

export default function BasicDemo() {
    const { rootProps, inputProps, listProps, groupProps, filteredOptions, filteredCount, getItemProps, setSearch, state, getOptionIndex } =
        useCommandMenu({
            options: commands,
            optionLabel: 'label',
            optionValue: 'value',
            optionGroupLabel: 'group',
            optionGroupChildren: 'items',
            optionKeywords: 'keywords'
        });

    return (
        <div
            {...rootProps}
            className="max-w-xl mx-auto border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 rounded-lg overflow-hidden h-96 flex flex-col"
        >
            <div className="border-b border-surface-200 dark:border-surface-700 px-4 py-1.5">
                <input
                    {...inputProps}
                    value={state.search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for commands..."
                    className="w-full py-1.5 text-base bg-transparent outline-none text-surface-900 dark:text-surface-100 placeholder:text-surface-400"
                />
            </div>
            {filteredCount === 0 && <div className="text-center py-8 text-surface-500 dark:text-surface-400">No results found</div>}
            <div {...listProps} className="flex-1 overflow-y-auto p-1.5 flex flex-col gap-1.5 focus-visible:outline-none list-none m-0">
                {(filteredOptions as typeof commands).map((group, gi) => (
                    <div key={gi} {...groupProps}>
                        <div className="px-3 py-1.5 text-xs font-medium text-surface-400 dark:text-surface-500 capitalize">{group.group}</div>
                        {group.items.map((item) => {
                            const index = getOptionIndex(item);

                            return (
                                <div
                                    key={item.value}
                                    {...getItemProps(item, index)}
                                    className="h-9 flex items-center px-3 rounded-md text-sm cursor-pointer select-none text-surface-900 dark:text-surface-100 data-[selected]:bg-surface-100 dark:data-[selected]:bg-surface-900"
                                >
                                    {item.label}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="border-t border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900 px-4 py-2.5 flex items-center justify-end gap-3">
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
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-8,12-16}
import { useCommandMenu } from '@primereact/headless/commandmenu';

const commandmenu = useCommandMenu({
    options: commands,
    optionLabel: 'label',
    optionValue: 'value',
    optionGroupLabel: 'group',
    optionGroupChildren: 'items'
});

return (
    <div {...commandmenu.rootProps}>
        <input {...commandmenu.inputProps} />
        <ul {...commandmenu.listProps}>
            {commandmenu.filteredOptions.map((item, index) => (
                <li {...commandmenu.getItemProps(item, index)}></li>
            ))}
        </ul>
    </div>
);
```

`useCommandMenu` manages search filtering, keyboard navigation, and item selection for a command palette — see [Primitive](../../primitive/commandmenu/features.md) for a component-based API.

## Features

- `rootProps`, `inputProps`, `listProps`, and `groupProps` provide spread-ready prop objects for each DOM element
- `getItemProps(option, index)` returns ARIA attributes, selection state, and event handlers per item
- `filteredOptions` and `filteredCount` expose the current search-filtered results
- `setSearch(value)` programmatically updates the search query
- Custom `filter` function support with numeric scoring for ranked results

## Behavior

### Grouped Options

Define `optionGroupLabel` and `optionGroupChildren` to organize items into groups. Groups are automatically filtered and sorted by their highest-scoring child.

```tsx
const commandmenu = useCommandMenu({
    options: groupedCommands,
    optionLabel: 'label',
    optionGroupLabel: 'group',
    optionGroupChildren: 'items'
});
```

### Custom Filter

Pass a `filter` function that returns a numeric score. Higher scores rank higher; `0` means no match.

```tsx
const commandmenu = useCommandMenu({
    options: commands,
    optionLabel: 'label',
    filter: (label, search) => {
        if (label.toLowerCase().startsWith(search.toLowerCase())) return 2;
        if (label.toLowerCase().includes(search.toLowerCase())) return 1;
        return 0;
    }
});
```

### Keywords

Set `optionKeywords` to include additional search terms per option. The default filter matches against both the label and keyword fields.

```tsx
const commandmenu = useCommandMenu({
    options: commands,
    optionLabel: 'label',
    optionKeywords: 'keywords'
});
```

### Controlled Search

Pass `search` with `onSearchChange` for controlled search state.

```tsx
const [search, setSearch] = React.useState('');

const commandmenu = useCommandMenu({
    options: commands,
    optionLabel: 'label',
    search,
    onSearchChange: (e) => setSearch(e.query)
});
```

### Loop Navigation

Set `loop` to `true` to wrap keyboard navigation from the last item back to the first.

```tsx
const commandmenu = useCommandMenu({
    options: commands,
    optionLabel: 'label',
    loop: true
});
```

### Item Selection

Use `onItemSelect` to handle item selection triggered by `Enter` key or click.

```tsx
const commandmenu = useCommandMenu({
    options: commands,
    optionLabel: 'label',
    onItemSelect: (e) => console.log(e.value)
});
```

### Custom Styling with Data Attributes

```css
[data-scope='commandmenu'][data-part='root'] { ... }
[data-scope='commandmenu'][data-part='item'][data-selected] {
    background: #f5f5f5;
}
[data-scope='commandmenu'][data-part='item'][data-disabled] {
    opacity: 0.5;
    pointer-events: none;
}
```

## API

### useCommandMenu

> **API/props table for `useCommandMenu` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [CommandMenu Primitive](../../primitive/commandmenu/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
