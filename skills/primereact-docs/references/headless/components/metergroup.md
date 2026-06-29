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

```tsx
import { useMeterGroup } from '@primereact/headless/metergroup';
```

```tsx
const { rootProps, percent, percentAsString } = useMeterGroup();

return <div {...rootProps}></div>;
```

`useMeterGroup` tracks cumulative meter values and converts them to percentages within `min`/`max` bounds, see [Primitive](../../primitive/components/metergroup.md) for a component-based API.

## Features

- **ARIA meter semantics**, `rootProps` carries `role="meter"` along with `aria-valuemin`, `aria-valuemax`, and `data-orientation`
- **Percentage helpers**, `percent(value)` and `percentAsString(value)` normalize any raw value into the configured range
- **Aggregated total**, `updateTotalPercent` and `resetTotalPercent` maintain a running `state.totalPercent` across meters
- **Custom bounds**, configurable `min` and `max` recalculate every meter against the new range
- **Orientation support**, `data-orientation` switches layout between `horizontal` and `vertical`

## Working with callbacks

### Converting values to percentages

`percent` and `percentAsString` handle the math against the configured range, use them to set element widths or to render labels.

```tsx
const { percent, percentAsString } = useMeterGroup({ max: 200 });

percent(50); // 25
percentAsString(50); // '25%'
```

### Aggregating across meters

Call `updateTotalPercent` from each meter to build a running total for the whole group, and `resetTotalPercent` before a new pass.

```tsx
const { state, updateTotalPercent, resetTotalPercent } = useMeterGroup();

resetTotalPercent();
updateTotalPercent(15);
updateTotalPercent(25);

state.totalPercent; // 40
```

### Switching orientation

The root exposes `data-orientation` so layout can flip with a single selector, no extra state needed in your CSS.

```tsx
const { rootProps } = useMeterGroup({ orientation: 'vertical' });
```

## Styling with data attributes

The prop objects include `data-scope="metergroup"` and `data-part` for styling, plus `data-orientation` on the root for layout switching.

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

> **`useMeterGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/metergroup or the installed `@primereact/types`.

## Accessibility

Each segment exposes aria-valuenow so assistive tech can read individual values. See [Primitive](../../primitive/components/metergroup.md#accessibility) for full WAI-ARIA compliance details.
