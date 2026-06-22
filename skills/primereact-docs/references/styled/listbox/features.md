# Listbox

Listbox is used to select one or more values from a list of items.

```tsx
import { Listbox } from '@primereact/ui/listbox';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function Preview() {
    return (
        <div className="flex justify-center">
            <Listbox.Root options={cities} optionLabel="name" className="w-full md:w-56">
                <Listbox.List />
            </Listbox.Root>
        </div>
    );
}
```

## Usage

```tsx
import { Listbox } from '@primereact/ui/listbox';
```

```tsx
<Listbox.Root>
    <Listbox.Header>
        <Listbox.Filter />
    </Listbox.Header>
    <Listbox.List>
        <Listbox.Option>
            <Listbox.OptionIndicator />
        </Listbox.Option>
    </Listbox.List>
    <Listbox.Empty />
    <Listbox.Footer />
</Listbox.Root>
```

## Examples

### Basic

Select one or multiple options from a scrollable list.

```tsx
import { Listbox } from '@primereact/ui/listbox';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Listbox.Root options={cities} optionLabel="name" className="w-full md:w-56">
                <Listbox.List />
            </Listbox.Root>
        </div>
    );
}
```

### Controlled

Use the `value` and `onValueChange` properties to control the selected value. The `optionLabel` and `optionValue` properties define the label and value fields of each option respectively.

```tsx
'use client';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function ControlledDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={cities}
                optionLabel="name"
                optionValue="code"
                className="w-full md:w-56"
            >
                <Listbox.List />
            </Listbox.Root>
        </div>
    );
}
```

### Focus Behavior

Use `autoOptionFocus` to control initial focused option behavior, `selectOnFocus` to select options while navigating with focus, and `focusOnHover` to move focus with mouse hover when the component is focused.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import * as React from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function FocusBehaviorDemo() {
    const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
    const [autoOptionFocus, setAutoOptionFocus] = React.useState(true);
    const [selectOnFocus, setSelectOnFocus] = React.useState(false);
    const [focusOnHover, setFocusOnHover] = React.useState(true);

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
                <Button size="small" severity={autoOptionFocus ? 'primary' : 'secondary'} onClick={() => setAutoOptionFocus((prev) => !prev)}>
                    autoOptionFocus: {String(autoOptionFocus)}
                </Button>
                <Button size="small" severity={selectOnFocus ? 'primary' : 'secondary'} onClick={() => setSelectOnFocus((prev) => !prev)}>
                    selectOnFocus: {String(selectOnFocus)}
                </Button>
                <Button size="small" severity={focusOnHover ? 'primary' : 'secondary'} onClick={() => setFocusOnHover((prev) => !prev)}>
                    focusOnHover: {String(focusOnHover)}
                </Button>
            </div>

            <div className="flex justify-center">
                <Listbox.Root
                    value={selectedCity}
                    onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                    options={cities}
                    optionLabel="name"
                    optionValue="code"
                    autoOptionFocus={autoOptionFocus}
                    selectOnFocus={selectOnFocus}
                    focusOnHover={focusOnHover}
                    className="w-full md:w-56"
                >
                    <Listbox.List />
                </Listbox.Root>
            </div>
        </div>
    );
}
```

### Option

Use the `Listbox.Option` component to define options manually. Each option requires a `uKey` or `index` prop for identification and the `optionKey` property on the root specifies the corresponding field from the data.

```tsx
'use client';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function OptionDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={cities}
                optionKey="code"
                className="w-full md:w-56"
            >
                <Listbox.List>
                    <Listbox.Option uKey="NY">New York</Listbox.Option>
                    <Listbox.Option uKey="RM">Rome</Listbox.Option>
                    <Listbox.Option uKey="LDN">London</Listbox.Option>
                    <Listbox.Option uKey="IST">Istanbul</Listbox.Option>
                    <Listbox.Option uKey="PRS">Paris</Listbox.Option>
                </Listbox.List>
            </Listbox.Root>
        </div>
    );
}
```

### Selection

#### Checkmark

Use the `Listbox.OptionIndicator` component to display a checkmark indicator next to the selected option. The `match` prop controls visibility based on selection state with values `always`, `selected`, or `unselected`.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function CheckmarkSelectionDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={cities}
                optionValue="code"
                optionKey="code"
                className="w-full md:w-56"
            >
                <Listbox.List>
                    {cities.map((option, index) => (
                        <Listbox.Option key={index} uKey={option.code} className="gap-2">
                            <Listbox.OptionIndicator className="data-unselected:invisible">
                                <Check />
                            </Listbox.OptionIndicator>
                            {option.name}
                        </Listbox.Option>
                    ))}
                </Listbox.List>
            </Listbox.Root>
        </div>
    );
}
```

