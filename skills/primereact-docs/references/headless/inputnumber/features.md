# useInputNumber

Hook that manages numeric input with formatting, locale support, and spin button behavior.

```tsx
'use client';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { useInputNumber, type useInputNumberValueChangeEvent } from '@primereact/headless/inputnumber';
import * as React from 'react';

export default function BasicDemo() {
    const [value, setValue] = React.useState(50);

    const { rootProps, state, incrementProps, decrementProps } = useInputNumber({
        value,
        min: 0,
        max: 100,
        mode: 'currency',
        currency: 'EUR',
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue(e.value)
    });

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">
                <input
                    {...rootProps}
                    value={state.formattedValue as string}
                    className="w-32 px-3 py-2 text-sm bg-transparent outline-none text-surface-900 dark:text-surface-100"
                />
                <div className="flex flex-col border-l border-surface-200 dark:border-surface-700">
                    <button
                        type="button"
                        {...incrementProps}
                        className="px-2 hover:bg-surface-50 dark:hover:bg-surface-800 cursor-pointer border-b border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 text-[.5rem] outline-none focus-visible:bg-surface-100 dark:focus-visible:bg-surface-700"
                    >
                        <AngleUp />
                    </button>
                    <button
                        type="button"
                        {...decrementProps}
                        className="px-2 hover:bg-surface-50 dark:hover:bg-surface-800 cursor-pointer text-surface-600 dark:text-surface-400 text-[.5rem] outline-none focus-visible:bg-surface-100 dark:focus-visible:bg-surface-700"
                    >
                        <AngleDown />
                    </button>
                </div>
            </div>
        </div>
    );
}
```

## Usage

```tsx showLineNumbers {1,3-4,7}
import { useInputNumber } from '@primereact/headless/inputnumber';

const { rootProps, state } = useInputNumber({
    defaultValue: 0
});

return <input {...rootProps} />;
```

`useInputNumber` handles numeric parsing, formatting, keyboard-driven increment/decrement, and boundary enforcement — see [Primitive](../../primitive/inputnumber/features.md) for a component-based API.

## Features

- `rootProps` returns spread-ready attributes including `role="spinbutton"`, ARIA value properties, and all event handlers
- `state.value` and `state.formattedValue` track the raw numeric and display-formatted values
- `increment`, `decrement`, `stepUp`, and `stepDown` methods for programmatic and UI-driven value changes
- `maxBoundry()` and `minBoundry()` helpers for checking boundary state
- Auto-repeating spin on pointer hold with accelerating intervals

## Behavior

### Default Value

Set `defaultValue` for uncontrolled initial value.

```tsx
const inputnumber = useInputNumber({ defaultValue: 42 });
```

### Controlled

Pass `value` with `onValueChange` for controlled usage.

```tsx
const [value, setValue] = React.useState(0);

const inputnumber = useInputNumber({
    value,
    onValueChange: (e) => setValue(e.value)
});
```

### Min and Max

Set `min` and `max` to enforce boundaries. Values are clamped on blur and during spin.

```tsx
const inputnumber = useInputNumber({ min: 0, max: 100 });
```

### Step

Set `step` to control the increment per spin operation. Defaults to `1`.

```tsx
const inputnumber = useInputNumber({ step: 5 });
```

### Locale and Grouping

Set `locale` for locale-aware formatting and `useGrouping` to toggle grouping separators.

```tsx
const inputnumber = useInputNumber({
    locale: 'de-DE',
    useGrouping: true
});
```

### Currency Mode

Set `mode` to `'currency'` and specify the `currency` code for monetary formatting.

```tsx
const inputnumber = useInputNumber({
    mode: 'currency',
    currency: 'USD',
    locale: 'en-US'
});
```

### Fraction Digits

Control decimal precision with `minFractionDigits` and `maxFractionDigits`.

```tsx
const inputnumber = useInputNumber({
    minFractionDigits: 2,
    maxFractionDigits: 4
});
```

### Prefix and Suffix

Add custom text around the number with `prefix` and `suffix`.

```tsx
const inputnumber = useInputNumber({
    prefix: '$',
    suffix: ' USD'
});
```

### Highlight on Focus

Set `highlightOnFocus` to automatically select the input text when the field receives focus.

```tsx
const inputnumber = useInputNumber({ highlightOnFocus: true });
```

### Custom Styling with Data Attributes

```css
[data-scope='inputnumber'][data-part='root'] { ... }
```

## API

### useInputNumber

> **API/props table for `useInputNumber` (`api`) is generated from upstream TypeScript types and is not yet mirrored — see the installed package types or the upstream docs. (TODO: mirror in v2.)

## Accessibility

See [InputNumber Primitive](../../primitive/inputnumber/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
