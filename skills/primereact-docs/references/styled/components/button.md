# Button

Button is an extension to standard input element with icons and theming.

```tsx
import { Button } from '@primereact/ui/button';

export default function Preview() {
    return (
        <div className="flex justify-center gap-2">
            <Button variant="outlined">Reject</Button>
            <Button>Accept</Button>
        </div>
    );
}

```

## Usage

```tsx
import { Button } from '@primereact/ui/button';
import { ButtonGroup } from '@primereact/ui/buttongroup';
```

```tsx
<ButtonGroup>
    <Button />
</ButtonGroup>
```

## Examples

### Basic

A standard button with label, icon, and various severity options.

```tsx
import { Button } from '@primereact/ui/button';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Button>Submit</Button>
        </div>
    );
}

```

### Icons

```tsx
import { Button } from '@primereact/ui/button';
import { Check } from '@primeicons/react/check';
import { Home } from '@primeicons/react/home';
import { Refresh } from '@primeicons/react/refresh';
import { Search } from '@primeicons/react/search';
import { User } from '@primeicons/react/user';

export default function IconDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
                <Button aria-label="Save">
                    <Home />
                </Button>
                <Button>
                    <User />
                    Profile
                </Button>
                <Button>
                    Save
                    <Check />
                </Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                <Button className="flex-col">
                    <Search />
                    Search
                </Button>
                <Button className="flex-col">
                    Update
                    <Refresh />
                </Button>
            </div>
        </div>
    );
}

```

### Loading

```tsx
'use client';
import { Check } from '@primeicons/react/check';
import { Spinner } from '@primeicons/react/spinner';
import { Button } from '@primereact/ui/button';
import { useState } from 'react';

export default function LoadingDemo() {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <Button type="button" onClick={load} disabled={loading}>
                {loading ? <Spinner className="animate-spin" /> : <Check />}
                {loading ? 'Loading...' : 'Search'}
            </Button>
            <Button type="button" onClick={load} disabled={loading} iconOnly>
                {loading ? <Spinner className="animate-spin" /> : <Check />}
            </Button>
        </div>
    );
}

```

### As Link

Use `as="a"` to render a button as HTML anchor tag or use `as={Link}` to use Next.js Link.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import Link from 'next/link';

export default function LinkDemo() {
    return (
        <div className="flex justify-center gap-4">
            <Button variant="link">Link</Button>
            <Button as="a" href="https://reactjs.org/" target="_blank" rel="noopener">
                External
            </Button>
            <Button as={Link} href="/">
                Router
            </Button>
        </div>
    );
}

```

### Severity

The `severity` property defines the variant of a button.

```tsx
import { Button } from '@primereact/ui/button';

export default function SeverityDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button>Primary</Button>
            <Button severity="secondary">Secondary</Button>
            <Button severity="success">Success</Button>
            <Button severity="info">Info</Button>
            <Button severity="warn">Warn</Button>
            <Button severity="help">Help</Button>
            <Button severity="danger">Danger</Button>
            <Button severity="contrast">Contrast</Button>
        </div>
    );
}

```

### Raised

Raised buttons display a shadow to indicate elevation.

```tsx
import { Button } from '@primereact/ui/button';

export default function RaisedDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button raised>Primary</Button>
            <Button severity="secondary" raised>
                Secondary
            </Button>
            <Button severity="success" raised>
                Success
            </Button>
            <Button severity="info" raised>
                Info
            </Button>
            <Button severity="warn" raised>
                Warn
            </Button>
            <Button severity="help" raised>
                Help
            </Button>
            <Button severity="danger" raised>
                Danger
            </Button>
            <Button severity="contrast" raised>
                Contrast
            </Button>
        </div>
    );
}

```

### Rounded

Rounded buttons have a circular border radius.

```tsx
import { Button } from '@primereact/ui/button';

export default function RoundedDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button rounded>Primary</Button>
            <Button severity="secondary" rounded>
                Secondary
            </Button>
            <Button severity="success" rounded>
                Success
            </Button>
            <Button severity="info" rounded>
                Info
            </Button>
            <Button severity="warn" rounded>
                Warn
            </Button>
            <Button severity="help" rounded>
                Help
            </Button>
            <Button severity="danger" rounded>
                Danger
            </Button>
            <Button severity="contrast" rounded>
                Contrast
            </Button>
        </div>
    );
}

