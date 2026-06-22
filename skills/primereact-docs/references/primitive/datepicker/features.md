# DatePicker

An unstyled date picker component with calendar navigation, view switching, and time selection.

Build fully custom date pickers with complete control over layout and styling.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from 'primereact/datepicker';
import * as React from 'react';
import styles from './basic-demo.module.css';

export default function BasicDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    return (
        <div className={styles.wrapper}>
            <DatePicker.Root className={styles.root} value={date} onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input placeholder="mm/dd/yy" className={styles.input} />
                <DatePicker.Portal>
                    <DatePicker.Positioner>
                        <DatePicker.Popup className={styles.popup}>
                            <DatePicker.Calendar>
                                <DatePicker.Header className={styles.header}>
                                    <DatePicker.Prev className={styles.navButton}>
                                        <ChevronLeft className={styles.navIcon} />
                                    </DatePicker.Prev>
                                    <DatePicker.Title className={styles.title}>
                                        <DatePicker.SelectMonth className={styles.viewButton} />
                                        <DatePicker.SelectYear className={styles.viewButton} />
                                        <DatePicker.Decade />
                                    </DatePicker.Title>
                                    <DatePicker.Next className={styles.navButton}>
                                        <ChevronRight className={styles.navIcon} />
                                    </DatePicker.Next>
                                </DatePicker.Header>
                                <DatePicker.Table className={styles.table}>
                                    <DatePicker.TableHead />
                                    <DatePicker.TableBody />
                                    <DatePicker.TableBody view="month" />
                                    <DatePicker.TableBody view="year" />
                                </DatePicker.Table>
                            </DatePicker.Calendar>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}
```

## Features

- Compound component API with sub-components: `Root`, `Input`, `Trigger`, `Value`, `Clear`, `ClearTrigger`, `Portal`, `Positioner`, `Arrow`, `Popup`, `Panel`, `Calendar`, `CalendarContainer`, `Header`, `Prev`, `Next`, `Title`, `SelectMonth`, `SelectYear`, `Decade`, `Table`, `TableHead`, `TableHeadRow`, `TableHeadCell`, `TableHeadWeekCell`, `TableHeadWeekLabel`, `TableHeadWeekHeaderLabel`, `TableBody`, `TableBodyRow`, `TableBodyCell`, `TableBodyWeekCell`, `TableBodyWeekLabel`, `Day`, `Month`, `Year`, `Time`, `Picker`, `Hour`, `Minute`, `Second`, `AmPm`, `Increment`, `Decrement`, `Separator`, `Buttonbar`, `Footer`, `Today`
- Three calendar views — date, month, and year — with animated navigation between months, years, and decades
- Single, multiple, and range date selection with keyboard focus cycling
- Integrated time picker with 12/24 hour format, minute, and second controls

## Usage

```tsx
import { DatePicker } from 'primereact/datepicker';
```

```tsx
<DatePicker.Root>
    <DatePicker.Input />
    <DatePicker.Portal>
        <DatePicker.Positioner>
            <DatePicker.Popup>
                <DatePicker.Arrow />
                <DatePicker.Calendar>
                    <DatePicker.Header>
                        <DatePicker.Prev></DatePicker.Prev>
                        <DatePicker.Title>
                            <DatePicker.SelectMonth />
                            <DatePicker.SelectYear />
                            <DatePicker.Decade />
                        </DatePicker.Title>
                        <DatePicker.Next></DatePicker.Next>
                    </DatePicker.Header>
                    <DatePicker.Table>
                        <DatePicker.TableHead />
                        <DatePicker.TableBody />
                        <DatePicker.TableBody view="month" />
                        <DatePicker.TableBody view="year" />
                    </DatePicker.Table>
                    <DatePicker.Buttonbar>
                        <DatePicker.Today></DatePicker.Today>
                        <DatePicker.ClearTrigger></DatePicker.ClearTrigger>
                    </DatePicker.Buttonbar>
                </DatePicker.Calendar>
                <DatePicker.Time>
                    <DatePicker.Picker type="hour">
                        <DatePicker.Increment></DatePicker.Increment>
                        <DatePicker.Hour />
                        <DatePicker.Decrement></DatePicker.Decrement>
                    </DatePicker.Picker>
                    <DatePicker.Separator />
                    <DatePicker.Picker type="minute">
                        <DatePicker.Increment></DatePicker.Increment>
                        <DatePicker.Minute />
                        <DatePicker.Decrement></DatePicker.Decrement>
                    </DatePicker.Picker>
                </DatePicker.Time>
            </DatePicker.Popup>
        </DatePicker.Positioner>
    </DatePicker.Portal>
