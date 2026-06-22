# Tree

Tree is used to display hierarchical data.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Tree, type TreeNode } from '@primereact/ui/tree';
import * as React from 'react';

export default function Preview() {
    const [nodes, setNodes] = React.useState<TreeNode[]>([]);

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

## Usage

```tsx
import { Tree } from '@primereact/ui/tree';
```

```tsx
<Tree.Root>
    <Tree.Header />
    <Tree.List>
        <Tree.Node>
            <Tree.Content>
                <Tree.Toggle />
            </Tree.Content>
        </Tree.Node>
    </Tree.List>
    <Tree.Footer />
    <Tree.Empty />
</Tree.Root>
```

## Examples

### Basic

Displays hierarchical data with expand and collapse support.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

export default function BasicDemo() {
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

### Node

Tree nodes can be customized with templates using the `Tree.Node` components.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { Check } from '@primeicons/react/check';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { FolderOpen } from '@primeicons/react/folder-open';
import { Minus } from '@primeicons/react/minus';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { Tree, type TreeContentInstance, type TreeNodeData as TreeNodeType } from '@primereact/ui/tree';
import * as React from 'react';

function CustomTreeNode({ node, index }: { node: TreeNodeType; index: number }) {
    return (
        <Tree.Node key={node.key} node={node} index={index}>
            <Tree.Content>
                {(instance: TreeContentInstance) => {
                    const { tree, treenode } = instance;
                    const leaf = treenode?.leaf;
                    const expanded = treenode?.expanded;
                    const checked = treenode?.checked;
                    const partialChecked = treenode?.partialChecked;

                    return (
                        <>
                            <Tree.Toggle>{expanded ? <ArrowUp /> : <ArrowDown />}</Tree.Toggle>

                            <Checkbox.Root
                                checked={checked}
                                indeterminate={partialChecked}
                                onCheckedChange={(event: CheckboxRootChangeEvent) => {
                                    tree?.onCheckboxChange(
                                        event.originalEvent as React.ChangeEvent<HTMLInputElement>,
                                        treenode?.props.node as TreeNodeType
                                    );
                                }}
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

                            {leaf ? <File /> : expanded ? <FolderOpen /> : <Folder />}

                            <Tree.Label>{node.label}</Tree.Label>
                        </>
                    );
                }}
            </Tree.Content>

            {node.children && node.children.length > 0 && (
                <Tree.List>
                    {node.children.map((childNode: TreeNodeType, childIndex: number) => (
                        <CustomTreeNode key={childNode.key} node={childNode} index={childIndex} />
                    ))}
                </Tree.List>
            )}
        </Tree.Node>
    );
}

export default function NodeDemo() {
    return (
        <Tree.Root className="w-full md:w-120" value={nodes} selectionMode="checkbox">
            <Tree.List>
                {nodes.map((node, index) => (
                    <CustomTreeNode key={node.key} node={node} index={index} />
                ))}
            </Tree.List>
        </Tree.Root>
    );
}

const nodes = [
    {
        key: '0',
        label: 'app',
        data: 'app folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '0-0',
                label: 'api',
                data: 'api folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '0-0-0',
                        label: 'auth',
                        data: 'auth folder',
                        icon: 'pi pi-fw pi-folder',
                        children: [
                            {
                                key: '0-0-0-0',
                                label: 'route.ts',
                                data: 'route.ts file',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    }
                ]
            },
            {
                key: '0-1',
                label: 'layout.tsx',
                data: 'layout.tsx file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '0-2',
                label: 'page.tsx',
                data: 'page.tsx file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '1',
        label: 'components',
        data: 'components folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '1-0',
                label: 'Header.tsx',
                data: 'Header.tsx file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '1-1',
                label: 'Footer.tsx',
                data: 'Footer.tsx file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '2',
        label: 'public',
        data: 'public folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '2-0',
                label: 'favicon.ico',
                data: 'favicon.ico file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '3',
        label: '.env.local',
        data: '.env.local file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '4',
        label: 'next.config.js',
        data: 'next.config.js file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '5',
        label: 'package.json',
        data: 'package.json file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '6',
        label: 'README.md',
        data: 'README.md file',
        icon: 'pi pi-fw pi-file'
    }
];
```

### Controlled

Tree state can be controlled programmatically with the `expandedKeys` property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Button } from '@primereact/ui/button';
import { Tree, type TreeExpandedKeys, type TreeNodeData, type TreeRootExpandedChangeEvent } from '@primereact/ui/tree';
import * as React from 'react';

export default function ControlledDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<TreeExpandedKeys>({ '0': true });

    const expandAll = () => {
        const _expandedKeys = {};

        for (const node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node: TreeNodeData, _expandedKeys: TreeExpandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (const child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    return (
        <>
            <div className="flex flex-wrap gap-2 mb-6">
                <Button type="button" onClick={expandAll}>
                    <Plus />
                    Expand All
                </Button>
                <Button type="button" onClick={collapseAll}>
                    <Minus />
                    Collapse All
                </Button>
            </div>
            <Tree.Root
                value={nodes}
                expandedKeys={expandedKeys}
                onExpandedChange={(e: TreeRootExpandedChangeEvent) => setExpandedKeys(e.value)}
                className="w-full md:w-120"
            >
                <Tree.List />
            </Tree.Root>
        </>
    );
}

const nodes = [
    {
        key: '0',
        label: 'app',
        data: 'app folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '0-0',
                label: 'api',
                data: 'api folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '0-0-0',
                        label: 'auth',
                        data: 'auth folder',
                        icon: 'pi pi-fw pi-folder',
                        children: [
                            {
                                key: '0-0-0-0',
                                label: 'route.ts',
                                data: 'route.ts file',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    }
                ]
            },
            {
                key: '0-1',
                label: 'layout.tsx',
                data: 'layout.tsx file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '0-2',
                label: 'page.tsx',
                data: 'page.tsx file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '1',
        label: 'components',
        data: 'components folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '1-0',
                label: 'Header.tsx',
                data: 'Header.tsx file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '1-1',
                label: 'Footer.tsx',
                data: 'Footer.tsx file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '2',
        label: 'public',
        data: 'public folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '2-0',
                label: 'favicon.ico',
                data: 'favicon.ico file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '3',
        label: '.env.local',
        data: '.env.local file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '4',
        label: 'next.config.js',
        data: 'next.config.js file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '5',
        label: 'package.json',
        data: 'package.json file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '6',
        label: 'README.md',
        data: 'README.md file',
        icon: 'pi pi-fw pi-file'
    }
];
```

### Selection

#### Single

Single node selection is configured by setting `selectionMode` as `single` along with `selectionKeys` property to manage the selection value binding.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

export default function SingleSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <Tree.Root value={nodes} selectionMode="single" className="w-full md:w-120">
            <Tree.List />
        </Tree.Root>
    );
}
```

#### Multiple

More than one node is selectable by setting `selectionMode` to` multiple`. By default in multiple selection mode, metaKey press (e.g. `⌘`) is not necessary to add to existing selections. When the optional `metaKeySelection` is present, behavior is changed in a way that selecting a new node requires meta key to be present. Note that in touch enabled devices, Tree always ignores metaKey.

In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Label } from '@primereact/ui/label';
import { Switch } from '@primereact/ui/switch';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import { SwitchRootChangeEvent } from 'primereact/switch';
import * as React from 'react';

export default function SingleSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <>
            <div className="flex items-center mb-4 gap-2">
                <Switch.Root checked={checked} onCheckedChange={(event: SwitchRootChangeEvent) => setChecked(event.checked)} inputId="input-metakey">
                    <Switch.Control>
                        <Switch.Thumb />
                    </Switch.Control>
                </Switch.Root>
                <Label htmlFor="input-metakey">MetaKey</Label>
            </div>
            <Tree.Root value={nodes} selectionMode="multiple" metaKeySelection={checked} className="w-full md:w-120">
                <Tree.List />
            </Tree.Root>
        </>
    );
}
```

