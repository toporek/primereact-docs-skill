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

- Compound component API with sub-components: `Root`, `Input`, `Trigger`, `Value`, `Clear`, `ClearTrigger`, `Portal`, `Positioner`, `Arrow`, `Popup`, `Body`, `Panel`, `Calendar`, `Header`, `Prev`, `Next`, `Title`, `SelectMonth`, `SelectYear`, `Decade`, `Table`, `TableHead`, `TableHeadRow`, `TableHeadCell`, `TableHeadWeekCell`, `TableHeadWeekLabel`, `TableHeadWeekHeaderLabel`, `TableBody`, `TableBodyRow`, `TableBodyCell`, `TableBodyWeekCell`, `TableBodyWeekLabel`, `Day`, `Month`, `Year`, `Time`, `Picker`, `Hour`, `Minute`, `Second`, `AmPm`, `Increment`, `Decrement`, `Separator`, `Buttonbar`, `Footer`, `Today`
- Three calendar views, date, month, and year, with animated navigation between months, years, and decades
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

See [Motion](motion.md) for animation phases, CSS variables, and hide strategies.

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

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerRootPassThroughType> | Used to pass attributes to the root's DOM element. |
| pcInputText | DatePickerRootPassThroughType> | Used to pass attributes to the input's DOM element. |
| panel | DatePickerRootPassThroughType> | Used to pass attributes to the panel's DOM element. |
| calendarContainer | DatePickerRootPassThroughType> | Used to pass attributes to the calendarContainer's DOM element. |
| calendar | DatePickerRootPassThroughType> | Used to pass attributes to the calendar's DOM element. |
| header | DatePickerRootPassThroughType> | Used to pass attributes to the header's DOM element. |
| prev | DatePickerRootPassThroughType> | Used to pass attributes to the prev's DOM element. |
| title | DatePickerRootPassThroughType> | Used to pass attributes to the title's DOM element. |
| selectMonth | DatePickerRootPassThroughType> | Used to pass attributes to the selectMonth's DOM element. |
| selectYear | DatePickerRootPassThroughType> | Used to pass attributes to the selectYear's DOM element. |
| decade | DatePickerRootPassThroughType> | Used to pass attributes to the decade's DOM element. |
| next | DatePickerRootPassThroughType> | Used to pass attributes to the next's DOM element. |
| dayView | DatePickerRootPassThroughType> | Used to pass attributes to the dayView's DOM element. |
| monthView | DatePickerRootPassThroughType> | Used to pass attributes to the monthView's DOM element. |
| yearView | DatePickerRootPassThroughType> | Used to pass attributes to the yearView's DOM element. |
| tableHeader | DatePickerRootPassThroughType> | Used to pass attributes to the tableHeader's DOM element. |
| tableHeaderRow | DatePickerRootPassThroughType> | Used to pass attributes to the tableHeaderRow's DOM element. |
| weekDayCell | DatePickerRootPassThroughType> | Used to pass attributes to the weekDayCell's DOM element. |
| weekDay | DatePickerRootPassThroughType> | Used to pass attributes to the weekDay's DOM element. |
| weekHeader | DatePickerRootPassThroughType> | Used to pass attributes to the weekHeader's DOM element. |
| weekHeaderLabel | DatePickerRootPassThroughType> | Used to pass attributes to the weekHeaderLabel's DOM element. |
| tableBody | DatePickerRootPassThroughType> | Used to pass attributes to the tableBody's DOM element. |
| tableBodyRow | DatePickerRootPassThroughType> | Used to pass attributes to the tableBodyRow's DOM element. |
| dayCell | DatePickerRootPassThroughType> | Used to pass attributes to the dayCell's DOM element. |
| monthCell | DatePickerRootPassThroughType> | Used to pass attributes to the monthCell's DOM element. |
| yearCell | DatePickerRootPassThroughType> | Used to pass attributes to the yearCell's DOM element. |
| weekNumber | DatePickerRootPassThroughType> | Used to pass attributes to the weekNumber's DOM element. |
| weekLabel | DatePickerRootPassThroughType> | Used to pass attributes to the weekLabel's DOM element. |
| buttonbar | DatePickerRootPassThroughType> | Used to pass attributes to the buttonbar's DOM element. |
| today | DatePickerRootPassThroughType> | Used to pass attributes to the today's DOM element. |
| clear | DatePickerRootPassThroughType> | Used to pass attributes to the clear's DOM element. |
| timePicker | DatePickerRootPassThroughType> | Used to pass attributes to the timePicker's DOM element. |
| hourPicker | DatePickerRootPassThroughType> | Used to pass attributes to the hourPicker's DOM element. |
| minutePicker | DatePickerRootPassThroughType> | Used to pass attributes to the minutePicker's DOM element. |
| secondPicker | DatePickerRootPassThroughType> | Used to pass attributes to the secondPicker's DOM element. |
| ampmPicker | DatePickerRootPassThroughType> | Used to pass attributes to the ampmPicker's DOM element. |
| increment | DatePickerRootPassThroughType> | Used to pass attributes to the increment's DOM element. |
| decrement | DatePickerRootPassThroughType> | Used to pass attributes to the decrement's DOM element. |
| hour | DatePickerRootPassThroughType> | Used to pass attributes to the hour's DOM element. |
| minute | DatePickerRootPassThroughType> | Used to pass attributes to the minute's DOM element. |
| second | DatePickerRootPassThroughType> | Used to pass attributes to the second's DOM element. |
| ampm | DatePickerRootPassThroughType> | Used to pass attributes to the ampm's DOM element. |
| separator | DatePickerRootPassThroughType> | Used to pass attributes to the separator's DOM element. |
| clearTrigger | DatePickerRootPassThroughType> | Used to pass attributes to the clearTrigger's DOM element. |
| trigger | DatePickerRootPassThroughType> | Used to pass attributes to the trigger's DOM element. |
| positioner | DatePickerRootPassThroughType> | Used to pass attributes to the positioner's DOM element. |
| popup | DatePickerRootPassThroughType> | Used to pass attributes to the popup's DOM element. |
| arrow | DatePickerRootPassThroughType> | Used to pass attributes to the arrow's DOM element. |
| day | DatePickerRootPassThroughType> | Used to pass attributes to the day's DOM element. |
| month | DatePickerRootPassThroughType> | Used to pass attributes to the month's DOM element. |
| year | DatePickerRootPassThroughType> | Used to pass attributes to the year's DOM element. |
| value | DatePickerRootPassThroughType> | Used to pass attributes to the value's DOM element. |
| footer | DatePickerRootPassThroughType> | Used to pass attributes to the footer's DOM element. |

