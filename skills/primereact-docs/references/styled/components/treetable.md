# TreeTable

TreeTable renders hierarchical data with the same feature set as DataTable, sort, filter, pagination, selection, scroll, frozen, resize, reorder, editing, export.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Database } from '@primeicons/react/database';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface TreeNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    children?: TreeNode[];
}

const nodes: TreeNode[] = [
    {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Work', size: '55kb', type: 'Folder' },
                children: [
                    { key: '0-0-0', data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } },
                    { key: '0-0-1', data: { name: 'Resume.doc', size: '25kb', type: 'Document' } }
                ]
            },
            {
                key: '0-1',
                data: { name: 'Home', size: '20kb', type: 'Folder' },
                children: [{ key: '0-1-0', data: { name: 'Invoices.txt', size: '20kb', type: 'Text' } }]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'barcelona.jpg', size: '90kb', type: 'Picture' } },
            { key: '1-1', data: { name: 'primeui.png', size: '30kb', type: 'Picture' } },
            { key: '1-2', data: { name: 'optimus.jpg', size: '30kb', type: 'Picture' } }
        ]
    },
    {
        key: '2',
        data: { name: 'Movies', size: '1500kb', type: 'Folder' },
        children: [
            {
                key: '2-0',
                data: { name: 'Al Pacino', size: '1000kb', type: 'Folder' },
                children: [
                    { key: '2-0-0', data: { name: 'Scarface', size: '500kb', type: 'Video' } },
                    { key: '2-0-1', data: { name: 'Serpico', size: '500kb', type: 'Video' } }
                ]
            },
            {
                key: '2-1',
                data: { name: 'Robert De Niro', size: '500kb', type: 'Folder' },
                children: [
                    { key: '2-1-0', data: { name: 'Goodfellas', size: '250kb', type: 'Video' } },
                    { key: '2-1-1', data: { name: 'Untouchables', size: '250kb', type: 'Video' } }
                ]
            }
        ]
    }
];

export default function Preview() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem', tableLayout: 'fixed' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

## Usage

```tsx
import { DataTable } from '@primereact/ui/datatable';
```

TreeTable is DataTable with the `treeMode` prop set on `DataTable.Root`. Every feature shown in [DataTable](datatable.md) continues to work over the flattened tree, the only structural difference is that the first column wraps its cell content with `DataTable.RowToggle` to render the expand/collapse chevron.

```tsx
<DataTable.Root data={treeNodes} dataKey="key" treeMode expandedKeys={expandedKeys} onExpandedChange={(e) => setExpandedKeys(e.value)}>
    <DataTable.TableContainer>
        <DataTable.Table>
            <DataTable.THead>
                <DataTable.THeadRow>
                    <DataTable.THeadCell>Name</DataTable.THeadCell>
                </DataTable.THeadRow>
            </DataTable.THead>
            <DataTable.TBody>
                {({ item }) => (
                    <DataTable.Row>
                        <DataTable.Cell>
                            <DataTable.RowToggle />
                            {item.name}
                        </DataTable.Cell>
                    </DataTable.Row>
                )}
            </DataTable.TBody>
        </DataTable.Table>
    </DataTable.TableContainer>
</DataTable.Root>
```

### Data shape

Each node carries its own `key`, arbitrary `data`, and an optional `children` array:

```tsx
type TreeNode = {
    key: string;
    data: Record<string, unknown>;
    children?: TreeNode[];
};
```

Set `dataKey="key"` and resolve column values against `item.<field>`, the component flattens `data` onto the row so columns can read directly.

Rows are augmented with derived fields the component consumes internally: `_treeLevel`, `_treeHasChildren`, `_treePosInSet`, `_treeSetSize`. These drive the ARIA attributes (`aria-level`, `aria-expanded`, `aria-posinset`, `aria-setsize`) automatically.

## Examples

### Basic

Displays hierarchical nodes with expand/collapse chevrons on the first column.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import * as React from 'react';

interface TreeNode {
    key: string;
    data: { name: string; size: string; type: string };
    children?: TreeNode[];
}

const nodes: TreeNode[] = [
    {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Work', size: '55kb', type: 'Folder' },
                children: [{ key: '0-0-0', data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } }]
            },
            {
                key: '0-1',
                data: { name: 'Home', size: '20kb', type: 'Folder' },
                children: [{ key: '0-1-0', data: { name: 'Invoices.txt', size: '20kb', type: 'Text' } }]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'barcelona.jpg', size: '90kb', type: 'Picture' } },
            { key: '1-1', data: { name: 'primeui.png', size: '30kb', type: 'Picture' } }
        ]
    }
];

export default function BasicDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '30rem', tableLayout: 'fixed' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '60%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <span>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{String(item.size)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.type)}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Size

Use the `size` prop with `small` or `large` to adjust cell padding.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface TreeNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    children?: TreeNode[];
}

const nodes: TreeNode[] = [
    {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Work', size: '55kb', type: 'Folder' },
                children: [
                    { key: '0-0-0', data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } },
                    { key: '0-0-1', data: { name: 'Resume.doc', size: '25kb', type: 'Document' } }
                ]
            },
            {
                key: '0-1',
                data: { name: 'Home', size: '20kb', type: 'Folder' },
                children: [{ key: '0-1-0', data: { name: 'Invoices.txt', size: '20kb', type: 'Text' } }]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'barcelona.jpg', size: '90kb', type: 'Picture' } },
            { key: '1-1', data: { name: 'primeui.png', size: '30kb', type: 'Picture' } },
            { key: '1-2', data: { name: 'optimus.jpg', size: '30kb', type: 'Picture' } }
        ]
    },
    {
        key: '2',
        data: { name: 'Movies', size: '1500kb', type: 'Folder' },
        children: [
            { key: '2-0', data: { name: 'Scarface', size: '500kb', type: 'Video' } },
            { key: '2-1', data: { name: 'Goodfellas', size: '250kb', type: 'Video' } }
        ]
    }
];

type Size = 'small' | 'normal' | 'large';

const sizeOptions: { label: string; value: Size }[] = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
];

export default function TreeTableSizeDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });
    const [size, setSize] = React.useState<Size>('normal');

    return (
        <div className="w-full">
            <div style={{ marginBottom: '0.75rem' }}>
                <ToggleButtonGroup
                    allowEmpty={false}
                    multiple={false}
                    value={size}
                    onValueChange={(e: { value: unknown }) => setSize(e.value as Size)}
                >
                    {sizeOptions.map((opt) => (
                        <ToggleButton.Root key={opt.value} value={opt.value}>
                            <ToggleButton.Indicator>{opt.label}</ToggleButton.Indicator>
                        </ToggleButton.Root>
                    ))}
                </ToggleButtonGroup>
            </div>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                size={size === 'normal' ? undefined : size}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Gridlines

Enable the `showGridlines` prop to render borders between cells.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface TreeNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    children?: TreeNode[];
}

const nodes: TreeNode[] = [
    {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Work', size: '55kb', type: 'Folder' },
                children: [
                    { key: '0-0-0', data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } },
                    { key: '0-0-1', data: { name: 'Resume.doc', size: '25kb', type: 'Document' } }
                ]
            },
            {
                key: '0-1',
                data: { name: 'Home', size: '20kb', type: 'Folder' },
                children: [{ key: '0-1-0', data: { name: 'Invoices.txt', size: '20kb', type: 'Text' } }]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'barcelona.jpg', size: '90kb', type: 'Picture' } },
            { key: '1-1', data: { name: 'primeui.png', size: '30kb', type: 'Picture' } },
            { key: '1-2', data: { name: 'optimus.jpg', size: '30kb', type: 'Picture' } }
        ]
    },
    {
        key: '2',
        data: { name: 'Movies', size: '1500kb', type: 'Folder' },
        children: [
            { key: '2-0', data: { name: 'Scarface', size: '500kb', type: 'Video' } },
            { key: '2-1', data: { name: 'Goodfellas', size: '250kb', type: 'Video' } }
        ]
    }
];

export default function TreeTableGridlinesDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                showGridlines
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Striped Rows

The `stripedRows` prop renders rows with alternating background colors across the flattened tree.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface TreeNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    children?: TreeNode[];
}

const nodes: TreeNode[] = [
    {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Work', size: '55kb', type: 'Folder' },
                children: [
                    { key: '0-0-0', data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } },
                    { key: '0-0-1', data: { name: 'Resume.doc', size: '25kb', type: 'Document' } }
                ]
            },
            {
                key: '0-1',
                data: { name: 'Home', size: '20kb', type: 'Folder' },
                children: [{ key: '0-1-0', data: { name: 'Invoices.txt', size: '20kb', type: 'Text' } }]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'barcelona.jpg', size: '90kb', type: 'Picture' } },
            { key: '1-1', data: { name: 'primeui.png', size: '30kb', type: 'Picture' } },
            { key: '1-2', data: { name: 'optimus.jpg', size: '30kb', type: 'Picture' } }
        ]
    },
    {
        key: '2',
        data: { name: 'Movies', size: '1500kb', type: 'Folder' },
        children: [
            { key: '2-0', data: { name: 'Scarface', size: '500kb', type: 'Video' } },
            { key: '2-1', data: { name: 'Goodfellas', size: '250kb', type: 'Video' } }
        ]
    }
];

export default function TreeTableStripedRowsDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true, '1': true });

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                stripedRows
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Selection

Selection works exactly like DataTable, `selectionMode` controls the mode, and the `DataTable.Selection` render prop exposes helpers for row-level and header-level toggles. Checkbox selection propagates across the hierarchy with tri-state semantics.

#### Single

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent, DataTableSelectionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function SingleSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Multiple

Pair `selectionMode="multiple"` with `metaKeySelection` so Ctrl/Cmd + Click toggles rows and Shift + Click selects a range.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent, DataTableSelectionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function MultipleSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                selectionMode="multiple"
                metaKeySelection
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Checkbox

Checkbox column with propagating selection, toggling a parent selects all descendants, partial state renders as indeterminate.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Database } from '@primeicons/react/database';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Minus } from '@primeicons/react/minus';
import { Video } from '@primeicons/react/video';
import type { DataTableExpansionEvent, DataTableSelectionEvent } from '@primereact/ui/datatable';
import type { CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import type { DataTableSelectionInstance } from '@primereact/ui/datatable';
import { Checkbox } from '@primereact/ui/checkbox';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface TreeNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    children?: TreeNode[];
}

const nodes: TreeNode[] = [
    {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Work', size: '55kb', type: 'Folder' },
                children: [
                    { key: '0-0-0', data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } },
                    { key: '0-0-1', data: { name: 'Resume.doc', size: '25kb', type: 'Document' } }
                ]
            },
            {
                key: '0-1',
                data: { name: 'Home', size: '20kb', type: 'Folder' },
                children: [{ key: '0-1-0', data: { name: 'Invoices.txt', size: '20kb', type: 'Text' } }]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'barcelona.jpg', size: '90kb', type: 'Picture' } },
            { key: '1-1', data: { name: 'primeui.png', size: '30kb', type: 'Picture' } },
            { key: '1-2', data: { name: 'optimus.jpg', size: '30kb', type: 'Picture' } }
        ]
    },
    {
        key: '2',
        data: { name: 'Movies', size: '1500kb', type: 'Folder' },
        children: [
            {
                key: '2-0',
                data: { name: 'Al Pacino', size: '1000kb', type: 'Folder' },
                children: [
                    { key: '2-0-0', data: { name: 'Scarface', size: '500kb', type: 'Video' } },
                    { key: '2-0-1', data: { name: 'Serpico', size: '500kb', type: 'Video' } }
                ]
            },
            {
                key: '2-1',
                data: { name: 'Robert De Niro', size: '500kb', type: 'Folder' },
                children: [
                    { key: '2-1-0', data: { name: 'Goodfellas', size: '250kb', type: 'Video' } },
                    { key: '2-1-1', data: { name: 'Untouchables', size: '250kb', type: 'Video' } }
                ]
            }
        ]
    }
];

