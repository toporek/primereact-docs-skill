# OrderList

OrderList is used to reorder items in a list using selection and drag-drop.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { useOrderList, type UseOrderListReorderEvent } from '@primereact/headless/orderlist';
import { Button } from '@primereact/ui/button';
import { ButtonGroup } from '@primereact/ui/buttongroup';
import { Label } from '@primereact/ui/label';
import { Listbox } from '@primereact/ui/listbox';
import { useState } from 'react';

type Movie = {
    title: string;
};

const movies: Movie[] = [
    { title: 'The Shawshank Redemption' },
    { title: 'Inception' },
    { title: 'Interstellar' },
    { title: 'The Dark Knight' },
    { title: 'Pulp Fiction' },
    { title: 'Baby Driver' },
    { title: 'Whiplash' },
    { title: 'Eternal Sunshine of the Spotless Mind' },
    { title: 'La La Land' },
    { title: 'Parasite' }
];

export default function Preview() {
    const [items, setItems] = useState(movies);
    const [selection, setSelection] = useState<Movie[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        onReorder: (e: UseOrderListReorderEvent) => setItems(e.value as Movie[])
    });

    return (
        <div className="flex justify-center">
            <div className="w-full sm:w-72 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <Label>My Favorite Movies</Label>
                    <ButtonGroup>
                        <Button {...orderList.firstProps} severity="secondary" variant="outlined" size="small" iconOnly aria-label="Move to first">
                            <AngleDoubleUp />
                        </Button>
                        <Button {...orderList.prevProps} severity="secondary" variant="outlined" size="small" iconOnly aria-label="Move up">
                            <AngleUp />
                        </Button>
                        <Button {...orderList.nextProps} severity="secondary" variant="outlined" size="small" iconOnly aria-label="Move down">
                            <AngleDown />
                        </Button>
                        <Button {...orderList.lastProps} severity="secondary" variant="outlined" size="small" iconOnly aria-label="Move to last">
                            <AngleDoubleDown />
                        </Button>
                    </ButtonGroup>
                </div>
                <Listbox.Root
                    value={selection}
                    onValueChange={(e) => setSelection((e.value as Movie[]) ?? [])}
                    options={orderList.state.value as Movie[]}
                    optionLabel="title"
                    multiple
                >
                    <Listbox.List>
                        {(orderList.state.value as Movie[]).map((movie, index) => (
                            <Listbox.Option key={movie.title} index={index} uKey={movie.title}>
                                <div className="flex items-center gap-3 w-full min-w-0">
                                    <span className="text-muted-color text-sm tabular-nums w-4 text-right shrink-0">{index + 1}</span>
                                    <span className="text-sm truncate">{movie.title}</span>
                                </div>
                            </Listbox.Option>
                        ))}
                    </Listbox.List>
                </Listbox.Root>
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
import { useOrderList, type UseOrderListReorderEvent } from '@primereact/headless/orderlist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { useState } from 'react';

type Movie = {
    title: string;
};

const movies: Movie[] = [
    { title: 'The Shawshank Redemption' },
    { title: 'Inception' },
    { title: 'Interstellar' },
    { title: 'The Dark Knight' },
    { title: 'Pulp Fiction' },
    { title: 'Baby Driver' },
    { title: 'Whiplash' },
    { title: 'Eternal Sunshine of the Spotless Mind' },
    { title: 'La La Land' },
    { title: 'Parasite' }
];

export default function BasicDemo() {
    const [items, setItems] = useState(movies);
    const [selection, setSelection] = useState<Movie[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        onReorder: (e: UseOrderListReorderEvent) => setItems(e.value as Movie[])
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-80">
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
                        onValueChange={(e) => setSelection((e.value as Movie[]) ?? [])}
                        options={orderList.state.value as Movie[]}
                        optionLabel="title"
                        multiple
                        className="flex-1"
                    >
                        <Listbox.List>
                            {(orderList.state.value as Movie[]).map((movie, index) => (
                                <Listbox.Option key={movie.title} index={index} uKey={movie.title}>
                                    <div className="flex items-center gap-3 w-full min-w-0">
                                        <span className="text-muted-color text-sm tabular-nums w-4 text-right shrink-0">{index + 1}</span>
                                        <span className="text-sm truncate">{movie.title}</span>
                                    </div>
                                </Listbox.Option>
                            ))}
                        </Listbox.List>
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
import { useOrderList, type UseOrderListReorderEvent } from '@primereact/headless/orderlist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

type Movie = {
    title: string;
};

const movies: Movie[] = [
    { title: 'The Shawshank Redemption' },
    { title: 'Inception' },
    { title: 'Interstellar' },
    { title: 'The Dark Knight' },
    { title: 'Pulp Fiction' },
    { title: 'Baby Driver' },
    { title: 'Whiplash' },
    { title: 'Eternal Sunshine of the Spotless Mind' },
    { title: 'La La Land' },
    { title: 'Parasite' }
];

const optionClassName = cn('cursor-grab select-none', 'data-dragging:cursor-grabbing data-dragging:opacity-90', 'data-dropping:opacity-100');

export default function DragDropDemo() {
    const [items, setItems] = useState(movies);
    const [selection, setSelection] = useState<Movie[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        draggable: true,
        onReorder: (e: UseOrderListReorderEvent) => setItems(e.value as Movie[])
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-80">
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
                            onValueChange={(e) => setSelection((e.value as Movie[]) ?? [])}
                            options={orderList.state.value as Movie[]}
                            optionLabel="title"
                            multiple
                        >
                            <Listbox.List {...orderList.listProps} style={{ touchAction: 'none' }}>
                                {orderList.state.value.map((item, index) => {
                                    const movie = item as Movie;
                                    const optionProps = orderList.getOptionProps(item, index);

                                    return (
                                        <Listbox.Option
                                            key={movie.title}
                                            uKey={movie.title}
                                            index={index}
                                            {...optionProps}
                                            className={optionClassName}
                                        >
                                            <span className="truncate">{movie.title}</span>
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
import { useOrderList, type UseOrderListReorderEvent } from '@primereact/headless/orderlist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

type Movie = {
    title: string;
};

const movies: Movie[] = [
    { title: 'The Shawshank Redemption' },
    { title: 'Inception' },
    { title: 'Interstellar' },
    { title: 'The Dark Knight' },
    { title: 'Pulp Fiction' },
    { title: 'Baby Driver' },
    { title: 'Whiplash' },
    { title: 'Eternal Sunshine of the Spotless Mind' },
    { title: 'La La Land' },
    { title: 'Parasite' }
];

const optionClassName = cn(
    'cursor-grab select-none',
    'data-dragging:cursor-grabbing data-dragging:opacity-90',
    'data-dropping:opacity-100',
    'data-[sortable-placeholder]:opacity-50'
);

export default function PlaceholderDemo() {
    const [items, setItems] = useState(movies);
    const [selection, setSelection] = useState<Movie[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        draggable: true,
        placeholder: 'clone',
        onReorder: (e: UseOrderListReorderEvent) => setItems(e.value as Movie[])
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-80">
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
                            onValueChange={(e) => setSelection((e.value as Movie[]) ?? [])}
                            options={orderList.state.value as Movie[]}
                            optionLabel="title"
                            multiple
                        >
                            <Listbox.List {...orderList.listProps} style={{ touchAction: 'none' }}>
                                {orderList.state.value.map((item, index) => {
                                    const movie = item as Movie;
                                    const optionProps = orderList.getOptionProps(item, index);

                                    return (
                                        <Listbox.Option
                                            key={movie.title}
                                            uKey={movie.title}
                                            index={index}
                                            {...optionProps}
                                            className={optionClassName}
                                        >
                                            <span className="truncate">{movie.title}</span>
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
import { useOrderList, type UseOrderListReorderEvent } from '@primereact/headless/orderlist';
import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { Listbox, type ListboxListInstance } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

type Movie = {
    title: string;
};

const movies: Movie[] = [
    { title: 'The Shawshank Redemption' },
    { title: 'Inception' },
    { title: 'Interstellar' },
    { title: 'The Dark Knight' },
    { title: 'Pulp Fiction' },
    { title: 'Baby Driver' },
    { title: 'Whiplash' },
    { title: 'Eternal Sunshine of the Spotless Mind' },
    { title: 'La La Land' },
    { title: 'Parasite' }
];

const optionClassName = cn('cursor-grab select-none', 'data-dragging:cursor-grabbing data-dragging:opacity-90', 'data-dropping:opacity-100');

export default function CheckboxDemo() {
    const [items, setItems] = useState(movies);
    const [selection, setSelection] = useState<Movie[]>([]);

    const orderList = useOrderList({
        value: items,
        selection,
        draggable: true,
        onReorder: (e: UseOrderListReorderEvent) => setItems(e.value as Movie[])
    });

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-80">
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
                            onValueChange={(e) => setSelection((e.value as Movie[]) ?? [])}
                            options={orderList.state.value as Movie[]}
                            optionLabel="title"
                            multiple
                        >
                            <Listbox.List {...orderList.listProps} style={{ touchAction: 'none' }}>
                                {(instance: ListboxListInstance) => {
                                    const { listbox } = instance;

                                    return orderList.state.value.map((item, index) => {
                                        const movie = item as Movie;
                                        const selected = listbox?.isSelected(movie);
                                        const optionProps = orderList.getOptionProps(item, index);

                                        return (
                                            <Listbox.Option
                                                key={movie.title}
                                                uKey={movie.title}
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
                                                <span className="truncate">{movie.title}</span>
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
