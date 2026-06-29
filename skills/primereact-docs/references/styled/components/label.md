# Label

Label provides accessible text labels for form controls. Use `htmlFor` to link the label to a form control by its id.

```tsx
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function Preview() {
    return (
        <div className="flex flex-col gap-2 w-full max-w-3xs mx-auto">
            <Label htmlFor="username">Username</Label>
            <InputText id="username" placeholder="Enter username" />
        </div>
    );
}

```

## Usage

```tsx
import { Label } from '@primereact/ui/label';
```

```tsx
<Label />
```

## Examples

### Basic

An accessible label element associated with a form control.

```tsx
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col gap-2 w-full max-w-sm">
                <Label htmlFor="username">Username</Label>
                <InputText id="username" placeholder="Enter username" />
            </div>
        </div>
    );
}

```

### Required

You can display required indicators in the label content while keeping the input semantics with `required` or `aria-required`.

```tsx
import { Envelope } from '@primeicons/react';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function RequiredDemo() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col gap-2 w-full max-w-sm">
                <Label htmlFor="email" className="font-medium">
                    <Envelope />
                    <span>Email</span>
                    <span aria-hidden="true">*</span>
                </Label>
                <InputText id="email" type="email" placeholder="name@example.com" required aria-required="true" />
            </div>
        </div>
    );
}

```

### Wrapper

`Label` can wrap a form control to associate them implicitly without `htmlFor`. Useful for card-style selectable options.

```tsx
'use client';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from '@primereact/ui/radiobuttongroup';
import * as React from 'react';

const plans = [
    { id: 'starter', name: 'Starter', description: 'For solo developers.' },
    { id: 'pro', name: 'Pro', description: 'For growing teams.' },
    { id: 'enterprise', name: 'Enterprise', description: 'For large organizations.' }
];

export default function WrapperDemo() {
    const [selected, setSelected] = React.useState<string>('pro');

    return (
        <div className="flex flex-wrap justify-center">
            <RadioButtonGroup
                value={selected}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setSelected(e.value as string)}
                className="flex flex-col w-full max-w-3xs gap-2"
            >
                {plans.map((plan) => (
                    <Label
                        key={plan.id}
                        className={`flex items-start gap-3 p-3 rounded-md border cursor-pointer ${selected === plan.id ? 'border-primary' : 'border-surface'}`}
                    >
                        <RadioButton.Root name="plan" value={plan.id}>
                            <RadioButton.Box>
                                <RadioButton.Indicator match="checked" />
                            </RadioButton.Box>
                        </RadioButton.Root>
                        <div className="flex flex-col gap-0.5">
                            <span className="font-medium">{plan.name}</span>
                            <span className="text-xs text-surface-500">{plan.description}</span>
                        </div>
                    </Label>
                ))}
            </RadioButtonGroup>
        </div>
    );
}

```

### Disabled

`Label` reflects the disabled state of an associated control automatically when the control and label are peers or when the container has `data-disabled`.

```tsx
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function DisabledDemo() {
    return (
        <div className="flex flex-col items-start max-w-3xs w-full mx-auto gap-6">
            <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="account-id">Account ID</Label>
                <InputText id="account-id" defaultValue="ACC-2026-0042" disabled />
            </div>

            <div data-disabled className="flex flex-col gap-2 w-full">
                <Label htmlFor="api-key">API Key</Label>
                <span>
                    <InputText id="api-key" defaultValue="sk_live_***************" disabled fluid />
                </span>
            </div>
        </div>
    );
}

```

## Accessibility

### Screen Reader

`Label` renders a native `label` element. Use `htmlFor` to associate it with a form control id, or wrap the form control inside the label.

### Keyboard Support

Component does not include any interactive elements.

# Label API

API documentation for Label component

## Label

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: LabelInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: LabelInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | LabelInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: LabelInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

> **API/props table for `Label` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| rootProps | UseLabelRootProps | null | Pre-built data attribute props for the root element. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of Label component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of Label component. | [object Object] |

## useLabel

### Props

> **API/props table for `useLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### State

> **API/props table for `useLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### Exposes

> **API/props table for `useLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### Interfaces

> **API/props table for `useLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### Types

> **API/props table for `useLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-label | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| label.gap | --p-label-gap | Gap of root |
| label.font.size | --p-label-font-size | Font size of root |
| label.font.weight | --p-label-font-weight | Font weight of root |
| label.text.color | --p-label-text-color | Text color of root |
| label.disabled.opacity | --p-label-disabled-opacity | Disabled opacity of root |
