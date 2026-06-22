# Fluid

Fluid is a layout component to make descendant components span full width of their container.

```tsx
import { Fluid } from '@/components/ui/fluid';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';

export default function Preview() {
    return (
        <div>
            <Fluid>
                <Label htmlFor="tw-with-fluid" className="font-bold mb-2 block">
                    With Fluid
                </Label>
                <InputText id="tw-with-fluid" placeholder="Type..." />
            </Fluid>
        </div>
    );
}
```

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

```tsx
import { Fluid } from '@/components/ui/fluid';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';

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
import { Fluid } from '@/components/ui/fluid';
import { InputText } from '@/components/ui/inputtext';
import { Label } from '@/components/ui/label';

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
