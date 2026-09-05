# InputMask

InputMask is used to enter input in a certain format such as numeric, date, currency, email and phone.

## Usage

```tsx
import { useMask } from '@primereact/hooks/use-mask';
```

```tsx
const mask = useMask(UseMaskOptions);
```

## Examples

### Basic

### Format Patterns

Mask format can be a combination of the following definitions; _a_ for alphabetic characters, _9_ for numeric characters and _\*_ for alphanumberic characters. In addition, formatting characters like _(_ , _)_ , _-_ are also accepted.

### Optional

When the input does not complete the mask definition, it is cleared by default. Use _autoClear_ option to control this behavior. In addition, _?_ is used to mark anything after the question mark optional.

### Slot Character

Default placeholder for a mask is underscore that can be customized using _slotChar_ option.

### Unmask

By default the bound value contains the formatted mask. Enable _unmask_ option to receive the raw value without the mask characters.

### AutoClear

When _autoClear_ is set to false, the incomplete value is preserved on blur instead of being cleared.

### DatePicker

A mask can drive a _DatePicker_: _onComplete_ parses the raw value into a date and feeds the panel, and picking a day writes the formatted value back through _setValue_.