export default function TreeTableSelectionDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true, '0-0': true });
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});

    return (
        <div className="w-full">
            <div style={{ marginBottom: '0.5rem' }}>
                <strong>Selected:</strong>{' '}
                {Object.keys(selectedKeys)
                    .filter((k) => selectedKeys[k])
                    .join(', ') || 'None'}
            </div>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                selectionMode="multiple"
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <div className="flex items-center gap-2">
                                        <DataTable.Selection>
                                            {({ isAllSelected, isSomeSelected, toggleAll }: DataTableSelectionInstance) => (
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
                                        </DataTable.Selection>
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                    </div>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody key={JSON.stringify(selectedKeys)}>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <DataTable.Selection>
                                                {({ isSelected, isPartiallySelected, toggle }: DataTableSelectionInstance) => (
                                                    <Checkbox.Root
                                                        checked={isSelected}
                                                        indeterminate={isPartiallySelected}
                                                        onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
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
                                            </DataTable.Selection>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Radio

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent, DataTableSelectionEvent } from '@primereact/ui/datatable';
import type { DataTableSelectionInstance } from '@primereact/ui/datatable';
import type { RadioButtonRootChangeEvent } from '@primereact/ui/radiobutton';
import { DataTable } from '@primereact/ui/datatable';
import { RadioButton } from '@primereact/ui/radiobutton';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function RadioSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '3rem' }} />
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <DataTable.Selection mode="radio">
                                            {({ isSelected, toggle }: DataTableSelectionInstance) => (
                                                <RadioButton.Root
                                                    checked={isSelected}
                                                    onCheckedChange={(e: RadioButtonRootChangeEvent) => toggle(e.originalEvent)}
                                                >
                                                    <RadioButton.Box>
                                                        <RadioButton.Indicator match="checked" />
                                                    </RadioButton.Box>
                                                </RadioButton.Root>
                                            )}
                                        </DataTable.Selection>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={4}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Keyboard

Arrow Up/Down moves focus between rows, Arrow Right/Left expands/collapses, Space or Enter toggles the focused row, and Shift + Arrow extends a range.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent, DataTableSelectionEvent } from '@primereact/ui/datatable';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function KeyboardDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    const selectedCount = Object.values(selectedKeys).filter(Boolean).length;

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-3 mb-3 p-3 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
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
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                selectionMode="multiple"
                metaKeySelection
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Sort

Sorting is evaluated per tree level, siblings are sorted against each other while the hierarchy stays intact.

#### Single

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import type { DataTableSortOrderInstance } from '@primereact/ui/datatable';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

function SortableHeader({ field, children }: { field: string; children: React.ReactNode }) {
    return (
        <DataTable.Sort field={field} className="inline-flex items-center gap-2">
            {children}
            <OverlayBadge className="px-1">
                <DataTable.SortIndicator match="unsorted">
                    <SortAlt />
                </DataTable.SortIndicator>
                <DataTable.SortIndicator match="asc">
                    <SortAmountUpAlt />
                </DataTable.SortIndicator>
                <DataTable.SortIndicator match="desc">
                    <SortAmountDown />
                </DataTable.SortIndicator>
                <DataTable.SortOrder asChild>
                    {({ index }: DataTableSortOrderInstance) => (
                        <Badge shape="circle" size="small" severity="info" className="mt-1">
                            {index}
                        </Badge>
                    )}
                </DataTable.SortOrder>
            </OverlayBadge>
        </DataTable.Sort>
    );
}

export default function SortDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                removableSort
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <SortableHeader field="name">
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <SortableHeader field="size">
                                        <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <SortableHeader field="type">
                                        <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Multiple

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import type { DataTableSortOrderInstance } from '@primereact/ui/datatable';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

function SortableHeader({ field, children }: { field: string; children: React.ReactNode }) {
    return (
        <DataTable.Sort field={field} className="inline-flex items-center gap-2">
            {children}
            <OverlayBadge className="px-1">
                <DataTable.SortIndicator match="unsorted">
                    <SortAlt />
                </DataTable.SortIndicator>
                <DataTable.SortIndicator match="asc">
                    <SortAmountUpAlt />
                </DataTable.SortIndicator>
                <DataTable.SortIndicator match="desc">
                    <SortAmountDown />
                </DataTable.SortIndicator>
                <DataTable.SortOrder asChild>
                    {({ index }: DataTableSortOrderInstance) => (
                        <Badge shape="circle" size="small" severity="info" className="mt-1">
                            {index}
                        </Badge>
                    )}
                </DataTable.SortOrder>
            </OverlayBadge>
        </DataTable.Sort>
    );
}

export default function MultiSortDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                removableSort
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <SortableHeader field="name">
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <SortableHeader field="size">
                                        <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <SortableHeader field="type">
                                        <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Presort

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function PresortDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                defaultSortField="size"
                defaultSortOrder={-1}
                removableSort
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.Sort field="name" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                        <DataTable.SortIndicator match="unsorted">
                                            <SortAlt />
                                        </DataTable.SortIndicator>
                                        <DataTable.SortIndicator match="asc">
                                            <SortAmountUpAlt />
                                        </DataTable.SortIndicator>
                                        <DataTable.SortIndicator match="desc">
                                            <SortAmountDown />
                                        </DataTable.SortIndicator>
                                    </DataTable.Sort>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.Sort field="size" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                        <DataTable.SortIndicator match="unsorted">
                                            <SortAlt />
                                        </DataTable.SortIndicator>
                                        <DataTable.SortIndicator match="asc">
                                            <SortAmountUpAlt />
                                        </DataTable.SortIndicator>
                                        <DataTable.SortIndicator match="desc">
                                            <SortAmountDown />
                                        </DataTable.SortIndicator>
                                    </DataTable.Sort>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.Sort field="type" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                        <DataTable.SortIndicator match="unsorted">
                                            <SortAlt />
                                        </DataTable.SortIndicator>
                                        <DataTable.SortIndicator match="asc">
                                            <SortAmountUpAlt />
                                        </DataTable.SortIndicator>
                                        <DataTable.SortIndicator match="desc">
                                            <SortAmountDown />
                                        </DataTable.SortIndicator>
                                    </DataTable.Sort>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import type { DataTableSortOrderInstance } from '@primereact/ui/datatable';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function PresortMultiDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                defaultMultiSortMeta={[
                    { field: 'type', order: 1 },
                    { field: 'name', order: 1 }
                ]}
                removableSort
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.Sort field="name" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                        <OverlayBadge className="px-1">
                                            <DataTable.SortIndicator match="unsorted">
                                                <SortAlt />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortIndicator match="asc">
                                                <SortAmountUpAlt />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortIndicator match="desc">
                                                <SortAmountDown />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortOrder asChild>
                                                {({ index }: DataTableSortOrderInstance) => (
                                                    <Badge shape="circle" size="small" severity="info" className="mt-1">
                                                        {index}
                                                    </Badge>
                                                )}
                                            </DataTable.SortOrder>
                                        </OverlayBadge>
                                    </DataTable.Sort>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.Sort field="size" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                        <OverlayBadge className="px-1">
                                            <DataTable.SortIndicator match="unsorted">
                                                <SortAlt />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortIndicator match="asc">
                                                <SortAmountUpAlt />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortIndicator match="desc">
                                                <SortAmountDown />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortOrder asChild>
                                                {({ index }: DataTableSortOrderInstance) => (
                                                    <Badge shape="circle" size="small" severity="info" className="mt-1">
                                                        {index}
                                                    </Badge>
                                                )}
                                            </DataTable.SortOrder>
                                        </OverlayBadge>
                                    </DataTable.Sort>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.Sort field="type" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                        <OverlayBadge className="px-1">
                                            <DataTable.SortIndicator match="unsorted">
                                                <SortAlt />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortIndicator match="asc">
                                                <SortAmountUpAlt />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortIndicator match="desc">
                                                <SortAmountDown />
                                            </DataTable.SortIndicator>
                                            <DataTable.SortOrder asChild>
                                                {({ index }: DataTableSortOrderInstance) => (
                                                    <Badge shape="circle" size="small" severity="info" className="mt-1">
                                                        {index}
                                                    </Badge>
                                                )}
                                            </DataTable.SortOrder>
                                        </OverlayBadge>
                                    </DataTable.Sort>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Pagination

Pagination operates on root-level nodes, expanded children never get paginated away.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import type { PaginatorRootChangeEvent } from '@primereact/ui/paginator';
import type { DataTablePaginationInstance } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Paginator } from '@primereact/ui/paginator';
import { Tag } from '@primereact/ui/tag';
import type { PaginatorPagesInstance } from '@primereact/ui/paginator';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function PaginationDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData());
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                paginator
                defaultRows={3}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '60%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
                <DataTable.Pagination>
                    {({ page, rows, totalRecords, onPageChange }: DataTablePaginationInstance) => (
                        <Paginator.Root
                            className="py-3 px-3.5 border-t border-surface-200 dark:border-surface-700"
                            page={page + 1}
                            total={totalRecords}
                            itemsPerPage={rows}
                            onPageChange={(e: PaginatorRootChangeEvent) => {
                                if (e.originalEvent) onPageChange(e.originalEvent, e.value - 1);
                            }}
                        >
                            <Paginator.Content>
                                <Paginator.First>
                                    <AngleDoubleLeft />
                                </Paginator.First>
                                <Paginator.Prev>
                                    <AngleLeft />
                                </Paginator.Prev>
                                <Paginator.Pages>
                                    {({ paginator }: PaginatorPagesInstance) =>
                                        paginator?.pages.map((p, index) =>
                                            p.type === 'page' ? (
                                                <Paginator.Page key={index} value={p.value} />
                                            ) : (
                                                <Paginator.Ellipsis key={index}>
                                                    <EllipsisH />
                                                </Paginator.Ellipsis>
                                            )
                                        )
                                    }
                                </Paginator.Pages>
                                <Paginator.Next>
                                    <AngleRight />
                                </Paginator.Next>
                                <Paginator.Last>
                                    <AngleDoubleRight />
                                </Paginator.Last>
                            </Paginator.Content>
                        </Paginator.Root>
                    )}
                </DataTable.Pagination>
            </DataTable.Root>
        </div>
    );
}

```

### Scroll

`scrollable` + `scrollHeight` works the same way as in DataTable; the flattened rows scroll while the sticky header stays pinned.

#### Vertical

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

interface TreeNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    children?: TreeNode[];
}

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

const types = ['Document', 'Text', 'Picture', 'Video'];

const nodes: TreeNode[] = Array.from({ length: 20 }, (_, i) => ({
    key: String(i),
    data: { name: `Folder ${i + 1}`, size: '—', type: 'Folder' },
    children: Array.from({ length: 6 }, (_, j) => {
        const type = types[j % types.length];
        const size = ((i * 37 + j * 113) % 1950) + 50;

        return {
            key: `${i}-${j}`,
            data: {
                name: `${type} ${i + 1}.${j + 1}`,
                size: `${size}kb`,
                type
            }
        };
    })
}));

export default function TreeTableScrollDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true, '1': true });

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                scrollable
                scrollHeight="400px"
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Horizontal

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function ScrollHorizontalDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData());
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                scrollable
                scrollHeight="400px"
            >
                <DataTable.TableContainer>
                    <DataTable.Table>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ minWidth: '20rem' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '10rem' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '12rem' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '14rem' }}>
                                    <DataTable.THeadTitle>Key</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '12rem' }}>
                                    <DataTable.THeadTitle>Level</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '12rem' }}>
                                    <DataTable.THeadTitle>Has Children</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <code className="text-xs text-surface-500 dark:text-surface-400">{String(item.key)}</code>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{Number(item._treeLevel ?? 0)}</DataTable.Cell>
                                    <DataTable.Cell>{item._treeHasChildren ? 'Yes' : 'No'}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={6}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Flex

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function ScrollFlexDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData());
    }, []);

    return (
        <div className="card flex flex-col h-[24rem]">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                scrollable
                scrollHeight="flex"
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Frozen Columns

Pin the tree column (or any column) during horizontal scroll with the `frozen` prop on `DataTable.Column`.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Database } from '@primeicons/react/database';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

interface TreeNode {
    key: string;
    data: { name: string; size: string; type: string; owner: string; modified: string };
    children?: TreeNode[];
}

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

const owners = ['Amy Elsner', 'Anna Fali', 'Bernardo Dominic', 'Ioni Bowcher', 'Stephen Shaw'];
const types = ['Document', 'Text', 'Picture', 'Video'];

const nodes: TreeNode[] = Array.from({ length: 10 }, (_, i) => ({
    key: String(i),
    data: {
        name: `Folder ${i + 1}`,
        size: '—',
        type: 'Folder',
        owner: owners[i % owners.length],
        modified: `2026-0${(i % 9) + 1}-15`
    },
    children: Array.from({ length: 5 }, (_, j) => {
        const type = types[j % types.length];
        const size = ((i * 37 + j * 113) % 1950) + 50;

        return {
            key: `${i}-${j}`,
            data: {
                name: `${type} ${i + 1}.${j + 1}`,
                size: `${size}kb`,
                type,
                owner: owners[(i + j) % owners.length],
                modified: `2026-0${((i + j) % 9) + 1}-20`
            }
        };
    })
}));

export default function TreeTableFrozenColumnsDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true, '1': true });

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                scrollable
                scrollHeight="400px"
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell frozen style={{ minWidth: '300px' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '160px' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '160px' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Owner</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '160px' }}>
                                    <DataTable.THeadTitle>Modified</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '140px' }}>
                                    <DataTable.THeadTitle>Actions</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell frozen>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-semibold' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{String(item.owner)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.modified)}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-xs text-surface-500 dark:text-surface-400">Open · Share</span>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={6}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

Multiple columns can be frozen on both sides, pass `alignFrozen="right"` to pin to the right edge.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function ScrollFrozenColumnsMultiDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData());
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                scrollable
                scrollHeight="400px"
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '1200px' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell frozen style={{ minWidth: '20rem' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '10rem' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '14rem' }}>
                                    <DataTable.THeadTitle>Key</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '10rem' }}>
                                    <DataTable.THeadTitle>Level</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '12rem' }}>
                                    <DataTable.THeadTitle>Has Children</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell frozen alignFrozen="right" style={{ minWidth: '10rem' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell frozen>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <code className="text-xs text-surface-500 dark:text-surface-400">{String(item.key)}</code>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{Number(item._treeLevel ?? 0)}</DataTable.Cell>
                                    <DataTable.Cell>{item._treeHasChildren ? 'Yes' : 'No'}</DataTable.Cell>
                                    <DataTable.Cell frozen alignFrozen="right">
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={6}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Frozen Rows

Keep specific nodes pinned above the scrollable body by rendering them inside `DataTable.FrozenTBody`.

```tsx
'use client';
import { File } from '@primeicons/react/file';
import { Database } from '@primeicons/react/database';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Lock } from '@primeicons/react/lock';
import { LockOpen } from '@primeicons/react/lock-open';
import { Video } from '@primeicons/react/video';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

