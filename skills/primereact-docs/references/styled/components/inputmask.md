# InputMask

InputMask is used to enter input in a certain format such as numeric, date, currency, email and phone.

```tsx
'use client';
import { useMask } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function Preview() {
    const phone = useMask({ mask: '(999) 999-9999' });
    const date = useMask({ mask: '99/99/9999', slotChar: 'dd/mm/yyyy' });
    const card = useMask({ mask: '9999 9999 9999 9999' });
    const ssn = useMask({ mask: '999-99-9999' });

    return (
        <div className="max-w-xs mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Label htmlFor="prev-phone" className="font-bold">
                    Phone
                </Label>
                <InputText id="prev-phone" ref={phone.ref} placeholder="(999) 999-9999" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="prev-date" className="font-bold">
                    Date
                </Label>
                <InputText id="prev-date" ref={date.ref} placeholder="dd/mm/yyyy" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="prev-card" className="font-bold">
                    Card Number
                </Label>
                <InputText id="prev-card" ref={card.ref} placeholder="9999 9999 9999 9999" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="prev-ssn" className="font-bold">
                    SSN
                </Label>
                <InputText id="prev-ssn" ref={ssn.ref} placeholder="999-99-9999" className="w-full" />
            </div>
        </div>
    );
}

```

## Usage

```tsx
import { useMask } from '@primereact/hooks/use-mask';
```

```tsx
const mask = useMask(UseMaskOptions);
```

## Examples

### Basic

```tsx
'use client';
import { useMask } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';

export default function BasicDemo() {
    const { ref } = useMask({ mask: '99-999999' });

    return (
        <div className="flex justify-center">
            <InputText ref={ref} placeholder="99-999999" />
        </div>
    );
}

```

### Format Patterns

Mask format can be a combination of the following definitions; _a_ for alphabetic characters, _9_ for numeric characters and _\*_ for alphanumberic characters. In addition, formatting characters like _(_ , _)_ , _-_ are also accepted.

```tsx
'use client';
import { useMask } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function MaskDemo() {
    const ssn = useMask({ mask: '999-99-9999' });
    const phone = useMask({ mask: '(999) 999-9999' });
    const serial = useMask({ mask: 'a*-999-a999' });

    return (
        <div className="flex flex-col max-w-xs mx-auto gap-4">
            <div className="flex-auto">
                <Label htmlFor="ssn" className="font-bold block mb-2">
                    SSN
                </Label>
                <InputText ref={ssn.ref} id="ssn" placeholder="999-99-9999" fluid />
            </div>

            <div className="flex-auto">
                <Label htmlFor="phone" className="font-bold block mb-2">
                    Phone
                </Label>
                <InputText ref={phone.ref} id="phone" placeholder="(999) 999-9999" fluid />
            </div>

            <div className="flex-auto">
                <Label htmlFor="serial" className="font-bold block mb-2">
                    Serial
                </Label>
                <InputText ref={serial.ref} id="serial" placeholder="a*-999-a999" fluid />
            </div>
        </div>
    );
}

```

### Optional

When the input does not complete the mask definition, it is cleared by default. Use _autoClear_ option to control this behavior. In addition, _?_ is used to mark anything after the question mark optional.

```tsx
'use client';
import { useMask } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';

export default function OptionalDemo() {
    const { ref } = useMask({ mask: '(999) 999-9999? x99999' });

    return (
        <div className="flex justify-center">
            <InputText ref={ref} placeholder="(999) 999-9999? x99999" />
        </div>
    );
}

```

### Slot Character

Default placeholder for a mask is underscore that can be customized using _slotChar_ option.

```tsx
'use client';
import { useMask } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';

export default function SlotCharDemo() {
    const { ref } = useMask({ mask: '99/99/9999', slotChar: 'mm/dd/yyyy' });

    return (
        <div className="flex justify-center">
            <InputText ref={ref} placeholder="mm/dd/yyyy" />
        </div>
    );
}

```

