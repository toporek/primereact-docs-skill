# Tree

An unstyled, accessible tree component with compound composition for hierarchical data.

Build fully custom tree views with complete control over layout and styling.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <Tree.Root value={nodes} defaultExpandedKeys={{ '0': true }} selectionMode="single" className={styles.root}>
            <Tree.List />
        </Tree.Root>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `List`, `Node`, `Content`, `Toggle`, `Icon`, `Label`, `Filter`, `Header`, `Footer`, `Empty`
- Three selection modes: single, multiple, and checkbox with parent-child propagation
- Drag-drop reordering with scope validation for same-tree and cross-tree transfers
- Built-in filtering with customizable filter input
- Lazy loading support for on-demand node fetching

## Usage

```tsx
import { Tree } from 'primereact/tree';
```

```tsx
<Tree.Root>
    <Tree.Header>
        <Tree.Filter />
    </Tree.Header>
    <Tree.List>
        <Tree.Node>
            <Tree.Content>
                <Tree.Toggle />
                <Tree.Icon />
                <Tree.Label />
            </Tree.Content>
        </Tree.Node>
    </Tree.List>
    <Tree.Footer />
    <Tree.Empty />
</Tree.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Tree.Root as="nav">
    <Tree.List>
        <Tree.Node>
            <Tree.Content as="a">
                <Tree.Label />
            </Tree.Content>
        </Tree.Node>
    </Tree.List>
</Tree.Root>
```

Default elements: `Root`=`div`, `List`=`ul`, `Node`=`li`, `Content`=`div`, `Toggle`=`button`, `Icon`=`span`, `Label`=`span`, `Filter`=`input`, `Header`=`div`, `Footer`=`div`, `Empty`=`div`.

### Render Function Children

`Content` accepts a render function as children, providing access to the component instance. The instance exposes `tree` (root instance) and `treenode` (current node instance).

```tsx
<Tree.Content>{(instance) => <div>Node is {instance.treenode?.state.expanded ? 'expanded' : 'collapsed'}</div>}</Tree.Content>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

export default function TreePTDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <Tree.Root value={nodes} className="w-full md:w-120">
            <Tree.List />
        </Tree.Root>
    );
}
```

## API

### TreeRoot

> **API/props table for `TreeRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute         | Value                                          |
| ----------------- | ---------------------------------------------- |
| `data-scope`      | `"tree"`                                       |
| `data-part`       | `"root"`                                       |
| `data-drag-hover` | Present when a node is being dragged over root |

> **API/props table for `TreeRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeList

> **API/props table for `TreeList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"tree"` |
| `data-part`  | `"list"` |

> **API/props table for `TreeList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeNode

> **API/props table for `TreeNode` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                                          |
| ---------------- | ---------------------------------------------- |
| `data-scope`     | `"tree"`                                       |
| `data-part`      | `"node"`                                       |
| `data-node-key`  | Node key value                                 |
| `data-expanded`  | Present when node is expanded (non-leaf only)  |
| `data-collapsed` | Present when node is collapsed (non-leaf only) |
| `data-selected`  | Present when node is selected                  |
| `data-leaf`      | Present when node is a leaf                    |
| `data-disabled`  | Present when node is disabled                  |

> **API/props table for `TreeNode` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeContent

> **API/props table for `TreeContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute              | Value                                           |
| ---------------------- | ----------------------------------------------- |
| `data-scope`           | `"tree"`                                        |
| `data-part`            | `"content"`                                     |
| `data-selected`        | Present when selected or checked                |
| `data-selectable`      | Present when selectable                         |
| `data-expanded`        | Present when expanded (non-leaf only)           |
| `data-collapsed`       | Present when collapsed (non-leaf only)          |
| `data-leaf`            | Present when leaf node                          |
| `data-checked`         | Present when checked (checkbox mode)            |
| `data-partial-checked` | Present when partially checked (checkbox mode)  |
| `data-disabled`        | Present when disabled                           |
| `data-drop-hover`      | Present when a dragged node hovers over content |

> **API/props table for `TreeContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeToggle

> **API/props table for `TreeToggle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute        | Value                          |
| ---------------- | ------------------------------ |
| `data-scope`     | `"tree"`                       |
| `data-part`      | `"toggle"`                     |
| `data-expanded`  | Present when node is expanded  |
| `data-collapsed` | Present when node is collapsed |

> **API/props table for `TreeToggle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeIcon

> **API/props table for `TreeIcon` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TreeIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeLabel

> **API/props table for `TreeLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TreeLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeFilter

> **API/props table for `TreeFilter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"tree"`   |
| `data-part`  | `"filter"` |

> **API/props table for `TreeFilter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeHeader

> **API/props table for `TreeHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TreeHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeFooter

> **API/props table for `TreeFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TreeFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TreeEmpty

> **API/props table for `TreeEmpty` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `TreeEmpty` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

The root list element uses `role="tree"` while each list item uses `role="treeitem"` with `aria-label`, `aria-selected`, and `aria-expanded` attributes. In checkbox selection, `aria-checked` is used instead of `aria-selected`. Child containers use `role="group"`. Toggle icons are hidden from screen readers as their parent treeitem element with its attributes is used instead. The `aria-setsize`, `aria-posinset`, and `aria-level` attributes are calculated implicitly and added to each treeitem.

### Keyboard Support

| Key             | Function                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `tab`           | Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence.    |
| `shift` + `tab` | Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. |
| `enter`         | Selects the focused treenode.                                                                                                                                                                                                                    |
| `space`         | Selects the focused treenode.                                                                                                                                                                                                                    |
| `down arrow`    | Moves focus to the next treenode.                                                                                                                                                                                                                |
| `up arrow`      | Moves focus to the previous treenode.                                                                                                                                                                                                            |
| `right arrow`   | If node is closed, opens the node otherwise moves focus to the first child node.                                                                                                                                                                 |
| `left arrow`    | If node is open, closes the node otherwise moves focus to the parent node.                                                                                                                                                                       |
