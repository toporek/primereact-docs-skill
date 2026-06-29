# useMounted

SSR-safe flag that flips to true once the component mounts on the client.

## Usage

```tsx
import { useMounted } from '@primereact/hooks/use-mounted';
```

```tsx
const mounted = useMounted();

if (!mounted) return null;

return <ClientOnlyContent />;
```

Useful when you need to gate content that depends on browser APIs without causing a hydration mismatch.

## Options

```ts
useMounted({
    onMounted: () => console.log('mounted'),
    onUnmounted: () => console.log('unmounted')
});
```

Both callbacks are optional.

## Signature

```ts
function useMounted(options?: { onMounted?: () => void; onUnmounted?: () => void }): boolean;
```
