# Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

## Usage

```tsx
import { Inplace } from '@primereact/ui/inplace';
```

```tsx
<Inplace.Root>
    <Inplace.Display></Inplace.Display>
    <Inplace.Content></Inplace.Content>
</Inplace.Root>
```

## Examples

### Basic

Switches between a display and an edit mode on click.

### Disabled

Use the `disabled` prop to disable the inplace content.

### Controlled

Use the `open` and `onOpenChange` props to control the inplace content.

### Image

Any content such as an image can be placed inside the `Inplace.Content` component.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inplace.md#api) for sub-component documentation.

### Hooks

See [Headless API](../../headless/components/inplace.md#api) for hook documentation.

### Accessibility

See [Inplace Primitive](../../primitive/components/inplace.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inplace | Class name of the root element |
| p-inplace-display | Class name of the display element |
| p-inplace-content | Class name of the content element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inplace.padding | --p-inplace-padding | Padding of root |
| inplace.border.radius | --p-inplace-border-radius | Border radius of root |
| inplace.focus.ring.width | --p-inplace-focus-ring-width | Focus ring width of root |
| inplace.focus.ring.style | --p-inplace-focus-ring-style | Focus ring style of root |
| inplace.focus.ring.color | --p-inplace-focus-ring-color | Focus ring color of root |
| inplace.focus.ring.offset | --p-inplace-focus-ring-offset | Focus ring offset of root |
| inplace.focus.ring.shadow | --p-inplace-focus-ring-shadow | Focus ring shadow of root |
| inplace.transition.duration | --p-inplace-transition-duration | Transition duration of root |
| inplace.display.hover.background | --p-inplace-display-hover-background | Hover background of display |
| inplace.display.hover.color | --p-inplace-display-hover-color | Hover color of display |
