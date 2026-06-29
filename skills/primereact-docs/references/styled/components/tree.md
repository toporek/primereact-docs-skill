# Tree

Tree is used to display hierarchical data.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Minus } from '@primeicons/react/minus';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import {
    Tree,
    type TreeCheckboxSelectionKeys,
    type TreeNodeData,
    type TreeRootSelectionChangeEvent,
    type TreeSelectionInstance
} from '@primereact/ui/tree';
import * as React from 'react';

export default function Preview() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [selectionKeys, setSelectionKeys] = React.useState<TreeCheckboxSelectionKeys>({});

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root
            value={nodes}
            selectionMode="checkbox"
            selectionKeys={selectionKeys}
            onSelectionChange={(e: TreeRootSelectionChangeEvent) => setSelectionKeys(e.value as TreeCheckboxSelectionKeys)}
            defaultExpandedKeys={{ '0': true }}
            className="w-full md:w-120"
        >
            <Tree.Nodes>
                {({ node, leaf, expanded }) => (
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
                            <Tree.Selection>
                                {({ isSelected, isPartiallySelected, toggle }: TreeSelectionInstance) => (
                                    <Checkbox.Root
                                        checked={isSelected}
                                        indeterminate={isPartiallySelected}
                                        onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
                                        tabIndex={-1}
                                    >
                                        <Checkbox.Box>
                                            <Checkbox.Indicator match="checked">
                                                <Check />
                                            </Checkbox.Indicator>
                                            <Checkbox.Indicator match="indeterminate">
                                                <Minus />
                                            </Checkbox.Indicator>
                                        </Checkbox.Box>
                                    </Checkbox.Root>
                                )}
                            </Tree.Selection>
                            {leaf ? <File /> : expanded ? <FolderOpen /> : <Folder />}
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

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

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

export default function BasicDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <Tree.Root value={nodes} defaultExpandedKeys={{ '0': true }} className="w-full md:w-120">
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

### Content

Custom node content is rendered inside _Tree.Content_; the row payload exposes _leaf_ and _expanded_ so the right icon can be chosen.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

export default function NodeDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root value={nodes} defaultExpandedKeys={{ '0': true }} className="w-full md:w-120">
            <Tree.Nodes>
                {({ node, leaf, expanded }) => (
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
                            {leaf ? <File /> : expanded ? <FolderOpen /> : <Folder />}
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

### Toggle Indicator

Toggle indicators are customized with _Tree.ToggleIndicator_ and its _match_ property of _expanded_, _collapsed_ or _always_.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { MinusCircle } from '@primeicons/react/minus-circle';
import { PlusCircle } from '@primeicons/react/plus-circle';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

export default function PlusMinusToggleDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root value={nodes} defaultExpandedKeys={{ '0': true }} className="w-full md:w-120">
            <Tree.Nodes>
                {({ node }) => (
                    <Tree.Node uKey={node.key}>
                        <Tree.Content>
                            <Tree.Toggle>
                                <Tree.ToggleIndicator match="expanded">
                                    <MinusCircle />
                                </Tree.ToggleIndicator>
                                <Tree.ToggleIndicator match="collapsed">
                                    <PlusCircle />
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

### Controlled

Expansion state is managed programmatically with _expandedKeys_ and _onExpandedChange_ properties.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Button } from '@primereact/ui/button';
import { Tree, type TreeExpandedKeys, type TreeNodeData, type TreeRootExpandedChangeEvent } from '@primereact/ui/tree';
import * as React from 'react';

function collectExpandableKeys(list: TreeNodeData[], acc: TreeExpandedKeys = {}): TreeExpandedKeys {
    for (const node of list) {
        if (node.children?.length) {
            acc[node.key] = true;
            collectExpandableKeys(node.children, acc);
        }
    }

    return acc;
}

export default function ExpandCollapseAllDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<TreeExpandedKeys>({});

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    const expandAll = () => setExpandedKeys(collectExpandableKeys(nodes));
    const collapseAll = () => setExpandedKeys({});

    return (
        <div className="flex flex-col gap-3 w-full md:w-120">
            <div className="flex gap-2">
                <Button onClick={expandAll}>
                    <Plus />
                    Expand All
                </Button>
                <Button onClick={collapseAll} variant="outlined">
                    <Minus />
                    Collapse All
                </Button>
            </div>
            <Tree.Root value={nodes} expandedKeys={expandedKeys} onExpandedChange={(e: TreeRootExpandedChangeEvent) => setExpandedKeys(e.value)}>
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
        </div>
    );
}

```

### Selection

#### Single

Single node selection is configured by setting _selectionMode_ as _single_ along with _selectionKeys_ and _onSelectionChange_ properties to manage the selection value binding.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Tree, type TreeNodeData, type TreeRootSelectionChangeEvent, type TreeSelectionKeys } from '@primereact/ui/tree';
import * as React from 'react';

export default function SingleSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [selectionKeys, setSelectionKeys] = React.useState<TreeSelectionKeys>({});

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root
            value={nodes}
            selectionMode="single"
            selectionKeys={selectionKeys}
            onSelectionChange={(e: TreeRootSelectionChangeEvent) => setSelectionKeys(e.value as TreeSelectionKeys)}
            defaultExpandedKeys={{ '0': true }}
            className="w-full md:w-120"
        >
            <Tree.Nodes>
                {({ node, leaf }) => (
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
                            {leaf ? <File /> : <Folder />}
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

#### Multiple

More than one node is selectable by setting _selectionMode_ to _multiple_. By default in multiple selection mode, metaKey press (e.g. ⌘) is necessary to add to existing selections, however this can be configured with the _metaKeySelection_ property.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Tree, type TreeNodeData, type TreeRootSelectionChangeEvent, type TreeSelectionKeys } from '@primereact/ui/tree';
import * as React from 'react';

export default function MultipleSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [selectionKeys, setSelectionKeys] = React.useState<TreeSelectionKeys>({});

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root
            value={nodes}
            selectionMode="multiple"
            metaKeySelection
            selectionKeys={selectionKeys}
            onSelectionChange={(e: TreeRootSelectionChangeEvent) => setSelectionKeys(e.value as TreeSelectionKeys)}
            defaultExpandedKeys={{ '0': true }}
            className="w-full md:w-120"
        >
            <Tree.Nodes>
                {({ node, leaf }) => (
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
                            {leaf ? <File /> : <Folder />}
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

#### Checkbox

Selection of multiple nodes via checkboxes is composed with _Tree.Selection_ inside _Tree.Node_. The render prop exposes _isSelected_, _isPartiallySelected_ and _toggle_; the down/up tri-state cascade runs in the headless layer.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Minus } from '@primeicons/react/minus';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import {
    Tree,
    type TreeCheckboxSelectionKeys,
    type TreeNodeData,
    type TreeRootSelectionChangeEvent,
    type TreeSelectionInstance
} from '@primereact/ui/tree';
import * as React from 'react';

export default function CheckboxSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [selectionKeys, setSelectionKeys] = React.useState<TreeCheckboxSelectionKeys>({});

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root
            value={nodes}
            selectionMode="checkbox"
            selectionKeys={selectionKeys}
            onSelectionChange={(e: TreeRootSelectionChangeEvent) => setSelectionKeys(e.value as TreeCheckboxSelectionKeys)}
            defaultExpandedKeys={{ '0': true }}
            className="w-full md:w-120"
        >
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
                            <Tree.Selection>
                                {({ isSelected, isPartiallySelected, toggle }: TreeSelectionInstance) => (
                                    <Checkbox.Root
                                        checked={isSelected}
                                        indeterminate={isPartiallySelected}
                                        onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
                                        tabIndex={-1}
                                    >
                                        <Checkbox.Box>
                                            <Checkbox.Indicator match="checked">
                                                <Check />
                                            </Checkbox.Indicator>
                                            <Checkbox.Indicator match="indeterminate">
                                                <Minus />
                                            </Checkbox.Indicator>
                                        </Checkbox.Box>
                                    </Checkbox.Root>
                                )}
                            </Tree.Selection>
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

#### Radio

Use _Tree.Selection_ with _mode="radio"_ to keep a single selection sticky. Re-clicking the selected node does not deselect it.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import type { RadioButtonRootChangeEvent } from '@primereact/ui/radiobutton';
import { RadioButton } from '@primereact/ui/radiobutton';
import { Tree, type TreeNodeData, type TreeRootSelectionChangeEvent, type TreeSelectionInstance, type TreeSelectionKeys } from '@primereact/ui/tree';
import * as React from 'react';

export default function RadioSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [selectionKeys, setSelectionKeys] = React.useState<TreeSelectionKeys>({});

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root
            value={nodes}
            selectionMode="single"
            selectionKeys={selectionKeys}
            onSelectionChange={(e: TreeRootSelectionChangeEvent) => setSelectionKeys(e.value as TreeSelectionKeys)}
            defaultExpandedKeys={{ '0': true }}
            className="w-full md:w-120"
        >
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
                            <Tree.Selection mode="radio">
                                {({ isSelected, toggle }: TreeSelectionInstance) => (
                                    <RadioButton.Root
                                        checked={isSelected}
                                        onCheckedChange={(e: RadioButtonRootChangeEvent) => toggle(e.originalEvent)}
                                        tabIndex={-1}
                                    >
                                        <RadioButton.Box>
                                            <RadioButton.Indicator match="checked" />
                                        </RadioButton.Box>
                                    </RadioButton.Root>
                                )}
                            </Tree.Selection>
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

#### Select All

Outside a _Tree.Node_, _Tree.Selection_ exposes _isAllSelected_, _isSomeSelected_ and _toggleAll_ for an aggregate checkbox in _Tree.Header_.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Minus } from '@primeicons/react/minus';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import {
    Tree,
    type TreeCheckboxSelectionKeys,
    type TreeNodeData,
    type TreeRootSelectionChangeEvent,
    type TreeSelectionInstance
} from '@primereact/ui/tree';
import * as React from 'react';

export default function SelectAllDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [selectionKeys, setSelectionKeys] = React.useState<TreeCheckboxSelectionKeys>({});

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    return (
        <Tree.Root
            value={nodes}
            selectionMode="checkbox"
            selectionKeys={selectionKeys}
            onSelectionChange={(e: TreeRootSelectionChangeEvent) => setSelectionKeys(e.value as TreeCheckboxSelectionKeys)}
            defaultExpandedKeys={{ '0': true }}
            className="w-full md:w-120"
        >
            <Tree.Header className="flex items-center gap-2 mb-2 px-2">
                <Tree.Selection>
                    {({ isAllSelected, isSomeSelected, toggleAll }: TreeSelectionInstance) => (
                        <Checkbox.Root
                            checked={isAllSelected}
                            indeterminate={isSomeSelected && !isAllSelected}
                            onCheckedChange={(e: CheckboxRootChangeEvent) => toggleAll(e.originalEvent)}
                        >
                            <Checkbox.Box>
                                <Checkbox.Indicator match="checked">
                                    <Check />
                                </Checkbox.Indicator>
                                <Checkbox.Indicator match="indeterminate">
                                    <Minus />
                                </Checkbox.Indicator>
                            </Checkbox.Box>
                        </Checkbox.Root>
                    )}
                </Tree.Selection>
                <span className="font-medium">Select All</span>
            </Tree.Header>
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
                            <Tree.Selection>
                                {({ isSelected, isPartiallySelected, toggle }: TreeSelectionInstance) => (
                                    <Checkbox.Root
                                        checked={isSelected}
                                        indeterminate={isPartiallySelected}
                                        onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
                                        tabIndex={-1}
                                    >
                                        <Checkbox.Box>
                                            <Checkbox.Indicator match="checked">
                                                <Check />
                                            </Checkbox.Indicator>
                                            <Checkbox.Indicator match="indeterminate">
                                                <Minus />
                                            </Checkbox.Indicator>
                                        </Checkbox.Box>
                                    </Checkbox.Root>
                                )}
                            </Tree.Selection>
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

#### Keyboard

Tree fully supports keyboard navigation. Arrow keys move focus across visible rows, Right and Left expand and collapse, Space and Enter toggle selection on the focused node.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Badge } from '@primereact/ui/badge';
import { Tree, type TreeNodeData, type TreeRootSelectionChangeEvent, type TreeSelectionKeys } from '@primereact/ui/tree';
import * as React from 'react';

export default function KeyboardDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [selectionKeys, setSelectionKeys] = React.useState<TreeSelectionKeys>({});

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    const selectedCount = Object.values(selectionKeys).filter(Boolean).length;

    return (
        <div className="flex flex-col gap-3 w-full md:w-120">
            <div className="flex items-center justify-between gap-3 p-3 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
                <span className="text-sm text-surface-500 dark:text-surface-400">
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">↑</kbd>{' '}
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">↓</kbd> navigate,{' '}
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">→</kbd> expand,{' '}
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">←</kbd> collapse,{' '}
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">Space</kbd> select
                </span>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Selected</span>
                    <Badge severity={selectedCount ? 'info' : 'secondary'}>{selectedCount}</Badge>
                </div>
            </div>
            <Tree.Root
                value={nodes}
                selectionMode="multiple"
                metaKeySelection
                selectionKeys={selectionKeys}
                onSelectionChange={(e: TreeRootSelectionChangeEvent) => setSelectionKeys(e.value as TreeSelectionKeys)}
                defaultExpandedKeys={{ '0': true }}
            >
                <Tree.Nodes>
                    {({ node, leaf }) => (
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
                                {leaf ? <File /> : <Folder />}
                                <Tree.Label>{node.label}</Tree.Label>
                            </Tree.Content>
                        </Tree.Node>
                    )}
                </Tree.Nodes>
            </Tree.Root>
        </div>
    );
}

```

### Filter

Filtering is composed with the _Tree.Filter_ input and a derived _value_. The [_useTreeFilter_](../../hooks/use-tree-filter.md) hook covers the common case of label-based search and exposes the filtered nodes along with an _expandedKeys_ map.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Search } from '@primeicons/react/search';
import { useTreeFilter } from '@primereact/hooks/use-tree-filter';
import { Fluid } from '@primereact/ui/fluid';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Tree, type TreeExpandedKeys, type TreeNodeData, type TreeRootExpandedChangeEvent } from '@primereact/ui/tree';
import * as React from 'react';

function collectKeys(list: TreeNodeData[], acc: TreeExpandedKeys = {}): TreeExpandedKeys {
    for (const node of list) {
        if (node.children?.length) {
            acc[node.key] = true;
            collectKeys(node.children, acc);
        }
    }

    return acc;
}

export default function FilterDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [query, setQuery] = React.useState('');
    const [expandedKeys, setExpandedKeys] = React.useState<TreeExpandedKeys>({ '0': true });

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    const { filteredNodes, isFiltered } = useTreeFilter<TreeNodeData>({
        nodes,
        field: 'label',
        value: query,
        matchMode: 'contains'
    });

    React.useEffect(() => {
        if (isFiltered) setExpandedKeys(collectKeys(filteredNodes));
    }, [isFiltered, filteredNodes]);

    return (
        <Tree.Root
            value={filteredNodes}
            expandedKeys={expandedKeys}
            onExpandedChange={(e: TreeRootExpandedChangeEvent) => setExpandedKeys(e.value)}
            className="w-full md:w-120"
        >
            <Tree.Header>
                <IconField.Root as={Fluid}>
                    <InputText
                        value={query}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                        placeholder="Search..."
                    />
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                </IconField.Root>
            </Tree.Header>
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
            <Tree.Empty className="mt-4 text-center text-sm text-surface-500">No nodes match &quot;{query}&quot;</Tree.Empty>
        </Tree.Root>
    );
}

```

### Lazy

Lazy loading is useful when dealing with huge datasets. Placeholder nodes are marked with _leaf: false_ and children are loaded on demand using the _onExpand_ event. The _loading_ flag on the node toggles a spinner inside _Tree.Toggle_.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Spinner } from '@primeicons/react/spinner';
import { Tree, type TreeNodeData, type TreeRootExpandEvent } from '@primereact/ui/tree';
import * as React from 'react';

const INITIAL_NODES: TreeNodeData[] = [
    { key: '0', label: 'Documents', leaf: false },
    { key: '1', label: 'Pictures', leaf: false },
    { key: '2', label: 'Videos', leaf: false }
];

function fetchChildren(parent: TreeNodeData): Promise<TreeNodeData[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const depth = parent.key.split('-').length;
            const leaf = depth >= 3;

            resolve([
                { key: `${parent.key}-0`, label: leaf ? `${parent.label} - file.txt` : `${parent.label} / folder A`, leaf },
                { key: `${parent.key}-1`, label: leaf ? `${parent.label} - readme.md` : `${parent.label} / folder B`, leaf },
                { key: `${parent.key}-2`, label: `${parent.label} - notes.txt`, leaf: true }
            ]);
        }, 800);
    });
}

function setChildren(list: TreeNodeData[], key: string, children: TreeNodeData[]): TreeNodeData[] {
    return list.map((n) => {
        if (n.key === key) return { ...n, children, loading: false };
        if (n.children?.length) return { ...n, children: setChildren(n.children, key, children) };

        return n;
    });
}

function setLoading(list: TreeNodeData[], key: string, loading: boolean): TreeNodeData[] {
    return list.map((n) => {
        if (n.key === key) return { ...n, loading };
        if (n.children?.length) return { ...n, children: setLoading(n.children, key, loading) };

        return n;
    });
}

export default function LazyDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>(INITIAL_NODES);

    const pendingRef = React.useRef<Set<string>>(new Set());

    const onExpand = async (event: TreeRootExpandEvent) => {
        const node = event.node;

        if (node.children || pendingRef.current.has(node.key)) return;

        pendingRef.current.add(node.key);
        setNodes((prev) => setLoading(prev, node.key, true));

        try {
            const children = await fetchChildren(node);

            setNodes((prev) => setChildren(prev, node.key, children));
        } catch {
            setNodes((prev) => setLoading(prev, node.key, false));
        } finally {
            pendingRef.current.delete(node.key);
        }
    };

    return (
        <Tree.Root value={nodes} onExpand={onExpand} className="w-full md:w-120">
            <Tree.Nodes>
                {({ node, loading, leaf, expanded }) => (
                    <Tree.Node uKey={node.key}>
                        <Tree.Content>
                            <Tree.Toggle>
                                {loading ? (
                                    <Spinner className="animate-spin" />
                                ) : (
                                    <>
                                        <Tree.ToggleIndicator match="expanded">
                                            <ChevronDown />
                                        </Tree.ToggleIndicator>
                                        <Tree.ToggleIndicator match="collapsed">
                                            <ChevronRight />
                                        </Tree.ToggleIndicator>
                                    </>
                                )}
                            </Tree.Toggle>
                            {leaf ? <File /> : expanded ? <FolderOpen /> : <Folder />}
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

### Loading

#### Overlay

Setting the _loading_ property displays a mask over the tree. The mask content is provided through _Tree.Loading_.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Refresh } from '@primeicons/react/refresh';
import { Spinner } from '@primeicons/react/spinner';
import { Button } from '@primereact/ui/button';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

export default function LoadingOverlayDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        NodeService.getTreeNodes().then(setNodes);
    }, []);

    const refresh = React.useCallback(() => {
        setLoading(true);
        setTimeout(async () => {
            const data = await NodeService.getTreeNodes();
            setNodes(data);
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className="w-full md:w-120 flex flex-col gap-3">
            <Button size="small" onClick={refresh} disabled={loading} className="self-end">
                <Refresh />
                Refresh
            </Button>
            <Tree.Root value={nodes} loading={loading} defaultExpandedKeys={{ '0': true }}>
                <Tree.Nodes>
                    {({ node, leaf }) => (
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
                                {leaf ? <File /> : <Folder />}
                                <Tree.Label>{node.label}</Tree.Label>
                            </Tree.Content>
                        </Tree.Node>
                    )}
                </Tree.Nodes>
                <Tree.Loading>
                    <Spinner className="w-8! h-8! animate-spin text-primary" />
                </Tree.Loading>
            </Tree.Root>
        </div>
    );
}

```

#### Skeleton

Placeholder _Skeleton_ primitives are rendered inside _Tree.Content_ while the dataset loads.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Refresh } from '@primeicons/react/refresh';
import { Button } from '@primereact/ui/button';
import { Skeleton } from '@primereact/ui/skeleton';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

