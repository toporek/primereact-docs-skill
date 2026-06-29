# TreeTable

An unstyled hierarchical data table built on DataTable with treeMode enabled, sort, filter, paginate, select, expand, and edit tree-shaped data.

Compose a fully custom tree table with the same compound API as DataTable. Tree mode is a single prop on Root, every other feature (sort, filter, paginate, select, edit, reorder, export) works the same way.

```tsx
'use client';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import { DataTable } from 'primereact/datatable';
import type { DataTableExpansionEvent } from 'primereact/datatable';
import * as React from 'react';

const cellStyle: React.CSSProperties = { padding: '0.5rem 0.75rem' };
const headStyle: React.CSSProperties = { ...cellStyle, textAlign: 'left', fontWeight: 600, borderBottom: '1px solid var(--p-content-border-color)' };
const rowStyle: React.CSSProperties = { borderBottom: '1px solid var(--p-content-border-color)' };

export default function BasicDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div style={{ width: '100%' }}>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={headStyle}>Name</DataTable.THeadCell>
                                <DataTable.THeadCell style={headStyle}>Size</DataTable.THeadCell>
                                <DataTable.THeadCell style={headStyle}>Type</DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: Record<string, unknown> }) => (
                                <DataTable.Row style={rowStyle}>
                                    <DataTable.Cell style={cellStyle}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">▼</DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">▶</DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <span>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell style={cellStyle}>{String(item.size)}</DataTable.Cell>
                                    <DataTable.Cell style={cellStyle}>{String(item.type)}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

## Features

- Same compound component API as [DataTable](datatable.md)
- `treeMode` flips `role="table"` to `role="treegrid"` and stamps `aria-level`, `aria-expanded`, `aria-posinset`, `aria-setsize` on each row automatically
- `DataTable.RowToggle` renders an expander when a node has children and a leaf-spacer when it does not, so indentation stays aligned
- All editing, filter, sort, pagination, selection, reorder, resize, and export features compose with hierarchical data

## Usage

There is no separate `TreeTable` import, pass `treeMode` and `dataKey="key"` to `DataTable.Root` and feed it nodes shaped as `{ key, data, children? }`.

```tsx
import { DataTable } from 'primereact/datatable';
```

```tsx
<DataTable.Root data={nodes} dataKey="key" treeMode>
    <DataTable.TableContainer>
        <DataTable.Table>
            <DataTable.THead>
                <DataTable.THeadRow>
                    <DataTable.THeadCell>Name</DataTable.THeadCell>
                    <DataTable.THeadCell>Size</DataTable.THeadCell>
                </DataTable.THeadRow>
            </DataTable.THead>
            <DataTable.TBody>
                {({ item }) => (
                    <DataTable.Row>
                        <DataTable.Cell>
                            <DataTable.RowToggle>
                                <DataTable.RowToggleIndicator match="expanded">▼</DataTable.RowToggleIndicator>
                                <DataTable.RowToggleIndicator match="collapsed">▶</DataTable.RowToggleIndicator>
                            </DataTable.RowToggle>
                            <span>{item.name}</span>
                        </DataTable.Cell>
                        <DataTable.Cell>{item.size}</DataTable.Cell>
                    </DataTable.Row>
                )}
            </DataTable.TBody>
        </DataTable.Table>
    </DataTable.TableContainer>
</DataTable.Root>
```

## Behavior

### Controlled Expansion

Pass `expandedKeys` and `onExpandedChange` to drive expansion from outside state.

```tsx
const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

<DataTable.Root data={nodes} dataKey="key" treeMode expandedKeys={expandedKeys} onExpandedChange={(e) => setExpandedKeys(e.value)}>
    {/* … */}
</DataTable.Root>;
```

### Filter, Sort, Paginate

Use the same `filters` / `globalFilter` / `sortField` / `paginator` props as on a flat table, the underlying hook re-runs them tree-aware.

```tsx
<DataTable.Root
    data={nodes}
    dataKey="key"
    treeMode
    paginator
    rows={10}
    filters={filters}
    onFilter={(e) => setFilters(e.filters)}
    globalFilter={search}
    globalFilterFields={['name', 'type']}
    sortField={sortField}
    sortOrder={sortOrder}
    onSortChange={(e) => {
        setSortField(e.field);
        setSortOrder(e.order);
    }}
>
    {/* same THead / TBody markup as a flat DataTable */}
</DataTable.Root>
```

### Selection

Selection cascades through descendants in tree mode. Use `Selection.isPartiallySelected` from the slot context to render an indeterminate state on parent nodes that have only some children selected.

```tsx
<DataTable.Selection>{({ isSelected, isPartiallySelected, toggle }) => <Checkbox checked={isSelected} indeterminate={isPartiallySelected} onCheckedChange={toggle} />}</DataTable.Selection>
```

### Editing

Cell and row editing both work in tree mode without changes. The cell editor pins to the underlying row by `key`, so edits stay attached to the correct node when sort, filter, or expand/collapse reshuffles the flat order.

## Components

`TreeTable` renders the same compound component surface as `DataTable`. See the full [DataTable component reference](datatable.md#api) for every available sub-component, data attribute, and pass-through.

## Accessibility

### Screen Reader

When `treeMode` is enabled, `DataTable.Table` applies `role="treegrid"`. Each row exposes `aria-level` (one-based depth), `aria-expanded` when it has children, and `aria-posinset` / `aria-setsize` for screen-reader navigation between siblings. Expander buttons emit `aria-expanded` and a descriptive `aria-label` (`"Expand row"` / `"Collapse row"`).

### Keyboard Support

| Key                       | Function                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| `tab`                     | Moves focus through interactive elements (sort triggers, filter inputs, rows).              |
| `arrow up` / `arrow down` | Moves focus between rows when a row is focused.                                             |
| `arrow left`              | Collapses the focused row, or moves focus to its parent if already collapsed.               |
| `arrow right`             | Expands the focused row, or moves focus to its first child if already expanded.             |
| `home` / `end`            | Moves focus to the first / last visible row.                                                |
| `space`                   | Toggles selection on the focused row.                                                       |
| `enter`                   | Toggles expansion on the focused row, or opens the first editable cell in `cell` edit mode. |
