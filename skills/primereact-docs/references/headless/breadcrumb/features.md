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

```tsx showLineNumbers {1,3,6,9}
import { useBreadcrumb } from '@primereact/headless/breadcrumb';

const { rootProps, separatorProps, ellipsisProps } = useBreadcrumb();

return (
    <nav {...rootProps}>
        <ol>
            <li></li>
            <li {...separatorProps}></li>
        </ol>
    </nav>
);
```

`useBreadcrumb` provides semantic ARIA attributes for navigation, separators, and ellipsis elements — see [Primitive](../../primitive/breadcrumb/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` with `aria-label="Breadcrumb"` for the nav element
- Provides `separatorProps` with `role="presentation"` and `aria-hidden` for visual-only separators
- Provides `ellipsisProps` with `role="presentation"` and `aria-hidden` for collapsed items

## Behavior

### Separator

Spread `separatorProps` on separator elements to mark them as presentational. Screen readers skip these elements.

```tsx
const { separatorProps } = useBreadcrumb();

<li {...separatorProps}>
    <ChevronRight />
</li>;
```

### Ellipsis

Spread `ellipsisProps` on collapsed breadcrumb indicators. Like separators, these are hidden from the accessibility tree.

```tsx
const { ellipsisProps } = useBreadcrumb();

<span {...ellipsisProps}>...</span>;
```

### Current Page

Mark the current page with `aria-current="page"` on the last item. This is not provided by the hook — apply it directly.

```tsx
<span aria-current="page">Laptops</span>
```

### Custom Styling with Data Attributes

The prop objects include `data-scope="breadcrumb"` and `data-part` for styling.

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

> **API/props table for `useBreadcrumb` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Breadcrumb Primitive](../../primitive/breadcrumb/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
