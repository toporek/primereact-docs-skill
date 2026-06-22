# RadioButton

RadioButton is an extension to standard radio button element with theming.

```tsx
'use client';
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { RadioButtonGroupChangeEvent } from 'primereact/radiobuttongroup';
import * as React from 'react';

const workspaceEnvironments = [
    {
        id: '1',
        name: 'US East — Virginia',
        description: 'Low latency, auto-scaling enabled.',
        tag: 'Faster',
        flagClass: 'flag-us'
    },
    {
        id: '2',
        name: 'EU West — Frankfurt',
        description: 'CI/CD pipeline, daily backups.',
        tag: null,
        flagClass: 'flag-de'
    },
    {
        id: '3',
        name: 'EU East — Poland',
        description: 'GDPR compliant, secure.',
        tag: null,
        flagClass: 'flag-pl'
    }
];

export default function Preview() {
    const [selectedCard, setSelectedCard] = React.useState<string | undefined>();

    return (
        <div className="max-w-xs mx-auto">
            <h5 className="font-medium">Select a deployment environment:</h5>
            <RadioButtonGroup
                value={selectedCard}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setSelectedCard(e.value as string)}
                className="mt-2 flex flex-col gap-3"
            >
                {workspaceEnvironments.map((card) => (
                    <label
                        key={card.id}
                        htmlFor={`tw-preview-${card.id}`}
                        className={`flex-1 flex items-start gap-2 p-4 rounded-lg border hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${selectedCard === card.id ? 'border-primary' : 'border-surface'}`}
                    >
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="inline-flex items-center gap-2">
                                <span className={`flag w-5! h-auto! aspect-15/10 ${card.flagClass}`} />
                                <h5 className="font-medium leading-none">{card.name}</h5>
                            </div>
                            <p className="text-sm text-surface-500">{card.description}</p>
                        </div>

                        <RadioButton inputId={`tw-preview-${card.id}`} name="tw-preview-card" value={card.id} />
                    </label>
                ))}
            </RadioButtonGroup>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/ui/radiobutton
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
```

```tsx
<RadioButtonGroup>
    <RadioButton />
</RadioButtonGroup>
```

## Examples

### Basic

```tsx
'use client';
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { RadioButtonGroupChangeEvent } from 'primereact/radiobuttongroup';
import { Label } from '@/components/ui/label';
import * as React from 'react';

export default function BasicDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                orientation="vertical"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}
            >
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient-strawberry" name="fruit" value="strawberry" />
                    <Label htmlFor="ingredient-strawberry">🍓 Strawberry</Label>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient-banana" name="fruit" value="banana" />
                    <Label htmlFor="ingredient-banana">🍌 Banana</Label>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient-watermelon" name="fruit" value="watermelon" />
                    <Label htmlFor="ingredient-watermelon">🍉 Watermelon</Label>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
```

### Group

Use the `RadioButton.Group` component with `value` and `onValueChange` props to control the selected state of radio buttons.

```tsx
'use client';
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { RadioButtonGroupChangeEvent } from 'primereact/radiobuttongroup';
import { Label } from '@/components/ui/label';
import * as React from 'react';

export default function GroupDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup value={ingredient} onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient1" name="pizza" value="cheese" />
                    <Label htmlFor="ingredient1">Cheese</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient2" name="pizza" value="mushroom" />
                    <Label htmlFor="ingredient2">Mushroom</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient3" name="pizza" value="pepper" />
                    <Label htmlFor="ingredient3">Pepper</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient4" name="pizza" value="onion" />
                    <Label htmlFor="ingredient4">Onion</Label>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
```

### Dynamic

RadioButtons can be generated using a list of values.

```tsx
'use client';
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { RadioButtonGroupValueChangeEvent } from 'primereact/radiobutton';
import { Label } from '@/components/ui/label';
import * as React from 'react';

export default function DynamicDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup value={ingredient} onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}>
                {categories.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <RadioButton inputId={item.key} name="category" value={item.key} />
                        <Label htmlFor={item.key}>{item.name}</Label>
                    </div>
                ))}
            </RadioButtonGroup>
        </div>
    );
}
```

### Card

RadioButtons can be displayed in a card style.

```tsx
'use client';
import { Label } from '@/components/ui/label';
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { RadioButtonGroupChangeEvent } from 'primereact/radiobuttongroup';
import React from 'react';

const CardDemo = () => {
    const [selectedCard, setSelectedCard] = React.useState<string | undefined>();

    const cards = [
        { id: 'card1', name: '💳 Credit Card', description: 'Pay with Visa, Mastercard, or AMEX.' },
        { id: 'card2', name: '💸 PayPal', description: 'Connect your PayPal account' },
        { id: 'card3', name: '🪙 Crypto', description: 'Pay with Bitcoin or Ethereum.' }
    ];

    return (
        <div className="max-w-xs mx-auto">
            <h5 className="font-medium mb-4">Select a payment method:</h5>
            <RadioButtonGroup
                orientation="vertical"
                value={selectedCard}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setSelectedCard(e.value as string)}
            >
                {cards.map((card) => (
                    <Label
                        key={card.id}
                        htmlFor={card.id}
                        className={`flex-1 flex items-start gap-2 p-4 rounded-lg border hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${selectedCard === card.id ? 'border-primary' : 'border-surface'}`}
                    >
                        <div className="flex-1 flex flex-col gap-2">
                            <h5 className="font-medium leading-none">{card.name}</h5>
                            <p className="text-sm text-surface-500">{card.description}</p>
                        </div>

                        <RadioButton inputId={card.id} name="card" value={card.id} />
                    </Label>
                ))}
            </RadioButtonGroup>
        </div>
    );
};

export default CardDemo;
```

### Sizes

Use the `size` property to change the size of a radio button.

```tsx
'use client';
import { RadioButton } from '@/components/ui/radiobutton';
import { Label } from '@/components/ui/label';
import * as React from 'react';

export default function SizesDemo() {
    const [value, setValue] = React.useState<string>('size_normal');

    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <RadioButton
                        inputId="tw-size_small"
                        checked={value === 'size_small'}
                        onChange={() => setValue('size_small')}
                        name="tw-size"
                        size="small"
                    />
                    <Label htmlFor="tw-size_small" className="text-sm">
                        Small
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="tw-size_normal" checked={value === 'size_normal'} onChange={() => setValue('size_normal')} name="tw-size" />
                    <Label htmlFor="tw-size_normal">Normal</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton
                        inputId="tw-size_large"
                        checked={value === 'size_large'}
                        onChange={() => setValue('size_large')}
                        name="tw-size"
                        size="large"
                    />
                    <Label htmlFor="tw-size_large" className="text-lg">
                        Large
                    </Label>
                </div>
            </div>
        </div>
    );
}
```

### Filled

Specify the `filled` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
import { RadioButton } from '@/components/ui/radiobutton';

export default function FilledDemo() {
    return (
        <div className="flex items-center justify-center">
            <RadioButton variant="filled" />
        </div>
    );
}
```

### Disabled

When the `disabled` property is present, the element cannot be edited and focused.

```tsx
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <RadioButtonGroup value="2">
                <RadioButton disabled />
                <RadioButton value="2" disabled />
            </RadioButtonGroup>
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` property to indicate a failed validation. You can use this style when integrating with form validation libraries.

```tsx
import { RadioButton } from '@/components/ui/radiobutton';

export default function InvalidDemo() {
    return (
        <div className="flex justify-center">
            <RadioButton invalid />
        </div>
    );
}
```

## Accessibility

### Screen Reader

RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby, aria-label props.

```tsx
<label for="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />
```
