# Button

Button is an extension to standard input element with icons and theming.

```tsx
import { Button } from '@primereact/ui/button';

export default function Preview() {
    return (
        <div className="flex justify-center">
            <Button>Submit</Button>
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
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Bell } from '@primeicons/react/bell';
import { Users } from '@primeicons/react/users';

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
                <Button type="button" variant="outlined">
                    <Bell />
                </Button>
                <Badge severity="info" className="animate-pulse" />
            </OverlayBadge>
        </div>
    );
}
```

### Button Group

Multiple buttons are grouped when wrapped inside a `ButtonGroup` component.

```tsx
import { Button } from '@primereact/ui/button';
import { ButtonGroup } from '@primereact/ui/buttongroup';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import { Trash } from '@primeicons/react/trash';

export default function GroupDemo() {
    return (
        <div className="flex justify-center">
            <ButtonGroup>
                <Button>
                    <Check />
                    Save
                </Button>
                <Button>
                    <Trash />
                    Delete
                </Button>
                <Button>
                    <Times />
                    Cancel
                </Button>
            </ButtonGroup>
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

## API

### Sub-Components

See [Primitive API](../../primitive/button/features.md#api) for `ButtonRoot` and `ButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/button/features.md#api) for `useButton` hook documentation.

## Accessibility

See [Button Primitive](../../primitive/button/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
