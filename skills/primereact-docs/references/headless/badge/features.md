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

```tsx showLineNumbers {1,3,5}
import { useBadge } from '@primereact/headless/badge';

const { rootProps } = useBadge();

return <span {...rootProps}></span>;
```

`useBadge` returns spread-ready `rootProps` with data attributes for styling — see [Primitive](../../primitive/badge/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` for the root badge element
- Stateless hook — no internal state management, all visual logic handled via CSS
- Compatible with any HTML element or custom component via prop spreading

## Behavior

### Inline Badge

Render the badge inline alongside text or buttons.

```tsx
const { rootProps } = useBadge();

<button>
    Messages
    <span {...rootProps}>8</span>
</button>;
```

### Overlay Badge

Position the badge over another element using CSS positioning.

```tsx
const { rootProps } = useBadge();

<div style={{ position: 'relative', display: 'inline-flex' }}>
    <BellIcon />
    <span {...rootProps} style={{ position: 'absolute', top: '-0.5rem', right: '-0.5rem' }}>
        3
    </span>
</div>;
```

### Dot Badge

Render an empty badge to display a status dot indicator.

```tsx
const { rootProps } = useBadge();

<span {...rootProps} />;
```

### Custom Styling with Data Attributes

The prop object includes `data-scope="badge"` and `data-part="root"` for styling.

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

> **API/props table for `useBadge` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Badge Primitive](../../primitive/badge/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
