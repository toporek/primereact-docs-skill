# Compare

Compare two items side by side with a slider.

```tsx
import { Compare } from '@primereact/ui/compare';
import { Code } from '@primeicons/react/code';

export default function Preview() {
    return (
        <Compare.Root className="aspect-video max-w-lg mx-auto">
            <Compare.Item position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </Compare.Item>
            <Compare.Item position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </Compare.Item>
            <Compare.Handle>
                <Compare.Indicator className="group flex items-center justify-center">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </Compare.Indicator>
            </Compare.Handle>
        </Compare.Root>
    );
}

```

## Usage

```tsx
import { Compare } from '@primereact/ui/compare';
```

```tsx
<Compare.Root>
    <Compare.Item position="before"></Compare.Item>
    <Compare.Item position="after"></Compare.Item>
    <Compare.Handle>
        <Compare.Indicator />
    </Compare.Handle>
</Compare.Root>
```

## Examples

### Custom Handle

The handle can be styled freely, give the indicator a rounded background, custom icon, and shadow for a more prominent look.

```tsx
import { Compare } from '@primereact/ui/compare';

export default function HandleDemo() {
    return (
        <Compare.Root className="aspect-video max-w-lg mx-auto">
            <Compare.Item position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </Compare.Item>
            <Compare.Item position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </Compare.Item>
            <Compare.Handle className="bg-transparent!">
                <Compare.Indicator className="size-5 rounded-full! bg-white/50 transition-transform duration-200 hover:transform-[translate(-50%,-50%)_scale(1.5)]" />
            </Compare.Handle>
        </Compare.Root>
    );
}

```

### Hover

```tsx
import { Compare } from '@primereact/ui/compare';
import { Code } from '@primeicons/react/code';

export default function HoverDemo() {
    return (
        <Compare.Root className="aspect-video max-w-lg mx-auto" slideOnHover>
            <Compare.Item position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </Compare.Item>
            <Compare.Item position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </Compare.Item>
            <Compare.Handle>
                <Compare.Indicator className="group flex items-center justify-center">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </Compare.Indicator>
            </Compare.Handle>
        </Compare.Root>
    );
}

```

### Vertical

```tsx
import { Compare } from '@primereact/ui/compare';
import { Code } from '@primeicons/react/code';

export default function VerticalDemo() {
    return (
        <Compare.Root className="aspect-video max-w-lg mx-auto" orientation="vertical">
            <Compare.Item position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </Compare.Item>
            <Compare.Item position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </Compare.Item>
            <Compare.Handle>
                <Compare.Indicator className="group flex items-center justify-center">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </Compare.Indicator>
            </Compare.Handle>
        </Compare.Root>
    );
}

```

### With Chart

```tsx
'use client';
import { Compare, type CompareRootValueChangeEvent } from '@primereact/ui/compare';
import * as React from 'react';

export default function ChartDemo() {
    const [value, setValue] = React.useState(50);

    return (
        <Compare.Root
            className="aspect-video max-w-lg mx-auto"
            slideOnHover
            value={value}
            onValueChange={(e: CompareRootValueChangeEvent) => setValue(e.value as number)}
            onPointerLeave={() => setValue(100)}
        >
            <Compare.Item position="before">
                <svg className="absolute w-full h-full" viewBox="0 0 644 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1381_2302)">
                        <path
                            d="M0.5 118.499C0.5 118.499 82 102.999 113.5 89.4989C145 75.9989 188.444 87.7869 235 77.4989C272.684 69.1719 293.654 62.4939 329 46.9989C409.332 11.7849 479.5 86.5 510.5 78C541.5 69.5 635.951 0.848863 644 1.49886"
                            stroke="var(--p-primary-color)"
                            strokeWidth="2"
                        />
                        <path
                            d="M113.5 89.5006C82 103.001 0.5 118.501 0.5 118.501V188.501H644V1.50065C635.951 0.850647 541.5 69.5 510.5 78C479.5 86.5 409.332 11.7866 329 47.0006C293.654 62.4956 272.684 69.1736 235 77.5006C188.444 87.7886 145 76.0006 113.5 89.5006Z"
                            fill="url(#paint0_linear_540_31)"
                        />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_540_31" x1="322.25" x2="322.25" y1="1.477" y2="188.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--p-primary-color)" stopOpacity="0.4"></stop>
                            <stop offset="1" stopColor="var(--p-primary-color)" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </Compare.Item>
        </Compare.Root>
    );
}

```

