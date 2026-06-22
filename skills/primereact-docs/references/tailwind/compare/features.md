# Compare

Compare is a component to compare two images with a slider.

```tsx
import { Code } from '@primeicons/react';
import { Compare, CompareHandle, CompareIndicator, CompareItem } from '@/components/ui/compare';

export default function Preview() {
    return (
        <Compare className="aspect-video max-w-lg mx-auto">
            <CompareItem position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </CompareItem>
            <CompareItem position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </CompareItem>
            <CompareHandle>
                <CompareIndicator className="group flex items-center justify-center">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </CompareIndicator>
            </CompareHandle>
        </Compare>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/compare
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Compare, CompareHandle, CompareIndicator, CompareItem } from '@/components/ui/compare';
```

```tsx
<Compare>
    <CompareItem position="before">
        <img src="/before.jpg" />
    </CompareItem>
    <CompareItem position="after">
        <img src="/after.jpg" />
    </CompareItem>
    <CompareHandle>
        <CompareIndicator />
    </CompareHandle>
</Compare>
```

## Examples

### Basic

Compare two items side by side with a slider.

```tsx
import { Code } from '@primeicons/react';
import { Compare, CompareHandle, CompareIndicator, CompareItem } from '@/components/ui/compare';

export default function BasicDemo() {
    return (
        <Compare className="aspect-video max-w-lg mx-auto">
            <CompareItem position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </CompareItem>
            <CompareItem position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </CompareItem>
            <CompareHandle>
                <CompareIndicator className="group flex items-center justify-center">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </CompareIndicator>
            </CompareHandle>
        </Compare>
    );
}
```

### Hover

```tsx
import { Code } from '@primeicons/react';
import { Compare, CompareHandle, CompareIndicator, CompareItem } from '@/components/ui/compare';

export default function HoverDemo() {
    return (
        <Compare className="aspect-video max-w-lg mx-auto" slideOnHover>
            <CompareItem position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </CompareItem>
            <CompareItem position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </CompareItem>
            <CompareHandle>
                <CompareIndicator className="group flex items-center justify-center">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </CompareIndicator>
            </CompareHandle>
        </Compare>
    );
}
```

### Vertical

```tsx
import { Code } from '@primeicons/react';
import { Compare, CompareHandle, CompareIndicator, CompareItem } from '@/components/ui/compare';

export default function VerticalDemo() {
    return (
        <Compare className="aspect-video max-w-lg mx-auto" orientation="vertical">
            <CompareItem position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </CompareItem>
            <CompareItem position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </CompareItem>
            <CompareHandle>
                <CompareIndicator className="group flex items-center justify-center">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </CompareIndicator>
            </CompareHandle>
        </Compare>
    );
}
```

### With Chart

```tsx
'use client';
import { Compare, CompareItem } from '@/components/ui/compare';
import type { CompareRootValueChangeEvent } from 'primereact/compare';
import * as React from 'react';

export default function ChartDemo() {
    const [value, setValue] = React.useState(50);

    return (
        <Compare
            className="aspect-video max-w-lg mx-auto"
            slideOnHover
            value={value}
            onValueChange={(e: CompareRootValueChangeEvent) => setValue(e.value)}
            onPointerLeave={() => setValue(100)}
        >
            <CompareItem position="before">
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
            </CompareItem>
        </Compare>
    );
}
```

### Template

```tsx
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Compare, CompareHandle, CompareIndicator, CompareItem } from '@/components/ui/compare';
import { ProgressBar } from '@/components/ui/progressbar';
import { Tag } from '@/components/ui/tag';
import { Code } from '@primeicons/react';

export default function TemplateDemo() {
    return (
        <Compare className="relative w-full max-w-md mx-auto h-[320px]">
            <CompareItem position="before">
                <ThemePanel theme="purple" />
            </CompareItem>
            <CompareItem position="after">
                <ThemePanel theme="primary" />
            </CompareItem>
            <CompareHandle>
                <CompareIndicator className="group flex items-center justify-center border border-surface">
                    <Code className="group-data-[orientation=vertical]:rotate-90" />
                </CompareIndicator>
            </CompareHandle>
        </Compare>
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
                        <Avatar shape="circle" className="w-10 h-10">
                            <AvatarImage className={t.avatar} src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                        </Avatar>
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
                    <ProgressBar value={72} />
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

## Accessibility

### Screen Reader

Compare component uses a hidden range input for keyboard accessibility. Use `ariaLabel` to provide a descriptive label.

### Keyboard Support

| Key           | Function                                          |
| ------------- | ------------------------------------------------- |
| `left arrow`  | Moves the comparison slider to the left.          |
| `right arrow` | Moves the comparison slider to the right.         |
| `home`        | Moves the comparison slider to the minimum value. |
| `end`         | Moves the comparison slider to the maximum value. |
