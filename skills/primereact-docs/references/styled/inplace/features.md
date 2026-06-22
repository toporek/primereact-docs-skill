# Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

```tsx
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Divider } from '@primereact/ui/divider';
import { Inplace } from '@primereact/ui/inplace';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Password } from '@primereact/ui/password';

export default function Preview() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <div className="text-sm font-medium pl-2">Profile</div>
            <p className="text-sm text-surface-500 mt-1 pl-2">Update your profile settings.</p>
            <Divider.Root />
            <div className="space-y-4">
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                    <Inplace.Display className="w-full text-sm">John Doe</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Email</div>
                    <Inplace.Display className="w-full text-sm">john.doe@example.com</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <InputText placeholder="Enter email" className="flex-1" fluid autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Password</div>
                    <Inplace.Display className="w-full text-sm">********</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <Password placeholder="Enter password" className="flex-1" fluid mask={true} autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
            </div>
        </div>
    );
}
```

## Usage

```tsx
import { Inplace } from '@primereact/ui/inplace';
```

```tsx
<Inplace.Root>
    <Inplace.Display></Inplace.Display>
    <Inplace.Content></Inplace.Content>
</Inplace.Root>
```

## Examples

### Basic

Switches between a display and an edit mode on click.

```tsx
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Divider } from '@primereact/ui/divider';
import { Inplace } from '@primereact/ui/inplace';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Password } from '@primereact/ui/password';

export default function BasicDemo() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <div className="text-sm font-medium pl-2">Profile</div>
            <p className="text-sm text-surface-500 mt-1 pl-2">Update your profile settings.</p>
            <Divider.Root />
            <div className="space-y-4">
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                    <Inplace.Display className="w-full text-sm">John Doe</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Email</div>
                    <Inplace.Display className="w-full text-sm">john.doe@example.com</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <InputText placeholder="Enter email" className="flex-1" fluid autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
                <Inplace.Root>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Password</div>
                    <Inplace.Display className="w-full text-sm">********</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <Password placeholder="Enter password" className="flex-1" fluid mask={true} autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
            </div>
        </div>
    );
}
```

### Disabled

Use the `disabled` prop to disable the inplace content.

```tsx
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Divider } from '@primereact/ui/divider';
import { Inplace } from '@primereact/ui/inplace';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Password } from '@primereact/ui/password';

export default function DisabledDemo() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <div className="text-sm font-medium pl-2">Profile</div>
            <p className="text-sm text-surface-500 mt-1 pl-2">Update your profile settings.</p>
            <Divider.Root />
            <div className="space-y-4">
                <Inplace.Root disabled>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                    <Inplace.Display className="w-full text-sm">John Doe</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
                <Inplace.Root defaultActive>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Email</div>
                    <Inplace.Display className="w-full text-sm">john.doe@example.com</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <InputText placeholder="Enter email" className="flex-1" fluid />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger" disabled>
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
                <Inplace.Root disabled>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Password</div>
                    <Inplace.Display className="w-full text-sm">********</Inplace.Display>
                    <Inplace.Content className="flex items-center gap-1.5">
                        <InputGroup.Root>
                            <Password placeholder="Enter password" className="flex-1" fluid mask={true} autoFocus />
                            <InputGroup.Addon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon>
                                <Inplace.Close as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </Inplace.Close>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </Inplace.Content>
                </Inplace.Root>
            </div>
        </div>
    );
}
```

### Controlled

Use the `active` and `onActiveChange` props to control the inplace content.

```tsx
'use client';
import { InplaceRootChangeEvent } from 'primereact/inplace';
import { Button } from '@primereact/ui/button';
import { Inplace } from '@primereact/ui/inplace';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ControlledDemo() {
    const [active, setActive] = React.useState<boolean>(false);

    return (
        <div className="max-w-3xs mx-auto w-full">
            <Inplace.Root active={active} onActiveChange={(e: InplaceRootChangeEvent) => setActive(e.active)}>
                <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                <Inplace.Display className="w-full text-sm">John Doe</Inplace.Display>
                <Inplace.Content className="flex items-center gap-1.5">
                    <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                </Inplace.Content>
                <div className="flex items-center gap-2 mt-2">
                    <Button onClick={() => setActive((prev) => !prev)} className="flex-1" variant="outlined" severity="secondary">
                        {active ? 'Cancel' : 'Edit Name'}
                    </Button>
                    {active && (
                        <Inplace.Close as={Button} onClick={() => setActive(false)} className="flex-1" fluid variant="outlined">
                            Save
                        </Inplace.Close>
                    )}
                </div>
            </Inplace.Root>
        </div>
    );
}
```

### Image

Any content such as an image can be placed inside the `Inplace.Content` component.

```tsx
import { Image as ImageIcon } from '@primeicons/react';
import { Inplace } from '@primereact/ui/inplace';

export default function ImageDemo() {
    return (
        <Inplace.Root>
            <Inplace.Display>
                <ImageIcon className="mr-2" />
                <span>View Photo</span>
            </Inplace.Display>
            <Inplace.Content>
                <img className="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
            </Inplace.Content>
        </Inplace.Root>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/inplace/features.md#api) for sub-component documentation.

### Hooks

See [Headless API](../../headless/inplace/features.md#api) for hook documentation.

## Accessibility

See [Inplace Primitive](../../primitive/inplace/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
