# DataTable

DataTable displays data in tabular format with sorting, filtering, pagination and selection features.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Database } from '@primeicons/react/database';
import { Star } from '@primeicons/react/star';
import { StarFill } from '@primeicons/react/star-fill';
import { DataTable } from '@primereact/ui/datatable';
import { Rating } from '@primereact/ui/rating';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

function ProductRating({ value }: { value: number }) {
    return (
        <Rating.Root value={value} readOnly>
            {Array.from({ length: 5 }).map((_, i) => (
                <Rating.Option key={i} index={i}>
                    <Rating.On>
                        <StarFill />
                    </Rating.On>
                    <Rating.Off>
                        <Star />
                    </Rating.Off>
                </Rating.Option>
            ))}
        </Rating.Root>
    );
}

export default function Preview() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 8));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Rating</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={48}
                                                height={48}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <ProductRating value={item.rating} />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

```tsx
<DataTable.Root data={data}>
    <DataTable.Header />
    <DataTable.TableContainer>
        <DataTable.Table>
            <DataTable.THead>
                <DataTable.THeadRow>
                    <DataTable.THeadCell>Column</DataTable.THeadCell>
                </DataTable.THeadRow>
            </DataTable.THead>
            <DataTable.TBody>
                {({ item }) => (
                    <DataTable.Row>
                        <DataTable.Cell>{item.field}</DataTable.Cell>
                    </DataTable.Row>
                )}
            </DataTable.TBody>
        </DataTable.Table>
    </DataTable.TableContainer>
    <DataTable.Footer />
</DataTable.Root>
```

`DataTable.Header` and `DataTable.Footer` are optional sibling slots around `DataTable.TableContainer` (which is the scrollable wrapper around `DataTable.Table`).

For hierarchical data, see [TreeTable](treetable.md), a sibling component that exposes the same features over a tree structure.

## Examples

### Basic

Displays a list of items in tabular format.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { DataTable } from '@primereact/ui/datatable';
import * as React from 'react';

export default function BasicDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 5));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Code</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Quantity</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>{item.code}</DataTable.Cell>
                                    <DataTable.Cell>{item.name}</DataTable.Cell>
                                    <DataTable.Cell>{item.category}</DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
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

Use the `size` prop with `small` or `large` to adjust cell padding. Omit for the default size.

```tsx
<DataTable.Root size="small">...</DataTable.Root>
```

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import { Avatar } from '@primereact/ui/avatar';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

type Size = 'small' | 'normal' | 'large';

const sizeOptions: { label: string; value: Size }[] = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' }
];

export default function SizeDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [size, setSize] = React.useState<Size>('normal');

    React.useEffect(() => {
        setCustomers(CustomerService.getData().slice(0, 6));
    }, []);

    return (
        <div className="w-full">
            <div className="mb-3">
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
            <DataTable.Root data={customers} size={size === 'normal' ? undefined : size}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <Avatar.Root shape="circle">
                                                <Avatar.Image
                                                    src={`https://primefaces.org/cdn/primevue/images/avatar/${item.representative.image}`}
                                                />
                                                <Avatar.Fallback>{item.representative.name[0]}</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span className="text-sm">{item.representative.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.balance.toLocaleString()}</span>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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
<DataTable.Root showGridlines>...</DataTable.Root>
```

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import { Avatar } from '@primereact/ui/avatar';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function GridlinesDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);

    React.useEffect(() => {
        setCustomers(CustomerService.getData().slice(0, 6));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={customers} showGridlines>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <Avatar.Root shape="circle">
                                                <Avatar.Image
                                                    src={`https://primefaces.org/cdn/primevue/images/avatar/${item.representative.image}`}
                                                />
                                                <Avatar.Fallback>{item.representative.name[0]}</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span className="text-sm">{item.representative.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.balance.toLocaleString()}</span>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

The `stripedRows` prop renders rows with alternating background colors.

```tsx
<DataTable.Root stripedRows>...</DataTable.Root>
```

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import { Avatar } from '@primereact/ui/avatar';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function StripedRowsDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);

    React.useEffect(() => {
        setCustomers(CustomerService.getData().slice(0, 8));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={customers} stripedRows>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <Avatar.Root shape="circle">
                                                <Avatar.Image
                                                    src={`https://primefaces.org/cdn/primevue/images/avatar/${item.representative.image}`}
                                                />
                                                <Avatar.Fallback>{item.representative.name[0]}</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span className="text-sm">{item.representative.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.balance.toLocaleString()}</span>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Row selection is driven by the `selectionMode` prop (`single` or `multiple`). The `selectedKeys` prop holds a map of selected row keys and `onSelectionChange` fires when the selection changes. When `metaKeySelection` is enabled, Ctrl/Cmd + Click toggles rows and Shift + Click selects a range. For checkbox- and radio-driven UIs, the `DataTable.Selection` render prop exposes `isSelected` / `toggle` at row level and `isAllSelected` / `isSomeSelected` / `toggleAll` at header level.

```tsx
<DataTable.Root data={data} dataKey="id" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)}>
    ...
</DataTable.Root>
```

#### Single

One row at a time. Clicking a different row replaces the previous selection.

```tsx
'use client';
import Image from 'next/image';
import { Database } from '@primeicons/react/database';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSelectionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function SingleSelectionDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 8));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={products}
                dataKey="id"
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Multiple rows without a dedicated column. Pair with `metaKeySelection` so Ctrl/Cmd + Click toggles rows and Shift + Click selects a range; a plain click still replaces the selection.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { Database } from '@primeicons/react/database';
import { Trash } from '@primeicons/react/trash';
import type { DataTableSelectionEvent } from '@primereact/ui/datatable';
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function MultipleSelectionDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 8));
    }, []);

    const selectedIds = React.useMemo(() => Object.keys(selectedKeys).filter((k) => selectedKeys[k]), [selectedKeys]);

    const totalValue = React.useMemo(
        () => products.filter((p) => selectedIds.includes(p.id)).reduce((sum, p) => sum + p.price, 0),
        [products, selectedIds]
    );

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-3 mb-3 p-3 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">Selected</span>
                    <Badge severity={selectedIds.length ? 'info' : 'secondary'}>{selectedIds.length}</Badge>
                    {selectedIds.length > 0 && (
                        <span className="text-xs text-surface-500 dark:text-surface-400">
                            Total <span className="font-semibold text-surface-900 dark:text-surface-0">${totalValue}</span>
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outlined" severity="danger" size="small" disabled={!selectedIds.length}>
                        <Trash />
                        Delete
                    </Button>
                    <Button size="small" disabled={!selectedIds.length}>
                        <ShoppingCart />
                        Add to cart
                    </Button>
                </div>
            </div>
            <p className="mb-2 text-xs text-surface-500 dark:text-surface-400">
                Click to replace the selection. Ctrl/Cmd + Click to toggle a row, Shift + Click to select a range.
            </p>
            <DataTable.Root
                data={products}
                dataKey="id"
                selectionMode="multiple"
                metaKeySelection
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Checkbox-based multiple selection with a header select-all. Use the `Selection` render prop to wire `isSelected` / `toggle` for row-level and `isAllSelected` / `isSomeSelected` / `toggleAll` for the header.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Check } from '@primeicons/react/check';
import { Database } from '@primeicons/react/database';
import { Envelope } from '@primeicons/react/envelope';
import { Minus } from '@primeicons/react/minus';
import type { DataTableSelectionEvent } from '@primereact/ui/datatable';
import type { CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import type { DataTableSelectionInstance } from '@primereact/ui/datatable';
import { Avatar } from '@primereact/ui/avatar';
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function CheckboxSelectionDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        setCustomers(CustomerService.getData().slice(0, 8));
    }, []);

    const selectedCount = Object.values(selectedKeys).filter(Boolean).length;

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-3 mb-3 p-3 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">Selected customers</span>
                    <Badge severity={selectedCount ? 'info' : 'secondary'}>{selectedCount}</Badge>
                </div>
                <Button size="small" disabled={!selectedCount}>
                    <Envelope />
                    Email selected
                </Button>
            </div>
            <DataTable.Root
                data={customers}
                dataKey="id"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
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
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <DataTable.Selection>
                                            {({ isSelected, toggle }: DataTableSelectionInstance) => (
                                                <Checkbox.Root
                                                    checked={isSelected}
                                                    onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
                                                >
                                                    <Checkbox.Box>
                                                        <Checkbox.Indicator match="checked">
                                                            <Check />
                                                        </Checkbox.Indicator>
                                                    </Checkbox.Box>
                                                </Checkbox.Root>
                                            )}
                                        </DataTable.Selection>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <Avatar.Root shape="circle">
                                                <Avatar.Image
                                                    src={`https://primefaces.org/cdn/primevue/images/avatar/${item.representative.image}`}
                                                />
                                                <Avatar.Fallback>{item.representative.name[0]}</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span className="text-sm">{item.representative.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.balance.toLocaleString()}</span>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Radio-based single selection. Combine `selectionMode="single"` with the `Selection` render prop in `mode="radio"` on the first cell.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { UserPlus } from '@primeicons/react/user-plus';
import { Database } from '@primeicons/react/database';
import type { DataTableSelectionEvent } from '@primereact/ui/datatable';
import type { DataTableSelectionInstance } from '@primereact/ui/datatable';
import type { RadioButtonRootChangeEvent } from '@primereact/ui/radiobutton';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { RadioButton } from '@primereact/ui/radiobutton';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function RadioSelectionDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        setCustomers(CustomerService.getData().slice(0, 8));
    }, []);

    const selectedId = Object.keys(selectedKeys).find((k) => selectedKeys[k]);
    const selectedCustomer = customers.find((c) => String(c.id) === selectedId);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-3 mb-3 p-3 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Invoice recipient:</span>
                    {selectedCustomer ? (
                        <span className="text-surface-900 dark:text-surface-0">
                            <strong>{selectedCustomer.name}</strong> — {selectedCustomer.company}
                        </span>
                    ) : (
                        <span className="text-surface-500 dark:text-surface-400">Pick a customer to assign</span>
                    )}
                </div>
                <Button size="small" disabled={!selectedCustomer}>
                    <UserPlus />
                    Assign
                </Button>
            </div>
            <DataTable.Root
                data={customers}
                dataKey="id"
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '3rem' }} />
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
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
                                        <span className="font-medium">{item.name}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <Avatar.Root shape="circle">
                                                <Avatar.Image
                                                    src={`https://primefaces.org/cdn/primevue/images/avatar/${item.representative.image}`}
                                                />
                                                <Avatar.Fallback>{item.representative.name[0]}</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span className="text-sm">{item.representative.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.balance.toLocaleString()}</span>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Arrow Up/Down moves focus between rows, Space or Enter toggles the focused row, and Shift + Arrow extends a range. Paired with `selectionMode="multiple"` and `metaKeySelection`, the whole flow is keyboard-driven.

```tsx
'use client';
import Image from 'next/image';
import { Database } from '@primeicons/react/database';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSelectionEvent } from '@primereact/ui/datatable';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function KeyboardDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 8));
    }, []);

    const selectedCount = Object.values(selectedKeys).filter(Boolean).length;

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-3 mb-3 p-3 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900">
                <span className="text-sm text-surface-500 dark:text-surface-400">
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">↑</kbd>{' '}
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">↓</kbd> navigate,{' '}
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">Space</kbd> /{' '}
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">Enter</kbd> select,{' '}
                    <kbd className="px-1.5 py-0.5 text-xs rounded bg-surface-200 dark:bg-surface-700">Shift + ↑↓</kbd> range
                </span>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Selected</span>
                    <Badge severity={selectedCount ? 'info' : 'secondary'}>{selectedCount}</Badge>
                </div>
            </div>
            <DataTable.Root
                data={products}
                dataKey="id"
                selectionMode="multiple"
                metaKeySelection
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={36}
                                                height={36}
                                                className="rounded-md shadow"
                                            />
                                            <span className="font-medium">{item.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Wrap a column header with `DataTable.Sort field="…"` to make it sortable. Inside, `DataTable.SortIndicator match="asc | desc | unsorted"` renders direction icons and `DataTable.SortOrder` shows the priority badge in multi-sort mode. Use `removableSort` to let headers cycle back to the unsorted state.

```tsx
<DataTable.Root data={data} dataKey="id" removableSort>
    <DataTable.THeadCell>
        <DataTable.Sort field="name">
            Name
            <DataTable.SortIndicator match="asc">&#9650;</DataTable.SortIndicator>
            <DataTable.SortIndicator match="desc">&#9660;</DataTable.SortIndicator>
            <DataTable.SortOrder />
        </DataTable.Sort>
    </DataTable.THeadCell>
    ...
</DataTable.Root>
```

#### Single

Clicking a column header cycles through ascending, descending, and unsorted.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSortOrderInstance } from '@primereact/ui/datatable';
import { SortAlt } from '@primeicons/react/sort-alt';
import { Database } from '@primeicons/react/database';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

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
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products} removableSort>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <SortableHeader field="name">
                                        <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="category">
                                        <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTable.THeadTitle>Quantity</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="price">
                                        <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Hold Ctrl/Cmd and click multiple column headers to sort by several fields at once. Each sorted column shows its direction via `SortIndicator` and its priority via `SortOrder`.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSortOrderInstance } from '@primereact/ui/datatable';
import { SortAlt } from '@primeicons/react/sort-alt';
import { Database } from '@primeicons/react/database';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

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
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products} removableSort>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <SortableHeader field="name">
                                        <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="category">
                                        <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTable.THeadTitle>Quantity</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="price">
                                        <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Apply an initial sort on mount. Use `defaultSortField` + `defaultSortOrder` for a single column; headers stay interactive afterwards.

```tsx
<DataTable.Root data={data} dataKey="id" defaultSortField="price" defaultSortOrder={-1} removableSort>
    ...
</DataTable.Root>
```

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSortOrderInstance } from '@primereact/ui/datatable';
import { SortAlt } from '@primeicons/react/sort-alt';
import { Database } from '@primeicons/react/database';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

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

export default function PresortDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products} defaultSortField="price" defaultSortOrder={-1} removableSort>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <SortableHeader field="name">
                                        <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="category">
                                        <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTable.THeadTitle>Quantity</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="price">
                                        <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

For multi-column presort, use `defaultMultiSortMeta` (uncontrolled). Each entry defines a field and direction (`1` ascending, `-1` descending); array order is the sort priority. For fully controlled behaviour, use `multiSortMeta` with `onSortChange` instead.

```tsx
<DataTable.Root
    data={data}
    dataKey="id"
    defaultMultiSortMeta={[
        { field: 'category', order: 1 },
        { field: 'price', order: -1 }
    ]}
    removableSort
>
    ...
