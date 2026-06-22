# Password

Password is an enhanced input for password entry with strength metering, mask toggling, and controlled or uncontrolled usage.

```tsx
'use client';
import { Check, Eye, EyeSlash, Lock, Times } from '@primeicons/react';
import { Chip, ChipLabel, ChipStart } from '@/components/ui/chip';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { Password } from '@/components/ui/password';
import * as React from 'react';

const rules = [
    { label: '8+ characters', test: (v: string) => v.length >= 8 },
    { label: 'Number', test: (v: string) => /\d/.test(v) },
    { label: 'Uppercase letter', test: (v: string) => /[A-Z]/.test(v) },
    { label: 'Special character', test: (v: string) => /[^a-zA-Z0-9]/.test(v) }
];

export default function Preview() {
    const [value, setValue] = React.useState('1234');
    const [visible, setVisible] = React.useState(false);

    return (
        <div className="flex justify-center">
            <div className="max-w-2xs w-full">
                <div className="text-sm font-medium text-color mb-2">Create a password</div>
                <IconField>
                    <IconFieldInset>
                        <Lock />
                    </IconFieldInset>
                    <Password
                        fluid
                        mask={!visible}
                        value={value}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                    />
                    <IconFieldInset className="cursor-pointer" onClick={() => setVisible((v) => !v)}>
                        {visible ? <EyeSlash className="size-4!" /> : <Eye className="size-4!" />}
                    </IconFieldInset>
                </IconField>
                <div className="mt-4 flex items-center flex-wrap gap-1.5">
                    {rules.map((rule) => {
                        const passed = rule.test(value);

                        return (
                            <Chip
                                key={rule.label}
                                variant="outlined"
                                className={`${passed ? 'text-green-600 dark:text-green-400' : 'text-surface-500 dark:text-surface-400'}`}
                            >
                                <ChipStart>
                                    <span
                                        className={`size-4 inline-flex items-center justify-center rounded-full ${passed ? 'bg-green-600 text-surface-0 dark:bg-green-400 dark:text-surface-900' : 'bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400'}`}
                                    >
                                        {passed ? <Check className="size-3!" /> : <Times className="size-3!" />}
                                    </span>
                                </ChipStart>
                                <ChipLabel>{rule.label}</ChipLabel>
                            </Chip>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
```

## Usage

```tsx
import { Password } from '@/components/ui/password';
```

```tsx
<Password />
```

## Examples

### Basic

A password input with strength indicator and toggle visibility.

```tsx
import { Password } from '@/components/ui/password';

export default function BasicDemo() {
    return (
        <div className="flex justify-center max-w-3xs mx-auto">
            <Password />
        </div>
    );
}
```

### Toggle Mask

Adding a toggle icon to show or hide the password, allowing users to verify their input.

```tsx
'use client';
import { Eye, EyeSlash } from '@primeicons/react';
import { PasswordMaskChangeEvent } from 'primereact/password';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { Password } from '@/components/ui/password';
import * as React from 'react';

export default function ToggleMaskDemo() {
    const [mask, setMask] = React.useState(true);

    return (
        <div className="flex justify-center">
            <IconField>
                <Password mask={mask} onMaskChange={(e: PasswordMaskChangeEvent) => setMask(e.value)} />
                <IconFieldInset>{mask ? <Eye onClick={() => setMask(false)} /> : <EyeSlash onClick={() => setMask(true)} />}</IconFieldInset>
            </IconField>
        </div>
    );
}
```

### Requirements

Display a checklist of password requirements that update in real-time as the user types, providing clear feedback on which criteria have been met.

```tsx
'use client';
import { CheckCircle } from '@primeicons/react';
import { PasswordValueChangeEvent } from 'primereact/password';
import { Password } from '@/components/ui/password';
import * as React from 'react';

const requirements = [
    {
        id: 'minLength',
        label: 'At least 12 characters',
        test: (value: string) => value.length >= 12
    },
    {
        id: 'uppercase',
        label: 'Contains uppercase letter',
        test: (value: string) => /[A-Z]/.test(value)
    },
    {
        id: 'lowercase',
        label: 'Contains lowercase letter',
        test: (value: string) => /[a-z]/.test(value)
    },
    {
        id: 'number',
        label: 'Contains number',
        test: (value: string) => /[0-9]/.test(value)
    },
    {
        id: 'symbol',
        label: 'Contains special character',
        test: (value: string) => /[^a-zA-Z0-9]/.test(value)
    }
];

export default function RequirementsDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-64">
                <Password value={value} onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)} placeholder="Enter password" />

                <ul className="flex flex-col gap-2 list-none ms-1 my-1">
                    {requirements.map((req) => {
                        const match = req.test(value);

                        return (
                            <li key={req.id} className="flex items-center gap-2 text-sm transition-all duration-300">
                                <CheckCircle
                                    className={[
                                        'transition-all duration-300 ease-out',
                                        match ? 'text-green-500 scale-110 opacity-100' : 'text-surface-400 scale-90 opacity-70'
                                    ].join(' ')}
                                />
                                <span
                                    className={[
                                        'transition-all duration-300 ease-out',
                                        match
                                            ? 'text-green-700 dark:text-green-400 line-through decoration-2 decoration-green-500/70'
                                            : 'text-surface-700 dark:text-surface-300 opacity-70'
                                    ].join(' ')}
                                >
                                    {req.label}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
```

