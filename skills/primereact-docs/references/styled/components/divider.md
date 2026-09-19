# Divider

Divider is used to separate contents.

## Usage

```tsx
import { Divider } from '@primereact/ui/divider';
```

```tsx
<Divider />
```

## Examples

### Basic

Separates content sections horizontally or vertically.

### Type

Style of the border is configured with the `type` property that can either be `solid`, `dotted` or `dashed`.

### Vertical

Vertical divider is enabled by setting the `orientation` property as `vertical`.

### Alignment

Children are rendered within the boundaries of the divider where location of the content is configured with the `align` property. In horizontal orientation, alignment options are `left`, `center` and `right` whereas vertical mode supports `top`, `center` and `bottom`.

## Related

### Components

See [Primitive API](../../primitive/components/divider.md#api) for `DividerRoot` component documentation.

### Hooks

See [Headless API](../../headless/components/divider.md#api) for `useDivider` hook documentation.

### Accessibility

See [Divider Primitive](../../primitive/components/divider.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-divider | Class name of the root element |
| p-divider-content | Class name of the content element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| divider.border.color | --p-divider-border-color | Border color of root |
| divider.content.background | --p-divider-content-background | Background of content |
| divider.content.color | --p-divider-content-color | Color of content |
| divider.horizontal.margin | --p-divider-horizontal-margin | Margin of horizontal |
| divider.horizontal.padding | --p-divider-horizontal-padding | Padding of horizontal |
| divider.horizontal.content.padding | --p-divider-horizontal-content-padding | Content padding of horizontal |
| divider.vertical.margin | --p-divider-vertical-margin | Margin of vertical |
| divider.vertical.padding | --p-divider-vertical-padding | Padding of vertical |
| divider.vertical.content.padding | --p-divider-vertical-content-padding | Content padding of vertical |
