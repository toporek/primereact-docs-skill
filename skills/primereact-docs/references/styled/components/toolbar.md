# Toolbar

Toolbar is a grouping component for buttons and other content.

```tsx
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Toolbar } from '@primereact/ui/toolbar';
import { Plus } from '@primeicons/react/plus';
import { Upload } from '@primeicons/react/upload';

export default function Preview() {
    return (
        <div>
            <Toolbar.Root>
                <Toolbar.Start>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <Plus></Plus>
                    </Button>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-print" />
                    </Button>
                    <Button severity="secondary" variant="text">
                        <Upload></Upload>
                    </Button>
                </Toolbar.Start>
                <Toolbar.Center>
                    <InputText placeholder="Search" />
                </Toolbar.Center>
                <Toolbar.End>
                    <Button severity="secondary" variant="outlined" size="small">
                        Cancel
                    </Button>
                    <Button size="small" className="ml-2">
                        Save
                    </Button>
                </Toolbar.End>
            </Toolbar.Root>
        </div>
    );
}

```

## Usage

```tsx
import { Toolbar } from '@primereact/ui/toolbar';
```

```tsx
<Toolbar.Root>
    <Toolbar.Start />
    <Toolbar.Center />
    <Toolbar.End />
</Toolbar.Root>
```

## Examples

### Basic

Combines action buttons and controls in a horizontal bar.

```tsx
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Toolbar } from '@primereact/ui/toolbar';
import { Plus } from '@primeicons/react/plus';
import { Upload } from '@primeicons/react/upload';

export default function BasicDemo() {
    return (
        <div>
            <Toolbar.Root>
                <Toolbar.Start>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <Plus></Plus>
                    </Button>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-print" />
                    </Button>
                    <Button severity="secondary" variant="text">
                        <Upload></Upload>
                    </Button>
                </Toolbar.Start>
                <Toolbar.Center>
                    <InputText placeholder="Search" />
                </Toolbar.Center>
                <Toolbar.End>
                    <Button severity="secondary" variant="outlined" size="small">
                        Cancel
                    </Button>
                    <Button size="small" className="ml-2">
                        Save
                    </Button>
                </Toolbar.End>
            </Toolbar.Root>
        </div>
    );
}

```

### Custom

A customized toolbar with navigation bar functionality.

```tsx
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Toolbar } from '@primereact/ui/toolbar';
import { Search } from '@primeicons/react/search';

export default function CustomDemo() {
    return (
        <Toolbar.Root style={{ borderRadius: '3rem', padding: '0.75rem 1rem 0.75rem 1.5rem', background: 'var(--p-surface-900)', border: 'none' }}>
            <Toolbar.Start>
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
            </Toolbar.Start>
            <Toolbar.End>
                <div className="flex items-center gap-2">
                    <Button variant="text" size="small" className="text-surface-0 hover:bg-surface-700">
                        <Search />
                    </Button>
                    <Button severity="contrast" size="small">
                        Get Started
                    </Button>
                    <Avatar.Root shape="circle" size="normal">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        <Avatar.Fallback>A</Avatar.Fallback>
                    </Avatar.Root>
                </div>
            </Toolbar.End>
        </Toolbar.Root>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/toolbar.md#api) for `ToolbarRoot`, `ToolbarStart`, `ToolbarCenter`, `ToolbarEnd` component documentation.

### Hooks

See [Headless API](../../headless/components/toolbar.md#api) for `useToolbar` hook documentation.

### Accessibility

See [Toolbar Primitive](../../primitive/components/toolbar.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-toolbar | Class name of the root element |
| p-toolbar-start | Class name of the start element |
| p-toolbar-center | Class name of the center element |
| p-toolbar-end | Class name of the end element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| toolbar.background | --p-toolbar-background | Background of root |
| toolbar.border.color | --p-toolbar-border-color | Border color of root |
| toolbar.border.radius | --p-toolbar-border-radius | Border radius of root |
| toolbar.color | --p-toolbar-color | Color of root |
| toolbar.gap | --p-toolbar-gap | Gap of root |
| toolbar.padding | --p-toolbar-padding | Padding of root |
