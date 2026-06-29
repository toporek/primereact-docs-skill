# Tree

Unstyled, accessible tree primitive with a compound API.

Unstyled compound primitive for rendering hierarchical data with full control over markup.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Tree, type TreeNodeData } from 'primereact/tree';
import * as React from 'react';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root value={nodes} defaultExpandedKeys={{ '0': true }} selectionMode="single" className={styles.root}>
            <Tree.Nodes>
                {({ node }) => (
                    <Tree.Node uKey={node.key}>
                        <Tree.Content>
                            <Tree.Toggle>
                                <Tree.ToggleIndicator match="expanded">
                                    <ChevronDown />
                                </Tree.ToggleIndicator>
                                <Tree.ToggleIndicator match="collapsed">
                                    <ChevronRight />
                                </Tree.ToggleIndicator>
                            </Tree.Toggle>
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

## Features

- Compound parts: _Root_, _Nodes_, _Node_, _Content_, _Toggle_, _ToggleIndicator_, _Selection_, _DropIndicator_, _Label_, _Filter_, _Header_, _Footer_, _Empty_, _Loading_
- Flat DOM with a single `<ul role="tree">` containing one `<li role="treeitem">` per visible row
- Selection modes _single_, _multiple_ and _checkbox_ with tri-state cascade
- Drag-and-drop with a single _onMove_ event; _validateMove_ can be sync or async

## Usage

```tsx
import { Tree } from 'primereact/tree';
```

```tsx
<Tree.Root value={nodes}>
    <Tree.Header>
        <Tree.Filter />
    </Tree.Header>
    <Tree.Nodes>
        {({ node }) => (
            <Tree.Node uKey={node.key}>
                <Tree.Content>
                    <Tree.Toggle>
                        <Tree.ToggleIndicator match="expanded">▼</Tree.ToggleIndicator>
                        <Tree.ToggleIndicator match="collapsed">▶</Tree.ToggleIndicator>
                    </Tree.Toggle>
                    <Tree.Label>{node.label}</Tree.Label>
                </Tree.Content>
            </Tree.Node>
        )}
    </Tree.Nodes>
    <Tree.Footer />
    <Tree.Empty />
</Tree.Root>
```

## Behavior

### Flat Render

_Tree.Nodes_ walks the data top-down and calls its render function once per visible row. _Tree.Node_ looks the data up by _uKey_. Each `<li>` carries its depth in the `--px-tree-node-level` CSS variable (1-based); combine it with your own indent unit for indentation:

```css
[data-part='content'] {
    margin-inline-start: calc((var(--px-tree-node-level, 1) - 1) * var(--p-tree-indent, 1rem));
}
```

### Toggle Indicator

_Tree.Toggle_ renders no icon on its own. Add _Tree.ToggleIndicator_ with _match="expanded"_, _match="collapsed"_ or _match="always"_ inside to render per-state content. For leaf rows the toggle is replaced by `<span data-part="toggle-spacer">` so the indentation stays aligned.

### Selection

_Tree.Selection_ is render-prop based. Inside _Tree.Node_ it exposes _isSelected_, _isPartiallySelected_ and _toggle_. Inside _Tree.Header_ it exposes _isAllSelected_, _isSomeSelected_ and _toggleAll_. Pass _mode="radio" | "checkbox" | "single"_ to force a specific toggle behavior.

### Polymorphism

Every sub-component takes an `as` prop. Pass another element or component to swap the rendered tag.

Defaults: `Root`=`div`, `Nodes`=`ul`, `Node`=`li`, `Content`=`div`, `Toggle`=`button`, `ToggleIndicator`=`span`, `Selection`=`Fragment`, `DropIndicator`=`div`, `Label`=`span`, `Filter`=`input`, `Header`=`div`, `Footer`=`div`, `Empty`=`div`, `Loading`=`div`.

## Pass Through

## API

### TreeRoot

> **`TreeRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Attribute       | Value                                                 |
| --------------- | ----------------------------------------------------- |
| `data-scope`    | `"tree"`                                              |
| `data-part`     | `"root"`                                              |
| `data-dragover` | Present while a compatible drag is over the container |

| Label | Type | Description |
|:------|:------|:------|
| root | TreeRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| nodes | TreeRootPassThroughType> | Used to pass attributes to the flat iterator's DOM element ( `<ul role="tree">` ). |
| node | TreeRootPassThroughType> | Used to pass attributes to the node's DOM element ( `<li>` ). |
| content | TreeRootPassThroughType> | Used to pass attributes to the content's DOM element (clickable row). |
| label | TreeRootPassThroughType> | Used to pass attributes to the label's DOM element. |
| toggle | TreeRootPassThroughType> | Used to pass attributes to the toggle button's DOM element. |
| toggleIndicator | TreeRootPassThroughType> | Used to pass attributes to the toggle indicator's DOM element (state-matched icon slot). |
| toggleSpacer | TreeRootPassThroughType> | Used to pass attributes to the toggle spacer rendered for leaf nodes. |
| selection | TreeRootPassThroughType> | Used to pass attributes to the selection slot (wraps user-provided checkbox/radio). |
| pcFilter | TreeRootPassThroughType> | Used to pass attributes to the filter's DOM element. |
| header | TreeRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| footer | TreeRootPassThroughType> | Used to pass attributes to the footer's DOM element. |
| empty | TreeRootPassThroughType> | Used to pass attributes to the empty message's DOM element. |
| dropIndicator | TreeRootPassThroughType> | Used to pass attributes to the drop indicator's DOM element. |
| loading | TreeRootPassThroughType> | Used to pass attributes to the loading overlay's DOM element. |

### TreeNodes

> **`TreeNodes` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Attribute    | Value     |
| ------------ | --------- |
| `data-scope` | `"tree"`  |
| `data-part`  | `"nodes"` |
| `role`       | `"tree"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | TreeNodesPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeNode

> **`TreeNode` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Attribute        | Value                             |
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

| Label | Type | Description |
|:------|:------|:------|
| root | TreeNodePassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeContent

> **`TreeContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

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

| Label | Type | Description |
|:------|:------|:------|
| root | TreeContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeToggle

> **`TreeToggle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Attribute        | Value                  |
| ---------------- | ---------------------- |
| `data-scope`     | `"tree"`               |
| `data-part`      | `"toggle"`             |
| `data-expanded`  | Present when expanded  |
| `data-collapsed` | Present when collapsed |

For leaf nodes the toggle is replaced by `<span data-part="toggle-spacer" aria-hidden>`.

| Label | Type | Description |
|:------|:------|:------|
| root | TreeTogglePassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeToggleIndicator

> **`TreeToggleIndicator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Attribute    | Value                |
| ------------ | -------------------- |
| `data-scope` | `"tree"`             |
| `data-part`  | `"toggle-indicator"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TreeToggleIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeSelection

> **`TreeSelection` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

Render-prop only; no DOM attributes of its own.

| Label | Type | Description |
|:------|:------|:------|
| root | TreeSelectionPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeDropIndicator

> **`TreeDropIndicator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

Renders only while the matching drop point is hovered. Use one with `position="before"` and one with `position="after"` per `Tree.Node`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"tree"`       |
| `data-part`  | `"drop-point"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TreeDropIndicatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeLabel

> **`TreeLabel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TreeLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeFilter

> **`TreeFilter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"tree"`   |
| `data-part`  | `"filter"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TreeFilterPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeHeader

> **`TreeHeader` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TreeHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeFooter

> **`TreeFooter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TreeFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeEmpty

> **`TreeEmpty` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | TreeEmptyPassThroughType> | Used to pass attributes to the root's DOM element. |

### TreeLoading

> **`TreeLoading` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/tree or the installed `@primereact/types`.

Renders only while `Tree.Root.loading` is true. Use it as a sibling of `Tree.Nodes`.

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"tree"`    |
| `data-part`  | `"loading"` |
| `role`       | `"status"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | TreeLoadingPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

The flat `<ul role="tree">` contains one `<li role="treeitem">` per visible row. Each row carries `aria-level`, `aria-posinset` and `aria-setsize`. Non-leaf rows set `aria-expanded`. In `selectionMode="checkbox"`, `aria-checked` is `true`, `false` or `"mixed"`.

### Keyboard Support

| Key                     | Function                                               |
| ----------------------- | ------------------------------------------------------ |
| `tab` / `shift` + `tab` | Enter / leave the tree.                                |
| `enter` / `space`       | Toggle selection on the focused node.                  |
| `down arrow`            | Move focus to the next visible row.                    |
| `up arrow`              | Move focus to the previous visible row.                |
| `right arrow`           | Expand the focused node, or step into its first child. |
| `left arrow`            | Collapse the focused node, or step out to its parent.  |
| `home` / `end`          | Jump to the first / last visible row.                  |
| Printable characters    | Type-ahead by label (500 ms reset).                    |
