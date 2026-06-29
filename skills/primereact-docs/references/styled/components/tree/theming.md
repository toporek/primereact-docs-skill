# Tree Theming

Theming documentation for Tree component

## Styled

### CSS Classes

The class names emitted in styled mode:

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

The design tokens Tree reads:

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

## Unstyled

In unstyled mode there are no built-in classes. Style each part through the pass-through (`pt`) prop.
