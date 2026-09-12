# RadioButton

RadioButton is an extension to standard radio button element with theming.

## Usage

```tsx
import { RadioButtonGroup } from '@primereact/ui/radiobuttongroup';
import { RadioButton } from '@primereact/ui/radiobutton';
```

```tsx
<RadioButtonGroup>
    <RadioButton.Root>
        <RadioButton.Box>
            <RadioButton.Indicator />
        </RadioButton.Box>
    </RadioButton.Root>
</RadioButtonGroup>
```

## Examples

### Basic

Selects a single option from a group of mutually exclusive choices.

### Group

Use the `RadioButtonGroup` component with `value` and `onValueChange` props to control the selected state of radio buttons.

### Dynamic

RadioButtons can be generated using a list of values.

### Card

RadioButtons can be displayed in a card style.

### Sizes

Use the `size` property to change the size of a radio button.

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

### Disabled

When the `disabled` property is present, the element cannot be edited and focused.

### Invalid

Invalid state is displayed using the `invalid` property to indicate a failed validation. This style is useful when integrating with form validation libraries.

### Conditional Indicator

`RadioButton.Indicator` accepts a `match` prop to conditionally render based on the radio button state. When `match` is set, the indicator only mounts when the current state matches the given value.

```tsx
<RadioButton.Root>
    <RadioButton.Box>
        <RadioButton.Indicator match="checked">
            <Check />
        </RadioButton.Indicator>
        <RadioButton.Indicator match="unchecked">
            <Circle />
        </RadioButton.Indicator>
    </RadioButton.Box>
</RadioButton.Root>
```

Available values: `checked`, `unchecked`. Without the `match` prop, the indicator renders in all states.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/radiobutton.md#api) for `RadioButtonRoot`, `RadioButtonBox`, `RadioButtonIndicator`, and `RadioButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/components/radiobutton.md#api) for `useRadioButton` and `useRadioButtonGroup` hook documentation.

### Accessibility

See [RadioButton Primitive](../../primitive/components/radiobutton.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-radiobutton | Class name of the root element |
| p-radiobutton-box | Class name of the box element |
| p-radiobutton-input | Class name of the input element |
| p-radiobutton-icon | Class name of the indicator element |

| ClassName | Description |
|:------|:------|
| p-radiobutton-group | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| radiobutton.width | --p-radiobutton-width | Width of root |
| radiobutton.height | --p-radiobutton-height | Height of root |
| radiobutton.background | --p-radiobutton-background | Background of root |
| radiobutton.checked.background | --p-radiobutton-checked-background | Checked background of root |
| radiobutton.checked.hover.background | --p-radiobutton-checked-hover-background | Checked hover background of root |
| radiobutton.disabled.background | --p-radiobutton-disabled-background | Disabled background of root |
| radiobutton.filled.background | --p-radiobutton-filled-background | Filled background of root |
| radiobutton.border.color | --p-radiobutton-border-color | Border color of root |
| radiobutton.hover.border.color | --p-radiobutton-hover-border-color | Hover border color of root |
| radiobutton.focus.border.color | --p-radiobutton-focus-border-color | Focus border color of root |
| radiobutton.checked.border.color | --p-radiobutton-checked-border-color | Checked border color of root |
| radiobutton.checked.hover.border.color | --p-radiobutton-checked-hover-border-color | Checked hover border color of root |
| radiobutton.checked.focus.border.color | --p-radiobutton-checked-focus-border-color | Checked focus border color of root |
| radiobutton.checked.disabled.border.color | --p-radiobutton-checked-disabled-border-color | Checked disabled border color of root |
| radiobutton.invalid.border.color | --p-radiobutton-invalid-border-color | Invalid border color of root |
| radiobutton.shadow | --p-radiobutton-shadow | Shadow of root |
| radiobutton.focus.ring.width | --p-radiobutton-focus-ring-width | Focus ring width of root |
| radiobutton.focus.ring.style | --p-radiobutton-focus-ring-style | Focus ring style of root |
| radiobutton.focus.ring.color | --p-radiobutton-focus-ring-color | Focus ring color of root |
| radiobutton.focus.ring.offset | --p-radiobutton-focus-ring-offset | Focus ring offset of root |
| radiobutton.focus.ring.shadow | --p-radiobutton-focus-ring-shadow | Focus ring shadow of root |
| radiobutton.transition.duration | --p-radiobutton-transition-duration | Transition duration of root |
| radiobutton.sm.width | --p-radiobutton-sm-width | Sm width of root |
| radiobutton.sm.height | --p-radiobutton-sm-height | Sm height of root |
| radiobutton.lg.width | --p-radiobutton-lg-width | Lg width of root |
| radiobutton.lg.height | --p-radiobutton-lg-height | Lg height of root |
| radiobutton.icon.size | --p-radiobutton-icon-size | Size of icon |
| radiobutton.icon.checked.color | --p-radiobutton-icon-checked-color | Checked color of icon |
| radiobutton.icon.checked.hover.color | --p-radiobutton-icon-checked-hover-color | Checked hover color of icon |
| radiobutton.icon.disabled.color | --p-radiobutton-icon-disabled-color | Disabled color of icon |
| radiobutton.icon.sm.size | --p-radiobutton-icon-sm-size | Sm size of icon |
| radiobutton.icon.lg.size | --p-radiobutton-icon-lg-size | Lg size of icon |
