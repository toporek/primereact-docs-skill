# Accordion

Accordion groups content into collapsible panels.

```tsx
import { Accordion, AccordionContent, AccordionPanel, AccordionTrigger } from '@/components/ui/accordion';

export default function Preview() {
    return (
        <Accordion className="max-w-md mx-auto">
            <AccordionPanel value="1">
                <AccordionTrigger>What is this service about?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful
                        analytics.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                        stored on secure servers and regularly backed up.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="3">
                <AccordionTrigger>Can I upgrade or downgrade my plan later?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and
                        any billing adjustments are handled automatically.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/accordion
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Accordion, AccordionContent, AccordionPanel, AccordionTrigger } from '@/components/ui/accordion';
```

```tsx
<Accordion>
    <AccordionPanel value="1">
        <AccordionTrigger>Title</AccordionTrigger>
        <AccordionContent>Content</AccordionContent>
    </AccordionPanel>
</Accordion>
```

## Examples

### Basic

```tsx
import { Accordion, AccordionContent, AccordionPanel, AccordionTrigger } from '@/components/ui/accordion';

export default function BasicDemo() {
    return (
        <Accordion className="max-w-md mx-auto">
            <AccordionPanel value="1">
                <AccordionTrigger>What is this service about?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful
                        analytics.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                        stored on secure servers and regularly backed up.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="3">
                <AccordionTrigger>Can I upgrade or downgrade my plan later?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and
                        any billing adjustments are handled automatically.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    );
}
```

### Multiple

Each `Accordion.Panel` should define a unique `value`. By default, a single panel is open at a time. Enable `multiple` on `Accordion.Root` to allow multiple panels to stay open.

```tsx
import { Accordion, AccordionContent, AccordionPanel, AccordionTrigger } from '@/components/ui/accordion';

export default function MultipleDemo() {
    return (
        <Accordion multiple className="max-w-md mx-auto">
            <AccordionPanel value="1">
                <AccordionTrigger>What is this service about?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful
                        analytics. Whether you&apos;re working solo or in a team, it&apos;s built to scale with your needs.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                        stored on secure servers and regularly backed up.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="3">
                <AccordionTrigger>Can I upgrade or downgrade my plan later?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and
                        any billing adjustments are handled automatically.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    );
}
```

### Controlled

Control the active panel state with `value` and `onValueChange`.

```tsx
'use client';
import { Accordion, AccordionContent, AccordionPanel, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import type { AccordionRootValueChangeEvent } from 'primereact/accordion';
import { useState } from 'react';

export default function ControlledDemo() {
    const [activePanel, setActivePanel] = useState<string | null>('1');

    return (
        <div className="space-y-4">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setActivePanel('1')} severity={activePanel === '1' ? undefined : 'secondary'}>
                    Panel 1
                </Button>
                <Button onClick={() => setActivePanel('2')} severity={activePanel === '2' ? undefined : 'secondary'}>
                    Panel 2
                </Button>
                <Button onClick={() => setActivePanel('3')} severity={activePanel === '3' ? undefined : 'secondary'}>
                    Panel 3
                </Button>
                <Button onClick={() => setActivePanel(null)} severity="danger">
                    Close All
                </Button>
            </div>
            <Accordion
                className="max-w-md mx-auto"
                value={activePanel}
                onValueChange={(e: AccordionRootValueChangeEvent) => setActivePanel(e.value as string | null)}
            >
                <AccordionPanel value="1">
                    <AccordionTrigger>What is this service about?</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and
                            powerful analytics.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                    <AccordionTrigger>Is my data secure?</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is
                            stored on secure servers and regularly backed up.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="3">
                    <AccordionTrigger>Can I upgrade or downgrade my plan later?</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately,
                            and any billing adjustments are handled automatically.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    );
}
```

### Disabled

Set `disabled` on an `Accordion.Panel` to disable only that panel, or set it on `Accordion.Root` to disable all panels.

