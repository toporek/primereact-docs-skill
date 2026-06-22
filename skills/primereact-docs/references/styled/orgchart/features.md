# OrgChart

OrgChart visualizes hierarchical organization data.

```tsx
'use client';
import { OrgChart } from '@primereact/ui/orgchart';

const data = [
    {
        key: '0',
        label: 'Founder',
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                children: [
                    {
                        key: '0-0-0',
                        label: 'UX/UI Designer'
                    },
                    {
                        key: '0-0-1',
                        label: 'Product Manager'
                    }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                children: [
                    {
                        key: '0-1-0',
                        label: 'Frontend Developer'
                    },
                    {
                        key: '0-1-1',
                        label: 'Backend Developer'
                    }
                ]
            }
        ]
    }
];

export default function Preview() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root value={data}>
                <OrgChart.List />
            </OrgChart.Root>
        </div>
    );
}
```

## Usage

```tsx
import { OrgChart } from '@primereact/ui/orgchart';
```

```tsx
<OrgChart.Root value={data}>
    <OrgChart.List />
</OrgChart.Root>
```

## Examples

### Basic

Displays hierarchical data as an interactive tree of nodes.

```tsx
'use client';
import { OrgChart } from '@primereact/ui/orgchart';

const data = [
    {
        key: '0',
        label: 'Founder',
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                children: [
                    {
                        key: '0-0-0',
                        label: 'UX/UI Designer'
                    },
                    {
                        key: '0-0-1',
                        label: 'Product Manager'
                    }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                children: [
                    {
                        key: '0-1-0',
                        label: 'Frontend Developer'
                    },
                    {
                        key: '0-1-1',
                        label: 'Backend Developer'
                    }
                ]
            }
        ]
    }
];

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root value={data}>
                <OrgChart.List />
            </OrgChart.Root>
        </div>
    );
}
```

### Collapsible

Use the `collapsible` prop to make nodes collapsible.

```tsx
'use client';
import { OrgChart } from '@primereact/ui/orgchart';

const data = [
    {
        key: '0',
        label: 'Founder',
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                children: [
                    {
                        key: '0-0-0',
                        label: 'UX/UI Designer'
                    },
                    {
                        key: '0-0-1',
                        label: 'Product Manager'
                    }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                children: [
                    {
                        key: '0-1-0',
                        label: 'Frontend Developer'
                    },
                    {
                        key: '0-1-1',
                        label: 'Backend Developer'
                    }
                ]
            }
        ]
    }
];

function CollapsibleDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root value={data} collapsible>
                <OrgChart.List />
            </OrgChart.Root>
        </div>
    );
}

export default CollapsibleDemo;
```

### Selectable

Use the `selectable` prop to make nodes selectable. Besides, use the `selectionMode` prop to specify the selection mode.

```tsx
'use client';
import { OrgChart } from '@primereact/ui/orgchart';

const data = [
    {
        key: '0',
        label: 'Founder',
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                children: [
                    {
                        key: '0-0-0',
                        label: 'UX/UI Designer'
                    },
                    {
                        key: '0-0-1',
                        label: 'Product Manager'
                    }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                children: [
                    {
                        key: '0-1-0',
                        label: 'Frontend Developer'
                    },
                    {
                        key: '0-1-1',
                        label: 'Backend Developer'
                    }
                ]
            }
        ]
    }
];

function SelectableDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root value={data} selectable selectionMode="multiple">
                <OrgChart.List />
            </OrgChart.Root>
        </div>
    );
}

export default SelectableDemo;
```

### Partial Collapsible & Selectable

Use the `collapsible` attribute on a node to make a node collapsible and the `selectable` attribute on a node to make a node selectable partially.

