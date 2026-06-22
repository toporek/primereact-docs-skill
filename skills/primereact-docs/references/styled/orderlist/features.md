# OrderList

OrderList is used to reorder items in a list using selection and drag-drop.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { useOrderList } from '@primereact/headless/orderlist';
import type { useOrderListReorderEvent } from '@primereact/types/shared/orderlist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

type City = (typeof cities)[0];

export default function Preview() {
    const [items, setItems] = useState(cities);
    const [selection, setSelection] = useState<City[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        onReorder: (e: useOrderListReorderEvent) => setItems(e.value as typeof cities)
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-56">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                        <Button {...orderList.firstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                            <AngleDoubleUp />
                        </Button>
                        <Button {...orderList.prevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                            <AngleUp />
                        </Button>
                        <Button {...orderList.nextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                            <AngleDown />
                        </Button>
                        <Button {...orderList.lastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                            <AngleDoubleDown />
                        </Button>
                    </div>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={orderList.state.value as typeof cities}
                        optionLabel="name"
                        multiple
                        className="flex-1"
                    >
                        <Listbox.List />
                    </Listbox.Root>
                </div>
            </div>
        </div>
    );
}
```

## Usage

OrderList is a headless hook that manages list ordering with optional drag-and-drop support. It works with **Listbox** for built-in selection and keyboard navigation.

```tsx
import { useOrderList } from '@primereact/headless/orderlist';
```

```tsx
const orderList = useOrderList({
    value: items,
    selection,
    dataKey: 'id',
    optionValue: 'id',
    draggable: true,
    onReorder: (e) => setItems(e.value),
    onSelectionChange: (e) => setSelection(e.value)
});
```

## Examples

### Basic

Selection-based reordering with move buttons. Click to select items, then use the buttons to move them up, down, to top, or to bottom.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { useOrderList } from '@primereact/headless/orderlist';
import type { useOrderListReorderEvent } from '@primereact/types/shared/orderlist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

type City = (typeof cities)[0];

export default function BasicDemo() {
    const [items, setItems] = useState(cities);
    const [selection, setSelection] = useState<City[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        onReorder: (e: useOrderListReorderEvent) => setItems(e.value as typeof cities)
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-56">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                        <Button {...orderList.firstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                            <AngleDoubleUp />
                        </Button>
                        <Button {...orderList.prevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                            <AngleUp />
                        </Button>
                        <Button {...orderList.nextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                            <AngleDown />
                        </Button>
                        <Button {...orderList.lastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                            <AngleDoubleDown />
                        </Button>
                    </div>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={orderList.state.value as typeof cities}
                        optionLabel="name"
                        multiple
                        className="flex-1"
                    >
                        <Listbox.List />
                    </Listbox.Root>
                </div>
            </div>
        </div>
    );
}
```

### Drag Drop

Enable drag-and-drop reordering by setting `draggable: true`. Items can be grabbed and dragged to a new position with animated shift feedback.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { useOrderList } from '@primereact/headless/orderlist';
import type { useOrderListReorderEvent } from '@primereact/types/shared/orderlist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

type City = (typeof cities)[0];

const optionClassName = cn(
    'cursor-grab select-none transition-transform duration-200',
    'data-dragging:transition-none data-dragging:fixed data-dragging:z-50 data-dragging:cursor-grabbing data-dragging:shadow-xl data-dragging:pointer-events-none',
    'data-dragging:w-(--width) data-dragging:h-(--height) data-dragging:left-(--left) data-dragging:top-(--top)',
    'data-dragging:translate-x-(--dnd-x) data-dragging:translate-y-(--dnd-y)',
    'data-dropping:transition-[translate] data-dropping:duration-200 data-dropping:ease-out'
);

export default function DragDropDemo() {
    const [items, setItems] = useState(cities);
    const [selection, setSelection] = useState<City[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        draggable: true,
        onReorder: (e: useOrderListReorderEvent) => setItems(e.value as typeof cities)
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-56">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                        <Button {...orderList.firstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                            <AngleDoubleUp />
                        </Button>
                        <Button {...orderList.prevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                            <AngleUp />
                        </Button>
                        <Button {...orderList.nextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                            <AngleDown />
                        </Button>
                        <Button {...orderList.lastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                            <AngleDoubleDown />
                        </Button>
                    </div>
                    <div className="flex-1">
                        <Listbox.Root
                            value={selection}
                            onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                            options={orderList.state.value as typeof cities}
                            optionLabel="name"
                            multiple
                        >
                            <Listbox.List {...orderList.listProps} style={{ touchAction: 'none' }}>
                                {orderList.state.value.map((item, index) => {
                                    const city = item as City;
                                    const optionProps = orderList.getOptionProps(item, index);

                                    return (
                                        <Listbox.Option key={city.code} uKey={city.code} index={index} {...optionProps} className={optionClassName}>
                                            {city.name}
                                        </Listbox.Option>
                                    );
                                })}
                            </Listbox.List>
                        </Listbox.Root>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### Placeholder

Set `placeholder: 'clone'` to leave a visual copy of the dragged item in place. Use the `data-sortable-placeholder` attribute to style it with CSS.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { useOrderList } from '@primereact/headless/orderlist';
import type { useOrderListReorderEvent } from '@primereact/types/shared/orderlist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

type City = (typeof cities)[0];

const optionClassName = cn(
    'cursor-grab select-none transition-[transform,opacity] duration-200',
    'data-dragging:transition-none data-dragging:fixed data-dragging:z-50 data-dragging:cursor-grabbing data-dragging:shadow-xl data-dragging:pointer-events-none',
    'data-dragging:w-(--width) data-dragging:h-(--height) data-dragging:left-(--left) data-dragging:top-(--top)',
    'data-dragging:translate-x-(--dnd-x) data-dragging:translate-y-(--dnd-y)',
    'data-dropping:transition-[translate] data-dropping:duration-200 data-dropping:ease-out',
    'data-[sortable-placeholder]:opacity-50'
);

export default function PlaceholderDemo() {
    const [items, setItems] = useState(cities);
    const [selection, setSelection] = useState<City[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        draggable: true,
        placeholder: 'clone',
        onReorder: (e: useOrderListReorderEvent) => setItems(e.value as typeof cities)
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-56">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                        <Button {...orderList.firstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                            <AngleDoubleUp />
                        </Button>
                        <Button {...orderList.prevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                            <AngleUp />
                        </Button>
                        <Button {...orderList.nextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                            <AngleDown />
                        </Button>
                        <Button {...orderList.lastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                            <AngleDoubleDown />
                        </Button>
                    </div>
                    <div className="flex-1">
                        <Listbox.Root
                            value={selection}
                            onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                            options={orderList.state.value as typeof cities}
                            optionLabel="name"
                            multiple
                        >
                            <Listbox.List {...orderList.listProps} style={{ touchAction: 'none' }}>
                                {orderList.state.value.map((item, index) => {
                                    const city = item as City;
                                    const optionProps = orderList.getOptionProps(item, index);

                                    return (
                                        <Listbox.Option key={city.code} uKey={city.code} index={index} {...optionProps} className={optionClassName}>
                                            {city.name}
                                        </Listbox.Option>
                                    );
                                })}
                            </Listbox.List>
                        </Listbox.Root>
                    </div>
                </div>
            </div>
        </div>
    );
}
```

### Checkbox

Combine with Checkbox for a visual multi-select experience alongside drag-and-drop reordering.

```tsx
'use client';
import { Check } from '@primeicons/react';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { useOrderList } from '@primereact/headless/orderlist';
import type { useOrderListReorderEvent } from '@primereact/types/shared/orderlist';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { Listbox, type ListboxListInstance } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

type City = (typeof cities)[0];

const optionClassName = cn(
    'cursor-grab select-none transition-transform duration-200',
    'data-dragging:transition-none data-dragging:fixed data-dragging:z-50 data-dragging:cursor-grabbing data-dragging:shadow-xl data-dragging:pointer-events-none',
    'data-dragging:w-(--width) data-dragging:h-(--height) data-dragging:left-(--left) data-dragging:top-(--top)',
    'data-dragging:translate-x-(--dnd-x) data-dragging:translate-y-(--dnd-y)',
    'data-dropping:transition-[translate] data-dropping:duration-200 data-dropping:ease-out'
);

export default function CheckboxDemo() {
    const [items, setItems] = useState(cities);
    const [selection, setSelection] = useState<City[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        draggable: true,
        onReorder: (e: useOrderListReorderEvent) => setItems(e.value as typeof cities)
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-56">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                        <Button {...orderList.firstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                            <AngleDoubleUp />
                        </Button>
                        <Button {...orderList.prevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                            <AngleUp />
                        </Button>
                        <Button {...orderList.nextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                            <AngleDown />
                        </Button>
                        <Button {...orderList.lastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                            <AngleDoubleDown />
                        </Button>
                    </div>
                    <div className="flex-1">
                        <Listbox.Root
                            value={selection}
                            onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                            options={orderList.state.value as typeof cities}
                            optionLabel="name"
                            multiple
                        >
                            <Listbox.List {...orderList.listProps} style={{ touchAction: 'none' }}>
                                {(instance: ListboxListInstance) => {
                                    const { listbox } = instance;

                                    return orderList.state.value.map((item, index) => {
                                        const city = item as City;
                                        const selected = listbox?.isSelected(city);
                                        const optionProps = orderList.getOptionProps(item, index);

                                        return (
                                            <Listbox.Option
                                                key={city.code}
                                                uKey={city.code}
                                                index={index}
                                                {...optionProps}
                                                className={cn(optionClassName, 'gap-2')}
                                            >
                                                <Checkbox.Root defaultChecked={!!selected} tabIndex={-1} readOnly>
                                                    <Checkbox.Box>
                                                        <Checkbox.Indicator match="checked">
                                                            <Check />
                                                        </Checkbox.Indicator>
                                                    </Checkbox.Box>
                                                </Checkbox.Root>
                                                {city.name}
                                            </Listbox.Option>
                                        );
                                    });
                                }}
                            </Listbox.List>
                        </Listbox.Root>
                    </div>
                </div>
            </div>
        </div>
    );
}
```
