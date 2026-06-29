# Timeline

An unstyled timeline component for visualizing sequential events with full control over layout and styling.

Build fully custom timelines and event sequences with complete control over layout and styling.

```tsx
'use client';
import { Timeline } from 'primereact/timeline';
import styles from './basic-demo.module.css';

const events = [
    { status: 'Ordered', date: '15/10/2026 10:30' },
    { status: 'Processing', date: '15/10/2026 14:00' },
    { status: 'Shipped', date: '15/10/2026 16:15' },
    { status: 'Delivered', date: '16/10/2026 10:00' }
];

export default function BasicDemo() {
    return (
        <div className={styles.wrapper}>
            <Timeline.Root className={styles.root}>
                {events.map((event, index) => (
                    <Timeline.Event key={index} className={styles.event}>
                        <Timeline.Opposite className={styles.opposite}>{event.date}</Timeline.Opposite>
                        <Timeline.Separator className={styles.separator}>
                            <Timeline.Marker className={styles.marker} />
                            {index !== events.length - 1 && <Timeline.Connector className={styles.connector} />}
                        </Timeline.Separator>
                        <Timeline.Content className={styles.content}>{event.status}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline.Root>
        </div>
    );
}

```

## Features

- Compound component API with sub-components: `Root`, `Event`, `Separator`, `Marker`, `Connector`, `Content`, `Opposite`
- Five alignment modes for flexible content placement
- Vertical and horizontal orientation support
- Opposite-side content for metadata like dates or timestamps

## Usage

```tsx
import { Timeline } from 'primereact/timeline';
```

```tsx
<Timeline.Root>
    <Timeline.Event>
        <Timeline.Opposite></Timeline.Opposite>
        <Timeline.Separator>
            <Timeline.Marker />
            <Timeline.Connector />
        </Timeline.Separator>
        <Timeline.Content></Timeline.Content>
    </Timeline.Event>
</Timeline.Root>
```

## Behavior

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<Timeline.Root as="section"></Timeline.Root>
<Timeline.Content as="article"></Timeline.Content>
```

Default elements: `Root`=`div`, `Event`=`div`, `Separator`=`div`, `Marker`=`div`, `Connector`=`div`, `Content`=`div`, `Opposite`=`div`.

### Render Function Children

`Root` accepts a render function as children, providing access to the component instance.

```tsx
<Timeline.Root align="alternate">{(instance) => <span>Align: {instance.props.align}</span>}</Timeline.Root>
```

## Pass Through

## API

### TimelineRoot

> **`TimelineRoot` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/timeline or the installed `@primereact/types`.

| Attribute          | Value                     |
| ------------------ | ------------------------- |
| `data-scope`       | `"timeline"`              |
| `data-part`        | `"root"`                  |
| `data-align`       | Current alignment value   |
| `data-orientation` | Current orientation value |

| Label | Type | Description |
|:------|:------|:------|
| root | TimelineRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| event | TimelineRootPassThroughType> | Used to pass attributes to the event's DOM element. |
| content | TimelineRootPassThroughType> | Used to pass attributes to the content's DOM element. |
| opposite | TimelineRootPassThroughType> | Used to pass attributes to the opposite's DOM element. |
| separator | TimelineRootPassThroughType> | Used to pass attributes to the separator's DOM element. |
| marker | TimelineRootPassThroughType> | Used to pass attributes to the marker's DOM element. |
| connector | TimelineRootPassThroughType> | Used to pass attributes to the connector's DOM element. |

### TimelineEvent

> **`TimelineEvent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/timeline or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"timeline"` |
| `data-part`  | `"event"`    |

| Label | Type | Description |
|:------|:------|:------|
| root | TimelineEventPassThroughType> | Used to pass attributes to the root's DOM element. |

### TimelineSeparator

> **`TimelineSeparator` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/timeline or the installed `@primereact/types`.

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"timeline"`  |
| `data-part`  | `"separator"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TimelineSeparatorPassThroughType> | Used to pass attributes to the root's DOM element. |

### TimelineMarker

> **`TimelineMarker` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/timeline or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"timeline"` |
| `data-part`  | `"marker"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | TimelineMarkerPassThroughType> | Used to pass attributes to the root's DOM element. |

### TimelineConnector

> **`TimelineConnector` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/timeline or the installed `@primereact/types`.

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"timeline"`  |
| `data-part`  | `"connector"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TimelineConnectorPassThroughType> | Used to pass attributes to the root's DOM element. |

### TimelineContent

> **`TimelineContent` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/timeline or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"timeline"` |
| `data-part`  | `"content"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | TimelineContentPassThroughType> | Used to pass attributes to the root's DOM element. |

### TimelineOpposite

> **`TimelineOpposite` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/primitive/components/timeline or the installed `@primereact/types`.

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"timeline"` |
| `data-part`  | `"opposite"` |

| Label | Type | Description |
|:------|:------|:------|
| root | TimelineOppositePassThroughType> | Used to pass attributes to the root's DOM element. |

## Accessibility

### Screen Reader

Timeline uses semantic containers for event structure. Add `aria-label` on the root to describe the timeline purpose. Event content is read in document order.

```tsx
<Timeline.Root aria-label="Order tracking timeline"></Timeline.Root>
```

### Keyboard Support

Not applicable. Timeline is a presentational component, keyboard interaction depends on interactive content rendered inside events.
