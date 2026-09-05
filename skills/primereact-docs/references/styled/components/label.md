# Label

Label provides accessible text labels for form controls. Use `htmlFor` to link the label to a form control by its id.

## Usage

```tsx
import { Label } from '@primereact/ui/label';
```

```tsx
<Label />
```

## Examples

### Basic

An accessible label element associated with a form control.

### Required

You can display required indicators in the label content while keeping the input semantics with `required` or `aria-required`.

### Wrapper

`Label` can wrap a form control to associate them implicitly without `htmlFor`. Useful for card-style selectable options.

### Disabled

`Label` reflects the disabled state of an associated control automatically when the control and label are peers or when the container has `data-disabled`.

## Accessibility

### Screen Reader

`Label` renders a native `label` element. Use `htmlFor` to associate it with a form control id, or wrap the form control inside the label.

### Keyboard Support

Component does not include any interactive elements.

# Label API

API documentation for Label component

## Label

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: LabelInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: LabelInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | LabelInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: LabelInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

> **`Label` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label or the installed `@primereact/types`.

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| rootProps | UseLabelRootProps | null | Pre-built data attribute props for the root element. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of Label component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of Label component. | [object Object] |

## useLabel

### Props

> **`useLabel` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label or the installed `@primereact/types`.

### State

> **`useLabel` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label or the installed `@primereact/types`.

### Exposes

> **`useLabel` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label or the installed `@primereact/types`.

### Interfaces

> **`useLabel` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label or the installed `@primereact/types`.

### Types

> **`useLabel` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label or the installed `@primereact/types`.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-label | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| label.gap | --p-label-gap | Gap of root |
| label.font.size | --p-label-font-size | Font size of root |
| label.font.weight | --p-label-font-weight | Font weight of root |
| label.text.color | --p-label-text-color | Text color of root |
| label.disabled.opacity | --p-label-disabled-opacity | Disabled opacity of root |
