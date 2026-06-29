# DatePicker

DatePicker is a form component to work with dates.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
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
            <DatePicker.Root
                value={date}
                selectionMode="range"
                manualInput={false}
                onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}
            >
                <DatePicker.Input as={InputText} id="trip-dates" placeholder="Select departure and return" fluid />
                <DatePicker.Portal>
                    <DatePicker.Positioner align="start">
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
            <small className="text-muted-color">
                {nights
                    ? `${nights} ${nights === 1 ? 'night' : 'nights'} · Free cancellation up to 24h before check-in`
                    : 'Pick your departure and return dates · Free cancellation'}
            </small>
        </div>
    );
}

```

## Usage

```tsx
import { DatePicker } from '@primereact/ui/datepicker';
```

```tsx
<DatePicker.Root>
    <DatePicker.Input />
    <DatePicker.Clear />
    <DatePicker.Trigger>
        <DatePicker.Value />
        <DatePicker.Indicator />
    </DatePicker.Trigger>
    <DatePicker.Portal>
        <DatePicker.Positioner>
            <DatePicker.Popup>
                <DatePicker.Calendar>
                    <DatePicker.Header>
                        <DatePicker.Prev />
                        <DatePicker.Title>
                            <DatePicker.SelectMonth />
                            <DatePicker.SelectYear />
                            <DatePicker.Decade />
                        </DatePicker.Title>
                        <DatePicker.Next />
                    </DatePicker.Header>
                    <DatePicker.Table>
                        <DatePicker.TableHead />
                        <DatePicker.TableBody />
                        <DatePicker.TableBody view="month" />
                        <DatePicker.TableBody view="year" />
                    </DatePicker.Table>
                    <DatePicker.Buttonbar />
                </DatePicker.Calendar>
                <DatePicker.Time />
            </DatePicker.Popup>
        </DatePicker.Positioner>
    </DatePicker.Portal>
</DatePicker.Root>
```

## Examples

### Basic

Select a single date from an interactive calendar popup.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function BasicDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner align="start">
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Format

Default date format is `mm/dd/yy` which can be customized using the `dateFormat` property. Following options can be a part of the format.

<ul className="mb-6 leading-loose">
    <li>`d` - day of month (no leading zero)</li>
    <li>`dd` - day of month (two digit)</li>
    <li>`o` - day of the year (no leading zeros)</li>
    <li>`oo` - day of the year (three digit)</li>
    <li>`D` - day name short</li>
    <li>`DD` - day name long</li>
    <li>`m` - month of year (no leading zero)</li>
    <li>`mm` - month of year (two digit)</li>
    <li>`M` - month name short</li>
    <li>`MM` - month name long</li>
    <li>`y` - year (two digit)</li>
    <li>`yy` - year (four digit)</li>
    <li>`@` - Unix timestamp (ms since 01/01/1970)</li>
    <li>`!` - Windows ticks (100ns since 01/01/0001)</li>
    <li>`'...'` - literal text</li>
    <li>`''` - single quote</li>
    <li>`anything else` - literal text</li>
</ul>

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function FormatDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} dateFormat="dd/mm/yy" onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Icon

An additional icon is displayed next to the input field.

```tsx
'use client';
import { Calendar } from '@primeicons/react/calendar';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { ChevronUp } from '@primeicons/react/chevron-up';
import { Clock } from '@primeicons/react/clock';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerOpenChangeEvent, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function IconDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date3, setDate3] = React.useState<DatePickerRootProps['value'] | null>(null);

    const [opened, setOpened] = React.useState(false);
    const [opened2, setOpened2] = React.useState(false);

    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="buttondisplay" className="text-sm font-bold block mb-2">
                    Button
                </Label>
                <DatePicker.Root value={date} fluid onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                    <DatePicker.Input as={InputText} id="buttondisplay" />
                    <DatePicker.Trigger>
                        <Calendar />
                    </DatePicker.Trigger>
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="icondisplay" className="text-sm font-bold block mb-2">
                    Icon Field
                </Label>
                <DatePicker.Root
                    value={date2}
                    open={opened}
                    fluid
                    onValueChange={(event: DatePickerRootValueChangeEvent) => setDate2(event.value)}
                    onOpenChange={(event: DatePickerOpenChangeEvent) => setOpened(event.value)}
                >
                    <IconField.Root className="w-full">
                        <DatePicker.Input as={InputText} id="icondisplay" fluid />
                        <IconField.Inset>
                            <Calendar className="cursor-pointer" onClick={() => setOpened((prev) => !prev)} />
                        </IconField.Inset>
                    </IconField.Root>

                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="templatedisplay" className="text-sm font-bold block mb-2">
                    Custom Icon
                </Label>
                <DatePicker.Root
                    value={date3}
                    open={opened2}
                    fluid
                    timeOnly
                    onValueChange={(event: DatePickerRootValueChangeEvent) => setDate3(event.value)}
                    onOpenChange={(event: DatePickerOpenChangeEvent) => setOpened2(event.value)}
                >
                    <IconField.Root className="w-full">
                        <DatePicker.Input as={InputText} id="templatedisplay" fluid />
                        <IconField.Inset>
                            <Clock className="cursor-pointer" onClick={() => setOpened2((prev) => !prev)} />
                        </IconField.Inset>
                    </IconField.Root>

                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Time>
                                            <DatePicker.Picker type="hour">
                                                <DatePicker.Increment as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronUp />
                                                </DatePicker.Increment>
                                                <DatePicker.Hour />
                                                <DatePicker.Decrement as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronDown />
                                                </DatePicker.Decrement>
                                            </DatePicker.Picker>
                                            <DatePicker.Separator />
                                            <DatePicker.Picker type="minute">
                                                <DatePicker.Increment as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronUp />
                                                </DatePicker.Increment>
                                                <DatePicker.Minute />
                                                <DatePicker.Decrement as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronDown />
                                                </DatePicker.Decrement>
                                            </DatePicker.Picker>
                                        </DatePicker.Time>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
            </div>
        </div>
    );
}

