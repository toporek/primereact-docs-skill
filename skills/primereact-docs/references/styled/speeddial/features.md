# SpeedDial

SpeedDial is a floating action button with a popup menu displaying a set of actions.

```tsx
import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';
import { Button } from '@primereact/ui/button';

export default function Preview() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '240px' }}>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger as={Button} rounded iconOnly className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action, index) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label} index={index}>
                                    <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
```

## Usage

```tsx
import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
```

```tsx
<SpeedDial.Root>
    <SpeedDial.Trigger>
        <Plus />
    </SpeedDial.Trigger>
    <SpeedDial.List>
        <SpeedDial.Item>
            <SpeedDial.Action>
                <Pencil />
            </SpeedDial.Action>
        </SpeedDial.Item>
    </SpeedDial.List>
</SpeedDial.Root>
```

## Examples

### Basic

SpeedDial displays related actions from a single trigger button.

```tsx
import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';
import { Button } from '@primereact/ui/button';

export default function BasicDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '240px' }}>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger as={Button} rounded iconOnly className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action, index) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label} index={index}>
                                    <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
```

### Linear

When `type` is set to `linear` (default), items are displayed in a line based on the `direction` prop. The direction can be `up`, `down`, `left`, or `right`.

```tsx
import { SpeedDial, type SpeedDialRootProps } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';
import { Button } from '@primereact/ui/button';

const directions = [
    { direction: 'up', style: { position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 } },
    { direction: 'down', style: { position: 'absolute', left: 'calc(50% - 2rem)', top: 0 } },
    { direction: 'left', style: { position: 'absolute', top: 'calc(50% - 2rem)', right: 0 } },
    { direction: 'right', style: { position: 'absolute', top: 'calc(50% - 2rem)', left: 0 } }
];

export default function LinearDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '500px' }}>
                {directions.map((item, index) => (
                    <SpeedDial.Root
                        key={index}
                        direction={item.direction as SpeedDialRootProps['direction']}
                        style={item.style as React.CSSProperties}
                    >
                        <SpeedDial.Trigger as={Button} rounded iconOnly className="transition-transform duration-200 data-open:rotate-45">
                            <Plus />
                        </SpeedDial.Trigger>
                        <SpeedDial.List>
                            {items.map((action, index) => {
                                const Icon = action.icon;

                                return (
                                    <SpeedDial.Item key={action.label} index={index}>
                                        <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                            <Icon />
                                        </SpeedDial.Action>
                                    </SpeedDial.Item>
                                );
                            })}
                        </SpeedDial.List>
                    </SpeedDial.Root>
                ))}
            </div>
        </div>
    );
}
```

### Circle

Items can be displayed around the button when `type` is set to `circle`. Additional `radius` property defines the radius of the circle.

```tsx
import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';
import { Cog } from '@primeicons/react/cog';
import { User } from '@primeicons/react/user';
import { Heart } from '@primeicons/react/heart';
import { Button } from '@primereact/ui/button';

export default function CircleDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' },
        { icon: Cog, label: 'Settings' },
        { icon: User, label: 'User' },
        { icon: Heart, label: 'Favorite' }
    ];

    return (
        <div>
            <div className="flex items-center justify-center" style={{ position: 'relative', height: '500px' }}>
                <SpeedDial.Root type="circle" radius={80} style={{ position: 'absolute' }}>
                    <SpeedDial.Trigger as={Button} rounded iconOnly severity="warn" className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action, index) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label} index={index}>
                                    <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
```

### Semi Circle

When `type` is defined as `semi-circle`, items are displayed in a half-circle around the button.

```tsx
import { SpeedDial, type SpeedDialRootProps } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';
import { Button } from '@primereact/ui/button';

const directions = [
    { direction: 'up', style: { position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 } },
    { direction: 'down', style: { position: 'absolute', left: 'calc(50% - 2rem)', top: 0 } },
    { direction: 'left', style: { position: 'absolute', top: 'calc(50% - 2rem)', right: 0 } },
    { direction: 'right', style: { position: 'absolute', top: 'calc(50% - 2rem)', left: 0 } }
];

export default function SemiCircleDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '500px' }}>
                {directions.map((item) => (
                    <SpeedDial.Root
                        key={item.direction}
                        radius={80}
                        type="semi-circle"
                        direction={item.direction as SpeedDialRootProps['direction']}
                        style={item.style as React.CSSProperties}
                    >
                        <SpeedDial.Trigger
                            as={Button}
                            rounded
                            iconOnly
                            severity="success"
                            className="transition-transform duration-200 data-open:rotate-45"
                        >
                            <Plus />
                        </SpeedDial.Trigger>
                        <SpeedDial.List>
                            {items.map((action, index) => {
                                const Icon = action.icon;

                                return (
                                    <SpeedDial.Item key={action.label} index={index}>
                                        <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                            <Icon />
                                        </SpeedDial.Action>
                                    </SpeedDial.Item>
                                );
                            })}
                        </SpeedDial.List>
                    </SpeedDial.Root>
                ))}
            </div>
        </div>
    );
}
```

