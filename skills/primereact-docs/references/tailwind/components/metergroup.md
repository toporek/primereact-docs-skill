# MeterGroup

MeterGroup displays scalar measurements within a known range.

```tsx
import {
    MeterGroup,
    MeterGroupMeter,
    MeterGroupMeters,
    MeterGroupLabel,
    MeterGroupLabels,
    MeterGroupMarker,
    MeterGroupText
} from '@/components/ui/metergroup';

export default function Preview() {
    const values = [
        { label: 'Apps', value: 14, color: 'var(--p-violet-500)' },
        { label: 'Messages', value: 12, color: 'var(--p-emerald-500)' },
        { label: 'Media', value: 8, color: 'var(--p-amber-500)' },
        { label: 'System', value: 12, color: 'var(--p-blue-500)' },
        { label: 'Documents', value: 6, color: 'var(--p-gray-500)' },
        { label: 'Cache', value: 11, color: 'var(--p-cyan-500)' },
        { label: 'Other', value: 9, color: 'var(--p-pink-500)' }
    ];

    const total = values.reduce((sum, v) => sum + v.value, 0);

    return (
        <div className="max-w-md mx-auto">
            <div className="mb-4 font-mono text-sm text-color font-medium uppercase tracking-wider">Disk usage</div>
            <MeterGroup aria-valuenow={total}>
                <MeterGroupMeters>
                    {values.map((item) => (
                        <MeterGroupMeter key={item.label} value={item.value} color={item.color} />
                    ))}
                </MeterGroupMeters>
                <MeterGroupLabels>
                    {values.map((item) => (
                        <MeterGroupLabel key={item.label}>
                            <MeterGroupMarker color={item.color} />
                            <MeterGroupText>
                                {item.label} ({item.value}%)
                            </MeterGroupText>
                        </MeterGroupLabel>
                    ))}
                </MeterGroupLabels>
            </MeterGroup>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/metergroup.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { MeterGroup, MeterGroupMeters, MeterGroupMeter, MeterGroupLabels, MeterGroupLabel, MeterGroupMarker, MeterGroupText } from '@/components/ui/metergroup';
```

```tsx
<MeterGroup aria-valuenow={total}>
    <MeterGroupMeters>
        <MeterGroupMeter />
    </MeterGroupMeters>
    <MeterGroupLabels>
        <MeterGroupLabel>
            <MeterGroupMarker />
            <MeterGroupText></MeterGroupText>
        </MeterGroupLabel>
    </MeterGroupLabels>
</MeterGroup>
```

`MeterGroup` does not sum the meter values on its own. Compute the total yourself and pass it as `aria-valuenow` for accessibility. No `index` prop on the children; use `:nth-child(n)` in CSS to target individual rows.

## Examples

### Basic

```tsx
import {
    MeterGroup,
    MeterGroupMeter,
    MeterGroupMeters,
    MeterGroupLabel,
    MeterGroupLabels,
    MeterGroupMarker,
    MeterGroupText
} from '@/components/ui/metergroup';

export default function BasicDemo() {
    const value = { label: 'Space used', value: 15, color: 'var(--p-primary-color)' };

    return (
        <MeterGroup aria-valuenow={value.value} className="max-w-md mx-auto">
            <MeterGroupMeters>
                <MeterGroupMeter value={value.value} color={value.color} />
            </MeterGroupMeters>
            <MeterGroupLabels>
                <MeterGroupLabel>
                    <MeterGroupMarker color={value.color} />
                    <MeterGroupText>
                        {value.label} ({value.value}%)
                    </MeterGroupText>
                </MeterGroupLabel>
            </MeterGroupLabels>
        </MeterGroup>
    );
}

```

### Multiple

Each `MeterGroupMeter` takes a `value` and an optional `color`. Add more meters to stack them in a single bar.

