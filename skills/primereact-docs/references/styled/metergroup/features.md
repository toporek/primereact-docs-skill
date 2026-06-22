# MeterGroup

MeterGroup displays scalar measurements within a known range.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function Preview() {
    const values = [
        { label: 'Apps', value: 14 },
        { label: 'Messages', value: 12 },
        { label: 'Media', value: 8 },
        { label: 'System', value: 12 },
        { label: 'Documents', value: 6 },
        { label: 'Cache', value: 11 },
        { label: 'Other', value: 9 }
    ];

    return (
        <div className="max-w-md mx-auto">
            <div className="mb-4 font-mono text-sm text-color font-medium uppercase tracking-wider">Disk usage</div>
            <MeterGroup.Root>
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} index={index} value={item.value} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map((item, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Marker index={index} />
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
            <MeterGroup.Text></MeterGroup.Text>
        </MeterGroup.Label>
    </MeterGroup.Labels>
</MeterGroup.Root>
```

## Examples

### Basic

Visualizes multiple values as segmented horizontal bars.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function BasicDemo() {
    const value = { label: 'Space used', value: 15, color: 'var(--p-primary-color)' };

    return (
        <MeterGroup.Root className="max-w-md mx-auto">
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

Data is displayed in the `MeterGroup.Meter` component using the `value` and `color` properties. Adding more `MeterGroup.Meter` components displays the meters in a group. Pass `index` to `MeterGroup.Meter` and `MeterGroup.Marker` to identify the meter's and label's position to get the color.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function MultipleDemo() {
    const values = [
        { label: 'Apps', value: 14 },
        { label: 'Messages', value: 12 },
        { label: 'Media', value: 8 },
        { label: 'System', value: 12 },
        { label: 'Documents', value: 6 },
        { label: 'Cache', value: 11 },
        { label: 'Other', value: 9 }
    ];

    return (
        <MeterGroup.Root className="max-w-md mx-auto">
            <MeterGroup.Meters>
                {values.map((item, index) => (
                    <MeterGroup.Meter key={`meter_${index}`} index={index} value={item.value} />
                ))}
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                {values.map((item, index) => (
                    <MeterGroup.Label key={`label_${index}`}>
                        <MeterGroup.Marker index={index} />
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

`MeterGroup.Meter` and `MeterGroup.Marker` components supports custom color values. Use `color` property or pass color with className or style. `color` has custom color names like `blue`, `emerald`, `violet`, `amber`, etc. or hex, rgb, hsl, or hsla values.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function ColorDemo() {
    return (
        <MeterGroup.Root className="max-w-md mx-auto">
            <MeterGroup.Meters>
                <MeterGroup.Meter value={12} color="violet" />
                <MeterGroup.Meter value={14} color="#10B981" />
                <MeterGroup.Meter value={10} color="rgb(244, 63, 94)" />
                <MeterGroup.Meter value={8} className="bg-blue-500" />
                <MeterGroup.Meter value={10} style={{ backgroundColor: '#EAB308' }} />
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                <MeterGroup.Label>
                    <MeterGroup.Marker color="violet" />
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
                    <MeterGroup.Marker style={{ backgroundColor: '#EAB308' }} />
                    <MeterGroup.Text>Yellow</MeterGroup.Text>
                </MeterGroup.Label>
            </MeterGroup.Labels>
        </MeterGroup.Root>
    );
}
```

### Icon

Icons can be displayed next to the labels instead of the default `MeterGroup.Marker`.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function IconDemo() {
    const values = [
        { label: 'Apps', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', value: 24, icon: 'pi pi-image' },
        { label: 'System', value: 10, icon: 'pi pi-cog' }
    ];

    return (
        <MeterGroup.Root className="max-w-md mx-auto">
            <MeterGroup.Meters>
                {values.map(({ value }, index) => (
                    <MeterGroup.Meter key={`meter_${index}`} value={value} index={index} />
                ))}
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                {values.map(({ value, label, icon }, index) => (
                    <MeterGroup.Label key={`label_${index}`}>
                        <MeterGroup.Icon className={icon} index={index} />
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

The default orientation of the labels is horizontal, and the vertical alternative is available through the `orientation` option.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function LabelDemo() {
    const values = [
        { label: 'Apps', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', value: 24, icon: 'pi pi-image' },
        { label: 'System', value: 10, icon: 'pi pi-cog' }
    ];

    return (
        <MeterGroup.Root className="max-w-md mx-auto">
            <MeterGroup.Labels orientation="vertical">
                {values.map((item, index) => (
                    <MeterGroup.Label key={`label_${index}`}>
                        <MeterGroup.Marker index={index} />
                        <MeterGroup.Text>
                            {item.label} ({item.value}%)
                        </MeterGroup.Text>
                    </MeterGroup.Label>
                ))}
            </MeterGroup.Labels>
            <MeterGroup.Meters>
                {values.map((item, index) => (
                    <MeterGroup.Meter key={`meter_${index}`} value={item.value} index={index} />
                ))}
            </MeterGroup.Meters>
        </MeterGroup.Root>
    );
}
```

### Vertical

Layout of the MeterGroup is configured with the `orientation` property that accepts either `horizontal` or `vertical` as available options.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function VerticalDemo() {
    const values = [
        { label: 'Apps', value: 24 },
        { label: 'Messages', value: 16 },
        { label: 'Media', value: 24 },
        { label: 'System', value: 12 }
    ];

    return (
        <div className="flex justify-center" style={{ height: '360px' }}>
            <MeterGroup.Root orientation="vertical">
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={index} value={item.value} index={index} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels orientation="vertical">
                    {values.map((item, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Marker index={index} />
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

Boundaries are configured with the `min` and `max` values whose defaults are 0 and 100 respectively.

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function MinMaxDemo() {
    const values = [
        { label: 'Apps', value: 16 },
        { label: 'Messages', value: 8 },
        { label: 'Media', value: 24 },
        { label: 'System', value: 10 }
    ];

    const percent = (meter: number) => {
        return Math.round(Math.max(0, Math.min(100, (meter / 200) * 100))) + '%';
    };

    return (
        <MeterGroup.Root max={200} className="max-w-md mx-auto">
            <MeterGroup.Meters>
                {values.map((item, index) => (
                    <MeterGroup.Meter key={`meter_${index}`} value={item.value} index={index} />
                ))}
            </MeterGroup.Meters>
            <MeterGroup.Labels>
                {values.map((item, index) => (
                    <MeterGroup.Label key={`label_${index}`}>
                        <MeterGroup.Marker index={index} />
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

MeterGroup provides templating support for labels, meter items, and content around the meters.

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
        <MeterGroup.Root max={200} aria-valuenow={totalPercent} className="max-w-sm mx-auto">
            <MeterGroup.Labels>
                {values.map((value, index) => (
                    <MeterGroup.Label key={`label_${index}`} className="flex-1">
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
                {values.map((item, index) => (
                    <MeterGroup.Meter
                        key={`meter_${index}`}
                        value={item.value}
                        style={{
                            background: `linear-gradient(to right, ${item.color1}, ${item.color2})`,
                            width: percent(item.value)
                        }}
                    ></MeterGroup.Meter>
                ))}
            </MeterGroup.Meters>
            <div className="flex justify-between mt-4">
                <Button outlined size="small">
                    Manage Storage
                </Button>
                <Button size="small">Update Plan</Button>
            </div>
        </MeterGroup.Root>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/metergroup/features.md#api) for `MeterGroupRoot`, `MeterGroupMeters`, `MeterGroupMeter`, `MeterGroupLabels`, `MeterGroupLabel`, `MeterGroupMarker`, `MeterGroupIcon`, `MeterGroupText` component documentation.

### Hooks

See [Headless API](../../headless/metergroup/features.md#api) for `useMeterGroup` hook documentation.

## Accessibility

See [MeterGroup Primitive](../../primitive/metergroup/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