```tsx
'use client';
import { OrgChart } from '@primereact/ui/orgchart';

const data = [
    {
        key: '0',
        label: 'Founder',
        collapsible: true,
        selectable: false,
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                children: [
                    {
                        key: '0-0-0',
                        label: 'UX/UI Designer',
                        selectable: false
                    },
                    {
                        key: '0-0-1',
                        label: 'Product Manager'
                    }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                selectable: false,
                collapsible: true,
                children: [
                    {
                        key: '0-1-0',
                        label: 'Frontend Developer'
                    },
                    {
                        key: '0-1-1',
                        label: 'Backend Developer'
                    }
                ]
            }
        ]
    }
];

function PartialDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root value={data}>
                <OrgChart.List />
            </OrgChart.Root>
        </div>
    );
}

export default PartialDemo;
```

### Default Collapsed & Selected

Use the `collapsedByDefault` attribute on a node to make a node collapsed by default and the `selectedByDefault` attribute on a node to make a node selected by default.

```tsx
'use client';
import { OrgChart } from '@primereact/ui/orgchart';

const data = [
    {
        key: '0',
        label: 'Founder',
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                collapsedByDefault: true,
                children: [
                    {
                        key: '0-0-0',
                        label: 'UX/UI Designer'
                    },
                    {
                        key: '0-0-1',
                        label: 'Product Manager'
                    }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                children: [
                    {
                        key: '0-1-0',
                        label: 'Frontend Developer',
                        selectedByDefault: true
                    },
                    {
                        key: '0-1-1',
                        label: 'Backend Developer'
                    }
                ]
            }
        ]
    }
];

function DefaultDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root value={data} collapsible>
                <OrgChart.List />
            </OrgChart.Root>
        </div>
    );
}

export default DefaultDemo;
```

### Custom

Use the `custom` attribute on a node to render a custom node content.

```tsx
'use client';
import { TreeNode } from 'primereact/orgchart';
import { OrgChart } from '@primereact/ui/orgchart';

interface CustomNodeProps extends TreeNode {
    data: {
        image: string;
        name: string;
        title: string;
    };
}

const CustomNode = ({ node }: { node: CustomNodeProps }) => {
    return (
        <div className="flex items-center gap-3">
            <img alt={node.data.name} src={node.data.image} className="w-12 h-12" />
            <div className="flex-1 space-y-1 inline-flex flex-col items-start">
                <span className="font-bold">{node.data.name}</span>
                <span className="text-sm">{node.data.title}</span>
            </div>
        </div>
    );
};

const data: TreeNode[] = [
    {
        key: '0',
        type: 'person',
        htmlProps: {
            className:
                'border-rose-500 text-rose-900 dark:text-rose-50 bg-rose-500/5 data-selected:text-rose-50 hover:bg-rose-500/15 data-selected:bg-rose-500'
        },
        data: {
            image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
            name: 'Amy Elsner',
            title: 'CEO'
        },
        render: (node: TreeNode) => <CustomNode node={node as CustomNodeProps} />,
        children: [
            {
                key: '0_0',
                type: 'person',
                htmlProps: {
                    className:
                        'border-emerald-500 text-emerald-900 dark:text-emerald-50 bg-emerald-500/5 data-selected:text-emerald-50 hover:bg-emerald-500/15 data-selected:bg-emerald-500'
                },
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'CMO'
                },

                render: (node: TreeNode) => <CustomNode node={node as CustomNodeProps} />,
                children: [
                    {
                        key: '0_0_0',
                        label: 'Sales'
                    },
                    {
                        key: '0_0_"1',
                        label: 'Marketing'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'person',
                htmlProps: {
                    className:
                        'border-blue-500 text-blue-900 dark:text-blue-50 bg-blue-500/5 data-selected:text-blue-50 hover:bg-blue-500/15 data-selected:bg-blue-500'
                },
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                    name: 'Stephen Shaw',
                    title: 'CTO'
                },

                render: (node: TreeNode) => <CustomNode node={node as CustomNodeProps} />,
                children: [
                    {
                        key: '0_1_0',
                        label: 'Development'
                    },
                    {
                        key: '0_1_1',
                        label: 'UI/UX Design'
                    }
                ]
            }
        ]
    }
];

function CustomDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root value={data} collapsible>
                <OrgChart.List />
            </OrgChart.Root>
        </div>
    );
}

export default CustomDemo;
```