```tsx
import {
    MeterGroup,
    MeterGroupMeter,
    MeterGroupMeters,
    MeterGroupLabel,
    MeterGroupLabels,
    MeterGroupMarker,
    MeterGroupText
} from '@/components/ui/metergroup';

export default function MultipleDemo() {
    const values = [
        { label: 'Apps', value: 14, color: 'var(--p-violet-500)' },
        { label: 'Messages', value: 12, color: 'var(--p-emerald-500)' },
        { label: 'Media', value: 8, color: 'var(--p-amber-500)' },
        { label: 'System', value: 12, color: 'var(--p-blue-500)' },
        { label: 'Documents', value: 6, color: 'var(--p-gray-500)' },
        { label: 'Cache', value: 11, color: 'var(--p-cyan-500)' },
        { label: 'Other', value: 9, color: 'var(--p-pink-500)' }
    ];

    const total = values.reduce((sum, v) => sum + v.value, 0);

    return (
        <MeterGroup aria-valuenow={total} className="max-w-md mx-auto">
            <MeterGroupMeters>
                {values.map((item) => (
                    <MeterGroupMeter key={item.label} value={item.value} color={item.color} />
                ))}
            </MeterGroupMeters>
            <MeterGroupLabels>
                {values.map((item) => (
                    <MeterGroupLabel key={item.label}>
                        <MeterGroupMarker color={item.color} />
                        <MeterGroupText>
                            {item.label} ({item.value}%)
                        </MeterGroupText>
                    </MeterGroupLabel>
                ))}
            </MeterGroupLabels>
        </MeterGroup>
    );
}

```

### Color

`color` takes any CSS color value, a design token (`var(--p-violet-500)`), hex, rgb, hsl or a named color. The value is written to the `--p-metergroup-color` CSS variable on the element. You can also style it directly with `className` or `style`.

```tsx
import {
    MeterGroup,
    MeterGroupMeter,
    MeterGroupMeters,
    MeterGroupLabel,
    MeterGroupLabels,
    MeterGroupMarker,
    MeterGroupText
} from '@/components/ui/metergroup';

export default function ColorDemo() {
    return (
        <MeterGroup aria-valuenow={54} className="max-w-md mx-auto">
            <MeterGroupMeters>
                <MeterGroupMeter value={12} color="var(--p-violet-500)" />
                <MeterGroupMeter value={14} color="#10B981" />
                <MeterGroupMeter value={10} color="rgb(244, 63, 94)" />
                <MeterGroupMeter value={8} className="bg-blue-500" />
                <MeterGroupMeter value={10} style={{ background: '#EAB308' }} />
            </MeterGroupMeters>
            <MeterGroupLabels>
                <MeterGroupLabel>
                    <MeterGroupMarker color="var(--p-violet-500)" />
                    <MeterGroupText>Violet</MeterGroupText>
                </MeterGroupLabel>
                <MeterGroupLabel>
                    <MeterGroupMarker color="#10B981" />
                    <MeterGroupText>Emerald</MeterGroupText>
                </MeterGroupLabel>
                <MeterGroupLabel>
                    <MeterGroupMarker color="rgb(244, 63, 94)" />
                    <MeterGroupText>Rose</MeterGroupText>
                </MeterGroupLabel>
                <MeterGroupLabel>
                    <MeterGroupMarker className="bg-blue-500" />
                    <MeterGroupText>Blue</MeterGroupText>
                </MeterGroupLabel>
                <MeterGroupLabel>
                    <MeterGroupMarker style={{ background: '#EAB308' }} />
                    <MeterGroupText>Yellow</MeterGroupText>
                </MeterGroupLabel>
            </MeterGroupLabels>
        </MeterGroup>
    );
}

```

### Icon

There is no icon part. Drop your own `<i>` or SVG inside `MeterGroupLabel` next to the marker.

