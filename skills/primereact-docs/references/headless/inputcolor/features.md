# useInputColor

Hook that manages color selection state, 2D area interaction, channel sliders, and accessible color input behavior.

```tsx
'use client';

import { EyeDropper } from '@primeicons/react/eye-dropper';
import { parseColor, useInputColor } from '@primereact/headless/inputcolor';
import { useSlider } from '@primereact/headless/slider';

function ChannelSlider({
    channel,
    getSliderProps
}: {
    channel: 'hue' | 'alpha';
    getSliderProps: ReturnType<typeof useInputColor>['getSliderProps'];
}) {
    const { style, ...sliderOptions } = getSliderProps({ channel });
    const slider = useSlider(sliderOptions);
    const values = slider.range() ? (slider.state.value as number[]) : [slider.state.value as number];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { style: _trackStyle, ...trackRest } = slider.trackProps;
    const { style: rootStyle, ...rootRest } = slider.rootProps;

    return (
        <div {...rootRest} style={{ ...rootStyle, ...style }} className="relative h-4 rounded-sm">
            {channel === 'alpha' && (
                <div className="absolute inset-0 rounded-[inherit] bg-white bg-[conic-gradient(#eee_0deg,#eee_25%,transparent_0deg,transparent_50%,#eee_0deg,#eee_75%,transparent_0deg)] bg-[length:0.5rem_0.5rem]" />
            )}
            <div
                {...trackRest}
                className="absolute inset-0 rounded-[inherit] [background:var(--slider-background)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset] z-[2]"
            >
                <span {...slider.getRangeProps()} className="[background:var(--slider-thumb-background)]" />
            </div>
            {values.map((_, index) => {
                const { style: thumbStyle, ...thumbRest } = slider.getThumbProps(index);

                return (
                    <span
                        key={index}
                        {...thumbRest}
                        style={{ ...thumbStyle, top: '50%', translate: '-50% -50%' }}
                        className="absolute z-[3] size-4 rounded-full border-2 border-white [background:var(--slider-thumb-background)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <input {...slider.getHiddenInputProps(index)} />
                    </span>
                );
            })}
        </div>
    );
}

export default function BasicDemo() {
    const { areaProps, areaThumbProps, swatchProps, eyeDropperProps, getSliderProps, getInputProps } = useInputColor({
        defaultValue: parseColor('#276def')
    });

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <div {...areaProps} className="relative aspect-[4/3] rounded-md min-w-[16rem] cursor-crosshair">
                <div className="[background:var(--area-gradient)] size-full rounded-[inherit] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset]" />
                <div
                    {...areaThumbProps}
                    className="size-4 absolute -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    style={{ background: 'var(--thumb-background)', top: 'var(--thumb-position-top)', left: 'var(--thumb-position-left)' }}
                />
            </div>
            <div className="flex items-center gap-2">
                <div className="flex-1 space-y-1">
                    <ChannelSlider channel="hue" getSliderProps={getSliderProps} />
                    <ChannelSlider channel="alpha" getSliderProps={getSliderProps} />
                </div>
                <div {...swatchProps} className="relative size-10 rounded-sm">
                    <div className="absolute inset-0 rounded-[inherit] bg-white bg-[conic-gradient(#eee_0deg,#eee_25%,transparent_0deg,transparent_50%,#eee_0deg,#eee_75%,transparent_0deg)] bg-[length:0.5rem_0.5rem]" />
                    <div className="absolute inset-0 rounded-[inherit] [background:var(--swatch-background)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset] z-[2]" />
                </div>
                <button
                    {...eyeDropperProps}
                    className="inline-flex items-center justify-center size-10 rounded-md border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary"
                >
                    <EyeDropper className="size-4" />
                </button>
            </div>
            <div className="flex items-center gap-2">
                <input
                    {...getInputProps({ channel: 'hex' })}
                    className="w-full rounded-md border border-surface-200 dark:border-surface-700 bg-transparent px-3 py-2 text-sm text-surface-700 dark:text-surface-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary"
                />
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-8,10-12}
import { parseColor, useInputColor } from '@primereact/headless/inputcolor';

const inputColor = useInputColor({ defaultValue: parseColor('#ff0000') });

return (
    <div {...inputColor.rootProps}>
        <div {...inputColor.areaProps}>
            <div {...inputColor.areaThumbProps}></div>
        </div>
        <div {...inputColor.swatchProps}></div>
        <button {...inputColor.eyeDropperProps}></button>
        <input {...inputColor.getInputProps({ channel: 'hex' })} />
    </div>
);
```

`useInputColor` manages a full color picker with a 2D gradient area, channel sliders, text inputs, and an EyeDropper button — see [Primitive](../../primitive/inputcolor/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `areaProps`, `areaThumbProps`, `swatchProps`, `eyeDropperProps`, `sliderThumbProps`)
- Dynamic prop getters (`getSliderProps`, `getInputProps`) for channel-specific sliders and inputs
- 2D color area with pointer capture for smooth dragging and keyboard arrow navigation
- Multiple color formats: `hsba`, `hsla`, `rgba`, `oklcha`
- Built-in `parseColor` utility for creating `ColorInstance` values from hex strings

