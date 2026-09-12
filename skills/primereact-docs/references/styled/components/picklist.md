# PickList

PickList is used to transfer items between two lists with drag-drop and button controls.

## Usage

PickList is a headless hook that manages two lists with transfer, reorder, and optional drag-and-drop between them. It works with **Listbox** for built-in selection and keyboard navigation.

```tsx
import { usePickList } from '@primereact/headless/picklist';
```

```tsx
const pickList = usePickList({
    source,
    target,
    selection,
    draggable: true,
    onValueChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    },
    onSelectionChange: (e) => setSelection(e.value)
});
```

## Examples

### Basic

Transfer items between two lists using the arrow buttons. Select items and click the transfer buttons to move them.

### Drag Drop

Enable drag-and-drop by setting `draggable: true`. Items can be dragged within a list to reorder, or dragged across lists to transfer.

### Placeholder

Set `placeholder: 'clone'` to leave a visual copy of the dragged item in place. Use the `data-sortable-placeholder` attribute to style it with CSS.

### Checkbox

Combine with Checkbox and a select-all header for batch selection alongside drag-and-drop.
