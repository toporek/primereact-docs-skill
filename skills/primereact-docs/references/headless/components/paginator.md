# usePaginator

Hook that manages pagination state, page calculations, and accessible navigation prop objects.

## Usage

```tsx
import { usePaginator } from '@primereact/headless/paginator';
```

```tsx
const paginator = usePaginator({ total: 100, itemsPerPage: 10 });

<nav {...paginator.rootProps}>
    <button {...paginator.firstProps}></button>
    <button {...paginator.prevProps}></button>
    <span {...paginator.pagesProps}>
        {paginator.pages.map((page, i) => (
            <button key={i} {...paginator.getPageProps(page.value!)}></button>
```

`usePaginator` computes page ranges, ellipsis positions, and pre-built ARIA props for navigation buttons. See [Primitive](../../primitive/components/paginator.md) for a component-based API.

## Features

- **Page range algorithm**, builds a compact list of buttons using `siblings`, `edges`, and automatic ellipsis insertion
- **Navigation prop objects**, `firstProps`, `prevProps`, `nextProps`, `lastProps`, and `getPageProps(page)` pre-wire clicks and disabled state
- **Controlled or uncontrolled**, use `page` / `onPageChange` for external state or `defaultPage` for internal state
- **Reactive state**, `state.activePage`, `state.totalPages`, `state.canPrev`, `state.canNext` for custom indicators and summaries
- **Iterable pages collection**, `pages` array with `type: 'page' | 'ellipsis'` entries for rendering any custom layout

## Working with callbacks

### onPageChange, controlled pagination

Pair `page` with `onPageChange` when pagination is driven by URL state, query params, or a parent store.

```tsx
const [page, setPage] = React.useState(1);

const paginator = usePaginator({
    page,
    total: 100,
    itemsPerPage: 10,
    onPageChange: (e) => setPage(e.value)
});
```

### Tuning the page window

`siblings` controls how many buttons sit on either side of the active page; `edges` controls how many are pinned at the start and end. Disable `showEllipsis` to render all pages inline.

```tsx
const paginator = usePaginator({
    total: 100,
    itemsPerPage: 5,
    siblings: 2,
    edges: 1
});
```

### Rendering pages with ellipsis gaps

Iterate `pages` and branch on `type` to render both page buttons and gap indicators.

```tsx
paginator.pages.map((item, i) =>
    item.type === 'page' ? (
        <button key={i} {...paginator.getPageProps(item.value!)}>
            {item.value}
        </button>
    ) : (
        <span key={i}>...</span>
    )
);
```

### Building a custom summary

Use reactive state to render text like "Page 3 of 10" or disable external controls in sync with the paginator.

```tsx
const paginator = usePaginator({ total: 100, itemsPerPage: 10 });

<span>
    Page {paginator.state.activePage} of {paginator.state.totalPages}
</span>;
```

### Syncing with a data source

Respond to page changes to fetch a new slice of data.

```tsx
const paginator = usePaginator({
    total,
    itemsPerPage: 20,
    onPageChange: (e) => fetchPage(e.value)
});
```

## Styling with data attributes

Prop objects include data attributes for styling active, disabled, and navigation states.

```css
[data-active] {
    background: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}

[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
}
```

## API

### usePaginator

> **`usePaginator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/paginator or the installed `@primereact/types`.

## Accessibility

Arrow keys move through page buttons, Home/End jump to first/last page, and Enter activates the focused page. See [Primitive](../../primitive/components/paginator.md#accessibility) for full WAI-ARIA compliance details.
