# InputNumber

InputNumber is used to enter numeric values.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function Preview() {
    return (
        <div className="flex flex-col gap-1.5 mx-auto w-full max-w-3xs">
            <Label htmlFor="basic-inputnumber">Inventory</Label>
            <InputNumber id="basic-inputnumber" defaultValue={182934} />
            <small className="text-surface-500">Current stock count for this item</small>
        </div>
    );
}
```

## Usage

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';
```

```tsx
<InputNumber />
```

## Examples

### Basic

A numeric input supporting formatted values, step control, and boundaries.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <InputNumber defaultValue={42723} />
        </div>
    );
}
```

### Numerals

InputNumber supports decimal numbers with precision control.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function NumeralsDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="integeronly" className="font-bold text-sm block mb-2">
                    Integer Only
                </Label>
                <InputNumber defaultValue={42723} id="integeronly" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="withoutgrouping" className="font-bold text-sm block mb-2">
                    Without Grouping
                </Label>
                <InputNumber defaultValue={58151} id="withoutgrouping" useGrouping={false} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="minmaxfraction" className="font-bold text-sm block mb-2">
                    Min-Max Fraction Digits
                </Label>
                <InputNumber defaultValue={2351.35} id="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="minmax" className="font-bold text-sm block mb-2">
                    Min-Max Boundaries
                </Label>
                <InputNumber defaultValue={50} id="minmax" min={0} max={100} fluid />
            </div>
        </div>
    );
}
```

### Locale

Localization information such as grouping and decimal symbols are defined with the `locale` property which defaults to the user locale.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function LocaleDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="locale-user" className="font-bold text-sm block mb-2">
                    User Locale
                </Label>
                <InputNumber defaultValue={151351} id="locale-user" minFractionDigits={2} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-us" className="font-bold text-sm block mb-2">
                    United States Locale
                </Label>
                <InputNumber defaultValue={115744} id="locale-us" locale="en-US" minFractionDigits={2} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-german" className="font-bold text-sm block mb-2">
                    German Locale
                </Label>
                <InputNumber defaultValue={635524} id="locale-german" locale="de-DE" minFractionDigits={2} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-indian" className="font-bold text-sm block mb-2">
                    Indian Locale
                </Label>
                <InputNumber defaultValue={732762} id="locale-indian" locale="en-IN" minFractionDigits={2} fluid />
            </div>
        </div>
    );
}
```

### Currency

Monetary values are enabled by setting `mode` property as `currency`. In this setting, `currency` property also needs to be defined using ISOundefinedstandard such as "USD" for the US dollar.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function CurrencyDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="currency-us" className="font-bold text-sm block mb-2">
                    United States
                </Label>
                <InputNumber defaultValue={1500} id="currency-us" mode="currency" currency="USD" locale="en-US" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-germany" className="font-bold text-sm block mb-2">
                    Germany
                </Label>
                <InputNumber defaultValue={2500} id="currency-germany" mode="currency" currency="EUR" locale="de-DE" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-india" className="font-bold text-sm block mb-2">
                    India
                </Label>
                <InputNumber defaultValue={4250} id="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-japan" className="font-bold text-sm block mb-2">
                    Japan
                </Label>
                <InputNumber defaultValue={5002} id="currency-japan" mode="currency" currency="JPY" locale="jp-JP" fluid />
            </div>
        </div>
    );
}
```

### Prefix & Suffix

