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

### Clear Icon

Combine `InputText` with `IconField` to display a clear icon that resets the value when clicked.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ClearIconDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <IconField.Root>
                <InputText
                    className="w-56"
                    placeholder="Type something"
                    value={value}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                />
                <IconField.Inset>
                    {value !== '' && <Times className="cursor-pointer" onMouseDown={(e) => e.preventDefault()} onClick={() => setValue('')} />}
                </IconField.Inset>
            </IconField.Root>
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

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputtext.md#api) for `InputText` component documentation.

### Hooks

See [Headless API](../../headless/components/inputtext.md#api) for `useInputText` hook documentation.

### Accessibility

See [InputText Primitive](../../primitive/components/inputtext.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inputtext | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputtext.background | --p-inputtext-background | Background of root |
| inputtext.disabled.background | --p-inputtext-disabled-background | Disabled background of root |
| inputtext.filled.background | --p-inputtext-filled-background | Filled background of root |
| inputtext.filled.hover.background | --p-inputtext-filled-hover-background | Filled hover background of root |
| inputtext.filled.focus.background | --p-inputtext-filled-focus-background | Filled focus background of root |
| inputtext.border.color | --p-inputtext-border-color | Border color of root |
| inputtext.hover.border.color | --p-inputtext-hover-border-color | Hover border color of root |
| inputtext.focus.border.color | --p-inputtext-focus-border-color | Focus border color of root |
| inputtext.invalid.border.color | --p-inputtext-invalid-border-color | Invalid border color of root |
| inputtext.color | --p-inputtext-color | Color of root |
| inputtext.disabled.color | --p-inputtext-disabled-color | Disabled color of root |
| inputtext.placeholder.color | --p-inputtext-placeholder-color | Placeholder color of root |
| inputtext.invalid.placeholder.color | --p-inputtext-invalid-placeholder-color | Invalid placeholder color of root |
| inputtext.shadow | --p-inputtext-shadow | Shadow of root |
| inputtext.padding.x | --p-inputtext-padding-x | Padding x of root |
| inputtext.padding.y | --p-inputtext-padding-y | Padding y of root |
| inputtext.border.radius | --p-inputtext-border-radius | Border radius of root |
| inputtext.focus.ring.width | --p-inputtext-focus-ring-width | Focus ring width of root |
| inputtext.focus.ring.style | --p-inputtext-focus-ring-style | Focus ring style of root |
| inputtext.focus.ring.color | --p-inputtext-focus-ring-color | Focus ring color of root |
| inputtext.focus.ring.offset | --p-inputtext-focus-ring-offset | Focus ring offset of root |
| inputtext.focus.ring.shadow | --p-inputtext-focus-ring-shadow | Focus ring shadow of root |
| inputtext.transition.duration | --p-inputtext-transition-duration | Transition duration of root |
| inputtext.sm.font.size | --p-inputtext-sm-font-size | Sm font size of root |
| inputtext.sm.padding.x | --p-inputtext-sm-padding-x | Sm padding x of root |
| inputtext.sm.padding.y | --p-inputtext-sm-padding-y | Sm padding y of root |
| inputtext.lg.font.size | --p-inputtext-lg-font-size | Lg font size of root |
| inputtext.lg.padding.x | --p-inputtext-lg-padding-x | Lg padding x of root |
| inputtext.lg.padding.y | --p-inputtext-lg-padding-y | Lg padding y of root |
| inputtext.font.weight | --p-inputtext-font-weight | Font weight of root |
| inputtext.font.size | --p-inputtext-font-size | Font size of root |
