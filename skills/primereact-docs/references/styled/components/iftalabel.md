# IftaLabel

IftaLabel visually integrates a label with its form element.

```tsx
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function Preview() {
    return (
        <div className="mx-auto flex w-full max-w-3xs flex-col gap-1.5">
            <IftaLabel>
                <InputText id="name" fluid defaultValue="Isabella Reyes" />
                <Label htmlFor="name">Full Name</Label>
            </IftaLabel>
            <small className="text-surface-500 opacity-75">The label stays inside the field, above the value</small>
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

# IftaLabel API

API documentation for IftaLabel component

## IftaLabel

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: IftaLabelInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: IftaLabelInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | IftaLabelInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: IftaLabelInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

> **`IftaLabel` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/iftalabel or the installed `@primereact/types`.

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| rootProps | UseIftaLabelRootProps | null | Pre-built data attribute props for the root element. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of IftaLabel component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of IftaLabel component. | [object Object] |

## useIftaLabel

### Props

> **`useIftaLabel` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/iftalabel or the installed `@primereact/types`.

### State

> **`useIftaLabel` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/iftalabel or the installed `@primereact/types`.

### Exposes

> **`useIftaLabel` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/iftalabel or the installed `@primereact/types`.

### Interfaces

> **`useIftaLabel` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/iftalabel or the installed `@primereact/types`.

### Types

> **`useIftaLabel` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/iftalabel or the installed `@primereact/types`.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-iftalabel | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| iftalabel.color | --p-iftalabel-color | Color of root |
| iftalabel.focus.color | --p-iftalabel-focus-color | Focus color of root |
| iftalabel.invalid.color | --p-iftalabel-invalid-color | Invalid color of root |
| iftalabel.transition.duration | --p-iftalabel-transition-duration | Transition duration of root |
| iftalabel.position.x | --p-iftalabel-position-x | Position x of root |
| iftalabel.top | --p-iftalabel-top | Top of root |
| iftalabel.font.size | --p-iftalabel-font-size | Font size of root |
| iftalabel.font.weight | --p-iftalabel-font-weight | Font weight of root |
| iftalabel.input.padding.top | --p-iftalabel-input-padding-top | Padding top of input |
| iftalabel.input.padding.bottom | --p-iftalabel-input-padding-bottom | Padding bottom of input |
