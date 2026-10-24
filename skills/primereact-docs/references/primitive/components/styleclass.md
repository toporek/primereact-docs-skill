# StyleClass

StyleClass manages CSS classes on a target element with enter/leave animations triggered by user interaction.

## Usage

```tsx
import { StyleClass } from 'primereact/styleclass';
```

```tsx
<StyleClass
    as="button"
    selector="@next"
    enterFromClassName="hidden"
    enterActiveClassName="animate-scalein"
    leaveToClassName="hidden"
    leaveActiveClassName="animate-fadeout"
    hideOnOutsideClick
>
    Toggle
</StyleClass>
<div className="hidden">Content</div>
```

## Examples

### Basic

Toggle visibility of a target element with enter and leave animations.

### Animation

Custom CSS animations and built-in slide animations for enter and leave transitions.

### Toggle Class

Use `toggleClassName` for simple class toggling without enter/leave animations.

### Selector

Different selector types to target elements: `@next`, `@prev`, and CSS selectors.

### Hide on Resize

Use `hideOnResize` to dismiss the target when a resize occurs. Pair it with `resizeSelector` to observe a specific element instead of the window.

## Selector

The `selector` prop determines the target element. Built-in values:

- `@next`, Next sibling element
- `@prev`, Previous sibling element
- `@parent`, Parent element
- `@grandparent`, Grandparent element
- Any CSS selector string (e.g. `#my-panel`)

## Animation Classes

StyleClass applies CSS classes in sequence to create enter and leave transitions.

**Enter sequence:**

1. Remove `enterFromClassName` (e.g. `hidden`)
2. Add `enterActiveClassName` (e.g. `animate-scalein`)
3. On animation end: remove `enterActiveClassName`, add `enterToClassName`

**Leave sequence:**

1. Remove `leaveFromClassName`
2. Add `leaveActiveClassName` (e.g. `animate-fadeout`)
3. On animation end: remove `leaveActiveClassName`, add `leaveToClassName` (e.g. `hidden`)

## Outside Click

Set `hideOnOutsideClick` to automatically hide the target when clicking outside the trigger and target elements.

## Hide on Resize

Set `hideOnResize` to trigger the leave animation when a resize happens while the target is visible.

By default the `window` is observed. Provide a `resizeSelector` to watch a specific element instead, valid values are `"window"`, `"document"`, or a CSS selector. When it resolves to an element, a `ResizeObserver` is used and the initial observation is ignored so only genuine resizes dismiss the target.

```tsx
<StyleClass as="button" selector="@next" enterFromClassName="hidden" enterActiveClassName="animate-scalein" leaveToClassName="hidden" leaveActiveClassName="animate-fadeout" hideOnResize resizeSelector="#resize-source">
    Toggle
</StyleClass>
```

## Related

### Hooks

See [useStyleClass](../../headless/components/styleclass.md#api) for the headless hook API.

### Accessibility

StyleClass does not add ARIA attributes, it is a utility for CSS class manipulation. Add appropriate `aria-expanded`, `aria-controls`, and other attributes to the trigger and target elements as needed.
