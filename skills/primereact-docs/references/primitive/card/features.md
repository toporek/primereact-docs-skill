# Card

An unstyled, flexible container component with compound composition.

Build fully custom content containers with complete control over layout and styling.

```tsx
'use client';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Card.Root className={styles.root}>
                <Card.Body className={styles.body}>
                    <Card.Caption>
                        <Card.Title className={styles.title}>Pro Subscription</Card.Title>
                        <Card.Subtitle className={styles.subtitle}>Everything you need to scale your workflow</Card.Subtitle>
                    </Card.Caption>
                    <Card.Content className={styles.content}>
                        <p>Get unlimited access to all features, priority support, and advanced analytics to help your team grow faster.</p>
                    </Card.Content>
                    <Card.Footer className={styles.footer}>
                        <span className={styles.price}>$29 / month</span>
                        <Button className={styles.button}>Upgrade</Button>
                    </Card.Footer>
                </Card.Body>
            </Card.Root>
        </div>
    );
}
```

## Features

- Compound component API with eight sub-components: `Root`, `Header`, `Body`, `Caption`, `Title`, `Subtitle`, `Content`, `Footer`
- Flexible content structure — compose sub-components in any combination
- Context sharing from `Root` to all descendant sub-components

## Usage

```tsx
import { Card } from 'primereact/card';
```

```tsx
<Card.Root>
    <Card.Header />
    <Card.Body>
        <Card.Caption>
            <Card.Title />
            <Card.Subtitle />
        </Card.Caption>
        <Card.Content />
        <Card.Footer />
    </Card.Body>
</Card.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Card.Root as="article">
    <Card.Header as="figure">
        <img src="/photo.jpg" alt="Photo" />
    </Card.Header>
    <Card.Body as="section">
        <Card.Title as="h2">Title</Card.Title>
        <Card.Content as="main">...</Card.Content>
    </Card.Body>
</Card.Root>
```

Default elements: `Root`=`div`, `Header`=`div`, `Body`=`div`, `Caption`=`div`, `Title`=`div`, `Subtitle`=`div`, `Content`=`div`, `Footer`=`div`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Card.Content>{(instance) => <p>Card ID: {instance.card?.id}</p>}</Card.Content>
```

## Pass Through

**Pass Through example:**

```tsx
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';

export default function CardPTDemo() {
    return (
        <Card.Root className="max-w-sm mx-auto">
            <Card.Body className="space-y-4">
                <Card.Caption>
                    <Card.Title> Pro Subscription</Card.Title>
                    <Card.Subtitle>Everything you need to scale your workflow</Card.Subtitle>
                </Card.Caption>
                <Card.Content>
                    <p> Get unlimited access to all features, priority support, and advanced analytics to help your team grow faster.</p>
                </Card.Content>
                <Card.Footer className="flex flex-col gap-4">
                    <span className="text-lg font-medium">$29 / month</span>

                    <Button fluid>Upgrade</Button>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
}
```

## API

### CardRoot

> **API/props table for `CardRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value  |
| ------------ | ------ |
| `data-scope` | `card` |
| `data-part`  | `root` |

> **API/props table for `CardRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CardHeader

> **API/props table for `CardHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CardHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CardBody

> **API/props table for `CardBody` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CardBody` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CardCaption

> **API/props table for `CardCaption` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CardCaption` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CardTitle

> **API/props table for `CardTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CardTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CardSubtitle

> **API/props table for `CardSubtitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CardSubtitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CardContent

> **API/props table for `CardContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CardContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### CardFooter

> **API/props table for `CardFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `CardFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Card is a structural container with no implicit ARIA role. If the card represents a standalone content region, apply `role="region"` and provide an accessible name using `aria-label` or `aria-labelledby` on `Card.Root`.

### Keyboard Support

Card does not include built-in keyboard interaction. Keyboard behavior depends on interactive elements placed inside the card (buttons, links, form controls).
