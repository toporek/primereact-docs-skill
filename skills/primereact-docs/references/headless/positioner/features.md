# usePositioner

Hook that positions a floating element relative to an anchor with automatic flip, shift, and arrow support.

```tsx
'use client';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import * as React from 'react';
import { createPortal } from 'react-dom';

export default function BasicDemo() {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [contentEl, setContentEl] = React.useState<HTMLDivElement | null>(null);

    const portal = usePortal();

    const positioner = usePositioner({
        anchor: anchorEl ?? undefined,
        content: contentEl ?? undefined,
        side: 'bottom',
        sideOffset: 8,
        flip: true,
        shift: true
    });

    return (
        <>
            <div className="flex justify-center">
                <button
                    ref={setAnchorEl}
                    onClick={() => setOpen((prev) => !prev)}
                    className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium cursor-pointer transition"
                >
                    {open ? 'Hide' : 'Show'} Tooltip
                </button>
            </div>
            {portal.state.mounted &&
                open &&
                createPortal(
                    <div
                        ref={setContentEl}
                        className="bg-gray-900 text-white text-xs rounded-md px-3 py-1.5 shadow-lg"
                        data-side={positioner.state.actualSide}
                    >
                        Positioned on {positioner.state.actualSide ?? 'bottom'}
                    </div>,
                    document.body
                )}
        </>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-4,6-11,16-17}
import { usePositioner } from '@primereact/headless/positioner';

const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
const [contentEl, setContentEl] = React.useState<HTMLDivElement | null>(null);

const positioner = usePositioner({
    anchor: anchorEl,
    content: contentEl,
    side: 'bottom',
    sideOffset: 8,
    flip: true
});

return (
    <>
        <button ref={setAnchorEl}></button>
        <div ref={setContentEl}></div>
    </>
);
```

`usePositioner` computes placement coordinates for a floating element relative to an anchor, with automatic overflow handling — used internally by `Popover.Positioner`, `Select.Positioner`, and similar sub-components.

## Features

- Dual-mode positioning: native CSS Anchor Positioning API with automatic JavaScript fallback for older browsers
- `side` and `align` control preferred placement; `flip` and `shift` handle viewport overflow
- `state.actualSide` and `state.actualAlign` reflect the computed placement after flip/shift
- Arrow-aware offset calculation: `sideOffset` auto-derives from arrow element size when not explicitly set
- CSS custom properties for arrow positioning (`--placer-arrow-x`, `--placer-arrow-y`, `--placer-arrow-left`, `--placer-arrow-top`)
- `updatePlacement()` for imperative recalculation
- Automatic z-index management via `autoZIndex`
- RAF-throttled scroll/resize listeners with ResizeObserver for both anchor and content

## Behavior

### Side and Align

Set `side` to control which edge the content appears on. Set `align` to control cross-axis alignment.

```tsx
usePositioner({ anchor, content, side: 'top', align: 'start' });
```

Supported values: `side` accepts `'top'`, `'right'`, `'bottom'`, `'left'`. `align` accepts `'start'`, `'center'`, `'end'`.

### Flip

Set `flip` to automatically move content to the opposite side when there is insufficient space. Enabled by default.

```tsx
usePositioner({ anchor, content, side: 'top', flip: true });
```

### Shift

Set `shift` to slide content along the cross-axis to stay within the viewport boundary. Enabled by default.

```tsx
usePositioner({ anchor, content, shift: true });
```

### Side Offset and Align Offset

Set `sideOffset` to add distance between the anchor and content. Set `alignOffset` to shift along the cross-axis.

```tsx
usePositioner({ anchor, content, sideOffset: 12, alignOffset: 4 });
```

When `sideOffset` is not set and an `arrow` element is provided, the offset is automatically calculated from the arrow size.

### Arrow Positioning

Pass an `arrow` element to enable arrow-aware positioning. The hook sets CSS custom properties on the content element for arrow placement.

```tsx
usePositioner({ anchor, content, arrow: arrowEl });
```

Available CSS custom properties on the content element:

```css
var(--placer-arrow-x)      /* center X of arrow */
var(--placer-arrow-y)      /* center Y of arrow */
var(--placer-arrow-left)   /* left offset of arrow */
var(--placer-arrow-top)    /* top offset of arrow */
var(--transform-origin)    /* transform origin pointing to anchor */
```

### Hide When Detached

Set `hideWhenDetached` to hide the content when the anchor scrolls out of the boundary.

```tsx
usePositioner({ anchor, content, hideWhenDetached: true });
```

### Strategy

Set `strategy` to `'absolute'` for absolute positioning relative to the offset parent. Defaults to `'fixed'`.

```tsx
usePositioner({ anchor, content, strategy: 'absolute' });
```

### Boundary

Pass a `boundary` element to constrain placement within a specific container (JavaScript fallback mode only).

```tsx
usePositioner({ anchor, content, boundary: containerEl });
```

### Placement Change Callback

Use `onPlacementChange` to react when the actual placement changes due to flip or shift.

```tsx
usePositioner({
    anchor,
    content,
    onPlacementChange: ({ side, align }) => console.log(side, align)
});
```

### Imperative Update

Call `updatePlacement()` to force a recalculation when content dimensions change dynamically.

```tsx
const positioner = usePositioner({ anchor, content });

positioner.updatePlacement();
```

### Custom Styling with Data Attributes

The hook sets `data-side` and `data-align` on the content (and arrow) element for placement-aware CSS.

```css
[data-side='bottom'] {
    margin-top: 4px;
}
[data-side='top'] {
    margin-bottom: 4px;
}
[data-side='bottom'][data-align='start'] {
    /* bottom-start placement */
}
```

## API

### usePositioner

> **API/props table for `usePositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

`usePositioner` is a structural positioning utility. It does not introduce ARIA roles or keyboard interactions. Accessibility concerns are handled by the consumer component (e.g., [Popover](../../primitive/popover/features.md#accessibility), Tooltip, Select).
