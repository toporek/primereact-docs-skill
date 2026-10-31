# ToggleButton

ToggleButton component is used to create a button that can be toggled on or off.

## Usage

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
```

```tsx
<ToggleButton.Root>
    <ToggleButton.Indicator>Toggle</ToggleButton.Indicator>
</ToggleButton.Root>
```

## Examples

### Basic

A button that switches between active and inactive states.

### Render Props

This is called the render prop pattern. It allows using a function to customize what the component displays based on its internal state.

### Controlled

Use `pressed` and `onPressedChange` properties to control the state of the ToggleButton.

### Size

`ToggleButton` provides small and large sizes as alternatives to the base by using the `size` property.

### Fluid

When `fluid` is enabled, the ToggleButton spans the full width of its parent container.

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

### Disabled

When `disabled` is present, the element cannot be edited and focused.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/togglebutton.md#api) for `ToggleButtonRoot`, `ToggleButtonIndicator`, `ToggleButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/components/togglebutton.md#api) for `useToggleButton` and `useToggleButtonGroup` hook documentation.

### Accessibility

See [ToggleButton Primitive](../../primitive/components/togglebutton.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-togglebutton | Class name of the root element |
| p-togglebutton-content | Class name of the content element |

| ClassName | Description |
|:------|:------|
| p-togglebutton-group | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| togglebutton.padding | --p-togglebutton-padding | Padding of root |
| togglebutton.border.radius | --p-togglebutton-border-radius | Border radius of root |
| togglebutton.gap | --p-togglebutton-gap | Gap of root |
| togglebutton.font.size | --p-togglebutton-font-size | Font size of root |
| togglebutton.font.weight | --p-togglebutton-font-weight | Font weight of root |
| togglebutton.disabled.background | --p-togglebutton-disabled-background | Disabled background of root |
| togglebutton.disabled.border.color | --p-togglebutton-disabled-border-color | Disabled border color of root |
| togglebutton.disabled.color | --p-togglebutton-disabled-color | Disabled color of root |
| togglebutton.invalid.border.color | --p-togglebutton-invalid-border-color | Invalid border color of root |
| togglebutton.focus.ring.width | --p-togglebutton-focus-ring-width | Focus ring width of root |
| togglebutton.focus.ring.style | --p-togglebutton-focus-ring-style | Focus ring style of root |
| togglebutton.focus.ring.color | --p-togglebutton-focus-ring-color | Focus ring color of root |
| togglebutton.focus.ring.offset | --p-togglebutton-focus-ring-offset | Focus ring offset of root |
| togglebutton.focus.ring.shadow | --p-togglebutton-focus-ring-shadow | Focus ring shadow of root |
| togglebutton.transition.duration | --p-togglebutton-transition-duration | Transition duration of root |
| togglebutton.sm.font.size | --p-togglebutton-sm-font-size | Sm font size of root |
| togglebutton.sm.padding | --p-togglebutton-sm-padding | Sm padding of root |
| togglebutton.lg.font.size | --p-togglebutton-lg-font-size | Lg font size of root |
| togglebutton.lg.padding | --p-togglebutton-lg-padding | Lg padding of root |
| togglebutton.background | --p-togglebutton-background | Background of root |
| togglebutton.checked.background | --p-togglebutton-checked-background | Checked background of root |
| togglebutton.hover.background | --p-togglebutton-hover-background | Hover background of root |
| togglebutton.border.color | --p-togglebutton-border-color | Border color of root |
| togglebutton.color | --p-togglebutton-color | Color of root |
| togglebutton.hover.color | --p-togglebutton-hover-color | Hover color of root |
| togglebutton.checked.color | --p-togglebutton-checked-color | Checked color of root |
| togglebutton.checked.border.color | --p-togglebutton-checked-border-color | Checked border color of root |
| togglebutton.icon.disabled.color | --p-togglebutton-icon-disabled-color | Disabled color of icon |
| togglebutton.icon.color | --p-togglebutton-icon-color | Color of icon |
| togglebutton.icon.hover.color | --p-togglebutton-icon-hover-color | Hover color of icon |
| togglebutton.icon.checked.color | --p-togglebutton-icon-checked-color | Checked color of icon |
| togglebutton.content.padding | --p-togglebutton-content-padding | Padding of content |
| togglebutton.content.border.radius | --p-togglebutton-content-border-radius | Border radius of content |
| togglebutton.content.checked.shadow | --p-togglebutton-content-checked-shadow | Checked shadow of content |
| togglebutton.content.sm.padding | --p-togglebutton-content-sm-padding | Sm padding of content |
| togglebutton.content.lg.padding | --p-togglebutton-content-lg-padding | Lg padding of content |
| togglebutton.content.checked.background | --p-togglebutton-content-checked-background | Checked background of content |
