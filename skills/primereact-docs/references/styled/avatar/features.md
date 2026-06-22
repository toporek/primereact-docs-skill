# Avatar

Avatar represents people using icons, labels and images.

```tsx
import { Avatar } from '@primereact/ui/avatar';

export default function Preview() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="large" shape="circle">
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}
```

## Usage

```tsx
import { Avatar } from '@primereact/ui/avatar';
import { AvatarGroup } from '@primereact/ui/avatargroup';
```

```tsx
<AvatarGroup>
    <Avatar.Root>
        <Avatar.Image />
        <Avatar.Fallback />
    </Avatar.Root>
</AvatarGroup>
```

## Examples

### Basic

Displays a user representation using an image, icon, or label initials.

```tsx
import { Avatar } from '@primereact/ui/avatar';

export default function BasicDemo() {
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

### Fallback

The `Avatar.Fallback` component displays a label or an icon when an image fails to load or when an image is not preferred.

```tsx
import { Avatar } from '@primereact/ui/avatar';
import { User } from '@primeicons/react/user';
import { Check } from '@primeicons/react/check';

export default function LabelDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root>
                <Avatar.Fallback>J</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root className="bg-amber-100 dark:bg-amber-950/50 text-amber-500 dark:text-amber-500">
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
                <Avatar.Fallback>
                    <Check className="size-4" />
                </Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root className="bg-blue-100 dark:bg-blue-950/50 text-blue-500 dark:text-blue-500">
                <Avatar.Fallback>
                    <User />
                </Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}
```

### Image

The `Avatar.Image` component displays an image as an Avatar.

```tsx
import { Avatar } from '@primereact/ui/avatar';

export default function ImageDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                <Avatar.Fallback>O</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}
```

### Badge

[`Badge`](https://v11.primereact.org/docs/components/badge) component can be used to display a badge on an Avatar.

```tsx
import { Avatar } from '@primereact/ui/avatar';
import { Badge } from '@primereact/ui/badge';
import { OverlayBadge } from '@primereact/ui/overlaybadge';

const BadgeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            <OverlayBadge>
                <Avatar.Root size="large" shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <Avatar.Fallback>O</Avatar.Fallback>
                </Avatar.Root>
                <Badge size="small" shape="circle" severity="success">
                    2
                </Badge>
            </OverlayBadge>
            <OverlayBadge>
                <Avatar.Root size="large">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                    <Avatar.Fallback>W</Avatar.Fallback>
                </Avatar.Root>
                <Badge shape="circle" severity="danger"></Badge>
            </OverlayBadge>
        </div>
    );
};

export default BadgeDemo;
```

### Shape

Use the `shape` property to change the appearance.

```tsx
import { Avatar } from '@primereact/ui/avatar';

const ShapeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar.Root shape="circle" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <Avatar.Fallback>W</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root shape="square" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <Avatar.Fallback>W</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
};

export default ShapeDemo;
```

### Sizes

Use the `size` property to change the size of an avatar.

```tsx
import { Avatar } from '@primereact/ui/avatar';

export default function SizeDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-4">
                <Avatar.Root shape="circle" size="normal">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <Avatar.Fallback>AB</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle" size="large">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <Avatar.Fallback>AB</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle" size="xlarge">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <Avatar.Fallback>AB</Avatar.Fallback>
                </Avatar.Root>
            </div>
            <div className="flex items-center justify-center gap-4">
                <Avatar.Root shape="circle" size="normal">
                    <Avatar.Fallback>AB</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle" size="large">
                    <Avatar.Fallback>AB</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle" size="xlarge">
                    <Avatar.Fallback>AB</Avatar.Fallback>
                </Avatar.Root>
            </div>
        </div>
    );
}
```

### AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an `AvatarGroup` component.

```tsx
import { Avatar } from '@primereact/ui/avatar';
import { AvatarGroup } from '@primereact/ui/avatargroup';

export default function GroupDemo() {
    return (
        <div className="flex justify-center">
            <AvatarGroup>
                <Avatar.Root shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <Avatar.Fallback>A</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                    <Avatar.Fallback>A</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <Avatar.Fallback>O</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" />
                    <Avatar.Fallback>I</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                    <Avatar.Fallback>X</Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root shape="circle">
                    <Avatar.Fallback>+2</Avatar.Fallback>
                </Avatar.Root>
            </AvatarGroup>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/avatar/features.md#api) for `AvatarRoot`, `AvatarImage`, `AvatarFallback`, and `AvatarGroup` component documentation.

### Hooks

See [Headless API](../../headless/avatar/features.md#api) for `useAvatar` and `useAvatarGroup` hook documentation.

## Accessibility

See [Avatar Primitive](../../primitive/avatar/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
