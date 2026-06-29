# Slider

Slider is a component to provide input with a drag handle.

```tsx
'use client';
import { Slider, type SliderRootChangeEvent } from '@primereact/ui/slider';
import * as React from 'react';

export default function Preview() {
    const [progress, setProgress] = React.useState(128);

    const DURATION = 225;
    const totalSeconds = Math.floor(progress);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const currentTime = `${minutes}:${String(seconds).padStart(2, '0')}`;

    return (
        <div className="flex items-center gap-4 justify-center mx-auto w-full">
            <img
                className="h-20 w-auto rounded-lg"
                src="https://images.unsplash.com/photo-1531777992189-ad52457fbe93?w=200&h=200&fit=crop&auto=format"
                alt="Ivory by Soft Landing"
            />
            <div className="w-full max-w-3xs">
                <div>
                    <div className="text-lg font-bold text-color">Ivory</div>
                    <div className="text-surface-500">Soft Landing</div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm tabular-nums text-surface-500">{currentTime}</span>
                    <Slider.Root
                        value={progress}
                        onValueChange={(e: SliderRootChangeEvent) => setProgress(e.value as number)}
                        min={0}
                        max={DURATION}
                        className="flex-1"
                    >
                        <Slider.Track>
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Handle />
                    </Slider.Root>
                    <span className="text-sm tabular-nums text-surface-500">3:45</span>
                </div>
            </div>
        </div>
    );
}

```
## Usage

```tsx
import { Slider } from '@primereact/ui/slider';
```

```tsx
<Slider.Root>
    <Slider.Track>
        <Slider.Range />
    </Slider.Track>
    <Slider.Handle />
</Slider.Root>
```

## Examples

### Basic

Select a numeric value by dragging a handle along a track.

```tsx
import { Slider } from '@primereact/ui/slider';

export default function BasicDemo() {
    return (
        <Slider.Root defaultValue={50} className="max-w-3xs mx-auto w-full">
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Handle />
        </Slider.Root>
    );
}

```

### Step

Size of each movement is defined with the `step` property.

```tsx
import { Slider } from '@primereact/ui/slider';

export default function StepDemo() {
    return (
        <Slider.Root defaultValue={20} step={20} className="max-w-3xs mx-auto w-full">
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Handle />
        </Slider.Root>
    );
}

```

### Range

Slider provides two handles to define two values. In range mode, value should be an array instead of a single value.

```tsx
import { Slider } from '@primereact/ui/slider';

export default function RangeDemo() {
    return (
        <Slider.Root defaultValue={[20, 80]} className="max-w-3xs mx-auto w-full">
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Handle index={0} />
            <Slider.Handle index={1} />
        </Slider.Root>
    );
}

```

### Handles Distance

```tsx
import { Slider } from '@primereact/ui/slider';

export default function HandlesDistanceDemo() {
    return (
        <Slider.Root defaultValue={[20, 80]} className="max-w-3xs mx-auto w-full" minStepsBetweenHandles={20}>
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Handle index={0} />
            <Slider.Handle index={1} />
        </Slider.Root>
    );
}

```

### Vertical

Default layout of slider is `horizontal`, use `orientation` property for the alternative `vertical` mode.

```tsx
import { Slider } from '@primereact/ui/slider';

export default function VerticalDemo() {
    return (
        <div className="grid grid-cols-3 h-56 gap-4 w-fit mx-auto">
            {sliders.map((item, index) => (
                <div key={item} className="flex flex-col items-center justify-center gap-3">
                    <Slider.Root defaultValue={Math.max(Math.random() * 100, 0)} orientation="vertical" key={index}>
                        <Slider.Track>
                            <Slider.Range />
                        </Slider.Track>
                        <Slider.Handle />
                    </Slider.Root>
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
import { Slider } from '@primereact/ui/slider';

export default function DisabledDemo() {
    return (
        <div className="max-w-3xs w-full mx-auto space-y-12">
            <div>
                <h5 className="mb-2 text-sm font-medium">Disabled Slider</h5>
                <Slider.Root defaultValue={50} disabled>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Handle />
                </Slider.Root>
            </div>

            <div>
                <h5 className="mb-2 text-sm font-medium">Disabled All Handles</h5>
                <Slider.Root defaultValue={[20, 80]} disabled>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Handle index={0} />
                    <Slider.Handle index={1} />
                </Slider.Root>
            </div>

            <div>
                <h5 className="mb-2 text-sm font-medium">Disabled Single Handle</h5>
                <Slider.Root defaultValue={[20, 80]}>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Handle index={0} disabled />
                    <Slider.Handle index={1} />
                </Slider.Root>
            </div>
        </div>
    );
}

```

