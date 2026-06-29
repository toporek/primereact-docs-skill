# InputGroup

InputGroup displays text, icon, buttons and other content can be grouped next to an input.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react';
import { User } from '@primeicons/react/user';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const phoneCodes = [
    { name: 'US', code: 'us', dial: '+1' },
    { name: 'GB', code: 'gb', dial: '+44' },
    { name: 'DE', code: 'de', dial: '+49' },
    { name: 'FR', code: 'fr', dial: '+33' },
    { name: 'TR', code: 'tr', dial: '+90' },
    { name: 'JP', code: 'jp', dial: '+81' },
    { name: 'BR', code: 'br', dial: '+55' },
    { name: 'IN', code: 'in', dial: '+91' }
];

export default function Preview() {
    const [selectedCode, setSelectedCode] = React.useState(phoneCodes[4]);

    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <User />
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>https://</InputGroup.Addon>
                <InputText placeholder="website" />
                <InputGroup.Addon>.com</InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon className="p-0!">
                    <Select.Root
                        value={selectedCode}
                        onValueChange={(e: SelectValueChangeEvent) => setSelectedCode(e.value as (typeof phoneCodes)[number])}
                        options={phoneCodes}
                        optionLabel="dial"
                        className="border-none! shadow-none! bg-transparent! w-24! h-full!"
                        size="small"
                    >
                        <Select.Trigger>
                            <Select.Value>
                                <div className="flex items-center h-full gap-1.5">
                                    <img
                                        alt={selectedCode.name}
                                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                        className={`flag flag-${selectedCode.code}`}
                                        style={{ width: '18px', height: '12px' }}
                                    />
                                    <span className="text-sm">{selectedCode.dial}</span>
                                </div>
                            </Select.Value>
                            <Select.Indicator>
                                <ChevronDown />
                            </Select.Indicator>
                        </Select.Trigger>
                        <Select.Portal>
                            <Select.Positioner>
                                <Select.Popup>
                                    <Select.List>
                                        {phoneCodes.map((item, index) => (
                                            <Select.Option key={item.code} index={index} uKey={item.code}>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        alt={item.name}
                                                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                                        className={`flag flag-${item.code}`}
                                                        style={{ width: '18px', height: '12px' }}
                                                    />
                                                    <span className="ml-auto">{item.dial}</span>
                                                </div>
                                            </Select.Option>
                                        ))}
                                    </Select.List>
                                </Select.Popup>
                            </Select.Positioner>
                        </Select.Portal>
                    </Select.Root>
                </InputGroup.Addon>
                <InputText placeholder="Phone number" />
            </InputGroup.Root>
        </div>
    );
}

```

## Usage

```tsx
import { InputGroup } from '@primereact/ui/inputgroup';
```

```tsx
<InputGroup.Root>
    <InputGroup.Addon />
</InputGroup.Root>
```

## Examples

### Basic

Combines an input with addons such as buttons or text labels.

```tsx
import { User } from '@primeicons/react/user';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <User></User>
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>https://</InputGroup.Addon>
                <InputText placeholder="website" />
                <InputGroup.Addon>.com</InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}

```

### Multiple

A group is created by wrapping the input and add-ons with the `InputGroup` component. Each add-on element is defined as a child of `InputGroup.Addon` component. Multiple add-ons can be placed inside the same group.

```tsx
'use client';
import { Clock } from '@primeicons/react';
import { StarFill } from '@primeicons/react/star-fill';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputNumber } from '@primereact/ui/inputnumber';
import React from 'react';

export default function MultipleDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <Clock />
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <StarFill></StarFill>
                </InputGroup.Addon>
                <InputNumber.Root as={React.Fragment}>
                    <InputNumber.Input placeholder="Price" />
                </InputNumber.Root>
                <InputGroup.Addon>$</InputGroup.Addon>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}

```

### Button

Buttons can be placed at either side of an input element.

```tsx
import { Button } from '@primereact/ui/button';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Check } from '@primeicons/react/check';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';

export default function ButtonDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <Button>Search</Button>
                <InputText placeholder="Keyword" className="border-r-0" />
                <InputGroup.Addon className="text-xs">8 results</InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputText placeholder="Keyword" />
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text" iconOnly>
                        <Search />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Button severity="secondary" iconOnly>
                        <Check />
                    </Button>
                </InputGroup.Addon>
                <InputText placeholder="Vote" />
                <InputGroup.Addon>
                    <Button severity="secondary" iconOnly>
                        <Times />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}

```

### Checkbox & Radio

Checkbox and RadioButton components can be combined with an input element under the same group.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { RadioButton } from '@primereact/ui/radiobutton';

export default function CheckboxRadioDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <InputText placeholder="Price" />
                <InputGroup.Addon>
                    <RadioButton.Root>
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Checkbox.Root>
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Checkbox.Root>
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                </InputGroup.Addon>
                <InputText placeholder="Website" />
                <InputGroup.Addon>
                    <RadioButton.Root>
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}

```

### Select

A Select component can be used within an InputGroup alongside other add-ons and inputs.

