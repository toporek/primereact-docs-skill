# Animations

Built-in CSS animations for PrimeReact components.

## Introduction

Various PrimeReact components utilize native CSS animations to provide an enhanced user experience. The default animations are based on the best practices recommended by usability experts. In case you need to customize them, this documentation covers the entire set of built-in animations.

Animations are defined using a combination of style classes and keyframes. The `.{classname}-enter-active` and `.{classname}-leave-active` classes specify the animation name, duration, and easing function. You can customize animations globally by overriding the default animation classes, affecting all components. Alternatively, you can apply scoped classes to individual components to modify their animations independently.

## Anchored Overlays

Anchored overlays are the components that have a floating UI positioned relative to another element such as `Select` and `Popover`. The enter and leave animations are defined with the `.p-anchored-overlay-enter-active` and `.p-anchored-overlay-leave-active` classes.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import * as React from 'react';

const cities = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
];

const css = `
.demo-anchored-overlay.p-anchored-overlay-enter-active {
    animation: demo-overlay-in 300ms ease-out;
}

.demo-anchored-overlay.p-anchored-overlay-leave-active {
    animation: demo-overlay-out 250ms ease-in;
}

@keyframes demo-overlay-in {
    from {
        opacity: 0;
        transform: translateY(10%);
    }
}

@keyframes demo-overlay-out {
    to {
        opacity: 0;
        transform: translateY(10%);
    }
}
`;

