# Select

Select is used to choose an item from a collection of options.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const languages = [
    { label: 'Select your language', value: '' },
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Italiano', value: 'it' },
    { label: 'Türkçe', value: 'tr' },
    { label: '日本語', value: 'ja' },
    { label: '中文', value: 'zh' }
];

export default function Preview() {
    const [language, setLanguage] = React.useState<string>('');

    return (
        <div className="flex justify-center">
            <Select.Root
                value={language}
                onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as string)}
                options={languages}
                optionLabel="label"
                optionValue="value"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select a language" />
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
        </div>
    );
}
```

## Usage

```tsx
import { Select } from '@primereact/ui/select';
```

```tsx
<Select.Root>
    <Select.Trigger>
        <Select.Value />
        <Select.Clear />
        <Select.Indicator />
    </Select.Trigger>
    <Select.Portal>
        <Select.Positioner>
            <Select.Popup>
                <Select.Arrow />
                <Select.Header>
                    <Select.Filter />
                </Select.Header>
                <Select.List>
                    <Select.Option>
                        <Select.OptionIndicator />
                    </Select.Option>
                </Select.List>
                <Select.Empty />
                <Select.Footer />
            </Select.Popup>
        </Select.Positioner>
    </Select.Portal>
</Select.Root>
```

## Examples

### Basic

Choose a single value from a dropdown list of options.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const languages = [
    { label: 'Select your language', value: '' },
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Italiano', value: 'it' },
    { label: 'Türkçe', value: 'tr' },
    { label: '日本語', value: 'ja' },
    { label: '中文', value: 'zh' }
];

export default function BasicDemo() {
    const [language, setLanguage] = React.useState<string>('');

    return (
        <div className="flex justify-center">
            <Select.Root
                value={language}
                onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as string)}
                options={languages}
                optionLabel="label"
                optionValue="value"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select a language" />
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
        </div>
    );
}
```

### Sizes

Use the `size` property to change the size of a select.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select } from '@primereact/ui/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Select.Root options={cities} optionLabel="name" size="small" className="w-full md:w-56">
                <Select.Trigger>
                    <Select.Value placeholder="Small" />
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

            <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                <Select.Trigger>
                    <Select.Value placeholder="Normal" />
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

            <Select.Root options={cities} optionLabel="name" size="large" className="w-full md:w-56">
                <Select.Trigger>
                    <Select.Value placeholder="Large" />
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
        </div>
    );
}
```

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select } from '@primereact/ui/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <Select.Root options={cities} optionLabel="name" variant="filled" className="w-full md:w-56">
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
        </div>
    );
}
```

### Disabled

Use the `disabled` property to disable a select.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select } from '@primereact/ui/select';

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
            <Select.Root options={cities} optionLabel="name" disabled className="w-full md:w-56">
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
        </div>
    );
}
```

### Invalid

Specify the `invalid` property to display the component with a red border for validation errors.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function InvalidDemo() {
    const [value, setValue] = React.useState<string | null>(null);
    const [value2, setValue2] = React.useState<string | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <Select.Root
                options={cities}
                optionLabel="name"
                invalid={!value}
                className="w-full md:w-56"
                value={value}
                onValueChange={(event: SelectValueChangeEvent) => setValue(event.value as string)}
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

            <Select.Root
                options={cities}
                optionLabel="name"
                invalid={!value2}
                variant="filled"
                className="w-full md:w-56"
                value={value2}
                onValueChange={(event: SelectValueChangeEvent) => setValue2(event.value as string)}
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
        </div>
    );
}
```

### Multiple

Use the `multiple` prop to allow selecting more than one item. Place `Select.OptionIndicator` inside each option with a check icon to indicate the selection state.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Times } from '@primeicons/react/times';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const toppings = [
    { label: 'Pepperoni', value: 'pepperoni' },
    { label: 'Mushrooms', value: 'mushrooms' },
    { label: 'Onions', value: 'onions' },
    { label: 'Black Olives', value: 'olives' },
    { label: 'Green Peppers', value: 'peppers' },
    { label: 'Mozzarella', value: 'mozzarella' },
    { label: 'Basil', value: 'basil' },
    { label: 'Tomatoes', value: 'tomatoes' }
];

