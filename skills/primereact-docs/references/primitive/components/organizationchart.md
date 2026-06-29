# OrganizationChart

Unstyled, accessible org-chart primitive with a compound API.

Unstyled compound primitive for rendering hierarchical org data with full control over markup.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { OrganizationChart } from 'primereact/organizationchart';
import type { OrganizationChartNodeRow } from '@primereact/types/primitive/organizationchart';
import styles from './basic-demo.module.css';

const data = [
    {
        key: '0',
        label: 'Founder',
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                children: [
                    { key: '0-0-0', label: 'UX/UI Designer' },
                    { key: '0-0-1', label: 'Product Manager' }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                children: [
                    { key: '0-1-0', label: 'Frontend Developer' },
                    { key: '0-1-1', label: 'Backend Developer' }
                ]
            }
        ]
    }
];

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrganizationChart.Root value={data} selectionMode="single" className={styles.root}>
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => (
                        <OrganizationChart.Node uKey={node.key}>
                            <OrganizationChart.Content>
                                <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                            </OrganizationChart.Content>
                            <OrganizationChart.Toggle>
                                <OrganizationChart.ToggleIndicator match="expanded">
                                    <ChevronDown />
                                </OrganizationChart.ToggleIndicator>
                                <OrganizationChart.ToggleIndicator match="collapsed">
                                    <ChevronRight />
                                </OrganizationChart.ToggleIndicator>
                            </OrganizationChart.Toggle>
                        </OrganizationChart.Node>
                    )}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

## Features

- Compound parts: _Root_, _Nodes_, _Node_, _Content_, _Label_, _Toggle_, _ToggleIndicator_, _Selection_
- Connectors and 2D nesting are produced by _Nodes_; your render function runs once per node
- Selection modes _single_, _multiple_ and _checkbox_ (with cascade + partial state)
- Controllable collapse and selection via key maps

## Usage

```tsx
import { OrganizationChart } from 'primereact/organizationchart';
```

```tsx
<OrganizationChart.Root value={nodes}>
    <OrganizationChart.Nodes>
        {({ node }) => (
            <OrganizationChart.Node uKey={node.key}>
                <OrganizationChart.Content>
                    <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                    <OrganizationChart.Toggle>
                        <OrganizationChart.ToggleIndicator match="expanded">▼</OrganizationChart.ToggleIndicator>
                        <OrganizationChart.ToggleIndicator match="collapsed">▶</OrganizationChart.ToggleIndicator>
                    </OrganizationChart.Toggle>
                </OrganizationChart.Content>
            </OrganizationChart.Node>
        )}
    </OrganizationChart.Nodes>
</OrganizationChart.Root>
```

## Behavior

### Recursive Render

_OrganizationChart.Nodes_ walks the data and calls its render function once per node, identified by _uKey_. It wraps each node in a `.p-organizationchart-tree` connector cell and nests children in a `.p-organizationchart-subtree`, you never write the recursion. The chart is expanded by default; a node's subtree is hidden only when its key is collapsed.

### Toggle Indicator

_OrganizationChart.Toggle_ renders no icon on its own and only appears for nodes that have children. Add _OrganizationChart.ToggleIndicator_ with _match="expanded"_, _match="collapsed"_ or _match="always"_ inside to render per-state content.

### Selection

_OrganizationChart.Selection_ is render-prop based, exposing _isSelected_, _isPartiallySelected_ and _toggle_. It is active only when a _selectionMode_ is set on _Root_; in _checkbox_ mode selection cascades to descendants.

### Polymorphism

Every sub-component takes an `as` prop. Defaults: `Root`=`Fragment`, `Nodes`=`div`, `Node`=`div`, `Content`=`div`, `Label`=`span`, `Toggle`=`button`, `ToggleIndicator`=`span`, `Selection`=`Fragment`.

## Pass Through

## Accessibility

### Screen Reader

The root has `role="tree"` with `aria-multiselectable` in multiple / checkbox modes. Each connector cell uses `role="treeitem"` with `aria-level`, `aria-expanded` (when expandable) and `aria-selected` (when selectable). Children are grouped with `role="group"`.

### Keyboard Support

| Key               | Function                                         |
| ----------------- | ------------------------------------------------ |
| `tab`             | Moves focus through the selectable nodes.        |
| `enter` / `space` | Toggles the selection state of the focused node. |
