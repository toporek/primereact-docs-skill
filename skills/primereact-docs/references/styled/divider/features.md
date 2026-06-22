# Divider

Divider is used to separate contents.

```tsx
import { Divider } from '@primereact/ui/divider';

export default function Preview() {
    return (
        <div className="max-w-md mx-auto">
            <div className="flex">
                <div>
                    <div className="uppercase font-mono text-xs">Invoice No</div>
                    <div className="font-light">0000123</div>
                </div>
                <Divider.Root orientation="vertical" />
                <div>
                    <div className="uppercase font-mono text-xs">Issued</div>
                    <div className="font-light">01/01/2026</div>
                </div>
                <Divider.Root orientation="vertical" />
                <div>
                    <div className="uppercase font-mono text-xs">Due Date</div>
                    <div className="font-light">02/02/2026</div>
                </div>
            </div>

            <Divider.Root />

            <div className="flex">
                <div className="flex-1">
                    <div className="uppercase font-mono text-xs">From</div>
                    <div className="font-semibold text-2xl ">PrimeTek</div>
                    <div className="w-full h-12 mt-4 bg-surface-100 dark:bg-surface-900 rounded-lg"></div>
                </div>
                <Divider.Root orientation="vertical" />
                <div className="flex-1">
                    <div className="uppercase font-mono text-xs">To</div>
                    <div className="h-7 mt-2 rounded-lg bg-surface-100 dark:bg-surface-900"></div>
                    <div className="w-full h-12 mt-2 bg-surface-100 dark:bg-surface-900 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}
```

## Usage

```tsx
import { Divider } from '@primereact/ui/divider';
```

```tsx
<Divider />
```

## Examples

### Basic

Separates content sections horizontally or vertically.

```tsx
import { Divider } from '@primereact/ui/divider';

export default function BasicDemo() {
    return (
        <div className="max-w-sm mx-auto text-sm">
            <div className="flex items-center justify-between">
                <span className="text-color font-medium">Subtotal</span>
                <span className="text-color">$89.00</span>
            </div>
            <Divider.Root />
            <div className="flex items-center justify-between">
                <span className="text-color font-medium">Shipping</span>
                <span className="text-color">$5.99</span>
            </div>
            <Divider.Root />
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
import { Divider } from '@primereact/ui/divider';

export default function TypeDemo() {
    return (
        <div className="max-w-md mx-auto">
            <p className="text-sm">Fast setup, no credit card required</p>

            <Divider.Root type="solid" />

            <p className="text-sm">Cancel anytime from your account</p>

            <Divider.Root type="dotted" />

            <p className="text-sm">24/7 support included</p>

            <Divider.Root type="dashed" />

            <p className="text-sm">No long-term commitments</p>
        </div>
    );
}
```

### Vertical

Vertical divider is enabled by setting the `orientation` property as `vertical`.

```tsx
import { Divider } from '@primereact/ui/divider';

export default function VerticalDemo() {
    return (
        <div className="flex w-fit mx-auto">
            <div>
                <div className="uppercase font-mono text-xs">Invoice No</div>
                <div className="font-light">0000123</div>
            </div>
            <Divider.Root orientation="vertical" />
            <div>
                <div className="uppercase font-mono text-xs">Issued</div>
                <div className="font-light">01/01/2026</div>
            </div>
            <Divider.Root orientation="vertical" />
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
import { Divider } from '@primereact/ui/divider';

export default function ContentDemo() {
    return (
        <div className="max-w-md mx-auto">
            <p className="text-sm">Fast setup with a simple onboarding process, no credit card required to get started.</p>

            <Divider.Root align="left" type="solid">
                <Divider.Content>
                    <code className="uppercase text-xs">Getting started</code>
                </Divider.Content>
            </Divider.Root>

            <p className="text-sm">Cancel anytime directly from your account settings, with no questions asked.</p>

            <Divider.Root align="center" type="dotted">
                <Divider.Content>
                    <code className="uppercase text-xs">Flexibility</code>
                </Divider.Content>
            </Divider.Root>

            <p className="text-sm">24/7 support included to help you resolve issues quickly, whenever you need assistance.</p>

            <Divider.Root align="right" type="dashed">
                <Divider.Content>
                    <code className="uppercase text-xs">Support</code>
                </Divider.Content>
            </Divider.Root>

            <p className="text-sm">No long-term commitments or hidden contracts, just transparent and flexible pricing.</p>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/divider/features.md#api) for `DividerRoot` and `DividerContent` component documentation.

### Hooks

See [Headless API](../../headless/divider/features.md#api) for `useDivider` hook documentation.

## Accessibility

See [Divider Primitive](../../primitive/divider/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
