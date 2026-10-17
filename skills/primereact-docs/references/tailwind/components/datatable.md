# DataTable

DataTable displays tabular data with sorting, pagination, selection and filtering features.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/datatable.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import {
    DataTable,
    DataTableCell,
    DataTableHeader,
    DataTableFooter,
    DataTableRow,
    DataTableSort,
    DataTableSortIndicator,
    DataTableSortOrder,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTable,
    DataTableTableContainer,
    DataTablePagination
} from '@/components/ui/datatable';
```

```tsx
<DataTable data={items}>
    <DataTableTableContainer>
        <DataTableTable>
            <DataTableTHead>
                <DataTableTHeadRow>
                    <DataTableTHeadCell>Column</DataTableTHeadCell>
                </DataTableTHeadRow>
            </DataTableTHead>
            <DataTableTBody>
                {({ item }) => (
                    <DataTableRow>
                        <DataTableCell>{item.name}</DataTableCell>
                    </DataTableRow>
                )}
            </DataTableTBody>
        </DataTableTable>
    </DataTableTableContainer>
</DataTable>
```

## Examples

### Basic

Displays a list of items in tabular format.

### Striped Rows

Use the `stripedRows` prop to render rows with alternating background colors.

### Selection

Row selection is driven by the `selectionMode` prop (`single` or `multiple`). The `selectionKeys` prop holds a map of selected row keys and `onSelectionChange` fires when the selection changes.

#### Single

One row at a time. Clicking a different row replaces the previous selection.

#### Multiple

Multiple rows without a dedicated column. Pair with `metaKeySelection` so Ctrl/Cmd + Click toggles rows and Shift + Click selects a range.

#### Checkbox

Checkbox-based multiple selection with a header select-all.

#### Keyboard

Arrow Up/Down moves focus between rows, Space or Enter toggles the focused row, and Shift + Arrow extends a range.

### Sort

Wrap a column header with `DataTableSort field="…"` to make it sortable. `DataTableSortIndicator match="asc | desc | unsorted"` renders direction icons and `DataTableSortOrder` shows the priority badge in multi-sort mode.

#### Single

Clicking a column header cycles through ascending, descending and unsorted.

#### Multiple

Hold Ctrl/Cmd and click multiple column headers to sort by several fields at once.

#### Presort

Apply an initial sort on mount via `defaultSortField` + `defaultSortOrder`.

For multi-column presort, use `defaultMultiSortMeta`.

### Pagination

DataTable exposes pagination state via render prop, allowing complete control over the pagination UI.

### Scroll

Set `scrollable` on `DataTable` to enable scrolling.

#### Horizontal

When the combined column widths exceed the container, the table scrolls horizontally.

#### Frozen Columns

Pin multiple columns to either side using `frozen` and `frozenAlignment`.

#### Frozen Rows

Render a `DataTableFrozenTBody` above the regular `DataTableTBody` to keep specific rows pinned to the top.

### Row Expansion

Expand rows to show additional detail content.

### Column Resize

Enable column resizing with drag handles via the `resizableColumns` prop.

#### Fit Mode

Dragging takes width from the adjacent column; total table width stays the same.

#### Expand Mode

Dragging grows or shrinks the whole table; adjacent columns keep their widths.

### Column Reorder

Drag and drop column headers to reorder columns.

### Row Reorder

Drag and drop rows to reorder data.

### Column Group

Multi-level headers with rowspan and colspan.

Sort and filter work on any leaf header cell in a grouped layout.

### Filter

Filtering is driven by a `filters` object passed to `DataTable`. Global search is opt-in via `globalFilter` + `globalFilterFields`.

### Header & Footer

Use `DataTableHeader` and `DataTableFooter` to add summary information above and below the table.

### Export

Export table data to CSV with customizable fields and headers.

### Loading

#### Overlay

Set the `loading` prop on `DataTable` and provide a spinner inside `DataTableLoading`. An absolutely positioned overlay dims the table.

#### Skeleton

Render placeholder rows filled with `Skeleton` elements while the request is in flight.

### Empty State

Custom empty state when no data is available, using `EmptyTBody`.

## Related

### Sub-Components

See [DataTable Primitive](../../primitive/components/datatable.md#api) for the full sub-component API.

### Hooks

See [useDataTable](../../headless/components/datatable.md#api) for the headless hook API.

### Accessibility

See [DataTable Primitive](../../primitive/components/datatable.md#accessibility) for WAI-ARIA compliance details and keyboard support.
