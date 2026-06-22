# DataView

An unstyled data container component for building list and grid layouts with full control over presentation.

Build fully custom data presentation layouts with complete control over structure and styling.

```tsx
'use client';
import { DataView } from 'primereact/dataview';
import styles from './basic-demo.module.css';

const products = [
    { name: 'Bamboo Watch', category: 'Accessories', price: 65 },
    { name: 'Black Watch', category: 'Accessories', price: 72 },
    { name: 'Blue Band', category: 'Fitness', price: 79 },
    { name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
    { name: 'Gaming Set', category: 'Electronics', price: 299 }
];

export default function BasicDemo() {
    return (
        <DataView.Root className={styles.root}>
            <DataView.Header className={styles.header}>
                <span>{products.length} products</span>
            </DataView.Header>
            <DataView.Content className={styles.content}>
                {products.map((product) => (
                    <div key={product.name} className={styles.item}>
                        <div>
                            <div className={styles.name}>{product.name}</div>
                            <div className={styles.category}>{product.category}</div>
                        </div>
                        <span className={styles.price}>${product.price}</span>
                    </div>
                ))}
            </DataView.Content>
        </DataView.Root>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Header`, `Content`, `Footer`, `Empty`
- Layout state management with controlled and uncontrolled modes
- Locale-aware `sort` utility for ordering data by field
- Layout value reflected in `data-layout` attribute for CSS-driven layout switching

## Usage

```tsx
import { DataView } from 'primereact/dataview';
```

```tsx
<DataView.Root>
    <DataView.Header></DataView.Header>
    <DataView.Content></DataView.Content>
    <DataView.Footer></DataView.Footer>
    <DataView.Empty></DataView.Empty>
</DataView.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<DataView.Root as="section"></DataView.Root>
<DataView.Content as="ul"></DataView.Content>
```

Default elements: `Root`=`div`, `Header`=`div`, `Content`=`div`, `Footer`=`div`, `Empty`=`div`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<DataView.Root>{(instance) => <span>Layout: {instance.state.layout}</span>}</DataView.Root>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { ProductService } from '@/shared/services/product.service';
import { Heart } from '@primeicons/react/heart';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { StarFill } from '@primeicons/react/star-fill';
import { Button } from '@primereact/ui/button';
import { DataView } from '@primereact/ui/dataview';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
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

export default function DataViewPTDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 3)));
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

## API

### DataViewRoot

> **API/props table for `DataViewRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                |
| ------------- | -------------------- |
| `data-scope`  | `"dataview"`         |
| `data-part`   | `"root"`             |
| `data-layout` | Current layout value |

> **API/props table for `DataViewRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DataViewHeader

> **API/props table for `DataViewHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"dataview"` |
| `data-part`  | `"header"`   |

> **API/props table for `DataViewHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DataViewContent

> **API/props table for `DataViewContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"dataview"` |
| `data-part`  | `"content"`  |

> **API/props table for `DataViewContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DataViewFooter

> **API/props table for `DataViewFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"dataview"` |
| `data-part`  | `"footer"`   |

> **API/props table for `DataViewFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DataViewEmpty

> **API/props table for `DataViewEmpty` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"dataview"` |
| `data-part`  | `"empty"`    |

> **API/props table for `DataViewEmpty` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

DataView uses semantic `div` containers. Add `role` and `aria-label` attributes as needed for the specific data layout.

```tsx
<DataView.Root aria-label="Product list">
    <DataView.Content role="list"></DataView.Content>
</DataView.Root>
```

### Keyboard Support

Not applicable. DataView is a presentational container — keyboard interaction depends on the content rendered inside.
