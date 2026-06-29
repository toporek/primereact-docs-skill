# useLocalStorage

State persisted to localStorage, with SSR-safe hydration and custom serialization.

## Usage

```tsx
import { useLocalStorage } from '@primereact/hooks/use-local-storage';
```

```tsx
const [sizes, setSizes, removeSizes] = useLocalStorage({
    key: 'splitter-sizes',
    initialValue: [50, 50]
});
```

The hook renders `initialValue` for SSR and the first client render, then reads the stored value in a layout effect, so the real value appears before paint and there's no hydration mismatch or flash.

## Options

- `key`, storage key.
- `initialValue`, value used when nothing is stored yet.
- `serializer?` / `deserializer?`, default to `JSON.stringify` / `JSON.parse`. Override for dates, maps, or custom codecs.

## Returns

`[value, setValue, remove]`. `setValue` accepts a value or an updater function (like `useState`). `remove()` clears the key from storage and resets to `initialValue`.
