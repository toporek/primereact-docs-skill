# Introduction

A standalone collection of React hooks from @primereact/hooks.

## Overview

`@primereact/hooks` is a standalone library of React hooks. Each hook solves one concrete problem, filtering a list, formatting a number, watching a media query, reacting to a resize, and none of them render DOM or depend on PrimeReact components.

You can use it in any React project. It is the same package PrimeReact itself builds on, published separately so you can reach for a single hook without pulling in a component library.

## What you get

- **No framework lock-in.** The hooks work with any React setup, CRA, Vite, Next.js, Remix, React Native Web.
- **Tree-shakeable.** Every hook has its own entry point; bundlers only ship what you import.
- **Typed.** Full TypeScript declarations. Generic hooks pick up your data type automatically.
- **SSR-safe.** Hooks that touch the DOM are marked `'use client'` internally, importing from a server component is fine.

## Conventions

A few things are true across the suite:

- Stateful hooks support controlled and uncontrolled usage. Pass `value` + `onChange` to control, or start from a `default*` prop and let the hook own the state.
- Options are passed as a single object. Return shapes are destructurable, pick what you need.
- Hook names follow the `useX` convention and ship from `@primereact/hooks/use-x`.

```tsx
import { useFilter } from '@primereact/hooks/use-filter';

const { filteredData, setValue } = useFilter<Customer>({
    data: customers,
    field: 'name',
    value: query
});
```