### Template

```tsx
'use client';
import { OrgChartSubtreeInstance, TreeNode } from '@primereact/types/primitive/orgchart';
import { OrgChart } from '@primereact/ui/orgchart';

interface NodeType extends TreeNode {
    type: 'country' | 'currency';
    label: string;
    description: string;
    data: string;
    children?: NodeType[];
}

const data: NodeType[] = [
    {
        key: '0',
        type: 'country',
        label: 'USD',
        description: 'United States Dollar',
        data: 'us',
        children: [
            {
                key: '0_0',
                type: 'country',
                label: 'CAD',
                description: 'Canadian Dollar',
                data: 'ca',
                children: [
                    {
                        key: '0_0_0',
                        type: 'country',
                        label: 'AUD',
                        description: 'Australian Dollar',
                        data: 'au'
                    },
                    {
                        key: '0_0_1',
                        type: 'country',
                        label: 'NZD',
                        description: 'New Zealand Dollar',
                        data: 'nz'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'country',
                label: 'MXN',
                description: 'Mexican Peso',
                data: 'mx',
                children: [
                    {
                        key: '0_1_0',
                        type: 'country',
                        label: 'COP',
                        description: 'Argentine Peso',
                        data: 'ar'
                    },
                    {
                        key: '0_1_1',
                        type: 'country',
                        label: 'BRL',
                        description: 'Brazilian Real',
                        data: 'br'
                    }
                ]
            }
        ]
    }
];

const RecursiveTree = ({ items, root }: { items: NodeType[]; root?: boolean }) => {
    return (
        <OrgChart.Subtree root={root}>
            {({ orgchart }: OrgChartSubtreeInstance) =>
                items?.map((item: NodeType) => (
                    <OrgChart.Tree key={item.key} item={item}>
                        <OrgChart.Node>
                            <OrgChart.NodeContent>
                                <div className="flex items-start gap-2">
                                    <img
                                        alt={item.label}
                                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                        className={`h-full !w-10 flag flag-${item.data}`}
                                    />
                                    <div className="flex-1 flex flex-col items-start gap-0.5">
                                        <div className="font-semibold leading-none">{item.label}</div>
                                        <div className="text-xs leading-none opacity-75">{item.description}</div>
                                    </div>
                                </div>
                            </OrgChart.NodeContent>
                            <OrgChart.CollapseButton />
                        </OrgChart.Node>
                        {item.children && item.children.length > 0 && !orgchart?.isCollapsed(item) && <RecursiveTree items={item.children} />}
                    </OrgChart.Tree>
                ))
            }
        </OrgChart.Subtree>
    );
};

function TemplateDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root collapsible value={data}>
                <OrgChart.List>
                    <RecursiveTree items={data} root={true} />
                </OrgChart.List>
            </OrgChart.Root>
        </div>
    );
}

export default TemplateDemo;
```

## Accessibility

### Screen Reader

OrgChart uses ARIA roles and attributes for screen reader accessibility. The root element has `role="tree"` with `aria-multiselectable` for multiple selection support. Each tree item uses `role="treeitem"` with `aria-level` for hierarchy, `aria-expanded` for collapse state, and `aria-selected` for selection state. Child nodes are grouped with `role="group"`.

### Keyboard Navigation

_OrgChart.Node_

| Key     | Function                                                  |
| ------- | --------------------------------------------------------- |
| `tab`   | Moves focus through the focusable nodes within the chart. |
| `enter` | Toggles the selection state of a node.                    |
| `space` | Toggles the selection state of a node.                    |

_OrgChart.CollapseButton_

| Key     | Function                                                     |
| ------- | ------------------------------------------------------------ |
| `tab`   | Moves focus through the focusable elements within the chart. |
| `enter` | Toggles the expanded state of a node.                        |
| `space` | Toggles the expanded state of a node.                        |
