# MeterGroup

MeterGroup displays scalar measurements within a known range.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

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
            <MeterGroup.Root aria-valuenow={total}>
                <MeterGroup.Meters>
                    {values.map((item) => (
                        <MeterGroup.Meter key={item.label} value={item.value} color={item.color} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map((item) => (
                        <MeterGroup.Label key={item.label}>
                            <MeterGroup.Marker color={item.color} />
                            <MeterGroup.Text>
                                {item.label} ({item.value}%)
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
            </MeterGroup.Root>
        </div>
    );
}

```

## Usage

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';
```

```tsx
<MeterGroup.Root>
    <MeterGroup.Meters>
        <MeterGroup.Meter />
    </MeterGroup.Meters>
    <MeterGroup.Labels>
        <MeterGroup.Label>
            <MeterGroup.Marker />
            <MeterGroup.Text />
        </MeterGroup.Label>
    </MeterGroup.Labels>
</MeterGroup.Root>
```

## Examples

### Basic

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function BasicDemo() {
    const value = { label: 'Space used', value: 15, color: 'var(--p-primary-color)' };

    return (
        <MeterGroup.Root aria-valuenow={value.value} className="max-w-md mx-auto">
            <MeterGroup.Meters>
                <MeterGroup.Meter value={value.value} color={value.color} />
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                <MeterGroup.Label>
                    <MeterGroup.Marker color={value.color} />
                    <MeterGroup.Text>
                        {value.label} ({value.value}%)
                    </MeterGroup.Text>
                </MeterGroup.Label>
            </MeterGroup.Labels>
        </MeterGroup.Root>
    );
}

```

### Multiple

Each `MeterGroup.Meter` takes a `value` and an optional `color`. Add more meters to stack them in a single bar.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

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
        <MeterGroup.Root aria-valuenow={total} className="max-w-md mx-auto">
            <MeterGroup.Meters>
                {values.map((item) => (
                    <MeterGroup.Meter key={item.label} value={item.value} color={item.color} />
                ))}
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                {values.map((item) => (
                    <MeterGroup.Label key={item.label}>
                        <MeterGroup.Marker color={item.color} />
                        <MeterGroup.Text>
                            {item.label} ({item.value}%)
                        </MeterGroup.Text>
                    </MeterGroup.Label>
                ))}
            </MeterGroup.Labels>
        </MeterGroup.Root>
    );
}

```

### Color

`color` takes any CSS color value, a design token (`var(--p-violet-500)`), hex, rgb, hsl or a named color. The value is written to the `--p-metergroup-color` CSS variable on the element. You can also style it directly with `className` or `style`.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function ColorDemo() {
    return (
        <MeterGroup.Root aria-valuenow={54} className="max-w-md mx-auto">
            <MeterGroup.Meters>
                <MeterGroup.Meter value={12} color="var(--p-violet-500)" />
                <MeterGroup.Meter value={14} color="#10B981" />
                <MeterGroup.Meter value={10} color="rgb(244, 63, 94)" />
                <MeterGroup.Meter value={8} className="bg-blue-500" />
                <MeterGroup.Meter value={10} style={{ background: '#EAB308' }} />
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                <MeterGroup.Label>
                    <MeterGroup.Marker color="var(--p-violet-500)" />
                    <MeterGroup.Text>Violet</MeterGroup.Text>
                </MeterGroup.Label>
                <MeterGroup.Label>
                    <MeterGroup.Marker color="#10B981" />
                    <MeterGroup.Text>Emerald</MeterGroup.Text>
                </MeterGroup.Label>
                <MeterGroup.Label>
                    <MeterGroup.Marker color="rgb(244, 63, 94)" />
                    <MeterGroup.Text>Rose</MeterGroup.Text>
                </MeterGroup.Label>
                <MeterGroup.Label>
                    <MeterGroup.Marker className="bg-blue-500" />
                    <MeterGroup.Text>Blue</MeterGroup.Text>
                </MeterGroup.Label>
                <MeterGroup.Label>
                    <MeterGroup.Marker style={{ background: '#EAB308' }} />
                    <MeterGroup.Text>Yellow</MeterGroup.Text>
                </MeterGroup.Label>
            </MeterGroup.Labels>
        </MeterGroup.Root>
    );
}

```

### Icon

There is no icon part. Drop your own `<i>` or SVG inside `MeterGroup.Label` next to the marker.

```tsx
'use client';
import { Cog } from '@primeicons/react/cog';
import { Image } from '@primeicons/react/image';
import { Inbox } from '@primeicons/react/inbox';
import { Table } from '@primeicons/react/table';
import { MeterGroup } from '@primereact/ui/metergroup';

export default function IconDemo() {
    const values = [
        { label: 'Apps', value: 16, color: 'var(--p-violet-500)', icon: Table },
        { label: 'Messages', value: 8, color: 'var(--p-emerald-500)', icon: Inbox },
        { label: 'Media', value: 24, color: 'var(--p-amber-500)', icon: Image },
        { label: 'System', value: 10, color: 'var(--p-blue-500)', icon: Cog }
    ];

    const total = values.reduce((sum, v) => sum + v.value, 0);

    return (
        <MeterGroup.Root aria-valuenow={total} className="max-w-md mx-auto">
            <MeterGroup.Meters>
                {values.map(({ label, value, color }) => (
                    <MeterGroup.Meter key={label} value={value} color={color} />
                ))}
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                {values.map(({ label, value, color, icon: Icon }) => (
                    <MeterGroup.Label key={label}>
                        <Icon style={{ color }} />
                        <MeterGroup.Text>
                            {label} ({value}%)
                        </MeterGroup.Text>
                    </MeterGroup.Label>
                ))}
            </MeterGroup.Labels>
        </MeterGroup.Root>
    );
}

```

### Label

Labels render horizontally by default. Set `orientation="vertical"` on `MeterGroup.Labels` to stack them.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function LabelDemo() {
    const values = [
        { label: 'Apps', value: 16, color: 'var(--p-violet-500)' },
        { label: 'Messages', value: 8, color: 'var(--p-emerald-500)' },
        { label: 'Media', value: 24, color: 'var(--p-amber-500)' },
        { label: 'System', value: 10, color: 'var(--p-blue-500)' }
    ];

    const total = values.reduce((sum, v) => sum + v.value, 0);

    return (
        <MeterGroup.Root aria-valuenow={total} className="max-w-md mx-auto">
            <MeterGroup.Labels orientation="vertical">
                {values.map((item) => (
                    <MeterGroup.Label key={item.label}>
                        <MeterGroup.Marker color={item.color} />
                        <MeterGroup.Text>
                            {item.label} ({item.value}%)
                        </MeterGroup.Text>
                    </MeterGroup.Label>
                ))}
            </MeterGroup.Labels>
            <MeterGroup.Meters>
                {values.map((item) => (
                    <MeterGroup.Meter key={item.label} value={item.value} color={item.color} />
                ))}
            </MeterGroup.Meters>
        </MeterGroup.Root>
    );
}

```

### Vertical

`MeterGroup.Root` takes `orientation="horizontal"` (default) or `orientation="vertical"`.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

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
            <MeterGroup.Root aria-valuenow={total} orientation="vertical">
                <MeterGroup.Meters>
                    {values.map((item) => (
                        <MeterGroup.Meter key={item.label} value={item.value} color={item.color} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels orientation="vertical">
                    {values.map((item) => (
                        <MeterGroup.Label key={item.label}>
                            <MeterGroup.Marker color={item.color} />
                            <MeterGroup.Text>
                                {item.label} ({item.value}%)
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
            </MeterGroup.Root>
        </div>
    );
}

```

### Min-Max

`min` and `max` set the range. Defaults are 0 and 100.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

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
        <MeterGroup.Root aria-valuenow={total} max={200} className="max-w-md mx-auto">
            <MeterGroup.Meters>
                {values.map((item) => (
                    <MeterGroup.Meter key={item.label} value={item.value} color={item.color} />
                ))}
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                {values.map((item) => (
                    <MeterGroup.Label key={item.label}>
                        <MeterGroup.Marker color={item.color} />
                        <MeterGroup.Text>
                            {item.label} ({percent(item.value)})
                        </MeterGroup.Text>
                    </MeterGroup.Label>
                ))}
            </MeterGroup.Labels>
        </MeterGroup.Root>
    );
}

```

### Template

Each part is just a regular element, so you can drop cards, summaries or buttons around the meters.

```tsx
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';
import { MeterGroup } from '@primereact/ui/metergroup';

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
        <MeterGroup.Root aria-valuenow={totalPercent} max={200} className="max-w-sm mx-auto">
            <MeterGroup.Labels>
                {values.map((value) => (
                    <MeterGroup.Label key={value.label} className="flex-1">
                        <Card.Root className="flex-1 border border-surface shadow-none">
                            <Card.Body>
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
                            </Card.Body>
                        </Card.Root>
                    </MeterGroup.Label>
                ))}
            </MeterGroup.Labels>
            <div className="flex justify-between mt-4 mb-2 relative text-sm">
                <span>Storage</span>
                <span style={{ width: totalPercent + '%' }} className="absolute text-right">
                    {totalPercent}%
                </span>
                <span className="font-medium">1TB</span>
            </div>

            <MeterGroup.Meters>
                {values.map((item) => (
                    <MeterGroup.Meter
                        key={item.label}
                        value={item.value}
                        color={`linear-gradient(to right, ${item.color1}, ${item.color2})`}
                        style={{
                            width: percent(item.value)
                        }}
                    />
                ))}
            </MeterGroup.Meters>
            <div className="flex justify-between mt-4">
                <Button variant="outlined" size="small">
                    Manage Storage
                </Button>
                <Button size="small">Update Plan</Button>
            </div>
        </MeterGroup.Root>
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

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-metergroup | Class name of the root element |
| p-metergroup-meters | Class name of the meters element |
| p-metergroup-meter | Class name of the meter element |
| p-metergroup-label-list | Class name of the label list element |
| p-metergroup-label | Class name of the label element |
| p-metergroup-label-marker | Class name of the label marker element |
| p-metergroup-label-text | Class name of the label text element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| metergroup.border.radius | --p-metergroup-border-radius | Border radius of root |
| metergroup.gap | --p-metergroup-gap | Gap of root |
| metergroup.meters.background | --p-metergroup-meters-background | Background of meters |
| metergroup.meters.size | --p-metergroup-meters-size | Size of meters |
| metergroup.label.gap | --p-metergroup-label-gap | Gap of label |
| metergroup.label.marker.size | --p-metergroup-label-marker-size | Size of label marker |
| metergroup.label.text.font.weight | --p-metergroup-label-text-font-weight | Font weight of label text |
| metergroup.label.text.font.size | --p-metergroup-label-text-font-size | Font size of label text |
| metergroup.label.icon.size | --p-metergroup-label-icon-size | Size of label icon |
| metergroup.label.list.vertical.gap | --p-metergroup-label-list-vertical-gap | Vertical gap of label list |
| metergroup.label.list.horizontal.gap | --p-metergroup-label-list-horizontal-gap | Horizontal gap of label list |
