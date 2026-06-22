# useSplitter

Hook that manages resizable panel layout with keyboard navigation and pointer-based resizing.

```tsx
'use client';
import { useSplitter } from '@primereact/headless/splitter';

export default function BasicDemo() {
    const { rootProps, getPanelProps, getGutterProps, thumbProps } = useSplitter({
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
                <div {...thumbProps} className="w-full h-[1.25rem]" />
            </div>
            <div {...getPanelProps(1)} className="flex items-center justify-center min-w-0 overflow-hidden text-surface-700 dark:text-surface-100">
                Panel 2
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-6,9-12,14}
import { useSplitter } from '@primereact/headless/splitter';

const { rootProps, getPanelProps, getGutterProps, thumbProps } = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    defaultSizes: [30, 70]
});

return (
    <div {...rootProps} style={{ display: 'flex' }}>
        <div {...getPanelProps(0)} />
        <div {...getGutterProps(0)}>
            <div {...thumbProps} />
        </div>
        <div {...getPanelProps(1)} />
    </div>
);
```

`useSplitter` manages panel sizing, drag-to-resize, keyboard resizing, and collapse behavior — see [Primitive](../../primitive/splitter/features.md) for a component-based API.

## Features

- `getPanelProps(index)` returns spread-ready props with flex sizing and data attributes for each panel
- `getGutterProps(index)` returns spread-ready props with ARIA separator role, keyboard handlers, and pointer event bindings
- `panels` config defines panel constraints (`minSize`, `maxSize`, `collapsible`, `collapsedSize`) declaratively
- `rootProps` and `thumbProps` provide pre-built data attributes for the container and drag handle
- `state.resizing` indicates whether a resize operation is in progress

## Behavior

### Panel Configuration

Define panel constraints via the `panels` option. Each entry supports `minSize`, `maxSize`, `collapsible`, and `collapsedSize`.

```tsx
const { rootProps, getPanelProps, getGutterProps, thumbProps } = useSplitter({
    panels: [{ minSize: 10, maxSize: 80 }, { minSize: 10 }],
    defaultSizes: [30, 70]
});
```

### Default Sizes

Set `defaultSizes` for uncontrolled initial panel proportions. Values are percentages that should sum to 100.

```tsx
const splitter = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    defaultSizes: [25, 75]
});
```

### Controlled

Pass `sizes` with `onResize` or `onResizeEnd` for controlled usage.

```tsx
const [sizes, setSizes] = React.useState([50, 50]);

const splitter = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    sizes,
    onResizeEnd: (e) => setSizes(e.sizes)
});
```

### Orientation

Set `orientation` to `'vertical'` for a top-to-bottom layout. Defaults to `'horizontal'`.

```tsx
const splitter = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    orientation: 'vertical'
});
```

### Keyboard Step

Set `step` to control how many percentage points the gutter moves per arrow key press. Defaults to `5`.

```tsx
const splitter = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    step: 2
});
```

### Collapsible Panels

Set `collapsible: true` on a panel config and optionally `collapsedSize` to enable collapse when dragged below `minSize`.

```tsx
const splitter = useSplitter({
    panels: [{ minSize: 15, collapsible: true, collapsedSize: 5 }, { minSize: 10 }],
    defaultSizes: [30, 70]
});
```

### Disabled

Set `disabled` on the hook to prevent all resize interactions, or pass `disabled` per gutter via `getGutterProps`.

```tsx
const splitter = useSplitter({
    panels: [{ minSize: 10 }, { minSize: 10 }],
    disabled: true
});

// or per gutter
const gutterProps = getGutterProps(0, { disabled: true });
```

### Custom Styling with Data Attributes

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

> **API/props table for `useSplitter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Splitter Primitive](../../primitive/splitter/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
