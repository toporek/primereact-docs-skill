# CheckboxGroup

Checkbox is an extension to standard checkbox element with theming.

```tsx
'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
import type { CheckboxGroupChangeEvent } from 'primereact/checkboxgroup';
import React from 'react';

const options = [
    { label: 'Gemini', value: 'gemini' },
    { label: 'Claude', value: 'claude' },
    { label: 'ChatGPT', value: 'chatgpt' },
    { label: 'Deepseek', value: 'deepseek' }
];

export default function Preview() {
    const [value, setValue] = React.useState<string[]>();

    return (
        <div className="flex items-center justify-center">
            <div className="p-1 rounded-2xl bg-surface-100 dark:bg-surface-900 max-w-3xs">
                <div className="pl-4 pt-2 pb-2.5 text-sm font-semibold text-surface-500">Survey</div>
                <div className="p-4 rounded-xl bg-surface-0 dark:bg-surface-950">
                    <div className="mb-3 text-color">Which LLM provider should we integrate next?</div>
                    <CheckboxGroup
                        value={value}
                        onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                        className="flex-col gap-2"
                    >
                        {options.map((option) => (
                            <div key={option.value} className="flex items-center gap-3">
                                <Checkbox inputId={`tw-${option.value}`} value={option.value} />
                                <label htmlFor={`tw-${option.value}`} className="text-surface-500 dark:text-surface-400 font-normal text-base">
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </CheckboxGroup>
                </div>
            </div>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/checkboxgroup
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
```

```tsx
<CheckboxGroup>
    <Checkbox value="option1" />
    <Checkbox value="option2" />
</CheckboxGroup>
```

## Examples

### Basic

```tsx
'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
import type { CheckboxGroupChangeEvent } from 'primereact/checkboxgroup';
import { Label } from '@/components/ui/label';
import React from 'react';

export default function BasicDemo() {
    const [value, setValue] = React.useState<string[]>();

    return (
        <div className="flex items-center justify-center">
            <CheckboxGroup
                defaultValue={['Cheese']}
                value={value}
                onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                className="gap-4 flex-wrap"
            >
                <div className="flex items-center gap-2">
                    <Checkbox inputId="cheese" value="Cheese" />
                    <Label htmlFor="cheese">Cheese</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="mushroom" value="Mushroom" />
                    <Label htmlFor="mushroom">Mushroom</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="pepper" value="Pepper" />
                    <Label htmlFor="pepper">Pepper</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="onion" value="Onion" />
                    <Label htmlFor="onion">Onion</Label>
                </div>
            </CheckboxGroup>
        </div>
    );
}
```

### Dynamic

Checkboxes can be generated using a list of values.

```tsx
'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
import type { CheckboxGroupChangeEvent } from 'primereact/checkboxgroup';
import { Label } from '@/components/ui/label';
import React from 'react';

export default function DynamicDemo() {
    const [value, setValue] = React.useState<string[]>([]);
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    return (
        <div className="flex items-center justify-center">
            <CheckboxGroup value={value} onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])} className="flex-col gap-4">
                {categories.map((category) => (
                    <div key={category.key} className="flex items-center gap-2">
                        <Checkbox inputId={category.key} value={category.key} />
                        <Label htmlFor={category.key}>{category.name}</Label>
                    </div>
                ))}
            </CheckboxGroup>
        </div>
    );
}
```

### Card

Checkboxes can be displayed in a card format.

```tsx
'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
import type { CheckboxGroupChangeEvent } from 'primereact/checkboxgroup';
import React from 'react';

const interests = [
    {
        id: 'tech',
        title: '💻 Technology',
        description: 'Latest updates in software, gadgets, and innovation.'
    },
    {
        id: 'design',
        title: '🎨 Design',
        description: 'UI/UX trends, graphic design tips, and creativity.'
    },
    {
        id: 'finance',
        title: '💰 Finance',
        description: 'Investing, saving, and crypto news.'
    }
];

export default function CardDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <div className="max-w-3xl mx-auto">
            <h5 className="font-medium">Select your interests:</h5>
            <CheckboxGroup
                value={value}
                onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4"
            >
                {interests.map((interest) => (
                    <label
                        key={interest.id}
                        className={`flex-1 select-none flex items-start gap-3 p-4 rounded-md border  hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${value.includes(interest.id) ? 'border-primary' : 'border-surface'}`}
                    >
                        <Checkbox key={interest.id} value={interest.id} />
                        <div className="flex-1 flex flex-col gap-2">
                            <h6 className="font-medium leading-none">{interest.title}</h6>
                            <p className="text-sm text-surface-500">{interest.description}</p>
                        </div>
                    </label>
                ))}
            </CheckboxGroup>
        </div>
    );
}
```

### Indeterminate

Use the `indeterminate` property to display an indeterminate state.

```tsx
'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
import type { CheckboxRootChangeEvent } from 'primereact/checkbox';
import type { CheckboxGroupChangeEvent } from 'primereact/checkboxgroup';
import { Label } from '@/components/ui/label';
import React from 'react';

const categories = [
    { name: 'Product updates', key: 'product-updates' },
    { name: 'Weekly newsletter', key: 'weekly-newsletter' },
    { name: 'Security alerts', key: 'security-alerts' }
];

export default function IndeterminateDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    const isAllSelected = categories.every((category) => value.includes(category.key));
    const indeterminate = categories.some((category) => value.includes(category.key)) && !isAllSelected;

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Checkbox
                        inputId="indeterminate-checkbox"
                        indeterminate={indeterminate}
                        checked={isAllSelected}
                        onCheckedChange={(e: CheckboxRootChangeEvent) => setValue(e.checked ? categories.map((category) => category.key) : [])}
                    />
                    <Label htmlFor="indeterminate-checkbox">Email Notifications</Label>
                </div>
                <CheckboxGroup
                    value={value}
                    onValueChange={(event: CheckboxGroupChangeEvent) => setValue(event.value as string[])}
                    className="flex-col gap-4 pl-7"
                >
                    {categories.map((item) => (
                        <div key={item.key} className="flex items-center gap-2">
                            <Checkbox inputId={item.key} value={item.key} />
                            <Label htmlFor={item.key}>{item.name}</Label>
                        </div>
                    ))}
                </CheckboxGroup>
            </div>
        </div>
    );
}
```
