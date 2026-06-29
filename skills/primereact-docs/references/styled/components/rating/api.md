# Rating API

API documentation for Rating component

## RatingRoot

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: RatingRootInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: RatingRootInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | RatingRootInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: RatingRootInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| value | number | null | Value of the rating. |
| defaultValue | number | 0 | The default value of the rating. |
| allowHalf | boolean | true | Whether to allow half stars. |
| name | string | null | Name used for the hidden radio inputs. Auto-generated if not provided. |
| orientation | "horizontal" \\| "vertical" | 'horizontal' | The orientation of the rating. |
| disabled | boolean | false | When present, it specifies that the element should be disabled. |
| readOnly | boolean | false | When present, it specifies that component is read-only. |
| invalid | boolean | false | When present, it specifies that the component should have invalid state style. |
| onValueChange | (event: UseRatingValueChangeEvent) => void | null | Callback fired when the value changes. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| value | number | null | The current value of the rating. |
| hovering | boolean | null | Whether the rating is in a hover state. |
| hoveringValue | number | null | The value currently being hovered over. |

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| state | UseRatingState | null | Current state of the rating. |
| inputName | string | null | The computed name used for radio inputs (from props.name or auto-generated).
Named 'inputName' to avoid collision with withComponent's common.name. |
| rootProps | UseRatingRootProps | null | Pre-built props for the root element (data attributes + event handlers). |
| updateValue | (event: SyntheticEvent, value: number) => void | null | Update the rating value. |
| setHoveringValue | (value: number) => void | null | Set the hover value (called by On/Off on pointer move). |
| resolvePointerValue | (e: MouseEvent \\| PointerEvent, optionEl: Element, idx: number) => number | null | Resolves the value to set from a pointer event, taking allowHalf and element position into account. |
| optionProps | UseRatingRootProps | null | Pre-built data attribute props for the option element. |
| onProps | UseRatingRootProps | null | Pre-built data attribute props for the on-icon element. |
| offProps | UseRatingRootProps | null | Pre-built data attribute props for the off-icon element. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of Rating component. | [object Object],[object Object],[object Object],[object Object],[object Object],[object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of Rating component. | [object Object] |

## RatingOption

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: RatingOptionInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: RatingOptionInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | RatingOptionInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: RatingOptionInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| index | number | null | The zero-based index of this option within the rating. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### Exposes

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| state | UseRatingOptionState | null | Current state of this option. |
| optionRef | RefObject | null | Ref to the option's root DOM element, used internally for pointer position calculations. |
| optionProps | Record<string, string \\| number> | null | Pre-built data attribute props for the option element. |
| onIconProps | { onMouseDown: (e: MouseEvent) => void; onPointerMove: (e: PointerEvent) => void; onClick: (e: MouseEvent) => void } | null | Pre-built interaction props for the on-icon element. |
| offIconProps | { onMouseDown: (e: MouseEvent) => void; onPointerMove: (e: PointerEvent) => void; onClick: (e: MouseEvent) => void } | null | Pre-built interaction props for the off-icon element. |
| onPointerMove | (e: PointerEvent) => void | null | Handle pointer move on On/Off elements (resolves half/full value and sets hovering value). |
| onClick | (e: MouseEvent) => void | null | Handle click on On/Off elements (resolves half/full value and updates value). |
| onMouseDown | (e: MouseEvent) => void | null | Prevent default on mouse down (avoids focus shift). |
| halfInputProps | InputHTMLAttributes | null | Pre-built props for the half-value sr-only radio input. Null when allowHalf is false. |
| fullInputProps | InputHTMLAttributes | null | Pre-built props for the full-value sr-only radio input. |
| rating | RatingRootInstance | null | The parent Rating component instance. |

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of RatingOption component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of RatingOption component. | [object Object] |

## useRating

### Props

> **`useRating` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating/api or the installed `@primereact/types`.

### State

> **`useRating` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating/api or the installed `@primereact/types`.

### Exposes

> **`useRating` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating/api or the installed `@primereact/types`.

### Interfaces

> **`useRating` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating/api or the installed `@primereact/types`.

### Events

| Id | Label | Description | RelatedProp | Data |
|:------|:------|:------|:------|:------|
| api.userating.events.UseRatingValueChangeEvent | UseRatingValueChangeEvent | Event fired when the rating value changes. |  | [object Object],[object Object] |

### Types

> **`useRating` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating/api or the installed `@primereact/types`.