Custom texts e.g. units can be placed before or after the input section with the `prefix` and `suffix` properties.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function PrefixSuffixDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="mile" className="font-bold text-sm block mb-2">
                    Mile
                </Label>
                <InputNumber defaultValue={20} id="mile" suffix=" mi" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="percent" className="font-bold text-sm block mb-2">
                    Percent
                </Label>
                <InputNumber defaultValue={50} id="percent" prefix="%" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="expiry" className="font-bold text-sm block mb-2">
                    Expiry
                </Label>
                <InputNumber defaultValue={10} id="expiry" prefix="Expires in " suffix=" days" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="temperature" className="font-bold text-sm block mb-2">
                    Temperature
                </Label>
                <InputNumber defaultValue={20} id="temperature" prefix="&uarr; " suffix="℃" min={0} max={40} fluid />
            </div>
        </div>
    );
}
```

### Buttons

Spinner buttons can be customized with `InputGroup` and `IconField` compositions.

```tsx
'use client';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { useInputNumber } from '@primereact/headless/inputnumber';
import { Button } from '@primereact/ui/button';
import { IconField } from '@primereact/ui/iconfield';
import { InputGroup } from '@primereact/ui/inputgroup';
import type { InputNumberRootValueChangeEvent } from '@primereact/ui/inputnumber';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function ButtonsDemo() {
    const [value1, setValue1] = React.useState(20);
    const [value2, setValue2] = React.useState(25);
    const [value3, setValue3] = React.useState(10.25);

    const inputNumber1 = useInputNumber({
        value: value1,
        mode: 'currency',
        currency: 'USD',
        onChange: (e: InputNumberRootValueChangeEvent) => setValue1(e.value)
    });

    const inputNumber2 = useInputNumber({
        value: value2,
        min: 0,
        max: 100,
        onChange: (e: InputNumberRootValueChangeEvent) => setValue2(e.value)
    });

    const inputNumber3 = useInputNumber({
        value: value3,
        mode: 'currency',
        currency: 'EUR',
        onChange: (e: InputNumberRootValueChangeEvent) => setValue3(e.value)
    });

    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="stacked-buttons" className="font-bold text-sm block mb-2">
                    Stacked
                </Label>
                <InputGroup.Root>
                    <InputText
                        value={inputNumber1.state.formattedValue}
                        id="stacked-buttons"
                        fluid
                        onChange={inputNumber1.rootProps.onChange}
                        onKeyDown={inputNumber1.rootProps.onKeyDown}
                        onKeyPress={inputNumber1.rootProps.onKeyPress}
                    />
                    <InputGroup.Addon className="flex-col">
                        <Button severity="secondary" onClick={() => setValue1((prev) => Number(prev) + 1)} className="py-0 text-[.5rem]">
                            <AngleUp />
                        </Button>
                        <Button severity="secondary" onClick={() => setValue1((prev) => Number(prev) - 1)} className="py-0 text-[.5rem]">
                            <AngleDown />
                        </Button>
                    </InputGroup.Addon>
                </InputGroup.Root>
            </div>

            <div className="flex-auto">
                <Label htmlFor="minmax-buttons" className="font-bold text-sm block mb-2">
                    Min-Max
                </Label>
                <InputGroup.Root>
                    <InputGroup.Addon
                        as={Button}
                        severity="secondary"
                        className="border-(--p-inputtext-border-color) border-r-0"
                        iconOnly
                        disabled={value2 >= 100}
                        onClick={() => setValue2((prev) => Math.min(Number(prev) + 1, 100))}
                    >
                        <Plus></Plus>
                    </InputGroup.Addon>
                    <InputText
                        value={inputNumber2.state.formattedValue}
                        id="minmax-buttons"
                        fluid
                        onChange={inputNumber2.rootProps.onChange}
                        onKeyDown={inputNumber2.rootProps.onKeyDown}
                        onKeyPress={inputNumber2.rootProps.onKeyPress}
                    />
                    <InputGroup.Addon
                        as={Button}
                        severity="secondary"
                        className="border-(--p-inputtext-border-color) border-l-0"
                        iconOnly
                        disabled={value2 <= 0}
                        onClick={() => setValue2((prev) => Math.max(Number(prev) - 1, 0))}
                    >
                        <Minus></Minus>
                    </InputGroup.Addon>
                </InputGroup.Root>
            </div>

            <div className="flex-auto">
                <Label htmlFor="horizontal-buttons" className="font-bold text-sm block mb-2">
                    Horizontal with Step
                </Label>
                <IconField.Root>
                    <IconField.Inset onClick={() => setValue3((prev) => Number(prev) + 0.25)} className="cursor-pointer">
                        <Plus></Plus>
                    </IconField.Inset>
                    <InputText
                        value={inputNumber3.state.formattedValue}
                        id="horizontal-buttons"
                        fluid
                        onChange={inputNumber3.rootProps.onChange}
                        onKeyDown={inputNumber3.rootProps.onKeyDown}
                        onKeyPress={inputNumber3.rootProps.onKeyPress}
                    />
                    <IconField.Inset onClick={() => setValue3((prev) => Number(prev) - 0.25)} className="cursor-pointer">
                        <Minus></Minus>
                    </IconField.Inset>
                </IconField.Root>
            </div>
        </div>
    );
}
```

### Vertical

Buttons can also be placed vertically.

```tsx
'use client';

