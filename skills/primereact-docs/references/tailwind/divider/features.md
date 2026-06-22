# Divider

Divider is used to separate contents.

```tsx
import { Divider } from '@/components/ui/divider';

export default function Preview() {
    return (
        <div className="max-w-md mx-auto">
            <div className="flex">
                <div>
                    <div className="uppercase font-mono text-xs">Invoice No</div>
                    <div className="font-light">0000123</div>
                </div>
                <Divider orientation="vertical" />
                <div>
                    <div className="uppercase font-mono text-xs">Issued</div>
                    <div className="font-light">01/01/2026</div>
                </div>
                <Divider orientation="vertical" />
                <div>
                    <div className="uppercase font-mono text-xs">Due Date</div>
                    <div className="font-light">02/02/2026</div>
                </div>
            </div>

            <Divider />

            <div className="flex">
                <div className="flex-1">
                    <div className="uppercase font-mono text-xs">From</div>
                    <div className="font-semibold text-2xl">PrimeTek</div>
                    <div className="w-full h-12 mt-4 bg-surface-100 dark:bg-surface-900 rounded-lg" />
                </div>
                <Divider orientation="vertical" />
                <div className="flex-1">
                    <div className="uppercase font-mono text-xs">To</div>
                    <div className="h-7 mt-2 rounded-lg bg-surface-100 dark:bg-surface-900" />
                    <div className="w-full h-12 mt-2 bg-surface-100 dark:bg-surface-900 rounded-lg" />
                </div>
            </div>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/divider
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Divider, DividerContent } from '@/components/ui/divider';
```

```tsx
<Divider />
```

## Examples

### Basic

```tsx
import { Divider } from '@/components/ui/divider';

export default function BasicDemo() {
    return (
        <div className="max-w-sm mx-auto text-sm">
            <div className="flex items-center justify-between">
                <span className="text-color font-medium">Subtotal</span>
                <span className="text-color">$89.00</span>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
                <span className="text-color font-medium">Shipping</span>
                <span className="text-color">$5.99</span>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
                <span className="text-color font-semibold">Total</span>
                <span className="text-color font-semibold">$94.99</span>
            </div>
        </div>
    );
}
```

### Type

Style of the border is configured with the `type` property that can either be `solid`, `dotted` or `dashed`.

```tsx
import { Divider } from '@/components/ui/divider';

export default function TypeDemo() {
    return (
        <div className="max-w-md mx-auto">
            <p className="text-sm">Fast setup, no credit card required</p>

            <Divider type="solid" />

            <p className="text-sm">Cancel anytime from your account</p>

            <Divider type="dotted" />

            <p className="text-sm">24/7 support included</p>

            <Divider type="dashed" />

            <p className="text-sm">No long-term commitments</p>
        </div>
    );
}
```

### Vertical

Vertical divider is enabled by setting the `orientation` property as `vertical`.

```tsx
import { Divider } from '@/components/ui/divider';

export default function VerticalDemo() {
    return (
        <div className="flex w-fit mx-auto">
            <div>
                <div className="uppercase font-mono text-xs">Invoice No</div>
                <div className="font-light">0000123</div>
            </div>
            <Divider orientation="vertical" />
            <div>
                <div className="uppercase font-mono text-xs">Issued</div>
                <div className="font-light">01/01/2026</div>
            </div>
            <Divider orientation="vertical" />
            <div>
                <div className="uppercase font-mono text-xs">Due Date</div>
                <div className="font-light">02/02/2026</div>
            </div>
        </div>
    );
}
```

### Content

Children are rendered within the boundaries of the divider where location of the content is configured with the `align` property. In horizontal orientation, alignment options are `left`, `center` and`right` whereas vertical
mode supports `top`, `center` and `bottom`.

```tsx
import { Divider, DividerContent } from '@/components/ui/divider';

export default function ContentDemo() {
    return (
        <div className="max-w-md mx-auto">
            <p className="text-sm">Fast setup with a simple onboarding process, no credit card required to get started.</p>

            <Divider align="left" type="solid">
                <DividerContent>
                    <code className="uppercase text-xs">Getting started</code>
                </DividerContent>
            </Divider>

            <p className="text-sm">Cancel anytime directly from your account settings, with no questions asked.</p>

            <Divider align="center" type="dotted">
                <DividerContent>
                    <code className="uppercase text-xs">Flexibility</code>
                </DividerContent>
            </Divider>

            <p className="text-sm">24/7 support included to help you resolve issues quickly, whenever you need assistance.</p>

            <Divider align="right" type="dashed">
                <DividerContent>
                    <code className="uppercase text-xs">Support</code>
                </DividerContent>
            </Divider>

            <p className="text-sm">No long-term commitments or hidden contracts, just transparent and flexible pricing.</p>
        </div>
    );
}
```

## Accessibility

### Screen Reader

Divider uses a `separator` role with `aria-orientation` set to either "horizontal" or "vertical".

### Keyboard Support

Component does not include any interactive elements.
