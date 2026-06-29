# Paginator

Paginator displays data in paged format and provides navigation between pages.

```tsx
'use client';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { PaginatorPagesInstance } from '@primereact/ui/paginator';
import { Paginator } from '@primereact/ui/paginator';

function Preview() {
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

export default Preview;

```

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

```tsx
'use client';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { PaginatorPagesInstance } from '@primereact/ui/paginator';
import { Paginator } from '@primereact/ui/paginator';

function BasicDemo() {
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

export default BasicDemo;

```

### Siblings

Use `siblings` prop to define the number of siblings to display. Siblings is the number of pages to display before and after the current page.

```tsx
'use client';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { PaginatorPagesInstance } from '@primereact/ui/paginator';
import { Paginator } from '@primereact/ui/paginator';

function SiblingsDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator.Root total={100} itemsPerPage={5} page={6} siblings={2}>
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

export default SiblingsDemo;

```

### Edges

Use `edges` prop to define the number of edges to display. Edges is the number of pages to display first and last of the paginator.

```tsx
'use client';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { PaginatorPagesInstance } from '@primereact/ui/paginator';
import { Paginator } from '@primereact/ui/paginator';

function EdgesDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator.Root total={100} itemsPerPage={5} page={6} edges={2}>
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

export default EdgesDemo;

```

### Show Ellipsis

Use `showEllipsis` prop to define whether to show ellipsis. If `showEllipsis` is `false`, `edges` prop is ignored.

```tsx
'use client';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { PaginatorPagesInstance } from '@primereact/ui/paginator';
import { Paginator } from '@primereact/ui/paginator';

function ShowEllipsisDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator.Root total={100} itemsPerPage={5} showEllipsis={false} siblings={3}>
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
                                page.type === 'page' ? <Paginator.Page key={index} value={page.value} /> : <Paginator.Ellipsis key={index} />
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

export default ShowEllipsisDemo;

```

### Template

Here are the available elements that can be placed inside a paginator in any order.

```tsx
'use client';
import { Paginator, type PaginatorRootChangeEvent } from '@primereact/ui/paginator';
import React from 'react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';

function TemplateDemo() {
    const [page, setPage] = React.useState(1);

    return (
        <div className="flex flex-col gap-6 items-center justify-center">
            <Paginator.Root total={12} itemsPerPage={1} page={1} onPageChange={(e: PaginatorRootChangeEvent) => setPage(e.value)}>
                <Paginator.Content>
                    <Paginator.First>
                        <AngleDoubleLeft />
                    </Paginator.First>
                    <Paginator.Prev>
                        <AngleLeft />
                    </Paginator.Prev>
                    <div className="text-surface-500">({page} of 12)</div>
                    <Paginator.Next>
                        <AngleRight />
                    </Paginator.Next>
                    <Paginator.Last>
                        <AngleDoubleRight />
                    </Paginator.Last>
                </Paginator.Content>
            </Paginator.Root>

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
import { Paginator, type PaginatorRootChangeEvent } from '@primereact/ui/paginator';
import React from 'react';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';

function CustomTextDemo() {
    const [page, setPage] = React.useState(1);

    const total = 100;
    const itemsPerPage = 5;

    return (
        <div className="flex items-center justify-end">
            <Paginator.Root total={total} itemsPerPage={itemsPerPage} page={page} onPageChange={(e: PaginatorRootChangeEvent) => setPage(e.value)}>
                <Paginator.Content>
                    Showing {itemsPerPage * (page - 1) + 1} – {Math.min(total, itemsPerPage * page)} of {total}
                    <Paginator.Prev>
                        <AngleLeft />
                    </Paginator.Prev>
                    <Paginator.Next>
                        <AngleRight />
                    </Paginator.Next>
                </Paginator.Content>
            </Paginator.Root>
        </div>
    );
}

export default CustomTextDemo;

```

### Customization

Pass an icon as a child to the element to override the default icon or use className to customize the element.

```tsx
'use client';
import { EllipsisH } from '@primeicons/react';
import { ArrowLeft } from '@primeicons/react/arrow-left';
import { ArrowRight } from '@primeicons/react/arrow-right';
import { Paginator } from '@primereact/ui/paginator';
import { PaginatorPagesInstance } from '@primereact/ui/paginator';

function CustomizationDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator.Root total={100} itemsPerPage={5}>
                <Paginator.Content>
                    <Paginator.First className="min-w-auto! px-3! py-2! rounded-md!">First</Paginator.First>
                    <Paginator.Prev className="rounded-md! border! border-surface!">
                        <ArrowLeft className="text-sm" />
                    </Paginator.Prev>
                    <Paginator.Pages>
                        {({ paginator }: PaginatorPagesInstance) =>
                            paginator?.pages.map((page, index) =>
                                page.type === 'page' ? (
                                    <Paginator.Page
                                        key={index}
                                        value={page.value}
                                        className="rounded-md! border! border-surface! data-active:border-primary-500/25!"
                                    />
                                ) : (
                                    <Paginator.Ellipsis key={index}>
                                        <EllipsisH />
                                    </Paginator.Ellipsis>
                                )
                            )
                        }
                    </Paginator.Pages>
                    <Paginator.Next className="rounded-md! border! border-surface!">
                        <ArrowRight className="text-sm" />
                    </Paginator.Next>
                    <Paginator.Last className="min-w-auto! px-3! py-2! rounded-md!">Last</Paginator.Last>
                </Paginator.Content>
            </Paginator.Root>
        </div>
    );
}

export default CustomizationDemo;

```

### With Input

```tsx
'use client';
import { InputText } from '@primereact/ui/inputtext';
import { Paginator, type PaginatorRootChangeEvent } from '@primereact/ui/paginator';
import React from 'react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';

function WithInputDemo() {
    const [page, setPage] = React.useState(1);

    const total = 100;
    const itemsPerPage = 5;
    const maxPage = Math.ceil(total / itemsPerPage);

    return (
        <div className="flex items-center justify-center">
            <Paginator.Root
                total={total}
                itemsPerPage={itemsPerPage}
                page={page}
                onPageChange={(e: PaginatorRootChangeEvent) => {
                    setPage(e.value);
                }}
            >
                <Paginator.Content>
                    <Paginator.First>
                        <AngleDoubleLeft />
                    </Paginator.First>
                    <Paginator.Prev>
                        <AngleLeft />
                    </Paginator.Prev>
                    <div className="flex items-center gap-2">
                        <InputText
                            size="small"
                            min={1}
                            max={maxPage}
                            value={page}
                            className="max-w-12"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPage(Number(e.target.value))}
                        />
                        <span className="flex-1 whitespace-nowrap text-sm">of {maxPage}</span>
                    </div>
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

export default WithInputDemo;

```

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