```tsx
'use client';
import { MapMarker } from '@primeicons/react';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const cities = [
    { label: 'Select a City', value: '' },
    { label: 'New York', value: 'ny' },
    { label: 'Rome', value: 'rm' },
    { label: 'London', value: 'ldn' },
    { label: 'Istanbul', value: 'ist' },
    { label: 'Paris', value: 'prs' }
];

export default function SelectDemo() {
    const [city, setCity] = React.useState<string>('');
    const [city2, setCity2] = React.useState<string>('');

    return (
        <div className="space-y-4 max-w-md mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <MapMarker />
                </InputGroup.Addon>
                <Select.Root
                    value={city}
                    onValueChange={(e: SelectValueChangeEvent) => setCity(e.value as string)}
                    options={cities}
                    optionLabel="label"
                    optionValue="value"
                    className="flex-1"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Select a City" />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List />
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>www</InputGroup.Addon>
                <InputText placeholder="Website" className="border-r-0!" />
                <Select.Root
                    value={city2}
                    onValueChange={(e: SelectValueChangeEvent) => setCity2(e.value as string)}
                    options={cities}
                    optionLabel="label"
                    optionValue="value"
                    className="flex-1"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Select a City" />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List />
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
            </InputGroup.Root>
        </div>
    );
}

```

### File Upload

File upload functionality can be integrated within an InputGroup for inline file selection.

```tsx
'use client';
import { Tag as TagIcon } from '@primeicons/react';
import { CloudUpload } from '@primeicons/react/cloud-upload';
import { Upload } from '@primeicons/react/upload';
import { Button } from '@primereact/ui/button';
import { FileUpload } from '@primereact/ui/fileupload';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { FileUploadRootInstance } from '@primereact/ui/fileupload';

export default function FileUploadDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 max-w-93 mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                <InputGroup.Root className="w-fit!">
                    <FileUpload.Root as={InputGroup.Addon} name="demo2[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="text" onClick={instance.choose} className="justify-start border-none">
                                <Upload />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Choose file'}
                            </Button>
                        )}
                    </FileUpload.Root>
                    <InputGroup.Addon>
                        <Button severity="secondary" variant="text">
                            <CloudUpload />
                        </Button>
                    </InputGroup.Addon>
                </InputGroup.Root>
                <InputGroup.Root className="flex-1! max-w-fit!">
                    <InputGroup.Addon>Upload</InputGroup.Addon>
                    <FileUpload.Root as={InputGroup.Addon} name="demo1[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="text" onClick={instance.choose} className="justify-start border-none">
                                <Upload />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Choose file'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Root>
            </div>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <TagIcon />
                </InputGroup.Addon>
                <InputText placeholder="Label" />
                <FileUpload.Root as={InputGroup.Addon} name="demo3[]" accept="image/*" maxFileSize={1000000}>
                    {(instance: FileUploadRootInstance) => (
                        <Button severity="secondary" variant="text" onClick={instance.choose} className="border-none">
                            <Upload />
                            {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Browse'}
                        </Button>
                    )}
                </FileUpload.Root>
            </InputGroup.Root>
        </div>
    );
}

```

### Float Label

FloatLabel visually integrates a label with its form element. Visit [FloatLabel](https://primereact.dev/docs/components/floatlabel) documentation for more information.

```tsx
'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';
import { User } from '@primeicons/react/user';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <User></User>
                </InputGroup.Addon>
                <FloatLabel>
                    <InputText id="over_label" value={value1} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)} />
                    <Label htmlFor="over_label">Over Label</Label>
                </FloatLabel>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FloatLabel variant="in">
                    <InputText id="in_label" value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} />
                    <Label htmlFor="in_label">In Label</Label>
                </FloatLabel>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>www</InputGroup.Addon>
                <FloatLabel variant="on">
                    <InputText id="on_label" value={value3} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)} />
                    <Label htmlFor="on_label">On Label</Label>
                </FloatLabel>
            </InputGroup.Root>
        </div>
    );
}

```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

```tsx
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import { User } from '@primeicons/react/user';

export default function IftaLabelDemo() {
    return (
        <div className="max-w-xs mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <User></User>
                </InputGroup.Addon>
                <IftaLabel>
                    <InputText id="name" defaultValue="Amy" />
                    <Label htmlFor="name">Name</Label>
                </IftaLabel>
            </InputGroup.Root>
        </div>
    );
}

```

## Accessibility

### Screen Reader

InputGroup and InputGroupAddon do not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.

# InputGroup API

API documentation for InputGroup component

## InputGroupRoot

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: InputGroupRootInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: InputGroupRootInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | InputGroupRootInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: InputGroupRootInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

> **`InputGroupRoot` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| rootProps | UseInputGroupRootProps | null | Pre-built data attribute props for the root element. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of InputGroup component. | [object Object],[object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of InputGroup component. | [object Object] |

## InputGroupAddon

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: InputGroupAddonInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: InputGroupAddonInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | InputGroupAddonInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: InputGroupAddonInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| inputgroup | InputGroupRootInstance | null | Instance of the InputGroup component. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of InputGroupAddon component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of InputGroupAddon component. | [object Object] |

## useInputGroup

### Props

> **`useInputGroup` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### State

> **`useInputGroup` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### Exposes

> **`useInputGroup` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### Interfaces

> **`useInputGroup` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### Types

> **`useInputGroup` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inputgroup | Class name of the root element |

| ClassName | Description |
|:------|:------|
| p-inputgroup-addon | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputgroup.addon.background | --p-inputgroup-addon-background | Background of addon |
| inputgroup.addon.border.color | --p-inputgroup-addon-border-color | Border color of addon |
| inputgroup.addon.color | --p-inputgroup-addon-color | Color of addon |
| inputgroup.addon.border.radius | --p-inputgroup-addon-border-radius | Border radius of addon |
| inputgroup.addon.padding | --p-inputgroup-addon-padding | Padding of addon |
| inputgroup.addon.min.width | --p-inputgroup-addon-min-width | Min width of addon |
| inputgroup.addon.font.weight | --p-inputgroup-addon-font-weight | Font weight of addon |
| inputgroup.addon.font.size | --p-inputgroup-addon-font-size | Font size of addon |
