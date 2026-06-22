# Accordion

An unstyled, accessible accordion component with compound composition.

Build fully custom collapsible content sections with complete control over layout and styling.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion } from 'primereact/accordion';
import styles from './basic-demo.module.css';

const items = [
    {
        value: '1',
        title: 'What is PrimeReact?',
        content:
            'PrimeReact is a rich set of open source UI components for React. It provides a wide range of accessible, themeable components to build modern web applications.'
    },
    {
        value: '2',
        title: 'How to get started?',
        content:
            'Install PrimeReact via npm and import the components you need. Each component is available as a compound primitive or as a styled variant with built-in theming.'
    },
    {
        value: '3',
        title: 'What about accessibility?',
        content:
            'All components follow WAI-ARIA guidelines with full keyboard support. Accordion headers use proper button semantics and aria-expanded attributes automatically.'
    }
];

export default function BasicDemo() {
    return (
        <Accordion.Root className={styles.root}>
            {items.map((item) => (
                <Accordion.Panel key={item.value} value={item.value} className={styles.panel}>
                    <Accordion.Header className={styles.header}>
                        <Accordion.Trigger className={styles.trigger}>
                            {item.title}
                            <Accordion.Indicator className={styles.indicator}>
                                <ChevronDown />
                            </Accordion.Indicator>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className={styles.content}>
                        <div className={styles.contentInner}>{item.content}</div>
                    </Accordion.Content>
                </Accordion.Panel>
            ))}
        </Accordion.Root>
    );
}
```

## Features

- Compound component API with six sub-components: `Root`, `Panel`, `Header`, `Trigger`, `Content`, `Indicator`
- Single or multiple panel expansion

## Usage

```tsx
import { Accordion } from 'primereact/accordion';
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

## Behavior

### Motion Animation

Use `motionProps` on `Root` to configure open/close animations.

```tsx
<Accordion.Root motionProps={{ name: 'accordion-slide', cssVarPrefix: 'accordion-content', hideStrategy: 'none' }}>...</Accordion.Root>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element or use a custom React component.

```tsx
<Accordion.Root as="section">
    <Accordion.Panel as="article">
        <Accordion.Header as="h3">
            <Accordion.Trigger as="div">...</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content as="section">...</Accordion.Content>
    </Accordion.Panel>
</Accordion.Root>
```

Custom components receive all the props that would be applied to the default element:

```tsx
<Accordion.Trigger as={MyCustomButton}>...</Accordion.Trigger>
```

Default elements: `Root`=`div`, `Panel`=`div`, `Header`=`div`, `Trigger`=`button`, `Content`=`div`, `Indicator`=`span`.

### Render Function Children

`Content` accepts a render function as children, providing access to the component instance. The instance exposes `accordion` (root instance), `accordionpanel` (parent panel instance), and `motion` (animation state).

```tsx
<Accordion.Content>{(instance) => <div>Panel is {instance.accordionpanel?.state.open ? 'open' : 'closed'}</div>}</Accordion.Content>
```

## Pass Through

**Pass Through example:**

```tsx
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Accordion } from '@primereact/ui/accordion';

export default function AccordionPTDemo() {
    return (
        <Accordion.Root className="w-2/3">
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

## API

### AccordionRoot

> **API/props table for `AccordionRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                 |
| --------------- | --------------------- |
| `data-scope`    | `"accordion"`         |
| `data-part`     | `"root"`              |
| `data-disabled` | Present when disabled |

> **API/props table for `AccordionRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AccordionPanel

> **API/props table for `AccordionPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-scope`    | `"accordion"`          |
| `data-part`     | `"panel"`              |
| `data-open`     | Present when expanded  |
| `data-closed`   | Present when collapsed |
| `data-disabled` | Present when disabled  |

> **API/props table for `AccordionPanel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AccordionHeader

> **API/props table for `AccordionHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                  |
| ------------- | ---------------------- |
| `data-scope`  | `"accordion"`          |
| `data-part`   | `"header"`             |
| `data-open`   | Present when expanded  |
| `data-closed` | Present when collapsed |

> **API/props table for `AccordionHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AccordionTrigger

> **API/props table for `AccordionTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute             | Value                       |
| --------------------- | --------------------------- |
| `data-scope`          | `"accordion"`               |
| `data-part`           | `"trigger"`                 |
| `data-content-open`   | Present when content open   |
| `data-content-closed` | Present when content closed |
| `data-disabled`       | Present when disabled       |

> **API/props table for `AccordionTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AccordionContent

> **API/props table for `AccordionContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-scope`    | `"accordion"`          |
| `data-part`     | `"content"`            |
| `data-open`     | Present when expanded  |
| `data-closed`   | Present when collapsed |
| `data-disabled` | Present when disabled  |

> **API/props table for `AccordionContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AccordionIndicator

> **API/props table for `AccordionIndicator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute     | Value                  |
| ------------- | ---------------------- |
| `data-scope`  | `"accordion"`          |
| `data-part`   | `"indicator"`          |
| `data-open`   | Present when expanded  |
| `data-closed` | Present when collapsed |

> **API/props table for `AccordionIndicator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

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