#### Checkbox

Selection of multiple nodes via checkboxes is enabled by configuring `selectionMode` as `checkbox`.

In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has `checked` and `partialChecked` properties to represent the checked state of a node object to indicate selection.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Check } from '@primeicons/react/check';
import { Minus } from '@primeicons/react/minus';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { Tree, type TreeContentInstance, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';

function CheckboxTreeNode({ node, index }: { node: TreeNodeData; index: number }) {
    return (
        <Tree.Node node={node} index={index}>
            <Tree.Content>
                {(instance: TreeContentInstance) => {
                    const { tree, treenode } = instance;

                    return (
                        <>
                            <Tree.Toggle />
                            <Checkbox.Root
                                checked={treenode?.checked}
                                indeterminate={treenode?.partialChecked}
                                onCheckedChange={(event: CheckboxRootChangeEvent) => {
                                    tree?.onCheckboxChange(
                                        event.originalEvent as React.ChangeEvent<HTMLInputElement>,
                                        treenode?.props.node as TreeNodeData
                                    );
                                }}
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
                            {node.icon && <Tree.Icon className={node.icon} />}
                            <Tree.Label>{node.label}</Tree.Label>
                        </>
                    );
                }}
            </Tree.Content>
            {node.children && node.children.length > 0 && (
                <Tree.List>
                    {node.children.map((childNode: TreeNodeData, childIndex: number) => (
                        <CheckboxTreeNode key={childNode.key} node={childNode} index={childIndex} />
                    ))}
                </Tree.List>
            )}
        </Tree.Node>
    );
}

export default function CheckboxSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <Tree.Root value={nodes} selectionMode="checkbox" className="w-full md:w-120">
            <Tree.List>
                {nodes.map((node, index) => (
                    <CheckboxTreeNode key={node.key} node={node} index={index} />
                ))}
            </Tree.List>
        </Tree.Root>
    );
}
```

### Lazy Loading

Lazy loading is demonstrated in this example where nodes are loaded on demand when a node is expanded.

```tsx
'use client';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { FolderOpen } from '@primeicons/react/folder-open';
import { MinusCircle } from '@primeicons/react/minus-circle';
import { PlusCircle } from '@primeicons/react/plus-circle';
import { Spinner } from '@primeicons/react/spinner';
import { Tree, type TreeNodeData, type TreeNodeInstance, type TreeRootExpandEvent } from '@primereact/ui/tree';
import * as React from 'react';

