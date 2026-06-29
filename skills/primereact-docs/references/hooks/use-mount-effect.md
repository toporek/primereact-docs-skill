# useMountEffect

Run an effect exactly once, after the first render.

## Usage

```tsx
import { useMountEffect } from '@primereact/hooks/use-mount-effect';
```

```tsx
useMountEffect(() => {
    console.log('mounted');

    return () => console.log('cleanup');
});
```

Equivalent to `useEffect(fn, [])` but reads clearer at the call site. The optional return value is treated as the cleanup function, just like `useEffect`.

## Signature

```ts
function useMountEffect(effect: React.EffectCallback): void;
```
