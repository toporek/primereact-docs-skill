# useMatchMedia

Reactive boolean for any CSS media query.

## Usage

```tsx
import { useMatchMedia } from '@primereact/hooks/use-match-media';
```

```tsx
const prefersDark = useMatchMedia('(prefers-color-scheme: dark)');
const isNarrow = useMatchMedia('(max-width: 768px)');
```

Subscribes to the query via `window.matchMedia` and updates on change. Toggle the `when` flag to pause listening without unmounting:

```tsx
const matches = useMatchMedia('(max-width: 600px)', isActive);
```

## Signature

```ts
function useMatchMedia(query: string, when?: boolean): boolean;
```

Server renders return `false`; the hook syncs to the real value after hydration.