### Controlled

```tsx
'use client';
import { InputNumber, type InputNumberRootValueChangeEvent } from '@primereact/ui/inputnumber';
import { Slider } from '@primereact/ui/slider';
import { SliderRootChangeEvent } from '@primereact/ui/slider';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState(50);

    return (
        <div className="max-w-3xs w-full mx-auto">
            <InputNumber.Root
                value={value}
                onValueChange={(e: InputNumberRootValueChangeEvent) => setValue(e.value as number)}
                fluid
                className="mb-4"
            >
                <InputNumber.Input />
            </InputNumber.Root>
            <Slider.Root value={value} onValueChange={(e: SliderRootChangeEvent) => setValue(e.value as number)} className="w-full">
                <Slider.Track>
                    <Slider.Range />
                </Slider.Track>
                <Slider.Handle />
            </Slider.Root>
        </div>
    );
}

```

### Value Change

```tsx
'use client';
import { Slider, type SliderRootChangeEvent } from '@primereact/ui/slider';
import * as React from 'react';

export default function ValueChangeDemo() {
    const [value, setValue] = React.useState(50);
    const [endValue, setEndValue] = React.useState(50);

    return (
        <div className="max-w-3xs mx-auto w-full flex flex-col items-center space-y-4">
            <div className="text-sm text-surface-500 font-mono">onValueChange: {value}</div>

            <div className="text-sm text-surface-500 font-mono"> onValueChangeEnd: {endValue}</div>
            <Slider.Root
                value={value}
                onValueChange={(e: SliderRootChangeEvent) => setValue(e.value as number)}
                onValueChangeEnd={(e: SliderRootChangeEvent) => setEndValue(e.value as number)}
                className="w-full"
            >
                <Slider.Track>
                    <Slider.Range />
                </Slider.Track>
                <Slider.Handle />
            </Slider.Root>
        </div>
    );
}

```

### Custom

```tsx
'use client';
import { VolumeUp } from '@primeicons/react';
import { Slider, type SliderTrackInstance } from '@primereact/ui/slider';

export default function CustomDemo() {
    return (
        <div className="max-w-xs mx-auto w-full space-y-16">
            <Slider.Root defaultValue={50}>
                <Slider.Track className="h-2! bg-blue-100! dark:bg-blue-950!">
                    <Slider.Range className="bg-blue-500!" />
                </Slider.Track>
                <Slider.Handle className="before:hidden! border-2! border-blue-500! bg-surface-0! dark:bg-surface-900! rotate-45! rounded-md!" />
            </Slider.Root>

            <Slider.Root defaultValue={50}>
                <Slider.Track className="h-2! bg-amber-100! dark:bg-amber-950!">
                    <Slider.Range className="bg-amber-500!" />
                </Slider.Track>
                <Slider.Handle className="before:hidden! w-4! h-5! border-2! border-amber-500! bg-surface-0! dark:bg-surface-900! rounded-sm!" />
            </Slider.Root>

            <Slider.Root defaultValue={50} className="h-8! rounded-full!">
                <Slider.Track className="h-full! rounded-full! border border-surface-100 dark:border-surface-900 bg-surface-100! dark:bg-surface-900!">
                    {({ slider }: SliderTrackInstance) => {
                        return (
                            <>
                                <VolumeUp className="text-surface-400 absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                                <Slider.Range
                                    className="rounded-full! bg-surface-0!"
                                    style={{ width: `clamp(2rem, calc(${slider?.state.value}% + 1rem), 100%)` }}
                                >
                                    <Slider.Handle
                                        style={{ insetBlockStart: '50%', insetInlineStart: 'auto', insetInlineEnd: '0', translate: '0 -50%' }}
                                        className="z-20 h-[calc(100%+2px)]! dark:h-full! aspect-square! w-auto! before:hidden! bg-surface-0! border! border-surface-200! shadow-sm"
                                    />
                                </Slider.Range>
                            </>
                        );
                    }}
                </Slider.Track>
            </Slider.Root>

            <Slider.Root defaultValue={50}>
                <Slider.Track className="h-8! flex! items-center gap-1 w-full bg-transparent! cursor-grab active:cursor-grabbing">
                    {({ slider }: SliderTrackInstance) => {
                        return (
                            <>
                                <span
                                    className="bg-linear-to-r from-sky-200 via-indigo-200 to-blue-400 h-full rounded-full"
                                    style={{ width: `calc(${slider?.state.value}% - 1.25rem)` }}
                                />
                                <Slider.Handle
                                    style={{ insetInlineStart: 'auto', translate: 'auto' }}
                                    className="relative! before:hidden! size-8! shrink-0 bg-surface-0! dark:bg-surface-800! border border-surface-200! dark:border-surface-700! shadow-sm"
                                />
                                <span
                                    className="h-full bg-surface-100 dark:bg-surface-900 rounded-full"
                                    style={{ width: `calc(100% - ${slider?.state.value}% - 1.25rem)` }}
                                />
                            </>
                        );
                    }}
                </Slider.Track>
            </Slider.Root>
        </div>
    );
}

```