### DatePickerInput

> **API/props table for `DatePickerInput` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"input"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerInputPassThroughType> | Used to pass attributes to the root's DOM element. |

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

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerClearPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerClearTrigger

> **API/props table for `DatePickerClearTrigger` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value             |
| ------------ | ----------------- |
| `data-scope` | `"datepicker"`    |
| `data-part`  | `"clear-trigger"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerClearTriggerPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerPortal

> **API/props table for `DatePickerPortal` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"portal"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerPortalPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerPositioner

> **API/props table for `DatePickerPositioner` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| `data-scope` | `"datepicker"`                                            |
| `data-part`  | `"positioner"`                                            |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align` | `"start"` \| `"center"` \| `"end"`, alignment             |

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

| Attribute    | Value                                                     |
| ------------ | --------------------------------------------------------- |
| `data-scope` | `"datepicker"`                                            |
| `data-part`  | `"arrow"`                                                 |
| `data-side`  | `"top"` \| `"bottom"` \| `"left"` \| `"right"`, placement |
| `data-align` | `"start"` \| `"center"` \| `"end"`, alignment             |

**CSS Custom Properties**

The arrow element exposes CSS custom properties for dynamic positioning:

| CSS Variable          | Description                    |
| --------------------- | ------------------------------ |
| `--placer-arrow-x`    | Horizontal offset of arrow     |
| `--placer-arrow-y`    | Vertical offset of arrow       |
| `--placer-arrow-left` | Left position of arrow element |
| `--placer-arrow-top`  | Top position of arrow element  |