export default function LazyDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false,
                loading: true
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false,
                loading: true
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false,
                loading: true
            }
        ];
    };

    const onNodeExpand = (event: TreeRootExpandEvent) => {
        const expandedNode = event.node;

        if (!expandedNode.children) {
            expandedNode.loading = true;
            setNodes((prevNodes) => [...prevNodes]);

            setTimeout(() => {
                expandedNode.children = [
                    {
                        key: `${expandedNode.key}-0`,
                        label: `Lazy ${expandedNode.label} - 0`
                    },
                    {
                        key: `${expandedNode.key}-1`,
                        label: `Lazy ${expandedNode.label} - 1`
                    },
                    {
                        key: `${expandedNode.key}-2`,
                        label: `Lazy ${expandedNode.label} - 2`
                    }
                ];

                expandedNode.loading = false;

                setNodes((prevNodes) => [...prevNodes]);
            }, 1000);
        }
    };

    React.useEffect(() => {
        setNodes(createLazyNodes());

        setTimeout(() => {
            setNodes((prevNodes) =>
                prevNodes.map((node) => ({
                    ...node,
                    loading: false
                }))
            );
        }, 2000);
    }, []);

    return (
        <Tree.Root onExpand={onNodeExpand} className="w-full md:w-120">
            <Tree.List>
                {nodes.map((node, index) => (
                    <Tree.Node key={node.key} node={node} index={index}>
                        {(instance: TreeNodeInstance) => {
                            const { leaf, expanded } = instance;

                            return (
                                <>
                                    <Tree.Content>
                                        <Tree.Toggle>{node.loading ? <Spinner /> : expanded ? <MinusCircle /> : <PlusCircle />}</Tree.Toggle>

                                        {leaf ? <File /> : expanded ? <FolderOpen /> : <Folder />}

                                        <Tree.Label>{node.label}</Tree.Label>
                                    </Tree.Content>

                                    {node.children && expanded && <Tree.List />}
                                </>
                            );
                        }}
                    </Tree.Node>
                ))}
            </Tree.List>
        </Tree.Root>
    );
}
```

### Filter

Filtering enables searching through the nodes. Place a `Tree.Filter` component inside `Tree.Header` to add a search input. Any input component can be used with the `as` prop and the filtering logic can be controlled with the `onChange` event.

```tsx
'use client';
import { NodeService } from '@/shared/services/node.service';
import { Fluid } from '@primereact/ui/fluid';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Tree, type TreeNodeData } from '@primereact/ui/tree';
import * as React from 'react';
import { Search } from '@primeicons/react/search';

