# useHotKey

Bind keyboard shortcuts with modifier combinations, single key or array of keys, with enable flag for scoping.

## Usage

```tsx
import { useHotKey } from '@primereact/hooks/use-hot-key';
```

```tsx
useHotKey('ctrl+k', (event) => {
    event.preventDefault();
    openCommandPalette();
});
```

Modifiers are case-insensitive and accept aliases: `ctrl`/`control`, `cmd`/`meta`/`command`, `alt`/`option`, `shift`. The special strings `space` and `spacebar` resolve to the space key.

Pass an array of specs to bind multiple shortcuts to the same handler:

```tsx
useHotKey(['ctrl+k', 'meta+k'], openCommandPalette);
```

## Signature

```ts
function useHotKey(
    keys: string | string[],
    handler: (event: KeyboardEvent) => void,
    options?: {
        target?: Document | HTMLElement | null;
        event?: 'keydown' | 'keyup' | 'keypress';
        when?: boolean;
    }
): void;
```

Defaults: listens on `document` for `keydown` while `when` is true. Pass a target element to scope shortcuts to a specific region.
