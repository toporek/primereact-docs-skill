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

```tsx
import { usePositioner } from '@primereact/headless/positioner';
```

```tsx
const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
const [contentEl, setContentEl] = React.useState<HTMLDivElement | null>(null);

const positioner = usePositioner({
    anchor: anchorEl,
    content: contentEl,
    side: 'bottom',
    sideOffset: 8,
    flip: true
});

<>
    <button ref={setAnchorEl}></button>
    <div ref={setContentEl}></div>
</>;
```

`usePositioner` computes placement for a floating element relative to an anchor, handling overflow with flip/shift and exposing the computed placement for styling. It powers `Popover.Positioner`, `Select.Positioner`, and similar primitives.

## Features

- **Dual-mode positioning**, uses the native CSS Anchor Positioning API when available and falls back to JavaScript otherwise
- **Overflow handling**, `flip` moves the content to the opposite side and `shift` slides it along the cross-axis to stay within the viewport
- **Placement reporting**, `state.actualSide` / `state.actualAlign` reflect the final placement after flip and shift
- **Arrow-aware offsets**, passing an arrow element auto-derives `sideOffset` from its size and injects CSS variables for positioning
- **Responsive updates**, RAF-throttled scroll/resize listeners plus ResizeObserver on both anchor and content
- **Imperative recalculation**, `updatePlacement()` forces a new layout when content dimensions change outside the observed events

## Working with callbacks

### Pick preferred placement

Use `side` and `align` to express the preferred edge and cross-axis alignment.

```tsx
usePositioner({ anchor, content, side: 'top', align: 'start' });
```

`side` accepts `'top'`, `'right'`, `'bottom'`, or `'left'`. `align` accepts `'start'`, `'center'`, or `'end'`.

### Attach an arrow

Pass an arrow element and the hook exposes CSS variables for positioning the arrow tip, derived from the final placement.

```tsx
usePositioner({ anchor, content, arrow: arrowEl });
```

```css
var(--px-placer-arrow-x)      /* center X of arrow */
var(--px-placer-arrow-y)      /* center Y of arrow */
var(--px-placer-arrow-left)   /* left offset of arrow */
var(--px-placer-arrow-top)    /* top offset of arrow */
var(--px-transform-origin)    /* transform origin pointing to anchor */
```

### React to placement changes

Register `onPlacementChange` to run logic when `flip` or `shift` moves the content, for example, swapping an arrow direction or updating an aria-live message.

```tsx
usePositioner({
    anchor,
    content,
    onPlacementChange: ({ side, align }) => setPlacement({ side, align })
});
```

### Constrain placement inside a container

Pass a `boundary` element (JavaScript fallback mode) to keep the floating element inside a specific scroll region instead of the viewport.

```tsx
usePositioner({ anchor, content, boundary: containerEl });
```

### Hide when the anchor leaves the viewport

Enable `hideWhenDetached` so the content hides automatically once the anchor scrolls out of the boundary.

```tsx
usePositioner({ anchor, content, hideWhenDetached: true });
```

### Force a recompute

Call `updatePlacement()` after imperative content changes (such as loading data) so the hook picks up the new dimensions.

```tsx
const positioner = usePositioner({ anchor, content });

positioner.updatePlacement();
```

## Styling with data attributes

The hook writes `data-side` and `data-align` on the content and arrow element for placement-aware CSS.

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

`usePositioner` is a structural positioning utility. It does not introduce ARIA roles or keyboard interactions. Accessibility concerns are handled by the consumer component (e.g., [Popover](../../primitive/components/popover.md#accessibility), Tooltip, Select).
