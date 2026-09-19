# Timeline

Timeline visualizes a series of chained events.

## Usage

```tsx
import { Timeline } from '@primereact/ui/timeline';
```

```tsx
<Timeline.Root>
    <Timeline.Event>
        <Timeline.Opposite />
        <Timeline.Separator>
            <Timeline.Marker />
            <Timeline.Connector />
        </Timeline.Separator>
        <Timeline.Content />
    </Timeline.Event>
</Timeline.Root>
```

## Examples

### Basic

Displays a sequence of events along a vertical or horizontal axis.

### Alignment

Content location relative to the line is defined with the _align_ property.

### Opposite

Additional content at the other side of the line can be provided with the _opposite_ property.

### Horizontal

Timeline orientation is controlled with the _orientation_ property, default is _vertical_ having _horizontal_ as the alternative.

### Custom

Sample implementation with custom content, styled markers, and rich event cards.

### Interactive

Build interactive step-based workflows with progress tracking and state management.

### Activity Feed

Display real-time activity streams with user avatars and contextual information.

## Related

### Sub-Components

See [Timeline Primitive](../../primitive/components/timeline.md#api) for the full sub-component API.

### Hooks

See [useTimeline](../../headless/components/timeline.md#api) for the headless hook API.

### Accessibility

See [Timeline Primitive](../../primitive/components/timeline.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-timeline | Class name of the root element |
| p-timeline-event | Class name of the event element |
| p-timeline-event-content | Class name of the content element |
| p-timeline-event-opposite | Class name of the opposite element |
| p-timeline-event-separator | Class name of the separator element |
| p-timeline-event-marker | Class name of the marker element |
| p-timeline-event-connector | Class name of the connector element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| timeline.event.min.height | --p-timeline-event-min-height | Min height of event |
| timeline.horizontal.event.content.padding | --p-timeline-horizontal-event-content-padding | Event content padding of horizontal |
| timeline.vertical.event.content.padding | --p-timeline-vertical-event-content-padding | Event content padding of vertical |
| timeline.event.marker.size | --p-timeline-event-marker-size | Size of event marker |
| timeline.event.marker.border.radius | --p-timeline-event-marker-border-radius | Border radius of event marker |
| timeline.event.marker.border.width | --p-timeline-event-marker-border-width | Border width of event marker |
| timeline.event.marker.background | --p-timeline-event-marker-background | Background of event marker |
| timeline.event.marker.border.color | --p-timeline-event-marker-border-color | Border color of event marker |
| timeline.event.marker.content.border.radius | --p-timeline-event-marker-content-border-radius | Content border radius of event marker |
| timeline.event.marker.content.size | --p-timeline-event-marker-content-size | Content size of event marker |
| timeline.event.marker.content.background | --p-timeline-event-marker-content-background | Content background of event marker |
| timeline.event.marker.content.inset.shadow | --p-timeline-event-marker-content-inset-shadow | Content inset shadow of event marker |
| timeline.event.connector.color | --p-timeline-event-connector-color | Color of event connector |
| timeline.event.connector.size | --p-timeline-event-connector-size | Size of event connector |
