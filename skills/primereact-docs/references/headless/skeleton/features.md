# useSkeleton

Hook that provides data attributes for building custom placeholder loading elements.

```tsx
'use client';
import { useSkeleton } from '@primereact/headless/skeleton';

export default function BasicDemo() {
    const { rootProps } = useSkeleton();

    return (
        <div className="flex gap-4 max-w-xs mx-auto">
            <div {...rootProps} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse shrink-0" aria-hidden="true" />
            <div className="flex-1 flex flex-col gap-2 py-1">
                <div {...rootProps} className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700 animate-pulse" aria-hidden="true" />
                <div {...rootProps} className="h-3 w-3/4 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" aria-hidden="true" />
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,5}
import { useSkeleton } from '@primereact/headless/skeleton';

const { rootProps } = useSkeleton();

return <div {...rootProps} aria-hidden="true" />;
```

`useSkeleton` returns spread-ready `rootProps` with data attributes — see [Primitive](../../primitive/skeleton/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` with `data-scope` and `data-part` attributes
- Zero-state hook — no internal state or side effects
- Full control over shape, size, and animation via your own CSS

## Behavior

### Shapes and Sizes

Apply shape and dimension styles directly via CSS or utility classes. The hook does not manage visual properties.

```tsx
const { rootProps } = useSkeleton();

{
    /* Circle */
}
<div {...rootProps} className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" aria-hidden="true" />;

{
    /* Rectangle */
}
<div {...rootProps} className="w-full h-4 rounded bg-gray-200 animate-pulse" aria-hidden="true" />;
```

### Animation

Implement animation using CSS classes. The hook does not handle animation state.

```tsx
<div {...rootProps} className="bg-gray-200 animate-pulse" aria-hidden="true" />
```

### Custom Styling with Data Attributes

The root prop object includes `data-scope="skeleton"` and `data-part="root"` for targeted styling.

```css
[data-scope='skeleton'][data-part='root'] {
    background-color: #e5e7eb;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
```

## API

### useSkeleton

> **API/props table for `useSkeleton` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Skeleton Primitive](../../primitive/skeleton/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
