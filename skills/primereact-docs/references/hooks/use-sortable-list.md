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

```tsx
'use client';
import { useSortableList } from '@primereact/hooks/use-sortable-list';
import * as React from 'react';

interface Task {
    id: number;
    title: string;
}

const initialTasks: Task[] = [
    { id: 1, title: 'Review pull requests' },
    { id: 2, title: 'Write release notes' },
    { id: 3, title: 'Triage bug reports' },
    { id: 4, title: 'Prepare demo for Friday' },
    { id: 5, title: 'Answer community questions' }
];

export default function BasicDemo() {
    const [tasks, setTasks] = React.useState<Task[]>(initialTasks);

    const reorder = React.useCallback((_listId: 'tasks', from: number, to: number) => {
        setTasks((prev) => {
            const next = prev.slice();
            const [moved] = next.splice(from, 1);

            next.splice(to, 0, moved);

            return next;
        });
    }, []);

    const { dragState, getListHandlers, getItemHandlers } = useSortableList<'tasks', Task>({
        onReorder: reorder
    });

    const listHandlers = getListHandlers('tasks');

    return (
        <div className="w-full max-w-md">
            <ul
                className="flex flex-col gap-2 p-3 rounded-md border border-surface-200 dark:border-surface-700"
                onDragOver={listHandlers.onDragOver}
                onDrop={listHandlers.onDrop}
            >
                {tasks.map((task, index) => {
                    const itemHandlers = getItemHandlers('tasks', index, task);
                    const isDragging = dragState.isDragging && dragState.draggedIndex === index;
                    const isOver = dragState.dragOverIndex === index && !isDragging;

                    return (
                        <li
                            key={task.id}
                            {...itemHandlers}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md border cursor-grab active:cursor-grabbing transition-colors select-none ${
                                isDragging
                                    ? 'opacity-40 border-dashed border-surface-300 dark:border-surface-600'
                                    : isOver
                                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                      : 'border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900'
                            }`}
                        >
                            <span className="text-surface-400 font-mono text-xs">{index + 1}</span>
                            <span className="flex-1">{task.title}</span>
                            <span className="text-surface-300 dark:text-surface-600 text-xs">drag</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

```

## Transfer between lists

Pass `onTransfer` alongside `onReorder` to move items across lists. The handler receives the source list, target list, dragged items, and the target index.

```tsx
'use client';
import { useSortableList } from '@primereact/hooks/use-sortable-list';
import * as React from 'react';

interface Item {
    id: number;
    label: string;
}

type ListId = 'todo' | 'done';

const initial: Record<ListId, Item[]> = {
    todo: [
        { id: 1, label: 'Draft the proposal' },
        { id: 2, label: 'Send invoices' },
        { id: 3, label: 'Update changelog' }
    ],
    done: [
        { id: 4, label: 'Ship v1.0' },
        { id: 5, label: 'Fix login bug' }
    ]
};

export default function TransferDemo() {
    const [lists, setLists] = React.useState(initial);

    const reorder = React.useCallback((listId: ListId, from: number, to: number) => {
        setLists((prev) => {
            const next = prev[listId].slice();
            const [moved] = next.splice(from, 1);

            next.splice(to, 0, moved);

            return { ...prev, [listId]: next };
        });
    }, []);

    const transfer = React.useCallback((source: ListId, target: ListId, items: Item[], targetIndex?: number) => {
        setLists((prev) => {
            const ids = new Set(items.map((i) => i.id));
            const src = prev[source].filter((i) => !ids.has(i.id));
            const tgt = prev[target].slice();
            const at = targetIndex ?? tgt.length;

            tgt.splice(at, 0, ...items);

            return { ...prev, [source]: src, [target]: tgt };
        });
    }, []);

    const { dragState, getListHandlers, getItemHandlers } = useSortableList<ListId, Item>({
        onReorder: reorder,
        onTransfer: transfer
    });

    const renderList = (listId: ListId, title: string) => {
        const items = lists[listId];
        const listHandlers = getListHandlers(listId);
        const isTarget = dragState.dragOverListId === listId && dragState.sourceListId !== listId;

        return (
            <div className="flex-1 flex flex-col gap-2">
                <h4 className="text-xs font-mono uppercase tracking-wide text-surface-500">{title}</h4>
                <ul
                    onDragOver={listHandlers.onDragOver}
                    onDrop={listHandlers.onDrop}
                    className={`flex flex-col gap-2 p-3 min-h-32 rounded-md border transition-colors ${
                        isTarget ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-surface-200 dark:border-surface-700'
                    }`}
                >
                    {items.map((item, index) => {
                        const itemHandlers = getItemHandlers(listId, index, item);
                        const isDragging = dragState.isDragging && dragState.sourceListId === listId && dragState.draggedIndex === index;
                        const isOver = dragState.dragOverListId === listId && dragState.dragOverIndex === index && !isDragging;

                        return (
                            <li
                                key={item.id}
                                {...itemHandlers}
                                className={`px-3 py-2 rounded-md border cursor-grab active:cursor-grabbing select-none transition-colors ${
                                    isDragging
                                        ? 'opacity-40 border-dashed border-surface-300 dark:border-surface-600'
                                        : isOver
                                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                          : 'border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900'
                                }`}
                            >
                                {item.label}
                            </li>
                        );
                    })}
                    {items.length === 0 && <li className="text-xs text-surface-400 text-center py-4">Drop items here</li>}
                </ul>
            </div>
        );
    };

    return (
        <div className="w-full flex flex-col sm:flex-row gap-4">
            {renderList('todo', 'To Do')}
            {renderList('done', 'Done')}
        </div>
    );
}

```

## Notes

Drops are handled at the **list level**, not per-item. That means you can animate items freely without breaking drop targeting, and you don't need to attach `onDrop` to each row.

## Related

For PrimeReact's component-level drag-and-drop primitives, composable `useDraggable`, `useDroppable`, and `useSortableContainer` with a shared coordinator, see the headless `dnd` package. Those power components like OrderList and PickList.
