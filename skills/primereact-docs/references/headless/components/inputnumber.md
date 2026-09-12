# useInputNumber

Hook that manages numeric input with formatting, locale support, and spin button behavior.

## Usage

```tsx
import { useInputNumber } from '@primereact/headless/inputnumber';
```

```tsx
const { inputProps, state } = useInputNumber({
    defaultValue: 0
});

return <input {...inputProps} value={state.formattedValue} />;
```

`useInputNumber` handles numeric parsing, formatting, keyboard-driven increment/decrement, and boundary enforcement. See [Primitive](../../primitive/components/inputnumber.md) for a component-based API.

## Features

- **Numeric value state**, tracks raw value and a locale-formatted display string in `state.value` / `state.formattedValue`
- **Spin button semantics**, applies `role="spinbutton"` and ARIA value properties on the input
- **Keyboard and pointer stepping**, `increment`, `decrement`, `stepUp`, `stepDown` plus auto-repeat on pointer hold
- **Locale-aware formatting**, decimal, currency, percent, and grouping configuration via `Intl.NumberFormat`
- **Boundary enforcement**, `min`/`max` clamp on blur and during spin, with `minBoundry()` / `maxBoundry()` helpers
- **Affix support**, optional `prefix` and `suffix` text parsed back out of the displayed value

## Working with callbacks

### Controlled value

Pass `value` and `onValueChange` to drive the number from outside state.

```tsx
const [value, setValue] = React.useState(0);

useInputNumber({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Currency formatting

Combine `mode`, `currency`, and `locale` to render monetary values without custom parsers.

```tsx
useInputNumber({
    mode: 'currency',
    currency: 'USD',
    locale: 'en-US'
});
```

### Clamped range with custom step

Use `min`, `max`, and `step` together when the field represents a bounded quantity like a rating or percentage.

```tsx
useInputNumber({
    min: 0,
    max: 100,
    step: 5
});
```

### Fraction precision

Control decimal precision with `minFractionDigits` and `maxFractionDigits`, useful for financial or scientific fields.

```tsx
useInputNumber({
    minFractionDigits: 2,
    maxFractionDigits: 4
});
```

### Highlight on focus

Set `highlightOnFocus` so the input selects its text on focus, letting users overwrite rather than edit.

```tsx
useInputNumber({ highlightOnFocus: true });
```

## Styling with data attributes

Each part exposes `data-scope="inputnumber"` and a `data-part` identifier (`root`, `input`). The root reflects state with `data-disabled`, `data-invalid`, and `data-readonly` so descendant selectors can react.

```css
[data-scope='inputnumber'][data-part='input'] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

[data-scope='inputnumber'][data-part='input']:focus {
    border-color: var(--p-primary-color);
    outline: none;
}

[data-scope='inputnumber'][data-part='root'][data-disabled] [data-part='input'] {
    opacity: 0.5;
    cursor: not-allowed;
}
```

## API

### useInputNumber

> **`useInputNumber` API table (`api`)** — TypeScript-derived; not inlined here. See the live table at https://primereact.dev/docs/headless/components/inputnumber or the installed `@primereact/types`.

## Accessibility

Up/Down arrows increment or decrement, Shift+arrows step by 10, and type-ahead accepts numeric input. See [Primitive](../../primitive/components/inputnumber.md#accessibility) for full WAI-ARIA compliance details.
