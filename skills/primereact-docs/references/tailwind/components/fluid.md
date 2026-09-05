# Fluid

Fluid is a layout component to make descendant components span full width of their container.

## Usage

```tsx
import { Fluid } from '@/components/ui/fluid';
```

```tsx
<Fluid></Fluid>
```

## Examples

### Basic

Stretches form components to fill the available container width.

### Comparison

Components with the _fluid_ option like _InputText_ have the ability to span the full width of their component. Enabling _fluid_ on each component individually may be cumbersome, so wrapping content with _Fluid_ is an easier alternative.

Any component that has the _fluid_ property can be nested inside the _Fluid_ component. The fluid property of a child component has higher precedence than the _fluid_ container as shown in the last sample.

## Accessibility

### Screen Reader

Fluid does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.
