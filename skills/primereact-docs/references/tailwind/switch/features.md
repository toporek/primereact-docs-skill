# Switch

Switch is used to select a boolean value.

```tsx
import { Divider } from '@/components/ui/divider';
import { Switch } from '@/components/ui/switch';

export default function Preview() {
    return (
        <div className="flex flex-col justify-center items-center gap-2 max-w-xs mx-auto w-full ">
            <label className="flex items-center justify-between gap-12  select-none">
                <div className="flex-1">
                    <div className="text-color font-bold">Email address</div>
                    <div className="text-muted-color">Users can add email addresses to their account</div>
                </div>
                <Switch />
            </label>
            <Divider />
            <label className="flex items-center justify-between gap-12 select-none">
                <div className="flex-1">
                    <div className="text-color font-bold">Two-factor authentication</div>
                    <div className="text-muted-color">Require a verification code when signing in</div>
                </div>
                <Switch defaultChecked />
            </label>
        </div>
    );
}
```

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/ui/switch
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Switch } from '@/components/ui/switch';
```

```tsx
<Switch />
```

## Examples

### Basic

```tsx
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function BasicDemo() {
    return (
        <Label className="flex justify-center items-center gap-2">
            Off
            <Switch />
            On
        </Label>
    );
}
```

### Controlled

A controlled Switch requires managing the checked state with a state variable and handling the change event manually. This allows for complete control over the Switch's behavior.

```tsx
'use client';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { SwitchRootChangeEvent } from 'primereact/switch';
import React from 'react';

export default function ControlledDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <div className="flex justify-center items-center gap-2">
            <Switch inputId="mode" checked={checked} onCheckedChange={(event: SwitchRootChangeEvent) => setChecked(event.checked)} />
            <Label htmlFor="mode">Airplane Mode</Label>
        </div>
    );
}
```

### Uncontrolled

For an uncontrolled Switch component, `defaultChecked` is used to set the initial state, and the component manages its own state internally.

```tsx
import { Switch } from '@/components/ui/switch';

export default function UncontrolledDemo() {
    return (
        <div className="flex justify-center">
            <Switch defaultChecked />
        </div>
    );
}
```

### Template

`Switch` also allows displaying custom content inside itself.

```tsx
import { Switch } from '@/components/ui/switch';
import { Check, Times } from '@primeicons/react';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Switch className="group">
                <Times className="text-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-surface-400 dark:text-surface-600 group-data-checked:opacity-0 opacity-100 transition-opacity duration-200" />
                <Check className="text-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-primary group-data-checked:opacity-100 opacity-0 transition-opacity duration-200" />
            </Switch>
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. You can use this style when integrating with form validation libraries.

```tsx
'use client';
import { Switch } from '@/components/ui/switch';
import { SwitchChangeEvent } from 'primereact/switch';
import * as React from 'react';

export default function InvalidDemo() {
    const [checked, setChecked] = React.useState(false);

    return (
        <div className="flex justify-center">
            <Switch checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)} invalid={!checked} />
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { Switch } from '@/components/ui/switch';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Switch disabled />
        </div>
    );
}
```

## Accessibility

### Screen Reader

Switch component uses a hidden native checkbox element with switch role internally that is only visible to screen readers. Value to describe the component can either be provided via `label` tag combined with `id` prop or using `aria-labelledby`, `aria-label` props.

```tsx
<label htmlFor="switch1">Remember Me</label>
<Switch inputId="switch1" />

<span id="switch2">Remember Me</span>
<Switch aria-labelledby="switch2" />

<Switch aria-label="Remember Me" />
```

### Keyboard Support

| Key     | Function                   |
| ------- | -------------------------- |
| `tab`   | Moves focus to the switch. |
| `space` | Toggles the checked state. |
