# useDataTable

Hook that manages tabular data with sort, filter, pagination, selection, expansion, editing, column/row reorder, resize, and tree-mode flattening.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { useDataTable, useDataTableRow } from '@primereact/headless/datatable';
import * as React from 'react';

interface RowProps {
    item: Record<string, unknown>;
    index: number;
    context: ReturnType<typeof useDataTable>;
}

function Row({ item, index, context }: RowProps) {
    const { rowProps } = useDataTableRow({ item, index, context });
    const product = item as unknown as Product;

    return (
        <tr {...rowProps} style={{ borderBottom: '1px solid var(--p-content-border-color)' }}>
            <td style={cellStyle}>{product.code}</td>
            <td style={cellStyle}>{product.name}</td>
            <td style={cellStyle}>{product.category}</td>
            <td style={cellStyle}>${product.price}</td>
        </tr>
    );
}

const cellStyle: React.CSSProperties = { padding: '0.5rem 0.75rem' };
const headStyle: React.CSSProperties = { ...cellStyle, textAlign: 'left', fontWeight: 600, borderBottom: '1px solid var(--p-content-border-color)' };

export default function BasicDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    const dt = useDataTable({ data: products as unknown as Record<string, unknown>[], dataKey: 'id' });
    const rows = dt.state.paginatedData ?? dt.state.processedData ?? [];

    return (
        <div {...dt.rootProps} style={{ width: '100%' }}>
            <div {...dt.tableContainerProps}>
                <table {...dt.tableProps} style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={headStyle}>Code</th>
                            <th style={headStyle}>Name</th>
                            <th style={headStyle}>Category</th>
                            <th style={headStyle}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((item, index) => (
                            <Row key={dt.getRowKey(item, index)} item={item} index={index} context={dt} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useDataTable } from '@primereact/headless/datatable';
```

```tsx
const dt = useDataTable({ data, dataKey: 'id' });
const { state, rootProps, tableContainerProps, tableProps, getRowKey, sort, selection, pagination, expansion, filter, editing, columnReorder, columnResize, rowReorder, exportData, keyboard } = dt;
```

`useDataTable` is a single composite hook: every feature (sort, filter, pagination, selection, expansion, editing, etc.) is composed inside it and exposed under a namespaced key. See [Primitive](../../primitive/components/datatable.md) for a component-based API.

## Features

- **Sort**, single, multi, and removable tri-state via `sortField`, `sortOrder`, and `multiSortMeta`
- **Filter**, row and menu filters per column with multiple constraints and AND/OR operators, plus a global filter across selected fields
- **Pagination**, built-in slicing or lazy mode with `totalRecords` and `onLazyLoad`
- **Selection**, single, multiple (checkbox or row), radio, Shift-range, Ctrl/Meta additive, and indeterminate parents in tree mode
- **Expansion**, flat row expanders or tree-mode flattening; rows are stamped with `_treeLevel`, `_treeHasChildren`, `_treePosInSet`, `_treeSetSize`
- **Editing**, `cell` and `row` modes; `editingKeys` and `editingCell` can be controlled, save and cancel events fire as expected
- **Column reorder & resize**, drag-and-drop reorder, `fit` or `expand` resize, with hooks for both indicators
- **Row reorder**, drag-and-drop driven from a row handle
- **Grouping**, group metadata map keyed by row index for grouped headers and row spans
- **Tree mode**, the same API works on hierarchical data; sort, filter, pagination, and selection all operate tree-aware
- **CSV export**, export visible, selected, or all rows with custom fields and headers
- **Keyboard navigation**, arrows (with Shift to extend selection), Home / End, Arrow Left / Right to collapse / expand a tree row, Enter or Space to select, Enter on a row to open the first editable cell

## Working with callbacks

### Controlled selection

Pass `selectedKeys` and `onSelectionChange` to drive the selection from outside state.

```tsx
const [selectedKeys, setSelectedKeys] = React.useState({});

const dt = useDataTable({
    data,
    dataKey: 'id',
    selectionMode: 'multiple',
    selectedKeys,
    onSelectionChange: (e) => setSelectedKeys(e.value)
});
```

### Controlled sort

Mix single and multi-sort by reading both `sortField` / `sortOrder` and `multiSortMeta` from state.

```tsx
const [sortField, setSortField] = React.useState<string>();
const [sortOrder, setSortOrder] = React.useState<1 | -1 | 0>();

const dt = useDataTable({
    data,
    sortField,
    sortOrder,
    onSortChange: (e) => {
        setSortField(e.field);
        setSortOrder(e.order);
    }
});
```

### Controlled filter

Filters are a record of `{ value, matchMode, constraints?, operator? }`. Both the per-column metadata and the global filter are debounceable via `filterDelay`.

```tsx
const [filters, setFilters] = React.useState({
    name: { value: null, matchMode: 'contains' },
    price: { value: null, matchMode: 'gte' }
});
const [globalFilter, setGlobalFilter] = React.useState('');

const dt = useDataTable({
    data,
    filters,
    onFilter: (e) => setFilters(e.filters),
    globalFilter,
    globalFilterFields: ['name', 'category'],
    filterDelay: 200
});
```

### Lazy loading

In lazy mode the consumer drives data fetching. The hook returns the data as-is and emits `onLazyLoad` whenever page, sort, or filter state changes.

```tsx
const dt = useDataTable({
    data,
    lazy: true,
    paginator: true,
    totalRecords,
    onLazyLoad: (e) => fetchPage(e)
});
```

### Tree mode

Pass nodes with `key`, `data`, and optional `children`; flip `treeMode`. The hook flattens visible nodes (respecting `expandedKeys`), and stamps each row with `_treeLevel`, `_treeHasChildren`, `_treePosInSet`, `_treeSetSize` so the renderer can draw indentation, expanders, and ARIA `aria-level` / `aria-posinset`.

```tsx
const dt = useDataTable({
    data: nodes,
    treeMode: true,
    dataKey: 'key',
    expandedKeys,
    onExpandedChange: (e) => setExpandedKeys(e.value)
});
```

### Cell and row editing

```tsx
const dt = useDataTable({
    data,
    editMode: 'cell',
    onCellEditComplete: (e) => {
        // mutate `data` based on `e.rowData`, `e.field`, `e.newValue`, and call `e.preventDefault()` to keep the cell open
    }
});
```

Switch to `editMode="row"` and use `onRowEditSave` / `onRowEditCancel` for whole-row commits.

## Per-row state with useDataTableRow

For hooking up a single `<tr>` to selection / expansion / reorder / editing, pair `useDataTable` with `useDataTableRow`. It returns a single `rowProps` getter pre-wired with `role`, `aria-rowindex`, click / key handlers, drag handlers when reorder is active, plus tree-mode ARIA (`aria-level`, `aria-expanded`, `aria-posinset`, `aria-setsize`).

```tsx
import { useDataTable, useDataTableRow } from '@primereact/headless/datatable';

const dt = useDataTable({ data, dataKey: 'id', selectionMode: 'multiple' });

function Row({ item, index }) {
    const row = useDataTableRow({ item, index, context: dt });

    return <tr {...row.rowProps}>{/* cells */}</tr>;
}
```

## Styling with data attributes

Every part exposes its state through `data-*` attributes, drive your CSS from those instead of class toggles.

| Scope       | Part              | States                                                                                                                                       |
| ----------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `datatable` | `root`            | `data-loading`, `data-row-hover`, `data-highlight-on-select`, `data-selection-mode`, `data-size`, `data-striped-rows`, `data-show-gridlines` |
| `datatable` | `table-container` |                                                                                                                                              |
| `datatable` | `table`           |                                                                                                                                              |
| `datatable` | `row`             | `data-index`, `data-selected`, `data-drag-source`, `data-dragpoint-top`, `data-dragpoint-bottom`                                             |
| `datatable` | `sort`            | `data-sorted`, `data-unsorted`, `data-sort-order` (`asc` / `desc`)                                                                           |
| `datatable` | `filter`          | `data-display` (`row` / `menu`), `data-active`                                                                                               |
| `datatable` | `cell-editor`     | `data-row-index`, `data-field`, `data-row-key`, `data-editing`                                                                               |
| `datatable` | `row-toggle`      | `data-tree-level`, `aria-expanded`                                                                                                           |
| `datatable` | `column-resizer`  |                                                                                                                                              |

```css
[data-scope='datatable'][data-part='row'][data-selected] {
    background: var(--p-primary-50);
}

[data-scope='datatable'][data-part='sort'][data-sort-order='asc']::after {
    content: '↑';
}

[data-scope='datatable'][data-part='cell-editor'][data-editing] {
    outline: 2px solid var(--p-primary-color);
}

[data-scope='datatable'][data-part='row'][data-dragpoint-top] {
    box-shadow: 0 -2px 0 var(--p-primary-color) inset;
}
```

## API

### useDataTable

> **`useDataTable` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/datatable or the installed `@primereact/types`.

### useDataTableRow

> **`useDataTableRow` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/datatable or the installed `@primereact/types`.

## Accessibility

`role="table"` is applied for flat data and `role="treegrid"` when `treeMode` is enabled. Each row exposes `aria-rowindex` (1-based) and, in tree mode, `aria-level`, `aria-expanded`, `aria-posinset`, and `aria-setsize`. Sort triggers expose `role="button"`, `aria-sort`, and a descriptive `aria-label`. Cell-edit wrappers tag their `<td>` with `data-editable-cell` so Tab traversal can find and focus the next editable cell. See [Primitive](../../primitive/components/datatable.md#accessibility) for full WAI-ARIA compliance details.