import { useInputNumber } from '@primereact/headless/inputnumber';
import type { InputNumberRootValueChangeEvent } from '@primereact/ui/inputnumber';
import { Button } from '@primereact/ui/button';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';

export default function VerticalDemo() {
    const [value, setValue] = React.useState(50);

    const { state, rootProps } = useInputNumber({
        value: value,
        onValueChange: (e: InputNumberRootValueChangeEvent) => setValue(e.value)
    });

    return (
        <div className="flex justify-center">
            <InputGroup.Root className="flex-col w-12">
                <InputGroup.Addon
                    as={Button}
                    severity="secondary"
                    iconOnly
                    className="w-12 border-(--p-inputtext-border-color) border-b-0 rounded-se-md rounded-es-none"
                    onClick={() => setValue((prev) => Number(prev) + 1)}
                >
                    <Plus></Plus>
                </InputGroup.Addon>
                <InputText
                    value={state.formattedValue}
                    className="w-12 text-center rounded-none"
                    onChange={rootProps.onChange}
                    onKeyDown={rootProps.onKeyDown}
                    onKeyPress={rootProps.onKeyPress}
                />
                <InputGroup.Addon
                    as={Button}
                    severity="secondary"
                    iconOnly
                    className="w-12 border-(--p-inputtext-border-color) border-t-0 rounded-se-none rounded-es-md"
                    onClick={() => setValue((prev) => Number(prev) - 1)}
                >
                    <Minus></Minus>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <InputNumber variant="filled" />
        </div>
    );
}
```

### Float Label

A floating label appears on top of the input field when focused. Visit [FloatLabel](https://v11.primereact.org/docs/components/floatlabel) documentation for more information.

```tsx
'use client';

import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputNumber, type InputNumberValueChangeEvent } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState<number | null>(null);
    const [value2, setValue2] = React.useState<number | null>(null);
    const [value3, setValue3] = React.useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <InputNumber
                    value={value1}
                    onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)}
                    id="over_label"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                />
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <InputNumber
                    value={value2}
                    onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)}
                    id="in_label"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                    variant="filled"
                />
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <InputNumber
                    value={value3}
                    onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)}
                    id="on_label"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                />
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://v11.primereact.org/docs/components/iftalabel) documentation for more information.

```tsx
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <IftaLabel>
                <InputNumber defaultValue={1} id="price_input" mode="currency" currency="USD" locale="en-US" variant="filled" />
                <Label htmlFor="price_input">Price</Label>
            </IftaLabel>
        </div>
    );
}
```

### Sizes

InputNumber provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputNumber size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
            <InputNumber placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
            <InputNumber size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { InputNumber, type InputNumberValueChangeEvent } from '@primereact/ui/inputnumber';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState<number | null>(null);
    const [value2, setValue2] = React.useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <InputNumber
                value={value1}
                onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)}
                invalid={value1 === null}
                mode="decimal"
                minFractionDigits={2}
                placeholder="Amount"
            />
            <InputNumber
                value={value2}
                onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)}
                invalid={value2 === null}
                mode="decimal"
                minFractionDigits={2}
                variant="filled"
                placeholder="Amount"
            />
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputNumber defaultValue={50} disabled prefix="%" />
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/inputnumber/features.md#api) for `InputNumberRoot` component documentation.

### Hooks

See [Headless API](../../headless/inputnumber/features.md#api) for `useInputNumber` hook documentation.

## Accessibility

See [InputNumber Primitive](../../primitive/inputnumber/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
