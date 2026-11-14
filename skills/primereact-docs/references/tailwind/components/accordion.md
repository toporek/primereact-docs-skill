# Accordion

Accordion groups content into collapsible panels.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/accordion.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Accordion, AccordionContent, AccordionPanel, AccordionTrigger } from '@/components/ui/accordion';
```

```tsx
<Accordion>
    <AccordionPanel value="1">
        <AccordionTrigger>Title</AccordionTrigger>
        <AccordionContent>Content</AccordionContent>
    </AccordionPanel>
</Accordion>
```

## Examples

### Basic

### Multiple

Each `Accordion.Panel` should define a unique `value`. By default, a single panel is open at a time. Enable `multiple` on `Accordion.Root` to allow multiple panels to stay open.

### Controlled

Control the active panel state with `value` and `onValueChange`.

### Disabled

Set `disabled` on an `Accordion.Panel` to disable only that panel, or set it on `Accordion.Root` to disable all panels.

### With RadioButton

`RadioButton` component can be used to group multiple `Accordion.Panel` components.

## Accessibility

### Screen Reader

Accordion headers are buttons. They use `aria-controls` to reference the content region and `aria-expanded` to reflect visibility state. The announced label can be customized with `aria-label` or `aria-labelledby` via pt.

The content uses `role="region"` and an `id` that matches the header button's `aria-controls`.

### Header Keyboard Support

| Key           | Function                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `tab`         | Moves focus to the next focusable element in the page tab sequence.                                  |
| `shift + tab` | Moves focus to the previous focusable element in the page tab sequence.                              |
| `enter`       | Toggles the visibility of the content.                                                               |
| `space`       | Toggles the visibility of the content.                                                               |
| `down arrow`  | Moves focus to the next header. If focus is on the last header, moves focus to the first header.     |
| `up arrow`    | Moves focus to the previous header. If focus is on the first header, moves focus to the last header. |
| `home`        | Moves focus to the first header.                                                                     |
| `end`         | Moves focus to the last header.                                                                      |
