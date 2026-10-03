# Badge

Badge is a small status indicator for another element.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/badge.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Badge } from '@/components/ui/badge';
```

```tsx
<Badge>Badge</Badge>
```

## Examples

### Basic

### Severity

The `severity` property defines the visual style of a badge.

### Size

Use the `size` property to change the size of a badge.

### Overlay

A badge can be added to any element by encapsulating the content with the `OverlayBadge` component.

### Button

Buttons have built-in support for badges to display a badge inline.

## Accessibility

### Screen Reader

Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, _aria-live_ may be utilized as well. In case badges need to be tabbable, _tabindex_ can be added to implement custom key handlers.

### Keyboard Support

Component does not include any interactive elements.
