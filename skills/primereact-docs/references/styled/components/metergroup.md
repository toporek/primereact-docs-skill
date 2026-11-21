# MeterGroup

MeterGroup displays scalar measurements within a known range.

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

### Multiple

Each `MeterGroup.Meter` takes a `value` and an optional `color`. Add more meters to stack them in a single bar.

### Color

`color` takes any CSS color value, a design token (`var(--p-violet-500)`), hex, rgb, hsl or a named color. The value is written to the `--p-metergroup-color` CSS variable on the element. You can also style it directly with `className` or `style`.

### Icon

There is no icon part. Drop your own `<i>` or SVG inside `MeterGroup.Label` next to the marker.

### Label

Labels render horizontally by default. Set `orientation="vertical"` on `MeterGroup.Labels` to stack them.

### Vertical

`MeterGroup.Root` takes `orientation="horizontal"` (default) or `orientation="vertical"`.

### Min-Max

`min` and `max` set the range. Defaults are 0 and 100.

### Template

Each part is just a regular element, so you can drop cards, summaries or buttons around the meters.

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
