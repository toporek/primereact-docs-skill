# Textarea

Textarea is a multi-line text input element.

```tsx
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Preview() {
    return (
        <div className="flex flex-col justify-center gap-2 max-w-xs mx-auto">
            <Label className="font-semibold text-sm text-color">Description</Label>
            <Textarea rows={5} cols={30} placeholder="Write a description..." />
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/textarea.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Textarea } from '@/components/ui/textarea';
```

```tsx
<Textarea />
```

## Examples

### Basic

```tsx
import { Textarea } from '@/components/ui/textarea';

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
import { Textarea } from '@/components/ui/textarea';

export default function AutoResizeDemo() {
    return (
        <div className="flex justify-center">
            <Textarea autoResize rows={5} cols={30} />
        </div>
    );
}

```

### Sizes

Textarea provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

```tsx
import { Textarea } from '@/components/ui/textarea';

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

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
import { Textarea } from '@/components/ui/textarea';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <Textarea variant="filled" rows={5} cols={30} />
        </div>
    );
}

```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { Textarea } from '@/components/ui/textarea';
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
import { Textarea } from '@/components/ui/textarea';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Textarea rows={5} cols={30} disabled />
        </div>
    );
}

```

## Accessibility

### Screen Reader

`Textarea` renders a native `textarea` element. Provide an accessible name with a visible label, `aria-label`, or `aria-labelledby`.

### Keyboard Support

`Textarea` uses native textarea keyboard behavior.
