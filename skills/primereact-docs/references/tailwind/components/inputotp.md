# InputOtp

InputOtp is used to enter one time passwords.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/inputotp.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';
```

```tsx
<InputOtp>
    <InputOtpText />
</InputOtp>
```

## Examples

### Basic

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

### Accessibility

#### Screen Reader Support

Input OTP uses a set of InputText components, refer to the InputText component for more information about the screen reader support.

#### Keyboard Support

| Key           | Function                                                         |
| ------------- | ---------------------------------------------------------------- |
| `tab`         | Moves focus to the input otp.                                    |
| `right arrow` | Moves focus to the next input element.                           |
| `left arrow`  | Moves focus to the previous input element.                       |
| `backspace`   | Deletes the input and moves focus to the previous input element. |
