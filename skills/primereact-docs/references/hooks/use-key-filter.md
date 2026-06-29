# useKeyFilter

Block individual keystrokes that don't match a pattern, before they reach the input.

## Usage

```tsx
import { useKeyFilter } from '@primereact/hooks/use-key-filter';
```

```tsx
const { onBeforeInput, onKeyPress, onPaste } = useKeyFilter({ pattern: 'int' });

<InputText onBeforeInput={onBeforeInput} onKeyPress={onKeyPress} onPaste={onPaste} />;
```

Spread the returned handlers onto a native input. Keystrokes and pastes that don't match the pattern are rejected before they change the value.

## Signature

```ts
function useKeyFilter(options: UseKeyFilterOptions): UseKeyFilterExposes;
```

## Options

- `pattern`, a preset name or a `RegExp`. Presets: `pint`, `int`, `pnum`, `num`, `money`, `hex`, `email`, `alpha`, `alphanum`.
- `validateOnly?`, when `true`, individual keys are allowed and the whole value is validated instead (use `validate` on form events).

## Returns

`{ onBeforeInput, onKeyPress, onPaste, validate }`. The first three are input handlers to spread; `validate(event)` returns a boolean for the `validateOnly` flow.

## Basic

```tsx
'use client';
import { useKeyFilter } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function PatternDemo() {
    const { onKeyPress: onIntegerKeyPress } = useKeyFilter({ pattern: 'int' });
    const { onKeyPress: onNumberKeyPress } = useKeyFilter({ pattern: 'num' });
    const { onKeyPress: onMoneyKeyPress } = useKeyFilter({ pattern: 'money' });
    const { onKeyPress: onHexKeyPress } = useKeyFilter({ pattern: 'hex' });
    const { onKeyPress: onAlphaKeyPress } = useKeyFilter({ pattern: 'alpha' });
    const { onKeyPress: onAlphanumKeyPress } = useKeyFilter({ pattern: 'alphanum' });

    const [integer, setInteger] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [money, setMoney] = React.useState('');
    const [hex, setHex] = React.useState('');
    const [alphabetic, setAlphabetic] = React.useState('');
    const [alphanumeric, setAlphanumeric] = React.useState('');

    return (
        <div>
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <Label htmlFor="integer" className="font-bold block mb-2">
                        Integer
                    </Label>
                    <InputText
                        id="integer"
                        value={integer}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInteger(e.target.value)}
                        onKeyPress={onIntegerKeyPress}
                        className="w-full"
                    />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="number" className="font-bold block mb-2">
                        Number
                    </Label>
                    <InputText
                        id="number"
                        value={number}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
                        onKeyPress={onNumberKeyPress}
                        className="w-full"
                    />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="money" className="font-bold block mb-2">
                        Money
                    </Label>
                    <InputText
                        id="money"
                        value={money}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMoney(e.target.value)}
                        onKeyPress={onMoneyKeyPress}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <Label htmlFor="hex" className="font-bold block mb-2">
                        Hex
                    </Label>
                    <InputText
                        id="hex"
                        value={hex}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHex(e.target.value)}
                        onKeyPress={onHexKeyPress}
                        className="w-full"
                    />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="alphabetic" className="font-bold block mb-2">
                        Alphabetic
                    </Label>
                    <InputText
                        id="alphabetic"
                        value={alphabetic}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlphabetic(e.target.value)}
                        onKeyPress={onAlphaKeyPress}
                        className="w-full"
                    />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="alphanumeric" className="font-bold block mb-2">
                        Alphanumeric
                    </Label>
                    <InputText
                        id="alphanumeric"
                        value={alphanumeric}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlphanumeric(e.target.value)}
                        onKeyPress={onAlphanumKeyPress}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

```
