# Knob

Knob is a form component to define number inputs with a dial.

## Usage

```tsx
import { Knob } from '@primereact/ui/knob';
```

```tsx
<Knob.Root>
    <Knob.Range />
    <Knob.Value />
    <Knob.Text />
</Knob.Root>
```

## Examples

### Basic

A circular knob for selecting a numeric value within a defined range.

### Min/Max

Boundaries are configured with the `min` and `max` properties. Defaults are `0` and `100`.

### Step

Step factor is `1` by default and can be customized with the `step` property.

### Template

Use `Knob.Text` with a render function to customize displayed content.

### Stroke

The border size is specified with the `strokeWidth` property as a number in pixels.

### Size

Diameter of the knob is defined in pixels using the `size` property.

### Color

Each of the three components (`Knob.Range`, `Knob.Value`, `Knob.Text`) accepts a `color` prop to customize appearance. In addition, `strokeWidth` determines the stroke width of range and value sections.

### Reactive

Knob can be controlled with custom controls as well.

### ReadOnly

When `readOnly` is present, value cannot be edited.

### Disabled

When `disabled` is present, a visual hint is applied to indicate that the knob cannot be interacted with.

## Related

### Sub-Components

See [Knob Primitive](../../primitive/components/knob.md#api) for the full sub-component API.

### Hooks

See [useKnob](../../headless/components/knob.md#api) for the headless hook API.

### Accessibility

See [Knob Primitive](../../primitive/components/knob.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-knob | Class name of the root element |
| p-knob-range | Class name of the range element |
| p-knob-value | Class name of the value element |
| p-knob-text | Class name of the text element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| knob.transition.duration | --p-knob-transition-duration | Transition duration of root |
| knob.focus.ring.width | --p-knob-focus-ring-width | Focus ring width of root |
| knob.focus.ring.style | --p-knob-focus-ring-style | Focus ring style of root |
| knob.focus.ring.color | --p-knob-focus-ring-color | Focus ring color of root |
| knob.focus.ring.offset | --p-knob-focus-ring-offset | Focus ring offset of root |
| knob.focus.ring.shadow | --p-knob-focus-ring-shadow | Focus ring shadow of root |
| knob.value.background | --p-knob-value-background | Background of value |
| knob.range.background | --p-knob-range-background | Background of range |
| knob.text.color | --p-knob-text-color | Color of text |
| knob.text.font.size | --p-knob-text-font-size | Font size of text |
| knob.text.font.weight | --p-knob-text-font-weight | Font weight of text |
