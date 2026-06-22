# RadioButton

RadioButton is an extension to standard radio button element with theming.

```tsx
'use client';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupChangeEvent } from '@primereact/ui/radiobuttongroup';
import React from 'react';

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
                        htmlFor={`preview-${card.id}`}
                        className={`flex-1 flex items-start gap-2 p-4 rounded-lg border hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${selectedCard === card.id ? 'border-primary' : 'border-surface'}`}
                    >
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="inline-flex items-center gap-2">
                                <span className={`flag w-5! h-auto! aspect-15/10 ${card.flagClass}`} />
                                <h5 className="font-medium leading-none">{card.name}</h5>
                            </div>
                            <p className="text-sm text-surface-500">{card.description}</p>
                        </div>

                        <RadioButton.Root inputId={`preview-${card.id}`} name="preview-card" value={card.id}>
                            <RadioButton.Box>
                                <RadioButton.Indicator match="checked" />
                            </RadioButton.Box>
                        </RadioButton.Root>
                    </label>
                ))}
            </RadioButtonGroup>
        </div>
    );
}
```

## Usage

```tsx
import { RadioButtonGroup } from '@primereact/ui/radiobuttongroup';
import { RadioButton } from '@primereact/ui/radiobutton';
```

```tsx
<RadioButtonGroup>
    <RadioButton.Root>
        <RadioButton.Box>
            <RadioButton.Indicator />
        </RadioButton.Box>
    </RadioButton.Root>
</RadioButtonGroup>
```

## Examples

### Basic

Selects a single option from a group of mutually exclusive choices.

```tsx
'use client';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from '@primereact/ui/radiobuttongroup';
import * as React from 'react';

export default function BasicDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                className="flex flex-col gap-2"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}
            >
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-strawberry" name="fruit" value="strawberry">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient-strawberry">🍓 Strawberry</Label>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-banana" name="fruit" value="banana">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient-banana">🍌 Banana</Label>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-watermelon" name="fruit" value="watermelon">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient-watermelon">🍉 Watermelon</Label>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
```

### Sizes

Use the `size` property to change the size of a radio button.

```tsx
'use client';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import * as React from 'react';

export default function SizesDemo() {
    const [value, setValue] = React.useState<string>('size_normal');

    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <RadioButton.Root
                        inputId="size_small"
                        checked={value === 'size_small'}
                        onChange={() => setValue('size_small')}
                        name="size"
                        size="small"
                    >
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="size_small" className="text-sm">
                        Small
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="size_normal" checked={value === 'size_normal'} onChange={() => setValue('size_normal')} name="size">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="size_normal">Normal</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton.Root
                        inputId="size_large"
                        checked={value === 'size_large'}
                        onChange={() => setValue('size_large')}
                        name="size"
                        size="large"
                    >
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="size_large" className="text-lg">
                        Large
                    </Label>
                </div>
            </div>
        </div>
    );
}
```

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
import { RadioButton } from '@primereact/ui/radiobutton';

export default function FilledDemo() {
    return (
        <div className="flex items-center justify-center">
            <RadioButton.Root variant="filled">
                <RadioButton.Box>
                    <RadioButton.Indicator match="checked" />
                </RadioButton.Box>
            </RadioButton.Root>
        </div>
    );
}
```

### Disabled

When the `disabled` property is present, the element cannot be edited and focused.

```tsx
import { RadioButtonGroup } from '@primereact/ui/radiobuttongroup';
import { RadioButton } from '@primereact/ui/radiobutton';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <RadioButtonGroup className="flex items-center gap-2" value="2">
                <RadioButton.Root disabled>
                    <RadioButton.Box>
                        <RadioButton.Indicator match="checked" />
                    </RadioButton.Box>
                </RadioButton.Root>
                <RadioButton.Root value="2" disabled>
                    <RadioButton.Box>
                        <RadioButton.Indicator match="checked" />
                    </RadioButton.Box>
                </RadioButton.Root>
            </RadioButtonGroup>
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` property to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
import { RadioButton } from '@primereact/ui/radiobutton';

export default function InvalidDemo() {
    return (
        <div className="flex justify-center">
            <RadioButton.Root invalid>
                <RadioButton.Box>
                    <RadioButton.Indicator match="checked" />
                </RadioButton.Box>
            </RadioButton.Root>
        </div>
    );
}
```

### Group

Use the `RadioButtonGroup` component with `value` and `onValueChange` props to control the selected state of radio buttons.

```tsx
'use client';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupChangeEvent } from '@primereact/ui/radiobuttongroup';
import * as React from 'react';

export default function GroupDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                className="flex flex-wrap gap-4"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}
            >
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient1" name="pizza" value="cheese">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient1">Cheese</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient2" name="pizza" value="mushroom">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient2">Mushroom</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient3" name="pizza" value="pepper">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient3">Pepper</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient4" name="pizza" value="onion">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
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
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupChangeEvent } from '@primereact/ui/radiobuttongroup';
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
            <RadioButtonGroup
                className="flex flex-wrap gap-4"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}
            >
                {categories.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <RadioButton.Root inputId={item.key} name="category" value={item.key}>
                            <RadioButton.Box>
                                <RadioButton.Indicator match="checked" />
                            </RadioButton.Box>
                        </RadioButton.Root>
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
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupChangeEvent } from '@primereact/ui/radiobuttongroup';
import React from 'react';

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

const CardDemo = () => {
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
                        key={'card-' + card.id}
                        htmlFor={'card-' + card.id}
                        className={`flex-1 flex items-start gap-2 p-4 rounded-lg border hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${selectedCard === card.id ? 'border-primary' : 'border-surface'}`}
                    >
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="inline-flex items-center gap-2">
                                <span className={`flag w-5! h-auto! aspect-15/10 ${card.flagClass}`} />
                                <h5 className="font-medium leading-none">{card.name}</h5>
                            </div>
                            <p className="text-sm text-surface-500">{card.description}</p>
                        </div>

                        <RadioButton.Root inputId={'card-' + card.id} name="card" value={card.id}>
                            <RadioButton.Box>
                                <RadioButton.Indicator match="checked" />
                            </RadioButton.Box>
                        </RadioButton.Root>
                    </label>
                ))}
            </RadioButtonGroup>
        </div>
    );
};

export default CardDemo;
```

### Conditional Indicator

`RadioButton.Indicator` accepts a `match` prop to conditionally render based on the radio button state. When `match` is set, the indicator only mounts when the current state matches the given value.

```tsx
<RadioButton.Root>
    <RadioButton.Box>
        <RadioButton.Indicator match="checked">
            <Check />
        </RadioButton.Indicator>
        <RadioButton.Indicator match="unchecked">
            <Circle />
        </RadioButton.Indicator>
    </RadioButton.Box>
</RadioButton.Root>
```

Available values: `checked`, `unchecked`. Without the `match` prop, the indicator renders in all states.

## API

### Sub-Components

See [Primitive API](../../primitive/radiobutton/features.md#api) for `RadioButtonRoot`, `RadioButtonBox`, `RadioButtonIndicator`, and `RadioButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/radiobutton/features.md#api) for `useRadioButton` and `useRadioButtonGroup` hook documentation.

## Accessibility

See [RadioButton Primitive](../../primitive/radiobutton/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
