# Accordion

Accordion groups content into collapsible panels.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion } from '@primereact/ui/accordion';

export default function Preview() {
    return (
        <Accordion.Root className="max-w-md mx-auto">
            <Accordion.Panel value="1">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        About the role and team
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        Join our product team as a Senior Frontend Engineer to shape the next generation of our design system. You will work closely
                        with designers and product managers to deliver polished, accessible interfaces.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel value="2">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        Day-to-day responsibilities
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        Build reusable components, drive technical decisions across the frontend stack, mentor junior engineers, and contribute to
                        architecture reviews and engineering best practices.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel value="3">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        What we are looking for
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        5+ years of experience with React and TypeScript, strong understanding of modern CSS, and a passion for building accessible,
                        performant user interfaces at scale.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel value="4">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        Compensation and benefits
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        Competitive salary, equity, fully remote setup, generous paid time off, learning stipend, and a yearly company offsite to meet
                        the team in person.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion.Root>
    );
}

```

## Usage

```tsx
import { Accordion } from '@primereact/ui/accordion';
```

```tsx
<Accordion.Root>
    <Accordion.Panel>
        <Accordion.Header>
            <Accordion.Trigger>
                <Accordion.Indicator />
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content />
    </Accordion.Panel>
</Accordion.Root>
```

## Examples

### Basic

A simple accordion with expandable panels controlled via the `value` prop.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion } from '@primereact/ui/accordion';

export default function BasicDemo() {
    return (
        <Accordion.Root className="max-w-md mx-auto">
            <Accordion.Panel value="1">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        What is this service about?
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful
                        analytics.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel value="2">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        Is my data secure?
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                        stored on secure servers and regularly backed up.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel value="3">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        Can I upgrade or downgrade my plan later?
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and
                        any billing adjustments are handled automatically.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion.Root>
    );
}

```

### Multiple

Each `Accordion.Panel` should define a unique `value`. By default, a single panel is open at a time. Enable `multiple` on `Accordion.Root` to allow multiple panels to stay open.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion } from '@primereact/ui/accordion';

export default function MultipleDemo() {
    return (
        <Accordion.Root multiple className="max-w-md mx-auto">
            <Accordion.Panel value="1">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        What is this service about?
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful
                        analytics. Whether you`re working solo or in a team, it`s built to scale with your needs.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel value="2">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        Is my data secure?
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                        stored on secure servers and regularly backed up.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel value="3">
                <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                        Can I upgrade or downgrade my plan later?
                        <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    <p className="text-sm">
                        Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and
                        any billing adjustments are handled automatically.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion.Root>
    );
}

```

### Controlled

Control the active panel state with `value` and `onValueChange`.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion, type AccordionRootValueChangeEvent } from '@primereact/ui/accordion';
import { Button } from '@primereact/ui/button';
import { useState } from 'react';

export default function ControlledDemo() {
    const [activePanel, setActivePanel] = useState<string | null>('1');

    return (
        <div className="space-y-4">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setActivePanel('1')} severity={activePanel === '1' ? 'primary' : 'secondary'}>
                    Panel 1
                </Button>
                <Button onClick={() => setActivePanel('2')} severity={activePanel === '2' ? 'primary' : 'secondary'}>
                    Panel 2
                </Button>
                <Button onClick={() => setActivePanel('3')} severity={activePanel === '3' ? 'primary' : 'secondary'}>
                    Panel 3
                </Button>
                <Button onClick={() => setActivePanel(null)} severity="danger">
                    Close All
                </Button>
            </div>
            <Accordion.Root
                className="max-w-md mx-auto"
                value={activePanel}
                onValueChange={(e: AccordionRootValueChangeEvent) => setActivePanel(e.value as string | null)}
            >
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            What is this service about?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and
                            powerful analytics.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Is my data secure?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                            stored on secure servers and regularly backed up.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="3">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Can I upgrade or downgrade my plan later?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately,
                            and any billing adjustments are handled automatically.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion.Root>
        </div>
    );
}

```

### Trigger

Use `Accordion.Trigger` to toggle content visibility. You can customize it with a render function that receives `accordionpanel`, or style it using `data-content-open`.

