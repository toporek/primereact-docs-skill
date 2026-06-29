# FloatLabel API

API documentation for FloatLabel component

## FloatLabel

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: FloatLabelInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: FloatLabelInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | FloatLabelInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: FloatLabelInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| variant | "on" \\| "in" \\| "over" | over | Defines the positioning of the label relative to the input. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

> **`FloatLabel` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel/api or the installed `@primereact/types`.

### Exposes

> **`FloatLabel` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel/api or the installed `@primereact/types`.

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of FloatLabel component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of FloatLabel component. | [object Object] |

## useFloatLabel

### Props

> **`useFloatLabel` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel/api or the installed `@primereact/types`.

### State

> **`useFloatLabel` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel/api or the installed `@primereact/types`.

### Exposes

> **`useFloatLabel` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel/api or the installed `@primereact/types`.

### Interfaces

> **`useFloatLabel` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel/api or the installed `@primereact/types`.

### Types

> **`useFloatLabel` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/floatlabel/api or the installed `@primereact/types`.
