# InputGroup

InputGroup displays text, icon, buttons and other content can be grouped next to an input.

```tsx
'use client';
import { User } from '@primeicons/react';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputText } from '@/components/ui/inputtext';
import {
    Select,
    SelectList,
    SelectOption,
    SelectPopup,
    SelectPortal,
    SelectPositioner,
    SelectTrigger,
    SelectValue,
    type SelectValueChangeEvent
} from '@/components/ui/select';
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
            <InputGroup>
                <InputGroupAddon>
                    <User />
                </InputGroupAddon>
                <InputText placeholder="Username" />
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>https://</InputGroupAddon>
                <InputText placeholder="website" />
                <InputGroupAddon>.com</InputGroupAddon>
            </InputGroup>

            <InputGroup>
                <InputGroupAddon className="p-0!">
                    <Select
                        value={selectedCode}
                        onValueChange={(e: SelectValueChangeEvent) => setSelectedCode(e.value)}
                        options={phoneCodes}
                        optionLabel="dial"
                        className="border-none! shadow-none! bg-transparent! w-24"
                        size="small"
                    >
                        <SelectTrigger>
                            <SelectValue>
                                <div className="flex items-center gap-1.5">
                                    <img
                                        alt={selectedCode.name}
                                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                        className={`flag flag-${selectedCode.code}`}
                                        style={{ width: '18px', height: '12px' }}
                                    />
                                    <span className="text-sm">{selectedCode.dial}</span>
                                </div>
                            </SelectValue>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectPositioner>
                                <SelectPopup>
                                    <SelectList>
                                        {phoneCodes.map((item, index) => (
                                            <SelectOption key={item.code} index={index} uKey={item.code}>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        alt={item.name}
                                                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                                        className={`flag flag-${item.code}`}
                                                        style={{ width: '18px', height: '12px' }}
                                                    />
                                                    <span className="ml-auto">{item.dial}</span>
                                                </div>
                                            </SelectOption>
                                        ))}
                                    </SelectList>
                                </SelectPopup>
                            </SelectPositioner>
                        </SelectPortal>
                    </Select>
                </InputGroupAddon>
                <InputText placeholder="Phone number" />
            </InputGroup>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/inputgroup
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
```

```tsx
<InputGroup>
    <InputGroupAddon>
        <i className="pi pi-user" />
    </InputGroupAddon>
    <InputText placeholder="Username" />
</InputGroup>
```

## Examples

### Basic

Combines an input with addons such as buttons or text labels.

```tsx
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputText } from '@/components/ui/inputtext';
import { User } from '@primeicons/react';

export default function BasicDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup>
                <InputGroupAddon>
                    <User></User>
                </InputGroupAddon>
                <InputText placeholder="Username" />
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>www</InputGroupAddon>
                <InputText placeholder="Website" />
            </InputGroup>
        </div>
    );
}
```

### Multiple

A group is created by wrapping the input and add-ons with the `InputGroup` component. Each add-on element is defined as a child of `InputGroupAddon` component. Multiple add-ons can be placed inside the same group.

```tsx
import { Clock, StarFill } from '@primeicons/react';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputNumber } from '@/components/ui/inputnumber';

export default function MultipleDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <InputGroup>
                <InputGroupAddon>
                    <Clock />
                </InputGroupAddon>
                <InputGroupAddon>
                    <StarFill></StarFill>
                </InputGroupAddon>
                <InputNumber placeholder="Price" />
                <InputGroupAddon>$</InputGroupAddon>
                <InputGroupAddon>.00</InputGroupAddon>
            </InputGroup>
        </div>
    );
}
```

### Button

Buttons can be placed at either side of an input element.

```tsx
import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputText } from '@/components/ui/inputtext';
import { Check, Search, Times } from '@primeicons/react';

export default function ButtonDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup>
                <Button>Search</Button>
                <InputText placeholder="Keyword" className="border-r-0" />
                <InputGroupAddon className="text-xs">8 results</InputGroupAddon>
            </InputGroup>

            <InputGroup>
                <InputText placeholder="Keyword" />
                <InputGroupAddon>
                    <Button severity="secondary" variant="text" iconOnly>
                        <Search />
                    </Button>
                </InputGroupAddon>
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>
                    <Button severity="secondary" iconOnly>
                        <Check />
                    </Button>
                </InputGroupAddon>
                <InputText placeholder="Vote" />
                <InputGroupAddon>
                    <Button severity="secondary" iconOnly>
                        <Times />
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
}
```

### Checkbox & Radio

Checkbox and RadioButton components can be combined with an input element under the same group.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { Checkbox } from '@/components/ui/checkbox';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputText } from '@/components/ui/inputtext';
import { RadioButton } from '@/components/ui/radiobutton';

export default function CheckboxRadioDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup>
                <InputText placeholder="Price" />
                <InputGroupAddon>
                    <RadioButton />
                </InputGroupAddon>
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>
                    <Checkbox />
                </InputGroupAddon>
                <InputText placeholder="Username" />
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>
                    <Checkbox />
                </InputGroupAddon>
                <InputText placeholder="Website" />
                <InputGroupAddon>
                    <RadioButton />
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
}
```

### Select

A Select component can be used within an InputGroup alongside other add-ons and inputs.

```tsx
'use client';
import { MapMarker } from '@primeicons/react';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputText } from '@/components/ui/inputtext';
import {
    Select,
    SelectList,
    SelectPopup,
    SelectPortal,
    SelectPositioner,
    SelectTrigger,
    SelectValue,
    type SelectValueChangeEvent
} from '@/components/ui/select';
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
            <InputGroup>
                <InputGroupAddon>
                    <MapMarker />
                </InputGroupAddon>
                <Select
                    value={city}
                    onValueChange={(e: SelectValueChangeEvent) => setCity(e.value as string)}
                    options={cities}
                    optionLabel="label"
                    optionValue="value"
                    className="flex-1"
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a City" />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectPositioner>
                            <SelectPopup>
                                <SelectList />
                            </SelectPopup>
                        </SelectPositioner>
                    </SelectPortal>
                </Select>
            </InputGroup>

            <InputGroup>
                <InputGroupAddon>www</InputGroupAddon>
                <InputText placeholder="Website" className="border-r-0" />
                <Select
                    value={city2}
                    onValueChange={(e: SelectValueChangeEvent) => setCity2(e.value as string)}
                    options={cities}
                    optionLabel="label"
                    optionValue="value"
                    className="flex-1"
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a City" />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectPositioner>
                            <SelectPopup>
                                <SelectList />
                            </SelectPopup>
                        </SelectPositioner>
                    </SelectPortal>
                </Select>
            </InputGroup>
        </div>
    );
}
```

## Accessibility

### Screen Reader

InputGroup and InputGroupAddon do not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
