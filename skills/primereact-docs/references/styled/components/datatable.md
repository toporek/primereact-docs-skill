# DataTable

DataTable displays data in tabular format with sorting, filtering, pagination and selection features.

## Usage

```tsx
import { DataTable } from '@primereact/ui/datatable';
```

```tsx
<DataTable.Root data={data}>
    <DataTable.Header />
    <DataTable.TableContainer>
        <DataTable.Table>
            <DataTable.THead>
                <DataTable.THeadRow>
                    <DataTable.THeadCell>Column</DataTable.THeadCell>
                </DataTable.THeadRow>
            </DataTable.THead>
            <DataTable.TBody>
                {({ item }) => (
                    <DataTable.Row>
                        <DataTable.Cell>{item.field}</DataTable.Cell>
                    </DataTable.Row>
                )}
            </DataTable.TBody>
        </DataTable.Table>
    </DataTable.TableContainer>
    <DataTable.Footer />
</DataTable.Root>
```

`DataTable.Header` and `DataTable.Footer` are optional sibling slots around `DataTable.TableContainer` (which is the scrollable wrapper around `DataTable.Table`).

For hierarchical data, see [TreeTable](treetable.md), a sibling component that exposes the same features over a tree structure.

## Examples

### Basic

Displays a list of items in tabular format.

### Size

Use the `size` prop with `small` or `large` to adjust cell padding. Omit for the default size.

```tsx
<DataTable.Root size="small">...</DataTable.Root>
```

### Gridlines

Enable the `showGridlines` prop to render borders between cells.

```tsx
<DataTable.Root showGridlines>...</DataTable.Root>
```

### Striped Rows

The `stripedRows` prop renders rows with alternating background colors.

```tsx
<DataTable.Root stripedRows>...</DataTable.Root>
```

### Selection

Row selection is driven by the `selectionMode` prop (`single` or `multiple`). The `selectionKeys` prop holds a map of selected row keys and `onSelectionChange` fires when the selection changes. When `metaKeySelection` is enabled, Ctrl/Cmd + Click toggles rows and Shift + Click selects a range. For checkbox- and radio-driven UIs, the `DataTable.Selection` render prop exposes `isSelected` / `toggle` at row level and `isAllSelected` / `isSomeSelected` / `toggleAll` at header level.

```tsx
<DataTable.Root data={data} dataKey="id" selectionMode="multiple" selectionKeys={selectionKeys} onSelectionChange={(e) => setSelectionKeys(e.value)}>
    ...
</DataTable.Root>
```

#### Single

One row at a time. Clicking a different row replaces the previous selection.

#### Multiple

Multiple rows without a dedicated column. Pair with `metaKeySelection` so Ctrl/Cmd + Click toggles rows and Shift + Click selects a range; a plain click still replaces the selection.

#### Checkbox

Checkbox-based multiple selection with a header select-all. Use the `Selection` render prop to wire `isSelected` / `toggle` for row-level and `isAllSelected` / `isSomeSelected` / `toggleAll` for the header.

#### Radio

Radio-based single selection. Combine `selectionMode="single"` with the `Selection` render prop in `mode="radio"` on the first cell.

#### Keyboard

Arrow Up/Down moves focus between rows, Space or Enter toggles the focused row, and Shift + Arrow extends a range. Paired with `selectionMode="multiple"` and `metaKeySelection`, the whole flow is keyboard-driven.

### Sort

Wrap a column header with `DataTable.Sort field="…"` to make it sortable. Inside, `DataTable.SortIndicator match="asc | desc | unsorted"` renders direction icons and `DataTable.SortOrder` shows the priority badge in multi-sort mode. Use `removableSort` to let headers cycle back to the unsorted state.

```tsx
<DataTable.Root data={data} dataKey="id" removableSort>
    <DataTable.THeadCell>
        <DataTable.Sort field="name">
            Name
            <DataTable.SortIndicator match="asc">&#9650;</DataTable.SortIndicator>
            <DataTable.SortIndicator match="desc">&#9660;</DataTable.SortIndicator>
            <DataTable.SortOrder />
        </DataTable.Sort>
    </DataTable.THeadCell>
    ...
</DataTable.Root>
```

