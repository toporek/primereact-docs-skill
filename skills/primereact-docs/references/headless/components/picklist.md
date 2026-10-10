# usePickList

A headless hook that manages two lists with transfer, reorder, and optional drag-and-drop between them.

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
    onValueChange: (e) => {
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

- **Two-list state**, keeps `source` and `target` arrays in sync and emits a single `onValueChange` for any mutation
- **Transfer operations**, `moveToTarget`, `moveToSource`, `moveAllToTarget`, `moveAllToSource` with pre-wired button props
- **Per-side reorder controls**, independent prev/next/first/last props for each list plus matching imperative methods
- **Drag-and-drop**, optional pointer reorder within a list and transfer across lists with scope validation
- **Side-aware option props**, `getOptionProps(item, index, 'source' | 'target')` returns the attributes each row needs

## Working with callbacks

### onValueChange, keep both arrays in state

Transfer and reorder both funnel through `onValueChange`. Apply `e.source` and `e.target` back to state in one step.

```tsx
const [source, setSource] = React.useState(initialSource);
const [target, setTarget] = React.useState([]);

const pickList = usePickList({
    source,
    target,
    onValueChange: (e) => {
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
    onValueChange: (e) => {
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
    onValueChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    }
});
```

### Driving transfers from custom UI

Call the imperative methods directly when you want to trigger moves from keyboard shortcuts or a menu.

```tsx
const pickList = usePickList({ source, target, selection, onValueChange });

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

> **`usePickList` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/picklist or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate within each list, Tab moves between lists, and Enter moves selection across lists. See [Primitive](https://primereact.dev/docs/primitive/components/picklist#accessibility) for full WAI-ARIA compliance details.
