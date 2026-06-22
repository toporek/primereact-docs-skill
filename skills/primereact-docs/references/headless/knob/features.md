# useKnob

Hook that manages circular dial state, SVG arc computation, and keyboard/mouse/touch interaction.

```tsx
'use client';
import { useKnob } from '@primereact/headless/knob';

export default function BasicDemo() {
    const { rootProps, svgProps, rangeProps, valueProps, textProps, state } = useKnob({ defaultValue: 50 });

    return (
        <div className="flex justify-center">
            <div {...rootProps} className="inline-flex">
                <svg
                    {...svgProps}
                    aria-label="Volume"
                    className="outline-none focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full cursor-pointer"
                >
                    <path {...rangeProps} stroke="var(--p-content-border-color)" className="fill-none" />
                    <path {...valueProps} stroke="var(--p-primary-color)" className="fill-none" />
                    <text {...textProps} className="text-[1rem] fill-surface-700 dark:fill-surface-0">
                        {state.value}
                    </text>
                </svg>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-4,8-12}
import { useKnob } from '@primereact/headless/knob';

const { rootProps, svgProps, rangeProps, valueProps, textProps, state } = useKnob({
    defaultValue: 50
});

return (
    <div {...rootProps}>
        <svg {...svgProps}>
            <path {...rangeProps} />
            <path {...valueProps} />
            <text {...textProps}>{state.value}</text>
        </svg>
    </div>
);
```

`useKnob` manages numeric value state with SVG arc path computation and pointer/keyboard interaction — see [Primitive](../../primitive/knob/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `svgProps`, `rangeProps`, `valueProps`, `textProps`)
- Computes SVG arc paths (`rangePath`, `valuePath`) from value, min, max
- Configurable `min`, `max`, `step`, `size`, and `strokeWidth`
- Mouse drag, touch drag, and click-to-set interaction
- Full keyboard navigation (arrows, Home, End, PageUp, PageDown)

## Behavior

### Default Value

Use `defaultValue` to set the initial value.

```tsx
const knob = useKnob({ defaultValue: 50 });
```

### Controlled

Use `value` and `onValueChange` for full programmatic control.

```tsx
const [value, setValue] = React.useState(50);
const knob = useKnob({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

The `onValueChange` callback receives `{ originalEvent, value }` where `value` is the new numeric value.

### Min / Max

Set `min` and `max` to define value boundaries. Defaults are `0` and `100`.

```tsx
const knob = useKnob({ min: -50, max: 50, defaultValue: 0 });
```

### Step

Set `step` to control the increment/decrement factor. Default is `1`.

```tsx
const knob = useKnob({ step: 10, defaultValue: 50 });
```

### Size and Stroke

Set `size` to control the knob diameter in pixels. Set `strokeWidth` to control the arc stroke width.

```tsx
const knob = useKnob({ size: 200, strokeWidth: 8, defaultValue: 50 });
```

### Colors

Set `rangeColor`, `valueColor`, and `textColor` to customize the SVG arc and text colors.

```tsx
const knob = useKnob({
    rangeColor: '#e0e0e0',
    valueColor: '#22c55e',
    textColor: '#22c55e',
    defaultValue: 75
});
```

### Disabled

Set `disabled` to prevent all interaction. `svgProps` sets `tabIndex` to `-1` and `aria-disabled` to `true`.

```tsx
const knob = useKnob({ disabled: true, defaultValue: 50 });
```

### Read Only

Set `readOnly` to prevent value changes while keeping the knob focusable.

```tsx
const knob = useKnob({ readOnly: true, defaultValue: 50 });
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="knob"` and a `data-part` attribute. State-dependent attributes are added automatically.

```css
[data-scope='knob'][data-part='range'] {
    fill: none;
    stroke: #e0e0e0;
    stroke-linecap: round;
}

[data-scope='knob'][data-part='value'] {
    fill: none;
    stroke: var(--p-primary-color);
    stroke-linecap: round;
}

[data-scope='knob'][data-part='text'] {
    font-size: 1rem;
    fill: var(--p-text-color);
}

[data-scope='knob'][data-part='root'][data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useKnob

> **API/props table for `useKnob` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Knob Primitive](../../primitive/knob/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