#### Multiple

Use the `multiple` property to allow selecting more than one item. In this mode, the value should be an array.

```tsx
'use client';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function MultipleSelectionDemo() {
    const [selectedCity, setSelectedCity] = useState<string[] | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string[] | null)}
                options={cities}
                optionLabel="name"
                optionValue="code"
                multiple
                className="w-full md:w-56"
            >
                <Listbox.List />
            </Listbox.Root>
        </div>
    );
}
```

#### Meta Key Selection

Use `metaKeySelection` in multiple mode to require <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> for additive selection.

```tsx
'use client';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function MetaKeySelectionDemo() {
    const [selectedCities, setSelectedCities] = useState<string[] | null>(null);

    return (
        <div className="space-y-3">
            <p className="text-sm text-color-secondary text-center">
                Hold <kbd className="px-1 py-0.5 border rounded text-xs">Ctrl</kbd> (or <kbd className="px-1 py-0.5 border rounded text-xs">Cmd</kbd>{' '}
                on macOS) while selecting to keep existing selections.
            </p>
            <div className="flex justify-center">
                <Listbox.Root
                    value={selectedCities}
                    onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCities(e.value as string[] | null)}
                    options={cities}
                    optionLabel="name"
                    optionValue="code"
                    multiple
                    metaKeySelection
                    className="w-full md:w-56"
                >
                    <Listbox.List />
                </Listbox.Root>
            </div>
        </div>
    );
}
```

#### Checkbox

Combine the `multiple` property with the `Checkbox` component inside `Listbox.OptionIndicator` to render checkboxes for each option. A `Listbox.Header` can be used to add a select all control.

```tsx
'use client';
import { Check, Minus } from '@primeicons/react';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { Listbox, type ListboxListInstance, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function CheckboxDemo() {
    const [selectedCity, setSelectedCity] = useState<string[] | null>(null);

    const isAllSelected = cities.every((city) => selectedCity?.includes(city.code));
    const indeterminate = cities.some((city) => selectedCity?.includes(city.code)) && !isAllSelected;

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string[])}
                options={cities}
                optionValue="code"
                optionKey="code"
                multiple
                className="w-full md:w-56"
            >
                <Listbox.Header>
                    <Checkbox.Root
                        aria-label="Select all cities"
                        indeterminate={indeterminate}
                        checked={isAllSelected}
                        onCheckedChange={(e: CheckboxRootChangeEvent) => setSelectedCity(e.checked ? cities.map((city) => city.code) : [])}
                        className="ml-1.5"
                    >
                        <Checkbox.Box>
                            <Checkbox.Indicator match="checked">
                                <Check />
                            </Checkbox.Indicator>
                            <Checkbox.Indicator match="indeterminate">
                                <Minus />
                            </Checkbox.Indicator>
                        </Checkbox.Box>
                    </Checkbox.Root>
                </Listbox.Header>
                <Listbox.List>
                    {(instance: ListboxListInstance) => {
                        const { listbox } = instance;
                        const options = instance.options as typeof cities | undefined | null;

                        return options?.map((option, index) => {
                            const selected = listbox?.isSelected(option);

                            return (
                                <Listbox.Option key={index} uKey={option.code} className="gap-2">
                                    <Checkbox.Root defaultChecked={!!selected} tabIndex={-1} readOnly>
                                        <Checkbox.Box>
                                            <Checkbox.Indicator match="checked">
                                                <Check />
                                            </Checkbox.Indicator>
                                        </Checkbox.Box>
                                    </Checkbox.Root>
                                    {option.name}
                                </Listbox.Option>
                            );
                        });
                    }}
                </Listbox.List>
            </Listbox.Root>
        </div>
    );
}
```

### Group

#### Simple

Use the `optionGroupLabel` and `optionGroupChildren` properties to organize options into groups.

```tsx
'use client';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const groupedCities = [
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
];

export default function GroupDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={groupedCities}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                className="w-full md:w-56"
            >
                <Listbox.List style={{ maxHeight: '250px' }} />
            </Listbox.Root>
        </div>
    );
}
```

#### Custom

Use the `Listbox.Option` component with the `group` prop to customize group headers with custom content like icons or flags.

