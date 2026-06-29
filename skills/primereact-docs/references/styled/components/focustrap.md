# FocusTrap

Focus Trap keeps focus within a certain DOM element while tabbing.

```tsx
import { Check } from '@primeicons/react/check';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function Preview() {
    return (
        <FocusTrap className="max-w-xs mx-auto space-y-4">
            <h5 className="font-medium">Register</h5>
            <InputText id="input" type="text" placeholder="Name" fluid />

            <InputText id="email" type="email" placeholder="Email" fluid />

            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="basic-checkbox">
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="accept">I agree to the terms and conditions.</Label>
            </div>

            <Button type="submit" className="w-full">
                Submit
            </Button>
        </FocusTrap>
    );
}

```

## Usage

```tsx
import { FocusTrap } from '@primereact/ui/focustrap';
```

```tsx
<FocusTrap></FocusTrap>
```

## Examples

### Basic

Keeps keyboard focus within a defined region for accessibility.

```tsx
import { Button } from '@primereact/ui/button';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputPassword } from '@primereact/ui/inputpassword';

export default function BasicDemo() {
    return (
        <FocusTrap className="max-w-xs mx-auto space-y-3">
            <h5 className="font-medium">Forgot Password</h5>

            <InputPassword id="password" placeholder="Password" fluid />

            <Button type="submit" className="w-full">
                Submit
            </Button>
        </FocusTrap>
    );
}

```

### Trapped

The `trapped` prop controls whether focus is confined within the container. Set to `false` to release focus and allow normal tab navigation.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputText } from '@primereact/ui/inputtext';
import { useState } from 'react';

export default function DisabledDemo() {
    const [trapped, setTrapped] = useState(true);

    return (
        <div className="space-y-4">
            <div className="flex justify-center">
                <Button onClick={() => setTrapped((prev) => !prev)} severity={trapped ? 'primary' : 'secondary'}>
                    {trapped ? 'Release Focus' : 'Trap Focus'}
                </Button>
            </div>
            <FocusTrap trapped={trapped} className="max-w-xs mx-auto space-y-4 p-4 rounded-lg border border-surface-200">
                <InputText type="text" placeholder="First Name" fluid />
                <InputText type="text" placeholder="Last Name" fluid />
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </FocusTrap>
        </div>
    );
}

```

### Initial Focus

Use `initialFocusRef` to direct focus to a specific element when the trap activates. Alternatively, add `data-autofocus` to a focusable element to mark the initial focus target.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputText } from '@primereact/ui/inputtext';
import { useRef } from 'react';

export default function InitialFocusDemo() {
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <FocusTrap initialFocusRef={passwordRef} className="max-w-xs mx-auto space-y-4">
            <InputText type="text" placeholder="Username" fluid />
            <InputText ref={passwordRef} type="password" placeholder="Password (initial focus)" fluid />
            <Button type="submit" className="w-full">
                Sign In
            </Button>
        </FocusTrap>
    );
}

```

### On Escape

The `onEscape` callback fires when the Escape key is pressed inside the trap, useful for deactivating the trap or closing overlays.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputText } from '@primereact/ui/inputtext';
import { useState } from 'react';

export default function OnEscapeDemo() {
    const [trapped, setTrapped] = useState(true);

    return (
        <div className="space-y-4">
            {!trapped && (
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-muted-color">Focus trap released by pressing Escape.</p>
                    <Button onClick={() => setTrapped(true)} size="small">
                        Reactivate
                    </Button>
                </div>
            )}
            <FocusTrap
                trapped={trapped}
                onEscape={() => setTrapped(false)}
                className="max-w-xs mx-auto space-y-4 p-4 rounded-lg border border-surface-200"
            >
                <p className="text-sm text-muted-color">Press Escape to release focus.</p>
                <InputText type="text" placeholder="Name" fluid />
                <InputText type="email" placeholder="Email" fluid />
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </FocusTrap>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/focustrap.md#api) for `FocusTrap` component documentation.

### Hooks

See [Headless API](../../headless/components/focustrap.md#api) for `useFocusTrap` hook documentation.

### Accessibility

See [FocusTrap Primitive](../../primitive/components/focustrap.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

> **API/props table for `FocusTrap` (`style`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### Design Tokens

List of design tokens.

> **API/props table for `FocusTrap` (`token`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)
