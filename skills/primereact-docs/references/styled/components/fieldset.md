# Fieldset

Fieldset is a container component with a legend and optional collapsible content.

```tsx
import { Fieldset } from '@primereact/ui/fieldset';

export default function Preview() {
    return (
        <div className="max-w-xs mx-auto">
            <Fieldset.Root>
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
        </div>
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
import { Divider } from '@primereact/ui/divider';
import { Fieldset } from '@primereact/ui/fieldset';

export default function BasicDemo() {
    return (
        <div className="max-w-xs mx-auto">
            <Fieldset.Root>
                <Fieldset.Legend>
                    <Fieldset.Title>Invoice #1024</Fieldset.Title>
                </Fieldset.Legend>
                <Fieldset.Content>
                    <div className="flex flex-col text-sm p-2">
                        <div className="flex justify-between">
                            <span className="text-color">Design Service</span>
                            <span className="text-muted-color">$120.00</span>
                        </div>
                        <div className="flex justify-between mt-3">
                            <span className="text-color">Hosting</span>
                            <span className="text-muted-color">$30.00</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between">
                            <span className="text-color font-medium">Total</span>
                            <span className="text-color font-medium">$150.00</span>
                        </div>
                    </div>
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
import { Divider } from '@primereact/ui/divider';
import { Fieldset } from '@primereact/ui/fieldset';

export default function ToggleableDemo() {
    return (
        <div className="max-w-xs mx-auto">
            <Fieldset.Root defaultOpen>
                <Fieldset.Legend>
                    <Fieldset.Trigger className="flex items-center gap-2">
                        <Fieldset.Indicator match="open">
                            <Minus />
                        </Fieldset.Indicator>
                        <Fieldset.Indicator match="closed">
                            <Plus />
                        </Fieldset.Indicator>
                        <Fieldset.Title>Invoice #1024</Fieldset.Title>
                    </Fieldset.Trigger>
                </Fieldset.Legend>
                <Fieldset.Content>
                    <div className="flex flex-col text-sm p-2">
                        <div className="flex justify-between">
                            <span className="text-color">Design Service</span>
                            <span className="text-muted-color">$120.00</span>
                        </div>
                        <div className="flex justify-between mt-3">
                            <span className="text-color">Hosting</span>
                            <span className="text-muted-color">$30.00</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between">
                            <span className="text-color font-medium">Total</span>
                            <span className="text-color font-medium">$150.00</span>
                        </div>
                    </div>
                </Fieldset.Content>
            </Fieldset.Root>
        </div>
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
import { Divider } from '@primereact/ui/divider';
import { Fieldset, type FieldsetRootOpenChangeEvent } from '@primereact/ui/fieldset';
import { useState } from 'react';

export default function ControlledToggleableDemo() {
    const [open, setOpen] = useState(true);

    return (
        <div className="space-y-4 max-w-xs mx-auto">
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
                        <Fieldset.Title>Invoice #1024</Fieldset.Title>
                    </Fieldset.Trigger>
                </Fieldset.Legend>
                <Fieldset.Content>
                    <div className="flex flex-col text-sm p-2">
                        <div className="flex justify-between">
                            <span className="text-color">Design Service</span>
                            <span className="text-muted-color">$120.00</span>
                        </div>
                        <div className="flex justify-between mt-3">
                            <span className="text-color">Hosting</span>
                            <span className="text-muted-color">$30.00</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between">
                            <span className="text-color font-medium">Total</span>
                            <span className="text-color font-medium">$150.00</span>
                        </div>
                    </div>
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
import { Divider } from '@primereact/ui/divider';
import { Fieldset } from '@primereact/ui/fieldset';

export default function IndicatorDemo() {
    return (
        <div className="flex flex-col gap-8 max-w-xs mx-auto">
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
                            <Fieldset.Title>Invoice #1024</Fieldset.Title>
                        </Fieldset.Trigger>
                    </Fieldset.Legend>
                    <Fieldset.Content>
                        <div className="flex flex-col text-sm p-2">
                            <div className="flex justify-between">
                                <span className="text-color">Design Service</span>
                                <span className="text-muted-color">$120.00</span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="text-color">Hosting</span>
                                <span className="text-muted-color">$30.00</span>
                            </div>
                            <Divider />
                            <div className="flex justify-between">
                                <span className="text-color font-medium">Total</span>
                                <span className="text-color font-medium">$150.00</span>
                            </div>
                        </div>
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
                            <Fieldset.Title>Invoice #1024</Fieldset.Title>
                        </Fieldset.Trigger>
                    </Fieldset.Legend>
                    <Fieldset.Content>
                        <div className="flex flex-col text-sm p-2">
                            <div className="flex justify-between">
                                <span className="text-color">Design Service</span>
                                <span className="text-muted-color">$120.00</span>
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="text-color">Hosting</span>
                                <span className="text-muted-color">$30.00</span>
                            </div>
                            <Divider />
                            <div className="flex justify-between">
                                <span className="text-color font-medium">Total</span>
                                <span className="text-color font-medium">$150.00</span>
                            </div>
                        </div>
                    </Fieldset.Content>
                </Fieldset.Root>
            </div>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/fieldset.md#api) for `FieldsetRoot`, `FieldsetLegend`, `FieldsetIndicator`, `FieldsetContent`, `FieldsetTitle`, `FieldsetTrigger` component documentation.

### Hooks

See [Headless API](../../headless/components/fieldset.md#api) for `useFieldset` hook documentation.

### Accessibility

See [Fieldset Primitive](../../primitive/components/fieldset.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-fieldset | Class name of the root element |
| p-fieldset-legend | Class name of the legend element |
| p-fieldset-title | Class name of the title element |
| p-fieldset-trigger | Class name of the trigger element |
| p-fieldset-indicator | Class name of the indicator element |
| p-fieldset-content-container | Class name of the content element |
| p-fieldset-content-wrapper | Class name of the content outer wrapper element |
| p-fieldset-content | Class name of the content inner wrapper element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| fieldset.background | --p-fieldset-background | Background of root |
| fieldset.border.color | --p-fieldset-border-color | Border color of root |
| fieldset.border.radius | --p-fieldset-border-radius | Border radius of root |
| fieldset.color | --p-fieldset-color | Color of root |
| fieldset.padding | --p-fieldset-padding | Padding of root |
| fieldset.transition.duration | --p-fieldset-transition-duration | Transition duration of root |
| fieldset.legend.background | --p-fieldset-legend-background | Background of legend |
| fieldset.legend.hover.background | --p-fieldset-legend-hover-background | Hover background of legend |
| fieldset.legend.color | --p-fieldset-legend-color | Color of legend |
| fieldset.legend.hover.color | --p-fieldset-legend-hover-color | Hover color of legend |
| fieldset.legend.border.radius | --p-fieldset-legend-border-radius | Border radius of legend |
| fieldset.legend.border.width | --p-fieldset-legend-border-width | Border width of legend |
| fieldset.legend.border.color | --p-fieldset-legend-border-color | Border color of legend |
| fieldset.legend.padding | --p-fieldset-legend-padding | Padding of legend |
| fieldset.legend.gap | --p-fieldset-legend-gap | Gap of legend |
| fieldset.legend.font.weight | --p-fieldset-legend-font-weight | Font weight of legend |
| fieldset.legend.font.size | --p-fieldset-legend-font-size | Font size of legend |
| fieldset.legend.focus.ring.width | --p-fieldset-legend-focus-ring-width | Focus ring width of legend |
| fieldset.legend.focus.ring.style | --p-fieldset-legend-focus-ring-style | Focus ring style of legend |
| fieldset.legend.focus.ring.color | --p-fieldset-legend-focus-ring-color | Focus ring color of legend |
| fieldset.legend.focus.ring.offset | --p-fieldset-legend-focus-ring-offset | Focus ring offset of legend |
| fieldset.legend.focus.ring.shadow | --p-fieldset-legend-focus-ring-shadow | Focus ring shadow of legend |
| fieldset.toggle.icon.color | --p-fieldset-toggle-icon-color | Color of toggle icon |
| fieldset.toggle.icon.hover.color | --p-fieldset-toggle-icon-hover-color | Hover color of toggle icon |
| fieldset.content.padding | --p-fieldset-content-padding | Padding of content |
