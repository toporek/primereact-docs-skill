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

```tsx
import { useAvatar } from '@primereact/headless/avatar';
import { useAvatarGroup } from '@primereact/headless/avatargroup';
```

```tsx
const { rootProps, state, handleImageLoad, handleImageUnload } = useAvatar();

return <div {...rootProps}></div>;
```

`useAvatar` owns the image-loading lifecycle and exposes `state.load` for fallback rendering, while `useAvatarGroup` returns root props for grouping multiple avatars. See [Primitive](../../primitive/components/avatar.md) for a component-based API.

## Features

- **Image loading lifecycle**, attaches `load`/`error` listeners and flips `state.load` so you can swap between image and fallback
- **Imperative load helpers**, `handleImageLoad(src)` starts a preload and `handleImageUnload()` cleans listeners up
- **Delayed reveal**, `delayDuration` holds the image hidden for a short window to avoid layout flashes on fast connections
- **Group layout primitive**, `useAvatarGroup` exposes a root prop object with shared data attributes so child avatars can be styled relative to each other
- **Data-attribute styling**, scoped `data-scope` / `data-part` attributes on both avatar and group roots

## Working with callbacks

### Preload an image with cleanup

Trigger the preload in an effect and unload on teardown so event listeners never leak.

```tsx
const { state, handleImageLoad, handleImageUnload } = useAvatar();

React.useEffect(() => {
    handleImageLoad('https://example.com/photo.png');
    return () => handleImageUnload();
}, []);
```

### Render a fallback until the image resolves

Use `state.load` to decide between the real image and initials, an icon, or a placeholder.

```tsx
<div {...rootProps}>{state.load ? <img src="https://example.com/photo.png" alt="User" /> : <span>AB</span>}</div>
```

### Avoid flash on fast networks

Set `delayDuration` so the loaded image only appears after the given delay, which keeps the UI stable when images resolve almost instantly.

```tsx
const avatar = useAvatar({ delayDuration: 300 });
```

### Group avatars with shared styling

Wrap a set of avatars in an element spread with `useAvatarGroup`'s `rootProps` to share layout data attributes.

```tsx
const { rootProps: groupRootProps } = useAvatarGroup();

<div {...groupRootProps}>{/* multiple avatar elements */}</div>;
```

## Styling with data attributes

Every prop object includes `data-scope` and `data-part` attributes you can target directly from CSS.

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

Static visual element, use aria-label for screen reader descriptions. See [Primitive](../../primitive/components/avatar.md#accessibility) for full WAI-ARIA compliance details.