interface TreeNode {
    key: string;
    data: { name: string; size: string; type: string };
    children?: TreeNode[];
}

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

const types = ['Document', 'Text', 'Picture', 'Video'];

const rootFolders: TreeNode[] = Array.from({ length: 10 }, (_, i) => ({
    key: String(i),
    data: { name: `Folder ${i + 1}`, size: '—', type: 'Folder' },
    children: Array.from({ length: 4 }, (_, j) => {
        const type = types[j % types.length];
        const size = ((i * 37 + j * 113) % 1950) + 50;

        return {
            key: `${i}-${j}`,
            data: { name: `${type} ${i + 1}.${j + 1}`, size: `${size}kb`, type }
        };
    })
}));

function flattenBranch(node: TreeNode, level = 0): Array<TreeNode & { level: number }> {
    const out: Array<TreeNode & { level: number }> = [{ ...node, level }];

    if (node.children) for (const child of node.children) out.push(...flattenBranch(child, level + 1));

    return out;
}

export default function TreeTableFrozenRowsDemo() {
    const [lockedKeys, setLockedKeys] = React.useState<string[]>(['0']);

    const toggleLock = (key: string) => {
        setLockedKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : prev.length >= 1 ? [key] : [...prev, key]));
    };

    const lockedFolders = rootFolders.filter((f) => lockedKeys.includes(f.key));
    const unlockedFolders = rootFolders.filter((f) => !lockedKeys.includes(f.key));

    const renderFrozenRow = (node: TreeNode & { level: number }) => (
        <DataTable.Row key={node.key}>
            <DataTable.Cell>
                <div className="flex items-center gap-2" style={{ paddingInlineStart: `${node.level * 1.25}rem` }}>
                    <TypeIcon type={node.data.type} />
                    <span className={node.data.type === 'Folder' ? 'font-semibold' : ''}>{node.data.name}</span>
                </div>
            </DataTable.Cell>
            <DataTable.Cell>
                <span className="text-sm text-surface-500 dark:text-surface-400">{node.data.size}</span>
            </DataTable.Cell>
            <DataTable.Cell>
                <Tag severity={typeSeverity[node.data.type] ?? 'secondary'}>{node.data.type}</Tag>
            </DataTable.Cell>
            <DataTable.Cell style={{ width: '4rem', textAlign: 'center' }}>
                {node.level === 0 && (
                    <Button variant="text" severity="secondary" size="small" iconOnly onClick={() => toggleLock(node.key)} aria-label="Unlock folder">
                        <LockOpen />
                    </Button>
                )}
            </DataTable.Cell>
        </DataTable.Row>
    );

    const renderBodyRow = (item: any) => (
        <DataTable.Row key={String(item.key)}>
            <DataTable.Cell>
                <div className="flex items-center gap-2">
                    <TypeIcon type={String(item.type)} />
                    <span className={item.type === 'Folder' ? 'font-semibold' : ''}>{String(item.name)}</span>
                </div>
            </DataTable.Cell>
            <DataTable.Cell>
                <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
            </DataTable.Cell>
            <DataTable.Cell>
                <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
            </DataTable.Cell>
            <DataTable.Cell style={{ width: '4rem', textAlign: 'center' }}>
                {item._treeLevel === 0 && (
                    <Button
                        variant="text"
                        severity="secondary"
                        size="small"
                        iconOnly
                        disabled={lockedKeys.length >= 1}
                        onClick={() => toggleLock(String(item.key))}
                        aria-label="Lock folder"
                    >
                        <Lock />
                    </Button>
                )}
            </DataTable.Cell>
        </DataTable.Row>
    );

    return (
        <div className="w-full">
            <DataTable.Root data={unlockedFolders} dataKey="key" treeMode scrollable scrollHeight="400px">
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '4rem' }} />
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.FrozenTBody>
                            {lockedFolders.flatMap((folder) => flattenBranch(folder).map((node) => renderFrozenRow(node)))}
                        </DataTable.FrozenTBody>
                        <DataTable.TBody>{({ item }: { item: any }) => renderBodyRow(item)}</DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={4}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Editing

Both `editMode="cell"` and `editMode="row"` compose with `treeMode`. Editing state is keyed by the row key, so collapsing or expanding other branches never drops edits in flight.

#### Cell

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success',
    Video: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface TreeNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    children?: TreeNode[];
}

const initialNodes: TreeNode[] = [
    {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Work', size: '55kb', type: 'Folder' },
                children: [
                    { key: '0-0-0', data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } },
                    { key: '0-0-1', data: { name: 'Resume.doc', size: '25kb', type: 'Document' } }
                ]
            },
            {
                key: '0-1',
                data: { name: 'Home', size: '20kb', type: 'Folder' },
                children: [{ key: '0-1-0', data: { name: 'Invoices.txt', size: '20kb', type: 'Text' } }]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'barcelona.jpg', size: '90kb', type: 'Picture' } },
            { key: '1-1', data: { name: 'primeui.png', size: '30kb', type: 'Picture' } },
            { key: '1-2', data: { name: 'optimus.jpg', size: '30kb', type: 'Picture' } }
        ]
    }
];

function updateNode(nodes: TreeNode[], key: string, field: string, value: unknown): TreeNode[] {
    return nodes.map((node) => {
        if (node.key === key) {
            return { ...node, data: { ...node.data, [field]: value } };
        }

        if (node.children) {
            return { ...node, children: updateNode(node.children, key, field, value) };
        }

        return node;
    });
}

