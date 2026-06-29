# OrganizationChart API

API documentation for OrganizationChart component

## OrganizationChartRoot

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: OrganizationChartRootInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: OrganizationChartRootInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | OrganizationChartRootInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: OrganizationChartRootInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| value | TreeNode[] | null | The data of the org chart. |
| gap | number \\| number[] | [40, 56] | The gap between nodes, as a single value or  `[x, y]` . |
| selectionMode | "checkbox" \\| "multiple" \\| "single" | null | The selection mode. When omitted, nodes are not selectable.  `checkbox`  cascades selection to
descendants and reflects a partial state on ancestors. |
| collapsedKeys | OrganizationChartCollapsedKeys | null | Controlled collapsed keys. A key with  `true`  is collapsed; absent keys are expanded. |
| defaultCollapsedKeys | OrganizationChartCollapsedKeys | null | Initial collapsed keys for uncontrolled mode. |
| onCollapsedChange | (event: UseOrganizationChartCollapsedChangeEvent) => void | null | Fires when the collapsed state changes. |
| selectionKeys | OrganizationChartSelectionKeys | null | Controlled selection keys. |
| defaultSelectionKeys | OrganizationChartSelectionKeys | null | Initial selection keys for uncontrolled mode. |
| onSelectionChange | (event: UseOrganizationChartSelectionChangeEvent) => void | null | Fires when the selection state changes. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| collapsedKeys | OrganizationChartCollapsedKeys | null | The current collapsed keys. |
| selectionKeys | OrganizationChartSelectionKeys | null | The current selection keys. |

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| getNodes | () => TreeNode[] | null | Returns the org chart nodes (the original  `value` ). |
| findNodeByKey | (key: string) => TreeNode | null | Looks up a node by its key. |
| getNodeLevel | (key: string) => number | null | Returns the 1-based depth of a node by its key. |
| toggleNodeSelect | (key?: string, event?: SyntheticEvent) => void | null | Toggle the selection state of a node (respecting  `selectionMode` ). |
| toggleNodeCollapse | (key?: string, event?: SyntheticEvent) => void | null | Toggle the collapsed state of a node. |
| isExpandable | (node?: TreeNode) => boolean | null | Whether a node can be expanded/collapsed (has children). |
| isSelectable | () => boolean | null | Whether nodes are selectable (a  `selectionMode`  is set). |
| isCollapsed | (node?: TreeNode) => boolean | null | Whether a node is collapsed. |
| isSelected | (node?: TreeNode) => boolean | null | Whether a node is selected. |
| isPartiallySelected | (node?: TreeNode) => boolean | null | Whether a node is partially selected (checkbox mode). |
| rootProps | { data-scope: "organizationchart"; data-part: "root"; role: "tree"; aria-multiselectable: boolean } | null | Returns pre-built props for the root element. |
| getTreeProps | (node: TreeNode, level: number) => UseOrganizationChartTreeProps | null | Returns pre-built props for a tree (connector wrapper) element. |
| getNodeProps | (node: TreeNode, handleClick: (event: MouseEvent) => void) => UseOrganizationChartNodeProps | null | Returns pre-built props for a node element. |
| getCollapseButtonProps | (node: TreeNode, handleClick: (event: MouseEvent) => void) => { data-scope: "organizationchart"; data-part: "toggle"; onClick: (event: MouseEvent) => void; onKeyDown: (event: KeyboardEvent) => void } | null | Returns pre-built props for a collapse toggle button element. |
| getToggleIndicatorProps | () => { data-scope: "organizationchart"; data-part: "toggle-indicator"; aria-hidden: true } | null | Returns pre-built props for the toggle indicator (state-matched icon slot) element. |
| subtreeProps | { data-scope: "organizationchart"; data-part: "subtree"; role: "group" } | null | Pre-built props for the children subtree element. |
| orgChartStyle | CSSProperties | null | CSS custom properties for the configured gap. |
| handleNodeKeyDown | (event: KeyboardEvent, key?: string) => void | null | Handles key down on a node. |
| handleCollapseKeyDown | (event: KeyboardEvent, key?: string) => void | null | Handles key down on a collapse button. |
| state | OrganizationChartRootState | null | The state of the OrganizationChart component. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of OrganizationChart component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of OrganizationChart component. | [object Object] |

## OrganizationChartNodes

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: OrganizationChartNodesInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: OrganizationChartNodesInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | OrganizationChartNodesInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: OrganizationChartNodesInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | ReactNode \\| ((row: OrganizationChartNodeRow) => ReactNode) | null | Render-prop. Called once per node with its row payload; must return the node UI. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of OrganizationChartNodes component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of OrganizationChartNodes component. | [object Object] |

## OrganizationChartNode

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: OrganizationChartNodeInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: OrganizationChartNodeInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | OrganizationChartNodeInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: OrganizationChartNodeInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| uKey | string | null | The unique key identifying this node in the data. Used to resolve node state from the headless layer. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| node | TreeNode | null | The resolved node data, or undefined when the key is unknown. |
| expanded | boolean | null | Whether the node is expanded (not collapsed). |
| leaf | boolean | null | Whether the node has no children. |
| selected | boolean | null | Whether the node is selected. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of OrganizationChartNode component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of OrganizationChartNode component. | [object Object] |

## OrganizationChartContent

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: OrganizationChartContentInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: OrganizationChartContentInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | OrganizationChartContentInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: OrganizationChartContentInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of OrganizationChartContent component. | [object Object] |

## OrganizationChartLabel

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: OrganizationChartLabelInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: OrganizationChartLabelInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | OrganizationChartLabelInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: OrganizationChartLabelInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of OrganizationChartLabel component. | [object Object] |

## OrganizationChartToggle

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: OrganizationChartToggleInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: OrganizationChartToggleInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | OrganizationChartToggleInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: OrganizationChartToggleInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| isExpanded | boolean | null | Whether the associated node is expanded (not collapsed). |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of OrganizationChartToggle component. | [object Object] |

## OrganizationChartToggleIndicator

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: OrganizationChartToggleIndicatorInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: OrganizationChartToggleIndicatorInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | OrganizationChartToggleIndicatorInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: OrganizationChartToggleIndicatorInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| match | OrganizationChartToggleIndicatorMatch | null | Render this slot only when the toggle state matches.  `always`  renders regardless of state. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of OrganizationChartToggleIndicator component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of OrganizationChartToggleIndicator component. | [object Object] |

## OrganizationChartSelection

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: OrganizationChartSelectionInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: OrganizationChartSelectionInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | OrganizationChartSelectionInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: OrganizationChartSelectionInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| isSelected | boolean | null | Whether the current node is selected. |
| isPartiallySelected | boolean | null | Whether the current node is partially selected (checkbox mode — some but not all descendants selected). |
| isSelectable | boolean | null | Whether the current node can be selected. |
| toggle | (event: SyntheticEvent) => void | null | Toggle selection for the current node. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of OrganizationChartSelection component. | [object Object] |
