# Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/breadcrumb.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
```

```tsx
<Breadcrumb>
    <BreadcrumbList>
        <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
            <BreadcrumbCurrent>Current Page</BreadcrumbCurrent>
        </BreadcrumbItem>
    </BreadcrumbList>
</Breadcrumb>
```

## Examples

### Basic

### Route

A breadcrumb can be used with routing libraries to navigate between pages.

### Controlled

A breadcrumb can be controlled by managing the current page state.

### Custom Separator

A breadcrumb allows customization of the separator between items.

### Ellipsis

### Custom Item

A breadcrumb allows customization of the items.
