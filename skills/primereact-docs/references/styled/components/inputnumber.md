# InputNumber

InputNumber is used to enter numeric values.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';
import { ChevronDown, ChevronUp } from '@primeicons/react';

export default function Preview() {
    return (
        <div className="flex flex-col gap-1.5 mx-auto w-full max-w-3xs">
            <Label htmlFor="basic-inputnumber">Monthly budget</Label>
            <InputNumber.Root defaultValue={1500} mode="currency" currency="USD" locale="en-US">
                <InputNumber.Input id="basic-inputnumber" />
                <InputNumber.Group>
                    <InputNumber.Increment>
                        <ChevronUp />
                    </InputNumber.Increment>
                    <InputNumber.Decrement>
                        <ChevronDown />
                    </InputNumber.Decrement>
                </InputNumber.Group>
            </InputNumber.Root>
            <small className="text-surface-500">Set the maximum amount you can spend per month</small>
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
            <InputNumber.Root defaultValue={42723}>
                <InputNumber.Input />
            </InputNumber.Root>
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
        <div className="flex max-w-2xs flex-col mx-auto gap-4">
            <div className="flex-auto">
                <Label htmlFor="integeronly" className="mb-2">
                    Integer Only
                </Label>
                <InputNumber.Root defaultValue={42723} fluid>
                    <InputNumber.Input id="integeronly" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="withoutgrouping" className="mb-2">
                    Without Grouping
                </Label>
                <InputNumber.Root defaultValue={58151} useGrouping={false} fluid>
                    <InputNumber.Input id="withoutgrouping" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="minmaxfraction" className="mb-2">
                    Min-Max Fraction Digits
                </Label>
                <InputNumber.Root defaultValue={2351.35} minFractionDigits={2} maxFractionDigits={5} fluid>
                    <InputNumber.Input id="minmaxfraction" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="minmax" className="mb-2">
                    Min-Max Boundaries
                </Label>
                <InputNumber.Root defaultValue={50} min={0} max={100} fluid>
                    <InputNumber.Input id="minmax" />
                </InputNumber.Root>
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
        <div className="flex flex-col max-w-2xs mx-auto gap-4">
            <div className="flex-auto">
                <Label htmlFor="locale-user" className="mb-2">
                    User Locale
                </Label>
                <InputNumber.Root defaultValue={151351} minFractionDigits={2} fluid>
                    <InputNumber.Input id="locale-user" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-us" className="mb-2">
                    United States Locale
                </Label>
                <InputNumber.Root defaultValue={115744} locale="en-US" minFractionDigits={2} fluid>
                    <InputNumber.Input id="locale-us" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-german" className="mb-2">
                    German Locale
                </Label>
                <InputNumber.Root defaultValue={635524} locale="de-DE" minFractionDigits={2} fluid>
                    <InputNumber.Input id="locale-german" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-indian" className="mb-2">
                    Indian Locale
                </Label>
                <InputNumber.Root defaultValue={732762} locale="en-IN" minFractionDigits={2} fluid>
                    <InputNumber.Input id="locale-indian" />
                </InputNumber.Root>
            </div>
        </div>
    );
}

