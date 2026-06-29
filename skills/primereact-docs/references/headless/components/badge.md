# useBadge

Hook that provides data attributes and prop spreading for badge elements.

```tsx
'use client';
import { Bell } from '@primeicons/react/bell';
import { useBadge } from '@primereact/headless/badge';

export default function BasicDemo() {
    const standalone1 = useBadge();
    const standalone2 = useBadge();
    const standalone3 = useBadge();
    const overlay = useBadge();
    const dotBadge = useBadge();

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center gap-3">
                <span
                    {...standalone1.rootProps}
                    className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold rounded-md bg-red-500 text-white"
                >
                    5
                </span>
                <span
                    {...standalone2.rootProps}
                    className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold rounded-md bg-green-500 text-white"
                >
                    12
                </span>
                <span
                    {...standalone3.rootProps}
                    className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold rounded-md bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300"
                >
                    8
                </span>
            </div>
            <div className="flex items-center gap-3">
                <div className="relative inline-flex">
                    <Bell className="text-surface-700 dark:text-surface-200 w-6! h-6!" />
                    <span
                        {...overlay.rootProps}
                        className="absolute -top-2 -right-2 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs font-bold text-white bg-red-500 rounded-md"
                    >
                        3
                    </span>
                </div>
                <div className="relative inline-flex">
                    <Bell className="text-surface-700 dark:text-surface-200 w-6! h-6!" />
                    <span {...dotBadge.rootProps} className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useBadge } from '@primereact/headless/badge';
```

```tsx
const { rootProps } = useBadge();

return <span {...rootProps}></span>;
```

`useBadge` returns spread-ready `rootProps` with scoped data attributes so you can render inline counts, overlays, and status dots with your own CSS. See [Primitive](../../primitive/components/badge.md) for a component-based API.

## Features

- **Spread-ready root props**, a single object you can drop onto any element or custom component
- **Stateless**, no internal state or effects; all visual behavior lives in your CSS
- **Styling hooks**, `data-scope="badge"` and `data-part="root"` selectors let you branch styles on context
- **Markup-agnostic**, works with `span`, `div`, or any component that forwards standard props

## Working with callbacks

### Inline badge next to content

Render the badge alongside a label to show counts directly inside a button or link.

```tsx
const { rootProps } = useBadge();

<button>
    Messages
    <span {...rootProps}>8</span>
</button>;
```

### Overlay badge on an icon

Combine positioning styles with `rootProps` to place the badge on top of another element.

```tsx
const { rootProps } = useBadge();

<div style={{ position: 'relative', display: 'inline-flex' }}>
    <BellIcon />
    <span {...rootProps} style={{ position: 'absolute', top: '-0.5rem', right: '-0.5rem' }}>
        3
    </span>
</div>;
```

### Dot indicator

Leave the badge empty and rely on the `:empty` CSS selector to render a status dot.

```tsx
const { rootProps } = useBadge();

<span {...rootProps} />;
```

## Styling with data attributes

The prop object includes `data-scope="badge"` and `data-part="root"` for styling. Use the `:empty` pseudo-class to distinguish dot badges from count badges without extra props.

```css
[data-scope='badge'][data-part='root'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.25rem;
    height: 1.25rem;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 9999px;
}

[data-scope='badge'][data-part='root']:empty {
    min-width: 0.5rem;
    height: 0.5rem;
}
```

## API

### useBadge

> **`useBadge` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/badge or the installed `@primereact/types`.

## Accessibility

Static visual element; screen readers receive the label via aria-label when provided. See [Primitive](../../primitive/components/badge.md#accessibility) for full WAI-ARIA compliance details.
