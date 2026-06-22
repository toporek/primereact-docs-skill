# Paginator

Paginator displays data in paged format and provides navigation between pages.

```tsx
'use client';
import {
    Paginator,
    PaginatorEllipsis,
    PaginatorFirst,
    PaginatorLast,
    PaginatorNext,
    PaginatorPage,
    PaginatorPages,
    PaginatorPrev
} from '@/components/ui/paginator';
import type { PaginatorPagesInstance } from 'primereact/paginator';

export default function Preview() {
    return (
        <div className="flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5}>
                <PaginatorFirst />
                <PaginatorPrev />
                <PaginatorPages>
                    {({ paginator }: PaginatorPagesInstance) =>
                        paginator?.pages.map((page, index) =>
                            page.type === 'page' ? <PaginatorPage key={index} value={page.value} /> : <PaginatorEllipsis key={index} />
                        )
                    }
                </PaginatorPages>
                <PaginatorNext />
                <PaginatorLast />
            </Paginator>
        </div>
    );
}
```

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/ui/paginator
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

```tsx
import { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPages, PaginatorPrev } from '@/components/ui/paginator';

function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5}>
                <PaginatorFirst />
                <PaginatorPrev />
                <PaginatorPages />
                <PaginatorNext />
                <PaginatorLast />
            </Paginator>
        </div>
    );
}

export default BasicDemo;
```

### Siblings

Use `siblings` prop to define the number of siblings to display. Siblings is the number of pages to display before and after the current page.

```tsx
import { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPages, PaginatorPrev } from '@/components/ui/paginator';

function SiblingsDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5} page={6} siblings={2}>
                <PaginatorFirst />
                <PaginatorPrev />
                <PaginatorPages />
                <PaginatorNext />
                <PaginatorLast />
            </Paginator>
        </div>
    );
}

export default SiblingsDemo;
```

### Edges

Use `edges` prop to define the number of edges to display. Edges is the number of pages to display first and last of the paginator.

```tsx
import { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPages, PaginatorPrev } from '@/components/ui/paginator';

function EdgesDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5} page={6} edges={2}>
                <PaginatorFirst />
                <PaginatorPrev />
                <PaginatorPages />
                <PaginatorNext />
                <PaginatorLast />
            </Paginator>
        </div>
    );
}

export default EdgesDemo;
```

### Show Ellipsis

Use `showEllipsis` prop to define whether to show ellipsis. If `showEllipsis` is `false`, `edges` prop is ignored.

```tsx
import { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPages, PaginatorPrev } from '@/components/ui/paginator';

function ShowEllipsisDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5} showEllipsis={false} siblings={3}>
                <PaginatorFirst />
                <PaginatorPrev />
                <PaginatorPages />
                <PaginatorNext />
                <PaginatorLast />
            </Paginator>
        </div>
    );
}

export default ShowEllipsisDemo;
```

### Template

Here are the available elements that can be placed inside a paginator in any order.

```tsx
'use client';
import { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPrev } from '@/components/ui/paginator';
import type { PaginatorRootChangeEvent } from 'primereact/paginator';
import React from 'react';

function TemplateDemo() {
    const [page, setPage] = React.useState(1);

    return (
        <div className="flex flex-col gap-6 items-center justify-center">
            <Paginator total={12} itemsPerPage={1} page={1} onPageChange={(e: PaginatorRootChangeEvent) => setPage(e.value)}>
                <PaginatorFirst />
                <PaginatorPrev />
                <div className="text-surface-500">({page} of 12)</div>
                <PaginatorNext />
                <PaginatorLast />
            </Paginator>

            <div className="p-4 text-center">
                <img
                    src={`https://primefaces.org/cdn/primevue/images/nature/nature${page}.jpg`}
                    alt={page.toString()}
                    className="rounded-lg w-full sm:w-[30rem]"
                />
            </div>
        </div>
    );
}

export default TemplateDemo;
```

### Custom Text

Use `onPageChange` event to define the custom text to display.

```tsx
'use client';
import { Paginator, PaginatorNext, PaginatorPrev } from '@/components/ui/paginator';
import type { PaginatorRootChangeEvent } from 'primereact/paginator';
import React from 'react';

function CustomTextDemo() {
    const [page, setPage] = React.useState(1);

    const total = 100;
    const itemsPerPage = 5;

    return (
        <div className="flex items-center justify-end">
            <Paginator total={total} itemsPerPage={itemsPerPage} page={page} onPageChange={(e: PaginatorRootChangeEvent) => setPage(e.value)}>
                Showing {itemsPerPage * (page - 1) + 1} – {Math.min(total, itemsPerPage * page)} of {total}
                <PaginatorPrev />
                <PaginatorNext />
            </Paginator>
        </div>
    );
}

export default CustomTextDemo;
```

### With Input

```tsx
'use client';
import { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPrev } from '@/components/ui/paginator';
import { InputText } from '@/components/ui/inputtext';
import type { PaginatorRootChangeEvent } from 'primereact/paginator';
import React from 'react';

function WithInputDemo() {
    const [page, setPage] = React.useState(1);

    const total = 100;
    const itemsPerPage = 5;
    const maxPage = Math.ceil(total / itemsPerPage);

    return (
        <div className="flex items-center justify-center">
            <Paginator
                total={total}
                itemsPerPage={itemsPerPage}
                page={page}
                onPageChange={(e: PaginatorRootChangeEvent) => {
                    setPage(e.value);
                }}
            >
                <PaginatorFirst />
                <PaginatorPrev />
                <div className="flex items-center gap-2">
                    <InputText
                        className="max-w-14 px-2 py-1"
                        type="number"
                        value={page}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPage(Number(e.target.value))}
                    />
                    <span>of {maxPage}</span>
                </div>
                <PaginatorNext />
                <PaginatorLast />
            </Paginator>
        </div>
    );
}

export default WithInputDemo;
```
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
