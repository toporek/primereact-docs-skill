# useDataView

Hook that manages layout state and provides a locale-aware sort utility for data presentation.

## Usage

```tsx
import { useDataView } from '@primereact/headless/dataview';
```

```tsx
const { rootProps, contentProps, headerProps, footerProps, emptyProps, state, sort } = useDataView();

<div {...rootProps}>
    <div {...headerProps}></div>
    <div {...contentProps}></div>
    <div {...footerProps}></div>
</div>;
```

`useDataView` manages layout switching and provides a locale-aware sort utility. See [Primitive](../../primitive/components/dataview.md) for a component-based API.

## Features

- **Layout state**, tracks the active layout (`list` or `grid`) and reflects it via `data-layout` on the root
- **Controlled or uncontrolled**, drive layout from external state or let the hook manage it internally
- **Locale-aware sort**, built-in `sort(data, field, order)` uses `localeCompare` for strings and numeric compare for numbers
- **Section prop objects**, ready-to-spread props for root, content, header, footer, and empty sections with scoped data attributes

## Working with callbacks

### Reacting to layout changes

Pass `onLayoutChange` to respond when the layout switches, useful for persisting preferences or re-rendering with a different item template.

```tsx
const { state } = useDataView({
    defaultLayout: 'grid',
    onLayoutChange: (e) => localStorage.setItem('dv-layout', e.value)
});
```

### Controlled layout

Pair `layout` with `onLayoutChange` when the layout must be driven by parent state or URL search params.

```tsx
const [layout, setLayout] = React.useState('list');

const dataview = useDataView({
    layout,
    onLayoutChange: (e) => setLayout(e.value)
});
```

### Sorting a dataset

Use the returned `sort` method to get a new array without mutating the original. Order `1` is ascending, `-1` descending.

```tsx
const { sort } = useDataView();

const asc = sort(products, 'price', 1);
const desc = sort(products, 'price', -1);
```

### Rendering per layout

Read `state.layout` to branch between list and grid templates in the content slot.

```tsx
const { state, contentProps } = useDataView({ defaultLayout: 'grid' });

<div {...contentProps}>{state.layout === 'grid' ? products.map((p) => <Card key={p.id} product={p} />) : products.map((p) => <Row key={p.id} product={p} />)}</div>;
```

## Styling with data attributes

The prop objects carry `data-scope="dataview"` and a `data-part` for each section. The root also exposes the active layout via `data-layout`.

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

> **`useDataView` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/dataview or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate items when selectable, and Enter activates the focused item. See [Primitive](../../primitive/components/dataview.md#accessibility) for full WAI-ARIA compliance details.