```tsx
import { Accordion, AccordionContent, AccordionPanel, AccordionTrigger } from '@/components/ui/accordion';

export default function DisabledDemo() {
    return (
        <div className="space-y-8">
            <Accordion disabled className="max-w-md mx-auto">
                <AccordionPanel value="1">
                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            You can reset your password by clicking the &quot;Forgot password?&quot; link on the login page. We&apos;ll send a
                            password reset link to your registered email address.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                    <AccordionTrigger>Do you offer team accounts?</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Yes. Our Team and Business plans are designed for collaboration. You can invite team members, assign roles, and manage
                            permissions easily from your dashboard.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
            <Accordion className="max-w-md mx-auto">
                <AccordionPanel value="1">
                    <AccordionTrigger>What happens if I exceed my usage limit?</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            If you go over your plan limits (e.g., storage or API requests), you&apos;ll receive a notification. You can either
                            upgrade your plan or wait until the next billing cycle resets.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2" disabled>
                    <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
                    <AccordionContent>
                        <p>Yes, we offer both iOS and Android apps so you can manage your account and stay connected on the go.</p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    );
}
```

### With RadioButton

`RadioButton` component can be used to group multiple `Accordion.Panel` components.

```tsx
'use client';
import { Accordion, AccordionContent, AccordionPanel, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { AccordionRootValueChangeEvent } from 'primereact/accordion';
import type { RadioButtonGroupValueChangeEvent } from 'primereact/radiobuttongroup';
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
                <RadioButtonGroup value={selected} onValueChange={(e: RadioButtonGroupValueChangeEvent) => setSelected(e.value as string)}>
                    <Accordion
                        value={selected}
                        onValueChange={(e: AccordionRootValueChangeEvent) => setSelected(e.value as string)}
                        className="border border-surface-200 dark:border-surface-700 rounded-md divide-y divide-surface-200 dark:divide-surface-700 overflow-hidden"
                    >
                        {items.map((item) => (
                            <AccordionPanel key={item.value} value={item.value} className="last:border-none bg-none">
                                <AccordionTrigger
                                    onClick={() => setSelected(item.value)}
                                    className="cursor-pointer flex items-center justify-between w-full px-4 py-3 data-closed:text-surface-500 hover:text-surface-900 dark:hover:text-surface-0 data-open:text-surface-900 dark:data-open:text-surface-0 **:data-[scope=accordionindicator]:hidden"
                                >
                                    <span className="flex items-center gap-4">
                                        <RadioButton inputId={`tw-radio-${item.value}`} name="tw-price" value={item.value} />
                                        <span className="font-semibold text-base">{item.label}</span>
                                    </span>
                                    <span className="font-semibold text-base">{item.price}</span>
                                </AccordionTrigger>
                                <AccordionContent className="p-0!">
                                    <p className="text-surface-500 text-base pr-2 pl-8.5">{item.description}</p>
                                </AccordionContent>
                            </AccordionPanel>
                        ))}
                    </Accordion>
                </RadioButtonGroup>
                <Button className="w-full mt-4" size="large">
                    Buy Now for {items.find((item) => item.value === selected)?.price}
                </Button>
            </div>
        </div>
    );
}
```

## Accessibility

### Screen Reader

Accordion headers are buttons. They use `aria-controls` to reference the content region and `aria-expanded` to reflect visibility state. The announced label can be customized with `aria-label` or `aria-labelledby` via pt.

The content uses `role="region"` and an `id` that matches the header button's `aria-controls`.

### Header Keyboard Support

| Key           | Function                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element in the page tab sequence.                                  |
| `shift + tab` | Moves focus to the previous focusable element in the page tab sequence.                              |
| `enter`       | Toggles the visibility of the content.                                                               |
| `space`       | Toggles the visibility of the content.                                                               |
| `down arrow`  | Moves focus to the next header. If focus is on the last header, moves focus to the first header.     |
| `up arrow`    | Moves focus to the previous header. If focus is on the first header, moves focus to the last header. |
| `home`        | Moves focus to the first header.                                                                     |
| `end`         | Moves focus to the last header.                                                                      |