### Quarter Circle

Setting `type` as `quarter-circle` displays the items at one of four corners of a button based on the `direction`.

```tsx
import { SpeedDial, type SpeedDialRootProps } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';
import { Button } from '@primereact/ui/button';

const directions = [
    { direction: 'up-left', style: { position: 'absolute', right: 0, bottom: 0 } },
    { direction: 'up-right', style: { position: 'absolute', left: 0, bottom: 0 } },
    { direction: 'down-left', style: { position: 'absolute', right: 0, top: 0 } },
    { direction: 'down-right', style: { position: 'absolute', left: 0, top: 0 } }
];

export default function QuarterCircleDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '500px' }}>
                {directions.map((item) => (
                    <SpeedDial.Root
                        key={item.direction}
                        radius={120}
                        type="quarter-circle"
                        direction={item.direction as SpeedDialRootProps['direction']}
                        style={item.style as React.CSSProperties}
                    >
                        <SpeedDial.Trigger as={Button} rounded iconOnly className="transition-transform duration-200 data-open:rotate-45">
                            <Plus />
                        </SpeedDial.Trigger>
                        <SpeedDial.List>
                            {items.map((action, index) => {
                                const Icon = action.icon;

                                return (
                                    <SpeedDial.Item key={action.label} index={index}>
                                        <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                            <Icon />
                                        </SpeedDial.Action>
                                    </SpeedDial.Item>
                                );
                            })}
                        </SpeedDial.List>
                    </SpeedDial.Root>
                ))}
            </div>
        </div>
    );
}
```

### Transition Delay

The `transitionDelay` property specifies the delay in milliseconds between each action item's appearance animation.

```tsx
import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';
import { Button } from '@primereact/ui/button';

export default function TransitionDelayDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div className="flex justify-between" style={{ position: 'relative', height: '240px' }}>
                <SpeedDial.Root direction="up" transitionDelay={0} style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <SpeedDial.Trigger
                        as={Button}
                        rounded
                        iconOnly
                        severity="secondary"
                        className="transition-transform duration-200 data-open:rotate-45"
                    >
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action, index) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label} index={index}>
                                    <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>

                <SpeedDial.Root direction="up" transitionDelay={80} style={{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }}>
                    <SpeedDial.Trigger
                        as={Button}
                        rounded
                        iconOnly
                        severity="success"
                        className="transition-transform duration-200 data-open:rotate-45"
                    >
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action, index) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label} index={index}>
                                    <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>

                <SpeedDial.Root direction="up" transitionDelay={150} style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger as={Button} rounded iconOnly severity="info" className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action, index) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label} index={index}>
                                    <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
```

### Template

SpeedDial supports full customization of the button and action items using render props or custom components.

```tsx
'use client';
import { SpeedDialRootVisibleChangeEvent } from 'primereact/speeddial';
import { SpeedDial } from '@primereact/ui/speeddial';
import * as React from 'react';
import { Plus } from '@primeicons/react/plus';
import { Heart } from '@primeicons/react/heart';
import { ShareAlt } from '@primeicons/react/share-alt';
import { Print } from '@primeicons/react/print';
import { Save } from '@primeicons/react/save';
import { Copy } from '@primeicons/react/copy';
import { Button } from '@primereact/ui/button';

export default function TemplateDemo() {
    const [visible, setVisible] = React.useState(false);

    const items = [
        { icon: Heart, label: 'Like' },
        { icon: ShareAlt, label: 'Share' },
        { icon: Print, label: 'Print' },
        { icon: Save, label: 'Save' },
        { icon: Copy, label: 'Copy' }
    ];

    return (
        <div className="flex justify-center" style={{ position: 'relative', height: '450px' }}>
            <SpeedDial.Root
                direction="down"
                transitionDelay={50}
                visible={visible}
                onVisibleChange={(e: SpeedDialRootVisibleChangeEvent) => setVisible(e.value as boolean)}
                style={{ position: 'absolute', top: 0 }}
            >
                <SpeedDial.Trigger
                    as={Button}
                    rounded
                    iconOnly
                    severity="warn"
                    className="w-12 h-12 transition-transform duration-200 data-open:rotate-45"
                >
                    <Plus className="w-4! h-4!" />
                </SpeedDial.Trigger>
                <SpeedDial.List className="gap-4 mt-4">
                    {items.map((item, index) => (
                        <SpeedDial.Item key={index} index={index}>
                            <div
                                className="flex gap-3 cursor-pointer rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                onClick={() => setVisible(false)}
                            >
                                <span className="flex items-center justify-center w-24 px-6 py-2 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-500 dark:text-surface-400 font-medium">
                                    {item.label}
                                </span>
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 text-surface-500 dark:text-surface-400">
                                    {React.createElement(item.icon, { className: 'text-xl' })}
                                </span>
                            </div>
                        </SpeedDial.Item>
                    ))}
                </SpeedDial.List>
            </SpeedDial.Root>
        </div>
    );
}
```

