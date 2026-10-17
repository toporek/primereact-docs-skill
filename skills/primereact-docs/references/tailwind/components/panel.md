# Panel

Panel is a container component with optional collapsible content.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/panel.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Panel, PanelContent, PanelHeader, PanelIndicator, PanelTitle, PanelTrigger } from '@/components/ui/panel';
```

```tsx
<Panel>
    <PanelHeader>
        <PanelTitle>Header</PanelTitle>
    </PanelHeader>
    <PanelContent />
</Panel>
```

## Examples

### Basic

### Toggleable

Use `Panel.Trigger` inside the header to make the panel collapsible. The `defaultOpen` prop sets the initial state, and content visibility is animated by default.

### Controlled

Control panel state from outside with the `open` and `onOpenChange` props.

### Indicator

`Panel.Indicator` supports conditional rendering based on panel state. Use the `match` prop to render content only when the state matches.

```tsx
<Panel.Header>
    <Panel.Title>Header</Panel.Title>
    <Panel.Trigger>
        <Panel.Indicator match="open">
            <Minus />
        </Panel.Indicator>
        <Panel.Indicator match="closed">
            <Plus />
        </Panel.Indicator>
    </Panel.Trigger>
</Panel.Header>
```

Available values: `open`, `closed`. Without the `match` prop, the indicator renders in all states.

### Template

Customize the header with custom layouts such as avatars, action buttons, and additional metadata alongside `Panel.Trigger`.

## Accessibility

### Screen Reader

For toggleable panels, the trigger button uses `aria-controls` to reference the content region and `aria-expanded` to reflect visibility state. Accessible labels can be customized with `aria-label` or `aria-labelledby`.

### Keyboard Support

| Key           | Function                                                                |
| ------------- | ----------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element in the page tab sequence.     |
| `shift + tab` | Moves focus to the previous focusable element in the page tab sequence. |
| `enter`       | Toggles the visibility of the content.                                  |
| `space`       | Toggles the visibility of the content.                                  |
