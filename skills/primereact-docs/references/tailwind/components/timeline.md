# Timeline

Timeline visualizes a series of chained events.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/timeline.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Timeline, TimelineConnector, TimelineContent, TimelineEvent, TimelineMarker, TimelineOpposite, TimelineSeparator } from '@/components/ui/timeline';
```

```tsx
<Timeline>
    <TimelineEvent>
        <TimelineOpposite />
        <TimelineSeparator>
            <TimelineMarker />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent />
    </TimelineEvent>
</Timeline>
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
