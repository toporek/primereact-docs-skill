# OrderList

OrderList is used to reorder items in a list using selection and drag-drop.

## Usage

OrderList is a headless hook that manages list ordering with optional drag-and-drop support. It works with **Listbox** for built-in selection and keyboard navigation.

```tsx
import { useOrderList } from '@primereact/headless/orderlist';
```

```tsx
const orderList = useOrderList({
    value: items,
    selection,
    dataKey: 'id',
    optionValue: 'id',
    draggable: true,
    onValueChange: (e) => setItems(e.value),
    onSelectionChange: (e) => setSelection(e.value)
});
```

## Examples

### Basic

Selection-based reordering with move buttons. Click to select items, then use the buttons to move them up, down, to top, or to bottom.

### Drag Drop

Enable drag-and-drop reordering by setting `draggable: true`. Items can be grabbed and dragged to a new position with animated shift feedback.

### Placeholder

Set `placeholder: 'clone'` to leave a visual copy of the dragged item in place. Use the `data-sortable-placeholder` attribute to style it with CSS.

### Checkbox

Combine with Checkbox for a visual multi-select experience alongside drag-and-drop reordering.
