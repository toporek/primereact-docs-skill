# ToggleButton

ToggleButton component is used to create a button that can be toggled on or off.

```tsx
'use client';
import { BookmarkFill, Heart, HeartFill } from '@primeicons/react';
import { Bookmark } from '@primeicons/react/bookmark';
import { ToggleButton, type ToggleButtonIndicatorInstance } from '@primereact/ui/togglebutton';

export default function Preview() {
    return (
        <div className="max-w-xs mx-auto">
            <div className="w-full text-balance">
                <div className="text-color text-lg font-bold">Migrating to PrimeReact v11: What Changed and Why</div>
                <div className="mt-1 line-clamp-2 text-muted-color">
                    A hands-on guide to the new compound component API, headless hooks, and Tailwind-first theming in PrimeReact v11.
                </div>
            </div>
            <div className="mt-4 flex items-start gap-2">
                <div className="flex-1 flex items-center gap-2">
                    <span className="text-muted-color opacity-75">May 12</span>
                </div>
                <ToggleButton.Root defaultPressed>
                    <ToggleButton.Indicator>
                        {({ togglebutton }: ToggleButtonIndicatorInstance) => {
                            const isPressed = togglebutton?.state.pressed;

                            return (
                                <>
                                    {isPressed ? <HeartFill /> : <Heart />}
                                    <span>{isPressed ? 'Liked' : 'Like'}</span>
                                </>
                            );
                        }}
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root>
                    <ToggleButton.Indicator>
                        {({ togglebutton }: ToggleButtonIndicatorInstance) => {
                            const isPressed = togglebutton?.state.pressed;

                            return (
                                <>
                                    {isPressed ? <BookmarkFill /> : <Bookmark />}
                                    <span>{isPressed ? 'Saved' : 'Save'}</span>
                                </>
                            );
                        }}
                    </ToggleButton.Indicator>
                </ToggleButton.Root>
            </div>
        </div>
    );
}
```

## Usage

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';
```

```tsx
<ToggleButton.Root>
    <ToggleButton.Indicator>Toggle</ToggleButton.Indicator>
</ToggleButton.Root>
```

## Examples

### Basic

A button that switches between active and inactive states.

```tsx
'use client';
import { Bookmark } from '@primeicons/react/bookmark';
import { ToggleButton } from '@primereact/ui/togglebutton';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    <Bookmark />
                </ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
```

### Render Props

This is called the render prop pattern. It allows using a function to customize what the component displays based on its internal state.

```tsx
'use client';
import { Lock } from '@primeicons/react/lock';
import { ToggleButton, type ToggleButtonIndicatorInstance } from '@primereact/ui/togglebutton';

export default function RenderPropsDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? 'On' : 'Off')}
                </ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <Lock></Lock>Locked
                            </>
                        ) : (
                            <>
                                <i className="pi pi-lock-open" />
                                Unlocked
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <i className="pi pi-volume-up" />
                                Mute
                            </>
                        ) : (
                            <>
                                <i className="pi pi-volume-off" />
                                Unmute
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
```

### Controlled

Use `pressed` and `onPressedChange` properties to control the state of the ToggleButton.

```tsx
'use client';
import { ToggleButton, type ToggleButtonRootChangeEvent } from '@primereact/ui/togglebutton';
import * as React from 'react';

export default function ControlledDemo() {
    const [pressedState, setPressedState] = React.useState(false);

    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root pressed={pressedState} onPressedChange={(e: ToggleButtonRootChangeEvent) => setPressedState(e.pressed)}>
                <ToggleButton.Indicator>{pressedState ? 'Pressed' : 'Not Pressed'}</ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
```

### Size

`ToggleButton` provides small and large sizes as alternatives to the base by using the `size` property.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';

export default function SizesDemo() {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <ToggleButton.Root size="small" className="min-w-16">
                <ToggleButton.Indicator>Small</ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root size="normal" className="min-w-20">
                <ToggleButton.Indicator>Normal</ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root size="large" className="min-w-28">
                <ToggleButton.Indicator>Large</ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { ToggleButton, type ToggleButtonRootChangeEvent } from '@primereact/ui/togglebutton';
import * as React from 'react';

export default function InvalidDemo() {
    const [pressedState, setPressedState] = React.useState(false);

    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root
                pressed={pressedState}
                onPressedChange={(e: ToggleButtonRootChangeEvent) => setPressedState(e.pressed)}
                invalid={!pressedState}
            >
                <ToggleButton.Indicator>Invalid</ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { ToggleButton } from '@primereact/ui/togglebutton';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root disabled>
                <ToggleButton.Indicator>Disabled</ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/togglebutton/features.md#api) for `ToggleButtonRoot`, `ToggleButtonIndicator`, `ToggleButtonGroup` component documentation.

### Hooks

See [Headless API](../../headless/togglebutton/features.md#api) for `useToggleButton` and `useToggleButtonGroup` hook documentation.

## Accessibility

See [ToggleButton Primitive](../../primitive/togglebutton/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