## Behavior

### Default Value

Use `defaultValue` with `parseColor` to set the initial color.

```tsx
import { parseColor, useInputColor } from '@primereact/headless/inputcolor';

const inputColor = useInputColor({ defaultValue: parseColor('#276def') });
```

### Controlled

Use `value` and `onValueChange` for full programmatic control.

```tsx
const [color, setColor] = React.useState(parseColor('#276def'));
const inputColor = useInputColor({
    value: color,
    onValueChange: (e) => setColor(e.value)
});
```

### Format

Set `format` to choose the color space. Supported values are `'hsba'`, `'hsla'`, `'rgba'`, and `'oklcha'`.

```tsx
const inputColor = useInputColor({ format: 'rgba', defaultValue: parseColor('#276def') });
```

### Channel Sliders

Use `getSliderProps` to create a slider for any color channel. The returned props integrate with `useSlider` for the actual slider rendering.

```tsx
const { style, ...sliderOptions } = inputColor.getSliderProps({ channel: 'hue' });
const slider = useSlider(sliderOptions);
```

For an alpha channel slider:

```tsx
const { style, ...sliderOptions } = inputColor.getSliderProps({ channel: 'alpha' });
```

Set `orientation` to `'vertical'` for a vertical slider.

```tsx
const sliderProps = inputColor.getSliderProps({ channel: 'hue', orientation: 'vertical' });
```

### Channel Inputs

Use `getInputProps` to create a text or number input for a specific channel. Available channels include `'hex'`, `'css'`, `'red'`, `'green'`, `'blue'`, `'hue'`, `'saturation'`, `'brightness'`, `'lightness'`, and `'alpha'`.

```tsx
<input {...inputColor.getInputProps({ channel: 'hex' })} />
<input {...inputColor.getInputProps({ channel: 'red' })} />
<input {...inputColor.getInputProps({ channel: 'alpha' })} />
```

### EyeDropper

Spread `eyeDropperProps` on a button to open the native browser EyeDropper API. The picked color is automatically committed.

```tsx
<button {...inputColor.eyeDropperProps}>Pick color</button>
```

### Disabled

Set `disabled` to prevent all interaction on the area, sliders, and inputs.

```tsx
const inputColor = useInputColor({ disabled: true, defaultValue: parseColor('#276def') });
```

### Value Change End

Use `onValueChangeEnd` to receive a callback when pointer interaction ends (area drag release, slider drop, or input blur/enter).

```tsx
const inputColor = useInputColor({
    defaultValue: parseColor('#276def'),
    onValueChangeEnd: (e) => console.log('Final color:', e.color)
});
```

### Using `state` for Custom UI

The hook exposes `state.value` (the current `ColorInstance`) and `state.isAreaDragging` for conditional rendering.

```tsx
const inputColor = useInputColor({ defaultValue: parseColor('#276def') });

<span>{inputColor.state.value.toString('hex')}</span>;
{
    inputColor.state.isAreaDragging && <span>Dragging...</span>;
}
```

### CSS Custom Properties

`areaProps.style`, `getSliderProps().style`, and `swatchProps.style` set CSS custom properties for color rendering and thumb positioning.

| Variable                    | Source                   | Description                                     |
| --------------------------- | ------------------------ | ----------------------------------------------- |
| `--area-background`         | `areaProps.style`        | Solid hue background of the area                |
| `--area-gradient`           | `areaProps.style`        | Combined saturation/brightness gradient overlay |
| `--thumb-background`        | `areaProps.style`        | Current color for the area thumb                |
| `--thumb-position-top`      | `areaProps.style`        | Vertical position of the area thumb             |
| `--thumb-position-left`     | `areaProps.style`        | Horizontal position of the area thumb           |
| `--slider-background`       | `getSliderProps().style` | Channel gradient for the slider track           |
| `--slider-thumb-background` | `getSliderProps().style` | Current channel color for the slider thumb      |
| `--swatch-background`       | `swatchProps.style`      | Current color for the swatch                    |

```css
[data-scope='inputcolor'][data-part='area'] {
    background: var(--area-background);
}

[data-part='area-thumb'] {
    top: var(--thumb-position-top);
    left: var(--thumb-position-left);
    background: var(--thumb-background);
}

.slider-track {
    background: var(--slider-background);
}

.slider-thumb {
    background: var(--slider-thumb-background);
}

[data-part='swatch'] {
    background: var(--swatch-background);
}
```

### Custom Styling with Data Attributes

Prop objects include data attributes for state-based styling.

```css
[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
}

[data-dragging] {
    cursor: grabbing;
}
```

## API

### useInputColor

> **API/props table for `useInputColor` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [InputColor Primitive](../../primitive/inputcolor/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
