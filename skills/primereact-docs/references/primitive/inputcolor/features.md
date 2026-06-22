# InputColor

An unstyled, accessible color picker component with compound composition.

Build fully custom color pickers with complete control over area, sliders, swatch, and input rendering.

```tsx
'use client';

import { EyeDropper } from '@primeicons/react/eye-dropper';
import { parseColor } from '@primereact/headless/inputcolor';
import { InputColor } from 'primereact/inputcolor';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <InputColor.Root defaultValue={parseColor('#276def')}>
            <div className={styles.root}>
                <InputColor.Area className={styles.area}>
                    <InputColor.AreaBackground className={styles.areaBackground} />
                    <InputColor.AreaThumb className={styles.areaThumb} />
                </InputColor.Area>
                <div className={styles.controls}>
                    <div className={styles.sliders}>
                        <InputColor.Slider className={styles.slider}>
                            <InputColor.TransparencyGrid className={styles.transparencyGrid} />
                            <InputColor.SliderTrack className={styles.sliderTrack} />
                            <InputColor.SliderThumb className={styles.sliderThumb} />
                        </InputColor.Slider>
                        <InputColor.Slider className={styles.slider} channel="alpha">
                            <InputColor.TransparencyGrid className={styles.transparencyGrid} />
                            <InputColor.SliderTrack className={styles.sliderTrack} />
                            <InputColor.SliderThumb className={styles.sliderThumb} />
                        </InputColor.Slider>
                    </div>
                    <InputColor.Swatch className={styles.swatch}>
                        <InputColor.TransparencyGrid className={styles.transparencyGrid} />
                        <InputColor.SwatchBackground className={styles.swatchBackground} />
                    </InputColor.Swatch>
                    <InputColor.EyeDropper className={styles.eyeDropper}>
                        <EyeDropper />
                    </InputColor.EyeDropper>
                </div>
                <InputColor.Input className={styles.input} channel="hex" />
            </div>
        </InputColor.Root>
    );
}
```

## Features

- Compound component API with twelve sub-components: `Root`, `Area`, `AreaBackground`, `AreaThumb`, `Slider`, `SliderTrack`, `SliderThumb`, `Swatch`, `SwatchBackground`, `EyeDropper`, `Input`, `TransparencyGrid`
- 2D color gradient area with pointer capture for smooth picking
- Channel-based sliders for hue, alpha, and other color channels
- Multiple color formats: HSBA, HSLA, RGBA, OKLCHA
- Native EyeDropper API integration

## Usage

```tsx
import { InputColor } from 'primereact/inputcolor';
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
    <InputColor.EyeDropper></InputColor.EyeDropper>
    <InputColor.Input />
</InputColor.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<InputColor.Root as="section">
    <InputColor.Area as="div">
        <InputColor.AreaBackground as="div" />
        <InputColor.AreaThumb as="div" />
    </InputColor.Area>
    <InputColor.EyeDropper as="a" />
</InputColor.Root>
```

Default elements: `Root`=`div`, `Area`=`div`, `AreaBackground`=`div`, `AreaThumb`=`div`, `Slider`=`SliderRoot`, `SliderTrack`=`SliderTrack`, `SliderThumb`=`SliderThumb`, `Swatch`=`div`, `SwatchBackground`=`div`, `EyeDropper`=`button`, `Input`=`InputText`, `TransparencyGrid`=`div`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance. The instance exposes `inputColor` (root instance with `state.value` and `state.isAreaDragging`).

```tsx
<InputColor.Swatch>{(instance) => <span>{instance.inputColor?.state.value.toString('hex')}</span>}</InputColor.Swatch>
```

## Pass Through

**Pass Through example:**

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

