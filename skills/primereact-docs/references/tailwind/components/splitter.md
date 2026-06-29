# Splitter

Splitter is utilized to separate and resize panels.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function Preview() {
    return (
        <Splitter className="h-60 max-w-lg mx-auto">
            <SplitterPanel className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
            </SplitterPanel>
            <SplitterGutter>
                <SplitterHandle />
            </SplitterGutter>
            <SplitterPanel className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
            </SplitterPanel>
        </Splitter>
    );
}

```

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/splitter.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Splitter, SplitterPanel, SplitterGutter, SplitterHandle } from '@/components/ui/splitter';
```

```tsx
<Splitter>
    <SplitterPanel />
    <SplitterGutter>
        <SplitterHandle />
    </SplitterGutter>
    <SplitterPanel />
</Splitter>
```

## Examples

### Basic

Divides a layout into resizable panels with a draggable divider.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function BasicDemo() {
    return (
        <Splitter className="h-60 max-w-lg mx-auto">
            <SplitterPanel className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
            </SplitterPanel>
            <SplitterGutter>
                <SplitterHandle />
            </SplitterGutter>
            <SplitterPanel className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
            </SplitterPanel>
        </Splitter>
    );
}

```

### Vertical

Splitters can be combined to create advanced layouts.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function VerticalDemo() {
    return (
        <Splitter orientation="vertical" className="h-60! max-w-lg mx-auto">
            <SplitterPanel className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
            </SplitterPanel>
            <SplitterGutter>
                <SplitterHandle />
            </SplitterGutter>
            <SplitterPanel className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
            </SplitterPanel>
        </Splitter>
    );
}

```

### Size

Initial dimension of a panel is percentage based and defined using the `size` property. In addition, `minSize` is provided to set a minimum value during a resize.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function SizeDemo() {
    return (
        <Splitter defaultSizes={[25, 75]} className="h-60! max-w-lg mx-auto">
            <SplitterPanel minSize={10} className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
            </SplitterPanel>
            <SplitterGutter>
                <SplitterHandle />
            </SplitterGutter>
            <SplitterPanel className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
            </SplitterPanel>
        </Splitter>
    );
}

```

### Min Max Size

Splitter panels can be resized within the limits defined by `minSize` and `maxSize` properties.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function MinMaxDemo() {
    return (
        <div className="flex flex-col items-center gap-8 max-w-lg mx-auto">
            <Splitter className="w-full h-32">
                <SplitterPanel minSize={20} maxSize={50} className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                </SplitterPanel>
            </Splitter>

            <Splitter className="w-full h-32">
                <SplitterPanel minSize={10} className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel minSize={10} className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel minSize={10} className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">3</span>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

```

### Collapsible