```tsx
'use client';
import { Plus } from '@primeicons/react/plus';
import { Accordion } from '@primereact/ui/accordion';
import { Button } from '@primereact/ui/button';

export default function TriggerDemo() {
    return (
        <div>
            <Accordion.Root className="max-w-md mx-auto" multiple>
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full group">
                            What is this service about?
                            <Plus className="group-[[data-content-open]>&]:rotate-45 transition-transform ease-out" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and
                            powerful analytics. Whether you&apos;re working solo or in a team, it&apos;s built to scale with your needs.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header className="flex items-center justify-between gap-4 p-4">
                        <span>Is my data secure?</span>
                        <Accordion.Trigger as={Button} variant="outlined" size="small">
                            <Accordion.Indicator match="closed">Show</Accordion.Indicator>
                            <Accordion.Indicator match="open">Hide</Accordion.Indicator>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                            stored on secure servers and regularly backed up.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="3">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-start items-center w-full gap-2">
                            <Plus className="[[data-content-open]>&]:rotate-45 transition-transform ease-out" />
                            Can I upgrade or downgrade my plan later?
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately,
                            and any billing adjustments are handled automatically.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion.Root>
        </div>
    );
}

```

### Indicator

`Accordion.Indicator` supports conditional rendering based on panel state. Use the `match` prop to render content only when the state matches.

```tsx
<Accordion.Header>
    <Accordion.Trigger>
        <Accordion.Indicator match="open">
            <Minus />
        </Accordion.Indicator>
        <Accordion.Indicator match="closed">
            <Plus />
        </Accordion.Indicator>
    </Accordion.Trigger>
</Accordion.Header>
```

Available values: `open`, `closed`. Without the `match` prop, the indicator renders in all states.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';
import { Accordion } from '@primereact/ui/accordion';

export default function IndicatorDemo() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">Match open / closed</h3>
                <Accordion.Root className="max-w-md mx-auto">
                    <Accordion.Panel value="1">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full">
                                What is this service about?
                                <Accordion.Indicator match="open">
                                    <Minus />
                                </Accordion.Indicator>
                                <Accordion.Indicator match="closed">
                                    <Plus />
                                </Accordion.Indicator>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className="text-sm">
                                This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and
                                powerful analytics. Whether you&apos;re working solo or in a team, it&apos;s built to scale with your needs.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel value="2">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full">
                                Is my data secure?
                                <Accordion.Indicator match="open">
                                    <Minus />
                                </Accordion.Indicator>
                                <Accordion.Indicator match="closed">
                                    <Plus />
                                </Accordion.Indicator>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className="text-sm">
                                Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your
                                information is stored on secure servers and regularly backed up.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel value="3">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full">
                                Can I upgrade or downgrade my plan later?
                                <Accordion.Indicator match="open">
                                    <Minus />
                                </Accordion.Indicator>
                                <Accordion.Indicator match="closed">
                                    <Plus />
                                </Accordion.Indicator>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className="text-sm">
                                Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect
                                immediately, and any billing adjustments are handled automatically.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion.Root>
            </div>

            <div>
                <h3 className="text-sm font-medium text-surface-500 mb-2">CSS-only with data attributes</h3>
                <Accordion.Root className="max-w-md mx-auto">
                    <Accordion.Panel value="1">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full">
                                What is this service about?
                                <Accordion.Indicator>
                                    <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                                </Accordion.Indicator>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className="text-sm">
                                This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and
                                powerful analytics. Whether you&apos;re working solo or in a team, it&apos;s built to scale with your needs.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel value="2">
                        <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full">
                                Is my data secure?
                                <Accordion.Indicator>
                                    <ChevronDown className="transition-transform duration-200 in-data-open:rotate-180" />
                                </Accordion.Indicator>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>
                            <p className="text-sm">
                                Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your
                                information is stored on secure servers and regularly backed up.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion.Root>
            </div>
        </div>
    );
}

```

### Disabled

Set `disabled` on an `Accordion.Panel` to disable only that panel, or set it on `Accordion.Root` to disable all panels.

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion } from '@primereact/ui/accordion';

export default function DisabledDemo() {
    return (
        <div className="space-y-8">
            <Accordion.Root disabled className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            How do I reset my password?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            You can reset your password by clicking the "Forgot password?" link on the login page. We'll send a password reset link to
                            your registered email address.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Do you offer team accounts?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Yes. Our Team and Business plans are designed for collaboration. You can invite team members, assign roles, and manage
                            permissions easily from your dashboard.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion.Root>
            <Accordion.Root className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            What happens if I exceed my usage limit?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            If you go over your plan limits (e.g., storage or API requests), you'll receive a notification. You can either upgrade
                            your plan or wait until the next billing cycle resets.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2" disabled>
                    <Accordion.Header>
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            Is there a mobile app available?
                            <ChevronDown className="transition-transform duration-200 [[data-content-open]>&]:rotate-180" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <p className="text-sm">
                            Yes, we offer both iOS and Android apps so you can manage your account and stay connected on the go.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion.Root>
        </div>
    );
}

```

