# Toolbar

Toolbar is a grouping component for buttons and other content.

```tsx
import { Button } from '@/components/ui/button';
import { InputText } from '@/components/ui/inputtext';
import { Toolbar, ToolbarCenter, ToolbarEnd, ToolbarStart } from '@/components/ui/toolbar';
import { Plus, Upload } from '@primeicons/react';

export default function Preview() {
    return (
        <div>
            <Toolbar>
                <ToolbarStart>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <Plus></Plus>
                    </Button>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-print" />
                    </Button>
                    <Button severity="secondary" variant="text">
                        <Upload></Upload>
                    </Button>
                </ToolbarStart>
                <ToolbarCenter>
                    <InputText placeholder="Search" />
                </ToolbarCenter>
                <ToolbarEnd>
                    <Button severity="secondary" variant="outlined" size="small">
                        Cancel
                    </Button>
                    <Button size="small" className="ml-2">
                        Save
                    </Button>
                </ToolbarEnd>
            </Toolbar>
        </div>
    );
}
```

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/toolbar
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Toolbar, ToolbarCenter, ToolbarEnd, ToolbarStart } from '@/components/ui/toolbar';
```

```tsx
<Toolbar>
    <ToolbarStart />
    <ToolbarCenter />
    <ToolbarEnd />
</Toolbar>
```

## Examples

### Basic

Combines action buttons and controls in a horizontal bar.

```tsx
import { Button } from '@/components/ui/button';
import { InputText } from '@/components/ui/inputtext';
import { Toolbar, ToolbarCenter, ToolbarEnd, ToolbarStart } from '@/components/ui/toolbar';
import { Plus, Upload } from '@primeicons/react';

export default function BasicDemo() {
    return (
        <div>
            <Toolbar>
                <ToolbarStart>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <Plus></Plus>
                    </Button>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-print" />
                    </Button>
                    <Button severity="secondary" variant="text">
                        <Upload></Upload>
                    </Button>
                </ToolbarStart>
                <ToolbarCenter>
                    <InputText placeholder="Search" />
                </ToolbarCenter>
                <ToolbarEnd>
                    <Button severity="secondary" variant="outlined" size="small">
                        Cancel
                    </Button>
                    <Button size="small" className="ml-2">
                        Save
                    </Button>
                </ToolbarEnd>
            </Toolbar>
        </div>
    );
}
```

### Custom

A customized toolbar with navigation bar functionality.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Toolbar, ToolbarEnd, ToolbarStart } from '@/components/ui/toolbar';
import { Search } from '@primeicons/react';

export default function CustomDemo() {
    return (
        <Toolbar style={{ borderRadius: '3rem', padding: '0.75rem 1rem 0.75rem 1.5rem', background: 'var(--p-surface-900)', border: 'none' }}>
            <ToolbarStart>
                <div className="flex items-center gap-1">
                    <i className="pi pi-prime text-xl" style={{ color: 'var(--p-primary-400)' }} />
                    <span className="font-bold text-lg ml-2" style={{ color: 'var(--p-surface-0)' }}>
                        Brand
                    </span>
                </div>
                <div className="ml-6 flex gap-1">
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        Products
                    </Button>
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        Solutions
                    </Button>
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        Resources
                    </Button>
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        Pricing
                    </Button>
                </div>
            </ToolbarStart>
            <ToolbarEnd>
                <div className="flex items-center gap-2">
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        <Search />
                    </Button>
                    <Button severity="contrast" size="small">
                        Get Started
                    </Button>
                    <Avatar shape="circle" size="normal">
                        <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                </div>
            </ToolbarEnd>
        </Toolbar>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/toolbar/features.md#api) for `ToolbarRoot`, `ToolbarStart`, `ToolbarCenter`, `ToolbarEnd` component documentation.

### Hooks

See [Headless API](../../headless/toolbar/features.md#api) for `useToolbar` hook documentation.

## Accessibility

See [Toolbar Primitive](../../primitive/toolbar/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