#### Single

Clicking a column header cycles through ascending, descending, and unsorted.

#### Multiple

Hold Ctrl/Cmd and click multiple column headers to sort by several fields at once. Each sorted column shows its direction via `SortIndicator` and its priority via `SortOrder`.

#### Presort

Apply an initial sort on mount. Use `defaultSortField` + `defaultSortOrder` for a single column; headers stay interactive afterwards.

```tsx
<DataTable.Root data={data} dataKey="id" defaultSortField="price" defaultSortOrder={-1} removableSort>
    ...
</DataTable.Root>
```

For multi-column presort, use `defaultMultiSortMeta` (uncontrolled). Each entry defines a field and direction (`1` ascending, `-1` descending); array order is the sort priority. For fully controlled behaviour, use `multiSortMeta` with `onSortChange` instead.

```tsx
<DataTable.Root
    data={data}
    dataKey="id"
    defaultMultiSortMeta={[
        { field: 'category', order: 1 },
        { field: 'price', order: -1 }
    ]}
    removableSort
>
    ...
</DataTable.Root>
```

### Pagination

DataTable exposes pagination state via render prop, allowing complete control over the pagination UI.

### Scroll

Set `scrollable` on `DataTable.Root` to enable scrolling inside `DataTable.TableContainer`; the thead stays sticky at the top. Pair with `scrollHeight` to cap the viewport or let the container grow with its content.

#### Vertical

A fixed `scrollHeight` enables vertical scrolling with a sticky header. Works well when the dataset is taller than the surrounding card.

#### Horizontal

When the combined column widths exceed the container, the table scrolls horizontally. Give each column a `minWidth` so the columns don't squeeze.

#### Flex

`scrollHeight="flex"` lets the viewport grow and shrink with its flex parent, handy inside resizable dialogs or split layouts.

#### Frozen Columns

Add `frozen` to a `DataTable.Column` to pin it during horizontal scroll. Pinned columns stick to the left edge while the rest scrolls underneath.

Multiple columns can be frozen on both sides, pass `frozenAlignment="right"` to pin to the right edge.

#### Frozen Rows

Render a `DataTable.FrozenTBody` above the regular `DataTable.TBody` to keep specific rows pinned to the top while the rest of the dataset scrolls.

### Row Expansion

Expand rows to show additional detail content. Use `RowToggle` with `RowToggleIndicator` for expand/collapse icons.

### Editing

DataTable supports two edit modes via the `editMode` prop: `cell` for inline cell-by-cell editing and `row` for committing a full row at once. Editing state is keyed by the row key in both modes.

#### Cell

Inline cell editing with `CellEditor`, `CellEditorDisplay` and `CellEditorContent` sub-components following the Inplace pattern. Use `editMode="cell"` on `DataTable.Root` and handle committed values in `onCellEditComplete`.

Cell editing composes with row selection: clicks inside an editable cell start editing, clicks elsewhere on the row drive selection. With a row focused, `Enter` opens its first editable cell; `Space` still toggles the selection.

#### Row

Row-level editing with `RowEditor`, `RowEditorInit`, `RowEditorSave` and `RowEditorCancel` action components. Use `editMode="row"` on `DataTable.Root` with controlled `editingKeys` + `onEditingKeysChange`; the `onRowEditSave` / `onRowEditCancel` events fire with the final row data.

### Row Grouping

Group rows by a field value with `RowGroupHeader` and `RowGroupFooter` for group headers and footers. Grouping operates on **contiguous** rows, so pair `groupField` with `defaultSortField` (or an active sort on the same field) to lay out the data in groups before rendering.

For a spreadsheet-style layout, skip the group header/footer and merge the group column vertically using `rowSpan={groupMeta.groupCount}` on the first row of each group.

### Column Resize

