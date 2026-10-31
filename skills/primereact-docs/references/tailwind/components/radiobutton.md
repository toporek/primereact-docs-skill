# RadioButton

RadioButton is an extension to standard radio button element with theming.

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/radiobutton.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
```

```tsx
<RadioButtonGroup>
    <RadioButton />
</RadioButtonGroup>
```

## Examples

### Basic

### Group

Use the `RadioButton.Group` component with `value` and `onValueChange` props to control the selected state of radio buttons.

### Dynamic

RadioButtons can be generated using a list of values.

### Card

RadioButtons can be displayed in a card style.

### Sizes

Use the `size` property to change the size of a radio button.

### Filled

Specify the `filled` property to display the component with a higher visual emphasis than the default outlined style.

### Disabled

When the `disabled` property is present, the element cannot be edited and focused.

### Invalid

Invalid state is displayed using the `invalid` property to indicate a failed validation. You can use this style when integrating with form validation libraries.

## Accessibility

### Screen Reader

RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with id prop or using aria-labelledby, aria-label props.

```tsx
<label htmlFor="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />
```
