# useControlledState

State that works controlled or uncontrolled, following the React convention of value + onChange with a defaultValue fallback.

## Usage

```tsx
import { useControlledState } from '@primereact/hooks/use-controlled-state';
```

```tsx
const [value, setValue, isControlled] = useControlledState({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: props.onChange
});
```

When the parent passes `value`, the hook stays controlled and delegates every update through `onChange`. When `value` is `undefined`, it owns the state internally, `defaultValue` seeds the first render.

## Signature

```ts
function useControlledState<T, E = T>(options: { value?: T; defaultValue?: T; onChange?: (next: E) => void }): [T | undefined, (next: T | ((prev?: T) => T)) => void, boolean];
```

The returned tuple is `[value, setValue, isControlled]`. `isControlled` is a boolean frozen at mount, matching how React decides controlled vs uncontrolled inputs.

## When to use it

Any reusable component that exposes both `value` / `onChange` and a `defaultValue`. This hook handles the glue so you don't branch on `value === undefined` everywhere.
