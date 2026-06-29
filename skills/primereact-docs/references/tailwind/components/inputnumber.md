# InputNumber

InputNumber is used to enter numeric values.

```tsx
import { InputNumber, InputNumberDecrement, InputNumberGroup, InputNumberIncrement, InputNumberInput } from '@/components/ui/inputnumber';
import { Label } from '@/components/ui/label';

export default function Preview() {
    return (
        <div className="flex flex-col gap-1.5 mx-auto w-full max-w-3xs">
            <Label htmlFor="tw-basic-inputnumber">Monthly budget</Label>
            <InputNumber defaultValue={1500} mode="currency" currency="USD" locale="en-US">
                <InputNumberInput id="tw-basic-inputnumber" />
                <InputNumberGroup>
                    <InputNumberIncrement />
                    <InputNumberDecrement />
                </InputNumberGroup>
            </InputNumber>
            <small className="text-surface-500">Set the maximum amount you can spend per month</small>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/inputnumber.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { InputNumber } from '@/components/ui/inputnumber';
```

```tsx
<InputNumber />
```

## Examples

### Basic

A numeric input supporting formatted values, step control, and boundaries.

```tsx
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <InputNumber defaultValue={42723}>
                <InputNumberInput />
            </InputNumber>
        </div>
    );
}

```

### Numerals

InputNumber supports decimal numbers with precision control.

```tsx
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';
import { Label } from '@/components/ui/label';

export default function NumeralsDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="integeronly" className="font-bold text-sm block mb-2">
                    Integer Only
                </Label>
                <InputNumber defaultValue={42723} fluid>
                    <InputNumberInput id="integeronly" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="withoutgrouping" className="font-bold text-sm block mb-2">
                    Without Grouping
                </Label>
                <InputNumber defaultValue={58151} useGrouping={false} fluid>
                    <InputNumberInput id="withoutgrouping" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="minmaxfraction" className="font-bold text-sm block mb-2">
                    Min-Max Fraction Digits
                </Label>
                <InputNumber defaultValue={2351.35} minFractionDigits={2} maxFractionDigits={5} fluid>
                    <InputNumberInput id="minmaxfraction" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="minmax" className="font-bold text-sm block mb-2">
                    Min-Max Boundaries
                </Label>
                <InputNumber defaultValue={50} min={0} max={100} fluid>
                    <InputNumberInput id="minmax" />
                </InputNumber>
            </div>
        </div>
    );
}

```

### Locale

Localization information such as grouping and decimal symbols are defined with the `locale` property which defaults to the user locale.

```tsx
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';
import { Label } from '@/components/ui/label';

export default function LocaleDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="locale-user" className="font-bold text-sm block mb-2">
                    User Locale
                </Label>
                <InputNumber defaultValue={151351} minFractionDigits={2} fluid>
                    <InputNumberInput id="locale-user" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-us" className="font-bold text-sm block mb-2">
                    United States Locale
                </Label>
                <InputNumber defaultValue={115744} locale="en-US" minFractionDigits={2} fluid>
                    <InputNumberInput id="locale-us" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-german" className="font-bold text-sm block mb-2">
                    German Locale
                </Label>
                <InputNumber defaultValue={635524} locale="de-DE" minFractionDigits={2} fluid>
                    <InputNumberInput id="locale-german" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-indian" className="font-bold text-sm block mb-2">
                    Indian Locale
                </Label>
                <InputNumber defaultValue={732762} locale="en-IN" minFractionDigits={2} fluid>
                    <InputNumberInput id="locale-indian" />
                </InputNumber>
            </div>
        </div>
    );
}

```

### Currency

Monetary values are enabled by setting `mode` property as `currency`. In this setting, `currency` property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.

```tsx
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';
import { Label } from '@/components/ui/label';

export default function CurrencyDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="currency-us" className="font-bold text-sm block mb-2">
                    United States
                </Label>
                <InputNumber defaultValue={1500} mode="currency" currency="USD" locale="en-US" fluid>
                    <InputNumberInput id="currency-us" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-germany" className="font-bold text-sm block mb-2">
                    Germany
                </Label>
                <InputNumber defaultValue={2500} mode="currency" currency="EUR" locale="de-DE" fluid>
                    <InputNumberInput id="currency-germany" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-india" className="font-bold text-sm block mb-2">
                    India
                </Label>
                <InputNumber defaultValue={4250} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" fluid>
                    <InputNumberInput id="currency-india" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-japan" className="font-bold text-sm block mb-2">
                    Japan
                </Label>
                <InputNumber defaultValue={5002} mode="currency" currency="JPY" locale="jp-JP" fluid>
                    <InputNumberInput id="currency-japan" />
                </InputNumber>
            </div>
        </div>
    );
}

```

### Prefix & Suffix

Custom texts e.g. units can be placed before or after the input section with the `prefix` and `suffix` properties.