export default function AnchoredOverlaysDemo() {
    const [city, setCity] = React.useState<string>('');

    return (
        <div className="flex justify-center">
            <style>{css}</style>
            <Select.Root
                value={city}
                onValueChange={(e: SelectValueChangeEvent) => setCity(e.value as string)}
                options={cities}
                optionLabel="label"
                optionValue="value"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select" />
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup className="demo-anchored-overlay">
                            <Select.List />
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}

```

```css
.p-anchored-overlay-enter-active {
    animation: demo-overlay-in 300ms ease-out;
}

.p-anchored-overlay-leave-active {
    animation: demo-overlay-out 250ms ease-in;
}

@keyframes demo-overlay-in {
    from {
        opacity: 0;
        transform: translateY(10%);
    }
}

@keyframes demo-overlay-out {
    to {
        opacity: 0;
        transform: translateY(10%);
    }
}
```

## Collapsibles

Collapsible components have content that is toggleable including `Accordion`, `Panel`, `Fieldset` and `Stepper`. The enter and leave animations are defined with the `.p-collapsible-enter-active` and `.p-collapsible-leave-active` classes.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion } from '@primereact/ui/accordion';

const items = [
    {
        value: '1',
        title: 'Header I',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        value: '2',
        title: 'Header II',
        content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        value: '3',
        title: 'Header III',
        content:
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.'
    }
];

const css = `
.demo-collapsible.p-collapsible-enter-active {
    animation: demo-collapsible-expand 500ms cubic-bezier(0.65, 0, 0.35, 1);
}

.demo-collapsible.p-collapsible-leave-active {
    animation: demo-collapsible-collapse 500ms cubic-bezier(0.65, 0, 0.35, 1);
}

@keyframes demo-collapsible-expand {
    from {
        opacity: 0;
        grid-template-rows: 0fr;
        transform: scale(0.93);
    }
    to {
        opacity: 1;
        grid-template-rows: 1fr;
    }
}

@keyframes demo-collapsible-collapse {
    from {
        opacity: 1;
        grid-template-rows: 1fr;
    }
    to {
        opacity: 0;
        grid-template-rows: 0fr;
        transform: scale(0.93);
    }
}
`;

export default function CollapsiblesDemo() {
    return (
        <>
            <style>{css}</style>
            <Accordion.Root defaultValue="1" className="max-w-md mx-auto">
                {items.map((item) => (
                    <Accordion.Panel key={item.value} value={item.value}>
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full">
                                {item.title}
                                <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="demo-collapsible">
                            <p className="text-sm m-0">{item.content}</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion.Root>
        </>
    );
}

```

```css
.p-collapsible-enter-active {
    animation: demo-collapsible-expand 500ms cubic-bezier(0.65, 0, 0.35, 1);
}

.p-collapsible-leave-active {
    animation: demo-collapsible-collapse 500ms cubic-bezier(0.65, 0, 0.35, 1);
}

@keyframes demo-collapsible-expand {
    from {
        opacity: 0;
        grid-template-rows: 0fr;
        transform: scale(0.93);
    }
    to {
        opacity: 1;
        grid-template-rows: 1fr;
    }
}

@keyframes demo-collapsible-collapse {
    from {
        opacity: 1;
        grid-template-rows: 1fr;
    }
    to {
        opacity: 0;
        grid-template-rows: 0fr;
        transform: scale(0.93);
    }
}
```

## Dialog

Overlays such as `Dialog` and `Drawer` are positioned relative to the viewport and have their own animations, defined per component (e.g. `.p-dialog-enter-active` / `.p-dialog-leave-active` and `.p-drawer-enter-active` / `.p-drawer-leave-active`). The backdrop behind a modal uses `.p-overlay-mask-enter-active` / `.p-overlay-mask-leave-active`.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

const css = `
.demo-dialog.p-dialog-enter-active {
    animation: demo-dialog-in 500ms ease-out;
}

.demo-dialog.p-dialog-leave-active {
    animation: demo-dialog-out 500ms ease-in;
}

@keyframes demo-dialog-in {
    from {
        opacity: 0;
        transform: translateY(-10%) scale(1.1);
        filter: blur(10px);
    }
}

@keyframes demo-dialog-out {
    to {
        opacity: 0;
        transform: translateY(200%) rotate(-90deg);
    }
}
`;

export default function DialogDemo() {
    return (
        <div className="flex justify-center">
            <style>{css}</style>
            <Dialog.Root>
                <Dialog.Trigger as={Button}>Show</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Popup className="demo-dialog" style={{ width: '24rem' }}>
                            <Dialog.Header>
                                <Dialog.Title>Edit Profile</Dialog.Title>
                                <Dialog.HeaderActions>
                                    <Dialog.Close as={Button} rounded variant="text" iconOnly>
                                        <Times />
                                    </Dialog.Close>
                                </Dialog.HeaderActions>
                            </Dialog.Header>
                            <Dialog.Content>
                                <span className="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <Label htmlFor="username">Username</Label>
                                        <InputText id="username" autoComplete="off" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <InputText id="email" autoComplete="off" />
                                    </div>
                                </div>
                            </Dialog.Content>
                            <Dialog.Footer>
                                <Dialog.Close as={Button} severity="secondary" variant="text">
                                    Cancel
                                </Dialog.Close>
                                <Dialog.Close as={Button} variant="text">
                                    Save
                                </Dialog.Close>
                            </Dialog.Footer>
                        </Dialog.Popup>
                    </Dialog.Positioner>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}

```

```css
.p-dialog-enter-active {
    animation: demo-dialog-in 500ms ease-out;
}

.p-dialog-leave-active {
    animation: demo-dialog-out 500ms ease-in;
}

@keyframes demo-dialog-in {
    from {
        opacity: 0;
        transform: translateY(-10%) scale(1.1);
        filter: blur(10px);
    }
}

@keyframes demo-dialog-out {
    to {
        opacity: 0;
        transform: translateY(200%) rotate(-90deg);
    }
}
```

## Disable

Individual animations can be reduced and even disabled completely using the animation duration. Set the duration to `0s` on the relevant active class to turn an animation off.

```css
/* Disable the enter/leave animation of anchored overlays */
.p-anchored-overlay-enter-active,
.p-anchored-overlay-leave-active {
    animation-duration: 0s;
}
```

To respect users who prefer reduced motion, scope the override inside a media query.

```css
@media (prefers-reduced-motion: reduce) {
    .p-anchored-overlay-enter-active,
    .p-anchored-overlay-leave-active,
    .p-collapsible-enter-active,
    .p-collapsible-leave-active {
        animation: none;
    }
}
```

## Reference

List of class names of the CSS animations used by the components.

| Component    | Enter Class                        | Leave Class                        |
| ------------ | ---------------------------------- | ---------------------------------- |
| Accordion    | `.p-collapsible-enter-active`      | `.p-collapsible-leave-active`      |
| AutoComplete | `.p-anchored-overlay-enter-active` | `.p-anchored-overlay-leave-active` |
| ContextMenu  | `.p-anchored-overlay-enter-active` | `.p-anchored-overlay-leave-active` |
| DatePicker   | `.p-anchored-overlay-enter-active` | `.p-anchored-overlay-leave-active` |
| Dialog       | `.p-dialog-enter-active`           | `.p-dialog-leave-active`           |
| Drawer       | `.p-drawer-enter-active`           | `.p-drawer-leave-active`           |
| Fieldset     | `.p-collapsible-enter-active`      | `.p-collapsible-leave-active`      |
| Gallery      | `.p-gallery-enter-active`          | `.p-gallery-leave-active`          |
| Menu         | `.p-anchored-overlay-enter-active` | `.p-anchored-overlay-leave-active` |
| Message      | `.p-message-enter-active`          | `.p-message-leave-active`          |
| Modal Masks  | `.p-overlay-mask-enter-active`     | `.p-overlay-mask-leave-active`     |
| Panel        | `.p-collapsible-enter-active`      | `.p-collapsible-leave-active`      |
| Popover      | `.p-anchored-overlay-enter-active` | `.p-anchored-overlay-leave-active` |
| Select       | `.p-anchored-overlay-enter-active` | `.p-anchored-overlay-leave-active` |
| Stepper      | `.p-collapsible-enter-active`      | `.p-collapsible-leave-active`      |
| Tooltip      | `.p-anchored-overlay-enter-active` | `.p-anchored-overlay-leave-active` |