</DatePicker.Root>
```

## Behavior

### Motion Animation

```tsx
<DatePicker.Popup motionProps={{ name: 'p-datepicker' }}>...</DatePicker.Popup>
```

See [Motion](../motion/features.md) for animation phases, CSS variables, and hide strategies.

### Polymorphic Rendering

Use `as` on any sub-component to change the rendered HTML element.

```tsx
<DatePicker.Root as="section">
    <DatePicker.Input as="div" />
    <DatePicker.Prev as="a">...</DatePicker.Prev>
</DatePicker.Root>
```

### Render Function Children

`DatePicker.TableBody`, `DatePicker.TableHead`, and other container components accept a render function as children, providing access to the component instance for custom cell rendering.

```tsx
<DatePicker.TableBody>
    {(instance) =>
        instance.datepicker?.months[0]?.dates.map((week, weekIndex) => (
            <DatePicker.TableBodyRow key={weekIndex}>
                {week.map((date, dateIndex) => (
                    <DatePicker.TableBodyCell key={dateIndex} date={date}>
                        <DatePicker.Day>{date.day}</DatePicker.Day>
                    </DatePicker.TableBodyCell>
                ))}
            </DatePicker.TableBodyRow>
        ))
    }
</DatePicker.TableBody>
```

## Pass Through

**Pass Through example:**

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';

import * as React from 'react';

export default function DatePickerPTDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root
                value={date}
                className="w-full sm:w-120"
                showWeek
                onValueChange={(event: DatePickerRootValueChangeEvent) => setDate(event.value)}
            >
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
            </DatePicker.Root>
        </div>
    );
}
```

## API

### DatePickerRoot

> **API/props table for `DatePickerRoot` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-scope`    | `"datepicker"`         |
| `data-part`     | `"root"`               |
| `data-disabled` | Present when disabled  |
| `data-invalid`  | Present when invalid   |
| `data-readonly` | Present when read-only |

> **API/props table for `DatePickerRoot` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerInput

> **API/props table for `DatePickerInput` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"input"`      |

> **API/props table for `DatePickerInput` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTrigger

> **API/props table for `DatePickerTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"trigger"`    |

### DatePickerValue

> **API/props table for `DatePickerValue` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"value"`      |

### DatePickerClear

> **API/props table for `DatePickerClear` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"clear"`      |

> **API/props table for `DatePickerClear` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerClearTrigger

> **API/props table for `DatePickerClearTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value             |
| ------------ | ----------------- |
| `data-scope` | `"datepicker"`    |
| `data-part`  | `"clear-trigger"` |

> **API/props table for `DatePickerClearTrigger` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerPortal

> **API/props table for `DatePickerPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"portal"`     |

> **API/props table for `DatePickerPortal` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerPositioner

> **API/props table for `DatePickerPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-scope` | `"datepicker"`                                             |
| `data-part`  | `"positioner"`                                             |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align` | `"start"` \| `"center"` \| `"end"` — alignment             |

**CSS Custom Properties**

The positioner element exposes CSS custom properties for layout and transform control.

| CSS Variable                | Description                              |
| --------------------------- | ---------------------------------------- |
| `--available-height`        | Available vertical space in pixels       |
| `--available-width`         | Available horizontal space in pixels     |
| `--transform-origin`        | Computed transform origin for animations |
| `--positioner-anchor-width` | Width of the anchor/trigger element      |

### DatePickerPopup

> **API/props table for `DatePickerPopup` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                      |
| ------------ | -------------------------- |
| `data-scope` | `"datepicker"`             |
| `data-part`  | `"popup"`                  |
| `data-open`  | Present when popup is open |

### DatePickerArrow

> **API/props table for `DatePickerArrow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| `data-scope` | `"datepicker"`                                             |
| `data-part`  | `"arrow"`                                                  |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` — placement |
| `data-align` | `"start"` \| `"center"` \| `"end"` — alignment             |

**CSS Custom Properties**

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

### DatePickerPanel

> **API/props table for `DatePickerPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"panel"`      |

> **API/props table for `DatePickerPanel` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerCalendar

> **API/props table for `DatePickerCalendar` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"calendar"`   |

> **API/props table for `DatePickerCalendar` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerCalendarContainer

> **API/props table for `DatePickerCalendarContainer` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                 |
| ------------ | --------------------- |
| `data-scope` | `"datepicker"`        |
| `data-part`  | `"calendarContainer"` |

### DatePickerHeader

> **API/props table for `DatePickerHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"header"`     |

> **API/props table for `DatePickerHeader` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerPrev

> **API/props table for `DatePickerPrev` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"prev"`       |

