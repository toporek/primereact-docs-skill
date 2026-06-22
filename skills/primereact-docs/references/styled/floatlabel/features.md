# FloatLabel

FloatLabel visually integrates a label with its form element.

```tsx
'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function Preview() {
    const [value, setValue] = React.useState('');

    return (
        <div className="max-w-3xs mx-auto w-full">
            <FloatLabel>
                <InputText fluid value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} id="username" />
                <Label htmlFor="username">Username</Label>
            </FloatLabel>
            <small className="text-surface-500 mt-1.5 opacity-75">Click to see the floating label</small>
        </div>
    );
}
```

## Usage

```tsx
import { FloatLabel } from '@primereact/ui/floatlabel';
```

```tsx
<FloatLabel></FloatLabel>
```

## Examples

### Basic

A label that transitions above the input field when focused.

```tsx
'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function BasicDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center">
            <FloatLabel>
                <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} id="username" />
                <Label htmlFor="username">Username</Label>
            </FloatLabel>
        </div>
    );
}
```

### Variants

The `variant` property defines the position of the label. Default value is `over`, whereas `in` and `on` are the alternatives.

```tsx
'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function VariantsDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel variant="in">
                <InputText
                    id="in_label"
                    value={value1}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)}
                    autoComplete="off"
                />
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <InputText
                    id="on_label"
                    value={value2}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)}
                    autoComplete="off"
                />
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
```

### Invalid

When the form element is invalid, the label is also highlighted.

```tsx
'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <InputText
                    id="value1"
                    value={value1}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)}
                    invalid={!value1}
                />
                <Label htmlFor="value1">Username</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <InputText
                    id="value2"
                    value={value2}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)}
                    autoComplete="off"
                    invalid={!value2}
                />
                <Label htmlFor="value2">Username</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <InputText
                    id="value3"
                    value={value3}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)}
                    autoComplete="off"
                    invalid={!value3}
                />
                <Label htmlFor="value3">Username</Label>
            </FloatLabel>
        </div>
    );
}
```

## Accessibility

### Screen Reader

FloatLabel does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
