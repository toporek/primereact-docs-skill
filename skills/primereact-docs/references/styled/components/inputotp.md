# InputOtp

InputOtp is used to enter one time passwords.

## Usage

```tsx
import { InputOtp } from '@primereact/ui/inputotp';
```

```tsx
<InputOtp.Root>
    <InputOtp.Text index={0} />
    <InputOtp.Text index={1} />
    <InputOtp.Text index={2} />
    <InputOtp.Text index={3} />
</InputOtp.Root>
```

## Examples

### Basic

A one-time password input split into individual digit fields.

### Controlled

InputOtp can be used as a controlled component with `value` and `onValueChange` properties.

### Mask

Enable the `mask` option to hide the values in the input fields.

### Integer Only

When `integerOnly` is present, only integers can be accepted as input.

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

### Sizes

InputOtp provides `small` and `large` sizes as alternatives to the base.

### Disabled

When `disabled` is present, the component becomes non-interactive.

### Custom

Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.

### Sample

A sample UI implementation with templating and additional elements.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputotp.md#api) for `InputOtpRoot` and `InputOtpText` component documentation.

### Hooks

See [Headless API](../../headless/components/inputotp.md#api) for `useInputOtp` hook documentation.

### Accessibility

See [InputOtp Primitive](../../primitive/components/inputotp.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inputotp | Class name of the root element |
| p-inputotp-input | Class name of the input element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputotp.gap | --p-inputotp-gap | Gap of root |
| inputotp.input.width | --p-inputotp-input-width | Width of input |
| inputotp.input.sm.width | --p-inputotp-input-sm-width | Width of input in small screens |
| inputotp.input.lg.width | --p-inputotp-input-lg-width | Width of input in large screens |
