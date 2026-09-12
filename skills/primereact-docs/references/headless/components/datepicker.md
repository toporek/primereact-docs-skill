# useDatePicker

Hook that manages date picker state, calendar navigation, view switching, and popup positioning.

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
