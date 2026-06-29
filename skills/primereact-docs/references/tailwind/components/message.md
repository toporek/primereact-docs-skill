# Message

Message component is used to display inline messages.

```tsx
import { Megaphone } from '@primeicons/react';
import { Message, MessageContent, MessageIcon, MessageText } from '@/components/ui/message';

export default function Preview() {
    return (
        <div className="max-w-sm mx-auto">
            <Message severity="contrast">
                <MessageContent>
                    <MessageIcon>
                        <Megaphone />
                    </MessageIcon>
                    <MessageText>PrimeReact v11 is here — explore what&apos;s new.</MessageText>
                </MessageContent>
            </Message>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/message.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Message, MessageClose, MessageContent, MessageIcon, MessageText } from '@/components/ui/message';
```

```tsx
<Message severity="info">
    <MessageContent>
        <MessageIcon />
        <MessageText>Message text</MessageText>
        <MessageClose />
    </MessageContent>
</Message>
```

## Examples

### Basic

An inline message for informational, success, warning, or error feedback.

```tsx
import { Sparkles, Times } from '@primeicons/react';
import { Message, MessageClose, MessageContent, MessageIcon, MessageText } from '@/components/ui/message';

export default function BasicDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <Message severity="info">
                <MessageContent>
                    <MessageIcon>
                        <Sparkles />
                    </MessageIcon>
                    <MessageText>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
        </div>
    );
}

```

### Severity

The `severity` option specifies the type of the message.

```tsx
import { Check, ExclamationTriangle, Receipt, Sparkles, Spinner, Times, Wifi } from '@primeicons/react';
import { Message, MessageClose, MessageContent, MessageIcon, MessageText } from '@/components/ui/message';

export default function SeverityDemo() {
    return (
        <div className="max-w-md mx-auto space-y-4">
            <Message severity="success">
                <MessageContent>
                    <MessageIcon>
                        <Check />
                    </MessageIcon>
                    <MessageText>Your account is now ready.</MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
            <Message severity="info">
                <MessageContent>
                    <MessageIcon>
                        <Sparkles />
                    </MessageIcon>
                    <MessageText>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
            <Message severity="warn">
                <MessageContent>
                    <MessageIcon>
                        <Receipt />
                    </MessageIcon>
                    <MessageText>
                        Your subscription is about to expire.{' '}
                        <a href="" className=" decoration-1! underline!">
                            Renew
                        </a>
                    </MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
            <Message severity="error">
                <MessageContent>
                    <MessageIcon>
                        <ExclamationTriangle />
                    </MessageIcon>
                    <MessageText>
                        Something went wrong. Please{' '}
                        <a href="" className=" decoration-1! underline!">
                            try again
                        </a>
                        .
                    </MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
            <Message severity="secondary">
                <MessageContent>
                    <MessageIcon>
                        <Spinner className="animate-spin" />
                    </MessageIcon>
                    <MessageText>Processing may take a few moments.</MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
            <Message severity="contrast">
                <MessageContent>
                    <MessageIcon>
                        <Wifi />
                    </MessageIcon>
                    <MessageText>You're currently in offline mode.</MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
        </div>
    );
}

```

### Icon

`Message.Icon` is used to display an icon.

```tsx
import { Receipt } from '@primeicons/react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Message, MessageContent, MessageIcon, MessageText } from '@/components/ui/message';

export default function IconDemo() {
    return (
        <div className="max-w-sm mx-auto space-y-4">
            <Message severity="warn">
                <MessageContent>
                    <MessageIcon>
                        <Receipt />
                    </MessageIcon>
                    <MessageText>
                        Your subscription is about to expire.{' '}
                        <a href="" className=" decoration-1! underline!">
                            Renew
                        </a>
                    </MessageText>
                </MessageContent>
            </Message>
            <Message severity="info">
                <MessageContent>
                    <MessageIcon asChild>
                        <Avatar shape="circle">
                            <AvatarImage src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                        </Avatar>
                    </MessageIcon>
                    <MessageText>How may I help you?</MessageText>
                </MessageContent>
            </Message>
        </div>
    );
}

```

### Variant

Configure the `variant` value as `outlined` or `simple`.

