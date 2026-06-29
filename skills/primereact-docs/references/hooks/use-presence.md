# usePresence

Coordinate enter/exit animations by delaying unmount until CSS transitions finish.

## Usage

```tsx
import { usePresence } from '@primereact/hooks/use-presence';
```

```tsx
function Dialog({ open }: { open: boolean }) {
    const { present, mounted, ref } = usePresence(open);

    if (!present) return null;

    return (
        <div ref={ref} data-state={mounted ? 'open' : 'closed'} className="dialog">
            ...
        </div>
    );
}
```

The element stays in the tree after `open` flips to `false` until `transitionend` or `animationend` fires on it, giving your CSS a chance to run the exit animation.

## Signature

```ts
function usePresence(
    open: boolean,
    fallbackMs?: number
): {
    present: boolean;
    exiting: boolean;
    mounted: boolean;
    ref: (node: HTMLElement | null) => void;
};
```

- `present`, whether the element should render.
- `mounted`, set to `true` a few frames after opening; use it to toggle the visible state in CSS so the transition can play.
- `exiting`, `true` while the close animation is running.
- `ref`, callback ref that must be attached to the animated element. Without it the hook cannot observe the transition.
