# Paginator

An unstyled, accessible paginator component with compound composition.

Build fully custom paginators with complete control over layout, page rendering, and navigation styling.

```tsx
'use client';

import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { EllipsisH } from '@primeicons/react/ellipsis-h';
import { Paginator, PaginatorPagesInstance } from 'primereact/paginator';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <Paginator.Root className={styles.root} total={100} itemsPerPage={5}>
            <Paginator.Content className={styles.content}>
                <Paginator.First className={styles.navButton}>
                    <AngleDoubleLeft />
                </Paginator.First>
                <Paginator.Prev className={styles.navButton}>
                    <AngleLeft />
                </Paginator.Prev>
                <Paginator.Pages className={styles.pages}>
                    {({ paginator }: PaginatorPagesInstance) =>
                        paginator?.pages.map((page, index) =>
                            page.type === 'page' ? (
                                <Paginator.Page key={index} className={styles.page} value={page.value} />
                            ) : (
                                <Paginator.Ellipsis key={index} className={styles.ellipsis}>
                                    <EllipsisH />
                                </Paginator.Ellipsis>
                            )
                        )
                    }
                </Paginator.Pages>
                <Paginator.Next className={styles.navButton}>
                    <AngleRight />
                </Paginator.Next>
                <Paginator.Last className={styles.navButton}>
                    <AngleDoubleRight />
                </Paginator.Last>
            </Paginator.Content>
        </Paginator.Root>
    );
}
```

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

**Pass Through example:**

```tsx
'use client';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { PaginatorPagesInstance } from 'primereact/paginator';
import { Paginator } from '@primereact/ui/paginator';

export default function PaginatorPTDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator.Root total={100} itemsPerPage={5}>
                <Paginator.Content>
                    <Paginator.First>
                        <AngleDoubleLeft />
                    </Paginator.First>
                    <Paginator.Prev>
                        <AngleLeft />
                    </Paginator.Prev>
                    <Paginator.Pages>
                        {({ paginator }: PaginatorPagesInstance) =>
                            paginator?.pages.map((page, index) =>
                                page.type === 'page' ? (
                                    <Paginator.Page key={index} value={page.value} />
                                ) : (
                                    <Paginator.Ellipsis key={index}>
                                        <EllipsisH />
                                    </Paginator.Ellipsis>
                                )
                            )
                        }
                    </Paginator.Pages>
                    <Paginator.Next>
                        <AngleRight />
                    </Paginator.Next>
                    <Paginator.Last>
                        <AngleDoubleRight />
                    </Paginator.Last>
                </Paginator.Content>
            </Paginator.Root>
        </div>
    );
}
```

## API

### PaginatorRoot

> **API/props table for `PaginatorRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"paginator"` |
| `data-part`  | `"root"`      |

> **API/props table for `PaginatorRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PaginatorContent

> **API/props table for `PaginatorContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PaginatorContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PaginatorFirst

> **API/props table for `PaginatorFirst` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"paginator"`         |
| `data-part`     | `"first"`             |
| `data-disabled` | Present when disabled |

> **API/props table for `PaginatorFirst` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PaginatorPrev

> **API/props table for `PaginatorPrev` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"paginator"`         |
| `data-part`     | `"prev"`              |
| `data-disabled` | Present when disabled |

> **API/props table for `PaginatorPrev` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PaginatorNext

> **API/props table for `PaginatorNext` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"paginator"`         |
| `data-part`     | `"next"`              |
| `data-disabled` | Present when disabled |

> **API/props table for `PaginatorNext` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PaginatorLast

> **API/props table for `PaginatorLast` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"paginator"`         |
| `data-part`     | `"last"`              |
| `data-disabled` | Present when disabled |

> **API/props table for `PaginatorLast` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PaginatorPages

> **API/props table for `PaginatorPages` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"paginator"` |
| `data-part`  | `"pages"`     |

> **API/props table for `PaginatorPages` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PaginatorPage

> **API/props table for `PaginatorPage` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                       |
| --------------- | --------------------------- |
| `data-scope`    | `"paginator"`               |
| `data-part`     | `"page"`                    |
| `data-active`   | Present on the current page |
| `data-disabled` | Present when disabled       |

> **API/props table for `PaginatorPage` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### PaginatorEllipsis

> **API/props table for `PaginatorEllipsis` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `PaginatorEllipsis` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
