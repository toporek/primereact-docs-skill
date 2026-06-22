# ProgressBar

ProgressBar is a process status indicator.

```tsx
import { ProgressBar } from '@primereact/ui/progressbar';

export default function Preview() {
    const value = 50;

    return (
        <div className="max-w-sm mx-auto">
            <ProgressBar.Root value={value}>
                <ProgressBar.Track>
                    <ProgressBar.Indicator>
                        <ProgressBar.Label>
                            <ProgressBar.Value />
                        </ProgressBar.Label>
                    </ProgressBar.Indicator>
                </ProgressBar.Track>
            </ProgressBar.Root>
        </div>
    );
}
```

## Usage

```tsx
import { ProgressBar } from '@primereact/ui/progressbar';
```

```tsx
<ProgressBar.Root>
    <ProgressBar.Track>
        <ProgressBar.Indicator>
            <ProgressBar.Label>
                <ProgressBar.Value />
            </ProgressBar.Label>
        </ProgressBar.Indicator>
    </ProgressBar.Track>
</ProgressBar.Root>
```

## Examples

### Basic

Reflects the completion percentage of an ongoing process.

```tsx
import { ProgressBar } from '@primereact/ui/progressbar';

export default function BasicDemo() {
    const value = 50;

    return (
        <div className="max-w-sm mx-auto">
            <ProgressBar.Root value={value}>
                <ProgressBar.Track>
                    <ProgressBar.Indicator>
                        <ProgressBar.Label>
                            <ProgressBar.Value />
                        </ProgressBar.Label>
                    </ProgressBar.Indicator>
                </ProgressBar.Track>
            </ProgressBar.Root>
        </div>
    );
}
```

### Dynamic

Value is reactive so updating it dynamically changes the bar as well.

```tsx
'use client';
import { ProgressBar } from '@primereact/ui/progressbar';
import * as React from 'react';

export default function DynamicDemo() {
    const [value, setValue] = React.useState(0);
    const interval = React.useRef<NodeJS.Timeout | undefined>(undefined);

    React.useEffect(() => {
        interval.current = setInterval(() => {
            setValue((prevValue) => {
                const newValue = prevValue + Math.random() * 40 + 1;

                if (newValue >= 100) {
                    clearInterval(interval.current);

                    return 100;
                }

                return newValue;
            });
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = undefined;
            }
        };
    }, []);

    return (
        <div className="max-w-sm mx-auto">
            <div className="text-color font-medium text-sm mb-2">Uploading Files</div>
            <ProgressBar.Root value={value}>
                <ProgressBar.Track>
                    <ProgressBar.Indicator>
                        <ProgressBar.Label>
                            <ProgressBar.Value />
                        </ProgressBar.Label>
                    </ProgressBar.Indicator>
                </ProgressBar.Track>
            </ProgressBar.Root>
        </div>
    );
}
```

### Formatter

Custom formatter function to format the display value.

```tsx
'use client';
import { ProgressBar } from '@primereact/ui/progressbar';

export default function FormatterDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <ProgressBar.Root value={50} formatter={(value: number) => `${value}/100`}>
                <ProgressBar.Track>
                    <ProgressBar.Indicator>
                        <ProgressBar.Label>
                            <ProgressBar.Value />
                        </ProgressBar.Label>
                    </ProgressBar.Indicator>
                </ProgressBar.Track>
            </ProgressBar.Root>
        </div>
    );
}
```

### Template

Place `ProgressBar.Value` where the progress value should be displayed inside the `ProgressBar` and customize `formatter` prop to display in different format.

