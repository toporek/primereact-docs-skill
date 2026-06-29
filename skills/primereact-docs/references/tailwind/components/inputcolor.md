# InputColor

InputColor is a component that allows the user to select a color.

```tsx
'use client';
import { parseColor } from 'primereact/inputcolor';
import { InputColor, InputColorArea, InputColorEyeDropper, InputColorInput, InputColorSlider, InputColorSwatch } from '@/components/ui/inputcolor';
import { InputGroup } from '@/components/ui/inputgroup';
import { Select, SelectList, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { ColorSpace } from 'primereact/inputcolor';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <InputColor format={format === 'hex' ? 'rgba' : format} defaultValue={parseColor('#276def')}>
                <InputColorArea />
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColorSlider />
                        <InputColorSlider channel="alpha" />
                    </div>
                    <InputColorSwatch />
                    <InputColorEyeDropper />
                </div>
                <div className="flex items-center gap-2">
                    <Select
                        value={format}
                        onValueChange={(e: SelectValueChangeEvent) => setFormat(e.value as ColorSpace | 'hex')}
                        options={options}
                        optionLabel="label"
                        optionValue="value"
                        className="w-full md:w-26"
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a format" />
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectPositioner>
                                <SelectPopup>
                                    <SelectList />
                                </SelectPopup>
                            </SelectPositioner>
                        </SelectPortal>
                    </Select>
                    <div className="flex-1">
                        {format === 'hex' && <InputColorInput fluid channel="hex" />}
                        {format === 'oklcha' && <InputColorInput fluid channel="css" />}
                        {format === 'rgba' && (
                            <InputGroup>
                                <InputColorInput fluid channel="red" />
                                <InputColorInput fluid channel="green" />
                                <InputColorInput fluid channel="blue" />
                                <InputColorInput fluid channel="alpha" />
                            </InputGroup>
                        )}
                        {format === 'hsba' && (
                            <InputGroup>
                                <InputColorInput fluid channel="hue" />
                                <InputColorInput fluid channel="saturation" />
                                <InputColorInput fluid channel="brightness" />
                                <InputColorInput fluid channel="alpha" />
                            </InputGroup>
                        )}
                        {format === 'hsla' && (
                            <InputGroup>
                                <InputColorInput fluid channel="hue" />
                                <InputColorInput fluid channel="saturation" />
                                <InputColorInput fluid channel="lightness" />
                                <InputColorInput fluid channel="alpha" />
                            </InputGroup>
                        )}
                    </div>
                </div>
            </InputColor>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/inputcolor.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { InputColor, InputColorArea, InputColorEyeDropper, InputColorInput, InputColorSlider, InputColorSwatch } from '@/components/ui/inputcolor';
```

```tsx
<InputColor>
    <InputColorArea />
    <InputColorSlider />
    <InputColorSlider channel="alpha" />
    <InputColorSwatch />
    <InputColorInput channel="hex" />
    <InputColorEyeDropper />
</InputColor>
```

## Examples

### Basic

Use the `format` prop to change the color space. The `channel` prop of `InputColor.Slider` and `InputColor.Input` can be used to select the channel to control.