### Template

```tsx
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Compare } from '@primereact/ui/compare';
import { ProgressBar } from '@primereact/ui/progressbar';
import { Tag } from '@primereact/ui/tag';
import { Code } from '@primeicons/react/code';

export default function TemplateDemo() {
    return (
        <Compare.Root className="relative w-full max-w-md mx-auto h-[320px]">
            <Compare.Item position="before">
                <ThemePanel theme="purple" />
            </Compare.Item>
            <Compare.Item position="after">
                <ThemePanel theme="primary" />
            </Compare.Item>
            <Compare.Handle>
                <Compare.Indicator className="group flex items-center justify-center border border-surface">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </Compare.Indicator>
            </Compare.Handle>
        </Compare.Root>
    );
}

function ThemePanel({ theme = 'purple' }: { theme: 'purple' | 'primary' }) {
    const t = {
        purple: {
            bg: 'bg-purple-100 dark:bg-purple-900/50',
            card: 'bg-white dark:bg-purple-900 border-purple-100 dark:border-purple-800',
            text: 'text-purple-950 dark:text-purple-50',
            muted: 'text-purple-600 dark:text-purple-400',
            tag: 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200',
            track: 'bg-purple-100 dark:bg-purple-800',
            indicator: 'bg-purple-500',
            avatar: 'filter hue-rotate-[260deg] saturate-150',
            severity: 'help' as const
        },
        primary: {
            bg: 'bg-primary-100 dark:bg-primary-900/50',
            card: 'bg-white dark:bg-primary-900 border-primary-100 dark:border-primary-800',
            text: 'text-primary-950 dark:text-primary-50',
            muted: 'text-primary-600 dark:text-primary-400',
            tag: 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200',
            track: 'bg-primary-100 dark:bg-primary-800',
            indicator: 'bg-primary',
            severity: undefined
        }
    }[theme];

    return (
        <div className={`size-full ${t.bg} p-6 flex items-center justify-center`}>
            <div className={`w-full max-w-xs rounded-xl border ${t.card} p-5 space-y-4`}>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar.Root shape="circle" className="w-10 h-10">
                            <Avatar.Image className={t.avatar} src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        </Avatar.Root>
                        <div>
                            <div className={`font-medium ${t.text}`}>Amy Elsner</div>
                            <div className={`text-sm ${t.muted}`}>Developer</div>
                        </div>
                    </div>
                    <Tag className={t.tag}>Pro</Tag>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className={t.muted}>Storage</span>
                        <span className={`${t.text}`}>7.2 GB / 10 GB</span>
                    </div>
                    <ProgressBar.Root value={72}>
                        <ProgressBar.Track className={`h-2 ${t.track}`}>
                            <ProgressBar.Indicator className={t.indicator} />
                        </ProgressBar.Track>
                    </ProgressBar.Root>
                </div>

                <div className="flex gap-2 pt-2">
                    <Button severity={t.severity} className="flex-1">
                        Upgrade
                    </Button>
                    <Button severity={t.severity} variant="outlined">
                        Settings
                    </Button>
                </div>
            </div>
        </div>
    );
}

```

## Related

### Sub-Components

See [Compare Primitive](../../primitive/components/compare.md#api) for the sub-component API reference.

### Hooks

See [useCompare](../../headless/components/compare.md#api) for the headless hook API reference.

### Accessibility

See [Compare Primitive](../../primitive/components/compare.md#accessibility) for WAI-ARIA compliance details and keyboard support.
