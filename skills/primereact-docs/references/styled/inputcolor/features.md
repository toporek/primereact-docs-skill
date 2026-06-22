# InputColor

InputColor is a component that allows the user to select a color.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { EyeDropper } from '@primeicons/react/eye-dropper';
import { parseColor } from '@primereact/headless/inputcolor';
import { InputColor, type ColorSpace } from '@primereact/ui/inputcolor';
import { InputGroup } from '@primereact/ui/inputgroup';
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
                    <InputColor.AreaThumb />
                </InputColor.Area>
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColor.Slider>
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderThumb />
                        </InputColor.Slider>
                        <InputColor.Slider channel="alpha">
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderThumb />
                        </InputColor.Slider>
                    </div>
                    <InputColor.Swatch>
                        <InputColor.TransparencyGrid />
                        <InputColor.SwatchBackground />
                    </InputColor.Swatch>
                    <InputColor.EyeDropper iconOnly severity="secondary" variant="outlined">
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
                        {format === 'hex' && <InputColor.Input fluid channel="hex" />}
                        {format === 'oklcha' && <InputColor.Input fluid channel="css" />}
                        {format === 'rgba' && (
                            <InputGroup.Root>
                                <InputColor.Input fluid channel="red" />
                                <InputColor.Input fluid channel="green" />
                                <InputColor.Input fluid channel="blue" />
                                <InputColor.Input fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsba' && (
                            <InputGroup.Root>
                                <InputColor.Input fluid channel="hue" />
                                <InputColor.Input fluid channel="saturation" />
                                <InputColor.Input fluid channel="brightness" />
                                <InputColor.Input fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsla' && (
                            <InputGroup.Root>
                                <InputColor.Input fluid channel="hue" />
                                <InputColor.Input fluid channel="saturation" />
                                <InputColor.Input fluid channel="lightness" />
                                <InputColor.Input fluid channel="alpha" />
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
        <InputColor.AreaThumb />
    </InputColor.Area>
    <InputColor.Slider>
        <InputColor.TransparencyGrid />
        <InputColor.SliderTrack />
        <InputColor.SliderThumb />
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

## Examples

### Basic

Select a color via a visual picker interface.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { EyeDropper } from '@primeicons/react/eye-dropper';
import { parseColor } from '@primereact/headless/inputcolor';
import { InputColor, type ColorSpace } from '@primereact/ui/inputcolor';
import { InputGroup } from '@primereact/ui/inputgroup';
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
                    <InputColor.AreaThumb />
                </InputColor.Area>
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColor.Slider>
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderThumb />
                        </InputColor.Slider>
                        <InputColor.Slider channel="alpha">
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderThumb />
                        </InputColor.Slider>
                    </div>
                    <InputColor.Swatch>
                        <InputColor.TransparencyGrid />
                        <InputColor.SwatchBackground />
                    </InputColor.Swatch>
                    <InputColor.EyeDropper iconOnly severity="secondary" variant="outlined">
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
                        {format === 'hex' && <InputColor.Input fluid channel="hex" />}
                        {format === 'oklcha' && <InputColor.Input fluid channel="css" />}
                        {format === 'rgba' && (
                            <InputGroup.Root>
                                <InputColor.Input fluid channel="red" />
                                <InputColor.Input fluid channel="green" />
                                <InputColor.Input fluid channel="blue" />
                                <InputColor.Input fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsba' && (
                            <InputGroup.Root>
                                <InputColor.Input fluid channel="hue" />
                                <InputColor.Input fluid channel="saturation" />
                                <InputColor.Input fluid channel="brightness" />
                                <InputColor.Input fluid channel="alpha" />
                            </InputGroup.Root>
                        )}
                        {format === 'hsla' && (
                            <InputGroup.Root>
                                <InputColor.Input fluid channel="hue" />
                                <InputColor.Input fluid channel="saturation" />
                                <InputColor.Input fluid channel="lightness" />
                                <InputColor.Input fluid channel="alpha" />
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
import { InputColor } from '@primereact/ui/inputcolor';
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
                                    <InputColor.AreaThumb />
                                </InputColor.Area>
                                <InputColor.Slider>
                                    <InputColor.TransparencyGrid />
                                    <InputColor.SliderTrack />
                                    <InputColor.SliderThumb />
                                </InputColor.Slider>
                                <InputColor.Slider channel="alpha">
                                    <InputColor.TransparencyGrid />
                                    <InputColor.SliderTrack />
                                    <InputColor.SliderThumb />
                                </InputColor.Slider>
                                <div className="flex items-center gap-2">
                                    <InputColor.Input channel="hex" className="flex-1" />
                                    <InputColor.EyeDropper iconOnly severity="secondary" variant="outlined">
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
                        <InputColor.AreaThumb />
                    </InputColor.Area>
                    <InputColor.Slider orientation="vertical">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderThumb />
                    </InputColor.Slider>
                    <InputColor.Slider channel="saturation" orientation="vertical">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderThumb />
                    </InputColor.Slider>
                    <InputColor.Slider channel="brightness" orientation="vertical">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderThumb />
                    </InputColor.Slider>
                    <InputColor.Slider channel="alpha" orientation="vertical">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderThumb />
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
import { parseColor } from '@primereact/headless/inputcolor';
import { InputColor, type ColorInstance, type InputColorRootChangeEvent } from '@primereact/ui/inputcolor';
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
                    <InputColor.AreaThumb />
                </InputColor.Area>
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColor.Slider>
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderThumb />
                        </InputColor.Slider>
                        <InputColor.Slider channel="alpha">
                            <InputColor.TransparencyGrid />
                            <InputColor.SliderTrack />
                            <InputColor.SliderThumb />
                        </InputColor.Slider>
                    </div>
                    <InputColor.Swatch>
                        <InputColor.TransparencyGrid />
                        <InputColor.SwatchBackground />
                    </InputColor.Swatch>
                    <InputColor.EyeDropper iconOnly severity="secondary" variant="outlined">
                        <EyeDropper />
                    </InputColor.EyeDropper>
                </div>
                <InputColor.Input fluid channel="hex" />
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
import { SelectValueChangeEvent } from 'primereact/select';
import { InputColor, type ColorSpace } from '@primereact/ui/inputcolor';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputGroup } from '@primereact/ui/inputgroup';
import { Label } from '@primereact/ui/label';
import { Select } from '@primereact/ui/select';
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
                        <InputColor.AreaThumb />
                    </InputColor.Area>
                    <InputColor.Slider>
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderThumb />
                    </InputColor.Slider>
                    {format === 'rgba' && (
                        <>
                            <InputColor.Slider channel="red">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderThumb />
                            </InputColor.Slider>
                            <InputColor.Slider channel="green">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderThumb />
                            </InputColor.Slider>
                            <InputColor.Slider channel="blue">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderThumb />
                            </InputColor.Slider>
                        </>
                    )}
                    {format === 'hsba' && (
                        <>
                            <InputColor.Slider channel="saturation">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderThumb />
                            </InputColor.Slider>
                            <InputColor.Slider channel="brightness">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderThumb />
                            </InputColor.Slider>
                        </>
                    )}

                    {format === 'hsla' && (
                        <>
                            <InputColor.Slider channel="saturation">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderThumb />
                            </InputColor.Slider>
                            <InputColor.Slider channel="lightness">
                                <InputColor.TransparencyGrid />
                                <InputColor.SliderTrack />
                                <InputColor.SliderThumb />
                            </InputColor.Slider>
                        </>
                    )}

                    <InputColor.Slider channel="alpha">
                        <InputColor.TransparencyGrid />
                        <InputColor.SliderTrack />
                        <InputColor.SliderThumb />
                    </InputColor.Slider>
                    <div className="flex gap-2">
                        <InputColor.Swatch>
                            <InputColor.TransparencyGrid />
                            <InputColor.SwatchBackground />
                        </InputColor.Swatch>
                        <InputColor.EyeDropper iconOnly severity="secondary" variant="outlined">
                            <EyeDropper />
                        </InputColor.EyeDropper>
                        <InputColor.Input channel="hex" className="flex-1" />
                    </div>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="red" type="text" size="small" />
                            <Label htmlFor="in_label">Red</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="green" type="text" size="small" />
                            <Label htmlFor="in_label">Green</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="blue" type="text" size="small" />
                            <Label htmlFor="in_label">Blue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="hue" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="saturation" type="text" size="small" />
                            <Label htmlFor="in_label">Saturation</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="brightness" type="text" size="small" />
                            <Label htmlFor="in_label">Brightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="hue" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="saturation" type="text" size="small" />
                            <Label htmlFor="in_label">Saturation</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="lightness" type="text" size="small" />
                            <Label htmlFor="in_label">Lightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>
                    <InputGroup.Root>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="L" type="text" size="small" />
                            <Label htmlFor="in_label">Lightness</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="C" type="text" size="small" />
                            <Label htmlFor="in_label">Chroma</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="H" type="text" size="small" />
                            <Label htmlFor="in_label">Hue</Label>
                        </FloatLabel>
                        <FloatLabel variant="in">
                            <InputColor.Input channel="alpha" type="text" size="small" />
                            <Label htmlFor="in_label">Alpha</Label>
                        </FloatLabel>
                    </InputGroup.Root>

                    <InputGroup.Root>
                        <InputGroup.Addon>CSS</InputGroup.Addon>
                        <InputColor.Input channel="css" type="text" fluid />
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

## API

### Sub-Components

See [Primitive API](../../primitive/inputcolor/features.md#api) for sub-component props, state, exposes, and data attributes.

### Hooks

See [Headless API](../../headless/inputcolor/features.md#api) for the `useInputColor` hook interface.

## Accessibility

See [InputColor Primitive](../../primitive/inputcolor/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