const PLACEHOLDERS: TreeNodeData[] = Array.from({ length: 6 }, (_, i) => ({
    key: `skeleton-${i}`,
    label: '',
    leaf: true
}));

export default function LoadingSkeletonDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [loading, setLoading] = React.useState(true);

    const refresh = React.useCallback(() => {
        setLoading(true);
        setTimeout(async () => {
            const data = await NodeService.getTreeNodes();
            setNodes(data);
            setLoading(false);
        }, 1500);
    }, []);

    React.useEffect(() => {
        refresh();
    }, [refresh]);

    return (
        <div className="w-full md:w-120 flex flex-col gap-3">
            <Button size="small" onClick={refresh} disabled={loading} className="self-end">
                <Refresh />
                Refresh
            </Button>
            <Tree.Root value={loading ? PLACEHOLDERS : nodes} defaultExpandedKeys={{ '0': true }}>
                <Tree.Nodes>
                    {({ node, leaf }) =>
                        loading ? (
                            <Tree.Node uKey={node.key}>
                                <Tree.Content>
                                    <Skeleton shape="circle" size="1rem" />
                                    <Skeleton width="40%" height="0.75rem" borderRadius="4px" />
                                </Tree.Content>
                            </Tree.Node>
                        ) : (
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
                                    {leaf ? <File /> : <Folder />}
                                    <Tree.Label>{node.label}</Tree.Label>
                                </Tree.Content>
                            </Tree.Node>
                        )
                    }
                </Tree.Nodes>
            </Tree.Root>
        </div>
    );
}

