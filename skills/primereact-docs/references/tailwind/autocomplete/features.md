# AutoComplete

AutoComplete is an input component that provides real-time suggestions when being typed.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteEmpty,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompleteOption,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import { Label } from '@/components/ui/label';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
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
                <AutoComplete options={filtered} onComplete={search} className="w-full md:w-72 mt-2">
                    <AutoCompleteInput placeholder="Search..." className="w-full" />
                    <AutoCompletePortal>
                        <AutoCompletePositioner>
                            <AutoCompletePopup>
                                <AutoCompleteList>
                                    {filtered.map((item, index) => (
                                        <AutoCompleteOption key={item} index={index} uKey={item}>
                                            {item}
                                        </AutoCompleteOption>
                                    ))}
                                    <AutoCompleteEmpty className="text-sm">No results found</AutoCompleteEmpty>
                                </AutoCompleteList>
                            </AutoCompletePopup>
                        </AutoCompletePositioner>
                    </AutoCompletePortal>
                </AutoComplete>
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

## Installation

    Shadcn CLI
    Manual
```bash
npx shadcn@latest add @primereact/autocomplete
```
Copy and paste the following code into your project
Update the import paths to match your project setup.

## Usage

```tsx
import { AutoComplete, AutoCompleteInput, AutoCompleteList, AutoCompleteOption, AutoCompletePopup, AutoCompletePortal, AutoCompletePositioner } from '@/components/ui/autocomplete';
```

```tsx
<AutoComplete options={items} optionLabel="label" onComplete={search}>
    <AutoCompleteInput placeholder="Search..." />
    <AutoCompletePortal>
        <AutoCompletePositioner>
            <AutoCompletePopup>
                <AutoCompleteList>
                    {items.map((item, index) => (
                        <AutoCompleteOption key={index} index={index}>
                            {item.label}
                        </AutoCompleteOption>
                    ))}
                </AutoCompleteList>
            </AutoCompletePopup>
        </AutoCompletePositioner>
    </AutoCompletePortal>
</AutoComplete>
```

## Examples

### Basic

An input that filters and suggests options as the user types.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteEmpty,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompleteOption,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
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
            <AutoComplete options={filteredCommands} optionLabel="label" onComplete={search} className="w-full md:w-56">
                <AutoCompleteInput placeholder="Type a command..." className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList>
                                {filteredCommands.map((cmd, index) => (
                                    <AutoCompleteOption key={cmd.label} index={index} uKey={cmd.label}>
                                        <div className="flex items-center justify-between w-full">
                                            <span>{cmd.label}</span>
                                            <kbd className="inline-flex items-center justify-center min-w-8 px-1.5 py-0.5 text-xs font-medium rounded bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 border border-surface-200 dark:border-surface-600">
                                                {cmd.shortcut}
                                            </kbd>
                                        </div>
                                    </AutoCompleteOption>
                                ))}
                                <AutoCompleteEmpty className="text-sm">No commands found</AutoCompleteEmpty>
                            </AutoCompleteList>
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Sizes

Use the `size` property to change the size of an autocomplete.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import * as React from 'react';

export default function SizesDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <AutoComplete options={items} onComplete={search}>
                <AutoCompleteInput size="small" placeholder="Small" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>

            <AutoComplete options={items} onComplete={search}>
                <AutoCompleteInput placeholder="Normal" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>

            <AutoComplete options={items} onComplete={search}>
                <AutoCompleteInput size="large" placeholder="Large" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Filled

Specify the `variant="filled"` property to display the component with a higher visual emphasis than the default outlined style.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import * as React from 'react';

export default function FilledDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <AutoComplete options={items} onComplete={search} className="w-full md:w-56">
                <AutoCompleteInput className="w-full" variant="filled" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Disabled

Use the `disabled` property to disable an autocomplete.

