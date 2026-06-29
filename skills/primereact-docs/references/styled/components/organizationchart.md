# OrganizationChart

OrganizationChart visualizes hierarchical organization data.

```tsx
'use client';
import type { TreeNode } from '@primereact/ui/organizationchart';
import { Avatar } from '@primereact/ui/avatar';
import { OrganizationChart, type OrganizationChartNodeRow } from '@primereact/ui/organizationchart';

interface PersonNode extends TreeNode {
    name: string;
    role: string;
    avatar: string;
    children?: PersonNode[];
}

const data: PersonNode[] = [
    {
        key: '0',
        name: 'Amy Elsner',
        role: 'Founder & CEO',
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        children: [
            {
                key: '0-0',
                name: 'Asiya Javayant',
                role: 'Product Lead',
                avatar: 'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png',
                children: [
                    {
                        key: '0-0-0',
                        name: 'Anna Fali',
                        role: 'UX Designer',
                        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png'
                    },
                    {
                        key: '0-0-1',
                        name: 'Bernardo Dominic',
                        role: 'Product Manager',
                        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/bernardodominic.png'
                    }
                ]
            },
            {
                key: '0-1',
                name: 'Onyama Limba',
                role: 'Engineering Lead',
                avatar: 'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png',
                children: [
                    {
                        key: '0-1-0',
                        name: 'Elwin Sharvill',
                        role: 'Frontend Engineer',
                        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/elwinsharvill.png'
                    },
                    {
                        key: '0-1-1',
                        name: 'Stephen Shaw',
                        role: 'Backend Engineer',
                        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png'
                    }
                ]
            }
        ]
    }
];

export default function Preview() {
    return (
        <div className="flex items-center justify-center">
            <OrganizationChart.Root value={data}>
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => {
                        const item = node as PersonNode;

                        return (
                            <OrganizationChart.Node uKey={node.key}>
                                <OrganizationChart.Content>
                                    <div className="flex items-center gap-2">
                                        <Avatar.Root shape="circle" size="normal">
                                            <Avatar.Image src={item.avatar} alt={item.name} />
                                            <Avatar.Fallback>
                                                {item.name
                                                    .split(' ')
                                                    .map((n) => n[0])
                                                    .join('')}
                                            </Avatar.Fallback>
                                        </Avatar.Root>
                                        <div className="flex flex-col items-start gap-0.5">
                                            <div className="text-sm font-semibold leading-none">{item.name}</div>
                                            <div className="text-xs leading-none opacity-75">{item.role}</div>
                                        </div>
                                    </div>
                                </OrganizationChart.Content>
                            </OrganizationChart.Node>
                        );
                    }}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

## Usage

```tsx
import { OrganizationChart } from '@primereact/ui/organizationchart';
```

_OrganizationChart.Nodes_ calls its render function once per node and builds the connectors and nesting for you, no recursion in your code. Each node is identified by _uKey_.

```tsx
<OrganizationChart.Root value={data}>
    <OrganizationChart.Nodes>
        {({ node }) => (
            <OrganizationChart.Node uKey={node.key}>
                <OrganizationChart.Content>
                    <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                </OrganizationChart.Content>
            </OrganizationChart.Node>
        )}
    </OrganizationChart.Nodes>
</OrganizationChart.Root>
```

## Examples

### Basic

A basic chart renders a collection of nodes from the _value_.

```tsx
'use client';
import { OrganizationChart, type OrganizationChartNodeRow } from '@primereact/ui/organizationchart';

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
            <OrganizationChart.Root value={data}>
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => (
                        <OrganizationChart.Node uKey={node.key}>
                            <OrganizationChart.Content>
                                <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                            </OrganizationChart.Content>
                        </OrganizationChart.Node>
                    )}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

### Collapsible

Add _OrganizationChart.Toggle_ with _OrganizationChart.ToggleIndicator_ and its _match_ property of _expanded_ or _collapsed_ to let a node collapse its subtree. A node is collapsible when it has children.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { OrganizationChart, type OrganizationChartNodeRow } from '@primereact/ui/organizationchart';

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

export default function CollapsibleDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrganizationChart.Root value={data}>
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => (
                        <OrganizationChart.Node uKey={node.key}>
                            <OrganizationChart.Content>
                                <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                                <OrganizationChart.Toggle>
                                    <OrganizationChart.ToggleIndicator match="expanded">
                                        <Minus />
                                    </OrganizationChart.ToggleIndicator>
                                    <OrganizationChart.ToggleIndicator match="collapsed">
                                        <Plus />
                                    </OrganizationChart.ToggleIndicator>
                                </OrganizationChart.Toggle>
                            </OrganizationChart.Content>
                        </OrganizationChart.Node>
                    )}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

### Controlled