```

### Empty

When _value_ is empty, _Tree.Empty_ is rendered in place of the rows.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Folder } from '@primeicons/react/folder';
import { Plus } from '@primeicons/react/plus';
import { Button } from '@primereact/ui/button';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

export default function EmptyDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    const addNode = () => {
        const next: TreeNodeData = { key: `root-${nodes.length}`, label: `New Folder ${nodes.length + 1}` };
        setNodes((prev) => [...prev, next]);
    };

    return (
        <Tree.Root value={nodes} className="w-full md:w-120">
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
                            <Folder />
                            <Tree.Label>{node.label}</Tree.Label>
                        </Tree.Content>
                    </Tree.Node>
                )}
            </Tree.Nodes>
            <Tree.Empty>
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                    <div className="w-14 h-14 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                        <Folder className="w-7 h-7 text-surface-400 dark:text-surface-500" />
                    </div>
                    <div>
                        <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">No folders yet</p>
                        <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Create your first folder to start building a tree.</p>
                    </div>
                    <Button size="small" onClick={addNode}>
                        <Plus />
                        New Folder
                    </Button>
                </div>
            </Tree.Empty>
        </Tree.Root>
    );
}

```

### Drag and Drop

#### Single

Nodes can be reordered within a tree by setting _draggable_ and _droppable_. The _onMove_ callback receives the updated tree value along with _dragNode_, _dropNode_, _dropIndex_ and _dropPosition_. Drop targets render _Tree.DropIndicator_ with _position="before"_ and _position="after"_ around _Tree.Content_.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Tree, type TreeNodeData, type TreeRootMoveEvent } from '@primereact/ui/tree';
import * as React from 'react';