export default function TreeTableCellEditDemo() {
    const [nodes, setNodes] = React.useState<TreeNode[]>(initialNodes);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true, '0-0': true });
    const pendingValueRef = React.useRef<Record<string, string>>({});

    const handleCellEditComplete = React.useCallback((e: { rowIndex: number; field: string; rowData?: Record<string, unknown> }) => {
        const key = e.rowData?.key as string | undefined;

        if (!key) return;

        const editKey = `${key}-${e.field}`;
        const newValue = pendingValueRef.current[editKey];

        if (newValue !== undefined) {
            setNodes((prev) => updateNode(prev, key, e.field, newValue));
            delete pendingValueRef.current[editKey];
        }
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                editMode="cell"
                onCellEditComplete={handleCellEditComplete}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <DataTable.CellEditor field="name" rowIndex={index} rowData={item} style={{ flex: 1 }}>
                                                <DataTable.CellEditorDisplay>{String(item.name)}</DataTable.CellEditorDisplay>
                                                <DataTable.CellEditorContent>
                                                    <InputText
                                                        defaultValue={String(item.name)}
                                                        onChange={(e: any) => {
                                                            pendingValueRef.current[`${item.key}-name`] = e.target.value;
                                                        }}
                                                        size="small"
                                                        fluid
                                                    />
                                                </DataTable.CellEditorContent>
                                            </DataTable.CellEditor>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="size" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>{String(item.size)}</DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={String(item.size)}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${item.key}-size`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="type" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={String(item.type)}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${item.key}-type`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

Cell editing composes with row selection.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Database } from '@primeicons/react/database';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Minus } from '@primeicons/react/minus';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent, DataTableSelectionEvent } from '@primereact/ui/datatable';
import type { CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import type { DataTableSelectionInstance } from '@primereact/ui/datatable';
import { Badge } from '@primereact/ui/badge';
import { Checkbox } from '@primereact/ui/checkbox';
import { DataTable } from '@primereact/ui/datatable';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

function updateNode(nodes: TreeTableNode[], key: string, field: string, value: unknown): TreeTableNode[] {
    return nodes.map((n) => {
        if (n.key === key) return { ...n, data: { ...n.data, [field]: value } };

        if (n.children) return { ...n, children: updateNode(n.children, key, field, value) };

        return n;
    });
}

export default function CellEditSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });
    const pendingValueRef = React.useRef<Record<string, string>>({});

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    const handleCellEditComplete = React.useCallback((e: { rowIndex: number; field: string; rowData?: Record<string, unknown> }) => {
        const key = e.rowData?.key as string | undefined;

        if (!key) return;

        const editKey = `${key}-${e.field}`;
        const newValue = pendingValueRef.current[editKey];

        if (newValue !== undefined) {
            setNodes((prev) => updateNode(prev, key, e.field, newValue));
            delete pendingValueRef.current[editKey];
        }
    }, []);

    const selectedCount = Object.values(selectedKeys).filter(Boolean).length;

    return (
        <div className="w-full">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium">Selected</span>
                <Badge severity={selectedCount ? 'info' : 'secondary'}>{selectedCount}</Badge>
            </div>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
                editMode="cell"
                onCellEditComplete={handleCellEditComplete}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '3rem' }}>
                                    <DataTable.Selection>
                                        {({ isAllSelected, isSomeSelected, toggleAll }: DataTableSelectionInstance) => (
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
                                    </DataTable.Selection>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <DataTable.Selection>
                                            {({ isSelected, isPartiallySelected, toggle }: DataTableSelectionInstance) => (
                                                <Checkbox.Root
                                                    checked={isSelected}
                                                    indeterminate={isPartiallySelected}
                                                    onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
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
                                        </DataTable.Selection>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <DataTable.CellEditor field="name" rowIndex={index} rowData={item} style={{ flex: 1 }}>
                                                <DataTable.CellEditorDisplay>{String(item.name)}</DataTable.CellEditorDisplay>
                                                <DataTable.CellEditorContent>
                                                    <InputText
                                                        defaultValue={String(item.name)}
                                                        onChange={(e: any) => {
                                                            pendingValueRef.current[`${item.key}-name`] = e.target.value;
                                                        }}
                                                        size="small"
                                                        fluid
                                                    />
                                                </DataTable.CellEditorContent>
                                            </DataTable.CellEditor>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="size" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={String(item.size)}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${item.key}-size`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={4}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Row

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Database } from '@primeicons/react/database';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import { Pencil } from '@primeicons/react/pencil';
import { Times } from '@primeicons/react/times';
import type { DataTableExpansionEvent, DataTableRowEditEvent } from '@primereact/ui/datatable';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Text: 'secondary',
    Picture: 'success'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface TreeNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    children?: TreeNode[];
}

const initialNodes: TreeNode[] = [
    {
        key: '0',
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Work', size: '55kb', type: 'Folder' },
                children: [
                    { key: '0-0-0', data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } },
                    { key: '0-0-1', data: { name: 'Resume.doc', size: '25kb', type: 'Document' } }
                ]
            },
            {
                key: '0-1',
                data: { name: 'Home', size: '20kb', type: 'Folder' },
                children: [{ key: '0-1-0', data: { name: 'Invoices.txt', size: '20kb', type: 'Text' } }]
            }
        ]
    },
    {
        key: '1',
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'barcelona.jpg', size: '90kb', type: 'Picture' } },
            { key: '1-1', data: { name: 'primeui.png', size: '30kb', type: 'Picture' } }
        ]
    }
];

function applyNodeUpdate(nodes: TreeNode[], key: string, patch: Partial<TreeNode['data']>): TreeNode[] {
    return nodes.map((node) => {
        if (node.key === key) {
            return { ...node, data: { ...node.data, ...patch } };
        }

        if (node.children) {
            return { ...node, children: applyNodeUpdate(node.children, key, patch) };
        }

        return node;
    });
}

export default function TreeTableRowEditDemo() {
    const [nodes, setNodes] = React.useState<TreeNode[]>(initialNodes);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });
    const [editingKeys, setEditingKeys] = React.useState<Record<string, boolean>>({});
    const draftRef = React.useRef<Record<string, Partial<TreeNode['data']>>>({});

    const handleSave = React.useCallback((e: DataTableRowEditEvent) => {
        const key = e.data.key as string | undefined;

        if (!key) return;

        const patch = draftRef.current[key];

        if (patch && Object.keys(patch).length > 0) {
            setNodes((prev) => applyNodeUpdate(prev, key, patch));
        }

        delete draftRef.current[key];
    }, []);

    const handleCancel = React.useCallback((e: DataTableRowEditEvent) => {
        const key = e.data.key as string | undefined;

        if (key) delete draftRef.current[key];
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                editMode="row"
                editingKeys={editingKeys}
                onEditingKeysChange={(e: any) => setEditingKeys(e.value)}
                onRowEditSave={handleSave}
                onRowEditCancel={handleCancel}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '8rem' }}>
                                    <DataTable.THeadTitle>Actions</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => {
                                const key = String(item.key);

                                return (
                                    <DataTable.Row key={key}>
                                        <DataTable.RowEditor rowKey={key} rowData={item}>
                                            <DataTable.Cell>
                                                <div className="flex items-center gap-2">
                                                    <DataTable.RowToggle>
                                                        <DataTable.RowToggleIndicator match="expanded">
                                                            <ChevronDown />
                                                        </DataTable.RowToggleIndicator>
                                                        <DataTable.RowToggleIndicator match="collapsed">
                                                            <ChevronRight />
                                                        </DataTable.RowToggleIndicator>
                                                    </DataTable.RowToggle>
                                                    <TypeIcon type={String(item.type)} />
                                                    <DataTable.CellEditor field="name" rowIndex={index} rowData={item} style={{ flex: 1 }}>
                                                        <DataTable.CellEditorDisplay>{String(item.name)}</DataTable.CellEditorDisplay>
                                                        <DataTable.CellEditorContent>
                                                            <InputText
                                                                defaultValue={String(item.name)}
                                                                onChange={(e: any) => {
                                                                    draftRef.current[key] = { ...draftRef.current[key], name: e.target.value };
                                                                }}
                                                                size="small"
                                                                fluid
                                                            />
                                                        </DataTable.CellEditorContent>
                                                    </DataTable.CellEditor>
                                                </div>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <DataTable.CellEditor field="size" rowIndex={index} rowData={item}>
                                                    <DataTable.CellEditorDisplay>{String(item.size)}</DataTable.CellEditorDisplay>
                                                    <DataTable.CellEditorContent>
                                                        <InputText
                                                            defaultValue={String(item.size)}
                                                            onChange={(e: any) => {
                                                                draftRef.current[key] = { ...draftRef.current[key], size: e.target.value };
                                                            }}
                                                            size="small"
                                                            fluid
                                                        />
                                                    </DataTable.CellEditorContent>
                                                </DataTable.CellEditor>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <DataTable.CellEditor field="type" rowIndex={index} rowData={item}>
                                                    <DataTable.CellEditorDisplay>
                                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                                    </DataTable.CellEditorDisplay>
                                                    <DataTable.CellEditorContent>
                                                        <InputText
                                                            defaultValue={String(item.type)}
                                                            onChange={(e: any) => {
                                                                draftRef.current[key] = { ...draftRef.current[key], type: e.target.value };
                                                            }}
                                                            size="small"
                                                            fluid
                                                        />
                                                    </DataTable.CellEditorContent>
                                                </DataTable.CellEditor>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <div style={{ display: 'flex', gap: '0.25rem' }}>
                                                    <DataTable.RowEditorInit as={Button} variant="text" severity="secondary" size="small">
                                                        <Pencil />
                                                    </DataTable.RowEditorInit>
                                                    <DataTable.RowEditorSave as={Button} variant="text" severity="success" size="small">
                                                        <Check />
                                                    </DataTable.RowEditorSave>
                                                    <DataTable.RowEditorCancel as={Button} variant="text" severity="danger" size="small">
                                                        <Times />
                                                    </DataTable.RowEditorCancel>
                                                </div>
                                            </DataTable.Cell>
                                        </DataTable.RowEditor>
                                    </DataTable.Row>
                                );
                            }}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={4}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Column Resize

Resize works in tree mode via the `resizableColumns` prop with `columnResizeMode` (`fit` or `expand`).

#### Fit Mode

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function ResizeDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                resizableColumns
                columnResizeMode="fit"
                showGridlines
            >
                <DataTable.TableContainer>
                    <DataTable.ColumnResizeIndicator />
                    <DataTable.Table style={{ width: '100%', tableLayout: 'fixed' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Expand Mode

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function ResizeExpandDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                resizableColumns
                columnResizeMode="expand"
                scrollable
                showGridlines
            >
                <DataTable.TableContainer>
                    <DataTable.ColumnResizeIndicator />
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Column Reorder

Drag and drop column headers to reorder columns.

```tsx
'use client';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { Bars } from '@primeicons/react/bars';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Database } from '@primeicons/react/database';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';
import type { DataTableColumnReorderEvent, DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface Column {
    field: 'name' | 'size' | 'type';
    header: string;
}

const initialColumns: Column[] = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
];

function renderCell(field: Column['field'], item: any) {
    if (field === 'name') {
        return (
            <div className="flex items-center gap-2">
                <DataTable.RowToggle>
                    <DataTable.RowToggleIndicator match="expanded">
                        <ChevronDown />
                    </DataTable.RowToggleIndicator>
                    <DataTable.RowToggleIndicator match="collapsed">
                        <ChevronRight />
                    </DataTable.RowToggleIndicator>
                </DataTable.RowToggle>
                <TypeIcon type={String(item.type)} />
                <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
            </div>
        );
    }

    if (field === 'type') {
        return <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>;
    }

    return <span className="text-sm text-surface-500 dark:text-surface-400">{String(item[field])}</span>;
}

export default function ReorderDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });
    const [columns, setColumns] = React.useState<Column[]>(initialColumns);

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                reorderableColumns
                onColumnReorder={(e: DataTableColumnReorderEvent) => {
                    const next = [...columns];
                    const [moved] = next.splice(e.dragIndex, 1);

                    next.splice(e.dropIndex, 0, moved);
                    setColumns(next);
                }}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                {columns.map((col) => (
                                    <DataTable.THeadCell key={col.field}>
                                        <DataTable.ColumnReorderTarget className="flex items-center gap-2 select-none">
                                            <DataTable.ColumnReorder className="text-surface-400 transition-colors">
                                                <Bars />
                                            </DataTable.ColumnReorder>
                                            <DataTable.THeadTitle>{col.header}</DataTable.THeadTitle>
                                        </DataTable.ColumnReorderTarget>
                                    </DataTable.THeadCell>
                                ))}
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody key={columns.map((c) => c.field).join(',')}>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    {columns.map((col) => (
                                        <DataTable.Cell key={col.field}>{renderCell(col.field, item)}</DataTable.Cell>
                                    ))}
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={columns.length}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
                <DataTable.ColumnReorderIndicatorUp>
                    <ArrowDown />
                </DataTable.ColumnReorderIndicatorUp>
                <DataTable.ColumnReorderIndicatorDown>
                    <ArrowUp />
                </DataTable.ColumnReorderIndicatorDown>
            </DataTable.Root>
        </div>
    );
}

```

### Row Reorder

Root-level row reordering via the drag handle on `DataTable.RowReorder`. Children stay attached to their parents.

```tsx
'use client';
import { Bars } from '@primeicons/react/bars';
import { Database } from '@primeicons/react/database';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent, DataTableRowReorderEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function RowReorderDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 6));
    }, []);

    const handleReorder = React.useCallback((e: DataTableRowReorderEvent) => {
        const flat = e.value as unknown as Array<{ key: string; _treeLevel?: number }>;
        const fromNode = flat[e.dragIndex];
        const toNode = flat[e.dropIndex];

        if (!fromNode || !toNode) return;
        if ((fromNode._treeLevel ?? 0) !== 0 || (toNode._treeLevel ?? 0) !== 0) return;

        setNodes((prev) => {
            const fromIdx = prev.findIndex((n) => n.key === fromNode.key);
            const toIdx = prev.findIndex((n) => n.key === toNode.key);

            if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) return prev;

            const next = prev.slice();
            const [moved] = next.splice(fromIdx, 1);

            next.splice(toIdx, 0, moved);

            return next;
        });
    }, []);

    return (
        <div className="w-full">
            <p className="mb-3 text-sm text-surface-500 dark:text-surface-400">
                Only root-level rows are reorderable; expand a node to see its children.
            </p>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                reorderableRows
                onRowReorder={handleReorder}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '3rem' }} />
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        {Number(item._treeLevel ?? 0) === 0 ? (
                                            <DataTable.RowReorder rowIndex={index} className="cursor-grab text-surface-400 hover:text-surface-600">
                                                <Bars />
                                            </DataTable.RowReorder>
                                        ) : null}
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={4}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Column Toggle

Show/hide columns and drag to reorder them in a popover.