### Template

Create accordion panels dynamically by iterating over a data source to keep structure consistent and reusable.

```tsx
'use client';
import { CreditCard } from '@primeicons/react/credit-card';
import { Lock } from '@primeicons/react/lock';
import { Plus } from '@primeicons/react/plus';
import { QuestionCircle } from '@primeicons/react/question-circle';
import { Accordion } from '@primereact/ui/accordion';

const items = [
    {
        label: 'What is this service about?',
        value: '1',
        icon: QuestionCircle,
        color: 'text-yellow-500',
        content:
            "This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful analytics. Whether you're working solo or in a team, it's built to scale with your needs."
    },
    {
        label: 'Is my data secure?',
        value: '2',
        icon: Lock,
        color: 'text-blue-500',
        content:
            'Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is stored on secure servers and regularly backed up.'
    },
    {
        label: 'Can I upgrade or downgrade my plan later?',
        value: '3',
        icon: CreditCard,
        color: 'text-green-500',
        content:
            'Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and any billing adjustments are handled automatically.'
    }
];

export default function TemplateDemo() {
    return (
        <Accordion.Root className="max-w-md mx-auto border border-surface-200 dark:border-surface-700 rounded-md divide-y divide-surface-200 dark:divide-surface-700">
            {items.map((item) => (
                <Accordion.Panel key={item.value} value={item.value} className="last:border-none! transition-all ease-out">
                    <Accordion.Header className="bg-transparent">
                        <Accordion.Trigger className="flex justify-between items-center w-full">
                            <span className="flex items-center gap-4">
                                {item.icon && <item.icon className={item.color} />}
                                <span className="font-medium">{item.label}</span>
                            </span>
                            <Plus className="transition-transform ease-out [[data-content-open]>&]:rotate-45" />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="bg-transparent px-4 leading-6 pl-8" pt-inner="bg-transparent">
                        <p className="text-sm">{item.content}</p>
                    </Accordion.Content>
                </Accordion.Panel>
            ))}
        </Accordion.Root>
    );
}

```

### With RadioButton

`RadioButton` component can be used to group multiple `Accordion.Panel` components.

