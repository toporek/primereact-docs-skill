# IftaLabel

IftaLabel visually integrates a label with its form element.

```tsx
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function Preview() {
    return (
        <div className="flex flex-wrap justify-center">
            <IftaLabel>
                <InputText id="username" />
                <Label htmlFor="username">Username</Label>
            </IftaLabel>
        </div>
    );
}
```

## Usage

```tsx
import { IftaLabel } from '@primereact/ui/iftalabel';
```

```tsx
<IftaLabel></IftaLabel>
```

## Examples

### Basic

An infield top-aligned label positioned inside the input boundary.

```tsx
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center">
            <IftaLabel>
                <InputText id="username" />
                <Label htmlFor="username">Username</Label>
            </IftaLabel>
        </div>
    );
}
```

### Invalid

When the form element is invalid, the label is also highlighted.

```tsx
'use client';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center">
            <IftaLabel>
                <InputText
                    id="invalid"
                    value={value}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                    invalid={!value}
                />
                <Label htmlFor="invalid">Username</Label>
            </IftaLabel>
        </div>
    );
}
```

## Accessibility

### Screen Reader

IftaLabel does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