```tsx
'use client';
import { parseColor } from 'primereact/inputcolor';
import { InputColor, InputColorArea, InputColorEyeDropper, InputColorInput, InputColorSlider, InputColorSwatch } from '@/components/ui/inputcolor';
import { InputGroup } from '@/components/ui/inputgroup';
import { Select, SelectList, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { ColorSpace } from 'primereact/inputcolor';
import type { SelectValueChangeEvent } from 'primereact/select';
import * as React from 'react';

const options = [
    { label: 'HEX', value: 'hex' },
    { label: 'RGBA', value: 'rgba' },
    { label: 'HSBA', value: 'hsba' },
    { label: 'HSLA', value: 'hsla' },
    { label: 'OKLCHA', value: 'oklcha' }
];

export default function BasicDemo() {
    const [format, setFormat] = React.useState<ColorSpace | 'hex'>('hex');

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <InputColor format={format === 'hex' ? 'rgba' : format} defaultValue={parseColor('#276def')}>
                <InputColorArea />
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColorSlider />
                        <InputColorSlider channel="alpha" />
                    </div>
                    <InputColorSwatch />
                    <InputColorEyeDropper />
                </div>
                <div className="flex items-center gap-2">
                    <Select
                        value={format}
                        onValueChange={(e: SelectValueChangeEvent) => setFormat(e.value as ColorSpace | 'hex')}
                        options={options}
                        optionLabel="label"
                        optionValue="value"
                        className="w-full md:w-26"
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a format" />
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectPositioner>
                                <SelectPopup>
                                    <SelectList />
                                </SelectPopup>
                            </SelectPositioner>
                        </SelectPortal>
                    </Select>
                    <div className="flex-1">
                        {format === 'hex' && <InputColorInput fluid channel="hex" />}
                        {format === 'oklcha' && <InputColorInput fluid channel="css" />}
                        {format === 'rgba' && (
                            <InputGroup>
                                <InputColorInput fluid channel="red" />
                                <InputColorInput fluid channel="green" />
                                <InputColorInput fluid channel="blue" />
                                <InputColorInput fluid channel="alpha" />
                            </InputGroup>
                        )}
                        {format === 'hsba' && (
                            <InputGroup>
                                <InputColorInput fluid channel="hue" />
                                <InputColorInput fluid channel="saturation" />
                                <InputColorInput fluid channel="brightness" />
                                <InputColorInput fluid channel="alpha" />
                            </InputGroup>
                        )}
                        {format === 'hsla' && (
                            <InputGroup>
                                <InputColorInput fluid channel="hue" />
                                <InputColorInput fluid channel="saturation" />
                                <InputColorInput fluid channel="lightness" />
                                <InputColorInput fluid channel="alpha" />
                            </InputGroup>
                        )}
                    </div>
                </div>
            </InputColor>
        </div>
    );
}

```

### Vertical Slider

Use the `orientation` prop to change the orientation of the slider.

```tsx
import { InputColor, InputColorArea, InputColorSlider } from '@/components/ui/inputcolor';

function VerticalSliderDemo() {
    return (
        <div className="flex items-center justify-center">
            <InputColor format="hsba">
                <div className="flex gap-4 max-w-md w-full mx-auto">
                    <InputColorArea className="flex-1" />
                    <InputColorSlider orientation="vertical" />
                    <InputColorSlider channel="saturation" orientation="vertical" />
                    <InputColorSlider channel="brightness" orientation="vertical" />
                    <InputColorSlider channel="alpha" orientation="vertical" />
                </div>
            </InputColor>
        </div>
    );
}

export default VerticalSliderDemo;

```

### Controlled

Use the `value` and `onColorChange` props to control the color.

```tsx
'use client';
import { InputColor, InputColorArea, InputColorEyeDropper, InputColorInput, InputColorSlider, InputColorSwatch } from '@/components/ui/inputcolor';
import { parseColor } from 'primereact/inputcolor';
import type { ColorInstance } from 'primereact/inputcolor';
import type { InputColorRootChangeEvent } from 'primereact/inputcolor';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState<ColorInstance>(parseColor('#000000'));
    const [endValue, setEndValue] = React.useState<ColorInstance>(parseColor('#000000'));

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <div className="text-center font-mono text-sm text-surface-500 mb-4">onValueChange: {value.toString('hex')}</div>
            <div className="text-center font-mono text-sm text-surface-500 mb-4">onValueChangeEnd: {endValue.toString('hex')}</div>
            <InputColor
                value={value}
                onValueChange={(e: InputColorRootChangeEvent) => setValue(e.value)}
                onValueChangeEnd={(e: InputColorRootChangeEvent) => setEndValue(e.value)}
            >
                <InputColorArea />
                <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1 mr-1">
                        <InputColorSlider />
                        <InputColorSlider channel="alpha" />
                    </div>
                    <InputColorSwatch />
                    <InputColorEyeDropper />
                </div>
                <InputColorInput fluid channel="hex" />
            </InputColor>
        </div>
    );
}

```

