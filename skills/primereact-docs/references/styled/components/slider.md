# Slider

Slider is a component to provide input with a drag handle.

## Usage

```tsx
import { Slider } from '@primereact/ui/slider';
```

```tsx
<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Handle />
</Slider.Root>
```

## Examples

### Basic

Select a numeric value by dragging a handle along a track.

### Step

Size of each movement is defined with the `step` property.

### Range

Slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

### Handles Distance

### Vertical

Default layout of slider is `horizontal`, use `orientation` property for the alternative `vertical` mode.

### Disabled

When `disabled` is present, the element cannot be edited and focused.

### Controlled

### Value Change

### Custom

### Filter

Image filter implementation using multiple sliders.

## Related

### Sub-Components

See [Slider Primitive](../../primitive/components/slider.md#api) for the sub-component API reference.

### Hooks

See [useSlider](../../headless/components/slider.md#api) for the headless hook API reference.

### Accessibility

See [Slider Primitive](../../primitive/components/slider.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-slider | Class name of the root element |
| p-slider-range | Class name of the range element |
| p-slider-handle | Class name of the handle element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| slider.transition.duration | --p-slider-transition-duration | Transition duration of root |
| slider.track.background | --p-slider-track-background | Background of track |
| slider.track.border.radius | --p-slider-track-border-radius | Border radius of track |
| slider.track.size | --p-slider-track-size | Size of track |
| slider.range.background | --p-slider-range-background | Background of range |
| slider.handle.width | --p-slider-handle-width | Width of handle |
| slider.handle.height | --p-slider-handle-height | Height of handle |
| slider.handle.border.radius | --p-slider-handle-border-radius | Border radius of handle |
| slider.handle.background | --p-slider-handle-background | Background of handle |
| slider.handle.hover.background | --p-slider-handle-hover-background | Hover background of handle |
| slider.handle.content.border.radius | --p-slider-handle-content-border-radius | Content border radius of handle |
| slider.handle.content.background | --p-slider-handle-content-background | Background of handle |
| slider.handle.content.hover.background | --p-slider-handle-content-hover-background | Content hover background of handle |
| slider.handle.content.width | --p-slider-handle-content-width | Content width of handle |
| slider.handle.content.height | --p-slider-handle-content-height | Content height of handle |
| slider.handle.content.shadow | --p-slider-handle-content-shadow | Content shadow of handle |
| slider.handle.focus.ring.width | --p-slider-handle-focus-ring-width | Focus ring width of handle |
| slider.handle.focus.ring.style | --p-slider-handle-focus-ring-style | Focus ring style of handle |
| slider.handle.focus.ring.color | --p-slider-handle-focus-ring-color | Focus ring color of handle |
| slider.handle.focus.ring.offset | --p-slider-handle-focus-ring-offset | Focus ring offset of handle |
| slider.handle.focus.ring.shadow | --p-slider-handle-focus-ring-shadow | Focus ring shadow of handle |
