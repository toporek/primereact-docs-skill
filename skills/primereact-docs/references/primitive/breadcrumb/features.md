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

**Pass Through example:**

```tsx
import { Bolt } from '@primeicons/react/bolt';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { EllipsisH } from '@primeicons/react/ellipsis-h';
import { Home } from '@primeicons/react/home';
import { Breadcrumb } from '@primereact/ui/breadcrumb';

export default function BreadcrumbPTDemo() {
    return (
        <div className="flex justify-center">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="/">
                            <Home />
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>
                        <ChevronRight />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Separator>
                        <EllipsisH />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Separator>
                        <ChevronRight />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Products</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>
                        <ChevronRight />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">
                            <Bolt /> Electronics
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>
                        <ChevronRight />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Laptops</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>
                        <ChevronRight />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Current>Dell</Breadcrumb.Current>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>
    );
}
```

## API

### BreadcrumbRoot

> **API/props table for `BreadcrumbRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"root"`       |

> **API/props table for `BreadcrumbRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### BreadcrumbList

> **API/props table for `BreadcrumbList` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"list"`       |

> **API/props table for `BreadcrumbList` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### BreadcrumbItem

> **API/props table for `BreadcrumbItem` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"item"`       |

> **API/props table for `BreadcrumbItem` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### BreadcrumbLink

> **API/props table for `BreadcrumbLink` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"link"`       |

> **API/props table for `BreadcrumbLink` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### BreadcrumbCurrent

> **API/props table for `BreadcrumbCurrent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"current"`    |

> **API/props table for `BreadcrumbCurrent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### BreadcrumbSeparator

> **API/props table for `BreadcrumbSeparator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"separator"`  |

> **API/props table for `BreadcrumbSeparator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### BreadcrumbEllipsis

> **API/props table for `BreadcrumbEllipsis` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"breadcrumb"` |
| `data-part`  | `"ellipsis"`   |

> **API/props table for `BreadcrumbEllipsis` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

The root element uses `nav` with `aria-label="Breadcrumb"` to identify the navigation landmark. The list uses semantic `ol` > `li` structure. Separators have `role="presentation"` and `aria-hidden="true"` to be skipped by screen readers. The current page is marked with `aria-current="page"`.

### Keyboard Support

| Key   | Function                                  |
| ----- | ----------------------------------------- |
| `tab` | Moves focus through the breadcrumb links. |
