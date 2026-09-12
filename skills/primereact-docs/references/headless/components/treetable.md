# useTreeTable

Hierarchical data table built on useDataTable with treeMode enabled, sort, filter, paginate, select, expand, and edit tree-shaped data.

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

> **`useDataTable` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/treetable or the installed `@primereact/types`.

### useDataTableRow

> **`useDataTableRow` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/treetable or the installed `@primereact/types`.

## Accessibility

`role="treegrid"` is applied to the table; rows expose `aria-level`, `aria-expanded`, `aria-posinset`, `aria-setsize`. Expander buttons emit `aria-expanded` and a descriptive `aria-label`. See [Primitive](../../primitive/components/treetable.md#accessibility) for full WAI-ARIA compliance details.
