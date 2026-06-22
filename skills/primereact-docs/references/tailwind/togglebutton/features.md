# ToggleButton

ToggleButton component is used to create a button that can be toggled on or off.

```tsx
'use client';
import { Bookmark, BookmarkFill, Heart, HeartFill } from '@primeicons/react';
import type { ToggleButtonIndicatorInstance } from 'primereact/togglebutton';
import { ToggleButton } from '@/components/ui/togglebutton';

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
                <ToggleButton defaultPressed>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) => {
                        const isPressed = togglebutton?.state.pressed;

                        return (
                            <>
                                {isPressed ? <HeartFill /> : <Heart />}
                                <span>{isPressed ? 'Liked' : 'Like'}</span>
                            </>
                        );
                    }}
                </ToggleButton>
                <ToggleButton>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) => {
                        const isPressed = togglebutton?.state.pressed;

                        return (
                            <>
                                {isPressed ? <BookmarkFill /> : <Bookmark />}
                                <span>{isPressed ? 'Saved' : 'Save'}</span>
                            </>
                        );
                    }}
                </ToggleButton>
            </div>
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/ui/togglebutton
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';
```

```tsx
<ToggleButton>Toggle</ToggleButton>
```

## Examples

### Basic

```tsx
'use client';
import { Heart, HeartFill } from '@primeicons/react';
import type { ToggleButtonIndicatorInstance } from 'primereact/togglebutton';
import { ToggleButton } from '@/components/ui/togglebutton';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton>
                {({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? <HeartFill></HeartFill> : <Heart></Heart>)}
            </ToggleButton>
        </div>
    );
}
```

### Render Props

This is called the render prop pattern. It allows using a function to customize what the component displays based on its internal state.

```tsx
'use client';
import { Lock } from '@primeicons/react';
import type { ToggleButtonIndicatorInstance } from 'primereact/togglebutton';
import { ToggleButton } from '@/components/ui/togglebutton';

export default function RenderPropsDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <ToggleButton>{({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? 'On' : 'Off')}</ToggleButton>
            <ToggleButton>
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
            </ToggleButton>
            <ToggleButton>
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
            </ToggleButton>
        </div>
    );
}
```

### Controlled

Use `pressed` and `onPressedChange` properties to control the state of the ToggleButton.

```tsx
'use client';
import type { ToggleButtonRootChangeEvent } from 'primereact/togglebutton';
import { ToggleButton } from '@/components/ui/togglebutton';
import * as React from 'react';

export default function ControlledDemo() {
    const [pressedState, setPressedState] = React.useState(false);

    return (
        <div className="flex items-center justify-center">
            <ToggleButton pressed={pressedState} onPressedChange={(e: ToggleButtonRootChangeEvent) => setPressedState(e.pressed)}>
                {pressedState ? 'Pressed' : 'Not Pressed'}
            </ToggleButton>
        </div>
    );
}
```

### Size

`ToggleButton` provides small and large sizes as alternatives to the base by using the `size` property.

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';

export default function SizesDemo() {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <ToggleButton size="small" className="min-w-16">
                Small
            </ToggleButton>
            <ToggleButton size="normal" className="min-w-20">
                Normal
            </ToggleButton>
            <ToggleButton size="large" className="min-w-28">
                Large
            </ToggleButton>
        </div>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import type { ToggleButtonRootChangeEvent } from 'primereact/togglebutton';
import { ToggleButton } from '@/components/ui/togglebutton';
import * as React from 'react';

export default function InvalidDemo() {
    const [pressedState, setPressedState] = React.useState(false);

    return (
        <div className="flex items-center justify-center">
            <ToggleButton
                pressed={pressedState}
                onPressedChange={(e: ToggleButtonRootChangeEvent) => setPressedState(e.pressed)}
                invalid={!pressedState}
            >
                Invalid
            </ToggleButton>
        </div>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
import { ToggleButton } from '@/components/ui/togglebutton';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton disabled>Disabled</ToggleButton>
        </div>
    );
}
```
