# useMeterGroup

Hook that manages meter value aggregation and percentage calculation within a defined range.

```tsx
'use client';
import { useMeterGroup } from '@primereact/headless/metergroup';

const values = [
    { label: 'Apps', value: 16 },
    { label: 'Messages', value: 8 },
    { label: 'Media', value: 24 },
    { label: 'System', value: 10 }
];

export default function BasicDemo() {
    const metergroup = useMeterGroup();
    const { rootProps, percent, percentAsString } = metergroup;

    return (
        <div className="flex flex-col gap-4 max-w-md mx-auto">
            <div {...rootProps} className="flex flex-col gap-3">
                <div className="flex h-2 rounded-full bg-surface-100 dark:bg-surface-800 overflow-hidden">
                    {values.map((item, index) => {
                        const colors = ['bg-primary', 'bg-emerald-500', 'bg-violet-500', 'bg-amber-500'];

                        return <div key={index} className={`${colors[index]} transition-all`} style={{ width: percentAsString(item.value) }} />;
                    })}
                </div>
                <ol className="flex flex-wrap gap-x-4 gap-y-1 list-none p-0 m-0">
                    {values.map((item, index) => {
                        const colors = ['bg-primary', 'bg-emerald-500', 'bg-violet-500', 'bg-amber-500'];

                        return (
                            <li key={index} className="flex items-center gap-1.5 text-sm text-surface-600 dark:text-surface-300">
                                <span className={`inline-block w-2 h-2 rounded-sm ${colors[index]}`} />
                                {item.label} ({percent(item.value)}%)
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,5}
import { useMeterGroup } from '@primereact/headless/metergroup';

const { rootProps, percent, percentAsString } = useMeterGroup();

return <div {...rootProps}></div>;
```

`useMeterGroup` tracks cumulative meter values and converts them to percentages within `min`/`max` bounds — see [Primitive](../../primitive/metergroup/features.md) for a component-based API.

## Features

- Returns spread-ready `rootProps` with `role="meter"`, ARIA value attributes, and `data-orientation`
- Calculates percentage of individual meter values relative to the `min`/`max` range
- Tracks aggregated `totalPercent` across all meters via `updateTotalPercent`
- Provides `percent` and `percentAsString` methods for rendering meter widths
- Supports vertical and horizontal orientation

## Behavior

### Default Range

The default range is `0` to `100`. A meter with `value: 25` renders at 25% width.

```tsx
const { percent, percentAsString } = useMeterGroup();

percent(25); // 25
percentAsString(25); // '25%'
```

### Custom Range

Set `min` and `max` to change the value boundaries. Percentages are recalculated against the new range.

```tsx
const { percent } = useMeterGroup({ max: 200 });

percent(50); // 25
```

### Orientation

Set `orientation` to switch between horizontal and vertical layouts.

```tsx
const { rootProps } = useMeterGroup({ orientation: 'vertical' });

rootProps['data-orientation']; // 'vertical'
```

### Tracking Total Percent

Call `updateTotalPercent` to accumulate values across meters. The `state.totalPercent` reflects the running total.

```tsx
const { state, updateTotalPercent, resetTotalPercent } = useMeterGroup();

updateTotalPercent(15);
updateTotalPercent(25);
state.totalPercent; // 40

resetTotalPercent();
state.totalPercent; // 0
```

### Custom Styling with Data Attributes

The prop objects include `data-scope="metergroup"` and `data-part` for styling.

```css
[data-scope='metergroup'][data-part='root'] {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

[data-scope='metergroup'][data-orientation='vertical'] {
    flex-direction: row;
}
```

## API

### useMeterGroup

> **API/props table for `useMeterGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [MeterGroup Primitive](../../primitive/metergroup/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
