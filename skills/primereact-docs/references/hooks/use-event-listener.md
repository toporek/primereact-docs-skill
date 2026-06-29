# useEventListener

Attach DOM event listeners declaratively, with automatic cleanup and a bind/unbind pair for manual control.

## Usage

```tsx
import { useEventListener } from '@primereact/hooks/use-event-listener';
```

```tsx
const [bind, unbind] = useEventListener({
    target: 'document',
    type: 'click',
    listener: (event) => console.log(event),
    when: true
});
```

The listener is attached when `when` is `true` and torn down automatically on unmount. Toggle `when` to pause without unmounting.

## Options

- `target`, `'document' | 'window' | 'body' | HTMLElement | (() => HTMLElement) | Ref | string | null`. Accepts a selector string, a ref, or a function that resolves the element on demand.
- `type`, event name, e.g. `'click'`, `'keydown'`, or a custom event.
- `listener`, handler function.
- `options?`, standard `addEventListener` options (`capture`, `passive`, `once`).
- `when?`, defaults to `true`; set `false` to disable.

## Manual control

The returned `[bind, unbind]` lets you attach/detach imperatively, useful when you want to listen in response to a user action rather than a prop:

```tsx
<button onClick={() => bind()}>Listen</button>
<button onClick={() => unbind()}>Stop</button>
```
