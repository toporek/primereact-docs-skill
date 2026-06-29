# DatePicker

DatePicker is a form component to work with dates.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import { Label } from '@/components/ui/label';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export default function Preview() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);
    const [start, end] = Array.isArray(date) ? date : [null, null];
    const nights = start instanceof Date && end instanceof Date ? Math.round((end.getTime() - start.getTime()) / MS_PER_DAY) : null;

    return (
        <div className="flex flex-col gap-1.5 max-w-2xs mx-auto">
            <Label htmlFor="trip-dates" className="font-semibold">
                When are you traveling?
            </Label>
            <DatePicker
                value={date}
                selectionMode="range"
                manualInput={false}
                onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}
            >
                <DatePickerInput id="trip-dates" placeholder="Select departure and return" fluid />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
            <small className="text-muted-color">
                {nights
                    ? `${nights} ${nights === 1 ? 'night' : 'nights'} · Free cancellation up to 24h before check-in`
                    : 'Pick your departure and return dates · Free cancellation'}
            </small>
        </div>
    );
}

```

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add https://primereact.dev/r/datepicker.json
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { DatePicker, DatePickerBody, DatePickerCalendar, DatePickerInput, DatePickerPanel, DatePickerPopup, DatePickerPortal, DatePickerPositioner } from '@/components/ui/datepicker';
```

```tsx
<DatePicker value={date} onValueChange={(e) => setDate(e.value)}>
    <DatePickerInput />
    <DatePickerPortal>
        <DatePickerPositioner>
            <DatePickerPopup>
                <DatePickerBody>
                    <DatePickerPanel>
                        <DatePickerCalendar />
                    </DatePickerPanel>
                </DatePickerBody>
            </DatePickerPopup>
        </DatePickerPositioner>
    </DatePickerPortal>
</DatePicker>
```

## Examples

### Basic

A simple date selector.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function BasicDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Range

Use `selectionMode="range"` to select a start and end date.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function RangeDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker
                value={date}
                selectionMode="range"
                manualInput={false}
                onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}
            >
                <DatePickerInput />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Multiple

Use `selectionMode="multiple"` to select multiple dates independently.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function MultipleDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker
                value={date}
                selectionMode="multiple"
                manualInput={false}
                onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}
            >
                <DatePickerInput />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Format

Customize the input format with `dateFormat`.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function FormatDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} dateFormat="dd/mm/yy" onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput placeholder="dd/mm/yy" />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Min / Max

Restrict the selectable range with `minDate` and `maxDate`.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function MinMaxDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    return (
        <div className="flex justify-center">
            <DatePicker value={date} minDate={minDate} maxDate={maxDate} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Month Picker

Use `view="month"` to select only month and year.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function MonthPickerDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} view="month" dateFormat="mm/yy" onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput placeholder="mm/yy" />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Year Picker

Use `view="year"` to select only the year.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function YearPickerDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} view="year" dateFormat="yy" onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput placeholder="yyyy" />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Time

Use `showTime` to render a time picker beneath the calendar; pass `hourFormat="12"` for AM/PM.

```tsx
'use client';
import {
    DatePicker,
    DatePickerBody,
    DatePickerCalendar,
    DatePickerInput,
    DatePickerPanel,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner,
    DatePickerTime
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function TimeDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} showTime hourFormat="12" onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput placeholder="mm/dd/yy hh:mm aa" />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                    <DatePickerTime />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Inline

Skip the popup chain and embed the calendar directly.

```tsx
'use client';
import { DatePicker, DatePickerBody, DatePickerCalendar, DatePickerPanel } from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function InlineDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerBody>
                    <DatePickerPanel>
                        <DatePickerCalendar />
                    </DatePickerPanel>
                </DatePickerBody>
            </DatePicker>
        </div>
    );
}

```

### Multiple Months

Render two side-by-side calendars with `numberOfMonths={2}` and one `DatePickerCalendar` per offset.

```tsx
'use client';
import { DatePicker, DatePickerBody, DatePickerCalendar, DatePickerPanel } from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function MultipleMonthsDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} selectionMode="range" numberOfMonths={3} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerBody>
                    <DatePickerPanel>
                        <DatePickerCalendar index={0} />
                    </DatePickerPanel>
                    <DatePickerPanel>
                        <DatePickerCalendar index={1} />
                    </DatePickerPanel>
                    <DatePickerPanel>
                        <DatePickerCalendar index={2} />
                    </DatePickerPanel>
                </DatePickerBody>
            </DatePicker>
        </div>
    );
}

```

### Show Week Numbers

Add `showWeek` to display ISO week numbers on the leftmost column.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function ShowWeekDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} showWeek onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Sizes

Use `size` to render small or large variants.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function SizesDemo() {
    const [date1, setDate1] = React.useState<DatePickerRootProps['value']>(null);
    const [date2, setDate2] = React.useState<DatePickerRootProps['value']>(null);
    const [date3, setDate3] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex flex-col items-center gap-4">
            <DatePicker value={date1} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate1(e.value)}>
                <DatePickerInput size="small" placeholder="Small" />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
            <DatePicker value={date2} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate2(e.value)}>
                <DatePickerInput placeholder="Normal" />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
            <DatePicker value={date3} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate3(e.value)}>
                <DatePickerInput size="large" placeholder="Large" />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Fluid

Use `fluid` to make the input span the parent container width.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function FluidDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <DatePicker value={date} fluid onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
            <DatePickerInput fluid />
            <DatePickerPortal>
                <DatePickerPositioner>
                    <DatePickerPopup>
                        <DatePickerBody>
                            <DatePickerPanel>
                                <DatePickerCalendar />
                            </DatePickerPanel>
                        </DatePickerBody>
                    </DatePickerPopup>
                </DatePickerPositioner>
            </DatePickerPortal>
        </DatePicker>
    );
}

```

### Filled

Use `variant="filled"` for a filled input style.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function FilledDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput variant="filled" />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Disabled

Use `disabled` to disable the input.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <DatePicker disabled>
                <DatePickerInput />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

### Invalid

Use `invalid` to display the input in an error state.

```tsx
'use client';
import {
    DatePicker,
    DatePickerCalendar,
    DatePickerBody,
    DatePickerPanel,
    DatePickerInput,
    DatePickerPopup,
    DatePickerPortal,
    DatePickerPositioner
} from '@/components/ui/datepicker';
import type { DatePickerRootProps, DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';

export default function InvalidDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker value={date} invalid={!date} onValueChange={(e: DatePickerRootValueChangeEvent) => setDate(e.value)}>
                <DatePickerInput placeholder="Date" invalid={!date} />
                <DatePickerPortal>
                    <DatePickerPositioner>
                        <DatePickerPopup>
                            <DatePickerBody>
                                <DatePickerPanel>
                                    <DatePickerCalendar />
                                </DatePickerPanel>
                            </DatePickerBody>
                        </DatePickerPopup>
                    </DatePickerPositioner>
                </DatePickerPortal>
            </DatePicker>
        </div>
    );
}

```

## Accessibility

### Screen Reader

DatePicker uses `combobox` role on the input and `dialog` role on the popup. Day cells use `gridcell` role with `aria-selected` reflecting selection and range state.

### Keyboard Support

| Key             | Function                              |
| --------------- | ------------------------------------- |
| `tab`           | Moves focus through interactive parts |
| `space / enter` | Selects the focused date              |
| `arrow keys`    | Moves focus by day or grid cell       |
| `page up/down`  | Moves focus by month                  |
| `home / end`    | Moves focus to start/end of week      |
| `escape`        | Closes the popup                      |