```

### Value & Trigger

Use `DatePicker.Trigger` and `DatePicker.Value` to build custom trigger UIs without the default input. Supports date range pickers with formatted display, multi-date selection with removable chips, and custom trigger buttons with flexible layouts.

```tsx
'use client';
import { ArrowRight } from '@primeicons/react/arrow-right';
import { Calendar } from '@primeicons/react/calendar';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { Chip, type ChipRootRemoveEvent } from '@primereact/ui/chip';
import { DatePicker, type DatePickerOpenChangeEvent, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

const formatShortDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export default function ValueTriggerDemo() {
    const [rangeDate, setRangeDate] = React.useState<DatePickerRootProps['value']>(null);
    const [multipleDates, setMultipleDates] = React.useState<DatePickerRootProps['value']>(null);
    const [singleDate, setSingleDate] = React.useState<DatePickerRootProps['value']>(null);
    const [opened, setOpened] = React.useState(false);
    const [opened2, setOpened2] = React.useState(false);
    const [opened3, setOpened3] = React.useState(false);

    const removeDate = (e: ChipRootRemoveEvent, target: Date) => {
        e.originalEvent.stopPropagation();

        if (Array.isArray(multipleDates)) {
            const dates = multipleDates as Date[];

            setMultipleDates(dates.filter((d) => d.getTime() !== target.getTime()));
        }
    };

    const clearRange = (e: React.MouseEvent) => {
        e.stopPropagation();
        setRangeDate(null);
    };

    const rangeDates = Array.isArray(rangeDate) ? (rangeDate as Date[]) : [];
    const multiDates = Array.isArray(multipleDates) ? (multipleDates as Date[]) : [];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <Label className="text-sm font-bold">Date Range Picker</Label>
                <DatePicker.Root
                    value={rangeDate}
                    selectionMode="range"
                    manualInput={false}
                    numberOfMonths={2}
                    open={opened}
                    onValueChange={(event: DatePickerRootValueChangeEvent) => setRangeDate(event.value)}
                    onOpenChange={(event: DatePickerOpenChangeEvent) => setOpened(event.value)}
                >
                    <DatePicker.Trigger
                        as="div"
                        className="flex! items-center gap-2 cursor-pointer w-full! md:w-80! border! border-surface! rounded-md! bg-(--p-inputtext-background)! px-3 py-2 text-sm hover:border-(--p-inputtext-hover-border-color)! focus-visible:border-(--p-inputtext-focus-border-color)! transition-colors"
                    >
                        <Calendar className="text-surface-500 shrink-0" />
                        <DatePicker.Value placeholder="Select date range">
                            {rangeDates.length > 0 && (
                                <span className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">{formatShortDate(rangeDates[0])}</span>
                                    {rangeDates[1] && (
                                        <>
                                            <ArrowRight className="text-xs text-surface-400" />
                                            <span className="font-medium">{formatShortDate(rangeDates[1])}</span>
                                        </>
                                    )}
                                </span>
                            )}
                        </DatePicker.Value>
                        {rangeDates.length > 0 && (
                            <button
                                type="button"
                                className="ml-auto p-0.5 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
                                onClick={clearRange}
                                aria-label="Clear date range"
                            >
                                <Times className="text-xs text-surface-400" />
                            </button>
                        )}
                    </DatePicker.Trigger>
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
            </div>

            <div className="flex flex-col gap-2">
                <Label className="text-sm font-bold">Multiple Dates with Chips</Label>
                <DatePicker.Root
                    value={multipleDates}
                    selectionMode="multiple"
                    manualInput={false}
                    open={opened2}
                    onValueChange={(event: DatePickerRootValueChangeEvent) => setMultipleDates(event.value)}
                    onOpenChange={(event: DatePickerOpenChangeEvent) => setOpened2(event.value)}
                >
                    <DatePicker.Trigger
                        as="div"
                        className="flex! items-center gap-1 cursor-pointer min-h-10 w-full! md:w-150! border! border-surface! rounded-md! bg-(--p-inputtext-background)! px-3 py-2 text-sm hover:border-(--p-inputtext-hover-border-color)! focus-visible:border-(--p-inputtext-focus-border-color)! transition-colors"
                    >
                        <DatePicker.Value placeholder="Pick dates...">
                            <div className="flex flex-wrap gap-1">
                                {multiDates.map((date) => (
                                    <Chip.Root key={date.getTime()} className="py-0.5" onRemove={(e: ChipRootRemoveEvent) => removeDate(e, date)}>
                                        <Chip.Label className="text-xs">{formatShortDate(date)}</Chip.Label>
                                        <Chip.Remove>
                                            <Times className="text-[0.5rem]!" />
                                        </Chip.Remove>
                                    </Chip.Root>
                                ))}
                            </div>
                        </DatePicker.Value>
                        <Calendar className="ml-auto text-surface-500 shrink-0" />
                    </DatePicker.Trigger>
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
            </div>

            <div className="flex flex-col gap-2">
                <Label className="text-sm font-bold">Custom Trigger Button</Label>
                <DatePicker.Root
                    value={singleDate}
                    open={opened3}
                    onValueChange={(event: DatePickerRootValueChangeEvent) => setSingleDate(event.value)}
                    onOpenChange={(event: DatePickerOpenChangeEvent) => setOpened3(event.value)}
                >
                    <DatePicker.Trigger as={Button} variant="outlined" severity="secondary" iconOnly className="border!">
                        <Calendar />
                    </DatePicker.Trigger>
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
            </div>
        </div>
    );
}

