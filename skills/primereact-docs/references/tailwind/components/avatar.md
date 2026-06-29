# Avatar

Avatar represents people using icons, labels and images.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Divider } from '@/components/ui/divider';

export default function Preview() {
    return (
        <div className="flex flex-col max-w-3xs mx-auto">
            <div className="flex items-start gap-3">
                <Avatar className="size-9" shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt="Amy Elsner" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
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
                <Avatar className="size-9" shape="circle">
                    <AvatarFallback>OL</AvatarFallback>
                </Avatar>
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

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/avatar.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
```

```tsx
<Avatar>
    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/avatar-1.png" />
    <AvatarFallback>CC</AvatarFallback>
</Avatar>
```

## Examples

### Basic

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar size="large" shape="circle">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
        </div>
    );
}

```

### Fallback

The `Avatar.Fallback` component displays a label or an icon when an image fails to load or when an image is not preferred.

```tsx
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Check, User } from '@primeicons/react';

export default function LabelDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar>
                <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <Avatar className="bg-amber-100 dark:bg-amber-950/50 text-amber-500 dark:text-amber-500">
                <AvatarFallback>CC</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>
                    <Check className="size-4" />
                </AvatarFallback>
            </Avatar>
            <Avatar className="bg-blue-100 dark:bg-blue-950/50 text-blue-500 dark:text-blue-500">
                <AvatarFallback>
                    <User />
                </AvatarFallback>
            </Avatar>
        </div>
    );
}

```

### Image

The `Avatar.Image` component displays an image as an Avatar.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ImageDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar size="large" shape="circle">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar size="large" shape="circle">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar size="large" shape="circle">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                <AvatarFallback>O</AvatarFallback>
            </Avatar>
        </div>
    );
}

```

### Badge

[`Badge`](https://primereact.dev/docs/components/badge) component can be used to display a badge on an Avatar.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { OverlayBadge } from '@/components/ui/overlaybadge';

const BadgeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            <OverlayBadge>
                <Avatar size="large" shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <AvatarFallback>O</AvatarFallback>
                </Avatar>
                <Badge size="small" shape="circle" severity="success">
                    2
                </Badge>
            </OverlayBadge>
            <OverlayBadge>
                <Avatar size="large">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                    <AvatarFallback>W</AvatarFallback>
                </Avatar>
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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ShapeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <Avatar shape="circle" size="large">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <AvatarFallback>W</AvatarFallback>
            </Avatar>
            <Avatar shape="square" size="large">
                <AvatarImage src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <AvatarFallback>W</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default ShapeDemo;

```

### Sizes

Use the `size` property to change the size of an avatar.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function SizeDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-4">
                <Avatar shape="circle" size="normal">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar shape="circle" size="large">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar shape="circle" size="xlarge">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex items-center justify-center gap-4">
                <Avatar shape="circle" size="normal">
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar shape="circle" size="large">
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar shape="circle" size="xlarge">
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}

```

### AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an `Avatar.Group` component.

```tsx
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';

export default function GroupDemo() {
    return (
        <div className="flex justify-center">
            <AvatarGroup>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <AvatarFallback>O</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" />
                    <AvatarFallback>I</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarImage src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                    <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <Avatar shape="circle">
                    <AvatarFallback>+2</AvatarFallback>
                </Avatar>
            </AvatarGroup>
        </div>
    );
}

```

## Accessibility

### Screen Reader

Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like img along with aria-labelledby or aria-label to describe the component. In case avatars need to be tabbable, tabindex can be added as well to implement custom key handlers.

### Keyboard Support

Component does not include any interactive elements.
