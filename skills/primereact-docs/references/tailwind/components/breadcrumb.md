# Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

```tsx
import { Bolt, Home } from '@primeicons/react';
import {
    Breadcrumb,
    BreadcrumbCurrent,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

export default function Preview() {
    return (
        <div className="flex justify-center">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            <Home />
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbEllipsis />
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">
                            <Bolt /> Electronics
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Laptops</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbCurrent>Dell</BreadcrumbCurrent>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/breadcrumb.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
```

```tsx
<Breadcrumb>
    <BreadcrumbList>
        <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
            <BreadcrumbCurrent>Current Page</BreadcrumbCurrent>
        </BreadcrumbItem>
    </BreadcrumbList>
</Breadcrumb>
```

## Examples

### Basic

```tsx
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Laptops</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbCurrent>Dell</BreadcrumbCurrent>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

```

### Route

A breadcrumb can be used with routing libraries to navigate between pages.

```tsx
'use client';
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import * as React from 'react';

const allPages = [
    { label: 'Home' },
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
            <Breadcrumb>
                <BreadcrumbList>
                    {pages.map((page, index) => (
                        <React.Fragment key={page.label}>
                            {index > 0 && <BreadcrumbSeparator />}
                            <BreadcrumbItem>
                                {index === pages.length - 1 ? (
                                    <BreadcrumbCurrent>{page.label}</BreadcrumbCurrent>
                                ) : (
                                    <BreadcrumbLink href="#route" onClick={() => handleClick(index)}>
                                        {page.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

```

### Controlled

A breadcrumb can be controlled by managing the current page state.

```tsx
'use client';
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
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
            <Breadcrumb>
                <BreadcrumbList>
                    {pages.map((page, index) => (
                        <React.Fragment key={page.key}>
                            {index > 0 && <BreadcrumbSeparator />}
                            <BreadcrumbItem>
                                {currentPage === page.key ? (
                                    <BreadcrumbCurrent>{page.label}</BreadcrumbCurrent>
                                ) : (
                                    <BreadcrumbLink href="#controlled" onClick={() => setCurrentPage(page.key)}>
                                        {page.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

```

### Custom Separator

A breadcrumb allows customization of the separator between items.

```tsx
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default function CustomSeparatorDemo() {
    return (
        <div className="flex justify-center">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Laptops</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbCurrent>Dell</BreadcrumbCurrent>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

```

### Ellipsis

```tsx
import {
    Breadcrumb,
    BreadcrumbCurrent,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

export default function EllipsisDemo() {
    return (
        <div className="flex justify-center">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbEllipsis />
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Laptops</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbCurrent>Dell</BreadcrumbCurrent>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

```

### Custom Item

A breadcrumb allows customization of the items.

```tsx
'use client';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Check, ChevronDown } from '@primeicons/react';
import { Menu } from '@primereact/ui/menu';
import * as React from 'react';

export default function CustomItemDemo() {
    const [selectedBrand, setSelectedBrand] = React.useState('Apple');

    const brands = [{ label: 'Apple' }, { label: 'Dell' }, { label: 'HP' }, { label: 'Lenovo' }, { label: 'Asus' }];

    return (
        <div className="flex justify-center">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Computers</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">
                            Laptops
                            <Badge shape="circle">5</Badge>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
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
                                                <Menu.CheckboxItem
                                                    key={brand.label}
                                                    checked={selectedBrand === brand.label}
                                                    onCheckedChange={() => setSelectedBrand(brand.label)}
                                                >
                                                    <Menu.CheckboxItemIndicator>
                                                        <Check />
                                                    </Menu.CheckboxItemIndicator>
                                                    {brand.label}
                                                </Menu.CheckboxItem>
                                            ))}
                                        </Menu.List>
                                    </Menu.Popup>
                                </Menu.Positioner>
                            </Menu.Portal>
                        </Menu.Root>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

```
