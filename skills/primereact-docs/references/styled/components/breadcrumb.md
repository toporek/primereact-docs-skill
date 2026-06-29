# Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

```tsx
import { Bolt } from '@primeicons/react/bolt';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { EllipsisH } from '@primeicons/react/ellipsis-h';
import { Home } from '@primeicons/react/home';
import { Breadcrumb } from '@primereact/ui/breadcrumb';

export default function Preview() {
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

## Usage

```tsx
import { Breadcrumb } from '@primereact/ui/breadcrumb';
```

```tsx
<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item />
        <Breadcrumb.Separator />
    </Breadcrumb.List>
</Breadcrumb.Root>
```

## Examples

### Basic

Shows the current location within a navigational hierarchy.

```tsx
import { Bolt } from '@primeicons/react/bolt';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { EllipsisH } from '@primeicons/react/ellipsis-h';
import { Home } from '@primeicons/react/home';
import { Breadcrumb } from '@primereact/ui/breadcrumb';

export default function BasicDemo() {
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

### Route

A breadcrumb can be used with routing libraries to navigate between pages.

```tsx
'use client';
import { ChevronRight, Home } from '@primeicons/react';
import { Breadcrumb } from '@primereact/ui/breadcrumb';
import * as React from 'react';

const allPages = [
    { label: 'Home', icon: true },
    { label: 'Components' },
    { label: 'Form' },
    { label: 'Input' },
    { label: 'InputText' },
    { label: 'Variants' },
    { label: 'Filled' },
    { label: 'Outlined' }
];

export default function RouteDemo() {
    const [pages, setPages] = React.useState(allPages);

    const handleClick = (index: number) => {
        setPages(pages.slice(0, index + 1));
    };

    return (
        <div className="flex justify-center">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    {pages.map((page, index) => (
                        <React.Fragment key={page.label}>
                            {index > 0 && (
                                <Breadcrumb.Separator>
                                    <ChevronRight />
                                </Breadcrumb.Separator>
                            )}
                            <Breadcrumb.Item>
                                {index === pages.length - 1 ? (
                                    <Breadcrumb.Current>{page.label}</Breadcrumb.Current>
                                ) : (
                                    <Breadcrumb.Link href="#route" onClick={() => handleClick(index)}>
                                        {page.icon && <Home />}
                                        {!page.icon && page.label}
                                    </Breadcrumb.Link>
                                )}
                            </Breadcrumb.Item>
                        </React.Fragment>
                    ))}
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>
    );
}

```

### Controlled

A breadcrumb can be controlled by managing the current page state.

```tsx
'use client';
import { ChevronRight } from '@primeicons/react';
import { Breadcrumb } from '@primereact/ui/breadcrumb';
import * as React from 'react';

export default function ControlledDemo() {
    const [currentPage, setCurrentPage] = React.useState('reports');

    const pages = [
        { key: 'home', label: 'Home' },
        { key: 'users', label: 'Users' },
        { key: 'documents', label: 'Documents' },
        { key: 'work', label: 'Work' },
        { key: 'reports', label: 'Reports' }
    ];

    return (
        <div className="flex justify-center">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    {pages.map((page, index) => (
                        <React.Fragment key={page.key}>
                            {index > 0 && (
                                <Breadcrumb.Separator>
                                    <ChevronRight />
                                </Breadcrumb.Separator>
                            )}
                            <Breadcrumb.Item>
                                {currentPage === page.key ? (
                                    <Breadcrumb.Current>{page.label}</Breadcrumb.Current>
                                ) : (
                                    <Breadcrumb.Link href="#controlled" onClick={() => setCurrentPage(page.key)}>
                                        {page.label}
                                    </Breadcrumb.Link>
                                )}
                            </Breadcrumb.Item>
                        </React.Fragment>
                    ))}
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>
    );
}

```

### Custom Separator

A breadcrumb allows customization of the separator between items.

```tsx
import { Bolt, Home } from '@primeicons/react';
import { Breadcrumb } from '@primereact/ui/breadcrumb';

export default function CustomSeparatorDemo() {
    return (
        <div className="flex justify-center">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="/">
                            <Home />
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Products</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">
                            <Bolt />
                            Electronics
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Laptops</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Current>Dell</Breadcrumb.Current>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>
    );
}

```

### Ellipsis

```tsx
import { Bolt, ChevronRight, EllipsisH, Home } from '@primeicons/react';
import { Breadcrumb } from '@primereact/ui/breadcrumb';

export default function EllipsisDemo() {
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
                    <Breadcrumb.Ellipsis>
                        <EllipsisH />
                    </Breadcrumb.Ellipsis>
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

### Custom Item

A breadcrumb allows customization of the items.

```tsx
'use client';
import { Bolt } from '@primeicons/react/bolt';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Desktop } from '@primeicons/react/desktop';
import { Home } from '@primeicons/react/home';
import { Badge } from '@primereact/ui/badge';
import { Breadcrumb } from '@primereact/ui/breadcrumb';
import { Menu } from '@primereact/ui/menu';
import * as React from 'react';

