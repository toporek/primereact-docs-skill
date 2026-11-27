# Tag

Tag is a label component used to categorize content.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/tag.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Tag } from '@/components/ui/tag';
```

```tsx
<Tag>Label</Tag>
```

## Examples

### Basic

A small label for categorizing or marking items.

### Severity

Use `severity` property to define the severity of the tag.

### Pill

Use `rounded` property to display a tag as a pill.

### Icon

Place the icon left or right of the label.

### Template

Children of the component are passed as the content for templating.

### As button

Use `as="button"` to display a tag as a button.

## Accessibility

### Screen Reader

Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required.

### Keyboard Support

Component does not include any interactive elements.
