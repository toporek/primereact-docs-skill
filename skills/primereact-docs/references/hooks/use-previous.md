# usePrevious

Remember the value of a variable from the previous render.

## Usage

```tsx
import { usePrevious } from '@primereact/hooks/use-previous';
```

```tsx
const [count, setCount] = React.useState(0);
const prev = usePrevious(count);

React.useEffect(() => {
    if (prev !== undefined && prev !== count) {
        console.log(`changed from ${prev} to ${count}`);
    }
}, [count, prev]);
```

Returns `null` on the first render, then the value from the prior render on every subsequent render.

## Signature

```ts
function usePrevious<T>(value: T): T | null | undefined;
```
