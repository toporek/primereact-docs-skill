# Avatar

An unstyled avatar component with compound composition and group support.

Build fully custom avatar elements with complete control over layout and styling.

```tsx
'use client';
import { User } from '@primeicons/react/user';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <AvatarGroup className={styles.group}>
                <Avatar.Root className={`${styles.avatar} ${styles.amber}`}>
                    <Avatar.Fallback>AB</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root className={`${styles.avatar} ${styles.blue}`}>
                    <Avatar.Fallback>CD</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root className={`${styles.avatar} ${styles.green}`}>
                    <Avatar.Fallback>
                        <User />
                    </Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root className={`${styles.avatar} ${styles.muted}`}>
                    <Avatar.Fallback>+3</Avatar.Fallback>
                </Avatar.Root>
            </AvatarGroup>
        </div>
    );
}
```

## Features

- Compound component API with three sub-components: `Root`, `Image`, `Fallback`
- `AvatarGroup` for visually grouping multiple avatars
- Automatic image load detection — `Image` renders only after successful load, `Fallback` renders otherwise
- Configurable `delayDuration` for delayed image reveal

## Usage

```tsx
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
```

```tsx
<AvatarGroup>
    <Avatar.Root>
        <Avatar.Image src="..." />
        <Avatar.Fallback></Avatar.Fallback>
    </Avatar.Root>
</AvatarGroup>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Avatar.Root as="span">
    <Avatar.Image src="..." />
    <Avatar.Fallback as="div">AB</Avatar.Fallback>
</Avatar.Root>
```

Default elements: `Root`=`div`, `Image`=`img`, `Fallback`=`span`.

### Render Function Children

`Avatar.Fallback` accepts a render function as children, providing access to the component instance.

```tsx
<Avatar.Fallback>{(instance) => <span>{instance.avatar?.state.load ? 'Loaded' : 'Fallback'}</span>}</Avatar.Fallback>
```

## Pass Through

**Pass Through example:**

```tsx
import { Avatar } from '@primereact/ui/avatar';

export default function AvatarPTDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}
```

## API

### AvatarRoot

> **API/props table for `AvatarRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"avatar"` |
| `data-part`  | `"root"`   |

> **API/props table for `AvatarRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AvatarImage

> **API/props table for `AvatarImage` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `AvatarImage` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AvatarFallback

> **API/props table for `AvatarFallback` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

> **API/props table for `AvatarFallback` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### AvatarGroup

> **API/props table for `AvatarGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"avatargroup"` |
| `data-part`  | `"root"`        |

> **API/props table for `AvatarGroup` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so a role like `img` along with `aria-labelledby` or `aria-label` can be added to describe the component. In case avatars need to be tabbable, `tabIndex` can be added to implement custom key handlers.

### Keyboard Support

Component does not include any interactive elements.
