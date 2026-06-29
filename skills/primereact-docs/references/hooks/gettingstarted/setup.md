# Setup

Install @primereact/hooks and start using it in any React project.

## Install

`@primereact/hooks` is a standalone package. Install it on its own:

```bash
npm install @primereact/hooks
```

If you already use `primereact`, the hooks are bundled, you don't need a separate install, but you can still depend on `@primereact/hooks` directly if you prefer explicit versioning.

Peer dependency: **React 18+**.

## Import

Each hook has its own sub-path entry for optimal tree-shaking:

```tsx
import { useFilter } from '@primereact/hooks/use-filter';
import { useLocalStorage } from '@primereact/hooks/use-local-storage';
import { useMatchMedia } from '@primereact/hooks/use-match-media';
```

The root entry re-exports everything when convenience matters more than the last few bytes:

```tsx
import { useFilter, useLocalStorage } from '@primereact/hooks';
```

## TypeScript

Types ship with the package. Generic hooks infer from the data you pass in:

```tsx
interface Customer {
    id: number;
    name: string;
    country: string;
}

const { filteredData } = useFilter<Customer>({
    data: customers,
    field: 'name',
    value: query
});
// filteredData is Customer[]
```

## SSR / Next.js

Hooks can be imported from server components without extra setup. Any file that touches the DOM is marked `'use client'` internally, so it moves to the client boundary on demand.
