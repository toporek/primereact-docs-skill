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

## API

### MessageRoot

> **`MessageRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/message or the installed `@primereact/types`.

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"root"`    |

| Label | Type | Description |
|:------|:------|:------|
| root | MessageRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| content | MessageRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| icon | MessageRootPassThroughType> | Used to pass attributes to the icon's DOM element. |
| text | MessageRootPassThroughType> | Used to pass attributes to the text's DOM element. |
| close | MessageRootPassThroughType> | Used to pass attributes to the close's DOM element. |

### MessageContent

> **`MessageContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/message or the installed `@primereact/types`.

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"content"` |

| Label | Type | Description |
|:------|:------|:------|
| root | MessageContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### MessageIcon

> **`MessageIcon` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/message or the installed `@primereact/types`.

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"icon"`    |

| Label | Type | Description |
|:------|:------|:------|
| root | MessageIconPassThroughType> | Used to pass attributes to the root's DOM element. |

### MessageText

> **`MessageText` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/message or the installed `@primereact/types`.

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"text"`    |

| Label | Type | Description |
|:------|:------|:------|
| root | MessageTextPassThroughType> | Used to pass attributes to the root's DOM element. |

### MessageClose

> **`MessageClose` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/message or the installed `@primereact/types`.

| Attribute    | Value       |
| ------------ | ----------- |
| `data-scope` | `"message"` |
| `data-part`  | `"close"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | MessageClosePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Message uses the `alert` role which implicitly sets `aria-live="assertive"` and `aria-atomic="true"`, ensuring the message content is announced immediately by screen readers. The close button is a native `<button>` element, provide an `aria-label` for accessible labeling.

### Keyboard Support

| Key     | Function                         |
| ------- | -------------------------------- |
| `tab`   | Moves focus to the close button. |
| `enter` | Closes the message.              |
| `space` | Closes the message.              |
