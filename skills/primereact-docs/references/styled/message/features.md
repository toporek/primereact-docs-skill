# Message

Message component is used to display inline messages.

```tsx
import { Sparkles, Times } from '@primeicons/react';
import { Message } from '@primereact/ui/message';

export default function Preview() {
    return (
        <div className="max-w-sm mx-auto">
            <Message.Root severity="info">
                <Message.Content>
                    <Message.Icon>
                        <Sparkles />
                    </Message.Icon>
                    <Message.Text>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
```

## Usage

```tsx
import { Message } from '@primereact/ui/message';
```

```tsx
<Message.Root>
    <Message.Content>
        <Message.Icon />
        <Message.Text></Message.Text>
        <Message.Close></Message.Close>
    </Message.Content>
</Message.Root>
```

## Examples

### Basic

An inline message for informational, success, warning, or error feedback.

```tsx
import { Sparkles, Times } from '@primeicons/react';
import { Message } from '@primereact/ui/message';

export default function BasicDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <Message.Root severity="info">
                <Message.Content>
                    <Message.Icon>
                        <Sparkles />
                    </Message.Icon>
                    <Message.Text>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
```

### Severity

The `severity` option specifies the type of the message.

```tsx
import { Check, ExclamationTriangle, Receipt, Sparkles, Spinner, Times, Wifi } from '@primeicons/react';
import { Message } from '@primereact/ui/message';

export default function SeverityDemo() {
    return (
        <div className="max-w-md mx-auto space-y-4">
            <Message.Root severity="success">
                <Message.Content>
                    <Message.Icon>
                        <Check />
                    </Message.Icon>
                    <Message.Text>Your account is now ready.</Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="info">
                <Message.Content>
                    <Message.Icon>
                        <Sparkles />
                    </Message.Icon>
                    <Message.Text>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="warn">
                <Message.Content>
                    <Message.Icon>
                        <Receipt />
                    </Message.Icon>
                    <Message.Text>
                        Your subscription is about to expire.{' '}
                        <a href="" className=" decoration-1! underline!">
                            Renew
                        </a>
                    </Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="error">
                <Message.Content>
                    <Message.Icon>
                        <ExclamationTriangle />
                    </Message.Icon>
                    <Message.Text>
                        Something went wrong. Please{' '}
                        <a href="" className=" decoration-1! underline!">
                            try again
                        </a>
                        .
                    </Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="secondary">
                <Message.Content>
                    <Message.Icon>
                        <Spinner className="animate-spin" />
                    </Message.Icon>
                    <Message.Text>Processing may take a few moments.</Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="contrast">
                <Message.Content>
                    <Message.Icon>
                        <Wifi />
                    </Message.Icon>
                    <Message.Text>You’re currently in offline mode.</Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
```

### Icon

`Message.Icon` is used to display an icon.

```tsx
import { Receipt } from '@primeicons/react';
import { Avatar } from '@primereact/ui/avatar';
import { Message } from '@primereact/ui/message';

export default function IconDemo() {
    return (
        <div className="max-w-sm mx-auto space-y-4">
            <Message.Root severity="warn">
                <Message.Content>
                    <Message.Icon>
                        <Receipt />
                    </Message.Icon>
                    <Message.Text>
                        Your subscription is about to expire.{' '}
                        <a href="" className=" decoration-1! underline!">
                            Renew
                        </a>
                    </Message.Text>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="info">
                <Message.Content>
                    <Message.Icon asChild>
                        <Avatar.Root shape="circle">
                            <Avatar.Image src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                        </Avatar.Root>
                    </Message.Icon>
                    <Message.Text>How may I help you?</Message.Text>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
```

### Variant

Configure the `variant` value as `outlined` or `simple`.