### DatePickerBody

> **API/props table for `DatePickerBody` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"body"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerBodyPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerPanel

> **API/props table for `DatePickerPanel` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"panel"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerPanelPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerCalendar

> **API/props table for `DatePickerCalendar` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"calendar"`   |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerCalendarPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerHeader

> **API/props table for `DatePickerHeader` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"header"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerHeaderPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerPrev

> **API/props table for `DatePickerPrev` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"prev"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerPrevPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerNext

> **API/props table for `DatePickerNext` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"next"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerNextPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTitle

> **API/props table for `DatePickerTitle` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"title"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTitlePassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerSelectMonth

> **API/props table for `DatePickerSelectMonth` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"datepicker"`   |
| `data-part`  | `"select-month"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerSelectMonthPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerSelectYear

> **API/props table for `DatePickerSelectYear` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"datepicker"`  |
| `data-part`  | `"select-year"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerSelectYearPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerDecade

> **API/props table for `DatePickerDecade` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"decade"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerDecadePassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTable

> **API/props table for `DatePickerTable` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"table"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTablePassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTableHead

> **API/props table for `DatePickerTableHead` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"datepicker"`  |
| `data-part`  | `"tableHeader"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTableHeadPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTableHeadRow

> **API/props table for `DatePickerTableHeadRow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value              |
| ------------ | ------------------ |
| `data-scope` | `"datepicker"`     |
| `data-part`  | `"tableHeaderRow"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTableHeadRowPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTableHeadCell

> **API/props table for `DatePickerTableHeadCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value           |
| ------------ | --------------- |
| `data-scope` | `"datepicker"`  |
| `data-part`  | `"weekDayCell"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTableHeadCellPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTableHeadWeekCell

> **API/props table for `DatePickerTableHeadWeekCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"weekHeader"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTableHeadWeekCellPassThroughType> | Used to pass attributes to the root's DOM element. |

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

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTableBodyPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTableBodyRow

> **API/props table for `DatePickerTableBodyRow` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value            |
| ------------ | ---------------- |
| `data-scope` | `"datepicker"`   |
| `data-part`  | `"tableBodyRow"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTableBodyRowPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTableBodyCell

> **API/props table for `DatePickerTableBodyCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"cell"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTableBodyCellPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerTableBodyWeekCell

> **API/props table for `DatePickerTableBodyWeekCell` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"weekNumber"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTableBodyWeekCellPassThroughType> | Used to pass attributes to the root's DOM element. |

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

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTimePassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerPicker

> **API/props table for `DatePickerPicker` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value                                                                    |
| ------------ | ------------------------------------------------------------------------ |
| `data-scope` | `"datepicker"`                                                           |
| `data-part`  | `"hourPicker"` \| `"minutePicker"` \| `"secondPicker"` \| `"ampmPicker"` |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerPickerPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerHour

> **API/props table for `DatePickerHour` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"hour"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerHourPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerMinute

> **API/props table for `DatePickerMinute` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"minute"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerMinutePassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerSecond

> **API/props table for `DatePickerSecond` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"second"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerSecondPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerAmPm

> **API/props table for `DatePickerAmPm` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"ampm"`       |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerAmPmPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerIncrement

> **API/props table for `DatePickerIncrement` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"increment"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerIncrementPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerDecrement

> **API/props table for `DatePickerDecrement` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"decrement"`  |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerDecrementPassThroughType> | Used to pass attributes to the root's DOM element. |

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

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerButtonbarPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerFooter

> **API/props table for `DatePickerFooter` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"footer"`     |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerFooterPassThroughType> | Used to pass attributes to the root's DOM element. |

### DatePickerToday

> **API/props table for `DatePickerToday` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

| Attribute    | Value          |
| ------------ | -------------- |
| `data-scope` | `"datepicker"` |
| `data-part`  | `"today"`      |

| Label | Type | Description |
|:------|:------|:------|
| root | DatePickerTodayPassThroughType> | Used to pass attributes to the root's DOM element. |

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
