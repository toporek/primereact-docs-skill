# Tag

An unstyled, accessible tag component for categorizing content.

Build fully custom categorization labels with complete control over layout and styling.

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Tag } from 'primereact/tag';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Tag className={`${styles.tag} ${styles.success}`}>
                <Check className={styles.icon} />
                Active
            </Tag>
            <Tag className={`${styles.tag} ${styles.info}`}>
                <InfoCircle className={styles.icon} />
                Info
            </Tag>
            <Tag className={`${styles.tag} ${styles.warn}`}>
                <ExclamationTriangle className={styles.icon} />
                Warning
            </Tag>
            <Tag className={`${styles.tag} ${styles.primary}`}>Default</Tag>
        </div>
    );
}

```

## Features

- Single component with children-based composition for label and icon content
- Polymorphic rendering for interactive tags (`as="button"`)

## Usage

```tsx
import { Tag } from 'primereact/tag';
```

```tsx
<Tag></Tag>
```

## Behavior

### Polymorphic Rendering

Use `as` to change the rendered HTML element. Render as `"button"` for clickable tags.

```tsx
<Tag as="button" onClick={handleClick}>
    Clickable
</Tag>
```

Default element: `span`.

### Render Function Children

`Tag` accepts a render function as children, providing access to the component instance.

```tsx
<Tag>{(instance) => <span>{instance.props.children}</span>}</Tag>
```

## Pass Through

## API

### Tag

> **API/props table for `Tag` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value    |
| ------------ | -------- |
| `data-scope` | `"tag"`  |
| `data-part`  | `"root"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TagPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic, aria-live may be utilized as well. In case badges need to be tabbable, tabindex can be added to implement custom key handlers.

### Keyboard Support

Component does not include any interactive elements.