```

### Text

Text buttons are displayed as textual elements.

```tsx
import { Button } from '@primereact/ui/button';

export default function TextDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button variant="text">Primary</Button>
            <Button severity="secondary" variant="text">
                Secondary
            </Button>
            <Button severity="success" variant="text">
                Success
            </Button>
            <Button severity="info" variant="text">
                Info
            </Button>
            <Button severity="warn" variant="text">
                Warn
            </Button>
            <Button severity="help" variant="text">
                Help
            </Button>
            <Button severity="danger" variant="text">
                Danger
            </Button>
            <Button severity="contrast" variant="text">
                Contrast
            </Button>
        </div>
    );
}

```

### Raised Text

Text buttons can be displayed elevated with the `raised` option.

```tsx
import { Button } from '@primereact/ui/button';

export default function RaisedTextDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button raised variant="text">
                Primary
            </Button>
            <Button raised severity="secondary" variant="text">
                Secondary
            </Button>
            <Button raised severity="success" variant="text">
                Success
            </Button>
            <Button raised severity="info" variant="text">
                Info
            </Button>
            <Button raised severity="warn" variant="text">
                Warn
            </Button>
            <Button raised severity="help" variant="text">
                Help
            </Button>
            <Button raised severity="danger" variant="text">
                Danger
            </Button>
            <Button raised severity="contrast" variant="text">
                Contrast
            </Button>
        </div>
    );
}

```

### Outlined

Outlined buttons display a border without a transparent background.

```tsx
import { Button } from '@primereact/ui/button';

export default function OutlinedDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button variant="outlined">Primary</Button>
            <Button severity="secondary" variant="outlined">
                Secondary
            </Button>
            <Button severity="success" variant="outlined">
                Success
            </Button>
            <Button severity="info" variant="outlined">
                Info
            </Button>
            <Button severity="warn" variant="outlined">
                Warn
            </Button>
            <Button severity="help" variant="outlined">
                Help
            </Button>
            <Button severity="danger" variant="outlined">
                Danger
            </Button>
            <Button severity="contrast" variant="outlined">
                Contrast
            </Button>
        </div>
    );
}

