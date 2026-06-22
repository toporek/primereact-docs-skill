# Slider

Slider is a component to provide input with a drag handle.

```tsx
'use client';
import { Slider } from '@/components/ui/slider';
import type { SliderRootChangeEvent } from 'primereact/slider';
import * as React from 'react';

export default function Preview() {
    const [progress, setProgress] = React.useState(128);

    const DURATION = 225;
    const totalSeconds = Math.floor(progress);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const currentTime = `${minutes}:${String(seconds).padStart(2, '0')}`;

    return (
        <div className="flex justify-center max-w-3xs mx-auto w-full">
            <div className="w-full">
                <div>
                    <div className="text-lg font-bold text-color">Let it happen</div>
                    <div className="text-surface-500">Tame Impala</div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm tabular-nums text-surface-500">{currentTime}</span>
                    <Slider
                        value={progress}
                        onValueChange={(e: SliderRootChangeEvent) => setProgress(e.value as number)}
                        min={0}
                        max={DURATION}
                        className="flex-1"
                    />
                    <span className="text-sm tabular-nums text-surface-500">3:45</span>
                </div>
            </div>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/slider
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Slider } from '@/components/ui/slider';
```

```tsx
<Slider defaultValue={50} />
```

## Examples

### Basic

```tsx
import { Slider } from '@/components/ui/slider';

export default function BasicDemo() {
    return <Slider defaultValue={50} className="max-w-3xs mx-auto w-full" />;
}
```

### Step

Size of each movement is defined with the `step` property.

```tsx
import { Slider } from '@/components/ui/slider';

export default function StepDemo() {
    return <Slider defaultValue={20} step={20} className="max-w-3xs mx-auto w-full" />;
}
```

### Range

Slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

```tsx
import { Slider } from '@/components/ui/slider';

export default function RangeDemo() {
    return <Slider defaultValue={[20, 80]} className="max-w-3xs mx-auto w-full" />;
}
```

### Thumbs Distance

```tsx
import { Slider } from '@/components/ui/slider';

export default function ThumbsDistanceDemo() {
    return <Slider defaultValue={[20, 80]} className="max-w-3xs mx-auto w-full" minStepsBetweenThumbs={20} />;
}
```

### Vertical

Default layout of slider is `horizontal`, use `orientation` property for the alternative `vertical` mode.

```tsx
import { Slider } from '@/components/ui/slider';

export default function VerticalDemo() {
    return (
        <div className="grid grid-cols-3 h-56 gap-4 w-fit mx-auto">
            {sliders.map((item, index) => (
                <div key={item} className="flex flex-col items-center justify-center gap-3">
                    <Slider defaultValue={Math.max(Math.random() * 100, 0)} orientation="vertical" key={index} />
                    <span className="font-mono text-xs uppercase text-surface-500">{item}</span>
                </div>
            ))}
        </div>
    );
}

const sliders = ['Bass', 'Mid', 'Treble'];
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { Slider } from '@/components/ui/slider';

export default function DisabledDemo() {
    return (
        <div className="max-w-3xs w-full mx-auto space-y-12">
            <Slider defaultValue={50} disabled />
        </div>
    );
}
```

### Controlled

```tsx
'use client';
import { InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { SliderRootChangeEvent } from 'primereact/slider';
import { InputNumber } from '@/components/ui/inputnumber';
import { Slider } from '@/components/ui/slider';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState(50);

    return (
        <div className="max-w-3xs w-full mx-auto">
            <InputNumber value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value as number)} fluid className="mb-4" />
            <Slider value={value} onValueChange={(e: SliderRootChangeEvent) => setValue(e.value as number)} className="w-full" />
        </div>
    );
}
```

### Value Change

```tsx
'use client';
import type { SliderRootChangeEvent } from 'primereact/slider';
import { Slider } from '@/components/ui/slider';
import * as React from 'react';

export default function ValueChangeDemo() {
    const [value, setValue] = React.useState(50);
    const [endValue, setEndValue] = React.useState(50);

    return (
        <div className="max-w-3xs mx-auto w-full flex flex-col items-center space-y-4">
            <div className="text-sm text-surface-500 font-mono">onValueChange: {value}</div>

            <div className="text-sm text-surface-500 font-mono"> onValueChangeEnd: {endValue}</div>
            <Slider
                value={value}
                onValueChange={(e: SliderRootChangeEvent) => setValue(e.value as number)}
                onValueChangeEnd={(e: SliderRootChangeEvent) => setEndValue(e.value as number)}
                className="w-full"
            />
        </div>
    );
}
```

### Filter

Image filter implementation using multiple sliders.

```tsx
'use client';
import type { SliderRootChangeEvent } from 'primereact/slider';
import type { ToggleButtonGroupValueChangeEvent } from 'primereact/togglebuttongroup';
import { Slider } from '@/components/ui/slider';
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';
import Image from 'next/image';
import * as React from 'react';

export default function FilterDemo() {
    const [filter, setFilter] = React.useState(0);
    const [filterValues, setFilterValues] = React.useState([100, 100, 0]);

    const filterStyle = React.useMemo(() => {
        return {
            filter: `contrast(${filterValues[0]}%) brightness(${filterValues[1]}%) sepia(${filterValues[2]}%)`
        };
    }, [filterValues]);

    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                alt="user header"
                className="w-80 rounded mb-6"
                src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
                style={filterStyle}
                width={320}
                height={240}
            />
            <ToggleButtonGroup value={filter} onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setFilter(e.value as number)}>
                <ToggleButton value={0}>Contrast</ToggleButton>
                <ToggleButton value={1}>Brightness</ToggleButton>
                <ToggleButton value={2}>Sepia</ToggleButton>
            </ToggleButtonGroup>
            <Slider
                value={filterValues[filter]}
                onValueChange={(e: SliderRootChangeEvent) =>
                    setFilterValues((prev) => {
                        const updated = [...prev];

                        updated[filter] = e.value as number;

                        return updated;
                    })
                }
                className="w-56 mt-4"
                min={0}
                max={200}
            />
        </div>
    );
}
```

## Accessibility

### Screen Reader

Slider element component uses `slider` role on the handle in addition to the `aria-orientation`, `aria-valuemin`, `aria-valuemax` and `aria-valuenow` attributes. Value to describe the component can be defined using `aria-labelledby` and `aria-label` props.

### Keyboard Support

| Key                          | Function                          |
| ---------------------------- | --------------------------------- |
| `tab`                        | Moves focus to the slider.        |
| `left arrow` / `up arrow`    | Decrements the value.             |
| `right arrow` / `down arrow` | Increments the value.             |
| `home`                       | Set the minimum value.            |
| `end`                        | Set the maximum value.            |
| `page up`                    | Increments the value byundefinedsteps. |
| `page down`                  | Decrements the value byundefinedsteps. |
