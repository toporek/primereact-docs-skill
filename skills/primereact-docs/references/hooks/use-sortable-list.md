# useSortableList

Reorder items in a list, optionally transfer them between lists, with state and handlers you spread onto your own DOM.

## Usage

```tsx
import { useSortableList } from '@primereact/hooks/use-sortable-list';
```

```tsx
const { dragState, getListHandlers, getItemHandlers } = useSortableList<'source' | 'target', Item>({
    onReorder: (listId, from, to) => reorder(listId, from, to),
    onTransfer: (sourceId, targetId, items, targetIndex) => transfer(sourceId, targetId, items, targetIndex)
});
```

Spread `getListHandlers(listId)` on the list wrapper and `getItemHandlers(listId, index, item)` on each draggable row. The hook tracks hover index internally so drop events always resolve to the right target, even when the user releases over a transitioning item.

## Options

- `onReorder(listId, from, to)`, same-list move.
- `onTransfer?(sourceId, targetId, items, targetIndex?)`, cross-list drop. Omit to make transfers no-ops.
- `canTransfer?(sourceId, targetId)`, opt out of specific pairings.
- `getSelectedItems?(listId, item)`, return an array for multi-drag (defaults to `[item]`).

## State

`dragState` exposes `isDragging`, `draggedItems`, `draggedIndex`, `sourceListId`, `dragOverListId`, `dragOverIndex`, enough to style placeholders, ghosts, or drop indicators.

## Basic

Reorder items inside a single list. The hook feeds you hover state so you can style the active drop target however you like.

## Transfer between lists

Pass `onTransfer` alongside `onReorder` to move items across lists. The handler receives the source list, target list, dragged items, and the target index.

## Notes

Drops are handled at the **list level**, not per-item. That means you can animate items freely without breaking drop targeting, and you don't need to attach `onDrop` to each row.

## Related

For PrimeReact's component-level drag-and-drop primitives, composable `useDraggable`, `useDroppable`, and `useSortableContainer` with a shared coordinator, see the headless `dnd` package. Those power components like OrderList and PickList.
