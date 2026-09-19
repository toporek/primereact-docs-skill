# useTree

Headless tree hook that manages expansion, selection, keyboard and drag-drop state.

## Usage

```tsx
import { useTree, useTreeNode } from '@primereact/headless/tree';
```

```tsx
const tree = useTree({ value: nodes, selectionMode: 'single' });

return (
    <ul {...tree.getNodesProps()}>
        {tree.visibleKeys.map((key) => {
            const node = tree.findNodeByKey(key)!;
            const info = tree.findNodeInfo(key);
            // render one row per visible key
        })}
    </ul>
);
```

_useTree_ owns the state and exposes _visibleKeys_ as the flat list of currently-shown rows to iterate directly.

## Composition

_useTree_ is composed of smaller focused hooks:

- _useTreeFlatten_ builds _nodeMap_ for O(1) lookup along with _flatOrder_ and _visibleKeys_.
- _useTreeSelection_ handles _single_, _multiple_ and _checkbox_ modes with tri-state cascade.
- _useTreeKeyboard_ provides arrow navigation and type-ahead search.
- _useTreeDragDrop_ wires the root drop handler and the _onMove_ callback.
- _useTreeNode_ exposes per-node state and event handlers.

## Recipes

### Controlled expansion

```tsx
const [expandedKeys, setExpandedKeys] = React.useState<TreeExpandedKeys>({ '0': true });

const tree = useTree({
    value: nodes,
    expandedKeys,
    onExpandedChange: (e) => setExpandedKeys(e.value)
});
```

### Checkbox selection

In `checkbox` mode `selectionKeys` becomes `Record<NodeKey, { checked, partialChecked }>`. The parent ↔ children cascade runs automatically.

```tsx
const [selectionKeys, setSelectionKeys] = React.useState({});

const tree = useTree({
    value: nodes,
    selectionMode: 'checkbox',
    selectionKeys,
    onSelectionChange: (e) => setSelectionKeys(e.value)
});
```

### Drag-and-drop

`draggableScope` tags nodes that leave a tree. `droppableScope` declares what a tree accepts. When the two match, the drop is allowed. `onMove` fires once the drop commits; `validateMove` can be sync or async.

```tsx
const tree = useTree({
    value: nodes,
    draggable: true,
    droppable: true,
    draggableScope: 'tasks',
    droppableScope: 'tasks',
    onMove: (e) => setNodes(e.value),
    validateMove: async (e) => server.canMove(e.dragNode, e.dropNode)
});
```

### Filter input

```tsx
<input {...tree.filterProps} placeholder="Search" />
```

`filterProps` adds the keyboard handlers and turns off browser autocomplete. Filtering itself is up to you. For the common case use the [`useTreeFilter`](../../hooks/use-tree-filter.md) hook.

### Custom rendering

```tsx
<ul {...tree.getNodesProps()}>
    {tree.visibleKeys.map((key) => {
        const node = tree.findNodeByKey(key)!;
        const { level, posInSet, setSize } = tree.findNodeInfo(key);
        const expanded = tree.state.expandedKeys?.[key] === true;
        const leaf = node.leaf ?? !node.children?.length;

        return (
            <li key={key} {...tree.getNodeProps(node, level, expanded, false, false, leaf, posInSet, setSize)} style={{ paddingInlineStart: `${level * 16}px` }}>
                <div onClick={(e) => tree.onClick(e, node)}>
                    {!leaf && <button {...tree.getToggleProps(node)}>{expanded ? '▼' : '▶'}</button>}
                    <span>{node.label}</span>
                </div>
            </li>
        );
    })}
</ul>
```

## Data attributes

Every prop object includes `data-scope="tree"` and a `data-part`. Boolean state attributes are present only when the condition is true, so attribute selectors like `[data-selected]` match without further checks.

#### rootProps

| Attribute       | Description                                           |
| --------------- | ----------------------------------------------------- |
| `data-scope`    | `"tree"`                                              |
| `data-part`     | `"root"`                                              |
| `data-dragover` | Present while a compatible drag is over the container |

#### getNodesProps()

| Attribute    | Description |
| ------------ | ----------- |
| `data-scope` | `"tree"`    |
| `data-part`  | `"nodes"`   |
| `role`       | `"tree"`    |

#### nodeProps / getNodeProps()

| Attribute        | Description                       |
| ---------------- | --------------------------------- |
| `data-scope`     | `"tree"`                          |
| `data-part`      | `"node"`                          |
| `data-node-key`  | Node key                          |
| `data-expanded`  | Present when expanded (non-leaf)  |
| `data-collapsed` | Present when collapsed (non-leaf) |
| `data-selected`  | Present when selected             |
| `data-leaf`      | Present when leaf                 |
| `data-disabled`  | Present when disabled             |
| `data-focused`   | Present on the focused row        |

#### contentProps

| Attribute              | Value                                      |
| ---------------------- | ------------------------------------------ |
| `data-scope`           | `"tree"`                                   |
| `data-part`            | `"content"`                                |
| `data-selected`        | Present when selected or checked           |
| `data-selectable`      | Present when selectable                    |
| `data-expanded`        | Present when expanded (non-leaf)           |
| `data-collapsed`       | Present when collapsed (non-leaf)          |
| `data-leaf`            | Present when leaf                          |
| `data-checked`         | Present when checked (checkbox mode)       |
| `data-partial-checked` | Present when partially checked             |
| `data-disabled`        | Present when disabled                      |
| `data-dragover`        | Present while a compatible drag is over it |

#### getToggleProps()

| Attribute        | Description            |
| ---------------- | ---------------------- |
| `data-scope`     | `"tree"`               |
| `data-part`      | `"toggle"`             |
| `data-expanded`  | Present when expanded  |
| `data-collapsed` | Present when collapsed |

#### dropPointProps

| Attribute    | Description    |
| ------------ | -------------- |
| `data-scope` | `"tree"`       |
| `data-part`  | `"drop-point"` |

## API

### useTree

> **`useTree` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/tree or the installed `@primereact/types`.

### useTreeNode

> **`useTreeNode` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/tree or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate the visible rows, Right and Left expand and collapse, Home and End jump to the bounds, Enter and Space toggle selection. Printable characters trigger type-ahead search. See the [primitive docs](../../primitive/components/tree.md#accessibility) for the full WAI-ARIA mapping.