const INITIAL: TreeNodeData[] = [
    {
        key: '0',
        label: 'app',
        children: [
            {
                key: '0-0',
                label: 'api',
                children: [{ key: '0-0-0', label: 'route.ts' }]
            },
            { key: '0-1', label: 'layout.tsx' },
            { key: '0-2', label: 'page.tsx' }
        ]
    },
    {
        key: '1',
        label: 'components',
        children: [
            { key: '1-0', label: 'Header.tsx' },
            { key: '1-1', label: 'Footer.tsx' }
        ]
    },
    { key: '2', label: 'package.json' },
    { key: '3', label: 'README.md' }
];

export default function DragDropSingleDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>(INITIAL);

    return (
        <Tree.Root
            value={nodes}
            draggable
            droppable
            onMove={(e: TreeRootMoveEvent) => setNodes(e.value)}
            defaultExpandedKeys={{ '0': true, '1': true }}
            className="w-full md:w-120"
        >
            <Tree.Nodes>
                {({ node }) => (
                    <Tree.Node uKey={node.key}>
                        <Tree.DropIndicator position="before" />
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
                        <Tree.DropIndicator position="after" />
                    </Tree.Node>
                )}
            </Tree.Nodes>
        </Tree.Root>
    );
}

```

#### Multiple

Nodes can be transferred between trees with _draggableScope_ and _droppableScope_. The _draggableScope_ tags the nodes that leave a tree; _droppableScope_ declares which scopes a tree accepts. Both accept a string or an array of strings.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Tree, type TreeNodeData, type TreeRootMoveEvent } from '@primereact/ui/tree';
import * as React from 'react';

const INITIAL_A: TreeNodeData[] = [
    {
        key: '0',
        label: 'app',
        children: [
            { key: '0-0', label: 'api', children: [{ key: '0-0-0', label: 'route.ts' }] },
            { key: '0-1', label: 'layout.tsx' },
            { key: '0-2', label: 'page.tsx' }
        ]
    },
    {
        key: '1',
        label: 'components',
        children: [
            { key: '1-0', label: 'Header.tsx' },
            { key: '1-1', label: 'Footer.tsx' }
        ]
    },
    {
        key: '2',
        label: 'public',
        children: [{ key: '2-0', label: 'favicon.ico' }]
    },
    { key: '3', label: '.env.local' },
    { key: '4', label: 'next.config.js' },
    { key: '5', label: 'package.json' },
    { key: '6', label: 'README.md' }
];

const INITIAL_B: TreeNodeData[] = [{ key: 'etc', label: '/etc' }];

function renderNode({ node }: { node: TreeNodeData }) {
    return (
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
    );
}

export default function DragDropMultipleDemo() {
    const [a, setA] = React.useState<TreeNodeData[]>(INITIAL_A);
    const [b, setB] = React.useState<TreeNodeData[]>(INITIAL_B);
    const [c, setC] = React.useState<TreeNodeData[]>([]);

    return (
        <div className="flex flex-col md:flex-row gap-4">
            <Tree.Root
                value={a}
                draggable
                droppable
                draggableScope="first"
                droppableScope="none"
                onMove={(e: TreeRootMoveEvent) => setA(e.value)}
                defaultExpandedKeys={{ '0': true }}
                className="flex-1 border border-surface rounded-lg p-2"
            >
                <Tree.Nodes>{renderNode}</Tree.Nodes>
            </Tree.Root>
            <Tree.Root
                value={b}
                draggable
                droppable
                draggableScope="second"
                droppableScope="first"
                onMove={(e: TreeRootMoveEvent) => setB(e.value)}
                className="flex-1 border border-surface rounded-lg p-2"
            >
                <Tree.Nodes>{renderNode}</Tree.Nodes>
            </Tree.Root>
            <Tree.Root
                value={c}
                droppable
                droppableScope={['first', 'second']}
                onMove={(e: TreeRootMoveEvent) => setC(e.value)}
                className="flex-1 border border-surface rounded-lg p-2 min-h-40"
            >
                <Tree.Nodes>{renderNode}</Tree.Nodes>
                <Tree.Empty className="text-center text-sm text-surface-500 py-12">Drop here</Tree.Empty>
            </Tree.Root>
        </div>
    );
}

```

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
