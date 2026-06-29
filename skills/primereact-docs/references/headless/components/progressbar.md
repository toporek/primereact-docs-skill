# useProgressBar

Hook that normalizes progress values to a percentage range and provides ARIA attributes.

```tsx
'use client';
import { useProgressBar } from '@primereact/headless/progressbar';

export default function BasicDemo() {
    const { rootProps, trackProps, state } = useProgressBar({ value: 50 });

    return (
        <div className="flex flex-col gap-6 max-w-lg mx-auto">
            <div {...rootProps}>
                <div {...trackProps} className="h-5 rounded-full bg-surface-100 dark:bg-surface-800 overflow-hidden">
                    <div
                        className="flex items-center justify-center h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: state.computedValue + '%' }}
                    >
                        <span className="flex items-center justify-center text-xs font-semibold text-surface-200">{state.formattedValue}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useProgressBar } from '@primereact/headless/progressbar';
```

```tsx
const { rootProps, trackProps, state } = useProgressBar({ value: 50 });

<div {...rootProps}>
    <div {...trackProps}>
        <div style={{ width: state.computedValue + '%' }}></div>
    </div>
</div>;
```

`useProgressBar` normalizes a value within `min`/`max` bounds and returns spread-ready prop objects with ARIA attributes, see [Primitive](../../primitive/components/progressbar.md) for a component-based API.

## Features

- **Value normalization**, `state.computedValue` converts any raw value in the `min`/`max` range into a 0-100 percentage
- **Formatted display text**, `state.formattedValue` renders via a default `percent` formatter or your custom one
- **ARIA attributes**, `rootProps` carries `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`
- **Custom range**, configurable `min` and `max` with a console error guard when bounds are invalid
- **Reactive state**, `state` is safe to read from custom labels or indicators that sit outside the track

## Working with callbacks

### Working with a custom range

Set `min` and `max` to match your data model. The returned `computedValue` is always expressed as a percentage so your styles stay range-agnostic.

```tsx
const { state } = useProgressBar({ value: 50, min: 0, max: 200 });

state.computedValue; // 25
```

### Custom formatted labels

Pass a `formatter` to control the text rendered in `state.formattedValue`. Handy for fractional, ratio, or localized displays.

```tsx
const { state } = useProgressBar({
    value: 50,
    formatter: (value) => `${value}/100`
});

state.formattedValue; // '50/100'
```

### Rendering a label alongside the track

Read `state.computedValue` and `state.formattedValue` to render progress text wherever you need it, no extra calls required.

```tsx
const { state } = useProgressBar({ value: 75 });

<span>{Math.round(state.computedValue ?? 0)}%</span>;
<span>{state.formattedValue}</span>;
```

## Styling with data attributes

The prop objects include `data-scope="progressbar"` and `data-part` for styling.

| Scope         | Part    |
| ------------- | ------- |
| `progressbar` | `root`  |
| `progressbar` | `track` |

```css
[data-scope='progressbar'][data-part='root'] {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

[data-scope='progressbar'][data-part='track'] {
    height: 1.25rem;
    border-radius: 9999px;
    overflow: hidden;
}
```

## API

### useProgressBar

> **API/props table for `useProgressBar` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Value is exposed via aria-valuenow, aria-valuemin, and aria-valuemax for screen readers. See [Primitive](../../primitive/components/progressbar.md#accessibility) for full WAI-ARIA compliance details.
