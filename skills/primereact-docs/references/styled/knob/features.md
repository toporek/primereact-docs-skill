# Knob

Knob is a form component to define number inputs with a dial.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function Preview() {
    return (
        <div className="flex flex-wrap gap-8 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <Knob.Root defaultValue={48} ariaLabel="Volume">
                    <Knob.Range />
                    <Knob.Value />
                    <Knob.Text />
                </Knob.Root>
                <span className="text-sm text-muted-color font-medium">Volume</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Knob.Root defaultValue={75} ariaLabel="Brightness">
                    <Knob.Range />
                    <Knob.Value />
                    <Knob.Text />
                </Knob.Root>
                <span className="text-sm text-muted-color font-medium">Brightness</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Knob.Root defaultValue={24} ariaLabel="Bass">
                    <Knob.Range />
                    <Knob.Value />
                    <Knob.Text />
                </Knob.Root>
                <span className="text-sm text-muted-color font-medium">Bass</span>
            </div>
        </div>
    );
}
```

## Usage

```tsx
import { Knob } from '@primereact/ui/knob';
```

```tsx
<Knob.Root>
    <Knob.Range />
    <Knob.Value />
    <Knob.Text />
</Knob.Root>
```

## Examples

### Basic

A circular knob for selecting a numeric value within a defined range.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} ariaLabel="Volume">
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

### Min/Max

Boundaries are configured with the `min` and `max` properties. Defaults are `0` and `100`.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function MinMaxDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={10} min={-50} max={50} ariaLabel="Temperature">
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

### Step

Step factor is `1` by default and can be customized with the `step` property.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function StepDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} step={10} ariaLabel="Volume step">
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

### Template

Use `Knob.Text` with a render function to customize displayed content.

```tsx
'use client';
import { Knob, type KnobTextInstance } from '@primereact/ui/knob';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} ariaLabel="Download progress">
                <Knob.Range />
                <Knob.Value />
                <Knob.Text>
                    {(instance: KnobTextInstance) => {
                        const { knob } = instance;

                        return <>{knob?.state.value}%</>;
                    }}
                </Knob.Text>
            </Knob.Root>
        </div>
    );
}
```

### Stroke

The border size is specified with the `strokeWidth` property as a number in pixels.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function StrokeDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={40} ariaLabel="Brightness">
                <Knob.Range strokeWidth={5} />
                <Knob.Value strokeWidth={5} />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

### Size

Diameter of the knob is defined in pixels using the `size` property.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={60} size={200} ariaLabel="Progress">
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

### Color

Each of the three components (`Knob.Range`, `Knob.Value`, `Knob.Text`) accepts a `color` prop to customize appearance. In addition, `strokeWidth` determines the stroke width of range and value sections.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function ColorDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} ariaLabel="Disk usage">
                <Knob.Range color="MediumTurquoise" />
                <Knob.Value color="PeachPuff" />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

### Reactive

Knob can be controlled with custom controls as well.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Button } from '@primereact/ui/button';
import { Knob } from '@primereact/ui/knob';
import * as React from 'react';

export default function ReactiveDemo() {
    const [value, setValue] = React.useState(0);

    return (
        <div className="flex flex-col items-center gap-2">
            <Knob.Root value={value} size={150} readOnly ariaLabel="Brightness">
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
            <div className="flex gap-2">
                <Button onClick={() => setValue(value + 1)} disabled={value === 100} aria-label="Increase brightness" iconOnly>
                    <Plus />
                </Button>
                <Button onClick={() => setValue(value - 1)} disabled={value <= 0} aria-label="Decrease brightness" iconOnly>
                    <Minus />
                </Button>
            </div>
        </div>
    );
}
```

### ReadOnly

When `readOnly` is present, value cannot be edited.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function ReadOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} readOnly ariaLabel="Read-only volume">
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

### Disabled

When `disabled` is present, a visual hint is applied to indicate that the knob cannot be interacted with.

```tsx
import { Knob } from '@primereact/ui/knob';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} ariaLabel="Disabled volume" disabled>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [Knob Primitive](../../primitive/knob/features.md#api) for the full sub-component API.

### Hooks

See [useKnob](../../headless/knob/features.md#api) for the headless hook API.

## Accessibility

See [Knob Primitive](../../primitive/knob/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
