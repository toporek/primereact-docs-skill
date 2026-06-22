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

**Pass Through example:**

```tsx
import { Timeline } from '@primereact/ui/timeline';

export default function TimelinePTDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2026 10:30' },
        { status: 'Processing', date: '15/10/2026 14:00' },
        { status: 'Shipped', date: '15/10/2026 16:15' },
        { status: 'Delivered', date: '16/10/2026 10:00' }
    ];

    return (
        <Timeline.Root>
            {events.map((event, index) => (
                <Timeline.Event key={index}>
                    <Timeline.Opposite>
                        <small className="text-surface-500 dark:text-surface-400">{event.date}</small>
                    </Timeline.Opposite>
                    <Timeline.Separator>
                        <Timeline.Marker />
                        {index !== events.length - 1 && <Timeline.Connector />}
                    </Timeline.Separator>
                    <Timeline.Content>{event.status}</Timeline.Content>
                </Timeline.Event>
            ))}
        </Timeline.Root>
    );
}
```

## API

### TimelineRoot

> **API/props table for `TimelineRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                     |
| ------------------ | ------------------------- |
| `data-scope`       | `"timeline"`              |
| `data-part`        | `"root"`                  |
| `data-align`       | Current alignment value   |
| `data-orientation` | Current orientation value |

> **API/props table for `TimelineRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TimelineEvent

> **API/props table for `TimelineEvent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"timeline"` |
| `data-part`  | `"event"`    |

> **API/props table for `TimelineEvent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TimelineSeparator

> **API/props table for `TimelineSeparator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"timeline"`  |
| `data-part`  | `"separator"` |

> **API/props table for `TimelineSeparator` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TimelineMarker

> **API/props table for `TimelineMarker` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"timeline"` |
| `data-part`  | `"marker"`   |

> **API/props table for `TimelineMarker` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TimelineConnector

> **API/props table for `TimelineConnector` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value         |
| ------------ | ------------- |
| `data-scope` | `"timeline"`  |
| `data-part`  | `"connector"` |

> **API/props table for `TimelineConnector` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TimelineContent

> **API/props table for `TimelineContent` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"timeline"` |
| `data-part`  | `"content"`  |

> **API/props table for `TimelineContent` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### TimelineOpposite

> **API/props table for `TimelineOpposite` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value        |
| ------------ | ------------ |
| `data-scope` | `"timeline"` |
| `data-part`  | `"opposite"` |

> **API/props table for `TimelineOpposite` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Timeline uses semantic containers for event structure. Add `aria-label` on the root to describe the timeline purpose. Event content is read in document order.

```tsx
<Timeline.Root aria-label="Order tracking timeline"></Timeline.Root>
```

### Keyboard Support

Not applicable. Timeline is a presentational component — keyboard interaction depends on interactive content rendered inside events.
