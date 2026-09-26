# Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

## Usage

```tsx
import { Breadcrumb } from '@primereact/ui/breadcrumb';
```

```tsx
<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item />
        <Breadcrumb.Separator />
    </Breadcrumb.List>
</Breadcrumb.Root>
```

## Examples

### Basic

Shows the current location within a navigational hierarchy.

### Route

A breadcrumb can be used with routing libraries to navigate between pages.

### Controlled

A breadcrumb can be controlled by managing the current page state.

### Custom Separator

A breadcrumb allows customization of the separator between items.

### Ellipsis

### Custom Item

A breadcrumb allows customization of the items.

## Related

### Sub-Components

See [Breadcrumb Primitive](../../primitive/components/breadcrumb.md#api) for the full sub-component API.

### Hooks

See [useBreadcrumb](../../headless/components/breadcrumb.md#api) for the headless hook API.

### Accessibility

See [Breadcrumb Primitive](../../primitive/components/breadcrumb.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-breadcrumb | Class name of the root element |
| p-breadcrumb-list | Class name of the list element |
| p-breadcrumb-item | Class name of the item element |
| p-breadcrumb-separator | Class name of the separator element |
| p-breadcrumb-item-link | Class name of the link element |
| p-breadcrumb-current | Class name of the current element |
| p-breadcrumb-ellipsis | Class name of the ellipsis element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| breadcrumb.padding | --p-breadcrumb-padding | Padding of root |
| breadcrumb.background | --p-breadcrumb-background | Background of root |
| breadcrumb.gap | --p-breadcrumb-gap | Gap of root |
| breadcrumb.transition.duration | --p-breadcrumb-transition-duration | Transition duration of root |
| breadcrumb.item.color | --p-breadcrumb-item-color | Color of item |
| breadcrumb.item.hover.color | --p-breadcrumb-item-hover-color | Hover color of item |
| breadcrumb.item.border.radius | --p-breadcrumb-item-border-radius | Border radius of item |
| breadcrumb.item.gap | --p-breadcrumb-item-gap | Gap of item |
| breadcrumb.item.icon.color | --p-breadcrumb-item-icon-color | Icon color of item |
| breadcrumb.item.icon.hover.color | --p-breadcrumb-item-icon-hover-color | Icon hover color of item |
| breadcrumb.item.icon.size | --p-breadcrumb-item-icon-size | Icon size of item icon |
| breadcrumb.item.label.font.weight | --p-breadcrumb-item-label-font-weight | Font weight of item label |
| breadcrumb.item.label.font.size | --p-breadcrumb-item-label-font-size | Font size of item label |
| breadcrumb.item.focus.ring.width | --p-breadcrumb-item-focus-ring-width | Focus ring width of item |
| breadcrumb.item.focus.ring.style | --p-breadcrumb-item-focus-ring-style | Focus ring style of item |
| breadcrumb.item.focus.ring.color | --p-breadcrumb-item-focus-ring-color | Focus ring color of item |
| breadcrumb.item.focus.ring.offset | --p-breadcrumb-item-focus-ring-offset | Focus ring offset of item |
| breadcrumb.item.focus.ring.shadow | --p-breadcrumb-item-focus-ring-shadow | Focus ring shadow of item |
| breadcrumb.separator.color | --p-breadcrumb-separator-color | Color of separator |
