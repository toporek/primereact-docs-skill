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
                        {...slider.getThumbProps(index)}
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

```tsx showLineNumbers {1,3,6-8,10-11}
import { useSlider } from '@primereact/headless/slider';

const slider = useSlider({ defaultValue: 50 });

return (
    <div {...slider.rootProps}>
        <div {...slider.trackProps}>
            <span {...slider.getRangeProps()} />
        </div>
        <span {...slider.getThumbProps(0)}>
            <input {...slider.getHiddenInputProps(0)} />
        </span>
    </div>
);
```

`useSlider` manages value state, pointer tracking, and keyboard input for a single or range slider — see [Primitive](../../primitive/slider/features.md) for a component-based API.

## Features

- Returns spread-ready prop objects (`rootProps`, `trackProps`, `getRangeProps`, `getThumbProps`, `getHiddenInputProps`)
- Single value and range mode with automatic thumb count
- `minStepsBetweenThumbs` for enforcing minimum distance between range handles
- Precise step rounding with floating-point precision handling
- Exposes `state.value` and `state.isDragging` for custom rendering logic

## Behavior

### Default Value

Use `defaultValue` to set the initial slider value.

```tsx
const slider = useSlider({ defaultValue: 50 });
```

For a range slider, pass an array.

```tsx
const slider = useSlider({ defaultValue: [20, 80] });
```

### Controlled

Use `value` and `onValueChange` for full programmatic control.

```tsx
const [value, setValue] = React.useState(50);
const slider = useSlider({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Step

Set `step` to define the increment granularity.

```tsx
const slider = useSlider({ step: 10 });
```

### Range

Pass an array as `defaultValue` or `value` to enable range mode. The hook detects the mode automatically via `range()`.

```tsx
const slider = useSlider({ defaultValue: [20, 80] });

// Render multiple thumbs
slider.range() &&
    [0, 1].map((index) => (
        <span key={index} {...slider.getThumbProps(index)}>
            <input {...slider.getHiddenInputProps(index)} />
        </span>
    ));
```

### Minimum Thumb Distance

Set `minStepsBetweenThumbs` to prevent range handles from overlapping.

```tsx
const slider = useSlider({ defaultValue: [20, 80], minStepsBetweenThumbs: 10 });
```

### Orientation

Set `orientation` to `'vertical'` for a vertical slider layout.

```tsx
const slider = useSlider({ orientation: 'vertical' });
```

### Disabled

Set `disabled` to prevent all pointer and keyboard interaction.

```tsx
const slider = useSlider({ disabled: true });
```

### Value Change End

Use `onValueChangeEnd` to receive a callback only when the user finishes dragging or releases the pointer. This is useful for expensive operations like API calls.

```tsx
const slider = useSlider({
    defaultValue: 50,
    onValueChangeEnd: (e) => console.log('Final value:', e.value)
});
```

### Using `state.value` and `state.isDragging`

The hook exposes reactive state for custom UI logic.

```tsx
const slider = useSlider({ defaultValue: 50 });

<span>{slider.state.value}</span>;
{
    slider.state.isDragging && <span>Dragging...</span>;
}
```

### Custom Styling with Data Attributes

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

See [Slider Primitive](../../primitive/slider/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
