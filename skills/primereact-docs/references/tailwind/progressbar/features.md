# ProgressBar

ProgressBar is a process status indicator.

```tsx
import { ProgressBar } from '@/components/ui/progressbar';

export default function Preview() {
    return (
        <div className="max-w-sm mx-auto">
            <ProgressBar value={50} />
        </div>
    );
}
```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/progressbar
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { ProgressBar } from '@/components/ui/progressbar';
```

```tsx
<ProgressBar value={50} />
```

## Examples

### Basic

Reflects the completion percentage of an ongoing process.

```tsx
import { ProgressBar } from '@/components/ui/progressbar';

export default function BasicDemo() {
    const value = 50;

    return (
        <div className="max-w-sm mx-auto">
            <ProgressBar value={value} />
        </div>
    );
}
```

### Dynamic

Value is reactive so updating it dynamically changes the bar as well.

```tsx
'use client';
import { ProgressBar } from '@/components/ui/progressbar';
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
            <ProgressBar value={value} />
        </div>
    );
}
```

### Formatter

Custom formatter function to format the display value.

```tsx
'use client';
import { ProgressBar } from '@/components/ui/progressbar';

export default function FormatterDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <ProgressBar value={50} formatter={(value: number) => `${value}/100`} />
        </div>
    );
}
```

### Template

Place `ProgressBar.Value` where the progress value should be displayed inside the `ProgressBar` and customize `formatter` prop to display in different format.

```tsx
'use client';
import { ProgressBar } from '@/components/ui/progressbar';
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
                <ProgressBar value={uploadedFileSize} max={maxFileSize} formatter={(value: number) => `${value.toFixed(1)}%`} />

                <ProgressBar
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        const currentSize = (value / 100) * maxFileSize;

                        return `${formatFileSize(currentSize)} / ${formatFileSize(maxFileSize)}`;
                    }}
                />

                <ProgressBar
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        const remaining = ((maxFileSize - uploadedFileSize) / 200).toFixed(0);

                        return `${value.toFixed(0)}% (${remaining}s remaining)`;
                    }}
                />

                <ProgressBar
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        if (value < 40) return 'Preparing file...';
                        else if (value < 60) return 'Uploading file...';
                        else if (value < 99) return 'Finalizing...';
                        else return 'Upload complete';
                    }}
                />
            </div>
        </div>
    );
}
```

### Indeterminate

For progresses with no value to track, set the `mode` property to `indeterminate`.

```tsx
import { ProgressBar } from '@/components/ui/progressbar';

export default function IndeterminateDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <ProgressBar mode="indeterminate" className="h-1.5" />
        </div>
    );
}
```

### As Steps

Steps are used to display a progress with multiple steps.

```tsx
'use client';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progressbar';
import * as React from 'react';

const orderProgress = ['Place Order', 'Order Placed', 'Processing', 'Shipped', 'Delivered'];

export default function StepsDemo() {
    const [step, setStep] = React.useState(1);
    const nextStep = () => setStep((prev) => Math.min(prev + 1, orderProgress.length - 1));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    return (
        <div>
            <div className="max-w-sm mx-auto">
                <div className="mb-3 font-medium text-sm">{orderProgress[step]}</div>
                <ProgressBar value={step} min={0} max={orderProgress.length - 1} />

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
