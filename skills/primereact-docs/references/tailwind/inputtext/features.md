# InputText

InputText is an extension to standard input element with icons and theming.

```tsx
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';

export default function Preview() {
    return (
        <div className="flex flex-col gap-1.5 mx-auto w-full max-w-xs">
            <Label htmlFor="tw-basic-inputtext">Project Name</Label>
            <InputText id="tw-basic-inputtext" placeholder="e.g. My Project" />
            <small className="text-surface-500">Used as the display name across your workspace</small>
        </div>
    );
}
```

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/ui/inputtext
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { InputText } from '@/components/ui/inputtext';
```

```tsx
<InputText placeholder="Enter text" />
```

## Examples

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
import { InputText } from '@/components/ui/inputtext';

export default function FilledDemo() {
    return (
        <div className="flex justify-center [&>input]:max-w-3xs">
            <InputText placeholder="Enter text" variant="filled" />
        </div>
    );
}
```

### Sizes

InputText provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

```tsx
import { InputText } from '@/components/ui/inputtext';

export default function SizeDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputText size="small" placeholder="Small" className="max-w-3xs" />
            <InputText placeholder="Normal" className="max-w-2xs" />
            <InputText size="large" placeholder="Large" className="max-w-xs" />
            <InputText size="small" placeholder="Small" className="max-w-3xs" variant="filled" />
            <InputText placeholder="Normal" className="max-w-2xs" variant="filled" />
            <InputText size="large" placeholder="Large" className="max-w-xs" variant="filled" />
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```tsx
'use client';
import { InputText } from '@/components/ui/inputtext';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center [&>input]:max-w-3xs">
            <InputText
                value={value1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)}
                placeholder="Enter text"
                invalid={true}
            />
            <InputText
                value={value2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)}
                placeholder="Enter text"
                invalid={true}
                variant="filled"
            />
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { InputText } from '@/components/ui/inputtext';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center [&>input]:max-w-3xs">
            <InputText placeholder="Disabled" disabled />
        </div>
    );
}
```
