# PickList

PickList is used to transfer items between two lists with drag-drop and button controls.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { AngleUp } from '@primeicons/react/angle-up';
import { usePickList } from '@primereact/headless/picklist';
import type { usePickListReorderEvent, usePickListSelectionChangeEvent } from '@primereact/types/shared/picklist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Tokyo', code: 'TKY' },
    { name: 'Berlin', code: 'BRL' },
    { name: 'Sydney', code: 'SYD' },
    { name: 'Toronto', code: 'TOR' },
    { name: 'Dubai', code: 'DBI' }
];

type City = (typeof cities)[0];

const optionClassName = cn(
    'cursor-grab select-none transition-transform duration-200',
    'data-dragging:transition-none data-dragging:fixed data-dragging:z-50 data-dragging:cursor-grabbing data-dragging:shadow-xl data-dragging:pointer-events-none',
    'data-dragging:w-(--width) data-dragging:h-(--height) data-dragging:left-(--left) data-dragging:top-(--top)',
    'data-dragging:translate-x-(--dnd-x) data-dragging:translate-y-(--dnd-y)',
    'data-dropping:transition-[translate] data-dropping:duration-200 data-dropping:ease-out'
);

export default function Preview() {
    const [source, setSource] = useState(cities);
    const [target, setTarget] = useState<City[]>([]);
    const [selection, setSelection] = useState<City[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        onChange: (e: usePickListReorderEvent) => {
            setSource(e.source as typeof cities);
            setTarget(e.target as typeof cities);
        },
        onSelectionChange: (e: usePickListSelectionChangeEvent) => setSelection(e.value as City[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-center w-full max-w-2xl">
                <div className="flex flex-row md:flex-col gap-1">
                    <Button {...pickList.sourceFirstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...pickList.sourcePrevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...pickList.sourceNextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...pickList.sourceLastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
                </div>
                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={pickList.state.source as typeof cities}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.sourceListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.source as typeof cities).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'source');

                                return (
                                    <Listbox.Option key={item.code} uKey={item.code} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1">
                    <Button
                        {...pickList.moveToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleRight />
                    </Button>
                    <Button
                        {...pickList.moveAllToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleRight />
                    </Button>
                    <Button
                        {...pickList.moveToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleLeft />
                    </Button>
                    <Button
                        {...pickList.moveAllToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleLeft />
                    </Button>
                </div>

                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={pickList.state.target as typeof cities}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.targetListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.target as typeof cities).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'target');

                                return (
                                    <Listbox.Option key={item.code} uKey={item.code} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>
                <div className="flex flex-row md:flex-col gap-1">
                    <Button {...pickList.targetFirstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...pickList.targetPrevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...pickList.targetNextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...pickList.targetLastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
                </div>
            </div>
        </div>
    );
}
```

## Usage

PickList is a headless hook that manages two lists with transfer, reorder, and optional drag-and-drop between them. It works with **Listbox** for built-in selection and keyboard navigation.

```tsx
import { usePickList } from '@primereact/headless/picklist';
```

```tsx
const pickList = usePickList({
    source,
    target,
    selection,
    draggable: true,
    onChange: (e) => {
        setSource(e.source);
        setTarget(e.target);
    },
    onSelectionChange: (e) => setSelection(e.value)
});
```

## Examples

### Basic

Transfer items between two lists using the arrow buttons. Select items and click the transfer buttons to move them.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { AngleUp } from '@primeicons/react/angle-up';
import { usePickList } from '@primereact/headless/picklist';
import type { usePickListReorderEvent, usePickListSelectionChangeEvent } from '@primereact/types/shared/picklist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Tokyo', code: 'TKY' },
    { name: 'Berlin', code: 'BRL' },
    { name: 'Sydney', code: 'SYD' },
    { name: 'Toronto', code: 'TOR' },
    { name: 'Dubai', code: 'DBI' }
];

type City = (typeof cities)[0];

const optionClassName = cn(
    'cursor-grab select-none transition-transform duration-200',
    'data-dragging:transition-none data-dragging:fixed data-dragging:z-50 data-dragging:cursor-grabbing data-dragging:shadow-xl data-dragging:pointer-events-none',
    'data-dragging:w-(--width) data-dragging:h-(--height) data-dragging:left-(--left) data-dragging:top-(--top)',
    'data-dragging:translate-x-(--dnd-x) data-dragging:translate-y-(--dnd-y)',
    'data-dropping:transition-[translate] data-dropping:duration-200 data-dropping:ease-out'
);

export default function BasicDemo() {
    const [source, setSource] = useState(cities);
    const [target, setTarget] = useState<City[]>([]);
    const [selection, setSelection] = useState<City[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        onChange: (e: usePickListReorderEvent) => {
            setSource(e.source as typeof cities);
            setTarget(e.target as typeof cities);
        },
        onSelectionChange: (e: usePickListSelectionChangeEvent) => setSelection(e.value as City[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-center w-full max-w-2xl">
                <div className="flex flex-row md:flex-col gap-1">
                    <Button {...pickList.sourceFirstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...pickList.sourcePrevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...pickList.sourceNextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...pickList.sourceLastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
                </div>
                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={pickList.state.source as typeof cities}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.sourceListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.source as typeof cities).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'source');

                                return (
                                    <Listbox.Option key={item.code} uKey={item.code} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1">
                    <Button
                        {...pickList.moveToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleRight />
                    </Button>
                    <Button
                        {...pickList.moveAllToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleRight />
                    </Button>
                    <Button
                        {...pickList.moveToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleLeft />
                    </Button>
                    <Button
                        {...pickList.moveAllToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleLeft />
                    </Button>
                </div>

                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={pickList.state.target as typeof cities}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.targetListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.target as typeof cities).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'target');

                                return (
                                    <Listbox.Option key={item.code} uKey={item.code} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>
                <div className="flex flex-row md:flex-col gap-1">
                    <Button {...pickList.targetFirstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...pickList.targetPrevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...pickList.targetNextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...pickList.targetLastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
                </div>
            </div>
        </div>
    );
}
```

### Drag Drop

Enable drag-and-drop by setting `draggable: true`. Items can be dragged within a list to reorder, or dragged across lists to transfer.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { AngleUp } from '@primeicons/react/angle-up';
import { usePickList } from '@primereact/headless/picklist';
import type { usePickListReorderEvent, usePickListSelectionChangeEvent } from '@primereact/types/shared/picklist';
import { Button } from '@primereact/ui/button';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },

    { name: 'New York', code: 'NY1' },
    { name: 'Rome', code: 'RM1' },
    { name: 'London', code: 'LDN1' },
    { name: 'Istanbul', code: 'IST1' },
    { name: 'Paris', code: 'PRS1' },

    { name: 'New York', code: 'NY2' },
    { name: 'Rome', code: 'RM2' },
    { name: 'London', code: 'LDN2' },
    { name: 'Istanbul', code: 'IST2' },
    { name: 'Paris', code: 'PRS2' }
];

const optionClassName = cn(
    'cursor-grab select-none transition-transform duration-200',
    'data-dragging:transition-none data-dragging:fixed data-dragging:z-50 data-dragging:cursor-grabbing data-dragging:shadow-xl data-dragging:pointer-events-none',
    'data-dragging:w-(--width) data-dragging:h-(--height) data-dragging:left-(--left) data-dragging:top-(--top)',
    'data-dragging:translate-x-(--dnd-x) data-dragging:translate-y-(--dnd-y)',
    'data-dropping:transition-[translate] data-dropping:duration-200 data-dropping:ease-out'
);

type City = (typeof cities)[0];

export default function DragDropDemo() {
    const [source, setSource] = useState(cities);
    const [target, setTarget] = useState<City[]>([]);
    const [selection, setSelection] = useState<City[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        onChange: (e: usePickListReorderEvent) => {
            setSource(e.source as typeof cities);
            setTarget(e.target as typeof cities);
        },
        onSelectionChange: (e: usePickListSelectionChangeEvent) => setSelection(e.value as City[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-center w-full max-w-2xl">
                <div className="flex flex-row md:flex-col gap-1">
                    <Button {...pickList.sourceFirstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...pickList.sourcePrevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...pickList.sourceNextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...pickList.sourceLastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
                </div>
                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={pickList.state.source as typeof cities}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.sourceListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.source as typeof cities).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'source');

                                return (
                                    <Listbox.Option key={item.code} uKey={item.code} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1">
                    <Button
                        {...pickList.moveToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleRight />
                    </Button>
                    <Button
                        {...pickList.moveAllToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleRight />
                    </Button>
                    <Button
                        {...pickList.moveToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleLeft />
                    </Button>
                    <Button
                        {...pickList.moveAllToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleLeft />
                    </Button>
                </div>

                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={pickList.state.target as typeof cities}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.targetListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.target as typeof cities).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'target');

                                return (
                                    <Listbox.Option key={item.code} uKey={item.code} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>
                <div className="flex flex-row md:flex-col gap-1">
                    <Button {...pickList.targetFirstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...pickList.targetPrevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...pickList.targetNextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...pickList.targetLastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
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
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { AngleUp } from '@primeicons/react/angle-up';
import { usePickList } from '@primereact/headless/picklist';
import type { usePickListReorderEvent, usePickListSelectionChangeEvent } from '@primereact/types/shared/picklist';
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

const optionClassName = cn(
    'cursor-grab select-none transition-[transform,opacity] duration-200',
    'data-dragging:transition-none data-dragging:fixed data-dragging:z-50 data-dragging:cursor-grabbing data-dragging:shadow-xl data-dragging:pointer-events-none',
    'data-dragging:w-(--width) data-dragging:h-(--height) data-dragging:left-(--left) data-dragging:top-(--top)',
    'data-dragging:translate-x-(--dnd-x) data-dragging:translate-y-(--dnd-y)',
    'data-dropping:transition-[translate] data-dropping:duration-200 data-dropping:ease-out',
    'data-[sortable-placeholder]:opacity-50'
);

type City = (typeof cities)[0];

export default function PlaceholderDemo() {
    const [source, setSource] = useState(cities);
    const [target, setTarget] = useState<City[]>([]);
    const [selection, setSelection] = useState<City[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        placeholder: 'clone',
        onChange: (e: usePickListReorderEvent) => {
            setSource(e.source as typeof cities);
            setTarget(e.target as typeof cities);
        },
        onSelectionChange: (e: usePickListSelectionChangeEvent) => setSelection(e.value as City[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-center w-full max-w-2xl">
                <div className="flex flex-row md:flex-col gap-1">
                    <Button {...pickList.sourceFirstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...pickList.sourcePrevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...pickList.sourceNextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...pickList.sourceLastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
                </div>
                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={pickList.state.source as typeof cities}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.sourceListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.source as typeof cities).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'source');

                                return (
                                    <Listbox.Option key={item.code} uKey={item.code} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1">
                    <Button
                        {...pickList.moveToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleRight />
                    </Button>
                    <Button
                        {...pickList.moveAllToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleRight />
                    </Button>
                    <Button
                        {...pickList.moveToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleLeft />
                    </Button>
                    <Button
                        {...pickList.moveAllToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleLeft />
                    </Button>
                </div>

                <div className="flex-1 min-w-0 w-full md:w-auto">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={pickList.state.target as typeof cities}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.targetListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.target as typeof cities).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'target');

                                return (
                                    <Listbox.Option key={item.code} uKey={item.code} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>
                <div className="flex flex-row md:flex-col gap-1">
                    <Button {...pickList.targetFirstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...pickList.targetPrevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...pickList.targetNextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...pickList.targetLastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
                </div>
            </div>
        </div>
    );
}
```

### Checkbox

Combine with Checkbox and a select-all header for batch selection alongside drag-and-drop.

```tsx
'use client';
import { AngleDoubleDown } from '@primeicons/react/angle-double-down';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleDoubleUp } from '@primeicons/react/angle-double-up';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { AngleUp } from '@primeicons/react/angle-up';
import { Check, Minus } from '@primeicons/react';
import { usePickList } from '@primereact/headless/picklist';
import type { usePickListReorderEvent, usePickListSelectionChangeEvent } from '@primereact/types/shared/picklist';
import { Button } from '@primereact/ui/button';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { Listbox, type ListboxListInstance } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
    { name: 'Tokyo', code: 'TKY' },
    { name: 'Berlin', code: 'BRL' },
    { name: 'Sydney', code: 'SYD' },
    { name: 'Toronto', code: 'TOR' },
    { name: 'Dubai', code: 'DBI' }
];

type City = (typeof cities)[0];

const optionClassName = cn(
    'cursor-grab select-none transition-transform duration-200',
    'data-dragging:transition-none data-dragging:fixed data-dragging:z-50 data-dragging:cursor-grabbing data-dragging:shadow-xl data-dragging:pointer-events-none',
    'data-dragging:w-(--width) data-dragging:h-(--height) data-dragging:left-(--left) data-dragging:top-(--top)',
    'data-dragging:translate-x-(--dnd-x) data-dragging:translate-y-(--dnd-y)',
    'data-dropping:transition-[translate] data-dropping:duration-200 data-dropping:ease-out'
);

function ListPanel({
    items,
    pickList,
    side,
    selection,
    setSelection
}: {
    items: City[];
    pickList: ReturnType<typeof usePickList>;
    side: 'source' | 'target';
    selection: City[];
    setSelection: (v: City[]) => void;
}) {
    const isAllSelected = items.length > 0 && items.every((item) => selection.includes(item));
    const indeterminate = items.some((item) => selection.includes(item)) && !isAllSelected;
    const listProps = side === 'source' ? pickList.sourceListProps : pickList.targetListProps;
    const firstProps = side === 'source' ? pickList.sourceFirstProps : pickList.targetFirstProps;
    const prevProps = side === 'source' ? pickList.sourcePrevProps : pickList.targetPrevProps;
    const nextProps = side === 'source' ? pickList.sourceNextProps : pickList.targetNextProps;
    const lastProps = side === 'source' ? pickList.sourceLastProps : pickList.targetLastProps;

    return (
        <div className="flex-1 min-w-0 w-full md:w-auto">
            <div className="flex gap-2">
                <div className="flex flex-col gap-1">
                    <Button {...firstProps} severity="secondary" size="small" iconOnly aria-label="Move to first">
                        <AngleDoubleUp />
                    </Button>
                    <Button {...prevProps} severity="secondary" size="small" iconOnly aria-label="Move up">
                        <AngleUp />
                    </Button>
                    <Button {...nextProps} severity="secondary" size="small" iconOnly aria-label="Move down">
                        <AngleDown />
                    </Button>
                    <Button {...lastProps} severity="secondary" size="small" iconOnly aria-label="Move to last">
                        <AngleDoubleDown />
                    </Button>
                </div>
                <div className="flex-1 min-w-0">
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as City[]) ?? [])}
                        options={items}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.Header>
                            <Checkbox.Root
                                aria-label={`Select all ${side}`}
                                indeterminate={indeterminate}
                                checked={isAllSelected}
                                onCheckedChange={(e: CheckboxRootChangeEvent) =>
                                    setSelection(
                                        e.checked
                                            ? [...selection.filter((s) => !items.includes(s)), ...items]
                                            : selection.filter((s) => !items.includes(s))
                                    )
                                }
                                className="ml-1.5"
                            >
                                <Checkbox.Box>
                                    <Checkbox.Indicator match="checked">
                                        <Check />
                                    </Checkbox.Indicator>
                                    <Checkbox.Indicator match="indeterminate">
                                        <Minus />
                                    </Checkbox.Indicator>
                                </Checkbox.Box>
                            </Checkbox.Root>
                        </Listbox.Header>
                        <Listbox.List {...listProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(instance: ListboxListInstance) => {
                                const { listbox } = instance;

                                return items.map((item, index) => {
                                    const selected = listbox?.isSelected(item);
                                    const optionProps = pickList.getOptionProps(item, index, side);

                                    return (
                                        <Listbox.Option
                                            key={item.code}
                                            uKey={item.code}
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
                                            {item.name}
                                        </Listbox.Option>
                                    );
                                });
                            }}
                        </Listbox.List>
                    </Listbox.Root>
                </div>
            </div>
        </div>
    );
}

export default function CheckboxDemo() {
    const [source, setSource] = useState(cities);
    const [target, setTarget] = useState<City[]>([]);
    const [selection, setSelection] = useState<City[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        onChange: (e: usePickListReorderEvent) => {
            setSource(e.source as typeof cities);
            setTarget(e.target as typeof cities);
        },
        onSelectionChange: (e: usePickListSelectionChangeEvent) => setSelection(e.value as City[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-center w-full max-w-2xl">
                <ListPanel
                    items={pickList.state.source as City[]}
                    pickList={pickList}
                    side="source"
                    selection={selection}
                    setSelection={setSelection}
                />

                <div className="flex flex-row md:flex-col gap-1">
                    <Button
                        {...pickList.moveToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleRight />
                    </Button>
                    <Button
                        {...pickList.moveAllToTargetProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to target"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleRight />
                    </Button>
                    <Button
                        {...pickList.moveToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleLeft />
                    </Button>
                    <Button
                        {...pickList.moveAllToSourceProps}
                        severity="secondary"
                        size="small"
                        iconOnly
                        aria-label="Move all to source"
                        className="rotate-90 md:rotate-0"
                    >
                        <AngleDoubleLeft />
                    </Button>
                </div>

                <ListPanel
                    items={pickList.state.target as City[]}
                    pickList={pickList}
                    side="target"
                    selection={selection}
                    setSelection={setSelection}
                />
            </div>
        </div>
    );
}
```
