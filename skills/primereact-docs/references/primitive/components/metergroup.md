# MeterGroup

Unstyled meter group primitive for scalar measurements within a range.

Bring your own markup and styles. MeterGroup handles the math and the data attributes.

```tsx
'use client';
import { MeterGroup } from 'primereact/metergroup';
import styles from './basic-demo.module.css';

const values = [
    { label: 'Apps', value: 16, color: 'var(--p-violet-500)' },
    { label: 'Messages', value: 8, color: 'var(--p-emerald-500)' },
    { label: 'Media', value: 24, color: 'var(--p-amber-500)' },
    { label: 'System', value: 10, color: 'var(--p-blue-500)' }
];

const total = values.reduce((sum, v) => sum + v.value, 0);

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <MeterGroup.Root aria-valuenow={total} className={styles.root}>
                <MeterGroup.Meters className={styles.meters}>
                    {values.map((item) => (
                        <MeterGroup.Meter key={item.label} value={item.value} color={item.color} className={styles.meter} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels className={styles.labels}>
                    {values.map((item) => (
                        <MeterGroup.Label key={item.label} className={styles.label}>
                            <MeterGroup.Marker color={item.color} className={styles.marker} />
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

- Compound parts: `Root`, `Meters`, `Meter`, `Labels`, `Label`, `Marker`, `Text`
- No `index` prop. Target individual rows with `:nth-child(n)` on `[data-part="meter"]`, `[data-part="marker"]` or `[data-part="label"]`
- Percentages computed from `min` / `max`; pass `aria-valuenow` on the root for screen readers
- Color flows through one `--p-metergroup-color` CSS variable. The primitive never picks a color itself
- Horizontal or vertical orientation for both meters and labels

## Usage

```tsx
import { MeterGroup } from 'primereact/metergroup';
```

```tsx
<MeterGroup.Root aria-valuenow={total}>
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

The primitive does not look at the children to total their values. Compute the sum where the data lives and pass it as `aria-valuenow`. When omitted, the attribute is `0`.

## Behavior

### Polymorphic Rendering

Every part takes an `as` prop. Pass an element or another component to swap the rendered tag.

```tsx
<MeterGroup.Root as="section"></MeterGroup.Root>
<MeterGroup.Labels as="ul"></MeterGroup.Labels>
<MeterGroup.Label as="div"></MeterGroup.Label>
```

Defaults: `Root`=`div`, `Meters`=`div`, `Meter`=`div`, `Labels`=`ol`, `Label`=`li`, `Marker`=`span`, `Text`=`span`.

### Per-item styling

No per-child index is emitted. Use `:nth-child(n)` on `[data-part="meter"]`, `[data-part="marker"]` or `[data-part="label"]`. If you really need a stable index attribute, pass it through `pt`: `pt={{ root: { 'data-index': i } }}`.

### Color via CSS variable

`color` on `Meter` and `Marker` accepts any CSS color value. The primitive writes it to `--p-metergroup-color` on the element; the styles layer renders `background: var(--p-metergroup-color, var(--p-primary-color))`. Set the variable on any ancestor to repaint the whole group:

```tsx
<div style={{ '--p-metergroup-color': 'magenta' } as React.CSSProperties}>
    <MeterGroup.Root values={values}>{/* ... */}</MeterGroup.Root>
</div>
```

### Render Function Children

`Root` accepts a render function as its child. The function receives the component instance.

```tsx
<MeterGroup.Root>{(instance) => <span>{instance.props['aria-valuenow']}%</span>}</MeterGroup.Root>
```

## Pass Through

## API

### MeterGroupRoot

> **`MeterGroupRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/metergroup or the installed `@primereact/types`.

| Attribute          | Value                     |
| ------------------ | ------------------------- |
| `data-scope`       | `"metergroup"`            |
| `data-part`        | `"root"`                  |
| `data-orientation` | Current orientation value |

| Label | Type | Description |
|:------|:------|:------|
| root | MeterGroupRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| meters | MeterGroupRootPassThroughType> | Used to pass attributes to the meters' DOM element. |
| meter | MeterGroupRootPassThroughType> | Used to pass attributes to the meter's DOM element. |
| labels | MeterGroupRootPassThroughType> | Used to pass attributes to the labels' DOM element. |
| label | MeterGroupRootPassThroughType> | Used to pass attributes to the label's DOM element. |
| marker | MeterGroupRootPassThroughType> | Used to pass attributes to the label marker's DOM element. |
| text | MeterGroupRootPassThroughType> | Used to pass attributes to the label text's DOM element. |

### MeterGroupMeters

> **`MeterGroupMeters` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/metergroup or the installed `@primereact/types`.

| Attribute          | Value                     |
| ------------------ | ------------------------- |
| `data-scope`       | `"metergroup"`            |
| `data-part`        | `"meters"`                |
| `data-orientation` | Current orientation value |

| Label | Type | Description |
|:------|:------|:------|
| root | MeterGroupMetersPassThroughType> | Used to pass attributes to the root's DOM element. |

### MeterGroupMeter

> **`MeterGroupMeter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/metergroup or the installed `@primereact/types`.

| Attribute          | Value                     |
| ------------------ | ------------------------- |
| `data-scope`       | `"metergroup"`            |
| `data-part`        | `"meter"`                 |
| `data-orientation` | Current orientation value |

| Label | Type | Description |
|:------|:------|:------|
| root | MeterGroupMeterPassThroughType> | Used to pass attributes to the root's DOM element. |

### MeterGroupLabels

> **`MeterGroupLabels` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/metergroup or the installed `@primereact/types`.

| Attribute          | Value                     |
| ------------------ | ------------------------- |
| `data-scope`       | `"metergroup"`            |
| `data-part`        | `"labels"`                |
| `data-orientation` | Current orientation value |

| Label | Type | Description |
|:------|:------|:------|
| root | MeterGroupLabelsPassThroughType> | Used to pass attributes to the root's DOM element. |

### MeterGroupLabel

> **`MeterGroupLabel` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/metergroup or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"label"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | MeterGroupLabelPassThroughType> | Used to pass attributes to the root's DOM element. |

### MeterGroupMarker

> **`MeterGroupMarker` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/metergroup or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"marker"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | MeterGroupMarkerPassThroughType> | Used to pass attributes to the root's DOM element. |

### MeterGroupText

> **`MeterGroupText` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/metergroup or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"metergroup"` |
| `data-part`  | `"text"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | MeterGroupTextPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

The root uses `role="meter"` with `aria-valuemin`, `aria-valuemax` and `aria-valuenow`. `aria-valuenow` defaults to `0`; override it with the native attribute on `Root`. Label the group with `aria-labelledby` or `aria-label`.

### Keyboard Support

Nothing inside MeterGroup is focusable or interactive.