### Strength Meter

Visualize the overall password strength with an animated progress bar and a severity-based label that adapts as the password improves.

```tsx
'use client';
import { PasswordValueChangeEvent } from 'primereact/password';
import { Password } from '@/components/ui/password';
import { ProgressBar } from '@/components/ui/progressbar';
import { Tag } from '@/components/ui/tag';
import * as React from 'react';

type StrengthLevel = 'weak' | 'medium' | 'strong' | 'very-strong';

interface StrengthInfo {
    label: string;
    percent: number;
    color: string;
    severity: 'danger' | 'warn' | 'info' | 'success';
}

const strengthMap: Record<StrengthLevel, StrengthInfo> = {
    weak: { label: 'Weak', percent: 25, color: 'var(--p-red-400)', severity: 'danger' },
    medium: { label: 'Medium', percent: 50, color: 'var(--p-amber-400)', severity: 'warn' },
    strong: { label: 'Strong', percent: 75, color: 'var(--p-blue-400)', severity: 'info' },
    'very-strong': { label: 'Very Strong', percent: 100, color: 'var(--p-emerald-400)', severity: 'success' }
};

function getStrength(value: string): StrengthLevel | null {
    if (!value) return null;

    let score = 0;

    if (value.length >= 8) score++;

    if (value.length >= 12) score++;

    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;

    if (/[0-9]/.test(value)) score++;

    if (/[^a-zA-Z0-9]/.test(value)) score++;

    if (score <= 1) return 'weak';
    else if (score <= 2) return 'medium';
    else if (score <= 3) return 'strong';
    else return 'very-strong';
}

export default function StrengthDemo() {
    const [value, setValue] = React.useState('');
    const level = getStrength(value);
    const info = level ? strengthMap[level] : null;

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-64">
                <Password value={value} onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)} placeholder="Enter password" />
                {info && (
                    <div className="flex flex-col gap-2">
                        <ProgressBar value={info.percent} />
                        <div className="flex justify-end">
                            <Tag severity={info.severity}>{info.label}</Tag>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
```

### Popover

Combine a visibility toggle, strength meter, and requirements checklist into a fully custom password creation with Popover component.

