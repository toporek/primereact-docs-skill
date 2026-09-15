# InputNumber

InputNumber is used to enter numeric values.

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

### Float Label

A floating label appears on top of the input field when focused. Visit [FloatLabel](https://primereact.dev/docs/components/floatlabel) documentation for more information.

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

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