Enable column resizing with drag handles via the `resizableColumns` prop. Two modes are supported via `columnResizeMode`:

- **`fit`** (default): dragging a column takes width from the adjacent column; total table width stays the same.
- **`expand`**: dragging grows or shrinks the whole table; adjacent columns keep their widths. Usually paired with `scrollable` so the table can exceed its viewport.

Both demos enable `showGridlines` to make the effect visible.

#### Fit Mode

#### Expand Mode

### Column Reorder

Drag and drop column headers to reorder columns.

### Row Reorder

Drag and drop rows to reorder data.

### Column Toggle

Show/hide columns dynamically.

### Column Group

Multi-level headers with rowspan and colspan.

Sort and filter work on any leaf header cell in a grouped layout, wrap the header in `DataTable.Sort` and add a filter row below the leaf row.

### Filter

Filtering is driven by a `filters` object passed to `DataTable.Root`; each column wraps its filter UI with `DataTable.Filter` and receives render-prop helpers (value, match mode, constraints, overlay state, …). Global search is opt-in via `globalFilter` + `globalFilterFields`.

#### Basic

`display="row"` renders inline inputs directly under each column header and applies immediately as the user types. Pair with a global `InputText` in a header slot for keyword search.

#### Advanced

`display="menu"` swaps the inline input for a trigger icon that opens a popover. Each field supports multiple constraints joined by an AND/OR operator, a match mode per constraint, and Apply/Clear actions.

### Export

Export table data to CSV with customizable fields and headers.

### Lazy Loading

Server-side data loading with pagination integration.

### Loading

Two patterns for displaying a loading state while data is being fetched.

#### Overlay

Set the `loading` prop on `DataTable.Root` and provide a spinner inside `DataTable.Loading`. An absolutely positioned overlay dims the table and shows the indicator.

#### Skeleton

Render placeholder rows filled with `Skeleton` elements while the request is in flight. This keeps the row layout stable and avoids an overlay that covers existing content.

### Empty State

Custom empty state when no data is available, using `EmptyTBody`.

### Advanced

Sort, filter (per-column + global), and cell editing composed in a single table.

### Database Editor

A spreadsheet-style table editor composed from `DataTable`, `Menu`, `Checkbox`, `Drawer` and `Select`: typed column headers with a per-column menu (sort, copy, edit, freeze, delete), select-all and per-row checkboxes, a global filter, in-place **cell editing**, **frozen columns** that stay pinned while the table scrolls horizontally, an empty-table state, plus working **Insert row** and **Add/Edit column** flows that open a side `Drawer`. Sorting, editing, freezing, row/column add and delete all mutate state live.

## Related

### Sub-Components

