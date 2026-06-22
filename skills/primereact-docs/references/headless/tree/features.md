# useTree

Hooks that manage tree state, keyboard navigation, selection, and drag-drop.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { FolderOpen } from '@primeicons/react/folder-open';
import { useTree, useTreeNode, type TreeNodeData } from '@primereact/headless/tree';

function TreeNodeItem({
    node,
    tree,
    parentNode,
    index
}: {
    node: TreeNodeData;
    tree: ReturnType<typeof useTree>;
    parentNode?: ReturnType<typeof useTreeNode>;
    index: number;
}) {
    const treeNode = useTreeNode({ node, context: tree, parentContext: parentNode, index });
    const { nodeProps, contentProps } = treeNode;

    return (
        <li
            {...nodeProps}
            className="group list-none rounded-md transition-colors focus-visible:outline-none focus-visible:[&>[data-part=content]]:outline-1 focus-visible:[&>[data-part=content]]:-outline-offset-1 focus-visible:[&>[data-part=content]]:outline-primary"
        >
            <div
                {...contentProps}
                className="group flex items-center gap-1 py-1 px-2 rounded cursor-pointer select-none hover:bg-surface-100 dark:hover:bg-surface-700 data-[selected]:bg-primary/10 data-[selected]:text-primary"
            >
                <button
                    {...tree.getToggleProps(node)}
                    className="group inline-flex items-center justify-center w-6 h-6 rounded cursor-pointer bg-transparent border-none p-0 group-data-leaf:hidden!"
                >
                    <ChevronDown className="group-data-collapsed:hidden!" />
                    <ChevronRight className="hidden! group-data-collapsed:block!" />
                </button>
                <span className="w-6 hidden! group-data-leaf:inline-flex!" />
                <span className="inline-flex items-center">
                    {node.icon === 'folder' ? (
                        <>
                            <FolderOpen className="mr-1 group-data-collapsed:hidden!" />
                            <Folder className="mr-1 hidden! group-data-collapsed:block!" />
                        </>
                    ) : (
                        <File className="mr-1" />
                    )}
                </span>
                <span className="text-sm">{node.label}</span>
            </div>
            {node.children && (
                <ul {...tree.getListProps(true)} className="pl-4 m-0 p-0 group-data-collapsed:hidden!">
                    {node.children.map((child, i) => (
                        <TreeNodeItem key={child.key} node={child} tree={tree} parentNode={treeNode} index={i} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function BasicDemo() {
    const tree = useTree({ value: data, defaultExpandedKeys: { '0': true }, selectionMode: 'single' });
    const { rootProps, getListProps, getNodes } = tree;

    return (
        <div {...rootProps} className="p-2 w-full max-w-md">
            <ul {...getListProps(false)} className="m-0 p-0">
                {getNodes().map((node, i) => (
                    <TreeNodeItem key={node.key} node={node} tree={tree} index={i} />
                ))}
            </ul>
        </div>
    );
}

const data: TreeNodeData[] = [
    {
        key: '0',
        label: 'Documents',
        icon: 'folder',
        children: [
            {
                key: '0-0',
                label: 'Work',
                icon: 'folder',
                children: [
                    { key: '0-0-0', label: 'Expenses.doc', icon: 'file' },
                    { key: '0-0-1', label: 'Resume.doc', icon: 'file' }
                ]
            },
            {
                key: '0-1',
                label: 'Home',
                icon: 'folder',
                children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'file' }]
            }
        ]
    },
    {
        key: '1',
        label: 'Events',
        icon: 'folder',
        children: [
            { key: '1-0', label: 'Meeting', icon: 'file' },
            { key: '1-1', label: 'Product Launch', icon: 'file' },
            { key: '1-2', label: 'Report Review', icon: 'file' }
        ]
    },
    {
        key: '2',
        label: 'Movies',
        icon: 'folder',
        children: [
            {
                key: '2-0',
                label: 'Al Pacino',
                icon: 'folder',
                children: [
                    { key: '2-0-0', label: 'Scarface', icon: 'file' },
                    { key: '2-0-1', label: 'Serpico', icon: 'file' }
                ]
            },
            {
                key: '2-1',
                label: 'Robert De Niro',
                icon: 'folder',
                children: [
                    { key: '2-1-0', label: 'Goodfellas', icon: 'file' },
                    { key: '2-1-1', label: 'Untouchables', icon: 'file' }
                ]
            }
        ]
    }
];
```

## Usage

```tsx showLineNumbers {1,3-4,6-8,11-15}
import { useTree, useTreeNode } from '@primereact/headless/tree';

const tree = useTree({ value: nodes, selectionMode: 'single' });
const { rootProps } = tree;

const treeNode = useTreeNode({ node: nodes[0], context: tree, index: 0 });
const { state, nodeProps, contentProps } = treeNode;
const toggleProps = tree.getToggleProps(nodes[0]);

return (
    <div {...rootProps}>
        <ul {...tree.getListProps(false)}>
            <li {...nodeProps}>
                <div {...contentProps}>
                    <button {...toggleProps}></button>
                </div>
            </li>
        </ul>
    </div>
);
```

`useTree` manages root state while `useTreeNode` consumes that context to return prop objects for each node element — see [Primitive](../../primitive/tree/features.md) for a component-based API.

## Features

- Two-hook architecture: `useTree` for root state, `useTreeNode` for per-node behavior
- Returns spread-ready prop objects via `rootProps`, `getNodeProps`, `getToggleProps`, `getListProps`, `filterProps`
- Three selection modes: `single`, `multiple`, `checkbox` with parent-child propagation
- Controlled and uncontrolled expansion and selection state
- Built-in drag-drop with scope validation for same-tree and cross-tree transfers
- Typeahead search across visible nodes

## Behavior

### Default Expanded Keys

Use `defaultExpandedKeys` to set initially expanded nodes. Keys are a `Record<string, boolean>`.

```tsx
const tree = useTree({ value: nodes, defaultExpandedKeys: { '0': true, '1': true } });
```

### Controlled Expansion

Use `expandedKeys` and `onExpandedChange` for full programmatic control.

```tsx
const [expandedKeys, setExpandedKeys] = React.useState<TreeExpandedKeys>({ '0': true });
const tree = useTree({
    value: nodes,
    expandedKeys,
    onExpandedChange: (e) => setExpandedKeys(e.value)
});
```

### Selection Mode

Set `selectionMode` to `single`, `multiple`, or `checkbox`. Use `selectionKeys` and `onSelectionChange` for controlled selection.

```tsx
const tree = useTree({ value: nodes, selectionMode: 'single' });
```

In `checkbox` mode, selection keys use `{ checked: boolean, partialChecked: boolean }` shape. Parent-child propagation is handled automatically.

### Meta Key Selection

In `multiple` mode, `metaKeySelection` controls whether the meta key (Cmd/Ctrl) is required to add to existing selections. Defaults to `true`.

```tsx
const tree = useTree({ value: nodes, selectionMode: 'multiple', metaKeySelection: false });
```

### Drag and Drop

Enable drag-drop by setting `draggableNodes` and `droppableNodes`. Use `draggableScope` and `droppableScope` to restrict transfers between trees.

```tsx
const tree = useTree({
    value: nodes,
    draggableNodes: true,
    droppableNodes: true,
    onValueChange: (e) => setNodes(e.value)
});
```

### Filtering

Spread `filterProps` on an input element to enable search filtering. The hook provides `autoComplete: 'off'` and keyboard handling.

```tsx
<input {...tree.filterProps} />
```

### Conditional Rendering with `state.expanded`

Use `state.expanded` from `useTreeNode` to conditionally render child nodes.

```tsx
const { state } = useTreeNode({ node, context: tree, index: 0 });

{
    state.expanded && node.children && (
        <ul {...tree.getListProps(true)}>
            {node.children.map((child, i) => (
                <TreeNodeItem key={child.key} node={child} index={i} />
            ))}
        </ul>
    );
}
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="tree"` and a `data-part` attribute. State-dependent attributes are added automatically to enable CSS-only styling.

#### rootProps

| Attribute         | Description                                    |
| ----------------- | ---------------------------------------------- |
| `data-scope`      | `"tree"`                                       |
| `data-part`       | `"root"`                                       |
| `data-drag-hover` | Present when a node is being dragged over root |

#### nodeProps

| Attribute        | Description                                    |
| ---------------- | ---------------------------------------------- |
| `data-scope`     | `"tree"`                                       |
| `data-part`      | `"node"`                                       |
| `data-node-key`  | Node key value                                 |
| `data-expanded`  | Present when node is expanded (non-leaf only)  |
| `data-collapsed` | Present when node is collapsed (non-leaf only) |
| `data-selected`  | Present when node is selected                  |
| `data-leaf`      | Present when node is a leaf                    |
| `data-disabled`  | Present when node is disabled                  |

#### contentProps

| Attribute              | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `data-scope`           | `"tree"`                                        |
| `data-part`            | `"content"`                                     |
| `data-selected`        | Present when selected or checked                |
| `data-selectable`      | Present when selectable                         |
| `data-expanded`        | Present when expanded (non-leaf only)           |
| `data-collapsed`       | Present when collapsed (non-leaf only)          |
| `data-leaf`            | Present when leaf node                          |
| `data-checked`         | Present when checked (checkbox mode)            |
| `data-partial-checked` | Present when partially checked (checkbox mode)  |
| `data-disabled`        | Present when disabled                           |
| `data-drop-hover`      | Present when a dragged node hovers over content |

#### getToggleProps

| Attribute        | Description                    |
| ---------------- | ------------------------------ |
| `data-scope`     | `"tree"`                       |
| `data-part`      | `"toggle"`                     |
| `data-expanded`  | Present when node is expanded  |
| `data-collapsed` | Present when node is collapsed |

#### dropPointProps

| Attribute    | Description    |
| ------------ | -------------- |
| `data-scope` | `"tree"`       |
| `data-part`  | `"drop-point"` |

```css
[data-scope='tree'][data-part='content'] {
    padding: 0.25rem 0.5rem;
}

[data-scope='tree'][data-part='content'][data-selected] {
    background-color: rgba(var(--primary-rgb), 0.1);
}

[data-scope='tree'][data-part='content'][data-expanded] {
    font-weight: 600;
}

[data-scope='tree'][data-part='node'][data-node-key='0'] {
    font-weight: bold;
}
```

## API

### useTree

> **API/props table for `useTree` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useTreeNode

> **API/props table for `useTreeNode` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Tree Primitive](../../primitive/tree/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