</DataTable.Root>
```

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSortOrderInstance } from '@primereact/ui/datatable';
import { SortAlt } from '@primeicons/react/sort-alt';
import { Database } from '@primeicons/react/database';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

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

export default function PresortMultiDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={products}
                defaultMultiSortMeta={[
                    { field: 'category', order: 1 },
                    { field: 'price', order: -1 }
                ]}
                removableSort
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <SortableHeader field="name">
                                        <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="category">
                                        <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTable.THeadTitle>Quantity</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="price">
                                        <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

DataTable exposes pagination state via render prop, allowing complete control over the pagination UI.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { Database } from '@primeicons/react/database';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import type { PaginatorRootChangeEvent } from '@primereact/ui/paginator';
import type { DataTablePaginationInstance } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Paginator } from '@primereact/ui/paginator';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import type { PaginatorPagesInstance } from '@primereact/ui/paginator';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function PaginationDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData());
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products} paginator defaultRows={5}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '10%' }}>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '10%' }}>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Set `scrollable` on `DataTable.Root` to enable scrolling inside `DataTable.TableContainer`; the thead stays sticky at the top. Pair with `scrollHeight` to cap the viewport or let the container grow with its content.

#### Vertical

A fixed `scrollHeight` enables vertical scrolling with a sticky header. Works well when the dataset is taller than the surrounding card.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import { Avatar } from '@primereact/ui/avatar';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function ScrollVerticalDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);

    React.useEffect(() => {
        setCustomers(CustomerService.getData());
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={customers} scrollable scrollHeight="400px">
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <Avatar.Root shape="circle">
                                                <Avatar.Image
                                                    src={`https://primefaces.org/cdn/primevue/images/avatar/${item.representative.image}`}
                                                />
                                                <Avatar.Fallback>{item.representative.name[0]}</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span className="text-sm">{item.representative.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.balance.toLocaleString()}</span>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

When the combined column widths exceed the container, the table scrolls horizontally. Give each column a `minWidth` so the columns don't squeeze.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function ScrollHorizontalDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);

    React.useEffect(() => {
        setCustomers(CustomerService.getData());
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={customers} scrollable scrollHeight="400px">
                <DataTable.TableContainer>
                    <DataTable.Table>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ minWidth: '6rem' }}>
                                    <DataTable.THeadTitle>Id</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '14rem' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '14rem' }}>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '12rem' }}>
                                    <DataTable.THeadTitle>Date</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '10rem' }}>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '14rem' }}>
                                    <DataTable.THeadTitle>Company</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '10rem' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '8rem' }}>
                                    <DataTable.THeadTitle>Activity</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '14rem' }}>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>{item.id}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.country.name}</DataTable.Cell>
                                    <DataTable.Cell>{item.date}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${Number(item.balance).toLocaleString()}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.company}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.activity}%</DataTable.Cell>
                                    <DataTable.Cell>{item.representative.name}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={9}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

`scrollHeight="flex"` lets the viewport grow and shrink with its flex parent, handy inside resizable dialogs or split layouts.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Times } from '@primeicons/react/times';
import { Database } from '@primeicons/react/database';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Dialog } from '@primereact/ui/dialog';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function ScrollFlexDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);

    React.useEffect(() => {
        CustomerService.getCustomersMedium().then(setCustomers);
    }, []);

    return (
        <div className="flex justify-center">
            <Dialog.Root>
                <Dialog.Trigger as={Button}>Show Flex Scroll</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Popup style={{ width: '75vw', height: '480px', display: 'flex', flexDirection: 'column' }}>
                            <Dialog.Header>
                                <Dialog.Title>Flex Scroll</Dialog.Title>
                                <Dialog.HeaderActions>
                                    <Dialog.Close as={Button} rounded variant="text" iconOnly>
                                        <Times />
                                    </Dialog.Close>
                                </Dialog.HeaderActions>
                            </Dialog.Header>
                            <Dialog.Content style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                <DataTable.Root data={customers} scrollable scrollHeight="flex">
                                    <DataTable.TableContainer>
                                        <DataTable.Table style={{ minWidth: '50rem' }}>
                                            <DataTable.THead>
                                                <DataTable.THeadRow>
                                                    <DataTable.THeadCell>
                                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                                    </DataTable.THeadCell>
                                                    <DataTable.THeadCell>
                                                        <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                                    </DataTable.THeadCell>
                                                    <DataTable.THeadCell>
                                                        <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                                    </DataTable.THeadCell>
                                                    <DataTable.THeadCell>
                                                        <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                                    </DataTable.THeadCell>
                                                </DataTable.THeadRow>
                                            </DataTable.THead>
                                            <DataTable.TBody>
                                                {({ item }: { item: any }) => (
                                                    <DataTable.Row key={item.id}>
                                                        <DataTable.Cell>
                                                            <span className="font-medium">{item.name}</span>
                                                        </DataTable.Cell>
                                                        <DataTable.Cell>{item.country.name}</DataTable.Cell>
                                                        <DataTable.Cell>
                                                            <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                                        </DataTable.Cell>
                                                        <DataTable.Cell>
                                                            <span className="font-semibold">${Number(item.balance).toLocaleString()}</span>
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
                                                                <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">
                                                                    Fetching customers
                                                                </p>
                                                                <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                                    Hang tight, your data will appear here in a moment.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </DataTable.Cell>
                                                </DataTable.Row>
                                            </DataTable.EmptyTBody>
                                        </DataTable.Table>
                                    </DataTable.TableContainer>
                                </DataTable.Root>
                            </Dialog.Content>
                        </Dialog.Popup>
                    </Dialog.Positioner>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}

```

#### Frozen Columns

Add `frozen` to a `DataTable.Column` to pin it during horizontal scroll. Pinned columns stick to the left edge while the rest scrolls underneath.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Lock } from '@primeicons/react/lock';
import { Database } from '@primeicons/react/database';
import { LockOpen } from '@primeicons/react/lock-open';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import { ToggleButton, type ToggleButtonRootChangeEvent } from '@primereact/ui/togglebutton';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function ScrollFrozenColumnsDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [balanceFrozen, setBalanceFrozen] = React.useState(false);

    React.useEffect(() => {
        setCustomers(CustomerService.getData());
    }, []);

    return (
        <div className="w-full">
            <div className="mb-3">
                <ToggleButton.Root pressed={balanceFrozen} onPressedChange={(e: ToggleButtonRootChangeEvent) => setBalanceFrozen(e.pressed)}>
                    <ToggleButton.Indicator>
                        {balanceFrozen ? <LockOpen /> : <Lock />}
                        <span className="ml-2">Balance</span>
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </div>
            <DataTable.Root data={customers} scrollable scrollHeight="400px">
                <DataTable.TableContainer>
                    <DataTable.Table>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell frozen style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '100px' }}>
                                    <DataTable.THeadTitle>Id</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Company</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Date</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Activity</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell frozen={balanceFrozen} alignFrozen="right" style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.id)}>
                                    <DataTable.Cell frozen>
                                        <span className="font-semibold">{String(item.name)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{String(item.id)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.company)}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{String(item.date)}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status as string] ?? 'secondary'}>{String(item.status)}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{String(item.activity)}%</DataTable.Cell>
                                    <DataTable.Cell>{String(item.representative.name)}</DataTable.Cell>
                                    <DataTable.Cell frozen={balanceFrozen} alignFrozen="right">
                                        <span className="font-semibold">${Number(item.balance).toLocaleString()}</span>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={9}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Multiple columns can be frozen on both sides, pass `frozenAlignment="right"` to pin to the right edge.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function ScrollFrozenColumnsMultiDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);

    React.useEffect(() => {
        setCustomers(CustomerService.getData());
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={customers} scrollable scrollHeight="400px">
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '1400px' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell frozen style={{ minWidth: '80px' }}>
                                    <DataTable.THeadTitle>Id</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '220px' }}>
                                    <DataTable.THeadTitle>Company</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Date</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Activity</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ minWidth: '200px' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell frozen alignFrozen="right" style={{ minWidth: '180px' }}>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.id)}>
                                    <DataTable.Cell frozen>
                                        <span className="text-xs text-surface-500 dark:text-surface-400 tabular-nums">#{String(item.id)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">{String(item.name)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{String(item.company)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.representative.name)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.date)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.activity)}%</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status as string] ?? 'secondary'}>{String(item.status)}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell frozen alignFrozen="right">
                                        <span className="font-semibold">${Number(item.balance).toLocaleString()}</span>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={9}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Render a `DataTable.FrozenTBody` above the regular `DataTable.TBody` to keep specific rows pinned to the top while the rest of the dataset scrolls.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Lock } from '@primeicons/react/lock';
import { Database } from '@primeicons/react/database';
import { LockOpen } from '@primeicons/react/lock-open';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function ScrollFrozenRowsDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [lockedIds, setLockedIds] = React.useState<number[]>([]);

    React.useEffect(() => {
        const data = CustomerService.getData();

        setCustomers(data);
        setLockedIds([data[0].id]);
    }, []);

    const { lockedCustomers, unlockedCustomers } = React.useMemo(() => {
        const locked: Customer[] = [];
        const unlocked: Customer[] = [];

        for (const c of customers) {
            if (lockedIds.includes(c.id)) locked.push(c);
            else unlocked.push(c);
        }

        return { lockedCustomers: locked, unlockedCustomers: unlocked };
    }, [customers, lockedIds]);

    const toggleLock = React.useCallback((id: number) => {
        setLockedIds((prev) => {
            if (prev.includes(id)) return prev.filter((x) => x !== id);
            if (prev.length >= 2) return prev;

            return [...prev, id];
        });
    }, []);

    const canLockMore = lockedIds.length < 2;

    // Refs so renderRow and tbodyRender keep stable identities across toggles —
    // avoids invalidating TBody's render-prop and FrozenTBody children on every
    // lock click. The refs are read at render-time, so each row still gets the
    // current canLockMore value.
    const canLockMoreRef = React.useRef(canLockMore);

    canLockMoreRef.current = canLockMore;

    const toggleLockRef = React.useRef(toggleLock);

    toggleLockRef.current = toggleLock;

    const renderRow = React.useCallback((item: Customer, { frozen = false }: { frozen?: boolean } = {}) => {
        const canLock = canLockMoreRef.current;
        const onClick = () => toggleLockRef.current(item.id);

        return (
            <DataTable.Row key={item.id}>
                <DataTable.Cell>
                    <span className={frozen ? 'font-semibold' : 'font-medium'}>{item.name}</span>
                </DataTable.Cell>
                <DataTable.Cell>
                    <div className="flex items-center gap-2">
                        <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                        <span>{item.country.name}</span>
                    </div>
                </DataTable.Cell>
                <DataTable.Cell>{item.representative.name}</DataTable.Cell>
                <DataTable.Cell>
                    <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                </DataTable.Cell>
                <DataTable.Cell style={{ width: '4rem', textAlign: 'center' }}>
                    <Button
                        variant="text"
                        severity="secondary"
                        size="small"
                        iconOnly
                        disabled={!frozen && !canLock}
                        onClick={onClick}
                        aria-label={frozen ? 'Unlock row' : 'Lock row'}
                    >
                        {frozen ? <LockOpen /> : <Lock />}
                    </Button>
                </DataTable.Cell>
            </DataTable.Row>
        );
    }, []);

    const tbodyRender = React.useCallback(({ item }: { item: any }) => renderRow(item as Customer), [renderRow]);

    return (
        <div className="w-full">
            <DataTable.Root data={unlockedCustomers} scrollable scrollHeight="400px">
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '4rem' }} />
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.FrozenTBody>{lockedCustomers.map((item) => renderRow(item, { frozen: true }))}</DataTable.FrozenTBody>
                        <DataTable.TBody>{tbodyRender}</DataTable.TBody>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

### Row Expansion

Expand rows to show additional detail content. Use `RowToggle` with `RowToggleIndicator` for expand/collapse icons.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Star } from '@primeicons/react/star';
import { StarFill } from '@primeicons/react/star-fill';
import type { DataTableExpansionEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Rating } from '@primereact/ui/rating';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

function ProductRating({ value }: { value: number }) {
    return (
        <Rating.Root value={value} readOnly>
            {Array.from({ length: 5 }).map((_, i) => (
                <Rating.Option key={i} index={i}>
                    <Rating.On>
                        <StarFill />
                    </Rating.On>
                    <Rating.Off>
                        <Star />
                    </Rating.Off>
                </Rating.Option>
            ))}
        </Rating.Root>
    );
}

function productImageUrl(image: string): string {
    return `https://primefaces.org/cdn/primevue/images/product/${image}`;
}

export default function ExpansionDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [expandedKeys, setExpandedKeys] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        const data = ProductService.getProductsData().slice(0, 6);

        setProducts(data);

        // Warm the browser cache so the first row-expansion open isn't blocked
        // on a cold image fetch. The expansion panel itself only mounts when a
        // row is open, so without this prefetch the user waits for the network
        // round-trip the first time they click the toggle.
        for (const product of data) {
            const img = new window.Image();

            img.src = productImageUrl(product.image);
        }
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={products}
                dataKey="id"
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '3rem' }} />
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <React.Fragment key={item.id}>
                                    <DataTable.Row>
                                        <DataTable.Cell>
                                            <DataTable.RowToggle>
                                                <DataTable.RowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTable.RowToggleIndicator>
                                                <DataTable.RowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTable.RowToggleIndicator>
                                            </DataTable.RowToggle>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <span className="font-medium">{item.name}</span>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Tag severity="secondary">{item.category}</Tag>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <span className="font-semibold">${item.price}</span>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                    <DataTable.RowExpansion>
                                        <DataTable.Cell colSpan={5}>
                                            <div className="flex gap-4 p-4 bg-surface-50 dark:bg-surface-900">
                                                <img
                                                    src={productImageUrl(item.image)}
                                                    alt={item.name}
                                                    width={120}
                                                    height={120}
                                                    loading="eager"
                                                    decoding="async"
                                                    style={{ width: 120, height: 120, objectFit: 'cover', flexShrink: 0 }}
                                                    className="rounded-md shadow-md"
                                                />
                                                <div className="flex flex-col gap-2 flex-1">
                                                    <h4 className="m-0 text-base font-semibold">{item.name}</h4>
                                                    <div className="text-xs text-surface-500 dark:text-surface-400">SKU: {item.code}</div>
                                                    <div className="flex items-center gap-2">
                                                        <ProductRating value={item.rating} />
                                                        <span className="text-xs text-surface-500 dark:text-surface-400">({item.rating}/5)</span>
                                                    </div>
                                                    <div className="flex items-center gap-6 text-sm">
                                                        <div>
                                                            <div className="text-xs text-surface-500 dark:text-surface-400">Category</div>
                                                            <div className="font-medium">{item.category}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xs text-surface-500 dark:text-surface-400">In stock</div>
                                                            <div className="font-medium">{item.quantity} units</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xs text-surface-500 dark:text-surface-400">Price</div>
                                                            <div className="font-semibold">${item.price}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </DataTable.Cell>
                                    </DataTable.RowExpansion>
                                </React.Fragment>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

DataTable supports two edit modes via the `editMode` prop: `cell` for inline cell-by-cell editing and `row` for committing a full row at once. Editing state is keyed by the row key in both modes.

#### Cell

