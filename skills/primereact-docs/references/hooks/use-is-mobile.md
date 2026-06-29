# useIsMobile

Boolean flag that flips when the viewport crosses a mobile breakpoint.

## Usage

```tsx
import { useIsMobile } from '@primereact/hooks/use-is-mobile';
```

```tsx
const isMobile = useIsMobile(); // default breakpoint: 768px
const isTablet = useIsMobile(1024); // custom breakpoint
```

Returns `true` when the viewport width is **below** the breakpoint. Implemented on top of `useMatchMedia`, so it updates live as the window resizes.

## Signature

```ts
function useIsMobile(breakpoint?: number): boolean;
```

Default breakpoint is 768px. Pass any max-width you care about, the hook resolves the corresponding media query for you.
