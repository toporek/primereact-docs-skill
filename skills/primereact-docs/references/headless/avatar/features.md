# useAvatar

Hooks that manage avatar image loading state and group layout.

```tsx
'use client';
import { User } from '@primeicons/react/user';
import { useAvatar } from '@primereact/headless/avatar';
import { useAvatarGroup } from '@primereact/headless/avatargroup';

export default function BasicDemo() {
    const { rootProps: groupRootProps } = useAvatarGroup();
    const avatar1 = useAvatar();
    const avatar2 = useAvatar();
    const avatar3 = useAvatar();
    const avatar4 = useAvatar();

    return (
        <div className="flex justify-center">
            <div {...groupRootProps} className="flex items-center -space-x-3">
                <div
                    {...avatar1.rootProps}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-500 ring-2 ring-surface-0 dark:ring-surface-900 text-sm font-medium"
                >
                    AB
                </div>
                <div
                    {...avatar2.rootProps}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-500 ring-2 ring-surface-0 dark:ring-surface-900 text-sm font-medium"
                >
                    CD
                </div>
                <div
                    {...avatar3.rootProps}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-950 text-green-500 ring-2 ring-surface-0 dark:ring-surface-900"
                >
                    <User />
                </div>
                <div
                    {...avatar4.rootProps}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-200 dark:bg-surface-700 text-surface-800 dark:text-surface-300 ring-2 ring-surface-0 dark:ring-surface-900 text-sm font-medium"
                >
                    +3
                </div>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1-2,4,6}
import { useAvatar } from '@primereact/headless/avatar';
import { useAvatarGroup } from '@primereact/headless/avatargroup';

const { rootProps, state, handleImageLoad, handleImageUnload } = useAvatar();

return <div {...rootProps}></div>;
```

`useAvatar` manages the image loading lifecycle while `useAvatarGroup` provides root props for grouping — see [Primitive](../../primitive/avatar/features.md) for a component-based API.

## Features

- Image loading lifecycle management with `handleImageLoad` and `handleImageUnload`
- `state.load` for conditional rendering between image and fallback content
- Configurable `delayDuration` for delayed image reveal
- `useAvatarGroup` for grouping multiple avatars with shared data attributes

## Behavior

### Image Loading

Call `handleImageLoad(src)` to begin loading an image. The hook creates a hidden `Image` object, listens for `load` and `error` events, and sets `state.load` to `true` on success or `false` on failure.

```tsx
const { state, handleImageLoad, handleImageUnload } = useAvatar();

React.useEffect(() => {
    handleImageLoad('https://example.com/photo.png');
    return () => handleImageUnload();
}, []);
```

Always call `handleImageUnload` on cleanup to remove event listeners and reset state.

### Fallback Content

Use `state.load` to conditionally render either the image or fallback content. Fallback can be text initials, an icon, or any custom element.

```tsx
<div {...rootProps}>{state.load ? <img src="https://example.com/photo.png" alt="User" /> : <span>AB</span>}</div>
```

### Delay Duration

Use `delayDuration` to introduce a delay before revealing the loaded image. This prevents layout flash when images load near-instantly.

```tsx
const avatar = useAvatar({ delayDuration: 300 });
```

The default value is `0` (no delay).

### Avatar Group

Use `useAvatarGroup` to wrap multiple avatars. The hook returns `rootProps` with data attributes for styling the group container.

```tsx
const { rootProps: groupRootProps } = useAvatarGroup();

<div {...groupRootProps}>{/* multiple avatar elements */}</div>;
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope` and `data-part` attributes for CSS targeting.

```css
[data-scope='avatar'][data-part='root'] {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
}

[data-scope='avatargroup'][data-part='root'] {
    display: flex;
    align-items: center;
}

[data-scope='avatargroup'][data-part='root'] > [data-scope='avatar'] {
    margin-left: -0.75rem;
}
```

## API

### useAvatar

> **API/props table for `useAvatar` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### useAvatarGroup

> **API/props table for `useAvatarGroup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [Avatar Primitive](../../primitive/avatar/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
