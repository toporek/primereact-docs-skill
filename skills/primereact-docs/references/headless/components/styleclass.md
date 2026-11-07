# useStyleClass

Hook that manages CSS class toggling with enter/leave animation sequences on a target element.

## Usage

```tsx
import { useStyleClass } from '@primereact/headless/styleclass';
```

```tsx
useStyleClass({
    selector: '@next',
    enterFromClassName: 'hidden',
    enterActiveClassName: 'animate-scalein',
    leaveToClassName: 'hidden',
    leaveActiveClassName: 'animate-fadeout'
});
```

`useStyleClass` binds click-to-toggle behavior on a host element and applies CSS class sequences to a target element resolved by selector. See [StyleClass](https://primereact.dev/docs/styled/components/styleclass) for a component-based API.

## Features

- **Selector-based targeting**, built-in `@next`, `@prev`, `@parent`, `@grandparent` selectors or any CSS selector
- **Enter/leave sequences**, applies `{from,active,to}` classes in order and cleans them up after `animationend`
- **Simple toggle mode**, `toggleClassName` handles the common case of flipping a single class without an animation sequence
- **Outside-click dismissal**, `hideOnOutsideClick` runs the leave sequence when the user clicks outside the host and target
- **External host binding**, `nodeRef` moves the click listener onto a different element than the hook's default host
- **Imperative methods**, `enter()` and `leave()` trigger the sequences from any event source

## Working with callbacks

### Animate a sibling panel

Combine `@next` with enter and leave class sequences to animate a panel directly after the trigger.

```tsx
useStyleClass({
    selector: '@next',
    enterFromClassName: 'hidden',
    enterActiveClassName: 'animate-scalein',
    enterToClassName: 'visible',
    leaveActiveClassName: 'animate-fadeout',
    leaveToClassName: 'hidden'
});
```

### Toggle a single class

When you do not need the animation lifecycle, use `toggleClassName` to flip a class on the target.

```tsx
useStyleClass({ selector: '@next', toggleClassName: 'hidden' });
```

### Dismiss on outside click

Enable `hideOnOutsideClick` for menus and popovers that should close when the user clicks elsewhere on the page.

```tsx
useStyleClass({
    selector: '@next',
    enterFromClassName: 'hidden',
    enterActiveClassName: 'animate-scalein',
    leaveToClassName: 'hidden',
    leaveActiveClassName: 'animate-fadeout',
    hideOnOutsideClick: true
});
```

### Attach the listener to a different element

Pass `nodeRef` when the trigger lives outside the hook's host tree, for example, a global header button that controls a panel elsewhere in the DOM.

```tsx
const buttonRef = React.useRef(null);
useStyleClass({ nodeRef: buttonRef, selector: '@next', toggleClassName: 'hidden' });
```

## API

### useStyleClass

> **`useStyleClass` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/styleclass or the installed `@primereact/types`.

## Accessibility

StyleClass does not add ARIA attributes. Add `aria-expanded`, `aria-controls`, and other attributes to the trigger and target elements as needed.
