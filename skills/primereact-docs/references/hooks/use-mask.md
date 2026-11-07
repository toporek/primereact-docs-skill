# useMask

Format an input as the user types, phone, date, currency and similar fixed patterns.

## Usage

```tsx
import { useMask } from '@primereact/hooks/use-mask';
```

```tsx
const { ref, value, rawValue, isComplete } = useMask({ mask: '(999) 999-9999' });

<InputText ref={ref} />;
```

Attach `ref` to any component that forwards a ref to a native input. The hook formats keystrokes against `mask` and keeps both the masked and raw values in sync.

## Signature

```ts
function useMask(options: UseMaskOptions): UseMaskReturn;
```

## Options

- `mask`, pattern string: `9` numeric, `a` alphabetic, `*` alphanumeric. Literals like `(`, `)`, `-` and `/` are inserted automatically. A `?` marks everything after it as optional.
- `slotChar?`, placeholder for unfilled slots (default `_`). Pass a full template like `dd/mm/yyyy` to label each slot.
- `autoClear?`, clear an incomplete value on blur (default `true`).
- `value?` / `defaultValue?` / `onValueChange?`, controlled / uncontrolled masked value.
- `onComplete?`, fires when every required slot is filled.

## Returns

`{ ref, value, rawValue, isComplete, setValue }`. `value` is the masked string, `rawValue` strips the literals and placeholders, `isComplete` is `true` once all required slots are filled.

## Basic
