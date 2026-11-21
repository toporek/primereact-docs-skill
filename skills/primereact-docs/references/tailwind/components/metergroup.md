# MeterGroup

MeterGroup displays scalar measurements within a known range.

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

### Multiple

Each `MeterGroupMeter` takes a `value` and an optional `color`. Add more meters to stack them in a single bar.

### Color

`color` takes any CSS color value, a design token (`var(--p-violet-500)`), hex, rgb, hsl or a named color. The value is written to the `--p-metergroup-color` CSS variable on the element. You can also style it directly with `className` or `style`.

### Icon

There is no icon part. Drop your own `<i>` or SVG inside `MeterGroupLabel` next to the marker.

### Label

Labels render horizontally by default. Set `orientation="vertical"` on `MeterGroupLabels` to stack them.

### Vertical

`MeterGroup` takes `orientation="horizontal"` (default) or `orientation="vertical"`.

### Min-Max

`min` and `max` set the range. Defaults are 0 and 100.

### Template

MeterGroup provides templating support for labels, meter items, and content around the meters.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/metergroup.md#api) for `MeterGroupRoot`, `MeterGroupMeters`, `MeterGroupMeter`, `MeterGroupLabels`, `MeterGroupLabel`, `MeterGroupMarker`, `MeterGroupText` component documentation.

### Hooks

See [Headless API](../../headless/components/metergroup.md#api) for `useMeterGroup` hook documentation.

### Accessibility

See [MeterGroup Primitive](../../primitive/components/metergroup.md#accessibility) for WAI-ARIA compliance details and keyboard support.
