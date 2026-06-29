# useToolbar

Headless hook for building toolbar containers with custom markup.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Search } from '@primeicons/react/search';
import { Upload } from '@primeicons/react/upload';
import { useToolbar } from '@primereact/headless/toolbar';

export default function BasicDemo() {
    const { rootProps } = useToolbar();

    return (
        <div
            {...rootProps}
            role="toolbar"
            className="flex items-center justify-between gap-2 p-2 border border-surface-200 dark:border-surface-700 rounded-lg"
        >
            <div className="flex items-center gap-1">
                <button className="p-2 rounded cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800 transition">
                    <Plus className="w-4 h-4" />
                </button>
                <button className="p-2 rounded cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800 transition">
                    <Upload className="w-4 h-4" />
                </button>
            </div>
            <div>
                <button className="p-2 rounded cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800 transition">
                    <Search className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useToolbar } from '@primereact/headless/toolbar';
```

```tsx
const { rootProps } = useToolbar();

<div {...rootProps} role="toolbar">
    ...
</div>;
```

`useToolbar` returns spread-ready `rootProps` with data attributes, see [Primitive](../../primitive/components/toolbar.md) for a component-based API.

## Features

- Spread-ready `rootProps` for the root container element
- Stateless hook, no internal state or side effects
- Full freedom over content layout (start, center, end regions)

## Behavior

### Layout Regions

Compose start, center, and end sections using native HTML elements. There are no structural constraints, arrange content in any order using flex or grid layout.

```tsx
const { rootProps } = useToolbar();

<div {...rootProps} role="toolbar">
    <div>Left actions</div>
    <div>Center content</div>
    <div>Right actions</div>
</div>;
```

### Custom Styling with Data Attributes

```css
[data-scope='toolbar'][data-part='root'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
}
```

## API

### useToolbar

> **API/props table for `useToolbar` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Arrow keys navigate items, Home/End jump to first/last, and standard focus management applies. See [Primitive](../../primitive/components/toolbar.md#accessibility) for full WAI-ARIA compliance details.
