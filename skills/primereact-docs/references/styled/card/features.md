# Card

Card is a flexible container component.

```tsx
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';

export default function Preview() {
    return (
        <Card.Root className="max-w-sm mx-auto">
            <Card.Body className="space-y-4">
                <Card.Caption>
                    <Card.Title> Pro Subscription</Card.Title>
                    <Card.Subtitle>Everything you need to scale your workflow</Card.Subtitle>
                </Card.Caption>
                <Card.Content>
                    <p> Get unlimited access to all features, priority support, and advanced analytics to help your team grow faster.</p>
                </Card.Content>
                <Card.Footer className="flex flex-col gap-4">
                    <span className="text-lg font-medium">$29 / month</span>

                    <Button fluid>Upgrade</Button>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
}
```

## Usage

```tsx
import { Card } from '@primereact/ui/card';
```

```tsx
<Card.Root>
    <Card.Body>
        <Card.Caption>
            <Card.Title />
            <Card.Subtitle />
        </Card.Caption>
        <Card.Content />
        <Card.Footer />
    </Card.Body>
</Card.Root>
```

## Examples

### Basic

A container with a header, body, and footer for structured content.

```tsx
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';

export default function BasicDemo() {
    return (
        <Card.Root className="max-w-sm mx-auto">
            <Card.Body className="space-y-4">
                <Card.Caption>
                    <Card.Title> Pro Subscription</Card.Title>
                    <Card.Subtitle>Everything you need to scale your workflow</Card.Subtitle>
                </Card.Caption>
                <Card.Content>
                    <p> Get unlimited access to all features, priority support, and advanced analytics to help your team grow faster.</p>
                </Card.Content>
                <Card.Footer className="flex flex-col gap-4">
                    <span className="text-lg font-medium">$29 / month</span>

                    <Button fluid>Upgrade</Button>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
}
```

### With Form

Use `Card`, `Card.Body`, `Card.Caption`, `Card.Title`, `Card.Subtitle`, `Card.Content`, `Card.Footer`, to create a simple card.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import Link from 'next/link';

export default function WithFormDemo() {
    return (
        <Card.Root className="max-w-sm mx-auto">
            <Card.Body className="space-y-4">
                <Card.Caption>
                    <Card.Title>Welcome back</Card.Title>
                    <Card.Subtitle>Sign in with your email to continue.</Card.Subtitle>
                </Card.Caption>
                <Card.Content>
                    <form className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <InputText id="email" type="email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="flex-1">
                                    Password
                                </Label>
                                <Button as={Link} href="/forgot-password" variant="link" className="p-0">
                                    Forgot password?
                                </Button>
                            </div>
                            <InputText id="password" type="password" />
                        </div>
                    </form>
                </Card.Content>
                <Card.Footer className="flex flex-col gap-4">
                    <Button>Login</Button>
                    <Button severity="secondary" variant="outlined">
                        Login with Google
                    </Button>
                    <div className="mt-2 text-center text-surface-500 text-sm">
                        Don’t have an account?{' '}
                        <Button as={Link} href="/signup" variant="link" className="p-0">
                            Sign up
                        </Button>
                    </div>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
}
```

### Advanced

Use `Card.Header` to place an image, avatar or other content in the header.

```tsx
import { Globe, MapMarker, Phone } from '@primeicons/react';
import { StarFill } from '@primeicons/react/star-fill';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';
import { Tag } from '@primereact/ui/tag';

export default function AdvancedDemo() {
    return (
        <Card.Root className="max-w-sm mx-auto overflow-hidden">
            <Card.Header className="relative">
                <img
                    className="w-full max-h-42 object-cover"
                    alt="user header"
                    src="https://images.unsplash.com/photo-1513649718256-1a7162666bad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Avatar.Root shape="circle" className="w-24 h-24 border-3 border-surface-0 dark:border-surface-900 absolute -bottom-12 left-4">
                    <Avatar.Image src="https://images.unsplash.com/photo-1722495178488-c8056c4ec2c0?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Avatar.Root>
            </Card.Header>
            <Card.Body className="pt-16">
                <Card.Caption>
                    <Card.Title className="font-bold text-xl">Sakura Fresh Market</Card.Title>
                    <div className="flex items-center gap-2">
                        <Tag className="w-fit" severity="info">
                            Daily
                        </Tag>
                        <Tag className="w-fit" severity="info">
                            Premium
                        </Tag>
                    </div>
                </Card.Caption>
                <Card.Content className="space-y-4">
                    <p>Sakura Fresh Market is your go-to store for fresh local produce, Japanese snacks, and daily essentials — all in one place!</p>
                    <div className="flex items-center gap-2">
                        <StarFill className="text-yellow-500"></StarFill>
                        <span>
                            <b>4.6</b> (200+ reviews)
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapMarker />
                        <span>Tokyo, Shibuya-ku</span>
                    </div>
                </Card.Content>
                <Card.Footer className="flex items-center gap-2 mt-4">
                    <Button className="flex-1" severity="secondary" variant="outlined">
                        <Phone />
                        Call Us
                    </Button>
                    <Button className="flex-1">
                        <Globe />
                        Visit Site
                    </Button>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/card/features.md#api) for `CardRoot`, `CardHeader`, `CardBody`, `CardCaption`, `CardTitle`, `CardSubtitle`, `CardContent`, and `CardFooter` component documentation.

### Hooks

See [Headless API](../../headless/card/features.md#api) for `useCard` hook documentation.

## Accessibility

See [Card Primitive](../../primitive/card/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
