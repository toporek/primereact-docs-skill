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

```tsx showLineNumbers {1,3-4,8-11}
import { useProgressSpinner } from '@primereact/headless/progressspinner';

const { rootProps, circleProps, circleTrackProps, circleRangeProps, state } = useProgressSpinner({
    value: 75
});

return (
    <div {...rootProps}>
        <svg {...circleProps}>
            <circle {...circleTrackProps} />
            <circle {...circleRangeProps} />
        </svg>
    </div>
);
```

`useProgressSpinner` manages numeric value state with SVG circle geometry computation for both determinate and indeterminate progress indicators — see [Primitive](../../primitive/progressspinner/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `circleProps`, `circleTrackProps`, `circleRangeProps`)
- Computes SVG circle geometry (radius, circumference, dasharray/dashoffset) from value, min, max
- Configurable `min`, `max`, and `strokeWidth`
- Supports both determinate (value-based) and indeterminate (animated) modes
- Exposes `state.value`, `state.percent`, and `state.indeterminate` for custom rendering

## Behavior

### Indeterminate

When no `value` is provided (or `value` is `null`), the component enters indeterminate mode. Style the animation via CSS using `[data-state="indeterminate"]`.

```tsx
const progress = useProgressSpinner(); // indeterminate by default
```

### Determinate

Provide a numeric `value` to display a determinate progress indicator.

```tsx
const progress = useProgressSpinner({ value: 75 });
```

### Min / Max

Set `min` and `max` to define value boundaries. Defaults are `0` and `100`.

```tsx
const progress = useProgressSpinner({ value: 150, min: 0, max: 200 });
```

### Stroke Width

Set `strokeWidth` to control the circle stroke width. Default is `4`.

```tsx
const progress = useProgressSpinner({ value: 75, strokeWidth: 8 });
```

### Disabled

Set `disabled` to mark the progress as disabled.

```tsx
const progress = useProgressSpinner({ value: 50, disabled: true });
```

### Using `state` for Custom UI

The hook exposes reactive state for rendering custom indicators.

```tsx
const progress = useProgressSpinner({ value: 75 });

<span>{Math.round(progress.state.percent)}%</span>;
{
    progress.state.indeterminate && <span>Loading...</span>;
}
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="progress"` and a `data-part` attribute. State-dependent attributes are added automatically.

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

See [ProgressSpinner Primitive](../../primitive/progressspinner/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