```tsx
'use client';
import { Bars } from '@primeicons/react/bars';
import { Database } from '@primeicons/react/database';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Cog } from '@primeicons/react/cog';
import { Refresh } from '@primeicons/react/refresh';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import { useSortableList } from '@primereact/hooks/use-sortable-list';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { DataTable } from '@primereact/ui/datatable';
import { Popover } from '@primereact/ui/popover';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

interface ColumnDef {
    field: 'name' | 'size' | 'type' | 'key' | 'level' | 'hasChildren';
    header: string;
}

const initialColumns: ColumnDef[] = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' },
    { field: 'key', header: 'Key' },
    { field: 'level', header: 'Level' },
    { field: 'hasChildren', header: 'Has Children' }
];

const defaultVisibleFields: ColumnDef['field'][] = ['name', 'size', 'type'];

function renderCell(field: ColumnDef['field'], item: any) {
    if (field === 'name') {
        return (
            <div className="flex items-center gap-2">
                <DataTable.RowToggle>
                    <DataTable.RowToggleIndicator match="expanded">
                        <ChevronDown />
                    </DataTable.RowToggleIndicator>
                    <DataTable.RowToggleIndicator match="collapsed">
                        <ChevronRight />
                    </DataTable.RowToggleIndicator>
                </DataTable.RowToggle>
                <TypeIcon type={String(item.type)} />
                <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
            </div>
        );
    }

    if (field === 'type') return <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>;

    if (field === 'size') return <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>;

    if (field === 'key') return <code className="text-xs text-surface-500 dark:text-surface-400">{String(item.key)}</code>;

    if (field === 'level') return Number(item._treeLevel ?? 0);

    if (field === 'hasChildren') return item._treeHasChildren ? 'Yes' : 'No';

    return null;
}

const LIST_ID = 'columns';

function ColumnsPopover({
    columns,
    visibleFields,
    onColumnsChange,
    onVisibleFieldsChange,
    onReset
}: {
    columns: ColumnDef[];
    visibleFields: string[];
    onColumnsChange: (next: ColumnDef[]) => void;
    onVisibleFieldsChange: (next: string[]) => void;
    onReset: () => void;
}) {
    const { dragState, getListHandlers, getItemHandlers } = useSortableList<typeof LIST_ID, ColumnDef>({
        onReorder: (_listId, from, to) => {
            const next = [...columns];
            const [moved] = next.splice(from, 1);

            next.splice(to, 0, moved);
            onColumnsChange(next);
        }
    });

    const toggleVisible = (field: string) => {
        const set = new Set(visibleFields);

        if (set.has(field)) set.delete(field);
        else set.add(field);
        onVisibleFieldsChange(Array.from(set));
    };

    const listHandlers = getListHandlers(LIST_ID);

    return (
        <Popover.Root>
            <Popover.Trigger as={Button} variant="outlined" severity="secondary" size="small">
                <Cog />
                Columns
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Positioner sideOffset={4} side="bottom" align="end">
                    <Popover.Popup className="w-72 p-0">
                        <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-surface-200 dark:border-surface-700">
                            <span className="text-sm font-semibold">Columns</span>
                            <Button variant="text" size="small" severity="secondary" onClick={onReset}>
                                <Refresh /> Reset
                            </Button>
                        </div>
                        <div className="py-2 max-h-80 overflow-auto" onDragOver={listHandlers.onDragOver} onDrop={listHandlers.onDrop}>
                            {columns.map((col, idx) => {
                                const checked = visibleFields.includes(col.field);
                                const itemHandlers = getItemHandlers(LIST_ID, idx, col);
                                const isDragging = dragState.draggedIndex === idx;
                                const isDragOver = dragState.dragOverIndex === idx && dragState.draggedIndex !== idx;

                                return (
                                    <div
                                        key={col.field}
                                        {...itemHandlers}
                                        className={[
                                            'flex items-center gap-2 px-3 py-1.5 mx-1 rounded-md cursor-move select-none transition',
                                            isDragging ? 'opacity-40' : '',
                                            isDragOver
                                                ? 'bg-primary-50 dark:bg-primary-900/30 ring-1 ring-primary-400'
                                                : 'hover:bg-surface-100 dark:hover:bg-surface-800'
                                        ].join(' ')}
                                    >
                                        <Bars className="w-3.5 h-3.5 text-surface-400 dark:text-surface-500" />
                                        <label className="flex-1 flex items-center gap-2 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                                            <Checkbox.Root checked={checked} onCheckedChange={() => toggleVisible(col.field)}>
                                                <Checkbox.Box>
                                                    <Checkbox.Indicator match="checked">
                                                        <Check />
                                                    </Checkbox.Indicator>
                                                </Checkbox.Box>
                                            </Checkbox.Root>
                                            <span className="text-sm">{col.header}</span>
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    </Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    );
}

export default function ColumnToggleDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });
    const [columns, setColumns] = React.useState<ColumnDef[]>(initialColumns);
    const [visibleFields, setVisibleFields] = React.useState<string[]>(defaultVisibleFields);

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    const resetOptions = () => {
        setColumns(initialColumns);
        setVisibleFields(defaultVisibleFields);
    };

    const visibleColumns = columns.filter((col) => visibleFields.includes(col.field));

    return (
        <div className="w-full">
            <div className="mb-3 flex items-center justify-end">
                <ColumnsPopover
                    columns={columns}
                    visibleFields={visibleFields}
                    onColumnsChange={setColumns}
                    onVisibleFieldsChange={setVisibleFields}
                    onReset={resetOptions}
                />
            </div>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                {visibleColumns.map((col) => (
                                    <DataTable.THeadCell key={col.field}>
                                        <DataTable.THeadTitle>{col.header}</DataTable.THeadTitle>
                                    </DataTable.THeadCell>
                                ))}
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody key={visibleFields.join(',') + '|' + columns.map((c) => c.field).join(',')}>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    {visibleColumns.map((col) => (
                                        <DataTable.Cell key={col.field}>{renderCell(col.field, item)}</DataTable.Cell>
                                    ))}
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={visibleColumns.length}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Column Group

Multi-level headers with `rowSpan` and `colSpan`, plus an aggregate `TFoot`.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { Database } from '@primeicons/react/database';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

interface SalesNode {
    key: string;
    data: {
        product: string;
        lastYearSale: number;
        thisYearSale: number;
        lastYearProfit: number;
        thisYearProfit: number;
    };
    children?: SalesNode[];
}

const nodes: SalesNode[] = [
    {
        key: 'europe',
        data: { product: 'Europe', lastYearSale: 60, thisYearSale: 45, lastYearProfit: 766_537, thisYearProfit: 659_964 },
        children: [
            { key: 'e-1', data: { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54_406, thisYearProfit: 43_342 } },
            { key: 'e-2', data: { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423_132, thisYearProfit: 312_122 } },
            { key: 'e-3', data: { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 288_999, thisYearProfit: 304_500 } }
        ]
    },
    {
        key: 'americas',
        data: { product: 'Americas', lastYearSale: 28, thisYearSale: 42, lastYearProfit: 655_563, thisYearProfit: 508_832 },
        children: [
            { key: 'a-1', data: { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12_321, thisYearProfit: 8_500 } },
            { key: 'a-2', data: { product: 'Bracelet', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643_242, thisYearProfit: 500_332 } }
        ]
    }
];

function Trend({ current, previous }: { current: number; previous: number }) {
    const up = current >= previous;

    return (
        <div className="inline-flex items-center gap-1">
            <span>{current}%</span>
            {up ? <ArrowUp className="w-3 h-3 text-green-500" /> : <ArrowDown className="w-3 h-3 text-red-500" />}
        </div>
    );
}

export default function ColumnGroupDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ europe: true });

    const totals = React.useMemo(() => {
        return nodes.reduce(
            (acc, n) => ({
                lastYear: acc.lastYear + n.data.lastYearProfit,
                thisYear: acc.thisYear + n.data.thisYearProfit
            }),
            { lastYear: 0, thisYear: 0 }
        );
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                showGridlines
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell rowSpan={2}>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell colSpan={2} style={{ textAlign: 'center' }}>
                                    <DataTable.THeadTitle>Sale Rate</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell colSpan={2} style={{ textAlign: 'center' }}>
                                    <DataTable.THeadTitle>Profits</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Last Year</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>This Year</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Last Year</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>This Year</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <span className={item._treeHasChildren ? 'font-medium' : ''}>{String(item.product)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{Number(item.lastYearSale)}%</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Trend current={Number(item.thisYearSale)} previous={Number(item.lastYearSale)} />
                                    </DataTable.Cell>
                                    <DataTable.Cell>${Number(item.lastYearProfit).toLocaleString()}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={Number(item.thisYearProfit) >= Number(item.lastYearProfit) ? 'success' : 'danger'}>
                                            ${Number(item.thisYearProfit).toLocaleString()}
                                        </Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                        <DataTable.TFoot>
                            <DataTable.TFootRow>
                                <DataTable.TFootCell colSpan={3} style={{ textAlign: 'right' }}>
                                    <span className="font-semibold">Totals</span>
                                </DataTable.TFootCell>
                                <DataTable.TFootCell>
                                    <span className="font-semibold">${totals.lastYear.toLocaleString()}</span>
                                </DataTable.TFootCell>
                                <DataTable.TFootCell>
                                    <span className="font-semibold">${totals.thisYear.toLocaleString()}</span>
                                </DataTable.TFootCell>
                            </DataTable.TFootRow>
                        </DataTable.TFoot>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

Sort and filter work on any leaf header cell in a grouped layout, wrap the header in `DataTable.Sort` and add a filter row below the leaf row.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Database } from '@primeicons/react/database';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import type { DataTableExpansionEvent, DataTableFilterInstance } from '@primereact/ui/datatable';
import { DataTable, FilterMatchMode } from '@primereact/ui/datatable';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

interface SalesNode {
    key: string;
    data: {
        product: string;
        lastYearSale: number;
        thisYearSale: number;
        lastYearProfit: number;
        thisYearProfit: number;
    };
    children?: SalesNode[];
}

const nodes: SalesNode[] = [
    {
        key: 'europe',
        data: { product: 'Europe', lastYearSale: 60, thisYearSale: 45, lastYearProfit: 766_537, thisYearProfit: 659_964 },
        children: [
            { key: 'e-1', data: { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54_406, thisYearProfit: 43_342 } },
            { key: 'e-2', data: { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423_132, thisYearProfit: 312_122 } },
            { key: 'e-3', data: { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 288_999, thisYearProfit: 304_500 } }
        ]
    },
    {
        key: 'americas',
        data: { product: 'Americas', lastYearSale: 28, thisYearSale: 42, lastYearProfit: 655_563, thisYearProfit: 508_832 },
        children: [
            { key: 'a-1', data: { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12_321, thisYearProfit: 8_500 } },
            { key: 'a-2', data: { product: 'Bracelet', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643_242, thisYearProfit: 500_332 } }
        ]
    }
];

function Trend({ current, previous }: { current: number; previous: number }) {
    const up = current >= previous;

    return (
        <div className="inline-flex items-center gap-1">
            <span>{current}%</span>
            {up ? <ArrowUp className="w-3 h-3 text-green-500" /> : <ArrowDown className="w-3 h-3 text-red-500" />}
        </div>
    );
}

function SortableHeader({ field, children }: { field: string; children: React.ReactNode }) {
    return (
        <DataTable.Sort field={field} className="inline-flex items-center gap-1">
            <DataTable.THeadTitle>{children}</DataTable.THeadTitle>
            <DataTable.SortIndicator match="unsorted">
                <SortAlt />
            </DataTable.SortIndicator>
            <DataTable.SortIndicator match="asc">
                <SortAmountUpAlt />
            </DataTable.SortIndicator>
            <DataTable.SortIndicator match="desc">
                <SortAmountDown />
            </DataTable.SortIndicator>
        </DataTable.Sort>
    );
}

export default function ColumnGroupFilterSortDemo() {
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ europe: true, americas: true });
    const [filters, setFilters] = React.useState<Record<string, { value: unknown; matchMode: FilterMatchMode }>>({
        product: { value: null, matchMode: FilterMatchMode.Contains },
        thisYearSale: { value: null, matchMode: FilterMatchMode.Gte }
    });

    return (
        <div className="w-full">
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                removableSort
                filters={filters}
                onFilter={(e: { filters: Record<string, unknown> }) => setFilters(e.filters as typeof filters)}
                showGridlines
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell rowSpan={2}>
                                    <SortableHeader field="product">Product</SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell colSpan={2} style={{ textAlign: 'center' }}>
                                    <DataTable.THeadTitle>Sale Rate</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell colSpan={2} style={{ textAlign: 'center' }}>
                                    <DataTable.THeadTitle>Profits</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <SortableHeader field="lastYearSale">Last Year</SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="thisYearSale">This Year</SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="lastYearProfit">Last Year</SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="thisYearProfit">This Year</SortableHeader>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="product" display="row" dataType="text">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <InputText
                                                value={(value as string) ?? ''}
                                                onChange={(e: any) => onChange(e, e.target.value)}
                                                placeholder="Search"
                                                size="small"
                                                fluid
                                            />
                                        )}
                                    </DataTable.Filter>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell />
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="thisYearSale" display="row" dataType="numeric">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <InputText
                                                value={(value as string) ?? ''}
                                                onChange={(e: any) => onChange(e, e.target.value ? Number(e.target.value) : null, 'gte')}
                                                placeholder="≥"
                                                size="small"
                                                fluid
                                            />
                                        )}
                                    </DataTable.Filter>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell />
                                <DataTable.THeadCell />
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <span className={item._treeHasChildren ? 'font-medium' : ''}>{String(item.product)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{Number(item.lastYearSale)}%</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Trend current={Number(item.thisYearSale)} previous={Number(item.lastYearSale)} />
                                    </DataTable.Cell>
                                    <DataTable.Cell>${Number(item.lastYearProfit).toLocaleString()}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={Number(item.thisYearProfit) >= Number(item.lastYearProfit) ? 'success' : 'danger'}>
                                            ${Number(item.thisYearProfit).toLocaleString()}
                                        </Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={5}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Filter

Filtering uses the same `filters` + `onFilter` API as DataTable; `treeMode` honours it against the flattened tree. For the standalone hook used outside DataTable, see [`useTreeFilter`](../../hooks/use-tree-filter.md).

#### Basic

`display="row"` renders inline inputs directly under each column header and applies as the user types.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Search } from '@primeicons/react/search';
import { Video } from '@primeicons/react/video';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import { FilterMatchMode } from '@primereact/ui/datatable';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import type { DataTableFilterInstance } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

const typeOptions = [
    { label: 'Any', value: '' },
    { label: 'Folder', value: 'Folder' },
    { label: 'Document', value: 'Document' },
    { label: 'Text', value: 'Text' },
    { label: 'Picture', value: 'Picture' },
    { label: 'Video', value: 'Video' }
];

export default function FilterBasicDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({});
    const [filters, setFilters] = React.useState<Record<string, { value: unknown; matchMode: FilterMatchMode }>>({
        name: { value: null, matchMode: FilterMatchMode.Contains },
        type: { value: null, matchMode: FilterMatchMode.Equals }
    });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData());
    }, []);

    return (
        <div className="w-full">
            <div className="mb-3 flex justify-end">
                <IconField.Root className="w-full sm:max-w-xs">
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        type="search"
                        placeholder="Keyword search"
                        value={globalFilter}
                        onChange={(e: any) => setGlobalFilter(e.target.value)}
                        className="w-full"
                    />
                </IconField.Root>
            </div>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                filters={filters}
                onFilter={(e: { filters: Record<string, unknown> }) => setFilters(e.filters as typeof filters)}
                globalFilter={globalFilter}
                globalFilterFields={['name', 'type']}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="name" display="row" dataType="text">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <InputText
                                                value={(value as string) ?? ''}
                                                onChange={(e: any) => onChange(e, e.target.value)}
                                                placeholder="Search name..."
                                                size="small"
                                                fluid
                                            />
                                        )}
                                    </DataTable.Filter>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell />
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="type" display="row">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <Select.Root
                                                value={(value as string) ?? ''}
                                                onValueChange={(e: SelectValueChangeEvent) => onChange({} as React.SyntheticEvent, e.value || null)}
                                                options={typeOptions}
                                                optionLabel="label"
                                                optionValue="value"
                                                size="small"
                                                fluid
                                            >
                                                <Select.Trigger className="w-full">
                                                    <Select.Value placeholder="Any" />
                                                    <Select.Indicator>
                                                        <ChevronDown />
                                                    </Select.Indicator>
                                                </Select.Trigger>
                                                <Select.Portal>
                                                    <Select.Positioner>
                                                        <Select.Popup>
                                                            <Select.List />
                                                        </Select.Popup>
                                                    </Select.Positioner>
                                                </Select.Portal>
                                            </Select.Root>
                                        )}
                                    </DataTable.Filter>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

#### Advanced

`display="menu"` swaps the inline input for a trigger icon that opens a popover with multiple constraints, match mode, operator, and Apply/Clear buttons.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { File } from '@primeicons/react/file';
import { Filter as FilterIcon } from '@primeicons/react/filter';
import { FilterSlash } from '@primeicons/react/filter-slash';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Plus } from '@primeicons/react/plus';
import { Search } from '@primeicons/react/search';
import { Trash } from '@primeicons/react/trash';
import { Video } from '@primeicons/react/video';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import { FilterMatchMode, FilterOperator } from '@primereact/ui/datatable';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import type { DataTableFilterInstance } from '@primereact/ui/datatable';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Popover, type PopoverRootOpenChangeEvent } from '@primereact/ui/popover';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

const operatorOptions = [
    { label: 'Match All (AND)', value: 'and' },
    { label: 'Match Any (OR)', value: 'or' }
];

const typeOptions = [
    { label: 'Any', value: '' },
    { label: 'Folder', value: 'Folder' },
    { label: 'Document', value: 'Document' },
    { label: 'Text', value: 'Text' },
    { label: 'Picture', value: 'Picture' },
    { label: 'Video', value: 'Video' }
];

function FilterSelect<T extends string>({
    value,
    onChange,
    options,
    placeholder
}: {
    value: T;
    onChange: (value: T) => void;
    options: { label: string; value: T }[];
    placeholder?: string;
}) {
    return (
        <Select.Root
            value={value}
            onValueChange={(e: SelectValueChangeEvent) => onChange(e.value as T)}
            options={options}
            optionLabel="label"
            optionValue="value"
            size="small"
            style={{ width: '100%' }}
        >
            <Select.Trigger>
                <Select.Value placeholder={placeholder} />
                <Select.Indicator>
                    <ChevronDown />
                </Select.Indicator>
            </Select.Trigger>
            <Select.Portal>
                <Select.Positioner>
                    <Select.Popup>
                        <Select.List />
                    </Select.Popup>
                </Select.Positioner>
            </Select.Portal>
        </Select.Root>
    );
}

function FilterPopover({
    isActive,
    open,
    onOpenChange,
    children
}: {
    isActive: boolean;
    open: boolean;
    onOpenChange: (event: PopoverRootOpenChangeEvent) => void;
    children: React.ReactNode;
}) {
    return (
        <Popover.Root open={open} onOpenChange={onOpenChange}>
            <Popover.Trigger as={Button} variant="text" severity={isActive ? 'primary' : 'secondary'} size="small" iconOnly aria-label="Filter">
                {isActive ? <FilterIcon /> : <FilterSlash />}
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Positioner sideOffset={4} side="bottom" align="end">
                    <Popover.Popup className="w-80 p-4">{children}</Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    );
}

function toggleFilterOverlay(
    e: PopoverRootOpenChangeEvent,
    overlayVisible: boolean,
    onToggleOverlay: (event: React.SyntheticEvent) => void,
    onHideOverlay: () => void
) {
    if (e.value === overlayVisible) return;

    if (e.value) {
        const nativeEvent = e.originalEvent;
        const fakeSynthetic = {
            preventDefault: () => nativeEvent?.preventDefault(),
            stopPropagation: () => nativeEvent?.stopPropagation(),
            nativeEvent
        } as unknown as React.SyntheticEvent;

        onToggleOverlay(fakeSynthetic);
    } else {
        onHideOverlay();
    }
}

const DEFAULT_FILTERS = {
    name: { operator: FilterOperator.And, constraints: [{ value: null, matchMode: FilterMatchMode.Contains }] },
    type: { value: null as string | null, matchMode: FilterMatchMode.Equals }
};

export default function FilterAdvancedDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [filters, setFilters] = React.useState(DEFAULT_FILTERS);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData());
    }, []);

    const clearAll = () => {
        setFilters(DEFAULT_FILTERS);
        setGlobalFilter('');
    };

    return (
        <div className="w-full">
            <div className="mb-3 flex items-center justify-between gap-3">
                <Button variant="outlined" size="small" onClick={clearAll}>
                    <FilterSlash /> Clear Filters
                </Button>
                <IconField.Root className="w-full sm:max-w-xs">
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        type="search"
                        placeholder="Keyword search"
                        value={globalFilter}
                        onChange={(e: any) => setGlobalFilter(e.target.value)}
                        className="w-full"
                    />
                </IconField.Root>
            </div>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                filters={filters}
                onFilter={(e: { filters: Record<string, unknown> }) => setFilters(e.filters as typeof filters)}
                globalFilter={globalFilter}
                globalFilterFields={['name', 'type']}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                        <DataTable.Filter field="name" display="menu" dataType="text" maxConstraints={3}>
                                            {({
                                                constraints,
                                                operator,
                                                matchModeOptions,
                                                isActive,
                                                overlayVisible,
                                                onToggleOverlay,
                                                onHideOverlay,
                                                onOperatorChange,
                                                onConstraintChange,
                                                onMatchModeChange,
                                                onAddConstraint,
                                                onRemoveConstraint,
                                                onClear,
                                                onApply,
                                                canAddConstraint,
                                                canRemoveConstraint
                                            }: DataTableFilterInstance) => (
                                                <FilterPopover
                                                    isActive={isActive}
                                                    open={overlayVisible}
                                                    onOpenChange={(e) => toggleFilterOverlay(e, overlayVisible, onToggleOverlay, onHideOverlay)}
                                                >
                                                    <div className="mb-3 flex items-center justify-between gap-2">
                                                        <span className="text-sm font-semibold">Filter by Name</span>
                                                        {!canRemoveConstraint && (
                                                            <span className="text-xs text-surface-500 dark:text-surface-400">Up to 3 rules</span>
                                                        )}
                                                    </div>
                                                    <div className="mb-3">
                                                        <FilterSelect
                                                            value={operator}
                                                            onChange={(v) => onOperatorChange({} as React.SyntheticEvent, v as 'and' | 'or')}
                                                            options={operatorOptions}
                                                        />
                                                    </div>
                                                    {constraints.map((constraint, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="mb-3 p-3 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900"
                                                        >
                                                            <div className="flex items-center justify-between gap-2 mb-2">
                                                                <span className="text-xs uppercase tracking-wider text-surface-500 dark:text-surface-400">
                                                                    Rule {idx + 1}
                                                                </span>
                                                                {canRemoveConstraint && (
                                                                    <Button
                                                                        variant="text"
                                                                        severity="secondary"
                                                                        size="small"
                                                                        iconOnly
                                                                        onClick={(e: React.MouseEvent) => onRemoveConstraint(e, idx)}
                                                                        aria-label="Remove rule"
                                                                    >
                                                                        <Trash />
                                                                    </Button>
                                                                )}
                                                            </div>
                                                            <div className="mb-2">
                                                                <FilterSelect
                                                                    value={constraint.matchMode as string}
                                                                    onChange={(v) => onMatchModeChange({} as React.SyntheticEvent, idx, v)}
                                                                    options={matchModeOptions.map((o) => ({
                                                                        label: o.label,
                                                                        value: o.value as string
                                                                    }))}
                                                                />
                                                            </div>
                                                            <InputText
                                                                value={(constraint.value as string) ?? ''}
                                                                onChange={(e: any) => onConstraintChange(e, idx, e.target.value)}
                                                                placeholder="Search by name..."
                                                                size="small"
                                                                fluid
                                                            />
                                                        </div>
                                                    ))}
                                                    {canAddConstraint && (
                                                        <Button variant="outlined" size="small" onClick={onAddConstraint} className="w-full mb-3">
                                                            <Plus /> Add Rule
                                                        </Button>
                                                    )}
                                                    <div className="flex gap-2 justify-end">
                                                        <Button variant="outlined" size="small" onClick={onClear}>
                                                            Clear
                                                        </Button>
                                                        <Button
                                                            size="small"
                                                            onClick={(e: React.MouseEvent) => {
                                                                onApply(e);
                                                                onHideOverlay();
                                                            }}
                                                        >
                                                            Apply
                                                        </Button>
                                                    </div>
                                                </FilterPopover>
                                            )}
                                        </DataTable.Filter>
                                    </div>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                        <DataTable.Filter field="type" display="menu">
                                            {({
                                                value,
                                                isActive,
                                                overlayVisible,
                                                onToggleOverlay,
                                                onHideOverlay,
                                                onChange,
                                                onClear,
                                                onApply
                                            }: DataTableFilterInstance) => (
                                                <FilterPopover
                                                    isActive={isActive}
                                                    open={overlayVisible}
                                                    onOpenChange={(e) => toggleFilterOverlay(e, overlayVisible, onToggleOverlay, onHideOverlay)}
                                                >
                                                    <div className="mb-3">
                                                        <span className="text-sm font-semibold">Filter by Type</span>
                                                    </div>
                                                    <div className="mb-3">
                                                        <FilterSelect
                                                            value={(value as string) ?? ''}
                                                            onChange={(v) => onChange({} as React.SyntheticEvent, v || null, 'equals')}
                                                            options={typeOptions}
                                                            placeholder="Any"
                                                        />
                                                    </div>
                                                    <div className="flex gap-2 justify-end">
                                                        <Button variant="outlined" size="small" onClick={onClear}>
                                                            Clear
                                                        </Button>
                                                        <Button
                                                            size="small"
                                                            onClick={(e: React.MouseEvent) => {
                                                                onApply(e);
                                                                onHideOverlay();
                                                            }}
                                                        >
                                                            Apply
                                                        </Button>
                                                    </div>
                                                </FilterPopover>
                                            )}
                                        </DataTable.Filter>
                                    </div>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Export

Only expanded (visible) rows are exported to CSV.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { FileExport } from '@primeicons/react/file-export';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function ExportDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-sm text-surface-500 dark:text-surface-400">Only expanded (visible) rows are exported.</span>
                <DataTable.Export as={Button} size="small" fileName="files" headers={{ name: 'Name', size: 'Size', type: 'Type' }}>
                    <FileExport />
                    Export CSV
                </DataTable.Export>
            </div>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Lazy Loading

Fetch each branch on demand when the user expands it.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Skeleton } from '@primereact/ui/skeleton';
import * as React from 'react';

interface LazyNode {
    key: string;
    data: {
        name: string;
        size: string;
        type: string;
    };
    leaf?: boolean;
    children?: LazyNode[];
}

const rootNodes: LazyNode[] = [
    { key: '0', data: { name: 'Applications', size: '100kb', type: 'Folder' }, leaf: false },
    { key: '1', data: { name: 'Cloud', size: '20kb', type: 'Folder' }, leaf: false },
    { key: '2', data: { name: 'Desktop', size: '150kb', type: 'Folder' }, leaf: false },
    { key: '3', data: { name: 'Documents', size: '75kb', type: 'Folder' }, leaf: false }
];

function fetchChildren(parentKey: string): Promise<LazyNode[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const count = 3;
            const children: LazyNode[] = Array.from({ length: count }, (_, i) => ({
                key: `${parentKey}-${i}`,
                data: { name: `File ${parentKey}.${i + 1}`, size: `${(i + 1) * 10}kb`, type: 'Document' },
                leaf: true
            }));

            resolve(children);
        }, 600);
    });
}

function PlaceholderRow() {
    return (
        <DataTable.Row>
            <DataTable.Cell colSpan={3}>
                <Skeleton className="h-5 w-1/2" />
            </DataTable.Cell>
        </DataTable.Row>
    );
}

export default function LazyDemo() {
    const [nodes, setNodes] = React.useState<LazyNode[]>(rootNodes);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({});
    const [loadingKeys, setLoadingKeys] = React.useState<Record<string, boolean>>({});

    const loadChildren = React.useCallback(async (parentKey: string) => {
        setLoadingKeys((p) => ({ ...p, [parentKey]: true }));

        const children = await fetchChildren(parentKey);

        setNodes((prev) => {
            const update = (list: LazyNode[]): LazyNode[] =>
                list.map((n) => (n.key === parentKey ? { ...n, children } : n.children ? { ...n, children: update(n.children) } : n));

            return update(prev);
        });
        setLoadingKeys((p) => {
            const { [parentKey]: _, ...rest } = p;

            return rest;
        });
    }, []);

    const onExpandedChange = React.useCallback(
        (e: DataTableExpansionEvent) => {
            setExpandedKeys(e.value);

            const findNode = (list: LazyNode[], key: string): LazyNode | undefined => {
                for (const n of list) {
                    if (n.key === key) return n;

                    if (n.children) {
                        const f = findNode(n.children, key);

                        if (f) return f;
                    }
                }

                return undefined;
            };

            Object.keys(e.value).forEach((key) => {
                const node = findNode(nodes, key);

                if (node && !node.leaf && !node.children && !loadingKeys[key]) {
                    loadChildren(key);
                }
            });
        },
        [nodes, loadingKeys, loadChildren]
    );

    return (
        <div className="w-full">
            <DataTable.Root data={nodes} dataKey="key" treeMode expandedKeys={expandedKeys} onExpandedChange={onExpandedChange}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => {
                                const isLoading = loadingKeys[item.key] && expandedKeys[item.key];

                                return (
                                    <React.Fragment key={String(item.key)}>
                                        <DataTable.Row>
                                            <DataTable.Cell>
                                                <div className="flex items-center gap-2">
                                                    <DataTable.RowToggle>
                                                        <DataTable.RowToggleIndicator match="expanded">
                                                            <ChevronDown />
                                                        </DataTable.RowToggleIndicator>
                                                        <DataTable.RowToggleIndicator match="collapsed">
                                                            <ChevronRight />
                                                        </DataTable.RowToggleIndicator>
                                                    </DataTable.RowToggle>
                                                    <span>{String(item.name)}</span>
                                                </div>
                                            </DataTable.Cell>
                                            <DataTable.Cell>{String(item.size)}</DataTable.Cell>
                                            <DataTable.Cell>{String(item.type)}</DataTable.Cell>
                                        </DataTable.Row>
                                        {isLoading ? <PlaceholderRow /> : null}
                                    </React.Fragment>
                                );
                            }}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Loading

#### Overlay

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Refresh } from '@primeicons/react/refresh';
import { Spinner } from '@primeicons/react/spinner';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Video } from '@primeicons/react/video';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

export default function LoadingOverlayDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
    }, []);

    const refresh = React.useCallback(() => {
        setLoading(true);
        setTimeout(() => {
            setNodes(NodeService.getTreeTableNodesData().slice(0, 5));
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className="w-full">
            <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-sm text-surface-500 dark:text-surface-400">Click refresh to simulate a network fetch.</span>
                <Button size="small" onClick={refresh} disabled={loading}>
                    <Refresh />
                    Refresh
                </Button>
            </div>
            <div className="relative">
                <DataTable.Root
                    data={nodes}
                    dataKey="key"
                    treeMode
                    expandedKeys={expandedKeys}
                    onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                    loading={loading}
                >
                    <DataTable.TableContainer>
                        <DataTable.Table style={{ minWidth: '40rem' }}>
                            <DataTable.THead>
                                <DataTable.THeadRow>
                                    <DataTable.THeadCell style={{ width: '50%' }}>
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                    </DataTable.THeadCell>
                                    <DataTable.THeadCell style={{ width: '20%' }}>
                                        <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                    </DataTable.THeadCell>
                                    <DataTable.THeadCell style={{ width: '30%' }}>
                                        <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                    </DataTable.THeadCell>
                                </DataTable.THeadRow>
                            </DataTable.THead>
                            <DataTable.TBody>
                                {({ item }: { item: any }) => (
                                    <DataTable.Row key={String(item.key)}>
                                        <DataTable.Cell>
                                            <div className="flex items-center gap-2">
                                                <DataTable.RowToggle>
                                                    <DataTable.RowToggleIndicator match="expanded">
                                                        <ChevronDown />
                                                    </DataTable.RowToggleIndicator>
                                                    <DataTable.RowToggleIndicator match="collapsed">
                                                        <ChevronRight />
                                                    </DataTable.RowToggleIndicator>
                                                </DataTable.RowToggle>
                                                <TypeIcon type={String(item.type)} />
                                                <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                            </div>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                )}
                            </DataTable.TBody>
                        </DataTable.Table>
                    </DataTable.TableContainer>
                    <DataTable.Loading>
                        <div className="flex flex-col items-center gap-2">
                            <Spinner className="w-10! h-10! animate-spin text-primary" />
                            <span className="text-sm text-surface-600 dark:text-surface-300">Loading nodes…</span>
                        </div>
                    </DataTable.Loading>
                </DataTable.Root>
            </div>
        </div>
    );
}

```

