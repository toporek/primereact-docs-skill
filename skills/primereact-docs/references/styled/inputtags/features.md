# InputTags

InputTags groups a collection of contents in items.

```tsx
'use client';
import { InputTags } from '@primereact/ui/inputtags';
import { Label } from '@primereact/ui/label';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import * as React from 'react';

export default function Preview() {
    const [tags, setTags] = React.useState<string[]>(['React', 'JavaScript', 'Vue', 'Angular']);

    return (
        <div className="max-w-3xs mx-auto flex flex-col">
            <Label className="mb-2">Frameworks</Label>
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
                <InputTags.Items />
                <InputTags.Input />
            </InputTags.Root>
        </div>
    );
}
```

## Usage

```tsx
import { InputTags } from '@primereact/ui/inputtags';
```

```tsx
<InputTags.Root>
    <InputTags.Items>
        <InputTags.Item>
            <InputTags.Label />
            <InputTags.Remove />
        </InputTags.Item>
    </InputTags.Items>
    <InputTags.Input />
</InputTags.Root>
```

## Examples

### Basic

Allows entering multiple values as removable tags.

```tsx
'use client';
import { InputTags } from '@primereact/ui/inputtags';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import * as React from 'react';

export default function BasicDemo() {
    const [tags, setTags] = React.useState<string[]>(['React']);

    return (
        <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

### Delimiter

A new tag is added when `enter` key is pressed, `delimiter` property allows defining an additional key. Currently only valid value is `,` to create a new item when comma key is pressed.

```tsx
'use client';
import { InputTags } from '@primereact/ui/inputtags';

