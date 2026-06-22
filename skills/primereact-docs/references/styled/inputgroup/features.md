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
                        onValueChange={(e: SelectValueChangeEvent) => setSelectedCode(e.value)}
                        options={phoneCodes}
                        optionLabel="dial"
                        className="border-none! shadow-none! bg-transparent! w-24"
                        size="small"
                    >
                        <Select.Trigger>
                            <Select.Value>
                                <div className="flex items-center gap-1.5">
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
import { Clock } from '@primeicons/react';
import { StarFill } from '@primeicons/react/star-fill';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputNumber } from '@primereact/ui/inputnumber';

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
                <InputNumber placeholder="Price" />
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
                <InputText placeholder="Website" className="border-r-0" />
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
import { FileUploadRootInstance } from 'primereact/fileupload';
import { Button } from '@primereact/ui/button';
import { FileUpload } from '@primereact/ui/fileupload';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function FileUploadDemo() {
    return (
        <div className="space-y-4 max-w-md mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>Upload</InputGroup.Addon>
                <InputGroup.Addon>
                    <FileUpload.Root name="demo1[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="outlined" onClick={instance.choose} className="flex-1 justify-start border-none">
                                <Upload className="mr-2" />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Choose file'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <FileUpload.Root name="demo2[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="outlined" onClick={instance.choose} className="flex-1 justify-start border-none">
                                <Upload className="mr-2" />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Choose file'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text">
                        <CloudUpload />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <TagIcon />
                </InputGroup.Addon>
                <InputText placeholder="Label" />
                <InputGroup.Addon>
                    <FileUpload.Root name="demo3[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="outlined" onClick={instance.choose} className="border-none">
                                <Upload className="mr-2" />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Browse'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
```

### Float Label

FloatLabel visually integrates a label with its form element. Visit [FloatLabel](https://v11.primereact.org/docs/components/floatlabel) documentation for more information.

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

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://v11.primereact.org/docs/components/iftalabel) documentation for more information.

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
