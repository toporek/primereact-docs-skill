# InputGroup

InputGroup displays text, icon, buttons and other content can be grouped next to an input.

## Usage

```tsx
import { InputGroup } from '@primereact/ui/inputgroup';
```

```tsx
<InputGroup.Root>
    <InputGroup.Addon />
</InputGroup.Root>
```

## Examples

### Basic

Combines an input with addons such as buttons or text labels.

### Multiple

A group is created by wrapping the input and add-ons with the `InputGroup` component. Each add-on element is defined as a child of `InputGroup.Addon` component. Multiple add-ons can be placed inside the same group.

### Button

Buttons can be placed at either side of an input element.

### Checkbox & Radio

Checkbox and RadioButton components can be combined with an input element under the same group.

### Select

A Select component can be used within an InputGroup alongside other add-ons and inputs.

### Float Label

FloatLabel visually integrates a label with its form element. Visit [FloatLabel](https://primereact.dev/docs/components/floatlabel) documentation for more information.

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

## Accessibility

### Screen Reader

InputGroup and InputGroupAddon do not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.

# InputGroup API

API documentation for InputGroup component

## InputGroupRoot

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: InputGroupRootInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: InputGroupRootInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | InputGroupRootInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: InputGroupRootInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

> **`InputGroupRoot` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| rootProps | UseInputGroupRootProps | null | Pre-built data attribute props for the root element. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of InputGroup component. | [object Object],[object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of InputGroup component. | [object Object] |

## InputGroupAddon

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: InputGroupAddonInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: InputGroupAddonInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | InputGroupAddonInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: InputGroupAddonInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| inputgroup | InputGroupRootInstance | null | Instance of the InputGroup component. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of InputGroupAddon component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of InputGroupAddon component. | [object Object] |

## useInputGroup

### Props

> **`useInputGroup` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### State

> **`useInputGroup` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### Exposes

> **`useInputGroup` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### Interfaces

> **`useInputGroup` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

### Types

> **`useInputGroup` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/inputgroup or the installed `@primereact/types`.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-inputgroup | Class name of the root element |

| ClassName | Description |
|:------|:------|
| p-inputgroup-addon | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| inputgroup.addon.background | --p-inputgroup-addon-background | Background of addon |
| inputgroup.addon.border.color | --p-inputgroup-addon-border-color | Border color of addon |
| inputgroup.addon.color | --p-inputgroup-addon-color | Color of addon |
| inputgroup.addon.border.radius | --p-inputgroup-addon-border-radius | Border radius of addon |
| inputgroup.addon.padding | --p-inputgroup-addon-padding | Padding of addon |
| inputgroup.addon.min.width | --p-inputgroup-addon-min-width | Min width of addon |
| inputgroup.addon.font.weight | --p-inputgroup-addon-font-weight | Font weight of addon |
| inputgroup.addon.font.size | --p-inputgroup-addon-font-size | Font size of addon |
