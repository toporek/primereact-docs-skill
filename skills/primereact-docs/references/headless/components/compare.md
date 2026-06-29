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

```tsx
import { useCompare } from '@primereact/headless/compare';
```

```tsx
const compare = useCompare({ defaultValue: 50 });

<div {...compare.rootProps}>
    <div {...compare.getItemProps('after')}></div>
    <div {...compare.getItemProps('before')}></div>
    <div {...compare.handleProps}>
        <div {...compare.getIndicatorProps()}></div>
    </div>
    <input {...compare.inputProps} />
</div>;
```

`useCompare` manages pointer tracking, clip-path computation, and keyboard input for a before/after comparison. See [Primitive](../../primitive/components/compare.md) for a component-based API.

## Features

- **Built on `useSlider`**, inherits drag, keyboard, step, and min/max behavior from the slider primitive
- **Clip-path layout**, `getItemProps('before' | 'after')` returns the CSS for each layer so templates stay declarative
- **Hover mode**, `slideOnHover` moves the divider as the pointer glides across the component, no drag required
- **Horizontal and vertical**, flip the layout with a single `orientation` prop
- **Reactive state**, `state.value` and `state.isDragging` drive overlays, tooltips, and custom cursors

## Working with callbacks

### Controlled value

Use `value` with `onValueChange` when the split must be driven by external state, for example, to persist it or sync multiple compares.

```tsx
const [value, setValue] = React.useState(50);

const compare = useCompare({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Hover-driven comparison

Enable `slideOnHover` for hero-section comparisons where pointer movement alone should reveal the other image.

```tsx
const compare = useCompare({ slideOnHover: true });
```

### Vertical layout

Switch `orientation` to `'vertical'` for top/bottom comparisons.

```tsx
const compare = useCompare({ orientation: 'vertical' });
```

### Custom readouts from state

Mirror the current split or drag state into your own UI.

```tsx
const compare = useCompare({ defaultValue: 50 });

<span>{compare.state.value}%</span>;
{
    compare.state.isDragging && <span>Dragging...</span>;
}
```

## Styling with data attributes

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

> **`useCompare` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/compare or the installed `@primereact/types`.

## Accessibility

Arrow keys move the comparison slider, Home/End jump to the edges, and dragging is accessible via pointer or touch. See [Primitive](../../primitive/components/compare.md#accessibility) for full WAI-ARIA compliance details.
