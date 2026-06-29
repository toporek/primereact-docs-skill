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
import { InputPassword } from '@primereact/ui/inputpassword';

export default function Preview() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <div className="text-sm font-medium pl-2">Profile</div>
            <p className="text-sm text-surface-500 mt-1 pl-2">Update your profile settings.</p>
            <Divider />
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
                            <InputPassword placeholder="Enter password" className="flex-1" fluid mask={true} autoFocus />
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
import { Inplace } from '@primereact/ui/inplace';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="max-w-3xs mx-auto w-full">
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
import { InputPassword } from '@primereact/ui/inputpassword';

export default function DisabledDemo() {
    return (
        <div className="max-w-3xs mx-auto w-full">
            <div className="text-sm font-medium pl-2">Profile</div>
            <p className="text-sm text-surface-500 mt-1 pl-2">Update your profile settings.</p>
            <Divider />
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
                            <InputPassword placeholder="Enter password" className="flex-1" fluid mask={true} autoFocus />
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
import { InplaceRootChangeEvent } from '@primereact/ui/inplace';
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

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inplace.md#api) for sub-component documentation.

### Hooks

See [Headless API](../../headless/components/inplace.md#api) for hook documentation.

### Accessibility

See [Inplace Primitive](../../primitive/components/inplace.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inplace | Class name of the root element |
| p-inplace-display | Class name of the display element |
| p-inplace-content | Class name of the content element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inplace.padding | --p-inplace-padding | Padding of root |
| inplace.border.radius | --p-inplace-border-radius | Border radius of root |
| inplace.focus.ring.width | --p-inplace-focus-ring-width | Focus ring width of root |
| inplace.focus.ring.style | --p-inplace-focus-ring-style | Focus ring style of root |
| inplace.focus.ring.color | --p-inplace-focus-ring-color | Focus ring color of root |
| inplace.focus.ring.offset | --p-inplace-focus-ring-offset | Focus ring offset of root |
| inplace.focus.ring.shadow | --p-inplace-focus-ring-shadow | Focus ring shadow of root |
| inplace.transition.duration | --p-inplace-transition-duration | Transition duration of root |
| inplace.display.hover.background | --p-inplace-display-hover-background | Hover background of display |
| inplace.display.hover.color | --p-inplace-display-hover-color | Hover color of display |
