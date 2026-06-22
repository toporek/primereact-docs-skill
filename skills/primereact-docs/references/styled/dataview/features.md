# DataView

DataView displays data in grid or list layout with pagination and sorting features.

```tsx
'use client';
import { ProductService } from '@/shared/services/product.service';
import { Button } from '@primereact/ui/button';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import { DataView } from '@primereact/ui/dataview';
import * as React from 'react';
import { Heart } from '@primeicons/react/heart';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { StarFill } from '@primeicons/react/star-fill';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function Preview() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
    }, []);

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return undefined;
        }
    };

    return (
        <div>
            <DataView.Root>
                <DataView.Content>
                    <div className="flex flex-col">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className={`flex flex-col sm:flex-row sm:items-center p-6 gap-4 ${index !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                            >
                                <div className="md:w-40 relative">
                                    <Image
                                        className="mx-auto rounded w-full"
                                        src={`https://primefaces.org/cdn/primevue/images/product/${product.image}`}
                                        alt={product.name}
                                        width={160}
                                        height={160}
                                    />
                                    <div className="absolute bg-black/70 rounded-border" style={{ left: '4px', top: '4px' }}>
                                        <Tag severity={getSeverity(product)}>{product.inventoryStatus}</Tag>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div className="flex flex-row md:flex-col justify-between items-start gap-2">
                                        <div>
                                            <span className="font-medium text-surface-500 dark:text-surface-400 text-sm">{product.category}</span>
                                            <div className="text-lg font-medium mt-2">{product.name}</div>
                                        </div>
                                        <div className="bg-surface-100 p-1" style={{ borderRadius: '30px' }}>
                                            <div
                                                className="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                                style={{
                                                    borderRadius: '30px',
                                                    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)'
                                                }}
                                            >
                                                <span className="text-surface-900 font-medium text-sm">{product.rating}</span>
                                                <StarFill className="text-yellow-500"></StarFill>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-8">
                                        <span className="text-xl font-semibold">${product.price}</span>
                                        <div className="flex flex-row-reverse md:flex-row gap-2">
                                            <Button variant="outlined">
                                                <Heart></Heart>
                                            </Button>
                                            <Button
                                                disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                                                className="flex-auto md:flex-initial whitespace-nowrap"
                                            >
                                                <ShoppingCart></ShoppingCart>
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </DataView.Content>
            </DataView.Root>
        </div>
    );
}
```

## Usage

```tsx
import { DataView } from '@primereact/ui/dataview';
```

```tsx
<DataView.Root>
    <DataView.Header></DataView.Header>
    <DataView.Content></DataView.Content>
    <DataView.Footer></DataView.Footer>
