# Message

Message component is used to display inline messages.

```tsx
import { Megaphone } from '@primeicons/react/megaphone';
import { Message } from '@primereact/ui/message';

export default function Preview() {
    return (
        <div className="max-w-sm mx-auto">
            <Message.Root severity="contrast">
                <Message.Content>
                    <Message.Icon>
                        <Megaphone />
                    </Message.Icon>
                    <Message.Text>PrimeReact v11 is here — explore what's new.</Message.Text>
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
import { MessageRootProps } from '@primereact/ui/message';
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

## Related

### Sub-Components

See [Message Primitive](../../primitive/components/message.md#api) for the full sub-component API.

### Hooks

See [useMessage](../../headless/components/message.md#api) for the headless hook API.

### Accessibility

See [Message Primitive](../../primitive/components/message.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-message | Class name of the root element |
| p-message-content | Class name of the content element |
| p-message-icon | Class name of the icon element |
| p-message-text | Class name of the text element |
| p-message-close-button | Class name of the close button element |
| p-message-close-icon | Class name of the close icon element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| message.border.radius | --p-message-border-radius | Border radius of root |
| message.border.width | --p-message-border-width | Border width of root |
| message.transition.duration | --p-message-transition-duration | Transition duration of root |
| message.content.padding | --p-message-content-padding | Padding of content |
| message.content.gap | --p-message-content-gap | Gap of content |
| message.content.sm.padding | --p-message-content-sm-padding | Sm padding of content |
| message.content.lg.padding | --p-message-content-lg-padding | Lg padding of content |
| message.text.font.size | --p-message-text-font-size | Font size of text |
| message.text.font.weight | --p-message-text-font-weight | Font weight of text |
| message.text.sm.font.size | --p-message-text-sm-font-size | Sm font size of text |
| message.text.lg.font.size | --p-message-text-lg-font-size | Lg font size of text |
| message.icon.size | --p-message-icon-size | Size of icon |
| message.icon.sm.size | --p-message-icon-sm-size | Sm size of icon |
| message.icon.lg.size | --p-message-icon-lg-size | Lg size of icon |
| message.close.button.width | --p-message-close-button-width | Width of close button |
| message.close.button.height | --p-message-close-button-height | Height of close button |
| message.close.button.border.radius | --p-message-close-button-border-radius | Border radius of close button |
| message.close.button.focus.ring.width | --p-message-close-button-focus-ring-width | Focus ring width of close button |
| message.close.button.focus.ring.style | --p-message-close-button-focus-ring-style | Focus ring style of close button |
| message.close.button.focus.ring.offset | --p-message-close-button-focus-ring-offset | Focus ring offset of close button |
| message.close.icon.size | --p-message-close-icon-size | Size of close icon |
| message.close.icon.sm.size | --p-message-close-icon-sm-size | Sm size of close icon |
| message.close.icon.lg.size | --p-message-close-icon-lg-size | Lg size of close icon |
| message.outlined.border.width | --p-message-outlined-border-width | Root border width of outlined |
| message.simple.content.padding | --p-message-simple-content-padding | Content padding of simple |
| message.info.background | --p-message-info-background | Background of info |
| message.info.border.color | --p-message-info-border-color | Border color of info |
| message.info.color | --p-message-info-color | Color of info |
| message.info.shadow | --p-message-info-shadow | Shadow of info |
| message.info.close.button.hover.background | --p-message-info-close-button-hover-background | Close button hover background of info |
| message.info.close.button.focus.ring.color | --p-message-info-close-button-focus-ring-color | Close button focus ring color of info |
| message.info.close.button.focus.ring.shadow | --p-message-info-close-button-focus-ring-shadow | Close button focus ring shadow of info |
| message.info.outlined.color | --p-message-info-outlined-color | Outlined color of info |
| message.info.outlined.border.color | --p-message-info-outlined-border-color | Outlined border color of info |
| message.info.simple.color | --p-message-info-simple-color | Simple color of info |
| message.success.background | --p-message-success-background | Background of success |
| message.success.border.color | --p-message-success-border-color | Border color of success |
| message.success.color | --p-message-success-color | Color of success |
| message.success.shadow | --p-message-success-shadow | Shadow of success |
| message.success.close.button.hover.background | --p-message-success-close-button-hover-background | Close button hover background of success |
| message.success.close.button.focus.ring.color | --p-message-success-close-button-focus-ring-color | Close button focus ring color of success |
| message.success.close.button.focus.ring.shadow | --p-message-success-close-button-focus-ring-shadow | Close button focus ring shadow of success |
| message.success.outlined.color | --p-message-success-outlined-color | Outlined color of success |
| message.success.outlined.border.color | --p-message-success-outlined-border-color | Outlined border color of success |
| message.success.simple.color | --p-message-success-simple-color | Simple color of success |
| message.warn.background | --p-message-warn-background | Background of warn |
| message.warn.border.color | --p-message-warn-border-color | Border color of warn |
| message.warn.color | --p-message-warn-color | Color of warn |
| message.warn.shadow | --p-message-warn-shadow | Shadow of warn |
| message.warn.close.button.hover.background | --p-message-warn-close-button-hover-background | Close button hover background of warn |
| message.warn.close.button.focus.ring.color | --p-message-warn-close-button-focus-ring-color | Close button focus ring color of warn |
| message.warn.close.button.focus.ring.shadow | --p-message-warn-close-button-focus-ring-shadow | Close button focus ring shadow of warn |
| message.warn.outlined.color | --p-message-warn-outlined-color | Outlined color of warn |
| message.warn.outlined.border.color | --p-message-warn-outlined-border-color | Outlined border color of warn |
| message.warn.simple.color | --p-message-warn-simple-color | Simple color of warn |
| message.error.background | --p-message-error-background | Background of error |
| message.error.border.color | --p-message-error-border-color | Border color of error |
| message.error.color | --p-message-error-color | Color of error |
| message.error.shadow | --p-message-error-shadow | Shadow of error |
| message.error.close.button.hover.background | --p-message-error-close-button-hover-background | Close button hover background of error |
| message.error.close.button.focus.ring.color | --p-message-error-close-button-focus-ring-color | Close button focus ring color of error |
| message.error.close.button.focus.ring.shadow | --p-message-error-close-button-focus-ring-shadow | Close button focus ring shadow of error |
| message.error.outlined.color | --p-message-error-outlined-color | Outlined color of error |
| message.error.outlined.border.color | --p-message-error-outlined-border-color | Outlined border color of error |
| message.error.simple.color | --p-message-error-simple-color | Simple color of error |
| message.secondary.background | --p-message-secondary-background | Background of secondary |
| message.secondary.border.color | --p-message-secondary-border-color | Border color of secondary |
| message.secondary.color | --p-message-secondary-color | Color of secondary |
| message.secondary.shadow | --p-message-secondary-shadow | Shadow of secondary |
| message.secondary.close.button.hover.background | --p-message-secondary-close-button-hover-background | Close button hover background of secondary |
| message.secondary.close.button.focus.ring.color | --p-message-secondary-close-button-focus-ring-color | Close button focus ring color of secondary |
| message.secondary.close.button.focus.ring.shadow | --p-message-secondary-close-button-focus-ring-shadow | Close button focus ring shadow of secondary |
| message.secondary.outlined.color | --p-message-secondary-outlined-color | Outlined color of secondary |
| message.secondary.outlined.border.color | --p-message-secondary-outlined-border-color | Outlined border color of secondary |
| message.secondary.simple.color | --p-message-secondary-simple-color | Simple color of secondary |
| message.contrast.background | --p-message-contrast-background | Background of contrast |
| message.contrast.border.color | --p-message-contrast-border-color | Border color of contrast |
| message.contrast.color | --p-message-contrast-color | Color of contrast |
| message.contrast.shadow | --p-message-contrast-shadow | Shadow of contrast |
| message.contrast.close.button.hover.background | --p-message-contrast-close-button-hover-background | Close button hover background of contrast |
| message.contrast.close.button.focus.ring.color | --p-message-contrast-close-button-focus-ring-color | Close button focus ring color of contrast |
| message.contrast.close.button.focus.ring.shadow | --p-message-contrast-close-button-focus-ring-shadow | Close button focus ring shadow of contrast |
| message.contrast.outlined.color | --p-message-contrast-outlined-color | Outlined color of contrast |
| message.contrast.outlined.border.color | --p-message-contrast-outlined-border-color | Outlined border color of contrast |
| message.contrast.simple.color | --p-message-contrast-simple-color | Simple color of contrast |
