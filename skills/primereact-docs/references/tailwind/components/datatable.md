# DataTable

DataTable displays tabular data with sorting, pagination, selection and filtering features.

```tsx
'use client';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Database } from '@primeicons/react/database';
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

export default function Preview() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 8));
    }, []);

    return (
        <div className="w-full">
            <DataTable data={products}>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={4}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/datatable.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import {
    DataTable,
    DataTableCell,
    DataTableHeader,
    DataTableFooter,
    DataTableRow,
    DataTableSort,
    DataTableSortIndicator,
    DataTableSortOrder,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTable,
    DataTableTableContainer,
    DataTablePagination
} from '@/components/ui/datatable';
```

```tsx
<DataTable data={items}>
    <DataTableTableContainer>
        <DataTableTable>
            <DataTableTHead>
                <DataTableTHeadRow>
                    <DataTableTHeadCell>Column</DataTableTHeadCell>
                </DataTableTHeadRow>
            </DataTableTHead>
            <DataTableTBody>
                {({ item }) => (
                    <DataTableRow>
                        <DataTableCell>{item.name}</DataTableCell>
                    </DataTableRow>
                )}
            </DataTableTBody>
        </DataTableTable>
    </DataTableTableContainer>
</DataTable>
```

## Examples

### Basic

Displays a list of items in tabular format.

```tsx
'use client';
import {
    DataTable,
    DataTableCell,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
import { ProductService, type Product } from '@/shared/services/product.service';
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

export default function BasicDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 8));
    }, []);

    return (
        <div className="w-full">
            <DataTable data={products}>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Striped Rows

Use the `stripedRows` prop to render rows with alternating background colors.

```tsx
'use client';
import {
    DataTable,
    DataTableCell,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
import { ProductService, type Product } from '@/shared/services/product.service';
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

function ProductTable({ stripedRows, showGridlines, size }: { stripedRows?: boolean; showGridlines?: boolean; size?: 'small' | 'large' }) {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 5));
    }, []);

    return (
        <DataTable data={products} stripedRows={stripedRows} showGridlines={showGridlines} size={size}>
            <DataTableTableContainer>
                <DataTableTable style={{ minWidth: '32rem' }}>
                    <DataTableTHead>
                        <DataTableTHeadRow>
                            <DataTableTHeadCell>Name</DataTableTHeadCell>
                            <DataTableTHeadCell>Category</DataTableTHeadCell>
                            <DataTableTHeadCell>Price</DataTableTHeadCell>
                            <DataTableTHeadCell>Status</DataTableTHeadCell>
                        </DataTableTHeadRow>
                    </DataTableTHead>
                    <DataTableTBody>
                        {({ item }: { item: any }) => (
                            <DataTableRow key={item.id}>
                                <DataTableCell>
                                    <span className="font-medium">{item.name}</span>
                                </DataTableCell>
                                <DataTableCell>
                                    <Tag severity="secondary">{item.category}</Tag>
                                </DataTableCell>
                                <DataTableCell>
                                    <span className="font-semibold">${item.price}</span>
                                </DataTableCell>
                                <DataTableCell>
                                    <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                </DataTableCell>
                            </DataTableRow>
                        )}
                    </DataTableTBody>
                </DataTableTable>
            </DataTableTableContainer>
        </DataTable>
    );
}

export default function StripedDemo() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div>
                <div className="text-xs uppercase tracking-wider text-surface-500 dark:text-surface-400 mb-2">Striped Rows</div>
                <ProductTable stripedRows />
            </div>
            <div>
                <div className="text-xs uppercase tracking-wider text-surface-500 dark:text-surface-400 mb-2">Gridlines</div>
                <ProductTable showGridlines />
            </div>
            <div>
                <div className="text-xs uppercase tracking-wider text-surface-500 dark:text-surface-400 mb-2">Small + Striped + Gridlines</div>
                <ProductTable stripedRows showGridlines size="small" />
            </div>
            <div>
                <div className="text-xs uppercase tracking-wider text-surface-500 dark:text-surface-400 mb-2">Large</div>
                <ProductTable size="large" />
            </div>
        </div>
    );
}

```

### Selection

Row selection is driven by the `selectionMode` prop (`single` or `multiple`). The `selectedKeys` prop holds a map of selected row keys and `onSelectionChange` fires when the selection changes.

#### Single

One row at a time. Clicking a different row replaces the previous selection.

```tsx
'use client';
import Image from 'next/image';
import { Database } from '@primeicons/react/database';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSelectionEvent } from 'primereact/datatable';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable
                data={products}
                dataKey="id"
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Qty</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

#### Multiple

Multiple rows without a dedicated column. Pair with `metaKeySelection` so Ctrl/Cmd + Click toggles rows and Shift + Click selects a range.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { Database } from '@primeicons/react/database';
import { Trash } from '@primeicons/react/trash';
import type { DataTableSelectionEvent } from 'primereact/datatable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable
                data={products}
                dataKey="id"
                selectionMode="multiple"
                metaKeySelection
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Qty</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

#### Checkbox

