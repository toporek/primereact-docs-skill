# Select

Select is used to choose an item from a collection of options.

```tsx
'use client';
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                value={language}
                onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as string)}
                options={languages}
                optionLabel="label"
                optionValue="value"
                className="w-full md:w-56"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {languages.map((language, index) => (
                                    <SelectOption key={index} index={index}>
                                        {language.label}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/select
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
```

```tsx
<Select options={items} optionLabel="label" optionValue="value">
    <SelectTrigger>
        <SelectValue placeholder="Select an item" />
    </SelectTrigger>
    <SelectPortal>
        <SelectPositioner>
            <SelectPopup>
                <SelectList>
                    {items.map((item, index) => (
                        <SelectOption key={index} index={index}>
                            {item.label}
                        </SelectOption>
                    ))}
                </SelectList>
            </SelectPopup>
        </SelectPositioner>
    </SelectPortal>
</Select>
```

## Examples

### Basic

Choose a single value from a dropdown list of options.

```tsx
'use client';
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                value={language}
                onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as string)}
                options={languages}
                optionLabel="label"
                optionValue="value"
                className="w-full md:w-56"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {languages.map((language, index) => (
                                    <SelectOption key={index} index={index}>
                                        {language.label}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Sizes

Use the `size` property to change the size of a select.

```tsx
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';

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
            <Select options={cities} optionLabel="name" size="small" className="w-full md:w-56">
                <SelectTrigger>
                    <SelectValue placeholder="Small" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {cities.map((city, index) => (
                                    <SelectOption key={index} index={index}>
                                        {city.name}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>

            <Select options={cities} optionLabel="name" className="w-full md:w-56">
                <SelectTrigger>
                    <SelectValue placeholder="Normal" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {cities.map((city, index) => (
                                    <SelectOption key={index} index={index}>
                                        {city.name}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>

            <Select options={cities} optionLabel="name" size="large" className="w-full md:w-56">
                <SelectTrigger>
                    <SelectValue placeholder="Large" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {cities.map((city, index) => (
                                    <SelectOption key={index} index={index}>
                                        {city.name}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';

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
            <Select options={cities} optionLabel="name" variant="filled" className="w-full md:w-56">
                <SelectTrigger>
                    <SelectValue placeholder="Select a City" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {cities.map((city, index) => (
                                    <SelectOption key={index} index={index}>
                                        {city.name}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Disabled

Use the `disabled` property to disable a select.

```tsx
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';

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
            <Select options={cities} optionLabel="name" disabled className="w-full md:w-56">
                <SelectTrigger>
                    <SelectValue placeholder="Select a City" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {cities.map((city, index) => (
                                    <SelectOption key={index} index={index}>
                                        {city.name}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Invalid

Specify the `invalid` property to display the component with a red border for validation errors.

```tsx
'use client';
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                options={cities}
                optionLabel="name"
                invalid={!value}
                className="w-full md:w-56"
                value={value}
                onValueChange={(event: SelectValueChangeEvent) => setValue(event.value as string)}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a City" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {cities.map((city, index) => (
                                    <SelectOption key={index} index={index}>
                                        {city.name}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>

            <Select
                options={cities}
                optionLabel="name"
                invalid={!value2}
                variant="filled"
                className="w-full md:w-56"
                value={value2}
                onValueChange={(event: SelectValueChangeEvent) => setValue2(event.value as string)}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a City" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {cities.map((city, index) => (
                                    <SelectOption key={index} index={index}>
                                        {city.name}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Multiple

Use the `multiple` prop to allow selecting more than one item. Place `Select.OptionIndicator` inside each option with a check icon to indicate the selection state.

```tsx
'use client';
import {
    Select,
    SelectClear,
    SelectList,
    SelectOption,
    SelectPopup,
    SelectPortal,
    SelectPositioner,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Times } from '@primeicons/react';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                value={selected}
                onValueChange={(e: SelectValueChangeEvent) => setSelected(e.value as string[])}
                options={toppings}
                optionLabel="label"
                optionValue="value"
                multiple
                className="w-full md:w-56"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select toppings">{getLabel()}</SelectValue>
                    {selected.length > 0 && (
                        <SelectClear>
                            <Times />
                        </SelectClear>
                    )}
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {toppings.map((topping, index) => (
                                    <SelectOption key={topping.value} index={index} uKey={topping.value}>
                                        {topping.label}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Chips

Display selected items as removable chips by composing `Chip` components inside `Select.Value`.

```tsx
'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Chip, ChipLabel, ChipRemove, ChipStart } from '@/components/ui/chip';
import {
    Select,
    SelectClear,
    SelectList,
    SelectOption,
    SelectPopup,
    SelectPortal,
    SelectPositioner,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Times } from '@primeicons/react';
import type { ChipRootRemoveEvent } from 'primereact/chip';
import type { SelectRootInstance, SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                ref={selectRef}
                value={selected}
                onValueChange={(e: SelectValueChangeEvent) => setSelected(e.value as string[])}
                options={members}
                optionLabel="name"
                optionValue="code"
                multiple
                className="w-full"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select members">
                        {selected.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                                {selected.map((code) => {
                                    const member = members.find((m) => m.code === code);

                                    return member ? (
                                        <Chip key={code} className="py-0" onRemove={(e: ChipRootRemoveEvent) => removeItem(e, code)}>
                                            <ChipStart>
                                                <Avatar className="size-full" shape="circle">
                                                    <AvatarImage src={member.avatar} />
                                                    <AvatarFallback>{member.code}</AvatarFallback>
                                                </Avatar>
                                            </ChipStart>
                                            <ChipLabel className="text-xs">{member.name.split(' ')[0]}</ChipLabel>
                                            <ChipRemove>
                                                <Times />
                                            </ChipRemove>
                                        </Chip>
                                    ) : null;
                                })}
                            </div>
                        ) : null}
                    </SelectValue>
                    <SelectClear>
                        <Times />
                    </SelectClear>
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {members.map((member, index) => (
                                    <SelectOption key={member.code} uKey={member.code} index={index} className="gap-2">
                                        <Avatar shape="circle" className="w-7 h-7">
                                            <AvatarImage src={member.avatar} />
                                            <AvatarFallback>{member.code}</AvatarFallback>
                                        </Avatar>
                                        <span>{member.name}</span>
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Clear

Use `Select.Clear` inside the trigger to display a clear button that resets the selection.

```tsx
'use client';
import {
    Select,
    SelectClear,
    SelectList,
    SelectOption,
    SelectPopup,
    SelectPortal,
    SelectPositioner,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Tag } from '@/components/ui/tag';
import { Times } from '@primeicons/react';
import type { SelectValueChangeEvent } from 'primereact/select';
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
                <Select
                    value={category}
                    onValueChange={(e: SelectValueChangeEvent) => setCategory(e.value as CategoryOption)}
                    options={productCategories}
                    optionLabel="label"
                    className="w-full md:w-56"
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Category" />
                        <SelectClear>
                            <Times />
                        </SelectClear>
                    </SelectTrigger>

                    <SelectPortal>
                        <SelectPositioner>
                            <SelectPopup>
                                <SelectList>
                                    {productCategories.map((cat, index) => (
                                        <SelectOption key={cat.value} index={index} uKey={cat.value}>
                                            <div className="flex items-center justify-between w-full">
                                                <span>{cat.label}</span>
                                                <Tag severity="secondary" rounded>
                                                    {cat.count}
                                                </Tag>
                                            </div>
                                        </SelectOption>
                                    ))}
                                </SelectList>
                            </SelectPopup>
                        </SelectPositioner>
                    </SelectPortal>
                </Select>
            </div>
        </div>
    );
}
```

### Filter

Add a search field inside the popup using `Select.Header` with `Select.Filter` to filter options. The `Select.Empty` component provides a message when no results match.

```tsx
'use client';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { InputText } from '@/components/ui/inputtext';
import {
    Select,
    SelectEmpty,
    SelectFilter,
    SelectHeader,
    SelectList,
    SelectOption,
    SelectPopup,
    SelectPortal,
    SelectPositioner,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Search } from '@primeicons/react';
import Image from 'next/image';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                options={filteredCountries}
                optionLabel="name"
                value={selectedCountry}
                onValueChange={(e: SelectValueChangeEvent) => setSelectedCountry(e.value as Country | null)}
                className="w-full md:w-56"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a Country" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup className="w-(--positioner-anchor-width)">
                            <SelectHeader>
                                <IconField>
                                    <SelectFilter
                                        as={InputText}
                                        value={filterValue}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                                    />
                                    <IconFieldInset>
                                        <Search />
                                    </IconFieldInset>
                                </IconField>
                            </SelectHeader>
                            <SelectList>
                                {filteredCountries.map((country, index) => (
                                    <SelectOption key={country.code} index={index} uKey={country.code}>
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
                                    </SelectOption>
                                ))}
                            </SelectList>
                            <SelectEmpty className="text-sm">No countries found</SelectEmpty>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Group

#### Simple

Options can be grouped using the `optionGroupLabel` and `optionGroupChildren` properties.

```tsx
'use client';
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                value={position}
                onValueChange={(e: SelectValueChangeEvent) => setPosition(e.value as Option)}
                options={jobCategories}
                optionLabel="label"
                optionValue="value"
                optionGroupLabel="label"
                optionGroupChildren="items"
                className="w-full md:w-56"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a position..." />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {(() => {
                                    let index = 0;
                                    return jobCategories.flatMap((category) => [
                                        <SelectOption key={`group-${category.code}`} index={index++} group>
                                            {category.label}
                                        </SelectOption>,
                                        ...category.items.map((item) => (
                                            <SelectOption key={item.value} index={index++}>
                                                {item.label}
                                            </SelectOption>
                                        ))
                                    ]);
                                })()}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

#### Custom

Customize group headers with custom rendering by accessing the list instance inside `Select.List`.

```tsx
'use client';
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { ListboxListInstance } from 'primereact/listbox';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                value={selectedCity}
                onValueChange={(e: SelectValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={groupedCities}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                className="w-full md:w-56"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a city" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {(instance: ListboxListInstance) => {
                                    const { listbox, options } = instance;

                                    return (options as unknown[])?.map((option: unknown, index: number) => {
                                        const isGroup = listbox?.isOptionGroup(option);

                                        if (isGroup) {
                                            const optionGroup = (option as Record<string, unknown>).optionGroup as Record<string, string>;
                                            const code = optionGroup?.code;

                                            return (
                                                <SelectOption
                                                    key={index}
                                                    index={index}
                                                    group
                                                    className="flex items-center gap-2 sticky top-0 z-1 bg-surface-0 dark:bg-surface-900 border-b border-surface"
                                                >
                                                    <span>{countryFlags[code]}</span>
                                                    <span>{optionGroup?.label}</span>
                                                </SelectOption>
                                            );
                                        }

                                        const label = listbox?.getOptionLabel(option);

                                        return (
                                            <SelectOption key={index} index={index}>
                                                {label}
                                            </SelectOption>
                                        );
                                    });
                                }}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Arrow

Use `Select.Arrow` inside the popup to display a visual arrow pointing to the trigger element.

```tsx
'use client';
import {
    Select,
    SelectArrow,
    SelectList,
    SelectOption,
    SelectPopup,
    SelectPortal,
    SelectPositioner,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import type { SelectValueChangeEvent } from 'primereact/select';
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
            <Select
                value={language}
                onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as string)}
                options={languages}
                optionLabel="label"
                optionValue="value"
                className="w-full md:w-56"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner sideOffset={12}>
                        <SelectPopup>
                            <SelectArrow />
                            <SelectList>
                                {languages.map((language, index) => (
                                    <SelectOption key={index} index={index}>
                                        {language.label}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Fluid

Use the `fluid` property to make the select take up the full width of its container.

```tsx
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';

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
            <Select options={cities} optionLabel="name" fluid>
                <SelectTrigger>
                    <SelectValue placeholder="Select a City" />
                </SelectTrigger>

                <SelectPortal>
                    <SelectPositioner>
                        <SelectPopup>
                            <SelectList>
                                {cities.map((city, index) => (
                                    <SelectOption key={index} index={index}>
                                        {city.name}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectPopup>
                    </SelectPositioner>
                </SelectPortal>
            </Select>
        </div>
    );
}
```

### Focus Behavior

Customize keyboard and mouse focus behavior with `autoOptionFocus`, `selectOnFocus`, and `focusOnHover` props.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Select, SelectList, SelectOption, SelectPopup, SelectPortal, SelectPositioner, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { SelectValueChangeEvent } from 'primereact/select';
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
                <Button size="small" severity={autoOptionFocus ? undefined : 'secondary'} onClick={() => setAutoOptionFocus((prev) => !prev)}>
                    autoOptionFocus: {String(autoOptionFocus)}
                </Button>
                <Button size="small" severity={selectOnFocus ? undefined : 'secondary'} onClick={() => setSelectOnFocus((prev) => !prev)}>
                    selectOnFocus: {String(selectOnFocus)}
                </Button>
                <Button size="small" severity={focusOnHover ? undefined : 'secondary'} onClick={() => setFocusOnHover((prev) => !prev)}>
                    focusOnHover: {String(focusOnHover)}
                </Button>
            </div>

            <div className="flex justify-center">
                <Select
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
                    <SelectTrigger>
                        <SelectValue placeholder="Select a city" />
                    </SelectTrigger>

                    <SelectPortal>
                        <SelectPositioner>
                            <SelectPopup>
                                <SelectList>
                                    {cities.map((city, index) => (
                                        <SelectOption key={index} index={index}>
                                            {city.name}
                                        </SelectOption>
                                    ))}
                                </SelectList>
                            </SelectPopup>
                        </SelectPositioner>
                    </SelectPortal>
                </Select>
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
