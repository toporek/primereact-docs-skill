# Label

Label provides accessible text labels for form controls. Use `htmlFor` to link the label to a form control by its id.

```tsx
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';

export default function Preview() {
    return (
        <div className="flex flex-col gap-2 w-full max-w-3xs mx-auto">
            <Label htmlFor="tw-username">Username</Label>
            <InputText id="tw-username" placeholder="Enter username" />
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/label
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Label } from '@/components/ui/label';
```

```tsx
<Label htmlFor="username">Username</Label>
```

## Examples

### Basic

An accessible label element associated with a form control.

```tsx
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col gap-2 w-full max-w-sm">
                <Label htmlFor="username">Username</Label>
                <InputText id="username" placeholder="Enter username" />
            </div>
        </div>
    );
}
```

### Required

You can display required indicators in the label content while keeping the input semantics with `required` or `aria-required`.

```tsx
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';

export default function RequiredDemo() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col gap-2 w-full max-w-sm">
                <Label htmlFor="email" className="font-medium">
                    Email <span aria-hidden="true">*</span>
                </Label>
                <InputText id="email" type="email" placeholder="name@example.com" required aria-required="true" />
            </div>
        </div>
    );
}
```

## Accessibility

### Screen Reader

`Label` renders a native `label` element. Use `htmlFor` to associate it with a form control id, or wrap the form control inside the label.

### Keyboard Support

Component does not include any interactive elements.
