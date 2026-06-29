# AutoComplete

AutoComplete is an input component that provides real-time suggestions when being typed.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function Preview() {
    const [filtered, setFiltered] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFiltered(query ? options.filter((item) => item.toLowerCase().includes(query)) : [...options]);
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <Label>Search tutorials</Label>
                <AutoComplete.Root options={filtered} onComplete={search} className="w-full md:w-72 mt-2">
                    <AutoComplete.Input as={InputText} placeholder="Search..." className="w-full" />
                    <AutoComplete.Portal>
                        <AutoComplete.Positioner>
                            <AutoComplete.Popup>
                                <AutoComplete.List style={{ maxHeight: '14rem' }}>
                                    {filtered.map((item, index) => (
                                        <AutoComplete.Option key={item} index={index} uKey={item}>
                                            {item}
                                        </AutoComplete.Option>
                                    ))}
                                    <AutoComplete.Empty className="text-sm">No results found</AutoComplete.Empty>
                                </AutoComplete.List>
                            </AutoComplete.Popup>
                        </AutoComplete.Positioner>
                    </AutoComplete.Portal>
                </AutoComplete.Root>
                <small className="text-surface-500 mt-1.5 opacity-75">
                    Type <em className="underline">react</em> to see suggestions
                </small>
            </div>
        </div>
    );
}

const options: string[] = [
    'responsive design fundamentals',
    'redux toolkit crash course',
    'real-time chat app tutorial',
    'reading json files in node',
    'react hooks tutorial',
    'react server components explained',
    'react vs vue 2024',
    'react native crash course',
    'react 19 new features',
    'react context api best practices',
    'react testing library guide',
    'react router v7 tutorial',
    'react performance optimization',
    'react suspense and lazy loading',
    'react state management comparison',
    'react form validation',
    'react design patterns',
    'react authentication tutorial',
    'react with typescript beginner',
    'react animation libraries',
    'react deploy to production'
];

```

## Usage

```tsx
import { AutoComplete } from '@primereact/ui/autocomplete';
```

```tsx
<AutoComplete.Root>
    <AutoComplete.Input />
    <AutoComplete.Clear />
    <AutoComplete.Trigger>
        <AutoComplete.Value />
        <AutoComplete.Indicator />
    </AutoComplete.Trigger>
    <AutoComplete.Portal>
        <AutoComplete.Positioner>
            <AutoComplete.Popup>
                <AutoComplete.Header />
                <AutoComplete.List>
                    <AutoComplete.Option>
                        <AutoComplete.OptionIndicator />
                    </AutoComplete.Option>
                </AutoComplete.List>
                <AutoComplete.Empty />
                <AutoComplete.Footer />
            </AutoComplete.Popup>
        </AutoComplete.Positioner>
    </AutoComplete.Portal>
