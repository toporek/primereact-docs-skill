# InputText

InputText is an extension to standard input element with icons and theming.

```tsx
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function Preview() {
    return (
        <div className="flex flex-col gap-1.5 mx-auto w-full max-w-xs">
            <Label htmlFor="basic-inputtext">Project Name</Label>
            <InputText id="basic-inputtext" placeholder="e.g. My Project" />
            <small className="text-surface-500">Used as the display name across your workspace</small>
        </div>
    );
}
```

## Usage

```tsx
import { InputText } from '@primereact/ui/inputtext';
```

```tsx
<InputText />
```

## Examples

### Basic

A plain text input with support for controlled and uncontrolled modes.

```tsx
import { InputText } from '@primereact/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <InputText placeholder="Enter text" />
        </div>
    );
}
```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
import { InputText } from '@primereact/ui/inputtext';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <InputText placeholder="Enter text" variant="filled" />
        </div>
    );
}
```

### Sizes

InputText provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

```tsx
import { InputText } from '@primereact/ui/inputtext';

export default function SizeDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputText size="small" placeholder="Small" />
            <InputText placeholder="Normal" />
            <InputText size="large" placeholder="Large" />
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center">
            <InputText
                value={value1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)}
                placeholder="Enter text"
                invalid={value1 === ''}
            />
            <InputText
                value={value2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)}
                placeholder="Enter text"
                invalid={value2 === ''}
                variant="filled"
            />
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { InputText } from '@primereact/ui/inputtext';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputText placeholder="Disabled" disabled />
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/inputtext/features.md#api) for `InputText` component documentation.

### Hooks

See [Headless API](../../headless/inputtext/features.md#api) for `useInputText` hook documentation.

## Accessibility

See [InputText Primitive](../../primitive/inputtext/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