```

### Currency

Monetary values are enabled by setting `mode` property as `currency`. In this setting, `currency` property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.

```tsx
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function CurrencyDemo() {
    return (
        <div className="flex flex-col max-w-2xs mx-auto gap-4">
            <div className="flex-auto">
                <Label htmlFor="currency-us" className="mb-2">
                    United States
                </Label>
                <InputNumber.Root defaultValue={1500} mode="currency" currency="USD" locale="en-US" fluid>
                    <InputNumber.Input id="currency-us" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-germany" className="mb-2">
                    Germany
                </Label>
                <InputNumber.Root defaultValue={2500} mode="currency" currency="EUR" locale="de-DE" fluid>
                    <InputNumber.Input id="currency-germany" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-india" className="mb-2">
                    India
                </Label>
                <InputNumber.Root defaultValue={4250} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" fluid>
                    <InputNumber.Input id="currency-india" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-japan" className="mb-2">
                    Japan
                </Label>
                <InputNumber.Root defaultValue={5002} mode="currency" currency="JPY" locale="jp-JP" fluid>
                    <InputNumber.Input id="currency-japan" />
                </InputNumber.Root>
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
        <div className="flex flex-col max-w-2xs mx-auto gap-4">
            <div className="flex-auto">
                <Label htmlFor="mile" className="mb-2">
                    Mile
                </Label>
                <InputNumber.Root defaultValue={20} suffix=" mi" fluid>
                    <InputNumber.Input id="mile" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="percent" className="mb-2">
                    Percent
                </Label>
                <InputNumber.Root defaultValue={50} prefix="%" fluid>
                    <InputNumber.Input id="percent" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="expiry" className="mb-2">
                    Expiry
                </Label>
                <InputNumber.Root defaultValue={10} prefix="Expires in " suffix=" days" fluid>
                    <InputNumber.Input id="expiry" />
                </InputNumber.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="temperature" className="mb-2">
                    Temperature
                </Label>
                <InputNumber.Root defaultValue={20} prefix="&uarr; " suffix="℃" min={0} max={40} fluid>
                    <InputNumber.Input id="temperature" />
                </InputNumber.Root>
            </div>
        </div>
    );
}

```

### Buttons

Spinner buttons can be customized with `InputGroup` and `IconField` compositions.

```tsx
'use client';
import { ChevronDown, ChevronUp, Minus, Plus } from '@primeicons/react';
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function ButtonsDemo() {
    return (
        <div className="flex flex-col gap-6 max-w-3xs mx-auto">
            <div>
                <Label htmlFor="stacked-buttons" className="mb-2">
                    Stacked
                </Label>
                <InputNumber.Root defaultValue={20} mode="currency" currency="USD" locale="en-US" fluid>
                    <InputNumber.Input id="stacked-buttons" />
                    <InputNumber.Group>
                        <InputNumber.Increment>
                            <ChevronUp />
                        </InputNumber.Increment>
                        <InputNumber.Decrement>
                            <ChevronDown />
                        </InputNumber.Decrement>
                    </InputNumber.Group>
                </InputNumber.Root>
            </div>

            <div>
                <Label htmlFor="minmax-buttons" className="mb-2">
                    Min-Max
                </Label>
                <InputNumber.Root defaultValue={25} mode="decimal" min={0} max={100} step={10} fluid>
                    <InputNumber.Input id="minmax-buttons" />
                    <InputNumber.Group>
                        <InputNumber.Increment>
                            <ChevronUp />
                        </InputNumber.Increment>
                        <InputNumber.Decrement>
                            <ChevronDown />
                        </InputNumber.Decrement>
                    </InputNumber.Group>
                </InputNumber.Root>
            </div>

            <div>
                <Label htmlFor="horizontal-buttons" className="mb-2">
                    Horizontal
                </Label>
                <InputNumber.Root defaultValue={10.25} step={0.25} mode="currency" currency="EUR" locale="en-US" layout="horizontal" fluid>
                    <InputNumber.Decrement>
                        <Minus />
                    </InputNumber.Decrement>
                    <InputNumber.Input id="horizontal-buttons" />
                    <InputNumber.Increment>
                        <Plus />
                    </InputNumber.Increment>
                </InputNumber.Root>
            </div>
        </div>
    );
}

```

### Vertical

Buttons can also be placed vertically.

```tsx
'use client';
import { ChevronDown, ChevronUp } from '@primeicons/react';
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function VerticalDemo() {
    return (
        <div className="flex justify-center">
            <div>
                <Label htmlFor="vertical-buttons" className="mb-2">
                    Vertical
                </Label>
                <InputNumber.Root className="w-10" defaultValue={3} layout="vertical">
                    <InputNumber.Increment>
                        <ChevronUp />
                    </InputNumber.Increment>
                    <InputNumber.Input id="vertical-buttons" className="px-1!" />
                    <InputNumber.Decrement>
                        <ChevronDown />
                    </InputNumber.Decrement>
                </InputNumber.Root>
            </div>
        </div>
    );
}

```

### Float Label

A floating label appears on top of the input field when focused. Visit [FloatLabel](https://primereact.dev/docs/components/floatlabel) documentation for more information.

```tsx
'use client';

