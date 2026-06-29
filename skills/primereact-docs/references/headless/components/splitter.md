# useSplitter

Hook that manages resizable panel layout with keyboard navigation and pointer-based resizing.

```tsx
'use client';
import { useSplitter } from '@primereact/headless/splitter';

export default function BasicDemo() {
    const { rootProps, getPanelProps, getGutterProps, handleProps } = useSplitter({
        panels: [{ minSize: 10 }, { minSize: 10 }],
        defaultSizes: [30, 70]
    });

    return (
        <div {...rootProps} className="flex h-60 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
            <div {...getPanelProps(0)} className="flex items-center justify-center min-w-0 overflow-hidden text-surface-700 dark:text-surface-100">
                Panel 1
            </div>
            <div
                {...getGutterProps(0)}
                className="flex items-center justify-center w-1 z-1 cursor-col-resize bg-surface-200 dark:bg-surface-700 focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-primary"
            >
                <div {...handleProps} className="w-full h-[1.25rem]" />
            </div>
            <div {...getPanelProps(1)} className="flex items-center justify-center min-w-0 overflow-hidden text-surface-700 dark:text-surface-100">
                Panel 2
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useSplitter } from '@primereact/headless/splitter';
```

```tsx
const { rootProps, getPanelProps, getGutterProps, handleProps } = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    defaultSizes: [30, 70]
});

<div {...rootProps} style={{ display: 'flex' }}>
    <div {...getPanelProps(0)} />
    <div {...getGutterProps(0)}>
        <div {...handleProps} />
    </div>
    <div {...getPanelProps(1)} />
</div>;
```

`useSplitter` manages panel sizing, drag-to-resize, keyboard resizing, and collapse behavior, see [Primitive](../../primitive/components/splitter.md) for a component-based API.

## Features

- **Declarative panel config**, pass `panels` with `minSize`, `maxSize`, `collapsible`, and `collapsedSize` per pane instead of wiring constraints yourself
- **Pointer and keyboard resizing**, `getGutterProps(index)` returns an ARIA separator with drag, arrow key, Home/End, and Enter handlers already attached
- **Horizontal or vertical orientation**, one flag switches axis, key mappings, and the data attributes you style against
- **Controlled or uncontrolled sizes**, feed `sizes` + `onResize`/`onResizeEnd` for external state or let the hook manage it from `defaultSizes`
- **Collapsible panes**, panels snap to `collapsedSize` when dragged below their minimum, no extra logic required
- **Resize-in-progress signal**, `state.resizing` plus `data-resizing` lets you switch cursors and disable selection during a drag

## Working with callbacks

### Controlled sizes

Feed `sizes` with `onResizeEnd` (fires after drag completes) or `onResize` (fires continuously) for external state.

```tsx
const [sizes, setSizes] = React.useState([50, 50]);

const splitter = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    sizes,
    onResizeEnd: (e) => setSizes(e.sizes)
});
```

### Persisting layout across reloads

Pair `onResizeEnd` with localStorage to restore the user's layout on next visit.

```tsx
const [sizes, setSizes] = React.useState(() => JSON.parse(localStorage.getItem('layout') ?? '[30,70]'));

useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    sizes,
    onResizeEnd: (e) => {
        setSizes(e.sizes);
        localStorage.setItem('layout', JSON.stringify(e.sizes));
    }
});
```

### Collapsible side panel

Mark a panel `collapsible` and give it a `collapsedSize` so dragging below `minSize` snaps it closed instead of getting stuck.

```tsx
const splitter = useSplitter({
    panels: [{ minSize: 15, collapsible: true, collapsedSize: 5 }, { minSize: 10 }],
    defaultSizes: [30, 70]
});
```

### Fine-grained keyboard resizing

Lower `step` when precise keyboard adjustments matter, the default of `5` moves the gutter 5% per arrow press.

```tsx
const splitter = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    step: 1
});
```

### Vertical orientation

`orientation: 'vertical'` swaps the axis and rebinds arrow keys automatically.

```tsx
const splitter = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    orientation: 'vertical'
});
```

## Styling with data attributes

The root exposes `data-orientation`, `data-resizing`, and `data-disabled` so cursor and selection rules can stay in CSS.

```css
[data-orientation='horizontal'][data-resizing] {
    cursor: col-resize;
    user-select: none;
}
[data-orientation='vertical'][data-resizing] {
    cursor: row-resize;
    user-select: none;
}
[data-disabled] {
    pointer-events: none;
    opacity: 0.4;
}
```

## API

### useSplitter

> **`useSplitter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/splitter or the installed `@primereact/types`.

## Accessibility

Arrow keys resize the panes, Home/End collapse to min/max, and Enter toggles between preset sizes. See [Primitive](../../primitive/components/splitter.md#accessibility) for full WAI-ARIA compliance details.
