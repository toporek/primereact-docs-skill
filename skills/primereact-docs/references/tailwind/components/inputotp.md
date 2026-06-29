# InputOtp

InputOtp is used to enter one time passwords.

```tsx
import { Button } from '@/components/ui/button';
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';

export default function Preview() {
    return (
        <div className="flex flex-col gap-10 justify-between h-full max-w-xs mx-auto">
            <div>
                <div className="font-bold text-color text-lg">Check your email for OTP</div>
                <div className="text-surface-500 mt-1">Please enter the 6-digit code sent to your email address to reset your password.</div>
            </div>
            <InputOtp length={6} integerOnly defaultValue="482" className="w-full *:flex-1 *:aspect-square *:text-2xl **:font-bold my-auto gap-3">
                <InputOtpText index={0} />
                <InputOtpText index={1} />
                <InputOtpText index={2} />
                <InputOtpText index={3} />
                <InputOtpText index={4} />
                <InputOtpText index={5} />
            </InputOtp>

            <div>
                <div className="text-sm text-muted-color mb-2">
                    Didn&apos;t receive code?{' '}
                    <Button variant="text" className=" text-sm">
                        Resend
                    </Button>
                </div>
                <Button className="w-full">Change password</Button>
            </div>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/inputotp.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';
```

```tsx
<InputOtp>
    <InputOtpText />
</InputOtp>
```

## Examples

### Basic

```tsx
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp>
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
            </InputOtp>
        </div>
    );
}

```

### Controlled

InputOtp can be used as a controlled component with `value` and `onValueChange` properties.

```tsx
'use client';
import type { InputOtpRootValueChangeEvent } from 'primereact/inputotp';
import { Button } from '@/components/ui/button';
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex flex-col items-center gap-6">
            <InputOtp value={value} onValueChange={(e: InputOtpRootValueChangeEvent) => setValue(e.value)}>
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
            </InputOtp>
            <div className="flex items-center gap-4">
                <span className="text-sm text-muted-color">
                    Value: <strong className="text-color">{value || ''}</strong>
                </span>
                <Button severity="secondary" size="small" onClick={() => setValue('')}>
                    Reset
                </Button>
            </div>
        </div>
    );
}

```

### Mask

Enable the `mask` option to hide the values in the input fields.

```tsx
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';

export default function MaskDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp mask>
                {Array.from({ length: 4 }, (_, index) => (
                    <InputOtpText key={index} />
                ))}
            </InputOtp>
        </div>
    );
}

```

### Integer Only

When `integerOnly` is present, only integers can be accepted as input.

```tsx
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';

export default function IntegerOnlyDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp integerOnly>
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
            </InputOtp>
        </div>
    );
}

```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp variant="filled">
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
            </InputOtp>
        </div>
    );
}

```

### Sizes

InputOtp provides `small` and `large` sizes as alternatives to the base.

```tsx
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputOtp size="small">
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
            </InputOtp>
            <InputOtp>
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
            </InputOtp>
            <InputOtp size="large">
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
            </InputOtp>
        </div>
    );
}

```

### Disabled

When `disabled` is present, the component becomes non-interactive.

```tsx
import { InputOtp, InputOtpText } from '@/components/ui/inputotp';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp disabled>
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
                <InputOtpText />
            </InputOtp>
        </div>
    );
}

```

### Accessibility

#### Screen Reader Support

Input OTP uses a set of InputText components, refer to the InputText component for more information about the screen reader support.

#### Keyboard Support

| Key           | Function                                                         |
| ------------- | ---------------------------------------------------------------- |
| `tab`         | Moves focus to the input otp.                                    |
| `right arrow` | Moves focus to the next input element.                           |
| `left arrow`  | Moves focus to the previous input element.                       |
| `backspace`   | Deletes the input and moves focus to the previous input element. |
