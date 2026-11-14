# Stepper

The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.

## Usage

```tsx
import { Stepper } from '@primereact/ui/stepper';
```

```tsx
<Stepper.Root>
    <Stepper.List>
        <Stepper.Step>
            <Stepper.Header />
            <Stepper.Separator />
        </Stepper.Step>
    <Stepper.Panels>
        <Stepper.Panel />
    </Stepper.Panels>
</Stepper.Root>
```

## Examples

### Horizontal

Stepper requires two `Stepper.List`, `Stepper.Step`, `Stepper.Panels` and `Stepper.Panel` components as children which are displayed horizontally.

### Vertical

Stepper requires two `Stepper.Item`, `Stepper.Step` and `Stepper.Panel` components as children which are displayed vertically.

### Linear

Linear mode enforces step-by-step progression through the workflow, requiring users to complete the current step before proceeding to the next one. This ensures a controlled navigation flow through the process.

### Steps Only

For a more compact UI, the steps-only mode displays just the step indicators without content panels. This is useful for indicating progress without showing the actual step content.

### Template

The optional `as` property controls the default container element of a step, for example setting it to a button renders a button for the header instead of a div. The `asChild` option enables the headless mode for further customization by passing callbacks and properties to implement your own step.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/stepper.md#api) for `StepperRoot`, `StepperList`, `StepperStep`, `StepperItem`, `StepperHeader`, `StepperNumber`, `StepperTitle`, `StepperSeparator`, `StepperPanels`, `StepperPanel`, `StepperContent` component documentation.

### Hooks

See [Headless API](../../headless/components/stepper.md#api) for `useStepper` hook documentation.

### Accessibility

See [Stepper Primitive](../../primitive/components/stepper.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-stepper | Class name of the root element |
| p-stepper-separator | Class name of the separator element |
| p-steppanels | Class name of the panels element |
| p-steppanel | Class name of the panel element |
| p-steppanel-content | Class name of the content element |
| p-steplist | Class name of the list element |
| p-stepitem | Class name of the item element |
| p-step-header | Class name of the header element |
| p-step-number | Class name of the number element |
| p-step-title | Class name of the title element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| stepper.transition.duration | --p-stepper-transition-duration | Transition duration of root |
| stepper.separator.background | --p-stepper-separator-background | Background of separator |
| stepper.separator.active.background | --p-stepper-separator-active-background | Active background of separator |
| stepper.separator.margin | --p-stepper-separator-margin | Margin of separator |
| stepper.separator.size | --p-stepper-separator-size | Size of separator |
| stepper.step.padding | --p-stepper-step-padding | Padding of step |
| stepper.step.gap | --p-stepper-step-gap | Gap of step |
| stepper.step.header.padding | --p-stepper-step-header-padding | Padding of step header |
| stepper.step.header.border.radius | --p-stepper-step-header-border-radius | Border radius of step header |
| stepper.step.header.focus.ring.width | --p-stepper-step-header-focus-ring-width | Focus ring width of step header |
| stepper.step.header.focus.ring.style | --p-stepper-step-header-focus-ring-style | Focus ring style of step header |
| stepper.step.header.focus.ring.color | --p-stepper-step-header-focus-ring-color | Focus ring color of step header |
| stepper.step.header.focus.ring.offset | --p-stepper-step-header-focus-ring-offset | Focus ring offset of step header |
| stepper.step.header.focus.ring.shadow | --p-stepper-step-header-focus-ring-shadow | Focus ring shadow of step header |
| stepper.step.header.gap | --p-stepper-step-header-gap | Gap of step header |
| stepper.step.title.color | --p-stepper-step-title-color | Color of step title |
| stepper.step.title.active.color | --p-stepper-step-title-active-color | Active color of step title |
| stepper.step.title.font.weight | --p-stepper-step-title-font-weight | Font weight of step title |
| stepper.step.title.font.size | --p-stepper-step-title-font-size | Font size of step title |
| stepper.step.number.background | --p-stepper-step-number-background | Background of step number |
| stepper.step.number.active.background | --p-stepper-step-number-active-background | Active background of step number |
| stepper.step.number.border.color | --p-stepper-step-number-border-color | Border color of step number |
| stepper.step.number.active.border.color | --p-stepper-step-number-active-border-color | Active border color of step number |
| stepper.step.number.color | --p-stepper-step-number-color | Color of step number |
| stepper.step.number.active.color | --p-stepper-step-number-active-color | Active color of step number |
| stepper.step.number.size | --p-stepper-step-number-size | Size of step number |
| stepper.step.number.font.size | --p-stepper-step-number-font-size | Font size of step number |
| stepper.step.number.font.weight | --p-stepper-step-number-font-weight | Font weight of step number |
| stepper.step.number.border.radius | --p-stepper-step-number-border-radius | Border radius of step number |
| stepper.step.number.shadow | --p-stepper-step-number-shadow | Shadow of step number |
| stepper.steppanels.padding | --p-stepper-steppanels-padding | Padding of steppanels |
| stepper.steppanel.background | --p-stepper-steppanel-background | Background of steppanel |
| stepper.steppanel.color | --p-stepper-steppanel-color | Color of steppanel |
| stepper.steppanel.padding | --p-stepper-steppanel-padding | Padding of steppanel |
| stepper.steppanel.indent | --p-stepper-steppanel-indent | Indent of steppanel |