See [DataTable Primitive](../../primitive/components/datatable.md#api) for the full sub-component API.

### Hooks

See [useDataTable](../../headless/components/datatable.md#api) for the headless hook API.

### Accessibility

See [DataTable Primitive](../../primitive/components/datatable.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-datatable | Class name of the root element |
| p-datatable-table-container | Class name of the table container element |
| p-datatable-table | Class name of the table element |
| p-datatable-header | Class name of the header element |
| p-datatable-header-row | Class name of the header row element |
| p-datatable-header-cell | Class name of the header cell element |
| p-datatable-body | Class name of the body element |
| p-datatable-row | Class name of the row element |
| p-datatable-cell | Class name of the cell element |
| p-datatable-footer | Class name of the footer element |
| p-datatable-footer-row | Class name of the footer row element |
| p-datatable-footer-cell | Class name of the footer cell element |
| p-datatable-empty | Class name of the empty element |
| p-datatable-sort | Class name of the sort element |
| p-datatable-sort-icon | Class name of the sort icon element |
| p-datatable-pagination | Class name of the pagination element |
| p-datatable-loading | Class name of the loading overlay element |
| p-datatable-row-toggle | Class name of the row toggle element |
| p-datatable-row-expansion | Class name of the row expansion element |
| p-datatable-row-group | Class name of the row group element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| datatable.transition.duration | --p-datatable-transition-duration | Transition duration of root |
| datatable.border.color | --p-datatable-border-color | Border color of root |
| datatable.header.background | --p-datatable-header-background | Background of header |
| datatable.header.border.color | --p-datatable-header-border-color | Border color of header |
| datatable.header.color | --p-datatable-header-color | Color of header |
| datatable.header.border.width | --p-datatable-header-border-width | Border width of header |
| datatable.header.padding | --p-datatable-header-padding | Padding of header |
| datatable.header.sm.padding | --p-datatable-header-sm-padding | Sm padding of header |
| datatable.header.lg.padding | --p-datatable-header-lg-padding | Lg padding of header |
| datatable.header.cell.background | --p-datatable-header-cell-background | Background of header cell |
| datatable.header.cell.hover.background | --p-datatable-header-cell-hover-background | Hover background of header cell |
| datatable.header.cell.selected.background | --p-datatable-header-cell-selected-background | Selected background of header cell |
| datatable.header.cell.border.color | --p-datatable-header-cell-border-color | Border color of header cell |
| datatable.header.cell.color | --p-datatable-header-cell-color | Color of header cell |
| datatable.header.cell.hover.color | --p-datatable-header-cell-hover-color | Hover color of header cell |
| datatable.header.cell.selected.color | --p-datatable-header-cell-selected-color | Selected color of header cell |
| datatable.header.cell.gap | --p-datatable-header-cell-gap | Gap of header cell |
| datatable.header.cell.padding | --p-datatable-header-cell-padding | Padding of header cell |
| datatable.header.cell.focus.ring.width | --p-datatable-header-cell-focus-ring-width | Focus ring width of header cell |
| datatable.header.cell.focus.ring.style | --p-datatable-header-cell-focus-ring-style | Focus ring style of header cell |
| datatable.header.cell.focus.ring.color | --p-datatable-header-cell-focus-ring-color | Focus ring color of header cell |
| datatable.header.cell.focus.ring.offset | --p-datatable-header-cell-focus-ring-offset | Focus ring offset of header cell |
| datatable.header.cell.focus.ring.shadow | --p-datatable-header-cell-focus-ring-shadow | Focus ring shadow of header cell |
| datatable.header.cell.sm.padding | --p-datatable-header-cell-sm-padding | Sm padding of header cell |
| datatable.header.cell.lg.padding | --p-datatable-header-cell-lg-padding | Lg padding of header cell |
| datatable.column.title.font.weight | --p-datatable-column-title-font-weight | Font weight of column title |
| datatable.column.title.font.size | --p-datatable-column-title-font-size | Font size of column title |
| datatable.row.background | --p-datatable-row-background | Background of row |
| datatable.row.hover.background | --p-datatable-row-hover-background | Hover background of row |
| datatable.row.selected.background | --p-datatable-row-selected-background | Selected background of row |
| datatable.row.color | --p-datatable-row-color | Color of row |
| datatable.row.hover.color | --p-datatable-row-hover-color | Hover color of row |
| datatable.row.selected.color | --p-datatable-row-selected-color | Selected color of row |
| datatable.row.focus.ring.width | --p-datatable-row-focus-ring-width | Focus ring width of row |
| datatable.row.focus.ring.style | --p-datatable-row-focus-ring-style | Focus ring style of row |
| datatable.row.focus.ring.color | --p-datatable-row-focus-ring-color | Focus ring color of row |
| datatable.row.focus.ring.offset | --p-datatable-row-focus-ring-offset | Focus ring offset of row |
| datatable.row.focus.ring.shadow | --p-datatable-row-focus-ring-shadow | Focus ring shadow of row |
| datatable.row.striped.background | --p-datatable-row-striped-background | Striped background of row |
| datatable.body.cell.border.color | --p-datatable-body-cell-border-color | Border color of body cell |
| datatable.body.cell.padding | --p-datatable-body-cell-padding | Padding of body cell |
| datatable.body.cell.sm.padding | --p-datatable-body-cell-sm-padding | Sm padding of body cell |
| datatable.body.cell.lg.padding | --p-datatable-body-cell-lg-padding | Lg padding of body cell |
| datatable.body.cell.selected.border.color | --p-datatable-body-cell-selected-border-color | Selected border color of body cell |
| datatable.body.cell.font.weight | --p-datatable-body-cell-font-weight | Font weight of body cell |
| datatable.body.cell.font.size | --p-datatable-body-cell-font-size | Font size of body cell |
| datatable.footer.cell.background | --p-datatable-footer-cell-background | Background of footer cell |
| datatable.footer.cell.border.color | --p-datatable-footer-cell-border-color | Border color of footer cell |
| datatable.footer.cell.color | --p-datatable-footer-cell-color | Color of footer cell |
| datatable.footer.cell.padding | --p-datatable-footer-cell-padding | Padding of footer cell |
| datatable.footer.cell.sm.padding | --p-datatable-footer-cell-sm-padding | Sm padding of footer cell |
| datatable.footer.cell.lg.padding | --p-datatable-footer-cell-lg-padding | Lg padding of footer cell |
| datatable.column.footer.font.weight | --p-datatable-column-footer-font-weight | Font weight of column footer |
| datatable.column.footer.font.size | --p-datatable-column-footer-font-size | Font size of column footer |
| datatable.footer.background | --p-datatable-footer-background | Background of footer |
| datatable.footer.border.color | --p-datatable-footer-border-color | Border color of footer |
| datatable.footer.color | --p-datatable-footer-color | Color of footer |
| datatable.footer.border.width | --p-datatable-footer-border-width | Border width of footer |
| datatable.footer.padding | --p-datatable-footer-padding | Padding of footer |
| datatable.footer.sm.padding | --p-datatable-footer-sm-padding | Sm padding of footer |
| datatable.footer.lg.padding | --p-datatable-footer-lg-padding | Lg padding of footer |
| datatable.drop.point.color | --p-datatable-drop-point-color | Color of drop point |
| datatable.column.resizer.width | --p-datatable-column-resizer-width | Width of column resizer |
| datatable.resize.indicator.width | --p-datatable-resize-indicator-width | Width of resize indicator |
| datatable.resize.indicator.color | --p-datatable-resize-indicator-color | Color of resize indicator |
| datatable.sort.icon.color | --p-datatable-sort-icon-color | Color of sort icon |
| datatable.sort.icon.hover.color | --p-datatable-sort-icon-hover-color | Hover color of sort icon |
| datatable.sort.icon.size | --p-datatable-sort-icon-size | Size of sort icon |
| datatable.loading.icon.size | --p-datatable-loading-icon-size | Size of loading icon |
| datatable.row.toggle.button.hover.background | --p-datatable-row-toggle-button-hover-background | Hover background of row toggle button |
| datatable.row.toggle.button.selected.hover.background | --p-datatable-row-toggle-button-selected-hover-background | Selected hover background of row toggle button |
| datatable.row.toggle.button.color | --p-datatable-row-toggle-button-color | Color of row toggle button |
| datatable.row.toggle.button.hover.color | --p-datatable-row-toggle-button-hover-color | Hover color of row toggle button |
| datatable.row.toggle.button.selected.hover.color | --p-datatable-row-toggle-button-selected-hover-color | Selected hover color of row toggle button |
| datatable.row.toggle.button.size | --p-datatable-row-toggle-button-size | Size of row toggle button |
| datatable.row.toggle.button.border.radius | --p-datatable-row-toggle-button-border-radius | Border radius of row toggle button |
| datatable.row.toggle.button.focus.ring.width | --p-datatable-row-toggle-button-focus-ring-width | Focus ring width of row toggle button |
| datatable.row.toggle.button.focus.ring.style | --p-datatable-row-toggle-button-focus-ring-style | Focus ring style of row toggle button |
| datatable.row.toggle.button.focus.ring.color | --p-datatable-row-toggle-button-focus-ring-color | Focus ring color of row toggle button |
| datatable.row.toggle.button.focus.ring.offset | --p-datatable-row-toggle-button-focus-ring-offset | Focus ring offset of row toggle button |
| datatable.row.toggle.button.focus.ring.shadow | --p-datatable-row-toggle-button-focus-ring-shadow | Focus ring shadow of row toggle button |
| datatable.filter.inline.gap | --p-datatable-filter-inline-gap | Inline gap of filter |
| datatable.filter.overlay.select.background | --p-datatable-filter-overlay-select-background | Overlay select background of filter |
| datatable.filter.overlay.select.border.color | --p-datatable-filter-overlay-select-border-color | Overlay select border color of filter |
| datatable.filter.overlay.select.border.radius | --p-datatable-filter-overlay-select-border-radius | Overlay select border radius of filter |
| datatable.filter.overlay.select.color | --p-datatable-filter-overlay-select-color | Overlay select color of filter |
| datatable.filter.overlay.select.shadow | --p-datatable-filter-overlay-select-shadow | Overlay select shadow of filter |
| datatable.filter.overlay.popover.background | --p-datatable-filter-overlay-popover-background | Overlay popover background of filter |
| datatable.filter.overlay.popover.border.color | --p-datatable-filter-overlay-popover-border-color | Overlay popover border color of filter |
| datatable.filter.overlay.popover.border.radius | --p-datatable-filter-overlay-popover-border-radius | Overlay popover border radius of filter |
| datatable.filter.overlay.popover.color | --p-datatable-filter-overlay-popover-color | Overlay popover color of filter |
| datatable.filter.overlay.popover.shadow | --p-datatable-filter-overlay-popover-shadow | Overlay popover shadow of filter |
| datatable.filter.overlay.popover.padding | --p-datatable-filter-overlay-popover-padding | Overlay popover padding of filter |
| datatable.filter.overlay.popover.gap | --p-datatable-filter-overlay-popover-gap | Overlay popover gap of filter |
| datatable.filter.rule.border.color | --p-datatable-filter-rule-border-color | Rule border color of filter |
| datatable.filter.constraint.list.padding | --p-datatable-filter-constraint-list-padding | Constraint list padding of filter |
| datatable.filter.constraint.list.gap | --p-datatable-filter-constraint-list-gap | Constraint list gap of filter |
| datatable.filter.constraint.focus.background | --p-datatable-filter-constraint-focus-background | Constraint focus background of filter |
| datatable.filter.constraint.selected.background | --p-datatable-filter-constraint-selected-background | Constraint selected background of filter |
| datatable.filter.constraint.selected.focus.background | --p-datatable-filter-constraint-selected-focus-background | Constraint selected focus background of filter |
| datatable.filter.constraint.color | --p-datatable-filter-constraint-color | Constraint color of filter |
| datatable.filter.constraint.focus.color | --p-datatable-filter-constraint-focus-color | Constraint focus color of filter |
| datatable.filter.constraint.selected.color | --p-datatable-filter-constraint-selected-color | Constraint selected color of filter |
| datatable.filter.constraint.selected.focus.color | --p-datatable-filter-constraint-selected-focus-color | Constraint selected focus color of filter |
| datatable.filter.constraint.separator.border.color | --p-datatable-filter-constraint-separator-border-color | Constraint separator border color of filter |
| datatable.filter.constraint.padding | --p-datatable-filter-constraint-padding | Constraint padding of filter |
| datatable.filter.constraint.border.radius | --p-datatable-filter-constraint-border-radius | Constraint border radius of filter |
| datatable.paginator.top.border.color | --p-datatable-paginator-top-border-color | Border color of paginator top |
| datatable.paginator.top.border.width | --p-datatable-paginator-top-border-width | Border width of paginator top |
| datatable.paginator.bottom.border.color | --p-datatable-paginator-bottom-border-color | Border color of paginator bottom |
| datatable.paginator.bottom.border.width | --p-datatable-paginator-bottom-border-width | Border width of paginator bottom |
