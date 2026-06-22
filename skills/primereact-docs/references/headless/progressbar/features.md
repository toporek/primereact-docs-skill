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

```tsx showLineNumbers {1,3,6-8}
import { useProgressBar } from '@primereact/headless/progressbar';

const { rootProps, trackProps, state } = useProgressBar({ value: 50 });

return (
    <div {...rootProps}>
        <div {...trackProps}>
            <div style={{ width: state.computedValue + '%' }}></div>
        </div>
    </div>
);
```

`useProgressBar` normalizes a value within `min`/`max` bounds and returns spread-ready prop objects with ARIA attributes — see [Primitive](../../primitive/progressbar/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` and `trackProps` for root and track elements
- Normalizes `value` to a 0-100 percentage via `state.computedValue`
- Formats display text via configurable `formatter` function
- Validates `min` < `max` with console error on invalid bounds

## Behavior

### Default Range

The default range is `0` to `100`. Set `value` to reflect current progress.

```tsx
const { state } = useProgressBar({ value: 75 });

state.computedValue; // 75
state.formattedValue; // '75%'
```

### Custom Range

Set `min` and `max` to define custom bounds. The value is normalized to a 0-100 percentage.

```tsx
const { state } = useProgressBar({ value: 50, min: 0, max: 200 });

state.computedValue; // 25
```

### Custom Formatter

Pass a `formatter` function to control display text. It receives the computed percentage.

```tsx
const { state } = useProgressBar({
    value: 50,
    formatter: (value) => `${value}/100`
});

state.formattedValue; // '50/100'
```

### Using `state` for Custom UI

The hook exposes reactive state for rendering custom indicators.

```tsx
const { state } = useProgressBar({ value: 75 });

<span>{Math.round(state.computedValue ?? 0)}%</span>
<span>{state.formattedValue}</span>
```

### Custom Styling with Data Attributes

The prop objects include `data-scope="progressbar"` and `data-part` for styling.

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

See [ProgressBar Primitive](../../primitive/progressbar/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
