# usePickList

A headless hook that manages two lists with transfer, reorder, and optional drag-and-drop between them.

```tsx
'use client';
import { usePickList } from '@primereact/headless/picklist';
import type { usePickListReorderEvent, usePickListSelectionChangeEvent } from '@primereact/types/shared/picklist';
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
        onChange: (e: usePickListReorderEvent) => {
            setSource(e.source as typeof cities);
            setTarget(e.target as typeof cities);
        },
        onSelectionChange: (e: usePickListSelectionChangeEvent) => setSelection(e.value as City[])
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

```tsx showLineNumbers {1,3-11,14-34}
import { usePickList } from '@primereact/headless/picklist';

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

return (
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
    </div>
);
```

`usePickList` manages two lists with transfer and reorder operations. Pair it with **Listbox** for built-in selection and keyboard navigation.

## Features

- Returns spread-ready prop objects for both source and target lists
- Transfer operations: `moveToTarget`, `moveToSource`, `moveAllToTarget`, `moveAllToSource`
- Per-side reorder controls: `sourcePrevProps`, `sourceNextProps`, `sourceFirstProps`, `sourceLastProps` (same for target)
- Built-in drag-and-drop with `draggable` prop (within and across lists)
- Clone or empty placeholder modes during drag
- Per-option props via `getOptionProps` with side awareness

## Behavior

### Basic Transfer

Pass `source`, `target`, and `onChange` to manage two lists. Use transfer methods to move selected items between lists.

```tsx
const [source, setSource] = React.useState(['A', 'B', 'C']);
const [target, setTarget] = React.useState([]);
const [selection, setSelection] = React.useState([]);

const pickList = usePickList({
    source,
    target,
    selection,
    onChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    },
    onSelectionChange: (e) => setSelection(e.value)
});
```

### Drag and Drop

Set `draggable` to enable drag-and-drop reordering within lists and transferring across lists.

```tsx
const pickList = usePickList({
    source,
    target,
    draggable: true,
    onChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    }
});
```

### Placeholder

Set `placeholder` to `"clone"` to show a visual copy of the dragged item in its original position. Default is `"empty"` which preserves height only.

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

Style the placeholder with `[data-sortable-placeholder]` attribute.

### Disabled

Set `disabled` to prevent all interactions.

```tsx
const pickList = usePickList({ source, target, disabled: true });
```

### Custom Styling with Data Attributes

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
