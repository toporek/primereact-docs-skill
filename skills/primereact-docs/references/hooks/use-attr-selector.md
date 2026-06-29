# useAttrSelector

Produce a stable, unique string from React.useId, handy for scoping CSS and DOM selectors.

## Usage

```tsx
import { useAttrSelector } from '@primereact/hooks/use-attr-selector';
```

```tsx
const selector = useAttrSelector('panel-'); // e.g. "panel-r0"
```

Pass an optional prefix; the hook strips colons and other delimiters React adds to `useId()` so the result is safe to use inside attribute selectors like `[data-scope="panel-r0"]`.

## Signature

```ts
function useAttrSelector(prefix?: string): string;
```

## When to use it

Reach for this when you need a unique string that also works as a CSS selector fragment, scoped styles, data attributes, or query targets inside a single component instance.
