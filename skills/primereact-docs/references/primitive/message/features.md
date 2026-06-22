# Message

An unstyled message component for displaying inline notifications with close and auto-dismiss support.

Build fully custom inline messages with complete control over layout and styling.

```tsx
'use client';
import { Sparkles } from '@primeicons/react/sparkles';
import { Times } from '@primeicons/react/times';
import { Message } from 'primereact/message';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Message.Root className={styles.root}>
                <Message.Content className={styles.content}>
                    <Message.Icon className={styles.icon}>
                        <Sparkles />
                    </Message.Icon>
                    <Message.Text className={styles.text}>Upgrade now and save 5%.</Message.Text>
                    <Message.Close className={styles.close}>
                        <Times />
                    </Message.Close>
                </Message.Content>
            </Message.Root>
        </div>
    );
}
```

## Features

- Compound component API with five sub-components: `Root`, `Content`, `Icon`, `Text`, `Close`
- Auto-close with configurable `life` duration
- Close callback on dismissal

## Usage

```tsx
import { Message } from 'primereact/message';
```

```tsx
<Message.Root>
    <Message.Content>
        <Message.Icon />
        <Message.Text></Message.Text>
        <Message.Close />
    </Message.Content>
</Message.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Message.Root as="section"></Message.Root>
<Message.Text as="span"></Message.Text>
```

Default elements: `Root`=`div`, `Content`=`div`, `Icon`=`span`, `Text`=`p`, `Close`=`button`.

### Render Function Children

Sub-components accept a render function as children, providing access to the component instance.

```tsx
<Message.Text>{(instance) => <span>{instance.message?.state.visible ? 'Visible' : 'Hidden'}</span>}</Message.Text>
```

## Pass Through

**Pass Through example:**

```tsx
import { Sparkles, Times } from '@primeicons/react';
import { Message } from '@primereact/ui/message';

export default function MessagePTDemo() {
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

## API

### MessageRoot

> **API/props table for `MessageRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"root"`    |

> **API/props table for `MessageRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MessageContent

> **API/props table for `MessageContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"content"` |

> **API/props table for `MessageContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MessageIcon

> **API/props table for `MessageIcon` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"icon"`    |

> **API/props table for `MessageIcon` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MessageText

> **API/props table for `MessageText` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"text"`    |

> **API/props table for `MessageText` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### MessageClose

> **API/props table for `MessageClose` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"close"`   |

> **API/props table for `MessageClose` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Message uses the `alert` role which implicitly sets `aria-live="assertive"` and `aria-atomic="true"`, ensuring the message content is announced immediately by screen readers. The close button is a native `<button>` element — provide an `aria-label` for accessible labeling.

### Keyboard Support

| Key     | Function                         |
| ------- | -------------------------------- |
| `tab`   | Moves focus to the close button. |
| `enter` | Closes the message.              |
| `space` | Closes the message.              |