### Unmask

By default the bound value contains the formatted mask. Enable _unmask_ option to receive the raw value without the mask characters.

```tsx
'use client';
import { useMask } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';

export default function UnmaskDemo() {
    const { ref, value, rawValue } = useMask({ mask: '(999) 999-9999' });

    return (
        <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-color">Raw: {rawValue || '—'}</span>
            <span className="text-sm text-muted-color">Masked: {value || '—'}</span>
            <InputText ref={ref} placeholder="(999) 999-9999" />
        </div>
    );
}

```

### AutoClear

When _autoClear_ is set to false, the incomplete value is preserved on blur instead of being cleared.

```tsx
'use client';
import { useMask } from '@primereact/hooks';
import { InputText } from '@primereact/ui/inputtext';

export default function AutoClearDemo() {
    const { ref } = useMask({ mask: '(999) 999-9999', autoClear: false });

    return (
        <div className="flex justify-center">
            <InputText ref={ref} placeholder="(999) 999-9999" />
        </div>
    );
}

```

### DatePicker

A mask can drive a _DatePicker_: _onComplete_ parses the raw value into a date and feeds the panel, and picking a day writes the formatted value back through _setValue_.

```tsx
'use client';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';
import { useMask, type UseMaskValueChangeEvent } from '@primereact/hooks';
import { Button } from '@primereact/ui/button';
import { DatePicker, type DatePickerRootProps, type DatePickerRootValueChangeEvent } from '@primereact/ui/datepicker';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

const pad = (n: number) => String(n).padStart(2, '0');

export default function DatePickerDemo() {
    const [date, setDate] = React.useState<DatePickerRootProps['value']>(null);

    const { ref, setValue } = useMask({
        mask: '99/99/9999',
        slotChar: 'dd/mm/yyyy',
        onComplete: (event: UseMaskValueChangeEvent) => {
            // rawValue is ddmmyyyy
            const day = Number(event.rawValue.slice(0, 2));
            const month = Number(event.rawValue.slice(2, 4));
            const year = Number(event.rawValue.slice(4, 8));
            const parsed = new Date(year, month - 1, day);

            if (!Number.isNaN(parsed.getTime())) setDate(parsed);
        }
    });

    const onPick = (event: DatePickerRootValueChangeEvent) => {
        setDate(event.value);

        if (event.value instanceof Date) {
            setValue(`${pad(event.value.getDate())}/${pad(event.value.getMonth() + 1)}/${event.value.getFullYear()}`);
        }
    };

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} dateFormat="dd/mm/yy" onValueChange={onPick}>
                <DatePicker.Input as={InputText} ref={ref} placeholder="dd/mm/yyyy" />
                <DatePicker.Portal>
                    <DatePicker.Positioner align="start">
                        <DatePicker.Popup>
                            <DatePicker.Body>
                                <DatePicker.Panel>
                                    <DatePicker.Calendar>
                                        <DatePicker.Header>
                                            <DatePicker.Prev as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronLeft />
                                            </DatePicker.Prev>
                                            <DatePicker.Title>
                                                <DatePicker.SelectMonth />
                                                <DatePicker.SelectYear />
                                                <DatePicker.Decade />
                                            </DatePicker.Title>
                                            <DatePicker.Next as={Button} iconOnly variant="text" rounded severity="secondary" size="small">
                                                <ChevronRight />
                                            </DatePicker.Next>
                                        </DatePicker.Header>
                                        <DatePicker.Table>
                                            <DatePicker.TableHead />
                                            <DatePicker.TableBody />
                                            <DatePicker.TableBody view="month" />
                                            <DatePicker.TableBody view="year" />
                                        </DatePicker.Table>
                                    </DatePicker.Calendar>
                                </DatePicker.Panel>
                            </DatePicker.Body>
                        </DatePicker.Popup>
                    </DatePicker.Positioner>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}

```
