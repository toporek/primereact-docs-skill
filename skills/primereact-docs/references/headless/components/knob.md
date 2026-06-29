# useKnob

Hook that manages circular dial state, SVG arc computation, and keyboard/mouse/touch interaction.

```tsx
'use client';
import * as React from 'react';
import { useKnob } from '@primereact/headless/knob';

export default function BasicDemo() {
    const { rootProps, svgProps, rangeProps, valueProps, textProps, state } = useKnob({ defaultValue: 50 });

    return (
        <div className="flex justify-center">
            <div {...rootProps} className="inline-flex">
                <svg
                    {...(svgProps as React.SVGProps<SVGSVGElement>)}
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

```tsx
import { useKnob } from '@primereact/headless/knob';
```

```tsx
const { rootProps, svgProps, rangeProps, valueProps, textProps, state } = useKnob({
    defaultValue: 50
});

<div {...rootProps}>
    <svg {...svgProps}>
        <path {...rangeProps} />
        <path {...valueProps} />
        <text {...textProps}>{state.value}</text>
    </svg>
</div>;
```

`useKnob` manages numeric value state with SVG arc path computation and pointer/keyboard interaction. See [Primitive](../../primitive/components/knob.md) for a component-based API.

## Features

- **SVG arc geometry**, `rangePath` and `valuePath` strings are computed from `value`, `min`, `max`, `size`, and `strokeWidth`
- **Pointer and keyboard input**, mouse drag, touch drag, click-to-set, plus arrows, Home/End, PageUp/PageDown
- **Configurable geometry**, `size`, `strokeWidth`, `rangeColor`, `valueColor`, and `textColor` control the visual output
- **Range and step**, `min`, `max`, and `step` define the value domain with precise rounding
- **Disabled and read-only modes**, interaction blocked via `disabled` or locked to display via `readOnly`
- **Reactive state**, `state.value` exposes the current number for custom labels or badges

## Working with callbacks

### Controlled value

Use `value` and `onValueChange` for full programmatic control. The callback receives `{ originalEvent, value }`.

```tsx
const [value, setValue] = React.useState(50);

const knob = useKnob({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Custom range and step

Set `min`, `max`, and `step` to define a non-default value domain, for example, a bipolar control centered on zero.

```tsx
const knob = useKnob({
    min: -50,
    max: 50,
    step: 5,
    defaultValue: 0
});
```

### Styling the arc

Override `size`, `strokeWidth`, and the three color props to match your design system without writing custom SVG.

```tsx
const knob = useKnob({
    size: 200,
    strokeWidth: 8,
    rangeColor: '#e0e0e0',
    valueColor: '#22c55e',
    textColor: '#22c55e',
    defaultValue: 75
});
```

### Read-only displays

Use `readOnly` to show a value without allowing changes while keeping the knob focusable and announced to assistive tech.

```tsx
const knob = useKnob({ readOnly: true, defaultValue: cpuUsage });
```

## Styling with data attributes

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

> **`useKnob` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/knob or the installed `@primereact/types`.

## Accessibility

Arrow keys step the value, Home/End jump to min/max, and mouse/touch drag updates the angle. See [Primitive](../../primitive/components/knob.md#accessibility) for full WAI-ARIA compliance details.