```

### Icon Only

Buttons can have icons without labels. Use `iconOnly` to display only an icon.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { useState } from 'react';
import { Bell } from '@primeicons/react/bell';
import { Bookmark } from '@primeicons/react/bookmark';
import { Check } from '@primeicons/react/check';
import { Heart } from '@primeicons/react/heart';
import { Search } from '@primeicons/react/search';
import { Star } from '@primeicons/react/star';
import { Times } from '@primeicons/react/times';
import { User } from '@primeicons/react/user';

export default function IconOnlyDemo() {
    /*const sizeOptions = useRef([
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' }
    ]);*/

    const [size] = useState<'small' | 'normal' | 'large'>('normal');

    return (
        <div>
            <div className="flex justify-center mb-8">
                {/*<SelectButton v-model="size" :options="sizeOptions" optionLabel="label" optionValue="value" dataKey="label" />*/}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button aria-label="Filter" size={size} iconOnly>
                    <Check />
                </Button>
                <Button severity="secondary" aria-label="Bookmark" size={size} iconOnly>
                    <Bookmark />
                </Button>
                <Button severity="success" aria-label="Search" size={size} iconOnly>
                    <Search />
                </Button>
                <Button severity="info" aria-label="User" size={size} iconOnly>
                    <User />
                </Button>
                <Button severity="warn" aria-label="Notification" size={size} iconOnly>
                    <Bell />
                </Button>
                <Button severity="help" aria-label="Favorite" size={size} iconOnly>
                    <Heart />
                </Button>
                <Button severity="danger" aria-label="Cancel" size={size} iconOnly>
                    <Times />
                </Button>
                <Button severity="contrast" aria-label="Star" size={size} iconOnly>
                    <Star />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button rounded aria-label="Filter" size={size} iconOnly>
                    <Check />
                </Button>
                <Button severity="secondary" rounded aria-label="Bookmark" size={size} iconOnly>
                    <Bookmark />
                </Button>
                <Button severity="success" rounded aria-label="Search" size={size} iconOnly>
                    <Search />
                </Button>
                <Button severity="info" rounded aria-label="User" size={size} iconOnly>
                    <User />
                </Button>
                <Button severity="warn" rounded aria-label="Notification" size={size} iconOnly>
                    <Bell />
                </Button>
                <Button severity="help" rounded aria-label="Favorite" size={size} iconOnly>
                    <Heart />
                </Button>
                <Button severity="danger" rounded aria-label="Cancel" size={size} iconOnly>
                    <Times />
                </Button>
                <Button severity="contrast" rounded aria-label="Star" size={size} iconOnly>
                    <Star />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button rounded variant="outlined" aria-label="Filter" size={size} iconOnly>
                    <Check />
                </Button>
                <Button severity="secondary" rounded variant="outlined" aria-label="Bookmark" size={size} iconOnly>
                    <Bookmark />
                </Button>
                <Button severity="success" rounded variant="outlined" aria-label="Search" size={size} iconOnly>
                    <Search />
                </Button>
                <Button severity="info" rounded variant="outlined" aria-label="User" size={size} iconOnly>
                    <User />
                </Button>
                <Button severity="warn" rounded variant="outlined" aria-label="Notification" size={size} iconOnly>
                    <Bell />
                </Button>
                <Button severity="help" rounded variant="outlined" aria-label="Favorite" size={size} iconOnly>
                    <Heart />
                </Button>
                <Button severity="danger" rounded variant="outlined" aria-label="Cancel" size={size} iconOnly>
                    <Times />
                </Button>
                <Button severity="contrast" rounded variant="outlined" aria-label="Star" size={size} iconOnly>
                    <Star />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button rounded raised aria-label="Filter" size={size} iconOnly>
                    <Check />
                </Button>
                <Button severity="secondary" rounded raised aria-label="Bookmark" size={size} iconOnly>
                    <Bookmark />
                </Button>
                <Button severity="success" rounded raised aria-label="Search" size={size} iconOnly>
                    <Search />
                </Button>
                <Button severity="info" rounded raised aria-label="User" size={size} iconOnly>
                    <User />
                </Button>
                <Button severity="warn" rounded raised aria-label="Notification" size={size} iconOnly>
                    <Bell />
                </Button>
                <Button severity="help" rounded raised aria-label="Favorite" size={size} iconOnly>
                    <Heart />
                </Button>
                <Button severity="danger" rounded raised aria-label="Cancel" size={size} iconOnly>
                    <Times />
                </Button>
                <Button severity="contrast" rounded raised aria-label="Star" size={size} iconOnly>
                    <Star />
                </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <Button rounded variant="text" aria-label="Filter" size={size} iconOnly>
                    <Check />
                </Button>
                <Button severity="secondary" rounded variant="text" aria-label="Bookmark" size={size} iconOnly>
                    <Bookmark />
                </Button>
                <Button severity="success" rounded variant="text" aria-label="Search" size={size} iconOnly>
                    <Search />
                </Button>
                <Button severity="info" rounded variant="text" aria-label="User" size={size} iconOnly>
                    <User />
                </Button>
                <Button severity="warn" rounded variant="text" aria-label="Notification" size={size} iconOnly>
                    <Bell />
                </Button>
                <Button severity="help" rounded variant="text" aria-label="Favorite" size={size} iconOnly>
                    <Heart />
                </Button>
                <Button severity="danger" rounded variant="text" aria-label="Cancel" size={size} iconOnly>
                    <Times />
                </Button>
                <Button severity="contrast" rounded variant="text" aria-label="Star" size={size} iconOnly>
                    <Star />
                </Button>
            </div>
        </div>
    );
}

```

### Badge

`Badge` component can be used to display a badge inside a button. `OverlayBadge` is used to display a badge on a button.

