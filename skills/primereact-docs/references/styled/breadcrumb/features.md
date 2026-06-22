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
import { Check } from '@primeicons/react/check';
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

    const brands = [{ label: 'Apple' }, { label: 'Dell' }, { label: 'HP' }, { label: 'Lenovo' }, { label: 'Asus' }];

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
                            <Menu.Trigger variant="text" className="flex items-center gap-2 px-0">
                                {selectedBrand}
                                <ChevronDown className="text-xs" />
                            </Menu.Trigger>

                            <Menu.Portal>
                                <Menu.Positioner>
                                    <Menu.Popup>
                                        <Menu.List>
                                            <Menu.Label>Select Brand</Menu.Label>
                                            {brands.map((brand) => (
                                                <Menu.Item
                                                    type="checkbox"
                                                    key={brand.label}
                                                    checked={selectedBrand === brand.label}
                                                    onCheckedChange={() => setSelectedBrand(brand.label)}
                                                >
                                                    <Menu.Indicator match="checked">
                                                        <Check />
                                                    </Menu.Indicator>
                                                    {brand.label}
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

## API

### Sub-Components

See [Breadcrumb Primitive](../../primitive/breadcrumb/features.md#api) for the full sub-component API.

### Hooks

See [useBreadcrumb](../../headless/breadcrumb/features.md#api) for the headless hook API.

## Accessibility

See [Breadcrumb Primitive](../../primitive/breadcrumb/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
