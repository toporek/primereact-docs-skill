# Avatar

Avatar represents people using icons, labels and images.

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

Grouping is available by wrapping multiple Avatar components inside an `AvatarGroup` component.

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
