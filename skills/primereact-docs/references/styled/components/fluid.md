# Fluid

Fluid is a layout component to make descendant components span full width of their container.

```tsx
import { Fluid } from '@primereact/ui/fluid';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function Preview() {
    return (
        <div>
            <Fluid>
                <Label htmlFor="with-fluid" className="font-bold mb-2 block">
                    With Fluid
                </Label>
                <InputText id="with-fluid" placeholder="Type..." />
            </Fluid>
        </div>
    );
}

```

## Usage

```tsx
import { Fluid } from '@primereact/ui/fluid';
```

```tsx
<Fluid></Fluid>
```

## Examples

### Basic

Stretches form components to fill the available container width.

```tsx
import { Fluid } from '@primereact/ui/fluid';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function BasicDemo() {
    return (
        <div>
            <Fluid>
                <Label htmlFor="with-fluid" className="font-bold mb-2 block">
                    With Fluid
                </Label>
                <InputText id="with-fluid" placeholder="Type..." />
            </Fluid>
        </div>
    );
}

```

### Comparison

Components with the _fluid_ option like _InputText_ have the ability to span the full width of their component. Enabling _fluid_ on each component individually may be cumbersome, so wrapping content with _Fluid_ is an easier alternative.

Any component that has the _fluid_ property can be nested inside the _Fluid_ component. The fluid property of a child component has higher precedence than the _fluid_ container as shown in the last sample.

```tsx
import { Fluid } from '@primereact/ui/fluid';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function ComparisionDemo() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <Label htmlFor="non-fluid" className="font-bold mb-2 block">
                    Non-Fluid
                </Label>
                <InputText id="non-fluid" />
            </div>

            <div>
                <Label htmlFor="fluid" className="font-bold mb-2 block">
                    Fluid Prop
                </Label>
                <InputText id="fluid" fluid />
            </div>

            <Fluid>
                <span className="font-bold mb-2 block">Fluid Container</span>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <InputText />
                    </div>
                    <div>
                        <InputText />
                    </div>
                    <div className="col-span-full">
                        <InputText />
                    </div>
                    <div>
                        <InputText fluid={false} placeholder="Non-Fluid" />
                    </div>
                </div>
            </Fluid>
        </div>
    );
}

```

## Accessibility

### Screen Reader

Fluid does not require any roles and attributes.

### Keyboard Support

Component does not include any interactive elements.

# Fluid API

API documentation for Fluid component

## Fluid

### Props

| Name | Type | Default | Description |
|:------|:------|:------|:------|
| ref | Ref<unknown> | null | The reference to the component instance. |
| pIf | boolean | true | Whether the component should be rendered. |
| style | CSSProperties \\| ((instance?: FluidInstance) => CSSProperties) | null | The style to apply to the component. |
| className | string \\| ((instance?: FluidInstance) => string) | null | The class name to apply to the component. |
| as | string \\| number \\| bigint \\| boolean \\| ComponentClass<any, any> \\| FunctionComponent<any> \\| ReactElement<unknown, string \\| JSXElementConstructor<any>> \\| Iterable \\| ReactPortal \\| Promise | null | The component type to render. |
| asChild | boolean | false | Whether the component should be rendered as a child component. |
| instance | FluidInstance | null | The instance to pass to the component. |
| pt | SafeRecord | null | The pass-through props to pass to the component. |
| ptOptions | PassThroughOptions | null | The pass-through options to pass to the component. |
| unstyled | boolean | null | Whether the component should be rendered without classes. |
| dt | unknown | null | The design token to use for the component. |
| styles | StylesOptions | null | The styles to use for the component. |
| render | (instance: FluidInstance) => ReactNode | null | The render function to render the component with instance access. |
| children | any | null | The children to render.

Accepts  `React.ReactNode`  for static content or a render function  `(instance: I) => React.ReactNode`  for instance access.
Typed as  `any`  to avoid JSX type errors when used directly in templates. |
| [key: string] | any | null |  |
| pt-{optionName}-* | - | null | Pass through attributes for customizing component. For more info, see Pass Through tab. |

### State

> **`Fluid` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/fluid or the installed `@primereact/types`.

### Exposes

> **`Fluid` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/fluid or the installed `@primereact/types`.

### Interfaces

| Label | Description | Data |
|:------|:------|:------|
| PassThroughOptions | Defines passthrough(pt) options of Fluid component. | [object Object] |

### Types

| Label | Description | Data |
|:------|:------|:------|
| Instance | Instance of Fluid component. | [object Object] |

## useFluid

### Props

> **`useFluid` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/fluid or the installed `@primereact/types`.

### State

> **`useFluid` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/fluid or the installed `@primereact/types`.

### Exposes

> **`useFluid` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/fluid or the installed `@primereact/types`.

### Types

> **`useFluid` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/fluid or the installed `@primereact/types`.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-fluid | Class name of the root element |

### Design Tokens

List of design tokens.

> **`Fluid` API table (`token`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/fluid or the installed `@primereact/types`.
