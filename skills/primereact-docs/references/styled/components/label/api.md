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

> **`Label` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label/api or the installed `@primereact/types`.

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

> **`useLabel` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label/api or the installed `@primereact/types`.

### State

> **`useLabel` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label/api or the installed `@primereact/types`.

### Exposes

> **`useLabel` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label/api or the installed `@primereact/types`.

### Interfaces

> **`useLabel` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label/api or the installed `@primereact/types`.

### Types

> **`useLabel` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/label/api or the installed `@primereact/types`.