Drive expansion programmatically with the _collapsedKeys_ and _onCollapsedChange_ properties. A key present with _true_ is collapsed; absent keys stay expanded.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import type { OrganizationChartCollapsedKeys, OrganizationChartCollapsedChangeEvent } from '@primereact/ui/organizationchart';
import { Button } from '@primereact/ui/button';
import { OrganizationChart, type OrganizationChartNodeRow } from '@primereact/ui/organizationchart';
import * as React from 'react';

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

export default function ControlledDemo() {
    const [collapsedKeys, setCollapsedKeys] = React.useState<OrganizationChartCollapsedKeys>({});

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
                <Button size="small" severity="secondary" onClick={() => setCollapsedKeys({})}>
                    Expand all
                </Button>
                <Button size="small" severity="secondary" onClick={() => setCollapsedKeys({ '0': true })}>
                    Collapse all
                </Button>
            </div>
            <OrganizationChart.Root
                value={data}
                collapsedKeys={collapsedKeys}
                onCollapsedChange={(e: OrganizationChartCollapsedChangeEvent) => setCollapsedKeys(e.value)}
            >
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => (
                        <OrganizationChart.Node uKey={node.key}>
                            <OrganizationChart.Content>
                                <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                                <OrganizationChart.Toggle>
                                    <OrganizationChart.ToggleIndicator match="expanded">
                                        <Minus />
                                    </OrganizationChart.ToggleIndicator>
                                    <OrganizationChart.ToggleIndicator match="collapsed">
                                        <Plus />
                                    </OrganizationChart.ToggleIndicator>
                                </OrganizationChart.Toggle>
                            </OrganizationChart.Content>
                        </OrganizationChart.Node>
                    )}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

### Content

Render anything inside _OrganizationChart.Content_; the node payload carries your own data fields.

```tsx
'use client';
import { Bolt } from '@primeicons/react/bolt';
import { Box } from '@primeicons/react/box';
import { Cloud } from '@primeicons/react/cloud';
import { Database } from '@primeicons/react/database';
import { Globe } from '@primeicons/react/globe';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Server } from '@primeicons/react/server';
import { Shield } from '@primeicons/react/shield';
import type { TreeNode } from '@primereact/ui/organizationchart';
import { OrganizationChart, type OrganizationChartNodeRow } from '@primereact/ui/organizationchart';
import * as React from 'react';

interface ServiceNode extends TreeNode {
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    accent: string;
    children?: ServiceNode[];
}

const data: ServiceNode[] = [
    {
        key: '0',
        label: 'AWS Cloud',
        description: 'us-east-1',
        icon: Cloud,
        accent: 'bg-orange-500/10 text-orange-500',
        children: [
            {
                key: '0_0',
                label: 'Compute',
                description: 'Workloads & runtime',
                icon: Server,
                accent: 'bg-sky-500/10 text-sky-500',
                children: [
                    { key: '0_0_0', label: 'EC2', description: 'Virtual servers', icon: Server, accent: 'bg-sky-500/10 text-sky-500' },
                    { key: '0_0_1', label: 'Lambda', description: 'Serverless functions', icon: Bolt, accent: 'bg-sky-500/10 text-sky-500' }
                ]
            },
            {
                key: '0_1',
                label: 'Storage',
                description: 'Data persistence',
                icon: Database,
                accent: 'bg-emerald-500/10 text-emerald-500',
                children: [
                    { key: '0_1_0', label: 'S3', description: 'Object storage', icon: Box, accent: 'bg-emerald-500/10 text-emerald-500' },
                    { key: '0_1_1', label: 'RDS', description: 'Managed databases', icon: Database, accent: 'bg-emerald-500/10 text-emerald-500' }
                ]
            },
            {
                key: '0_2',
                label: 'Networking',
                description: 'Edge & access',
                icon: Globe,
                accent: 'bg-violet-500/10 text-violet-500',
                children: [
                    { key: '0_2_0', label: 'CloudFront', description: 'Global CDN', icon: Globe, accent: 'bg-violet-500/10 text-violet-500' },
                    { key: '0_2_1', label: 'IAM', description: 'Access policies', icon: Shield, accent: 'bg-violet-500/10 text-violet-500' }
                ]
            }
        ]
    }
];

export default function ContentDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrganizationChart.Root value={data}>
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => {
                        const item = node as ServiceNode;
                        const Icon = item.icon;

                        return (
                            <OrganizationChart.Node uKey={node.key}>
                                <OrganizationChart.Content>
                                    <div className="flex items-center gap-2">
                                        <div className={`size-9 rounded-md flex items-center justify-center shrink-0 ${item.accent}`}>
                                            <Icon className="size-4!" />
                                        </div>
                                        <div className="flex flex-col items-start gap-0.5">
                                            <div className="text-sm font-semibold leading-none">{item.label}</div>
                                            <div className="text-xs leading-none opacity-75">{item.description}</div>
                                        </div>
                                    </div>
                                    <OrganizationChart.Toggle>
                                        <OrganizationChart.ToggleIndicator match="expanded">
                                            <Minus />
                                        </OrganizationChart.ToggleIndicator>
                                        <OrganizationChart.ToggleIndicator match="collapsed">
                                            <Plus />
                                        </OrganizationChart.ToggleIndicator>
                                    </OrganizationChart.Toggle>
                                </OrganizationChart.Content>
                            </OrganizationChart.Node>
                        );
                    }}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

### Selection

#### Single

Set _selectionMode_ to _single_ to keep at most one node selected. Bind the selection with _selectionKeys_ and _onSelectionChange_.

```tsx
'use client';
import type { OrganizationChartSelectionKeys, OrganizationChartSelectionChangeEvent } from '@primereact/ui/organizationchart';
import { OrganizationChart, type OrganizationChartNodeRow } from '@primereact/ui/organizationchart';
import * as React from 'react';

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