#### Skeleton

```tsx
'use client';
import { DataTable } from '@primereact/ui/datatable';
import { Skeleton } from '@primereact/ui/skeleton';
import * as React from 'react';

const placeholders = Array.from({ length: 5 }, (_, i) => ({ key: String(i) }));

export default function LoadingSkeletonDemo() {
    return (
        <div className="w-full">
            <DataTable.Root data={placeholders} dataKey="key" treeMode>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <Skeleton className="h-5 w-3/4" />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Skeleton className="h-5 w-1/3" />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Skeleton className="h-5 w-1/2" />
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Empty State

Use `EmptyTBody` for a custom empty-state view.

```tsx
'use client';
import { Folder } from '@primeicons/react/folder';
import { Plus } from '@primeicons/react/plus';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';

export default function EmptyDemo() {
    return (
        <div className="w-full">
            <DataTable.Root data={[]} dataKey="key" treeMode>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>{String(item.name)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.size)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.type)}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                                        <div className="w-14 h-14 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                            <Folder className="w-7 h-7 text-surface-400 dark:text-surface-500" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">No folders yet</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Create your first folder to start building a tree.
                                            </p>
                                        </div>
                                        <Button size="small">
                                            <Plus />
                                            New Folder
                                        </Button>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Advanced

Sort, filter (per-column + global), and cell editing composed in a single tree.