```tsx
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';
import { Label } from '@/components/ui/label';

export default function PrefixSuffixDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="mile" className="font-bold text-sm block mb-2">
                    Mile
                </Label>
                <InputNumber defaultValue={20} suffix=" mi" fluid>
                    <InputNumberInput id="mile" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="percent" className="font-bold text-sm block mb-2">
                    Percent
                </Label>
                <InputNumber defaultValue={50} prefix="%" fluid>
                    <InputNumberInput id="percent" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="expiry" className="font-bold text-sm block mb-2">
                    Expiry
                </Label>
                <InputNumber defaultValue={10} prefix="Expires in " suffix=" days" fluid>
                    <InputNumberInput id="expiry" />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="temperature" className="font-bold text-sm block mb-2">
                    Temperature
                </Label>
                <InputNumber defaultValue={20} prefix="&uarr; " suffix="℃" min={0} max={40} fluid>
                    <InputNumberInput id="temperature" />
                </InputNumber>
            </div>
        </div>
    );
}

```

### Buttons

Spinner buttons can be customized with `InputGroup` and `IconField` compositions.

```tsx
'use client';
import { Minus, Plus } from '@primeicons/react';
import { InputNumber, InputNumberDecrement, InputNumberGroup, InputNumberIncrement, InputNumberInput } from '@/components/ui/inputnumber';
import { Label } from '@/components/ui/label';

export default function ButtonsDemo() {
    return (
        <div className="flex flex-col gap-6 max-w-3xs mx-auto">
            <div>
                <Label htmlFor="tw-stacked-buttons" className="mb-2">
                    Stacked
                </Label>
                <InputNumber defaultValue={20} mode="currency" currency="USD" locale="en-US" fluid>
                    <InputNumberInput id="tw-stacked-buttons" />
                    <InputNumberGroup>
                        <InputNumberIncrement />
                        <InputNumberDecrement />
                    </InputNumberGroup>
                </InputNumber>
            </div>

            <div>
                <Label htmlFor="tw-minmax-buttons" className="mb-2">
                    Min-Max
                </Label>
                <InputNumber defaultValue={25} mode="decimal" min={0} max={100} step={5} fluid>
                    <InputNumberInput id="tw-minmax-buttons" />
                    <InputNumberGroup>
                        <InputNumberIncrement />
                        <InputNumberDecrement />
                    </InputNumberGroup>
                </InputNumber>
            </div>

            <div>
                <Label htmlFor="tw-horizontal-buttons" className="mb-2">
                    Horizontal
                </Label>
                <InputNumber defaultValue={10.25} step={0.25} mode="currency" currency="EUR" locale="en-US" layout="horizontal" fluid>
                    <InputNumberDecrement>
                        <Minus />
                    </InputNumberDecrement>
                    <InputNumberInput id="tw-horizontal-buttons" />
                    <InputNumberIncrement>
                        <Plus />
                    </InputNumberIncrement>
                </InputNumber>
            </div>
        </div>
    );
}

```

### Vertical

Buttons can also be placed vertically.

```tsx
'use client';
import { InputNumber, InputNumberDecrement, InputNumberIncrement, InputNumberInput } from '@/components/ui/inputnumber';
import { Label } from '@/components/ui/label';

export default function VerticalDemo() {
    return (
        <div className="flex justify-center">
            <div>
                <Label htmlFor="tw-vertical-buttons" className="mb-2">
                    Vertical
                </Label>
                <InputNumber defaultValue={3} layout="vertical">
                    <InputNumberIncrement />
                    <InputNumberInput id="tw-vertical-buttons" />
                    <InputNumberDecrement />
                </InputNumber>
            </div>
        </div>
    );
}

```

### Sizes

InputNumber provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

```tsx
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputNumber mode="currency" currency="USD" locale="en-US">
                <InputNumberInput size="small" placeholder="Small" />
            </InputNumber>
            <InputNumber mode="currency" currency="USD" locale="en-US">
                <InputNumberInput placeholder="Normal" />
            </InputNumber>
            <InputNumber mode="currency" currency="USD" locale="en-US">
                <InputNumberInput size="large" placeholder="Large" />
            </InputNumber>
        </div>
    );
}

```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <InputNumber>
                <InputNumberInput variant="filled" />
            </InputNumber>
        </div>
    );
}

```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';
import type { InputNumberRootValueChangeEvent } from 'primereact/inputnumber';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState<number | null>(null);
    const [value2, setValue2] = React.useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <InputNumber
                value={value1}
                onValueChange={(e: InputNumberRootValueChangeEvent) => setValue1(e.value)}
                mode="decimal"
                minFractionDigits={2}
                invalid={value1 === null}
            >
                <InputNumberInput placeholder="Amount" />
            </InputNumber>
            <InputNumber
                value={value2}
                onValueChange={(e: InputNumberRootValueChangeEvent) => setValue2(e.value)}
                mode="decimal"
                minFractionDigits={2}
                invalid={value2 === null}
            >
                <InputNumberInput placeholder="Amount" variant="filled" />
            </InputNumber>
        </div>
    );
}

```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { InputNumber, InputNumberInput } from '@/components/ui/inputnumber';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputNumber defaultValue={50} disabled prefix="%">
                <InputNumberInput />
            </InputNumber>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputnumber.md#api) for `InputNumberRoot` component documentation.

### Hooks

See [Headless API](../../headless/components/inputnumber.md#api) for `useInputNumber` hook documentation.

### Accessibility

See [InputNumber Primitive](../../primitive/components/inputnumber.md#accessibility) for WAI-ARIA compliance details and keyboard support.
