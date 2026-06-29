# useTreeFilter

Filter hook for hierarchical data. Lenient or strict branch matching.

## Usage

```tsx
import { useTreeFilter } from '@primereact/hooks/use-tree-filter';
```

```tsx
const { filteredNodes, value, setValue, isFiltered } = useTreeFilter({
    nodes,
    field: 'label'
});
```

`useTreeFilter` walks nodes with `children` and returns the matching branches. Rules and matchers are the same as `useFilter`, pick the hook that matches your data shape.

## Signature

```ts
function useTreeFilter<TNode extends TreeNodeLike, TMode extends string = BuiltInMatchMode>(options: UseTreeFilterOptions<TNode, TMode>): UseTreeFilterReturn<TNode, TMode>;
```

## filterMode

- **`lenient`** (default), keep a branch if it matches, or if any descendant matches. The whole subtree is included.
- **`strict`**, leaves must match on their own. Parents are kept only as a path to a matching descendant; non-matching leaves are dropped.

```tsx
'use client';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Search } from '@primeicons/react/search';
import { useTreeFilter, type TreeFilterMode } from '@primereact/hooks/use-tree-filter';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

interface Node {
    key: string;
    data: { name: string; type: 'folder' | 'file' };
    children?: Node[];
}

const tree: Node[] = [
    {
        key: '0',
        data: { name: 'Documents', type: 'folder' },
        children: [
            { key: '0-0', data: { name: 'Work Report.docx', type: 'file' } },
            { key: '0-1', data: { name: 'Expenses.xlsx', type: 'file' } },
            {
                key: '0-2',
                data: { name: 'Invoices', type: 'folder' },
                children: [
                    { key: '0-2-0', data: { name: 'January.pdf', type: 'file' } },
                    { key: '0-2-1', data: { name: 'February.pdf', type: 'file' } }
                ]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Media', type: 'folder' },
        children: [
            { key: '1-0', data: { name: 'Holiday.mp4', type: 'file' } },
            { key: '1-1', data: { name: 'Wallpaper.jpg', type: 'file' } }
        ]
    },
    {
        key: '2',
        data: { name: 'Archive', type: 'folder' },
        children: [{ key: '2-0', data: { name: 'old-work-report.docx', type: 'file' } }]
    }
];

function renderNode(node: Node, level = 0): React.ReactNode {
    return (
        <React.Fragment key={node.key}>
            <div
                className="flex items-center gap-2 py-1 px-2 rounded hover:bg-surface-100 dark:hover:bg-surface-800"
                style={{ paddingInlineStart: `${0.5 + level * 1.25}rem` }}
            >
                {node.data.type === 'folder' ? (
                    <Folder className="w-4 h-4 text-yellow-500" />
                ) : (
                    <File className="w-4 h-4 text-surface-500 dark:text-surface-400" />
                )}
                <span className={node.data.type === 'folder' ? 'font-semibold' : ''}>{node.data.name}</span>
            </div>
            {node.children?.map((c) => renderNode(c, level + 1))}
        </React.Fragment>
    );
}

export default function TreeDemo() {
    const [mode, setMode] = React.useState<TreeFilterMode>('lenient');

    const { filteredNodes, rules, setRules } = useTreeFilter<Node>({
        nodes: tree,
        defaultRules: [{ field: 'name', value: null, matchMode: 'contains' }],
        filterMode: mode
    });

    const search = (rules[0]?.value as string) ?? '';

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <IconField.Root>
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        type="search"
                        placeholder="Search nodes..."
                        value={search}
                        onChange={(e: any) => setRules([{ field: 'name', value: e.target.value, matchMode: 'contains' }])}
                    />
                </IconField.Root>

                <ToggleButtonGroup
                    allowEmpty={false}
                    multiple={false}
                    value={mode}
                    onValueChange={(e: { value: unknown }) => setMode(e.value as TreeFilterMode)}
                >
                    <ToggleButton.Root value="lenient" size="small">
                        <ToggleButton.Indicator>Lenient</ToggleButton.Indicator>
                    </ToggleButton.Root>
                    <ToggleButton.Root value="strict" size="small">
                        <ToggleButton.Indicator>Strict</ToggleButton.Indicator>
                    </ToggleButton.Root>
                </ToggleButtonGroup>
            </div>
            <div className="border border-surface-200 dark:border-surface-700 rounded-md p-2 min-h-60">
                {filteredNodes.length === 0 ? (
                    <div className="p-4 text-center text-sm text-surface-500 dark:text-surface-400">No matches.</div>
                ) : (
                    filteredNodes.map((n) => renderNode(n))
                )}
            </div>
            <p className="text-xs text-surface-500 dark:text-surface-400">
                <strong>Lenient</strong>: a branch is kept if any descendant matches. <strong>Strict</strong>: leaves must match; parents are kept
                only when a descendant matches.
            </p>
        </div>
    );
}

```

## Rules

Same shape as `useFilter`. Fields resolve against `node.data` first, then against the node itself. So a flat `{ key, label, children }` works the same as the DataTable-style `{ key, data: { name, type }, children }`.

```tsx
// node.data.name
useTreeFilter({
    nodes,
    defaultRules: [{ field: 'name', value: 'doc', matchMode: 'contains' }],
    filterMode: 'lenient'
});

// node.label (top-level)
useTreeFilter({
    nodes,
    defaultRules: [{ field: 'label', value: 'doc', matchMode: 'contains' }]
});
```

## Shorthand

For single-field filtering, skip the rules array and pass `field` directly. The hook builds a `{ field, value, matchMode }` rule for you and exposes `value` / `setValue` for the input.

```tsx
const { filteredNodes, value, setValue, isFiltered } = useTreeFilter({
    nodes,
    field: 'label',
    matchMode: 'contains' // optional, defaults to 'contains'
});

<InputText value={value as string} onChange={(e) => setValue(e.target.value)} />;
```

`value` follows the standard controlled / uncontrolled convention:

| Mode             | Setup                                        | When to use                                                                 |
| ---------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| **Uncontrolled** | omit `value`, optionally pass `defaultValue` | Default. The hook keeps the state and `setValue` updates it.                |
| **Controlled**   | pass both `value` and `onValueChange`        | When the parent already owns the query (URL sync, parent re-renders, etc.). |

Passing `rules` or `defaultRules` turns the shorthand off, use one or the other.

## Lazy

With `lazy: true` the client-side walk is skipped and `filteredNodes` is returned untouched. `onLazyLoad` fires with the current rules and the active `filterMode`; forward both so your backend can apply the same branch logic.

```tsx
useTreeFilter({
    nodes,
    lazy: true,
    defaultRules: [{ field: 'label', value: null }],
    filterMode: 'lenient',
    onLazyLoad: ({ rules, filterMode }) => {
        // fetch filtered tree from the server
    }
});
```

## Custom matchers

Reuse `matchers` and the shared `registerMatcher` / `unregisterMatcher` helpers from `@primereact/hooks/use-filter`.
