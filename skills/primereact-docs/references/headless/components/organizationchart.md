# useOrganizationChart

Headless org-chart hook that manages collapse and selection state.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { useOrganizationChart, type TreeNode } from '@primereact/headless/organizationchart';
import { cn } from '@primeuix/utils';

const data: TreeNode[] = [
    {
        key: '0',
        label: 'Founder',
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                children: [
                    { key: '0-0-0', label: 'UX/UI Designer' },
                    { key: '0-0-1', label: 'Product Manager' }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                children: [
                    { key: '0-1-0', label: 'Frontend Developer' },
                    { key: '0-1-1', label: 'Backend Developer' }
                ]
            }
        ]
    }
];

type OrgChart = ReturnType<typeof useOrganizationChart>;

// Connector lines come from sibling/parent pseudo-elements. Tailwind's arbitrary
// `before:`/`after:` variants draw them off the `<li>` and the `<ul>`.
function Node({ orgchart, node, level }: { orgchart: OrgChart; node: TreeNode; level: number }) {
    const expandable = orgchart.isExpandable(node);
    const collapsed = orgchart.isCollapsed(node);
    const selected = orgchart.isSelected(node);
    const selectable = orgchart.isSelectable();
    const expanded = expandable && !collapsed;

    return (
        <li
            className={cn(
                'relative shrink-0 list-none px-2 pt-5 text-center',
                // each half of the horizontal connector reaches halfway into the 1rem gap
                "before:absolute before:right-1/2 before:top-0 before:h-5 before:w-[calc(50%+0.5rem)] before:border-t before:border-surface-200 before:content-[''] dark:before:border-surface-700",
                "after:absolute after:left-1/2 after:top-0 after:h-5 after:w-[calc(50%+0.5rem)] after:border-t after:border-l after:border-surface-200 after:content-[''] dark:after:border-surface-700",
                // outermost cells clip the horizontal line; a lone child drops it entirely
                'first:before:hidden last:after:border-t-0 only:pt-0 only:before:hidden only:after:hidden'
            )}
        >
            <div className="relative inline-flex flex-col items-center">
                <button
                    type="button"
                    disabled={!selectable}
                    onClick={() => selectable && orgchart.toggleNodeSelect(node.key)}
                    className={cn(
                        'inline-flex min-w-16 items-center justify-center rounded-lg border px-3 py-2 text-sm transition-colors',
                        selectable ? 'cursor-pointer' : 'cursor-default',
                        selected
                            ? 'border-transparent bg-primary text-primary-contrast'
                            : 'border-surface-200 bg-surface-0 text-surface-700 hover:bg-surface-50 dark:border-surface-700 dark:bg-surface-900 dark:text-surface-0 dark:hover:bg-surface-800'
                    )}
                >
                    {node.label}
                </button>

                {expandable && (
                    <button
                        type="button"
                        onClick={() => orgchart.toggleNodeCollapse(node.key)}
                        aria-label={expanded ? 'Collapse' : 'Expand'}
                        className="absolute -bottom-3 left-1/2 z-10 inline-flex size-5 -translate-x-1/2 items-center justify-center rounded-full border border-surface-200 bg-surface-0 text-surface-500 dark:border-surface-700 dark:bg-surface-900"
                    >
                        {expanded ? <ChevronDown className="size-3!" /> : <ChevronRight className="size-3!" />}
                    </button>
                )}
            </div>

            {expandable && expanded && (
                <ul
                    className={cn(
                        'relative m-0 flex list-none justify-center p-0 pt-5',
                        // vertical connector from this row up to the parent
                        "before:absolute before:left-1/2 before:top-0 before:h-5 before:border-l before:border-surface-300 before:content-[''] dark:before:border-surface-700"
                    )}
                >
                    {node.children!.map((child) => (
                        <Node key={child.key} orgchart={orgchart} node={child} level={level + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function BasicDemo() {
    const orgchart = useOrganizationChart({ value: data, selectionMode: 'single' });

    return (
        <div className="flex items-center justify-center overflow-auto py-4">
            <ul className="m-0 flex list-none justify-center p-0">
                {data.map((node) => (
                    <Node key={node.key} orgchart={orgchart} node={node} level={1} />
                ))}
            </ul>
        </div>
    );
}

```

## Usage

```tsx
import { useOrganizationChart } from '@primereact/headless/organizationchart';
```

```tsx
const orgchart = useOrganizationChart({ value: nodes, selectionMode: 'single' });

const renderNode = (node: TreeNode, level: number) => (
    <li {...orgchart.getTreeProps(node, level)}>
        <div {...orgchart.getNodeProps(node, () => orgchart.toggleNodeSelect(node.key))}>{node.label}</div>
        {orgchart.isExpandable(node) && !orgchart.isCollapsed(node) && <ul {...orgchart.subtreeProps}>{node.children!.map((c) => renderNode(c, level + 1))}</ul>}
    </li>
);
```

_useOrganizationChart_ owns the collapse and selection state and exposes prop getters plus predicates to render the chart yourself. The chart is expanded by default, a node is collapsed only when its key is present in _collapsedKeys_. There is no flat visible list as in _useTree_; you walk _value_ recursively and skip the children of a collapsed node.

## State

Both collapse and selection are controllable, following the standard value / defaultValue / onChange convention:

- _collapsedKeys_ / _defaultCollapsedKeys_ / _onCollapsedChange_, a `Record<string, boolean>` where a key set to `true` is collapsed.
- _selectionKeys_ / _defaultSelectionKeys_ / _onSelectionChange_, `Record<string, boolean>` for single/multiple, or `Record<string, { checked, partialChecked }>` for checkbox mode.

## Recipes

### Controlled collapse

```tsx
const [collapsedKeys, setCollapsedKeys] = React.useState({ '0-1': true });

const orgchart = useOrganizationChart({
    value: nodes,
    collapsedKeys,
    onCollapsedChange: (e) => setCollapsedKeys(e.value)
});
```

Call _toggleNodeCollapse(key)_ from a toggle button to flip a node's collapse state.

### Selection modes

_selectionMode_ controls how _toggleNodeSelect_ behaves:

- _single_, one node at a time.
- _multiple_, independent toggles.
- _checkbox_, selecting a node cascades to its descendants and recomputes a partial (`partialChecked`) state on its ancestors.

```tsx
const [selectionKeys, setSelectionKeys] = React.useState({});

const orgchart = useOrganizationChart({
    value: nodes,
    selectionMode: 'checkbox',
    selectionKeys,
    onSelectionChange: (e) => setSelectionKeys(e.value)
});
```

In checkbox mode use _isPartiallySelected(node)_ to drive an indeterminate checkbox.

### Predicates

The predicates answer per-node questions while you render:

- _isExpandable(node)_, node has children.
- _isCollapsed(node)_, node is collapsed.
- _isSelectable()_, a _selectionMode_ is set.
- _isSelected(node)_ / _isPartiallySelected(node)_, selection state.

### Lookups

- _findNodeByKey(key)_, resolve a node from its key.
- _getNodeLevel(key)_, 1-based depth used for `aria-level`.
- _getNodes()_, the current _value_ array.

## Data attributes

Every prop object includes `data-scope="organizationchart"` and a `data-part`. Boolean state attributes are present only when the condition is true, so selectors like `[data-selected]` match without further checks.

#### rootProps

| Attribute              | Description                         |
| ---------------------- | ----------------------------------- |
| `data-scope`           | `"organizationchart"`               |
| `data-part`            | `"root"`                            |
| `role`                 | `"tree"`                            |
| `aria-multiselectable` | `true` in multiple / checkbox modes |

#### getTreeProps()

| Attribute         | Description                        |
| ----------------- | ---------------------------------- |
| `data-scope`      | `"organizationchart"`              |
| `data-part`       | `"tree"`                           |
| `data-level`      | 1-based depth                      |
| `data-collapsed`  | Present when collapsed             |
| `data-selected`   | Present when selected              |
| `data-expandable` | Present when the node has children |

#### getNodeProps()

| Attribute         | Description                          |
| ----------------- | ------------------------------------ |
| `data-scope`      | `"organizationchart"`                |
| `data-part`       | `"node"`                             |
| `data-selectable` | Present when a selection mode is set |
| `data-collapsed`  | Present when collapsed               |
| `data-selected`   | Present when selected                |

#### getCollapseButtonProps()

| Attribute    | Description           |
| ------------ | --------------------- |
| `data-scope` | `"organizationchart"` |
| `data-part`  | `"toggle"`            |

#### subtreeProps

| Attribute    | Description           |
| ------------ | --------------------- |
| `data-scope` | `"organizationchart"` |
| `data-part`  | `"subtree"`           |
| `role`       | `"group"`             |

## API

### useOrganizationChart

> **`useOrganizationChart` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/organizationchart or the installed `@primereact/types`.

## Accessibility

The root is a `role="tree"` and each node a `role="treeitem"` with `aria-level`, `aria-expanded` for collapse state and `aria-selected` for selection; children are grouped with `role="group"`. Enter and Space toggle the selection of the focused node. See the [primitive docs](../../primitive/components/organizationchart.md#accessibility) for the full WAI-ARIA mapping.
