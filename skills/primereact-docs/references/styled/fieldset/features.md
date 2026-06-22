# Fieldset

Fieldset is a container component with a legend and optional collapsible content.

```tsx
import { Fieldset } from '@primereact/ui/fieldset';

export default function Preview() {
    return (
        <Fieldset.Root className="max-w-xs mx-auto">
            <Fieldset.Legend>
                <Fieldset.Title>Shipping Address</Fieldset.Title>
            </Fieldset.Legend>
            <Fieldset.Content>
                <div className="flex flex-col gap-6 text-sm p-2">
                    <div className="flex gap-8">
                        <div>
                            <div className="text-color font-medium">Name</div>
                            <div className="text-muted-color">Jane Cooper</div>
                        </div>
                        <div>
                            <div className="text-color font-medium">Phone</div>
                            <div className="text-muted-color ">(415) 555-0132</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-color font-medium">Address</div>
                        <div className="text-muted-color">1234 Elm Street, Apt 5B</div>
                        <div className="text-muted-color">San Francisco, CA 94102</div>
                    </div>
                </div>
            </Fieldset.Content>
        </Fieldset.Root>
    );
}
```

## Usage

```tsx
import { Fieldset } from '@primereact/ui/fieldset';
```

```tsx
<Fieldset.Root>
    <Fieldset.Legend>
        <Fieldset.Trigger>
            <Fieldset.Indicator />
            <Fieldset.Title />
        </Fieldset.Trigger>
    </Fieldset.Legend>
    <Fieldset.Content />
</Fieldset.Root>
```

## Examples

### Basic

Groups related form elements under a toggleable legend.

```tsx
import { Fieldset } from '@primereact/ui/fieldset';

export default function BasicDemo() {
    return (
        <div>
            <Fieldset.Root>
                <Fieldset.Legend>
                    <Fieldset.Title>Legend</Fieldset.Title>
                </Fieldset.Legend>
                <Fieldset.Content>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Fieldset.Content>
            </Fieldset.Root>
        </div>
    );
}
```

### Toggleable

Use `Fieldset.Trigger` inside the legend to make the fieldset collapsible. The `defaultOpen` prop sets the initial state, and content visibility is animated by default.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Fieldset } from '@primereact/ui/fieldset';

export default function ToggleableDemo() {
    return (
        <Fieldset.Root defaultOpen>
            <Fieldset.Legend>
                <Fieldset.Trigger className="flex items-center gap-2">
                    <Fieldset.Indicator match="open">
                        <Minus />
                    </Fieldset.Indicator>
                    <Fieldset.Indicator match="closed">
                        <Plus />
                    </Fieldset.Indicator>
                    <Fieldset.Title>Legend</Fieldset.Title>
                </Fieldset.Trigger>
            </Fieldset.Legend>
            <Fieldset.Content>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset.Content>
        </Fieldset.Root>
    );
}
```

### Controlled

Control fieldset state from outside with the `open` and `onOpenChange` props.

```tsx
'use client';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Button } from '@primereact/ui/button';
import { Fieldset, type FieldsetRootOpenChangeEvent } from '@primereact/ui/fieldset';
import { useState } from 'react';

export default function ControlledToggleableDemo() {
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
            <Fieldset.Root open={open} onOpenChange={(e: FieldsetRootOpenChangeEvent) => setOpen(e.value ?? false)}>
                <Fieldset.Legend>
                    <Fieldset.Trigger className="flex items-center gap-2">
                        <Fieldset.Indicator match="open">
                            <Minus />
                        </Fieldset.Indicator>
                        <Fieldset.Indicator match="closed">
                            <Plus />
                        </Fieldset.Indicator>
                        <Fieldset.Title>Legend</Fieldset.Title>
                    </Fieldset.Trigger>
                </Fieldset.Legend>
                <Fieldset.Content>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Fieldset.Content>
            </Fieldset.Root>
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
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Fieldset } from '@primereact/ui/fieldset';

export default function IndicatorDemo() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">Match open / closed</h3>
                <Fieldset.Root defaultOpen>
                    <Fieldset.Legend>
                        <Fieldset.Trigger className="flex items-center gap-2">
                            <Fieldset.Indicator match="open">
                                <Minus />
                            </Fieldset.Indicator>
                            <Fieldset.Indicator match="closed">
                                <Plus />
                            </Fieldset.Indicator>
                            <Fieldset.Title>Legend</Fieldset.Title>
                        </Fieldset.Trigger>
                    </Fieldset.Legend>
                    <Fieldset.Content>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Fieldset.Content>
                </Fieldset.Root>
            </div>

            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">CSS-only with data attributes</h3>
                <Fieldset.Root defaultOpen>
                    <Fieldset.Legend>
                        <Fieldset.Trigger className="flex items-center gap-2">
                            <Fieldset.Indicator>
                                <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                            </Fieldset.Indicator>
                            <Fieldset.Title>Legend</Fieldset.Title>
                        </Fieldset.Trigger>
                    </Fieldset.Legend>
                    <Fieldset.Content>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </Fieldset.Content>
                </Fieldset.Root>
            </div>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/fieldset/features.md#api) for `FieldsetRoot`, `FieldsetLegend`, `FieldsetIndicator`, `FieldsetContent`, `FieldsetTitle`, `FieldsetTrigger` component documentation.

### Hooks

See [Headless API](../../headless/fieldset/features.md#api) for `useFieldset` hook documentation.

## Accessibility

See [Fieldset Primitive](../../primitive/fieldset/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
