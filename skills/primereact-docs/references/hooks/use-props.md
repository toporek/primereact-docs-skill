# useProps

Split incoming props into known props and extra attrs, preserving referential stability when values don't change.

## Usage

```tsx
import { useProps } from '@primereact/hooks/use-props';
```

```tsx
const defaults = { variant: 'primary', size: 'medium' };
const { props, attrs } = useProps(defaults, userProps);

<button {...props} {...attrs} />;
```

- `props` contains only the keys that appear in `defaults`, with values taken from `userProps` when present.
- `attrs` contains the remaining keys from `userProps`, typically DOM attributes and event handlers you want to spread onto the rendered element.

If the computed `props` and `attrs` are shallowly equal to the previous result, the same references are returned. This prevents cascading `useMemo` / `React.memo` invalidations when a parent passes a new object literal with identical values.

## Signature

```ts
function useProps<P1, P2>(
    defaults?: P1,
    userProps?: P2
): {
    props: Pick<P1 & P2, keyof P1>;
    attrs: Omit<P2, keyof P1>;
};
```

## When to use it

Building a reusable component that accepts both known props and passthrough attributes, `useProps` gives you a clean split without the boilerplate of `const { knownA, knownB, ...rest } = props`.