export default function MultipleDemo() {
    const [selected, setSelected] = React.useState<string[]>([]);

    const getLabel = () => {
        const first = toppings.find((t) => t.value === selected[0])?.label ?? selected[0];

        return selected.length > 1 ? `${first} (+${selected.length - 1} more)` : first;
    };

    return (
        <div className="flex justify-center">
            <Select.Root
                value={selected}
                onValueChange={(e: SelectValueChangeEvent) => setSelected(e.value as string[])}
                options={toppings}
                optionLabel="label"
                optionValue="value"
                multiple
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select toppings">{getLabel()}</Select.Value>
                    {selected.length > 0 && (
                        <Select.Clear>
                            <Times />
                        </Select.Clear>
                    )}
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.List>
                                {toppings.map((topping, index) => (
                                    <Select.Option key={topping.value} index={index} uKey={topping.value} className="gap-2">
                                        <Select.OptionIndicator className="data-unselected:invisible">
                                            <Check />
                                        </Select.OptionIndicator>
                                        {topping.label}
                                    </Select.Option>
                                ))}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

### Checkmark

Use `Select.OptionIndicator` inside `Select.Option` to display a visual checkmark next to selected options. Apply `data-unselected:invisible` to hide the indicator when the option is not selected.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const themes = [
    { label: 'Light', value: 'light', icon: '☀️', description: 'Clean and bright interface' },
    { label: 'Dark', value: 'dark', icon: '🌙', description: 'Easy on the eyes' },
    { label: 'System', value: 'system', icon: '💻', description: 'Match your device settings' },
    { label: 'High Contrast', value: 'high-contrast', icon: '◐', description: 'Maximum readability' }
];

export default function CheckmarkDemo() {
    const [theme, setTheme] = React.useState(themes[2]);

    return (
        <div className="flex justify-center">
            <Select.Root
                value={theme}
                onValueChange={(e: SelectValueChangeEvent) => setTheme(e.value as (typeof themes)[number])}
                options={themes}
                optionLabel="label"
                className="w-full md:w-64"
            >
                <Select.Trigger>
                    <Select.Value>
                        <span className="flex items-center gap-2">
                            <span>{theme?.icon}</span>
                            <span>{theme?.label}</span>
                        </span>
                    </Select.Value>
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.List>
                                {themes.map((t, index) => (
                                    <Select.Option key={t.value} index={index} uKey={t.value} className="justify-between">
                                        <div className="flex items-center gap-3 py-1">
                                            <span className="text-xl">{t.icon}</span>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{t.label}</span>
                                                <span className="text-xs text-surface-500">{t.description}</span>
                                            </div>
                                        </div>
                                        <Select.OptionIndicator className="ml-4 data-unselected:invisible">
                                            <Check />
                                        </Select.OptionIndicator>
                                    </Select.Option>
                                ))}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

### Checkbox Selection

Integrate `Checkbox` components inside options for a checkbox-based multiple selection experience with select all support.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Minus } from '@primeicons/react/minus';
import { Times } from '@primeicons/react/times';
import type { ListboxListInstance } from '@primereact/ui/listbox';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function CheckboxSelectionDemo() {
    const [selectedCities, setSelectedCities] = React.useState<string[]>([]);

    const isAllSelected = cities.every((city) => selectedCities.includes(city.code));
    const indeterminate = cities.some((city) => selectedCities.includes(city.code)) && !isAllSelected;

    const getLabel = () => {
        if (selectedCities.length === 0) return undefined;

        const first = cities.find((c) => c.code === selectedCities[0])?.name ?? selectedCities[0];

        return selectedCities.length > 1 ? `${first} (+${selectedCities.length - 1} more)` : first;
    };

    return (
        <div className="flex justify-center">
            <Select.Root
                value={selectedCities}
                onValueChange={(e: SelectValueChangeEvent) => setSelectedCities(e.value as string[])}
                options={cities}
                optionValue="code"
                optionKey="code"
                multiple
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select cities">{getLabel()}</Select.Value>
                    <Select.Clear>
                        <Times />
                    </Select.Clear>
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.Header>
                                <Checkbox.Root
                                    indeterminate={indeterminate}
                                    checked={isAllSelected}
                                    onCheckedChange={(e: CheckboxRootChangeEvent) =>
                                        setSelectedCities(e.checked ? cities.map((city) => city.code) : [])
                                    }
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
                            </Select.Header>
                            <Select.List>
                                {(instance: ListboxListInstance) => {
                                    const { listbox } = instance;
                                    const options = instance.options as typeof cities | undefined | null;

                                    return options?.map((option, index) => {
                                        const selected = listbox?.isSelected(option);

                                        return (
                                            <Select.Option key={index} uKey={option.code} className="gap-2">
                                                <Checkbox.Root defaultChecked={selected} tabIndex={-1} readOnly>
                                                    <Checkbox.Box>
                                                        <Checkbox.Indicator match="checked">
                                                            <Check />
                                                        </Checkbox.Indicator>
                                                    </Checkbox.Box>
                                                </Checkbox.Root>
                                                {option.name}
                                            </Select.Option>
                                        );
                                    });
                                }}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

### Chips

Display selected items as removable chips by composing `Chip` components inside `Select.Value`.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Times } from '@primeicons/react/times';
import { Avatar } from '@primereact/ui/avatar';
import { Chip, type ChipRootRemoveEvent } from '@primereact/ui/chip';
import { Select, type SelectRootInstance, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

interface Member {
    name: string;
    code: string;
    avatar: string;
}

const members: Member[] = [
    { name: 'Amy Elsner', code: 'AE', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png' },
    { name: 'Anna Fali', code: 'AF', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png' },
    { name: 'Asiya Javayant', code: 'AJ', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png' },
    { name: 'Bernardo Dominic', code: 'BD', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/bernardodominic.png' },
    { name: 'Elwin Sharvill', code: 'ES', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/elwinsharvill.png' },
    { name: 'Ioni Bowcher', code: 'IB', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png' },
    { name: 'Ivan Magalhaes', code: 'IM', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/ivanmagalhaes.png' },
    { name: 'Stephen Shaw', code: 'SS', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png' }
];

export default function ChipDemo() {
    const [selected, setSelected] = React.useState<string[]>([]);
    const selectRef = React.useRef<SelectRootInstance>(null);

    const removeItem = (e: ChipRootRemoveEvent, code: string) => {
        e.originalEvent.stopPropagation();
        const currentIndex = selected.indexOf(code);
        const next = selected.filter((c) => c !== code);

        setSelected(next);

        requestAnimationFrame(() => {
            if (currentIndex > 0) {
                const selectElement = selectRef.current?.elementRef.current;
                const removeButtons = selectElement?.querySelectorAll<HTMLElement>('[data-scope="chip"][data-part="remove"]');

                removeButtons?.[currentIndex - 1]?.focus();
            } else {
                selectRef.current?.focus();
            }
        });
    };

    return (
        <div className="flex justify-center">
            <Select.Root
                ref={selectRef}
                value={selected}
                onValueChange={(e: SelectValueChangeEvent) => setSelected(e.value as string[])}
                options={members}
                optionLabel="name"
                optionValue="code"
                multiple
                className="w-full"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select members">
                        {selected.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                                {selected.map((code) => {
                                    const member = members.find((m) => m.code === code);

                                    return member ? (
                                        <Chip.Root key={code} className="py-0" onRemove={(e: ChipRootRemoveEvent) => removeItem(e, code)}>
                                            <Chip.Start>
                                                <Avatar.Root className="size-full" shape="circle">
                                                    <Avatar.Image src={member.avatar} />
                                                    <Avatar.Fallback>{member.code}</Avatar.Fallback>
                                                </Avatar.Root>
                                            </Chip.Start>
                                            <Chip.Label className="text-xs">{member.name.split(' ')[0]}</Chip.Label>
                                            <Chip.Remove>
                                                <Times />
                                            </Chip.Remove>
                                        </Chip.Root>
                                    ) : null;
                                })}
                            </div>
                        ) : null}
                    </Select.Value>
                    <Select.Clear>
                        <Times />
                    </Select.Clear>
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.List>
                                {members.map((member, index) => (
                                    <Select.Option key={member.code} uKey={member.code} index={index} className="gap-2">
                                        <Avatar.Root shape="circle" className="w-7 h-7">
                                            <Avatar.Image src={member.avatar} />
                                            <Avatar.Fallback>{member.code}</Avatar.Fallback>
                                        </Avatar.Root>
                                        <span>{member.name}</span>
                                    </Select.Option>
                                ))}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

### Clear

Use `Select.Clear` inside the trigger to display a clear button that resets the selection.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Times } from '@primeicons/react/times';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const productCategories = [
    { label: 'Electronics', value: 'electronics', count: 1247 },
    { label: 'Clothing', value: 'clothing', count: 856 },
    { label: 'Garden', value: 'home', count: 634 },
    { label: 'Sports', value: 'sports', count: 421 },
    { label: 'Books', value: 'books', count: 2103 },
    { label: 'Toys', value: 'toys', count: 312 }
];

type CategoryOption = (typeof productCategories)[number] | null;

export default function ClearIconDemo() {
    const [category, setCategory] = React.useState<CategoryOption>(null);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
                <Select.Root
                    value={category}
                    onValueChange={(e: SelectValueChangeEvent) => setCategory(e.value as CategoryOption)}
                    options={productCategories}
                    optionLabel="label"
                    className="w-full md:w-56"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Category" />
                        <Select.Clear>
                            <Times />
                        </Select.Clear>
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List>
                                    {productCategories.map((cat, index) => (
                                        <Select.Option key={cat.value} index={index} uKey={cat.value}>
                                            <div className="flex items-center justify-between w-full">
                                                <span>{cat.label}</span>
                                                <Tag severity="secondary" rounded>
                                                    {cat.count}
                                                </Tag>
                                            </div>
                                        </Select.Option>
                                    ))}
                                </Select.List>
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
            </div>
        </div>
    );
}
```

### Filter

Add a search field inside the popup using `Select.Header` with `Select.Filter` to filter options. The `Select.Empty` component provides a message when no results match.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Search } from '@primeicons/react/search';
import { SelectValueChangeEvent } from 'primereact/select';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Select } from '@primereact/ui/select';
import Image from 'next/image';
import * as React from 'react';

type Country = {
    name: string;
    code: string;
};

const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'Turkey', code: 'TR' },
    { name: 'United States', code: 'US' }
];

export default function FilterDemo() {
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null);
    const [filterValue, setFilterValue] = React.useState<string>('');
    const filteredCountries = React.useMemo(
        () => countries.filter((country) => country.name.toLowerCase().startsWith(filterValue.toLowerCase())),
        [filterValue]
    );

    return (
        <div className="flex justify-center">
            <Select.Root
                options={filteredCountries}
                optionLabel="name"
                value={selectedCountry}
                onValueChange={(e: SelectValueChangeEvent) => setSelectedCountry(e.value as Country | null)}
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select a Country" />
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.Header>
                                <IconField.Root>
                                    <Select.Filter
                                        as={InputText}
                                        value={filterValue}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                                    />
                                    <IconField.Inset>
                                        <Search />
                                    </IconField.Inset>
                                </IconField.Root>
                            </Select.Header>
                            <Select.List style={{ maxHeight: '14rem' }}>
                                {filteredCountries.map((country, index) => (
                                    <Select.Option key={country.code} index={index} uKey={country.code}>
                                        <div className="flex items-center gap-2">
                                            <Image
                                                alt={country.name}
                                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                                className={`flag flag-${country.code.toLowerCase()} mr-2`}
                                                width={18}
                                                height={12}
                                                style={{ width: '18px', height: '12px' }}
                                            />
                                            <span>{country.name}</span>
                                        </div>
                                    </Select.Option>
                                ))}
                            </Select.List>
                            <Select.Empty className="text-sm">No countries found</Select.Empty>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

### Custom Option

Customize option content using a render function inside `Select.Option` that receives the option instance including the `selected` state.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Avatar } from '@primereact/ui/avatar';
import { Select, type SelectOptionInstance, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const teamMembers = [
    { id: 1, name: 'Sarah Chen', role: 'Engineering Lead', avatar: 'SC', status: 'away', className: 'bg-amber-400' },
    { id: 2, name: 'Alex Rivera', role: 'Senior Developer', avatar: 'AR', status: 'online', className: 'bg-green-400' },
    { id: 3, name: 'Jordan Kim', role: 'UX Designer', avatar: 'JK', status: 'away', className: 'bg-amber-400' },
    { id: 4, name: 'Taylor Morgan', role: 'Product Manager', avatar: 'TM', status: 'offline', className: 'bg-zinc-400' },
    { id: 5, name: 'Morgan Lee', role: 'DevOps Engineer', avatar: 'ML', status: 'online', className: 'bg-green-400' },
    { id: 6, name: 'Casey Jones', role: 'QA Engineer', avatar: 'CJ', status: 'busy', className: 'bg-red-400' }
];

type TeamMember = (typeof teamMembers)[number] | null;

export default function OptionDemo() {
    const [assignee, setAssignee] = React.useState<TeamMember>(null);

    return (
        <div className="flex justify-center">
            <Select.Root
                value={assignee}
                onValueChange={(e: SelectValueChangeEvent) => setAssignee(e.value as TeamMember)}
                options={teamMembers}
                optionLabel="name"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value>
                        {assignee ? (
                            <span className="flex items-center gap-2">
                                <span className={`inline-block w-2 h-2 rounded-full ${assignee.className}`} />
                                <span>{assignee.name}</span>
                            </span>
                        ) : (
                            <span className="text-surface-400">Select team member...</span>
                        )}
                    </Select.Value>
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.List style={{ maxHeight: '16rem' }}>
                                {teamMembers.map((member, index) => (
                                    <Select.Option key={member.id} index={index} uKey={String(member.id)}>
                                        {(instance: SelectOptionInstance) => {
                                            const { selected } = instance;

                                            return (
                                                <div className="flex items-center gap-3 py-1">
                                                    <div className="relative">
                                                        <Avatar.Root shape="circle" className="w-8 h-8">
                                                            <Avatar.Fallback>{member.avatar}</Avatar.Fallback>
                                                        </Avatar.Root>
                                                        <span
                                                            className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 ${selected ? 'border-primary-emphasis' : 'border-surface-0 dark:border-surface-900'} ${member.className}`}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span
                                                            className={`font-medium ${selected ? 'text-primary-contrast' : 'text-surface-900 dark:text-surface-0'}`}
                                                        >
                                                            {member.name}
                                                        </span>
                                                        <span
                                                            className={`text-xs ${selected ? 'text-primary-contrast/70' : 'text-surface-500 dark:text-surface-400'}`}
                                                        >
                                                            {member.role}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </Select.Option>
                                ))}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

### Group

#### Simple

Options can be grouped using the `optionGroupLabel` and `optionGroupChildren` properties.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const jobCategories = [
    {
        label: 'Engineering',
        code: 'eng',
        items: [
            { label: 'Frontend Developer', value: 'frontend' },
            { label: 'Backend Developer', value: 'backend' },
            { label: 'Full Stack Developer', value: 'fullstack' },
            { label: 'DevOps Engineer', value: 'devops' },
            { label: 'QA Engineer', value: 'qa' }
        ]
    },
    {
        label: 'Design',
        code: 'design',
        items: [
            { label: 'UI Designer', value: 'ui' },
            { label: 'UX Designer', value: 'ux' },
            { label: 'Product Designer', value: 'product-design' },
            { label: 'Brand Designer', value: 'brand' }
        ]
    },
    {
        label: 'Product',
        code: 'product',
        items: [
            { label: 'Product Manager', value: 'pm' },
            { label: 'Product Owner', value: 'po' },
            { label: 'Business Analyst', value: 'ba' }
        ]
    },
    {
        label: 'Marketing',
        code: 'marketing',
        items: [
            { label: 'Growth Manager', value: 'growth' },
            { label: 'Content Strategist', value: 'content' },
            { label: 'SEO Specialist', value: 'seo' }
        ]
    }
];

type Option = (typeof jobCategories)[number]['items'][number] | null;

export default function GroupDemo() {
    const [position, setPosition] = React.useState<Option | null>(null);

    return (
        <div className="flex justify-center">
            <Select.Root
                value={position}
                onValueChange={(e: SelectValueChangeEvent) => setPosition(e.value as Option)}
                options={jobCategories}
                optionLabel="label"
                optionValue="value"
                optionGroupLabel="label"
                optionGroupChildren="items"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select a position..." />
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.List style={{ maxHeight: '18rem' }} />
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

#### Custom

Customize group headers with custom rendering by accessing the list instance inside `Select.List`.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import type { ListboxListInstance } from '@primereact/ui/listbox';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

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
    const [selectedCity, setSelectedCity] = React.useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Select.Root
                value={selectedCity}
                onValueChange={(e: SelectValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={groupedCities}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select a city" />
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.List style={{ maxHeight: '18rem' }} className="p-0">
                                {(instance: ListboxListInstance) => {
                                    const { listbox, options } = instance;

                                    return (options as unknown[])?.map((option: unknown, index: number) => {
                                        const isGroup = listbox?.isOptionGroup(option);

                                        if (isGroup) {
                                            const optionGroup = (option as Record<string, unknown>).optionGroup as Record<string, string>;
                                            const code = optionGroup?.code;

                                            return (
                                                <Select.Option
                                                    key={index}
                                                    index={index}
                                                    group
                                                    className="flex items-center gap-2 sticky top-0 z-1 bg-surface-0 dark:bg-surface-900 border-b border-surface"
                                                >
                                                    <span>{countryFlags[code]}</span>
                                                    <span>{optionGroup?.label}</span>
                                                </Select.Option>
                                            );
                                        }

                                        const label = listbox?.getOptionLabel(option);

                                        return (
                                            <Select.Option key={index} index={index}>
                                                {label}
                                            </Select.Option>
                                        );
                                    });
                                }}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

#### Checkbox and Filter

Combine grouped options, checkbox selection, and a filter to create a rich multi-select experience with a compact trigger that displays the selection count.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Search } from '@primeicons/react/search';
import { Tag as TagIcon } from '@primeicons/react/tag';
import type { ListboxListInstance } from '@primereact/ui/listbox';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { Chip } from '@primereact/ui/chip';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const labelGroups = [
    {
        label: 'Critical',
        code: 'critical',
        items: [
            { label: 'Security', value: 'security' },
            {
                label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                value: 'lorem'
            }
        ]
    },
    {
        label: 'Optional',
        code: 'optional',
        items: [
            { label: 'Feature', value: 'feature' },
            { label: 'Other', value: 'other' }
        ]
    }
];

const allItems = labelGroups.flatMap((g) => g.items);

export default function GroupCheckboxFilterDemo() {
    const [selected, setSelected] = React.useState<string[]>(['security']);
    const [filterValue, setFilterValue] = React.useState<string>('');

    const filteredGroups = React.useMemo(() => {
        if (!filterValue) return labelGroups;

        return labelGroups
            .map((group) => ({
                ...group,
                items: group.items.filter((item) => item.label.toLowerCase().includes(filterValue.toLowerCase()))
            }))
            .filter((group) => group.items.length > 0);
    }, [filterValue]);

    const handleSelectAll = () => {
        const visibleValues = filteredGroups.flatMap((g) => g.items.map((i) => i.value));

        setSelected([...new Set([...selected, ...visibleValues])]);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelected([]);
    };

    const getTriggerLabel = () => {
        if (selected.length === 0) return null;

        const first = allItems.find((i) => i.value === selected[0])?.label ?? selected[0];

        return selected.length > 1 ? `${first} +${selected.length - 1}` : first;
    };

    return (
        <div className="flex justify-center">
            <Select.Root
                value={selected}
                onValueChange={(e: SelectValueChangeEvent) => setSelected(e.value as string[])}
                options={filteredGroups}
                optionLabel="label"
                optionValue="value"
                optionKey="value"
                optionGroupLabel="label"
                optionGroupChildren="items"
                multiple
                className="w-full md:w-64 border-0 bg-transparent shadow-none"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select labels" className="p-0">
                        {getTriggerLabel() && (
                            <Chip.Root className="bg-blue-50 dark:bg-blue-950 **:text-blue-700 dark:**:text-blue-300">
                                <Chip.Start>
                                    <TagIcon />
                                </Chip.Start>
                                <Chip.Label>{getTriggerLabel()}</Chip.Label>
                            </Chip.Root>
                        )}
                    </Select.Value>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.Header className="flex flex-col gap-2 p-2 border-b border-surface">
                                <IconField.Root>
                                    <IconField.Inset>
                                        <Search />
                                    </IconField.Inset>
                                    <Select.Filter
                                        as={InputText}
                                        value={filterValue}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                                        placeholder="Search..."
                                    />
                                </IconField.Root>
                                <div className="flex items-center gap-1 px-1">
                                    <Button variant="text" size="small" onClick={handleSelectAll}>
                                        Select All
                                    </Button>
                                    <Button variant="text" size="small" severity="secondary" onClick={handleClear}>
                                        Clear
                                    </Button>
                                </div>
                            </Select.Header>

                            <Select.List style={{ maxHeight: '18rem' }}>
                                {(instance: ListboxListInstance) => {
                                    const { listbox, options } = instance;

                                    return (options as unknown[])?.map((option: unknown, index: number) => {
                                        if (listbox?.isOptionGroup(option)) {
                                            const group = (option as Record<string, unknown>).optionGroup as Record<string, string>;

                                            return (
                                                <Select.Option
                                                    key={index}
                                                    index={index}
                                                    group
                                                    className="text-xs font-semibold text-surface-500 uppercase tracking-wide"
                                                >
                                                    {group?.label}
                                                </Select.Option>
                                            );
                                        }

                                        const isSelected = listbox?.isSelected(option) ?? false;

                                        return (
                                            <Select.Option key={index} index={index} className="gap-2">
                                                <Checkbox.Root defaultChecked={isSelected} tabIndex={-1} readOnly>
                                                    <Checkbox.Box>
                                                        <Checkbox.Indicator match="checked">
                                                            <Check />
                                                        </Checkbox.Indicator>
                                                    </Checkbox.Box>
                                                </Checkbox.Root>
                                                <span className="flex-1 truncate">{listbox?.getOptionLabel(option)}</span>
                                            </Select.Option>
                                        );
                                    });
                                }}
                            </Select.List>

                            <Select.Empty className="text-sm text-center py-4 text-surface-400">No labels found</Select.Empty>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

### Arrow

Use `Select.Arrow` inside the popup to display a visual arrow pointing to the trigger element.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const languages = [
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Italiano', value: 'it' },
    { label: 'Türkçe', value: 'tr' },
    { label: '日本語', value: 'ja' },
    { label: '中文', value: 'zh' }
];

export default function ArrowDemo() {
    const [language, setLanguage] = React.useState<string>('');

    return (
        <div className="flex justify-center">
            <Select.Root
                value={language}
                onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as string)}
                options={languages}
                optionLabel="label"
                optionValue="value"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select a language" />
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner sideOffset={12}>
                        <Select.Popup>
                            <Select.Arrow />
                            <Select.List />
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
```

### Float Label

Integrate with `FloatLabel` for animated label behavior with three variants: over, in, and on.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { Label } from '@primereact/ui/label';
import { Select } from '@primereact/ui/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function FloatLabelDemo() {
    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="over_label">
                        <Select.Value />
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

                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="in_label">
                        <Select.Value />
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

                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="on_label">
                        <Select.Value />
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

                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
```

### Ifta Label

Use `IftaLabel` for an infield top-aligned label pattern.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { Label } from '@primereact/ui/label';
import { Select } from '@primereact/ui/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <IftaLabel>
                <Select.Root options={cities} optionLabel="name" variant="filled" className="w-full md:w-56">
                    <Select.Trigger id="select">
                        <Select.Value />
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

                <Label htmlFor="select" className="mb-2">
                    City
                </Label>
            </IftaLabel>
        </div>
    );
}
```

### Fluid

Use the `fluid` property to make the select take up the full width of its container.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select } from '@primereact/ui/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function FluidDemo() {
    return (
        <div>
            <Select.Root options={cities} optionLabel="name" fluid>
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
        </div>
    );
}
```

### Focus Behavior

Customize keyboard and mouse focus behavior with `autoOptionFocus`, `selectOnFocus`, and `focusOnHover` props.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Button } from '@primereact/ui/button';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
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
                <Select.Root
                    value={selectedCity}
                    onValueChange={(e: SelectValueChangeEvent) => setSelectedCity(e.value as string | null)}
                    options={cities}
                    optionLabel="name"
                    optionValue="code"
                    autoOptionFocus={autoOptionFocus}
                    selectOnFocus={selectOnFocus}
                    focusOnHover={focusOnHover}
                    className="w-full md:w-56"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Select a city" />
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
            </div>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/select/features.md#api) for `SelectRoot`, `SelectTrigger`, `SelectList`, `SelectOption`, and other component documentation.

### Hooks

See [Headless API](../../headless/select/features.md#api) for `useSelect` hook documentation.

## Accessibility

See [Select Primitive](../../primitive/select/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