```tsx
'use client';
import { Listbox, type ListboxListInstance, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const groupedCities = [
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
];

const countryFlags: Record<string, string> = {
    DE: '\uD83C\uDDE9\uD83C\uDDEA',
    US: '\uD83C\uDDFA\uD83C\uDDF8',
    JP: '\uD83C\uDDEF\uD83C\uDDF5'
};

export default function CustomGroupDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={groupedCities}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                className="w-full md:w-56 overflow-hidden"
            >
                <Listbox.List style={{ maxHeight: '250px' }} className="p-0">
                    {(instance: ListboxListInstance) => {
                        const { listbox, options } = instance;

                        return (options as unknown[])?.map((option: unknown, index: number) => {
                            const isGroup = listbox?.isOptionGroup(option);

                            if (isGroup) {
                                const optionGroup = (option as Record<string, unknown>).optionGroup as Record<string, string>;
                                const code = optionGroup?.code;

                                return (
                                    <Listbox.Option
                                        key={index}
                                        index={index}
                                        group
                                        className="flex items-center gap-2 sticky top-0 z-1 bg-surface-0 dark:bg-surface-900 border-b border-surface"
                                    >
                                        <span>{countryFlags[code]}</span>
                                        <span>{optionGroup?.label}</span>
                                    </Listbox.Option>
                                );
                            }

                            const label = listbox?.getOptionLabel(option);

                            return (
                                <Listbox.Option key={index} index={index}>
                                    {label}
                                </Listbox.Option>
                            );
                        });
                    }}
                </Listbox.List>
            </Listbox.Root>
        </div>
    );
}
```

### Filter

Place a `Listbox.Filter` component inside `Listbox.Header` to add a search input. Use the `as` prop to render any input component and control the filtering logic with `onChange`. A `Listbox.Empty` component displays a message when no options match.

```tsx
'use client';
import { Search } from '@primeicons/react/search';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useMemo, useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function FilterDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [filterValue, setFilterValue] = useState<string>('');
    const filteredCities = useMemo(() => cities.filter((city) => city.name.toLowerCase().startsWith(filterValue.toLowerCase())), [filterValue]);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={filteredCities}
                optionLabel="name"
                optionValue="code"
                className="w-full md:w-56"
            >
                <Listbox.Header>
                    <IconField.Root>
                        <Listbox.Filter
                            as={InputText}
                            placeholder="Search city"
                            value={filterValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                        />
                        <IconField.Inset>
                            <Search />
                        </IconField.Inset>
                    </IconField.Root>
                </Listbox.Header>
                <Listbox.List />
                <Listbox.Empty>No options found</Listbox.Empty>
            </Listbox.Root>
        </div>
    );
}
```

### Invalid

Use the `invalid` property to indicate a validation error.

```tsx
'use client';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function InvalidDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={cities}
                optionLabel="name"
                optionValue="code"
                invalid={selectedCity === null}
                className="w-full md:w-56"
            >
                <Listbox.List />
            </Listbox.Root>
        </div>
    );
}
```

### Disabled

Use the `disabled` property to prevent interaction.

```tsx
import { Listbox } from '@primereact/ui/listbox';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Listbox.Root options={cities} optionLabel="name" optionValue="code" disabled className="w-full md:w-56">
                <Listbox.List />
            </Listbox.Root>
        </div>
    );
}
```

### Disabled Options

Use `optionDisabled` to disable specific items by field name while keeping the listbox itself interactive.

```tsx
'use client';
import { Listbox, type ListboxRootValueChangeEvent } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN', disabled: true },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS', disabled: true }
];

export default function OptionDisabledDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox.Root
                value={selectedCity}
                onValueChange={(e: ListboxRootValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={cities}
                optionLabel="name"
                optionValue="code"
                optionDisabled="disabled"
                className="w-full md:w-56"
            >
                <Listbox.List />
            </Listbox.Root>
        </div>
    );
}
```

### API

### Sub-Components

See [Primitive API](../../primitive/listbox/features.md#api) for `ListboxRoot`, `ListboxList`, `ListboxOption`, `ListboxOptionIndicator`, `ListboxHeader`, `ListboxFilter`, `ListboxEmpty`, `ListboxFooter` component documentation.

### Hooks

See [Headless API](../../headless/listbox/features.md#api) for `useListbox` and `useListboxOption` hook documentation.

## Accessibility

See [Listbox Primitive](../../primitive/listbox/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