### Advanced

```tsx
'use client';
import { InputColor, InputColorArea, InputColorEyeDropper, InputColorInput, InputColorSlider, InputColorSwatch } from '@/components/ui/inputcolor';
import { Label } from '@/components/ui/label';
import { Select, SelectList, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { ColorSpace } from 'primereact/inputcolor';
import type { SelectValueChangeEvent } from 'primereact/select';
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
                <Select
                    value={format}
                    onValueChange={(e: SelectValueChangeEvent) => setFormat(e.value as ColorSpace)}
                    options={options}
                    optionLabel="label"
                    optionValue="value"
                    fluid
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a format" />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectPositioner>
                            <SelectPopup>
                                <SelectList />
                            </SelectPopup>
                        </SelectPositioner>
                    </SelectPortal>
                </Select>
                <InputColor format={format}>
                    <InputColorArea />
                    <InputColorSlider />
                    {format === 'rgba' && (
                        <>
                            <InputColorSlider channel="red" />
                            <InputColorSlider channel="green" />
                            <InputColorSlider channel="blue" />
                        </>
                    )}
                    {format === 'hsba' && (
                        <>
                            <InputColorSlider channel="saturation" />
                            <InputColorSlider channel="brightness" />
                        </>
                    )}
                    {format === 'hsla' && (
                        <>
                            <InputColorSlider channel="saturation" />
                            <InputColorSlider channel="lightness" />
                        </>
                    )}
                    <InputColorSlider channel="alpha" />
                    <div className="flex gap-2">
                        <InputColorSwatch />
                        <InputColorEyeDropper />
                        <InputColorInput channel="hex" className="flex-1" />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="red" fluid />
                            <Label className="text-xs text-center">Red</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="green" fluid />
                            <Label className="text-xs text-center">Green</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="blue" fluid />
                            <Label className="text-xs text-center">Blue</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="alpha" fluid />
                            <Label className="text-xs text-center">Alpha</Label>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="hue" fluid />
                            <Label className="text-xs text-center">Hue</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="saturation" fluid />
                            <Label className="text-xs text-center">Saturation</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="brightness" fluid />
                            <Label className="text-xs text-center">Brightness</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="alpha" fluid />
                            <Label className="text-xs text-center">Alpha</Label>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="hue" fluid />
                            <Label className="text-xs text-center">Hue</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="saturation" fluid />
                            <Label className="text-xs text-center">Saturation</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="lightness" fluid />
                            <Label className="text-xs text-center">Lightness</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="alpha" fluid />
                            <Label className="text-xs text-center">Alpha</Label>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="L" fluid />
                            <Label className="text-xs text-center">Lightness</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="C" fluid />
                            <Label className="text-xs text-center">Chroma</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="H" fluid />
                            <Label className="text-xs text-center">Hue</Label>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                            <InputColorInput channel="alpha" fluid />
                            <Label className="text-xs text-center">Alpha</Label>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-xs font-medium text-muted-color">CSS</span>
                        <InputColorInput channel="css" fluid />
                    </div>
                </InputColor>
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

## Accessibility

### InputColorArea

#### Screen Reader Support

`aria-label` is used to describe the component. `aria-roledescription` is used to describe the role of the component. `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext` are used to describe the value of the component.

#### Keyboard Support

| Key           | Function                            |
| ------------- | ----------------------------------- |
| `tab`         | Moves focus to the area handle.     |
| `right arrow` | Moves the area handle to the right. |
| `left arrow`  | Moves the area handle to the left.  |
| `up arrow`    | Moves the area handle to the up.    |
| `down arrow`  | Moves the area handle to the down.  |

### InputColorSlider

#### Screen Reader Support

`aria-label` is used to describe the component. `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext` are used to describe the value of the component.

#### Keyboard Support

| Key                             | Function                          |
| ------------------------------- | --------------------------------- |
| `tab`                           | Moves focus to the slider handle. |
| `up arrow` \|\| `left arrow`    | Decrements the slider handle.     |
| `down arrow` \|\| `right arrow` | Increments the slider handle.     |