</AutoComplete.Root>
```

## Examples

### Basic

An input that filters and suggests options as the user types.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

interface Command {
    label: string;
    shortcut: string;
}

const commands: Command[] = [
    { label: 'New File', shortcut: '⌘N' },
    { label: 'Open File', shortcut: '⌘O' },
    { label: 'Save', shortcut: '⌘S' },
    { label: 'Save As', shortcut: '⇧⌘S' },
    { label: 'Find', shortcut: '⌘F' },
    { label: 'Replace', shortcut: '⌘H' },
    { label: 'Go to Line', shortcut: '⌘G' },
    { label: 'Toggle Sidebar', shortcut: '⌘B' },
    { label: 'Split Editor', shortcut: '⌘\\' },
    { label: 'Close Tab', shortcut: '⌘W' }
];

export default function BasicDemo() {
    const [filteredCommands, setFilteredCommands] = React.useState<Command[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredCommands(query ? commands.filter((cmd) => cmd.label.toLowerCase().includes(query)) : [...commands]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredCommands} optionLabel="label" onComplete={search} className="w-full md:w-56">
                <AutoComplete.Input as={InputText} placeholder="Type a command..." className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }}>
                                {filteredCommands.map((cmd, index) => (
                                    <AutoComplete.Option key={cmd.label} index={index} uKey={cmd.label}>
                                        <div className="flex items-center justify-between w-full">
                                            <span>{cmd.label}</span>
                                            <kbd className="inline-flex items-center justify-center min-w-8 px-1.5 py-0.5 text-xs font-medium rounded bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 border border-surface-200 dark:border-surface-600">
                                                {cmd.shortcut}
                                            </kbd>
                                        </div>
                                    </AutoComplete.Option>
                                ))}
                                <AutoComplete.Empty className="text-sm">No commands found</AutoComplete.Empty>
                            </AutoComplete.List>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Trigger

Use `AutoComplete.Trigger` inside the root to display a trigger toggle button that opens the suggestion list.

```tsx
'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function TriggerDemo() {
    const [items, setItems] = React.useState<string[] | number[]>([...Array(10).keys()]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems(event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : [...Array(10).keys()]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={items} onComplete={search}>
                <InputGroup.Root>
                    <AutoComplete.Input as={InputText} />
                    <InputGroup.Addon className="p-0">
                        <AutoComplete.Trigger className="w-full h-full flex items-center justify-center">
                            <ChevronDown />
                        </AutoComplete.Trigger>
                    </InputGroup.Addon>
                </InputGroup.Root>

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Chips

Use `AutoComplete.Input` with `AutoComplete.Value` inside `AutoComplete.Trigger` to compose a chip-based tag input. Selected items are displayed as removable chips inside the value area while the input remains editable for searching.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import {
    AutoComplete,
    type AutoCompleteCompleteEvent,
    type AutoCompleteInputValueChangeEvent,
    type AutoCompleteRootInstance,
    type AutoCompleteValueChangeEvent
} from '@primereact/ui/autocomplete';
import { Chip, type ChipRootRemoveEvent } from '@primereact/ui/chip';
import * as React from 'react';

const allTags = [
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Angular',
    'Svelte',
    'Next.js',
    'Nuxt',
    'Node.js',
    'Deno',
    'Python',
    'Go',
    'Rust',
    'Java',
    'GraphQL',
    'REST',
    'Docker',
    'Kubernetes'
];

export default function ChipDemo() {
    const [items, setItems] = React.useState<string[]>([]);
    const [selectedTags, setSelectedTags] = React.useState<string[]>(['React', 'TypeScript']);
    const [inputValue, setInputValue] = React.useState('');
    const justSelectedRef = React.useRef(false);
    const autoCompleteRef = React.useRef<AutoCompleteRootInstance>(null);

    React.useEffect(() => {
        setItems(allTags.filter((tag) => !selectedTags.includes(tag)));
    }, [selectedTags]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = (event.query || '').toLowerCase();

        setItems(allTags.filter((tag) => tag.toLowerCase().includes(query) && !selectedTags.includes(tag)));
    };

    const onValueChange = (event: AutoCompleteValueChangeEvent) => {
        const value = event.value as string;

        if (value) {
            setSelectedTags((prev) => (prev.includes(value) ? prev : [...prev, value]));
            justSelectedRef.current = true;
        }
    };

    const onInputValueChange = (event: AutoCompleteInputValueChangeEvent) => {
        if (justSelectedRef.current) {
            justSelectedRef.current = false;
            setInputValue('');

            return;
        }

        setInputValue(event.query);
    };

    const removeTag = (e: ChipRootRemoveEvent, tag: string) => {
        e.originalEvent.stopPropagation();
        const currentIndex = selectedTags.indexOf(tag);
        const next = selectedTags.filter((t) => t !== tag);

        setSelectedTags(next);

        requestAnimationFrame(() => {
            if (currentIndex > 0) {
                const rootElement = autoCompleteRef.current?.elementRef.current;
                const removeButtons = rootElement?.querySelectorAll<HTMLElement>('[data-scope="chip"][data-part="remove"]');

                removeButtons?.[currentIndex - 1]?.focus();
            } else {
                autoCompleteRef.current?.focus();
            }
        });
    };

    const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Backspace' && !inputValue && selectedTags.length > 0) {
            setSelectedTags((prev) => prev.slice(0, -1));
        }
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root
                ref={autoCompleteRef}
                options={items}
                onComplete={search}
                value={null}
                inputValue={inputValue}
                onValueChange={onValueChange}
                onInputValueChange={onInputValueChange}
                className="w-full max-w-sm p-inputtext focus-within:border-primary"
            >
                <AutoComplete.Trigger as="div" className="flex-wrap gap-1">
                    <AutoComplete.Value placeholder="Add a tag...">
                        <div className="flex flex-wrap gap-1">
                            {selectedTags?.map((tag) => (
                                <Chip.Root key={tag} className="py-0.5" onRemove={(e: ChipRootRemoveEvent) => removeTag(e, tag)}>
                                    <Chip.Label className="text-xs">{tag}</Chip.Label>
                                    <Chip.Remove>
                                        <Times className="text-[0.5rem]!" />
                                    </Chip.Remove>
                                </Chip.Root>
                            ))}

                            <AutoComplete.Input placeholder="Search..." className="text-sm px-2 py-0.5 outline-none" onKeyDown={onInputKeyDown} />
                        </div>
                    </AutoComplete.Value>
                </AutoComplete.Trigger>

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                            <AutoComplete.Empty className="text-sm">No commands found</AutoComplete.Empty>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Custom Option

Customize option content using a render function inside `AutoComplete.Option` that receives the option instance including the `selected` state.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent, type AutoCompleteOptionInstance } from '@primereact/ui/autocomplete';
import { Avatar } from '@primereact/ui/avatar';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar: string;
    status: 'online' | 'away' | 'offline';
    statusClass: string;
}

const teamMembers: TeamMember[] = [
    { id: 1, name: 'Sarah Chen', role: 'Engineering Lead', avatar: 'SC', status: 'online', statusClass: 'bg-green-400' },
    { id: 2, name: 'Alex Rivera', role: 'Senior Developer', avatar: 'AR', status: 'online', statusClass: 'bg-green-400' },
    { id: 3, name: 'Jordan Kim', role: 'UX Designer', avatar: 'JK', status: 'away', statusClass: 'bg-amber-400' },
    { id: 4, name: 'Taylor Morgan', role: 'Product Manager', avatar: 'TM', status: 'offline', statusClass: 'bg-zinc-400' },
    { id: 5, name: 'Morgan Lee', role: 'DevOps Engineer', avatar: 'ML', status: 'online', statusClass: 'bg-green-400' },
    { id: 6, name: 'Casey Jones', role: 'QA Engineer', avatar: 'CJ', status: 'away', statusClass: 'bg-amber-400' }
];