Inline cell editing with `CellEditor`, `CellEditorDisplay` and `CellEditorContent` sub-components following the Inplace pattern. Use `editMode="cell"` on `DataTable.Root` and handle committed values in `onCellEditComplete`.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { DataTable } from '@primereact/ui/datatable';
import { InputNumber } from '@primereact/ui/inputnumber';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusOptions = [
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
];

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function CellEditDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const pendingValueRef = React.useRef<Record<string, unknown>>({});

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    const handleCellEditComplete = React.useCallback((e: { rowIndex: number; field: string; originalEvent: React.SyntheticEvent }) => {
        const { rowIndex, field } = e;
        const editKey = `${rowIndex}-${field}`;
        const newValue = pendingValueRef.current[editKey];

        if (newValue !== undefined) {
            setProducts((prev) => {
                const next = [...prev];

                if (next[rowIndex]) {
                    (next[rowIndex] as unknown as Record<string, unknown>)[field] = newValue;
                }

                return next;
            });

            delete pendingValueRef.current[editKey];
        }
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products} dataKey="id" editMode="cell" onCellEditComplete={handleCellEditComplete}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '4rem' }}>
                                    <DataTable.THeadTitle>Image</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '10%' }}>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '15%' }}>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <Image
                                            src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="rounded-md shadow"
                                        />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="name" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <span className="font-medium">{item.name}</span>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={item.name}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${index}-name`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="category" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <Tag severity="secondary">{item.category}</Tag>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={item.category}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${index}-category`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="quantity" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>{item.quantity}</DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputNumber.Root
                                                    defaultValue={item.quantity}
                                                    onValueChange={(e: any) => {
                                                        pendingValueRef.current[`${index}-quantity`] = e.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                >
                                                    <InputNumber.Input />
                                                </InputNumber.Root>
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="price" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <span className="font-semibold">${item.price}</span>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputNumber.Root
                                                    defaultValue={item.price}
                                                    mode="currency"
                                                    currency="USD"
                                                    onValueChange={(e: any) => {
                                                        pendingValueRef.current[`${index}-price`] = e.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                >
                                                    <InputNumber.Input />
                                                </InputNumber.Root>
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="inventoryStatus" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <Select.Root
                                                    defaultValue={item.inventoryStatus}
                                                    onValueChange={(e: SelectValueChangeEvent) => {
                                                        pendingValueRef.current[`${index}-inventoryStatus`] = e.value as string;
                                                    }}
                                                    options={statusOptions}
                                                    optionLabel="label"
                                                    optionValue="value"
                                                    size="small"
                                                    className="w-full"
                                                >
                                                    <Select.Trigger>
                                                        <Select.Value />
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
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Cell editing composes with row selection: clicks inside an editable cell start editing, clicks elsewhere on the row drive selection. With a row focused, `Enter` opens its first editable cell; `Space` still toggles the selection.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Check } from '@primeicons/react/check';
import { Database } from '@primeicons/react/database';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Minus } from '@primeicons/react/minus';
import type { DataTableCellEditEvent, DataTableSelectionEvent } from '@primereact/ui/datatable';
import type { CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import type { DataTableSelectionInstance } from '@primereact/ui/datatable';
import { Badge } from '@primereact/ui/badge';
import { Checkbox } from '@primereact/ui/checkbox';
import { DataTable } from '@primereact/ui/datatable';
import { InputNumber } from '@primereact/ui/inputnumber';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusOptions = [
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
];

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function CellEditSelectionDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});
    const pendingValueRef = React.useRef<Record<string, unknown>>({});

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    const handleCellEditComplete = React.useCallback((e: DataTableCellEditEvent) => {
        const { rowIndex, field } = e;
        const editKey = `${rowIndex}-${field}`;
        const newValue = pendingValueRef.current[editKey];

        if (newValue !== undefined) {
            setProducts((prev) => {
                const next = [...prev];

                if (next[rowIndex]) {
                    (next[rowIndex] as unknown as Record<string, unknown>)[field] = newValue;
                }

                return next;
            });
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
                data={products}
                dataKey="id"
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
                editMode="cell"
                onCellEditComplete={handleCellEditComplete}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '3rem' }}>
                                    <DataTable.Selection>
                                        {({
                                            isAllSelected,
                                            isSomeSelected,
                                            toggleAll
                                        }: {
                                            isAllSelected: boolean;
                                            isSomeSelected: boolean;
                                            toggleAll: (e: React.SyntheticEvent) => void;
                                        }) => (
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
                                <DataTable.THeadCell style={{ width: '4rem' }}>
                                    <DataTable.THeadTitle>Image</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '10%' }}>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '15%' }}>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <DataTable.Selection>
                                            {({ isSelected, toggle }: DataTableSelectionInstance) => (
                                                <Checkbox.Root
                                                    checked={isSelected}
                                                    onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
                                                >
                                                    <Checkbox.Box>
                                                        <Checkbox.Indicator match="checked">
                                                            <Check />
                                                        </Checkbox.Indicator>
                                                    </Checkbox.Box>
                                                </Checkbox.Root>
                                            )}
                                        </DataTable.Selection>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Image
                                            src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                            alt={item.name}
                                            width={36}
                                            height={36}
                                            className="rounded-md shadow"
                                        />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="name" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <span className="font-medium">{item.name}</span>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={item.name}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${index}-name`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="category" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <Tag severity="secondary">{item.category}</Tag>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={item.category}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${index}-category`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="quantity" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>{item.quantity}</DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputNumber.Root
                                                    defaultValue={item.quantity}
                                                    onValueChange={(e: any) => {
                                                        pendingValueRef.current[`${index}-quantity`] = e.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                >
                                                    <InputNumber.Input />
                                                </InputNumber.Root>
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="price" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <span className="font-semibold">${item.price}</span>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputNumber.Root
                                                    defaultValue={item.price}
                                                    mode="currency"
                                                    currency="USD"
                                                    onValueChange={(e: any) => {
                                                        pendingValueRef.current[`${index}-price`] = e.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                >
                                                    <InputNumber.Input />
                                                </InputNumber.Root>
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="inventoryStatus" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <Select.Root
                                                    defaultValue={item.inventoryStatus}
                                                    onValueChange={(e: SelectValueChangeEvent) => {
                                                        pendingValueRef.current[`${index}-inventoryStatus`] = e.value as string;
                                                    }}
                                                    options={statusOptions}
                                                    optionLabel="label"
                                                    optionValue="value"
                                                    size="small"
                                                    className="w-full"
                                                >
                                                    <Select.Trigger>
                                                        <Select.Value />
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
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={7}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Row-level editing with `RowEditor`, `RowEditorInit`, `RowEditorSave` and `RowEditorCancel` action components. Use `editMode="row"` on `DataTable.Root` with controlled `editingKeys` + `onEditingKeysChange`; the `onRowEditSave` / `onRowEditCancel` events fire with the final row data.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Check } from '@primeicons/react/check';
import { Database } from '@primeicons/react/database';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Pencil } from '@primeicons/react/pencil';
import { Times } from '@primeicons/react/times';
import type { DataTableRowEditEvent } from '@primereact/ui/datatable';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { InputNumber } from '@primereact/ui/inputnumber';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusOptions = [
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
];

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function RowEditDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [editingKeys, setEditingKeys] = React.useState<Record<string, boolean>>({});
    const draftRef = React.useRef<Record<string, Partial<Product>>>({});

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    const handleSave = React.useCallback((e: DataTableRowEditEvent) => {
        const id = e.data.id as string | undefined;

        if (!id) return;

        const patch = draftRef.current[id];

        if (patch && Object.keys(patch).length > 0) {
            setProducts((prev) => prev.map((p) => (p.id === id ? ({ ...p, ...patch } as Product) : p)));
        }

        delete draftRef.current[id];
    }, []);

    const handleCancel = React.useCallback((e: DataTableRowEditEvent) => {
        const id = e.data.id as string | undefined;

        if (id) delete draftRef.current[id];
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={products}
                dataKey="id"
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
                                <DataTable.THeadCell style={{ width: '30%' }}>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '10%' }}>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '15%' }}>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '9rem' }}>
                                    <DataTable.THeadTitle>Actions</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => {
                                const id = item.id;

                                return (
                                    <DataTable.Row key={id}>
                                        <DataTable.RowEditor rowKey={id} rowData={item}>
                                            <DataTable.Cell>
                                                <DataTable.CellEditor field="name" rowIndex={index} rowData={item}>
                                                    <DataTable.CellEditorDisplay>
                                                        <div className="flex items-center gap-3">
                                                            <Image
                                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                                alt={item.name}
                                                                width={40}
                                                                height={40}
                                                                className="rounded-md shadow"
                                                            />
                                                            <div className="flex flex-col">
                                                                <span className="font-medium">{item.name}</span>
                                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                                            </div>
                                                        </div>
                                                    </DataTable.CellEditorDisplay>
                                                    <DataTable.CellEditorContent>
                                                        <InputText
                                                            defaultValue={item.name}
                                                            onChange={(e: any) => {
                                                                draftRef.current[id] = { ...draftRef.current[id], name: e.target.value };
                                                            }}
                                                            fluid
                                                        />
                                                    </DataTable.CellEditorContent>
                                                </DataTable.CellEditor>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <DataTable.CellEditor field="category" rowIndex={index} rowData={item}>
                                                    <DataTable.CellEditorDisplay>
                                                        <Tag severity="secondary">{item.category}</Tag>
                                                    </DataTable.CellEditorDisplay>
                                                    <DataTable.CellEditorContent>
                                                        <InputText
                                                            defaultValue={item.category}
                                                            onChange={(e: any) => {
                                                                draftRef.current[id] = { ...draftRef.current[id], category: e.target.value };
                                                            }}
                                                            fluid
                                                        />
                                                    </DataTable.CellEditorContent>
                                                </DataTable.CellEditor>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <DataTable.CellEditor field="quantity" rowIndex={index} rowData={item}>
                                                    <DataTable.CellEditorDisplay>{item.quantity}</DataTable.CellEditorDisplay>
                                                    <DataTable.CellEditorContent>
                                                        <InputNumber.Root
                                                            defaultValue={item.quantity}
                                                            onValueChange={(e: any) => {
                                                                draftRef.current[id] = { ...draftRef.current[id], quantity: e.value ?? 0 };
                                                            }}
                                                            fluid
                                                        >
                                                            <InputNumber.Input />
                                                        </InputNumber.Root>
                                                    </DataTable.CellEditorContent>
                                                </DataTable.CellEditor>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <DataTable.CellEditor field="price" rowIndex={index} rowData={item}>
                                                    <DataTable.CellEditorDisplay>
                                                        <span className="font-semibold">${item.price}</span>
                                                    </DataTable.CellEditorDisplay>
                                                    <DataTable.CellEditorContent>
                                                        <InputNumber.Root
                                                            defaultValue={item.price}
                                                            mode="currency"
                                                            currency="USD"
                                                            onValueChange={(e: any) => {
                                                                draftRef.current[id] = { ...draftRef.current[id], price: e.value ?? 0 };
                                                            }}
                                                            fluid
                                                        >
                                                            <InputNumber.Input />
                                                        </InputNumber.Root>
                                                    </DataTable.CellEditorContent>
                                                </DataTable.CellEditor>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <DataTable.CellEditor field="inventoryStatus" rowIndex={index} rowData={item}>
                                                    <DataTable.CellEditorDisplay>
                                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                                    </DataTable.CellEditorDisplay>
                                                    <DataTable.CellEditorContent>
                                                        <Select.Root
                                                            defaultValue={item.inventoryStatus}
                                                            onValueChange={(e: SelectValueChangeEvent) => {
                                                                draftRef.current[id] = {
                                                                    ...draftRef.current[id],
                                                                    inventoryStatus: e.value as string
                                                                };
                                                            }}
                                                            options={statusOptions}
                                                            optionLabel="label"
                                                            optionValue="value"
                                                            className="w-full"
                                                        >
                                                            <Select.Trigger>
                                                                <Select.Value placeholder="Select" />
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
                                                    </DataTable.CellEditorContent>
                                                </DataTable.CellEditor>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <div className="flex gap-1">
                                                    <DataTable.RowEditorInit as={Button} variant="text" severity="secondary">
                                                        <Pencil />
                                                    </DataTable.RowEditorInit>
                                                    <DataTable.RowEditorSave as={Button} variant="text" severity="success">
                                                        <Check />
                                                    </DataTable.RowEditorSave>
                                                    <DataTable.RowEditorCancel as={Button} variant="text" severity="danger">
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
                                <DataTable.Cell colSpan={6}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

### Row Grouping

Group rows by a field value with `RowGroupHeader` and `RowGroupFooter` for group headers and footers. Grouping operates on **contiguous** rows, so pair `groupField` with `defaultSortField` (or an active sort on the same field) to lay out the data in groups before rendering.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import { Avatar } from '@primereact/ui/avatar';
import { Badge } from '@primereact/ui/badge';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function RowGroupDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);

    React.useEffect(() => {
        setCustomers(CustomerService.getData().slice(0, 15));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={customers} groupField="representative.name" defaultSortField="representative.name" defaultSortOrder={1}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, groupMeta }: { item: any; groupMeta?: any }) => {
                                const repName = item.representative.name as string;
                                const repImage = item.representative.image;
                                const groupTotal = customers.reduce(
                                    (sum, c) => (c.representative.name === repName ? sum + Number(c.balance ?? 0) : sum),
                                    0
                                );

                                return (
                                    <React.Fragment>
                                        {groupMeta?.isGroupStart && (
                                            <DataTable.RowGroupHeader>
                                                <DataTable.Cell colSpan={4}>
                                                    <div className="flex items-center gap-3 py-1">
                                                        <Avatar.Root shape="circle">
                                                            <Avatar.Image src={`https://primefaces.org/cdn/primevue/images/avatar/${repImage}`} />
                                                            <Avatar.Fallback>{repName[0]}</Avatar.Fallback>
                                                        </Avatar.Root>
                                                        <span className="font-semibold">{repName}</span>
                                                        <Badge severity="info">{groupMeta.groupCount} customers</Badge>
                                                    </div>
                                                </DataTable.Cell>
                                            </DataTable.RowGroupHeader>
                                        )}
                                        <DataTable.Row key={item.id}>
                                            <DataTable.Cell>
                                                <span className="font-medium">{item.name}</span>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                                    <span>{item.country.name}</span>
                                                </div>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                            </DataTable.Cell>
                                            <DataTable.Cell>
                                                <span className="font-semibold">${item.balance.toLocaleString()}</span>
                                            </DataTable.Cell>
                                        </DataTable.Row>
                                        {groupMeta?.isGroupEnd && (
                                            <DataTable.RowGroupFooter>
                                                <DataTable.Cell colSpan={3}>
                                                    <span className="text-sm text-surface-500 dark:text-surface-400">Group total</span>
                                                </DataTable.Cell>
                                                <DataTable.Cell>
                                                    <span className="font-semibold">${groupTotal.toLocaleString()}</span>
                                                </DataTable.Cell>
                                            </DataTable.RowGroupFooter>
                                        )}
                                    </React.Fragment>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

For a spreadsheet-style layout, skip the group header/footer and merge the group column vertically using `rowSpan={groupMeta.groupCount}` on the first row of each group.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import { Avatar } from '@primereact/ui/avatar';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

export default function RowGroupRowSpanDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);

    React.useEffect(() => {
        setCustomers(CustomerService.getData().slice(0, 15));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={customers}
                groupField="representative.name"
                defaultSortField="representative.name"
                defaultSortOrder={1}
                showGridlines
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Representative</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, groupMeta }: { item: any; groupMeta?: any }) => (
                                <DataTable.Row key={item.id}>
                                    {groupMeta?.isGroupStart && (
                                        <DataTable.Cell rowSpan={groupMeta.groupCount}>
                                            <div className="flex items-center gap-2">
                                                <Avatar.Root shape="circle">
                                                    <Avatar.Image
                                                        src={`https://primefaces.org/cdn/primevue/images/avatar/${item.representative.image}`}
                                                    />
                                                    <Avatar.Fallback>{item.representative.name[0]}</Avatar.Fallback>
                                                </Avatar.Root>
                                                <span className="font-semibold">{item.representative.name}</span>
                                            </div>
                                        </DataTable.Cell>
                                    )}
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.balance.toLocaleString()}</span>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Enable column resizing with drag handles via the `resizableColumns` prop. Two modes are supported via `columnResizeMode`:

- **`fit`** (default): dragging a column takes width from the adjacent column; total table width stays the same.
- **`expand`**: dragging grows or shrinks the whole table; adjacent columns keep their widths. Usually paired with `scrollable` so the table can exceed its viewport.

Both demos enable `showGridlines` to make the effect visible.

#### Fit Mode

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Database } from '@primeicons/react/database';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function ResizeDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products} resizableColumns columnResizeMode="fit" showGridlines>
                <DataTable.TableContainer>
                    <DataTable.ColumnResizeIndicator />
                    <DataTable.Table style={{ width: '100%', tableLayout: 'fixed' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={36}
                                                height={36}
                                                className="rounded-md shadow"
                                            />
                                            <span className="font-medium truncate">{item.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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
import Image from 'next/image';
import { Database } from '@primeicons/react/database';
import { ProductService, type Product } from '@/shared/services/product.service';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function ResizeExpandDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={products} resizableColumns columnResizeMode="expand" showGridlines scrollable scrollHeight="400px">
                <DataTable.TableContainer>
                    <DataTable.ColumnResizeIndicator />
                    <DataTable.Table style={{ tableLayout: 'fixed', minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                    <DataTable.ColumnResizer />
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={36}
                                                height={36}
                                                className="rounded-md shadow"
                                            />
                                            <span className="font-medium truncate">{item.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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
import { ProductService, type Product } from '@/shared/services/product.service';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { Bars } from '@primeicons/react/bars';
import { Database } from '@primeicons/react/database';
import type { DataTableColumnReorderEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

interface Column {
    field: string;
    header: string;
}

const initialColumns: Column[] = [
    { field: 'name', header: 'Product' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'price', header: 'Price' },
    { field: 'inventoryStatus', header: 'Status' }
];

function renderCell(field: string, item: Product) {
    switch (field) {
        case 'name':
            return (
                <div className="flex items-center gap-3">
                    <Image
                        src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                        alt={item.name}
                        width={36}
                        height={36}
                        className="rounded-md shadow"
                    />
                    <span className="font-medium">{item.name}</span>
                </div>
            );
        case 'category':
            return <Tag severity="secondary">{item.category}</Tag>;
        case 'quantity':
            return item.quantity;
        case 'price':
            return <span className="font-semibold">${item.price}</span>;
        case 'inventoryStatus':
            return <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>;
        default:
            return null;
    }
}

export default function ReorderDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [columns, setColumns] = React.useState<Column[]>(initialColumns);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={products}
                reorderableColumns
                onColumnReorder={(e: DataTableColumnReorderEvent) => {
                    const reordered = [...columns];
                    const [moved] = reordered.splice(e.dragIndex, 1);

                    reordered.splice(e.dropIndex, 0, moved);
                    setColumns(reordered);
                }}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
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
                                <DataTable.Row key={item.id}>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Drag and drop rows to reorder data.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Bars } from '@primeicons/react/bars';
import { Database } from '@primeicons/react/database';
import type { DataTableRowReorderEvent } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function RowReorderDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root
                data={products}
                dataKey="id"
                reorderableRows
                onRowReorder={(e: DataTableRowReorderEvent) => setProducts(e.value as unknown as Product[])}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '3rem' }} />
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <DataTable.RowReorder rowIndex={index} className="cursor-grab text-surface-400 hover:text-surface-600">
                                            <Bars />
                                        </DataTable.RowReorder>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={36}
                                                height={36}
                                                className="rounded-md shadow"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                            </div>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Show/hide columns dynamically.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Bars } from '@primeicons/react/bars';
import { Database } from '@primeicons/react/database';
import { Check } from '@primeicons/react/check';
import { Cog } from '@primeicons/react/cog';
import { Refresh } from '@primeicons/react/refresh';
import { useSortableList } from '@primereact/hooks/use-sortable-list';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { DataTable } from '@primereact/ui/datatable';
import { Popover } from '@primereact/ui/popover';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import * as React from 'react';

interface ColumnDef {
    field: string;
    header: string;
}

const initialColumns: ColumnDef[] = [
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'price', header: 'Price' },
    { field: 'rating', header: 'Rating' },
    { field: 'inventoryStatus', header: 'Status' }
];

const defaultVisibleFields = ['name', 'category', 'price', 'inventoryStatus'];

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

function renderCell(field: string, item: Product) {
    switch (field) {
        case 'name':
            return (
                <div className="flex items-center gap-3">
                    <Image
                        src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                        alt={item.name}
                        width={36}
                        height={36}
                        className="rounded-md shadow"
                    />
                    <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                    </div>
                </div>
            );
        case 'category':
            return <Tag severity="secondary">{item.category}</Tag>;
        case 'quantity':
            return item.quantity;
        case 'price':
            return <span className="font-semibold">${item.price}</span>;
        case 'rating':
            return `${item.rating}/5`;
        case 'inventoryStatus':
            return <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>;
        default:
            return null;
    }
}

interface ColumnsPopoverProps {
    columns: ColumnDef[];
    visibleFields: string[];
    onColumnsChange: (next: ColumnDef[]) => void;
    onVisibleFieldsChange: (next: string[]) => void;
    onReset: () => void;
}

const LIST_ID = 'columns';

function ColumnsPopover({ columns, visibleFields, onColumnsChange, onVisibleFieldsChange, onReset }: ColumnsPopoverProps) {
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
    const [products, setProducts] = React.useState<Product[]>([]);
    const [columns, setColumns] = React.useState<ColumnDef[]>(initialColumns);
    const [visibleFields, setVisibleFields] = React.useState<string[]>(defaultVisibleFields);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
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
            <DataTable.Root data={products}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
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
                                <DataTable.Row key={item.id}>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

Multi-level headers with rowspan and colspan.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { Database } from '@primeicons/react/database';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

interface Sale {
    id: string;
    product: string;
    lastYearSale: number;
    thisYearSale: number;
    lastYearProfit: number;
    thisYearProfit: number;
}

const sales: Sale[] = [
    { id: '1', product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
    { id: '2', product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
    { id: '3', product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
    { id: '4', product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 650323 },
    { id: '5', product: 'Bracelet', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 }
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
    const totals = React.useMemo(() => {
        return sales.reduce(
            (acc, s) => ({
                lastYear: acc.lastYear + s.lastYearProfit,
                thisYear: acc.thisYear + s.thisYearProfit
            }),
            { lastYear: 0, thisYear: 0 }
        );
    }, []);

    return (
        <div className="w-full">
            <DataTable.Root data={sales} showGridlines>
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
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.product}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.lastYearSale}%</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Trend current={item.thisYearSale} previous={item.lastYearSale} />
                                    </DataTable.Cell>
                                    <DataTable.Cell>${item.lastYearProfit.toLocaleString()}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={item.thisYearProfit >= item.lastYearProfit ? 'success' : 'danger'}>
                                            ${item.thisYearProfit.toLocaleString()}
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching sales</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, the latest figures will appear here in a moment.
                                            </p>
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
import { Database } from '@primeicons/react/database';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import type { DataTableFilterInstance } from '@primereact/ui/datatable';
import { DataTable, FilterMatchMode } from '@primereact/ui/datatable';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

interface Sale {
    id: string;
    product: string;
    lastYearSale: number;
    thisYearSale: number;
    lastYearProfit: number;
    thisYearProfit: number;
}

const sales: Sale[] = [
    { id: '1', product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54_406, thisYearProfit: 43_342 },
    { id: '2', product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423_132, thisYearProfit: 312_122 },
    { id: '3', product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12_321, thisYearProfit: 8_500 },
    { id: '4', product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745_232, thisYearProfit: 650_323 },
    { id: '5', product: 'Bracelet', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643_242, thisYearProfit: 500_332 }
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
    const [filters, setFilters] = React.useState<Record<string, { value: unknown; matchMode: FilterMatchMode }>>({
        product: { value: null, matchMode: FilterMatchMode.Contains },
        thisYearSale: { value: null, matchMode: FilterMatchMode.Gte }
    });

    return (
        <div className="w-full">
            <DataTable.Root
                data={sales}
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
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <span className="font-medium">{item.product}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.lastYearSale}%</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Trend current={item.thisYearSale} previous={item.lastYearSale} />
                                    </DataTable.Cell>
                                    <DataTable.Cell>${item.lastYearProfit.toLocaleString()}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={item.thisYearProfit >= item.lastYearProfit ? 'success' : 'danger'}>
                                            ${item.thisYearProfit.toLocaleString()}
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching sales</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, the latest figures will appear here in a moment.
                                            </p>
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

Filtering is driven by a `filters` object passed to `DataTable.Root`; each column wraps its filter UI with `DataTable.Filter` and receives render-prop helpers (value, match mode, constraints, overlay state, …). Global search is opt-in via `globalFilter` + `globalFilterFields`.

#### Basic

`display="row"` renders inline inputs directly under each column header and applies immediately as the user types. Pair with a global `InputText` in a header slot for keyword search.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { Search } from '@primeicons/react/search';
import { FilterMatchMode } from '@primereact/ui/datatable';
import type { DataTableFilterInstance } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const customers = [
    { id: 1, name: 'Amy Elsner', country: 'Germany', status: 'unqualified', verified: false, balance: 9702 },
    { id: 2, name: 'Anna Fali', country: 'France', status: 'qualified', verified: true, balance: 12500 },
    { id: 3, name: 'Asiya Javayant', country: 'India', status: 'new', verified: false, balance: 8300 },
    { id: 4, name: 'Bernardo Dominic', country: 'USA', status: 'renewal', verified: true, balance: 24100 },
    { id: 5, name: 'Elwin Sharvill', country: 'UK', status: 'qualified', verified: true, balance: 16200 },
    { id: 6, name: 'Ioni Bowcher', country: 'Brazil', status: 'unqualified', verified: false, balance: 4200 },
    { id: 7, name: 'Ivan Magalhaes', country: 'Brazil', status: 'new', verified: true, balance: 18700 },
    { id: 8, name: 'Onyama Limba', country: 'Nigeria', status: 'qualified', verified: false, balance: 29300 },
    { id: 9, name: 'Stephen Shaw', country: 'UK', status: 'negotiation', verified: true, balance: 15800 },
    { id: 10, name: 'Xuxue Feng', country: 'China', status: 'renewal', verified: true, balance: 44500 }
];

const statusOptions = [
    { label: 'All', value: '' },
    { label: 'Unqualified', value: 'unqualified' },
    { label: 'Qualified', value: 'qualified' },
    { label: 'New', value: 'new' },
    { label: 'Negotiation', value: 'negotiation' },
    { label: 'Renewal', value: 'renewal' }
];

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary'
};

interface FilterSelectProps<T extends string> {
    value: T;
    onChange: (value: T) => void;
    options: { label: string; value: T }[];
    placeholder?: string;
}

function FilterSelect<T extends string>({ value, onChange, options, placeholder }: FilterSelectProps<T>) {
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

export default function FilterBasicDemo() {
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [filters, setFilters] = React.useState({
        name: { value: null, matchMode: FilterMatchMode.StartsWith },
        country: { value: null, matchMode: FilterMatchMode.Contains },
        status: { value: null, matchMode: FilterMatchMode.Equals }
    });

    return (
        <div className="w-full">
            <div className="mb-3 flex justify-end">
                <IconField.Root>
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        type="search"
                        placeholder="Keyword Search"
                        value={globalFilter}
                        onChange={(e: any) => setGlobalFilter(e.target.value)}
                    />
                </IconField.Root>
            </div>
            <DataTable.Root
                data={customers}
                globalFilter={globalFilter}
                globalFilterFields={['name', 'country', 'status']}
                filters={filters}
                onFilter={(e: { filters: Record<string, unknown> }) => setFilters(e.filters as typeof filters)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '15%' }}>
                                    <DataTable.THeadTitle>Verified</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="name" display="row" dataType="text">
                                        {({ value, onChange, isActive }: DataTableFilterInstance) => (
                                            <InputText
                                                value={(value as string) ?? ''}
                                                onChange={(e: any) => onChange(e, e.target.value)}
                                                placeholder="Search name..."
                                                invalid={isActive && !value}
                                                size="small"
                                                fluid
                                            />
                                        )}
                                    </DataTable.Filter>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="country" display="row">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <InputText
                                                value={(value as string) ?? ''}
                                                onChange={(e: any) => onChange(e, e.target.value)}
                                                placeholder="Search country..."
                                                size="small"
                                                fluid
                                            />
                                        )}
                                    </DataTable.Filter>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="status" display="row">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <FilterSelect
                                                value={(value as string) ?? ''}
                                                onChange={(v) => onChange({} as React.SyntheticEvent, v || null)}
                                                options={statusOptions}
                                                placeholder="Any"
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
                                <DataTable.Row key={String(item.id)}>
                                    <DataTable.Cell>
                                        <span className="font-medium">{String(item.name)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{String(item.country)}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status as string] ?? 'secondary'}>{String(item.status)}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${Number(item.balance as number).toLocaleString()}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        {item.verified ? <Tag severity="success">Verified</Tag> : <Tag severity="secondary">—</Tag>}
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

`display="menu"` swaps the inline input for a trigger icon that opens a popover. Each field supports multiple constraints joined by an AND/OR operator, a match mode per constraint, and Apply/Clear actions.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { Database } from '@primeicons/react/database';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { Calendar } from '@primeicons/react/calendar';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { EllipsisH } from '@primeicons/react';
import { Filter as FilterIcon } from '@primeicons/react/filter';
import { FilterSlash } from '@primeicons/react/filter-slash';
import { Plus } from '@primeicons/react/plus';
import { Search } from '@primeicons/react/search';
import { Trash } from '@primeicons/react/trash';
import type { PaginatorRootChangeEvent } from '@primereact/ui/paginator';
import type { DataTableFilterInstance } from '@primereact/ui/datatable';
import { FilterMatchMode, FilterOperator } from '@primereact/ui/datatable';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { DatePicker, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { IconField } from '@primereact/ui/iconfield';
import { InputNumber } from '@primereact/ui/inputnumber';
import { InputText } from '@primereact/ui/inputtext';
import { Paginator } from '@primereact/ui/paginator';
import { Popover, type PopoverRootOpenChangeEvent } from '@primereact/ui/popover';
import { RadioButton } from '@primereact/ui/radiobutton';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Slider } from '@primereact/ui/slider';
import { Tag } from '@primereact/ui/tag';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import type { PaginatorPagesInstance } from '@primereact/ui/paginator';
import * as React from 'react';

const operatorOptions = [
    { label: 'Match All (AND)', value: 'and' },
    { label: 'Match Any (OR)', value: 'or' }
];

const statusSeverity: Record<string, 'success' | 'warn' | 'info' | 'danger' | 'secondary'> = {
    qualified: 'success',
    unqualified: 'danger',
    negotiation: 'warn',
    new: 'info',
    renewal: 'secondary',
    proposal: 'info'
};

const statusOptions = [
    { label: 'All statuses', value: '' },
    { label: 'Qualified', value: 'qualified' },
    { label: 'Unqualified', value: 'unqualified' },
    { label: 'Negotiation', value: 'negotiation' },
    { label: 'New', value: 'new' },
    { label: 'Renewal', value: 'renewal' },
    { label: 'Proposal', value: 'proposal' }
];

const verifiedOptions = [
    { label: 'All', value: '' },
    { label: 'Verified only', value: 'true' },
    { label: 'Unverified only', value: 'false' }
];

interface FilterSelectProps<T extends string> {
    value: T;
    onChange: (value: T) => void;
    options: { label: string; value: T }[];
    placeholder?: string;
    size?: 'small' | 'normal';
}

function FilterSelect<T extends string>({ value, onChange, options, placeholder, size = 'small' }: FilterSelectProps<T>) {
    return (
        <Select.Root
            value={value}
            onValueChange={(e: SelectValueChangeEvent) => onChange(e.value as T)}
            options={options}
            optionLabel="label"
            optionValue="value"
            size={size === 'small' ? 'small' : undefined}
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

interface FilterPopoverProps {
    isActive: boolean;
    open: boolean;
    onOpenChange: (event: PopoverRootOpenChangeEvent) => void;
    children: React.ReactNode;
}

function FilterPopover({ isActive, open, onOpenChange, children }: FilterPopoverProps) {
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

function formatDate(value: unknown) {
    if (!value) return '';

    const d = new Date(value as string | number | Date);

    return d.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

const DEFAULT_FILTERS = {
    name: { operator: FilterOperator.And, constraints: [{ value: null, matchMode: FilterMatchMode.StartsWith }] },
    'country.name': { operator: FilterOperator.And, constraints: [{ value: null, matchMode: FilterMatchMode.Contains }] },
    'representative.name': { value: null as string | null, matchMode: FilterMatchMode.Equals },
    date: { operator: FilterOperator.And, constraints: [{ value: null, matchMode: FilterMatchMode.DateIs }] },
    balance: { operator: FilterOperator.And, constraints: [{ value: null, matchMode: FilterMatchMode.Gte }] },
    status: { value: null as string | null, matchMode: FilterMatchMode.Equals },
    activity: { value: [0, 100] as [number, number], matchMode: FilterMatchMode.Between },
    verified: { value: null as boolean | null, matchMode: FilterMatchMode.Equals }
};

export default function FilterAdvancedDemo() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [filters, setFilters] = React.useState(DEFAULT_FILTERS);
    const [representatives, setRepresentatives] = React.useState<{ name: string; image: string }[]>([]);

    React.useEffect(() => {
        const data = CustomerService.getData();

        setCustomers(data);

        const seen = new Set<string>();
        const reps: { name: string; image: string }[] = [];

        for (const c of data) {
            if (!seen.has(c.representative.name)) {
                seen.add(c.representative.name);
                reps.push(c.representative);
            }
        }

        setRepresentatives(reps);
    }, []);

    const clearAll = () => {
        setFilters(DEFAULT_FILTERS);
        setGlobalFilter('');
    };

    const representativeOptions = React.useMemo(
        () => [{ label: 'All agents', value: '', image: '' }, ...representatives.map((r) => ({ label: r.name, value: r.name, image: r.image }))],
        [representatives]
    );

    return (
        <div className="w-full">
            <div className="mb-3 flex items-center justify-between gap-3">
                <Button variant="outlined" size="small" onClick={clearAll}>
                    <FilterSlash /> Clear Filters
                </Button>
                <IconField.Root>
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        type="search"
                        placeholder="Keyword Search"
                        value={globalFilter}
                        onChange={(e: any) => setGlobalFilter(e.target.value)}
                    />
                </IconField.Root>
            </div>
            <DataTable.Root
                data={customers}
                paginator
                defaultRows={10}
                globalFilter={globalFilter}
                globalFilterFields={['name', 'country.name', 'representative.name', 'status']}
                filters={filters}
                onFilter={(e: { filters: Record<string, unknown> }) => setFilters(e.filters as typeof filters)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '78rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '14%' }}>
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
                                                            size="normal"
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
                                                                    options={matchModeOptions.map((opt) => ({
                                                                        label: opt.label,
                                                                        value: opt.value as string
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
                                <DataTable.THeadCell style={{ width: '12%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Country</DataTable.THeadTitle>
                                        <DataTable.Filter field="country.name" display="menu" dataType="text">
                                            {({
                                                constraints,
                                                matchModeOptions,
                                                isActive,
                                                overlayVisible,
                                                onToggleOverlay,
                                                onHideOverlay,
                                                onConstraintChange,
                                                onMatchModeChange,
                                                onClear,
                                                onApply
                                            }: DataTableFilterInstance) => (
                                                <FilterPopover
                                                    isActive={isActive}
                                                    open={overlayVisible}
                                                    onOpenChange={(e) => toggleFilterOverlay(e, overlayVisible, onToggleOverlay, onHideOverlay)}
                                                >
                                                    <div className="mb-3">
                                                        <span className="text-sm font-semibold">Filter by Country</span>
                                                    </div>
                                                    {constraints.map((constraint, idx) => (
                                                        <div key={idx} className="mb-3 flex flex-col gap-2">
                                                            <FilterSelect
                                                                value={constraint.matchMode as string}
                                                                onChange={(v) => onMatchModeChange({} as React.SyntheticEvent, idx, v)}
                                                                options={matchModeOptions.map((opt) => ({
                                                                    label: opt.label,
                                                                    value: opt.value as string
                                                                }))}
                                                            />
                                                            <InputText
                                                                value={(constraint.value as string) ?? ''}
                                                                onChange={(e: any) => onConstraintChange(e, idx, e.target.value)}
                                                                placeholder="Search by country..."
                                                                size="small"
                                                                fluid
                                                            />
                                                        </div>
                                                    ))}
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
                                <DataTable.THeadCell style={{ width: '14%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Agent</DataTable.THeadTitle>
                                        <DataTable.Filter field="representative.name" display="menu">
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
                                                        <span className="text-sm font-semibold">Filter by Agent</span>
                                                    </div>
                                                    <div className="mb-3 flex flex-col gap-1 max-h-64 overflow-auto">
                                                        {representativeOptions.map((opt) => {
                                                            const currentValue = (value as string) ?? '';
                                                            const checked = currentValue === opt.value;

                                                            return (
                                                                <label
                                                                    key={opt.value || 'all'}
                                                                    className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800"
                                                                >
                                                                    <RadioButton.Root
                                                                        checked={checked}
                                                                        onCheckedChange={() =>
                                                                            onChange({} as React.SyntheticEvent, opt.value || null)
                                                                        }
                                                                    >
                                                                        <RadioButton.Box>
                                                                            <RadioButton.Indicator match="checked" />
                                                                        </RadioButton.Box>
                                                                    </RadioButton.Root>
                                                                    {opt.image ? (
                                                                        <Avatar.Root shape="circle">
                                                                            <Avatar.Image
                                                                                src={`https://primefaces.org/cdn/primevue/images/avatar/${opt.image}`}
                                                                            />
                                                                            <Avatar.Fallback>{opt.label[0]}</Avatar.Fallback>
                                                                        </Avatar.Root>
                                                                    ) : null}
                                                                    <span className="text-sm">{opt.label}</span>
                                                                </label>
                                                            );
                                                        })}
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
                                <DataTable.THeadCell style={{ width: '12%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Date</DataTable.THeadTitle>
                                        <DataTable.Filter field="date" display="menu" dataType="date">
                                            {({
                                                constraints,
                                                matchModeOptions,
                                                isActive,
                                                overlayVisible,
                                                onToggleOverlay,
                                                onHideOverlay,
                                                onConstraintChange,
                                                onMatchModeChange,
                                                onClear,
                                                onApply
                                            }: DataTableFilterInstance) => (
                                                <FilterPopover
                                                    isActive={isActive}
                                                    open={overlayVisible}
                                                    onOpenChange={(e) => toggleFilterOverlay(e, overlayVisible, onToggleOverlay, onHideOverlay)}
                                                >
                                                    <div className="mb-3">
                                                        <span className="text-sm font-semibold">Filter by Date</span>
                                                    </div>
                                                    {constraints.map((constraint, idx) => (
                                                        <div key={idx} className="mb-3 flex flex-col gap-2">
                                                            <FilterSelect
                                                                value={constraint.matchMode as string}
                                                                onChange={(v) => onMatchModeChange({} as React.SyntheticEvent, idx, v)}
                                                                options={matchModeOptions.map((opt) => ({
                                                                    label: opt.label,
                                                                    value: opt.value as string
                                                                }))}
                                                            />
                                                            <DatePicker.Root
                                                                value={constraint.value ? new Date(constraint.value as string) : null}
                                                                fluid
                                                                onValueChange={(ev: DatePickerRootValueChangeEvent) =>
                                                                    onConstraintChange(
                                                                        {} as React.SyntheticEvent,
                                                                        idx,
                                                                        ev.value instanceof Date ? ev.value.toISOString() : null
                                                                    )
                                                                }
                                                            >
                                                                <DatePicker.Input as={InputText} size="small" placeholder="mm/dd/yyyy" />
                                                                <DatePicker.Trigger>
                                                                    <Calendar />
                                                                </DatePicker.Trigger>
                                                                <DatePicker.Portal>
                                                                    <DatePicker.Positioner>
                                                                        <DatePicker.Popup>
                                                                            <DatePicker.Calendar>
                                                                                <DatePicker.Header>
                                                                                    <DatePicker.Prev
                                                                                        as={Button}
                                                                                        iconOnly
                                                                                        variant="text"
                                                                                        rounded
                                                                                        severity="secondary"
                                                                                        size="small"
                                                                                    >
                                                                                        <ChevronLeft />
                                                                                    </DatePicker.Prev>
                                                                                    <DatePicker.Title>
                                                                                        <DatePicker.SelectMonth />
                                                                                        <DatePicker.SelectYear />
                                                                                        <DatePicker.Decade />
                                                                                    </DatePicker.Title>
                                                                                    <DatePicker.Next
                                                                                        as={Button}
                                                                                        iconOnly
                                                                                        variant="text"
                                                                                        rounded
                                                                                        severity="secondary"
                                                                                        size="small"
                                                                                    >
                                                                                        <ChevronRight />
                                                                                    </DatePicker.Next>
                                                                                </DatePicker.Header>
                                                                                <DatePicker.Table>
                                                                                    <DatePicker.TableHead />
                                                                                    <DatePicker.TableBody />
                                                                                    <DatePicker.TableBody view="month" />
                                                                                    <DatePicker.TableBody view="year" />
                                                                                </DatePicker.Table>
                                                                            </DatePicker.Calendar>
                                                                        </DatePicker.Popup>
                                                                    </DatePicker.Positioner>
                                                                </DatePicker.Portal>
                                                            </DatePicker.Root>
                                                        </div>
                                                    ))}
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
                                <DataTable.THeadCell style={{ width: '12%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Balance</DataTable.THeadTitle>
                                        <DataTable.Filter field="balance" display="menu" dataType="numeric">
                                            {({
                                                constraints,
                                                matchModeOptions,
                                                isActive,
                                                overlayVisible,
                                                onToggleOverlay,
                                                onHideOverlay,
                                                onConstraintChange,
                                                onMatchModeChange,
                                                onClear,
                                                onApply
                                            }: DataTableFilterInstance) => (
                                                <FilterPopover
                                                    isActive={isActive}
                                                    open={overlayVisible}
                                                    onOpenChange={(e) => toggleFilterOverlay(e, overlayVisible, onToggleOverlay, onHideOverlay)}
                                                >
                                                    <div className="mb-3">
                                                        <span className="text-sm font-semibold">Filter by Balance</span>
                                                    </div>
                                                    {constraints.map((constraint, idx) => (
                                                        <div key={idx} className="mb-3 flex flex-col gap-2">
                                                            <FilterSelect
                                                                value={constraint.matchMode as string}
                                                                onChange={(v) => onMatchModeChange({} as React.SyntheticEvent, idx, v)}
                                                                options={matchModeOptions.map((opt) => ({
                                                                    label: opt.label,
                                                                    value: opt.value as string
                                                                }))}
                                                            />
                                                            <InputNumber.Root
                                                                value={(constraint.value as number) ?? null}
                                                                onValueChange={(e: { value: number | null | undefined }) =>
                                                                    onConstraintChange({} as React.SyntheticEvent, idx, e.value ?? null)
                                                                }
                                                                mode="currency"
                                                                currency="USD"
                                                                size="small"
                                                                fluid
                                                            >
                                                                <InputNumber.Input placeholder="Enter amount..." />
                                                            </InputNumber.Root>
                                                        </div>
                                                    ))}
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
                                <DataTable.THeadCell style={{ width: '12%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                        <DataTable.Filter field="status" display="menu">
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
                                                        <span className="text-sm font-semibold">Filter by Status</span>
                                                    </div>
                                                    <div className="mb-3 flex flex-col gap-1">
                                                        {statusOptions.map((opt) => {
                                                            const currentValue = (value as string) ?? '';
                                                            const checked = currentValue === opt.value;

                                                            return (
                                                                <label
                                                                    key={opt.value || 'all'}
                                                                    className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800"
                                                                >
                                                                    <RadioButton.Root
                                                                        checked={checked}
                                                                        onCheckedChange={() =>
                                                                            onChange({} as React.SyntheticEvent, opt.value || null)
                                                                        }
                                                                    >
                                                                        <RadioButton.Box>
                                                                            <RadioButton.Indicator match="checked" />
                                                                        </RadioButton.Box>
                                                                    </RadioButton.Root>
                                                                    {opt.value ? (
                                                                        <Tag severity={statusSeverity[opt.value] ?? 'secondary'}>{opt.label}</Tag>
                                                                    ) : (
                                                                        <span className="text-sm">{opt.label}</span>
                                                                    )}
                                                                </label>
                                                            );
                                                        })}
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
                                <DataTable.THeadCell style={{ width: '14%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Activity</DataTable.THeadTitle>
                                        <DataTable.Filter field="activity" display="menu">
                                            {({
                                                value,
                                                isActive,
                                                overlayVisible,
                                                onToggleOverlay,
                                                onHideOverlay,
                                                onChange,
                                                onClear,
                                                onApply
                                            }: DataTableFilterInstance) => {
                                                const range =
                                                    Array.isArray(value) && value.length === 2
                                                        ? (value as [number, number])
                                                        : ([0, 100] as [number, number]);

                                                return (
                                                    <FilterPopover
                                                        isActive={isActive}
                                                        open={overlayVisible}
                                                        onOpenChange={(e) => toggleFilterOverlay(e, overlayVisible, onToggleOverlay, onHideOverlay)}
                                                    >
                                                        <div className="mb-3">
                                                            <span className="text-sm font-semibold">Filter by Activity</span>
                                                        </div>
                                                        <div className="px-2 pt-2 pb-3">
                                                            <Slider.Root
                                                                value={range as unknown as number}
                                                                onValueChange={(e: { value: number | number[] | undefined }) => {
                                                                    if (Array.isArray(e.value)) {
                                                                        onChange(
                                                                            {} as React.SyntheticEvent,
                                                                            e.value as [number, number],
                                                                            FilterMatchMode.Between
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <Slider.Track>
                                                                    <Slider.Range />
                                                                </Slider.Track>
                                                                <Slider.Handle index={0} />
                                                                <Slider.Handle index={1} />
                                                            </Slider.Root>
                                                            <div className="flex items-center justify-between mt-3 text-sm">
                                                                <span>{range[0]}%</span>
                                                                <span>{range[1]}%</span>
                                                            </div>
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
                                                );
                                            }}
                                        </DataTable.Filter>
                                    </div>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '10%' }}>
                                    <div className="flex items-center justify-between gap-2">
                                        <DataTable.THeadTitle>Verified</DataTable.THeadTitle>
                                        <DataTable.Filter field="verified" display="menu">
                                            {({
                                                value,
                                                isActive,
                                                overlayVisible,
                                                onToggleOverlay,
                                                onHideOverlay,
                                                onChange,
                                                onClear,
                                                onApply
                                            }: DataTableFilterInstance) => {
                                                const current = value === true ? 'true' : value === false ? 'false' : '';

                                                return (
                                                    <FilterPopover
                                                        isActive={isActive}
                                                        open={overlayVisible}
                                                        onOpenChange={(e) => toggleFilterOverlay(e, overlayVisible, onToggleOverlay, onHideOverlay)}
                                                    >
                                                        <div className="mb-3">
                                                            <span className="text-sm font-semibold">Filter by Verified</span>
                                                        </div>
                                                        <div className="mb-3">
                                                            <ToggleButtonGroup
                                                                allowEmpty={false}
                                                                multiple={false}
                                                                value={current}
                                                                onValueChange={(e: { value: unknown }) => {
                                                                    const v = e.value as string;
                                                                    const next = v === '' ? null : v === 'true';

                                                                    onChange({} as React.SyntheticEvent, next);
                                                                }}
                                                            >
                                                                {verifiedOptions.map((opt) => (
                                                                    <ToggleButton.Root key={opt.value || 'all'} value={opt.value} size="small">
                                                                        <ToggleButton.Indicator>{opt.label}</ToggleButton.Indicator>
                                                                    </ToggleButton.Root>
                                                                ))}
                                                            </ToggleButtonGroup>
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
                                                );
                                            }}
                                        </DataTable.Filter>
                                    </div>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.id)}>
                                    <DataTable.Cell>
                                        <span className="font-medium">{String(item.name)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <Avatar.Root shape="circle">
                                                <Avatar.Image
                                                    src={`https://primefaces.org/cdn/primevue/images/avatar/${item.representative.image}`}
                                                />
                                                <Avatar.Fallback>{item.representative.name[0]}</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span className="text-sm">{item.representative.name}</span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{formatDate(item.date)}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${Number(item.balance).toLocaleString()}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.status as string] ?? 'secondary'}>{String(item.status)}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-1.5 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden">
                                                <div className="h-full bg-primary-500" style={{ width: `${Number(item.activity)}%` }} />
                                            </div>
                                            <span className="text-xs text-surface-500 dark:text-surface-400 tabular-nums">
                                                {Number(item.activity)}%
                                            </span>
                                        </div>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        {item.verified ? <Tag severity="success">Verified</Tag> : <Tag severity="secondary">—</Tag>}
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={8}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                                <Database className="w-8 h-8 text-surface-400 dark:text-surface-500" />
                                            </div>
                                            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching customers</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
                <DataTable.Pagination>
                    {({
                        page,
                        rows,
                        totalRecords,
                        onPageChange
                    }: {
                        page: number;
                        rows: number;
                        totalRecords: number;
                        onPageChange: (event: React.SyntheticEvent, newPage: number) => void;
                    }) => (
                        <Paginator.Root
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

### Export

Export table data to CSV with customizable fields and headers.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import { FileExport } from '@primeicons/react/file-export';
import { Database } from '@primeicons/react/database';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function ExportDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 8));
    }, []);

    return (
        <DataTable.Root data={products} className="w-full">
            <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-sm text-surface-500 dark:text-surface-400">Export visible rows to CSV with custom column headers.</span>
                <DataTable.Export
                    as={Button}
                    size="small"
                    fileName="products"
                    headers={{ code: 'Code', name: 'Name', category: 'Category', price: 'Price', quantity: 'Quantity', inventoryStatus: 'Status' }}
                >
                    <FileExport />
                    Export CSV
                </DataTable.Export>
            </div>
            <DataTable.TableContainer>
                <DataTable.Table style={{ minWidth: '50rem' }}>
                    <DataTable.THead>
                        <DataTable.THeadRow>
                            <DataTable.THeadCell>
                                <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                            </DataTable.THeadCell>
                            <DataTable.THeadCell>
                                <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                            </DataTable.THeadCell>
                            <DataTable.THeadCell>
                                <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                            </DataTable.THeadCell>
                            <DataTable.THeadCell>
                                <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                            </DataTable.THeadCell>
                            <DataTable.THeadCell>
                                <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                            </DataTable.THeadCell>
                        </DataTable.THeadRow>
                    </DataTable.THead>
                    <DataTable.TBody>
                        {({ item }: { item: any }) => (
                            <DataTable.Row key={item.id}>
                                <DataTable.Cell>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                            alt={item.name}
                                            width={36}
                                            height={36}
                                            className="rounded-md shadow"
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-medium">{item.name}</span>
                                            <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                        </div>
                                    </div>
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    <Tag severity="secondary">{item.category}</Tag>
                                </DataTable.Cell>
                                <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                <DataTable.Cell>
                                    <span className="font-semibold">${item.price}</span>
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                        <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                        <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                            Hang tight, your data will appear here in a moment.
                                        </p>
                                    </div>
                                </div>
                            </DataTable.Cell>
                        </DataTable.Row>
                    </DataTable.EmptyTBody>
                </DataTable.Table>
            </DataTable.TableContainer>
        </DataTable.Root>
    );
}

```

### Lazy Loading

Server-side data loading with pagination integration.

```tsx
'use client';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { DataTable } from '@primereact/ui/datatable';
import { InputText } from '@primereact/ui/inputtext';
import { Paginator } from '@primereact/ui/paginator';
import { Tag } from '@primereact/ui/tag';
import type { SortOrder } from '@primereact/ui/datatable';
import type { PaginatorRootChangeEvent } from '@primereact/ui/paginator';
import type { PaginatorPagesInstance } from '@primereact/ui/paginator';
import * as React from 'react';

interface Product {
    id: number;
    code: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
}

const ALL_PRODUCTS: Product[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    code: `P${String(i + 1).padStart(3, '0')}`,
    name: `Product ${i + 1}`,
    category: ['Accessories', 'Clothing', 'Electronics', 'Fitness'][i % 4],
    price: ((i * 13 + 10) % 200) + 10,
    quantity: (i * 7 + 3) % 100
}));

function mockFetch(params: {
    first: number;
    rows: number;
    sortField?: string;
    sortOrder?: SortOrder;
    globalFilter?: string | null;
}): Promise<{ slice: Product[]; total: number }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            let rows = [...ALL_PRODUCTS];

            if (params.globalFilter) {
                const needle = params.globalFilter.toLowerCase();

                rows = rows.filter(
                    (r) => r.code.toLowerCase().includes(needle) || r.name.toLowerCase().includes(needle) || r.category.toLowerCase().includes(needle)
                );
            }

            if (params.sortField && params.sortOrder != null && params.sortOrder !== 0) {
                const field = params.sortField as keyof Product;
                const dir = params.sortOrder;

                rows.sort((a, b) => {
                    const va = a[field];
                    const vb = b[field];

                    if (va < vb) return -1 * dir;
                    if (va > vb) return 1 * dir;

                    return 0;
                });
            }

            const total = rows.length;
            const slice = rows.slice(params.first, params.first + params.rows);

            resolve({ slice, total });
        }, 400);
    });
}

export default function LazyDemo() {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState<Product[]>([]);
    const [totalRecords, setTotalRecords] = React.useState(0);
    const [search, setSearch] = React.useState('');
    const [lastEvent, setLastEvent] = React.useState<string>('');

    const load = React.useCallback(
        async (params: { first: number; rows: number; sortField?: string; sortOrder?: SortOrder; globalFilter?: string | null }) => {
            setLoading(true);
            setLastEvent(
                JSON.stringify({
                    first: params.first,
                    rows: params.rows,
                    sortField: params.sortField,
                    sortOrder: params.sortOrder,
                    globalFilter: params.globalFilter
                })
            );
            const { slice, total } = await mockFetch(params);

            setData(slice);
            setTotalRecords(total);
            setLoading(false);
        },
        []
    );

    React.useEffect(() => {
        load({ first: 0, rows: 10, globalFilter: null });
    }, [load]);

    return (
        <div className="w-full">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <InputText
                    type="search"
                    placeholder="Search code / name / category..."
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    style={{ minWidth: '20rem' }}
                />
                <span className="text-xs text-surface-500 dark:text-surface-400">Last lazy event: {lastEvent || '—'}</span>
            </div>
            <DataTable.Root
                data={data}
                dataKey="id"
                lazy
                loading={loading}
                totalRecords={totalRecords}
                paginator
                defaultRows={10}
                globalFilter={search || null}
                globalFilterFields={['code', 'name', 'category']}
                removableSort
                onLazyLoad={(e: { first: number; rows: number; sortField?: string; sortOrder?: SortOrder; globalFilter?: string | null }) => {
                    load({ first: e.first, rows: e.rows, sortField: e.sortField, sortOrder: e.sortOrder, globalFilter: e.globalFilter });
                }}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.Sort field="code" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Code</DataTable.THeadTitle>
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
                                    <DataTable.Sort field="category" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Category</DataTable.THeadTitle>
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
                                    <DataTable.Sort field="price" className="inline-flex items-center gap-2">
                                        <DataTable.THeadTitle>Price</DataTable.THeadTitle>
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
                                    <DataTable.THeadTitle>Quantity</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.id)}>
                                    <DataTable.Cell>
                                        <span className="font-mono text-xs text-surface-500 dark:text-surface-400">{String(item.code)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-medium">{String(item.name)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity="secondary">{String(item.category)}</Tag>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <span className="font-semibold">${String(item.price)}</span>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{String(item.quantity)}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={5}>No products found.</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
                <DataTable.Pagination>
                    {({
                        page,
                        rows,
                        totalRecords: total,
                        onPageChange
                    }: {
                        page: number;
                        rows: number;
                        totalRecords: number;
                        onPageChange: (event: React.SyntheticEvent, newPage: number) => void;
                    }) => (
                        <Paginator.Root
                            className="py-3 px-3.5 border-t border-surface-200 dark:border-surface-700"
                            page={page + 1}
                            total={total}
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

### Loading

Two patterns for displaying a loading state while data is being fetched.

#### Overlay

Set the `loading` prop on `DataTable.Root` and provide a spinner inside `DataTable.Loading`. An absolutely positioned overlay dims the table and shows the indicator.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Refresh } from '@primeicons/react/refresh';
import { Spinner } from '@primeicons/react/spinner';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

export default function LoadingOverlayDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const refresh = React.useCallback(() => {
        setIsLoading(true);
        setTimeout(() => {
            setProducts(ProductService.getProductsData().slice(0, 6));
            setIsLoading(false);
        }, 1500);
    }, []);

    React.useEffect(() => {
        refresh();
    }, [refresh]);

    return (
        <div className="w-full">
            <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-sm text-surface-500 dark:text-surface-400">Click refresh to simulate a network fetch.</span>
                <Button size="small" onClick={refresh} disabled={isLoading}>
                    <Refresh />
                    Refresh
                </Button>
            </div>
            <div className="relative">
                <DataTable.Root data={products} loading={isLoading}>
                    <DataTable.TableContainer>
                        <DataTable.Table style={{ minWidth: '50rem' }}>
                            <DataTable.THead>
                                <DataTable.THeadRow>
                                    <DataTable.THeadCell>
                                        <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                    </DataTable.THeadCell>
                                    <DataTable.THeadCell>
                                        <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                    </DataTable.THeadCell>
                                    <DataTable.THeadCell>
                                        <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                    </DataTable.THeadCell>
                                    <DataTable.THeadCell>
                                        <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                    </DataTable.THeadCell>
                                </DataTable.THeadRow>
                            </DataTable.THead>
                            <DataTable.TBody>
                                {({ item }: { item: any }) => (
                                    <DataTable.Row key={item.id}>
                                        <DataTable.Cell>
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                    alt={item.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-md shadow"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{item.name}</span>
                                                    <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                                </div>
                                            </div>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Tag severity="secondary">{item.category}</Tag>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <span className="font-semibold">${item.price}</span>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                )}
                            </DataTable.TBody>
                        </DataTable.Table>
                    </DataTable.TableContainer>
                    <DataTable.Loading>
                        <div className="flex flex-col items-center gap-2">
                            <Spinner className="w-10! h-10! animate-spin text-primary" />
                            <span className="text-sm text-surface-600 dark:text-surface-300">Loading products…</span>
                        </div>
                    </DataTable.Loading>
                </DataTable.Root>
            </div>
        </div>
    );
}

```

#### Skeleton

Render placeholder rows filled with `Skeleton` elements while the request is in flight. This keeps the row layout stable and avoids an overlay that covers existing content.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Refresh } from '@primeicons/react/refresh';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Skeleton } from '@primereact/ui/skeleton';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

const placeholders = Array.from({ length: 6 }, (_, i) => ({ id: `placeholder-${i}` }));

export default function LoadingSkeletonDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const refresh = React.useCallback(() => {
        setIsLoading(true);
        setProducts([]);
        setTimeout(() => {
            setProducts(ProductService.getProductsData().slice(0, 6));
            setIsLoading(false);
        }, 1500);
    }, []);

    React.useEffect(() => {
        refresh();
    }, [refresh]);

    const rows = isLoading ? placeholders : products;

    return (
        <div className="w-full">
            <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-sm text-surface-500 dark:text-surface-400">Click refresh to simulate a network fetch.</span>
                <Button size="small" onClick={refresh} disabled={isLoading}>
                    <Refresh />
                    Refresh
                </Button>
            </div>
            <DataTable.Root data={rows}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell style={{ width: '40%' }}>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '20%' }}>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '15%' }}>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell style={{ width: '25%' }}>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) =>
                                isLoading ? (
                                    <DataTable.Row key={item.id}>
                                        <DataTable.Cell>
                                            <div className="flex items-center gap-3">
                                                <Skeleton width="40px" height="40px" borderRadius="6px" />
                                                <div className="flex flex-col gap-1">
                                                    <Skeleton width="8rem" height="0.6rem" borderRadius="4px" />
                                                    <Skeleton width="5rem" height="0.55rem" borderRadius="4px" />
                                                </div>
                                            </div>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Skeleton width="5rem" height="1rem" borderRadius="16px" />
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Skeleton width="3rem" height="0.6rem" borderRadius="4px" />
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Skeleton width="6rem" height="1rem" borderRadius="16px" />
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                ) : (
                                    <DataTable.Row key={item.id}>
                                        <DataTable.Cell>
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                    alt={item.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-md shadow"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{item.name}</span>
                                                    <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                                                </div>
                                            </div>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Tag severity="secondary">{item.category}</Tag>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <span className="font-semibold">${item.price}</span>
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                )
                            }
                        </DataTable.TBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
        </div>
    );
}

```

### Empty State

Custom empty state when no data is available, using `EmptyTBody`.

```tsx
'use client';
import { Inbox } from '@primeicons/react/inbox';
import { Plus } from '@primeicons/react/plus';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';

export default function EmptyDemo() {
    return (
        <div className="w-full">
            <DataTable.Root data={[]}>
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '50rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Product</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: any }) => (
                                <DataTable.Row key={String(item.id)}>
                                    <DataTable.Cell>{String(item.name)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.category)}</DataTable.Cell>
                                    <DataTable.Cell>${String(item.price)}</DataTable.Cell>
                                    <DataTable.Cell>{String(item.status)}</DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={4}>
                                    <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                                        <div className="w-14 h-14 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                                            <Inbox className="w-7 h-7 text-surface-400 dark:text-surface-500" />
                                        </div>
                                        <div>
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">No products yet</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Add your first product to see it listed here.
                                            </p>
                                        </div>
                                        <Button size="small">
                                            <Plus />
                                            Add product
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

Sort, filter (per-column + global), and cell editing composed in a single table.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Search } from '@primeicons/react/search';
import { Database } from '@primeicons/react/database';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { FilterMatchMode } from '@primereact/ui/datatable';
import type { DataTableCellEditEvent } from '@primereact/ui/datatable';
import type { DataTableFilterInstance } from '@primereact/ui/datatable';
import { DataTable } from '@primereact/ui/datatable';
import { IconField } from '@primereact/ui/iconfield';
import { InputNumber } from '@primereact/ui/inputnumber';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

const statusLabel: Record<string, string> = {
    INSTOCK: 'In Stock',
    LOWSTOCK: 'Low Stock',
    OUTOFSTOCK: 'Out of Stock'
};

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

export default function AdvancedDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [filters, setFilters] = React.useState<Record<string, { value: unknown; matchMode: FilterMatchMode }>>({
        name: { value: null, matchMode: FilterMatchMode.Contains },
        category: { value: null, matchMode: FilterMatchMode.Contains }
    });
    const pendingValueRef = React.useRef<Record<string, unknown>>({});

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    const handleCellEditComplete = React.useCallback((e: DataTableCellEditEvent) => {
        const id = (e.rowData as unknown as Product | undefined)?.id;

        if (id === undefined) return;

        const editKey = `${id}-${e.field}`;
        const next = pendingValueRef.current[editKey];

        if (next === undefined) return;

        setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, [e.field]: next } : p)));
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
                data={products}
                dataKey="id"
                removableSort
                filters={filters}
                onFilter={(e: { filters: Record<string, unknown> }) => setFilters(e.filters as typeof filters)}
                globalFilter={globalFilter}
                globalFilterFields={['name', 'category', 'code']}
                editMode="cell"
                onCellEditComplete={handleCellEditComplete}
            >
                <DataTable.TableContainer>
                    <DataTable.Table style={{ minWidth: '60rem' }}>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <SortableHeader field="name">
                                        <DataTable.THeadTitle>Name</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="category">
                                        <DataTable.THeadTitle>Category</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="price">
                                        <DataTable.THeadTitle>Price</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTable.THeadTitle>Qty</DataTable.THeadTitle>
                                    </SortableHeader>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTable.THeadTitle>Status</DataTable.THeadTitle>
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
                                <DataTable.THeadCell>
                                    <DataTable.Filter field="category" display="row" dataType="text">
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
                                <DataTable.THeadCell />
                                <DataTable.THeadCell />
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="name" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <span className="font-medium">{item.name}</span>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={String(item.name)}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${item.id}-name`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="category" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <Tag severity="secondary">{item.category}</Tag>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputText
                                                    defaultValue={String(item.category)}
                                                    onChange={(e: any) => {
                                                        pendingValueRef.current[`${item.id}-category`] = e.target.value;
                                                    }}
                                                    size="small"
                                                    fluid
                                                />
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <DataTable.CellEditor field="price" rowIndex={index} rowData={item}>
                                            <DataTable.CellEditorDisplay>
                                                <span className="font-semibold">${item.price}</span>
                                            </DataTable.CellEditorDisplay>
                                            <DataTable.CellEditorContent>
                                                <InputNumber.Root
                                                    defaultValue={Number(item.price)}
                                                    onValueChange={(e: any) => {
                                                        pendingValueRef.current[`${item.id}-price`] = e.value;
                                                    }}
                                                    mode="currency"
                                                    currency="USD"
                                                    size="small"
                                                    fluid
                                                >
                                                    <InputNumber.Input />
                                                </InputNumber.Root>
                                            </DataTable.CellEditorContent>
                                        </DataTable.CellEditor>
                                    </DataTable.Cell>
                                    <DataTable.Cell>{item.quantity}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
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
                                            <p className="m-0 font-semibold text-surface-900 dark:text-surface-0">Fetching products</p>
                                            <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                                                Hang tight, your data will appear here in a moment.
                                            </p>
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

### Database Editor

A spreadsheet-style table editor composed from `DataTable`, `Menu`, `Checkbox`, `Drawer` and `Select`: typed column headers with a per-column menu (sort, copy, edit, freeze, delete), select-all and per-row checkboxes, a global filter, in-place **cell editing**, **frozen columns** that stay pinned while the table scrolls horizontally, an empty-table state, plus working **Insert row** and **Add/Edit column** flows that open a side `Drawer`. Sorting, editing, freezing, row/column add and delete all mutate state live.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowLeft } from '@primeicons/react/arrow-left';
import { ArrowRight } from '@primeicons/react/arrow-right';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Copy } from '@primeicons/react/copy';
import { Dot } from '@primeicons/react/dot';
import { Key } from '@primeicons/react/key';
import { Lock } from '@primeicons/react/lock';
import { Pencil } from '@primeicons/react/pencil';
import { Plus } from '@primeicons/react/plus';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { Trash } from '@primeicons/react/trash';
import type { DataTableColumnReorderEvent, DataTableSortEvent, SortOrder } from '@primereact/ui/datatable';
import type { DataTablePaginationInstance, DataTableSelectionInstance } from '@primereact/ui/datatable';
import { Button } from '@primereact/ui/button';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { DataTable } from '@primereact/ui/datatable';
import { Drawer, type DrawerRootChangeEvent } from '@primereact/ui/drawer';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import { Menu } from '@primereact/ui/menu';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import type { MenuRadioItemGroupValueChangeEvent } from '@primereact/ui/menu';
import * as React from 'react';

interface Row {
    __rid: number;
    id: number;
    created_at: string;
    email: string;
    plan: string;
    [key: string]: string | number;
}

interface Column {
    field: string;
    type: string;
    pk?: boolean;
    frozen?: boolean;
}

const names = [
    'amy',
    'bernardo',
    'asiya',
    'ioni',
    'stephen',
    'xuxue',
    'onyama',
    'ivan',
    'anna',
    'elwin',
    'kadir',
    'mira',
    'leon',
    'priya',
    'tomas',
    'nadia',
    'oscar',
    'hana',
    'felix',
    'sara'
];
const plans = ['free', 'pro', 'team'];

const seed: Row[] = names.map((name, i) => {
    const day = String((i % 27) + 1).padStart(2, '0');
    const month = String((i % 12) + 1).padStart(2, '0');

    return {
        __rid: i + 1,
        id: i + 1,
        created_at: `2026-${month}-${day} 09:1${i % 6}:4${i % 9}+00`,
        email: `${name}@acme.dev`,
        plan: plans[i % plans.length]
    };
});

const initialColumns: Column[] = [
    { field: 'id', type: 'int8', pk: true },
    { field: 'created_at', type: 'timestamptz' },
    { field: 'email', type: 'text' },
    { field: 'plan', type: 'text' }
];

const planOptions = [
    { label: 'free', value: 'free' },
    { label: 'pro', value: 'pro' },
    { label: 'team', value: 'team' }
];

const typeOptions = [
    { label: 'text', value: 'text' },
    { label: 'int8', value: 'int8' },
    { label: 'bool', value: 'bool' },
    { label: 'timestamptz', value: 'timestamptz' }
];

const rowsOptions = [
    { label: '10 rows', value: '10' },
    { label: '20 rows', value: '20' },
    { label: '50 rows', value: '50' },
    { label: '100 rows', value: '100' }
];

function PlainSelect({
    value,
    onChange,
    options,
    placeholder
}: {
    value: string;
    onChange: (v: string) => void;
    options: { label: string; value: string }[];
    placeholder?: string;
}) {
    return (
        <Select.Root
            value={value}
            onValueChange={(e: SelectValueChangeEvent) => onChange(e.value as string)}
            options={options}
            optionLabel="label"
            optionValue="value"
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

interface ColumnMenuProps {
    field: string;
    sortValue: string;
    frozen: boolean;
    onSortChange: (value: string) => void;
    onCopy: () => void;
    onEdit: () => void;
    onFreeze: () => void;
    onDelete: () => void;
}

function ColumnMenu({ field, sortValue, frozen, onSortChange, onCopy, onEdit, onFreeze, onDelete }: ColumnMenuProps) {
    return (
        <Menu.Root>
            <Menu.Trigger as={Button} iconOnly variant="text" severity="secondary" size="small" aria-label={`${field} options`}>
                <ChevronDown />
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Positioner sideOffset={4} align="start">
                    <Menu.Popup className="w-56">
                        <Menu.List>
                            <Menu.RadioItemGroup
                                value={sortValue}
                                onValueChange={(e: MenuRadioItemGroupValueChangeEvent) => onSortChange(e.value as string)}
                            >
                                <Menu.RadioItem value="asc">
                                    <ArrowUp className="mr-2" />
                                    Sort Ascending
                                    <Menu.RadioItemIndicator className="ml-auto">
                                        <Dot />
                                    </Menu.RadioItemIndicator>
                                </Menu.RadioItem>
                                <Menu.RadioItem value="desc">
                                    <ArrowDown className="mr-2" />
                                    Sort Descending
                                    <Menu.RadioItemIndicator className="ml-auto">
                                        <Dot />
                                    </Menu.RadioItemIndicator>
                                </Menu.RadioItem>
                            </Menu.RadioItemGroup>
                            <Menu.Separator />
                            <Menu.Group>
                                <Menu.Item onClick={onCopy}>
                                    <Copy className="mr-2" />
                                    Copy name
                                </Menu.Item>
                                <Menu.Item onClick={onEdit}>
                                    <Pencil className="mr-2" />
                                    Edit column
                                </Menu.Item>
                                <Menu.Item onClick={onFreeze}>
                                    <Lock className="mr-2" />
                                    {frozen ? 'Unfreeze column' : 'Freeze column'}
                                </Menu.Item>
                            </Menu.Group>
                            <Menu.Separator />
                            <Menu.Group>
                                <Menu.Item className="text-red-600!" onClick={onDelete}>
                                    <Trash className="mr-2" />
                                    Delete column
                                </Menu.Item>
                            </Menu.Group>
                        </Menu.List>
                    </Menu.Popup>
                </Menu.Positioner>
            </Menu.Portal>
        </Menu.Root>
    );
}

export default function DatabaseEditorDemo() {
    const databaseContainerRef = React.useRef<HTMLDivElement>(null);
    const [rows, setRows] = React.useState<Row[]>(seed);
    const [columns, setColumns] = React.useState<Column[]>(initialColumns);
    const [selectedKeys, setSelectedKeys] = React.useState<Record<string, boolean>>({});
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [sortField, setSortField] = React.useState<string | undefined>(undefined);
    const [sortOrder, setSortOrder] = React.useState<SortOrder>(0);

    // Insert-row drawer
    const [rowDrawer, setRowDrawer] = React.useState(false);
    const [draftEmail, setDraftEmail] = React.useState('');
    const [draftPlan, setDraftPlan] = React.useState('free');

    // Add/edit-column drawer
    const [colDrawer, setColDrawer] = React.useState(false);
    const [editingField, setEditingField] = React.useState<string | null>(null);
    const [draftColName, setDraftColName] = React.useState('');
    const [draftColType, setDraftColType] = React.useState('text');

    const selectedCount = Object.values(selectedKeys).filter(Boolean).length;

    const insertRow = () => {
        if (!draftEmail.trim()) return;

        const nextRid = rows.reduce((max, r) => Math.max(max, r.__rid), 0) + 1;
        const nextId = rows.reduce((max, r) => Math.max(max, Number(r.id) || 0), 0) + 1;

        setRows((prev) => [...prev, { __rid: nextRid, id: nextId, created_at: '2026-06-04 12:00:00+00', email: draftEmail.trim(), plan: draftPlan }]);
        setDraftEmail('');
        setDraftPlan('free');
        setRowDrawer(false);
    };

    const openAddColumn = () => {
        setEditingField(null);
        setDraftColName('');
        setDraftColType('text');
        setColDrawer(true);
    };

    const openEditColumn = (col: Column) => {
        setEditingField(col.field);
        setDraftColName(col.field);
        setDraftColType(col.type);
        setColDrawer(true);
    };

    const saveColumn = () => {
        const name = draftColName.trim();

        if (!name) return;

        if (editingField) {
            setColumns((prev) => prev.map((c) => (c.field === editingField ? { ...c, field: name, type: draftColType } : c)));

            if (name !== editingField) {
                setRows((prev) =>
                    prev.map((r) => {
                        const { [editingField]: oldValue, ...rest } = r;

                        return { ...rest, [name]: oldValue } as Row;
                    })
                );
            }
        } else {
            if (columns.some((c) => c.field === name)) return;

            setColumns((prev) => [...prev, { field: name, type: draftColType }]);
        }

        setColDrawer(false);
        setEditingField(null);
    };

    const deleteColumn = (field: string) => setColumns((prev) => prev.filter((c) => c.field !== field));

    const freezeColumn = (field: string) => setColumns((prev) => prev.map((c) => (c.field === field ? { ...c, frozen: !c.frozen } : c)));

    const reorderColumns = (dragIndex: number, dropIndex: number) => {
        const from = dragIndex - 1;
        const to = dropIndex - 1;

        setColumns((prev) => {
            if (from < 0 || from >= prev.length || to < 0 || to > prev.length) return prev;

            const next = [...prev];
            const [moved] = next.splice(from, 1);

            next.splice(to, 0, moved);

            return next;
        });
    };

    const deleteSelected = () => {
        setRows((prev) => prev.filter((r) => !selectedKeys[String(r.__rid)]));
        setSelectedKeys({});
    };

    const sortBy = (field: string, order: SortOrder) => {
        setSortField(field);
        setSortOrder(order);
    };

    const copyName = (field: string) => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) navigator.clipboard.writeText(field);
    };

    const pendingValueRef = React.useRef<Record<string, unknown>>({});

    const commitCell = React.useCallback((rid: number, field: string, value: string | number) => {
        setRows((prev) => prev.map((r) => (r.__rid === rid ? { ...r, [field]: value } : r)));
    }, []);

    const onCellEditComplete = React.useCallback(
        (e: { rowIndex: number; field: string; rowData: Record<string, unknown> }) => {
            const { rowIndex, field, rowData } = e;
            const editKey = `${rowIndex}-${field}`;
            const newValue = pendingValueRef.current[editKey];

            if (newValue !== undefined) {
                const rid = Number(rowData.__rid);

                commitCell(rid, field, newValue as string | number);
                delete pendingValueRef.current[editKey];
            }
        },
        [commitCell]
    );

    return (
        <div ref={databaseContainerRef} className="relative w-full overflow-hidden rounded-lg border border-surface-200 dark:border-surface-700">
            {/* Toolbar */}
            <div className="flex items-center gap-2 border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900 px-3 py-2">
                <IconField.Root className="flex-1 max-w-md">
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        type="search"
                        placeholder="Filter by id, created_at or email"
                        value={globalFilter}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)}
                        size="small"
                        fluid
                    />
                </IconField.Root>
                <div className="flex-1" />
                {selectedCount > 0 && (
                    <Button size="small" severity="danger" variant="outlined" onClick={deleteSelected}>
                        <Trash className="mr-1" />
                        Delete {selectedCount}
                    </Button>
                )}
                <Button size="small" onClick={() => setRowDrawer(true)}>
                    <Plus className="mr-1" />
                    Insert
                </Button>
            </div>

            <DataTable.Root
                data={rows}
                dataKey="__rid"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: { value: Record<string, boolean> }) => setSelectedKeys(e.value)}
                globalFilter={globalFilter}
                globalFilterFields={columns.map((c) => c.field)}
                sortField={sortField}
                sortOrder={sortOrder}
                onSortChange={(e: DataTableSortEvent) => {
                    setSortField(e.field);
                    setSortOrder(e.order);
                }}
                removableSort
                scrollable
                editMode="cell"
                onCellEditComplete={onCellEditComplete}
                paginator
                defaultRows={10}
                reorderableColumns
                onColumnReorder={(e: DataTableColumnReorderEvent) => reorderColumns(e.dragIndex, e.dropIndex)}
            >
                <DataTable.TableContainer>
                    <DataTable.Table>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell frozen style={{ width: '3rem' }}>
                                    <DataTable.Selection>
                                        {({ isAllSelected, isSomeSelected, toggleAll }: DataTableSelectionInstance) => (
                                            <Checkbox.Root
                                                checked={isAllSelected}
                                                indeterminate={isSomeSelected && !isAllSelected}
                                                onCheckedChange={(e: CheckboxRootChangeEvent) => toggleAll(e.originalEvent)}
                                                size="small"
                                            >
                                                <Checkbox.Box>
                                                    <Checkbox.Indicator match="checked">
                                                        <Check />
                                                    </Checkbox.Indicator>
                                                    <Checkbox.Indicator match="indeterminate">
                                                        <span className="block h-0.5 w-2 bg-current" />
                                                    </Checkbox.Indicator>
                                                </Checkbox.Box>
                                            </Checkbox.Root>
                                        )}
                                    </DataTable.Selection>
                                </DataTable.THeadCell>
                                {columns.map((col) => (
                                    <DataTable.THeadCell key={col.field} frozen={col.frozen} style={{ minWidth: '12rem' }}>
                                        <div className="flex items-center justify-between gap-2">
                                            <DataTable.ColumnReorderTarget className="relative min-w-0 flex-1">
                                                {({ isOver, side }: { isOver: boolean; side: 'start' | 'end' | null }) => (
                                                    <>
                                                        {isOver && (
                                                            <span
                                                                className={`absolute inset-y-0 w-0.5 bg-primary ${side === 'end' ? 'right-0' : 'left-0'}`}
                                                            />
                                                        )}
                                                        <DataTable.ColumnReorder className="inline-flex cursor-grab items-center gap-1.5 whitespace-nowrap text-xs select-none">
                                                            {col.pk && <Key className="text-emerald-500" size={13} />}
                                                            {col.frozen && <Lock className="text-surface-400" size={11} />}
                                                            <DataTable.THeadTitle>{col.field}</DataTable.THeadTitle>
                                                            <span className="font-mono font-normal text-surface-400 dark:text-surface-500">
                                                                {col.type}
                                                            </span>
                                                            {sortField === col.field && sortOrder === 1 && <ArrowUp size={11} />}
                                                            {sortField === col.field && sortOrder === -1 && <ArrowDown size={11} />}
                                                        </DataTable.ColumnReorder>
                                                    </>
                                                )}
                                            </DataTable.ColumnReorderTarget>
                                            <ColumnMenu
                                                field={col.field}
                                                sortValue={sortField === col.field ? (sortOrder === 1 ? 'asc' : sortOrder === -1 ? 'desc' : '') : ''}
                                                frozen={!!col.frozen}
                                                onSortChange={(value) => sortBy(col.field, value === 'asc' ? 1 : -1)}
                                                onCopy={() => copyName(col.field)}
                                                onEdit={() => openEditColumn(col)}
                                                onFreeze={() => freezeColumn(col.field)}
                                                onDelete={() => deleteColumn(col.field)}
                                            />
                                        </div>
                                    </DataTable.THeadCell>
                                ))}
                                <DataTable.THeadCell style={{ width: '3rem' }}>
                                    <Button iconOnly variant="text" severity="secondary" size="small" aria-label="Add column" onClick={openAddColumn}>
                                        <Plus />
                                    </Button>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody key={columns.map((c) => c.field).join(',')}>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTable.Row key={String(item.__rid)}>
                                    <DataTable.Cell frozen>
                                        <DataTable.Selection>
                                            {({ isSelected, toggle }: DataTableSelectionInstance) => (
                                                <Checkbox.Root
                                                    checked={isSelected}
                                                    onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
                                                    size="small"
                                                >
                                                    <Checkbox.Box>
                                                        <Checkbox.Indicator match="checked">
                                                            <Check />
                                                        </Checkbox.Indicator>
                                                    </Checkbox.Box>
                                                </Checkbox.Root>
                                            )}
                                        </DataTable.Selection>
                                    </DataTable.Cell>
                                    {columns.map((col) => {
                                        const display = (
                                            <span
                                                className={`flex h-7 items-center whitespace-nowrap text-xs ${col.type === 'text' && col.field !== 'plan' ? '' : 'font-mono'}`}
                                            >
                                                {item[col.field] != null ? (
                                                    String(item[col.field])
                                                ) : (
                                                    <span className="text-surface-400 dark:text-surface-600">NULL</span>
                                                )}
                                            </span>
                                        );

                                        return (
                                            <DataTable.Cell key={col.field} frozen={col.frozen}>
                                                <DataTable.CellEditor field={col.field} rowIndex={index} rowData={item}>
                                                    <DataTable.CellEditorDisplay>{display}</DataTable.CellEditorDisplay>
                                                    <DataTable.CellEditorContent>
                                                        {col.field === 'plan' ? (
                                                            <PlainSelect
                                                                value={String(item.plan ?? 'free')}
                                                                onChange={(v) => commitCell(item.__rid, col.field, v)}
                                                                options={planOptions}
                                                            />
                                                        ) : (
                                                            <InputText
                                                                defaultValue={item[col.field] != null ? String(item[col.field]) : ''}
                                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                                    pendingValueRef.current[`${index}-${col.field}`] = e.target.value;
                                                                }}
                                                                size="small"
                                                                fluid
                                                            />
                                                        )}
                                                    </DataTable.CellEditorContent>
                                                </DataTable.CellEditor>
                                            </DataTable.Cell>
                                        );
                                    })}
                                    <DataTable.Cell />
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                        <DataTable.EmptyTBody>
                            <DataTable.Row>
                                <DataTable.Cell colSpan={columns.length + 2}>
                                    <div className="py-24 text-center text-sm text-surface-500 dark:text-surface-400">This table is empty</div>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </DataTable.EmptyTBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
                <DataTable.Pagination>
                    {({
                        page,
                        pageCount,
                        rows: pageRows,
                        totalRecords,
                        canPrev,
                        canNext,
                        onPageChange,
                        onRowsChange
                    }: DataTablePaginationInstance) => (
                        <div className="flex items-center gap-2 border-t border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900 px-3 py-1.5 text-xs text-surface-600 dark:text-surface-300">
                            <Button
                                iconOnly
                                variant="text"
                                severity="secondary"
                                size="small"
                                aria-label="Previous page"
                                disabled={!canPrev}
                                onClick={(e: React.MouseEvent) => onPageChange(e, page - 1)}
                            >
                                <ArrowLeft size={14} />
                            </Button>
                            <span>Page</span>
                            <span className="rounded border border-surface-300 dark:border-surface-600 px-2 py-0.5 font-mono">{page + 1}</span>
                            <span>of {Math.max(1, pageCount)}</span>
                            <Button
                                iconOnly
                                variant="text"
                                severity="secondary"
                                size="small"
                                aria-label="Next page"
                                disabled={!canNext}
                                onClick={(e: React.MouseEvent) => onPageChange(e, page + 1)}
                            >
                                <ArrowRight size={14} />
                            </Button>
                            <div className="w-28">
                                <PlainSelect
                                    value={String(pageRows)}
                                    onChange={(v) => onRowsChange({} as React.SyntheticEvent, Number(v))}
                                    options={rowsOptions}
                                />
                            </div>
                            <span className="text-surface-400 dark:text-surface-500">{totalRecords} records</span>
                        </div>
                    )}
                </DataTable.Pagination>
                <DataTable.ColumnReorderIndicatorUp>
                    <ArrowDown />
                </DataTable.ColumnReorderIndicatorUp>
                <DataTable.ColumnReorderIndicatorDown>
                    <ArrowUp />
                </DataTable.ColumnReorderIndicatorDown>
            </DataTable.Root>

            {/* Insert row drawer */}
            <Drawer.Root position="right" open={rowDrawer} onOpenChange={(e: DrawerRootChangeEvent) => setRowDrawer(e.value as boolean)}>
                <Drawer.Portal appendTo={databaseContainerRef.current ?? undefined}>
                    <Drawer.Backdrop />
                    <Drawer.Popup className="w-full! md:w-96!">
                        <Drawer.Header>
                            <Drawer.Title>Insert row</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="draft-email" className="font-medium">
                                        email <span className="font-mono text-xs text-surface-400">text</span>
                                    </Label>
                                    <InputText
                                        id="draft-email"
                                        value={draftEmail}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDraftEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        fluid
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="font-medium">
                                        plan <span className="font-mono text-xs text-surface-400">text</span>
                                    </Label>
                                    <PlainSelect value={draftPlan} onChange={setDraftPlan} options={planOptions} />
                                </div>
                                <p className="text-xs text-surface-500 dark:text-surface-400">
                                    <span className="font-mono">id</span> and <span className="font-mono">created_at</span> are filled automatically.
                                </p>
                            </div>
                        </Drawer.Content>
                        <Drawer.Footer>
                            <Button variant="text" severity="secondary" onClick={() => setRowDrawer(false)}>
                                Cancel
                            </Button>
                            <Button onClick={insertRow} disabled={!draftEmail.trim()}>
                                Save
                            </Button>
                        </Drawer.Footer>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>

            {/* Add column drawer */}
            <Drawer.Root position="right" open={colDrawer} onOpenChange={(e: DrawerRootChangeEvent) => setColDrawer(e.value as boolean)}>
                <Drawer.Portal appendTo={databaseContainerRef.current ?? undefined}>
                    <Drawer.Backdrop />
                    <Drawer.Popup className="w-full! md:w-96!">
                        <Drawer.Header>
                            <Drawer.Title>{editingField ? 'Edit column' : 'Add column'}</Drawer.Title>
                            <Drawer.Close as={Button} rounded variant="text" iconOnly>
                                <Times />
                            </Drawer.Close>
                        </Drawer.Header>
                        <Drawer.Content>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="draft-col" className="font-medium">
                                        Name
                                    </Label>
                                    <InputText
                                        id="draft-col"
                                        value={draftColName}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDraftColName(e.target.value)}
                                        placeholder="column_name"
                                        fluid
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="font-medium">Type</Label>
                                    <PlainSelect value={draftColType} onChange={setDraftColType} options={typeOptions} />
                                </div>
                            </div>
                        </Drawer.Content>
                        <Drawer.Footer>
                            <Button variant="text" severity="secondary" onClick={() => setColDrawer(false)}>
                                Cancel
                            </Button>
                            <Button
                                onClick={saveColumn}
                                disabled={!draftColName.trim() || columns.some((c) => c.field === draftColName.trim() && c.field !== editingField)}
                            >
                                {editingField ? 'Save' : 'Add'}
                            </Button>
                        </Drawer.Footer>
                    </Drawer.Popup>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [DataTable Primitive](../../primitive/components/datatable.md#api) for the full sub-component API.

### Hooks

See [useDataTable](../../headless/components/datatable.md#api) for the headless hook API.

### Accessibility

See [DataTable Primitive](../../primitive/components/datatable.md#accessibility) for WAI-ARIA compliance details and keyboard support.

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