Splitter panels can be collapsed to a smaller size defined by the `collapsedSize` property if smaller than or equal to the `minSize` property.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function CollapsibleDemo() {
    return (
        <div className="flex flex-col items-center gap-8 max-w-lg mx-auto">
            <Splitter className="w-full h-32">
                <SplitterPanel minSize={10} collapsible className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                </SplitterPanel>
            </Splitter>

            <Splitter className="w-full h-32">
                <SplitterPanel minSize={20} collapsedSize={5} collapsible className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel minSize={10} className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

```

### Nested

Splitters can be combined to create advanced layouts.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function NestedDemo() {
    return (
        <Splitter defaultSizes={[25, 75]} className="h-78 w-full max-w-lg mx-auto">
            <SplitterPanel minSize={10} className="flex items-center justify-center">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
            </SplitterPanel>
            <SplitterGutter>
                <SplitterHandle />
            </SplitterGutter>
            <SplitterPanel>
                <Splitter defaultSizes={[50, 50]} orientation="vertical">
                    <SplitterPanel className="flex items-center justify-center">
                        <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                    </SplitterPanel>
                    <SplitterGutter>
                        <SplitterHandle />
                    </SplitterGutter>
                    <SplitterPanel>
                        <Splitter defaultSizes={[20, 80]}>
                            <SplitterPanel className="flex items-center justify-center">
                                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">3</span>
                            </SplitterPanel>
                            <SplitterGutter>
                                <SplitterHandle />
                            </SplitterGutter>
                            <SplitterPanel className="flex items-center justify-center">
                                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">4</span>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    );
}

```

### Resize Events

Splitters can trigger events during the resize process, allowing you to handle custom logic when a panel is being resized.

```tsx
'use client';
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';
import type {
    SplitterRootCollapseEvent,
    SplitterRootResizeEndEvent,
    SplitterRootResizeEvent,
    SplitterRootResizeStartEvent
} from 'primereact/splitter';
import * as React from 'react';

const formatSizes = (sizes: number[]) => sizes.map((s) => s.toFixed(1) + '%').join(', ');

export default function ResizeEventsDemo() {
    const [resizeStart, setResizeStart] = React.useState<number[]>([50, 50]);
    const [resize, setResize] = React.useState<number[]>([50, 50]);
    const [resizeEnd, setResizeEnd] = React.useState<number[]>([50, 50]);
    const [collapseEvent, setCollapseEvent] = React.useState<SplitterRootCollapseEvent | null>(null);

    return (
        <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">
            <div className="flex flex-col items-center gap-1 w-full text-sm font-mono text-surface-500">
                <div>onResizeStart: [{formatSizes(resizeStart)}]</div>
                <div>onResize: [{formatSizes(resize)}]</div>
                <div>onResizeEnd: [{formatSizes(resizeEnd)}]</div>
                <div>
                    onCollapse:{' '}
                    {collapseEvent
                        ? `Panel ${collapseEvent.index} ${collapseEvent.collapsed ? 'collapsed' : 'expanded'} [${formatSizes(collapseEvent.sizes)}]`
                        : '–'}
                </div>
            </div>

            <Splitter
                className="w-full h-60"
                onResizeStart={(e: SplitterRootResizeStartEvent) => setResizeStart(e.sizes)}
                onResize={(e: SplitterRootResizeEvent) => setResize(e.sizes)}
                onResizeEnd={(e: SplitterRootResizeEndEvent) => setResizeEnd(e.sizes)}
                onCollapse={(e: SplitterRootCollapseEvent) => setCollapseEvent(e)}
            >
                <SplitterPanel minSize={15} collapsible className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel minSize={25} collapsible className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

```

### Stateful

Panel sizes can be persisted using the `onResizeEnd` callback. This example saves sizes to `localStorage` so they are restored on page reload.

```tsx
'use client';
import { useLocalStorage } from '@primereact/hooks/use-local-storage';
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function StatefulDemo() {
    const [sizes, setSizes] = useLocalStorage({ key: 'splitter-demo-sizes', initialValue: [30, 70] });

    return (
        <Splitter className="h-60! max-w-lg mx-auto" sizes={sizes} onResizeEnd={(e) => setSizes(e.sizes)}>
            <SplitterPanel minSize={10} className="flex items-center justify-center gap-2">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
                <span className="text-sm text-muted-color tabular-nums">({sizes[0].toFixed(1)}%)</span>
            </SplitterPanel>
            <SplitterGutter>
                <SplitterHandle />
            </SplitterGutter>
            <SplitterPanel minSize={10} className="flex items-center justify-center gap-2">
                <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                <span className="text-sm text-muted-color tabular-nums">({sizes[1].toFixed(1)}%)</span>
            </SplitterPanel>
        </Splitter>
    );
}

```

### Disabled

Splitter panels can be disabled to prevent resizing. This can be done for all panels by setting the `disabled` property on the root, or for specific gutters by setting the `disabled` property on the gutter.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function MinMaxDemo() {
    return (
        <div className="flex flex-col items-center gap-8 max-w-lg mx-auto">
            <Splitter className="w-full h-32" disabled>
                <SplitterPanel className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">3</span>
                </SplitterPanel>
            </Splitter>

            <Splitter className="w-full h-32">
                <SplitterPanel className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">1</span>
                </SplitterPanel>
                <SplitterGutter disabled>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">2</span>
                </SplitterPanel>
                <SplitterGutter>
                    <SplitterHandle />
                </SplitterGutter>
                <SplitterPanel className="flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md font-mono font-bold bg-surface-100 dark:bg-surface-800 text-color">3</span>
                </SplitterPanel>
            </Splitter>
        </div>
    );
}

```

### Custom

Splitters can be customized with different styles.

```tsx
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';

export default function CustomDemo() {
    return (
        <Splitter className="h-60! max-w-lg mx-auto border-none gap-0.5 bg-transparent">
            <SplitterPanel className="flex items-center justify-center border border-blue-500 bg-blue-500/10 rounded-sm text-blue-500">
                Panel 1
            </SplitterPanel>
            <SplitterGutter className="w-1.5 rounded-xs">
                <SplitterHandle />
            </SplitterGutter>
            <SplitterPanel className="flex items-center justify-center border border-purple-500 bg-purple-500/10 rounded-sm text-purple-500">
                Panel 2
            </SplitterPanel>
        </Splitter>
    );
}

```

### Advanced

```tsx
'use client';
import { useLocalStorage } from '@primereact/hooks/use-local-storage';
import { Splitter, SplitterGutter, SplitterPanel, SplitterHandle } from '@/components/ui/splitter';
import * as React from 'react';

export default function AdvancedDemo() {
    const [selected, setSelected] = React.useState(0);
    const [sizes, setSizes] = useLocalStorage({ key: 'splitter-advanced-demo', initialValue: [35, 65] });
    const [isCompact, setIsCompact] = React.useState(false);

    React.useLayoutEffect(() => {
        setIsCompact(sizes[0] < 28);
    }, [sizes]);

    return (
        <Splitter
            className="h-[600px]! overflow-hidden"
            sizes={sizes}
            onResize={(e: { sizes: number[] }) => {
                setIsCompact(e.sizes[0] < 28);
            }}
            onResizeEnd={(e: { sizes: number[] }) => {
                setSizes(e.sizes);
            }}
        >
            <SplitterPanel minSize={20} collapsible>
                <ul className="list-none m-0 p-0 w-full">
                    {mails.map((mail, i) => (
                        <li
                            key={i}
                            className={`px-4 py-3 cursor-pointer border-b border-surface-100 dark:border-surface-800 transition-colors ${selected === i ? 'bg-primary-50 dark:bg-primary-950' : 'hover:bg-surface-50 dark:hover:bg-surface-800'}`}
                            onClick={() => setSelected(i)}
                        >
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-semibold text-surface-900 dark:text-surface-0 text-sm truncate">{mail.name}</span>
                                <span className="text-surface-400 text-xs shrink-0">{mail.time}</span>
                            </div>
                            {!isCompact && (
                                <>
                                    <div className="text-surface-700 dark:text-surface-200 text-sm font-medium mt-1 mb-1">{mail.title}</div>
                                    <div className="text-surface-400 dark:text-surface-500 text-xs line-clamp-1">{mail.description}</div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </SplitterPanel>
            <SplitterGutter className="w-0.25 relative">
                <SplitterHandle className="absolute inset-y-0 h-full rounded-none w-2 left-1/2 -translate-x-1/2 bg-surface-200 dark:bg-surface-700 hover:opacity-100 data-resizing:opacity-100 opacity-0 transition-opacity delay-100" />
            </SplitterGutter>
            <SplitterPanel minSize={30}>
                <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-0 m-0">{mails[selected].title}</h2>
                        <span className="text-surface-400 text-xs shrink-0 pt-1">{mails[selected].time}</span>
                    </div>
                    <span className="text-surface-400 text-sm">{mails[selected].name}</span>
                    <p className="text-surface-600 dark:text-surface-300 text-sm leading-relaxed mt-4 m-0">{mails[selected].description}</p>
                </div>
            </SplitterPanel>
        </Splitter>
    );
}

const mails = [
    {
        name: 'Amy Elsner',
        title: 'Q1 Marketing Report',
        description:
            "Hi team, I've attached the Q1 marketing report. Please review the campaign metrics and share your feedback before our meeting on Friday.",
        time: '10:24 AM'
    },
    {
        name: 'Bernardo Dominic',
        title: 'Design System Update',
        description: "The new design tokens are ready for review. I've updated the color palette and typography scale based on our last discussion.",
        time: '9:15 AM'
    },
    {
        name: 'Ioni Bowcher',
        title: 'Sprint Retrospective Notes',
        description:
            "Here are the notes from yesterday's retro. Key takeaways: improve code review turnaround and schedule more pair programming sessions.",
        time: 'Yesterday'
    },
    {
        name: 'Stephen Shaw',
        title: 'Server Migration Plan',
        description:
            'The migration to the new cloud infrastructure is scheduled for next weekend. Please ensure all services have proper health checks configured.',
        time: 'Yesterday'
    },
    {
        name: 'Elwin Sharvill',
        title: 'New Component Library Release',
        description:
            'Version 4.0 of the component library is now available. Major changes include accessibility improvements and new theming capabilities.',
        time: 'Monday'
    }
];

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/splitter.md#api) for `SplitterRoot`, `SplitterPanel`, `SplitterGutter`, `SplitterHandle` component documentation.

### Hooks

See [Headless API](../../headless/components/splitter.md#api) for `useSplitter` hook documentation.

### Accessibility

See [Splitter Primitive](../../primitive/components/splitter.md#accessibility) for WAI-ARIA compliance details and keyboard support.
