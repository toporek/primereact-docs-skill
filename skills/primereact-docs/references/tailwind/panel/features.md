# Panel

Panel is a container component with optional collapsible content.

```tsx
'use client';
import { ChevronDown, ChevronUp } from '@primeicons/react';
import { Divider } from '@/components/ui/divider';
import { Panel, PanelContent, PanelHeader, PanelIndicator, PanelTitle, PanelTrigger } from '@/components/ui/panel';

export default function Preview() {
    return (
        <Panel className="max-w-xs mx-auto" defaultOpen>
            <PanelTrigger className="w-full">
                <PanelHeader>
                    <PanelTitle>Order Summary</PanelTitle>
                    <PanelIndicator match="open" className="ml-auto mr-0">
                        <ChevronDown />
                    </PanelIndicator>
                    <PanelIndicator match="closed" className="ml-auto mr-0">
                        <ChevronUp />
                    </PanelIndicator>
                </PanelHeader>
            </PanelTrigger>

            <PanelContent>
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
                    <Divider />
                    <div className="flex justify-between">
                        <span className="text-color font-semibold">Total</span>
                        <span className="text-color font-semibold">$99.99</span>
                    </div>
                </div>
            </PanelContent>
        </Panel>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/panel
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Panel, PanelContent, PanelHeader, PanelIndicator, PanelTitle, PanelTrigger } from '@/components/ui/panel';
```

```tsx
<Panel>
    <PanelHeader>
        <PanelTitle>Header</PanelTitle>
    </PanelHeader>
    <PanelContent />
</Panel>
```

## Examples

### Basic

```tsx
import { Panel, PanelContent, PanelHeader, PanelTitle } from '@/components/ui/panel';

export default function BasicDemo() {
    return (
        <Panel>
            <PanelHeader>
                <PanelTitle>Header</PanelTitle>
            </PanelHeader>
            <PanelContent>
                <p className="text-sm m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </PanelContent>
        </Panel>
    );
}
```

### Toggleable

Use `Panel.Trigger` inside the header to make the panel collapsible. The `defaultOpen` prop sets the initial state, and content visibility is animated by default.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelTrigger } from '@/components/ui/panel';

export default function ToggleableDemo() {
    return (
        <Panel defaultOpen>
            <PanelHeader>
                <PanelTitle>Header</PanelTitle>
                <PanelTrigger as={Button} severity="secondary" variant="text" rounded iconOnly>
                    <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                </PanelTrigger>
            </PanelHeader>
            <PanelContent>
                <p className="text-sm m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </PanelContent>
        </Panel>
    );
}
```

### Controlled

Control panel state from outside with the `open` and `onOpenChange` props.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelTrigger } from '@/components/ui/panel';
import { ChevronDown } from '@primeicons/react';
import type { PanelRootOpenChangeEvent } from 'primereact/panel';
import { useState } from 'react';

export default function ControlledDemo() {
    const [open, setOpen] = useState(true);

    return (
        <div className="space-y-4">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setOpen(true)} severity={open ? undefined : 'secondary'}>
                    Open
                </Button>
                <Button onClick={() => setOpen(false)} severity={!open ? undefined : 'secondary'}>
                    Close
                </Button>
            </div>
            <Panel open={open} onOpenChange={(e: PanelRootOpenChangeEvent) => setOpen(e.value ?? false)}>
                <PanelHeader>
                    <PanelTitle>Controlled Panel</PanelTitle>
                    <PanelTrigger as={Button} severity="secondary" variant="text" rounded iconOnly>
                        <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                    </PanelTrigger>
                </PanelHeader>
                <PanelContent>
                    <p className="text-sm m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </PanelContent>
            </Panel>
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
'use client';
import { ChevronDown, Minus, Plus } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Panel, PanelContent, PanelHeader, PanelIndicator, PanelTitle, PanelTrigger } from '@/components/ui/panel';

export default function IndicatorDemo() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">Match open / closed</h3>
                <Panel defaultOpen>
                    <PanelHeader>
                        <PanelTitle>Header</PanelTitle>
                        <PanelTrigger as={Button} severity="secondary" variant="text" rounded iconOnly>
                            <PanelIndicator match="closed">
                                <Plus />
                            </PanelIndicator>
                            <PanelIndicator match="open">
                                <Minus />
                            </PanelIndicator>
                        </PanelTrigger>
                    </PanelHeader>
                    <PanelContent>
                        <p className="text-sm m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </PanelContent>
                </Panel>
            </div>

            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">CSS-only with data attributes</h3>
                <Panel defaultOpen>
                    <PanelHeader>
                        <PanelTitle>Header</PanelTitle>
                        <PanelTrigger as={Button} severity="secondary" variant="text" rounded iconOnly>
                            <PanelIndicator>
                                <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                            </PanelIndicator>
                        </PanelTrigger>
                    </PanelHeader>
                    <PanelContent>
                        <p className="text-sm m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </PanelContent>
                </Panel>
            </div>
        </div>
    );
}
```

### Template

Customize the header with custom layouts such as avatars, action buttons, and additional metadata alongside `Panel.Trigger`.

```tsx
'use client';
import { Bookmark, ChevronDown, Cog, User } from '@primeicons/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelTrigger } from '@/components/ui/panel';

export default function TemplateDemo() {
    return (
        <Panel defaultOpen>
            <PanelHeader>
                <PanelTitle>
                    <div className="flex items-center gap-2">
                        <Avatar shape="circle">
                            <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <span className="font-bold">Amy Elsner</span>
                    </div>
                </PanelTitle>
                <div className="flex items-center gap-1">
                    <Button severity="secondary" rounded variant="text" iconOnly>
                        <Cog />
                    </Button>
                    <PanelTrigger as={Button} severity="secondary" variant="text" rounded iconOnly>
                        <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                    </PanelTrigger>
                </div>
            </PanelHeader>
            <PanelContent>
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
            </PanelContent>
        </Panel>
    );
}
```

## Accessibility

### Screen Reader

For toggleable panels, the trigger button uses `aria-controls` to reference the content region and `aria-expanded` to reflect visibility state. Accessible labels can be customized with `aria-label` or `aria-labelledby`.

### Keyboard Support

| Key           | Function                                                                |
| ------------- | ----------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous focusable element in the page tab sequence. |
| `enter`       | Toggles the visibility of the content.                                  |
| `space`       | Toggles the visibility of the content.                                  |
