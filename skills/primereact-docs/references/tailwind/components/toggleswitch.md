# ToggleSwitch

ToggleSwitch is used to select a boolean value.

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/toggleswitch.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { ToggleSwitch } from '@/components/ui/toggleswitch';
```

```tsx
<ToggleSwitch />
```

## Examples

### Basic

### Controlled

A controlled ToggleSwitch requires managing the checked state with a state variable and handling the change event manually. This allows for complete control over the ToggleSwitch's behavior.

### Uncontrolled

For an uncontrolled ToggleSwitch component, `defaultChecked` is used to set the initial state, and the component manages its own state internally.

### Template

`ToggleSwitch` also allows displaying custom content inside itself.

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

### Disabled

When `disabled` is present, the element cannot be edited and focused.

## Accessibility

### Screen Reader

ToggleSwitch component uses a hidden native checkbox element with switch role internally that is only visible to screen readers. Value to describe the component can either be provided via `label` tag combined with `id` prop or using `aria-labelledby`, `aria-label` props.

```tsx
<label htmlFor="switch1">Remember Me</label>
<ToggleSwitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<ToggleSwitch aria-labelledby="switch2" />

<ToggleSwitch aria-label="Remember Me" />
```

### Keyboard Support

| Key     | Function                          |
| ------- | --------------------------------- |
| `tab`   | Moves focus to the toggle switch. |
| `space` | Toggles the checked state.        |
