# Switch

Switch is used to select a boolean value.

```tsx
import { Divider } from '@primereact/ui/divider';
import { Switch } from '@primereact/ui/switch';

export default function Preview() {
    return (
        <div className="flex flex-col justify-center items-center gap-2 max-w-xs mx-auto w-full ">
            <label className="flex items-center justify-between gap-12  select-none">
                <div className="flex-1">
                    <div className="text-color font-bold">Email address</div>
                    <div className="text-muted-color">Users can add email addresses to their account</div>
                </div>
                <Switch.Root>
                    <Switch.Control>
                        <Switch.Thumb />
                    </Switch.Control>
                </Switch.Root>
            </label>
            <Divider.Root />
            <label className="flex items-center justify-between gap-12 select-none">
                <div className="flex-1">
                    <div className="text-color font-bold">Two-factor authentication</div>
                    <div className="text-muted-color">Require a verification code when signing in</div>
                </div>
                <Switch.Root defaultChecked>
                    <Switch.Control>
                        <Switch.Thumb />
                    </Switch.Control>
                </Switch.Root>
            </label>
        </div>
    );
}
```

## Usage

```tsx
import { Switch } from '@primereact/ui/switch';
```

```tsx
<Switch.Root>
    <Switch.Control>
        <Switch.Thumb />
    </Switch.Control>
</Switch.Root>
```

## Examples

### Basic

Toggles a boolean setting between enabled and disabled states.

```tsx
import { Switch } from '@primereact/ui/switch';

export default function BasicDemo() {
    return (
        <div className="flex justify-center items-center gap-2">
            <label htmlFor="switch">Off</label>
            <Switch.Root inputId="switch">
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
            <label htmlFor="switch">On</label>
        </div>
    );
}
```

### Controlled

A controlled Switch requires managing the checked state with a state variable and handling the change event manually. This allows for complete control over the Switch's behavior.

```tsx
'use client';
import { SwitchChangeEvent } from 'primereact/switch';
import { Switch } from '@primereact/ui/switch';
import React from 'react';

export default function ControlledDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <div className="flex justify-center items-center gap-2">
            <Switch.Root inputId="mode" checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)}>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
            <label htmlFor="mode">Airplane Mode</label>
        </div>
    );
}
```

### Uncontrolled

For an uncontrolled Switch component, `defaultChecked` is used to set the initial state, and the component manages its own state internally.

```tsx
import { Switch } from '@primereact/ui/switch';

export default function UncontrolledDemo() {
    return (
        <div className="flex justify-center">
            <Switch.Root defaultChecked>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
        </div>
    );
}
```

### Template

`Switch.Thumb` also allows displaying custom content inside itself.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Switch, type SwitchThumbInstance } from '@primereact/ui/switch';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Switch.Root>
                <Switch.Control>
                    <Switch.Thumb>
                        {(instance: SwitchThumbInstance) => {
                            const { switch: switchContext } = instance;

                            return <>{switchContext?.state.checked ? <Check /> : <Times />}</>;
                        }}
                    </Switch.Thumb>
                </Switch.Control>
            </Switch.Root>
        </div>
    );
}
```

### Customization

`Switch` component supports customization through CSS classes. The appearance, including colors and other visual properties, can be modified by applying custom classes to the component.

```tsx
'use client';
import { SwitchChangeEvent } from 'primereact/switch';
import { Switch } from '@primereact/ui/switch';
import * as React from 'react';

export default function CustomizationDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <div className="flex justify-center items-center gap-2">
            <label
                htmlFor="custom"
                className="flex items-center gap-2 bg-surface-50 hover:bg-surface-100 dark:bg-slate-700 hover:dark:bg-slate-800 p-4 rounded-md"
            >
                <div className="flex flex-col gap-1">
                    <p className="m-0 text-medium">Try Beta Features</p>
                    <p className="m-0 text-sm text-slate-400">Experience upcoming features before they&apos;re officially released.</p>
                </div>

                <Switch.Root inputId="custom" checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)}>
                    <Switch.Control className={`${checked ? 'bg-blue-300' : 'bg-surface-300 dark:bg-surface-500'} rounded-md`}>
                        <Switch.Thumb className="bg-blue-900" />
                    </Switch.Control>
                </Switch.Root>
            </label>
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { SwitchChangeEvent } from 'primereact/switch';
import { Switch } from '@primereact/ui/switch';
import * as React from 'react';

export default function InvalidDemo() {
    const [checked, setChecked] = React.useState(false);

    return (
        <div className="flex justify-center">
            <Switch.Root checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)} invalid={!checked}>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { Switch } from '@primereact/ui/switch';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Switch.Root disabled>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [Switch Primitive](../../primitive/switch/features.md#api) for the full sub-component API.

### Hooks

See [useSwitch](../../headless/switch/features.md#api) for the headless hook API.

## Accessibility

See [Switch Primitive](../../primitive/switch/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
