# useViewTransition

Wrap state updates in the View Transitions API, with a graceful fallback on unsupported browsers.

## Usage

```tsx
import { useViewTransition } from '@primereact/hooks/use-view-transition';
```

```tsx
const startTransition = useViewTransition();

function toggleTheme() {
    startTransition(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    });
}
```

Calls `document.startViewTransition(callback)` when the API exists; otherwise the callback runs synchronously. That means your code always works, the animation is the enhancement.

## Signature

```ts
function useViewTransition(): (callback: () => void) => void;
```

## Notes

View Transitions are driven by CSS (`::view-transition-*` pseudo-elements and `view-transition-name`). This hook is a small API hook, pair it with the CSS your design system defines.
