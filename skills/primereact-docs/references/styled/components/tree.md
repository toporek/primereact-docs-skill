# Tree

Tree is used to display hierarchical data.

## Usage

```tsx
import { Tree } from '@primereact/ui/tree';
```

Tree requires a collection of _TreeNode_ instances as its _value_. Each visible row is produced by _Tree.Nodes_ through its render function and identified by _uKey_.

```tsx
<Tree.Root value={nodes}>
    <Tree.Nodes>
        {({ node }) => (
            <Tree.Node uKey={node.key}>
                <Tree.Content>
                    <Tree.Toggle>
                        <Tree.ToggleIndicator />
                    </Tree.Toggle>
                    <Tree.Label />
                </Tree.Content>
            </Tree.Node>
        )}
    </Tree.Nodes>
</Tree.Root>
```

## Examples

### Basic

A basic Tree displays a collection of _TreeNode_ instances.

### Content

Custom node content is rendered inside _Tree.Content_; the row payload exposes _leaf_ and _expanded_ so the right icon can be chosen.

### Toggle Indicator

Toggle indicators are customized with _Tree.ToggleIndicator_ and its _match_ property of _expanded_, _collapsed_ or _always_.

### Controlled

Expansion state is managed programmatically with _expandedKeys_ and _onExpandedChange_ properties.

### Selection

#### Single

Single node selection is configured by setting _selectionMode_ as _single_ along with _selectionKeys_ and _onSelectionChange_ properties to manage the selection value binding.

#### Multiple

More than one node is selectable by setting _selectionMode_ to _multiple_. By default in multiple selection mode, metaKey press (e.g. ⌘) is necessary to add to existing selections, however this can be configured with the _metaKeySelection_ property.

#### Checkbox

Selection of multiple nodes via checkboxes is composed with _Tree.Selection_ inside _Tree.Node_. The render prop exposes _isSelected_, _isPartiallySelected_ and _toggle_; the down/up tri-state cascade runs in the headless layer.

#### Radio

Use _Tree.Selection_ with _mode="radio"_ to keep a single selection sticky. Re-clicking the selected node does not deselect it.

#### Select All

Outside a _Tree.Node_, _Tree.Selection_ exposes _isAllSelected_, _isSomeSelected_ and _toggleAll_ for an aggregate checkbox in _Tree.Header_.

#### Keyboard

Tree fully supports keyboard navigation. Arrow keys move focus across visible rows, Right and Left expand and collapse, Space and Enter toggle selection on the focused node.

### Filter

Filtering is composed with the _Tree.Filter_ input and a derived _value_. The [_useTreeFilter_](../../hooks/use-tree-filter.md) hook covers the common case of label-based search and exposes the filtered nodes along with an _expandedKeys_ map.

### Lazy

Lazy loading is useful when dealing with huge datasets. Placeholder nodes are marked with _leaf: false_ and children are loaded on demand using the _onExpand_ event. The _loading_ flag on the node toggles a spinner inside _Tree.Toggle_.

### Loading

#### Overlay

Setting the _loading_ property displays a mask over the tree. The mask content is provided through _Tree.Loading_.

#### Skeleton

Placeholder _Skeleton_ primitives are rendered inside _Tree.Content_ while the dataset loads.

### Empty

When _value_ is empty, _Tree.Empty_ is rendered in place of the rows.

### Drag and Drop

#### Single

Nodes can be reordered within a tree by setting _draggable_ and _droppable_. The _onMove_ callback receives the updated tree value along with _dragNode_, _dropNode_, _dropIndex_ and _dropPosition_. Drop targets render _Tree.DropIndicator_ with _position="before"_ and _position="after"_ around _Tree.Content_.

#### Multiple

Nodes can be transferred between trees with _draggableScope_ and _droppableScope_. The _draggableScope_ tags the nodes that leave a tree; _droppableScope_ declares which scopes a tree accepts. Both accept a string or an array of strings.

## Related

### Sub-Components

