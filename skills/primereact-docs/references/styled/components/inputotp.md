# InputOtp

InputOtp is used to enter one time passwords.

```tsx
import { Button } from '@primereact/ui/button';
import { InputOtp } from '@primereact/ui/inputotp';

export default function Preview() {
    return (
        <div className="flex flex-col gap-10 justify-between h-full max-w-xs mx-auto">
            <div>
                <div className="font-bold text-color text-lg">Check your email for OTP</div>
                <div className="text-surface-500 mt-1">Please enter the 6-digit code sent to your email address to reset your password.</div>
            </div>
            <InputOtp.Root
                length={6}
                integerOnly
                defaultValue="482"
                className="w-full! *:flex-1! *:aspect-square! *:text-2xl! **:font-bold! my-auto! gap-3!"
            >
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
                <InputOtp.Text index={4} />
                <InputOtp.Text index={5} />
            </InputOtp.Root>

            <div>
                <div className="text-sm text-muted-color mb-2">
                    Didn&apos;t receive code? <Button variant="text">Resend</Button>
                </div>
                <Button className="w-full">Change password</Button>
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { InputOtp } from '@primereact/ui/inputotp';
```

```tsx
<InputOtp.Root>
    <InputOtp.Text index={0} />
    <InputOtp.Text index={1} />
    <InputOtp.Text index={2} />
    <InputOtp.Text index={3} />
</InputOtp.Root>
```

## Examples

### Basic

A one-time password input split into individual digit fields.

```tsx
import { InputOtp } from '@primereact/ui/inputotp';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root>
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
            </InputOtp.Root>
        </div>
    );
}

```

### Controlled

InputOtp can be used as a controlled component with `value` and `onValueChange` properties.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { InputOtp, type InputOtpRootValueChangeEvent } from '@primereact/ui/inputotp';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex flex-col items-center gap-6">
            <InputOtp.Root value={value} onValueChange={(e: InputOtpRootValueChangeEvent) => setValue(e.value)}>
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
            </InputOtp.Root>
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
import { InputOtp } from '@primereact/ui/inputotp';

export default function MaskDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root mask>
                {Array.from({ length: 4 }, (_, index) => (
                    <InputOtp.Text key={index} index={index} />
                ))}
            </InputOtp.Root>
        </div>
    );
}

```

### Integer Only

When `integerOnly` is present, only integers can be accepted as input.

```tsx
import { InputOtp } from '@primereact/ui/inputotp';

export default function IntegerOnlyDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root integerOnly>
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
            </InputOtp.Root>
        </div>
    );
}

```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
import { InputOtp } from '@primereact/ui/inputotp';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root variant="filled">
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
            </InputOtp.Root>
        </div>
    );
}

```

### Sizes

InputOtp provides `small` and `large` sizes as alternatives to the base.

```tsx
import { InputOtp } from '@primereact/ui/inputotp';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputOtp.Root size="small">
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
            </InputOtp.Root>
            <InputOtp.Root>
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
            </InputOtp.Root>
            <InputOtp.Root size="large">
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
            </InputOtp.Root>
        </div>
    );
}

```

### Disabled

When `disabled` is present, the component becomes non-interactive.

```tsx
import { InputOtp } from '@primereact/ui/inputotp';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root disabled>
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
            </InputOtp.Root>
        </div>
    );
}

```

### Custom

Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.

```tsx
import { InputOtp } from '@primereact/ui/inputotp';

export default function CustomDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root>
                {Array.from({ length: 4 }, (_, index) => (
                    <InputOtp.Text
                        key={index}
                        index={index}
                        className="w-12! h-12 text-3xl! text-center bg-transparent! border-0! border-b-2! border-surface-300! dark:border-surface-600! rounded-none! outline-none transition-colors! duration-200! focus:border-primary!"
                    />
                ))}
            </InputOtp.Root>
        </div>
    );
}

```

### Sample

A sample UI implementation with templating and additional elements.

```tsx
import { Minus } from '@primeicons/react/minus';
import { Button } from '@primereact/ui/button';
import { InputOtp } from '@primereact/ui/inputotp';
import * as React from 'react';

export default function SampleDemo() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                    <span className="font-bold text-xl">Authenticate Your Account</span>
                    <p className="text-muted-color">Please enter the code sent to your phone.</p>
                </div>
                <InputOtp.Root integerOnly className="gap-0!">
                    {Array.from({ length: 6 }, (_, index) => {
                        const inputClasses = [
                            'w-12! h-12 text-lg! text-center transition-all! duration-200!',
                            'border border-surface-300! dark:border-surface-600! bg-transparent!',
                            'outline-offset-0 outline-transparent transition-[outline-color]! duration-200!',
                            'text-color!',
                            index === 0 || index === 3 ? 'rounded-l-lg!' : 'rounded-l-none!',
                            index === 2 || index === 5 ? 'rounded-r-lg!' : 'rounded-r-none!',
                            !(index === 2 || index === 5) ? 'border-r-0!' : '',
                            'focus:outline-2! focus:outline-primary! focus:-outline-offset-2!'
                        ].join(' ');

                        return (
                            <React.Fragment key={index}>
                                <InputOtp.Text index={index} className={inputClasses} />
                                {index === 2 && (
                                    <div className="px-4 flex items-center">
                                        <Minus />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </InputOtp.Root>
                <div className="flex justify-between self-stretch">
                    <Button variant="link" className="p-0">
                        Resend Code
                    </Button>
                    <Button>Submit Code</Button>
                </div>
            </div>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/inputotp.md#api) for `InputOtpRoot` and `InputOtpText` component documentation.

### Hooks

See [Headless API](../../headless/components/inputotp.md#api) for `useInputOtp` hook documentation.

### Accessibility

See [InputOtp Primitive](../../primitive/components/inputotp.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inputotp | Class name of the root element |
| p-inputotp-input | Class name of the input element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputotp.gap | --p-inputotp-gap | Gap of root |
| inputotp.input.width | --p-inputotp-input-width | Width of input |
| inputotp.input.sm.width | --p-inputotp-input-sm-width | Width of input in small screens |
| inputotp.input.lg.width | --p-inputotp-input-lg-width | Width of input in large screens |