```tsx
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <AutoComplete options={[]} disabled className="w-full md:w-56">
                <AutoCompleteInput className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Invalid

Specify the `invalid` property to display the component with a red border for validation errors.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent, AutoCompleteValueChangeEvent } from 'primereact/autocomplete';
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
            <AutoComplete
                options={items}
                onComplete={search}
                onValueChange={(e: AutoCompleteValueChangeEvent) => setValue(e.value as string)}
                className="w-full md:w-56"
                invalid={!value}
            >
                <AutoCompleteInput placeholder="Search" className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>

            <AutoComplete
                options={items}
                onComplete={search}
                onValueChange={(e: AutoCompleteValueChangeEvent) => setValue2(e.value as string)}
                className="w-full md:w-56"
                invalid={!value2}
            >
                <AutoCompleteInput variant="filled" placeholder="Search" className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Trigger

Use `AutoComplete.Trigger` inside the root to display a trigger toggle button that opens the suggestion list.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner,
    AutoCompleteTrigger
} from '@/components/ui/autocomplete';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import * as React from 'react';

export default function TriggerDemo() {
    const [items, setItems] = React.useState<string[] | number[]>([...Array(10).keys()]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems(event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : [...Array(10).keys()]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete options={items} onComplete={search}>
                <InputGroup>
                    <AutoCompleteInput />
                    <InputGroupAddon>
                        <AutoCompleteTrigger />
                    </InputGroupAddon>
                </InputGroup>

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Chips

Use `AutoComplete.Input` with `AutoComplete.Value` inside `AutoComplete.Trigger` to compose a chip-based tag input. Selected items are displayed as removable chips inside the value area while the input remains editable for searching.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteEmpty,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import { Chip, ChipLabel, ChipRemove } from '@/components/ui/chip';
import { Times } from '@primeicons/react';
import {
    AutoComplete as PRAutoComplete,
    AutoCompleteValue,
    type AutoCompleteCompleteEvent,
    type AutoCompleteInputValueChangeEvent,
    type AutoCompleteRootInstance,
    type AutoCompleteValueChangeEvent
} from 'primereact/autocomplete';
import type { ChipRootRemoveEvent } from 'primereact/chip';
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
            <AutoComplete
                ref={autoCompleteRef}
                options={items}
                onComplete={search}
                value={null}
                inputValue={inputValue}
                onValueChange={onValueChange}
                onInputValueChange={onInputValueChange}
                className="w-full rounded-md border border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-950 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] focus-within:border-primary! transition-colors duration-200 p-1"
            >
                <PRAutoComplete.Trigger as="div" className="flex flex-wrap gap-1 items-center">
                    <AutoCompleteValue placeholder="Add a tag...">
                        <div className="flex flex-wrap gap-1 items-center">
                            {selectedTags?.map((tag) => (
                                <Chip key={tag} className="py-0.5" onRemove={(e: ChipRootRemoveEvent) => removeTag(e, tag)}>
                                    <ChipLabel className="text-xs">{tag}</ChipLabel>
                                    <ChipRemove>
                                        <Times className="text-[0.5rem]!" />
                                    </ChipRemove>
                                </Chip>
                            ))}

                            <PRAutoComplete.Input
                                placeholder="Search..."
                                className="text-sm px-2 py-0.5 outline-none border-none bg-transparent flex-1 min-w-20 text-surface-700 dark:text-surface-0 placeholder:text-surface-500 dark:placeholder:text-surface-400"
                                onKeyDown={onInputKeyDown}
                            />
                        </div>
                    </AutoCompleteValue>
                </PRAutoComplete.Trigger>

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                            <AutoCompleteEmpty className="text-sm">No commands found</AutoCompleteEmpty>
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Clear

Use `AutoComplete.Clear` inside the root to display a clear button that resets the input value.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteClear,
    AutoCompleteEmpty,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompleteOption,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import { IconField, IconFieldInset } from '@/components/ui/iconfield';
import { Tag } from '@/components/ui/tag';
import { Times } from '@primeicons/react';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
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
            <AutoComplete options={filteredCategories} optionLabel="label" onComplete={search} className="w-full md:w-56">
                <IconField className="w-full">
                    <AutoCompleteInput placeholder="Search categories..." />
                    <IconFieldInset>
                        <AutoCompleteClear>
                            <Times />
                        </AutoCompleteClear>
                    </IconFieldInset>
                </IconField>

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList>
                                {filteredCategories.map((cat, index) => (
                                    <AutoCompleteOption key={cat.value} index={index} uKey={cat.value}>
                                        <div className="flex items-center justify-between w-full">
                                            <span>{cat.label}</span>
                                            <Tag severity="secondary" rounded>
                                                {cat.count}
                                            </Tag>
                                        </div>
                                    </AutoCompleteOption>
                                ))}
                                <AutoCompleteEmpty className="text-sm">No categories found</AutoCompleteEmpty>
                            </AutoCompleteList>
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Custom Option

Customize option content using a render function inside `AutoComplete.Option` that receives the option instance including the `selected` state.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteEmpty,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompleteOption,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent, AutoCompleteOptionInstance } from 'primereact/autocomplete';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
            <AutoComplete options={filteredMembers} optionLabel="name" onComplete={search} className="w-full md:w-56">
                <AutoCompleteInput placeholder="Search team members..." className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList>
                                {filteredMembers.map((member, index) => (
                                    <AutoCompleteOption key={member.id} index={index} uKey={String(member.id)}>
                                        {(instance: AutoCompleteOptionInstance) => {
                                            const { selected } = instance;

                                            return (
                                                <div className="flex items-center gap-3 py-1">
                                                    <div className="relative">
                                                        <Avatar shape="circle" className="w-8 h-8">
                                                            <AvatarFallback>{member.avatar}</AvatarFallback>
                                                        </Avatar>
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
                                    </AutoCompleteOption>
                                ))}
                                <AutoCompleteEmpty className="text-sm">No members found</AutoCompleteEmpty>
                            </AutoCompleteList>
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Force Selection

Use the `forceSelection` property to validate manual input against the suggestions list. If no match is found, the input value is cleared to ensure the value is always from the suggestion list.

```tsx
'use client';
import { CountryService } from '@/shared/services/country.service';
import {
    AutoComplete,
    AutoCompleteEmpty,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
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
            <AutoComplete
                options={filteredCountries}
                optionKey="code"
                optionLabel="name"
                forceSelection
                onComplete={search}
                className="w-full md:w-56"
            >
                <AutoCompleteInput className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                            <AutoCompleteEmpty className="text-sm">No countries found</AutoCompleteEmpty>
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Group

#### Simple

Options can be grouped using the `optionGroupLabel` and `optionGroupChildren` properties.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteEmpty,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
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
            <AutoComplete
                options={filteredTech}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                onComplete={search}
                className="w-full md:w-56"
            >
                <AutoCompleteInput placeholder="Search technologies..." className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                            <AutoCompleteEmpty className="text-sm">No option found</AutoCompleteEmpty>
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

#### Custom

Customize group headers with custom rendering by accessing the list instance inside `AutoComplete.List`.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteEmpty,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompleteOption,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import type { ListboxListInstance } from 'primereact/listbox';
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
            <AutoComplete
                options={filteredCities}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                onComplete={search}
                className="w-full md:w-56"
            >
                <AutoCompleteInput placeholder="Search a city..." className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList className="p-0">
                                {(instance: ListboxListInstance) => {
                                    const { listbox, options } = instance;

                                    return (options as unknown[])?.map((option: unknown, index: number) => {
                                        const isGroup = listbox?.isOptionGroup(option);

                                        if (isGroup) {
                                            const optionGroup = (option as Record<string, unknown>).optionGroup as Record<string, string>;
                                            const code = optionGroup?.code;

                                            return (
                                                <AutoCompleteOption
                                                    key={index}
                                                    index={index}
                                                    group
                                                    className="flex items-center gap-2 sticky top-0 z-1 bg-surface-0 dark:bg-surface-900 border-b border-surface"
                                                >
                                                    <span>{countryFlags[code]}</span>
                                                    <span>{optionGroup?.label}</span>
                                                </AutoCompleteOption>
                                            );
                                        }

                                        const label = listbox?.getOptionLabel(option);

                                        return (
                                            <AutoCompleteOption key={index} index={index}>
                                                {label}
                                            </AutoCompleteOption>
                                        );
                                    });
                                }}
                            </AutoCompleteList>
                            <AutoCompleteEmpty className="text-sm">No cities found</AutoCompleteEmpty>
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Arrow

Use `AutoComplete.Arrow` inside the popup to display an arrow pointing to the trigger element. Set `sideOffset` on `AutoComplete.Positioner` for spacing.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteArrow,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import * as React from 'react';

export default function ArrowDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <AutoComplete options={items} onComplete={search} className="w-full md:w-56">
                <AutoCompleteInput placeholder="Search" className="w-full" />

                <AutoCompletePortal>
                    <AutoCompletePositioner sideOffset={12}>
                        <AutoCompletePopup>
                            <AutoCompleteArrow />
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Fluid

Use the `fluid` property to make the autocomplete take up the full width of its container.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import * as React from 'react';

export default function FluidDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div>
            <AutoComplete options={items} onComplete={search} fluid>
                <AutoCompleteInput />

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Loading

Compose a loading indicator alongside the autocomplete input using `InputGroup` to display an async loading state.

```tsx
'use client';
import { Spinner } from '@primeicons/react';
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { InputGroup, InputGroupAddon } from '@/components/ui/inputgroup';
import * as React from 'react';

export default function LoadingDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <AutoComplete options={items} onComplete={search} className="w-full md:w-56">
                <InputGroup>
                    <AutoCompleteInput className="w-full" />
                    <InputGroupAddon>
                        <Spinner className="animate-spin" />
                    </InputGroupAddon>
                </InputGroup>

                <AutoCompletePortal>
                    <AutoCompletePositioner>
                        <AutoCompletePopup>
                            <AutoCompleteList />
                        </AutoCompletePopup>
                    </AutoCompletePositioner>
                </AutoCompletePortal>
            </AutoComplete>
        </div>
    );
}
```

### Focus Behavior

Customize keyboard and mouse focus behavior with `autoOptionFocus`, `selectOnFocus`, and `focusOnHover` props.

```tsx
'use client';
import {
    AutoComplete,
    AutoCompleteEmpty,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompletePopup,
    AutoCompletePortal,
    AutoCompletePositioner
} from '@/components/ui/autocomplete';
import { Button } from '@/components/ui/button';
import type { AutoCompleteCompleteEvent } from 'primereact/autocomplete';
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
                <Button size="small" severity={autoOptionFocus ? undefined : 'secondary'} onClick={() => setAutoOptionFocus((prev) => !prev)}>
                    autoOptionFocus: {String(autoOptionFocus)}
                </Button>
                <Button size="small" severity={selectOnFocus ? undefined : 'secondary'} onClick={() => setSelectOnFocus((prev) => !prev)}>
                    selectOnFocus: {String(selectOnFocus)}
                </Button>
                <Button size="small" severity={focusOnHover ? undefined : 'secondary'} onClick={() => setFocusOnHover((prev) => !prev)}>
                    focusOnHover: {String(focusOnHover)}
                </Button>
            </div>

            <div className="flex justify-center">
                <AutoComplete
                    options={items}
                    onComplete={search}
                    autoOptionFocus={autoOptionFocus}
                    selectOnFocus={selectOnFocus}
                    focusOnHover={focusOnHover}
                    className="w-full md:w-56"
                >
                    <AutoCompleteInput placeholder="Search a city..." className="w-full" />

                    <AutoCompletePortal>
                        <AutoCompletePositioner>
                            <AutoCompletePopup>
                                <AutoCompleteList />
                                <AutoCompleteEmpty className="text-sm">No cities found</AutoCompleteEmpty>
                            </AutoCompletePopup>
                        </AutoCompletePositioner>
                    </AutoCompletePortal>
                </AutoComplete>
            </div>
        </div>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/autocomplete/features.md#api) for `AutoCompleteRoot`, `AutoCompleteInput`, `AutoCompleteTrigger`, `AutoCompleteList`, `AutoCompleteOption`, and other component documentation.

### Hooks

See [Headless API](../../headless/autocomplete/features.md#api) for `useAutoComplete` hook documentation.

## Accessibility

See [AutoComplete Primitive](../../primitive/autocomplete/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
