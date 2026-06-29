# Inplace

Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.

```tsx
'use client';
import { Check, Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Inplace, InplaceClose, InplaceContent, InplaceDisplay } from '@/components/ui/inplace';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputText } from '@/components/ui/inputtext';
import { InputPassword } from '@/components/ui/inputpassword';

export default function Preview() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <div className="text-sm font-medium pl-2">Profile</div>
            <p className="text-sm text-surface-500 mt-1 pl-2">Update your profile settings.</p>
            <Divider />
            <div className="space-y-4">
                <Inplace>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                    <InplaceDisplay className="w-full text-sm">John Doe</InplaceDisplay>
                    <InplaceContent className="flex items-center gap-1.5">
                        <InputGroup>
                            <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                            <InputGroupAddon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroupAddon>
                            <InputGroupAddon>
                                <InplaceClose as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </InplaceClose>
                            </InputGroupAddon>
                        </InputGroup>
                    </InplaceContent>
                </Inplace>
                <Inplace>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Email</div>
                    <InplaceDisplay className="w-full text-sm">john.doe@example.com</InplaceDisplay>
                    <InplaceContent className="flex items-center gap-1.5">
                        <InputGroup>
                            <InputText placeholder="Enter email" className="flex-1" fluid autoFocus />
                            <InputGroupAddon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroupAddon>
                            <InputGroupAddon>
                                <InplaceClose as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </InplaceClose>
                            </InputGroupAddon>
                        </InputGroup>
                    </InplaceContent>
                </Inplace>
                <Inplace>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Password</div>
                    <InplaceDisplay className="w-full text-sm">********</InplaceDisplay>
                    <InplaceContent className="flex items-center gap-1.5">
                        <InputGroup>
                            <InputPassword placeholder="Enter password" className="flex-1" fluid mask={true} autoFocus />
                            <InputGroupAddon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroupAddon>
                            <InputGroupAddon>
                                <InplaceClose as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </InplaceClose>
                            </InputGroupAddon>
                        </InputGroup>
                    </InplaceContent>
                </Inplace>
            </div>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/inplace.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Inplace, InplaceClose, InplaceContent, InplaceDisplay } from '@/components/ui/inplace';
```

```tsx
<Inplace>
    <InplaceDisplay>Click to Edit</InplaceDisplay>
    <InplaceContent>
        <InputText />
    </InplaceContent>
</Inplace>
```

## Examples

### Basic

Switches between a display and an edit mode on click.

```tsx
'use client';
import { Check, Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Inplace, InplaceDisplay, InplaceContent, InplaceClose } from '@/components/ui/inplace';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputText } from '@/components/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <Inplace>
                <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                <InplaceDisplay className="w-full text-sm">John Doe</InplaceDisplay>
                <InplaceContent className="flex items-center gap-1.5">
                    <InputGroup>
                        <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                        <InputGroupAddon>
                            <Button iconOnly variant="text" severity="success">
                                <Check />
                            </Button>
                        </InputGroupAddon>
                        <InputGroupAddon>
                            <InplaceClose as={Button} iconOnly variant="text" severity="danger">
                                <Times />
                            </InplaceClose>
                        </InputGroupAddon>
                    </InputGroup>
                </InplaceContent>
            </Inplace>
        </div>
    );
}

```

### Disabled

Use the `disabled` prop to disable the inplace content.