```

### Min / Max

Boundaries for the permitted dates that can be entered are defined with `minDate` and `maxDate` properties.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function MinMaxDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = prevMonth === 11 ? year - 1 : year;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = nextMonth === 0 ? year + 1 : year;
    const minDate = new Date();
    const maxDate = new Date();

    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    return (
        <div className="flex justify-center">
            <DatePicker.Root
                value={date}
                minDate={minDate}
                maxDate={maxDate}
                manualInput={false}
                onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}
            >
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Multiple

In order to choose multiple dates, set `selectionMode` as `multiple`. In this mode, the value binding should be an array.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';

import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function MultipleDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root
                value={date}
                selectionMode="multiple"
                manualInput={false}
                onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}
            >
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Range

A range of dates can be selected by defining `selectionMode` as `range`, in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';

import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function RangeDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root
                value={date}
                selectionMode="range"
                manualInput={false}
                onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}
            >
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Button Bar

When `Buttonbar` component is used, today and clear buttons are displayed at the bottom of the calendar panel.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ButtonbarDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center gap-4 flex-wrap">
            <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input as={InputText} placeholder="Basic" />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                    <DatePicker.Buttonbar>
                                        <DatePicker.Today as={Button} variant="text" severity="secondary" size="small">
                                            Today
                                        </DatePicker.Today>
                                        <DatePicker.ClearTrigger as={Button} variant="text" severity="secondary" size="small">
                                            Clear
                                        </DatePicker.ClearTrigger>
                                    </DatePicker.Buttonbar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
            <DatePicker.Root
                value={date2}
                selectionMode="range"
                manualInput={false}
                onValueChange={(event: DatePickerRootValueChangeEvent) => setDate2(event.value)}
            >
                <DatePicker.Input as={InputText} placeholder="Customized" />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                    <DatePicker.Buttonbar>
                                        <div className="flex justify-between w-full">
                                            <div className="flex gap-2">
                                                <Button size="small" severity="secondary">
                                                    Exact
                                                </Button>
                                                <Button size="small" severity="secondary">
                                                    Flexible
                                                </Button>
                                            </div>
                                            <div className="flex gap-2">
                                                <DatePicker.Today as={Button} variant="outlined" severity="secondary" size="small">
                                                    Today
                                                </DatePicker.Today>
                                                <DatePicker.ClearTrigger as={Button} variant="outlined" severity="danger" size="small" iconOnly>
                                                    <Times />
                                                </DatePicker.ClearTrigger>
                                            </div>
                                        </div>
                                    </DatePicker.Buttonbar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Time

A time picker is displayed when `DatePicker.Time` component is used where 12/24 hour format is configured with `hourFormat` property. In case, only time needs to be selected, add `timeOnly` to hide the date section.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { ChevronUp } from '@primeicons/react/chevron-up';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function TimeDemo() {
    const [date1, setDate1] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date3, setDate3] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <>
            <div className="flex flex-wrap gap-4">
                <div className="flex-auto">
                    <Label htmlFor="datepicker-12h" className="text-sm font-bold block mb-2">
                        12h Format
                    </Label>
                    <DatePicker.Root
                        value={date1}
                        showTime
                        hourFormat="12"
                        fluid
                        onValueChange={(event: DatePickerRootValueChangeEvent) => setDate1(event.value)}
                    >
                        <DatePicker.Input as={InputText} id="datepicker-12h" fluid />
                        <DatePicker.Portal>
                            <DatePicker.Positioner>
                                <DatePicker.Popup>
                                    <DatePicker.Body>
                                        <DatePicker.Panel>
                                            <DatePicker.Calendar>
                                                <DatePicker.Header>
                                                    <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                        <ChevronLeft />
                                                    </DatePicker.Prev>
                                                    <DatePicker.Title>
                                                        <DatePicker.SelectMonth />
                                                        <DatePicker.SelectYear />
                                                        <DatePicker.Decade />
                                                    </DatePicker.Title>
                                                    <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                        <ChevronRight />
                                                    </DatePicker.Next>
                                                </DatePicker.Header>
                                                <DatePicker.Table>
                                                    <DatePicker.TableHead />
                                                    <DatePicker.TableBody />
                                                    <DatePicker.TableBody view="month" />
                                                    <DatePicker.TableBody view="year" />
                                                </DatePicker.Table>
                                            </DatePicker.Calendar>
                                            <DatePicker.Time>
                                                <DatePicker.Picker type="hour">
                                                    <DatePicker.Increment
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronUp />
                                                    </DatePicker.Increment>
                                                    <DatePicker.Hour />
                                                    <DatePicker.Decrement
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronDown />
                                                    </DatePicker.Decrement>
                                                </DatePicker.Picker>

                                                <DatePicker.Separator />

                                                <DatePicker.Picker type="minute">
                                                    <DatePicker.Increment
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronUp />
                                                    </DatePicker.Increment>
                                                    <DatePicker.Minute />
                                                    <DatePicker.Decrement
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronDown />
                                                    </DatePicker.Decrement>
                                                </DatePicker.Picker>

                                                <DatePicker.Separator />

                                                <DatePicker.Picker type="ampm">
                                                    <DatePicker.Increment
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronUp />
                                                    </DatePicker.Increment>
                                                    <DatePicker.AmPm />
                                                    <DatePicker.Decrement
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronDown />
                                                    </DatePicker.Decrement>
                                                </DatePicker.Picker>
                                            </DatePicker.Time>
                                        </DatePicker.Panel>
                                    </DatePicker.Body>
                                </DatePicker.Popup>
                            </DatePicker.Positioner>
                        </DatePicker.Portal>
                    </DatePicker.Root>
                </div>
                <div className="flex-auto">
                    <Label htmlFor="datepicker-24h" className="text-sm font-bold block mb-2">
                        24h Format
                    </Label>
                    <DatePicker.Root
                        value={date2}
                        showTime
                        hourFormat="24"
                        fluid
                        onValueChange={(event: DatePickerRootValueChangeEvent) => setDate2(event.value)}
                    >
                        <DatePicker.Input as={InputText} id="datepicker-24h" fluid />
                        <DatePicker.Portal>
                            <DatePicker.Positioner>
                                <DatePicker.Popup>
                                    <DatePicker.Body>
                                        <DatePicker.Panel>
                                            <DatePicker.Calendar>
                                                <DatePicker.Header>
                                                    <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                        <ChevronLeft />
                                                    </DatePicker.Prev>
                                                    <DatePicker.Title>
                                                        <DatePicker.SelectMonth />
                                                        <DatePicker.SelectYear />
                                                        <DatePicker.Decade />
                                                    </DatePicker.Title>
                                                    <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                        <ChevronRight />
                                                    </DatePicker.Next>
                                                </DatePicker.Header>
                                                <DatePicker.Table>
                                                    <DatePicker.TableHead />
                                                    <DatePicker.TableBody />
                                                    <DatePicker.TableBody view="month" />
                                                    <DatePicker.TableBody view="year" />
                                                </DatePicker.Table>
                                            </DatePicker.Calendar>
                                            <DatePicker.Time>
                                                <DatePicker.Picker type="hour">
                                                    <DatePicker.Increment
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronUp />
                                                    </DatePicker.Increment>
                                                    <DatePicker.Hour />
                                                    <DatePicker.Decrement
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronDown />
                                                    </DatePicker.Decrement>
                                                </DatePicker.Picker>
                                                <DatePicker.Separator />
                                                <DatePicker.Picker type="minute">
                                                    <DatePicker.Increment
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronUp />
                                                    </DatePicker.Increment>
                                                    <DatePicker.Minute />
                                                    <DatePicker.Decrement
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronDown />
                                                    </DatePicker.Decrement>
                                                </DatePicker.Picker>
                                            </DatePicker.Time>
                                        </DatePicker.Panel>
                                    </DatePicker.Body>
                                </DatePicker.Popup>
                            </DatePicker.Positioner>
                        </DatePicker.Portal>
                    </DatePicker.Root>
                </div>
                <div className="flex-auto">
                    <Label htmlFor="datepicker-timeonly" className="text-sm font-bold block mb-2">
                        Time Only
                    </Label>
                    <DatePicker.Root value={date3} timeOnly fluid onValueChange={(event: DatePickerRootValueChangeEvent) => setDate3(event.value)}>
                        <DatePicker.Input as={InputText} id="datepicker-timeonly" fluid />
                        <DatePicker.Portal>
                            <DatePicker.Positioner>
                                <DatePicker.Popup>
                                    <DatePicker.Body>
                                        <DatePicker.Panel>
                                            <DatePicker.Time>
                                                <DatePicker.Picker type="hour">
                                                    <DatePicker.Increment
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronUp />
                                                    </DatePicker.Increment>
                                                    <DatePicker.Hour />
                                                    <DatePicker.Decrement
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronDown />
                                                    </DatePicker.Decrement>
                                                </DatePicker.Picker>
                                                <DatePicker.Separator />
                                                <DatePicker.Picker type="minute">
                                                    <DatePicker.Increment
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronUp />
                                                    </DatePicker.Increment>
                                                    <DatePicker.Minute />
                                                    <DatePicker.Decrement
                                                        as={Button}
                                                        iconOnly
                                                        variant="text"
                                                        rounded
                                                        severity="secondary"
                                                        size="small"
                                                    >
                                                        <ChevronDown />
                                                    </DatePicker.Decrement>
                                                </DatePicker.Picker>
                                            </DatePicker.Time>
                                        </DatePicker.Panel>
                                    </DatePicker.Body>
                                </DatePicker.Popup>
                            </DatePicker.Positioner>
                        </DatePicker.Portal>
                    </DatePicker.Root>
                </div>
            </div>
        </>
    );
}

```

