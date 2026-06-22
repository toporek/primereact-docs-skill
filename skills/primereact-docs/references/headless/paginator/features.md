# usePaginator

Hook that manages pagination state, page calculations, and accessible navigation prop objects.

```tsx
'use client';

import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { EllipsisH } from '@primeicons/react/ellipsis-h';
import { usePaginator } from '@primereact/headless/paginator';

export default function BasicDemo() {
    const { rootProps, firstProps, prevProps, nextProps, lastProps, pagesProps, pages, getPageProps } = usePaginator({ total: 100, itemsPerPage: 5 });

    return (
        <nav {...rootProps} className="flex items-center justify-center gap-1">
            <button
                {...firstProps}
                className="inline-flex items-center justify-center size-9 rounded-full border-0 bg-transparent text-surface-500 dark:text-surface-400 cursor-pointer select-none hover:bg-surface-100 dark:hover:bg-surface-800 disabled:opacity-60 disabled:pointer-events-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
                <AngleDoubleLeft className="size-4" />
            </button>
            <button
                {...prevProps}
                className="inline-flex items-center justify-center size-9 rounded-full border-0 bg-transparent text-surface-500 dark:text-surface-400 cursor-pointer select-none hover:bg-surface-100 dark:hover:bg-surface-800 disabled:opacity-60 disabled:pointer-events-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
                <AngleLeft className="size-4" />
            </button>
            <span {...pagesProps} className="flex items-center gap-1">
                {pages.map((page, index) =>
                    page.type === 'page' ? (
                        <button
                            key={index}
                            {...getPageProps(page.value!)}
                            className="inline-flex items-center justify-center size-9 rounded-full border-0 bg-transparent text-surface-500 dark:text-surface-400 text-sm cursor-pointer select-none hover:bg-[var(--p-content-hover-background)] dark:hover:bg-surface-800 data-[active]:bg-[var(--p-highlight-background)] data-[active]:text-[var(--p-highlight-color)] data-[active]:hover:bg-[var(--p-highlight-background)] disabled:opacity-60 disabled:pointer-events-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
                        >
                            {page.value}
                        </button>
                    ) : (
                        <span key={index} className="inline-flex items-center justify-center size-9 text-surface-400 dark:text-surface-500">
                            <EllipsisH className="size-4" />
                        </span>
                    )
                )}
            </span>
            <button
                {...nextProps}
                className="inline-flex items-center justify-center size-9 rounded-full border-0 bg-transparent text-surface-500 dark:text-surface-400 cursor-pointer select-none hover:bg-surface-100 dark:hover:bg-surface-800 disabled:opacity-60 disabled:pointer-events-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
                <AngleRight className="size-4" />
            </button>
            <button
                {...lastProps}
                className="inline-flex items-center justify-center size-9 rounded-full border-0 bg-transparent text-surface-500 dark:text-surface-400 cursor-pointer select-none hover:bg-surface-100 dark:hover:bg-surface-800 disabled:opacity-60 disabled:pointer-events-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
                <AngleDoubleRight className="size-4" />
            </button>
        </nav>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-11,14-15}
import { usePaginator } from '@primereact/headless/paginator';

const paginator = usePaginator({ total: 100, itemsPerPage: 10 });

return (
    <nav {...paginator.rootProps}>
        <button {...paginator.firstProps}></button>
        <button {...paginator.prevProps}></button>
        <span {...paginator.pagesProps}>
            {paginator.pages.map((page, i) => (
                <button key={i} {...paginator.getPageProps(page.value!)}></button>
            ))}
        </span>
        <button {...paginator.nextProps}></button>
        <button {...paginator.lastProps}></button>
    </nav>
);
```

`usePaginator` computes page ranges, ellipsis positions, and pre-built ARIA props for navigation buttons — see [Primitive](../../primitive/paginator/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `firstProps`, `prevProps`, `nextProps`, `lastProps`, `pagesProps`, `getPageProps`)
- Smart page range algorithm with configurable `siblings` and `edges`
- Automatic ellipsis insertion with `showEllipsis` toggle
- Exposes `state.activePage`, `state.totalPages`, `state.canPrev`, `state.canNext` for custom rendering

## Behavior

### Default Page

Use `defaultPage` to set the initial active page in uncontrolled mode.

```tsx
const paginator = usePaginator({ defaultPage: 3, total: 100, itemsPerPage: 10 });
```

### Controlled

Use `page` and `onPageChange` for full programmatic control.

```tsx
const [page, setPage] = React.useState(1);
const paginator = usePaginator({
    page,
    total: 100,
    itemsPerPage: 10,
    onPageChange: (e) => setPage(e.value)
});
```

### Items Per Page

Set `itemsPerPage` to control how many items each page represents. Total pages are computed as `Math.ceil(total / itemsPerPage)`.

```tsx
const paginator = usePaginator({ total: 200, itemsPerPage: 20 });
```

### Siblings

Set `siblings` to control the number of page buttons shown on each side of the active page.

```tsx
const paginator = usePaginator({ total: 100, itemsPerPage: 5, siblings: 2 });
```

### Edges

Set `edges` to control how many page buttons are always visible at the start and end of the range.

```tsx
const paginator = usePaginator({ total: 100, itemsPerPage: 5, edges: 2 });
```

### Show Ellipsis

Set `showEllipsis` to `false` to hide the gap indicators between page ranges. When disabled, `edges` is ignored.

```tsx
const paginator = usePaginator({ total: 100, itemsPerPage: 5, showEllipsis: false });
```

### Disabled

Set `disabled` to prevent all navigation interaction.

```tsx
const paginator = usePaginator({ total: 100, itemsPerPage: 10, disabled: true });
```

### Rendering Pages and Ellipsis

The `pages` array contains items with `type` of `'page'` or `'ellipsis'`. Iterate over it to render page buttons and gap indicators.

```tsx
const paginator = usePaginator({ total: 100, itemsPerPage: 5 });

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

### Custom Styling with Data Attributes

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

### Using `state` for Custom UI

The hook exposes reactive state for rendering custom indicators or text.

```tsx
const paginator = usePaginator({ total: 100, itemsPerPage: 10 });

<span>
    Page {paginator.state.activePage} of {paginator.state.totalPages}
</span>;
```

## API

### usePaginator

> **API/props table for `usePaginator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Paginator Primitive](../../primitive/paginator/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
