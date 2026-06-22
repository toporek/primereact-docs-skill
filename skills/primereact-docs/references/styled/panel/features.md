# Panel

Panel is a container component with optional collapsible content.

```tsx
import { ChevronDown, ChevronUp } from '@primeicons/react';
import { Divider } from '@primereact/ui/divider';
import { Panel } from '@primereact/ui/panel';

export default function Preview() {
    return (
        <Panel.Root className="max-w-xs mx-auto" defaultOpen>
            <Panel.Trigger className="w-full">
                <Panel.Header>
                    <Panel.Title>Order Summary</Panel.Title>
                    <Panel.Indicator match="open" className="ml-auto mr-0">
                        <ChevronDown />
                    </Panel.Indicator>
                    <Panel.Indicator match="closed" className="ml-auto mr-0">
                        <ChevronUp />
                    </Panel.Indicator>
                </Panel.Header>
            </Panel.Trigger>

            <Panel.Content>
                <div className="flex flex-col gap-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-muted-color">Wireless Headphones</span>
                        <span className="text-color font-medium">$79.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-color">Phone Case</span>
                        <span className="text-color font-medium">$15.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-color">Shipping</span>
                        <span className="text-color font-medium">$5.99</span>
                    </div>
                    <Divider.Root />
                    <div className="flex justify-between">
                        <span className="text-color font-semibold">Total</span>
                        <span className="text-color font-semibold">$99.99</span>
                    </div>
                </div>
            </Panel.Content>
        </Panel.Root>
    );
}
```

## Usage

```tsx
import { Panel } from '@primereact/ui/panel';
```

```tsx
<Panel.Root>
    <Panel.Header>
        <Panel.Title />
        <Panel.Trigger>
            <Panel.Indicator />
        </Panel.Trigger>
    </Panel.Header>
    <Panel.Content />
    <Panel.Footer />
</Panel.Root>
```

## Examples

### Basic

A container with a collapsible header and scrollable content body.

```tsx
import { Panel } from '@primereact/ui/panel';

export default function BasicDemo() {
    return (
        <Panel.Root>
            <Panel.Header>
                <Panel.Title>Header</Panel.Title>
            </Panel.Header>
            <Panel.Content>
                <p className="text-sm m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel.Content>
        </Panel.Root>
    );
}
```

### Toggleable

Use `Panel.Trigger` inside the header to make the panel collapsible. The `defaultOpen` prop sets the initial state, and content visibility is animated by default.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Panel } from '@primereact/ui/panel';

export default function ToggleableDemo() {
    return (
        <Panel.Root defaultOpen>
            <Panel.Header>
                <Panel.Title>Header</Panel.Title>
                <Panel.Trigger>
                    <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                </Panel.Trigger>
            </Panel.Header>
            <Panel.Content>
                <p className="text-sm m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel.Content>
        </Panel.Root>
    );
}
```

### Controlled

Control panel state from outside with the `open` and `onOpenChange` props.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Button } from '@primereact/ui/button';
import { Panel, type PanelRootOpenChangeEvent } from '@primereact/ui/panel';
import { useState } from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = useState(true);

    return (
        <div className="space-y-4">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setOpen(true)} severity={open ? 'primary' : 'secondary'}>
                    Open
                </Button>
                <Button onClick={() => setOpen(false)} severity={!open ? 'primary' : 'secondary'}>
                    Close
                </Button>
            </div>
            <Panel.Root open={open} onOpenChange={(e: PanelRootOpenChangeEvent) => setOpen(e.value ?? false)}>
                <Panel.Header>
                    <Panel.Title>Controlled Panel</Panel.Title>
                    <Panel.Trigger>
                        <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                    </Panel.Trigger>
                </Panel.Header>
                <Panel.Content>
                    <p className="text-sm m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel.Content>
            </Panel.Root>
        </div>
    );
}
```

### Indicator

`Panel.Indicator` supports conditional rendering based on panel state. Use the `match` prop to render content only when the state matches.

```tsx
<Panel.Header>
    <Panel.Title>Header</Panel.Title>
    <Panel.Trigger>
        <Panel.Indicator match="open">
            <Minus />
        </Panel.Indicator>
        <Panel.Indicator match="closed">
            <Plus />
        </Panel.Indicator>
    </Panel.Trigger>
</Panel.Header>
```

Available values: `open`, `closed`. Without the `match` prop, the indicator renders in all states.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Panel } from '@primereact/ui/panel';

export default function IndicatorDemo() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">Match open / closed</h3>
                <Panel.Root defaultOpen>
                    <Panel.Header>
                        <Panel.Title>Header</Panel.Title>
                        <Panel.Trigger>
                            <Panel.Indicator match="closed">
                                <Plus />
                            </Panel.Indicator>
                            <Panel.Indicator match="open">
                                <Minus />
                            </Panel.Indicator>
                        </Panel.Trigger>
                    </Panel.Header>
                    <Panel.Content>
                        <p className="text-sm m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Panel.Content>
                </Panel.Root>
            </div>

            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">CSS-only with data attributes</h3>
                <Panel.Root defaultOpen>
                    <Panel.Header>
                        <Panel.Title>Header</Panel.Title>
                        <Panel.Trigger>
                            <Panel.Indicator>
                                <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                            </Panel.Indicator>
                        </Panel.Trigger>
                    </Panel.Header>
                    <Panel.Content>
                        <p className="text-sm m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Panel.Content>
                </Panel.Root>
            </div>
        </div>
    );
}
```

### Template

Customize the header with custom layouts such as avatars, action buttons, and additional metadata alongside `Panel.Trigger`.

```tsx
import { Bookmark } from '@primeicons/react/bookmark';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Cog } from '@primeicons/react/cog';
import { User } from '@primeicons/react/user';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Panel } from '@primereact/ui/panel';

export default function TemplateDemo() {
    return (
        <Panel.Root defaultOpen>
            <Panel.Header>
                <Panel.Title>
                    <div className="flex items-center gap-2">
                        <Avatar.Root shape="circle">
                            <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                            <Avatar.Fallback>A</Avatar.Fallback>
                        </Avatar.Root>
                        <span className="font-bold">Amy Elsner</span>
                    </div>
                </Panel.Title>
                <div className="flex items-center gap-1">
                    <Button severity="secondary" rounded variant="text" iconOnly>
                        <Cog />
                    </Button>
                    <Panel.Trigger>
                        <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                    </Panel.Trigger>
                </div>
            </Panel.Header>
            <Panel.Content>
                <p className="text-sm m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                    <div className="flex items-center gap-2">
                        <Button iconOnly rounded variant="text">
                            <User />
                        </Button>
                        <Button severity="secondary" iconOnly rounded variant="text">
                            <Bookmark />
                        </Button>
                    </div>
                    <span className="text-surface-500 dark:text-surface-400 text-sm">Updated 2 hours ago</span>
                </div>
            </Panel.Content>
        </Panel.Root>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/panel/features.md#api) for `PanelRoot`, `PanelHeader`, `PanelTrigger`, `PanelTitle`, `PanelIndicator`, `PanelContent`, and `PanelFooter` component documentation.

### Hooks

See [Headless API](../../headless/panel/features.md#api) for `usePanel` hook documentation.

## Accessibility

See [Panel Primitive](../../primitive/panel/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
