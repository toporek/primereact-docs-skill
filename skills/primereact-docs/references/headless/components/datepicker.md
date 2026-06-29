# useDatePicker

Hook that manages date picker state, calendar navigation, view switching, and popup positioning.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { useDatePicker } from '@primereact/headless/datepicker';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import type { UseDatePickerDateMeta, UseDatePickerMonthData } from '@primereact/types/headless/datepicker';
import * as React from 'react';
import { createPortal } from 'react-dom';

export default function BasicDemo() {
    const [date, setDate] = React.useState<Date | null>(null);

    const datepicker = useDatePicker({
        value: date,
        onValueChange: (e) => setDate(e.value as Date | null)
    });

    const {
        rootProps,
        inputProps,
        popupProps,
        positionerProps,
        bodyProps,
        panelProps,
        calendarProps,
        headerProps,
        titleProps,
        prevProps,
        nextProps,
        selectMonthProps,
        selectYearProps,
        getTableProps,
        tableHeaderProps,
        tableHeaderRowProps,
        weekDayCellProps,
        tableBodyProps,
        tableBodyRowProps,
        getTableBodyCellProps,
        getDayProps,
        getMonthProps,
        getYearProps,
        decadeProps,
        state,
        months,
        weekDays,
        monthPickerValues,
        yearPickerValues,
        getMonthName,
        getYear
    } = datepicker;

    const portal = usePortal();

    usePositioner({
        anchor: state.anchorElement,
        content: state.positionerElement,
        side: 'bottom',
        align: 'start',
        sideOffset: 4,
        flip: true,
        shift: true
    });

    const renderDateView = (month: UseDatePickerMonthData, groupIndex: number) => (
        <table {...getTableProps()} className="w-full border-collapse">
            <thead {...tableHeaderProps}>
                {state.currentView === 'date' && (
                    <tr {...tableHeaderRowProps}>
                        {(weekDays as string[]).map((day: string, i: number) => (
                            <th key={i} {...weekDayCellProps} abbr={day} className="p-1.5 text-xs font-medium text-surface-500 dark:text-surface-400">
                                {day}
                            </th>
                        ))}
                    </tr>
                )}
            </thead>
            <tbody {...tableBodyProps}>
                {month.dates.map((week: UseDatePickerDateMeta[], weekIndex: number) => (
                    <tr key={weekIndex} {...tableBodyRowProps}>
                        {week.map((date: UseDatePickerDateMeta, dateIndex: number) => {
                            const dayProps = getDayProps(date, groupIndex);

                            return (
                                <td key={dateIndex} {...getTableBodyCellProps(date)} className="p-0.5 text-center">
                                    <span
                                        {...dayProps}
                                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm cursor-pointer select-none transition-colors
                                            ${date.today ? 'font-semibold text-primary' : ''}
                                            ${date.otherMonth ? 'text-surface-300 dark:text-surface-600' : 'text-surface-700 dark:text-surface-0'}
                                            ${!date.selectable ? 'pointer-events-none opacity-40' : ''}
                                            hover:bg-surface-100 dark:hover:bg-surface-800
                                            outline-0 outline-primary focus-visible:outline-1 focus-visible:outline-offset-1
                                            data-[selected=true]:bg-primary data-[selected=true]:text-primary-contrast data-[selected=true]:hover:bg-primary-emphasis`}
                                    >
                                        {date.day}
                                    </span>
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderMonthView = () => (
        <table {...getTableProps()} className="w-full border-collapse">
            <tbody {...tableBodyProps}>
                {Array.from({ length: 4 }, (_, rowIndex) => (
                    <tr key={rowIndex} {...tableBodyRowProps}>
                        {monthPickerValues.slice(rowIndex * 3, rowIndex * 3 + 3).map((m, colIndex) => {
                            const index = rowIndex * 3 + colIndex;
                            const monthProps = getMonthProps(m, index);

                            return (
                                <td key={index} {...getTableBodyCellProps()} className="p-1 text-center">
                                    <span
                                        {...monthProps}
                                        className={`inline-flex items-center justify-center w-full py-2 rounded-lg text-sm cursor-pointer select-none transition-colors
                                            ${!m.selectable ? 'pointer-events-none opacity-40' : 'text-surface-700 dark:text-surface-0'}
                                            hover:bg-surface-100 dark:hover:bg-surface-800
                                            outline-0 outline-primary focus-visible:outline-1 focus-visible:outline-offset-1
                                            data-[selected=true]:bg-primary data-[selected=true]:text-primary-contrast`}
                                    >
                                        {m.value}
                                    </span>
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderYearView = () => (
        <table {...getTableProps()} className="w-full border-collapse">
            <tbody {...tableBodyProps}>
                {Array.from({ length: 5 }, (_, rowIndex) => (
                    <tr key={rowIndex} {...tableBodyRowProps}>
                        {yearPickerValues.slice(rowIndex * 2, rowIndex * 2 + 2).map((y) => {
                            const yearProps = getYearProps(y);

                            return (
                                <td key={y.value} {...getTableBodyCellProps()} className="p-1 text-center">
                                    <span
                                        {...yearProps}
                                        className={`inline-flex items-center justify-center w-full py-2 rounded-lg text-sm cursor-pointer select-none transition-colors
                                            ${!y.selectable ? 'pointer-events-none opacity-40' : 'text-surface-700 dark:text-surface-0'}
                                            hover:bg-surface-100 dark:hover:bg-surface-800
                                            
                                            data-[selected=true]:bg-primary data-[selected=true]:text-primary-contrast`}
                                    >
                                        {y.value}
                                    </span>
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="flex justify-center">
            <div {...rootProps} className="relative w-full md:w-56">
                <input
                    {...inputProps}
                    placeholder="mm/dd/yy"
                    className="w-full px-3 py-2 text-sm border border-surface-200 dark:border-surface-700 rounded-lg bg-transparent text-surface-700 dark:text-surface-0 outline-none transition-[border-color] duration-200 hover:border-surface-300 dark:hover:border-surface-600 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {portal.state.mounted &&
                    state.opened &&
                    createPortal(
                        <div {...positionerProps}>
                            <div
                                {...popupProps}
                                className="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl shadow-lg outline-none p-3 w-72"
                            >
                                <div {...bodyProps}>
                                    <div {...panelProps}>
                                        <div {...calendarProps}>
                                            <div {...headerProps} className="flex items-center justify-between mb-2">
                                                <button
                                                    {...prevProps}
                                                    className="flex items-center justify-center w-8 h-8 rounded-md bg-transparent border-none text-surface-500 dark:text-surface-400 cursor-pointer transition-colors hover:bg-surface-100 dark:hover:bg-surface-800 focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <div
                                                    {...titleProps}
                                                    className="flex items-center gap-1 text-sm font-semibold text-surface-700 dark:text-surface-0"
                                                >
                                                    {state.currentView === 'date' && (
                                                        <>
                                                            <button
                                                                {...selectMonthProps}
                                                                className="bg-transparent border-none cursor-pointer text-sm font-semibold text-surface-700 dark:text-surface-0 hover:text-primary transition-colors focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1 rounded px-1"
                                                            >
                                                                {getMonthName()}
                                                            </button>
                                                            <button
                                                                {...selectYearProps}
                                                                className="bg-transparent border-none cursor-pointer text-sm font-semibold text-surface-700 dark:text-surface-0 hover:text-primary transition-colors focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1 rounded px-1"
                                                            >
                                                                {getYear()}
                                                            </button>
                                                        </>
                                                    )}
                                                    {state.currentView === 'month' && (
                                                        <button
                                                            {...selectYearProps}
                                                            className="bg-transparent border-none cursor-pointer text-sm font-semibold text-surface-700 dark:text-surface-0 hover:text-primary transition-colors focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1 rounded px-1"
                                                        >
                                                            {getYear()}
                                                        </button>
                                                    )}
                                                    {state.currentView === 'year' && (
                                                        <span {...decadeProps}>
                                                            {yearPickerValues.length > 0 &&
                                                                `${yearPickerValues[0].value} - ${yearPickerValues[yearPickerValues.length - 1].value}`}
                                                        </span>
                                                    )}
                                                </div>
                                                <button
                                                    {...nextProps}
                                                    className="flex items-center justify-center w-8 h-8 rounded-md bg-transparent border-none text-surface-500 dark:text-surface-400 cursor-pointer transition-colors hover:bg-surface-100 dark:hover:bg-surface-800 focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                            {state.currentView === 'date' &&
                                                months.map((month: UseDatePickerMonthData, index: number) => (
                                                    <React.Fragment key={index}>{renderDateView(month, index)}</React.Fragment>
                                                ))}
                                            {state.currentView === 'month' && renderMonthView()}
                                            {state.currentView === 'year' && renderYearView()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        document.body
                    )}
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useDatePicker } from '@primereact/headless/datepicker';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
```

```tsx
const datepicker = useDatePicker({ ...options });
const {
    rootProps,
    inputProps,
    triggerProps,
    popupProps,
    positionerProps,
    bodyProps,
    panelProps,
    calendarProps,
    headerProps,
    titleProps,
    prevProps,
    nextProps,
    selectMonthProps,
    selectYearProps,
    getTableProps,
    tableHeaderProps,
    tableHeaderRowProps,
    weekDayCellProps,
    tableBodyProps,
    tableBodyRowProps,
    getTableBodyCellProps,
    getDayProps,
    getMonthProps,
    getYearProps,
    state,
    months,
    weekDays,
    monthPickerValues,
    yearPickerValues,
    getMonthName,
    getYear
} = datepicker;
const portal = usePortal();

usePositioner({
    anchor: state.anchorElement,
    content: state.positionerElement,
    side: 'bottom',
    flip: true,
    shift: true
});
```

`useDatePicker` composes `usePopover` internally, managing calendar state, date selection, view switching, and keyboard navigation. See [Primitive](../../primitive/components/datepicker.md) for a component-based API.

## Features

- **Multiple views**, day, month, and year pickers share one state; `switchToMonthView()` / `switchToYearView()` change views programmatically
- **Selection modes**, single, multiple, and range selection driven by `selectionMode`
- **Calendar data**, `months`, `weekDays`, `monthPickerValues`, and `yearPickerValues` provide the grid data you render however you like
- **Per-cell props**, `getDayProps`, `getMonthProps`, `getYearProps`, and `getTableBodyCellProps` carry selection/focus/ARIA state per cell
- **Time picker**, `showTime` and `timeOnly` add time controls with formatted hour/minute/second/AM-PM helpers
- **Popup lifecycle**, open/close, positioning, focus trap, and Escape handling via the internal popover
- **Helpers**, `parseValue()`, `isSelected()`, `isDateEquals()`, and `isInHoverRange()` for custom rendering logic

## Working with callbacks

### Controlled selection

Pass `value` and `onValueChange` to drive the selected date(s) from outside state.

```tsx
const [date, setDate] = React.useState(null);

const datepicker = useDatePicker({
    value: date,
    onValueChange: (e) => setDate(e.value)
});

<div {...rootProps}>
    <input {...inputProps} />
    <button {...triggerProps}></button>
    {portal.state.mounted &&
        state.opened &&
        createPortal(
            <div {...positionerProps}>
                <div {...popupProps}>
                    <div {...bodyProps}>
                        <div {...panelProps}>
                            <div {...calendarProps}>
                            {/* Header: prev / title / next */}
                            <div {...headerProps}>
                                <button {...prevProps}></button>
                                <div {...titleProps}>
                                    <button {...selectMonthProps}>{getMonthName()}</button>
                                    <button {...selectYearProps}>{getYear()}</button>
                                </div>
                                <button {...nextProps}></button>
                            </div>

                            {/* Date view */}
                            {months.map((month, groupIndex) => (
                                <table {...getTableProps()}>
                                    <thead {...tableHeaderProps}>
                                        <tr {...tableHeaderRowProps}>
                                            {weekDays.map((day, i) => (
                                                <th key={i} {...weekDayCellProps}></th>
```

### Range and multiple selection

Set `selectionMode` to switch modes, the value becomes an array of dates.

```tsx
const datepicker = useDatePicker({
    selectionMode: 'range',
    onValueChange: (e) => {
        const [start, end] = e.value ?? [];
        console.log(start, end);
    }
});
```

### Constraining the selectable range

Use `minDate` / `maxDate` together with `disabledDates` or `disabledDays` to block specific days or recurring weekdays.

```tsx
const datepicker = useDatePicker({
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
    disabledDays: [0, 6]
});
```

### Time and date-time pickers

Enable `showTime` to pair the calendar with time controls, or `timeOnly` for pure time selection. `dateFormat` controls how the input renders the value.

```tsx
const datepicker = useDatePicker({
    showTime: true,
    hourFormat: '12',
    dateFormat: 'dd/mm/yy'
});
```

### Controlled popup visibility

Use `open` and `onOpenChange` to coordinate the calendar popup with external state.

```tsx
const [open, setOpen] = React.useState(false);

const datepicker = useDatePicker({
    open,
    onOpenChange: (e) => setOpen(e.value)
});
```

## Styling with data attributes

Every prop object includes `data-scope="datepicker"` and a `data-part` that identifies the element. State-driven attributes appear or disappear automatically.

| Part    | State Attributes                                                   |
| ------- | ------------------------------------------------------------------ |
| `root`  | `data-disabled`, `data-invalid`, `data-readonly`                   |
| `day`   | `data-selected`, `data-disabled`, `data-today`, `data-other-month` |
| `month` | `data-selected`, `data-disabled`                                   |
| `year`  | `data-selected`, `data-disabled`                                   |
| `popup` | `data-open`                                                        |

```css
[data-scope='datepicker'][data-part='day'][data-selected='true'] {
    background: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}

[data-scope='datepicker'][data-part='day'][data-today='true'] {
    font-weight: 600;
    color: var(--p-primary-color);
}

[data-scope='datepicker'][data-part='day'][data-disabled='true'] {
    opacity: 0.4;
    pointer-events: none;
}
```

## API

### useDatePicker

> **`useDatePicker` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/datepicker or the installed `@primereact/types`.

## Accessibility

Arrow keys navigate days, PageUp/PageDown switch months, Shift+PageUp/Down switch years, and Enter selects the focused date. See [Primitive](../../primitive/components/datepicker.md#accessibility) for full WAI-ARIA compliance details.