> **API/props table for `DatePickerPrev` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerNext

> **API/props table for `DatePickerNext` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"next"`       |

> **API/props table for `DatePickerNext` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTitle

> **API/props table for `DatePickerTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"title"`      |

> **API/props table for `DatePickerTitle` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerSelectMonth

> **API/props table for `DatePickerSelectMonth` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"datepicker"`   |
| `data-part`  | `"select-month"` |

> **API/props table for `DatePickerSelectMonth` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerSelectYear

> **API/props table for `DatePickerSelectYear` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"datepicker"`  |
| `data-part`  | `"select-year"` |

> **API/props table for `DatePickerSelectYear` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerDecade

> **API/props table for `DatePickerDecade` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"decade"`     |

> **API/props table for `DatePickerDecade` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTable

> **API/props table for `DatePickerTable` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"table"`      |

> **API/props table for `DatePickerTable` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableHead

> **API/props table for `DatePickerTableHead` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"datepicker"`  |
| `data-part`  | `"tableHeader"` |

> **API/props table for `DatePickerTableHead` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableHeadRow

> **API/props table for `DatePickerTableHeadRow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value              |
| ------------ | ------------------ |
| `data-scope` | `"datepicker"`     |
| `data-part`  | `"tableHeaderRow"` |

> **API/props table for `DatePickerTableHeadRow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableHeadCell

> **API/props table for `DatePickerTableHeadCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"datepicker"`  |
| `data-part`  | `"weekDayCell"` |

> **API/props table for `DatePickerTableHeadCell` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableHeadWeekCell

> **API/props table for `DatePickerTableHeadWeekCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"weekHeader"` |

> **API/props table for `DatePickerTableHeadWeekCell` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableHeadWeekLabel

> **API/props table for `DatePickerTableHeadWeekLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"weekDay"`    |

### DatePickerTableHeadWeekHeaderLabel

> **API/props table for `DatePickerTableHeadWeekHeaderLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value               |
| ------------ | ------------------- |
| `data-scope` | `"datepicker"`      |
| `data-part`  | `"weekHeaderLabel"` |

### DatePickerTableBody

> **API/props table for `DatePickerTableBody` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"tableBody"`  |

> **API/props table for `DatePickerTableBody` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableBodyRow

> **API/props table for `DatePickerTableBodyRow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"datepicker"`   |
| `data-part`  | `"tableBodyRow"` |

> **API/props table for `DatePickerTableBodyRow` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableBodyCell

> **API/props table for `DatePickerTableBodyCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"cell"`       |

> **API/props table for `DatePickerTableBodyCell` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableBodyWeekCell

> **API/props table for `DatePickerTableBodyWeekCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"weekNumber"` |

> **API/props table for `DatePickerTableBodyWeekCell` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerTableBodyWeekLabel

> **API/props table for `DatePickerTableBodyWeekLabel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"weekLabel"`  |

### DatePickerDay

> **API/props table for `DatePickerDay` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute          | Value                        |
| ------------------ | ---------------------------- |
| `data-scope`       | `"datepicker"`               |
| `data-part`        | `"day"`                      |
| `data-selected`    | `"true"` when selected       |
| `data-disabled`    | `"true"` when disabled       |
| `data-today`       | `"true"` on today's date     |
| `data-other-month` | `"true"` for adjacent months |

### DatePickerMonth

> **API/props table for `DatePickerMonth` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-scope`    | `"datepicker"`         |
| `data-part`     | `"month"`              |
| `data-selected` | `"true"` when selected |
| `data-disabled` | `"true"` when disabled |

### DatePickerYear

> **API/props table for `DatePickerYear` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute       | Value                  |
| --------------- | ---------------------- |
| `data-scope`    | `"datepicker"`         |
| `data-part`     | `"year"`               |
| `data-selected` | `"true"` when selected |
| `data-disabled` | `"true"` when disabled |

### DatePickerTime

> **API/props table for `DatePickerTime` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"timePicker"` |

> **API/props table for `DatePickerTime` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerPicker

> **API/props table for `DatePickerPicker` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                                    |
| ------------ | ------------------------------------------------------------------------ |
| `data-scope` | `"datepicker"`                                                           |
| `data-part`  | `"hourPicker"` \| `"minutePicker"` \| `"secondPicker"` \| `"ampmPicker"` |

> **API/props table for `DatePickerPicker` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerHour

> **API/props table for `DatePickerHour` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"hour"`       |

> **API/props table for `DatePickerHour` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerMinute

> **API/props table for `DatePickerMinute` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"minute"`     |

