# MeterGroup

An unstyled meter group component for visualizing scalar measurements within a range.

Build fully custom meter visualizations with complete control over layout and styling.

```tsx
'use client';
import { MeterGroup } from 'primereact/metergroup';
import styles from './basic-demo.module.css';

const values = [
    { label: 'Apps', value: 16 },
    { label: 'Messages', value: 8 },
    { label: 'Media', value: 24 },
    { label: 'System', value: 10 }
];

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <MeterGroup.Root className={styles.root}>
                <MeterGroup.Meters className={styles.meters}>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={index} value={item.value} index={index} className={styles.meter} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels className={styles.labels}>
                    {values.map((item, index) => (
                        <MeterGroup.Label key={index} className={styles.label}>
                            <MeterGroup.Marker index={index} className={styles.marker} />
                            <MeterGroup.Text className={styles.text}>
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

## Features

- Compound component API with sub-components: `Root`, `Meters`, `Meter`, `Labels`, `Label`, `Marker`, `Icon`, `Text`
- Built-in color palette withundefinednamed colors that cycle automatically via `index`
- Percentage calculation relative to configurable `min`/`max` bounds
- Horizontal and vertical orientation for both meters and labels

## Usage

```tsx
import { MeterGroup } from 'primereact/metergroup';
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

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<MeterGroup.Root as="section"></MeterGroup.Root>
<MeterGroup.Labels as="ul"></MeterGroup.Labels>
<MeterGroup.Label as="div"></MeterGroup.Label>
```

Default elements: `Root`=`div`, `Meters`=`div`, `Meter`=`div`, `Labels`=`ol`, `Label`=`li`, `Marker`=`span`, `Icon`=`Icon`, `Text`=`span`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<MeterGroup.Root>{(instance) => <span>Total: {instance.state.totalPercent}%</span>}</MeterGroup.Root>
```

## Pass Through

**Pass Through example:**

```tsx
import { MeterGroup } from '@primereact/ui/metergroup';

export default function MeterGroupPTDemo() {
    const value = { label: 'Space used', value: 15, color: 'var(--p-primary-color)' };

    return (
        <MeterGroup.Root className="w-[300px]">
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

## API

### MeterGroupRoot

> **API/props table for `MeterGroupRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                     |
| ------------------ | ------------------------- |
| `data-scope`       | `"metergroup"`            |
| `data-part`        | `"root"`                  |
| `data-orientation` | Current orientation value |

> **API/props table for `MeterGroupRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MeterGroupMeters

> **API/props table for `MeterGroupMeters` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"meters"`     |

> **API/props table for `MeterGroupMeters` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MeterGroupMeter

> **API/props table for `MeterGroupMeter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"meter"`      |

> **API/props table for `MeterGroupMeter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MeterGroupLabels

> **API/props table for `MeterGroupLabels` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"labels"`     |

> **API/props table for `MeterGroupLabels` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MeterGroupLabel

> **API/props table for `MeterGroupLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"label"`      |

> **API/props table for `MeterGroupLabel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MeterGroupMarker

> **API/props table for `MeterGroupMarker` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"marker"`     |

> **API/props table for `MeterGroupMarker` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MeterGroupIcon

> **API/props table for `MeterGroupIcon` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"icon"`       |

> **API/props table for `MeterGroupIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MeterGroupText

> **API/props table for `MeterGroupText` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"text"`       |

> **API/props table for `MeterGroupText` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

MeterGroup component uses `meter` role in addition to the `aria-valuemin`, `aria-valuemax` and `aria-valuenow` attributes. Value to describe the component can be defined using `aria-labelledby` prop.

### Keyboard Support

Component does not include any interactive elements.
