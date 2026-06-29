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

# FloatLabel API

API documentation for FloatLabel component

## FloatLabel

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: FloatLabelInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: FloatLabelInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | FloatLabelInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: FloatLabelInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| variant | "on" \\| "in" \\| "over" | over | Defines the positioning of the label relative to the input. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

> **`FloatLabel` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel or the installed `@primereact/types`.

### Exposes

> **`FloatLabel` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel or the installed `@primereact/types`.

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of FloatLabel component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of FloatLabel component. | [object Object] |

## useFloatLabel

### Props

> **`useFloatLabel` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel or the installed `@primereact/types`.

### State

> **`useFloatLabel` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel or the installed `@primereact/types`.

### Exposes

> **`useFloatLabel` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel or the installed `@primereact/types`.

### Interfaces

> **`useFloatLabel` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel or the installed `@primereact/types`.

### Types

> **`useFloatLabel` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel or the installed `@primereact/types`.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-floatlabel | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| floatlabel.color | --p-floatlabel-color | Color of root |
| floatlabel.focus.color | --p-floatlabel-focus-color | Focus color of root |
| floatlabel.active.color | --p-floatlabel-active-color | Active color of root |
| floatlabel.invalid.color | --p-floatlabel-invalid-color | Invalid color of root |
| floatlabel.transition.duration | --p-floatlabel-transition-duration | Transition duration of root |
| floatlabel.position.x | --p-floatlabel-position-x | Position x of root |
| floatlabel.position.y | --p-floatlabel-position-y | Position y of root |
| floatlabel.font.size | --p-floatlabel-font-size | Font size of root |
| floatlabel.font.weight | --p-floatlabel-font-weight | Font weight of root |
| floatlabel.active.font.size | --p-floatlabel-active-font-size | Active font size of root |
| floatlabel.active.font.weight | --p-floatlabel-active-font-weight | Active font weight of root |
| floatlabel.over.active.top | --p-floatlabel-over-active-top | Active top of over |
| floatlabel.in.input.padding.top | --p-floatlabel-in-input-padding-top | Input padding top of in |
| floatlabel.in.input.padding.bottom | --p-floatlabel-in-input-padding-bottom | Input padding bottom of in |
| floatlabel.in.active.top | --p-floatlabel-in-active-top | Active top of in |
| floatlabel.on.border.radius | --p-floatlabel-on-border-radius | Border radius of on |
| floatlabel.on.active.background | --p-floatlabel-on-active-background | Active background of on |
| floatlabel.on.active.padding | --p-floatlabel-on-active-padding | Active padding of on |