Checkbox-based multiple selection with a header select-all.

```tsx
'use client';
import { Checkbox } from '@/components/ui/checkbox';
import {
    DataTable,
    DataTableCell,
    DataTableHeader,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { DataTable as PRDataTable, type DataTableSelectionEvent, type DataTableSelectionInstance } from '@primereact/ui/datatable';
import type { CheckboxRootChangeEvent } from 'primereact/checkbox';
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
            <DataTable
                data={customers}
                dataKey="id"
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTableHeader>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">Customers</span>
                        <span className="text-xs text-surface-500 dark:text-surface-400">
                            {selectedCount > 0 ? `${selectedCount} selected` : `${customers.length} total`}
                        </span>
                    </div>
                </DataTableHeader>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '40rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell style={{ width: '3rem' }}>
                                    <PRDataTable.Selection>
                                        {({ isAllSelected, isSomeSelected, toggleAll }: DataTableSelectionInstance) => (
                                            <Checkbox
                                                checked={isAllSelected}
                                                indeterminate={isSomeSelected && !isAllSelected}
                                                onCheckedChange={(e: CheckboxRootChangeEvent) => toggleAll(e.originalEvent)}
                                            />
                                        )}
                                    </PRDataTable.Selection>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Name</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Country</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Balance</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
                                        <PRDataTable.Selection>
                                            {({ isSelected, toggle }: DataTableSelectionInstance) => (
                                                <Checkbox
                                                    checked={isSelected}
                                                    onCheckedChange={(e: CheckboxRootChangeEvent) => toggle(e.originalEvent)}
                                                />
                                            )}
                                        </PRDataTable.Selection>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTableCell>
                                    <DataTableCell>{item.country.name}</DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.balance.toLocaleString()}</span>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

#### Keyboard

Arrow Up/Down moves focus between rows, Space or Enter toggles the focused row, and Shift + Arrow extends a range.

```tsx
'use client';
import Image from 'next/image';
import { Database } from '@primeicons/react/database';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSelectionEvent } from 'primereact/datatable';
import { Badge } from '@/components/ui/badge';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable
                data={products}
                dataKey="id"
                selectionMode="multiple"
                metaKeySelection
                selectedKeys={selectedKeys}
                onSelectionChange={(e: DataTableSelectionEvent) => setSelectedKeys(e.value)}
            >
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Qty</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Sort

Wrap a column header with `DataTableSort field="…"` to make it sortable. `DataTableSortIndicator match="asc | desc | unsorted"` renders direction icons and `DataTableSortOrder` shows the priority badge in multi-sort mode.

#### Single

Clicking a column header cycles through ascending, descending and unsorted.

