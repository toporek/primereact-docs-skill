# DatePicker

DatePicker is a form component to work with dates.

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

### Icon

An additional icon is displayed next to the input field.

### Value & Trigger

Use `DatePicker.Trigger` and `DatePicker.Value` to build custom trigger UIs without the default input. Supports date range pickers with formatted display, multi-date selection with removable chips, and custom trigger buttons with flexible layouts.

### Min / Max

Boundaries for the permitted dates that can be entered are defined with `minDate` and `maxDate` properties.

### Multiple

In order to choose multiple dates, set `selectionMode` as `multiple`. In this mode, the value binding should be an array.

### Range

A range of dates can be selected by defining `selectionMode` as `range`, in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.

### Button Bar

When `Buttonbar` component is used, today and clear buttons are displayed at the bottom of the calendar panel.

### Time

A time picker is displayed when `DatePicker.Time` component is used where 12/24 hour format is configured with `hourFormat` property. In case, only time needs to be selected, add `timeOnly` to hide the date section.

### Month Picker

Month only picker is enabled by specifying `view` as `month` in addition to a suitable `dateFormat`.

### Year Picker

Year only picker is enabled by specifying `view` as `year` in addition to a suitable `dateFormat`.

### Multiple Months

Number of months to display is configured with the `numberOfMonths` property.

### Model Type

The `updateModelType` property controls the data type of the value. When set to `string` it returns a string representation of the date, when set to `date` (default) it returns a Date object.

### Date Template

Custom content can be placed inside date cells with the `DatePicker.TableHeadCell` component that takes a Date as a parameter.

### Arrow

Use `DatePicker.Arrow` inside the popup to display an arrow pointing to the trigger element. Set `sideOffset` on `DatePicker.Positioner` for spacing.

### Inline

### Inline Template

Custom content can be placed inside date cells in inline mode with the `DatePicker.TableHeadCell` component that takes a Date as a parameter.

### Float Label

FloatLabel visually integrates a label with its form element. Visit [FloatLabel](https://primereact.dev/docs/components/floatlabel) documentation for more information.

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit [IftaLabel](https://primereact.dev/docs/components/iftalabel) documentation for more information.

### Clear

When `DatePicker.Clear` component is used, a clear trigger is added to reset the DatePicker.

### Sizes

DatePicker provides `small` and `large` sizes as alternatives to the base.

### Fluid

The fluid prop makes the component take up the full width of its container when set to true.

### Filled

Specify the `filled` property to display the component with a higher visual emphasis than the default outlined style.

### Disabled

Use the `disabled` property to disable a datepicker.

### Invalid

Specify the `invalid` property to display the component with a red border.

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
