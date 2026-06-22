# IconField

IconField wraps an input and an icon.

```tsx
import { CreditCard, Eye, Lock, Times } from '@primeicons/react';
import { Search } from '@primeicons/react/search';
import { Spinner } from '@primeicons/react/spinner';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Password } from '@primereact/ui/password';

export default function Preview() {
    return (
        <div className="flex flex-col gap-4 max-w-3xs w-full mx-auto">
            <IconField.Root>
                <IconField.Inset>
                    <Search />
                </IconField.Inset>
                <InputText fluid placeholder="Search for everything" />
                <IconField.Inset>
                    <kbd className="text-xs font-medium leading-none!">⌘+K</kbd>
                </IconField.Inset>
            </IconField.Root>
            <IconField.Root>
                <InputText fluid variant="filled" placeholder="Processing..." />
                <IconField.Inset>
                    <Spinner className="animate-spin" />
                </IconField.Inset>
            </IconField.Root>
            <IconField.Root>
                <IconField.Inset>
                    <CreditCard />
                </IconField.Inset>
                <InputText fluid defaultValue="4352" />
                <IconField.Inset>
                    <Times />
                </IconField.Inset>
            </IconField.Root>
            <IconField.Root>
                <IconField.Inset>
                    <img
                        alt="US"
                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                        className="flag flag-us"
                        style={{ width: '20px', height: '13.5px' }}
                    />
                </IconField.Inset>
                <InputText fluid placeholder="+1 (___) ___-____" />
            </IconField.Root>
            <IconField.Root>
                <IconField.Inset>
                    <Lock />
                </IconField.Inset>
                <Password variant="filled" fluid defaultValue="12345678" placeholder="Enter your password" />
                <IconField.Inset>
                    <Eye />
                </IconField.Inset>
            </IconField.Root>
        </div>
    );
}
```

## Usage

```tsx
import { IconField } from '@primereact/ui/iconfield';
```

```tsx
<IconField.Root>
    <IconField.Inset />
</IconField.Root>
```

## Examples

### Basic

An input field with an embedded leading or trailing icon.

```tsx
import { Search } from '@primeicons/react/search';
import { Spinner } from '@primeicons/react/spinner';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField.Root>
                <IconField.Inset>
                    <Search />
                </IconField.Inset>
                <InputText placeholder="Search" />
            </IconField.Root>
            <IconField.Root>
                <InputText variant="filled" />
                <IconField.Inset>
                    <Spinner className="animate-spin" />
                </IconField.Inset>
            </IconField.Root>
        </div>
    );
}
```

### Float Label

FloatLabel visually integrates a label with its form element. Visit [FloatLabel](https://v11.primereact.org/docs/components/floatlabel) documentation for more information.

```tsx
'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';
import { Search } from '@primeicons/react/search';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <IconField.Root>
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        value={value1}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)}
                        id="over_label"
                        autoComplete="off"
                    />
                </IconField.Root>
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <IconField.Root>
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        value={value2}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)}
                        id="in_label"
                        autoComplete="off"
                        variant="filled"
                    />
                </IconField.Root>
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <IconField.Root>
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText
                        value={value3}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)}
                        id="on_label"
                        autoComplete="off"
                    />
                </IconField.Root>
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://v11.primereact.org/docs/components/iftalabel) documentation for more information.

```tsx
'use client';
import { IconField } from '@primereact/ui/iconfield';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';
import { Check } from '@primeicons/react/check';
import { Envelope } from '@primeicons/react/envelope';

export default function IftaLabelDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <IftaLabel>
                <IconField.Root>
                    <IconField.Inset>
                        <Envelope />
                    </IconField.Inset>
                    <InputText
                        id="email"
                        value={value}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                        autoComplete="off"
                        variant="filled"
                    />
                    <IconField.Inset>
                        <Check />
                    </IconField.Inset>
                </IconField.Root>
                <Label htmlFor="email">Email</Label>
            </IftaLabel>
        </div>
    );
}
```

### Clickable

Icons inside IconField.Inset can be interactive with event handlers like onClick.

```tsx
'use client';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';

export default function ClickableDemo() {
    const [value, setValue] = React.useState('PrimeReact');

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField.Root>
                <IconField.Inset>
                    <Search />
                </IconField.Inset>
                <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} placeholder="Search" />
                <IconField.Inset>
                    <Times className="cursor-pointer" onClick={() => setValue('')} />
                </IconField.Inset>
            </IconField.Root>
        </div>
    );
}
```

### Sizes

IconField is compatible with the size setting of the input field.

```tsx
import { Lock } from '@primeicons/react/lock';
import { Search } from '@primeicons/react/search';
import { Spinner } from '@primeicons/react/spinner';
import { User } from '@primeicons/react/user';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <IconField.Root>
                <IconField.Inset>
                    <Search />
                </IconField.Inset>
                <InputText placeholder="Small" size="small" />
            </IconField.Root>

            <IconField.Root>
                <InputText placeholder="Normal" />
                <IconField.Inset>
                    <User />
                </IconField.Inset>
            </IconField.Root>

            <IconField.Root>
                <IconField.Inset>
                    <Lock />
                </IconField.Inset>
                <InputText placeholder="Large" size="large" />
                <IconField.Inset>
                    <Spinner className="animate-spin" />
                </IconField.Inset>
            </IconField.Root>
        </div>
    );
}
```

## Accessibility

### Screen Reader

IconField.Root and IconField.Inset do not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
