# useKeyFilter

Block individual keystrokes that don't match a pattern, before they reach the input.

## Usage

```tsx
import { useKeyFilter } from '@primereact/hooks/use-key-filter';
```

```tsx
const { onBeforeInput, onKeyPress, onPaste } = useKeyFilter({ pattern: 'int' });

<InputText onBeforeInput={onBeforeInput} onKeyPress={onKeyPress} onPaste={onPaste} />;
```

Spread the returned handlers onto a native input. Keystrokes and pastes that don't match the pattern are rejected before they change the value.

## Signature

```ts
function useKeyFilter(options: UseKeyFilterOptions): UseKeyFilterExposes;
```

## Options

- `pattern`, a preset name or a `RegExp`. Presets: `pint`, `int`, `pnum`, `num`, `money`, `hex`, `email`, `alpha`, `alphanum`.
- `validateOnly?`, when `true`, individual keys are allowed and the whole value is validated instead (use `validate` on form events).

## Returns

`{ onBeforeInput, onKeyPress, onPaste, validate }`. The first three are input handlers to spread; `validate(event)` returns a boolean for the `validateOnly` flow.

## Basic