```tsx
'use client';
import { Accordion, type AccordionRootValueChangeEvent } from '@primereact/ui/accordion';
import { Button } from '@primereact/ui/button';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup, type RadioButtonGroupValueChangeEvent } from '@primereact/ui/radiobuttongroup';
import * as React from 'react';

const items = [
    {
        label: 'Starter Plan',
        description: 'Perfect for individuals getting started. Includes access to core components and community support.',
        value: '1',
        price: '$99'
    },
    {
        label: 'Growth Plan',
        description: 'Ideal for freelancers and small teams. Unlocks advanced UI components and priority email support.',
        value: '2',
        price: '$249'
    },
    {
        label: 'Scale Plan',
        description: 'Best for growing businesses. Includes all features, early access to new releases, and Slack/Jira support.',
        value: '3',
        price: '$499'
    }
];

export default function WithRadioButtonDemo() {
    const [selected, setSelected] = React.useState<string>('1');

    return (
        <div>
            <div className="max-w-sm mx-auto w-full">
                <RadioButtonGroup
                    className="w-full"
                    value={selected}
                    onValueChange={(e: RadioButtonGroupValueChangeEvent) => setSelected(e.value as string)}
                >
                    <Accordion.Root
                        value={selected}
                        onValueChange={(e: AccordionRootValueChangeEvent) => setSelected(e.value as string)}
                        className="w-full border border-surface-200 dark:border-surface-700 rounded-md divide-y divide-surface-200 dark:divide-surface-700"
                    >
                        {items.map((item) => (
                            <Accordion.Panel key={item.value} value={item.value} className="last:border-none!">
                                <Accordion.Header
                                    onClick={() => setSelected(item.value)}
                                    className="cursor-pointer! flex items-center justify-between px-4! py-3! data-closed:text-surface-500! hover:text-surface-900 dark:hover:text-surface-0 data-open:text-surface-900! dark:data-open:text-surface-0!"
                                >
                                    <span className="flex items-center gap-4">
                                        <RadioButton.Root inputId={`radio-${item.value}`} name="price" value={item.value}>
                                            <RadioButton.Box>
                                                <RadioButton.Indicator match="checked" />
                                            </RadioButton.Box>
                                        </RadioButton.Root>
                                        <span className="font-semibold text-base">{item.label}</span>
                                    </span>
                                    <span className="font-semibold text-base">{item.price}</span>
                                </Accordion.Header>
                                <Accordion.Content className="p-0!">
                                    <p className="text-surface-500 pl-8.5 pr-2">{item.description}</p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        ))}
                    </Accordion.Root>
                </RadioButtonGroup>
                <Button className="w-full mt-4" size="large">
                    Buy Now for {items.find((item) => item.value === selected)?.price}
                </Button>
            </div>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/accordion.md#api) for `AccordionRoot`, `AccordionPanel`, `AccordionHeader`, `AccordionTrigger`, `AccordionContent`, and `AccordionIndicator` component documentation.

### Hooks

See [Headless API](../../headless/components/accordion.md#api) for `useAccordion` and `useAccordionPanel` hook documentation.

### Accessibility

See [Accordion Primitive](../../primitive/components/accordion.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-accordion | Class name of the root element |
| p-accordioncontent | Class name of the content element |
| p-accordionheader | Class name of the header element |
| p-accordiontrigger | Class name of the trigger element |
| p-accordionpanel | Class name of the panel element |
| p-accordion-indicator | Class name of the indicator element |
| p-accordioncontent-wrapper | Class name of the content outer wrapper element |
| p-accordioncontent-content | Class name of the content inner wrapper element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| accordion.transition.duration | --p-accordion-transition-duration | Transition duration of root |
| accordion.panel.border.width | --p-accordion-panel-border-width | Border width of panel |
| accordion.panel.border.color | --p-accordion-panel-border-color | Border color of panel |
| accordion.header.color | --p-accordion-header-color | Color of header |
| accordion.header.hover.color | --p-accordion-header-hover-color | Hover color of header |
| accordion.header.active.color | --p-accordion-header-active-color | Active color of header |
| accordion.header.active.hover.color | --p-accordion-header-active-hover-color | Active hover color of header |
| accordion.header.padding | --p-accordion-header-padding | Padding of header |
| accordion.header.font.weight | --p-accordion-header-font-weight | Font weight of header |
| accordion.header.font.size | --p-accordion-header-font-size | Font size of header |
| accordion.header.border.radius | --p-accordion-header-border-radius | Border radius of header |
| accordion.header.border.width | --p-accordion-header-border-width | Border width of header |
| accordion.header.border.color | --p-accordion-header-border-color | Border color of header |
| accordion.header.background | --p-accordion-header-background | Background of header |
| accordion.header.hover.background | --p-accordion-header-hover-background | Hover background of header |
| accordion.header.active.background | --p-accordion-header-active-background | Active background of header |
| accordion.header.active.hover.background | --p-accordion-header-active-hover-background | Active hover background of header |
| accordion.header.focus.ring.width | --p-accordion-header-focus-ring-width | Focus ring width of header |
| accordion.header.focus.ring.style | --p-accordion-header-focus-ring-style | Focus ring style of header |
| accordion.header.focus.ring.color | --p-accordion-header-focus-ring-color | Focus ring color of header |
| accordion.header.focus.ring.offset | --p-accordion-header-focus-ring-offset | Focus ring offset of header |
| accordion.header.focus.ring.shadow | --p-accordion-header-focus-ring-shadow | Focus ring shadow of header |
| accordion.header.toggle.icon.color | --p-accordion-header-toggle-icon-color | Toggle icon color of header |
| accordion.header.toggle.icon.hover.color | --p-accordion-header-toggle-icon-hover-color | Toggle icon hover color of header |
| accordion.header.toggle.icon.active.color | --p-accordion-header-toggle-icon-active-color | Toggle icon active color of header |
| accordion.header.toggle.icon.active.hover.color | --p-accordion-header-toggle-icon-active-hover-color | Toggle icon active hover color of header |
| accordion.header.first.top.border.radius | --p-accordion-header-first-top-border-radius | First top border radius of header |
| accordion.header.first.border.width | --p-accordion-header-first-border-width | First border width of header |
| accordion.header.last.bottom.border.radius | --p-accordion-header-last-bottom-border-radius | Last bottom border radius of header |
| accordion.header.last.active.bottom.border.radius | --p-accordion-header-last-active-bottom-border-radius | Last active bottom border radius of header |
| accordion.content.border.width | --p-accordion-content-border-width | Border width of content |
| accordion.content.border.color | --p-accordion-content-border-color | Border color of content |
| accordion.content.background | --p-accordion-content-background | Background of content |
| accordion.content.color | --p-accordion-content-color | Color of content |
| accordion.content.padding | --p-accordion-content-padding | Padding of content |