```tsx
import { Cog } from '@primeicons/react/cog';
import { Image } from '@primeicons/react/image';
import { Inbox } from '@primeicons/react/inbox';
import { Table } from '@primeicons/react/table';
import { MeterGroup, MeterGroupMeter, MeterGroupMeters, MeterGroupLabel, MeterGroupLabels, MeterGroupText } from '@/components/ui/metergroup';

export default function IconDemo() {
    const values = [
        { label: 'Apps', value: 16, color: 'var(--p-violet-500)', icon: Table },
        { label: 'Messages', value: 8, color: 'var(--p-emerald-500)', icon: Inbox },
        { label: 'Media', value: 24, color: 'var(--p-amber-500)', icon: Image },
        { label: 'System', value: 10, color: 'var(--p-blue-500)', icon: Cog }
    ];

    const total = values.reduce((sum, v) => sum + v.value, 0);

    return (
        <MeterGroup aria-valuenow={total} className="max-w-md mx-auto">
            <MeterGroupMeters>
                {values.map(({ label, value, color }) => (
                    <MeterGroupMeter key={label} value={value} color={color} />
                ))}
            </MeterGroupMeters>
            <MeterGroupLabels>
                {values.map(({ label, value, color, icon: Icon }) => (
                    <MeterGroupLabel key={label}>
                        <Icon style={{ color }} />
                        <MeterGroupText>
                            {label} ({value}%)
                        </MeterGroupText>
                    </MeterGroupLabel>
                ))}
            </MeterGroupLabels>
        </MeterGroup>
    );
}

```

### Label

Labels render horizontally by default. Set `orientation="vertical"` on `MeterGroupLabels` to stack them.

```tsx
import {
    MeterGroup,
    MeterGroupMeter,
    MeterGroupMeters,
    MeterGroupLabel,
    MeterGroupLabels,
    MeterGroupMarker,
    MeterGroupText
} from '@/components/ui/metergroup';

export default function LabelDemo() {
    const values = [
        { label: 'Apps', value: 16, color: 'var(--p-violet-500)' },
        { label: 'Messages', value: 8, color: 'var(--p-emerald-500)' },
        { label: 'Media', value: 24, color: 'var(--p-amber-500)' },
        { label: 'System', value: 10, color: 'var(--p-blue-500)' }
    ];

    const total = values.reduce((sum, v) => sum + v.value, 0);

    return (
        <MeterGroup aria-valuenow={total} className="max-w-md mx-auto">
            <MeterGroupLabels orientation="vertical">
                {values.map((item) => (
                    <MeterGroupLabel key={item.label}>
                        <MeterGroupMarker color={item.color} />
                        <MeterGroupText>
                            {item.label} ({item.value}%)
                        </MeterGroupText>
                    </MeterGroupLabel>
                ))}
            </MeterGroupLabels>
            <MeterGroupMeters>
                {values.map((item) => (
                    <MeterGroupMeter key={item.label} value={item.value} color={item.color} />
                ))}
            </MeterGroupMeters>
        </MeterGroup>
    );
}

```

### Vertical

`MeterGroup` takes `orientation="horizontal"` (default) or `orientation="vertical"`.

```tsx
import {
    MeterGroup,
    MeterGroupMeter,
    MeterGroupMeters,
    MeterGroupLabel,
    MeterGroupLabels,
    MeterGroupMarker,
    MeterGroupText
} from '@/components/ui/metergroup';

export default function VerticalDemo() {
    const values = [
        { label: 'Apps', value: 24, color: 'var(--p-violet-500)' },
        { label: 'Messages', value: 16, color: 'var(--p-emerald-500)' },
        { label: 'Media', value: 24, color: 'var(--p-amber-500)' },
        { label: 'System', value: 12, color: 'var(--p-blue-500)' }
    ];

    const total = values.reduce((sum, v) => sum + v.value, 0);

    return (
        <div className="flex justify-center" style={{ height: '360px' }}>
            <MeterGroup aria-valuenow={total} orientation="vertical">
                <MeterGroupMeters>
                    {values.map((item) => (
                        <MeterGroupMeter key={item.label} value={item.value} color={item.color} />
                    ))}
                </MeterGroupMeters>
                <MeterGroupLabels orientation="vertical">
                    {values.map((item) => (
                        <MeterGroupLabel key={item.label}>
                            <MeterGroupMarker color={item.color} />
                            <MeterGroupText>
                                {item.label} ({item.value}%)
                            </MeterGroupText>
                        </MeterGroupLabel>
                    ))}
                </MeterGroupLabels>
            </MeterGroup>
        </div>
    );
}

```

### Min-Max

`min` and `max` set the range. Defaults are 0 and 100.

