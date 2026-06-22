# Skeleton

Skeleton is a placeholder to display instead of the actual content.

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function Preview() {
    return (
        <div className="flex gap-4 max-w-xs mx-auto">
            <Skeleton shape="circle" size="2.5rem" />
            <div className="flex-1 flex flex-col gap-1.5 py-0.5">
                <Skeleton width="100%" borderRadius="4px" className="h-auto! flex-1" />
                <Skeleton width="90%" borderRadius="4px" className="h-auto! flex-1" />
            </div>
        </div>
    );
}
```

## Installation

   Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/ui/skeleton
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { Skeleton } from '@/components/ui/skeleton';
```

```tsx
<Skeleton width="4rem" height="2rem" />
```

## Examples

### Basic

Placeholder shapes that mimic content layout during loading.

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function BasicDemo() {
    return (
        <div className="flex gap-4 max-w-xs mx-auto">
            <Skeleton shape="circle" size="2.5rem" />
            <div className="flex-1 flex flex-col gap-1.5 py-0.5">
                <Skeleton width="100%" borderRadius="4px" className="h-auto! flex-1" />
                <Skeleton width="90%" borderRadius="4px" className="h-auto! flex-1" />
            </div>
        </div>
    );
}
```

### Card

Sample Card implementation using different `Skeleton` components and Tailwind CSS utilities.

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function ShapesDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-sm w-full space-y-4">
                <div className="flex items-start gap-4">
                    <Skeleton shape="circle" size="3.5rem" />
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <Skeleton width="40%" height="1.5rem" />
                        </div>
                        <div className="space-y-1.5 mt-3">
                            <Skeleton width="100%" borderRadius="4px" />
                            <Skeleton width="90%" borderRadius="4px" />
                        </div>
                        <Skeleton className="mt-4 aspect-video w-full h-auto!" />
                        <div className="flex items-center gap-4 mt-4">
                            <Skeleton width="4rem" height="1.75rem" />
                            <Skeleton width="4rem" height="1.75rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### Shapes

Various shapes and sizes can be created using styling properties like `shape`, `width`, `height`, `size`, `borderRadius` and `className`.

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function ShapesDemo() {
    return (
        <div>
            <div className="flex flex-col items-start gap-8 max-w-sm">
                <div className="w-full">
                    <h5>Circle</h5>
                    <div className="flex items-end gap-4">
                        <Skeleton shape="circle" size="5rem" />
                        <Skeleton shape="circle" size="4rem" />
                        <Skeleton shape="circle" size="3rem" />
                        <Skeleton shape="circle" size="2rem" />
                    </div>
                </div>
                <div className="w-full">
                    <h5>Square</h5>
                    <div className="flex items-end gap-4">
                        <Skeleton size="5rem" />
                        <Skeleton size="4rem" />
                        <Skeleton size="3rem" />
                        <Skeleton size="2rem" />
                    </div>
                </div>
                <div className="w-full">
                    <h5>Rectangle</h5>
                    <div className="flex flex-col gap-2 w-full">
                        <Skeleton />
                        <Skeleton width="12rem" />
                        <Skeleton width="7rem" />
                        <Skeleton height="4rem" />
                        <Skeleton width="12rem" height="4rem" />
                    </div>
                </div>
                <div className="w-full">
                    <h5>Rounded</h5>
                    <div className="flex flex-col gap-2 w-full">
                        <Skeleton borderRadius="16px" />
                        <Skeleton width="12rem" borderRadius="16px" />
                        <Skeleton width="7rem" borderRadius="16px" />
                        <Skeleton height="4rem" borderRadius="16px" />
                        <Skeleton width="12rem" height="4rem" borderRadius="16px" />
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### Color

Customize the background color of the skeleton.

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function ColorDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-sm w-full space-y-4">
                <Skeleton borderRadius="4px" className="bg-blue-500 dark:bg-blue-700" />
                <Skeleton borderRadius="4px" className="bg-red-500 dark:bg-red-700" />
                <Skeleton
                    borderRadius="4px"
                    className="bg-blue-100 dark:bg-blue-950 after:bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,oklch(0.82_0.18_260)_50%,rgba(255,255,255,0.01)_100%)] dark:after:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,oklch(0.42_0.18_260)_50%,rgba(255,255,255,0)_100%)]"
                />
                <Skeleton
                    borderRadius="4px"
                    className="bg-red-100 dark:bg-red-950 after:bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,oklch(63.7%_0.237_25.331)_50%,rgba(255,255,255,0.01)_100%)] dark:after:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,oklch(63.7%_0.237_25.331)_50%,rgba(255,255,255,0)_100%)]"
                />
            </div>
        </div>
    );
}
```

### Grid

Sample Grid implementation using different Skeleton components and Tailwind CSS utilities.

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function GridDemo() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="p-4 rounded-lg bg-surface-50 dark:bg-surface-800/75">
                    <Skeleton width="100%" height="10rem" className="" />
                    <div className="mt-4 flex items-start gap-3">
                        <Skeleton shape="circle" size="2.5rem" />
                        <div className="flex-1 flex flex-col gap-2">
                            <Skeleton width="100%" borderRadius="4px" />
                            <Skeleton width="90%" borderRadius="4px" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/skeleton/features.md#api) for sub-component documentation.

### Hooks

See [Headless API](../../headless/skeleton/features.md#api) for hook documentation.

## Accessibility

See [Skeleton Primitive](../../primitive/skeleton/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