export default function DelimiterDemo() {
    return (
        <InputTags.Root delimiter=",">
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

### Allow Duplicate

When `allowDuplicate` is enabled, the same value can be added multiple times as separate tags.

```tsx
'use client';
import { InputTags } from '@primereact/ui/inputtags';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import * as React from 'react';

export default function AllowDuplicateDemo() {
    const [tags, setTags] = React.useState<string[]>(['a', 'A', 'a']);

    return (
        <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])} allowDuplicate>
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

### No Duplicate

By default, duplicate values are not allowed. Attempting to add an existing tag value will be ignored.

```tsx
'use client';
import { InputTags } from '@primereact/ui/inputtags';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import * as React from 'react';

export default function NoDuplicateDemo() {
    const [tags, setTags] = React.useState<string[]>(['a', 'A']);

    return (
        <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

### Max

The `max` property limits the number of tags that can be added. Once the limit is reached, no more tags can be entered.

```tsx
'use client';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import { InputTags } from '@primereact/ui/inputtags';
import * as React from 'react';

export default function MaxDemo() {
    const [tags, setTags] = React.useState<string[]>(['React']);

    return (
        <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])} max={5}>
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

### Item

The `InputTags.Root` component accepts a render function that provides access to the component instance, allowing full customization of tags, input field, and additional UI elements. The remove actions can be implemented with `onItemRemoveClick` and `onRemoveAllItems`, or components can be wrapped with additional functionality.

```tsx
'use client';
import { Times, TimesCircle } from '@primeicons/react';
import { InputTagsRootInstance, InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import { IconField } from '@primereact/ui/iconfield';
import { InputTags } from '@primereact/ui/inputtags';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

export default function ItemDemo() {
    const [tags, setTags] = React.useState<string[]>(['JavaScript', 'TypeScript']);

    return (
        <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
            {(instance: InputTagsRootInstance) => {
                return (
                    <>
                        {instance?.state.value.map((value, index) => (
                            <Tag key={`${value}_${index}`}>
                                {value}
                                <Times size={12} className="cursor-pointer ml-2" onClick={() => instance?.onItemRemoveClick(index)} />
                            </Tag>
                        ))}
                        <IconField.Root className="static">
                            <InputTags.Input />
                            <IconField.Inset>
                                <TimesCircle size={16} className="cursor-pointer" onClick={() => instance?.onRemoveAllItems()} />
                            </IconField.Inset>
                        </IconField.Root>
                    </>
                );
            }}
        </InputTags.Root>
    );
}
```

### Typeahead

InputTags can be combined with typeahead functionality to provide suggestions as users type. Define an `options` array along with `optionLabel` to specify the display field. For grouped suggestions, use `optionGroupLabel` and `optionGroupChildren` properties. The `onComplete` callback is triggered on input change, enabling dynamic filtering and updating of suggestions.

```tsx
'use client';
import { InputTags, type InputTagsRootCompleteEvent, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
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
            { label: 'Svelte', value: 'svelte' },
            { label: 'Next.js', value: 'nextjs' },
            { label: 'Nuxt', value: 'nuxt' }
        ]
    },
    {
        label: 'Backend',
        code: 'BE',
        items: [
            { label: 'Node.js', value: 'nodejs' },
            { label: 'Python', value: 'python' },
            { label: 'Java', value: 'java' },
            { label: 'Go', value: 'go' },
            { label: 'Rust', value: 'rust' }
        ]
    },
    {
        label: 'Database',
        code: 'DB',
        items: [
            { label: 'PostgreSQL', value: 'postgresql' },
            { label: 'MongoDB', value: 'mongodb' },
            { label: 'Redis', value: 'redis' },
            { label: 'MySQL', value: 'mysql' },
            { label: 'SQLite', value: 'sqlite' }
        ]
    }
];

const filterItems = (items: Technology[], query: string, selectedLabels: string[]): Technology[] => {
    const normalizedQuery = query.toLowerCase();

    return items.filter((item) => item.label.toLowerCase().includes(normalizedQuery) && !selectedLabels.includes(item.label));
};

export default function TypeaheadDemo() {
    const [skills, setSkills] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState('');

    const filteredTech = React.useMemo(() => {
        const _filteredTech: TechCategory[] = [];

        for (const category of techStack) {
            const filteredItems = filterItems(category.items, query, skills);

            if (filteredItems.length) {
                _filteredTech.push({ ...category, items: filteredItems });
            }
        }

        return _filteredTech;
    }, [query, skills]);

    return (
        <div className="flex justify-center">
            <InputTags.Root
                value={skills}
                options={filteredTech}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                onValueChange={(e: InputTagsRootValueChangeEvent) => setSkills(e.value ?? [])}
                onComplete={(e: InputTagsRootCompleteEvent) => setQuery(e.query)}
                className="w-full md:w-56"
            >
                <InputTags.Items />
                <InputTags.Input placeholder="Search technologies..." />
                <InputTags.Portal>
                    <InputTags.Positioner sideOffset={8}>
                        <InputTags.Popup>
                            <InputTags.List style={{ maxHeight: '14rem' }} />
                        </InputTags.Popup>
                    </InputTags.Positioner>
                </InputTags.Portal>
            </InputTags.Root>
        </div>
    );
}
```

### Events

The `onAdd` and `onRemove` callbacks are triggered when tags are added or removed, providing the tag value and index for custom handling like logging, analytics or validation.

```tsx
'use client';
import { Tag } from '@primeicons/react';
import { InputTags, type InputTagsRootAddEvent, type InputTagsRootRemoveEvent, type InputTagsRootValueChangeEvent } from '@primereact/ui/inputtags';
import * as React from 'react';

export default function EventsDemo() {
    const [tags, setTags] = React.useState<string[]>([]);
    const [log, setLog] = React.useState<string[]>([]);

    const onAdd = (e: InputTagsRootAddEvent) => {
        setLog((prev) => [`Added: "${e.value}"`, ...prev].slice(0, 5));
    };

    const onRemove = (e: InputTagsRootRemoveEvent) => {
        setLog((prev) => [`Removed: "${e.value}" at index ${e.index}`, ...prev].slice(0, 5));
    };

    return (
        <div className="flex flex-col gap-4">
            <InputTags.Root
                value={tags}
                onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}
                onAdd={onAdd}
                onRemove={onRemove}
            >
                <InputTags.Items />
                <InputTags.Input placeholder="Add tags and watch the event log..." />
            </InputTags.Root>
            {log.length > 0 && (
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-surface-500 dark:text-surface-400 flex items-center gap-2">
                        <Tag size={14} />
                        Event Log
                    </span>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                        {log.map((entry, i) => (
                            <li key={`${entry}_${i}`} className="text-sm text-surface-600 dark:text-surface-300 font-mono">
                                {entry}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
```

### Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default `outlined` style.

```tsx
'use client';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import { InputTags } from '@primereact/ui/inputtags';
import * as React from 'react';

export default function FilledDemo() {
    const [tags, setTags] = React.useState<string[]>(['React']);

    return (
        <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])} variant="filled">
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

### Float Label

A floating label is displayed when the input is focused or filled.

```tsx
'use client';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputTags } from '@primereact/ui/inputtags';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [tags, setTags] = React.useState<string[]>([]);

    return (
        <FloatLabel>
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
                <InputTags.Items />
                <InputTags.Input />
            </InputTags.Root>
            <Label htmlFor="over_label">Technologies</Label>
        </FloatLabel>
    );
}
```

### Invalid

Invalid state is displayed using the `invalid` prop to indicate a failed validation. This style is useful when integrating with form validation libraries.

```tsx
'use client';
import { InputTagsRootValueChangeEvent } from 'primereact/inputtags';
import { InputTags } from '@primereact/ui/inputtags';
import * as React from 'react';

export default function InvalidDemo() {
    const [tags, setTags] = React.useState<string[]>([]);

    return (
        <InputTags.Root value={tags} invalid={tags.length === 0} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

### Disabled

When `disabled` is present, the element cannot be edited and focused.

```tsx
'use client';
import { InputTags } from '@primereact/ui/inputtags';

export default function DisabledDemo() {
    return (
        <InputTags.Root defaultValue={['React']} disabled>
            <InputTags.Items />
            <InputTags.Input />
        </InputTags.Root>
    );
}
```

## API

### Sub-Components

See [Primitive API](../../primitive/inputtags/features.md#api) for `InputTagsRoot`, `InputTagsItems`, `InputTagsItem`, `InputTagsInput`, and other component documentation.

### Hooks

See [Headless API](../../headless/inputtags/features.md#api) for `useInputTags` hook documentation.

## Accessibility

See [InputTags Primitive](../../primitive/inputtags/features.md#accessibility) for WAI-ARIA compliance details and keyboard support.
