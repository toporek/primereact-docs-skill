# useInputColor

Hook that manages color selection state, 2D area interaction, channel sliders, and accessible color input behavior.

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
