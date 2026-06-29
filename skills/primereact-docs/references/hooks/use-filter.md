# useFilter

Generic filter hook for flat collections, with built-in match modes, accent-insensitive matching, locale support, and custom matcher registration.

## Usage

```tsx
import { useFilter } from '@primereact/hooks/use-filter';
```

```tsx
const { filteredData, value, setValue, isFiltered } = useFilter({
    data: products,
    field: ['name', 'category'],
    matchMode: 'contains'
});
```

`useFilter` is a framework-level hook from `@primereact/hooks` that takes arbitrary data plus one or more filter rules and returns the filtered result. The same built-in matcher registry powers DataTable's filter feature, so behaviour stays consistent across any component built on top of it.

## Signature

```ts
function useFilter<T, TMode extends string = BuiltInMatchMode>(options: UseFilterOptions<T, TMode>): UseFilterReturn<T, TMode>;
```

## Rules

A rule targets one field (or an array of fields for multi-field search) with a value and a match mode.

```tsx
defaultRules: [
    { field: 'name', value: 'iphone', matchMode: 'startsWith' },
    { field: ['name', 'category', 'description'], value: 'blue' },
    { field: 'price', value: [100, 500], matchMode: 'between' }
];
```

Composite rules carry multiple constraints tied by an AND/OR operator:

```tsx
{
    field: 'name',
    operator: 'and',
    constraints: [
        { value: 'A', matchMode: 'startsWith' },
        { value: 'Z', matchMode: 'notEquals' }
    ]
}
```

## Basic

For the common "single field/multi-field search" case you can skip the `rules` array and use the `field` / `value` / `matchMode` shorthand.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { Search } from '@primeicons/react/search';
import { useFilter } from '@primereact/hooks/use-filter';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import Image from 'next/image';
import * as React from 'react';

const statusSeverity: Record<string, 'success' | 'warn' | 'danger'> = {
    INSTOCK: 'success',
    LOWSTOCK: 'warn',
    OUTOFSTOCK: 'danger'
};

export default function BasicDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 12));
    }, []);

    const [search, setSearch] = React.useState('');

    const { filteredData } = useFilter<Product>({
        data: products,
        field: ['name', 'category', 'code'],
        value: search,
        matchMode: 'contains'
    });

    return (
        <div className="w-full flex flex-col gap-3">
            <IconField.Root className="w-full sm:max-w-sm">
                <IconField.Inset>
                    <Search />
                </IconField.Inset>
                <InputText
                    type="search"
                    placeholder="Search name, category, code..."
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    className="w-full"
                />
            </IconField.Root>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredData.map((item) => (
                    <div key={item.id} className="p-3 border border-surface-200 dark:border-surface-700 rounded-md flex items-center gap-3">
                        <div className="relative shrink-0 w-12 h-12 rounded-md shadow overflow-hidden">
                            <Image
                                src={`https://primefaces.org/cdn/primevue/images/product/${item.image}`}
                                alt={item.name}
                                fill
                                sizes="48px"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <span className="font-medium truncate">{item.name}</span>
                            <span className="text-xs text-surface-500 dark:text-surface-400 truncate">{item.code}</span>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                                <Tag severity="secondary">{item.category}</Tag>
                                <Tag severity={statusSeverity[item.inventoryStatus] ?? 'secondary'}>{item.inventoryStatus}</Tag>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredData.length === 0 && (
                <div className="p-4 text-center text-sm text-surface-500 dark:text-surface-400">No products match the search.</div>
            )}
        </div>
    );
}

```

## Advanced, multi-rule + custom matcher

Pass `matchers` to register an ad-hoc matcher for a single hook instance. The cursor API (`rule(index)`) gives a typed handle per rule.

```tsx
'use client';
import { ProductService, type Product } from '@/shared/services/product.service';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Search } from '@primeicons/react/search';
import { useFilter, type FilterMatcher } from '@primereact/hooks/use-filter';
import { Button } from '@primereact/ui/button';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const statusOptions = [
    { label: 'All statuses', value: '' },
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
];

