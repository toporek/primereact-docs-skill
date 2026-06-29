# useTreeTable

Hierarchical data table built on useDataTable with treeMode enabled, sort, filter, paginate, select, expand, and edit tree-shaped data.

```tsx
'use client';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import { useDataTable, useDataTableRow } from '@primereact/headless/datatable';
import type { UseDataTableExpansionEvent } from '@primereact/types/headless/datatable';
import * as React from 'react';

interface RowProps {
    item: Record<string, unknown>;
    index: number;
    context: ReturnType<typeof useDataTable>;
}

function Row({ item, index, context }: RowProps) {
    const { rowProps } = useDataTableRow({ item, index, context });
    const treeLevel = (item._treeLevel as number | undefined) ?? 0;
    const hasChildren = (item._treeHasChildren as boolean | undefined) ?? false;
    const rowKey = String(item.key);
    const isExpanded = context.expansion.isExpanded(rowKey);

    const toggle = (e: React.MouseEvent) => {
        if (hasChildren) context.expansion.toggleExpansion(e, rowKey);
    };

    return (
        <tr {...rowProps} style={{ borderBottom: '1px solid var(--p-content-border-color)' }}>
            <td style={{ padding: '0.5rem 0.75rem', paddingInlineStart: `calc(0.75rem + ${treeLevel}rem)` }}>
                {hasChildren ? (
                    <button onClick={toggle} aria-label={isExpanded ? 'Collapse' : 'Expand'} style={{ marginRight: 8, cursor: 'pointer' }}>
                        {isExpanded ? '▼' : '▶'}
                    </button>
                ) : (
                    <span style={{ display: 'inline-block', width: '1.5rem' }} />
                )}
                {String(item.name)}
            </td>
            <td style={{ padding: '0.5rem 0.75rem' }}>{String(item.size)}</td>
            <td style={{ padding: '0.5rem 0.75rem' }}>{String(item.type)}</td>
        </tr>
    );
}

export default function BasicDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    const tree = useDataTable({
        data: nodes as unknown as Record<string, unknown>[],
        dataKey: 'key',
        treeMode: true,
        expandedKeys,
        onExpandedChange: (e: UseDataTableExpansionEvent) => setExpandedKeys(e.value)
    });
    const rows = tree.state.processedData ?? [];
    const headStyle: React.CSSProperties = {
        padding: '0.5rem 0.75rem',
        textAlign: 'left',
        fontWeight: 600,
        borderBottom: '1px solid var(--p-content-border-color)'
    };

    return (
        <div {...tree.rootProps} style={{ width: '100%' }}>
            <div {...tree.tableContainerProps}>
                <table {...tree.tableProps} style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={headStyle}>Name</th>
                            <th style={headStyle}>Size</th>
                            <th style={headStyle}>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((item, index) => (
                            <Row key={tree.getRowKey(item, index)} item={item} index={index} context={tree} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

```

## Usage

TreeTable is not a separate hook, it is `useDataTable` with `treeMode: true`. The hook flattens the visible part of the tree (respecting `expandedKeys`), so every other feature (sort, filter, pagination, selection, editing, reorder, export) works the same way as on flat data.

```tsx
import { useDataTable } from '@primereact/headless/datatable';
```

```tsx
const tree = useDataTable({
    data: nodes,
    dataKey: 'key',
    treeMode: true,
    expandedKeys,
    onExpandedChange: (e) => setExpandedKeys(e.value)
});
```

Nodes are objects of the shape `{ key, data, children? }`. Flat rows produced by the hook are stamped with helpers used by the renderer:

| Field              | Type      | Meaning                                                               |
| ------------------ | --------- | --------------------------------------------------------------------- |
| `_treeLevel`       | `number`  | Zero-based depth in the tree (used for indentation and `aria-level`). |
| `_treeHasChildren` | `boolean` | Whether the row has children (drives the expander vs. spacer).        |
| `_treePosInSet`    | `number`  | One-based position among siblings (`aria-posinset`).                  |
| `_treeSetSize`     | `number`  | Total siblings at this depth (`aria-setsize`).                        |

## Features

All [useDataTable](datatable.md) features work the same way; the table role becomes `treegrid` and rows pick up tree-aware ARIA attributes. A few things behave differently in tree mode:

- **Filter**, column filters and the global filter keep ancestor nodes when any descendant matches, so the result stays connected to its roots
- **Selection**, checkbox selection cascades to descendants; partially-selected parents are reported through `selection.isPartiallySelected(key)`
- **Pagination**, the paginator slices root-level nodes only; expanded children stay inside the same page

## Working with callbacks

### Controlled expansion

```tsx
const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

const tree = useDataTable({
    data: nodes,
    dataKey: 'key',
    treeMode: true,
    expandedKeys,
    onExpandedChange: (e) => setExpandedKeys(e.value)
});
```

### Filter + sort + pagination

Pass the same `filters` / `sortField` / `paginator` props as on a flat DataTable; the hook re-runs them against the tree.

```tsx
const tree = useDataTable({
    data: nodes,
    treeMode: true,
    paginator: true,
    rows: 10,
    filters,
    onFilter: (e) => setFilters(e.filters),
    sortField,
    sortOrder,
    onSortChange: (e) => {
        setSortField(e.field);
        setSortOrder(e.order);
    }
});
```

## API

### useDataTable

> **API/props table for `useDataTable` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useDataTableRow

> **API/props table for `useDataTableRow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

`role="treegrid"` is applied to the table; rows expose `aria-level`, `aria-expanded`, `aria-posinset`, `aria-setsize`. Expander buttons emit `aria-expanded` and a descriptive `aria-label`. See [Primitive](../../primitive/components/treetable.md#accessibility) for full WAI-ARIA compliance details.
