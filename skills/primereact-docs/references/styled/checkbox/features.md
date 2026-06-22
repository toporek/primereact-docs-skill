# Checkbox

Checkbox is an extension to standard checkbox element with theming.

```tsx
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

const Preview = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="basic-checkbox">
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="basic-checkbox">
                    I accept the <a className="font-semibold">Terms of Service</a>
                </Label>
            </div>
        </div>
    );
};

export default Preview;
```

## Usage

```tsx
import { Checkbox } from '@primereact/ui/checkbox';
```

```tsx
<Checkbox.Root>
    <Checkbox.Box>
        <Checkbox.Indicator />
    </Checkbox.Box>
</Checkbox.Root>
```

## Examples

### Basic

Toggles a boolean value with an associated label.

```tsx
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';

const BasicDemo = () => {
    return (
        <div className="flex justify-center">
            <Checkbox.Root inputId="basic-checkbox">
                <Checkbox.Box>
                    <Checkbox.Indicator match="checked">
                        <Check />
                    </Checkbox.Indicator>
                </Checkbox.Box>
            </Checkbox.Root>
        </div>
    );
};

export default BasicDemo;
```

### Sizes

Use the `size` property to change the size of a checkbox.

```tsx
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function SizesDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="small-checkbox" size="small">
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="small-checkbox">Small</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="normal-checkbox" size="normal">
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="normal-checkbox">Normal</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="large-checkbox" size="large">
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="large-checkbox">Large</Label>
            </div>
        </div>
    );
}
```

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function FilledDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="filled-checkbox" variant="filled">
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="filled-checkbox">Filled</Label>
            </div>
        </div>
    );
}
```

### Disabled

Use the `disabled` property to disable a checkbox.

```tsx
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Checkbox.Root disabled>
                <Checkbox.Box>
                    <Checkbox.Indicator match="checked">
                        <Check />
                    </Checkbox.Indicator>
                </Checkbox.Box>
            </Checkbox.Root>
            <Checkbox.Root disabled checked>
                <Checkbox.Box>
                    <Checkbox.Indicator match="checked">
                        <Check />
                    </Checkbox.Indicator>
                </Checkbox.Box>
            </Checkbox.Root>
        </div>
    );
}
```

### Invalid

Specify the `invalid` property to display the component with a red border.

```tsx
import { Check } from '@primeicons/react/check';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function InvalidDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="invalid-checkbox" invalid>
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="invalid-checkbox" className="text-red-500 dark:text-red-400">
                    Invalid
                </Label>
            </div>
        </div>
    );
}
```

### Indeterminate

Use the `indeterminate` property to display an indeterminate state.

```tsx
import { Check } from '@primeicons/react/check';
import { Minus } from '@primeicons/react/minus';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function IndeterminateDemo() {
    return (
        <div className="flex items-center gap-2 justify-center">
            <Checkbox.Root inputId="indeterminate-checkbox" indeterminate>
                <Checkbox.Box>
                    <Checkbox.Indicator match="checked">
                        <Check />
                    </Checkbox.Indicator>
                    <Checkbox.Indicator match="indeterminate">
                        <Minus />
                    </Checkbox.Indicator>
                </Checkbox.Box>
            </Checkbox.Root>
            <Label htmlFor="indeterminate-checkbox">Email Notifications</Label>
        </div>
    );
}
```

### Indicator

Use `Checkbox.Indicator` to render the visual state inside `Checkbox.Box`.

```tsx
import { Check } from '@primeicons/react/check';
import { Minus } from '@primeicons/react/minus';
import { Times } from '@primeicons/react/times';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function IndicatorDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="checkbox-indicator" indeterminate>
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                        <Checkbox.Indicator match="unchecked">
                            <Times />
                        </Checkbox.Indicator>
                        <Checkbox.Indicator match="indeterminate">
                            <Minus />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="checkbox-indicator">Select all notifications</Label>
            </div>
        </div>
    );
}
```

`Checkbox.Indicator` also accepts a `match` prop to render based on the checkbox state.

```tsx
<Checkbox.Root indeterminate>
    <Checkbox.Box>
        <Checkbox.Indicator match="checked">
            <Check />
        </Checkbox.Indicator>
        <Checkbox.Indicator match="unchecked">
            <Times />
        </Checkbox.Indicator>
        <Checkbox.Indicator match="indeterminate">
            <Minus />
        </Checkbox.Indicator>
    </Checkbox.Box>
</Checkbox.Root>
```

Available `match` values: `checked`, `unchecked`, `indeterminate`. Without the `match` prop, the indicator renders in all states.

## API

### Sub-Components

See [Primitive API](../../primitive/checkbox/features.md#api) for `CheckboxRoot`, `CheckboxBox`, `CheckboxIndicator`, and `CheckboxGroup` component documentation.

### Hooks

See [Headless API](../../headless/checkbox/features.md#api) for `useCheckbox` and `useCheckboxGroup` hook documentation.

## Accessibility

See [Checkbox Primitive](../../primitive/checkbox/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
