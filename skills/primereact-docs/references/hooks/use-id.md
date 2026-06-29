# useId

Stable unique identifier with an optional explicit override.

## Usage

```tsx
import { useId } from '@primereact/hooks/use-id';
```

```tsx
const id = useId(); // e.g. "pr_id_r0"
const fixed = useId('my-panel'); // "my-panel"
```

Pass a value to opt out of the generated id, useful for components that accept an optional `id` prop but need a fallback.

## Signature

```ts
function useId(initialValue?: string): string;
```

Internally wraps `React.useId()` and strips the characters React inserts (`:`, `«`, `»`) so the result is safe to use in selectors and HTML attributes.