export default function FilterDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([]);
    const [filterValue, setFilterValue] = React.useState<string>('');

    const filterTree = React.useCallback((nodes: TreeNodeData[], query: string): TreeNodeData[] => {
        if (!query) return nodes;

        const filtered: TreeNodeData[] = [];

        for (const node of nodes) {
            const nodeMatches = node.label?.toString().toLowerCase().includes(query.toLowerCase());
            const filteredChildren = node.children ? filterTree(node.children, query) : [];

            if (nodeMatches || filteredChildren.length > 0) {
                filtered.push({
                    ...node,
                    children: filteredChildren.length > 0 ? filteredChildren : node.children
                });
            }
        }

        return filtered;
    }, []);

    const filteredNodes = React.useMemo(() => filterTree(nodes, filterValue), [nodes, filterValue, filterTree]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <Tree.Root value={filteredNodes} className="w-full md:w-120">
            <Tree.Header>
                <IconField.Root as={Fluid}>
                    <Tree.Filter
                        as={InputText}
                        value={filterValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                    />
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                </IconField.Root>
            </Tree.Header>
            <Tree.List />
            <Tree.Empty className="mt-2">No options found.</Tree.Empty>
        </Tree.Root>
    );
}
```

### DragDrop

#### Single

Drag&Drop based reordering is enabled by adding the `draggableNodes` and `droppableNodes` properties..

```tsx
'use client';
import { Tree, type TreeNodeData, type TreeRootValueChangeEvent } from '@primereact/ui/tree';
import * as React from 'react';

export default function DragDropSingleDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([
        {
            key: '0',
            label: 'app',
            data: 'app folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '0-0',
                    label: 'api',
                    data: 'api folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '0-0-0',
                            label: 'auth',
                            data: 'auth folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '0-0-0-0',
                                    label: 'route.ts',
                                    data: 'route.ts file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '0-1',
                    label: 'layout.tsx',
                    data: 'layout.tsx file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '0-2',
                    label: 'page.tsx',
                    data: 'page.tsx file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '1',
            label: 'components',
            data: 'components folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '1-0',
                    label: 'Header.tsx',
                    data: 'Header.tsx file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '1-1',
                    label: 'Footer.tsx',
                    data: 'Footer.tsx file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '2',
            label: 'public',
            data: 'public folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '2-0',
                    label: 'favicon.ico',
                    data: 'favicon.ico file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '3',
            label: '.env.local',
            data: '.env.local file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '4',
            label: 'next.config.js',
            data: 'next.config.js file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '5',
            label: 'package.json',
            data: 'package.json file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '6',
            label: 'README.md',
            data: 'README.md file',
            icon: 'pi pi-fw pi-file'
        }
    ]);

    return (
        <Tree.Root
            value={nodes}
            onValueChange={(e: TreeRootValueChangeEvent) => setNodes(e.value)}
            draggableNodes
            droppableNodes
            className="w-full md:w-120"
        >
            <Tree.List />
        </Tree.Root>
    );
}
```

#### Multiple

Nodes can be transferred between multiple trees as well. The `draggableScope` and `droppableScope` properties defines keys to restrict the actions between trees. In this example, nodes can only be transferred from start to the end.

```tsx
'use client';
import { Tree, type TreeNodeData, type TreeRootValueChangeEvent } from '@primereact/ui/tree';
import * as React from 'react';