### Tooltip

SpeedDial can be combined with Tooltip component to display labels for action items.

```tsx
import { ExternalLink } from '@primeicons/react/external-link';
import { Pencil } from '@primeicons/react/pencil';
import { Plus } from '@primeicons/react/plus';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { Button } from '@primereact/ui/button';
import { SpeedDial } from '@primereact/ui/speeddial';
import { Tooltip } from '@primereact/ui/tooltip';

export default function TooltipDemo() {
    const items = [
        { icon: Pencil, label: 'Add' },
        { icon: Refresh, label: 'Update' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '350px' }}>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger as={Button} rounded iconOnly severity="help" className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        <Tooltip.Manager>
                            {items.map((action, index) => {
                                const Icon = action.icon;

                                return (
                                    <SpeedDial.Item key={action.label} index={index}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger as="div">
                                                <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                                    <Icon />
                                                </SpeedDial.Action>
                                            </Tooltip.Trigger>
                                            <Tooltip.Portal>
                                                <Tooltip.Positioner side="left" sideOffset={8}>
                                                    <Tooltip.Popup>
                                                        <p>{action.label}</p>
                                                        <Tooltip.Arrow />
                                                    </Tooltip.Popup>
                                                </Tooltip.Positioner>
                                            </Tooltip.Portal>
                                        </Tooltip.Root>
                                    </SpeedDial.Item>
                                );
                            })}
                        </Tooltip.Manager>
                    </SpeedDial.List>
                </SpeedDial.Root>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <SpeedDial.Trigger
                        as={Button}
                        rounded
                        iconOnly
                        severity="danger"
                        className="transition-transform duration-200 data-open:rotate-45"
                    >
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        <Tooltip.Manager>
                            {items.map((action, index) => {
                                const Icon = action.icon;

                                return (
                                    <SpeedDial.Item key={action.label} index={index}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger as="div">
                                                <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                                    <Icon />
                                                </SpeedDial.Action>
                                            </Tooltip.Trigger>
                                            <Tooltip.Portal>
                                                <Tooltip.Positioner side="right" sideOffset={8}>
                                                    <Tooltip.Popup>
                                                        <p>{action.label}</p>
                                                        <Tooltip.Arrow />
                                                    </Tooltip.Popup>
                                                </Tooltip.Positioner>
                                            </Tooltip.Portal>
                                        </Tooltip.Root>
                                    </SpeedDial.Item>
                                );
                            })}
                        </Tooltip.Manager>
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
```

### Mask

SpeedDial can be combined with Motion component to display a mask overlay when opened.

```tsx
'use client';
import { Motion } from '@primereact/core/motion';
import { SpeedDialRootVisibleChangeEvent } from 'primereact/speeddial';
import { SpeedDial } from '@primereact/ui/speeddial';
import * as React from 'react';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';
import { Button } from '@primereact/ui/button';

export default function MaskDemo() {
    const [visible, setVisible] = React.useState(false);

    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <>
            <div style={{ position: 'relative', height: '360px' }}>
                <Motion
                    visible={visible}
                    name="p-overlay-mask"
                    className="absolute inset-0 bg-black/50 rounded-md"
                    onClick={() => setVisible(false)}
                />
                <SpeedDial.Root
                    direction="up"
                    visible={visible}
                    onVisibleChange={(e: SpeedDialRootVisibleChangeEvent) => setVisible(e.value as boolean)}
                    style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}
                >
                    <SpeedDial.Trigger as={Button} rounded iconOnly className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action, index) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label} index={index}>
                                    <SpeedDial.Action as={Button} rounded iconOnly size="small" severity="secondary">
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/speeddial/features.md#api) for `SpeedDialRoot`, `SpeedDialTrigger`, `SpeedDialList`, `SpeedDialItem`, `SpeedDialAction` component documentation.

### Hooks

See [Headless API](../../headless/speeddial/features.md#api) for `useSpeedDial` hook documentation.

## Accessibility

See [SpeedDial Primitive](../../primitive/speeddial/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
