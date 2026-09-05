# KeyFilter

KeyFilter is used to block individual keystrokes based on a pattern.

## Usage

```tsx
import { useKeyFilter } from '@primereact/hooks/use-key-filter';
```

```tsx
const keyfilter = useKeyFilter(UseKeyFilterOptions);
```

## Examples

### Pattern

useKeyFilter provides various presets configured with the _pattern_ option.

### Regex

In addition to the presets, a regular expression can be configured for customization of blocking a single key press.

### Regex Word

In addition to the presets, a regular expression can be used to validate the entire word using _validateOnly_ option.