```tsx
'use client';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableSort,
    DataTableSortIndicator,
    DataTableSortOrder,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Badge } from '@/components/ui/badge';
import { OverlayBadge } from '@/components/ui/overlaybadge';
import { Tag } from '@/components/ui/tag';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Database } from '@primeicons/react/database';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import type { DataTableSortOrderInstance } from 'primereact/datatable';
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
        <DataTableSort field={field} className="inline-flex items-center gap-2">
            {children}
            <OverlayBadge className="px-1">
                <DataTableSortIndicator match="unsorted">
                    <SortAlt />
                </DataTableSortIndicator>
                <DataTableSortIndicator match="asc">
                    <SortAmountUpAlt />
                </DataTableSortIndicator>
                <DataTableSortIndicator match="desc">
                    <SortAmountDown />
                </DataTableSortIndicator>
                <DataTableSortOrder asChild>
                    {({ index }: DataTableSortOrderInstance) => (
                        <Badge shape="circle" size="small" severity="info" className="mt-1">
                            {index}
                        </Badge>
                    )}
                </DataTableSortOrder>
            </OverlayBadge>
        </DataTableSort>
    );
}

export default function SortDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    return (
        <div className="w-full">
            <DataTable data={products} removableSort>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <SortableHeader field="name">
                                        <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="category">
                                        <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTableTHeadTitle>Quantity</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="price">
                                        <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

#### Multiple

Hold Ctrl/Cmd and click multiple column headers to sort by several fields at once.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSortOrderInstance } from 'primereact/datatable';
import { SortAlt } from '@primeicons/react/sort-alt';
import { Database } from '@primeicons/react/database';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { Badge } from '@/components/ui/badge';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableSort,
    DataTableSortIndicator,
    DataTableSortOrder,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { OverlayBadge } from '@/components/ui/overlaybadge';
import { Tag } from '@/components/ui/tag';
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
        <DataTableSort field={field} className="inline-flex items-center gap-2">
            {children}
            <OverlayBadge className="px-1">
                <DataTableSortIndicator match="unsorted">
                    <SortAlt />
                </DataTableSortIndicator>
                <DataTableSortIndicator match="asc">
                    <SortAmountUpAlt />
                </DataTableSortIndicator>
                <DataTableSortIndicator match="desc">
                    <SortAmountDown />
                </DataTableSortIndicator>
                <DataTableSortOrder asChild>
                    {({ index }: DataTableSortOrderInstance) => (
                        <Badge shape="circle" size="small" severity="info" className="mt-1">
                            {index}
                        </Badge>
                    )}
                </DataTableSortOrder>
            </OverlayBadge>
        </DataTableSort>
    );
}

export default function MultiSortDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    return (
        <div className="w-full">
            <DataTable data={products} removableSort>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <SortableHeader field="name">
                                        <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="category">
                                        <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTableTHeadTitle>Quantity</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="price">
                                        <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

#### Presort

Apply an initial sort on mount via `defaultSortField` + `defaultSortOrder`.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSortOrderInstance } from 'primereact/datatable';
import { SortAlt } from '@primeicons/react/sort-alt';
import { Database } from '@primeicons/react/database';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { Badge } from '@/components/ui/badge';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableSort,
    DataTableSortIndicator,
    DataTableSortOrder,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { OverlayBadge } from '@/components/ui/overlaybadge';
import { Tag } from '@/components/ui/tag';
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
        <DataTableSort field={field} className="inline-flex items-center gap-2">
            {children}
            <OverlayBadge className="px-1">
                <DataTableSortIndicator match="unsorted">
                    <SortAlt />
                </DataTableSortIndicator>
                <DataTableSortIndicator match="asc">
                    <SortAmountUpAlt />
                </DataTableSortIndicator>
                <DataTableSortIndicator match="desc">
                    <SortAmountDown />
                </DataTableSortIndicator>
                <DataTableSortOrder asChild>
                    {({ index }: DataTableSortOrderInstance) => (
                        <Badge shape="circle" size="small" severity="info" className="mt-1">
                            {index}
                        </Badge>
                    )}
                </DataTableSortOrder>
            </OverlayBadge>
        </DataTableSort>
    );
}

export default function PresortDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    return (
        <div className="w-full">
            <DataTable data={products} defaultSortField="price" defaultSortOrder={-1} removableSort>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <SortableHeader field="name">
                                        <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="category">
                                        <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTableTHeadTitle>Quantity</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="price">
                                        <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

For multi-column presort, use `defaultMultiSortMeta`.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableSortOrderInstance } from 'primereact/datatable';
import { SortAlt } from '@primeicons/react/sort-alt';
import { Database } from '@primeicons/react/database';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { Badge } from '@/components/ui/badge';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableSort,
    DataTableSortIndicator,
    DataTableSortOrder,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { OverlayBadge } from '@/components/ui/overlaybadge';
import { Tag } from '@/components/ui/tag';
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
        <DataTableSort field={field} className="inline-flex items-center gap-2">
            {children}
            <OverlayBadge className="px-1">
                <DataTableSortIndicator match="unsorted">
                    <SortAlt />
                </DataTableSortIndicator>
                <DataTableSortIndicator match="asc">
                    <SortAmountUpAlt />
                </DataTableSortIndicator>
                <DataTableSortIndicator match="desc">
                    <SortAmountDown />
                </DataTableSortIndicator>
                <DataTableSortOrder asChild>
                    {({ index }: DataTableSortOrderInstance) => (
                        <Badge shape="circle" size="small" severity="info" className="mt-1">
                            {index}
                        </Badge>
                    )}
                </DataTableSortOrder>
            </OverlayBadge>
        </DataTableSort>
    );
}

export default function PresortMultiDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 10));
    }, []);

    return (
        <div className="w-full">
            <DataTable
                data={products}
                defaultMultiSortMeta={[
                    { field: 'category', order: 1 },
                    { field: 'price', order: -1 }
                ]}
                removableSort
            >
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <SortableHeader field="name">
                                        <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="category">
                                        <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="quantity">
                                        <DataTableTHeadTitle>Quantity</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="price">
                                        <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="inventoryStatus">
                                        <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                    </SortableHeader>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Pagination

DataTable exposes pagination state via render prop, allowing complete control over the pagination UI.

```tsx
'use client';
import {
    DataTable,
    DataTableCell,
    DataTablePagination,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPages, PaginatorPrev } from '@/components/ui/paginator';
import { Tag } from '@/components/ui/tag';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTablePaginationInstance } from 'primereact/datatable';
import type { PaginatorRootChangeEvent } from 'primereact/paginator';
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
            <DataTable data={products} paginator defaultRows={5}>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '40rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Name</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Qty</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                    </DataTableTable>
                </DataTableTableContainer>
                <DataTablePagination>
                    {({ page, rows, totalRecords, onPageChange }: DataTablePaginationInstance) => (
                        <Paginator
                            page={page + 1}
                            total={totalRecords}
                            itemsPerPage={rows}
                            onPageChange={(e: PaginatorRootChangeEvent) => {
                                if (e.originalEvent) onPageChange(e.originalEvent, e.value - 1);
                            }}
                        >
                            <PaginatorFirst />
                            <PaginatorPrev />
                            <PaginatorPages />
                            <PaginatorNext />
                            <PaginatorLast />
                        </Paginator>
                    )}
                </DataTablePagination>
            </DataTable>
        </div>
    );
}

