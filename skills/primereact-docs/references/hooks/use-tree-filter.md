# useTreeFilter

Filter hook for hierarchical data. Lenient or strict branch matching.

## Usage

```tsx
import { useTreeFilter } from '@primereact/hooks/use-tree-filter';
```

```tsx
const { filteredNodes, value, setValue, isFiltered } = useTreeFilter({
    nodes,
    field: 'label'
});
```

`useTreeFilter` walks nodes with `children` and returns the matching branches. Rules and matchers are the same as `useFilter`, pick the hook that matches your data shape.

## Signature

```ts
function useTreeFilter<TNode extends TreeNodeLike, TMode extends string = BuiltInMatchMode>(options: UseTreeFilterOptions<TNode, TMode>): UseTreeFilterReturn<TNode, TMode>;
```

## filterMode

- **`lenient`** (default), keep a branch if it matches, or if any descendant matches. The whole subtree is included.
- **`strict`**, leaves must match on their own. Parents are kept only as a path to a matching descendant; non-matching leaves are dropped.

## Rules

Same shape as `useFilter`. Fields resolve against `node.data` first, then against the node itself. So a flat `{ key, label, children }` works the same as the DataTable-style `{ key, data: { name, type }, children }`.

```tsx
// node.data.name
useTreeFilter({
    nodes,
    defaultRules: [{ field: 'name', value: 'doc', matchMode: 'contains' }],
    filterMode: 'lenient'
});

// node.label (top-level)
useTreeFilter({
    nodes,
    defaultRules: [{ field: 'label', value: 'doc', matchMode: 'contains' }]
});
```

## Shorthand

For single-field filtering, skip the rules array and pass `field` directly. The hook builds a `{ field, value, matchMode }` rule for you and exposes `value` / `setValue` for the input.

```tsx
const { filteredNodes, value, setValue, isFiltered } = useTreeFilter({
    nodes,
    field: 'label',
    matchMode: 'contains' // optional, defaults to 'contains'
});

<InputText value={value as string} onChange={(e) => setValue(e.target.value)} />;
```

`value` follows the standard controlled / uncontrolled convention:

| Mode             | Setup                                        | When to use                                                                 |
| ---------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| **Uncontrolled** | omit `value`, optionally pass `defaultValue` | Default. The hook keeps the state and `setValue` updates it.                |
| **Controlled**   | pass both `value` and `onValueChange`        | When the parent already owns the query (URL sync, parent re-renders, etc.). |

Passing `rules` or `defaultRules` turns the shorthand off, use one or the other.

## Lazy

With `lazy: true` the client-side walk is skipped and `filteredNodes` is returned untouched. `onLazyLoad` fires with the current rules and the active `filterMode`; forward both so your backend can apply the same branch logic.

```tsx
useTreeFilter({
    nodes,
    lazy: true,
    defaultRules: [{ field: 'label', value: null }],
    filterMode: 'lenient',
    onLazyLoad: ({ rules, filterMode }) => {
        // fetch filtered tree from the server
    }
});
```

## Custom matchers

Reuse `matchers` and the shared `registerMatcher` / `unregisterMatcher` helpers from `@primereact/hooks/use-filter`.
