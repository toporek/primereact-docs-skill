# InputColor

InputColor is a component that allows the user to select a color.

## Usage

```tsx
import { InputColor } from '@primereact/ui/inputcolor';
```

```tsx
<InputColor.Root>
    <InputColor.Area>
        <InputColor.AreaBackground />
        <InputColor.AreaHandle />
    </InputColor.Area>
    <InputColor.Slider>
        <InputColor.TransparencyGrid />
        <InputColor.SliderTrack />
        <InputColor.SliderHandle />
    </InputColor.Slider>
    <InputColor.Swatch>
        <InputColor.TransparencyGrid />
        <InputColor.SwatchBackground />
    </InputColor.Swatch>
    <InputColor.EyeDropper>
        <EyeDropperIcon />
    </InputColor.EyeDropper>
    <InputColor.Input />
</InputColor.Root>
```

`InputColor.EyeDropper` uses the native EyeDropper API, which is not supported in some browsers (e.g. Firefox, Safari).

## Examples

### Basic

Select a color via a visual picker interface.

### With Popover

Use the `InputColor` inside a `Popover` to put the `InputColor` to the top of the component.

### Vertical Slider

Use the `orientation` prop to change the orientation of the slider.

### Controlled

Use the `value` and `onColorChange` props to control the color.

### Advanced

## colorManager

### Color class

The `Color` class is the base class for all color classes. It provides the basic functionality for all color classes.

- `clone()`: Clones the color.
- `toString(format)`: Converts the color to a string.
- `toFormat(format)`: Converts the color to a specific format.
- `toJSON()`: Converts the color to a JSON object.
- `getChannelRange(channel)`: Returns the range of the channel.
- `getFormat()`: Returns the format of the color.
- `getChannels()`: Returns the channels of the color.
- `getChannelValue(channel)`: Returns the value of the channel.
- `getColorAxes(xyChannels)`: Returns the axes of the color.
- `incChannelValue(channel, step)`: Increments the value of the channel by the step.
- `decChannelValue(channel, step)`: Decrements the value of the channel by the step.
- `withChannelValue(channel, value)`: Returns a new color with the value of the channel changed.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputcolor.md#api) for sub-component props, state, exposes, and data attributes.

### Hooks

See [Headless API](../../headless/components/inputcolor.md#api) for the `useInputColor` hook interface.

### Accessibility

See [InputColor Primitive](../../primitive/components/inputcolor.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-input-color-area | Class name of the area element |
| p-input-color-area-handle | Class name of the area handle element |
| p-input-color-area-background | Class name of the area background element |
| p-input-color-slider | Class name of the slider element |
| p-input-color-slider-handle | Class name of the slider handle element |
| p-input-color-slider-track | Class name of the slider track element |
| p-input-color-transparency-grid | Class name of the transparency grid element |
| p-input-color-swatch | Class name of the swatch element |
| p-input-color-swatch-background | Class name of the swatch background element |
| p-input-color-input | Class name of the input element |
| p-input-color-eye-dropper | Class name of the eye dropper element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputcolor.border.color | --p-inputcolor-border-color | Shared inset border color (area background, slider track, swatch background) |
| inputcolor.area.border.radius | --p-inputcolor-area-border-radius | Border radius of area |
| inputcolor.slider.border.radius | --p-inputcolor-slider-border-radius | Border radius of slider |
| inputcolor.slider.size | --p-inputcolor-slider-size | Size of slider (horizontal height / vertical width) |
| inputcolor.handle.size | --p-inputcolor-handle-size | Size of handle (area and slider) |
| inputcolor.handle.border.color | --p-inputcolor-handle-border-color | Border color of handle |
| inputcolor.handle.border.width | --p-inputcolor-handle-border-width | Border width of handle |
| inputcolor.handle.shadow | --p-inputcolor-handle-shadow | Shadow of handle |
| inputcolor.handle.transition.duration | --p-inputcolor-handle-transition-duration | Transition duration of handle |
| inputcolor.handle.focus.ring.border.width | --p-inputcolor-handle-focus-ring-border-width | Focus ring border width of handle |
| inputcolor.handle.focus.ring.border.color | --p-inputcolor-handle-focus-ring-border-color | Focus ring border color of handle |
| inputcolor.handle.focus.ring.outline.width | --p-inputcolor-handle-focus-ring-outline-width | Focus ring outline width of handle |
| inputcolor.handle.focus.ring.outline.color | --p-inputcolor-handle-focus-ring-outline-color | Focus ring outline color of handle |
| inputcolor.handle.focus.ring.outline.offset | --p-inputcolor-handle-focus-ring-outline-offset | Focus ring outline offset of handle |
| inputcolor.transparency.grid.color | --p-inputcolor-transparency-grid-color | Color of transparency grid (checker pattern) |
| inputcolor.transparency.grid.background | --p-inputcolor-transparency-grid-background | Background of transparency grid (checker base) |
| inputcolor.transparency.grid.tile.size | --p-inputcolor-transparency-grid-tile-size | Tile size of transparency grid |
| inputcolor.swatch.size | --p-inputcolor-swatch-size | Size of swatch |
| inputcolor.swatch.border.radius | --p-inputcolor-swatch-border-radius | Border radius of swatch |
