# Breadcrumb

An unstyled breadcrumb component for building navigational hierarchies with full control over layout and styling.

Build fully custom breadcrumb navigation with complete control over layout and styling.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Home } from '@primeicons/react/home';
import { Breadcrumb } from 'primereact/breadcrumb';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Breadcrumb.Root className={styles.root}>
                <Breadcrumb.List className={styles.list}>
                    <Breadcrumb.Item className={styles.item}>
                        <Breadcrumb.Link href="/" className={styles.link}>
                            <Home className={styles.icon} />
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator className={styles.separator}>
                        <ChevronRight className={styles.separatorIcon} />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item className={styles.item}>
                        <Breadcrumb.Link href="#" className={styles.link}>
                            Products
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator className={styles.separator}>
                        <ChevronRight className={styles.separatorIcon} />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item className={styles.item}>
                        <Breadcrumb.Link href="#" className={styles.link}>
                            Electronics
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator className={styles.separator}>
                        <ChevronRight className={styles.separatorIcon} />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item className={styles.item}>
                        <Breadcrumb.Current className={styles.current}>Laptops</Breadcrumb.Current>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `List`, `Item`, `Link`, `Current`, `Separator`, `Ellipsis`
- Semantic HTML structure with `nav` > `ol` > `li` hierarchy
- Current page indicator with `aria-current="page"`
- Presentational separators hidden from the accessibility tree

## Usage

```tsx
import { Breadcrumb } from 'primereact/breadcrumb';
```

```tsx
<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link></Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator></Breadcrumb.Separator>
        <Breadcrumb.Item>
            <Breadcrumb.Current></Breadcrumb.Current>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Breadcrumb.Root as="div"></Breadcrumb.Root>
<Breadcrumb.Link as="button"></Breadcrumb.Link>
```

Default elements: `Root`=`nav`, `List`=`ol`, `Item`=`li`, `Link`=`a`, `Current`=`span`, `Separator`=`li`, `Ellipsis`=`span`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<Breadcrumb.Root>{(instance) => <ol>{/* custom breadcrumb items */}</ol>}</Breadcrumb.Root>
```

## Pass Through

## API

### BreadcrumbRoot

> **`BreadcrumbRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/breadcrumb or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"root"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | BreadcrumbRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| list | BreadcrumbRootPassThroughType> | Used to pass attributes to the list's DOM element. |
| item | BreadcrumbRootPassThroughType> | Used to pass attributes to the item's DOM element. |
| separator | BreadcrumbRootPassThroughType> | Used to pass attributes to the separator's DOM element. |
| link | BreadcrumbRootPassThroughType> | Used to pass attributes to the link's DOM element. |
| current | BreadcrumbRootPassThroughType> | Used to pass attributes to the current's DOM element. |
| ellipsis | BreadcrumbRootPassThroughType> | Used to pass attributes to the ellipsis's DOM element. |

### BreadcrumbList

> **`BreadcrumbList` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/breadcrumb or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"list"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | BreadcrumbListPassThroughType> | Used to pass attributes to the root's DOM element. |

### BreadcrumbItem

> **`BreadcrumbItem` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/breadcrumb or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"item"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | BreadcrumbItemPassThroughType> | Used to pass attributes to the root's DOM element. |

### BreadcrumbLink

> **`BreadcrumbLink` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/breadcrumb or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"link"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | BreadcrumbLinkPassThroughType> | Used to pass attributes to the root's DOM element. |

### BreadcrumbCurrent

> **`BreadcrumbCurrent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/breadcrumb or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"current"`    |

| Label | Type | Description |
|:------|:------|:------|
| root | BreadcrumbCurrentPassThroughType> | Used to pass attributes to the root's DOM element. |

### BreadcrumbSeparator

> **`BreadcrumbSeparator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/breadcrumb or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"separator"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | BreadcrumbSeparatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### BreadcrumbEllipsis

> **`BreadcrumbEllipsis` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/breadcrumb or the installed `@primereact/types`.

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"ellipsis"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | BreadcrumbEllipsisPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

The root element uses `nav` with `aria-label="Breadcrumb"` to identify the navigation landmark. The list uses semantic `ol` > `li` structure. Separators have `role="presentation"` and `aria-hidden="true"` to be skipped by screen readers. The current page is marked with `aria-current="page"`.

### Keyboard Support

| Key   | Function                                  |
| ----- | ----------------------------------------- |
| `tab` | Moves focus through the breadcrumb links. |
