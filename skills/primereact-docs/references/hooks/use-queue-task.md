# useQueueTask

Deduplicate work by id and flush it on the next microtask.

## Usage

```tsx
import { useQueueTask } from '@primereact/hooks/use-queue-task';
```

```tsx
const queue = useQueueTask();

function schedule(rowId: string) {
    queue(rowId, () => recalculate(rowId));
}
```

Calling `queue(id, task)` replaces any pending task for the same `id`. All queued tasks run together in a single microtask, so many calls within the same synchronous batch collapse into one flush.

## Signature

```ts
function useQueueTask(): (id: string | number, task: () => void) => void;
```

## When to use it

Coalescing expensive work triggered from multiple places in the same render, layout measurements, cache invalidations, or derived state updates where only the latest value per key matters.