```tsx
'use client';
import { NodeService, type TreeTableNode } from '@/shared/services/node.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Database } from '@primeicons/react/database';
import { File } from '@primeicons/react/file';
import { Folder } from '@primeicons/react/folder';
import { Image as ImageIcon } from '@primeicons/react/image';
import { Search } from '@primeicons/react/search';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { Video } from '@primeicons/react/video';
import { FilterMatchMode } from '@primereact/ui/datatable';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import type { DataTableFilterInstance } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const typeSeverity: Record<string, 'info' | 'warn' | 'success' | 'secondary'> = {
    Folder: 'warn',
    Document: 'info',
    Resume: 'info',
    Text: 'secondary',
    Application: 'info',
    Picture: 'success',
    Video: 'success',
    Zip: 'secondary',
    PDF: 'info',
    Link: 'secondary'
};

function TypeIcon({ type }: { type: string }) {
    if (type === 'Picture') return <ImageIcon size={16} />;
    if (type === 'Video') return <Video size={16} />;
    if (type === 'Folder') return <Folder size={16} />;

    return <File size={16} />;
}

const typeOptions = [
    { label: 'Any', value: '' },
    { label: 'Folder', value: 'Folder' },
    { label: 'Document', value: 'Document' },
    { label: 'Text', value: 'Text' },
    { label: 'Picture', value: 'Picture' },
    { label: 'Video', value: 'Video' }
];

function SortableHeader({ field, children }: { field: string; children: React.ReactNode }) {
    return (
        <DataTable.Sort field={field} className="inline-flex items-center gap-1">
            {children}
            <DataTable.SortIndicator match="unsorted">
                <SortAlt />
            </DataTable.SortIndicator>
            <DataTable.SortIndicator match="asc">
                <SortAmountUpAlt />
            </DataTable.SortIndicator>
            <DataTable.SortIndicator match="desc">
                <SortAmountDown />
            </DataTable.SortIndicator>
        </DataTable.Sort>
    );
}

function updateNode(nodes: TreeTableNode[], key: string, field: string, value: unknown): TreeTableNode[] {
    return nodes.map((n) => {
        if (n.key === key) return { ...n, data: { ...n.data, [field]: value } };

        if (n.children) return { ...n, children: updateNode(n.children, key, field, value) };

        return n;
    });
}

export default function AdvancedDemo() {
    const [nodes, setNodes] = React.useState<TreeTableNode[]>([]);
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({ '0': true });
    const [filters, setFilters] = React.useState<Record<string, { value: unknown; matchMode: FilterMatchMode }>>({
        name: { value: null, matchMode: FilterMatchMode.Contains },
        type: { value: null, matchMode: FilterMatchMode.Equals }
    });
    const pendingValueRef = React.useRef<Record<string, string>>({});

    React.useEffect(() => {
        setNodes(NodeService.getTreeTableNodesData().slice(0, 6));
    }, []);

    const handleCellEditComplete = React.useCallback((e: { rowIndex: number; field: string; rowData?: Record<string, unknown> }) => {
        const key = e.rowData?.key as string | undefined;

        if (!key) return;

        const editKey = `${key}-${e.field}`;
        const next = pendingValueRef.current[editKey];

        if (next === undefined) return;

        setNodes((prev) => updateNode(prev, key, e.field, next));
        delete pendingValueRef.current[editKey];
    }, []);

    return (
        <div className="w-full">
            <div className="mb-3 flex justify-end">
                <IconField.Root className="w-full sm:max-w-xs">
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        type="search"
                        placeholder="Keyword search"
                        value={globalFilter}
                        onChange={(e: any) => setGlobalFilter(e.target.value)}
                        className="w-full"
                    />
                </IconField.Root>
            </div>
            <DataTable.Root
                data={nodes}
                dataKey="key"
                treeMode
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
                removableSort
                filters={filters}
                onFilter={(e: { filters: Record<string, unknown> }) => setFilters(e.filters as typeof filters)}
                globalFilter={globalFilter}
                globalFilterFields={['name', 'type']}
                editMode="cell"
                onCellEditComplete={handleCellEditComplete}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '40rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '50%' }}>
                                    <SortableHeader field="name">
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <SortableHeader field="size">
                                        <DataTable.THeadTitle>Size</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <SortableHeader field="type">
                                        <DataTable.THeadTitle>Type</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="name" display="row" dataType="text">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <InputText
                                                value={(value as string) ?? ''}
                                                onChange={(e: any) => onChange(e, e.target.value)}
                                                placeholder="Search"
                                                size="small"
                                                fluid
                                            />
                                        )}
                                    </DataTable.Filter>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell />
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="type" display="row">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <Select.Root
                                                value={(value as string) ?? ''}
                                                onValueChange={(e: SelectValueChangeEvent) => onChange({} as React.SyntheticEvent, e.value || null)}
                                                options={typeOptions}
                                                optionLabel="label"
                                                optionValue="value"
                                                size="small"
                                                fluid
                                            >
                                                <Select.Trigger className="w-full">
                                                    <Select.Value placeholder="Any" />
                                                    <Select.Indicator>
                                                        <ChevronDown />
                                                    </Select.Indicator>
                                                </Select.Trigger>
                                                <Select.Portal>
                                                    <Select.Positioner>
                                                        <Select.Popup>
                                                            <Select.List />
                                                        </Select.Popup>
                                                    </Select.Positioner>
                                                </Select.Portal>
                                            </Select.Root>
                                        )}
                                    </DataTable.Filter>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={String(item.key)}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                            <TypeIcon type={String(item.type)} />
                                            <DataTable.CellEditor field="name" rowIndex={index} rowData={item} style={{ flex: 1 }}>
                                                <DataTable.CellEditorDisplay>
                                                    <span className={item.type === 'Folder' ? 'font-medium' : ''}>{String(item.name)}</span>
                                                </DataTable.CellEditorDisplay>
                                                <DataTable.CellEditorContent>
                                                    <InputText
                                                        defaultValue={String(item.name)}
                                                        onChange={(e: any) => {
                                                            pendingValueRef.current[`${item.key}-name`] = e.target.value;
                                                        }}
                                                        size="small"
                                                        fluid
                                                    />
                                                </DataTable.CellEditorContent>
                                            </DataTable.CellEditor>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="size" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <span className="text-sm text-surface-500 dark:text-surface-400">{String(item.size)}</span>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={String(item.size)}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${item.key}-size`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={typeSeverity[String(item.type)] ?? 'secondary'}>{String(item.type)}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={3}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Loading tree</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">Hang tight, the data is on its way.</p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

## Related

### Theming

TreeTable inherits every theme token, CSS class, and pass-through target from the [DataTable](datatable.md) theme. The parts you'll most likely customise when theming TreeTable:

- `DataTable.RowToggle`, the chevron button on the first column (`data-part="row-toggle"`).
- `DataTable.RowToggleIndicator`, the icon slot, matched by `match="expanded"` and `match="collapsed"`.
- Row-level `_treeLevel` drives the default left padding via CSS. Override per-level spacing by styling on the `aria-level="<n+1>"` attribute rendered on `<tr>`.

### Sub-Components

