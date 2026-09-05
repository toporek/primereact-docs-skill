# ProgressBar

ProgressBar is a process status indicator.

## Usage

```tsx
import { ProgressBar } from '@primereact/ui/progressbar';
```

```tsx
<ProgressBar.Root>
    <ProgressBar.Track>
        <ProgressBar.Indicator>
            <ProgressBar.Label>
                <ProgressBar.Value />
            </ProgressBar.Label>
        </ProgressBar.Indicator>
    </ProgressBar.Track>
</ProgressBar.Root>
```

## Examples

### Basic

Reflects the completion percentage of an ongoing process.

### Dynamic

Value is reactive so updating it dynamically changes the bar as well.

### Formatter

Custom formatter function to format the display value.

### Template

Place `ProgressBar.Value` where the progress value should be displayed inside the `ProgressBar` and customize `formatter` prop to display in different format.

### Indeterminate

For progresses with no value to track, set the `mode` property to `indeterminate`.

### As Steps

Steps are used to display a progress with multiple steps.

## Related

### Sub-Components

See [Primitive API](../../primitive/components/progressbar.md#api) for `ProgressBarRoot`, `ProgressBarTrack`, `ProgressBarIndicator`, `ProgressBarLabel`, `ProgressBarValue` component documentation.

### Hooks

See [Headless API](../../headless/components/progressbar.md#api) for `useProgressBar` hook documentation.

### Accessibility

See [ProgressBar Primitive](../../primitive/components/progressbar.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-progressbar | Class name of the root element |
| p-progressbar-value | Class name of the value element |
| p-progressbar-label | Class name of the label element |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| progressbar.background | --p-progressbar-background | Background of root |
| progressbar.border.radius | --p-progressbar-border-radius | Border radius of root |
| progressbar.height | --p-progressbar-height | Height of root |
| progressbar.value.background | --p-progressbar-value-background | Background of value |
| progressbar.label.color | --p-progressbar-label-color | Color of label |
| progressbar.label.font.size | --p-progressbar-label-font-size | Font size of label |
| progressbar.label.font.weight | --p-progressbar-label-font-weight | Font weight of label |
