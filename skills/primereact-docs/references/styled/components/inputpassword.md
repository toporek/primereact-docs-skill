# InputPassword

InputPassword is an enhanced input for password entry with strength metering, mask toggling, and controlled or uncontrolled usage.

## Usage

```tsx
import { InputPassword } from '@primereact/ui/inputpassword';
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

### Float Label

FloatLabel visually integrates a label with its form element. Visit [FloatLabel](https://primereact.dev/docs/components/floatlabel) documentation for more information.

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

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

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-password | Class name of the root element |

### Design Tokens

List of design tokens.

> **`InputPassword` API table (`token`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputpassword or the installed `@primereact/types`.
