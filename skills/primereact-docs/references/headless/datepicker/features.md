# useDatePicker

Hook that manages date picker state, calendar navigation, view switching, and popup positioning.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { useDatePicker } from '@primereact/headless/datepicker';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';
import type { useDatePickerDateMeta, useDatePickerMonthData } from '@primereact/types/headless/datepicker';
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

    const renderDateView = (month: useDatePickerMonthData, groupIndex: number) => (
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
                {month.dates.map((week: useDatePickerDateMeta[], weekIndex: number) => (
                    <tr key={weekIndex} {...tableBodyRowProps}>
                        {week.map((date: useDatePickerDateMeta, dateIndex: number) => {
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
                                            months.map((month: useDatePickerMonthData, index: number) => (
                                                <React.Fragment key={index}>{renderDateView(month, index)}</React.Fragment>
                                            ))}
                                        {state.currentView === 'month' && renderMonthView()}
                                        {state.currentView === 'year' && renderYearView()}
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

```tsx showLineNumbers {1,5-38,50-52,56-59,61-65,67,71-76,80-82,84-85,95-96,100-101}
import { useDatePicker } from '@primereact/headless/datepicker';
import { usePortal } from '@primereact/headless/portal';
import { usePositioner } from '@primereact/headless/positioner';

const datepicker = useDatePicker({ ...options });
const {
    rootProps,
    inputProps,
    triggerProps,
    popupProps,
    positionerProps,
    panelProps,
    calendarProps,
    headerProps,
    titleProps,
    prevProps,
    nextProps,
    selectMonthProps,
    selectYearProps,
    decadeProps,
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

return (
    <div {...rootProps}>
        <input {...inputProps} />
        <button {...triggerProps}></button>
        {portal.state.mounted &&
            state.opened &&
            createPortal(
                <div {...positionerProps}>
                    <div {...popupProps}>
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
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody {...tableBodyProps}>
                                            {month.dates.map((week, wi) => (
                                                <tr key={wi} {...tableBodyRowProps}>
                                                    {week.map((date, di) => (
                                                        <td key={di} {...getTableBodyCellProps(date)}>
                                                            <span {...getDayProps(date, groupIndex)}>{date.day}</span>
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ))}

                                {/* Month view */}
                                {monthPickerValues.map((m, i) => (
                                    <span {...getMonthProps(m, i)}>{m.value}</span>
                                ))}

                                {/* Year view */}
                                {yearPickerValues.map((y) => (
                                    <span {...getYearProps(y)}>{y.value}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
    </div>
);
```

`useDatePicker` composes `usePopover` internally, managing calendar state, date selection, and keyboard navigation — see [Primitive](../../primitive/datepicker/features.md) for a component-based API.

## Features

- `rootProps`, `inputProps`, `triggerProps`, `popupProps`, `positionerProps`, `arrowProps`, `panelProps`, `calendarProps`, `headerProps`, and 30+ additional spread-ready prop objects cover every UI section
- `getDayProps()`, `getMonthProps()`, `getYearProps()` return cell-level props with selection state, event handlers, and ARIA attributes
- `getTableProps()`, `getTableBodyCellProps()`, `getIncrementProps()`, `getDecrementProps()`, `getPickerProps()` for dynamic table and time picker elements
- `months`, `weekDays`, `monthPickerValues`, `yearPickerValues` provide calendar data for rendering grids
- `show()`, `hide()`, `toggle()` for imperative popup control
- `switchToMonthView()`, `switchToYearView()` for programmatic view changes
- `formattedCurrentHour`, `formattedCurrentMinute`, `formattedCurrentSecond`, `ampmLabel` for time display
- `parseValue()`, `isSelected()`, `isDateEquals()`, `isInHoverRange()` for custom rendering logic

## Behavior

### Default Value

Set `defaultValue` for uncontrolled selection.

```tsx
const datepicker = useDatePicker({ defaultValue: new Date() });
```

### Controlled

Pass `value` and `onValueChange` for controlled selection state.

```tsx
const [date, setDate] = React.useState(null);

const datepicker = useDatePicker({
    value: date,
    onValueChange: (e) => setDate(e.value)
});
```

### Selection Mode

Set `selectionMode` to `'multiple'` or `'range'` for multi-date or range selection. The value becomes an array.

```tsx
const datepicker = useDatePicker({ selectionMode: 'range' });
```

### Date Format

Set `dateFormat` to customize the display format. Tokens include `d`, `dd`, `m`, `mm`, `M`, `MM`, `y`, `yy`, and more.

```tsx
const datepicker = useDatePicker({ dateFormat: 'dd/mm/yy' });
```

### View

Set `view` to `'month'` or `'year'` to start in month or year picker mode.

```tsx
const datepicker = useDatePicker({ view: 'month', dateFormat: 'mm/yy' });
```

### Min / Max

Set `minDate` and `maxDate` to constrain selectable dates.

```tsx
const datepicker = useDatePicker({ minDate: new Date(2024, 0, 1), maxDate: new Date(2024, 11, 31) });
```

### Disabled Dates

Pass `disabledDates` for specific dates or `disabledDays` for recurring weekdays.

```tsx
const datepicker = useDatePicker({ disabledDays: [0, 6] });
```

### Time Picker

Set `showTime` to display time controls alongside the calendar, or `timeOnly` to show only time.

```tsx
const datepicker = useDatePicker({ showTime: true, hourFormat: '12' });
```

### Multiple Months

Set `numberOfMonths` to display multiple calendar months side by side.

```tsx
const datepicker = useDatePicker({ numberOfMonths: 2 });
```

### Popup Control

Use `open` and `onOpenChange` for controlled popup state, or `defaultOpen` for uncontrolled initial state.

```tsx
const [open, setOpen] = React.useState(false);

const datepicker = useDatePicker({
    open,
    onOpenChange: (e) => setOpen(e.value)
});
```

### Popup Behavior

Set `closeOnEscape` to dismiss the overlay with the Escape key, `autoFocus` to move focus into the overlay when it opens, and `trapped` to keep focus within the overlay.

```tsx
const datepicker = useDatePicker({ closeOnEscape: true, autoFocus: true, trapped: true });
```

### Custom Styling with Data Attributes

Every prop object includes `data-scope="datepicker"` and a `data-part` that identifies the element. State-driven attributes appear or disappear automatically.

| Part    | State Attributes                                                   |
| ------- | ------------------------------------------------------------------ |
| `root`  | `data-disabled`, `data-invalid`, `data-readonly`                   |
| `day`   | `data-selected`, `data-disabled`, `data-today`, `data-other-month` |
| `month` | `data-selected`, `data-disabled`                                   |
| `year`  | `data-selected`, `data-disabled`                                   |
| `popup` | `data-open`                                                        |

```css
/* Selected day */
[data-scope='datepicker'][data-part='day'][data-selected='true'] {
    background: var(--p-primary-color);
    color: var(--p-primary-contrast-color);
}

/* Today indicator */
[data-scope='datepicker'][data-part='day'][data-today='true'] {
    font-weight: 600;
    color: var(--p-primary-color);
}

/* Disabled date */
[data-scope='datepicker'][data-part='day'][data-disabled='true'] {
    opacity: 0.4;
    pointer-events: none;
}
```

## API

### useDatePicker

> **API/props table for `useDatePicker` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [DatePicker Primitive](../../primitive/datepicker/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