```tsx
import { Bell } from '@primeicons/react/bell';
import { Users } from '@primeicons/react/users';
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { OverlayBadge } from '@primereact/ui/overlaybadge';

export default function BadgeDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button type="button">
                Emails
                <Badge severity="secondary" shape="circle">
                    2
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

### Sizes

Button provides `small` and `large` sizes as alternatives to the base.

```tsx
import { Button } from '@primereact/ui/button';
import { Check } from '@primeicons/react/check';

export default function SizeDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="small">
                <Check />
                Small
            </Button>
            <Button>
                <Check />
                Normal
            </Button>
            <Button size="large">
                <Check />
                Large
            </Button>
        </div>
    );
}

```

### Disabled

When `disabled` is present, the element cannot be used.

```tsx
import { Button } from '@primereact/ui/button';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Button disabled>Submit</Button>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/button.md#api) for `ButtonRoot` and `ButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/components/button.md#api) for `useButton` hook documentation.

### Accessibility

See [Button Primitive](../../primitive/components/button.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-button | Class name of the root element |
| p-button-loading-icon | Class name of the loading icon element |
| p-button-icon | Class name of the icon element |
| p-button-label | Class name of the label element |

| ClassName | Description |
|:------|:------|
| p-buttongroup | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| button.border.radius | --p-button-border-radius | Border radius of root |
| button.rounded.border.radius | --p-button-rounded-border-radius | Rounded border radius of root |
| button.gap | --p-button-gap | Gap of root |
| button.padding.x | --p-button-padding-x | Padding x of root |
| button.padding.y | --p-button-padding-y | Padding y of root |
| button.icon.only.width | --p-button-icon-only-width | Icon only width of root |
| button.icon.only.width | --p-button-icon-only-width | Font size of root |
| button.sm.font.size | --p-button-sm-font-size | Sm font size of root |
| button.sm.padding.x | --p-button-sm-padding-x | Sm padding x of root |
| button.sm.padding.y | --p-button-sm-padding-y | Sm padding y of root |
| button.sm.icon.only.width | --p-button-sm-icon-only-width | Sm icon only width of root |
| button.lg.font.size | --p-button-lg-font-size | Lg font size of root |
| button.lg.padding.x | --p-button-lg-padding-x | Lg padding x of root |
| button.lg.padding.y | --p-button-lg-padding-y | Lg padding y of root |
| button.lg.icon.only.width | --p-button-lg-icon-only-width | Lg icon only width of root |
| button.label.font.weight | --p-button-label-font-weight | Label font weight of root |
| button.raised.shadow | --p-button-raised-shadow | Raised shadow of root |
| button.focus.ring.width | --p-button-focus-ring-width | Focus ring width of root |
| button.focus.ring.style | --p-button-focus-ring-style | Focus ring style of root |
| button.focus.ring.offset | --p-button-focus-ring-offset | Focus ring offset of root |
| button.badge.size | --p-button-badge-size | Badge size of root |
| button.transition.duration | --p-button-transition-duration | Transition duration of root |
| button.primary.background | --p-button-primary-background | Primary background of root |
| button.primary.hover.background | --p-button-primary-hover-background | Primary hover background of root |
| button.primary.active.background | --p-button-primary-active-background | Primary active background of root |
| button.primary.border.color | --p-button-primary-border-color | Primary border color of root |
| button.primary.hover.border.color | --p-button-primary-hover-border-color | Primary hover border color of root |
| button.primary.active.border.color | --p-button-primary-active-border-color | Primary active border color of root |
| button.primary.color | --p-button-primary-color | Primary color of root |
| button.primary.hover.color | --p-button-primary-hover-color | Primary hover color of root |
| button.primary.active.color | --p-button-primary-active-color | Primary active color of root |
| button.primary.focus.ring.color | --p-button-primary-focus-ring-color | Primary focus ring color of root |
| button.primary.focus.ring.shadow | --p-button-primary-focus-ring-shadow | Primary focus ring shadow of root |
| button.secondary.background | --p-button-secondary-background | Secondary background of root |
| button.secondary.hover.background | --p-button-secondary-hover-background | Secondary hover background of root |
| button.secondary.active.background | --p-button-secondary-active-background | Secondary active background of root |
| button.secondary.border.color | --p-button-secondary-border-color | Secondary border color of root |
| button.secondary.hover.border.color | --p-button-secondary-hover-border-color | Secondary hover border color of root |
| button.secondary.active.border.color | --p-button-secondary-active-border-color | Secondary active border color of root |
| button.secondary.color | --p-button-secondary-color | Secondary color of root |
| button.secondary.hover.color | --p-button-secondary-hover-color | Secondary hover color of root |
| button.secondary.active.color | --p-button-secondary-active-color | Secondary active color of root |
| button.secondary.focus.ring.color | --p-button-secondary-focus-ring-color | Secondary focus ring color of root |
| button.secondary.focus.ring.shadow | --p-button-secondary-focus-ring-shadow | Secondary focus ring shadow of root |
| button.info.background | --p-button-info-background | Info background of root |
| button.info.hover.background | --p-button-info-hover-background | Info hover background of root |
| button.info.active.background | --p-button-info-active-background | Info active background of root |
| button.info.border.color | --p-button-info-border-color | Info border color of root |
| button.info.hover.border.color | --p-button-info-hover-border-color | Info hover border color of root |
| button.info.active.border.color | --p-button-info-active-border-color | Info active border color of root |
| button.info.color | --p-button-info-color | Info color of root |
| button.info.hover.color | --p-button-info-hover-color | Info hover color of root |
| button.info.active.color | --p-button-info-active-color | Info active color of root |
| button.info.focus.ring.color | --p-button-info-focus-ring-color | Info focus ring color of root |
| button.info.focus.ring.shadow | --p-button-info-focus-ring-shadow | Info focus ring shadow of root |
| button.success.background | --p-button-success-background | Success background of root |
| button.success.hover.background | --p-button-success-hover-background | Success hover background of root |
| button.success.active.background | --p-button-success-active-background | Success active background of root |
| button.success.border.color | --p-button-success-border-color | Success border color of root |
| button.success.hover.border.color | --p-button-success-hover-border-color | Success hover border color of root |
| button.success.active.border.color | --p-button-success-active-border-color | Success active border color of root |
| button.success.color | --p-button-success-color | Success color of root |
| button.success.hover.color | --p-button-success-hover-color | Success hover color of root |
| button.success.active.color | --p-button-success-active-color | Success active color of root |
| button.success.focus.ring.color | --p-button-success-focus-ring-color | Success focus ring color of root |
| button.success.focus.ring.shadow | --p-button-success-focus-ring-shadow | Success focus ring shadow of root |
| button.warn.background | --p-button-warn-background | Warn background of root |
| button.warn.hover.background | --p-button-warn-hover-background | Warn hover background of root |
| button.warn.active.background | --p-button-warn-active-background | Warn active background of root |
| button.warn.border.color | --p-button-warn-border-color | Warn border color of root |
| button.warn.hover.border.color | --p-button-warn-hover-border-color | Warn hover border color of root |
| button.warn.active.border.color | --p-button-warn-active-border-color | Warn active border color of root |
| button.warn.color | --p-button-warn-color | Warn color of root |
| button.warn.hover.color | --p-button-warn-hover-color | Warn hover color of root |
| button.warn.active.color | --p-button-warn-active-color | Warn active color of root |
| button.warn.focus.ring.color | --p-button-warn-focus-ring-color | Warn focus ring color of root |
| button.warn.focus.ring.shadow | --p-button-warn-focus-ring-shadow | Warn focus ring shadow of root |
| button.help.background | --p-button-help-background | Help background of root |
| button.help.hover.background | --p-button-help-hover-background | Help hover background of root |
| button.help.active.background | --p-button-help-active-background | Help active background of root |
| button.help.border.color | --p-button-help-border-color | Help border color of root |
| button.help.hover.border.color | --p-button-help-hover-border-color | Help hover border color of root |
| button.help.active.border.color | --p-button-help-active-border-color | Help active border color of root |
| button.help.color | --p-button-help-color | Help color of root |
| button.help.hover.color | --p-button-help-hover-color | Help hover color of root |
| button.help.active.color | --p-button-help-active-color | Help active color of root |
| button.help.focus.ring.color | --p-button-help-focus-ring-color | Help focus ring color of root |
| button.help.focus.ring.shadow | --p-button-help-focus-ring-shadow | Help focus ring shadow of root |
| button.danger.background | --p-button-danger-background | Danger background of root |
| button.danger.hover.background | --p-button-danger-hover-background | Danger hover background of root |
| button.danger.active.background | --p-button-danger-active-background | Danger active background of root |
| button.danger.border.color | --p-button-danger-border-color | Danger border color of root |
| button.danger.hover.border.color | --p-button-danger-hover-border-color | Danger hover border color of root |
| button.danger.active.border.color | --p-button-danger-active-border-color | Danger active border color of root |
| button.danger.color | --p-button-danger-color | Danger color of root |
| button.danger.hover.color | --p-button-danger-hover-color | Danger hover color of root |
| button.danger.active.color | --p-button-danger-active-color | Danger active color of root |
| button.danger.focus.ring.color | --p-button-danger-focus-ring-color | Danger focus ring color of root |
| button.danger.focus.ring.shadow | --p-button-danger-focus-ring-shadow | Danger focus ring shadow of root |
| button.contrast.background | --p-button-contrast-background | Contrast background of root |
| button.contrast.hover.background | --p-button-contrast-hover-background | Contrast hover background of root |
| button.contrast.active.background | --p-button-contrast-active-background | Contrast active background of root |
| button.contrast.border.color | --p-button-contrast-border-color | Contrast border color of root |
| button.contrast.hover.border.color | --p-button-contrast-hover-border-color | Contrast hover border color of root |
| button.contrast.active.border.color | --p-button-contrast-active-border-color | Contrast active border color of root |
| button.contrast.color | --p-button-contrast-color | Contrast color of root |
| button.contrast.hover.color | --p-button-contrast-hover-color | Contrast hover color of root |
| button.contrast.active.color | --p-button-contrast-active-color | Contrast active color of root |
| button.contrast.focus.ring.color | --p-button-contrast-focus-ring-color | Contrast focus ring color of root |
| button.contrast.focus.ring.shadow | --p-button-contrast-focus-ring-shadow | Contrast focus ring shadow of root |
| button.outlined.primary.hover.background | --p-button-outlined-primary-hover-background | Primary hover background of outlined |
| button.outlined.primary.active.background | --p-button-outlined-primary-active-background | Primary active background of outlined |
| button.outlined.primary.border.color | --p-button-outlined-primary-border-color | Primary border color of outlined |
| button.outlined.primary.color | --p-button-outlined-primary-color | Primary color of outlined |
| button.outlined.secondary.hover.background | --p-button-outlined-secondary-hover-background | Secondary hover background of outlined |
| button.outlined.secondary.active.background | --p-button-outlined-secondary-active-background | Secondary active background of outlined |
| button.outlined.secondary.border.color | --p-button-outlined-secondary-border-color | Secondary border color of outlined |
| button.outlined.secondary.color | --p-button-outlined-secondary-color | Secondary color of outlined |
| button.outlined.success.hover.background | --p-button-outlined-success-hover-background | Success hover background of outlined |
| button.outlined.success.active.background | --p-button-outlined-success-active-background | Success active background of outlined |
| button.outlined.success.border.color | --p-button-outlined-success-border-color | Success border color of outlined |
| button.outlined.success.color | --p-button-outlined-success-color | Success color of outlined |
| button.outlined.info.hover.background | --p-button-outlined-info-hover-background | Info hover background of outlined |
| button.outlined.info.active.background | --p-button-outlined-info-active-background | Info active background of outlined |
| button.outlined.info.border.color | --p-button-outlined-info-border-color | Info border color of outlined |
| button.outlined.info.color | --p-button-outlined-info-color | Info color of outlined |
| button.outlined.warn.hover.background | --p-button-outlined-warn-hover-background | Warn hover background of outlined |
| button.outlined.warn.active.background | --p-button-outlined-warn-active-background | Warn active background of outlined |
| button.outlined.warn.border.color | --p-button-outlined-warn-border-color | Warn border color of outlined |
| button.outlined.warn.color | --p-button-outlined-warn-color | Warn color of outlined |
| button.outlined.help.hover.background | --p-button-outlined-help-hover-background | Help hover background of outlined |
| button.outlined.help.active.background | --p-button-outlined-help-active-background | Help active background of outlined |
| button.outlined.help.border.color | --p-button-outlined-help-border-color | Help border color of outlined |
| button.outlined.help.color | --p-button-outlined-help-color | Help color of outlined |
| button.outlined.danger.hover.background | --p-button-outlined-danger-hover-background | Danger hover background of outlined |
| button.outlined.danger.active.background | --p-button-outlined-danger-active-background | Danger active background of outlined |
| button.outlined.danger.border.color | --p-button-outlined-danger-border-color | Danger border color of outlined |
| button.outlined.danger.color | --p-button-outlined-danger-color | Danger color of outlined |
| button.outlined.contrast.hover.background | --p-button-outlined-contrast-hover-background | Contrast hover background of outlined |
| button.outlined.contrast.active.background | --p-button-outlined-contrast-active-background | Contrast active background of outlined |
| button.outlined.contrast.border.color | --p-button-outlined-contrast-border-color | Contrast border color of outlined |
| button.outlined.contrast.color | --p-button-outlined-contrast-color | Contrast color of outlined |
| button.outlined.plain.hover.background | --p-button-outlined-plain-hover-background | Plain hover background of outlined |
| button.outlined.plain.active.background | --p-button-outlined-plain-active-background | Plain active background of outlined |
| button.outlined.plain.border.color | --p-button-outlined-plain-border-color | Plain border color of outlined |
| button.outlined.plain.color | --p-button-outlined-plain-color | Plain color of outlined |
| button.text.primary.hover.background | --p-button-text-primary-hover-background | Primary hover background of text |
| button.text.primary.active.background | --p-button-text-primary-active-background | Primary active background of text |
| button.text.primary.color | --p-button-text-primary-color | Primary color of text |
| button.text.secondary.hover.background | --p-button-text-secondary-hover-background | Secondary hover background of text |
| button.text.secondary.active.background | --p-button-text-secondary-active-background | Secondary active background of text |
| button.text.secondary.color | --p-button-text-secondary-color | Secondary color of text |
| button.text.success.hover.background | --p-button-text-success-hover-background | Success hover background of text |
| button.text.success.active.background | --p-button-text-success-active-background | Success active background of text |
| button.text.success.color | --p-button-text-success-color | Success color of text |
| button.text.info.hover.background | --p-button-text-info-hover-background | Info hover background of text |
| button.text.info.active.background | --p-button-text-info-active-background | Info active background of text |
| button.text.info.color | --p-button-text-info-color | Info color of text |
| button.text.warn.hover.background | --p-button-text-warn-hover-background | Warn hover background of text |
| button.text.warn.active.background | --p-button-text-warn-active-background | Warn active background of text |
| button.text.warn.color | --p-button-text-warn-color | Warn color of text |
| button.text.help.hover.background | --p-button-text-help-hover-background | Help hover background of text |
| button.text.help.active.background | --p-button-text-help-active-background | Help active background of text |
| button.text.help.color | --p-button-text-help-color | Help color of text |
| button.text.danger.hover.background | --p-button-text-danger-hover-background | Danger hover background of text |
| button.text.danger.active.background | --p-button-text-danger-active-background | Danger active background of text |
| button.text.danger.color | --p-button-text-danger-color | Danger color of text |
| button.text.contrast.hover.background | --p-button-text-contrast-hover-background | Contrast hover background of text |
| button.text.contrast.active.background | --p-button-text-contrast-active-background | Contrast active background of text |
| button.text.contrast.color | --p-button-text-contrast-color | Contrast color of text |
| button.text.plain.hover.background | --p-button-text-plain-hover-background | Plain hover background of text |
| button.text.plain.active.background | --p-button-text-plain-active-background | Plain active background of text |
| button.text.plain.color | --p-button-text-plain-color | Plain color of text |
| button.link.color | --p-button-link-color | Color of link |
| button.link.hover.color | --p-button-link-hover-color | Hover color of link |
| button.link.active.color | --p-button-link-active-color | Active color of link |
