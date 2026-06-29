# IconField

IconField wraps an input and an icon.

```tsx
import { CreditCard, Eye, Lock, Search, Spinner, Times } from '@primeicons/react';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { InputText } from '@/components/ui/inputtext';
import { InputPassword } from '@/components/ui/inputpassword';

export default function Preview() {
    return (
        <div className="flex flex-col gap-4 max-w-3xs w-full mx-auto">
            <IconField>
                <IconFieldInset>
                    <Search />
                </IconFieldInset>
                <InputText fluid placeholder="Search for everything" />
                <IconFieldInset>
                    <kbd className="text-xs font-medium leading-none!">⌘+K</kbd>
                </IconFieldInset>
            </IconField>
            <IconField>
                <InputText fluid variant="filled" placeholder="Processing..." />
                <IconFieldInset>
                    <Spinner className="animate-spin" />
                </IconFieldInset>
            </IconField>
            <IconField>
                <IconFieldInset>
                    <CreditCard />
                </IconFieldInset>
                <InputText fluid defaultValue="4352" />
                <IconFieldInset>
                    <Times />
                </IconFieldInset>
            </IconField>
            <IconField>
                <IconFieldInset>
                    <img
                        alt="US"
                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                        className="flag flag-us"
                        style={{ width: '20px', height: '13.5px' }}
                    />
                </IconFieldInset>
                <InputText fluid placeholder="+1 (___) ___-____" />
            </IconField>
            <IconField>
                <IconFieldInset>
                    <Lock />
                </IconFieldInset>
                <InputPassword variant="filled" fluid defaultValue="12345678" placeholder="Enter your password" />
                <IconFieldInset>
                    <Eye />
                </IconFieldInset>
            </IconField>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/iconfield.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
```

```tsx
<IconField>
    <IconFieldInset />
</IconField>
```

## Examples

### Basic

```tsx
import { Search, Spinner } from '@primeicons/react';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { InputText } from '@/components/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField>
                <IconFieldInset>
                    <Search />
                </IconFieldInset>
                <InputText placeholder="Search" />
            </IconField>
            <IconField>
                <InputText variant="filled" />
                <IconFieldInset>
                    <Spinner className="animate-spin" />
                </IconFieldInset>
            </IconField>
        </div>
    );
}

```

### Clickable

```tsx
'use client';
import { Search, Times } from '@primeicons/react';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { InputText } from '@/components/ui/inputtext';
import * as React from 'react';

export default function ClickableDemo() {
    const [value, setValue] = React.useState('PrimeReact');

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField>
                <IconFieldInset>
                    <Search />
                </IconFieldInset>
                <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} placeholder="Search" />
                <IconFieldInset>
                    <Times className="cursor-pointer" onClick={() => setValue('')} />
                </IconFieldInset>
            </IconField>
        </div>
    );
}

```

### Sizes

```tsx
import { Lock, Search, Spinner, User } from '@primeicons/react';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { InputText } from '@/components/ui/inputtext';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <IconField>
                <IconFieldInset>
                    <Search />
                </IconFieldInset>
                <InputText placeholder="Small" size="small" />
            </IconField>

            <IconField>
                <InputText placeholder="Normal" />
                <IconFieldInset>
                    <User />
                </IconFieldInset>
            </IconField>

            <IconField>
                <IconFieldInset>
                    <Lock />
                </IconFieldInset>
                <InputText placeholder="Large" size="large" />
                <IconFieldInset>
                    <Spinner className="animate-spin" />
                </IconFieldInset>
            </IconField>
        </div>
    );
}

```

## Accessibility

### Screen Reader

IconField and IconFieldInset do not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
