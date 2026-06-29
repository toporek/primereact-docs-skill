# useProgressSpinner

Hook that manages circular progress state, SVG geometry computation, and determinate/indeterminate modes.

```tsx
'use client';
import { useProgressSpinner } from '@primereact/headless/progressspinner';

export default function BasicDemo() {
    const { rootProps, circleProps, circleTrackProps, circleRangeProps } = useProgressSpinner();

    return (
        <div className="flex justify-center">
            <div {...rootProps} className="w-24 h-24" aria-label="Loading">
                <svg {...circleProps} className="w-full h-full animate-spin">
                    <circle {...circleTrackProps} className="stroke-[var(--p-content-border-color)]" />
                    <circle {...circleRangeProps} className="stroke-primary [stroke-dasharray:89,200] [stroke-dashoffset:0] [stroke-linecap:round]" />
                </svg>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useProgressSpinner } from '@primereact/headless/progressspinner';
```

```tsx
const { rootProps, circleProps, circleTrackProps, circleRangeProps, state } = useProgressSpinner({
    value: 75
});

<div {...rootProps}>
    <svg {...circleProps}>
        <circle {...circleTrackProps} />
        <circle {...circleRangeProps} />
    </svg>
</div>;
```

`useProgressSpinner` manages numeric value state with SVG circle geometry computation for both determinate and indeterminate progress indicators, see [Primitive](../../primitive/components/progressspinner.md) for a component-based API.

## Features

- **SVG geometry**, computes radius, circumference, and `stroke-dasharray`/`stroke-dashoffset` from value, min, and max
- **Determinate and indeterminate**, switches modes automatically based on whether `value` is provided
- **Configurable stroke and bounds**, `strokeWidth`, `min`, and `max` all feed into the geometry calculation
- **Reactive state**, `state.value`, `state.percent`, and `state.indeterminate` drive custom labels or overlays
- **Data-driven styling**, `data-state="indeterminate"` makes it easy to attach spin animations in CSS

## Working with callbacks

### Determinate vs indeterminate

Omit `value` (or pass `null`) to show an indeterminate spinner; provide a numeric value for a determinate indicator.

```tsx
const indeterminate = useProgressSpinner();
const determinate = useProgressSpinner({ value: 75 });
```

### Custom range

Set `min` and `max` so the percentage is computed against your actual domain, not 0-100.

```tsx
const progress = useProgressSpinner({ value: 150, min: 0, max: 200 });

progress.state.percent; // 75
```

### Rendering custom labels

Read `state.percent` and `state.indeterminate` to layer a label on top of the SVG without recomputing geometry.

```tsx
const progress = useProgressSpinner({ value: 75 });

<span>{Math.round(progress.state.percent)}%</span>;
{
    progress.state.indeterminate && <span>Loading...</span>;
}
```

### Adjusting stroke thickness

`strokeWidth` feeds directly into the circle geometry, so thicker strokes stay visually centered without manual tweaks.

```tsx
const progress = useProgressSpinner({ value: 75, strokeWidth: 8 });
```

## Styling with data attributes

Every prop object includes `data-scope="progress"` and a `data-part` attribute. State-dependent attributes are added automatically.

| Scope      | Part          | States       |
| ---------- | ------------- | ------------ |
| `progress` | `root`        | `data-state` |
| `progress` | `circleTrack` | ,            |
| `progress` | `circleRange` | ,            |

```css
[data-scope='progress'][data-part='circleTrack'] {
    stroke: var(--p-content-border-color);
}

[data-scope='progress'][data-part='circleRange'] {
    stroke: var(--p-primary-color);
}

[data-scope='progress'][data-state='indeterminate'] svg {
    animation: spin 2s linear infinite;
}
```

## API

### useProgressSpinner

> **API/props table for `useProgressSpinner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Announced as an indeterminate progress indicator via aria-busy. See [Primitive](../../primitive/components/progressspinner.md#accessibility) for full WAI-ARIA compliance details.
