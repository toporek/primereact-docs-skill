# useDataView

Hook that manages layout state and provides a locale-aware sort utility for data presentation.

```tsx
'use client';
import { useDataView } from '@primereact/headless/dataview';

const products = [
    { name: 'Bamboo Watch', category: 'Accessories', price: 65 },
    { name: 'Black Watch', category: 'Accessories', price: 72 },
    { name: 'Blue Band', category: 'Fitness', price: 79 },
    { name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
    { name: 'Gaming Set', category: 'Electronics', price: 299 }
];

export default function BasicDemo() {
    const { rootProps, contentProps, headerProps, emptyProps, state } = useDataView({ defaultLayout: 'list' });

    return (
        <div {...rootProps} className="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <div {...headerProps} className="px-4 py-3 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
                <span className="text-sm font-medium text-surface-600 dark:text-surface-300">
                    {products.length} products &middot; {state.layout} view
                </span>
            </div>
            <div {...contentProps}>
                {products.length > 0 ? (
                    <div className="flex flex-col divide-y divide-surface-200 dark:divide-surface-700">
                        {products.map((product) => (
                            <div key={product.name} className="flex items-center justify-between px-4 py-3">
                                <div>
                                    <div className="text-sm font-medium text-surface-700 dark:text-surface-0">{product.name}</div>
                                    <div className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{product.category}</div>
                                </div>
                                <span className="text-sm font-semibold text-surface-700 dark:text-surface-0">${product.price}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div {...emptyProps} className="px-4 py-8 text-center text-sm text-surface-500 dark:text-surface-400">
                        No products found.
                    </div>
                )}
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-9}
import { useDataView } from '@primereact/headless/dataview';

const { rootProps, contentProps, headerProps, footerProps, emptyProps, state, sort } = useDataView();

return (
    <div {...rootProps}>
        <div {...headerProps}></div>
        <div {...contentProps}></div>
        <div {...footerProps}></div>
    </div>
);
```

`useDataView` manages layout switching and provides a locale-aware sort utility — see [Primitive](../../primitive/dataview/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects for root, content, header, footer, and empty sections
- Supports controlled (`layout`) and uncontrolled (`defaultLayout`) layout modes
- Provides `sort(data, field, order)` method with locale-aware comparison
- Reflects current layout in `data-layout` attribute on root

## Behavior

### Default Layout

The default layout is `'list'`. Set `defaultLayout` to change the initial value.

```tsx
const { state } = useDataView({ defaultLayout: 'grid' });

state.layout; // 'grid'
```

### Controlled Layout

Pass `layout` and `onLayoutChange` to control the layout externally.

```tsx
const [layout, setLayout] = React.useState('list');
const { state } = useDataView({ layout, onLayoutChange: (e) => setLayout(e.value) });
```

### Sorting

Use the `sort` method to sort an array by field name and direction.

```tsx
const { sort } = useDataView();

const sorted = sort(products, 'price', 1); // ascending
const reversed = sort(products, 'price', -1); // descending
```

### Custom Styling with Data Attributes

The prop objects include `data-scope="dataview"` and `data-part` for styling. The root also includes `data-layout`.

```css
[data-scope='dataview'][data-part='root'] {
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
}

[data-scope='dataview'][data-layout='grid'] [data-part='content'] {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

## API

### useDataView

> **API/props table for `useDataView` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [DataView Primitive](../../primitive/dataview/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
