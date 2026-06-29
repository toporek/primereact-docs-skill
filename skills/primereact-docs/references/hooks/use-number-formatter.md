# useNumberFormatter

Locale-aware number formatting and parsing built on Intl.NumberFormat, decimal or currency, with custom prefix/suffix and rounding.

## Usage

```tsx
import { useNumberFormatter } from '@primereact/hooks/use-number-formatter';
```

```tsx
const formatter = useNumberFormatter({
    value: 1234.56,
    locale: 'en-US',
    mode: 'currency',
    currency: 'USD'
});

formatter.formattedValue; // "$1,234.56"
formatter.formatValue(99); // "$99.00"
formatter.parseValue('$1,234.56'); // 1234.56
```

## Options

- `value?`, optional input; if provided, `formattedValue` in the return mirrors it.
- `locale?`, `localeMatcher?`, passed to `Intl.NumberFormat`.
- `mode?`, `'decimal'` (default) or `'currency'`.
- `currency?`, `currencyDisplay?`, ISO code and display style.
- `useGrouping?`, thousands separators. Default `true`.
- `minFractionDigits?`, `maxFractionDigits?`, `roundingMode?`, fraction handling.
- `prefix?`, `suffix?`, additional text wrapped around the formatted value.
- `min?`, lower bound; controls whether a minus sign is allowed.
- `format?`, `false` returns the raw string without applying the formatter.

## Returns

- `formattedValue`, formatted representation of `options.value`.
- `formatValue(value)` / `parseValue(text)`, format or parse on demand.
- `addWithPrecision(base, inc)`, floating-point-safe addition, useful for steppers.
- Character classifiers (`isNumeralChar`, `isMinusSign`, `isDecimalSign`, `allowMinusSign`) and index helpers (`getDecimalCharIndexes`, `getCharIndexes`, `getDecimalLength`, `concatValues`) that power input-mask behaviour.
- `groupChar`, `prefixChar`, `suffixChar`, resolved separator characters for the active locale.
- `resolvedOptions()`, forwards `Intl.NumberFormat#resolvedOptions`.
- `constructParser()`, rebuild the internal parser; the hook calls it automatically when options change.

## When to use it

Anywhere you want consistent localized number rendering without maintaining your own parsers, inputs with currency/percent formatting, read-only totals, calculator-style UIs.
