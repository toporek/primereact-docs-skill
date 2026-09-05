# Accordion

Accordion groups content into collapsible panels.

## Usage

```tsx
import { Accordion } from '@primereact/ui/accordion';
```

```tsx
<Accordion.Root>
    <Accordion.Panel>
        <Accordion.Header>
            <Accordion.Trigger>
                <Accordion.Indicator />
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content />
    </Accordion.Panel>
</Accordion.Root>
```

## Examples

### Basic

A simple accordion with expandable panels controlled via the `value` prop.

### Multiple

Each `Accordion.Panel` should define a unique `value`. By default, a single panel is open at a time. Enable `multiple` on `Accordion.Root` to allow multiple panels to stay open.

### Controlled

Control the active panel state with `value` and `onValueChange`.

### Trigger

Use `Accordion.Trigger` to toggle content visibility. You can customize it with a render function that receives `accordionpanel`, or style it using `data-content-open`.

### Indicator

`Accordion.Indicator` supports conditional rendering based on panel state. Use the `match` prop to render content only when the state matches.

```tsx
<Accordion.Header>
    <Accordion.Trigger>
        <Accordion.Indicator match="open">
            <Minus />
        </Accordion.Indicator>
        <Accordion.Indicator match="closed">
            <Plus />
        </Accordion.Indicator>
    </Accordion.Trigger>
</Accordion.Header>
```

Available values: `open`, `closed`. Without the `match` prop, the indicator renders in all states.

### Disabled

Set `disabled` on an `Accordion.Panel` to disable only that panel, or set it on `Accordion.Root` to disable all panels.

### Template

Create accordion panels dynamically by iterating over a data source to keep structure consistent and reusable.

### With RadioButton

`RadioButton` component can be used to group multiple `Accordion.Panel` components.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/accordion.md#api) for `AccordionRoot`, `AccordionPanel`, `AccordionHeader`, `AccordionTrigger`, `AccordionContent`, and `AccordionIndicator` component documentation.

### Hooks

See [Headless API](../../headless/components/accordion.md#api) for `useAccordion` and `useAccordionPanel` hook documentation.

### Accessibility

See [Accordion Primitive](../../primitive/components/accordion.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-accordion | Class name of the root element |
| p-accordioncontent | Class name of the content element |
| p-accordionheader | Class name of the header element |
| p-accordiontrigger | Class name of the trigger element |
| p-accordionpanel | Class name of the panel element |
| p-accordion-indicator | Class name of the indicator element |
| p-accordioncontent-wrapper | Class name of the content outer wrapper element |
| p-accordioncontent-content | Class name of the content inner wrapper element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| accordion.transition.duration | --p-accordion-transition-duration | Transition duration of root |
| accordion.panel.border.width | --p-accordion-panel-border-width | Border width of panel |
| accordion.panel.border.color | --p-accordion-panel-border-color | Border color of panel |
| accordion.header.color | --p-accordion-header-color | Color of header |
| accordion.header.hover.color | --p-accordion-header-hover-color | Hover color of header |
| accordion.header.active.color | --p-accordion-header-active-color | Active color of header |
| accordion.header.active.hover.color | --p-accordion-header-active-hover-color | Active hover color of header |
| accordion.header.padding | --p-accordion-header-padding | Padding of header |
| accordion.header.font.weight | --p-accordion-header-font-weight | Font weight of header |
| accordion.header.font.size | --p-accordion-header-font-size | Font size of header |
| accordion.header.border.radius | --p-accordion-header-border-radius | Border radius of header |
| accordion.header.border.width | --p-accordion-header-border-width | Border width of header |
| accordion.header.border.color | --p-accordion-header-border-color | Border color of header |
| accordion.header.background | --p-accordion-header-background | Background of header |
| accordion.header.hover.background | --p-accordion-header-hover-background | Hover background of header |
| accordion.header.active.background | --p-accordion-header-active-background | Active background of header |
| accordion.header.active.hover.background | --p-accordion-header-active-hover-background | Active hover background of header |
| accordion.header.focus.ring.width | --p-accordion-header-focus-ring-width | Focus ring width of header |
| accordion.header.focus.ring.style | --p-accordion-header-focus-ring-style | Focus ring style of header |
| accordion.header.focus.ring.color | --p-accordion-header-focus-ring-color | Focus ring color of header |
| accordion.header.focus.ring.offset | --p-accordion-header-focus-ring-offset | Focus ring offset of header |
| accordion.header.focus.ring.shadow | --p-accordion-header-focus-ring-shadow | Focus ring shadow of header |
| accordion.header.toggle.icon.color | --p-accordion-header-toggle-icon-color | Toggle icon color of header |
| accordion.header.toggle.icon.hover.color | --p-accordion-header-toggle-icon-hover-color | Toggle icon hover color of header |
| accordion.header.toggle.icon.active.color | --p-accordion-header-toggle-icon-active-color | Toggle icon active color of header |
| accordion.header.toggle.icon.active.hover.color | --p-accordion-header-toggle-icon-active-hover-color | Toggle icon active hover color of header |
| accordion.header.first.top.border.radius | --p-accordion-header-first-top-border-radius | First top border radius of header |
| accordion.header.first.border.width | --p-accordion-header-first-border-width | First border width of header |
| accordion.header.last.bottom.border.radius | --p-accordion-header-last-bottom-border-radius | Last bottom border radius of header |
| accordion.header.last.active.bottom.border.radius | --p-accordion-header-last-active-bottom-border-radius | Last active bottom border radius of header |
| accordion.content.border.width | --p-accordion-content-border-width | Border width of content |
| accordion.content.border.color | --p-accordion-content-border-color | Border color of content |
| accordion.content.background | --p-accordion-content-background | Background of content |
| accordion.content.color | --p-accordion-content-color | Color of content |
| accordion.content.padding | --p-accordion-content-padding | Padding of content |