### Month Picker

Month only picker is enabled by specifying `view` as `month` in addition to a suitable `dateFormat`.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';

import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function MonthPickerDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root
                value={date}
                view="month"
                dateFormat="mm/yy"
                onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}
            >
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Year Picker

Year only picker is enabled by specifying `view` as `year` in addition to a suitable `dateFormat`.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';

import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function YearPickerDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} view="year" dateFormat="yy" onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Multiple Months

Number of months to display is configured with the `numberOfMonths` property.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import {
    DatePicker,
    type DatePickerBodyInstance,
    type DatePickerMonthData,
    type DatePickerRootProps,
    type DatePickerRootValueChangeEvent
} from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function MultipleMonthsDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} numberOfMonths={2} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner align="center" sideOffset={12}>
                        <DatePicker.Popup>
                            <DatePicker.Body className="flex gap-4">
                                {(instance: DatePickerBodyInstance) => {
                                    const { datepicker } = instance;
                                    const months = datepicker?.months as DatePickerMonthData[];

                                    return months?.map((_, groupIndex) => {
                                        const month = datepicker?.getIndexedMonth?.(groupIndex) as DatePickerMonthData;

                                        return (
                                            <DatePicker.Panel key={groupIndex}>
                                                <DatePicker.Calendar>
                                                    {groupIndex === 0 && (
                                                        <>
                                                            <DatePicker.Header>
                                                                <DatePicker.Prev
                                                                    as={Button}
                                                                    iconOnly
                                                                    variant="text"
                                                                    rounded
                                                                    severity="secondary"
                                                                    size="small"
                                                                >
                                                                    <ChevronLeft />
                                                                </DatePicker.Prev>
                                                                <DatePicker.Title>
                                                                    <DatePicker.SelectMonth>
                                                                        {datepicker?.getMonthName?.(month.month)}
                                                                    </DatePicker.SelectMonth>
                                                                    <DatePicker.SelectYear>{month.year}</DatePicker.SelectYear>
                                                                    <DatePicker.Decade />
                                                                </DatePicker.Title>
                                                            </DatePicker.Header>
                                                        </>
                                                    )}
                                                    {groupIndex === 1 && (
                                                        <>
                                                            <DatePicker.Header>
                                                                <DatePicker.Title>
                                                                    <DatePicker.SelectMonth>
                                                                        {datepicker?.getMonthName?.(month.month)}
                                                                    </DatePicker.SelectMonth>
                                                                    <DatePicker.SelectYear>{month.year}</DatePicker.SelectYear>
                                                                    <DatePicker.Decade />
                                                                </DatePicker.Title>
                                                                <DatePicker.Next
                                                                    as={Button}
                                                                    iconOnly
                                                                    variant="text"
                                                                    rounded
                                                                    severity="secondary"
                                                                    size="small"
                                                                >
                                                                    <ChevronRight />
                                                                </DatePicker.Next>
                                                            </DatePicker.Header>
                                                        </>
                                                    )}
                                                    <DatePicker.Table>
                                                        <DatePicker.TableHead />
                                                        <DatePicker.TableBody index={groupIndex} />
                                                        <DatePicker.TableBody view="month" />
                                                        <DatePicker.TableBody view="year" />
                                                    </DatePicker.Table>
                                                </DatePicker.Calendar>
                                            </DatePicker.Panel>
                                        );
                                    });
                                }}
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Model Type

The `updateModelType` property controls the data type of the value. When set to `string` it returns a string representation of the date, when set to `date` (default) it returns a Date object.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function ModelTypeDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="datetype" className="text-sm font-bold block mb-2">
                    Date Type Model
                </Label>
                <DatePicker.Root value={date} fluid onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                    <DatePicker.Input as={InputText} id="datetype" fluid />
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
            </div>
            <div className="flex-auto">
                <Label htmlFor="stringtype" className="text-sm font-bold block mb-2">
                    String Type Model
                </Label>
                <DatePicker.Root
                    value={date2}
                    updateModelType="string"
                    fluid
                    onValueChange={(event: DatePickerRootValueChangeEvent) => setDate2(event.value)}
                >
                    <DatePicker.Input as={InputText} id="stringtype" fluid />
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
            </div>
        </div>
    );
}

