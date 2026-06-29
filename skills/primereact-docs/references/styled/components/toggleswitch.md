# ToggleSwitch

ToggleSwitch is used to select a boolean value.

```tsx
import { Divider } from '@primereact/ui/divider';
import { ToggleSwitch } from '@primereact/ui/toggleswitch';

export default function Preview() {
    return (
        <div className="flex flex-col justify-center items-center gap-2 max-w-xs mx-auto w-full ">
            <label className="flex items-center justify-between gap-12  select-none">
                <div className="flex-1">
                    <div className="text-color font-bold">Email address</div>
                    <div className="text-muted-color">Users can add email addresses to their account</div>
                </div>
                <ToggleSwitch.Root>
                    <ToggleSwitch.Control>
                        <ToggleSwitch.Handle />
                    </ToggleSwitch.Control>
                </ToggleSwitch.Root>
            </label>
            <Divider />
            <label className="flex items-center justify-between gap-12 select-none">
                <div className="flex-1">
                    <div className="text-color font-bold">Two-factor authentication</div>
                    <div className="text-muted-color">Require a verification code when signing in</div>
                </div>
                <ToggleSwitch.Root defaultChecked>
                    <ToggleSwitch.Control>
                        <ToggleSwitch.Handle />
                    </ToggleSwitch.Control>
                </ToggleSwitch.Root>
            </label>
        </div>
    );
}

```

## Usage

```tsx
import { ToggleSwitch } from '@primereact/ui/toggleswitch';
```

```tsx
<ToggleSwitch.Root>
    <ToggleSwitch.Control>
        <ToggleSwitch.Handle />
    </ToggleSwitch.Control>
</ToggleSwitch.Root>
```

## Examples

### Basic

Toggles a boolean setting between enabled and disabled states.

```tsx
import { ToggleSwitch } from '@primereact/ui/toggleswitch';

export default function BasicDemo() {
    return (
        <div className="flex justify-center items-center gap-2">
            <label htmlFor="switch">Off</label>
            <ToggleSwitch.Root inputId="switch">
                <ToggleSwitch.Control>
                    <ToggleSwitch.Handle />
                </ToggleSwitch.Control>
            </ToggleSwitch.Root>
            <label htmlFor="switch">On</label>
        </div>
    );
}

```

### Controlled

A controlled ToggleSwitch requires managing the checked state with a state variable and handling the change event manually. This allows for complete control over the ToggleSwitch's behavior.

```tsx
'use client';
import { ToggleSwitchRootChangeEvent } from '@primereact/ui/toggleswitch';
import { ToggleSwitch } from '@primereact/ui/toggleswitch';
import React from 'react';

export default function ControlledDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <div className="flex justify-center items-center gap-2">
            <ToggleSwitch.Root inputId="mode" checked={checked} onCheckedChange={(event: ToggleSwitchRootChangeEvent) => setChecked(event.checked)}>
                <ToggleSwitch.Control>
                    <ToggleSwitch.Handle />
                </ToggleSwitch.Control>
            </ToggleSwitch.Root>
            <label htmlFor="mode">Airplane Mode</label>
        </div>
    );
}

```

### Uncontrolled

For an uncontrolled ToggleSwitch component, `defaultChecked` is used to set the initial state, and the component manages its own state internally.

```tsx
import { ToggleSwitch } from '@primereact/ui/toggleswitch';

export default function UncontrolledDemo() {
    return (
        <div className="flex justify-center">
            <ToggleSwitch.Root defaultChecked>
                <ToggleSwitch.Control>
                    <ToggleSwitch.Handle />
                </ToggleSwitch.Control>
            </ToggleSwitch.Root>
        </div>
    );
}

```

### Template

`ToggleSwitch.Handle` also allows displaying custom content inside itself.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { ToggleSwitch, type ToggleSwitchHandleInstance } from '@primereact/ui/toggleswitch';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <ToggleSwitch.Root>
                <ToggleSwitch.Control>
                    <ToggleSwitch.Handle>
                        {(instance: ToggleSwitchHandleInstance) => {
                            const { toggleSwitch: toggleSwitchContext } = instance;

                            return <>{toggleSwitchContext?.state.checked ? <Check /> : <Times />}</>;
                        }}
                    </ToggleSwitch.Handle>
                </ToggleSwitch.Control>
            </ToggleSwitch.Root>
        </div>
    );
}

```

### Customization

`ToggleSwitch` component supports customization through CSS classes. The appearance, including colors and other visual properties, can be modified by applying custom classes to the component.

```tsx
'use client';
import { ToggleSwitch } from '@primereact/ui/toggleswitch';
import { ToggleSwitchRootChangeEvent } from '@primereact/ui/toggleswitch';
import * as React from 'react';

export default function CustomizationDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <label
            htmlFor="custom"
            className="max-w-xs mx-auto flex items-start gap-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 hover:dark:bg-slate-700 p-4 rounded-md transition-colors"
        >
            <div className="flex flex-col gap-1 flex-1">
                <p className="text-medium text-slate-900 dark:text-slate-50">Try Beta Features</p>
                <p className="text-sm text-slate-400">Experience upcoming features before they&apos;re officially released.</p>
            </div>

            <ToggleSwitch.Root inputId="custom" checked={checked} onCheckedChange={(event: ToggleSwitchRootChangeEvent) => setChecked(event.checked)}>
                <ToggleSwitch.Control className="data-checked:bg-blue-300! bg-slate-300! dark:bg-slate-600! rounded-md!">
                    <ToggleSwitch.Handle className="bg-slate-500! data-checked:bg-blue-900!" />
                </ToggleSwitch.Control>
            </ToggleSwitch.Root>
        </label>
    );
}

