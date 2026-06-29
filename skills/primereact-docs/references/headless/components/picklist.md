# usePickList

A headless hook that manages two lists with transfer, reorder, and optional drag-and-drop between them.

```tsx
'use client';
import { usePickList, type UsePickListReorderEvent, type UsePickListSelectionChangeEvent } from '@primereact/headless/picklist';
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
    const [source, setSource] = useState(cities);
    const [target, setTarget] = useState<City[]>([]);
    const [selection, setSelection] = useState<City[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        onChange: (e: UsePickListReorderEvent) => {
            setSource(e.source as typeof cities);
            setTarget(e.target as typeof cities);
        },
        onSelectionChange: (e: UsePickListSelectionChangeEvent) => setSelection(e.value as City[])
    });

    const toggleSelection = (item: City) => {
        setSelection((prev) => (prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]));
    };

    const listClassName = 'flex-1 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden min-h-48';
    const itemClassName = (item: City) =>
        `px-3 py-2 cursor-pointer select-none text-sm border-b border-surface-100 dark:border-surface-800 last:border-b-0 ${selection.includes(item) ? 'bg-primary/10 text-primary' : 'hover:bg-surface-50 dark:hover:bg-surface-900'}`;
    const btnClassName =
        'px-2 py-1 rounded bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-sm disabled:opacity-50';

    const hasSourceSelection = selection.some((s) => source.includes(s));
    const hasTargetSelection = selection.some((s) => target.includes(s));

    return (
        <div className="flex justify-center">
            <div {...pickList.rootProps} className="flex gap-3 items-center w-full max-w-lg">
                <div {...pickList.sourceListProps} className={listClassName}>
                    {(pickList.state.source as typeof cities).map((item, i) => (
                        <div
                            key={item.code}
                            {...pickList.getOptionProps(item, i, 'source')}
                            onClick={() => toggleSelection(item)}
                            className={itemClassName(item)}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-1">
                    <button
                        onClick={pickList.moveToTargetProps.onClick as React.MouseEventHandler}
                        disabled={!hasSourceSelection || undefined}
                        className={btnClassName}
                    >
                        →
                    </button>
                    <button
                        onClick={pickList.moveAllToTargetProps.onClick as React.MouseEventHandler}
                        disabled={source.length === 0 || undefined}
                        className={btnClassName}
                    >
                        ⇉
                    </button>
                    <button
                        onClick={pickList.moveToSourceProps.onClick as React.MouseEventHandler}
                        disabled={!hasTargetSelection || undefined}
                        className={btnClassName}
                    >
                        ←
                    </button>
                    <button
                        onClick={pickList.moveAllToSourceProps.onClick as React.MouseEventHandler}
                        disabled={target.length === 0 || undefined}
                        className={btnClassName}
                    >
                        ⇇
                    </button>
                </div>
                <div {...pickList.targetListProps} className={listClassName}>
                    {(pickList.state.target as typeof cities).map((item, i) => (
                        <div
                            key={item.code}
                            {...pickList.getOptionProps(item, i, 'target')}
                            onClick={() => toggleSelection(item)}
                            className={itemClassName(item)}
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
import { usePickList } from '@primereact/headless/picklist';
```

```tsx
const pickList = usePickList({
    source,
    target,
    selection,
    draggable: true,
    onChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    }
});

<div {...pickList.rootProps}>
    <div {...pickList.sourceListProps}>
        {pickList.state.source.map((item, i) => (
            <div key={i} {...pickList.getOptionProps(item, i, 'source')}>
                {item.name}
            </div>
        ))}
    </div>
    <div>
        <button {...pickList.moveToTargetProps}>→</button>
        <button {...pickList.moveAllToTargetProps}>⇉</button>
        <button {...pickList.moveToSourceProps}>←</button>
        <button {...pickList.moveAllToSourceProps}>⇇</button>
    </div>
    <div {...pickList.targetListProps}>
        {pickList.state.target.map((item, i) => (
            <div key={i} {...pickList.getOptionProps(item, i, 'target')}>
                {item.name}
            </div>
        ))}
    </div>
</div>;
```

`usePickList` manages two lists with transfer and reorder operations. Pair it with **Listbox** for built-in selection and keyboard navigation.

## Features

- **Two-list state**, keeps `source` and `target` arrays in sync and emits a single `onChange` for any mutation
- **Transfer operations**, `moveToTarget`, `moveToSource`, `moveAllToTarget`, `moveAllToSource` with pre-wired button props
- **Per-side reorder controls**, independent prev/next/first/last props for each list plus matching imperative methods
- **Drag-and-drop**, optional pointer reorder within a list and transfer across lists with scope validation
- **Side-aware option props**, `getOptionProps(item, index, 'source' | 'target')` returns the attributes each row needs

## Working with callbacks

### onChange, keep both arrays in state

Transfer and reorder both funnel through `onChange`. Apply `e.source` and `e.target` back to state in one step.

```tsx
const [source, setSource] = React.useState(initialSource);
const [target, setTarget] = React.useState([]);

const pickList = usePickList({
    source,
    target,
    onChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    }
});
```

### Tracking selection per side

Selection is shared across both lists. Mirror it externally so transfer buttons know which items to move.

```tsx
const [selection, setSelection] = React.useState([]);

const pickList = usePickList({
    source,
    target,
    selection,
    onSelectionChange: (e) => setSelection(e.value),
    onChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    }
});
```

### Cross-list drag with clone placeholder

Enable `draggable` to allow reorder within a list and transfer across lists in one gesture. Switch the placeholder to `clone` when users benefit from seeing the original position.

```tsx
const pickList = usePickList({
    source,
    target,
    draggable: true,
    placeholder: 'clone',
    onChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    }
});
```

### Driving transfers from custom UI

Call the imperative methods directly when you want to trigger moves from keyboard shortcuts or a menu.

```tsx
const pickList = usePickList({ source, target, selection, onChange });

useHotkey('alt+right', () => pickList.moveToTarget());
useHotkey('alt+shift+right', () => pickList.moveAllToTarget());
```

## Styling with data attributes

Every prop object includes `data-scope` and `data-part` attributes for CSS targeting.

```css
[data-scope='picklist'][data-part='root'] {
    display: flex;
    gap: 1rem;
}

[data-scope='picklist'][data-part='source-list'],
[data-scope='picklist'][data-part='target-list'] {
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

### usePickList

> **API/props table for `usePickList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Arrow keys navigate within each list, Tab moves between lists, and Enter moves selection across lists. See [Primitive](https://primereact.dev/docs/primitive/components/picklist#accessibility) for full WAI-ARIA compliance details.
