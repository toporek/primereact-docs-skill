# Card

Card is a flexible container component.

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardBody, CardCaption, CardContent, CardFooter, CardSubTitle, CardTitle } from '@/components/ui/card';

export default function Preview() {
    return (
        <Card className="max-w-sm mx-auto">
            <CardBody className="space-y-4">
                <CardCaption>
                    <CardTitle>Pro Subscription</CardTitle>
                    <CardSubTitle>Everything you need to scale your workflow</CardSubTitle>
                </CardCaption>
                <CardContent>
                    <p>Get unlimited access to all features, priority support, and advanced analytics to help your team grow faster.</p>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <span className="text-lg font-medium">$29 / month</span>
                    <Button className="w-full">Upgrade</Button>
                </CardFooter>
            </CardBody>
        </Card>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/card.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Card, CardBody, CardCaption, CardContent, CardFooter, CardSubTitle, CardTitle } from '@/components/ui/card';
```

```tsx
<Card>
    <CardBody>
        <CardCaption>
            <CardTitle>Title</CardTitle>
            <CardSubTitle>Subtitle</CardSubTitle>
        </CardCaption>
        <CardContent />
        <CardFooter />
    </CardBody>
</Card>
```

## Examples

### Basic

```tsx
import { Card, CardBody, CardCaption, CardContent, CardFooter, CardSubTitle, CardTitle } from '@/components/ui/card';

export default function BasicDemo() {
    return (
        <Card className="max-w-sm mx-auto">
            <CardBody className="space-y-4">
                <CardCaption>
                    <CardTitle>Starter Plan</CardTitle>
                    <CardSubTitle>For personal projects</CardSubTitle>
                </CardCaption>

                <CardContent>
                    <p className="m-0">Includes essential features, basic analytics and access to community support.</p>
                </CardContent>
                <CardFooter className="text-sm text-surface-500 dark:text-surface-400">Cancel anytime. No credit card required.</CardFooter>
            </CardBody>
        </Card>
    );
}

```

### With Form

Use `Card`, `Card.Body`, `Card.Caption`, `Card.Title`, `Card.Subtitle`, `Card.Content`, `Card.Footer`, to create a simple card.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardBody, CardCaption, CardContent, CardFooter, CardSubTitle, CardTitle } from '@/components/ui/card';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function WithFormDemo() {
    return (
        <Card className="max-w-sm mx-auto">
            <CardBody className="space-y-4">
                <CardCaption>
                    <CardTitle>Welcome back</CardTitle>
                    <CardSubTitle>Sign in with your email to continue.</CardSubTitle>
                </CardCaption>
                <CardContent>
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
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button>Login</Button>
                    <Button severity="secondary" variant="outlined">
                        Login with Google
                    </Button>
                    <div className="mt-2 text-center text-surface-500 text-sm">
                        Don't have an account?{' '}
                        <Button as={Link} href="/signup" variant="link" className="p-0">
                            Sign up
                        </Button>
                    </div>
                </CardFooter>
            </CardBody>
        </Card>
    );
}

```

### Advanced

Use `Card.Header` to place an image, avatar or other content in the header.

```tsx
import { Globe, MapMarker, Phone, StarFill } from '@primeicons/react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardBody, CardCaption, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag } from '@/components/ui/tag';

export default function AdvancedDemo() {
    return (
        <Card className="max-w-sm mx-auto overflow-hidden">
            <CardHeader className="relative">
                <img
                    className="w-full max-h-42 object-cover"
                    alt="user header"
                    src="https://images.unsplash.com/photo-1513649718256-1a7162666bad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Avatar shape="circle" className="w-24 h-24 border-3 border-surface-0 dark:border-surface-900 absolute -bottom-12 left-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1722495178488-c8056c4ec2c0?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Avatar>
            </CardHeader>
            <CardBody className="pt-16">
                <CardCaption>
                    <CardTitle className="font-bold text-xl">Sakura Fresh Market</CardTitle>
                    <div className="flex items-center gap-2">
                        <Tag className="w-fit" severity="info">
                            Daily
                        </Tag>
                        <Tag className="w-fit" severity="info">
                            Premium
                        </Tag>
                    </div>
                </CardCaption>
                <CardContent className="space-y-4">
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
                </CardContent>
                <CardFooter className="flex items-center gap-2 mt-4">
                    <Button className="flex-1" severity="secondary" variant="outlined">
                        <Phone />
                        Call Us
                    </Button>
                    <Button className="flex-1">
                        <Globe />
                        Visit Site
                    </Button>
                </CardFooter>
            </CardBody>
        </Card>
    );
}

```

## Accessibility

### Screen Reader

`Card` is a structural container. If the card represents a standalone content region, provide an accessible name using `aria-label` or `aria-labelledby` on `Card.Root`.

### Keyboard Support

`Card` does not include built-in keyboard interaction. Keyboard behavior depends on interactive elements placed inside the card (for example buttons, links, or form controls).