### Filter

Image filter implementation using multiple sliders.

```tsx
'use client';
import { Slider } from '@primereact/ui/slider';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import Image from 'next/image';
import { SliderRootChangeEvent } from '@primereact/ui/slider';
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
                src="https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg"
                style={filterStyle}
                width={320}
                height={240}
            />
            <ToggleButtonGroup value={filter} onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setFilter(e.value as number)}>
                <ToggleButton.Root value={0}>
                    <ToggleButton.Indicator>Contrast</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value={1}>
                    <ToggleButton.Indicator>Brightness</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value={2}>
                    <ToggleButton.Indicator>Sepia</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
            <Slider.Root
                value={filterValues[filter]}
                onValueChange={(e: SliderRootChangeEvent) =>
                    setFilterValues((prev) => {
                        const updated = [...prev];

                        updated[filter] = e.value as number;

                        return updated;
                    })
                }
                className="max-w-56 mt-4"
                min={0}
                max={200}
            >
                <Slider.Track>
                    <Slider.Range />
                </Slider.Track>
                <Slider.Handle />
            </Slider.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [Slider Primitive](../../primitive/components/slider.md#api) for the sub-component API reference.

### Hooks

See [useSlider](../../headless/components/slider.md#api) for the headless hook API reference.

### Accessibility

See [Slider Primitive](../../primitive/components/slider.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-slider | Class name of the root element |
| p-slider-range | Class name of the range element |
| p-slider-handle | Class name of the handle element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| slider.transition.duration | --p-slider-transition-duration | Transition duration of root |
| slider.track.background | --p-slider-track-background | Background of track |
| slider.track.border.radius | --p-slider-track-border-radius | Border radius of track |
| slider.track.size | --p-slider-track-size | Size of track |
| slider.range.background | --p-slider-range-background | Background of range |
| slider.handle.width | --p-slider-handle-width | Width of handle |
| slider.handle.height | --p-slider-handle-height | Height of handle |
| slider.handle.border.radius | --p-slider-handle-border-radius | Border radius of handle |
| slider.handle.background | --p-slider-handle-background | Background of handle |
| slider.handle.hover.background | --p-slider-handle-hover-background | Hover background of handle |
| slider.handle.content.border.radius | --p-slider-handle-content-border-radius | Content border radius of handle |
| slider.handle.content.background | --p-slider-handle-content-background | Background of handle |
| slider.handle.content.hover.background | --p-slider-handle-content-hover-background | Content hover background of handle |
| slider.handle.content.width | --p-slider-handle-content-width | Content width of handle |
| slider.handle.content.height | --p-slider-handle-content-height | Content height of handle |
| slider.handle.content.shadow | --p-slider-handle-content-shadow | Content shadow of handle |
| slider.handle.focus.ring.width | --p-slider-handle-focus-ring-width | Focus ring width of handle |
| slider.handle.focus.ring.style | --p-slider-handle-focus-ring-style | Focus ring style of handle |
| slider.handle.focus.ring.color | --p-slider-handle-focus-ring-color | Focus ring color of handle |
| slider.handle.focus.ring.offset | --p-slider-handle-focus-ring-offset | Focus ring offset of handle |
| slider.handle.focus.ring.shadow | --p-slider-handle-focus-ring-shadow | Focus ring shadow of handle |