> **API/props table for `DatePickerMinute` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerSecond

> **API/props table for `DatePickerSecond` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"second"`     |

> **API/props table for `DatePickerSecond` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerAmPm

> **API/props table for `DatePickerAmPm` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"ampm"`       |

> **API/props table for `DatePickerAmPm` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerIncrement

> **API/props table for `DatePickerIncrement` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"increment"`  |

> **API/props table for `DatePickerIncrement` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerDecrement

> **API/props table for `DatePickerDecrement` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"decrement"`  |

> **API/props table for `DatePickerDecrement` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerSeparator

> **API/props table for `DatePickerSeparator` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"separator"`  |

### DatePickerButtonbar

> **API/props table for `DatePickerButtonbar` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"buttonbar"`  |

> **API/props table for `DatePickerButtonbar` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerFooter

> **API/props table for `DatePickerFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"footer"`     |

> **API/props table for `DatePickerFooter` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerToday

> **API/props table for `DatePickerToday` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"today"`      |

> **API/props table for `DatePickerToday` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

### DatePickerDropdown

> **API/props table for `DatePickerDropdown` (`pt`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

### Screen Reader

Value to describe the component can either be provided via `label` tag combined with `inputId` prop or using `aria-labelledby`, `aria-label` props. The input element has `combobox` role in addition to `aria-autocomplete` as "none", `aria-haspopup` as "dialog" and `aria-expanded` attributes. The relation between the input and the popup is created with `aria-controls` attribute that refers to the id of the popup.

The optional datepicker button requires includes `aria-haspopup`, `aria-expanded` for states along with `aria-controls` to define the relation between the popup and the button.

Popup has a `dialog` role along with `aria-modal` and `aria-label`. The navigation buttons at the header have an `aria-label` retrieved from the locale aria API. Similarly month picker button uses the `chooseMonth` and year picker button uses the `chooseYear` keys.

Main date table uses `grid` role that contains th elements with `col` as the scope along with `abbr` tag resolving to the full name of the month. Each date cell has an `aria-label` referring to the full date value. Buttons at the footer utilize their readable labels as `aria-label` as well. Selected date also receives the `aria-selected` attribute.

Timepicker spinner buttons get their labels for `aria-label` from the aria locale API using the `prevHour`, `nextHour`, `prevMinute`, `nextMinute`, `prevSecond`, `nextSecond`, `am` and `pm` keys.

DatePicker also includes a hidden section that is only available to screen readers with `aria-live` as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.

### Choose Date Button Keyboard Support

| Key     | Function                                                                             |
| ------- | ------------------------------------------------------------------------------------ |
| `space` | Opens popup and moves focus to the selected date, if there is none focuses on today. |
| `enter` | Opens popup and moves focus to the selected date, if there is none focuses on today. |

### Popup Keyboard Support

| Key             | Function                                                    |
| --------------- | ----------------------------------------------------------- |
| `escape`        | Closes the popup and moves focus to the input element.      |
| `tab`           | Moves focus to the next focusable element within the popup. |
| `shift` + `tab` | Moves focus to the next focusable element within the popup. |

### Header Buttons Keyboard Support

| Key     | Function                    |
| ------- | --------------------------- |
| `enter` | Triggers the button action. |
| `space` | Triggers the button action. |

### Date Grid Keyboard Support

| Key                   | Function                                                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `enter`               | Selects the date, closes the popup and moves focus to the input element.                                                                |
| `space`               | Closes the popup and moves focus to the input element.                                                                                  |
| `up arrow`            | Moves focus to the same day of the previous week.                                                                                       |
| `alt` + `up arrow`    | Closes the popup and moves focus to the input element.                                                                                  |
| `down arrow`          | Moves focus to the same day of the next week.                                                                                           |
| `right arrow`         | Moves focus to the next day.                                                                                                            |
| `left arrow`          | Moves focus to the previous day.                                                                                                        |
| `home`                | Moves focus to the first day of the current week.                                                                                       |
| `end`                 | Moves focus to the last day of the current week.                                                                                        |
| `page up`             | Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker. |
| `shift` + `page up`   | Changes the date to previous year in date picker mode. Has no effect in month or year picker.                                           |
| `page down`           | Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker.             |
| `shift` + `page down` | Changes the date to next year in date picker mode. Has no effect in month or year picker.                                               |

### Footer Buttons Keyboard Support

| Key     | Function                    |
| ------- | --------------------------- |
| `enter` | Triggers the button action. |
| `space` | Triggers the button action. |
