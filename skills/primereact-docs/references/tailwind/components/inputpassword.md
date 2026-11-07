# InputPassword

InputPassword is an enhanced input for password entry with strength metering, mask toggling, and controlled or uncontrolled usage.

## Usage

```tsx
import { InputPassword } from '@/components/ui/inputpassword';
```

```tsx
<InputPassword />
```

## Examples

### Basic

A password input with strength indicator and toggle visibility.

### Toggle Mask

Adding a toggle icon to show or hide the password, allowing users to verify their input.

### Requirements

Display a checklist of password requirements that update in real-time as the user types, providing clear feedback on which criteria have been met.

### Strength Meter

Visualize the overall password strength with an animated progress bar and a severity-based label that adapts as the password improves.

### Popover

Combine a visibility toggle, strength meter, and requirements checklist into a fully custom password creation with Popover component.

### Clear Icon

Use a custom clear action to reset the password input.

### Fluid

The fluid prop makes the component take up the full width of its container when set to true.

### Sizes

InputPassword provides `small` and `large` sizes as alternatives to the base.

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default outlined style.

### Disabled

Use the `disabled` property to disable a password input.

### Invalid

Specify the `invalid` property to display the component with a red border.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputpassword.md#api) for `InputPasswordRoot` component documentation.

### Hooks

See [Headless API](../../headless/components/inputpassword.md#api) for `useInputPassword` hook documentation.

### Accessibility

See [InputPassword Primitive](../../primitive/components/inputpassword.md#accessibility) for WAI-ARIA compliance details and keyboard support.
