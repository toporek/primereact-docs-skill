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

### Float Label

A floating label appears on top of the input field when focused. Visit [FloatLabel](https://primereact.dev/docs/components/floatlabel) documentation for more information.

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

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

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

## Related

### Sub-Components

See [Primitive API](../../primitive/components/textarea.md#api) for `Textarea` component documentation.

### Hooks

See [Headless API](../../headless/components/textarea.md#api) for `useTextarea` hook documentation.

### Accessibility

See [Textarea Primitive](../../primitive/components/textarea.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-textarea | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| textarea.background | --p-textarea-background | Background of root |
| textarea.disabled.background | --p-textarea-disabled-background | Disabled background of root |
| textarea.filled.background | --p-textarea-filled-background | Filled background of root |
| textarea.filled.hover.background | --p-textarea-filled-hover-background | Filled hover background of root |
| textarea.filled.focus.background | --p-textarea-filled-focus-background | Filled focus background of root |
| textarea.border.color | --p-textarea-border-color | Border color of root |
| textarea.hover.border.color | --p-textarea-hover-border-color | Hover border color of root |
| textarea.focus.border.color | --p-textarea-focus-border-color | Focus border color of root |
| textarea.invalid.border.color | --p-textarea-invalid-border-color | Invalid border color of root |
| textarea.color | --p-textarea-color | Color of root |
| textarea.disabled.color | --p-textarea-disabled-color | Disabled color of root |
| textarea.placeholder.color | --p-textarea-placeholder-color | Placeholder color of root |
| textarea.invalid.placeholder.color | --p-textarea-invalid-placeholder-color | Invalid placeholder color of root |
| textarea.shadow | --p-textarea-shadow | Shadow of root |
| textarea.padding.x | --p-textarea-padding-x | Padding x of root |
| textarea.padding.y | --p-textarea-padding-y | Padding y of root |
| textarea.border.radius | --p-textarea-border-radius | Border radius of root |
| textarea.focus.ring.width | --p-textarea-focus-ring-width | Focus ring width of root |
| textarea.focus.ring.style | --p-textarea-focus-ring-style | Focus ring style of root |
| textarea.focus.ring.color | --p-textarea-focus-ring-color | Focus ring color of root |
| textarea.focus.ring.offset | --p-textarea-focus-ring-offset | Focus ring offset of root |
| textarea.focus.ring.shadow | --p-textarea-focus-ring-shadow | Focus ring shadow of root |
| textarea.transition.duration | --p-textarea-transition-duration | Transition duration of root |
| textarea.sm.font.size | --p-textarea-sm-font-size | Sm font size of root |
| textarea.sm.padding.x | --p-textarea-sm-padding-x | Sm padding x of root |
| textarea.sm.padding.y | --p-textarea-sm-padding-y | Sm padding y of root |
| textarea.lg.font.size | --p-textarea-lg-font-size | Lg font size of root |
| textarea.lg.padding.x | --p-textarea-lg-padding-x | Lg padding x of root |
| textarea.lg.padding.y | --p-textarea-lg-padding-y | Lg padding y of root |
| textarea.font.weight | --p-textarea-font-weight | Font weight of root |
| textarea.font.size | --p-textarea-font-size | Font size of root |
