# ToggleButtonGroup

ToggleButtonGroup component is used to create a group of toggle buttons.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function Preview() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup allowEmpty={false} multiple={false}>
                <ToggleButton.Root value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
```

## Usage

```tsx
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
```

```tsx
<ToggleButtonGroup></ToggleButtonGroup>
```

## Examples

### Basic

A group of toggle buttons where one or more can be active at a time.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup allowEmpty={false} multiple={false}>
                <ToggleButton.Root value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
```

### Controlled

Use `value` and `onValueChange` properties to control the state of the `ToggleButton.Group`.

```tsx
'use client';
import { ToggleButton, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup
                allowEmpty={false}
                value={value}
                onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string[])}
            >
                <ToggleButton.Root value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
```

### Multiple

`ToggleButton.Group` allows selecting only one item by default and setting `multiple` option enables choosing more than one item. In multiple case, model property should be an array.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function MultipleDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
```

### Sizes

`ToggleButton.Group` provides small and large sizes as alternatives to the base by using the `size` property.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function SizesDemo() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <ToggleButtonGroup size="small" multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
            <ToggleButtonGroup size="normal" multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
            <ToggleButtonGroup size="large" multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState<string[] | null>(null);

    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup
                value={value}
                onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string[])}
                invalid={value === null}
            >
                <ToggleButton.Root value="monthly">
                    <ToggleButton.Indicator>Monthly</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="yearly">
                    <ToggleButton.Indicator>Yearly</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused entirely. Certain options can also be disabled using their `disabled` properties.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function DisabledDemo() {
    return (
        <div className="flex items-center gap-4 justify-center">
            <ToggleButtonGroup disabled>
                <ToggleButton.Root value="off">
                    <ToggleButton.Indicator>Off</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="on">
                    <ToggleButton.Indicator>On</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
            <ToggleButtonGroup>
                <ToggleButton.Root value="option1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="option2" disabled>
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/togglebutton/features.md#api) for `ToggleButtonRoot`, `ToggleButtonIndicator`, `ToggleButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/togglebutton/features.md#api) for `useToggleButton` and `useToggleButtonGroup` hook documentation.

## Accessibility

See [ToggleButton Primitive](../../primitive/togglebutton/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