export default function OptionDemo() {
    const [filteredMembers, setFilteredMembers] = React.useState<TeamMember[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredMembers(
            query ? teamMembers.filter((m) => m.name.toLowerCase().includes(query) || m.role.toLowerCase().includes(query)) : [...teamMembers]
        );
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredMembers} optionLabel="name" onComplete={search} className="w-full md:w-56">
                <AutoComplete.Input as={InputText} placeholder="Search team members..." className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '16rem' }}>
                                {filteredMembers.map((member, index) => (
                                    <AutoComplete.Option key={member.id} index={index} uKey={String(member.id)}>
                                        {(instance: AutoCompleteOptionInstance) => {
                                            const { selected } = instance;

                                            return (
                                                <div className="flex items-center gap-3 py-1">
                                                    <div className="relative">
                                                        <Avatar.Root shape="circle" className="w-8 h-8">
                                                            <Avatar.Fallback>{member.avatar}</Avatar.Fallback>
                                                        </Avatar.Root>
                                                        <span
                                                            className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 ${selected ? 'border-primary-emphasis' : 'border-surface-0 dark:border-surface-900'} ${member.statusClass}`}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span
                                                            className={`font-medium ${selected ? 'text-primary-contrast' : 'text-surface-900 dark:text-surface-0'}`}
                                                        >
                                                            {member.name}
                                                        </span>
                                                        <span
                                                            className={`text-xs ${selected ? 'text-primary-contrast/70' : 'text-surface-500 dark:text-surface-400'}`}
                                                        >
                                                            {member.role}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </AutoComplete.Option>
                                ))}
                                <AutoComplete.Empty className="text-sm">No members found</AutoComplete.Empty>
                            </AutoComplete.List>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Group

#### Simple

Options can be grouped using the `optionGroupLabel` and `optionGroupChildren` properties.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

interface Technology {
    label: string;
    value: string;
}

interface TechCategory {
    label: string;
    code: string;
    items: Technology[];
}

const techStack: TechCategory[] = [
    {
        label: 'Frontend',
        code: 'FE',
        items: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' },
            { label: 'Svelte', value: 'svelte' }
        ]
    },
    {
        label: 'Backend',
        code: 'BE',
        items: [
            { label: 'Node.js', value: 'nodejs' },
            { label: 'Python', value: 'python' },
            { label: 'Java', value: 'java' },
            { label: 'Go', value: 'go' }
        ]
    },
    {
        label: 'Database',
        code: 'DB',
        items: [
            { label: 'PostgreSQL', value: 'postgresql' },
            { label: 'MongoDB', value: 'mongodb' },
            { label: 'Redis', value: 'redis' },
            { label: 'MySQL', value: 'mysql' }
        ]
    }
];

const filterItems = (items: Technology[], query: string): Technology[] => {
    if (!query) return items;

    const normalizedQuery = query.toLowerCase();

    return items.filter((item) => item.label.toLowerCase().includes(normalizedQuery));
};

export default function GroupDemo() {
    const [filteredTech, setFilteredTech] = React.useState<TechCategory[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query;
        const _filteredTech: TechCategory[] = [];

        for (const category of techStack) {
            const filteredItems = filterItems(category.items, query);

            if (filteredItems.length) {
                _filteredTech.push({ ...category, items: filteredItems });
            }
        }

        setFilteredTech(_filteredTech);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root
                options={filteredTech}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                onComplete={search}
                className="w-full md:w-56"
            >
                <AutoComplete.Input as={InputText} placeholder="Search technologies..." className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                            <AutoComplete.Empty className="text-sm">No option found</AutoComplete.Empty>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

#### Custom

Customize group headers with custom rendering by accessing the list instance inside `AutoComplete.List`.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import type { ListboxListInstance } from '@primereact/ui/listbox';
import * as React from 'react';

interface City {
    label: string;
    value: string;
}

interface CityGroup {
    label: string;
    code: string;
    items: City[];
}

const groupedCities: CityGroup[] = [
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' }
        ]
    }
];

const countryFlags: Record<string, string> = {
    DE: '\uD83C\uDDE9\uD83C\uDDEA',
    US: '\uD83C\uDDFA\uD83C\uDDF8',
    JP: '\uD83C\uDDEF\uD83C\uDDF5'
};

export default function CustomGroupDemo() {
    const [filteredCities, setFilteredCities] = React.useState<CityGroup[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();
        const filtered: CityGroup[] = [];

        for (const group of groupedCities) {
            const filteredItems = query ? group.items.filter((item) => item.label.toLowerCase().includes(query)) : group.items;

            if (filteredItems.length) {
                filtered.push({ ...group, items: filteredItems });
            }
        }

        setFilteredCities(filtered);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root
                options={filteredCities}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                onComplete={search}
                className="w-full md:w-56"
            >
                <AutoComplete.Input as={InputText} placeholder="Search a city..." className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '18rem' }} className="p-0">
                                {(instance: ListboxListInstance) => {
                                    const { listbox, options } = instance;

                                    return (options as unknown[])?.map((option: unknown, index: number) => {
                                        const isGroup = listbox?.isOptionGroup(option);

                                        if (isGroup) {
                                            const optionGroup = (option as Record<string, unknown>).optionGroup as Record<string, string>;
                                            const code = optionGroup?.code;

                                            return (
                                                <AutoComplete.Option
                                                    key={index}
                                                    index={index}
                                                    group
                                                    className="flex items-center gap-2 sticky top-0 z-1 bg-surface-0 dark:bg-surface-900 border-b border-surface"
                                                >
                                                    <span>{countryFlags[code]}</span>
                                                    <span>{optionGroup?.label}</span>
                                                </AutoComplete.Option>
                                            );
                                        }

                                        const label = listbox?.getOptionLabel(option);

                                        return (
                                            <AutoComplete.Option key={index} index={index}>
                                                {label}
                                            </AutoComplete.Option>
                                        );
                                    });
                                }}
                            </AutoComplete.List>
                            <AutoComplete.Empty className="text-sm">No cities found</AutoComplete.Empty>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Command Menu

Combine `AutoComplete` with `Dialog` to build a searchable command palette. Grouped options are rendered through the list instance with custom group headers, and selecting an option closes the dialog.

```tsx
'use client';
import { ArrowDown, ArrowUp } from '@primeicons/react';
import { useHotKey } from '@primereact/hooks';
import { AutoComplete, type AutoCompleteCompleteEvent, type AutoCompleteListInstance } from '@primereact/ui/autocomplete';
import { Button } from '@primereact/ui/button';
import type { DialogRootChangeEvent } from '@primereact/ui/dialog';
import { Dialog } from '@primereact/ui/dialog';
import { ScrollArea } from '@primereact/ui/scrollarea';
import * as React from 'react';

interface CommandItem {
    label: string;
    value: string;
    keywords?: string[];
}

interface CommandGroup {
    group: string;
    items: CommandItem[];
}

const filterCommands = (query: string): CommandGroup[] => {
    const q = query.toLowerCase().trim();

    if (!q) return [...commands];

    const result: CommandGroup[] = [];

    for (const group of commands) {
        const items = group.items.filter((item) => {
            const inLabel = item.label.toLowerCase().includes(q);
            const inKeywords = item.keywords?.some((kw) => kw.toLowerCase().includes(q));

            return inLabel || inKeywords;
        });

        if (items.length) {
            result.push({ ...group, items });
        }
    }

    return result;
};

export default function CommandMenuDemo() {
    const [filtered, setFiltered] = React.useState<CommandGroup[]>([...commands]);
    const [open, setOpen] = React.useState(false);

    const search = (event: AutoCompleteCompleteEvent) => {
        setFiltered(filterCommands(event.query));
    };

    useHotKey(['ctrl+k', 'meta+k'], (event) => {
        event.preventDefault();
        setOpen((prev) => !prev);
    });

    return (
        <div className="flex flex-col items-center gap-2">
            <Dialog.Root
                open={open}
                onOpenChange={(e: DialogRootChangeEvent) => {
                    const next = e.value as boolean;

                    setOpen(next);

                    if (!next) {
                        setFiltered([...commands]);
                    }
                }}
            >
                <Dialog.Trigger as={Button} severity="secondary">
                    Open Command Menu
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Popup className="max-w-sm w-full p-0! rounded-lg!">
                            <AutoComplete.Root
                                open
                                as={React.Fragment}
                                autoOptionFocus
                                options={filtered}
                                optionLabel="label"
                                optionValue="value"
                                optionGroupLabel="group"
                                optionGroupChildren="items"
                                onComplete={search}
                                onValueChange={(e) => {
                                    if (e.value != null) {
                                        setOpen(false);
                                    }
                                }}
                                className="w-full! h-full! flex flex-col"
                            >
                                <Dialog.Header className="py-2.5! px-4! border-b border-surface">
                                    <AutoComplete.Input autoFocus placeholder="Search commands..." className="w-full outline-none text-sm" />
                                </Dialog.Header>

                                <Dialog.Content as={ScrollArea.Root} className="p-0! border-none! h-72 overflow-hidden!">
                                    <ScrollArea.Viewport className="pt-0! px-1!">
                                        <ScrollArea.Content>
                                            <AutoComplete.List>
                                                {({ autocomplete }: AutoCompleteListInstance) => {
                                                    const listbox = autocomplete?.listbox;
                                                    const options = (listbox?.getOptions() ?? []) as unknown[];

                                                    return (
                                                        <>
                                                            {options.map((option, index) => {
                                                                const isGroup = listbox?.isOptionGroup(option);

                                                                if (isGroup) {
                                                                    const optionGroup = (option as Record<string, unknown>)
                                                                        .optionGroup as CommandGroup;

                                                                    return (
                                                                        <AutoComplete.Option
                                                                            key={index}
                                                                            index={index}
                                                                            group
                                                                            className="capitalize text-xs text-surface-500"
                                                                        >
                                                                            {optionGroup.group}
                                                                        </AutoComplete.Option>
                                                                    );
                                                                }

                                                                const item = option as CommandItem;

                                                                return (
                                                                    <AutoComplete.Option key={index} index={index} uKey={item.value}>
                                                                        {item.label}
                                                                    </AutoComplete.Option>
                                                                );
                                                            })}
                                                            <AutoComplete.Empty className="text-sm text-center text-surface-500 py-4! px-2!">
                                                                No results found.
                                                            </AutoComplete.Empty>
                                                        </>
                                                    );
                                                }}
                                            </AutoComplete.List>
                                        </ScrollArea.Content>
                                    </ScrollArea.Viewport>
                                    <ScrollArea.Scrollbar orientation="vertical">
                                        <ScrollArea.Handle />
                                    </ScrollArea.Scrollbar>
                                </Dialog.Content>
                                <Dialog.Footer className="justify-end gap-4 py-2! px-4! border-t border-surface">
                                    <span className="flex items-center gap-1 text-surface-500 text-xs">
                                        <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                                            <ArrowUp />
                                        </kbd>
                                        <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                                            <ArrowDown />
                                        </kbd>
                                        Navigate
                                    </span>
                                    <span className="flex items-center gap-1 text-surface-500 text-xs">
                                        <kbd className="bg-surface-100 dark:bg-surface-800 size-5 inline-flex items-center justify-center rounded border border-surface-200 dark:border-surface-700">
                                            ↵
                                        </kbd>
                                        Select
                                    </span>
                                </Dialog.Footer>
                            </AutoComplete.Root>
                        </Dialog.Popup>
                    </Dialog.Positioner>
                </Dialog.Portal>
            </Dialog.Root>
            <span className="text-surface-500 text-xs">
                (Press <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd>)
            </span>
        </div>
    );
}

const commands: CommandGroup[] = [
    {
        group: 'recents',
        items: [
            { label: 'Check For Updates', value: 'check for updates', keywords: ['check', 'updates'] },
            { label: 'Open Settings', value: 'open settings' },
            { label: 'Search Files', value: 'search files' },
            { label: 'Open Terminal', value: 'open terminal' },
            { label: 'View History', value: 'view history', keywords: ['history', 'recent'] },
            { label: 'Open Chat', value: 'open chat' }
        ]
    },
    {
        group: 'files',
        items: [
            { label: 'New File', value: 'new file' },
            { label: 'New Folder', value: 'new folder' },
            { label: 'Save All', value: 'save-all' },
            { label: 'Change Theme', value: 'change theme' },
            { label: 'Run Task', value: 'run-task' },
            { label: 'Stop Task', value: 'stop task' },
            { label: 'Export Project', value: 'export project' },
            { label: 'Import Project', value: 'import project' },
            { label: 'Delete File', value: 'delete file' },
            { label: 'Duplicate File', value: 'duplicate file' }
        ]
    },
    {
        group: 'source',
        items: [
            { label: 'Git: Commit', value: 'git commit' },
            { label: 'Git: Push', value: 'git push' },
            { label: 'Git: Pull', value: 'git pull' },
            { label: 'Switch Account', value: 'switch account' },
            { label: 'Open Documentation', value: 'open documentation' },
            { label: 'Git: Sync', value: 'git sync' },
            { label: 'Git: Create Branch', value: 'git create branch' },
            { label: 'Git: Create Tag', value: 'git create tag' }
        ]
    },
    {
        group: 'editor',
        items: [
            { label: 'Align Left', value: 'align left' },
            { label: 'Align Center', value: 'align center' },
            { label: 'Align Right', value: 'align right' },
            { label: 'Toggle Bold', value: 'toggle bold' },
            { label: 'Toggle Italic', value: 'toggle italic' },
            { label: 'Insert Link', value: 'insert link' },
            { label: 'Insert Image', value: 'insert image' },
            { label: 'Insert List', value: 'insert list' }
        ]
    },
    {
        group: 'navigation',
        items: [
            { label: 'Go to Home', value: 'go to home' },
            { label: 'Go Back', value: 'go back' },
            { label: 'Go Forward', value: 'go forward' },
            { label: 'Open Explorer', value: 'open explorer' },
            { label: 'View Bookmarks', value: 'view bookmarks' },
            { label: 'Open Minimap', value: 'open minimap' }
        ]
    },
    {
        group: 'view',
        items: [
            { label: 'Toggle Preview', value: 'toggle preview' },
            { label: 'Maximize Window', value: 'maximize window' },
            { label: 'Minimize Window', value: 'minimize window' },
            { label: 'Grid View', value: 'grid view' },
            { label: 'List View', value: 'list view' },
            { label: 'Light Mode', value: 'light mode' },
            { label: 'Dark Mode', value: 'dark mode' }
        ]
    },
    {
        group: 'tools',
        items: [
            { label: 'Open Calculator', value: 'open calculator' },
            { label: 'Open Calendar', value: 'open calendar' },
            { label: 'Open Timer', value: 'open timer' },
            { label: 'View Analytics', value: 'view analytics' },
            { label: 'View Trends', value: 'view trends' },
            { label: 'Open Database', value: 'open database' }
        ]
    }
];

```

### Force Selection

Use the `forceSelection` property to validate manual input against the suggestions list. If no match is found, the input value is cleared to ensure the value is always from the suggestion list.

```tsx
'use client';
import { CountryService } from '@/shared/services/country.service';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

interface Country {
    name: string;
    code: string;
}

export default function ForceSelectionDemo() {
    const [countries, setCountries] = React.useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = React.useState<Country[]>([]);

    React.useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    const search = (event: AutoCompleteCompleteEvent) => {
        if (!event.query.trim().length) {
            setFilteredCountries(countries);
        } else {
            setFilteredCountries(
                countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                })
            );
        }
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root
                options={filteredCountries}
                optionKey="code"
                optionLabel="name"
                forceSelection
                onComplete={search}
                className="w-full md:w-56"
            >
                <AutoComplete.Input as={InputText} className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                            <AutoComplete.Empty className="text-sm">No countries found</AutoComplete.Empty>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Float Label

Integrate with `FloatLabel` for animated label behavior with three variants: over, in, and on.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Input as={InputText} id="over_label" />

                    <AutoComplete.Portal>
                        <AutoComplete.Positioner>
                            <AutoComplete.Popup>
                                <AutoComplete.List style={{ maxHeight: '14rem' }} />
                            </AutoComplete.Popup>
                        </AutoComplete.Positioner>
                    </AutoComplete.Portal>
                </AutoComplete.Root>

                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Input as={InputText} id="in_label" />

                    <AutoComplete.Portal>
                        <AutoComplete.Positioner>
                            <AutoComplete.Popup>
                                <AutoComplete.List style={{ maxHeight: '14rem' }} />
                            </AutoComplete.Popup>
                        </AutoComplete.Positioner>
                    </AutoComplete.Portal>
                </AutoComplete.Root>

                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Input as={InputText} id="on_label" />

                    <AutoComplete.Portal>
                        <AutoComplete.Positioner>
                            <AutoComplete.Popup>
                                <AutoComplete.List style={{ maxHeight: '14rem' }} />
                            </AutoComplete.Popup>
                        </AutoComplete.Positioner>
                    </AutoComplete.Portal>
                </AutoComplete.Root>

                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}

```

### Ifta Label

Use `IftaLabel` for an infield top-aligned label pattern.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function IftaLabelDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <IftaLabel>
                <AutoComplete.Root options={items} variant="filled" onComplete={search} className="w-full md:w-56">
                    <AutoComplete.Input as={InputText} id="autocomplete" className="w-full" />

                    <AutoComplete.Portal>
                        <AutoComplete.Positioner>
                            <AutoComplete.Popup>
                                <AutoComplete.List style={{ maxHeight: '14rem' }} />
                            </AutoComplete.Popup>
                        </AutoComplete.Positioner>
                    </AutoComplete.Portal>
                </AutoComplete.Root>

                <Label htmlFor="autocomplete" className="mb-2">
                    Search
                </Label>
            </IftaLabel>
        </div>
    );
}

```

### Arrow

Use `AutoComplete.Arrow` inside the popup to display an arrow pointing to the trigger element. Set `sideOffset` on `AutoComplete.Positioner` for spacing.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ArrowDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={items} onComplete={search} className="w-full md:w-56">
                <AutoComplete.Input as={InputText} placeholder="Search" className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner sideOffset={12}>
                        <AutoComplete.Popup>
                            <AutoComplete.Arrow />
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Clear

Use `AutoComplete.Clear` inside the root to display a clear button that resets the input value.

```tsx
'use client';
import { Times } from '@primeicons/react/times';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const productCategories = [
    { label: 'Electronics', value: 'electronics', count: 1247 },
    { label: 'Clothing', value: 'clothing', count: 856 },
    { label: 'Garden', value: 'home', count: 634 },
    { label: 'Sports', value: 'sports', count: 421 },
    { label: 'Books', value: 'books', count: 2103 },
    { label: 'Toys', value: 'toys', count: 312 }
];

export default function ClearIconDemo() {
    const [filteredCategories, setFilteredCategories] = React.useState<typeof productCategories>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredCategories(query ? productCategories.filter((cat) => cat.label.toLowerCase().includes(query)) : [...productCategories]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredCategories} optionLabel="label" onComplete={search} className="w-full md:w-56">
                <IconField.Root className="w-full">
                    <AutoComplete.Input as={InputText} fluid placeholder="Search categories..." />
                    <IconField.Inset>
                        <AutoComplete.Clear>
                            <Times />
                        </AutoComplete.Clear>
                    </IconField.Inset>
                </IconField.Root>

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }}>
                                {filteredCategories.map((cat, index) => (
                                    <AutoComplete.Option key={cat.value} index={index} uKey={cat.value}>
                                        <div className="flex items-center justify-between w-full">
                                            <span>{cat.label}</span>
                                            <Tag severity="secondary" rounded>
                                                {cat.count}
                                            </Tag>
                                        </div>
                                    </AutoComplete.Option>
                                ))}
                                <AutoComplete.Empty className="text-sm">No categories found</AutoComplete.Empty>
                            </AutoComplete.List>
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Fluid

Use the `fluid` property to make the autocomplete take up the full width of its container.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function FluidDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div>
            <AutoComplete.Root options={items} onComplete={search} fluid>
                <AutoComplete.Input as={InputText} fluid />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Loading

Compose a loading indicator alongside the autocomplete input using `InputGroup` to display an async loading state.

```tsx
'use client';
import { Spinner } from '@primeicons/react/spinner';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function LoadingDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={items} onComplete={search} className="w-full md:w-56">
                <InputGroup.Root>
                    <AutoComplete.Input as={InputText} className="w-full" />
                    <InputGroup.Addon>
                        <Spinner className="animate-spin" />
                    </InputGroup.Addon>
                </InputGroup.Root>

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Sizes

Use the `size` property to change the size of an autocomplete.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function SizesDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <AutoComplete.Root options={items} onComplete={search}>
                <AutoComplete.Input as={InputText} size="small" placeholder="Small" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>

            <AutoComplete.Root options={items} onComplete={search}>
                <AutoComplete.Input as={InputText} placeholder="Normal" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>

            <AutoComplete.Root options={items} onComplete={search}>
                <AutoComplete.Input as={InputText} size="large" placeholder="Large" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function FilledDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={items} onComplete={search} className="w-full md:w-56">
                <AutoComplete.Input as={InputText} variant="filled" className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Disabled

Use the `disabled` property to disable an autocomplete.

```tsx
import { AutoComplete } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={[]} disabled className="w-full md:w-56">
                <AutoComplete.Input as={InputText} className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Invalid

Specify the `invalid` property to display the component with a red border for validation errors.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent, type AutoCompleteValueChangeEvent } from '@primereact/ui/autocomplete';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function InvalidDemo() {
    const [items, setItems] = React.useState<string[]>([]);
    const [value, setValue] = React.useState<string | null>(null);
    const [value2, setValue2] = React.useState<string | null>(null);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <AutoComplete.Root
                options={items}
                onComplete={search}
                onValueChange={(e: AutoCompleteValueChangeEvent) => setValue(e.value as string)}
                className="w-full md:w-56"
            >
                <AutoComplete.Input as={InputText} invalid={!value} placeholder="Search" className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>

            <AutoComplete.Root
                options={items}
                onComplete={search}
                onValueChange={(e: AutoCompleteValueChangeEvent) => setValue2(e.value as string)}
                className="w-full md:w-56"
            >
                <AutoComplete.Input as={InputText} invalid={!value2} variant="filled" placeholder="Search" className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Popup>
                            <AutoComplete.List style={{ maxHeight: '14rem' }} />
                        </AutoComplete.Popup>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}

```

### Focus Behavior

Customize keyboard and mouse focus behavior with `autoOptionFocus`, `selectOnFocus`, and `focusOnHover` props.

```tsx
'use client';
import { AutoComplete, type AutoCompleteCompleteEvent } from '@primereact/ui/autocomplete';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function FocusBehaviorDemo() {
    const [items, setItems] = React.useState<string[]>([]);
    const [autoOptionFocus, setAutoOptionFocus] = React.useState(true);
    const [selectOnFocus, setSelectOnFocus] = React.useState(false);
    const [focusOnHover, setFocusOnHover] = React.useState(true);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
                <Button size="small" severity={autoOptionFocus ? 'primary' : 'secondary'} onClick={() => setAutoOptionFocus((prev) => !prev)}>
                    autoOptionFocus: {String(autoOptionFocus)}
                </Button>
                <Button size="small" severity={selectOnFocus ? 'primary' : 'secondary'} onClick={() => setSelectOnFocus((prev) => !prev)}>
                    selectOnFocus: {String(selectOnFocus)}
                </Button>
                <Button size="small" severity={focusOnHover ? 'primary' : 'secondary'} onClick={() => setFocusOnHover((prev) => !prev)}>
                    focusOnHover: {String(focusOnHover)}
                </Button>
            </div>

            <div className="flex justify-center">
                <AutoComplete.Root
                    options={items}
                    onComplete={search}
                    autoOptionFocus={autoOptionFocus}
                    selectOnFocus={selectOnFocus}
                    focusOnHover={focusOnHover}
                    className="w-full md:w-56"
                >
                    <AutoComplete.Input as={InputText} placeholder="Search a city..." className="w-full" />

                    <AutoComplete.Portal>
                        <AutoComplete.Positioner>
                            <AutoComplete.Popup>
                                <AutoComplete.List style={{ maxHeight: '14rem' }} />
                                <AutoComplete.Empty className="text-sm">No cities found</AutoComplete.Empty>
                            </AutoComplete.Popup>
                        </AutoComplete.Positioner>
                    </AutoComplete.Portal>
                </AutoComplete.Root>
            </div>
        </div>
    );
}

```

## Related

### Sub-Components

See [Primitive API](../../primitive/components/autocomplete.md#api) for `AutoCompleteRoot`, `AutoCompleteInput`, `AutoCompleteTrigger`, `AutoCompleteList`, `AutoCompleteOption`, and other component documentation.

### Hooks

See [Headless API](../../headless/components/autocomplete.md#api) for `useAutoComplete` hook documentation.

### Accessibility

See [AutoComplete Primitive](../../primitive/components/autocomplete.md#accessibility) for WAI-ARIA compliance details and keyboard support.

## Theming

### CSS Classes

List of class names used in the styled mode.

| ClassName | Description |
|:------|:------|
| p-autocomplete | Class name of the root element. |
| p-autocomplete-input | Class name of the input element. |
| p-autocomplete-clear-icon | Class name of the clear element. |
| p-autocomplete-arrow | Class name of the arrow element. |
| p-autocomplete-indicator | Class name of the indicator element. |
| p-autocomplete-dropdown | Class name of the trigger element. |
| p-autocomplete-list-container | Class name of the popup element. |
| p-autocomplete-list | Class name of the list element. |
| p-autocomplete-option | Class name of the option element. |
| p-autocomplete-option-indicator | Class name of the option indicator element. |
| p-autocomplete-label | Class name of the label element (non-editable mode). |
| p-autocomplete-empty-message | Class name of the empty message element. |

### Design Tokens

List of design tokens.

| Token | CSS Variable | Description |
|:------|:------|:------|
| autocomplete.background | --p-autocomplete-background | Background of root |
| autocomplete.disabled.background | --p-autocomplete-disabled-background | Disabled background of root |
| autocomplete.filled.background | --p-autocomplete-filled-background | Filled background of root |
| autocomplete.filled.hover.background | --p-autocomplete-filled-hover-background | Filled hover background of root |
| autocomplete.filled.focus.background | --p-autocomplete-filled-focus-background | Filled focus background of root |
| autocomplete.border.color | --p-autocomplete-border-color | Border color of root |
| autocomplete.hover.border.color | --p-autocomplete-hover-border-color | Hover border color of root |
| autocomplete.focus.border.color | --p-autocomplete-focus-border-color | Focus border color of root |
| autocomplete.invalid.border.color | --p-autocomplete-invalid-border-color | Invalid border color of root |
| autocomplete.color | --p-autocomplete-color | Color of root |
| autocomplete.disabled.color | --p-autocomplete-disabled-color | Disabled color of root |
| autocomplete.placeholder.color | --p-autocomplete-placeholder-color | Placeholder color of root |
| autocomplete.invalid.placeholder.color | --p-autocomplete-invalid-placeholder-color | Invalid placeholder color of root |
| autocomplete.shadow | --p-autocomplete-shadow | Shadow of root |
| autocomplete.padding.x | --p-autocomplete-padding-x | Padding x of root |
| autocomplete.padding.y | --p-autocomplete-padding-y | Padding y of root |
| autocomplete.border.radius | --p-autocomplete-border-radius | Border radius of root |
| autocomplete.focus.ring.width | --p-autocomplete-focus-ring-width | Focus ring width of root |
| autocomplete.focus.ring.style | --p-autocomplete-focus-ring-style | Focus ring style of root |
| autocomplete.focus.ring.color | --p-autocomplete-focus-ring-color | Focus ring color of root |
| autocomplete.focus.ring.offset | --p-autocomplete-focus-ring-offset | Focus ring offset of root |
| autocomplete.focus.ring.shadow | --p-autocomplete-focus-ring-shadow | Focus ring shadow of root |
| autocomplete.transition.duration | --p-autocomplete-transition-duration | Transition duration of root |
| autocomplete.overlay.background | --p-autocomplete-overlay-background | Background of overlay |
| autocomplete.overlay.border.color | --p-autocomplete-overlay-border-color | Border color of overlay |
| autocomplete.overlay.border.radius | --p-autocomplete-overlay-border-radius | Border radius of overlay |
| autocomplete.overlay.color | --p-autocomplete-overlay-color | Color of overlay |
| autocomplete.overlay.shadow | --p-autocomplete-overlay-shadow | Shadow of overlay |
| autocomplete.list.padding | --p-autocomplete-list-padding | Padding of list |
| autocomplete.list.gap | --p-autocomplete-list-gap | Gap of list |
| autocomplete.option.focus.background | --p-autocomplete-option-focus-background | Focus background of option |
| autocomplete.option.selected.background | --p-autocomplete-option-selected-background | Selected background of option |
| autocomplete.option.selected.focus.background | --p-autocomplete-option-selected-focus-background | Selected focus background of option |
| autocomplete.option.color | --p-autocomplete-option-color | Color of option |
| autocomplete.option.focus.color | --p-autocomplete-option-focus-color | Focus color of option |
| autocomplete.option.selected.color | --p-autocomplete-option-selected-color | Selected color of option |
| autocomplete.option.selected.focus.color | --p-autocomplete-option-selected-focus-color | Selected focus color of option |
| autocomplete.option.padding | --p-autocomplete-option-padding | Padding of option |
| autocomplete.option.border.radius | --p-autocomplete-option-border-radius | Border radius of option |
| autocomplete.option.font.weight | --p-autocomplete-option-font-weight | Font weight of option |
| autocomplete.option.font.size | --p-autocomplete-option-font-size | Font size of option |
| autocomplete.option.group.background | --p-autocomplete-option-group-background | Background of option group |
| autocomplete.option.group.color | --p-autocomplete-option-group-color | Color of option group |
| autocomplete.option.group.font.weight | --p-autocomplete-option-group-font-weight | Font weight of option group |
| autocomplete.option.group.font.size | --p-autocomplete-option-group-font-size | Font size of option group |
| autocomplete.option.group.padding | --p-autocomplete-option-group-padding | Padding of option group |
| autocomplete.dropdown.width | --p-autocomplete-dropdown-width | Width of dropdown |
| autocomplete.dropdown.sm.width | --p-autocomplete-dropdown-sm-width | Sm width of dropdown |
| autocomplete.dropdown.lg.width | --p-autocomplete-dropdown-lg-width | Lg width of dropdown |
| autocomplete.dropdown.border.color | --p-autocomplete-dropdown-border-color | Border color of dropdown |
| autocomplete.dropdown.hover.border.color | --p-autocomplete-dropdown-hover-border-color | Hover border color of dropdown |
| autocomplete.dropdown.active.border.color | --p-autocomplete-dropdown-active-border-color | Active border color of dropdown |
| autocomplete.dropdown.border.radius | --p-autocomplete-dropdown-border-radius | Border radius of dropdown |
| autocomplete.dropdown.focus.ring.width | --p-autocomplete-dropdown-focus-ring-width | Focus ring width of dropdown |
| autocomplete.dropdown.focus.ring.style | --p-autocomplete-dropdown-focus-ring-style | Focus ring style of dropdown |
| autocomplete.dropdown.focus.ring.color | --p-autocomplete-dropdown-focus-ring-color | Focus ring color of dropdown |
| autocomplete.dropdown.focus.ring.offset | --p-autocomplete-dropdown-focus-ring-offset | Focus ring offset of dropdown |
| autocomplete.dropdown.focus.ring.shadow | --p-autocomplete-dropdown-focus-ring-shadow | Focus ring shadow of dropdown |
| autocomplete.dropdown.background | --p-autocomplete-dropdown-background | Background of dropdown |
| autocomplete.dropdown.hover.background | --p-autocomplete-dropdown-hover-background | Hover background of dropdown |
| autocomplete.dropdown.active.background | --p-autocomplete-dropdown-active-background | Active background of dropdown |
| autocomplete.dropdown.color | --p-autocomplete-dropdown-color | Color of dropdown |
| autocomplete.dropdown.hover.color | --p-autocomplete-dropdown-hover-color | Hover color of dropdown |
| autocomplete.dropdown.active.color | --p-autocomplete-dropdown-active-color | Active color of dropdown |
| autocomplete.chip.border.radius | --p-autocomplete-chip-border-radius | Border radius of chip |
| autocomplete.chip.focus.background | --p-autocomplete-chip-focus-background | Focus background of chip |
| autocomplete.chip.focus.color | --p-autocomplete-chip-focus-color | Focus color of chip |
| autocomplete.empty.message.padding | --p-autocomplete-empty-message-padding | Padding of empty message |
