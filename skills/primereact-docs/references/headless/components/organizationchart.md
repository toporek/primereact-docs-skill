# useOrganizationChart

Headless org-chart hook that manages collapse and selection state.

## Usage

```tsx
import { useOrganizationChart } from '@primereact/headless/organizationchart';
```

```tsx
const orgchart = useOrganizationChart({ value: nodes, selectionMode: 'single' });

const renderNode = (node: TreeNode, level: number) => (
    <li {...orgchart.getTreeProps(node, level)}>
        <div {...orgchart.getNodeProps(node, () => orgchart.toggleNodeSelect(node.key))}>{node.label}</div>
        {orgchart.isExpandable(node) && !orgchart.isCollapsed(node) && <ul {...orgchart.subtreeProps}>{node.children!.map((c) => renderNode(c, level + 1))}</ul>}
    </li>
);
```

_useOrganizationChart_ owns the collapse and selection state and exposes prop getters plus predicates to render the chart yourself. The chart is expanded by default, a node is collapsed only when its key is present in _collapsedKeys_. There is no flat visible list as in _useTree_; you walk _value_ recursively and skip the children of a collapsed node.

## State

Both collapse and selection are controllable, following the standard value / defaultValue / onChange convention:

- _collapsedKeys_ / _defaultCollapsedKeys_ / _onCollapsedChange_, a `Record<string, boolean>` where a key set to `true` is collapsed.
- _selectionKeys_ / _defaultSelectionKeys_ / _onSelectionChange_, `Record<string, boolean>` for single/multiple, or `Record<string, { checked, partialChecked }>` for checkbox mode.

## Recipes

### Controlled collapse

```tsx
const [collapsedKeys, setCollapsedKeys] = React.useState({ '0-1': true });

const orgchart = useOrganizationChart({
    value: nodes,
    collapsedKeys,
    onCollapsedChange: (e) => setCollapsedKeys(e.value)
});
```

Call _toggleNodeCollapse(key)_ from a toggle button to flip a node's collapse state.

### Selection modes

_selectionMode_ controls how _toggleNodeSelect_ behaves:

- _single_, one node at a time.
- _multiple_, independent toggles.
- _checkbox_, selecting a node cascades to its descendants and recomputes a partial (`partialChecked`) state on its ancestors.

```tsx
const [selectionKeys, setSelectionKeys] = React.useState({});

const orgchart = useOrganizationChart({
    value: nodes,
    selectionMode: 'checkbox',
    selectionKeys,
    onSelectionChange: (e) => setSelectionKeys(e.value)
});
```

In checkbox mode use _isPartiallySelected(node)_ to drive an indeterminate checkbox.

### Predicates

The predicates answer per-node questions while you render:

- _isExpandable(node)_, node has children.
- _isCollapsed(node)_, node is collapsed.
- _isSelectable()_, a _selectionMode_ is set.
- _isSelected(node)_ / _isPartiallySelected(node)_, selection state.

### Lookups

- _findNodeByKey(key)_, resolve a node from its key.
- _getNodeLevel(key)_, 1-based depth used for `aria-level`.
- _getNodes()_, the current _value_ array.

## Data attributes

Every prop object includes `data-scope="organizationchart"` and a `data-part`. Boolean state attributes are present only when the condition is true, so selectors like `[data-selected]` match without further checks.

#### rootProps

| Attribute              | Description                         |
| ---------------------- | ----------------------------------- |
| `data-scope`           | `"organizationchart"`               |
| `data-part`            | `"root"`                            |
| `role`                 | `"tree"`                            |
| `aria-multiselectable` | `true` in multiple / checkbox modes |

#### getTreeProps()

| Attribute         | Description                        |
| ----------------- | ---------------------------------- |
| `data-scope`      | `"organizationchart"`              |
| `data-part`       | `"tree"`                           |
| `data-level`      | 1-based depth                      |
| `data-collapsed`  | Present when collapsed             |
| `data-selected`   | Present when selected              |
| `data-expandable` | Present when the node has children |

#### getNodeProps()

| Attribute         | Description                          |
| ----------------- | ------------------------------------ |
| `data-scope`      | `"organizationchart"`                |
| `data-part`       | `"node"`                             |
| `data-selectable` | Present when a selection mode is set |
| `data-collapsed`  | Present when collapsed               |
| `data-selected`   | Present when selected                |

#### getCollapseButtonProps()

| Attribute    | Description           |
| ------------ | --------------------- |
| `data-scope` | `"organizationchart"` |
| `data-part`  | `"toggle"`            |

#### subtreeProps

| Attribute    | Description           |
| ------------ | --------------------- |
| `data-scope` | `"organizationchart"` |
| `data-part`  | `"subtree"`           |
| `role`       | `"group"`             |

## API

### useOrganizationChart

> **`useOrganizationChart` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/organizationchart or the installed `@primereact/types`.

## Accessibility

The root is a `role="tree"` and each node a `role="treeitem"` with `aria-level`, `aria-expanded` for collapse state and `aria-selected` for selection; children are grouped with `role="group"`. Enter and Space toggle the selection of the focused node. See the [primitive docs](../../primitive/components/organizationchart.md#accessibility) for the full WAI-ARIA mapping.
