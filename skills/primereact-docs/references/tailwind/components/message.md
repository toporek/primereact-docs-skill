# Message

Message component is used to display inline messages.

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

### Severity

The `severity` option specifies the type of the message.

### Icon

`Message.Icon` is used to display an icon.

### Variant

Configure the `variant` value as `outlined` or `simple`.

### Sizes

Message provides `small` and `large` sizes as alternatives to the base.

### Dynamic

Multiple messages can be displayed.

### Closable

`Message.Close` is a triggerable element used to close the message.

### Life

Messages can disappear automatically by defined the `life` in milliseconds.

## Accessibility

### Screen Reader

Message component uses `alert` role that implicitly defines `aria-live` as "assertive" and `aria-atomic` as "true". Since any attribute is passed to the root element, attributes like `aria-labelledby` and `aria-label` can optionally be used as well.

Close element is a `button` with an `aria-label` that refers to the `aria.close` property of the locale API by default. The `closeButtonProps` can be used to customize the element and override the default `aria-label`.

### Close Button Keyboard Support

| Key     | Function            |
| ------- | ------------------- |
| `enter` | Closes the message. |
| `space` | Closes the message. |