```

### Scroll

Set `scrollable` on `DataTable` to enable scrolling.

#### Horizontal

When the combined column widths exceed the container, the table scrolls horizontally.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable data={customers} scrollable scrollHeight="400px">
                <DataTableTableContainer>
                    <DataTableTable>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell style={{ minWidth: '6rem' }}>
                                    <DataTableTHeadTitle>Id</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '14rem' }}>
                                    <DataTableTHeadTitle>Name</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '14rem' }}>
                                    <DataTableTHeadTitle>Country</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '12rem' }}>
                                    <DataTableTHeadTitle>Date</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '10rem' }}>
                                    <DataTableTHeadTitle>Balance</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '14rem' }}>
                                    <DataTableTHeadTitle>Company</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '10rem' }}>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '8rem' }}>
                                    <DataTableTHeadTitle>Activity</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '14rem' }}>
                                    <DataTableTHeadTitle>Representative</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>{item.id}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTableCell>
                                    <DataTableCell>{item.country.name}</DataTableCell>
                                    <DataTableCell>{item.date}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${Number(item.balance).toLocaleString()}</span>
                                    </DataTableCell>
                                    <DataTableCell>{item.company}</DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.activity}%</DataTableCell>
                                    <DataTableCell>{item.representative.name}</DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={9}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

#### Frozen Columns

Pin multiple columns to either side using `frozen` and `frozenAlignment`.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Database } from '@primeicons/react/database';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable data={customers} scrollable scrollHeight="400px">
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '1400px' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell frozen style={{ minWidth: '80px' }}>
                                    <DataTableTHeadTitle>Id</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '200px' }}>
                                    <DataTableTHeadTitle>Name</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '200px' }}>
                                    <DataTableTHeadTitle>Country</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '220px' }}>
                                    <DataTableTHeadTitle>Company</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '200px' }}>
                                    <DataTableTHeadTitle>Representative</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '200px' }}>
                                    <DataTableTHeadTitle>Date</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '200px' }}>
                                    <DataTableTHeadTitle>Activity</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ minWidth: '200px' }}>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell frozen alignFrozen="right" style={{ minWidth: '180px' }}>
                                    <DataTableTHeadTitle>Balance</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={String(item.id)}>
                                    <DataTableCell frozen>
                                        <span className="text-xs text-surface-500 dark:text-surface-400 tabular-nums">#{String(item.id)}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">{String(item.name)}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                                            <span>{item.country.name}</span>
                                        </div>
                                    </DataTableCell>
                                    <DataTableCell>{String(item.company)}</DataTableCell>
                                    <DataTableCell>{String(item.representative.name)}</DataTableCell>
                                    <DataTableCell>{String(item.date)}</DataTableCell>
                                    <DataTableCell>{String(item.activity)}%</DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.status as string] ?? 'secondary'}>{String(item.status)}</Tag>
                                    </DataTableCell>
                                    <DataTableCell frozen alignFrozen="right">
                                        <span className="font-semibold">${Number(item.balance).toLocaleString()}</span>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={9}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

#### Frozen Rows

Render a `DataTableFrozenTBody` above the regular `DataTableTBody` to keep specific rows pinned to the top.

```tsx
'use client';
import { CustomerService, type Customer } from '@/shared/services/customer.service';
import { Lock } from '@primeicons/react/lock';
import { Database } from '@primeicons/react/database';
import { LockOpen } from '@primeicons/react/lock-open';
import { Button } from '@/components/ui/button';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableFrozenTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTableRow key={item.id}>
                <DataTableCell>
                    <span className={frozen ? 'font-semibold' : 'font-medium'}>{item.name}</span>
                </DataTableCell>
                <DataTableCell>
                    <div className="flex items-center gap-2">
                        <span className="text-lg leading-none">{CustomerService.getFlag(item.country.code)}</span>
                        <span>{item.country.name}</span>
                    </div>
                </DataTableCell>
                <DataTableCell>{item.representative.name}</DataTableCell>
                <DataTableCell>
                    <Tag severity={statusSeverity[item.status] ?? 'secondary'}>{item.status}</Tag>
                </DataTableCell>
                <DataTableCell style={{ width: '4rem', textAlign: 'center' }}>
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
                </DataTableCell>
            </DataTableRow>
        );
    }, []);

    const tbodyRender = React.useCallback(({ item }: { item: any }) => renderRow(item as Customer), [renderRow]);

    return (
        <div className="w-full">
            <DataTable data={unlockedCustomers} scrollable scrollHeight="400px">
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Name</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Country</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Representative</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ width: '4rem' }} />
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableFrozenTBody>{lockedCustomers.map((item) => renderRow(item, { frozen: true }))}</DataTableFrozenTBody>
                        <DataTableTBody>{tbodyRender}</DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Row Expansion

Expand rows to show additional detail content.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Database } from '@primeicons/react/database';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Star } from '@primeicons/react/star';
import { StarFill } from '@primeicons/react/star-fill';
import type { DataTableExpansionEvent } from 'primereact/datatable';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableRowExpansion,
    DataTableRowToggle,
    DataTableRowToggleIndicator,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Rating, RatingOff, RatingOn, RatingOption } from '@/components/ui/rating';
