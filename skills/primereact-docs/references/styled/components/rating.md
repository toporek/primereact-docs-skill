# Rating

Rating component is a star based selection input.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Avatar } from '@primereact/ui/avatar';
import { Rating } from '@primereact/ui/rating';

function Preview() {
    return (
        <div className="max-w-sm mx-auto">
            <div className="flex items-start gap-3">
                <div className="relative shrink-0">
                    <Avatar.Root shape="circle" size="large">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt="Amy Elsner" />
                        <Avatar.Fallback>A</Avatar.Fallback>
                    </Avatar.Root>
                    <span className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 ring-2 ring-surface-0 dark:ring-surface-900" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                        <span className="text-color font-semibold text-sm">Amy Elsner</span>
                        <span className="text-xs text-muted-color">Support · 2m</span>
                    </div>
                    <div className="mt-1 rounded-2xl rounded-tl-sm bg-surface-100 dark:bg-surface-800 px-4 py-2.5 text-color">
                        Glad I could help! How would you rate this conversation?
                    </div>
                    <div className="mt-4">
                        <Rating.Root defaultValue={4}>
                            {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                    <Rating.Option key={i} index={i}>
                                        <Rating.On>
                                            <StarFill />
                                        </Rating.On>
                                        <Rating.Off>
                                            <Star />
                                        </Rating.Off>
                                    </Rating.Option>
                                ))}
                        </Rating.Root>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;

```

## Usage

```tsx
import { Rating } from '@primereact/ui/rating';
```

```tsx
<Rating.Root>
    <Rating.Option>
        <Rating.On />
        <Rating.Off />
    </Rating.Option>
</Rating.Root>
```

## Examples

### Basic

Captures user feedback as a star rating on a numeric scale.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root defaultValue={3.5}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default BasicDemo;

```

### Half Stars

Use `allowHalf` property to allow half stars.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Label } from '@primereact/ui/label';
import { Rating } from '@primereact/ui/rating';

function AllowHalfDemo() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col gap-2">
                <Label>Full Star</Label>
                <Rating.Root defaultValue={3} allowHalf={false}>
                    {Array(5)
                        .fill(null)
                        .map((_, i) => (
                            <Rating.Option key={i} index={i}>
                                <Rating.On>
                                    <StarFill />
                                </Rating.On>
                                <Rating.Off>
                                    <Star />
                                </Rating.Off>
                            </Rating.Option>
                        ))}
                </Rating.Root>
            </div>
            <div className="flex flex-col gap-2">
                <Label>Half Star</Label>
                <Rating.Root defaultValue={3} allowHalf={true}>
                    {Array(5)
                        .fill(null)
                        .map((_, i) => (
                            <Rating.Option key={i} index={i}>
                                <Rating.On>
                                    <StarFill />
                                </Rating.On>
                                <Rating.Off>
                                    <Star />
                                </Rating.Off>
                            </Rating.Option>
                        ))}
                </Rating.Root>
            </div>
        </div>
    );
}

export default AllowHalfDemo;

```

### Controlled

Use `onValueChange` to listen to value changes.

```tsx
'use client';
import { Star, StarFill } from '@primeicons/react';
import { Button } from '@primereact/ui/button';
import { Rating } from '@primereact/ui/rating';
import type { RatingRootValueChangeEvent } from '@primereact/ui/rating';
import React from 'react';

function ControlledDemo() {
    const [value, setValue] = React.useState<number | undefined>(4);

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <Rating.Root value={value} onValueChange={(e: RatingRootValueChangeEvent) => setValue(e.value)} className="[&_svg]:size-6!">
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
            <div className="flex items-center gap-2">
                <Button onClick={() => setValue(2.5)} severity="secondary" variant="outlined" size="small">
                    2.5 Star
                </Button>
                <Button onClick={() => setValue(3)} severity="secondary" variant="outlined" size="small">
                    3 Star
                </Button>
                <Button onClick={() => setValue(3.5)} severity="secondary" variant="outlined" size="small">
                    3.5 Star
                </Button>
            </div>
        </div>
    );
}

export default ControlledDemo;

```

### Number of Stars

Number of stars to display is defined with `stars` property.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function StarsDemo() {
    const stars = 10;

    return (
        <div className="flex justify-center">
            <Rating.Root defaultValue={5}>
                {Array(stars)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default StarsDemo;

```

### Vertical

Use `orientation="vertical"` to display the rating vertically.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function VerticalDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root defaultValue={3} orientation="vertical">
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default VerticalDemo;

```

### Template

Custom icons are used to override the default icons with `onIcon` and `offIcon` properties.

```tsx
import { Rating } from '@primereact/ui/rating';

function TemplateDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 ">
            <Rating.Root defaultValue={3}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <span className="text-surface-950 dark:text-surface-0 font-medium text-4xl select-none">A</span>
                            </Rating.On>
                            <Rating.Off>
                                <span className="text-surface-300 dark:text-surface-700 font-medium text-4xl select-none">A</span>
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
            <Rating.Root defaultValue={3} allowHalf={false}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <span className="size-7">
                                    <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" className="size-7" />
                                </span>
                            </Rating.On>
                            <Rating.Off>
                                <span className="size-7">
                                    <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" className="size-7" />
                                </span>
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default TemplateDemo;

```

### Emoji

Use emojis with `data-checked` attribute to highlight only the selected option while keeping others in grayscale.

```tsx
import { Rating } from '@primereact/ui/rating';

const emojis = ['😡', '😕', '😐', '🙂', '😍'];

function EmojiDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root defaultValue={3} allowHalf={false}>
                {emojis.map((emoji, i) => (
                    <Rating.Option
                        key={i}
                        index={i}
                        className="p-0! grayscale data-checked:grayscale-0 hover:grayscale-0 transition-all text-4xl select-none"
                    >
                        <Rating.On />
                        <Rating.Off>
                            <span>{emoji}</span>
                        </Rating.Off>
                    </Rating.Option>
                ))}
            </Rating.Root>
        </div>
    );
}

export default EmojiDemo;

```

### ReadOnly

When `readOnly` is present, value cannot be edited.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function ReadOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3} readOnly>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default ReadOnlyDemo;

```

### Disabled

When `disabled` is present, value cannot be edited.

```tsx
import { Star, StarFill } from '@primeicons/react';
import { Rating } from '@primereact/ui/rating';

function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Rating.Root value={3} disabled>
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Rating.Option key={i} index={i}>
                            <Rating.On>
                                <StarFill />
                            </Rating.On>
                            <Rating.Off>
                                <Star />
                            </Rating.Off>
                        </Rating.Option>
                    ))}
            </Rating.Root>
        </div>
    );
}

export default DisabledDemo;

```

## Accessibility

### Screen Reader

Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the [locale](https://primereact.dev/docs/configuration#locale) API via `star` and `stars` of the `aria` property.

### Keyboard Support

Keyboard interaction is derived from the native browser handling of radio buttons in a group.

| Key                        | Function                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| `tab`                      | Moves focus to the star representing the value, if there is none then first star receives the focus. |
| `left arrow` `up arrow`    | Moves focus to the previous star, if there is none then last radio button receives the focus.        |
| `right arrow` `down arrow` | Moves focus to the next star, if there is none then first star receives the focus.                   |
| `space`                    | If the focused star does not represent the value, changes the value to the star value.               |

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

> **`useRating` API table (`api/props`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating or the installed `@primereact/types`.

### State

> **`useRating` API table (`api/state`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating or the installed `@primereact/types`.

### Exposes

> **`useRating` API table (`api/exposes`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating or the installed `@primereact/types`.

### Interfaces

> **`useRating` API table (`api/interfaces`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating or the installed `@primereact/types`.

### Events

| Id | Label | Description | RelatedProp | Data |
|:------|:------|:------|:------|:------|
| api.userating.events.UseRatingValueChangeEvent | UseRatingValueChangeEvent | Event fired when the rating value changes. |  | [object Object],[object Object] |

### Types

> **`useRating` API table (`api/types`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/styled/components/rating or the installed `@primereact/types`.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-rating | Class name of the root element |
| p-rating-option | Class name of the option element |
| p-rating-on-icon | Class name of the on icon element |
| p-rating-off-icon | Class name of the off icon element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| rating.gap | --p-rating-gap | Gap of root |
| rating.transition.duration | --p-rating-transition-duration | Transition duration of root |
| rating.focus.ring.width | --p-rating-focus-ring-width | Focus ring width of root |
| rating.focus.ring.style | --p-rating-focus-ring-style | Focus ring style of root |
| rating.focus.ring.color | --p-rating-focus-ring-color | Focus ring color of root |
| rating.focus.ring.offset | --p-rating-focus-ring-offset | Focus ring offset of root |
| rating.focus.ring.shadow | --p-rating-focus-ring-shadow | Focus ring shadow of root |
| rating.icon.size | --p-rating-icon-size | Size of icon |
| rating.icon.color | --p-rating-icon-color | Color of icon |
| rating.icon.hover.color | --p-rating-icon-hover-color | Hover color of icon |
| rating.icon.active.color | --p-rating-icon-active-color | Active color of icon |
