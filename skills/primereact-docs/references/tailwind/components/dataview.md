# DataView

DataView displays data in grid or list layout with pagination and sorting features.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/dataview.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { DataView, DataViewContent, DataViewHeader, DataViewFooter, DataViewEmpty } from '@/components/ui/dataview';
```

```tsx
<DataView>
    <DataViewHeader></DataViewHeader>
    <DataViewContent></DataViewContent>
    <DataViewFooter></DataViewFooter>
</DataView>
```

## Examples

### Basic

Displays a list of items with support for layout switching.

### Pagination

Use `Paginator` with `DataViewFooter` to navigate large datasets efficiently.

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
