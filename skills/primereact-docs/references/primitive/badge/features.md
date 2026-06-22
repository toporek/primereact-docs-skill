# Badge

An unstyled badge component for displaying status indicators.

Build fully custom status indicators with complete control over layout and styling.

```tsx
'use client';
import { Bell } from '@primeicons/react/bell';
import { Envelope } from '@primeicons/react/envelope';
import { Badge } from 'primereact/badge';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <Badge className={`${styles.standalone} ${styles.primary}`}>2</Badge>
                <Badge className={`${styles.standalone} ${styles.danger}`}>5</Badge>
                <Badge className={`${styles.standalone} ${styles.success}`}>12</Badge>
                <Badge className={`${styles.standalone} ${styles.secondary}`}>8</Badge>
            </div>
            <div className={styles.row}>
                <div className={styles.iconWrapper}>
                    <Bell className={styles.icon} />
                    <Badge className={`${styles.overlay} ${styles.danger}`} />
                </div>
                <div className={styles.iconWrapper}>
                    <Envelope className={styles.icon} />
                    <Badge className={`${styles.overlay} ${styles.primary}`} />
                </div>
                <div className={styles.iconWrapper}>
                    <Bell className={styles.icon} />
                    <Badge className={`${styles.overlay} ${styles.success}`} />
                </div>
            </div>
        </div>
    );
}
```

## Features

- Single `Badge` component with `OverlayBadge` for positioned overlays
- Dot indicator via empty children — renders as a small status dot when no content is provided

## Usage

```tsx
import { Badge } from 'primereact/badge';
import { OverlayBadge } from 'primereact/overlaybadge';
```

```tsx
<Badge></Badge>

<OverlayBadge>
    <IconComponent />
    <Badge></Badge>
</OverlayBadge>
```

## Behavior

### Polymorphic Rendering

Use `as` on `Badge` or `OverlayBadge` to change the rendered HTML element.

```tsx
<Badge as="div">4</Badge>
<OverlayBadge as="span">...</OverlayBadge>
```

Default elements: `Badge`=`span`, `OverlayBadge`=`div`.

### Render Function Children

`Badge` accepts a render function as children, providing access to the component instance.

```tsx
<Badge>{(instance) => <span>Count</span>}</Badge>
```

## Pass Through

**Pass Through example:**

```tsx
import { Badge } from '@primereact/ui/badge';

export default function BadgePTDemo() {
    return (
        <div className="flex justify-center">
            <Badge>Badge</Badge>
        </div>
    );
}
```

## API

### Badge

> **API/props table for `Badge` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                              |
| ------------ | ---------------------------------- |
| `data-scope` | `"badge"`                          |
| `data-part`  | `"root"`                           |
| `data-empty` | Present when badge has no children |

> **API/props table for `Badge` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### OverlayBadge

> **API/props table for `OverlayBadge` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `OverlayBadge` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Badge does not include any roles and attributes by default. Any attribute is passed to the root element so `aria-label` or `aria-live` can be added if badges are dynamic. In case badges need to be tabbable, `tabIndex` can be added to implement custom key handlers.

### Keyboard Support

Component does not include any interactive elements.
