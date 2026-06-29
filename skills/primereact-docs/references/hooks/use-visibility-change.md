# useVisibilityChange

Reactive boolean that reflects the document's Page Visibility state.

## Usage

```tsx
import { useVisibilityChange } from '@primereact/hooks/use-visibility-change';
```

```tsx
const isVisible = useVisibilityChange();

React.useEffect(() => {
    if (!isVisible) pauseTimers();
    else resumeTimers();
}, [isVisible]);
```

Listens to the `visibilitychange` event and returns `true` while the tab is active, `false` when backgrounded or minimized.

## Signature

```ts
function useVisibilityChange(): boolean;
```

## When to use it

Throttle or pause work while the tab isn't visible, polling requests, animations, WebSocket pings, and resume when the user comes back.
