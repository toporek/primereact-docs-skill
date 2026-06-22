# Checkbox

Checkbox is an extension to standard checkbox element with theming.

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function Preview() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="tw-preview-checkbox" />
                <Label htmlFor="tw-preview-checkbox">
                    I accept the <a className="font-semibold">Terms of Service</a>
                </Label>
            </div>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/checkbox
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Checkbox } from '@/components/ui/checkbox';
```

```tsx
<Checkbox />
```

## Examples

### Basic

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const BasicDemo = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="basic-checkbox" />
                <Label htmlFor="basic-checkbox">
                    I accept the <a className="font-semibold">Terms of Service</a>
                </Label>
            </div>
        </div>
    );
};

export default BasicDemo;
```

### Sizes

Use the `size` property to change the size of a checkbox.

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function SizesDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <Checkbox inputId="small" size="small" />
                <Label htmlFor="small">Small</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox inputId="normal" size="normal" />
                <Label htmlFor="normal">Normal</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox inputId="large" size="large" />
                <Label htmlFor="large">Large</Label>
            </div>
        </div>
    );
}
```

### Filled

Specify the `filled` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function FilledDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="filled" variant="filled" />
                <Label htmlFor="filled">Filled</Label>
            </div>
        </div>
    );
}
```

### Disabled

Use the `disabled` property to disable a checkbox.

```tsx
import { Checkbox } from '@/components/ui/checkbox';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Checkbox inputId="disabled" disabled />
            <Checkbox inputId="disabled" disabled checked />
        </div>
    );
}
```

### Invalid

Specify the `invalid` property to display the component with a red border.

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function InvalidDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="invalid" invalid />
                <Label htmlFor="invalid" className="text-red-500 dark:text-red-400">
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
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function IndeterminateDemo() {
    return (
        <div className="flex items-center gap-2 justify-center">
            <Checkbox indeterminate />
            <Label htmlFor="indeterminate-checkbox">Email Notifications</Label>
        </div>
    );
}
```
