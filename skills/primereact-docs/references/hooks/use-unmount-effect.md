# useUnmountEffect

Run an effect exactly once, when the component unmounts.

## Usage

```tsx
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
```

```tsx
useUnmountEffect(() => {
    socket.close();
});
```

Equivalent to `useEffect(() => cleanup, [])`, expressed as the cleanup by itself. Reads clearer when the mount path has nothing to do.

## Signature

```ts
function useUnmountEffect(effect: React.EffectCallback): void;
```
