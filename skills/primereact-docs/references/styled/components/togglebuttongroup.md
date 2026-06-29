# ToggleButtonGroup

ToggleButtonGroup component is used to create a group of toggle buttons.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function Preview() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup allowEmpty={false} multiple={false}>
                <ToggleButton.Root value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}

```

## Usage

```tsx
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
```

```tsx
<ToggleButtonGroup></ToggleButtonGroup>
```

## Examples

### Basic

A group of toggle buttons where one or more can be active at a time.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup allowEmpty={false} multiple={false}>
                <ToggleButton.Root value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Controlled

Use `value` and `onValueChange` properties to control the state of the `ToggleButton.Group`.

```tsx
'use client';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup
                allowEmpty={false}
                value={value}
                onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string[])}
            >
                <ToggleButton.Root value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify" />
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Multiple

`ToggleButton.Group` allows selecting only one item by default and setting `multiple` option enables choosing more than one item. In multiple case, model property should be an array.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function MultipleDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Sizes

`ToggleButton.Group` provides small and large sizes as alternatives to the base by using the `size` property.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function SizesDemo() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <ToggleButtonGroup size="small" multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
            <ToggleButtonGroup size="normal" multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
            <ToggleButtonGroup size="large" multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Fluid

When `fluid` is enabled, the ToggleButtonGroup spans the full width of its parent container, distributing the buttons evenly.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function FluidDemo() {
    return (
        <ToggleButtonGroup fluid multiple>
            <ToggleButton.Root value="bold">
                <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root value="italic">
                <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root value="underline">
                <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
            </ToggleButton.Root>
        </ToggleButtonGroup>
    );
}

```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState<string[] | null>(null);

    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup
                value={value}
                onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string[])}
                invalid={value === null}
            >
                <ToggleButton.Root value="monthly">
                    <ToggleButton.Indicator>Monthly</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="yearly">
                    <ToggleButton.Indicator>Yearly</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}

```

### Disabled

When `disabled` is present, the element cannot be edited and focused entirely. Certain options can also be disabled using their `disabled` properties.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';

export default function DisabledDemo() {
    return (
        <div className="flex items-center gap-4 justify-center">
            <ToggleButtonGroup disabled>
                <ToggleButton.Root value="off">
                    <ToggleButton.Indicator>Off</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="on">
                    <ToggleButton.Indicator>On</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
            <ToggleButtonGroup>
                <ToggleButton.Root value="option1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="option2" disabled>
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/togglebutton.md#api) for `ToggleButtonRoot`, `ToggleButtonIndicator`, `ToggleButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/components/togglebutton.md#api) for `useToggleButton` and `useToggleButtonGroup` hook documentation.

### Accessibility

See [ToggleButton Primitive](../../primitive/components/togglebutton.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-togglebutton | Class name of the root element |
| p-togglebutton-content | Class name of the content element |

| ClassName | Description |
|:------|:------|
| p-togglebutton-group | Class name of the root element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| togglebutton.padding | --p-togglebutton-padding | Padding of root |
| togglebutton.border.radius | --p-togglebutton-border-radius | Border radius of root |
| togglebutton.gap | --p-togglebutton-gap | Gap of root |
| togglebutton.font.size | --p-togglebutton-font-size | Font size of root |
| togglebutton.font.weight | --p-togglebutton-font-weight | Font weight of root |
| togglebutton.disabled.background | --p-togglebutton-disabled-background | Disabled background of root |
| togglebutton.disabled.border.color | --p-togglebutton-disabled-border-color | Disabled border color of root |
| togglebutton.disabled.color | --p-togglebutton-disabled-color | Disabled color of root |
| togglebutton.invalid.border.color | --p-togglebutton-invalid-border-color | Invalid border color of root |
| togglebutton.focus.ring.width | --p-togglebutton-focus-ring-width | Focus ring width of root |
| togglebutton.focus.ring.style | --p-togglebutton-focus-ring-style | Focus ring style of root |
| togglebutton.focus.ring.color | --p-togglebutton-focus-ring-color | Focus ring color of root |
| togglebutton.focus.ring.offset | --p-togglebutton-focus-ring-offset | Focus ring offset of root |
| togglebutton.focus.ring.shadow | --p-togglebutton-focus-ring-shadow | Focus ring shadow of root |
| togglebutton.transition.duration | --p-togglebutton-transition-duration | Transition duration of root |
| togglebutton.sm.font.size | --p-togglebutton-sm-font-size | Sm font size of root |
| togglebutton.sm.padding | --p-togglebutton-sm-padding | Sm padding of root |
| togglebutton.lg.font.size | --p-togglebutton-lg-font-size | Lg font size of root |
| togglebutton.lg.padding | --p-togglebutton-lg-padding | Lg padding of root |
| togglebutton.background | --p-togglebutton-background | Background of root |
| togglebutton.checked.background | --p-togglebutton-checked-background | Checked background of root |
| togglebutton.hover.background | --p-togglebutton-hover-background | Hover background of root |
| togglebutton.border.color | --p-togglebutton-border-color | Border color of root |
| togglebutton.color | --p-togglebutton-color | Color of root |
| togglebutton.hover.color | --p-togglebutton-hover-color | Hover color of root |
| togglebutton.checked.color | --p-togglebutton-checked-color | Checked color of root |
| togglebutton.checked.border.color | --p-togglebutton-checked-border-color | Checked border color of root |
| togglebutton.icon.disabled.color | --p-togglebutton-icon-disabled-color | Disabled color of icon |
| togglebutton.icon.color | --p-togglebutton-icon-color | Color of icon |
| togglebutton.icon.hover.color | --p-togglebutton-icon-hover-color | Hover color of icon |
| togglebutton.icon.checked.color | --p-togglebutton-icon-checked-color | Checked color of icon |
| togglebutton.content.padding | --p-togglebutton-content-padding | Padding of content |
| togglebutton.content.border.radius | --p-togglebutton-content-border-radius | Border radius of content |
| togglebutton.content.checked.shadow | --p-togglebutton-content-checked-shadow | Checked shadow of content |
| togglebutton.content.sm.padding | --p-togglebutton-content-sm-padding | Sm padding of content |
| togglebutton.content.lg.padding | --p-togglebutton-content-lg-padding | Lg padding of content |
| togglebutton.content.checked.background | --p-togglebutton-content-checked-background | Checked background of content |
