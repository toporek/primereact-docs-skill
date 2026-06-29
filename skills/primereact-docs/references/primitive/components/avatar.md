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
- Automatic image load detection, `Image` renders only after successful load, `Fallback` renders otherwise
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

## API

### AvatarRoot

> **`AvatarRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/avatar or the installed `@primereact/types`.

| Attribute    | Value      |
| ------------ | ---------- |
| `data-scope` | `"avatar"` |
| `data-part`  | `"root"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | AvatarRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| fallback | AvatarRootPassThroughType> | Used to pass attributes to the fallback's DOM element. |
| image | AvatarRootPassThroughType> | Used to pass attributes to the image's DOM element. |

### AvatarImage

> **`AvatarImage` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/avatar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | AvatarImagePassThroughType> | Used to pass attributes to the root's DOM element. |

### AvatarFallback

> **`AvatarFallback` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/avatar or the installed `@primereact/types`.

| Label | Type | Description |
|:------|:------|:------|
| root | AvatarFallbackPassThroughType> | Used to pass attributes to the root's DOM element. |

### AvatarGroup

> **`AvatarGroup` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/avatar or the installed `@primereact/types`.

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"avatargroup"` |
| `data-part`  | `"root"`        |

| Label | Type | Description |
|:------|:------|:------|
| root | AvatarGroupPassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so a role like `img` along with `aria-labelledby` or `aria-label` can be added to describe the component. In case avatars need to be tabbable, `tabIndex` can be added to implement custom key handlers.

### Keyboard Support

Component does not include any interactive elements.
