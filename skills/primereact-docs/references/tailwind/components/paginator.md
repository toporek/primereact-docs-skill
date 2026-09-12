# Paginator

Paginator displays data in paged format and provides navigation between pages.

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/paginator.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Paginator, PaginatorEllipsis, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPage, PaginatorPages, PaginatorPrev } from '@/components/ui/paginator';
```

```tsx
<Paginator total={100} itemsPerPage={10}>
    <PaginatorFirst />
    <PaginatorPrev />
    <PaginatorPages />
    <PaginatorNext />
    <PaginatorLast />
</Paginator>
```

## Examples

### Basic

### Siblings

Use `siblings` prop to define the number of siblings to display. Siblings is the number of pages to display before and after the current page.

### Edges

Use `edges` prop to define the number of edges to display. Edges is the number of pages to display first and last of the paginator.

### Show Ellipsis

Use `showEllipsis` prop to define whether to show ellipsis. If `showEllipsis` is `false`, `edges` prop is ignored.

### Template

Here are the available elements that can be placed inside a paginator in any order.

### Custom Text

Use `onPageChange` event to define the custom text to display.

### With Input

## Accessibility

### Screen Reader

Paginator is placed inside a nav element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below.

First, previous, next and last page navigators elements with `aria-label` attributes referring to the `aria.firstPageLabel`, `aria.prevPageLabel`, `aria.nextPageLabel` and `aria.lastPageLabel` properties of the locale API respectively.

Page links are also button elements with an `aria-label` attribute derived from the `aria.pageLabel` of the locale API. Current page is marked with `aria-current` set to "page" as well.

### Keyboard Support

| Key     | Function                                    |
| ------- | ------------------------------------------- |
| `tab`   | Moves focus through the paginator elements. |
| `enter` | Executes the paginator element action.      |
| `space` | Executes the paginator element action.      |
