# InputColor

InputColor is a component that allows the user to select a color.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { EyeDropper } from '@primeicons/react/eye-dropper';
import { parseColor, type ColorSpace } from '@primereact/ui/inputcolor';
import { Button } from '@primereact/ui/button';
import { InputColor } from '@primereact/ui/inputcolor';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';
const options = [
    { label: 'HEX', value: 'hex' },
    { label: 'RGBA', value: 'rgba' },
    { label: 'HSBA', value: 'hsba' },
    { label: 'HSLA', value: 'hsla' },
    { label: 'OKLCHA', value: 'oklcha' }
];

export default function Preview() {
    const [format, setFormat] = React.useState<ColorSpace | 'hex'>('hex');

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <InputColor.Root format={format === 'hex' ? 'rgba' : format} defaultValue={parseColor('#276def')}>
                <InputColor.Area>
                    <InputColor.AreaBackground />
                    <InputColor.AreaHandle />
                </InputColor.Area>
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColor.Slider>
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderHandle />
                        </InputColor.Slider>
                        <InputColor.Slider channel="alpha">
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderHandle />
                        </InputColor.Slider>
                    </div>
                    <InputColor.Swatch>
                        <InputColor.TransparencyGrid />
                        <InputColor.SwatchBackground />
                    </InputColor.Swatch>
                    <InputColor.EyeDropper as={Button} iconOnly severity="secondary" variant="outlined">
                        <EyeDropper />
                    </InputColor.EyeDropper>
                </div>
                <div className="flex items-center gap-2">
                    <Select.Root
                        value={format}
                        onValueChange={(e: SelectValueChangeEvent) => setFormat(e.value as ColorSpace | 'hex')}
                        options={options}
                        optionLabel="label"
                        optionValue="value"
                    >
                        <Select.Trigger>
                            <Select.Value placeholder="Select a format" />
                            <Select.Indicator>
                                <ChevronDown />
                            </Select.Indicator>
                        </Select.Trigger>
                        <Select.Portal>
                            <Select.Positioner>
                                <Select.Popup>
                                    <Select.List />
                                </Select.Popup>
                            </Select.Positioner>
                        </Select.Portal>
                    </Select.Root>
                    <div className="flex-1">
                        {format === 'hex' && <InputColor.Input as={InputText} fluid channel="hex" />}
                        {format === 'oklcha' && <InputColor.Input as={InputText} fluid channel="css" />}
                        {format === 'rgba' && (
                            <InputGroup.Root>
                                <InputColor.Input as={InputText} fluid channel="red" />
                                <InputColor.Input as={InputText} fluid channel="green" />
                                <InputColor.Input as={InputText} fluid channel="blue" />
                                <InputColor.Input as={InputText} fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsba' && (
                            <InputGroup.Root>
                                <InputColor.Input as={InputText} fluid channel="hue" />
                                <InputColor.Input as={InputText} fluid channel="saturation" />
                                <InputColor.Input as={InputText} fluid channel="brightness" />
                                <InputColor.Input as={InputText} fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsla' && (
                            <InputGroup.Root>
                                <InputColor.Input as={InputText} fluid channel="hue" />
                                <InputColor.Input as={InputText} fluid channel="saturation" />
                                <InputColor.Input as={InputText} fluid channel="lightness" />
                                <InputColor.Input as={InputText} fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                    </div>
                </div>
            </InputColor.Root>
        </div>
    );
}

```

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

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { EyeDropper } from '@primeicons/react/eye-dropper';
import { parseColor, type ColorSpace } from '@primereact/ui/inputcolor';
import { Button } from '@primereact/ui/button';
import { InputColor } from '@primereact/ui/inputcolor';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';
const options = [
    { label: 'HEX', value: 'hex' },
    { label: 'RGBA', value: 'rgba' },
    { label: 'HSBA', value: 'hsba' },
    { label: 'HSLA', value: 'hsla' },
    { label: 'OKLCHA', value: 'oklcha' }
];

export default function Example() {
    const [format, setFormat] = React.useState<ColorSpace | 'hex'>('hex');

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <InputColor.Root format={format === 'hex' ? 'rgba' : format} defaultValue={parseColor('#276def')}>
                <InputColor.Area>
                    <InputColor.AreaBackground />
                    <InputColor.AreaHandle />
                </InputColor.Area>
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColor.Slider>
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderHandle />
                        </InputColor.Slider>
                        <InputColor.Slider channel="alpha">
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderHandle />
                        </InputColor.Slider>
                    </div>
                    <InputColor.Swatch>
                        <InputColor.TransparencyGrid />
                        <InputColor.SwatchBackground />
                    </InputColor.Swatch>
                    <InputColor.EyeDropper as={Button} iconOnly severity="secondary" variant="outlined">
                        <EyeDropper />
                    </InputColor.EyeDropper>
                </div>
                <div className="flex items-center gap-2">
                    <Select.Root
                        value={format}
                        onValueChange={(e: SelectValueChangeEvent) => setFormat(e.value as ColorSpace | 'hex')}
                        options={options}
                        optionLabel="label"
                        optionValue="value"
                        className="w-full md:w-26"
                    >
                        <Select.Trigger>
                            <Select.Value placeholder="Select a format" />
                            <Select.Indicator>
                                <ChevronDown />
                            </Select.Indicator>
                        </Select.Trigger>
                        <Select.Portal>
                            <Select.Positioner>
                                <Select.Popup>
                                    <Select.List />
                                </Select.Popup>
                            </Select.Positioner>
                        </Select.Portal>
                    </Select.Root>
                    <div className="flex-1">
                        {format === 'hex' && <InputColor.Input as={InputText} fluid channel="hex" />}
                        {format === 'oklcha' && <InputColor.Input as={InputText} fluid channel="css" />}
                        {format === 'rgba' && (
                            <InputGroup.Root>
                                <InputColor.Input as={InputText} fluid channel="red" />
                                <InputColor.Input as={InputText} fluid channel="green" />
                                <InputColor.Input as={InputText} fluid channel="blue" />
                                <InputColor.Input as={InputText} fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsba' && (
                            <InputGroup.Root>
                                <InputColor.Input as={InputText} fluid channel="hue" />
                                <InputColor.Input as={InputText} fluid channel="saturation" />
                                <InputColor.Input as={InputText} fluid channel="brightness" />
                                <InputColor.Input as={InputText} fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsla' && (
                            <InputGroup.Root>
                                <InputColor.Input as={InputText} fluid channel="hue" />
                                <InputColor.Input as={InputText} fluid channel="saturation" />
                                <InputColor.Input as={InputText} fluid channel="lightness" />
                                <InputColor.Input as={InputText} fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                    </div>
                </div>
            </InputColor.Root>
        </div>
    );
}

```

### With Popover

Use the `InputColor` inside a `Popover` to put the `InputColor` to the top of the component.

```tsx
import { EyeDropper } from '@primeicons/react/eye-dropper';
import { Button } from '@primereact/ui/button';
import { InputColor } from '@primereact/ui/inputcolor';
import { InputText } from '@primereact/ui/inputtext';
import { Popover } from '@primereact/ui/popover';

function PopoverDemo() {
    return (
        <div className="flex items-center justify-center">
            <InputColor.Root defaultColor="#0099ff">
                <Popover.Root>
                    <Popover.Trigger>
                        <InputColor.Swatch>
                            <InputColor.TransparencyGrid />
                            <InputColor.SwatchBackground />
                        </InputColor.Swatch>
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Positioner sideOffset={12} side="left" align="start">
                            <Popover.Popup className="w-72 p-3 space-y-3">
                                <Popover.Arrow />
                                <InputColor.Area>
                                    <InputColor.AreaBackground />
                                    <InputColor.AreaHandle />
                                </InputColor.Area>
                                <InputColor.Slider>
                                    <InputColor.TransparencyGrid />
                                    <InputColor.SliderTrack />
                                    <InputColor.SliderHandle />
                                </InputColor.Slider>
                                <InputColor.Slider channel="alpha">
                                    <InputColor.TransparencyGrid />
                                    <InputColor.SliderTrack />
                                    <InputColor.SliderHandle />
                                </InputColor.Slider>
                                <div className="flex items-center gap-2">
                                    <InputColor.Input as={InputText} channel="hex" className="flex-1" />
                                    <InputColor.EyeDropper as={Button} iconOnly severity="secondary" variant="outlined">
                                        <EyeDropper />
                                    </InputColor.EyeDropper>
                                </div>
                            </Popover.Popup>
                        </Popover.Positioner>
                    </Popover.Portal>
                </Popover.Root>
            </InputColor.Root>
        </div>
    );
}

export default PopoverDemo;

```

### Vertical Slider

Use the `orientation` prop to change the orientation of the slider.

```tsx
import { InputColor } from '@primereact/ui/inputcolor';

function VerticalSliderDemo() {
    return (
        <div className="flex items-center justify-center">
            <InputColor.Root format="hsba">
                <div className="flex gap-4 max-w-md w-full mx-auto">
                    <InputColor.Area className="flex-1">
                        <InputColor.AreaBackground />
                        <InputColor.AreaHandle />
                    </InputColor.Area>
                    <InputColor.Slider orientation="vertical">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderHandle />
                    </InputColor.Slider>
                    <InputColor.Slider channel="saturation" orientation="vertical">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderHandle />
                    </InputColor.Slider>
                    <InputColor.Slider channel="brightness" orientation="vertical">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderHandle />
                    </InputColor.Slider>
                    <InputColor.Slider channel="alpha" orientation="vertical">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderHandle />
                    </InputColor.Slider>
                </div>
            </InputColor.Root>
        </div>
    );
}

export default VerticalSliderDemo;

```

### Controlled

Use the `value` and `onColorChange` props to control the color.

```tsx
'use client';
import { EyeDropper } from '@primeicons/react/eye-dropper';
import { parseColor, type ColorInstance } from '@primereact/ui/inputcolor';
import { Button } from '@primereact/ui/button';
import { InputColor, type InputColorRootChangeEvent } from '@primereact/ui/inputcolor';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';
export default function ControlledDemo() {
    const [value, setValue] = React.useState<ColorInstance>(parseColor('#000000'));
    const [endValue, setEndValue] = React.useState<ColorInstance>(parseColor('#000000'));

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <div className="text-center font-mono text-sm text-surface-500 mb-4">onValueChange: {value.toString('hex')}</div>
            <div className="text-center font-mono text-sm text-surface-500 mb-4">onValueChangeEnd: {endValue.toString('hex')}</div>
            <InputColor.Root
                value={value}
                onValueChange={(e: InputColorRootChangeEvent) => setValue(e.value)}
                onValueChangeEnd={(e: InputColorRootChangeEvent) => setEndValue(e.value)}
            >
                <InputColor.Area>
                    <InputColor.AreaBackground />
                    <InputColor.AreaHandle />
                </InputColor.Area>
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColor.Slider>
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderHandle />
                        </InputColor.Slider>
                        <InputColor.Slider channel="alpha">
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderHandle />
                        </InputColor.Slider>
                    </div>
                    <InputColor.Swatch>
                        <InputColor.TransparencyGrid />
                        <InputColor.SwatchBackground />
                    </InputColor.Swatch>
                    <InputColor.EyeDropper as={Button} iconOnly severity="secondary" variant="outlined">
                        <EyeDropper />
                    </InputColor.EyeDropper>
                </div>
                <InputColor.Input as={InputText} fluid channel="hex" />
            </InputColor.Root>
        </div>
    );
}

```

### Advanced

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { EyeDropper } from '@primeicons/react/eye-dropper';
import { type ColorSpace } from '@primereact/ui/inputcolor';
import { Button } from '@primereact/ui/button';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputColor } from '@primereact/ui/inputcolor';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import { Select } from '@primereact/ui/select';
import { SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const options = [
    { label: 'RGBA', value: 'rgba' },
    { label: 'HSBA', value: 'hsba' },
    { label: 'HSLA', value: 'hsla' },
    { label: 'OKLCHA', value: 'oklcha' }
];

export default function AdvancedDemo() {
    const [format, setFormat] = React.useState<ColorSpace>('hsla');

    return (
        <div>
            <div className="max-w-xs mx-auto space-y-3">
                <Select.Root
                    value={format}
                    onValueChange={(e: SelectValueChangeEvent) => setFormat(e.value as ColorSpace)}
                    options={options}
                    optionLabel="label"
                    optionValue="value"
                    fluid
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Select a format" />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List />
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
                <InputColor.Root format={format}>
                    <InputColor.Area>
                        <InputColor.AreaBackground />
                        <InputColor.AreaHandle />
                    </InputColor.Area>
                    <InputColor.Slider>
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderHandle />
                    </InputColor.Slider>
                    {format === 'rgba' && (
                        <>
                            <InputColor.Slider channel="red">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderHandle />
                            </InputColor.Slider>
                            <InputColor.Slider channel="green">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderHandle />
                            </InputColor.Slider>
                            <InputColor.Slider channel="blue">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderHandle />
                            </InputColor.Slider>
                        </>
                    )}
                    {format === 'hsba' && (
                        <>
                            <InputColor.Slider channel="saturation">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderHandle />
                            </InputColor.Slider>
                            <InputColor.Slider channel="brightness">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderHandle />
                            </InputColor.Slider>
                        </>
                    )}

                    {format === 'hsla' && (
                        <>
                            <InputColor.Slider channel="saturation">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderHandle />
                            </InputColor.Slider>
                            <InputColor.Slider channel="lightness">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderHandle />
                            </InputColor.Slider>
                        </>
                    )}

                    <InputColor.Slider channel="alpha">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderHandle />
                    </InputColor.Slider>
                    <div className="flex gap-2">
                        <InputColor.Swatch>
                            <InputColor.TransparencyGrid />
                            <InputColor.SwatchBackground />
                        </InputColor.Swatch>
                        <InputColor.EyeDropper as={Button} iconOnly severity="secondary" variant="outlined">
                            <EyeDropper />
                        </InputColor.EyeDropper>
                        <InputColor.Input as={InputText} channel="hex" className="flex-1" />
                    </div>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="red" type="text" size="small" />
                            <Label htmlFor="in_label">Red</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="green" type="text" size="small" />
                            <Label htmlFor="in_label">Green</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="blue" type="text" size="small" />
                            <Label htmlFor="in_label">Blue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="hue" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="saturation" type="text" size="small" />
                            <Label htmlFor="in_label">Saturation</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="brightness" type="text" size="small" />
                            <Label htmlFor="in_label">Brightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="hue" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="saturation" type="text" size="small" />
                            <Label htmlFor="in_label">Saturation</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="lightness" type="text" size="small" />
                            <Label htmlFor="in_label">Lightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="L" type="text" size="small" />
                            <Label htmlFor="in_label">Lightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="C" type="text" size="small" />
                            <Label htmlFor="in_label">Chroma</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="H" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input as={InputText} channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>

                    <InputGroup.Root>
                        <InputGroup.Addon>CSS</InputGroup.Addon>
                        <InputColor.Input as={InputText} channel="css" type="text" fluid />
                    </InputGroup.Root>
                </InputColor.Root>
            </div>
        </div>
    );
}

```

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
