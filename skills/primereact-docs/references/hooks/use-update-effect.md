# useUpdateEffect

useEffect that skips the initial mount and runs only on subsequent dependency changes.

## Usage

```tsx
import { useUpdateEffect } from '@primereact/hooks/use-update-effect';
```

```tsx
useUpdateEffect(() => {
    onValueChange(value);
}, [value]);
```

The effect does not run on the first render. Every time one of the dependencies changes afterwards, it fires like a normal `useEffect`.

## Signature

```ts
function useUpdateEffect(effect: React.EffectCallback, deps?: React.DependencyList): void;
```

## When to use it

Triggering side effects that only make sense _after_ a user-driven change, firing a controlled `onChange`, syncing to a remote store, or announcing transitions.
