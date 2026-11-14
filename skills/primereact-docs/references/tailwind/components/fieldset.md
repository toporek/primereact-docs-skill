# Fieldset

Fieldset is a container component with a legend and optional collapsible content.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/fieldset.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Fieldset, FieldsetContent, FieldsetLegend, FieldsetTitle } from '@/components/ui/fieldset';
```

```tsx
<Fieldset>
    <FieldsetLegend>
        <FieldsetTitle>Legend</FieldsetTitle>
    </FieldsetLegend>
    <FieldsetContent />
</Fieldset>
```

## Examples

### Basic

### Toggleable

Use `Fieldset.Trigger` inside the legend to make the fieldset collapsible. The `defaultOpen` prop sets the initial state, and content visibility is animated by default.

### Controlled

Control fieldset state from outside with the `open` and `onOpenChange` props.

### Indicator

`Fieldset.Indicator` supports conditional rendering based on fieldset state. Use the `match` prop to render content only when the state matches.

```tsx
<Fieldset.Legend>
    <Fieldset.Trigger>
        <Fieldset.Title>Header</Fieldset.Title>
        <Fieldset.Indicator match="open">
            <Minus />
        </Fieldset.Indicator>
        <Fieldset.Indicator match="closed">
            <Plus />
        </Fieldset.Indicator>
    </Fieldset.Trigger>
</Fieldset.Legend>
```

Available values: `open`, `closed`. Without the `match` prop, the indicator renders in all states.

## Accessibility

### Screen Reader

Fieldset uses the semantic `fieldset` element. For toggleable usage, the trigger button uses `aria-controls` to reference the content region and `aria-expanded` to reflect visibility state.

### Keyboard Support

| Key           | Function                                                                |
| ------------- | ----------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous focusable element in the page tab sequence. |
| `enter`       | Toggles the visibility of the content.                                  |
| `space`       | Toggles the visibility of the content.                                  |
