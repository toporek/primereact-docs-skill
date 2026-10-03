# InputNumber

InputNumber is used to enter numeric values.

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

### Numerals

InputNumber supports decimal numbers with precision control.

### Locale

Localization information such as grouping and decimal symbols are defined with the `locale` property which defaults to the user locale.

### Currency

Monetary values are enabled by setting `mode` property as `currency`. In this setting, `currency` property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.

### Prefix & Suffix

Custom texts e.g. units can be placed before or after the input section with the `prefix` and `suffix` properties.

### Buttons

Spinner buttons can be customized with `InputGroup` and `IconField` compositions.

### Vertical

Buttons can also be placed vertically.

### Sizes

InputNumber provides `small` and `large` sizes as alternatives to the base by setting the `size` property.

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

### Disabled

When `disabled` is present, the element cannot be edited and focused.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputnumber.md#api) for `InputNumberRoot` component documentation.

### Hooks

See [Headless API](../../headless/components/inputnumber.md#api) for `useInputNumber` hook documentation.

### Accessibility

See [InputNumber Primitive](../../primitive/components/inputnumber.md#accessibility) for WAI-ARIA compliance details and keyboard support.