```

### Date Template

Custom content can be placed inside date cells with the `DatePicker.TableHeadCell` component that takes a Date as a parameter.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import {
    DatePicker,
    type DatePickerDateMeta,
    type DatePickerMonthData,
    type DatePickerRootValueChangeEvent,
    type DatePickerTableBodyInstance
} from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function DateTemplateDemo() {
    const [date, setDate] = React.useState<Date | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value as Date)}>
                <DatePicker.Input as={InputText} />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody>
                                                {(instance: DatePickerTableBodyInstance) => {
                                                    const { datepicker } = instance;
                                                    const month = datepicker?.getIndexedMonth?.() as DatePickerMonthData;

                                                    return (
                                                        <>
                                                            {month.dates?.map((week) => (
                                                                <DatePicker.TableBodyRow key={week[0].day + '' + week[0].month}>
                                                                    <>
                                                                        {week.map((d) => {
                                                                            const events = getEventsForDate(d.day, d.month);
                                                                            const weekend = isWeekend(d);
                                                                            const selected = date && datepicker?.isDateEquals(date, d);

                                                                            return (
                                                                                <DatePicker.TableBodyCell
                                                                                    key={d.day + '' + d.month}
                                                                                    date={d}
                                                                                    className="p-0.5"
                                                                                >
                                                                                    <DatePicker.Day day={d} className="w-10 h-10 rounded-full">
                                                                                        <div className="flex flex-col items-center leading-none gap-0.5">
                                                                                            <span
                                                                                                className={`text-sm ${
                                                                                                    d.otherMonth
                                                                                                        ? 'text-surface-400 dark:text-surface-600'
                                                                                                        : weekend && !selected
                                                                                                          ? 'text-red-500 dark:text-red-400'
                                                                                                          : ''
                                                                                                }`}
                                                                                            >
                                                                                                {d.day}
                                                                                            </span>
                                                                                            {events.length > 0 && !d.otherMonth && (
                                                                                                <div className="flex gap-0.5">
                                                                                                    {events.slice(0, 3).map((event, i) => (
                                                                                                        <span
                                                                                                            key={i}
                                                                                                            title={event.label}
                                                                                                            className={`w-1 h-1 rounded-full ${selected ? DOT_COLORS[event.type].selected : DOT_COLORS[event.type].normal}`}
                                                                                                        />
                                                                                                    ))}
                                                                                                </div>
                                                                                            )}
                                                                                        </div>
                                                                                    </DatePicker.Day>
                                                                                </DatePicker.TableBodyCell>
                                                                            );
                                                                        })}
                                                                    </>
                                                                </DatePicker.TableBodyRow>
                                                            ))}
                                                        </>
                                                    );
                                                }}
                                            </DatePicker.TableBody>
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

type EventType = 'personal' | 'work' | 'holiday';

interface CalendarEvent {
    label: string;
    type: EventType;
}

const DOT_COLORS: Record<EventType, { normal: string; selected: string }> = {
    personal: {
        normal: 'bg-blue-500 dark:bg-blue-400',
        selected: 'bg-blue-200 dark:bg-blue-300'
    },
    work: {
        normal: 'bg-orange-500 dark:bg-orange-400',
        selected: 'bg-orange-200 dark:bg-orange-300'
    },
    holiday: {
        normal: 'bg-teal-500 dark:bg-teal-400',
        selected: 'bg-teal-200 dark:bg-teal-300'
    }
};

function getEventsForDate(day: number, month: number): CalendarEvent[] {
    const events: CalendarEvent[] = [];
    const d = new Date(2025, month, day);
    const dayOfWeek = d.getDay();

    // Work meetings on weekdays: Mon, Wed, Fri
    if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
        events.push({ label: 'Standup', type: 'work' });
    }

    // Personal events
    if (day === 5 || day === 14 || day === 22) {
        events.push({ label: 'Gym', type: 'personal' });
    }

    // Holidays
    if (
        (month === 0 && day === 1) ||
        (month === 1 && day === 14) ||
        (month === 4 && day === 1) ||
        (month === 11 && day === 25) ||
        (month === 11 && day === 31)
    ) {
        events.push({ label: 'Holiday', type: 'holiday' });
    }

    // Sprint reviews (every other Thursday)
    if (dayOfWeek === 4 && (day <= 7 || (day > 14 && day <= 21))) {
        events.push({ label: 'Sprint Review', type: 'work' });
    }

    // Unique types only
    const seen = new Set<EventType>();

    return events.filter((e) => {
        if (seen.has(e.type)) return false;

        seen.add(e.type);

        return true;
    });
}

function isWeekend(date: DatePickerDateMeta): boolean {
    const d = new Date(date.year, date.month, date.day);

    return d.getDay() === 0 || d.getDay() === 6;
}

```

### Arrow

Use `DatePicker.Arrow` inside the popup to display an arrow pointing to the trigger element. Set `sideOffset` on `DatePicker.Positioner` for spacing.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ArrowDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)} className="w-full md:w-56">
                <DatePicker.Input as={InputText} className="w-full" />
                <DatePicker.Portal>
                    <DatePicker.Positioner sideOffset={12}>
                        <DatePicker.Popup>
                            <DatePicker.Arrow />
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Inline

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';

import * as React from 'react';

export default function InlineDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} showWeek onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Body>
                    <DatePicker.Panel>
                        <DatePicker.Calendar>
                            <DatePicker.Header className="bg-transparent!">
                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                    <ChevronLeft />
                                </DatePicker.Prev>
                                <DatePicker.Title>
                                    <DatePicker.SelectMonth />
                                    <DatePicker.SelectYear />
                                    <DatePicker.Decade />
                                </DatePicker.Title>
                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                    <ChevronRight />
                                </DatePicker.Next>
                            </DatePicker.Header>
                            <DatePicker.Table>
                                <DatePicker.TableHead />
                                <DatePicker.TableBody />
                                <DatePicker.TableBody view="month" />
                                <DatePicker.TableBody view="year" />
                            </DatePicker.Table>
                        </DatePicker.Calendar>
                    </DatePicker.Panel>
                </DatePicker.Body>
            </DatePicker.Root>
        </div>
    );
}