```tsx
'use client';
import { ProgressBar } from '@primereact/ui/progressbar';
import * as React from 'react';

export default function TemplateDemo() {
    const [uploadedFileSize, setUploadedFileSize] = React.useState(0);
    const maxFileSize = 5000;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setUploadedFileSize((prevValue) => {
                const newValue = prevValue + Math.floor(Math.random() * 200) + 1;

                return newValue >= maxFileSize ? maxFileSize : newValue;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes.toFixed(2) + ' B';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
        else return (bytes / 1048576).toFixed(2) + ' MB';
    };

    return (
        <div>
            <div className="max-w-sm mx-auto space-y-8">
                {/* Basic percentage formatter */}
                <ProgressBar.Root value={uploadedFileSize} max={maxFileSize} formatter={(value: number) => `${value.toFixed(1)}%`}>
                    <div className="flex items-center justify-between mb-3 text-sm">
                        <span className="font-medium">Basic Percentage</span>
                        <ProgressBar.Value />
                    </div>
                    <ProgressBar.Track className="rounded-full h-1.5">
                        <ProgressBar.Indicator className="bg-blue-600 rounded-full" />
                    </ProgressBar.Track>
                </ProgressBar.Root>

                {/* File size formatter */}
                <ProgressBar.Root
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        const currentSize = (value / 100) * maxFileSize;

                        return `${formatFileSize(currentSize)} / ${formatFileSize(maxFileSize)}`;
                    }}
                >
                    <div className="flex items-center justify-between mb-3 text-sm">
                        <span className="font-medium">File Size Progress</span>
                        <ProgressBar.Value />
                    </div>
                    <ProgressBar.Track className="rounded-full h-1.5">
                        <ProgressBar.Indicator className="bg-emerald-600 rounded-full" />
                    </ProgressBar.Track>
                </ProgressBar.Root>

                {/* Time remaining formatter */}
                <ProgressBar.Root
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        const remaining = ((maxFileSize - uploadedFileSize) / 200).toFixed(0);

                        return `${value.toFixed(0)}% (${remaining}s remaining)`;
                    }}
                >
                    <div className="flex items-center justify-between mb-3 text-sm">
                        <span className="font-medium">Time Remaining</span>
                        <ProgressBar.Value />
                    </div>
                    <ProgressBar.Track className="rounded-full h-1.5">
                        <ProgressBar.Indicator className="bg-purple-600 rounded-full" />
                    </ProgressBar.Track>
                </ProgressBar.Root>

                {/* Status Steps formatter */}
                <ProgressBar.Root
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        if (value < 40) return 'Preparing file...';
                        else if (value < 60) return 'Uploading file...';
                        else if (value < 99) return 'Finalizing...';
                        else return 'Upload complete';
                    }}
                >
                    <div className="flex items-center justify-between mb-3 text-sm">
                        <span className="font-medium">Upload Status Steps</span>
                        <ProgressBar.Value />
                    </div>
                    <ProgressBar.Track className="rounded-full h-1.5">
                        <ProgressBar.Indicator className="bg-orange-600 rounded-full" />
                    </ProgressBar.Track>
                </ProgressBar.Root>
            </div>
        </div>
    );
}
```

### Indeterminate

For progresses with no value to track, set the `mode` property to `indeterminate`.

```tsx
import { ProgressBar } from '@primereact/ui/progressbar';

export default function IndeterminateDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <ProgressBar.Root mode="indeterminate">
                <ProgressBar.Track className="h-1.5">
                    <ProgressBar.Indicator />
                </ProgressBar.Track>
            </ProgressBar.Root>
        </div>
    );
}
```

### As Steps

Steps are used to display a progress with multiple steps.

```tsx
'use client';
import { Button } from '@primereact/ui/button';
import { ProgressBar } from '@primereact/ui/progressbar';
import { cn } from '@primeuix/utils';
import * as React from 'react';

const orderProgress = [
    {
        status: 'Place Order'
    },
    {
        status: 'Order Placed',
        colors: {
            track: 'bg-blue-500/20',
            indicator: 'bg-blue-600 dark:bg-blue-400'
        }
    },
    {
        status: 'Processing',
        colors: {
            track: 'bg-yellow-500/20',
            indicator: 'bg-amber-600 dark:bg-amber-400'
        }
    },
    {
        status: 'Shipped',
        colors: {
            track: 'bg-purple-500/20',
            indicator: 'bg-violet-600 dark:bg-violet-400'
        }
    },
    {
        status: 'Delivered',
        colors: {
            track: 'bg-green-500/20',
            indicator: 'bg-green-600 dark:bg-green-400'
        }
    }
];

export default function StepsDemo() {
    const [step, setStep] = React.useState(1);
    const nextStep = () => setStep(Math.min(step + 1, orderProgress.length));
    const prevStep = () => setStep(Math.max(step - 1, 0));

    return (
        <div>
            <div className="max-w-sm mx-auto">
                <div className="mb-3 font-medium text-sm">{orderProgress[step].status}</div>
                <ProgressBar.Root value={step} min={0} max={4}>
                    {() => {
                        const { colors } = orderProgress[step] ?? {};

                        return (
                            <ProgressBar.Track className={cn(colors?.track, 'transition-all duration-300 ease-linear')}>
                                <ProgressBar.Indicator
                                    className={cn(colors?.indicator, 'transition-[width,_background-color] duration-300 ease-linear')}
                                >
                                    <ProgressBar.Label>
                                        <ProgressBar.Value />
                                    </ProgressBar.Label>
                                </ProgressBar.Indicator>
                            </ProgressBar.Track>
                        );
                    }}
                </ProgressBar.Root>

                <div className="flex items-center justify-between mt-6">
                    <Button onClick={prevStep} disabled={step === 0} rounded variant="text" severity="contrast">
                        Previous
                    </Button>
                    <Button onClick={nextStep} disabled={step === orderProgress.length - 1} rounded variant="text" severity="contrast">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/progressbar/features.md#api) for `ProgressBarRoot`, `ProgressBarTrack`, `ProgressBarIndicator`, `ProgressBarLabel`, `ProgressBarValue` component documentation.

### Hooks

See [Headless API](../../headless/progressbar/features.md#api) for `useProgressBar` hook documentation.

## Accessibility

See [ProgressBar Primitive](../../primitive/progressbar/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
