# ToggleButtonGroup

ToggleButtonGroup component is used to create a group of toggle buttons.

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';

export default function Preview() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup allowEmpty={false} multiple={false}>
                <ToggleButton value="left">
                    <i className="pi pi-align-left" />
                </ToggleButton>
                <ToggleButton value="center">
                    <i className="pi pi-align-center" />
                </ToggleButton>
                <ToggleButton value="right">
                    <i className="pi pi-align-right" />
                </ToggleButton>
                <ToggleButton value="justify">
                    <i className="pi pi-align-justify" />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/togglebuttongroup.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';
```

```tsx
<ToggleButtonGroup>
    <ToggleButton value="option1">Option 1</ToggleButton>
    <ToggleButton value="option2">Option 2</ToggleButton>
</ToggleButtonGroup>
```

## Examples

### Basic

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup allowEmpty={false}>
                <ToggleButton value="left">
                    <i className="pi pi-align-left" />
                </ToggleButton>
                <ToggleButton value="center">
                    <i className="pi pi-align-center" />
                </ToggleButton>
                <ToggleButton value="right">
                    <i className="pi pi-align-right" />
                </ToggleButton>
                <ToggleButton value="justify">
                    <i className="pi pi-align-justify" />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Controlled

Use `value` and `onValueChange` properties to control the state of the `ToggleButtonGroup`.

```tsx
'use client';
import type { ToggleButtonGroupValueChangeEvent } from 'primereact/togglebuttongroup';
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';
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
                <ToggleButton value="left">
                    <i className="pi pi-align-left" />
                </ToggleButton>
                <ToggleButton value="center">
                    <i className="pi pi-align-center" />
                </ToggleButton>
                <ToggleButton value="right">
                    <i className="pi pi-align-right" />
                </ToggleButton>
                <ToggleButton value="justify">
                    <i className="pi pi-align-justify" />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Multiple

`ToggleButtonGroup` allows selecting only one item by default and setting `multiple` option enables choosing more than one item. In multiple case, model property should be an array.

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';

export default function MultipleDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup multiple>
                <ToggleButton value="bold">Bold</ToggleButton>
                <ToggleButton value="italic">Italic</ToggleButton>
                <ToggleButton value="underline">Underline</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Sizes

`ToggleButtonGroup` provides small and large sizes as alternatives to the base by using the `size` property.

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';

export default function SizesDemo() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <ToggleButtonGroup size="small" multiple>
                <ToggleButton value="bold">Bold</ToggleButton>
                <ToggleButton value="italic">Italic</ToggleButton>
                <ToggleButton value="underline">Underline</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup size="normal" multiple>
                <ToggleButton value="bold">Bold</ToggleButton>
                <ToggleButton value="italic">Italic</ToggleButton>
                <ToggleButton value="underline">Underline</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup size="large" multiple>
                <ToggleButton value="bold">Bold</ToggleButton>
                <ToggleButton value="italic">Italic</ToggleButton>
                <ToggleButton value="underline">Underline</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Fluid

When `fluid` is enabled, the ToggleButtonGroup spans the full width of its parent container, distributing the buttons evenly.

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';

export default function FluidDemo() {
    return (
        <ToggleButtonGroup fluid multiple>
            <ToggleButton value="bold">Bold</ToggleButton>
            <ToggleButton value="italic">Italic</ToggleButton>
            <ToggleButton value="underline">Underline</ToggleButton>
        </ToggleButtonGroup>
    );
}

```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import type { ToggleButtonGroupValueChangeEvent } from 'primereact/togglebuttongroup';
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';
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
                <ToggleButton value="monthly">Monthly</ToggleButton>
                <ToggleButton value="yearly">Yearly</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Disabled

When `disabled` is present, the element cannot be edited and focused entirely. Certain options can also be disabled using their `disabled` properties.

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';
import { ToggleButtonGroup } from '@/components/ui/togglebuttongroup';

export default function DisabledDemo() {
    return (
        <div className="flex items-center gap-4 justify-center">
            <ToggleButtonGroup disabled>
                <ToggleButton value="off">Off</ToggleButton>
                <ToggleButton value="on">On</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup>
                <ToggleButton value="option1">Option 1</ToggleButton>
                <ToggleButton value="option2" disabled>
                    Option 2
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

```
