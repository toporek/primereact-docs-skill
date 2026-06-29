# useBreadcrumb

Hook that provides semantic ARIA attributes and data attributes for breadcrumb navigation.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Home } from '@primeicons/react/home';
import { useBreadcrumb } from '@primereact/headless/breadcrumb';

export default function BasicDemo() {
    const { rootProps, separatorProps } = useBreadcrumb();

    return (
        <div className="flex justify-center">
            <nav {...rootProps} className="bg-surface-0 dark:bg-surface-900 py-3 px-4 rounded-lg overflow-x-auto">
                <ol className="m-0 p-0 list-none flex items-center flex-nowrap gap-2">
                    <li className="flex items-center gap-2">
                        <a
                            href="/"
                            className="no-underline flex items-center gap-2 text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-0 transition-colors rounded-md focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <Home className="w-4 h-4" />
                        </a>
                    </li>
                    <li {...separatorProps} className="flex items-center text-surface-400 dark:text-surface-500">
                        <ChevronRight className="w-3 h-3" />
                    </li>
                    <li className="flex items-center gap-2">
                        <a
                            href="#"
                            className="no-underline text-sm text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-0 transition-colors rounded-md focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Products
                        </a>
                    </li>
                    <li {...separatorProps} className="flex items-center text-surface-400 dark:text-surface-500">
                        <ChevronRight className="w-3 h-3" />
                    </li>
                    <li className="flex items-center gap-2">
                        <a
                            href="#"
                            className="no-underline text-sm text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-0 transition-colors rounded-md focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Electronics
                        </a>
                    </li>
                    <li {...separatorProps} className="flex items-center text-surface-400 dark:text-surface-500">
                        <ChevronRight className="w-3 h-3" />
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-sm text-surface-950 dark:text-surface-0" aria-current="page">
                            Laptops
                        </span>
                    </li>
                </ol>
            </nav>
        </div>
    );
}

```

## Usage

```tsx
import { useBreadcrumb } from '@primereact/headless/breadcrumb';
```

```tsx
const { rootProps, separatorProps, ellipsisProps } = useBreadcrumb();

<nav {...rootProps}>
    <ol>
        <li></li>
        <li {...separatorProps}></li>
    </ol>
</nav>;
```

`useBreadcrumb` provides semantic ARIA attributes for navigation, separators, and ellipsis elements, see [Primitive](../../primitive/components/breadcrumb.md) for a component-based API.

## Features

- **Navigation landmark**, `rootProps` labels the nav element with `aria-label="Breadcrumb"` so assistive tech announces it as a navigation region
- **Presentational separators**, `separatorProps` marks visual dividers with `role="presentation"` and `aria-hidden` so screen readers skip them
- **Collapsed items**, `ellipsisProps` hides overflow indicators from the accessibility tree while keeping them visible
- **Stateless and composable**, no internal state, spread the returned props on any element and handle links with native anchor semantics

## Working with callbacks

### Marking separators between items

Spread `separatorProps` on any visual divider element to keep it out of the accessibility tree.

```tsx
const { separatorProps } = useBreadcrumb();

<li {...separatorProps}>
    <ChevronRight />
</li>;
```

### Rendering a collapsed overflow indicator

Use `ellipsisProps` on the element that represents collapsed breadcrumb items.

```tsx
const { ellipsisProps } = useBreadcrumb();

<span {...ellipsisProps}>...</span>;
```

### Marking the current page

The hook does not annotate the active item. Apply `aria-current="page"` yourself on the last crumb so assistive tech announces it as the current location.

```tsx
<span aria-current="page">Laptops</span>
```

## Styling with data attributes

Every prop object includes `data-scope="breadcrumb"` and a `data-part` attribute. Use them as CSS selectors instead of classNames.

| Scope        | Part        | Notes                        |
| ------------ | ----------- | ---------------------------- |
| `breadcrumb` | `root`      | The nav element              |
| `breadcrumb` | `separator` | Visual divider between items |
| `breadcrumb` | `ellipsis`  | Collapsed overflow indicator |

```css
[data-scope='breadcrumb'][data-part='root'] {
    padding: 0.75rem 1rem;
}

[data-scope='breadcrumb'][data-part='separator'] {
    color: rgba(0, 0, 0, 0.3);
}
```

## API

### useBreadcrumb

> **`useBreadcrumb` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/breadcrumb or the installed `@primereact/types`.

## Accessibility

Tab moves through links sequentially using native anchor semantics. See [Primitive](../../primitive/components/breadcrumb.md#accessibility) for full WAI-ARIA compliance details.
