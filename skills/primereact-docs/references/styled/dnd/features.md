# Drag & Drop

`useDnd` is the shared drag-and-drop primitive that powers PickList, OrderList, and Kanban.

## useDnd

```tsx
import { useDnd } from '@primereact/hooks/use-dnd';

const { dragState, getListHandlers, getItemHandlers, reset } = useDnd({
    onReorder: (listId, fromIndex, toIndex) => {
        // re-order the list identified by `listId` between two positions
    },
    onTransfer: (sourceListId, targetListId, items, targetIndex) => {
        // move dragged items into their new list at `targetIndex`
    },
    canTransfer: (sourceListId, targetListId) => {
        // return `false` to block an invalid drop (e.g. non-adjacent Kanban stages)
        return true;
    },
    getSelectedItems: (listId, item) => {
        // return the set of items that should move together (multi-selection support)
        return [item];
    }
});
```

`useDnd` returns:

- `dragState` — the current drag session (`draggedItems`, `draggedIndex`, `sourceListId`, `dragOverListId`, `dragOverIndex`, `isDragging`). Use this data to highlight drop targets or show a guard rail.
- `getListHandlers(listId)` / `getItemHandlers(listId, index, item)` — spread these props on the container + draggable element to wire HTML5 drag events. They already set `draggable`, manage drop effects, and call your `onReorder`/`onTransfer`.
- `reset()` — clear the drag state manually (handy if your drop target leaves the DOM mid-drag).

PickList, OrderList, and Kanban re-export higher-level helpers that wrap `useDnd`, but you can call it directly when building custom drag/drop UIs.