</DataView.Root>
```

## Examples

### Basic

Displays a list of items with support for layout switching.

```tsx
'use client';
import { ProductService } from '@/shared/services/product.service';
import { Button } from '@primereact/ui/button';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import { DataView } from '@primereact/ui/dataview';
import * as React from 'react';
import { Heart } from '@primeicons/react/heart';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { StarFill } from '@primeicons/react/star-fill';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function BasicDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
    }, []);

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return undefined;
        }
    };

    return (
        <div>
            <DataView.Root>
                <DataView.Content>
                    <div className="flex flex-col">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className={`flex flex-col sm:flex-row sm:items-center p-6 gap-4 ${index !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                            >
                                <div className="md:w-40 relative">
                                    <Image
                                        className="mx-auto rounded w-full"
                                        src={`https://primefaces.org/cdn/primevue/images/product/${product.image}`}
                                        alt={product.name}
                                        width={160}
                                        height={160}
                                    />
                                    <div className="absolute bg-black/70 rounded-border" style={{ left: '4px', top: '4px' }}>
                                        <Tag severity={getSeverity(product)}>{product.inventoryStatus}</Tag>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div className="flex flex-row md:flex-col justify-between items-start gap-2">
                                        <div>
                                            <span className="font-medium text-surface-500 dark:text-surface-400 text-sm">{product.category}</span>
                                            <div className="text-lg font-medium mt-2">{product.name}</div>
                                        </div>
                                        <div className="bg-surface-100 p-1" style={{ borderRadius: '30px' }}>
                                            <div
                                                className="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                                style={{
                                                    borderRadius: '30px',
                                                    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)'
                                                }}
                                            >
                                                <span className="text-surface-900 font-medium text-sm">{product.rating}</span>
                                                <StarFill className="text-yellow-500"></StarFill>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-8">
                                        <span className="text-xl font-semibold">${product.price}</span>
                                        <div className="flex flex-row-reverse md:flex-row gap-2">
                                            <Button variant="outlined">
                                                <Heart></Heart>
                                            </Button>
                                            <Button
                                                disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                                                className="flex-auto md:flex-initial whitespace-nowrap"
                                            >
                                                <ShoppingCart></ShoppingCart>
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </DataView.Content>
            </DataView.Root>
        </div>
    );
}
```

### Pagination

Use `Paginator` with `DataView.Footer` to navigate large datasets efficiently.

```tsx
'use client';
import { ProductService } from '@/shared/services/product.service';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { Heart } from '@primeicons/react/heart';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { StarFill } from '@primeicons/react/star-fill';
import { Button } from '@primereact/ui/button';
import { Paginator, type PaginatorPagesInstance, type PaginatorRootChangeEvent } from '@primereact/ui/paginator';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import { DataView } from '@primereact/ui/dataview';
import * as React from 'react';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function PaginationDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [page, setPage] = React.useState(1);
    const itemsPerPage = 5;

    React.useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return undefined;
        }
    };

    return (
        <div>
            <DataView.Root>
                <DataView.Content>
                    <div className="flex flex-col">
                        {products.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((product, index) => (
                            <div
                                key={index}
                                className={`flex flex-col sm:flex-row sm:items-center p-6 gap-4 ${index !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                            >
                                <div className="md:w-40 relative">
                                    <Image
                                        className="mx-auto rounded w-full"
                                        src={`https://primefaces.org/cdn/primevue/images/product/${product.image}`}
                                        alt={product.name}
                                        width={160}
                                        height={160}
                                    />
                                    <div className="absolute bg-black/70 rounded-border" style={{ left: '4px', top: '4px' }}>
                                        <Tag severity={getSeverity(product)}>{product.inventoryStatus}</Tag>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div className="flex flex-row md:flex-col justify-between items-start gap-2">
                                        <div>
                                            <span className="font-medium text-surface-500 dark:text-surface-400 text-sm">{product.category}</span>
                                            <div className="text-lg font-medium mt-2">{product.name}</div>
                                        </div>
                                        <div className="bg-surface-100 p-1" style={{ borderRadius: '30px' }}>
                                            <div
                                                className="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                                style={{
                                                    borderRadius: '30px',
                                                    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)'
                                                }}
                                            >
                                                <span className="text-surface-900 font-medium text-sm">{product.rating}</span>
                                                <StarFill className="text-yellow-500"></StarFill>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-8">
                                        <span className="text-xl font-semibold">${product.price}</span>
                                        <div className="flex flex-row-reverse md:flex-row gap-2">
                                            <Button variant="outlined">
                                                <Heart></Heart>
                                            </Button>
                                            <Button
                                                disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                                                className="flex-auto md:flex-initial whitespace-nowrap"
                                            >
                                                <ShoppingCart></ShoppingCart>
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </DataView.Content>
                <DataView.Footer>
                    <Paginator.Root
                        total={products.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={(e: PaginatorRootChangeEvent) => setPage(e.value)}
                        className="border-t border-surface-200 dark:border-surface-700 pt-4"
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
                                    paginator?.pages.map((page, index) =>
                                        page.type === 'page' ? (
                                            <Paginator.Page key={index} value={page.value} />
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
                                <AngleDoubleLeft />
                            </Paginator.Last>
                        </Paginator.Content>
                    </Paginator.Root>
                </DataView.Footer>
            </DataView.Root>
        </div>
    );
}
```

### Sorting

Use `useDataView` to sort items by a specific field and order.

```tsx
'use client';
import { ProductService } from '@/shared/services/product.service';
import { useDataView } from '@primereact/headless/dataview';
import { Button } from '@primereact/ui/button';
import { Tag } from '@primereact/ui/tag';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import Image from 'next/image';
import { DataView } from '@primereact/ui/dataview';
import * as React from 'react';
import { Heart } from '@primeicons/react/heart';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { StarFill } from '@primeicons/react/star-fill';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function SortDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [value, setValue] = React.useState<string | null>(null);

    const { sort } = useDataView();

    React.useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
    }, []);

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return undefined;
        }
    };

    const onSortChange = (value: string | null) => {
        const sortOrder = value === 'hightolow' ? -1 : value === 'lowtohigh' ? 1 : 0;

        setValue(value);
        setProducts((prev) => (sort([...prev], 'price', sortOrder) as Product[]) ?? []);
    };

    return (
        <div>
            <DataView.Root>
                <DataView.Header>
                    <div className="flex justify-center border-b border-surface-200 dark:border-surface-700 pb-4">
                        <ToggleButtonGroup
                            value={value}
                            onValueChange={(e: ToggleButtonGroupValueChangeEvent) => onSortChange(e.value as string)}
                            allowEmpty={false}
                        >
                            <ToggleButton.Root value="hightolow">
                                <ToggleButton.Indicator>Price High to Low</ToggleButton.Indicator>
                            </ToggleButton.Root>
                            <ToggleButton.Root value="lowtohigh">
                                <ToggleButton.Indicator>Price Low to High</ToggleButton.Indicator>
                            </ToggleButton.Root>
                        </ToggleButtonGroup>
                    </div>
                </DataView.Header>
                <DataView.Content>
                    <div className="flex flex-col">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className={`flex flex-col sm:flex-row sm:items-center p-6 gap-4 ${index !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                            >
                                <div className="md:w-40 relative">
                                    <Image
                                        className="mx-auto rounded w-full"
                                        src={`https://primefaces.org/cdn/primevue/images/product/${product.image}`}
                                        alt={product.name}
                                        width={160}
                                        height={160}
                                    />
                                    <div className="absolute bg-black/70 rounded-border" style={{ left: '4px', top: '4px' }}>
                                        <Tag severity={getSeverity(product)}>{product.inventoryStatus}</Tag>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div className="flex flex-row md:flex-col justify-between items-start gap-2">
                                        <div>
                                            <span className="font-medium text-surface-500 dark:text-surface-400 text-sm">{product.category}</span>
                                            <div className="text-lg font-medium mt-2">{product.name}</div>
                                        </div>
                                        <div className="bg-surface-100 p-1" style={{ borderRadius: '30px' }}>
                                            <div
                                                className="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                                style={{
                                                    borderRadius: '30px',
                                                    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)'
                                                }}
                                            >
                                                <span className="text-surface-900 font-medium text-sm">{product.rating}</span>
                                                <StarFill className="text-yellow-500"></StarFill>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-8">
                                        <span className="text-xl font-semibold">${product.price}</span>
                                        <div className="flex flex-row-reverse md:flex-row gap-2">
                                            <Button variant="outlined">
                                                <Heart></Heart>
                                            </Button>
                                            <Button
                                                disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                                                className="flex-auto md:flex-initial whitespace-nowrap"
                                            >
                                                <ShoppingCart></ShoppingCart>
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </DataView.Content>
            </DataView.Root>
        </div>
    );
}
```

### Layout

Switch between grid and list layouts to display the same data with different visual density.

```tsx
'use client';
import { ProductService } from '@/shared/services/product.service';
import { Table } from '@primeicons/react';
import { Bars } from '@primeicons/react/bars';
import { Heart } from '@primeicons/react/heart';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { StarFill } from '@primeicons/react/star-fill';
import { Button } from '@primereact/ui/button';
import { Tag } from '@primereact/ui/tag';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import Image from 'next/image';
import { DataView } from '@primereact/ui/dataview';
import * as React from 'react';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function LayoutDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [value, setValue] = React.useState<string>('grid');

    React.useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 12)));
    }, []);

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return undefined;
        }
    };

    const listLayout = () => {
        return (
            <div className="flex flex-col">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row sm:items-center p-6 gap-4 ${index !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                    >
                        <div className="md:w-40 relative">
                            <Image
                                className="mx-auto rounded w-full"
                                src={`https://primefaces.org/cdn/primevue/images/product/${product.image}`}
                                alt={product.name}
                                width={160}
                                height={160}
                            />
                            <div className="absolute bg-black/70 rounded-border" style={{ left: '4px', top: '4px' }}>
                                <Tag severity={getSeverity(product)}>{product.inventoryStatus}</Tag>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div className="flex flex-row md:flex-col justify-between items-start gap-2">
                                <div>
                                    <span className="font-medium text-surface-500 dark:text-surface-400 text-sm">{product.category}</span>
                                    <div className="text-lg font-medium mt-2">{product.name}</div>
                                </div>
                                <div className="bg-surface-100 p-1" style={{ borderRadius: '30px' }}>
                                    <div
                                        className="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                        style={{
                                            borderRadius: '30px',
                                            boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)'
                                        }}
                                    >
                                        <span className="text-surface-900 font-medium text-sm">{product.rating}</span>
                                        <StarFill className="text-yellow-500"></StarFill>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:items-end gap-8">
                                <span className="text-xl font-semibold">${product.price}</span>
                                <div className="flex flex-row-reverse md:flex-row gap-2">
                                    <Button variant="outlined">
                                        <Heart></Heart>
                                    </Button>
                                    <Button
                                        disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                                        className="flex-auto md:flex-initial whitespace-nowrap"
                                    >
                                        <ShoppingCart></ShoppingCart>
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const gridLayout = () => {
        return (
            <div className="grid grid-cols-12 gap-4">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                            <div className="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                                <div className="bg-surface-50 flex justify-center rounded p-4">
                                    <div className="relative mx-auto">
                                        <Image
                                            src={`https://primefaces.org/cdn/primevue/images/product/${product.image}`}
                                            alt={product.name}
                                            width={300}
                                            height={200}
                                            className="rounded"
                                        />
                                        <div className="absolute bg-black/70 rounded-border" style={{ left: '4px', top: '4px' }}>
                                            <Tag severity={getSeverity(product)}>{product.inventoryStatus}</Tag>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <div className="flex flex-row justify-between items-start gap-2">
                                        <div>
                                            <span className="font-medium text-surface-500 dark:text-surface-400 text-sm">{product.category}</span>
                                            <div className="text-lg font-medium mt-1">{product.name}</div>
                                        </div>
                                        <div className="bg-surface-100 p-1" style={{ borderRadius: '30px' }}>
                                            <div
                                                className="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                                style={{
                                                    borderRadius: '30px',
                                                    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)'
                                                }}
                                            >
                                                <span className="text-surface-900 font-medium text-sm">{product.rating}</span>
                                                <StarFill className="text-yellow-500"></StarFill>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 mt-6">
                                        <span className="text-2xl font-semibold">${product.price}</span>
                                        <div className="flex gap-2">
                                            <Button disabled={product.inventoryStatus === 'OUTOFSTOCK'} className="flex-auto whitespace-nowrap">
                                                <ShoppingCart></ShoppingCart>
                                                Buy Now
                                            </Button>
                                            <Button variant="outlined">
                                                <Heart></Heart>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const list = listLayout();
    const grid = gridLayout();

    return (
        <div>
            <DataView.Root>
                <DataView.Header>
                    <div className="flex justify-end border-b border-surface-200 dark:border-surface-700 pb-4">
                        <ToggleButtonGroup
                            value={value}
                            onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string)}
                            allowEmpty={false}
                        >
                            <ToggleButton.Root value="list">
                                <ToggleButton.Indicator>
                                    <Bars></Bars>
                                </ToggleButton.Indicator>
                            </ToggleButton.Root>
                            <ToggleButton.Root value="grid">
                                <ToggleButton.Indicator>
                                    <Table />
                                </ToggleButton.Indicator>
                            </ToggleButton.Root>
                        </ToggleButtonGroup>
                    </div>
                </DataView.Header>
                <DataView.Content>{value === 'list' ? list : grid}</DataView.Content>
            </DataView.Root>
        </div>
    );
}
```

### Loading

Use a skeleton layout to represent loading state while data is being fetched.

```tsx
'use client';
import { Table } from '@primeicons/react';
import { Bars } from '@primeicons/react/bars';
import { Skeleton } from '@primereact/ui/skeleton';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import { DataView } from '@primereact/ui/dataview';
import * as React from 'react';

