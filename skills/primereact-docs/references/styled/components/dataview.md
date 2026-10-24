# DataView

DataView displays data in grid or list layout with pagination and sorting features.

## Usage

```tsx
import { DataView } from '@primereact/ui/dataview';
```

```tsx
<DataView.Root>
    <DataView.Header></DataView.Header>
    <DataView.Content></DataView.Content>
    <DataView.Footer></DataView.Footer>
</DataView.Root>
```

## Examples

### Basic

Displays a list of items with support for layout switching.

### Pagination

Use `Paginator` with `DataView.Footer` to navigate large datasets efficiently.

### Sorting

Use `useDataView` to sort items by a specific field and order.

### Layout

Switch between grid and list layouts to display the same data with different visual density.

### Loading

Use a skeleton layout to represent loading state while data is being fetched.

## Related

### Sub-Components

See [DataView Primitive](../../primitive/components/dataview.md#api) for the full sub-component API.

### Hooks

See [useDataView](../../headless/components/dataview.md#api) for the headless hook API.

### Accessibility

See [DataView Primitive](../../primitive/components/dataview.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-dataview | Class name of the root element |
| p-dataview-header | Class name of the header element |
| p-dataview-content | Class name of the content element |
| p-dataview-footer | Class name of the footer element |
| p-dataview-empty | Class name of the empty element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| dataview.border.color | --p-dataview-border-color | Border color of root |
| dataview.border.width | --p-dataview-border-width | Border width of root |
| dataview.border.radius | --p-dataview-border-radius | Border radius of root |
| dataview.padding | --p-dataview-padding | Padding of root |
| dataview.header.background | --p-dataview-header-background | Background of header |
| dataview.header.color | --p-dataview-header-color | Color of header |
| dataview.header.border.color | --p-dataview-header-border-color | Border color of header |
| dataview.header.border.width | --p-dataview-header-border-width | Border width of header |
| dataview.header.padding | --p-dataview-header-padding | Padding of header |
| dataview.header.border.radius | --p-dataview-header-border-radius | Border radius of header |
| dataview.content.background | --p-dataview-content-background | Background of content |
| dataview.content.color | --p-dataview-content-color | Color of content |
| dataview.content.border.color | --p-dataview-content-border-color | Border color of content |
| dataview.content.border.width | --p-dataview-content-border-width | Border width of content |
| dataview.content.padding | --p-dataview-content-padding | Padding of content |
| dataview.content.border.radius | --p-dataview-content-border-radius | Border radius of content |
| dataview.footer.background | --p-dataview-footer-background | Background of footer |
| dataview.footer.color | --p-dataview-footer-color | Color of footer |
| dataview.footer.border.color | --p-dataview-footer-border-color | Border color of footer |
| dataview.footer.border.width | --p-dataview-footer-border-width | Border width of footer |
| dataview.footer.padding | --p-dataview-footer-padding | Padding of footer |
| dataview.footer.border.radius | --p-dataview-footer-border-radius | Border radius of footer |
| dataview.paginator.top.border.color | --p-dataview-paginator-top-border-color | Border color of paginator top |
| dataview.paginator.top.border.width | --p-dataview-paginator-top-border-width | Border width of paginator top |
| dataview.paginator.bottom.border.color | --p-dataview-paginator-bottom-border-color | Border color of paginator bottom |
| dataview.paginator.bottom.border.width | --p-dataview-paginator-bottom-border-width | Border width of paginator bottom |
