# useMask

useMask is used to enter input in a certain format such as numeric, date, currency, email and phone.

## Usage

```tsx
import { useMask } from '@primereact/hooks';
```

```tsx
const mask = useMask();
```

## Examples

### Basic

### Format Patterns

Mask format can be a combination of the following definitions; _a_ for alphabetic characters, _9_ for numeric characters and _\*_ for alphanumberic characters. In addition, formatting characters like _(_ , _)_ , _-_ are also accepted.

### Optional

When the input does not complete the mask definition, it is cleared by default. Use _autoClear_ option to control this behavior. In addition, _?_ is used to mark anything after the question mark optional.

### Slot Character

Default placeholder for a mask is underscore that can be customized using _slotChar_ option.