```tsx
import {
    MeterGroup,
    MeterGroupMeter,
    MeterGroupMeters,
    MeterGroupLabel,
    MeterGroupLabels,
    MeterGroupMarker,
    MeterGroupText
} from '@/components/ui/metergroup';

export default function MinMaxDemo() {
    const values = [
        { label: 'Apps', value: 16, color: 'var(--p-violet-500)' },
        { label: 'Messages', value: 8, color: 'var(--p-emerald-500)' },
        { label: 'Media', value: 24, color: 'var(--p-amber-500)' },
        { label: 'System', value: 10, color: 'var(--p-blue-500)' }
    ];

    const total = values.reduce((sum, v) => sum + v.value, 0);
    const percent = (meter: number) => Math.round(Math.max(0, Math.min(100, (meter / 200) * 100))) + '%';

    return (
        <MeterGroup aria-valuenow={total} max={200} className="max-w-md mx-auto">
            <MeterGroupMeters>
                {values.map((item) => (
                    <MeterGroupMeter key={item.label} value={item.value} color={item.color} />
                ))}
            </MeterGroupMeters>
            <MeterGroupLabels>
                {values.map((item) => (
                    <MeterGroupLabel key={item.label}>
                        <MeterGroupMarker color={item.color} />
                        <MeterGroupText>
                            {item.label} ({percent(item.value)})
                        </MeterGroupText>
                    </MeterGroupLabel>
                ))}
            </MeterGroupLabels>
        </MeterGroup>
    );
}

```

### Template

MeterGroup provides templating support for labels, meter items, and content around the meters.

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardBody } from '@/components/ui/card';
import { MeterGroup, MeterGroupMeter, MeterGroupMeters, MeterGroupLabel, MeterGroupLabels } from '@/components/ui/metergroup';

export default function TemplateDemo() {
    const values = [
        { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
        { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
        { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
        { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];

    const totalPercent = values.reduce((acc, value) => acc + value.value, 0);

    const percent = (meter: number) => {
        return Math.round(Math.max(0, Math.min(100, (meter / 100) * 100))) + '%';
    };

    return (
        <MeterGroup aria-valuenow={totalPercent} max={200} className="max-w-sm mx-auto">
            <MeterGroupLabels>
                {values.map((value, index) => (
                    <MeterGroupLabel key={`label_${index}`} className="flex-1">
                        <Card className="flex-1 border border-surface shadow-none">
                            <CardBody>
                                <div className="flex justify-between gap-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-surface-500 dark:text-surface-400 text-sm">{value.label}</span>
                                        <span className="font-bold text-lg">{value.value}%</span>
                                    </div>
                                    <span
                                        className="w-8 h-8 rounded-full inline-flex justify-center items-center text-center"
                                        style={{ backgroundColor: `${value.color1}`, color: '#ffffff' }}
                                    >
                                        <i className={value.icon} />
                                    </span>
                                </div>
                            </CardBody>
                        </Card>
                    </MeterGroupLabel>
                ))}
            </MeterGroupLabels>
            <div className="flex justify-between mt-4 mb-2 relative text-sm">
                <span>Storage</span>
                <span style={{ width: totalPercent + '%' }} className="absolute text-right">
                    {totalPercent}%
                </span>
                <span className="font-medium">1TB</span>
            </div>

            <MeterGroupMeters>
                {values.map((item, index) => (
                    <MeterGroupMeter
                        key={`meter_${index}`}
                        value={item.value}
                        style={{
                            background: `linear-gradient(to right, ${item.color1}, ${item.color2})`,
                            width: percent(item.value)
                        }}
                    />
                ))}
            </MeterGroupMeters>
            <div className="flex justify-between mt-4">
                <Button variant="outlined" size="small">
                    Manage Storage
                </Button>
                <Button size="small">Update Plan</Button>
            </div>
        </MeterGroup>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/metergroup.md#api) for `MeterGroupRoot`, `MeterGroupMeters`, `MeterGroupMeter`, `MeterGroupLabels`, `MeterGroupLabel`, `MeterGroupMarker`, `MeterGroupText` component documentation.

### Hooks

See [Headless API](../../headless/components/metergroup.md#api) for `useMeterGroup` hook documentation.

### Accessibility

See [MeterGroup Primitive](../../primitive/components/metergroup.md#accessibility) for WAI-ARIA compliance details and keyboard support.
