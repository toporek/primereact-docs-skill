# InputColor

An unstyled, accessible color picker component with compound composition.

Build fully custom color pickers with complete control over area, sliders, swatch, and input rendering.

```tsx
'use client';

import { EyeDropper } from '@primeicons/react/eye-dropper';
import { parseColor } from 'primereact/inputcolor';
import { InputColor } from 'primereact/inputcolor';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <InputColor.Root defaultValue={parseColor('#276def')}>
            <div className={styles.root}>
                <InputColor.Area className={styles.area}>
                    <InputColor.AreaBackground className={styles.areaBackground} />
                    <InputColor.AreaHandle className={styles.areaHandle} />
                </InputColor.Area>
                <div className={styles.controls}>
                    <div className={styles.sliders}>
                        <InputColor.Slider className={styles.slider}>
                            <InputColor.TransparencyGrid className={styles.transparencyGrid} />
                            <InputColor.SliderTrack className={styles.sliderTrack} />
                            <InputColor.SliderHandle className={styles.sliderHandle} />
                        </InputColor.Slider>
                        <InputColor.Slider className={styles.slider} channel="alpha">
                            <InputColor.TransparencyGrid className={styles.transparencyGrid} />
                            <InputColor.SliderTrack className={styles.sliderTrack} />
                            <InputColor.SliderHandle className={styles.sliderHandle} />
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

- Compound component API with twelve sub-components: `Root`, `Area`, `AreaBackground`, `AreaHandle`, `Slider`, `SliderTrack`, `SliderHandle`, `Swatch`, `SwatchBackground`, `EyeDropper`, `Input`, `TransparencyGrid`
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
        <InputColor.AreaHandle as="div" />
    </InputColor.Area>
    <InputColor.EyeDropper as="a" />
</InputColor.Root>
```

Default elements: `Root`=`div`, `Area`=`div`, `AreaBackground`=`div`, `AreaHandle`=`div`, `Slider`=`SliderRoot`, `SliderTrack`=`SliderTrack`, `SliderHandle`=`SliderHandle`, `Swatch`=`div`, `SwatchBackground`=`div`, `EyeDropper`=`button`, `Input`=`InputText`, `TransparencyGrid`=`div`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance. The instance exposes `inputColor` (root instance with `state.value` and `state.isAreaDragging`).

```tsx
<InputColor.Swatch>{(instance) => <span>{instance.inputColor?.state.value.toString('hex')}</span>}</InputColor.Swatch>
```

## Pass Through

## API

### InputColorRoot

> **API/props table for `InputColorRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                        |
| --------------- | ---------------------------- |
| `data-scope`    | `"inputcolor"`               |
| `data-part`     | `"root"`                     |
| `data-disabled` | Present when disabled        |
| `data-dragging` | Present when area is dragged |

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| area | InputColorRootPassThroughType> | Used to pass attributes to the area's DOM element. |
| areaBackground | InputColorRootPassThroughType> | Used to pass attributes to the area background's DOM element. |
| areaHandle | InputColorRootPassThroughType> | Used to pass attributes to the area handle's DOM element. |
| input | InputColorRootPassThroughType> | Used to pass attributes to the input's DOM element. |
| slider | InputColorRootPassThroughType> | Used to pass attributes to the slider's DOM element. |
| sliderTrack | InputColorRootPassThroughType> | Used to pass attributes to the slider track's DOM element. |
| sliderHandle | InputColorRootPassThroughType> | Used to pass attributes to the slider handle's DOM element. |
| swatch | InputColorRootPassThroughType> | Used to pass attributes to the swatch's DOM element. |
| swatchBackground | InputColorRootPassThroughType> | Used to pass attributes to the swatch background's DOM element. |
| eyeDropper | InputColorRootPassThroughType> | Used to pass attributes to the eye dropper's DOM element. |
| transparencyGrid | InputColorRootPassThroughType> | Used to pass attributes to the transparency grid's DOM element. |

### InputColorArea

> **API/props table for `InputColorArea` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"inputcolor"` |
| `data-part`  | `"area"`       |

**CSS Custom Properties**

The `Area` element sets CSS custom properties on its `style` for gradient rendering and handle positioning.

| CSS Variable             | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `--area-background`      | Solid hue background of the area                |
| `--area-gradient`        | Combined saturation/brightness gradient overlay |
| `--handle-background`    | Current color for the area handle               |
| `--handle-position-top`  | Vertical position of the area handle            |
| `--handle-position-left` | Horizontal position of the area handle          |

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorAreaPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorAreaBackground

> **API/props table for `InputColorAreaBackground` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorAreaBackgroundPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorAreaHandle

> **API/props table for `InputColorAreaHandle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"inputcolor"`  |
| `data-part`  | `"area-handle"` |

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorAreaHandlePassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorSlider

> **API/props table for `InputColorSlider` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                          |
| ------------------ | ------------------------------ |
| `data-scope`       | `"inputcolor"`                 |
| `data-part`        | `"slider"`                     |
| `data-orientation` | `"horizontal"` or `"vertical"` |
| `data-channel`     | The slider channel name        |

**CSS Custom Properties**

The `Slider` element sets CSS custom properties on its `style` for track and handle rendering.

| CSS Variable                 | Description                           |
| ---------------------------- | ------------------------------------- |
| `--slider-background`        | Channel gradient for the slider track |
| `--slider-handle-background` | Current channel color for the handle  |

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorSliderPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorSliderTrack

> **API/props table for `InputColorSliderTrack` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorSliderTrackPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorSliderHandle

> **API/props table for `InputColorSliderHandle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value             |
| ------------ | ----------------- |
| `data-scope` | `"inputcolor"`    |
| `data-part`  | `"slider-handle"` |

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorSliderHandlePassThroughType> | Used to pass attributes to the root's DOM element. |

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

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorSwatchPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorSwatchBackground

> **API/props table for `InputColorSwatchBackground` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorSwatchBackgroundPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorEyeDropper

> **API/props table for `InputColorEyeDropper` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"inputcolor"`  |
| `data-part`  | `"eye-dropper"` |

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorEyeDropperPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorInput

> **API/props table for `InputColorInput` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute      | Value                  |
| -------------- | ---------------------- |
| `data-scope`   | `"inputcolor"`         |
| `data-part`    | `"input"`              |
| `data-channel` | The input channel name |

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorInputPassThroughType> | Used to pass attributes to the root's DOM element. |

### InputColorTransparencyGrid

> **API/props table for `InputColorTransparencyGrid` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Label | Type | Description |
|:------|:------|:------|
| root | InputColorTransparencyGridPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### InputColorArea

#### Screen Reader

The area handle has `role="slider"` with `aria-roledescription="2d slider"`. It includes `aria-label` describing the two axes (e.g., "saturation and brightness"), `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` describing the current channel values.

#### Keyboard Support

| Key           | Function                            |
| ------------- | ----------------------------------- |
| `tab`         | Moves focus to the area handle.     |
| `right arrow` | Moves the area handle to the right. |
| `left arrow`  | Moves the area handle to the left.  |
| `up arrow`    | Moves the area handle up.           |
| `down arrow`  | Moves the area handle down.         |

### InputColorSlider

#### Screen Reader

The slider handle has `role="slider"` with `aria-label`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` describing the current channel value.

#### Keyboard Support

| Key                             | Function                          |
| ------------------------------- | --------------------------------- |
| `tab`                           | Moves focus to the slider handle. |
| `up arrow` \|\| `left arrow`    | Decrements the slider value.      |
| `down arrow` \|\| `right arrow` | Increments the slider value.      |
