# Fieldset

Fieldset is a container component with a legend and optional collapsible content.

```tsx
import { Fieldset, FieldsetContent, FieldsetLegend, FieldsetTitle } from '@/components/ui/fieldset';

export default function Preview() {
    return (
        <Fieldset className="max-w-xs mx-auto">
            <FieldsetLegend>
                <FieldsetTitle>Shipping Address</FieldsetTitle>
            </FieldsetLegend>
            <FieldsetContent>
                <div className="flex flex-col gap-6 text-sm p-2">
                    <div className="flex gap-8">
                        <div>
                            <div className="text-color font-medium">Name</div>
                            <div className="text-muted-color">Jane Cooper</div>
                        </div>
                        <div>
                            <div className="text-color font-medium">Phone</div>
                            <div className="text-muted-color">(415) 555-0132</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-color font-medium">Address</div>
                        <div className="text-muted-color">1234 Elm Street, Apt 5B</div>
                        <div className="text-muted-color">San Francisco, CA 94102</div>
                    </div>
                </div>
            </FieldsetContent>
        </Fieldset>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/fieldset
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Fieldset, FieldsetContent, FieldsetLegend, FieldsetTitle } from '@/components/ui/fieldset';
```

```tsx
<Fieldset>
    <FieldsetLegend>
        <FieldsetTitle>Legend</FieldsetTitle>
    </FieldsetLegend>
    <FieldsetContent />
</Fieldset>
```

## Examples

### Basic

```tsx
import { Fieldset, FieldsetContent, FieldsetLegend, FieldsetTitle } from '@/components/ui/fieldset';

export default function BasicDemo() {
    return (
        <Fieldset>
            <FieldsetLegend>
                <FieldsetTitle>Legend</FieldsetTitle>
            </FieldsetLegend>
            <FieldsetContent>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </FieldsetContent>
        </Fieldset>
    );
}
```

### Toggleable

Use `Fieldset.Trigger` inside the legend to make the fieldset collapsible. The `defaultOpen` prop sets the initial state, and content visibility is animated by default.

```tsx
'use client';
import { Minus, Plus } from '@primeicons/react';
import { Fieldset, FieldsetContent, FieldsetIndicator, FieldsetLegend, FieldsetTitle, FieldsetTrigger } from '@/components/ui/fieldset';

export default function ToggleableDemo() {
    return (
        <Fieldset defaultOpen>
            <FieldsetLegend>
                <FieldsetTrigger className="flex items-center gap-2">
                    <FieldsetIndicator match="open">
                        <Minus />
                    </FieldsetIndicator>
                    <FieldsetIndicator match="closed">
                        <Plus />
                    </FieldsetIndicator>
                    <FieldsetTitle>Legend</FieldsetTitle>
                </FieldsetTrigger>
            </FieldsetLegend>
            <FieldsetContent>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </FieldsetContent>
        </Fieldset>
    );
}
```

### Controlled

Control fieldset state from outside with the `open` and `onOpenChange` props.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Fieldset, FieldsetContent, FieldsetIndicator, FieldsetLegend, FieldsetTitle, FieldsetTrigger } from '@/components/ui/fieldset';
import { Minus, Plus } from '@primeicons/react';
import type { FieldsetRootOpenChangeEvent } from 'primereact/fieldset';
import { useState } from 'react';

export default function ControlledToggleableDemo() {
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
            <Fieldset open={open} onOpenChange={(e: FieldsetRootOpenChangeEvent) => setOpen(e.value ?? false)}>
                <FieldsetLegend>
                    <FieldsetTrigger className="flex items-center gap-2">
                        <FieldsetIndicator match="open">
                            <Minus />
                        </FieldsetIndicator>
                        <FieldsetIndicator match="closed">
                            <Plus />
                        </FieldsetIndicator>
                        <FieldsetTitle>Legend</FieldsetTitle>
                    </FieldsetTrigger>
                </FieldsetLegend>
                <FieldsetContent>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </FieldsetContent>
            </Fieldset>
        </div>
    );
}
```

### Indicator

`Fieldset.Indicator` supports conditional rendering based on fieldset state. Use the `match` prop to render content only when the state matches.

```tsx
<Fieldset.Legend>
    <Fieldset.Trigger>
        <Fieldset.Title>Header</Fieldset.Title>
        <Fieldset.Indicator match="open">
            <Minus />
        </Fieldset.Indicator>
        <Fieldset.Indicator match="closed">
            <Plus />
        </Fieldset.Indicator>
    </Fieldset.Trigger>
</Fieldset.Legend>
```

Available values: `open`, `closed`. Without the `match` prop, the indicator renders in all states.

```tsx
'use client';
import { ChevronDown, Minus, Plus } from '@primeicons/react';
import { Fieldset, FieldsetContent, FieldsetIndicator, FieldsetLegend, FieldsetTitle, FieldsetTrigger } from '@/components/ui/fieldset';

export default function IndicatorDemo() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">Match open / closed</h3>
                <Fieldset defaultOpen>
                    <FieldsetLegend>
                        <FieldsetTrigger className="flex items-center gap-2">
                            <FieldsetIndicator match="open">
                                <Minus />
                            </FieldsetIndicator>
                            <FieldsetIndicator match="closed">
                                <Plus />
                            </FieldsetIndicator>
                            <FieldsetTitle>Legend</FieldsetTitle>
                        </FieldsetTrigger>
                    </FieldsetLegend>
                    <FieldsetContent>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </FieldsetContent>
                </Fieldset>
            </div>

            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">CSS-only with data attributes</h3>
                <Fieldset defaultOpen>
                    <FieldsetLegend>
                        <FieldsetTrigger className="flex items-center gap-2">
                            <FieldsetIndicator>
                                <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                            </FieldsetIndicator>
                            <FieldsetTitle>Legend</FieldsetTitle>
                        </FieldsetTrigger>
                    </FieldsetLegend>
                    <FieldsetContent>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </FieldsetContent>
                </Fieldset>
            </div>
        </div>
    );
}
```

## Accessibility

### Screen Reader

Fieldset uses the semantic `fieldset` element. For toggleable usage, the trigger button uses `aria-controls` to reference the content region and `aria-expanded` to reflect visibility state.

### Keyboard Support

| Key           | Function                                                                |
| ------------- | ----------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous focusable element in the page tab sequence. |
| `enter`       | Toggles the visibility of the content.                                  |
| `space`       | Toggles the visibility of the content.                                  |