const extraMatchers: Record<string, FilterMatcher> = {
    expensive: (value) => Number(value) >= 100
};

export default function AdvancedDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        setProducts(ProductService.getProductsData().slice(0, 12));
    }, []);

    const { filteredData, rule, isFiltered, clearAll } = useFilter<Product, 'contains' | 'equals' | 'expensive'>({
        data: products,
        defaultRules: [
            { field: 'name', value: null, matchMode: 'contains' },
            { field: 'inventoryStatus', value: null, matchMode: 'equals' },
            { field: 'price', value: null, matchMode: 'expensive' }
        ],
        matchers: extraMatchers
    });

    const nameRule = rule(0);
    const statusRule = rule(1);
    const priceRule = rule(2);

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
                <IconField.Root className="w-full sm:w-auto sm:flex-1 sm:max-w-xs">
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        type="search"
                        placeholder="Name contains..."
                        size="small"
                        value={(nameRule?.value as string) ?? ''}
                        onChange={(e: any) => nameRule?.setValue(e.target.value)}
                        className="w-full"
                    />
                </IconField.Root>

                <Select.Root
                    value={(statusRule?.value as string) ?? ''}
                    onValueChange={(e: SelectValueChangeEvent) => statusRule?.setValue(e.value || null)}
                    options={statusOptions}
                    optionLabel="label"
                    optionValue="value"
                    size="small"
                >
                    <Select.Trigger className="w-full sm:w-40">
                        <Select.Value placeholder="Status" />
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

                <Button
                    variant={priceRule?.value === true ? undefined : 'outlined'}
                    severity={priceRule?.value === true ? 'primary' : 'secondary'}
                    size="small"
                    onClick={() => priceRule?.setValue(priceRule?.value === true ? null : true)}
                >
                    ≥ $100
                </Button>

                {isFiltered && (
                    <Button variant="text" size="small" onClick={clearAll}>
                        Clear
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredData.map((item) => (
                    <div key={item.id} className="p-3 border border-surface-200 dark:border-surface-700 rounded-md flex flex-col gap-1">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-surface-500 dark:text-surface-400">{item.code}</span>
                        <div className="flex items-center justify-between mt-2">
                            <Tag severity="secondary">{item.category}</Tag>
                            <span className="font-semibold">${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            {filteredData.length === 0 && (
                <div className="p-4 text-center text-sm text-surface-500 dark:text-surface-400">No products match the filters.</div>
            )}
        </div>
    );
}

```

## Global matcher registry

For matchers you want available everywhere, `registerMatcher` writes into a shared table the hook consults alongside the built-ins.

```tsx
import { registerMatcher } from '@primereact/hooks/use-filter';

registerMatcher('greaterThanAvg', (value, filter) => Number(value) > Number(filter));
```

Local `matchers` option always wins when both are present. Call `unregisterMatcher(name)` to remove an entry (useful in tests).

## Lazy (server-side)

Set `lazy: true` to skip client-side filtering. `filteredData` is returned unchanged. Whenever the rules settle (respecting `filterDelay`), `onLazyLoad` fires with the current rule set, typically you turn that into a request and replace `data` with the server response.

```tsx
const [data, setData] = React.useState<Customer[]>([]);
const [query, setQuery] = React.useState('');

useFilter<Customer>({
    data,
    lazy: true,
    field: ['name', 'country'],
    value: query,
    onValueChange: (v) => setQuery((v as string) ?? ''),
    filterDelay: 300,
    onLazyLoad: async ({ rules }) => {
        const res = await fetch('/api/customers?' + toQuery(rules));
        setData(await res.json());
    }
});
```

## Cursor API

Setters by index:

```tsx
const { setValue, setMatchMode, setOperator, setConstraintValue } = useFilter({ ... });

setValue(0, 'amy');
setConstraintValue(0, 1, 'Z');
```

Or scoped by rule:

```tsx
const { rule } = useFilter({ ... });

rule(0)?.setValue('amy');
rule('name')?.addConstraint('equals');
rule('name')?.constraint(1)?.setValue('Z');
```
