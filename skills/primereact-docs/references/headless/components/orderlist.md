# useOrderList

A headless hook that manages list ordering with selection-based controls and optional drag-and-drop support.

```tsx
'use client';
import { useOrderList, type UseOrderListReorderEvent } from '@primereact/headless/orderlist';
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
        onReorder: (e: UseOrderListReorderEvent) => setItems(e.value as typeof cities)
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

```tsx
import { useOrderList } from '@primereact/headless/orderlist';
```

```tsx
const orderList = useOrderList({
    value: items,
    selection,
    draggable: true,
    onReorder: (e) => setItems(e.value)
});

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
```

`useOrderList` manages item ordering through move operations and drag-and-drop. Pair it with **Listbox** for built-in selection and keyboard navigation.

## Features

- **Selection-driven reorder**, move the current selection with `moveUp`, `moveDown`, `moveTop`, `moveBottom` or their pre-wired button props
- **Drag-and-drop**, optional pointer-based reordering with configurable placeholder and cross-container restrictions
- **Placeholder modes**, choose between an `empty` height-preserving gap or a full `clone` of the dragged item
- **Per-option props**, `getOptionProps(item, index)` returns the ARIA, sortable, and data attributes each row needs
- **Imperative controls**, call move methods programmatically for custom keyboard or gesture bindings

## Working with callbacks

### onReorder, persist the new order

`onReorder` fires whenever the list changes. In controlled usage, feed `e.value` back into your state.

```tsx
const [items, setItems] = React.useState(['A', 'B', 'C']);

const orderList = useOrderList({
    value: items,
    onReorder: (e) => setItems(e.value)
});
```

### Selection-based move buttons

Track selection externally so the move controls know what to operate on. The button props already call the matching move operation.

```tsx
const [selection, setSelection] = React.useState([]);

const orderList = useOrderList({
    value: items,
    selection,
    onSelectionChange: (e) => setSelection(e.value),
    onReorder: (e) => setItems(e.value)
});
```

### Enabling drag-and-drop with a clone placeholder

Switch to `clone` when users need a visual anchor in the original position while dragging.

```tsx
const orderList = useOrderList({
    value: items,
    draggable: true,
    placeholder: 'clone',
    onReorder: (e) => setItems(e.value)
});
```

Target the ghost with the `[data-sortable-placeholder]` attribute.

### Driving moves programmatically

Use the returned imperative methods to bind moves to custom shortcuts or toolbars.

```tsx
const orderList = useOrderList({ value: items, selection, onReorder: (e) => setItems(e.value) });

useHotkey('alt+up', () => orderList.moveUp());
useHotkey('alt+shift+up', () => orderList.moveTop());
```

## Styling with data attributes

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

> **`useOrderList` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/orderlist or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate items, Shift+Arrow moves the selected item up or down, and Space toggles selection. See [Primitive](https://primereact.dev/docs/primitive/components/orderlist#accessibility) for full WAI-ARIA compliance details.
