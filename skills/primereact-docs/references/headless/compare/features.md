# useCompare

Hook that manages compare slider state, pointer interactions, and clip-path positioning.

```tsx
'use client';
import { Code } from '@primeicons/react/code';
import { useCompare } from '@primereact/headless/compare';

export default function BasicDemo() {
    const { rootProps, getItemProps, handleProps, indicatorProps, inputProps } = useCompare({ defaultValue: 50 });

    return (
        <div
            {...rootProps}
            className="relative aspect-video max-w-lg mx-auto overflow-hidden rounded-lg cursor-ew-resize select-none"
            style={{ touchAction: 'none' }}
        >
            <div {...getItemProps('after')}>
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" draggable={false} />
            </div>
            <div {...getItemProps('before')}>
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" draggable={false} />
            </div>
            <div
                {...handleProps}
                className="absolute inset-y-0 w-0.5 flex items-center justify-center bg-surface-0 dark:bg-surface-950"
                style={handleProps.style}
            >
                <div
                    {...indicatorProps}
                    className="absolute flex items-center justify-center w-6 h-6 rounded-md bg-surface-0 dark:bg-surface-950 shadow-md"
                >
                    <Code />
                </div>
            </div>
            <input {...inputProps} />
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3,6-10,12}
import { useCompare } from '@primereact/headless/compare';

const compare = useCompare({ defaultValue: 50 });

return (
    <div {...compare.rootProps}>
        <div {...compare.getItemProps('after')}></div>
        <div {...compare.getItemProps('before')}></div>
        <div {...compare.handleProps}>
            <div {...compare.getIndicatorProps()}></div>
        </div>
        <input {...compare.inputProps} />
    </div>
);
```

`useCompare` manages pointer tracking, clip-path computation, and keyboard input for a before/after comparison — see [Primitive](../../primitive/compare/features.md) for a component-based API.

## Features

- Built on top of `useSlider` — inherits all slider behavior (drag, keyboard, step, min/max)
- Returns spread-ready prop objects (`rootProps`, `handleProps`, `inputProps`, `getItemProps`, `getIndicatorProps`)
- `getItemProps('before' | 'after')` computes `clipPath` styles for each layer
- `slideOnHover` mode updates position on pointer move without requiring a drag
- Exposes `state.value` and `state.isDragging` for custom rendering logic

## Behavior

### Default Value

Use `defaultValue` to set the initial split position as a percentage.

```tsx
const compare = useCompare({ defaultValue: 50 });
```

### Controlled

Use `value` and `onValueChange` for full programmatic control.

```tsx
const [value, setValue] = React.useState(50);
const compare = useCompare({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Slide on Hover

Set `slideOnHover` to move the divider as the pointer hovers over the component, without requiring a drag gesture.

```tsx
const compare = useCompare({ slideOnHover: true });
```

### Orientation

Set `orientation` to `'vertical'` for a top-to-bottom comparison layout.

```tsx
const compare = useCompare({ orientation: 'vertical' });
```

### Disabled

Set `disabled` to prevent all pointer and keyboard interaction.

```tsx
const compare = useCompare({ disabled: true });
```

### Using `state.value` and `state.isDragging`

The hook exposes reactive state for custom UI logic.

```tsx
const compare = useCompare({ defaultValue: 50 });

<span>{compare.state.value}%</span>;
{
    compare.state.isDragging && <span>Dragging...</span>;
}
```

### Custom Styling with Data Attributes

Prop objects include orientation and state-dependent data attributes.

```css
[data-orientation='horizontal'] {
    cursor: ew-resize;
}

[data-orientation='vertical'] {
    cursor: ns-resize;
}

[data-dragging] {
    cursor: grabbing;
}
```

## API

### useCompare

> **API/props table for `useCompare` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Compare Primitive](../../primitive/compare/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