export default function CustomItemDemo() {
    const [selectedBrand, setSelectedBrand] = React.useState('Apple');

    const brands = ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus'];

    return (
        <div className="flex justify-center">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">
                            <Home />
                            Home
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
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
                            <Bolt />
                            Electronics
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>
                        <ChevronRight />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">
                            <Desktop />
                            Computers
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>
                        <ChevronRight />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">
                            Laptops
                            <Badge shape="circle">5</Badge>
                        </Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>
                        <ChevronRight />
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Menu.Root>
                            <Menu.Trigger as={Breadcrumb.Link}>
                                {selectedBrand}
                                <ChevronDown />
                            </Menu.Trigger>
                            <Menu.Portal>
                                <Menu.Positioner sideOffset={4}>
                                    <Menu.Popup className="w-32">
                                        <Menu.List>
                                            {brands.map((brand) => (
                                                <Menu.Item key={brand} onSelect={() => setSelectedBrand(brand)}>
                                                    {brand}
                                                </Menu.Item>
                                            ))}
                                        </Menu.List>
                                    </Menu.Popup>
                                </Menu.Positioner>
                            </Menu.Portal>
                        </Menu.Root>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [Breadcrumb Primitive](../../primitive/components/breadcrumb.md#api) for the full sub-component API.

### Hooks

See [useBreadcrumb](../../headless/components/breadcrumb.md#api) for the headless hook API.

### Accessibility

See [Breadcrumb Primitive](../../primitive/components/breadcrumb.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-breadcrumb | Class name of the root element |
| p-breadcrumb-list | Class name of the list element |
| p-breadcrumb-item | Class name of the item element |
| p-breadcrumb-separator | Class name of the separator element |
| p-breadcrumb-item-link | Class name of the link element |
| p-breadcrumb-current | Class name of the current element |
| p-breadcrumb-ellipsis | Class name of the ellipsis element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| breadcrumb.padding | --p-breadcrumb-padding | Padding of root |
| breadcrumb.background | --p-breadcrumb-background | Background of root |
| breadcrumb.gap | --p-breadcrumb-gap | Gap of root |
| breadcrumb.transition.duration | --p-breadcrumb-transition-duration | Transition duration of root |
| breadcrumb.item.color | --p-breadcrumb-item-color | Color of item |
| breadcrumb.item.hover.color | --p-breadcrumb-item-hover-color | Hover color of item |
| breadcrumb.item.border.radius | --p-breadcrumb-item-border-radius | Border radius of item |
| breadcrumb.item.gap | --p-breadcrumb-item-gap | Gap of item |
| breadcrumb.item.icon.color | --p-breadcrumb-item-icon-color | Icon color of item |
| breadcrumb.item.icon.hover.color | --p-breadcrumb-item-icon-hover-color | Icon hover color of item |
| breadcrumb.item.icon.size | --p-breadcrumb-item-icon-size | Icon size of item icon |
| breadcrumb.item.label.font.weight | --p-breadcrumb-item-label-font-weight | Font weight of item label |
| breadcrumb.item.label.font.size | --p-breadcrumb-item-label-font-size | Font size of item label |
| breadcrumb.item.focus.ring.width | --p-breadcrumb-item-focus-ring-width | Focus ring width of item |
| breadcrumb.item.focus.ring.style | --p-breadcrumb-item-focus-ring-style | Focus ring style of item |
| breadcrumb.item.focus.ring.color | --p-breadcrumb-item-focus-ring-color | Focus ring color of item |
| breadcrumb.item.focus.ring.offset | --p-breadcrumb-item-focus-ring-offset | Focus ring offset of item |
| breadcrumb.item.focus.ring.shadow | --p-breadcrumb-item-focus-ring-shadow | Focus ring shadow of item |
| breadcrumb.separator.color | --p-breadcrumb-separator-color | Color of separator |
