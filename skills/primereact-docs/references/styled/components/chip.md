# Chip

Chip represents entities using icons, labels and images.

## Usage

```tsx
import { Chip } from '@primereact/ui/chip';
```

```tsx
<Chip.Root>
    <Chip.Start />
    <Chip.Label />
    <Chip.End>
        <Chip.Remove />
    </Chip.End>
</Chip.Root>
```

## Examples

### Basic

Displays compact information with an optional remove action.

### Start & End Elements

### With Avatar

### Template

Chip also allows displaying custom content inside itself.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/chip.md#api) for `ChipRoot`, `ChipStart`, `ChipLabel`, `ChipEnd`, and `ChipRemove` component documentation.

### Hooks

See [Headless API](../../headless/components/chip.md#api) for `useChip` hook documentation.

### Accessibility

See [Chip Primitive](../../primitive/components/chip.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-chip | Class name of the root element |
| p-chip-label | Class name of the label element |
| p-chip-remove-icon | Class name of the remove element |
| p-chip-start | Class name of the start element |
| p-chip-end | Class name of the end element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| chip.border.radius | --p-chip-border-radius | Border radius of root |
| chip.padding.x | --p-chip-padding-x | Padding x of root |
| chip.padding.y | --p-chip-padding-y | Padding y of root |
| chip.gap | --p-chip-gap | Gap of root |
| chip.transition.duration | --p-chip-transition-duration | Transition duration of root |
| chip.background | --p-chip-background | Background of root |
| chip.focus.background | --p-chip-focus-background | Focus background of root |
| chip.color | --p-chip-color | Color of root |
| chip.image.width | --p-chip-image-width | Width of image |
| chip.image.height | --p-chip-image-height | Height of image |
| chip.icon.size | --p-chip-icon-size | Size of icon |
| chip.icon.color | --p-chip-icon-color | Color of icon |
| chip.label.font.weight | --p-chip-label-font-weight | Font weight of label |
| chip.label.font.size | --p-chip-label-font-size | Font size of label |
| chip.remove.icon.size | --p-chip-remove-icon-size | Size of remove icon |
| chip.remove.icon.focus.ring.width | --p-chip-remove-icon-focus-ring-width | Focus ring width of remove icon |
| chip.remove.icon.focus.ring.style | --p-chip-remove-icon-focus-ring-style | Focus ring style of remove icon |
| chip.remove.icon.focus.ring.color | --p-chip-remove-icon-focus-ring-color | Focus ring color of remove icon |
| chip.remove.icon.focus.ring.offset | --p-chip-remove-icon-focus-ring-offset | Focus ring offset of remove icon |
| chip.remove.icon.focus.ring.shadow | --p-chip-remove-icon-focus-ring-shadow | Focus ring shadow of remove icon |
| chip.remove.icon.color | --p-chip-remove-icon-color | Color of remove icon |
