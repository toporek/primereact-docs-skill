# InputGroup

InputGroup displays text, icon, buttons and other content can be grouped next to an input.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/inputgroup.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
```

```tsx
<InputGroup>
    <InputGroupAddon>
        <i className="pi pi-user" />
    </InputGroupAddon>
    <InputText placeholder="Username" />
</InputGroup>
```

## Examples

### Basic

Combines an input with addons such as buttons or text labels.

### Multiple

A group is created by wrapping the input and add-ons with the `InputGroup` component. Each add-on element is defined as a child of `InputGroupAddon` component. Multiple add-ons can be placed inside the same group.

### Button

Buttons can be placed at either side of an input element.

### Checkbox & Radio

Checkbox and RadioButton components can be combined with an input element under the same group.

### Select

A Select component can be used within an InputGroup alongside other add-ons and inputs.

## Accessibility

### Screen Reader

InputGroup and InputGroupAddon do not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
