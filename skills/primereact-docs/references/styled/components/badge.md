# Badge

Badge is a small status indicator for another element.

```tsx
import { Bell, Check, Clock, ExclamationTriangle, Lock, StarFill, Tag, TimesCircle } from '@primeicons/react';
import { Badge } from '@primereact/ui/badge';

export default function Preview() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xs mx-auto">
            <Badge severity="success">
                <Check className="size-2.75! mr-1" /> Approved
            </Badge>
            <Badge severity="danger">
                <TimesCircle className="size-2.75! mr-1" /> Rejected
            </Badge>
            <Badge severity="warn">
                <ExclamationTriangle className="size-2.75! mr-1" /> Warning
            </Badge>
            <Badge severity="info">
                <Clock className="size-2.75! mr-1" /> Pending
            </Badge>
            <Badge severity="secondary">
                <Tag className="size-2.75! mr-1" /> Draft
            </Badge>
            <Badge>
                <StarFill className="size-2.75! mr-1" /> Featured
            </Badge>
            <Badge severity="info">
                <Bell className="size-2.75! mr-1" /> 3 New
            </Badge>
            <Badge severity="success">Online</Badge>
            <Badge severity="secondary">
                <Lock className="size-2.75! mr-1" /> Private
            </Badge>
            <Badge severity="danger">Security issue</Badge>
        </div>
    );
}

```

## Usage

```tsx
import { Badge } from '@primereact/ui/badge';
```

```tsx
<Badge />
```

## Examples

### Basic

A small overlay on another element to indicate a count or status.

```tsx
import { Badge } from '@primereact/ui/badge';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Badge>Badge</Badge>
        </div>
    );
}

```

### Severity

The `severity` property defines the visual style of a badge.

```tsx
import { Badge } from '@primereact/ui/badge';

export default function SeverityDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Badge>Default</Badge>
            <Badge severity="secondary">Secondary</Badge>
            <Badge severity="success">Success</Badge>
            <Badge severity="info">Info</Badge>
            <Badge severity="warn">Warning</Badge>
            <Badge severity="danger">Danger</Badge>
            <Badge severity="contrast">Contrast</Badge>
        </div>
    );
}

```

### Size

Use the `size` property to change the size of a badge.

```tsx
import { Badge } from '@primereact/ui/badge';

export default function SizeDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge size="small">Small</Badge>
            <Badge>Default</Badge>
            <Badge size="large">Large</Badge>
            <Badge size="xlarge">XLarge</Badge>
        </div>
    );
}

```

### Overlay

A badge can be added to any element by encapsulating the content with the `OverlayBadge` component.

```tsx
import { Bell } from '@primeicons/react/bell';
import { Calendar } from '@primeicons/react/calendar';
import { Envelope } from '@primeicons/react/envelope';
import { Badge } from '@primereact/ui/badge';
import { OverlayBadge } from '@primereact/ui/overlaybadge';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            <OverlayBadge>
                <Bell className="size-6!" />
                <Badge shape="circle">2</Badge>
            </OverlayBadge>
            <OverlayBadge>
                <Calendar className="size-6!" />
                <Badge shape="circle" severity="danger">
                    4
                </Badge>
            </OverlayBadge>
            <OverlayBadge>
                <Envelope className="size-6!" />
                <Badge shape="circle"></Badge>
            </OverlayBadge>
        </div>
    );
}

```

### Button

Buttons have built-in support for badges to display a badge inline.

```tsx
import { Bell } from '@primeicons/react/bell';
import { Users } from '@primeicons/react/users';
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { OverlayBadge } from '@primereact/ui/overlaybadge';

export default function ButtonDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button type="button">
                Emails
                <Badge severity="secondary" shape="circle">
                    8
                </Badge>
            </Button>

            <Button type="button" variant="outlined">
                <Users />
                Messages
                <Badge severity="contrast" shape="circle">
                    2
                </Badge>
            </Button>

            <OverlayBadge>
                <Button type="button" variant="outlined" iconOnly>
                    <Bell />
                </Button>
                <Badge severity="info" className="animate-pulse" />
            </OverlayBadge>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/badge.md#api) for `Badge` and `OverlayBadge` component documentation.

### Hooks

See [Headless API](../../headless/components/badge.md#api) for `useBadge` hook documentation.

### Accessibility

See [Badge Primitive](../../primitive/components/badge.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-badge | Class name of the root element |

| ClassName | Description |
|:------|:------|
| p-overlaybadge | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| badge.border.radius | --p-badge-border-radius | Border radius of root |
| badge.padding | --p-badge-padding | Padding of root |
| badge.font.size | --p-badge-font-size | Font size of root |
| badge.font.weight | --p-badge-font-weight | Font weight of root |
| badge.min.width | --p-badge-min-width | Min width of root |
| badge.height | --p-badge-height | Height of root |
| badge.dot.size | --p-badge-dot-size | Size of dot |
| badge.sm.font.size | --p-badge-sm-font-size | Font size of sm |
| badge.sm.min.width | --p-badge-sm-min-width | Min width of sm |
| badge.sm.height | --p-badge-sm-height | Height of sm |
| badge.lg.font.size | --p-badge-lg-font-size | Font size of lg |
| badge.lg.min.width | --p-badge-lg-min-width | Min width of lg |
| badge.lg.height | --p-badge-lg-height | Height of lg |
| badge.xl.font.size | --p-badge-xl-font-size | Font size of xl |
| badge.xl.min.width | --p-badge-xl-min-width | Min width of xl |
| badge.xl.height | --p-badge-xl-height | Height of xl |
| badge.primary.background | --p-badge-primary-background | Background of primary |
| badge.primary.color | --p-badge-primary-color | Color of primary |
| badge.secondary.background | --p-badge-secondary-background | Background of secondary |
| badge.secondary.color | --p-badge-secondary-color | Color of secondary |
| badge.success.background | --p-badge-success-background | Background of success |
| badge.success.color | --p-badge-success-color | Color of success |
| badge.info.background | --p-badge-info-background | Background of info |
| badge.info.color | --p-badge-info-color | Color of info |
| badge.warn.background | --p-badge-warn-background | Background of warn |
| badge.warn.color | --p-badge-warn-color | Color of warn |
| badge.danger.background | --p-badge-danger-background | Background of danger |
| badge.danger.color | --p-badge-danger-color | Color of danger |
| badge.contrast.background | --p-badge-contrast-background | Background of contrast |
| badge.contrast.color | --p-badge-contrast-color | Color of contrast |