```tsx
import { Times } from '@primeicons/react';
import { Message, MessageClose, MessageContent, MessageIcon, MessageText } from '@/components/ui/message';

export default function VariantDemo() {
    return (
        <div className="space-y-8 max-w-sm mx-auto">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Outlined</h3>
                <Message severity="success" variant="outlined">
                    <MessageContent>
                        <MessageIcon className="pi pi-check" />
                        <MessageText>Your account is now ready.</MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="info" variant="outlined">
                    <MessageContent>
                        <MessageIcon className="pi pi-sparkles" />
                        <MessageText>
                            <a href="" className=" decoration-1! underline!">
                                Upgrade
                            </a>{' '}
                            now and save %5.
                        </MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="warn" variant="outlined">
                    <MessageContent>
                        <MessageIcon className="pi pi-receipt" />
                        <MessageText>
                            Your subscription is about to expire.{' '}
                            <a href="" className=" decoration-1! underline!">
                                Renew
                            </a>
                        </MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="error" variant="outlined">
                    <MessageContent>
                        <MessageIcon className="pi pi-exclamation-triangle" />
                        <MessageText>
                            Something went wrong. Please{' '}
                            <a href="" className=" decoration-1! underline!">
                                try again
                            </a>
                            .
                        </MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="secondary" variant="outlined">
                    <MessageContent>
                        <MessageIcon className="pi pi-spinner animate-spin" />
                        <MessageText>Processing may take a few moments.</MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="contrast" variant="outlined">
                    <MessageContent>
                        <MessageIcon className="pi pi-wifi" />
                        <MessageText>You're currently in offline mode.</MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Simple</h3>
                <Message severity="success" variant="simple">
                    <MessageContent>
                        <MessageIcon className="pi pi-check" />
                        <MessageText>Your account is now ready.</MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="info" variant="simple">
                    <MessageContent>
                        <MessageIcon className="pi pi-sparkles" />
                        <MessageText>
                            <a href="" className=" decoration-1! underline!">
                                Upgrade
                            </a>{' '}
                            now and save %5.
                        </MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="warn" variant="simple">
                    <MessageContent>
                        <MessageIcon className="pi pi-receipt" />
                        <MessageText>
                            Your subscription is about to expire.{' '}
                            <a href="" className=" decoration-1! underline!">
                                Renew
                            </a>
                        </MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="error" variant="simple">
                    <MessageContent>
                        <MessageIcon className="pi pi-exclamation-triangle" />
                        <MessageText>
                            Something went wrong. Please{' '}
                            <a href="" className=" decoration-1! underline!">
                                try again
                            </a>
                            .
                        </MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="secondary" variant="simple">
                    <MessageContent>
                        <MessageIcon className="pi pi-spinner animate-spin" />
                        <MessageText>Processing may take a few moments.</MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
                <Message severity="contrast" variant="simple">
                    <MessageContent>
                        <MessageIcon className="pi pi-wifi" />
                        <MessageText>You're currently in offline mode.</MessageText>
                        <MessageClose>
                            <Times />
                        </MessageClose>
                    </MessageContent>
                </Message>
            </div>
        </div>
    );
}

```

### Sizes

Message provides `small` and `large` sizes as alternatives to the base.

```tsx
import { Sparkles, Times } from '@primeicons/react';
import { Message, MessageClose, MessageContent, MessageIcon, MessageText } from '@/components/ui/message';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Message severity="info" size="small">
                <MessageContent>
                    <MessageIcon>
                        <Sparkles />
                    </MessageIcon>
                    <MessageText>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
            <Message severity="info">
                <MessageContent>
                    <MessageIcon>
                        <Sparkles />
                    </MessageIcon>
                    <MessageText>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
            <Message severity="info" size="large">
                <MessageContent>
                    <MessageIcon>
                        <Sparkles />
                    </MessageIcon>
                    <MessageText>
                        <a href="" className=" decoration-1! underline!">
                            Upgrade
                        </a>{' '}
                        now and save %5.
                    </MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
        </div>
    );
}

```

### Dynamic

Multiple messages can be displayed.

```tsx
'use client';
import type { MessageRootProps } from '@/components/ui/message';
import { Message, MessageContent, MessageText } from '@/components/ui/message';
import { Button } from '@/components/ui/button';
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
                <Message key={index} severity={item.severity}>
                    <MessageContent>
                        <MessageText>{item.content}</MessageText>
                    </MessageContent>
                </Message>
            ))}
        </div>
    );
}

```

### Closable

`Message.Close` is a triggerable element used to close the message.

```tsx
import { Times } from '@primeicons/react';
import { Message, MessageClose, MessageContent, MessageText } from '@/components/ui/message';

export default function ClosableDemo() {
    return (
        <div className="max-w-xs mx-auto">
            <Message>
                <MessageContent>
                    <MessageText>This is a closable message.</MessageText>
                    <MessageClose>
                        <Times />
                    </MessageClose>
                </MessageContent>
            </Message>
        </div>
    );
}

```

### Life

Messages can disappear automatically by defined the `life` in milliseconds.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { Button } from '@/components/ui/button';
import { Message, MessageContent, MessageIcon, MessageText } from '@/components/ui/message';
import * as React from 'react';

export default function LifeDemo() {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Button disabled={visible} onClick={() => setVisible(true)}>
                Show Message
            </Button>
            {visible && (
                <Message life={3000} severity="success" onClose={() => setVisible(false)}>
                    <MessageContent>
                        <MessageIcon>
                            <Check />
                        </MessageIcon>
                        <MessageText>Your account is now ready.</MessageText>
                    </MessageContent>
                </Message>
            )}
        </div>
    );
}

```

## Accessibility

### Screen Reader

Message component uses `alert` role that implicitly defines `aria-live` as "assertive" and `aria-atomic` as "true". Since any attribute is passed to the root element, attributes like `aria-labelledby` and `aria-label` can optionally be used as well.

Close element is a `button` with an `aria-label` that refers to the `aria.close` property of the locale API by default. The `closeButtonProps` can be used to customize the element and override the default `aria-label`.

### Close Button Keyboard Support

| Key     | Function            |
| ------- | ------------------- |
| `enter` | Closes the message. |
| `space` | Closes the message. |