import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputNumber, type InputNumberRootValueChangeEvent } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState<number | null>(null);
    const [value2, setValue2] = React.useState<number | null>(null);
    const [value3, setValue3] = React.useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <InputNumber.Root
                    value={value1}
                    onValueChange={(e: InputNumberRootValueChangeEvent) => setValue1(e.value)}
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                >
                    <InputNumber.Input id="over_label" />
                </InputNumber.Root>
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <InputNumber.Root
                    value={value2}
                    onValueChange={(e: InputNumberRootValueChangeEvent) => setValue2(e.value)}
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                    variant="filled"
                >
                    <InputNumber.Input id="in_label" />
                </InputNumber.Root>
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <InputNumber.Root
                    value={value3}
                    onValueChange={(e: InputNumberRootValueChangeEvent) => setValue3(e.value)}
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                >
                    <InputNumber.Input id="on_label" />
                </InputNumber.Root>
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}

```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

```tsx
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <IftaLabel>
                <InputNumber.Root defaultValue={1} mode="currency" currency="USD" locale="en-US" variant="filled">
                    <InputNumber.Input id="price_input" />
                </InputNumber.Root>
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
            <InputNumber.Root size="small" mode="currency" currency="USD" locale="en-US">
                <InputNumber.Input placeholder="Small" />
            </InputNumber.Root>
            <InputNumber.Root mode="currency" currency="USD" locale="en-US">
                <InputNumber.Input placeholder="Normal" />
            </InputNumber.Root>
            <InputNumber.Root size="large" mode="currency" currency="USD" locale="en-US">
                <InputNumber.Input placeholder="Large" />
            </InputNumber.Root>
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
            <InputNumber.Root variant="filled">
                <InputNumber.Input />
            </InputNumber.Root>
        </div>
    );
}

```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { InputNumber, type InputNumberRootValueChangeEvent } from '@primereact/ui/inputnumber';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState<number | null>(null);
    const [value2, setValue2] = React.useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <InputNumber.Root
                value={value1}
                onValueChange={(e: InputNumberRootValueChangeEvent) => setValue1(e.value)}
                invalid={value1 === null}
                mode="decimal"
                minFractionDigits={2}
            >
                <InputNumber.Input placeholder="Amount" />
            </InputNumber.Root>
            <InputNumber.Root
                value={value2}
                onValueChange={(e: InputNumberRootValueChangeEvent) => setValue2(e.value)}
                invalid={value2 === null}
                mode="decimal"
                minFractionDigits={2}
                variant="filled"
            >
                <InputNumber.Input placeholder="Amount" />
            </InputNumber.Root>
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
            <InputNumber.Root defaultValue={50} disabled prefix="%">
                <InputNumber.Input />
            </InputNumber.Root>
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

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inputnumber | Class name of the root element |
| p-inputnumber-input | Class name of the input element |
| p-inputnumber-group | Class name of the button group element |
| p-inputnumber-increment | Class name of the increment button element |
| p-inputnumber-decrement | Class name of the decrement button element |
| p-inputnumber-text | Class name of the text element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputnumber.transition.duration | --p-inputnumber-transition-duration | Transition duration of root |
| inputnumber.button.width | --p-inputnumber-button-width | Width of button |
| inputnumber.button.border.radius | --p-inputnumber-button-border-radius | Border radius of button |
| inputnumber.button.vertical.padding | --p-inputnumber-button-vertical-padding | Vertical padding of button |
| inputnumber.button.background | --p-inputnumber-button-background | Background of button |
| inputnumber.button.hover.background | --p-inputnumber-button-hover-background | Hover background of button |
| inputnumber.button.active.background | --p-inputnumber-button-active-background | Active background of button |
| inputnumber.button.border.color | --p-inputnumber-button-border-color | Border color of button |
| inputnumber.button.hover.border.color | --p-inputnumber-button-hover-border-color | Hover border color of button |
| inputnumber.button.active.border.color | --p-inputnumber-button-active-border-color | Active border color of button |
| inputnumber.button.color | --p-inputnumber-button-color | Color of button |
| inputnumber.button.hover.color | --p-inputnumber-button-hover-color | Hover color of button |
| inputnumber.button.active.color | --p-inputnumber-button-active-color | Active color of button |