export default function DragDropMultipleDemo() {
    const [nodes, setNodes] = React.useState<TreeNodeData[]>([
        {
            key: '0',
            label: 'app',
            data: 'app folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '0-0',
                    label: 'api',
                    data: 'api folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '0-0-0',
                            label: 'auth',
                            data: 'auth folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '0-0-0-0',
                                    label: 'route.ts',
                                    data: 'route.ts file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '0-1',
                    label: 'layout.tsx',
                    data: 'layout.tsx file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '0-2',
                    label: 'page.tsx',
                    data: 'page.tsx file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '1',
            label: 'components',
            data: 'components folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '1-0',
                    label: 'Header.tsx',
                    data: 'Header.tsx file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '1-1',
                    label: 'Footer.tsx',
                    data: 'Footer.tsx file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '2',
            label: 'public',
            data: 'public folder',
            icon: 'pi pi-fw pi-folder',
            children: [
                {
                    key: '2-0',
                    label: 'favicon.ico',
                    data: 'favicon.ico file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        },
        {
            key: '3',
            label: '.env.local',
            data: '.env.local file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '4',
            label: 'next.config.js',
            data: 'next.config.js file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '5',
            label: 'package.json',
            data: 'package.json file',
            icon: 'pi pi-fw pi-file'
        },
        {
            key: '6',
            label: 'README.md',
            data: 'README.md file',
            icon: 'pi pi-fw pi-file'
        }
    ]);

    const [nodes2, setNodes2] = React.useState<TreeNodeData[]>([
        {
            key: '1-0',
            label: '/etc',
            icon: 'pi pi-fw pi-folder'
        }
    ]);

    const [nodes3, setNodes3] = React.useState<TreeNodeData[]>([]);

    return (
        <div className="flex flex-col md:flex-row gap-4">
            <Tree.Root
                value={nodes}
                onValueChange={(e: TreeRootValueChangeEvent) => setNodes(e.value)}
                draggableNodes
                droppableNodes
                draggableScope="first"
                droppableScope="none"
                className="flex-1 border border-surface rounded-lg"
            >
                <Tree.List />
                <Tree.Empty>No Items Left</Tree.Empty>
            </Tree.Root>
            <Tree.Root
                value={nodes2}
                onValueChange={(e: TreeRootValueChangeEvent) => setNodes2(e.value)}
                draggableNodes
                droppableNodes
                draggableScope="second"
                droppableScope="first"
                className="flex-1 border border-surface rounded-lg"
                pt={{
                    root: ({ state }) => ({ className: state.dragHover ? 'border-dashed border-primary!' : undefined })
                }}
            >
                <Tree.List />
                <Tree.Empty>Drag Nodes Here</Tree.Empty>
            </Tree.Root>
            <Tree.Root
                value={nodes3}
                onValueChange={(e: TreeRootValueChangeEvent) => setNodes3(e.value)}
                draggableNodes
                droppableNodes
                droppableScope={['first', 'second']}
                className="flex-1 border border-surface rounded-lg"
                pt={{
                    root: ({ state }) => ({ className: state.dragHover ? 'border-dashed border-primary!' : undefined })
                }}
            >
                <Tree.List />
                <Tree.Empty>Drag Nodes Here</Tree.Empty>
            </Tree.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/tree/features.md#api) for `TreeRoot`, `TreeList`, `TreeNode`, `TreeContent`, `TreeToggle`, `TreeIcon`, `TreeLabel`, `TreeFilter`, `TreeHeader`, `TreeFooter`, `TreeEmpty` component documentation.

### Hooks

See [Headless API](../../headless/tree/features.md#api) for `useTree` and `useTreeNode` hook documentation.

## Accessibility

See [Tree Primitive](../../primitive/tree/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