```tsx
import { Times } from '@primeicons/react';
import { Message } from '@primereact/ui/message';

export default function VariantDemo() {
    return (
        <div className="space-y-8 max-w-sm mx-auto">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Outlined</h3>
                <Message.Root severity="success" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-check" />
                        <Message.Text>Your account is now ready.</Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="info" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-sparkles" />
                        <Message.Text>
                            <a href="" className=" decoration-1! underline!">
                                Upgrade
                            </a>{' '}
                            now and save %5.
                        </Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="warn" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-receipt" />
                        <Message.Text>
                            Your subscription is about to expire.{' '}
                            <a href="" className=" decoration-1! underline!">
                                Renew
                            </a>
                        </Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="error" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-exclamation-triangle" />
                        <Message.Text>
                            Something went wrong. Please{' '}
                            <a href="" className=" decoration-1! underline!">
                                try again
                            </a>
                            .
                        </Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="secondary" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-spinner animate-spin" />
                        <Message.Text>Processing may take a few moments.</Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="contrast" variant="outlined">
                    <Message.Content>
                        <Message.Icon className="pi pi-wifi" />
                        <Message.Text>You’re currently in offline mode.</Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Simple</h3>
                <Message.Root severity="success" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-check" />
                        <Message.Text>Your account is now ready.</Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="info" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-sparkles" />
                        <Message.Text>
                            <a href="" className=" decoration-1! underline!">
                                Upgrade
                            </a>{' '}
                            now and save %5.
                        </Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="warn" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-receipt" />
                        <Message.Text>
                            Your subscription is about to expire.{' '}
                            <a href="" className=" decoration-1! underline!">
                                Renew
                            </a>
                        </Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="error" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-exclamation-triangle" />
                        <Message.Text>
                            Something went wrong. Please{' '}
                            <a href="" className=" decoration-1! underline!">
                                try again
                            </a>
                            .
                        </Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="secondary" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-spinner animate-spin" />
                        <Message.Text>Processing may take a few moments.</Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
                <Message.Root severity="contrast" variant="simple">
                    <Message.Content>
                        <Message.Icon className="pi pi-wifi" />
                        <Message.Text>You’re currently in offline mode.</Message.Text>
                        <Message.Close>
                            <Times />
                        </Message.Close>
                    </Message.Content>
                </Message.Root>
            </div>
        </div>
    );
}
```

### Sizes

Message provides `small` and `large` sizes as alternatives to the base.

```tsx
import { Sparkles, Times } from '@primeicons/react';
import { Message } from '@primereact/ui/message';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Message.Root severity="info" size="small">
                <Message.Content>
                    <Message.Icon>
                        <Sparkles />
                    </Message.Icon>
                    <Message.Text>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="info">
                <Message.Content>
                    <Message.Icon>
                        <Sparkles />
                    </Message.Icon>
                    <Message.Text>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
            <Message.Root severity="info" size="large">
                <Message.Content>
                    <Message.Icon>
                        <Sparkles />
                    </Message.Icon>
                    <Message.Text>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
```

### Dynamic

Multiple messages can be displayed.

```tsx
'use client';
import { MessageRootProps } from 'primereact/message';
import { Button } from '@primereact/ui/button';
import { Message } from '@primereact/ui/message';
import * as React from 'react';

export default function DynamicDemo() {
    const [messages, setMessages] = React.useState<MessageRootProps[]>([]);

    const addMessages = () => {
        setMessages([
            { severity: 'info', content: 'Dynamic Info Message' },
            { severity: 'success', content: 'Dynamic Success Message' },
            { severity: 'warn', content: 'Dynamic Warn Message' }
        ]);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-2">
                <Button onClick={addMessages}>Add Messages</Button>
                <Button severity="secondary" onClick={clearMessages}>
                    Clear Messages
                </Button>
            </div>
            {messages.map((item, index) => (
                <Message.Root key={index} severity={item.severity}>
                    <Message.Content>
                        <Message.Text>{item.content}</Message.Text>
                    </Message.Content>
                </Message.Root>
            ))}
        </div>
    );
}
```

### Closable

`Message.Close` is a triggerable element used to close the message.

```tsx
import { Times } from '@primeicons/react';
import { Message } from '@primereact/ui/message';

export default function ClosableDemo() {
    return (
        <div className="max-w-xs mx-auto">
            <Message.Root>
                <Message.Content>
                    <Message.Text>This is a closable message.</Message.Text>
                    <Message.Close>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
```

### Life

Messages can disappear automatically by defined the `life` in milliseconds.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { Button } from '@primereact/ui/button';
import { Message } from '@primereact/ui/message';
import * as React from 'react';

export default function LifeDemo() {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Button disabled={visible} onClick={() => setVisible(true)}>
                Show Message
            </Button>
            {visible && (
                <Message.Root life={3000} severity="success" onClose={() => setVisible(false)}>
                    <Message.Content>
                        <Message.Icon>
                            <Check />
                        </Message.Icon>
                        <Message.Text>Your account is now ready.</Message.Text>
                    </Message.Content>
                </Message.Root>
            )}
        </div>
    );
}
```

## API

### Sub-Components

See [Message Primitive](../../primitive/message/features.md#api) for the full sub-component API.

### Hooks

See [useMessage](../../headless/message/features.md#api) for the headless hook API.

## Accessibility

See [Message Primitive](../../primitive/message/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
