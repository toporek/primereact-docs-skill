# useIntersectionObserver

A thin wrapper over the IntersectionObserver API with imperative observe/unobserve controls.

## Usage

```tsx
import { useIntersectionObserver } from '@primereact/hooks/use-intersection-observer';
```

```tsx
const ref = React.useRef<HTMLDivElement>(null);
const { observe, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    onIntersect: (entries) => console.log(entries)
});

React.useEffect(() => {
    if (ref.current) observe(ref.current);
}, [observe]);

return <div ref={ref}>{isIntersecting ? 'visible' : 'off-screen'}</div>;
```

## Options

Standard `IntersectionObserverInit` fields (`root`, `rootMargin`, `threshold`) plus:

- `disabled?`, skip creating the observer entirely.
- `onIntersect?(entries, observer)`, called on every intersection change.
- `fallback?()`, invoked when `IntersectionObserver` is unavailable.

## Returns

- `entries`, current entries from the last callback.
- `isIntersecting`, `true` if any observed element is intersecting.
- `observe(el)`, `unobserve(el)`, `disconnect()`, imperative controls.
- `observer`, the underlying `IntersectionObserver` instance (or `null` when disabled).

## When to use it

Pick this hook when you need direct control, observing multiple elements, toggling dynamically, or integrating with virtualization. For simple "is this one element visible" cases, you may prefer the lighter-weight visibility patterns built on top of it.
