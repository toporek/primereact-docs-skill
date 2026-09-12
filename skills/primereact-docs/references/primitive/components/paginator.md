# Paginator

An unstyled, accessible paginator component with compound composition.

Build fully custom paginators with complete control over layout, page rendering, and navigation styling.

## Features

- Compound component API with nine sub-components: `Root`, `Content`, `First`, `Prev`, `Pages`, `Page`, `Ellipsis`, `Next`, `Last`
- Smart page range calculation with configurable siblings and edges
- Automatic ellipsis insertion between page ranges
- Render function children on `Pages` for full control over page item rendering

## Usage

```tsx
import { Paginator } from 'primereact/paginator';
```

```tsx
<Paginator.Root>
    <Paginator.Content>
        <Paginator.First></Paginator.First>
        <Paginator.Prev></Paginator.Prev>
        <Paginator.Pages></Paginator.Pages>
        <Paginator.Next></Paginator.Next>
        <Paginator.Last></Paginator.Last>
    </Paginator.Content>
</Paginator.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Paginator.Root as="div">
    <Paginator.Content as="section">
        <Paginator.First as="a" />
        <Paginator.Prev as="a" />
        <Paginator.Pages />
        <Paginator.Next as="a" />
        <Paginator.Last as="a" />
    </Paginator.Content>
</Paginator.Root>
```

Default elements: `Root`=`nav`, `Content`=`div`, `First`=`button`, `Prev`=`button`, `Pages`=`span`, `Page`=`button`, `Ellipsis`=`span`, `Next`=`button`, `Last`=`button`.

### Render Function Children

`Pages` accepts a render function as children, providing access to the component instance. The instance exposes `paginator` (root instance with `pages` array and `state`).

```tsx
<Paginator.Pages>{(instance) => instance.paginator?.pages.map((page, i) => (page.type === 'page' ? <Paginator.Page key={i} value={page.value} /> : <Paginator.Ellipsis key={i}>...</Paginator.Ellipsis>))}</Paginator.Pages>
```

## Pass Through

## API

### PaginatorRoot

> **`PaginatorRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"paginator"` |
| `data-part`  | `"root"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| content | PaginatorRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| first | PaginatorRootPassThroughType> | Used to pass attributes to the first's DOM element. |
| prev | PaginatorRootPassThroughType> | Used to pass attributes to the prev's DOM element. |
| next | PaginatorRootPassThroughType> | Used to pass attributes to the next's DOM element. |
| last | PaginatorRootPassThroughType> | Used to pass attributes to the last's DOM element. |

### PaginatorContent

> **`PaginatorContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### PaginatorFirst

> **`PaginatorFirst` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"paginator"`         |
| `data-part`     | `"first"`             |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorFirstPassThroughType> | Used to pass attributes to the root's DOM element. |

### PaginatorPrev

> **`PaginatorPrev` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"paginator"`         |
| `data-part`     | `"prev"`              |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorPrevPassThroughType> | Used to pass attributes to the root's DOM element. |

### PaginatorNext

> **`PaginatorNext` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"paginator"`         |
| `data-part`     | `"next"`              |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorNextPassThroughType> | Used to pass attributes to the root's DOM element. |

### PaginatorLast

> **`PaginatorLast` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"paginator"`         |
| `data-part`     | `"last"`              |
| `data-disabled` | Present when disabled |

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorLastPassThroughType> | Used to pass attributes to the root's DOM element. |

### PaginatorPages

> **`PaginatorPages` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"paginator"` |
| `data-part`  | `"pages"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorPagesPassThroughType> | Used to pass attributes to the root's DOM element. |

### PaginatorPage

> **`PaginatorPage` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Attribute       | Value                       |
| --------------- | --------------------------- |
| `data-scope`    | `"paginator"`               |
| `data-part`     | `"page"`                    |
| `data-active`   | Present on the current page |
| `data-disabled` | Present when disabled       |

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorPagePassThroughType> | Used to pass attributes to the root's DOM element. |

### PaginatorEllipsis

> **`PaginatorEllipsis` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/paginator or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | PaginatorEllipsisPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Paginator is placed inside a `nav` element to indicate a navigation section. First, previous, next, and last page navigator buttons include `aria-label` attributes derived from the `aria.firstPageLabel`, `aria.prevPageLabel`, `aria.nextPageLabel`, and `aria.lastPageLabel` locale properties respectively.

Page links are button elements with an `aria-label` derived from the `aria.pageLabel` locale property. The current page is marked with `aria-current="page"`.

### Keyboard Support

| Key     | Function                                    |
| ------- | ------------------------------------------- |
| `tab`   | Moves focus through the paginator elements. |
| `enter` | Executes the paginator element action.      |
| `space` | Executes the paginator element action.      |