```

### Inline Template

Custom content can be placed inside date cells in inline mode with the `DatePicker.TableHeadCell` component that takes a Date as a parameter.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import {
    DatePicker,
    type DatePickerBodyInstance,
    type DatePickerMonthData,
    type DatePickerRootValueChangeEvent,
    type DatePickerTableBodyInstance
} from '@primereact/ui/datepicker';
import * as React from 'react';

const getRandomNumber = (min: number = 30, max: number = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function InlineTemplateDemo() {
    const [value, setValue] = React.useState<Date | null>(null);
    const priceMapRef = React.useRef(new Map<string, number>());

    const getPrice = React.useCallback((year: number, month: number, day: number) => {
        const key = `${year}-${month}-${day}`;

        if (!priceMapRef.current.has(key)) {
            priceMapRef.current.set(key, getRandomNumber());
        }

        return priceMapRef.current.get(key)!;
    }, []);

    return (
        <div className="flex justify-center">
            <DatePicker.Root
                value={value}
                numberOfMonths={2}
                onValueChange={(event: DatePickerRootValueChangeEvent) => setValue(event.value as Date)}
            >
                <DatePicker.Body className="flex gap-4">
                    {(instance: DatePickerBodyInstance) => {
                        const { datepicker } = instance;
                        const months = datepicker?.months as DatePickerMonthData[];

                        return (
                            <>
                                {months?.map((month, groupIndex) => {
                                    return (
                                        <DatePicker.Panel key={groupIndex}>
                                            <DatePicker.Calendar>
                                                {groupIndex === 0 && (
                                                    <>
                                                        <DatePicker.Header className="bg-transparent!">
                                                            <DatePicker.Prev
                                                                as={Button}
                                                                iconOnly
                                                                variant="text"
                                                                rounded
                                                                severity="secondary"
                                                                size="small"
                                                            >
                                                                <ChevronLeft />
                                                            </DatePicker.Prev>
                                                            <DatePicker.Title>
                                                                <DatePicker.SelectMonth>
                                                                    {datepicker?.getMonthName?.(month.month)}
                                                                </DatePicker.SelectMonth>
                                                                <DatePicker.SelectYear>{month.year}</DatePicker.SelectYear>
                                                                <DatePicker.Decade />
                                                            </DatePicker.Title>
                                                        </DatePicker.Header>
                                                    </>
                                                )}
                                                {groupIndex === 1 && (
                                                    <>
                                                        <DatePicker.Header className="bg-transparent!">
                                                            <DatePicker.Title>
                                                                <DatePicker.SelectMonth>
                                                                    {datepicker?.getMonthName?.(month.month)}
                                                                </DatePicker.SelectMonth>
                                                                <DatePicker.SelectYear>{month.year}</DatePicker.SelectYear>
                                                                <DatePicker.Decade />
                                                            </DatePicker.Title>
                                                            <DatePicker.Next
                                                                as={Button}
                                                                iconOnly
                                                                variant="text"
                                                                rounded
                                                                severity="secondary"
                                                                size="small"
                                                            >
                                                                <ChevronRight />
                                                            </DatePicker.Next>
                                                        </DatePicker.Header>
                                                    </>
                                                )}
                                                <DatePicker.Table>
                                                    <DatePicker.TableHead />
                                                    <DatePicker.TableBody>
                                                        {(instance: DatePickerTableBodyInstance) => {
                                                            const { datepicker } = instance;
                                                            const month = datepicker?.getIndexedMonth?.(groupIndex) as DatePickerMonthData;

                                                            return (
                                                                <>
                                                                    {month.dates?.map((week) => (
                                                                        <DatePicker.TableBodyRow key={week[0].day + '' + week[0].month}>
                                                                            <>
                                                                                {week.map((date) => {
                                                                                    const today = new Date();

                                                                                    today.setHours(0, 0, 0, 0);
                                                                                    const currentDate = new Date(date.year, date.month, date.day);
                                                                                    const price =
                                                                                        currentDate >= today
                                                                                            ? getPrice(date.year, date.month, date.day)
                                                                                            : null;
                                                                                    const isLowPrice = price !== null && price < 50;
                                                                                    const selected = datepicker?.isSelected(date);

                                                                                    return (
                                                                                        <DatePicker.TableBodyCell
                                                                                            key={date.day + '' + date.month}
                                                                                            date={date}
                                                                                            className={`p-2! ${date.otherMonth ? 'invisible' : ''}`}
                                                                                        >
                                                                                            <DatePicker.Day
                                                                                                day={date}
                                                                                                className="w-12! h-12! rounded-lg!"
                                                                                            >
                                                                                                <div
                                                                                                    className={`flex flex-col items-center gap-1 min-w-[50px]`}
                                                                                                >
                                                                                                    <span className="font-semibold text-base">
                                                                                                        {date.day}
                                                                                                    </span>
                                                                                                    {price !== null && (
                                                                                                        <span
                                                                                                            className={`text-sm font-medium ${
                                                                                                                selected
                                                                                                                    ? isLowPrice
                                                                                                                        ? 'text-green-200 dark:text-green-900'
                                                                                                                        : 'opacity-70'
                                                                                                                    : isLowPrice
                                                                                                                      ? 'text-green-600 dark:text-green-400'
                                                                                                                      : 'text-surface-600 dark:text-surface-400'
                                                                                                            }`}
                                                                                                        >
                                                                                                            ${price}
                                                                                                        </span>
                                                                                                    )}
                                                                                                </div>
                                                                                            </DatePicker.Day>
                                                                                        </DatePicker.TableBodyCell>
                                                                                    );
                                                                                })}
                                                                            </>
                                                                        </DatePicker.TableBodyRow>
                                                                    ))}
                                                                </>
                                                            );
                                                        }}
                                                    </DatePicker.TableBody>
                                                </DatePicker.Table>
                                            </DatePicker.Calendar>
                                        </DatePicker.Panel>
                                    );
                                })}
                            </>
                        );
                    }}
                </DatePicker.Body>
            </DatePicker.Root>
        </div>
    );
}

```

### Float Label

FloatLabel visually integrates a label with its form element. Visit [FloatLabel](https://primereact.dev/docs/components/floatlabel) documentation for more information.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date3, setDate3] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                    <DatePicker.Input as={InputText} id="over_label" />
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <DatePicker.Root value={date2} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate2(event.value)}>
                    <DatePicker.Input as={InputText} id="in_label" />
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <DatePicker.Root value={date3} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate3(event.value)}>
                    <DatePicker.Input as={InputText} id="on_label" />
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}

```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function IftaLabelDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <IftaLabel>
                <DatePicker.Root value={date} variant="filled" onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                    <DatePicker.Input as={InputText} id="date" />
                    <DatePicker.Portal>
                        <DatePicker.Positioner>
                            <DatePicker.Popup>
                                <DatePicker.Body>
                                    <DatePicker.Panel>
                                        <DatePicker.Calendar>
                                            <DatePicker.Header>
                                                <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronLeft />
                                                </DatePicker.Prev>
                                                <DatePicker.Title>
                                                    <DatePicker.SelectMonth />
                                                    <DatePicker.SelectYear />
                                                    <DatePicker.Decade />
                                                </DatePicker.Title>
                                                <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                    <ChevronRight />
                                                </DatePicker.Next>
                                            </DatePicker.Header>
                                            <DatePicker.Table>
                                                <DatePicker.TableHead />
                                                <DatePicker.TableBody />
                                                <DatePicker.TableBody view="month" />
                                                <DatePicker.TableBody view="year" />
                                            </DatePicker.Table>
                                        </DatePicker.Calendar>
                                    </DatePicker.Panel>
                                </DatePicker.Body>
                            </DatePicker.Popup>
                        </DatePicker.Positioner>
                    </DatePicker.Portal>
                </DatePicker.Root>
                <Label htmlFor="date" className="mb-2">
                    Date
                </Label>
            </IftaLabel>
        </div>
    );
}

```

### Clear

When `DatePicker.Clear` component is used, a clear trigger is added to reset the DatePicker.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ClearTriggerDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <IconField.Root className="w-full">
                    <DatePicker.Input as={InputText} className="w-56!" />
                    <IconField.Inset>
                        <DatePicker.ClearTrigger>
                            <Times />
                        </DatePicker.ClearTrigger>
                    </IconField.Inset>
                </IconField.Root>
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Sizes

DatePicker provides `small` and `large` sizes as alternatives to the base.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';

