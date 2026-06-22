# useOrderList

A headless hook that manages list ordering with selection-based controls and optional drag-and-drop support.

```tsx
'use client';
import { useOrderList } from '@primereact/headless/orderlist';
import type { useOrderListReorderEvent } from '@primereact/types/shared/orderlist';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

type City = (typeof cities)[0];

export default function BasicDemo() {
    const [items, setItems] = useState(cities);
    const [selection, setSelection] = useState<City[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        onReorder: (e: useOrderListReorderEvent) => setItems(e.value as typeof cities)
    });

    const toggleSelection = (item: City) => {
        setSelection((prev) => (prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]));
    };

    const btnClassName =
        'px-2 py-1 rounded bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-sm disabled:opacity-50';
    const hasSelection = selection.length > 0;

    return (
        <div className="flex justify-center">
            <div className="flex gap-2 w-full max-w-xs">
                <div {...orderList.controlsProps} className="flex flex-col gap-1">
                    <button
                        onClick={orderList.firstProps.onClick as React.MouseEventHandler}
                        disabled={!hasSelection || undefined}
                        className={btnClassName}
                    >
                        ⇈
                    </button>
                    <button
                        onClick={orderList.prevProps.onClick as React.MouseEventHandler}
                        disabled={!hasSelection || undefined}
                        className={btnClassName}
                    >
                        ↑
                    </button>
                    <button
                        onClick={orderList.nextProps.onClick as React.MouseEventHandler}
                        disabled={!hasSelection || undefined}
                        className={btnClassName}
                    >
                        ↓
                    </button>
                    <button
                        onClick={orderList.lastProps.onClick as React.MouseEventHandler}
                        disabled={!hasSelection || undefined}
                        className={btnClassName}
                    >
                        ⇊
                    </button>
                </div>
                <div {...orderList.listProps} className="flex-1 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                    {(orderList.state.value as typeof cities).map((item, i) => (
                        <div
                            key={item.code}
                            {...orderList.getOptionProps(item, i)}
                            onClick={() => toggleSelection(item)}
                            className={`px-3 py-2 cursor-pointer select-none text-sm border-b border-surface-100 dark:border-surface-800 last:border-b-0 ${selection.includes(item) ? 'bg-primary/10 text-primary' : 'hover:bg-surface-50 dark:hover:bg-surface-900'}`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-8,11-26}
import { useOrderList } from '@primereact/headless/orderlist';

const orderList = useOrderList({
    value: items,
    selection,
    draggable: true,
    onReorder: (e) => setItems(e.value)
});

return (
    <div {...orderList.rootProps}>
        <div {...orderList.controlsProps}>
            <button {...orderList.firstProps}>Top</button>
            <button {...orderList.prevProps}>Up</button>
            <button {...orderList.nextProps}>Down</button>
            <button {...orderList.lastProps}>Bottom</button>
        </div>
        <div {...orderList.listProps}>
            {orderList.state.value.map((item, i) => (
                <div key={i} {...orderList.getOptionProps(item, i)}>
                    {item.name}
                </div>
            ))}
        </div>
    </div>
);
```

`useOrderList` manages item ordering with move operations and drag-and-drop. Pair it with **Listbox** for built-in selection and keyboard navigation.

## Features

- Returns spread-ready prop objects (`rootProps`, `listProps`, `controlsProps`, `prevProps`, `nextProps`, `firstProps`, `lastProps`)
- Selection-based move operations: `moveUp`, `moveDown`, `moveTop`, `moveBottom`
- Built-in drag-and-drop with `draggable` prop
- Clone or empty placeholder modes during drag
- Per-option props via `getOptionProps`

## Behavior

### Basic Ordering

Pass `value` and `onReorder` to manage the list. Use `moveUp`, `moveDown`, `moveTop`, `moveBottom` with selection to reorder items.

```tsx
const [items, setItems] = React.useState(['A', 'B', 'C']);
const [selection, setSelection] = React.useState([]);

const orderList = useOrderList({
    value: items,
    selection,
    onReorder: (e) => setItems(e.value)
});
```

### Drag and Drop

Set `draggable` to enable drag-and-drop reordering.

```tsx
const orderList = useOrderList({
    value: items,
    draggable: true,
    onReorder: (e) => setItems(e.value)
});
```

### Placeholder

Set `placeholder` to `"clone"` to show a visual copy of the dragged item in its original position. Default is `"empty"` which preserves height only.

```tsx
const orderList = useOrderList({
    value: items,
    draggable: true,
    placeholder: 'clone',
    onReorder: (e) => setItems(e.value)
});
```

Style the placeholder with `[data-sortable-placeholder]` attribute.

### Disabled

Set `disabled` to prevent all interactions.

```tsx
const orderList = useOrderList({ value: items, disabled: true });
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope` and `data-part` attributes for CSS targeting.

```css
[data-scope='orderlist'][data-part='root'] {
    display: flex;
    gap: 1rem;
}

[data-scope='orderlist'][data-part='list'] {
    min-height: 200px;
}

[data-sortable-placeholder] {
    opacity: 0.4;
}
```

#### Option Attributes

| Attribute                   | Value                                                    |
| --------------------------- | -------------------------------------------------------- |
| `data-selected`             | Present when the item is selected                        |
| `data-sortable-item`        | Present on every sortable item                           |
| `data-sortable-container`   | Container id for the sortable group                      |
| `data-dragging`             | Present on the item being dragged                        |
| `data-dropping`             | Present briefly during the drop animation                |
| `data-sortable-placeholder` | Present on the placeholder clone left behind during drag |

## API

### useOrderList

> **API/props table for `useOrderList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)
