# Avatar

Avatar represents people using icons, labels and images.

```tsx
import { Avatar } from '@primereact/ui/avatar';
import { Divider } from '@primereact/ui/divider';

export default function Preview() {
    return (
        <div className="flex flex-col max-w-3xs mx-auto">
            <div className="flex items-start gap-3">
                <Avatar.Root className="size-9" shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt="Amy Elsner" />
                    <Avatar.Fallback>A</Avatar.Fallback>
                </Avatar.Root>
                <div className="flex-1 flex flex-col items-start gap-1">
                    <span className="text-muted-color text-xs">Amy Elsner</span>
                    <span className="text-color font-semibold">London to Miami</span>
                    <span className="text-muted-color text-sm">LHR → MIA</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span className="text-color font-semibold tabular-nums">14:30</span>
                    <span className="text-muted-color text-xs">Gate B12</span>
                </div>
            </div>
            <Divider />
            <div className="flex items-start gap-3">
                <Avatar.Root className="size-9" shape="circle">
                    <Avatar.Fallback>OL</Avatar.Fallback>
                </Avatar.Root>
                <div className="flex-1 flex flex-col items-start gap-1">
                    <span className="text-muted-color text-xs">Onyama Limba</span>
                    <span className="text-color font-semibold">Paris to Istanbul</span>
                    <span className="text-muted-color text-sm">CDG → IST</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span className="text-color font-semibold tabular-nums">09:15</span>
                    <span className="text-muted-color text-xs">Gate A4</span>
                </div>
            </div>
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

[`Badge`](https://primereact.dev/docs/components/badge) component can be used to display a badge on an Avatar.

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

## Related

### Sub-Components

See [Primitive API](../../primitive/components/avatar.md#api) for `AvatarRoot`, `AvatarImage`, `AvatarFallback`, and `AvatarGroup` component documentation.

### Hooks

See [Headless API](../../headless/components/avatar.md#api) for `useAvatar` and `useAvatarGroup` hook documentation.

### Accessibility

See [Avatar Primitive](../../primitive/components/avatar.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-avatar | Class name of the root element |
| p-avatar-label | Class name of the label element |
| p-avatar-icon | Class name of the icon element |

| ClassName | Description |
|:------|:------|
| p-avatar-group | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| avatar.width | --p-avatar-width | Width of root |
| avatar.height | --p-avatar-height | Height of root |
| avatar.font.weight | --p-avatar-font-weight | Font weight of root |
| avatar.font.size | --p-avatar-font-size | Font size of root |
| avatar.background | --p-avatar-background | Background of root |
| avatar.color | --p-avatar-color | Color of root |
| avatar.border.radius | --p-avatar-border-radius | Border radius of root |
| avatar.icon.size | --p-avatar-icon-size | Size of icon |
| avatar.group.border.color | --p-avatar-group-border-color | Border color of group |
| avatar.group.offset | --p-avatar-group-offset | Offset of group |
| avatar.lg.width | --p-avatar-lg-width | Width of lg |
| avatar.lg.height | --p-avatar-lg-height | Height of lg |
| avatar.lg.font.size | --p-avatar-lg-font-size | Font size of lg |
| avatar.lg.icon.size | --p-avatar-lg-icon-size | Icon size of lg |
| avatar.lg.group.offset | --p-avatar-lg-group-offset | Group offset of lg |
| avatar.xl.width | --p-avatar-xl-width | Width of xl |
| avatar.xl.height | --p-avatar-xl-height | Height of xl |
| avatar.xl.font.size | --p-avatar-xl-font-size | Font size of xl |
| avatar.xl.icon.size | --p-avatar-xl-icon-size | Icon size of xl |
| avatar.xl.group.offset | --p-avatar-xl-group-offset | Group offset of xl |
