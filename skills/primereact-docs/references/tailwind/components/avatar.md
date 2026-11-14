# Avatar

Avatar represents people using icons, labels and images.

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

### Fallback

The `Avatar.Fallback` component displays a label or an icon when an image fails to load or when an image is not preferred.

### Image

The `Avatar.Image` component displays an image as an Avatar.

### Badge

[`Badge`](https://primereact.dev/docs/components/badge) component can be used to display a badge on an Avatar.

### Shape

Use the `shape` property to change the appearance.

### Sizes

Use the `size` property to change the size of an avatar.

### AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an `Avatar.Group` component.

## Accessibility

### Screen Reader

Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like img along with aria-labelledby or aria-label to describe the component. In case avatars need to be tabbable, tabindex can be added as well to implement custom key handlers.

### Keyboard Support

Component does not include any interactive elements.
