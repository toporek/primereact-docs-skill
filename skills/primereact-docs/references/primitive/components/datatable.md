# DataTable

An unstyled data table with sort, filter, pagination, selection, expansion, editing, column reorder/resize, row reorder, grouping, frozen sections, CSV export, and tree mode.

Compose a fully custom table with complete control over markup, layout, and styling. Every feature is opt-in and driven by data attributes.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { DataTable } from 'primereact/datatable';
import * as React from 'react';

const cellStyle: React.CSSProperties = { padding: '0.5rem 0.75rem' };
const headStyle: React.CSSProperties = { ...cellStyle, textAlign: 'left', fontWeight: 600, borderBottom: '1px solid var(--p-content-border-color)' };
const rowStyle: React.CSSProperties = { borderBottom: '1px solid var(--p-content-border-color)' };

export default function BasicDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    return (
        <div style={{ width: '100%' }}>
            <DataTable.Root data={products} dataKey="id">
                <DataTable.TableContainer>
                    <DataTable.Table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={headStyle}>Code</DataTable.THeadCell>
                                <DataTable.THeadCell style={headStyle}>Name</DataTable.THeadCell>
                                <DataTable.THeadCell style={headStyle}>Category</DataTable.THeadCell>
                                <DataTable.THeadCell style={headStyle}>Price</DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: Record<string, unknown> }) => (
                                <DataTable.Row style={rowStyle}>
                                    <DataTable.Cell style={cellStyle}>{String(item.code)}</DataTable.Cell>
                                    <DataTable.Cell style={cellStyle}>{String(item.name)}</DataTable.Cell>
                                    <DataTable.Cell style={cellStyle}>{String(item.category)}</DataTable.Cell>
                                    <DataTable.Cell style={cellStyle}>${String(item.price)}</DataTable.Cell>
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

- Compound component API with sub-components: `Root`, `Header`, `TableContainer`, `Table`, `THead`, `THeadRow`, `THeadCell`, `TBody`, `FrozenTBody`, `Row`, `Cell`, `TFoot`, `TFootRow`, `TFootCell`, `Footer`, `Sort`, `SortIndicator`, `SortOrder`, `Filter`, `Pagination`, `Selection`, `RowToggle`, `RowToggleIndicator`, `RowExpansion`, `RowGroupHeader`, `RowGroupFooter`, `CellEditor`, `CellEditorDisplay`, `CellEditorContent`, `RowEditor`, `RowEditorInit`, `RowEditorSave`, `RowEditorCancel`, `ColumnToggle`, `ColumnReorder`, `ColumnReorderTarget`, `ColumnResizer`, `ColumnResizeIndicator`, `RowReorder`, `Export`, `Loading`, `EmptyTBody`
- Sort (single, multi, removable), row and menu filters per column, plus a global filter across selected fields
- Pagination with built-in slicing or lazy mode
- Selection in single, multiple checkbox, multiple row, or radio modes; Shift for range, Ctrl/Meta to add or remove
- Cell or row editing with Tab traversal, outside-click commit, and Escape cancel
- Column reorder, column resize (`fit` or `expand`), and row reorder via drag handles
- Frozen left and right columns via the `frozen` prop on `Cell` and `THeadCell`
- Tree mode reuses the same components; flip `treeMode` on `Root` and feed it `{ key, data, children? }` nodes
- CSV export with custom fields and headers

## Usage

```tsx
import { DataTable } from 'primereact/datatable';
```

```tsx
<DataTable.Root data={products} dataKey="id">
    <DataTable.TableContainer>
        <DataTable.Table>
            <DataTable.THead>
                <DataTable.THeadRow>
                    <DataTable.THeadCell>Name</DataTable.THeadCell>
                    <DataTable.THeadCell>Category</DataTable.THeadCell>
                </DataTable.THeadRow>
            </DataTable.THead>
            <DataTable.TBody>
                {({ item }) => (
                    <DataTable.Row>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell>{item.category}</DataTable.Cell>
                    </DataTable.Row>
                )}
            </DataTable.TBody>
        </DataTable.Table>
    </DataTable.TableContainer>
</DataTable.Root>
```

## Behavior

### Render Function Children

`DataTable.TBody` accepts a render function that receives `{ item, index, groupMeta }` for each row. Stateful sub-components (`Selection`, `Pagination`, `Filter`, `Sort`, `RowToggle`, `CellEditor`) also expose render-prop slot context so you can read live state and call exposed methods.

```tsx
<DataTable.Sort field="price">{({ isSorted, sortOrder }) => <span>Price {isSorted ? (sortOrder === 1 ? '↑' : '↓') : ''}</span>}</DataTable.Sort>
```

### Polymorphic Rendering

Use `as` on any sub-component to swap the underlying element or render through another component (e.g. a styled `Button` for `Sort` triggers).

```tsx
<DataTable.RowEditorInit as={Button} variant="text" />
```

### Sort

Wrap header content in `DataTable.Sort` and provide `field`. Hold Ctrl / Cmd while clicking to multi-sort. Enable `removableSort` on `Root` for tri-state click cycles.

```tsx
<DataTable.THeadCell>
    <DataTable.Sort field="price">
        Price <DataTable.SortIndicator match="asc">↑</DataTable.SortIndicator>
    </DataTable.Sort>
</DataTable.THeadCell>
```

### Filter

Render `DataTable.Filter` for each filterable column and a separate keyword input bound to `globalFilter`. Use `display="row"` for inline filters that apply on every change, or `display="menu"` for an overlay with multiple constraints, AND/OR operators, and explicit Apply / Clear.

```tsx
<DataTable.Filter field="name" display="row" dataType="text">
    {({ value, onChange }) => <input value={value ?? ''} onChange={(e) => onChange(e, e.target.value)} />}
</DataTable.Filter>
```

### Selection

Set `selectionMode` on `Root` to `'single'` or `'multiple'` and wrap each cell or header trigger in `DataTable.Selection`. The slot context exposes `isSelected` / `toggle` for rows and `isAllSelected` / `isSomeSelected` / `toggleAll` for headers.

```tsx
<DataTable.Selection>{({ isSelected, toggle }) => <Checkbox checked={isSelected} onCheckedChange={toggle} />}</DataTable.Selection>
```

### Expansion & Tree Mode

`DataTable.RowToggle` reads expansion state automatically and renders a leaf-spacer in tree mode when a row has no children, so indentation stays aligned. Setting `treeMode` on `Root` flips the table to `role="treegrid"` and stamps tree ARIA on every row.

```tsx
<DataTable.Root treeMode dataKey="key" data={nodes}>
    {/* same Table / THead / TBody markup; rows now indent automatically */}
</DataTable.Root>
```

### Cell and Row Editing

Wrap each editable cell in `DataTable.CellEditor` with `field` / `rowIndex` / `rowData`, and supply two slots: `Display` (read mode) and `Content` (edit mode). When `editMode="row"`, replace the per-cell switch with `RowEditor.Init` / `Save` / `Cancel` triggers in a dedicated cell.

```tsx
<DataTable.CellEditor field="price" rowIndex={index} rowData={item}>
    <DataTable.CellEditorDisplay>{item.price}</DataTable.CellEditorDisplay>
    <DataTable.CellEditorContent>
        <input defaultValue={item.price} />
    </DataTable.CellEditorContent>
</DataTable.CellEditor>
```

### Column Reorder & Resize

Set `reorderableColumns` on `Root` and add a `DataTable.ColumnReorder` handle inside each `THeadCell`. For resizing, set `resizableColumns` and drop a `DataTable.ColumnResizer` inside the header, pair it with `ColumnResizeIndicator` for a live drag line.

### Row Reorder

Set `reorderableRows` on `Root` and add a `DataTable.RowReorder` handle in a row cell. The hook arms the surrounding `<tr>` as the drag source on pointer-down and emits `onRowReorder` with the new array.

### Pagination

Render `DataTable.Pagination` anywhere below the table; it acts as a render-prop wrapper that exposes `page`, `pageCount`, `rows`, `totalRecords`, `first`, `canPrev`, `canNext`, `onPageChange`, and `onRowsChange`.

```tsx
<DataTable.Pagination>{({ page, pageCount, onPageChange }) => <div>{/* custom paginator UI */}</div>}</DataTable.Pagination>
```

## Pass Through

## API

### DataTableRoot

> **API/props table for `DataTableRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute                  | Value                                       |
| -------------------------- | ------------------------------------------- |
| `data-scope`               | `"datatable"`                               |
| `data-part`                | `"root"`                                    |
| `data-loading`             | Present while loading                       |
| `data-row-hover`           | Present when `rowHover` is true             |
| `data-highlight-on-select` | Present when selected rows should highlight |
| `data-selection-mode`      | `"single"` \| `"multiple"`                  |
| `data-size`                | `"small"` \| `"large"`                      |
| `data-striped-rows`        | Present when `stripedRows` is true          |
| `data-show-gridlines`      | Present when `showGridlines` is true        |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| header | DataTableRootPassThroughType> | Used to pass attributes to the header's DOM element (above the table). |
| tableContainer | DataTableRootPassThroughType> | Used to pass attributes to the table container's DOM element. |
| table | DataTableRootPassThroughType> | Used to pass attributes to the table's DOM element. |
| head | DataTableRootPassThroughType> | Used to pass attributes to the thead's DOM element. |
| theadRow | DataTableRootPassThroughType> | Used to pass attributes to the thead row's DOM element. |
| theadCell | DataTableRootPassThroughType> | Used to pass attributes to the thead cell's DOM element. |
| body | DataTableRootPassThroughType> | Used to pass attributes to the tbody's DOM element. |
| frozenBody | DataTableRootPassThroughType> | Used to pass attributes to the frozen tbody's DOM element. |
| row | DataTableRootPassThroughType> | Used to pass attributes to the row's DOM element. |
| cell | DataTableRootPassThroughType> | Used to pass attributes to the cell's DOM element. |
| foot | DataTableRootPassThroughType> | Used to pass attributes to the tfoot's DOM element. |
| tfootRow | DataTableRootPassThroughType> | Used to pass attributes to the tfoot row's DOM element. |
| tfootCell | DataTableRootPassThroughType> | Used to pass attributes to the tfoot cell's DOM element. |
| footer | DataTableRootPassThroughType> | Used to pass attributes to the footer's DOM element (below the table). |
| emptyTBody | DataTableRootPassThroughType> | Used to pass attributes to the empty body's DOM element. |
| loading | DataTableRootPassThroughType> | Used to pass attributes to the loading overlay's DOM element. |
| sort | DataTableRootPassThroughType> | Used to pass attributes to the sort trigger's DOM element. |
| sortIndicator | DataTableRootPassThroughType> | Used to pass attributes to the sort indicator's DOM element. |
| sortOrder | DataTableRootPassThroughType> | Used to pass attributes to the multi-sort order badge's DOM element. |
| filter | DataTableRootPassThroughType> | Used to pass attributes to the filter's DOM element. |
| rowToggle | DataTableRootPassThroughType> | Used to pass attributes to the row toggle's DOM element. |
| rowToggleIndicator | DataTableRootPassThroughType> | Used to pass attributes to the row toggle indicator's DOM element. |
| rowExpansion | DataTableRootPassThroughType> | Used to pass attributes to the row expansion's DOM element. |
| rowGroupHeader | DataTableRootPassThroughType> | Used to pass attributes to the row group header's DOM element. |
| rowGroupFooter | DataTableRootPassThroughType> | Used to pass attributes to the row group footer's DOM element. |
| cellEditor | DataTableRootPassThroughType> | Used to pass attributes to the cell editor's DOM element. |
| cellEditorDisplay | DataTableRootPassThroughType> | Used to pass attributes to the cell editor display element. |
| cellEditorContent | DataTableRootPassThroughType> | Used to pass attributes to the cell editor content element. |
| rowEditorInit | DataTableRootPassThroughType> | Used to pass attributes to the row editor init button. |
| rowEditorSave | DataTableRootPassThroughType> | Used to pass attributes to the row editor save button. |
| rowEditorCancel | DataTableRootPassThroughType> | Used to pass attributes to the row editor cancel button. |
| rowReorder | DataTableRootPassThroughType> | Used to pass attributes to the row reorder handle. |
| columnReorder | DataTableRootPassThroughType> | Used to pass attributes to the column reorder handle. |
| columnResizer | DataTableRootPassThroughType> | Used to pass attributes to the column resizer handle. |
| columnResizeIndicator | DataTableRootPassThroughType> | Used to pass attributes to the column resize indicator's DOM element. |
| export | DataTableRootPassThroughType> | Used to pass attributes to the export trigger's DOM element. |

### DataTableHeader

> **API/props table for `DataTableHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTableContainer

> **API/props table for `DataTableTableContainer` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value               |
| ------------ | ------------------- |
| `data-scope` | `"datatable"`       |
| `data-part`  | `"table-container"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTableContainerPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTable

> **API/props table for `DataTableTable` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                     |
| ------------ | ------------------------- |
| `data-scope` | `"datatable"`             |
| `data-part`  | `"table"`                 |
| `role`       | `"table"` or `"treegrid"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTablePassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTHead

> **API/props table for `DataTableTHead` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTHeadPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTHeadRow

> **API/props table for `DataTableTHeadRow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTHeadRowPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTHeadCell

> **API/props table for `DataTableTHeadCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute           | Value                           |
| ------------------- | ------------------------------- |
| `data-frozen`       | Present when the cell is frozen |
| `data-align-frozen` | `"left"` \| `"right"`           |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTHeadCellPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTBody

> **API/props table for `DataTableTBody` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTBodyPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableFrozenTBody

> **API/props table for `DataTableFrozenTBody` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableFrozenTBodyPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableRow

> **API/props table for `DataTableRow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute               | Value                                                  |
| ----------------------- | ------------------------------------------------------ |
| `data-scope`            | `"datatable"`                                          |
| `data-part`             | `"row"`                                                |
| `data-index`            | Zero-based row index in the rendered slice             |
| `data-selected`         | Present when the row is selected                       |
| `aria-selected`         | Reflects selection state when selection mode is active |
| `aria-level`            | Tree depth (one-based) in tree mode                    |
| `aria-expanded`         | Reflects expansion when the row has children           |
| `aria-posinset`         | One-based position among siblings (tree mode)          |
| `aria-setsize`          | Total siblings at the same depth (tree mode)           |
| `data-drag-source`      | Present while dragging this row                        |
| `data-dragpoint-top`    | Present when drop indicator targets the top edge       |
| `data-dragpoint-bottom` | Present when drop indicator targets the bottom edge    |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableCell

> **API/props table for `DataTableCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute            | Value                                  |
| -------------------- | -------------------------------------- |
| `data-scope`         | `"datatable"`                          |
| `data-part`          | `"cell"`                               |
| `role`               | `"gridcell"`                           |
| `data-frozen`        | Present when the cell is frozen        |
| `data-align-frozen`  | `"left"` \| `"right"`                  |
| `data-editable-cell` | Present when wrapped by a `CellEditor` |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableCellPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTFoot

> **API/props table for `DataTableTFoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTFootPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTFootRow

> **API/props table for `DataTableTFootRow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTFootRowPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableTFootCell

> **API/props table for `DataTableTFootCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableTFootCellPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableFooter

> **API/props table for `DataTableFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableSort

> **API/props table for `DataTableSort` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                                               |
| ----------------- | --------------------------------------------------- |
| `data-scope`      | `"datatable"`                                       |
| `data-part`       | `"sort"`                                            |
| `role`            | `"button"`                                          |
| `data-sorted`     | Present when this column is part of the active sort |
| `data-unsorted`   | Present when this column is not part of the sort    |
| `data-sort-order` | `"asc"` \| `"desc"` when sorted                     |
| `aria-sort`       | `"ascending"` \| `"descending"` \| `"none"`         |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableSortPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableSortIndicator

> **API/props table for `DataTableSortIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableSortIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableSortOrder

> **API/props table for `DataTableSortOrder` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableSortOrderPassThroughType> |  |

### DataTableFilter

> **API/props table for `DataTableFilter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                                        |
| -------------- | -------------------------------------------- |
| `data-scope`   | `"datatable"`                                |
| `data-part`    | `"filter"`                                   |
| `data-display` | `"row"` \| `"menu"`                          |
| `data-active`  | Present when the column has an active filter |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableFilterPassThroughType> |  |

### DataTablePagination

> **API/props table for `DataTablePagination` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTablePaginationPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableSelection

> **API/props table for `DataTableSelection` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableSelectionPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableRowToggle

> **API/props table for `DataTableRowToggle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                                            |
| ----------------- | ------------------------------------------------ |
| `data-scope`      | `"datatable"`                                    |
| `data-part`       | `"row-toggle"` (button) or `"row-toggle-spacer"` |
| `data-tree-level` | Zero-based tree depth (tree mode only)           |
| `aria-expanded`   | Reflects current expansion state                 |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowTogglePassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableRowToggleIndicator

> **API/props table for `DataTableRowToggleIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowToggleIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableRowExpansion

> **API/props table for `DataTableRowExpansion` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowExpansionPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableRowGroupHeader / DataTableRowGroupFooter

`<DataTable.RowGroupHeader>` and `<DataTable.RowGroupFooter>` render header / footer rows for grouped data when `groupField` is set on `Root`. They forward all props to a `<tr>` element and render the row only at the start (header) / end (footer) of each group as reported by the headless grouping metadata.

```tsx
<DataTable.TBody>
    {({ item, index, groupMeta }) => (
        <>
            {groupMeta?.isGroupStart && (
                <DataTable.RowGroupHeader>
                    <DataTable.Cell colSpan={3}>{String(groupMeta.groupValue)}</DataTable.Cell>
                </DataTable.RowGroupHeader>
            )}
            <DataTable.Row>{/* … */}</DataTable.Row>
            {groupMeta?.isGroupEnd && (
                <DataTable.RowGroupFooter>
                    <DataTable.Cell colSpan={3}>Total: {groupMeta.groupCount}</DataTable.Cell>
                </DataTable.RowGroupFooter>
            )}
        </>
    )}
</DataTable.TBody>
```

### DataTableCellEditor

> **API/props table for `DataTableCellEditor` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                         |
| ---------------- | --------------------------------------------- |
| `data-scope`     | `"datatable"`                                 |
| `data-part`      | `"cell-editor"`                               |
| `data-row-index` | The row index (used by Tab traversal)         |
| `data-field`     | The field name (used by Tab traversal)        |
| `data-row-key`   | The row key (used to track edits across sort) |
| `data-editing`   | Present while the cell is in edit mode        |

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableCellEditorPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableCellEditorDisplay

> **API/props table for `DataTableCellEditorDisplay` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableCellEditorDisplayPassThroughType> |  |

### DataTableCellEditorContent

> **API/props table for `DataTableCellEditorContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableCellEditorContentPassThroughType> |  |

### DataTableRowEditor

> **API/props table for `DataTableRowEditor` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowEditorPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableRowEditorInit

> **API/props table for `DataTableRowEditorInit` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowEditorInitPassThroughType> |  |

### DataTableRowEditorSave

> **API/props table for `DataTableRowEditorSave` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowEditorSavePassThroughType> |  |

### DataTableRowEditorCancel

> **API/props table for `DataTableRowEditorCancel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowEditorCancelPassThroughType> |  |

### DataTableColumnToggle

> **API/props table for `DataTableColumnToggle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableColumnTogglePassThroughType> |  |

### DataTableColumnReorder

> **API/props table for `DataTableColumnReorder` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableColumnReorderPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableColumnReorderTarget

> **API/props table for `DataTableColumnReorderTarget` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableColumnReorderTargetPassThroughType> |  |

### DataTableColumnResizer

> **API/props table for `DataTableColumnResizer` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableColumnResizerPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableColumnResizeIndicator

> **API/props table for `DataTableColumnResizeIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableColumnResizeIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableRowReorder

> **API/props table for `DataTableRowReorder` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableRowReorderPassThroughType> |  |

### DataTableExport

> **API/props table for `DataTableExport` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableExportPassThroughType> |  |

### DataTableLoading

> **API/props table for `DataTableLoading` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableLoadingPassThroughType> | Used to pass attributes to the root's DOM element. |

### DataTableEmptyTBody

> **API/props table for `DataTableEmptyTBody` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | DataTableEmptyTBodyPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

`DataTable.Table` applies `role="table"` for flat data and `role="treegrid"` when `treeMode` is enabled. Each row exposes `role="row"` plus `aria-rowindex` (1-based) and, in tree mode, `aria-level`, `aria-expanded`, `aria-posinset`, and `aria-setsize`. Cells use `role="gridcell"`. Sort triggers expose `role="button"`, `aria-sort`, and a descriptive `aria-label`. Selection wrappers forward checkbox/radio semantics from the underlying input. Provide an accessible name on `Root` via `aria-label` or `aria-labelledby` when the table has no visible heading.

### Keyboard Support

| Key                               | Function                                                                                      |
| --------------------------------- | --------------------------------------------------------------------------------------------- |
| `tab`                             | Moves focus through interactive elements (sort triggers, filter inputs, rows).                |
| `arrow up` / `arrow down`         | Moves focus between rows when a row is focused.                                               |
| `shift + arrow up` / `arrow down` | Extends row selection while moving focus.                                                     |
| `arrow left`                      | In tree mode, collapses the focused row, or moves focus to its parent if already collapsed.   |
| `arrow right`                     | In tree mode, expands the focused row, or moves focus to its first child if already expanded. |
| `home` / `end`                    | Moves focus to the first / last row.                                                          |
| `space`                           | Toggles selection on the focused row.                                                         |
| `enter`                           | Toggles selection on the focused row, or opens the first editable cell in `cell` edit mode.   |
| `escape`                          | Cancels the active cell edit and returns focus to the row.                                    |
| `tab` (in cell edit)              | Commits the edit and moves to the next editable cell, wrapping across rows.                   |
| `shift + tab` (in cell edit)      | Commits the edit and moves to the previous editable cell.                                     |
| `enter` (in cell edit)            | Commits the edit and stays in place.                                                          |
