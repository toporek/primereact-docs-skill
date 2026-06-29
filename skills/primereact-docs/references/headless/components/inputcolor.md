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
                className="absolute inset-0 rounded-[inherit] [background:var(--px-slider-background)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset] z-[2]"
            >
                <span {...slider.getRangeProps()} className="[background:var(--px-slider-handle-background)]" />
            </div>
            {values.map((_, index) => {
                const { style: handleStyle, ...handleRest } = slider.getHandleProps(index);

                return (
                    <span
                        key={index}
                        {...handleRest}
                        style={{ ...handleStyle, top: '50%', translate: '-50% -50%' }}
                        className="absolute z-[3] size-4 rounded-full border-2 border-white [background:var(--px-slider-handle-background)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <input {...slider.getHiddenInputProps(index)} />
                    </span>
                );
            })}
        </div>
    );
}

export default function BasicDemo() {
    const { areaProps, areaHandleProps, swatchProps, eyeDropperProps, getSliderProps, getInputProps } = useInputColor({
        defaultValue: parseColor('#276def')
    });

    return (
        <div className="max-w-xs mx-auto space-y-3">
            <div {...areaProps} className="relative aspect-[4/3] rounded-md min-w-[16rem] cursor-crosshair">
                <div className="[background:var(--px-area-gradient)] size-full rounded-[inherit] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset]" />
                <div
                    {...areaHandleProps}
                    className="size-4 absolute -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    style={{
                        background: 'var(--px-handle-background)',
                        top: 'var(--px-handle-position-top)',
                        left: 'var(--px-handle-position-left)'
                    }}
                />
            </div>
            <div className="flex items-center gap-2">
                <div className="flex-1 space-y-1">
                    <ChannelSlider channel="hue" getSliderProps={getSliderProps} />
                    <ChannelSlider channel="alpha" getSliderProps={getSliderProps} />
                </div>
                <div {...swatchProps} className="relative size-10 rounded-sm">
                    <div className="absolute inset-0 rounded-[inherit] bg-white bg-[conic-gradient(#eee_0deg,#eee_25%,transparent_0deg,transparent_50%,#eee_0deg,#eee_75%,transparent_0deg)] bg-[length:0.5rem_0.5rem]" />
                    <div className="absolute inset-0 rounded-[inherit] [background:var(--px-swatch-background)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset] z-[2]" />
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

```tsx
import { parseColor, useInputColor } from '@primereact/headless/inputcolor';
```

```tsx
const inputColor = useInputColor({ defaultValue: parseColor('#ff0000') });

<div {...inputColor.rootProps}>
    <div {...inputColor.areaProps}>
        <div {...inputColor.areaHandleProps}></div>
    </div>
    <div {...inputColor.swatchProps}></div>
    <button {...inputColor.eyeDropperProps}></button>
    <input {...inputColor.getInputProps({ channel: 'hex' })} />
</div>;
```

`useInputColor` manages a full color picker with a 2D gradient area, channel sliders, text inputs, and an EyeDropper button. See [Primitive](../../primitive/components/inputcolor.md) for a component-based API.

## Features

- **Complete picker surface**, returns ready-to-spread props for `root`, `area`, `areaHandle`, `swatch`, `eyeDropper`, and `sliderHandle`
- **Dynamic channel props**, `getSliderProps` and `getInputProps` build props for any individual color channel
- **2D area interaction**, pointer capture for smooth dragging plus arrow-key navigation across saturation/brightness
- **Multiple color spaces**, `hsba`, `hsla`, `rgba`, and `oklcha` formats with shared `ColorInstance` value type
- **CSS custom properties**, style objects expose gradients and handle positions so rendering stays fully CSS-driven
- **Color parsing**, companion `parseColor` utility constructs `ColorInstance` values from hex strings

## Working with callbacks

### Controlled color

Pass `value` and `onValueChange` to own the selected color externally, required for syncing with form state or remote data.

```tsx
const [color, setColor] = React.useState(parseColor('#276def'));

useInputColor({
    value: color,
    onValueChange: (e) => setColor(e.value)
});
```

### Commit on interaction end

`onValueChangeEnd` fires when pointer interaction stops (area release, slider drop, or input commit). Use it for expensive work such as persisting to a server.

```tsx
useInputColor({
    defaultValue: parseColor('#276def'),
    onValueChangeEnd: (e) => saveColor(e.color)
});
```

### Channel sliders via useSlider

`getSliderProps` returns options you pass into `useSlider` to render a slider for any channel. Set `orientation: 'vertical'` when laying out sliders on the side of the area.

```tsx
const { style, ...sliderOptions } = inputColor.getSliderProps({ channel: 'hue' });
const slider = useSlider(sliderOptions);
```

### Channel inputs

`getInputProps` produces props for text or number inputs bound to a specific channel, useful for hex entry alongside RGB fields.

```tsx
<input {...inputColor.getInputProps({ channel: 'hex' })} />
<input {...inputColor.getInputProps({ channel: 'red' })} />
<input {...inputColor.getInputProps({ channel: 'alpha' })} />
```

### EyeDropper integration

Spread `eyeDropperProps` on a button to open the native browser EyeDropper API, the picked color is committed automatically.

```tsx
<button {...inputColor.eyeDropperProps}>Pick color</button>
```

### Reading live state

`state.value` exposes the current `ColorInstance` and `state.isAreaDragging` lets you render drag-time UI.

```tsx
<span>{inputColor.state.value.toString('hex')}</span>;
{
    inputColor.state.isAreaDragging && <span>Dragging...</span>;
}
```

## Styling with data attributes

`areaProps.style`, `getSliderProps().style`, and `swatchProps.style` expose CSS custom properties for gradients and handle positioning.

| Variable                     | Source                   | Description                                     |
| ---------------------------- | ------------------------ | ----------------------------------------------- |
| `--area-background`          | `areaProps.style`        | Solid hue background of the area                |
| `--area-gradient`            | `areaProps.style`        | Combined saturation/brightness gradient overlay |
| `--handle-background`        | `areaProps.style`        | Current color for the area handle               |
| `--handle-position-top`      | `areaProps.style`        | Vertical position of the area handle            |
| `--handle-position-left`     | `areaProps.style`        | Horizontal position of the area handle          |
| `--slider-background`        | `getSliderProps().style` | Channel gradient for the slider track           |
| `--slider-handle-background` | `getSliderProps().style` | Current channel color for the slider handle     |
| `--swatch-background`        | `swatchProps.style`      | Current color for the swatch                    |

State-based attributes such as `data-disabled` and `data-dragging` are emitted on the relevant parts.

```css
[data-scope='inputcolor'][data-part='area'] {
    background: var(--area-background);
}

[data-part='area-handle'] {
    top: var(--px-handle-position-top);
    left: var(--px-handle-position-left);
    background: var(--px-handle-background);
}

.slider-track {
    background: var(--px-slider-background);
}

.slider-handle {
    background: var(--px-slider-handle-background);
}

[data-part='swatch'] {
    background: var(--px-swatch-background);
}

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

> **`useInputColor` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/inputcolor or the installed `@primereact/types`.

## Accessibility

Space opens the picker, Arrow keys navigate the color grid, and Enter confirms selection. See [Primitive](../../primitive/components/inputcolor.md#accessibility) for full WAI-ARIA compliance details.