```tsx
'use client';
import { Check, Times } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Inplace, InplaceDisplay, InplaceContent, InplaceClose } from '@/components/ui/inplace';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import { InputText } from '@/components/ui/inputtext';
import { InputPassword } from '@/components/ui/inputpassword';

export default function DisabledDemo() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <div className="text-sm font-medium pl-2">Profile</div>
            <p className="text-sm text-surface-500 mt-1 pl-2">Update your profile settings.</p>
            <Divider />
            <div className="space-y-4">
                <Inplace disabled>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                    <InplaceDisplay className="w-full text-sm">John Doe</InplaceDisplay>
                    <InplaceContent className="flex items-center gap-1.5">
                        <InputGroup>
                            <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                            <InputGroupAddon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroupAddon>
                            <InputGroupAddon>
                                <InplaceClose as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </InplaceClose>
                            </InputGroupAddon>
                        </InputGroup>
                    </InplaceContent>
                </Inplace>
                <Inplace defaultActive>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Email</div>
                    <InplaceDisplay className="w-full text-sm">john.doe@example.com</InplaceDisplay>
                    <InplaceContent className="flex items-center gap-1.5">
                        <InputGroup>
                            <InputText placeholder="Enter email" className="flex-1" fluid />
                            <InputGroupAddon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroupAddon>
                            <InputGroupAddon>
                                <InplaceClose as={Button} iconOnly variant="text" severity="danger" disabled>
                                    <Times />
                                </InplaceClose>
                            </InputGroupAddon>
                        </InputGroup>
                    </InplaceContent>
                </Inplace>
                <Inplace disabled>
                    <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Password</div>
                    <InplaceDisplay className="w-full text-sm">********</InplaceDisplay>
                    <InplaceContent className="flex items-center gap-1.5">
                        <InputGroup>
                            <InputPassword placeholder="Enter password" className="flex-1" fluid mask={true} autoFocus />
                            <InputGroupAddon>
                                <Button iconOnly variant="text" severity="success">
                                    <Check />
                                </Button>
                            </InputGroupAddon>
                            <InputGroupAddon>
                                <InplaceClose as={Button} iconOnly variant="text" severity="danger">
                                    <Times />
                                </InplaceClose>
                            </InputGroupAddon>
                        </InputGroup>
                    </InplaceContent>
                </Inplace>
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
import { Button } from '@/components/ui/button';
import { Inplace, InplaceDisplay, InplaceContent, InplaceClose } from '@/components/ui/inplace';
import { InputText } from '@/components/ui/inputtext';
import * as React from 'react';

export default function ControlledDemo() {
    const [active, setActive] = React.useState<boolean>(false);

    return (
        <div className="max-w-3xs mx-auto w-full">
            <Inplace active={active} onActiveChange={(e: InplaceRootChangeEvent) => setActive(e.active)}>
                <div className="font-mono uppercase text-xs opacity-50 pl-2 mb-1">Name</div>
                <InplaceDisplay className="w-full text-sm">John Doe</InplaceDisplay>
                <InplaceContent className="flex items-center gap-1.5">
                    <InputText placeholder="Enter name" className="flex-1" fluid autoFocus />
                </InplaceContent>
                <div className="flex items-center gap-2 mt-2">
                    <Button onClick={() => setActive((prev) => !prev)} className="flex-1" variant="outlined" severity="secondary">
                        {active ? 'Cancel' : 'Edit Name'}
                    </Button>
                    {active && (
                        <InplaceClose as={Button} onClick={() => setActive(false)} className="flex-1" fluid variant="outlined">
                            Save
                        </InplaceClose>
                    )}
                </div>
            </Inplace>
        </div>
    );
}

```

### Image

Any content such as an image can be placed inside the `InplaceContent` component.

```tsx
import { Image as ImageIcon } from '@primeicons/react';
import { Inplace, InplaceDisplay, InplaceContent } from '@/components/ui/inplace';

export default function ImageDemo() {
    return (
        <Inplace>
            <InplaceDisplay>
                <ImageIcon className="mr-2" />
                <span>View Photo</span>
            </InplaceDisplay>
            <InplaceContent>
                <img className="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
            </InplaceContent>
        </Inplace>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inplace.md#api) for sub-component documentation.

### Hooks

See [Headless API](../../headless/components/inplace.md#api) for hook documentation.

### Accessibility

See [Inplace Primitive](../../primitive/components/inplace.md#accessibility) for WAI-ARIA compliance details and keyboard support.
