# KeyFilter

KeyFilter is used to block individual keystrokes based on a pattern.

```tsx
'use client';
import { useKeyFilter } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function Preview() {
    const { onKeyPress: onInteger } = useKeyFilter({ pattern: 'int' });
    const { onKeyPress: onMoney } = useKeyFilter({ pattern: 'money' });
    const { onKeyPress: onAlpha } = useKeyFilter({ pattern: 'alpha' });
    const { onKeyPress: onHex } = useKeyFilter({ pattern: 'hex' });

    const [integer, setInteger] = React.useState('');
    const [money, setMoney] = React.useState('');
    const [alpha, setAlpha] = React.useState('');
    const [hex, setHex] = React.useState('');

    return (
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
                <Label htmlFor="prev-int" className="font-bold">
                    Integer
                </Label>
                <InputText
                    id="prev-int"
                    value={integer}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInteger(e.target.value)}
                    onKeyPress={onInteger}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="prev-money" className="font-bold">
                    Money
                </Label>
                <InputText
                    id="prev-money"
                    value={money}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMoney(e.target.value)}
                    onKeyPress={onMoney}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="prev-alpha" className="font-bold">
                    Alphabetic
                </Label>
                <InputText
                    id="prev-alpha"
                    value={alpha}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlpha(e.target.value)}
                    onKeyPress={onAlpha}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="prev-hex" className="font-bold">
                    Hex
                </Label>
                <InputText
                    id="prev-hex"
                    value={hex}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHex(e.target.value)}
                    onKeyPress={onHex}
                    className="w-full"
                />
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useKeyFilter } from '@primereact/hooks/use-key-filter';
```

```tsx
const keyfilter = useKeyFilter(UseKeyFilterOptions);
```

## Examples

### Pattern

useKeyFilter provides various presets configured with the _pattern_ option.

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

### Regex

In addition to the presets, a regular expression can be configured for customization of blocking a single key press.

```tsx
'use client';
import { useKeyFilter } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function RegexDemo() {
    const { onKeyPress: onSpaceKeyPress } = useKeyFilter({ pattern: /[^\s]/ });
    const { onKeyPress: onCharsKeyPress } = useKeyFilter({ pattern: /^[^<>*!]+$/ });

    const [spacekey, setSpacekey] = React.useState('');
    const [chars, setChars] = React.useState('');

    return (
        <div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <Label htmlFor="spacekey" className="font-bold block mb-2">
                        Block Space
                    </Label>
                    <InputText
                        id="spacekey"
                        value={spacekey}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSpacekey(e.target.value)}
                        onKeyPress={onSpaceKeyPress}
                        fluid
                    />
                </div>
                <div className="flex-auto">
                    <Label htmlFor="chars" className="font-bold block mb-2">
                        Block &lt; &gt; * !
                    </Label>
                    <InputText
                        id="chars"
                        value={chars}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChars(e.target.value)}
                        onKeyPress={onCharsKeyPress}
                        fluid
                    />
                </div>
            </div>
        </div>
    );
}

```

### Regex Word

In addition to the presets, a regular expression can be used to validate the entire word using _validateOnly_ option.

```tsx
'use client';
import { useKeyFilter } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function RegexWordDemo() {
    const { onKeyPress, validate } = useKeyFilter({ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true });

    const [text, setText] = React.useState('');

    const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (validate(e)) {
            setText(e.target.value);
        }
    };

    return (
        <div className="flex justify-center">
            <div>
                <Label htmlFor="numkeys" className="font-bold block mb-2">
                    Block Numeric (allow &quot;+&quot; only once at start)
                </Label>
                <InputText
                    id="numkeys"
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => validateInput(e)}
                    onKeyPress={onKeyPress}
                    fluid
                />
            </div>
        </div>
    );
}

```