import { Tag } from '@/components/ui/tag';
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
        <Rating value={value} readOnly>
            {Array.from({ length: 5 }).map((_, i) => (
                <RatingOption key={i} index={i}>
                    <RatingOn>
                        <StarFill />
                    </RatingOn>
                    <RatingOff>
                        <Star />
                    </RatingOff>
                </RatingOption>
            ))}
        </Rating>
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
            <DataTable
                data={products}
                dataKey="id"
                expandedKeys={expandedKeys}
                onExpandedChange={(e: DataTableExpansionEvent) => setExpandedKeys(e.value)}
            >
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell style={{ width: '3rem' }} />
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <React.Fragment key={item.id}>
                                    <DataTableRow>
                                        <DataTableCell>
                                            <DataTableRowToggle>
                                                <DataTableRowToggleIndicator match="expanded">
                                                    <ChevronDown />
                                                </DataTableRowToggleIndicator>
                                                <DataTableRowToggleIndicator match="collapsed">
                                                    <ChevronRight />
                                                </DataTableRowToggleIndicator>
                                            </DataTableRowToggle>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <span className="font-medium">{item.name}</span>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Tag severity="secondary">{item.category}</Tag>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <span className="font-semibold">${item.price}</span>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                        </DataTableCell>
                                    </DataTableRow>
                                    <DataTableRowExpansion>
                                        <DataTableCell colSpan={5}>
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
                                        </DataTableCell>
                                    </DataTableRowExpansion>
                                </React.Fragment>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Column Resize

Enable column resizing with drag handles via the `resizableColumns` prop.

#### Fit Mode