import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function SizesDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date3, setDate3] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex flex-col items-center gap-4">
            <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input as={InputText} size="small" placeholder="Small" />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>

            <DatePicker.Root value={date2} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate2(event.value)}>
                <DatePicker.Input as={InputText} placeholder="Normal" />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>

            <DatePicker.Root value={date3} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate3(event.value)}>
                <DatePicker.Input as={InputText} size="large" placeholder="Large" />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Fluid

The fluid prop makes the component take up the full width of its container when set to true.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function FluidDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <DatePicker.Root value={date} fluid onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
            <DatePicker.Input as={InputText} fluid />
            <DatePicker.Portal>
                <DatePicker.Positioner>
                    <DatePicker.Popup>
                        <DatePicker.Body>
                            <DatePicker.Panel>
                                <DatePicker.Calendar>
                                    <DatePicker.Header>
                                        <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                            <ChevronLeft />
                                        </DatePicker.Prev>
                                        <DatePicker.Title>
                                            <DatePicker.SelectMonth />
                                            <DatePicker.SelectYear />
                                            <DatePicker.Decade />
                                        </DatePicker.Title>
                                        <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                            <ChevronRight />
                                        </DatePicker.Next>
                                    </DatePicker.Header>
                                    <DatePicker.Table>
                                        <DatePicker.TableHead />
                                        <DatePicker.TableBody />
                                        <DatePicker.TableBody view="month" />
                                        <DatePicker.TableBody view="year" />
                                    </DatePicker.Table>
                                </DatePicker.Calendar>
                            </DatePicker.Panel>
                        </DatePicker.Body>
                    </DatePicker.Popup>
                </DatePicker.Positioner>
            </DatePicker.Portal>
        </DatePicker.Root>
    );
}

