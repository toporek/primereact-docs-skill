# Paginator

Paginator displays data in paged format and provides navigation between pages.

## Usage

```tsx
import { Paginator } from '@primereact/ui/paginator';
```

```tsx
<Paginator.Root>
    <Paginator.Content>
        <Paginator.First />
        <Paginator.Prev />
        <Paginator.Pages />
        <Paginator.Next />
        <Paginator.Last />
    </Paginator.Content>
</Paginator.Root>
```

## Examples

### Basic

Use `total` prop to define the total number of items and `itemsPerPage` to define the number of items per page.

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

### Customization

Pass an icon as a child to the element to override the default icon or use className to customize the element.

### With Input

## Related

### Sub-Components

See [Primitive API](../../primitive/components/paginator.md#api) for sub-component props, state, exposes, and data attributes.

### Hooks

See [Headless API](../../headless/components/paginator.md#api) for the `usePaginator` hook interface.

### Accessibility

See [Paginator Primitive](../../primitive/components/paginator.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-paginator | Class name of the paginator element |
| p-paginator-content-start | Class name of the content start element |
| p-paginator-content-end | Class name of the content end element |
| p-paginator-first | Class name of the first element |
| p-paginator-first-icon | Class name of the first icon element |
| p-paginator-prev | Class name of the prev element |
| p-paginator-prev-icon | Class name of the prev icon element |
| p-paginator-next | Class name of the next element |
| p-paginator-next-icon | Class name of the next icon element |
| p-paginator-last | Class name of the last element |
| p-paginator-last-icon | Class name of the last icon element |
| p-paginator-pages | Class name of the pages element |
| p-paginator-page | Class name of the page element |
| p-paginator-current | Class name of the current element |
| p-paginator-rpp-dropdown | Class name of the row per page dropdown element |
| p-paginator-jtp-dropdown | Class name of the jump to page dropdown element |
| p-paginator-jtp-input | Class name of the jump to page input element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| paginator.padding | --p-paginator-padding | Padding of root |
| paginator.gap | --p-paginator-gap | Gap of root |
| paginator.border.radius | --p-paginator-border-radius | Border radius of root |
| paginator.background | --p-paginator-background | Background of root |
| paginator.color | --p-paginator-color | Color of root |
| paginator.transition.duration | --p-paginator-transition-duration | Transition duration of root |
| paginator.nav.button.background | --p-paginator-nav-button-background | Background of nav button |
| paginator.nav.button.hover.background | --p-paginator-nav-button-hover-background | Hover background of nav button |
| paginator.nav.button.selected.background | --p-paginator-nav-button-selected-background | Selected background of nav button |
| paginator.nav.button.color | --p-paginator-nav-button-color | Color of nav button |
| paginator.nav.button.hover.color | --p-paginator-nav-button-hover-color | Hover color of nav button |
| paginator.nav.button.selected.color | --p-paginator-nav-button-selected-color | Selected color of nav button |
| paginator.nav.button.width | --p-paginator-nav-button-width | Width of nav button |
| paginator.nav.button.height | --p-paginator-nav-button-height | Height of nav button |
| paginator.nav.button.border.radius | --p-paginator-nav-button-border-radius | Border radius of nav button |
| paginator.nav.button.font.weight | --p-paginator-nav-button-font-weight | Font weight of nav button |
| paginator.nav.button.font.size | --p-paginator-nav-button-font-size | Font size of nav button |
| paginator.nav.button.focus.ring.width | --p-paginator-nav-button-focus-ring-width | Focus ring width of nav button |
| paginator.nav.button.focus.ring.style | --p-paginator-nav-button-focus-ring-style | Focus ring style of nav button |
| paginator.nav.button.focus.ring.color | --p-paginator-nav-button-focus-ring-color | Focus ring color of nav button |
| paginator.nav.button.focus.ring.offset | --p-paginator-nav-button-focus-ring-offset | Focus ring offset of nav button |
| paginator.nav.button.focus.ring.shadow | --p-paginator-nav-button-focus-ring-shadow | Focus ring shadow of nav button |
| paginator.current.page.report.color | --p-paginator-current-page-report-color | Color of current page report |
| paginator.current.page.report.font.weight | --p-paginator-current-page-report-font-weight | Font weight of current page report |
| paginator.current.page.report.font.size | --p-paginator-current-page-report-font-size | Font size of current page report |
| paginator.jump.to.page.input.max.width | --p-paginator-jump-to-page-input-max-width | Max width of jump to page input |
