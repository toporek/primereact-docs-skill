# useSlider

Hook that manages slider state, pointer dragging, and accessible range input behavior.

```tsx
'use client';
import { useSlider } from '@primereact/headless/slider';

export default function BasicDemo() {
    const slider = useSlider({ defaultValue: 50 });
    const values = slider.range() ? (slider.state.value as number[]) : [slider.state.value as number];

    return (
        <div className="max-w-md mx-auto py-4">
            <div {...slider.rootProps} className="flex items-center h-5 cursor-pointer" style={{ ...slider.rootProps.style, touchAction: 'none' }}>
                <div
                    {...slider.trackProps}
                    className="relative h-[3px] rounded-md bg-surface-200 dark:bg-surface-700"
                    style={slider.trackProps.style}
                >
                    <span {...slider.getRangeProps()} className="block h-full rounded-md bg-primary" />
                </div>
                {values.map((_, index) => (
                    <span
                        key={index}
                        {...slider.getHandleProps(index)}
                        className="flex items-center justify-center size-5 rounded-full bg-surface-200 dark:bg-surface-700 cursor-grab before:block before:size-4 before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.08),0px_1px_1px_0px_rgba(0,0,0,0.14)] has-focus-visible:outline-1 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary"
                    >
                        <input {...slider.getHiddenInputProps(index)} />
                    </span>
                ))}
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useSlider } from '@primereact/headless/slider';
```

```tsx
const slider = useSlider({ defaultValue: 50 });

<div {...slider.rootProps}>
    <div {...slider.trackProps}>
        <span {...slider.getRangeProps()} />
    </div>
    <span {...slider.getHandleProps(0)}>
        <input {...slider.getHiddenInputProps(0)} />
    </span>
</div>;
```

`useSlider` manages value state, pointer tracking, and keyboard input for single or range sliders. See [Primitive](../../primitive/components/slider.md) for a component-based API.

## Features

- **Single and range modes**, passing an array value automatically enables range mode with per-handle props
- **Pointer and keyboard input**, drag tracking plus arrow keys, Home/End, and PageUp/PageDown with precise step rounding
- **Handle distance constraints**, `minStepsBetweenHandles` prevents range handles from crossing or overlapping
- **Orientation aware**, horizontal and vertical layouts share the same props and state
- **Reactive state**, `state.value` and `state.isDragging` are available for custom rendering like tooltips or live badges
- **Deferred commits**, `onValueChangeEnd` fires only when the user releases the pointer, ideal for expensive side effects

## Working with callbacks

### Controlled value

Use `value` and `onValueChange` for full programmatic control. In range mode both `value` and `defaultValue` are arrays.

```tsx
const [value, setValue] = React.useState(50);

const slider = useSlider({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Deferring expensive work with `onValueChangeEnd`

`onValueChange` fires on every step, use `onValueChangeEnd` to run network requests or heavy computations only after the user releases.

```tsx
const slider = useSlider({
    defaultValue: 50,
    onValueChange: (e) => setPreview(e.value),
    onValueChangeEnd: (e) => saveToServer(e.value)
});
```

### Range with minimum distance

Combine an array `defaultValue` with `minStepsBetweenHandles` to keep handles spaced.

```tsx
const slider = useSlider({
    defaultValue: [20, 80],
    minStepsBetweenHandles: 10
});

slider.range() &&
    [0, 1].map((index) => (
        <span key={index} {...slider.getHandleProps(index)}>
            <input {...slider.getHiddenInputProps(index)} />
        </span>
    ));
```

### Using live state for custom UI

`state.value` and `state.isDragging` let you render tooltips or highlight styling without extra state.

```tsx
const slider = useSlider({ defaultValue: 50 });

<span>{slider.state.value}</span>;
{
    slider.state.isDragging && <Tooltip value={slider.state.value} />;
}
```

## Styling with data attributes

Prop objects include orientation and state-dependent data attributes.

```css
[data-orientation='horizontal'] {
    height: 1.25rem;
}

[data-orientation='vertical'] {
    width: 1.25rem;
    min-height: 100px;
}

[data-dragging] {
    cursor: grabbing;
}

[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
}
```

## API

### useSlider

> **API/props table for `useSlider` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

Arrow keys step the value, Home/End jump to min/max, and PageUp/PageDown step in larger increments. See [Primitive](../../primitive/components/slider.md#accessibility) for full WAI-ARIA compliance details.