export default function SingleSelectionDemo() {
    const [selectionKeys, setSelectionKeys] = React.useState<OrganizationChartSelectionKeys>({});

    const selected = Object.keys(selectionKeys).filter((k) => selectionKeys[k]);

    return (
        <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-muted-color">
                Selected: <span className="font-mono">{selected.length ? selected.join(', ') : '—'}</span>
            </span>
            <OrganizationChart.Root
                value={data}
                selectionMode="single"
                selectionKeys={selectionKeys}
                onSelectionChange={(e: OrganizationChartSelectionChangeEvent) => setSelectionKeys(e.value)}
            >
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => (
                        <OrganizationChart.Node uKey={node.key}>
                            <OrganizationChart.Content>
                                <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                            </OrganizationChart.Content>
                        </OrganizationChart.Node>
                    )}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

#### Multiple

With _multiple_, each node toggles independently.

```tsx
'use client';
import type { OrganizationChartSelectionKeys, OrganizationChartSelectionChangeEvent } from '@primereact/ui/organizationchart';
import { OrganizationChart, type OrganizationChartNodeRow } from '@primereact/ui/organizationchart';
import * as React from 'react';

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

export default function MultipleSelectionDemo() {
    const [selectionKeys, setSelectionKeys] = React.useState<OrganizationChartSelectionKeys>({});

    const selected = Object.keys(selectionKeys).filter((k) => selectionKeys[k]);

    return (
        <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-muted-color">
                Selected: <span className="font-mono">{selected.length ? selected.join(', ') : '—'}</span>
            </span>
            <OrganizationChart.Root
                value={data}
                selectionMode="multiple"
                selectionKeys={selectionKeys}
                onSelectionChange={(e: OrganizationChartSelectionChangeEvent) => setSelectionKeys(e.value)}
            >
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => (
                        <OrganizationChart.Node uKey={node.key}>
                            <OrganizationChart.Content>
                                <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                            </OrganizationChart.Content>
                        </OrganizationChart.Node>
                    )}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

#### Checkbox

In _checkbox_ mode, _OrganizationChart.Selection_ exposes _isSelected_, _isPartiallySelected_ and _toggle_. Selecting a node cascades to its descendants and reflects a partial state on its ancestors.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Minus } from '@primeicons/react/minus';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { OrganizationChart, type OrganizationChartNodeRow, type OrganizationChartSelectionInstance } from '@primereact/ui/organizationchart';

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

export default function CheckboxSelectionDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrganizationChart.Root value={data} selectionMode="checkbox">
                <OrganizationChart.Nodes>
                    {({ node }: OrganizationChartNodeRow) => (
                        <OrganizationChart.Node uKey={node.key}>
                            <OrganizationChart.Content className="flex items-center gap-2">
                                <OrganizationChart.Selection>
                                    {({ isSelected, isPartiallySelected, toggle }: OrganizationChartSelectionInstance) => (
                                        <Checkbox.Root
                                            checked={isSelected}
                                            indeterminate={isPartiallySelected}
                                            onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
                                            size="small"
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
                                </OrganizationChart.Selection>
                                <OrganizationChart.Label>{node.label}</OrganizationChart.Label>
                            </OrganizationChart.Content>
                        </OrganizationChart.Node>
                    )}
                </OrganizationChart.Nodes>
            </OrganizationChart.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See the [Primitive API](../../primitive/components/organizationchart.md#api) for _OrganizationChart.Root_, _OrganizationChart.Nodes_, _OrganizationChart.Node_, _OrganizationChart.Content_, _OrganizationChart.Label_, _OrganizationChart.Toggle_, _OrganizationChart.ToggleIndicator_ and _OrganizationChart.Selection_.

### Hooks

See the [Headless API](../../headless/components/organizationchart.md#api) for _useOrganizationChart_.

### Accessibility

See [OrganizationChart Primitive](../../primitive/components/organizationchart.md#accessibility) for WAI-ARIA compliance details and keyboard support.

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

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-organizationchart | Class name of the root element |
| p-organizationchart-tree | Class name of the per-node connector wrapper element ( `<li role="treeitem">` ) |
| p-organizationchart-subtree | Class name of the children subtree element ( `<ul role="group">` ) |
| p-organizationchart-node | Class name of the node box element |
| p-organizationchart-node-content | Class name of the node content element |
| p-organizationchart-node-label | Class name of the node label element |
| p-organizationchart-node-toggle-button | Class name of the toggle button element |
| p-organizationchart-node-toggle-button-icon | Class name of the toggle indicator element (state-matched icon slot) |
| p-organizationchart-node-selection | Class name of the selection slot element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| organizationchart.gutter | --p-organizationchart-gutter | Gutter of root |
| organizationchart.transition.duration | --p-organizationchart-transition-duration | Transition duration of root |
| organizationchart.node.background | --p-organizationchart-node-background | Background of node |
| organizationchart.node.hover.background | --p-organizationchart-node-hover-background | Hover background of node |
| organizationchart.node.selected.background | --p-organizationchart-node-selected-background | Selected background of node |
| organizationchart.node.border.color | --p-organizationchart-node-border-color | Border color of node |
| organizationchart.node.color | --p-organizationchart-node-color | Color of node |
| organizationchart.node.selected.color | --p-organizationchart-node-selected-color | Selected color of node |
| organizationchart.node.hover.color | --p-organizationchart-node-hover-color | Hover color of node |
| organizationchart.node.padding | --p-organizationchart-node-padding | Padding of node |
| organizationchart.node.toggleable.padding | --p-organizationchart-node-toggleable-padding | Toggleable padding of node |
| organizationchart.node.border.radius | --p-organizationchart-node-border-radius | Border radius of node |
| organizationchart.node.font.size | --p-organizationchart-node-font-size | Font size of node |
| organizationchart.node.font.weight | --p-organizationchart-node-font-weight | Font weight of node |
| organizationchart.node.focus.ring.width | --p-organizationchart-node-focus-ring-width | Focus ring width of node |
| organizationchart.node.focus.ring.style | --p-organizationchart-node-focus-ring-style | Focus ring style of node |
| organizationchart.node.focus.ring.color | --p-organizationchart-node-focus-ring-color | Focus ring color of node |
| organizationchart.node.focus.ring.offset | --p-organizationchart-node-focus-ring-offset | Focus ring offset of node |
| organizationchart.node.focus.ring.shadow | --p-organizationchart-node-focus-ring-shadow | Focus ring shadow of node |
| organizationchart.node.toggle.button.background | --p-organizationchart-node-toggle-button-background | Background of node toggle button |
| organizationchart.node.toggle.button.hover.background | --p-organizationchart-node-toggle-button-hover-background | Hover background of node toggle button |
| organizationchart.node.toggle.button.border.color | --p-organizationchart-node-toggle-button-border-color | Border color of node toggle button |
| organizationchart.node.toggle.button.color | --p-organizationchart-node-toggle-button-color | Color of node toggle button |
| organizationchart.node.toggle.button.hover.color | --p-organizationchart-node-toggle-button-hover-color | Hover color of node toggle button |
| organizationchart.node.toggle.button.size | --p-organizationchart-node-toggle-button-size | Size of node toggle button |
| organizationchart.node.toggle.button.border.radius | --p-organizationchart-node-toggle-button-border-radius | Border radius of node toggle button |
| organizationchart.node.toggle.button.focus.ring.width | --p-organizationchart-node-toggle-button-focus-ring-width | Focus ring width of node toggle button |
| organizationchart.node.toggle.button.focus.ring.style | --p-organizationchart-node-toggle-button-focus-ring-style | Focus ring style of node toggle button |
| organizationchart.node.toggle.button.focus.ring.color | --p-organizationchart-node-toggle-button-focus-ring-color | Focus ring color of node toggle button |
| organizationchart.node.toggle.button.focus.ring.offset | --p-organizationchart-node-toggle-button-focus-ring-offset | Focus ring offset of node toggle button |
| organizationchart.node.toggle.button.focus.ring.shadow | --p-organizationchart-node-toggle-button-focus-ring-shadow | Focus ring shadow of node toggle button |
| organizationchart.node.toggle.button.icon.size | --p-organizationchart-node-toggle-button-icon-size | Icon size of node toggle button |
| organizationchart.connector.color | --p-organizationchart-connector-color | Color of connector |
| organizationchart.connector.border.radius | --p-organizationchart-connector-border-radius | Border radius of connector |
| organizationchart.connector.height | --p-organizationchart-connector-height | Height of connector |
