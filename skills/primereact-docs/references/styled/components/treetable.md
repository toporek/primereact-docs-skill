# TreeTable

TreeTable renders hierarchical data with the same feature set as DataTable, sort, filter, pagination, selection, scroll, frozen, resize, reorder, editing, export.

## Usage

```tsx
import { DataTable } from '@primereact/ui/datatable';
```

TreeTable is DataTable with the `treeMode` prop set on `DataTable.Root`. Every feature shown in [DataTable](datatable.md) continues to work over the flattened tree, the only structural difference is that the first column wraps its cell content with `DataTable.RowToggle` to render the expand/collapse chevron.

```tsx
<DataTable.Root data={treeNodes} dataKey="key" treeMode expandedKeys={expandedKeys} onExpandedChange={(e) => setExpandedKeys(e.value)}>
    <DataTable.TableContainer>
        <DataTable.Table>
            <DataTable.THead>
                <DataTable.THeadRow>
                    <DataTable.THeadCell>Name</DataTable.THeadCell>
                </DataTable.THeadRow>
            </DataTable.THead>
            <DataTable.TBody>
                {({ item }) => (
                    <DataTable.Row>
                        <DataTable.Cell>
                            <DataTable.RowToggle />
                            {item.name}
                        </DataTable.Cell>
                    </DataTable.Row>
                )}
            </DataTable.TBody>
        </DataTable.Table>
    </DataTable.TableContainer>
</DataTable.Root>
```

### Data shape

Each node carries its own `key`, arbitrary `data`, and an optional `children` array:

```tsx
type TreeNode = {
    key: string;
    data: Record<string, unknown>;
    children?: TreeNode[];
};
```

Set `dataKey="key"` and resolve column values against `item.<field>`, the component flattens `data` onto the row so columns can read directly.

Rows are augmented with derived fields the component consumes internally: `_treeLevel`, `_treeHasChildren`, `_treePosInSet`, `_treeSetSize`. These drive the ARIA attributes (`aria-level`, `aria-expanded`, `aria-posinset`, `aria-setsize`) automatically.

## Examples

### Basic

Displays hierarchical nodes with expand/collapse chevrons on the first column.

### Size

Use the `size` prop with `small` or `large` to adjust cell padding.

### Gridlines

Enable the `showGridlines` prop to render borders between cells.

### Striped Rows

The `stripedRows` prop renders rows with alternating background colors across the flattened tree.

### Selection

Selection works exactly like DataTable, `selectionMode` controls the mode, and the `DataTable.Selection` render prop exposes helpers for row-level and header-level toggles. Checkbox selection propagates across the hierarchy with tri-state semantics.

#### Single

#### Multiple

Pair `selectionMode="multiple"` with `metaKeySelection` so Ctrl/Cmd + Click toggles rows and Shift + Click selects a range.

#### Checkbox

Checkbox column with propagating selection, toggling a parent selects all descendants, partial state renders as indeterminate.

#### Radio

#### Keyboard

Arrow Up/Down moves focus between rows, Arrow Right/Left expands/collapses, Space or Enter toggles the focused row, and Shift + Arrow extends a range.

### Sort

Sorting is evaluated per tree level, siblings are sorted against each other while the hierarchy stays intact.

#### Single

#### Multiple

#### Presort

### Pagination

Pagination operates on root-level nodes, expanded children never get paginated away.

### Scroll

`scrollable` + `scrollHeight` works the same way as in DataTable; the flattened rows scroll while the sticky header stays pinned.

#### Vertical

#### Horizontal

#### Flex

#### Frozen Columns

Pin the tree column (or any column) during horizontal scroll with the `frozen` prop on `DataTable.Column`.

Multiple columns can be frozen on both sides, pass `alignFrozen="right"` to pin to the right edge.

#### Frozen Rows

Keep specific nodes pinned above the scrollable body by rendering them inside `DataTable.FrozenTBody`.

### Editing

Both `editMode="cell"` and `editMode="row"` compose with `treeMode`. Editing state is keyed by the row key, so collapsing or expanding other branches never drops edits in flight.

#### Cell

Cell editing composes with row selection.

#### Row

### Column Resize

Resize works in tree mode via the `resizableColumns` prop with `columnResizeMode` (`fit` or `expand`).

#### Fit Mode

#### Expand Mode

### Column Reorder

Drag and drop column headers to reorder columns.

### Row Reorder

Root-level row reordering via the drag handle on `DataTable.RowReorder`. Children stay attached to their parents.

### Column Toggle

Show/hide columns and drag to reorder them in a popover.

### Column Group

Multi-level headers with `rowSpan` and `colSpan`, plus an aggregate `TFoot`.

Sort and filter work on any leaf header cell in a grouped layout, wrap the header in `DataTable.Sort` and add a filter row below the leaf row.

### Filter

Filtering uses the same `filters` + `onFilter` API as DataTable; `treeMode` honours it against the flattened tree. For the standalone hook used outside DataTable, see [`useTreeFilter`](../../hooks/use-tree-filter.md).

#### Basic

`display="row"` renders inline inputs directly under each column header and applies as the user types.

#### Advanced

`display="menu"` swaps the inline input for a trigger icon that opens a popover with multiple constraints, match mode, operator, and Apply/Clear buttons.

### Export

Only expanded (visible) rows are exported to CSV.

### Lazy Loading

Fetch each branch on demand when the user expands it.

### Loading

#### Overlay

#### Skeleton

### Empty State

Use `EmptyTBody` for a custom empty-state view.

### Advanced

Sort, filter (per-column + global), and cell editing composed in a single tree.

## Related

### Theming

TreeTable inherits every theme token, CSS class, and pass-through target from the [DataTable](datatable.md) theme. The parts you'll most likely customise when theming TreeTable:

- `DataTable.RowToggle`, the chevron button on the first column (`data-part="row-toggle"`).
- `DataTable.RowToggleIndicator`, the icon slot, matched by `match="expanded"` and `match="collapsed"`.
- Row-level `_treeLevel` drives the default left padding via CSS. Override per-level spacing by styling on the `aria-level="<n+1>"` attribute rendered on `<tr>`.

### Sub-Components

See [DataTable Primitive](../../primitive/components/datatable.md#api) for the full sub-component API, TreeTable uses the same primitives.

### Hooks

See [useDataTable](../../headless/components/datatable.md#api) for the headless hook API.

### Accessibility

See [DataTable Primitive](../../primitive/components/datatable.md#accessibility) for WAI-ARIA compliance details and keyboard support. Tree-specific ARIA attributes (`aria-level`, `aria-expanded`, `aria-posinset`, `aria-setsize`) are wired automatically.

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
