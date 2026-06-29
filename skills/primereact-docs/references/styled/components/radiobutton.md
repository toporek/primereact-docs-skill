# RadioButton

RadioButton is an extension to standard radio button element with theming.

```tsx
'use client';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from '@primereact/ui/radiobuttongroup';
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
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setSelectedCard(e.value as string)}
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
                className="flex flex-col gap-3"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}
            >
                <div className="flex items-center gap-3">
                    <RadioButton.Root inputId="ingredient-strawberry" name="fruit" value="strawberry">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient-strawberry">🍓 Strawberry</Label>
                </div>

                <div className="flex items-center gap-3">
                    <RadioButton.Root inputId="ingredient-banana" name="fruit" value="banana">
                        <RadioButton.Box>
                            <RadioButton.Indicator match="checked" />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient-banana">🍌 Banana</Label>
                </div>

                <div className="flex items-center gap-3">
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

### Group

Use the `RadioButtonGroup` component with `value` and `onValueChange` props to control the selected state of radio buttons.

```tsx
'use client';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from '@primereact/ui/radiobuttongroup';
import * as React from 'react';

export default function GroupDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                className="flex flex-wrap gap-4"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}
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
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from '@primereact/ui/radiobuttongroup';
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
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}
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
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from '@primereact/ui/radiobuttongroup';
import { Tag } from '@primereact/ui/tag';
import React from 'react';

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$0',
        period: '/month',
        description: 'For solo developers exploring the platform.',
        tag: null
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        period: '/month',
        description: 'For growing teams shipping in production.',
        tag: 'Popular'
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations with custom needs.',
        tag: null
    }
];

const CardDemo = () => {
    const [selectedPlan, setSelectedPlan] = React.useState<string | undefined>('pro');

    return (
        <div className="max-w-xs mx-auto">
            <h5 className="font-medium">Choose a plan:</h5>
            <RadioButtonGroup
                value={selectedPlan}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setSelectedPlan(e.value as string)}
                className="mt-2 flex flex-col gap-3"
            >
                {plans.map((plan) => (
                    <label
                        key={'plan-' + plan.id}
                        htmlFor={'plan-' + plan.id}
                        className={`flex-1 flex items-start gap-2 p-4 rounded-lg border hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${selectedPlan === plan.id ? 'border-primary' : 'border-surface'}`}
                    >
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <h5 className="font-medium leading-none">{plan.name}</h5>
                                    {plan.tag && <Tag>{plan.tag}</Tag>}
                                </div>
                                <div className="text-sm text-color">
                                    <span className="font-semibold">{plan.price}</span>
                                    <span className="text-surface-500">{plan.period}</span>
                                </div>
                            </div>
                            <p className="text-sm text-surface-500">{plan.description}</p>
                        </div>

                        <RadioButton.Root inputId={'plan-' + plan.id} name="plan" value={plan.id}>
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

## Related

### Sub-Components

See [Primitive API](../../primitive/components/radiobutton.md#api) for `RadioButtonRoot`, `RadioButtonBox`, `RadioButtonIndicator`, and `RadioButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/components/radiobutton.md#api) for `useRadioButton` and `useRadioButtonGroup` hook documentation.

### Accessibility

See [RadioButton Primitive](../../primitive/components/radiobutton.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-radiobutton | Class name of the root element |
| p-radiobutton-box | Class name of the box element |
| p-radiobutton-input | Class name of the input element |
| p-radiobutton-icon | Class name of the indicator element |

| ClassName | Description |
|:------|:------|
| p-radiobutton-group | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| radiobutton.width | --p-radiobutton-width | Width of root |
| radiobutton.height | --p-radiobutton-height | Height of root |
| radiobutton.background | --p-radiobutton-background | Background of root |
| radiobutton.checked.background | --p-radiobutton-checked-background | Checked background of root |
| radiobutton.checked.hover.background | --p-radiobutton-checked-hover-background | Checked hover background of root |
| radiobutton.disabled.background | --p-radiobutton-disabled-background | Disabled background of root |
| radiobutton.filled.background | --p-radiobutton-filled-background | Filled background of root |
| radiobutton.border.color | --p-radiobutton-border-color | Border color of root |
| radiobutton.hover.border.color | --p-radiobutton-hover-border-color | Hover border color of root |
| radiobutton.focus.border.color | --p-radiobutton-focus-border-color | Focus border color of root |
| radiobutton.checked.border.color | --p-radiobutton-checked-border-color | Checked border color of root |
| radiobutton.checked.hover.border.color | --p-radiobutton-checked-hover-border-color | Checked hover border color of root |
| radiobutton.checked.focus.border.color | --p-radiobutton-checked-focus-border-color | Checked focus border color of root |
| radiobutton.checked.disabled.border.color | --p-radiobutton-checked-disabled-border-color | Checked disabled border color of root |
| radiobutton.invalid.border.color | --p-radiobutton-invalid-border-color | Invalid border color of root |
| radiobutton.shadow | --p-radiobutton-shadow | Shadow of root |
| radiobutton.focus.ring.width | --p-radiobutton-focus-ring-width | Focus ring width of root |
| radiobutton.focus.ring.style | --p-radiobutton-focus-ring-style | Focus ring style of root |
| radiobutton.focus.ring.color | --p-radiobutton-focus-ring-color | Focus ring color of root |
| radiobutton.focus.ring.offset | --p-radiobutton-focus-ring-offset | Focus ring offset of root |
| radiobutton.focus.ring.shadow | --p-radiobutton-focus-ring-shadow | Focus ring shadow of root |
| radiobutton.transition.duration | --p-radiobutton-transition-duration | Transition duration of root |
| radiobutton.sm.width | --p-radiobutton-sm-width | Sm width of root |
| radiobutton.sm.height | --p-radiobutton-sm-height | Sm height of root |
| radiobutton.lg.width | --p-radiobutton-lg-width | Lg width of root |
| radiobutton.lg.height | --p-radiobutton-lg-height | Lg height of root |
| radiobutton.icon.size | --p-radiobutton-icon-size | Size of icon |
| radiobutton.icon.checked.color | --p-radiobutton-icon-checked-color | Checked color of icon |
| radiobutton.icon.checked.hover.color | --p-radiobutton-icon-checked-hover-color | Checked hover color of icon |
| radiobutton.icon.disabled.color | --p-radiobutton-icon-disabled-color | Disabled color of icon |
| radiobutton.icon.sm.size | --p-radiobutton-icon-sm-size | Sm size of icon |
| radiobutton.icon.lg.size | --p-radiobutton-icon-lg-size | Lg size of icon |