```

### Filled

Specify the `filled` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function FilledDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input as={InputText} variant="filled" />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Disabled

Use the `disabled` property to disable a datepicker.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <DatePicker.Root>
                <DatePicker.Input as={InputText} disabled />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

### Invalid

Specify the `invalid` property to display the component with a red border.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';

import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function InvalidDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <DatePicker.Root value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input as={InputText} invalid={!date} placeholder="Date" />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
            <DatePicker.Root value={date2} variant="filled" onValueChange={(event: DatePickerRootValueChangeEvent) => setDate2(event.value)}>
                <DatePicker.Input as={InputText} invalid={!date2} placeholder="Date" />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/datepicker.md#api) for `DatePickerRoot`, `DatePickerInput`, `DatePickerPopup`, `DatePickerCalendar`, `DatePickerDay`, `DatePickerMonth`, `DatePickerYear`, and all other sub-component documentation.

### Hooks

See [Headless API](../../headless/components/datepicker.md#api) for `useDatePicker` hook documentation.

### Accessibility

See [DatePicker Primitive](../../primitive/components/datepicker.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-datepicker | Class name of the root element |
| p-datepicker-input | Class name of the input element |
| p-datepicker-clear-icon | Class name of the clear trigger element |
| p-datepicker-dropdown | Class name of the trigger element |
| p-datepicker-panel p-component | Class name of the panel element |
| p-datepicker-calendar-container | Class name of the container element |
| p-datepicker-calendar | Class name of the calendar element |
| p-datepicker-header | Class name of the header element |
| p-datepicker-prev-button | Class name of the prev element |
| p-datepicker-title | Class name of the title element |
| p-datepicker-select-month | Class name of the select month element |
| p-datepicker-select-year | Class name of the select year element |
| p-datepicker-decade | Class name of the decade element |
| p-datepicker-next-button | Class name of the next element |
| p-datepicker-day-view | Class name of the day view element |
| p-datepicker-weekheader p-disabled | Class name of the week header element |
| p-datepicker-weeknumber | Class name of the week number element |
| p-datepicker-weeklabel-container p-disabled | Class name of the week label container element |
| p-datepicker-weekday-cell | Class name of the week day cell element |
| p-datepicker-weekday | Class name of the week day element |
| p-datepicker-day-cell | Class name of the day cell element |
| p-datepicker-day | Class name of the day element |
| p-datepicker-month-view | Class name of the month view element |
| p-datepicker-month-cell | Class name of the month cell element |
| p-datepicker-month | Class name of the month element |
| p-datepicker-year-view | Class name of the year view element |
| p-datepicker-year-cell | Class name of the year cell element |
| p-datepicker-year | Class name of the year element |
| p-datepicker-time-picker | Class name of the time picker element |
| p-datepicker-hour-picker | Class name of the hour picker element |
| p-datepicker-increment-button | Class name of the increment button element |
| p-datepicker-decrement-button | Class name of the decrement button element |
| p-datepicker-separator | Class name of the separator element |
| p-datepicker-minute-picker | Class name of the minute picker element |
| p-datepicker-second-picker | Class name of the second picker element |
| p-datepicker-ampm-picker | Class name of the ampm picker element |
| p-datepicker-buttonbar | Class name of the buttonbar element |
| p-datepicker-today-button | Class name of the today element |
| p-datepicker-clear-button | Class name of the clear element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| datepicker.transition.duration | --p-datepicker-transition-duration | Transition duration of root |
| datepicker.panel.background | --p-datepicker-panel-background | Background of panel |
| datepicker.panel.border.color | --p-datepicker-panel-border-color | Border color of panel |
| datepicker.panel.color | --p-datepicker-panel-color | Color of panel |
| datepicker.panel.border.radius | --p-datepicker-panel-border-radius | Border radius of panel |
| datepicker.panel.shadow | --p-datepicker-panel-shadow | Shadow of panel |
| datepicker.panel.padding | --p-datepicker-panel-padding | Padding of panel |
| datepicker.header.background | --p-datepicker-header-background | Background of header |
| datepicker.header.border.color | --p-datepicker-header-border-color | Border color of header |
| datepicker.header.color | --p-datepicker-header-color | Color of header |
| datepicker.header.padding | --p-datepicker-header-padding | Padding of header |
| datepicker.title.gap | --p-datepicker-title-gap | Gap of title |
| datepicker.title.font.weight | --p-datepicker-title-font-weight | Font weight of title |
| datepicker.title.font.size | --p-datepicker-title-font-size | Font size of title |
| datepicker.dropdown.width | --p-datepicker-dropdown-width | Width of dropdown |
| datepicker.dropdown.sm.width | --p-datepicker-dropdown-sm-width | Sm width of dropdown |
| datepicker.dropdown.lg.width | --p-datepicker-dropdown-lg-width | Lg width of dropdown |
| datepicker.dropdown.border.color | --p-datepicker-dropdown-border-color | Border color of dropdown |
| datepicker.dropdown.hover.border.color | --p-datepicker-dropdown-hover-border-color | Hover border color of dropdown |
| datepicker.dropdown.active.border.color | --p-datepicker-dropdown-active-border-color | Active border color of dropdown |
| datepicker.dropdown.border.radius | --p-datepicker-dropdown-border-radius | Border radius of dropdown |
| datepicker.dropdown.focus.ring.width | --p-datepicker-dropdown-focus-ring-width | Focus ring width of dropdown |
| datepicker.dropdown.focus.ring.style | --p-datepicker-dropdown-focus-ring-style | Focus ring style of dropdown |
| datepicker.dropdown.focus.ring.color | --p-datepicker-dropdown-focus-ring-color | Focus ring color of dropdown |
| datepicker.dropdown.focus.ring.offset | --p-datepicker-dropdown-focus-ring-offset | Focus ring offset of dropdown |
| datepicker.dropdown.focus.ring.shadow | --p-datepicker-dropdown-focus-ring-shadow | Focus ring shadow of dropdown |
| datepicker.dropdown.background | --p-datepicker-dropdown-background | Background of dropdown |
| datepicker.dropdown.hover.background | --p-datepicker-dropdown-hover-background | Hover background of dropdown |
| datepicker.dropdown.active.background | --p-datepicker-dropdown-active-background | Active background of dropdown |
| datepicker.dropdown.color | --p-datepicker-dropdown-color | Color of dropdown |
| datepicker.dropdown.hover.color | --p-datepicker-dropdown-hover-color | Hover color of dropdown |
| datepicker.dropdown.active.color | --p-datepicker-dropdown-active-color | Active color of dropdown |
| datepicker.input.icon.color | --p-datepicker-input-icon-color | Color of input icon |
| datepicker.select.month.hover.background | --p-datepicker-select-month-hover-background | Hover background of select month |
| datepicker.select.month.color | --p-datepicker-select-month-color | Color of select month |
| datepicker.select.month.hover.color | --p-datepicker-select-month-hover-color | Hover color of select month |
| datepicker.select.month.padding | --p-datepicker-select-month-padding | Padding of select month |
| datepicker.select.month.border.radius | --p-datepicker-select-month-border-radius | Border radius of select month |
| datepicker.select.month.font.weight | --p-datepicker-select-month-font-weight | Font weight of select month |
| datepicker.select.month.font.size | --p-datepicker-select-month-font-size | Font size of select month |
| datepicker.select.year.hover.background | --p-datepicker-select-year-hover-background | Hover background of select year |
| datepicker.select.year.color | --p-datepicker-select-year-color | Color of select year |
| datepicker.select.year.hover.color | --p-datepicker-select-year-hover-color | Hover color of select year |
| datepicker.select.year.padding | --p-datepicker-select-year-padding | Padding of select year |
| datepicker.select.year.border.radius | --p-datepicker-select-year-border-radius | Border radius of select year |
| datepicker.select.year.font.weight | --p-datepicker-select-year-font-weight | Font weight of select year |
| datepicker.select.year.font.size | --p-datepicker-select-year-font-size | Font size of select year |
| datepicker.group.border.color | --p-datepicker-group-border-color | Border color of group |
| datepicker.group.gap | --p-datepicker-group-gap | Gap of group |
| datepicker.day.view.margin | --p-datepicker-day-view-margin | Margin of day view |
| datepicker.week.day.padding | --p-datepicker-week-day-padding | Padding of week day |
| datepicker.week.day.font.weight | --p-datepicker-week-day-font-weight | Font weight of week day |
| datepicker.week.day.font.size | --p-datepicker-week-day-font-size | Font size of week day |
| datepicker.week.day.color | --p-datepicker-week-day-color | Color of week day |
| datepicker.date.hover.background | --p-datepicker-date-hover-background | Hover background of date |
| datepicker.date.selected.background | --p-datepicker-date-selected-background | Selected background of date |
| datepicker.date.range.selected.background | --p-datepicker-date-range-selected-background | Range selected background of date |
| datepicker.date.color | --p-datepicker-date-color | Color of date |
| datepicker.date.hover.color | --p-datepicker-date-hover-color | Hover color of date |
| datepicker.date.selected.color | --p-datepicker-date-selected-color | Selected color of date |
| datepicker.date.range.selected.color | --p-datepicker-date-range-selected-color | Range selected color of date |
| datepicker.date.width | --p-datepicker-date-width | Width of date |
| datepicker.date.height | --p-datepicker-date-height | Height of date |
| datepicker.date.border.radius | --p-datepicker-date-border-radius | Border radius of date |
| datepicker.date.padding | --p-datepicker-date-padding | Padding of date |
| datepicker.date.focus.ring.width | --p-datepicker-date-focus-ring-width | Focus ring width of date |
| datepicker.date.focus.ring.style | --p-datepicker-date-focus-ring-style | Focus ring style of date |
| datepicker.date.focus.ring.color | --p-datepicker-date-focus-ring-color | Focus ring color of date |
| datepicker.date.focus.ring.offset | --p-datepicker-date-focus-ring-offset | Focus ring offset of date |
| datepicker.date.focus.ring.shadow | --p-datepicker-date-focus-ring-shadow | Focus ring shadow of date |
| datepicker.date.font.weight | --p-datepicker-date-font-weight | Font weight of date |
| datepicker.date.font.size | --p-datepicker-date-font-size | Font size of date |
| datepicker.month.view.margin | --p-datepicker-month-view-margin | Margin of month view |
| datepicker.month.padding | --p-datepicker-month-padding | Padding of month |
| datepicker.month.border.radius | --p-datepicker-month-border-radius | Border radius of month |
| datepicker.year.view.margin | --p-datepicker-year-view-margin | Margin of year view |
| datepicker.year.padding | --p-datepicker-year-padding | Padding of year |
| datepicker.year.border.radius | --p-datepicker-year-border-radius | Border radius of year |
| datepicker.buttonbar.padding | --p-datepicker-buttonbar-padding | Padding of buttonbar |
| datepicker.buttonbar.border.color | --p-datepicker-buttonbar-border-color | Border color of buttonbar |
| datepicker.time.picker.padding | --p-datepicker-time-picker-padding | Padding of time picker |
| datepicker.time.picker.border.color | --p-datepicker-time-picker-border-color | Border color of time picker |
| datepicker.time.picker.gap | --p-datepicker-time-picker-gap | Gap of time picker |
| datepicker.time.picker.button.gap | --p-datepicker-time-picker-button-gap | Button gap of time picker |
| datepicker.time.picker.color | --p-datepicker-time-picker-color | Color of time picker label |
| datepicker.time.picker.font.weight | --p-datepicker-time-picker-font-weight | Font weight of time picker label |
| datepicker.time.picker.font.size | --p-datepicker-time-picker-font-size | Font size of time picker label |
| datepicker.today.background | --p-datepicker-today-background | Background of today |
| datepicker.today.color | --p-datepicker-today-color | Color of today |