```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { ToggleSwitchRootChangeEvent } from '@primereact/ui/toggleswitch';
import { ToggleSwitch } from '@primereact/ui/toggleswitch';
import * as React from 'react';

export default function InvalidDemo() {
    const [checked, setChecked] = React.useState(false);

    return (
        <div className="flex justify-center">
            <ToggleSwitch.Root
                checked={checked}
                onCheckedChange={(event: ToggleSwitchRootChangeEvent) => setChecked(event.checked)}
                invalid={!checked}
            >
                <ToggleSwitch.Control>
                    <ToggleSwitch.Handle />
                </ToggleSwitch.Control>
            </ToggleSwitch.Root>
        </div>
    );
}

```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { ToggleSwitch } from '@primereact/ui/toggleswitch';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <ToggleSwitch.Root disabled>
                <ToggleSwitch.Control>
                    <ToggleSwitch.Handle />
                </ToggleSwitch.Control>
            </ToggleSwitch.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [ToggleSwitch Primitive](../../primitive/components/toggleswitch.md#api) for the full sub-component API.

### Hooks

See [useToggleSwitch](../../headless/components/toggleswitch.md#api) for the headless hook API.

### Accessibility

See [ToggleSwitch Primitive](../../primitive/components/toggleswitch.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-toggleswitch | Class name of the root element |
| p-toggleswitch-input | Class name of the input element |
| p-toggleswitch-slider | Class name of the control element |
| p-toggleswitch-handle | Class name of the handle element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| toggleswitch.width | --p-toggleswitch-width | Width of root |
| toggleswitch.height | --p-toggleswitch-height | Height of root |
| toggleswitch.border.radius | --p-toggleswitch-border-radius | Border radius of root |
| toggleswitch.gap | --p-toggleswitch-gap | Gap of root |
| toggleswitch.shadow | --p-toggleswitch-shadow | Shadow of root |
| toggleswitch.focus.ring.width | --p-toggleswitch-focus-ring-width | Focus ring width of root |
| toggleswitch.focus.ring.style | --p-toggleswitch-focus-ring-style | Focus ring style of root |
| toggleswitch.focus.ring.color | --p-toggleswitch-focus-ring-color | Focus ring color of root |
| toggleswitch.focus.ring.offset | --p-toggleswitch-focus-ring-offset | Focus ring offset of root |
| toggleswitch.focus.ring.shadow | --p-toggleswitch-focus-ring-shadow | Focus ring shadow of root |
| toggleswitch.border.width | --p-toggleswitch-border-width | Border width of root |
| toggleswitch.border.color | --p-toggleswitch-border-color | Border color of root |
| toggleswitch.hover.border.color | --p-toggleswitch-hover-border-color | Hover border color of root |
| toggleswitch.checked.border.color | --p-toggleswitch-checked-border-color | Checked border color of root |
| toggleswitch.checked.hover.border.color | --p-toggleswitch-checked-hover-border-color | Checked hover border color of root |
| toggleswitch.invalid.border.color | --p-toggleswitch-invalid-border-color | Invalid border color of root |
| toggleswitch.transition.duration | --p-toggleswitch-transition-duration | Transition duration of root |
| toggleswitch.slide.duration | --p-toggleswitch-slide-duration | Slide duration of root |
| toggleswitch.background | --p-toggleswitch-background | Background of root |
| toggleswitch.disabled.background | --p-toggleswitch-disabled-background | Disabled background of root |
| toggleswitch.hover.background | --p-toggleswitch-hover-background | Hover background of root |
| toggleswitch.checked.background | --p-toggleswitch-checked-background | Checked background of root |
| toggleswitch.checked.hover.background | --p-toggleswitch-checked-hover-background | Checked hover background of root |
| toggleswitch.handle.border.radius | --p-toggleswitch-handle-border-radius | Border radius of handle |
| toggleswitch.handle.size | --p-toggleswitch-handle-size | Size of handle |
| toggleswitch.handle.background | --p-toggleswitch-handle-background | Background of handle |
| toggleswitch.handle.disabled.background | --p-toggleswitch-handle-disabled-background | Disabled background of handle |
| toggleswitch.handle.hover.background | --p-toggleswitch-handle-hover-background | Hover background of handle |
| toggleswitch.handle.checked.background | --p-toggleswitch-handle-checked-background | Checked background of handle |
| toggleswitch.handle.checked.hover.background | --p-toggleswitch-handle-checked-hover-background | Checked hover background of handle |
| toggleswitch.handle.color | --p-toggleswitch-handle-color | Color of handle |
| toggleswitch.handle.hover.color | --p-toggleswitch-handle-hover-color | Hover color of handle |
| toggleswitch.handle.checked.color | --p-toggleswitch-handle-checked-color | Checked color of handle |
| toggleswitch.handle.checked.hover.color | --p-toggleswitch-handle-checked-hover-color | Checked hover color of handle |
