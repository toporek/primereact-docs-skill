# Tag

Tag component is used to categorize content.

## Usage

```tsx
import { Tag } from '@primereact/ui/tag';
```

```tsx
<Tag />
```

## Examples

### Basic

A small label for categorizing or marking items.

### Severity

Use `severity` property to define the severity of the tag.

### Pill

Use `rounded` property to display a tag as a pill.

### Icon

Place the icon left or right of the label.

### Template

Children of the component are passed as the content for templating.

### As button

Use `as="button"` to display a tag as a button.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/tag.md#api) for sub-component documentation.

### Hooks

See [Headless API](../../headless/components/tag.md#api) for hook documentation.

### Accessibility

See [Tag Primitive](../../primitive/components/tag.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-tag | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| tag.font.size | --p-tag-font-size | Font size of root |
| tag.font.weight | --p-tag-font-weight | Font weight of root |
| tag.padding | --p-tag-padding | Padding of root |
| tag.gap | --p-tag-gap | Gap of root |
| tag.border.radius | --p-tag-border-radius | Border radius of root |
| tag.rounded.border.radius | --p-tag-rounded-border-radius | Rounded border radius of root |
| tag.icon.size | --p-tag-icon-size | Size of icon |
| tag.primary.background | --p-tag-primary-background | Background of primary |
| tag.primary.color | --p-tag-primary-color | Color of primary |
| tag.secondary.background | --p-tag-secondary-background | Background of secondary |
| tag.secondary.color | --p-tag-secondary-color | Color of secondary |
| tag.success.background | --p-tag-success-background | Background of success |
| tag.success.color | --p-tag-success-color | Color of success |
| tag.info.background | --p-tag-info-background | Background of info |
| tag.info.color | --p-tag-info-color | Color of info |
| tag.warn.background | --p-tag-warn-background | Background of warn |
| tag.warn.color | --p-tag-warn-color | Color of warn |
| tag.danger.background | --p-tag-danger-background | Background of danger |
| tag.danger.color | --p-tag-danger-color | Color of danger |
| tag.contrast.background | --p-tag-contrast-background | Background of contrast |
| tag.contrast.color | --p-tag-contrast-color | Color of contrast |
