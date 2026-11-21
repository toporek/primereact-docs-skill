# Checkbox

Checkbox is an extension to standard checkbox element with theming.

## Usage

```tsx
import { Checkbox } from '@primereact/ui/checkbox';
```

```tsx
<Checkbox.Root>
    <Checkbox.Box>
        <Checkbox.Indicator />
    </Checkbox.Box>
</Checkbox.Root>
```

## Examples

### Basic

Toggles a boolean value with an associated label.

### Indicator

Use `Checkbox.Indicator` to render the visual state inside `Checkbox.Box`.

`Checkbox.Indicator` also accepts a `match` prop to render based on the checkbox state.

```tsx
<Checkbox.Root indeterminate>
    <Checkbox.Box>
        <Checkbox.Indicator match="checked">
            <Check />
        </Checkbox.Indicator>
        <Checkbox.Indicator match="unchecked">
            <Times />
        </Checkbox.Indicator>
        <Checkbox.Indicator match="indeterminate">
            <Minus />
        </Checkbox.Indicator>
    </Checkbox.Box>
</Checkbox.Root>
```

Available `match` values: `checked`, `unchecked`, `indeterminate`, `always`. The default is `always`, so without the `match` prop the indicator stays mounted in every state.

With `match="always"` (the default) the indicator is always rendered, so instead of swapping indicators per state you control its visibility yourself through the `data-checked`, `data-unchecked`, and `data-indeterminate` state attributes in `className`:

```tsx
<Checkbox.Root>
    <Checkbox.Box>
        <Checkbox.Indicator match="always" className="hidden data-checked:block">
            <Check />
        </Checkbox.Indicator>
    </Checkbox.Box>
</Checkbox.Root>
```

### Indeterminate

Use the `indeterminate` property to display an indeterminate state.

### Sizes

Use the `size` property to change the size of a checkbox.

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

### Disabled

Use the `disabled` property to disable a checkbox.

### Invalid

Specify the `invalid` property to display the component with a red border.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/checkbox.md#api) for `CheckboxRoot`, `CheckboxBox`, `CheckboxIndicator`, and `CheckboxGroup` component documentation.

### Hooks

See [Headless API](../../headless/components/checkbox.md#api) for `useCheckbox` and `useCheckboxGroup` hook documentation.

### Accessibility

See [Checkbox Primitive](../../primitive/components/checkbox.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-checkbox | Class name of the root element |
| p-checkbox-box | Class name of the box element |
| p-checkbox-input | Class name of the input element |
| p-checkbox-indicator | Class name of the indicator element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| checkbox.border.radius | --p-checkbox-border-radius | Border radius of root |
| checkbox.width | --p-checkbox-width | Width of root |
| checkbox.height | --p-checkbox-height | Height of root |
| checkbox.background | --p-checkbox-background | Background of root |
| checkbox.checked.background | --p-checkbox-checked-background | Checked background of root |
| checkbox.checked.hover.background | --p-checkbox-checked-hover-background | Checked hover background of root |
| checkbox.disabled.background | --p-checkbox-disabled-background | Disabled background of root |
| checkbox.filled.background | --p-checkbox-filled-background | Filled background of root |
| checkbox.border.color | --p-checkbox-border-color | Border color of root |
| checkbox.hover.border.color | --p-checkbox-hover-border-color | Hover border color of root |
| checkbox.focus.border.color | --p-checkbox-focus-border-color | Focus border color of root |
| checkbox.checked.border.color | --p-checkbox-checked-border-color | Checked border color of root |
| checkbox.checked.hover.border.color | --p-checkbox-checked-hover-border-color | Checked hover border color of root |
| checkbox.checked.focus.border.color | --p-checkbox-checked-focus-border-color | Checked focus border color of root |
| checkbox.checked.disabled.border.color | --p-checkbox-checked-disabled-border-color | Checked disabled border color of root |
| checkbox.invalid.border.color | --p-checkbox-invalid-border-color | Invalid border color of root |
| checkbox.shadow | --p-checkbox-shadow | Shadow of root |
| checkbox.focus.ring.width | --p-checkbox-focus-ring-width | Focus ring width of root |
| checkbox.focus.ring.style | --p-checkbox-focus-ring-style | Focus ring style of root |
| checkbox.focus.ring.color | --p-checkbox-focus-ring-color | Focus ring color of root |
| checkbox.focus.ring.offset | --p-checkbox-focus-ring-offset | Focus ring offset of root |
| checkbox.focus.ring.shadow | --p-checkbox-focus-ring-shadow | Focus ring shadow of root |
| checkbox.transition.duration | --p-checkbox-transition-duration | Transition duration of root |
| checkbox.sm.width | --p-checkbox-sm-width | Sm width of root |
| checkbox.sm.height | --p-checkbox-sm-height | Sm height of root |
| checkbox.lg.width | --p-checkbox-lg-width | Lg width of root |
| checkbox.lg.height | --p-checkbox-lg-height | Lg height of root |
| checkbox.icon.size | --p-checkbox-icon-size | Size of icon |
| checkbox.icon.color | --p-checkbox-icon-color | Color of icon |
| checkbox.icon.checked.color | --p-checkbox-icon-checked-color | Checked color of icon |
| checkbox.icon.checked.hover.color | --p-checkbox-icon-checked-hover-color | Checked hover color of icon |
| checkbox.icon.disabled.color | --p-checkbox-icon-disabled-color | Disabled color of icon |
| checkbox.icon.sm.size | --p-checkbox-icon-sm-size | Sm size of icon |
| checkbox.icon.lg.size | --p-checkbox-icon-lg-size | Lg size of icon |