```tsx
'use client';
import { Eye, EyeSlash } from '@primeicons/react';
import type { PasswordMaskChangeEvent, PasswordValueChangeEvent } from 'primereact/password';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { ProgressBar } from '@/components/ui/progressbar';
import { Password } from '@/components/ui/password';
import { Popover, PopoverArrow, PopoverContent, PopoverPopup, PopoverPortal, PopoverPositioner, PopoverTrigger } from '@/components/ui/popover';
import { Tag } from '@/components/ui/tag';
import * as React from 'react';

const rules = [
    { id: 'length', label: 'At least 12 characters long', test: (v: string) => v.length >= 12, weight: 20 },
    { id: 'uppercase', label: 'Contains uppercase letter', test: (v: string) => /[A-Z]/.test(v), weight: 20 },
    { id: 'lowercase', label: 'Contains lowercase letter', test: (v: string) => /[a-z]/.test(v), weight: 20 },
    { id: 'number', label: 'Contains number', test: (v: string) => /[0-9]/.test(v), weight: 20 },
    { id: 'special', label: 'Contains special character (!@#$...)', test: (v: string) => /[^a-zA-Z0-9]/.test(v), weight: 20 }
];

function getScore(value: string) {
    if (!value) return 0;

    return rules.reduce((acc, rule) => acc + (rule.test(value) ? rule.weight : 0), 0);
}

function getSeverity(score: number) {
    if (score <= 20) return 'danger';

    if (score <= 40) return 'warn';

    if (score <= 60) return 'info';

    return 'success';
}

function getLabel(score: number): string {
    if (score === 0) return '';

    if (score <= 20) return 'Too Weak';

    if (score <= 40) return 'Weak';

    if (score <= 60) return 'Fair';

    if (score <= 80) return 'Strong';

    return 'Very Strong';
}

export default function PopoverDemo() {
    const [value, setValue] = React.useState('');
    const [mask, setMask] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const score = getScore(value);
    const severity = getSeverity(score);
    const label = getLabel(score);

    return (
        <div className="flex justify-center">
            <Popover open={open}>
                <PopoverTrigger as="div">
                    <IconField>
                        <Password
                            mask={mask}
                            onMaskChange={(e: PasswordMaskChangeEvent) => setMask(e.value)}
                            value={value}
                            placeholder="Create a password"
                            fluid
                            onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)}
                            onFocus={() => setOpen(true)}
                            onBlur={() => setOpen(false)}
                        />
                        <IconFieldInset>
                            {mask ? (
                                <Eye className="cursor-pointer" onClick={() => setMask(false)} />
                            ) : (
                                <EyeSlash className="cursor-pointer" onClick={() => setMask(true)} />
                            )}
                        </IconFieldInset>
                    </IconField>
                </PopoverTrigger>
                <PopoverPortal>
                    <PopoverPositioner sideOffset={12} side="bottom" align="start">
                        <PopoverPopup className="max-w-72 w-full">
                            <PopoverArrow />
                            <PopoverContent className="w-72">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <i className="pi pi-shield" style={{ fontSize: '1.25rem' }} />
                                            <span className="font-semibold text-sm">Password Strength</span>
                                        </div>
                                        {label && <Tag severity={severity}>{label}</Tag>}
                                    </div>

                                    <ProgressBar value={score} />

                                    <ul className="flex flex-col gap-2 list-none m-0 p-0">
                                        {rules.map((rule) => {
                                            const met = rule.test(value);

                                            return (
                                                <li key={rule.id} className="flex items-center gap-2 text-xs">
                                                    <i className={met ? 'pi pi-check text-green-500' : 'pi pi-times text-red-400'} />
                                                    <span
                                                        className={
                                                            met ? 'text-surface-500 dark:text-surface-400' : 'text-surface-700 dark:text-surface-200'
                                                        }
                                                    >
                                                        {rule.label}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </PopoverContent>
                        </PopoverPopup>
                    </PopoverPositioner>
                </PopoverPortal>
            </Popover>
        </div>
    );
}
```

### Clear Icon

Use a custom clear action to reset the password input.

```tsx
'use client';
import { Times } from '@primeicons/react';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import type { PasswordProps, PasswordValueChangeEvent } from 'primereact/password';
import { Password } from '@/components/ui/password';
import * as React from 'react';

export default function BasicDemo() {
    const [value, setValue] = React.useState<PasswordProps['value']>('');

    return (
        <div className="flex justify-center">
            <IconField>
                <Password className="w-56" value={value} onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)} />
                <IconFieldInset>{value !== '' && <Times onClick={() => setValue('')} />}</IconFieldInset>
            </IconField>
        </div>
    );
}
```

### Sizes

Password provides `small` and `large` sizes as alternatives to the base.

```tsx
import { Password } from '@/components/ui/password';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Password size="small" placeholder="Small" />
            <Password placeholder="Normal" />
            <Password size="large" placeholder="Large" />
        </div>
    );
}
```

### Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```tsx
import { Password } from '@/components/ui/password';

export default function FluidDemo() {
    return (
        <div>
            <Password fluid />
        </div>
    );
}
```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default outlined style.

```tsx
import { Password } from '@/components/ui/password';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <Password variant="filled" />
        </div>
    );
}
```

### Disabled

Use the `disabled` property to disable a password input.

```tsx
import { Password } from '@/components/ui/password';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Password disabled placeholder="Disabled" />
        </div>
    );
}
```

### Invalid

Specify the `invalid` property to display the component with a red border.

```tsx
'use client';
import type { PasswordProps, PasswordValueChangeEvent } from 'primereact/password';
import { Password } from '@/components/ui/password';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState<PasswordProps['value']>('');
    const [value2, setValue2] = React.useState<PasswordProps['value']>('');

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <Password
                value={value1}
                invalid={!value1}
                onValueChange={(e: PasswordValueChangeEvent) => setValue1(e.value as string)}
                placeholder="Password"
            />
            <Password
                value={value2}
                invalid={!value2}
                variant="filled"
                onValueChange={(e: PasswordValueChangeEvent) => setValue2(e.value as string)}
                placeholder="Password"
            />
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/password/features.md#api) for `PasswordRoot` component documentation.

### Hooks

See [Headless API](../../headless/password/features.md#api) for `usePassword` hook documentation.

## Accessibility

See [Password Primitive](../../primitive/password/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
