# Textarea

Textarea is a multi-line text input element.

```tsx
import { Label } from '@primereact/ui/label';
import { Textarea } from '@primereact/ui/textarea';

export default function Preview() {
    return (
        <div className="flex flex-col justify-center gap-2 max-w-xs mx-auto">
            <Label className="font-semibold text-sm text-color">Description</Label>
            <Textarea rows={5} cols={30} placeholder="Write a description..." />
        </div>
    );
}
```

## Usage

```tsx
import { Textarea } from '@primereact/ui/textarea';
```

```tsx
<Textarea />
```

## Examples

### Basic

A multi-line input for capturing longer free-form text content.

```tsx
import { Textarea } from '@primereact/ui/textarea';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Textarea rows={5} cols={30} />
        </div>
    );
}
```

### Auto Resize

Textarea can automatically adjust its height based on the content by setting the `autoResize` property.

```tsx
import { Textarea } from '@primereact/ui/textarea';

export default function AutoResizeDemo() {
    return (
        <div className="flex justify-center">
            <Textarea autoResize rows={5} cols={30} />
        </div>
    );
}
```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
import { Textarea } from '@primereact/ui/textarea';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <Textarea variant="filled" rows={5} cols={30} />
        </div>
    );
}
```

### Float Label

A floating label appears on top of the input field when focused. Visit [FloatLabel](https://v11.primereact.org/docs/components/floatlabel) documentation for more information.

```tsx
'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { Label } from '@primereact/ui/label';
import { Textarea } from '@primereact/ui/textarea';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center items-stretch gap-4">
            <FloatLabel>
                <Textarea
                    value={value1}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue1(e.currentTarget.value)}
                    id="over_label"
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                    className="h-full"
                />
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>
            <FloatLabel variant="in">
                <Textarea
                    value={value2}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue2(e.currentTarget.value)}
                    id="in_label"
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                    className="h-full"
                />
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>
            <FloatLabel variant="on">
                <Textarea
                    value={value3}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue3(e.currentTarget.value)}
                    id="on_label"
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                    className="h-full"
                />
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://v11.primereact.org/docs/components/iftalabel) documentation for more information.

```tsx
'use client';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { Label } from '@primereact/ui/label';
import { Textarea } from '@primereact/ui/textarea';
import * as React from 'react';

export default function IftaLabelDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <IftaLabel>
                <Textarea
                    id="description"
                    value={value}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue(e.currentTarget.value)}
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                />
                <Label htmlFor="description">Description</Label>
            </IftaLabel>
        </div>
    );
}
```

### Sizes

Textarea provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

```tsx
import { Textarea } from '@primereact/ui/textarea';

export default function BasicDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Textarea size="small" placeholder="Small" rows={3} />
            <Textarea placeholder="Normal" rows={3} />
            <Textarea size="large" placeholder="Large" rows={3} />
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { Textarea } from '@primereact/ui/textarea';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <Textarea
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                invalid={value === ''}
                rows={5}
                cols={30}
            />
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { Textarea } from '@primereact/ui/textarea';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Textarea rows={5} cols={30} disabled />
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/textarea/features.md#api) for `Textarea` component documentation.

### Hooks

See [Headless API](../../headless/textarea/features.md#api) for `useTextarea` hook documentation.

## Accessibility

See [Textarea Primitive](../../primitive/textarea/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