export default function LoadingDemo() {
    const [value, setValue] = React.useState<string>('grid');

    const listLayout = () => {
        return (
            <div className="flex flex-col">
                {Array.from({ length: 6 }, (_, i) => (
                    <div
                        key={i}
                        className={`flex flex-col xl:flex-row xl:items-start p-6 gap-6 ${i !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                    >
                        <Skeleton className="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                        <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6">
                            <div className="flex flex-col items-center sm:items-start gap-4">
                                <Skeleton width="8rem" height="2rem" />
                                <Skeleton width="6rem" height="1rem" />

                                <div className="flex items-center gap-4">
                                    <Skeleton width="6rem" height="1rem" />
                                    <Skeleton width="3rem" height="1rem" />
                                </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                                <Skeleton width="4rem" height="2rem" />
                                <Skeleton size="3rem" shape="circle" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const gridLayout = () => {
        return (
            <div className="grid grid-cols-12 gap-4">
                {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="col-span-12 sm:col-span-6 xl:col-span-4 p-2">
                        <div className="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <Skeleton width="6rem" height="2rem" />
                                <Skeleton width="3rem" height="1rem" />
                            </div>
                            <div className="flex flex-col items-center gap-4 py-8">
                                <Skeleton width="75%" height="10rem" />
                                <Skeleton width="8rem" height="2rem" />
                                <Skeleton width="6rem" height="1rem" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Skeleton width="4rem" height="2rem" />
                                <Skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const list = listLayout();
    const grid = gridLayout();

    return (
        <div>
            <DataView.Root>
                <DataView.Header>
                    <div className="flex justify-end border-b border-surface-200 dark:border-surface-700 pb-4">
                        <ToggleButtonGroup
                            value={value}
                            onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string)}
                            allowEmpty={false}
                        >
                            <ToggleButton.Root value="list">
                                <ToggleButton.Indicator>
                                    <Bars></Bars>
                                </ToggleButton.Indicator>
                            </ToggleButton.Root>
                            <ToggleButton.Root value="grid">
                                <ToggleButton.Indicator>
                                    <Table />
                                </ToggleButton.Indicator>
                            </ToggleButton.Root>
                        </ToggleButtonGroup>
                    </div>
                </DataView.Header>
                <DataView.Content>{value === 'list' ? list : grid}</DataView.Content>
            </DataView.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [DataView Primitive](../../primitive/dataview/features.md#api) for the full sub-component API.

### Hooks

See [useDataView](../../headless/dataview/features.md#api) for the headless hook API.

## Accessibility

See [DataView Primitive](../../primitive/dataview/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