Dragging takes width from the adjacent column; total table width stays the same.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Database } from '@primeicons/react/database';
import {
    DataTable,
    DataTableCell,
    DataTableColumnResizeIndicator,
    DataTableColumnResizer,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable data={products} resizableColumns columnResizeMode="fit" showGridlines>
                <DataTableTableContainer>
                    <DataTableColumnResizeIndicator />
                    <DataTableTable style={{ width: '100%', tableLayout: 'fixed' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                    <DataTableColumnResizer />
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                    <DataTableColumnResizer />
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Qty</DataTableTHeadTitle>
                                    <DataTableColumnResizer />
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                    <DataTableColumnResizer />
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={4}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

#### Expand Mode

Dragging grows or shrinks the whole table; adjacent columns keep their widths.

```tsx
'use client';
import Image from 'next/image';
import { Database } from '@primeicons/react/database';
import { ProductService, type Product } from '@/shared/services/product.service';
import {
    DataTable,
    DataTableCell,
    DataTableColumnResizeIndicator,
    DataTableColumnResizer,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable data={products} resizableColumns columnResizeMode="expand" showGridlines scrollable scrollHeight="400px">
                <DataTableTableContainer>
                    <DataTableColumnResizeIndicator />
                    <DataTableTable style={{ tableLayout: 'fixed', minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                    <DataTableColumnResizer />
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                    <DataTableColumnResizer />
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Qty</DataTableTHeadTitle>
                                    <DataTableColumnResizer />
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                    <DataTableColumnResizer />
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Column Reorder

Drag and drop column headers to reorder columns.

```tsx
'use client';
import Image from 'next/image';
import { ProductService, type Product } from '@/shared/services/product.service';
import type { DataTableColumnReorderEvent } from 'primereact/datatable';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { Bars } from '@primeicons/react/bars';
import { Database } from '@primeicons/react/database';
import {
    DataTable,
    DataTableCell,
    DataTableColumnReorder,
    DataTableColumnReorderIndicatorDown,
    DataTableColumnReorderIndicatorUp,
    DataTableColumnReorderTarget,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable
                data={products}
                reorderableColumns
                onColumnReorder={(e: DataTableColumnReorderEvent) => {
                    const reordered = [...columns];
                    const [moved] = reordered.splice(e.dragIndex, 1);

                    reordered.splice(e.dropIndex, 0, moved);
                    setColumns(reordered);
                }}
            >
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                {columns.map((col) => (
                                    <DataTableTHeadCell key={col.field}>
                                        <DataTableColumnReorderTarget className="group cursor-grab select-none">
                                            <DataTableColumnReorder className="text-surface-400 transition-colors group-hover:text-surface-600">
                                                <Bars />
                                            </DataTableColumnReorder>
                                            <DataTableTHeadTitle>{col.header}</DataTableTHeadTitle>
                                        </DataTableColumnReorderTarget>
                                    </DataTableTHeadCell>
                                ))}
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody key={columns.map((c) => c.field).join(',')}>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    {columns.map((col) => (
                                        <DataTableCell key={col.field}>{renderCell(col.field, item)}</DataTableCell>
                                    ))}
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={columns.length}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
                <DataTableColumnReorderIndicatorUp>
                    <ArrowDown />
                </DataTableColumnReorderIndicatorUp>
                <DataTableColumnReorderIndicatorDown>
                    <ArrowUp />
                </DataTableColumnReorderIndicatorDown>
            </DataTable>
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
import type { DataTableRowReorderEvent } from 'primereact/datatable';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableRowReorder,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable
                data={products}
                dataKey="id"
                reorderableRows
                onRowReorder={(e: DataTableRowReorderEvent) => setProducts(e.value as unknown as Product[])}
            >
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell style={{ width: '3rem' }} />
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item, index }: { item: any; index: number }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
                                        <DataTableRowReorder rowIndex={index} className="cursor-grab text-surface-400 hover:text-surface-600">
                                            <Bars />
                                        </DataTableRowReorder>
                                    </DataTableCell>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
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
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTFoot,
    DataTableTFootCell,
    DataTableTFootRow,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
            <DataTable data={sales} showGridlines>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell rowSpan={2}>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell colSpan={2} style={{ textAlign: 'center' }}>
                                    <DataTableTHeadTitle>Sale Rate</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell colSpan={2} style={{ textAlign: 'center' }}>
                                    <DataTableTHeadTitle>Profits</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Last Year</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>This Year</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Last Year</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>This Year</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
                                        <span className="font-medium">{item.product}</span>
                                    </DataTableCell>
                                    <DataTableCell>{item.lastYearSale}%</DataTableCell>
                                    <DataTableCell>
                                        <Trend current={item.thisYearSale} previous={item.lastYearSale} />
                                    </DataTableCell>
                                    <DataTableCell>${item.lastYearProfit.toLocaleString()}</DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={item.thisYearProfit >= item.lastYearProfit ? 'success' : 'danger'}>
                                            ${item.thisYearProfit.toLocaleString()}
                                        </Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={3}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                        <DataTableTFoot>
                            <DataTableTFootRow>
                                <DataTableTFootCell colSpan={3} style={{ textAlign: 'right' }}>
                                    <span className="font-semibold">Totals</span>
                                </DataTableTFootCell>
                                <DataTableTFootCell>
                                    <span className="font-semibold">${totals.lastYear.toLocaleString()}</span>
                                </DataTableTFootCell>
                                <DataTableTFootCell>
                                    <span className="font-semibold">${totals.thisYear.toLocaleString()}</span>
                                </DataTableTFootCell>
                            </DataTableTFootRow>
                        </DataTableTFoot>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

Sort and filter work on any leaf header cell in a grouped layout.

```tsx
'use client';
import { ArrowDown } from '@primeicons/react/arrow-down';
import { Database } from '@primeicons/react/database';
import { ArrowUp } from '@primeicons/react/arrow-up';
import { SortAlt } from '@primeicons/react/sort-alt';
import { SortAmountDown } from '@primeicons/react/sort-amount-down';
import { SortAmountUpAlt } from '@primeicons/react/sort-amount-up-alt';
import { FilterMatchMode } from 'primereact/datatable';
import type { DataTableFilterInstance } from 'primereact/datatable';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableFilter,
    DataTableRow,
    DataTableSort,
    DataTableSortIndicator,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { InputText } from '@/components/ui/inputtext';
import { Tag } from '@/components/ui/tag';
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
        <DataTableSort field={field} className="inline-flex items-center gap-1">
            <DataTableTHeadTitle>{children}</DataTableTHeadTitle>
            <DataTableSortIndicator match="unsorted">
                <SortAlt />
            </DataTableSortIndicator>
            <DataTableSortIndicator match="asc">
                <SortAmountUpAlt />
            </DataTableSortIndicator>
            <DataTableSortIndicator match="desc">
                <SortAmountDown />
            </DataTableSortIndicator>
        </DataTableSort>
    );
}

export default function ColumnGroupFilterSortDemo() {
    const [filters, setFilters] = React.useState<Record<string, { value: unknown; matchMode: FilterMatchMode }>>({
        product: { value: null, matchMode: FilterMatchMode.Contains },
        thisYearSale: { value: null, matchMode: FilterMatchMode.Gte }
    });

    return (
        <div className="w-full">
            <DataTable
                data={sales}
                removableSort
                filters={filters}
                onFilter={(e: { filters: Record<string, unknown> }) => setFilters(e.filters as typeof filters)}
                showGridlines
            >
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell rowSpan={2}>
                                    <SortableHeader field="product">Product</SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell colSpan={2} style={{ textAlign: 'center' }}>
                                    <DataTableTHeadTitle>Sale Rate</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell colSpan={2} style={{ textAlign: 'center' }}>
                                    <DataTableTHeadTitle>Profits</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <SortableHeader field="lastYearSale">Last Year</SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="thisYearSale">This Year</SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="lastYearProfit">Last Year</SortableHeader>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <SortableHeader field="thisYearProfit">This Year</SortableHeader>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableFilter field="product" display="row" dataType="text">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <InputText
                                                value={(value as string) ?? ''}
                                                onChange={(e: any) => onChange(e, e.target.value)}
                                                placeholder="Search"
                                                size="small"
                                                fluid
                                            />
                                        )}
                                    </DataTableFilter>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell />
                                <DataTableTHeadCell>
                                    <DataTableFilter field="thisYearSale" display="row" dataType="numeric">
                                        {({ value, onChange }: DataTableFilterInstance) => (
                                            <InputText
                                                value={(value as string) ?? ''}
                                                onChange={(e: any) => onChange(e, e.target.value ? Number(e.target.value) : null, 'gte')}
                                                placeholder="≥"
                                                size="small"
                                                fluid
                                            />
                                        )}
                                    </DataTableFilter>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell />
                                <DataTableTHeadCell />
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
                                        <span className="font-medium">{item.product}</span>
                                    </DataTableCell>
                                    <DataTableCell>{item.lastYearSale}%</DataTableCell>
                                    <DataTableCell>
                                        <Trend current={item.thisYearSale} previous={item.lastYearSale} />
                                    </DataTableCell>
                                    <DataTableCell>${item.lastYearProfit.toLocaleString()}</DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={item.thisYearProfit >= item.lastYearProfit ? 'success' : 'danger'}>
                                            ${item.thisYearProfit.toLocaleString()}
                                        </Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Filter

Filtering is driven by a `filters` object passed to `DataTable`. Global search is opt-in via `globalFilter` + `globalFilterFields`.

```tsx
'use client';
import {
    DataTable,
    DataTableCell,
    DataTableHeader,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { IconField } from '@/components/ui/iconfield';
import { InputText } from '@/components/ui/inputtext';
import { Tag } from '@/components/ui/tag';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Search } from '@primeicons/react/search';
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

export default function FilterDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [globalFilter, setGlobalFilter] = React.useState('');

    React.useEffect(() => {
        setProducts(ProductService.getProductsData());
    }, []);

    return (
        <div className="w-full">
            <DataTable
                data={products}
                globalFilter={globalFilter}
                globalFilterFields={['name', 'category', 'inventoryStatus']}
                paginator
                defaultRows={5}
            >
                <DataTableHeader>
                    <div className="flex justify-end">
                        <IconField>
                            <Search />
                            <InputText
                                placeholder="Search products..."
                                value={globalFilter}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)}
                            />
                        </IconField>
                    </div>
                </DataTableHeader>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '40rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>Name</DataTableTHeadCell>
                                <DataTableTHeadCell>Category</DataTableTHeadCell>
                                <DataTableTHeadCell>Price</DataTableTHeadCell>
                                <DataTableTHeadCell>Status</DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
                                        <span className="font-medium">{item.name}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Header & Footer

Use `DataTableHeader` and `DataTableFooter` to add summary information above and below the table.

```tsx
'use client';
import {
    DataTable,
    DataTableCell,
    DataTableFooter,
    DataTableHeader,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
import { ProductService, type Product } from '@/shared/services/product.service';
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

export default function TemplateDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 6));
    }, []);

    return (
        <div className="w-full">
            <DataTable data={products}>
                <DataTableHeader>
                    <div className="flex items-center justify-between">
                        <span className="text-base font-semibold">Products</span>
                        <span className="text-xs text-surface-500 dark:text-surface-400">{products.length} items</span>
                    </div>
                </DataTableHeader>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '40rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>Product</DataTableTHeadCell>
                                <DataTableTHeadCell>Category</DataTableTHeadCell>
                                <DataTableTHeadCell>Price</DataTableTHeadCell>
                                <DataTableTHeadCell>Status</DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="rounded-md shadow"
                                            />
                                            <span className="font-medium">{item.name}</span>
                                        </div>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                    </DataTableTable>
                </DataTableTableContainer>
                <DataTableFooter>
                    <div className="text-xs text-surface-500 dark:text-surface-400">
                        Total products: <span className="font-semibold text-surface-900 dark:text-surface-0">{products.length}</span>
                    </div>
                </DataTableFooter>
            </DataTable>
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
import { Button } from '@/components/ui/button';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableExport,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
        <div className="w-full">
            <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-sm text-surface-500 dark:text-surface-400">Export visible rows to CSV with custom column headers.</span>
                <DataTableExport
                    as={Button}
                    size="small"
                    fileName="products"
                    headers={{ code: 'Code', name: 'Name', category: 'Category', price: 'Price', quantity: 'Quantity', inventoryStatus: 'Status' }}
                >
                    <FileExport />
                    Export CSV
                </DataTableExport>
            </div>
            <DataTable data={products}>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Qty</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={item.id}>
                                    <DataTableCell>
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity="secondary">{item.category}</Tag>
                                    </DataTableCell>
                                    <DataTableCell>{item.quantity}</DataTableCell>
                                    <DataTableCell>
                                        <span className="font-semibold">${item.price}</span>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                    </DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={5}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
        </div>
    );
}

```

### Loading

#### Overlay

Set the `loading` prop on `DataTable` and provide a spinner inside `DataTableLoading`. An absolutely positioned overlay dims the table.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Refresh } from '@primeicons/react/refresh';
import { Spinner } from '@primeicons/react/spinner';
import { Button } from '@/components/ui/button';
import {
    DataTable,
    DataTableCell,
    DataTableLoading,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Tag } from '@/components/ui/tag';
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
                <DataTable data={products} loading={isLoading}>
                    <DataTableTableContainer>
                        <DataTableTable style={{ minWidth: '50rem' }}>
                            <DataTableTHead>
                                <DataTableTHeadRow>
                                    <DataTableTHeadCell>
                                        <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                    </DataTableTHeadCell>
                                    <DataTableTHeadCell>
                                        <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                    </DataTableTHeadCell>
                                    <DataTableTHeadCell>
                                        <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                    </DataTableTHeadCell>
                                    <DataTableTHeadCell>
                                        <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                    </DataTableTHeadCell>
                                </DataTableTHeadRow>
                            </DataTableTHead>
                            <DataTableTBody>
                                {({ item }: { item: any }) => (
                                    <DataTableRow key={item.id}>
                                        <DataTableCell>
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
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Tag severity="secondary">{item.category}</Tag>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <span className="font-semibold">${item.price}</span>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                        </DataTableCell>
                                    </DataTableRow>
                                )}
                            </DataTableTBody>
                        </DataTableTable>
                    </DataTableTableContainer>
                    <DataTableLoading>
                        <div className="flex flex-col items-center gap-2">
                            <Spinner className="w-10! h-10! animate-spin text-primary" />
                            <span className="text-sm text-surface-600 dark:text-surface-300">Loading products…</span>
                        </div>
                    </DataTableLoading>
                </DataTable>
            </div>
        </div>
    );
}