See [DataTable Primitive](../../primitive/components/datatable.md#api) for the full sub-component API, TreeTable uses the same primitives.

### Hooks

See [useDataTable](../../headless/components/datatable.md#api) for the headless hook API.

### Accessibility

See [DataTable Primitive](../../primitive/components/datatable.md#accessibility) for WAI-ARIA compliance details and keyboard support. Tree-specific ARIA attributes (`aria-level`, `aria-expanded`, `aria-posinset`, `aria-setsize`) are wired automatically.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-datatable | Class name of the root element |
| p-datatable-table-container | Class name of the table container element |
| p-datatable-table | Class name of the table element |
| p-datatable-header | Class name of the header element |
| p-datatable-header-row | Class name of the header row element |
| p-datatable-header-cell | Class name of the header cell element |
| p-datatable-body | Class name of the body element |
| p-datatable-row | Class name of the row element |
| p-datatable-cell | Class name of the cell element |
| p-datatable-footer | Class name of the footer element |
| p-datatable-footer-row | Class name of the footer row element |
| p-datatable-footer-cell | Class name of the footer cell element |
| p-datatable-empty | Class name of the empty element |
| p-datatable-sort | Class name of the sort element |
| p-datatable-sort-icon | Class name of the sort icon element |
| p-datatable-pagination | Class name of the pagination element |
| p-datatable-loading | Class name of the loading overlay element |
| p-datatable-row-toggle | Class name of the row toggle element |
| p-datatable-row-expansion | Class name of the row expansion element |
| p-datatable-row-group | Class name of the row group element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| datatable.transition.duration | --p-datatable-transition-duration | Transition duration of root |
| datatable.border.color | --p-datatable-border-color | Border color of root |
| datatable.header.background | --p-datatable-header-background | Background of header |
| datatable.header.border.color | --p-datatable-header-border-color | Border color of header |
| datatable.header.color | --p-datatable-header-color | Color of header |
| datatable.header.border.width | --p-datatable-header-border-width | Border width of header |
| datatable.header.padding | --p-datatable-header-padding | Padding of header |
| datatable.header.sm.padding | --p-datatable-header-sm-padding | Sm padding of header |
| datatable.header.lg.padding | --p-datatable-header-lg-padding | Lg padding of header |
| datatable.header.cell.background | --p-datatable-header-cell-background | Background of header cell |
| datatable.header.cell.hover.background | --p-datatable-header-cell-hover-background | Hover background of header cell |
| datatable.header.cell.selected.background | --p-datatable-header-cell-selected-background | Selected background of header cell |
| datatable.header.cell.border.color | --p-datatable-header-cell-border-color | Border color of header cell |
| datatable.header.cell.color | --p-datatable-header-cell-color | Color of header cell |
| datatable.header.cell.hover.color | --p-datatable-header-cell-hover-color | Hover color of header cell |
| datatable.header.cell.selected.color | --p-datatable-header-cell-selected-color | Selected color of header cell |
| datatable.header.cell.gap | --p-datatable-header-cell-gap | Gap of header cell |
| datatable.header.cell.padding | --p-datatable-header-cell-padding | Padding of header cell |
| datatable.header.cell.focus.ring.width | --p-datatable-header-cell-focus-ring-width | Focus ring width of header cell |
| datatable.header.cell.focus.ring.style | --p-datatable-header-cell-focus-ring-style | Focus ring style of header cell |
| datatable.header.cell.focus.ring.color | --p-datatable-header-cell-focus-ring-color | Focus ring color of header cell |
| datatable.header.cell.focus.ring.offset | --p-datatable-header-cell-focus-ring-offset | Focus ring offset of header cell |
| datatable.header.cell.focus.ring.shadow | --p-datatable-header-cell-focus-ring-shadow | Focus ring shadow of header cell |
| datatable.header.cell.sm.padding | --p-datatable-header-cell-sm-padding | Sm padding of header cell |
| datatable.header.cell.lg.padding | --p-datatable-header-cell-lg-padding | Lg padding of header cell |
| datatable.column.title.font.weight | --p-datatable-column-title-font-weight | Font weight of column title |
| datatable.column.title.font.size | --p-datatable-column-title-font-size | Font size of column title |
| datatable.row.background | --p-datatable-row-background | Background of row |
| datatable.row.hover.background | --p-datatable-row-hover-background | Hover background of row |
| datatable.row.selected.background | --p-datatable-row-selected-background | Selected background of row |
| datatable.row.color | --p-datatable-row-color | Color of row |
| datatable.row.hover.color | --p-datatable-row-hover-color | Hover color of row |
| datatable.row.selected.color | --p-datatable-row-selected-color | Selected color of row |
| datatable.row.focus.ring.width | --p-datatable-row-focus-ring-width | Focus ring width of row |
| datatable.row.focus.ring.style | --p-datatable-row-focus-ring-style | Focus ring style of row |
| datatable.row.focus.ring.color | --p-datatable-row-focus-ring-color | Focus ring color of row |
| datatable.row.focus.ring.offset | --p-datatable-row-focus-ring-offset | Focus ring offset of row |
| datatable.row.focus.ring.shadow | --p-datatable-row-focus-ring-shadow | Focus ring shadow of row |
| datatable.row.striped.background | --p-datatable-row-striped-background | Striped background of row |
| datatable.body.cell.border.color | --p-datatable-body-cell-border-color | Border color of body cell |
| datatable.body.cell.padding | --p-datatable-body-cell-padding | Padding of body cell |
| datatable.body.cell.sm.padding | --p-datatable-body-cell-sm-padding | Sm padding of body cell |
| datatable.body.cell.lg.padding | --p-datatable-body-cell-lg-padding | Lg padding of body cell |
| datatable.body.cell.selected.border.color | --p-datatable-body-cell-selected-border-color | Selected border color of body cell |
| datatable.body.cell.font.weight | --p-datatable-body-cell-font-weight | Font weight of body cell |
| datatable.body.cell.font.size | --p-datatable-body-cell-font-size | Font size of body cell |
| datatable.footer.cell.background | --p-datatable-footer-cell-background | Background of footer cell |
| datatable.footer.cell.border.color | --p-datatable-footer-cell-border-color | Border color of footer cell |
| datatable.footer.cell.color | --p-datatable-footer-cell-color | Color of footer cell |
| datatable.footer.cell.padding | --p-datatable-footer-cell-padding | Padding of footer cell |
| datatable.footer.cell.sm.padding | --p-datatable-footer-cell-sm-padding | Sm padding of footer cell |
| datatable.footer.cell.lg.padding | --p-datatable-footer-cell-lg-padding | Lg padding of footer cell |
| datatable.column.footer.font.weight | --p-datatable-column-footer-font-weight | Font weight of column footer |
| datatable.column.footer.font.size | --p-datatable-column-footer-font-size | Font size of column footer |
| datatable.footer.background | --p-datatable-footer-background | Background of footer |
| datatable.footer.border.color | --p-datatable-footer-border-color | Border color of footer |
| datatable.footer.color | --p-datatable-footer-color | Color of footer |
| datatable.footer.border.width | --p-datatable-footer-border-width | Border width of footer |
| datatable.footer.padding | --p-datatable-footer-padding | Padding of footer |
| datatable.footer.sm.padding | --p-datatable-footer-sm-padding | Sm padding of footer |
| datatable.footer.lg.padding | --p-datatable-footer-lg-padding | Lg padding of footer |
| datatable.drop.point.color | --p-datatable-drop-point-color | Color of drop point |
| datatable.column.resizer.width | --p-datatable-column-resizer-width | Width of column resizer |
| datatable.resize.indicator.width | --p-datatable-resize-indicator-width | Width of resize indicator |
| datatable.resize.indicator.color | --p-datatable-resize-indicator-color | Color of resize indicator |
| datatable.sort.icon.color | --p-datatable-sort-icon-color | Color of sort icon |
| datatable.sort.icon.hover.color | --p-datatable-sort-icon-hover-color | Hover color of sort icon |
| datatable.sort.icon.size | --p-datatable-sort-icon-size | Size of sort icon |
| datatable.loading.icon.size | --p-datatable-loading-icon-size | Size of loading icon |
| datatable.row.toggle.button.hover.background | --p-datatable-row-toggle-button-hover-background | Hover background of row toggle button |
| datatable.row.toggle.button.selected.hover.background | --p-datatable-row-toggle-button-selected-hover-background | Selected hover background of row toggle button |
| datatable.row.toggle.button.color | --p-datatable-row-toggle-button-color | Color of row toggle button |
| datatable.row.toggle.button.hover.color | --p-datatable-row-toggle-button-hover-color | Hover color of row toggle button |
| datatable.row.toggle.button.selected.hover.color | --p-datatable-row-toggle-button-selected-hover-color | Selected hover color of row toggle button |
| datatable.row.toggle.button.size | --p-datatable-row-toggle-button-size | Size of row toggle button |
| datatable.row.toggle.button.border.radius | --p-datatable-row-toggle-button-border-radius | Border radius of row toggle button |
| datatable.row.toggle.button.focus.ring.width | --p-datatable-row-toggle-button-focus-ring-width | Focus ring width of row toggle button |
| datatable.row.toggle.button.focus.ring.style | --p-datatable-row-toggle-button-focus-ring-style | Focus ring style of row toggle button |
| datatable.row.toggle.button.focus.ring.color | --p-datatable-row-toggle-button-focus-ring-color | Focus ring color of row toggle button |
| datatable.row.toggle.button.focus.ring.offset | --p-datatable-row-toggle-button-focus-ring-offset | Focus ring offset of row toggle button |
| datatable.row.toggle.button.focus.ring.shadow | --p-datatable-row-toggle-button-focus-ring-shadow | Focus ring shadow of row toggle button |
| datatable.filter.inline.gap | --p-datatable-filter-inline-gap | Inline gap of filter |
| datatable.filter.overlay.select.background | --p-datatable-filter-overlay-select-background | Overlay select background of filter |
| datatable.filter.overlay.select.border.color | --p-datatable-filter-overlay-select-border-color | Overlay select border color of filter |
| datatable.filter.overlay.select.border.radius | --p-datatable-filter-overlay-select-border-radius | Overlay select border radius of filter |
| datatable.filter.overlay.select.color | --p-datatable-filter-overlay-select-color | Overlay select color of filter |
| datatable.filter.overlay.select.shadow | --p-datatable-filter-overlay-select-shadow | Overlay select shadow of filter |
| datatable.filter.overlay.popover.background | --p-datatable-filter-overlay-popover-background | Overlay popover background of filter |
| datatable.filter.overlay.popover.border.color | --p-datatable-filter-overlay-popover-border-color | Overlay popover border color of filter |
| datatable.filter.overlay.popover.border.radius | --p-datatable-filter-overlay-popover-border-radius | Overlay popover border radius of filter |
| datatable.filter.overlay.popover.color | --p-datatable-filter-overlay-popover-color | Overlay popover color of filter |
| datatable.filter.overlay.popover.shadow | --p-datatable-filter-overlay-popover-shadow | Overlay popover shadow of filter |
| datatable.filter.overlay.popover.padding | --p-datatable-filter-overlay-popover-padding | Overlay popover padding of filter |
| datatable.filter.overlay.popover.gap | --p-datatable-filter-overlay-popover-gap | Overlay popover gap of filter |
| datatable.filter.rule.border.color | --p-datatable-filter-rule-border-color | Rule border color of filter |
| datatable.filter.constraint.list.padding | --p-datatable-filter-constraint-list-padding | Constraint list padding of filter |
| datatable.filter.constraint.list.gap | --p-datatable-filter-constraint-list-gap | Constraint list gap of filter |
| datatable.filter.constraint.focus.background | --p-datatable-filter-constraint-focus-background | Constraint focus background of filter |
| datatable.filter.constraint.selected.background | --p-datatable-filter-constraint-selected-background | Constraint selected background of filter |
| datatable.filter.constraint.selected.focus.background | --p-datatable-filter-constraint-selected-focus-background | Constraint selected focus background of filter |
| datatable.filter.constraint.color | --p-datatable-filter-constraint-color | Constraint color of filter |
| datatable.filter.constraint.focus.color | --p-datatable-filter-constraint-focus-color | Constraint focus color of filter |
| datatable.filter.constraint.selected.color | --p-datatable-filter-constraint-selected-color | Constraint selected color of filter |
| datatable.filter.constraint.selected.focus.color | --p-datatable-filter-constraint-selected-focus-color | Constraint selected focus color of filter |
| datatable.filter.constraint.separator.border.color | --p-datatable-filter-constraint-separator-border-color | Constraint separator border color of filter |
| datatable.filter.constraint.padding | --p-datatable-filter-constraint-padding | Constraint padding of filter |
| datatable.filter.constraint.border.radius | --p-datatable-filter-constraint-border-radius | Constraint border radius of filter |
| datatable.paginator.top.border.color | --p-datatable-paginator-top-border-color | Border color of paginator top |
| datatable.paginator.top.border.width | --p-datatable-paginator-top-border-width | Border width of paginator top |
| datatable.paginator.bottom.border.color | --p-datatable-paginator-bottom-border-color | Border color of paginator bottom |
| datatable.paginator.bottom.border.width | --p-datatable-paginator-bottom-border-width | Border width of paginator bottom |
