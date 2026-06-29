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
- Flexible content structure, compose sub-components in any combination
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

## API

### CardRoot

> **`CardRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/card or the installed `@primereact/types`.

| Attribute    | Value  |
| ------------ | ------ |
| `data-scope` | `card` |
| `data-part`  | `root` |

| Label | Type | Description |
|:------|:------|:------|
| root | CardRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| body | CardRootPassThroughType> | Used to pass attributes to the body's DOM element. |
| header | CardRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| title | CardRootPassThroughType> | Used to pass attributes to the title's DOM element. |
| subtitle | CardRootPassThroughType> | Used to pass attributes to the subtitle's DOM element. |
| caption | CardRootPassThroughType> | Used to pass attributes to the caption's DOM element. |
| content | CardRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| footer | CardRootPassThroughType> | Used to pass attributes to the footer's DOM element. |

### CardHeader

> **`CardHeader` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/card or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | CardHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### CardBody

> **`CardBody` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/card or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | CardBodyPassThroughType> | Used to pass attributes to the root's DOM element. |

### CardCaption

> **`CardCaption` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/card or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | CardCaptionPassThroughType> | Used to pass attributes to the root's DOM element. |

### CardTitle

> **`CardTitle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/card or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | CardTitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### CardSubtitle

> **`CardSubtitle` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/card or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | CardSubtitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### CardContent

> **`CardContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/card or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | CardContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### CardFooter

> **`CardFooter` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/card or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | CardFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Card is a structural container with no implicit ARIA role. If the card represents a standalone content region, apply `role="region"` and provide an accessible name using `aria-label` or `aria-labelledby` on `Card.Root`.

### Keyboard Support

Card does not include built-in keyboard interaction. Keyboard behavior depends on interactive elements placed inside the card (buttons, links, form controls).