```

#### Skeleton

Render placeholder rows filled with `Skeleton` elements while the request is in flight.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Refresh } from '@primeicons/react/refresh';
import { Button } from '@/components/ui/button';
import {
    DataTable,
    DataTableCell,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';
import { Skeleton } from '@/components/ui/skeleton';
import { Tag } from '@/components/ui/tag';
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
            <DataTable data={rows}>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell style={{ width: '40%' }}>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ width: '20%' }}>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ width: '15%' }}>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell style={{ width: '25%' }}>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) =>
                                isLoading ? (
                                    <DataTableRow key={item.id}>
                                        <DataTableCell>
                                            <div className="flex items-center gap-3">
                                                <Skeleton width="40px" height="40px" borderRadius="6px" />
                                                <div className="flex flex-col gap-1">
                                                    <Skeleton width="8rem" height="0.6rem" borderRadius="4px" />
                                                    <Skeleton width="5rem" height="0.55rem" borderRadius="4px" />
                                                </div>
                                            </div>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Skeleton width="5rem" height="1rem" borderRadius="16px" />
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Skeleton width="3rem" height="0.6rem" borderRadius="4px" />
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Skeleton width="6rem" height="1rem" borderRadius="16px" />
                                        </DataTableCell>
                                    </DataTableRow>
                                ) : (
                                    <DataTableRow key={item.id}>
                                        <DataTableCell>
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
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Tag severity="secondary">{item.category}</Tag>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <span className="font-semibold">${item.price}</span>
                                        </DataTableCell>
                                        <DataTableCell>
                                            <Tag severity={statusSeverity[item.inventoryStatus]}>{statusLabel[item.inventoryStatus]}</Tag>
                                        </DataTableCell>
                                    </DataTableRow>
                                )
                            }
                        </DataTableTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
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
import { Button } from '@/components/ui/button';
import {
    DataTable,
    DataTableCell,
    DataTableEmptyTBody,
    DataTableRow,
    DataTableTBody,
    DataTableTHead,
    DataTableTHeadCell,
    DataTableTHeadRow,
    DataTableTHeadTitle,
    DataTableTable,
    DataTableTableContainer
} from '@/components/ui/datatable';

export default function EmptyDemo() {
    return (
        <div className="w-full">
            <DataTable data={[]}>
                <DataTableTableContainer>
                    <DataTableTable style={{ minWidth: '50rem' }}>
                        <DataTableTHead>
                            <DataTableTHeadRow>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Product</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Category</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Price</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                                <DataTableTHeadCell>
                                    <DataTableTHeadTitle>Status</DataTableTHeadTitle>
                                </DataTableTHeadCell>
                            </DataTableTHeadRow>
                        </DataTableTHead>
                        <DataTableTBody>
                            {({ item }: { item: any }) => (
                                <DataTableRow key={String(item.id)}>
                                    <DataTableCell>{String(item.name)}</DataTableCell>
                                    <DataTableCell>{String(item.category)}</DataTableCell>
                                    <DataTableCell>${String(item.price)}</DataTableCell>
                                    <DataTableCell>{String(item.status)}</DataTableCell>
                                </DataTableRow>
                            )}
                        </DataTableTBody>
                        <DataTableEmptyTBody>
                            <DataTableRow>
                                <DataTableCell colSpan={4}>
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
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableEmptyTBody>
                    </DataTableTable>
                </DataTableTableContainer>
            </DataTable>
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