See the [Primitive API](../../primitive/components/tree.md#api) for _Tree.Root_, _Tree.Nodes_, _Tree.Node_, _Tree.Content_, _Tree.Toggle_, _Tree.ToggleIndicator_, _Tree.Selection_, _Tree.DropIndicator_, _Tree.Label_, _Tree.Filter_, _Tree.Header_, _Tree.Footer_, _Tree.Empty_ and _Tree.Loading_.

### Hooks

See the [Headless API](../../headless/components/tree.md#api) for _useTree_ and _useTreeNode_.

### Accessibility

See [Tree Primitive](../../primitive/components/tree.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-tree | Class name of the root element |
| p-tree-nodes | Class name of the flat iterator ( `<ul role="tree">` ) |
| p-tree-node | Class name of the node element ( `<li role="treeitem">` ) |
| p-tree-node-content | Class name of the node content element (clickable row) |
| p-tree-node-toggle | Class name of the toggle button element |
| p-tree-node-toggle-indicator | Class name of the toggle indicator element (state-matched icon slot) |
| p-tree-node-toggle-spacer | Class name of the toggle spacer rendered for leaf nodes (keeps row alignment) |
| p-tree-node-label | Class name of the label element |
| p-tree-node-selection | Class name of the selection slot (wraps user-provided checkbox/radio) |
| p-tree-node-drop-point | Class name of the drop indicator element rendered during drag-and-drop |
| p-tree-mask p-overlay-mask | Class name of the loading overlay mask |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| tree.background | --p-tree-background | Background of root |
| tree.color | --p-tree-color | Color of root |
| tree.padding | --p-tree-padding | Padding of root |
| tree.gap | --p-tree-gap | Gap of root |
| tree.indent | --p-tree-indent | Indent of root |
| tree.transition.duration | --p-tree-transition-duration | Transition duration of root |
| tree.node.padding | --p-tree-node-padding | Padding of node |
| tree.node.border.radius | --p-tree-node-border-radius | Border radius of node |
| tree.node.hover.background | --p-tree-node-hover-background | Hover background of node |
| tree.node.selected.background | --p-tree-node-selected-background | Selected background of node |
| tree.node.color | --p-tree-node-color | Color of node |
| tree.node.hover.color | --p-tree-node-hover-color | Hover color of node |
| tree.node.selected.color | --p-tree-node-selected-color | Selected color of node |
| tree.node.focus.ring.width | --p-tree-node-focus-ring-width | Focus ring width of node |
| tree.node.focus.ring.style | --p-tree-node-focus-ring-style | Focus ring style of node |
| tree.node.focus.ring.color | --p-tree-node-focus-ring-color | Focus ring color of node |
| tree.node.focus.ring.offset | --p-tree-node-focus-ring-offset | Focus ring offset of node |
| tree.node.focus.ring.shadow | --p-tree-node-focus-ring-shadow | Focus ring shadow of node |
| tree.node.gap | --p-tree-node-gap | Gap of node |
| tree.node.icon.color | --p-tree-node-icon-color | Color of node icon |
| tree.node.icon.hover.color | --p-tree-node-icon-hover-color | Hover color of node icon |
| tree.node.icon.selected.color | --p-tree-node-icon-selected-color | Selected color of node icon |
| tree.node.label.font.weight | --p-tree-node-label-font-weight | Font weight of node label |
| tree.node.label.font.size | --p-tree-node-label-font-size | Font size of node label |
| tree.node.label.selected.font.weight | --p-tree-node-label-selected-font-weight | Font weight of a selected node label |
| tree.node.toggle.button.border.radius | --p-tree-node-toggle-button-border-radius | Border radius of node toggle button |
| tree.node.toggle.button.size | --p-tree-node-toggle-button-size | Size of node toggle button |
| tree.node.toggle.button.hover.background | --p-tree-node-toggle-button-hover-background | Hover background of node toggle button |
| tree.node.toggle.button.selected.hover.background | --p-tree-node-toggle-button-selected-hover-background | Selected hover background of node toggle button |
| tree.node.toggle.button.color | --p-tree-node-toggle-button-color | Color of node toggle button |
| tree.node.toggle.button.hover.color | --p-tree-node-toggle-button-hover-color | Hover color of node toggle button |
| tree.node.toggle.button.selected.hover.color | --p-tree-node-toggle-button-selected-hover-color | Selected hover color of node toggle button |
| tree.node.toggle.button.focus.ring.width | --p-tree-node-toggle-button-focus-ring-width | Focus ring width of node toggle button |
| tree.node.toggle.button.focus.ring.style | --p-tree-node-toggle-button-focus-ring-style | Focus ring style of node toggle button |
| tree.node.toggle.button.focus.ring.color | --p-tree-node-toggle-button-focus-ring-color | Focus ring color of node toggle button |
| tree.node.toggle.button.focus.ring.offset | --p-tree-node-toggle-button-focus-ring-offset | Focus ring offset of node toggle button |
| tree.node.toggle.button.focus.ring.shadow | --p-tree-node-toggle-button-focus-ring-shadow | Focus ring shadow of node toggle button |
| tree.loading.icon.size | --p-tree-loading-icon-size | Size of loading icon |
| tree.filter.margin | --p-tree-filter-margin | Margin of filter |
