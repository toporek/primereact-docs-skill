# DatePicker

DatePicker is a form component to work with dates.

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

### Range

Use `selectionMode="range"` to select a start and end date.

### Multiple

Use `selectionMode="multiple"` to select multiple dates independently.

### Format

Customize the input format with `dateFormat`.

### Min / Max

Restrict the selectable range with `minDate` and `maxDate`.

### Month Picker

Use `view="month"` to select only month and year.

### Year Picker

Use `view="year"` to select only the year.

### Time

Use `showTime` to render a time picker beneath the calendar; pass `hourFormat="12"` for AM/PM.

### Inline

Skip the popup chain and embed the calendar directly.

### Multiple Months

Render two side-by-side calendars with `numberOfMonths={2}` and one `DatePickerCalendar` per offset.

### Show Week Numbers

Add `showWeek` to display ISO week numbers on the leftmost column.

### Sizes

Use `size` to render small or large variants.

### Fluid

Use `fluid` to make the input span the parent container width.

### Filled

Use `variant="filled"` for a filled input style.

### Disabled

Use `disabled` to disable the input.

### Invalid

Use `invalid` to display the input in an error state.

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
