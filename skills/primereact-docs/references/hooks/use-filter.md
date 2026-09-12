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

## Advanced, multi-rule + custom matcher

Pass `matchers` to register an ad-hoc matcher for a single hook instance. The cursor API (`rule(index)`) gives a typed handle per rule.

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
