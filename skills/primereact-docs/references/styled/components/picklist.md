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
import { usePickList, type UsePickListReorderEvent, type UsePickListSelectionChangeEvent } from '@primereact/headless/picklist';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Label } from '@primereact/ui/label';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

type Member = {
    name: string;
    role: string;
    avatar: string;
};

const members: Member[] = [
    { name: 'Amy Elsner', role: 'Designer', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png' },
    { name: 'Asiya Javayant', role: 'Engineer', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png' },
    { name: 'Onyama Limba', role: 'Product Manager', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png' },
    { name: 'Anna Fali', role: 'Engineer', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png' },
    { name: 'Bernardo Dominic', role: 'Designer', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/bernardodominic.png' },
    { name: 'Elwin Sharvill', role: 'Engineer', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/elwinsharvill.png' },
    { name: 'Ioni Bowcher', role: 'QA', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png' },
    { name: 'Stephen Shaw', role: 'Engineer', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png' }
];

const optionClassName = cn('cursor-grab select-none', 'data-dragging:cursor-grabbing data-dragging:opacity-90', 'data-dropping:opacity-100');

const renderItem = (member: Member) => (
    <div className="flex items-center gap-3 w-full min-w-0">
        <Avatar.Root shape="circle" size="normal">
            <Avatar.Image src={member.avatar} alt={member.name} />
            <Avatar.Fallback>
                {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
            </Avatar.Fallback>
        </Avatar.Root>
        <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium truncate">{member.name}</span>
            <span className="text-xs text-muted-color truncate">{member.role}</span>
        </div>
    </div>
);

export default function Preview() {
    const [source, setSource] = useState(members);
    const [target, setTarget] = useState<Member[]>([]);
    const [selection, setSelection] = useState<Member[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        onChange: (e: UsePickListReorderEvent) => {
            setSource(e.source as Member[]);
            setTarget(e.target as Member[]);
        },
        onSelectionChange: (e: UsePickListSelectionChangeEvent) => setSelection(e.value as Member[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-stretch w-full max-w-3xl">
                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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

                <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <Label>Available Members</Label>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as Member[]) ?? [])}
                        options={pickList.state.source as Member[]}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.sourceListProps} className="h-72" style={{ touchAction: 'none' }}>
                            {(pickList.state.source as Member[]).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'source');

                                return (
                                    <Listbox.Option key={item.name} uKey={item.name} index={index} {...optionProps} className={optionClassName}>
                                        {renderItem(item)}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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

                <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <Label>Team Members</Label>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as Member[]) ?? [])}
                        options={pickList.state.target as Member[]}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.targetListProps} className="h-72" style={{ touchAction: 'none' }}>
                            {(pickList.state.target as Member[]).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'target');

                                return (
                                    <Listbox.Option key={item.name} uKey={item.name} index={index} {...optionProps} className={optionClassName}>
                                        {renderItem(item)}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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
import { usePickList, type UsePickListReorderEvent, type UsePickListSelectionChangeEvent } from '@primereact/headless/picklist';
import { Button } from '@primereact/ui/button';
import { Label } from '@primereact/ui/label';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const people = [
    { name: 'Amy Elsner' },
    { name: 'Asiya Javayant' },
    { name: 'Onyama Limba' },
    { name: 'Anna Fali' },
    { name: 'Bernardo Dominic' },
    { name: 'Elwin Sharvill' },
    { name: 'Ioni Bowcher' },
    { name: 'Stephen Shaw' },
    { name: 'Ivan Magalhaes' },
    { name: 'Xuxue Feng' }
];

type Person = (typeof people)[0];

const optionClassName = cn('cursor-grab select-none', 'data-dragging:cursor-grabbing data-dragging:opacity-90', 'data-dropping:opacity-100');

export default function BasicDemo() {
    const [source, setSource] = useState(people);
    const [target, setTarget] = useState<Person[]>([]);
    const [selection, setSelection] = useState<Person[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        onChange: (e: UsePickListReorderEvent) => {
            setSource(e.source as Person[]);
            setTarget(e.target as Person[]);
        },
        onSelectionChange: (e: UsePickListSelectionChangeEvent) => setSelection(e.value as Person[])
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
                <div className="flex-1 min-w-0 w-full md:w-auto flex flex-col gap-1.5">
                    <Label>Available Members</Label>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as Person[]) ?? [])}
                        options={pickList.state.source as Person[]}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.sourceListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.source as Person[]).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'source');

                                return (
                                    <Listbox.Option key={item.name} uKey={item.name} index={index} {...optionProps} className={optionClassName}>
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

                <div className="flex-1 min-w-0 w-full md:w-auto flex flex-col gap-1.5">
                    <Label>Team Members</Label>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as Person[]) ?? [])}
                        options={pickList.state.target as Person[]}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.targetListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.target as Person[]).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'target');

                                return (
                                    <Listbox.Option key={item.name} uKey={item.name} index={index} {...optionProps} className={optionClassName}>
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
import { usePickList, type UsePickListReorderEvent, type UsePickListSelectionChangeEvent } from '@primereact/headless/picklist';
import { Button } from '@primereact/ui/button';
import { Label } from '@primereact/ui/label';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const people = [
    { name: 'Amy Elsner' },
    { name: 'Asiya Javayant' },
    { name: 'Onyama Limba' },
    { name: 'Anna Fali' },
    { name: 'Bernardo Dominic' },
    { name: 'Elwin Sharvill' },
    { name: 'Ioni Bowcher' },
    { name: 'Stephen Shaw' },
    { name: 'Ivan Magalhaes' },
    { name: 'Xuxue Feng' }
];

type Person = (typeof people)[0];

const optionClassName = cn('cursor-grab select-none', 'data-dragging:cursor-grabbing data-dragging:opacity-90', 'data-dropping:opacity-100');

export default function DragDropDemo() {
    const [source, setSource] = useState(people);
    const [target, setTarget] = useState<Person[]>([]);
    const [selection, setSelection] = useState<Person[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        onChange: (e: UsePickListReorderEvent) => {
            setSource(e.source as Person[]);
            setTarget(e.target as Person[]);
        },
        onSelectionChange: (e: UsePickListSelectionChangeEvent) => setSelection(e.value as Person[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-stretch w-full max-w-2xl">
                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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

                <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <Label>Available Members</Label>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as Person[]) ?? [])}
                        options={pickList.state.source as Person[]}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.sourceListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.source as Person[]).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'source');

                                return (
                                    <Listbox.Option key={item.name} uKey={item.name} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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

                <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <Label>Team Members</Label>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as Person[]) ?? [])}
                        options={pickList.state.target as Person[]}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.targetListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.target as Person[]).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'target');

                                return (
                                    <Listbox.Option key={item.name} uKey={item.name} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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
import { usePickList, type UsePickListReorderEvent, type UsePickListSelectionChangeEvent } from '@primereact/headless/picklist';
import { Button } from '@primereact/ui/button';
import { Label } from '@primereact/ui/label';
import { Listbox } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const people = [
    { name: 'Amy Elsner' },
    { name: 'Asiya Javayant' },
    { name: 'Onyama Limba' },
    { name: 'Anna Fali' },
    { name: 'Bernardo Dominic' },
    { name: 'Elwin Sharvill' },
    { name: 'Ioni Bowcher' },
    { name: 'Stephen Shaw' },
    { name: 'Ivan Magalhaes' },
    { name: 'Xuxue Feng' }
];

type Person = (typeof people)[0];

const optionClassName = cn(
    'cursor-grab select-none',
    'data-dragging:cursor-grabbing data-dragging:opacity-90',
    'data-dropping:opacity-100',
    'data-[sortable-placeholder]:opacity-50'
);

export default function PlaceholderDemo() {
    const [source, setSource] = useState(people);
    const [target, setTarget] = useState<Person[]>([]);
    const [selection, setSelection] = useState<Person[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        placeholder: 'clone',
        onChange: (e: UsePickListReorderEvent) => {
            setSource(e.source as Person[]);
            setTarget(e.target as Person[]);
        },
        onSelectionChange: (e: UsePickListSelectionChangeEvent) => setSelection(e.value as Person[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-stretch w-full max-w-2xl">
                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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

                <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <Label>Available Members</Label>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as Person[]) ?? [])}
                        options={pickList.state.source as Person[]}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.sourceListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.source as Person[]).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'source');

                                return (
                                    <Listbox.Option key={item.name} uKey={item.name} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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

                <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <Label>Team Members</Label>
                    <Listbox.Root
                        value={selection}
                        onValueChange={(e) => setSelection((e.value as Person[]) ?? [])}
                        options={pickList.state.target as Person[]}
                        optionLabel="name"
                        multiple
                    >
                        <Listbox.List {...pickList.targetListProps} className="h-60" style={{ touchAction: 'none' }}>
                            {(pickList.state.target as Person[]).map((item, index) => {
                                const optionProps = pickList.getOptionProps(item, index, 'target');

                                return (
                                    <Listbox.Option key={item.name} uKey={item.name} index={index} {...optionProps} className={optionClassName}>
                                        {item.name}
                                    </Listbox.Option>
                                );
                            })}
                        </Listbox.List>
                    </Listbox.Root>
                </div>

                <div className="flex flex-row md:flex-col gap-1 self-center md:self-stretch md:pt-7">
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
import { usePickList, type UsePickListReorderEvent, type UsePickListSelectionChangeEvent } from '@primereact/headless/picklist';
import { Button } from '@primereact/ui/button';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';
import { Listbox, type ListboxListInstance } from '@primereact/ui/listbox';
import { cn } from '@primeuix/utils';
import { useState } from 'react';

const people = [
    { name: 'Amy Elsner' },
    { name: 'Asiya Javayant' },
    { name: 'Onyama Limba' },
    { name: 'Anna Fali' },
    { name: 'Bernardo Dominic' },
    { name: 'Elwin Sharvill' },
    { name: 'Ioni Bowcher' },
    { name: 'Stephen Shaw' },
    { name: 'Ivan Magalhaes' },
    { name: 'Xuxue Feng' }
];

type Person = (typeof people)[0];

const optionClassName = cn('cursor-grab select-none', 'data-dragging:cursor-grabbing data-dragging:opacity-90', 'data-dropping:opacity-100');

function ListPanel({
    items,
    pickList,
    side,
    selection,
    setSelection
}: {
    items: Person[];
    pickList: ReturnType<typeof usePickList>;
    side: 'source' | 'target';
    selection: Person[];
    setSelection: (v: Person[]) => void;
}) {
    const isAllSelected = items.length > 0 && items.every((item) => selection.includes(item));
    const indeterminate = items.some((item) => selection.includes(item)) && !isAllSelected;
    const listProps = side === 'source' ? pickList.sourceListProps : pickList.targetListProps;
    const firstProps = side === 'source' ? pickList.sourceFirstProps : pickList.targetFirstProps;
    const prevProps = side === 'source' ? pickList.sourcePrevProps : pickList.targetPrevProps;
    const nextProps = side === 'source' ? pickList.sourceNextProps : pickList.targetNextProps;
    const lastProps = side === 'source' ? pickList.sourceLastProps : pickList.targetLastProps;
    const label = side === 'source' ? 'Available Members' : 'Team Members';

    return (
        <div className={cn('flex-1 min-w-0 w-full md:w-auto flex gap-2 items-center', side === 'target' && 'flex-row-reverse')}>
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
            <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                <Label>{label}</Label>
                <Listbox.Root
                    value={selection}
                    onValueChange={(e) => setSelection((e.value as Person[]) ?? [])}
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
                                        key={item.name}
                                        uKey={item.name}
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
    );
}

export default function CheckboxDemo() {
    const [source, setSource] = useState(people);
    const [target, setTarget] = useState<Person[]>([]);
    const [selection, setSelection] = useState<Person[]>([]);

    const pickList = usePickList({
        source,
        target,
        selection,
        draggable: true,
        onChange: (e: UsePickListReorderEvent) => {
            setSource(e.source as Person[]);
            setTarget(e.target as Person[]);
        },
        onSelectionChange: (e: UsePickListSelectionChangeEvent) => setSelection(e.value as Person[])
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-3 items-center w-full max-w-2xl">
                <ListPanel
                    items={pickList.state.source as Person[]}
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
                    items={pickList.state.target as Person[]}
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