export default function InputColorPTDemo() {
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

## API

### InputColorRoot

> **API/props table for `InputColorRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                        |
| --------------- | ---------------------------- |
| `data-scope`    | `"inputcolor"`               |
| `data-part`     | `"root"`                     |
| `data-disabled` | Present when disabled        |
| `data-dragging` | Present when area is dragged |

> **API/props table for `InputColorRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorArea

> **API/props table for `InputColorArea` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"inputcolor"` |
| `data-part`  | `"area"`       |

**CSS Custom Properties**

The `Area` element sets CSS custom properties on its `style` for gradient rendering and thumb positioning.

| CSS Variable            | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `--area-background`     | Solid hue background of the area                |
| `--area-gradient`       | Combined saturation/brightness gradient overlay |
| `--thumb-background`    | Current color for the area thumb                |
| `--thumb-position-top`  | Vertical position of the area thumb             |
| `--thumb-position-left` | Horizontal position of the area thumb           |

> **API/props table for `InputColorArea` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorAreaBackground

> **API/props table for `InputColorAreaBackground` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputColorAreaBackground` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorAreaThumb

> **API/props table for `InputColorAreaThumb` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"inputcolor"` |
| `data-part`  | `"area-thumb"` |

> **API/props table for `InputColorAreaThumb` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorSlider

> **API/props table for `InputColorSlider` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-scope`       | `"inputcolor"`                 |
| `data-part`        | `"slider"`                     |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-channel`     | The slider channel name        |

**CSS Custom Properties**

The `Slider` element sets CSS custom properties on its `style` for track and thumb rendering.

| CSS Variable                | Description                           |
| --------------------------- | ------------------------------------- |
| `--slider-background`       | Channel gradient for the slider track |
| `--slider-thumb-background` | Current channel color for the thumb   |

> **API/props table for `InputColorSlider` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorSliderTrack

> **API/props table for `InputColorSliderTrack` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputColorSliderTrack` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorSliderThumb

> **API/props table for `InputColorSliderThumb` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"inputcolor"`   |
| `data-part`  | `"slider-thumb"` |

> **API/props table for `InputColorSliderThumb` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorSwatch

> **API/props table for `InputColorSwatch` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"inputcolor"` |
| `data-part`  | `"swatch"`     |

**CSS Custom Properties**

The `Swatch` element sets a CSS custom property on its `style` for color rendering.

| CSS Variable          | Description                  |
| --------------------- | ---------------------------- |
| `--swatch-background` | Current color for the swatch |

> **API/props table for `InputColorSwatch` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorSwatchBackground

> **API/props table for `InputColorSwatchBackground` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputColorSwatchBackground` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorEyeDropper

> **API/props table for `InputColorEyeDropper` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"inputcolor"`  |
| `data-part`  | `"eye-dropper"` |

> **API/props table for `InputColorEyeDropper` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorInput

> **API/props table for `InputColorInput` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                  |
| -------------- | ---------------------- |
| `data-scope`   | `"inputcolor"`         |
| `data-part`    | `"input"`              |
| `data-channel` | The input channel name |

> **API/props table for `InputColorInput` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### InputColorTransparencyGrid

> **API/props table for `InputColorTransparencyGrid` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `InputColorTransparencyGrid` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### InputColorArea

#### Screen Reader

The area thumb has `role="slider"` with `aria-roledescription="2d slider"`. It includes `aria-label` describing the two axes (e.g., "saturation and brightness"), `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` describing the current channel values.

#### Keyboard Support

| Key           | Function                           |
| ------------- | ---------------------------------- |
| `tab`         | Moves focus to the area thumb.     |
| `right arrow` | Moves the area thumb to the right. |
| `left arrow`  | Moves the area thumb to the left.  |
| `up arrow`    | Moves the area thumb up.           |
| `down arrow`  | Moves the area thumb down.         |

### InputColorSlider

#### Screen Reader

The slider thumb has `role="slider"` with `aria-label`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` describing the current channel value.

#### Keyboard Support

| Key                             | Function                         |
| ------------------------------- | -------------------------------- |
| `tab`                           | Moves focus to the slider thumb. |
| `up arrow` \|\| `left arrow`    | Decrements the slider value.     |
| `down arrow` \|\| `right arrow` | Increments the slider value.     |
